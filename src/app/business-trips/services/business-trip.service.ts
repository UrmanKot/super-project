import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {BusinessTrip, BusinessTripPaginated} from '../models/business-trip';
import {BusinessTripLocationTypes} from '../enums/business-trip-location-status.enum';
import {ExpensesSum} from '../models/expenses-sum';
import {map} from 'rxjs/operators';
import {UploadedDataViewerComponent} from '../modals/uploaded-data-viewer/uploaded-data-viewer.component';
import {CreateBusinessTripComponent} from '../modals/create-business-trip/create-business-trip.component';
import {TakePhotoModalComponent} from '../modals/take-photo-modal/take-photo-modal.component';
import {DataToSend} from '../components/edit-business-trip/edit-business-trip.component';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import {AdapterService} from '@shared/services/adapter.service';
import {DatePipe, formatDate} from '@angular/common';
import {BusinessTripLocation} from '../models/business-trip-location';
import {BusinessTripHotel} from '../models/business-trip-hotel';
import {BusinessTripExpensesType} from '../enums/business-trip-expenses-type';
import {Currency} from '@shared/models/currency';
import {BusinessTripVehicleType} from '../enums/business-trip-vehicle-type';

const SPACE_BETWEEN = 4;

@Injectable({
  providedIn: 'root'
})
export class BusinessTripService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips/';
  totalIndex = 1;
  totalDisplayedRows = 1;

  constructor(
    private httpClient: HttpClient, public dialog: MatDialog,
    private adapterService: AdapterService
    ) {
  }

  get(query?: QuerySearch[]): Observable<BusinessTripPaginated> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient
      .get<{ data: BusinessTripPaginated }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getAll(query?: QuerySearch[]): Observable<BusinessTrip[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient
      .get<{ data: BusinessTrip[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getDetailed(id: number): Observable<BusinessTrip> {
    return this.httpClient
      .get<{ data: BusinessTrip }>(this.API_URL + this.url + id + '/detailed_business_trip/')
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  updateHotelInfo(id: number, hotelData: BusinessTripHotel): Observable<BusinessTrip> {
    return this.httpClient
      .post<{ data: BusinessTrip }>(this.API_URL + this.url + id + '/edit_business_trip_hotel/', hotelData)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  updateBusinessTripEmployee(id: number, hotelData: DataToSend): Observable<BusinessTrip> {
    return this.httpClient
      .post<{ data: BusinessTrip }>(this.API_URL + this.url + id + '/update_business_trip_employee/', hotelData)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  updateBusinessTripVehicle(id: number, hotelData: DataToSend): Observable<BusinessTrip> {
    return this.httpClient
      .post<{ data: BusinessTrip }>(this.API_URL + this.url + id + '/update_business_trip_vehicle/', hotelData)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(entity) {
    return this.httpClient
      .post<{ data: BusinessTrip }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity) {
    return this.httpClient.patch<{ data: BusinessTrip }>(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: BusinessTrip) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }

  download_hotel_file(id: number) {
    return this.httpClient.get(this.API_URL + 'hotel_file_download/' + id, {responseType: 'blob'})
      .pipe(map(response => {
        return response;
      }));
  }

  download_expense_file(id: number) {
    return this.httpClient.get(this.API_URL + 'expense_file_download/' + id, {responseType: 'blob'})
      .pipe(map(response => {
        return response;
      }));
  }

  async exportToExcel(businessTripData: DataToSend, expensesSum: ExpensesSum[]) {
    // Создаем книгу Excel
    const workbook = new Excel.Workbook();
    let worksheet: any;

    // Создаем лист Excel
    worksheet = workbook.addWorksheet('Business Trip');
    this.totalIndex = 1;
    this.totalDisplayedRows = 1;

    worksheet.columns = [
      {header: '#', key: 'index', width: 10},
      {header: 'Field', key: 'firstCol', width: 40},
      {header: 'Value', key: 'secondCol', width: 40},
      {header: '', key: 'thirdCol', width: 40},
      {header: '', key: 'fourthCol', width: 40},
      {header: '', key: 'fifthCol', width: 40},
      {header: '', key: 'sixthCol', width: 40},
    ];

    const cols = 7;
    // Задаем форматирование
    let idx = 1;
    while (idx <= cols) {
      worksheet.getColumn(idx).alignment = {vertical: 'middle', horizontal: 'center'};
      worksheet.getColumn(idx).font = {
        name: 'Calibri',
        size: 12,
      };
      idx++;
    }
    worksheet = this.makeHeader(worksheet);

    worksheet.addRow({
      index: this.totalDisplayedRows,
      firstCol: 'Employee',
      secondCol: businessTripData.full_employee.first_name +
      ' ' + businessTripData.full_employee.last_name +
      (businessTripData.fullPosition ? ' (' + businessTripData.fullPosition.title + ')' : '')
    });
    this.totalIndex++;
    this.totalDisplayedRows++;
    worksheet = this.makeGap(worksheet, 1);

    if (businessTripData.trip_start || businessTripData.trip_end) {
      // Trip Dates
      const test = formatDate(businessTripData.trip_start, 'dd/mm/yyyy', 'en');
      const start = businessTripData.trip_start ?
        formatDate(businessTripData.trip_start, 'dd/MM/yyyy HH:mm', 'en')
        : '-';
      const end = businessTripData.trip_end ?
        formatDate(businessTripData.trip_end, 'dd/MM/yyyy HH:mm', 'en')
         : '-';
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Trip Start - End',
        secondCol: start + '  -  ' + end
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    worksheet = this.makeGap(worksheet, 1);
    // Locations
    const startLocation = businessTripData.locations.find(location => location.type === BusinessTripLocationTypes.FIRST);
    const lastLocation = businessTripData.locations.find(location => location.type === BusinessTripLocationTypes.LAST);
    const intermediateLocations = businessTripData.locations.filter(location => location.type === BusinessTripLocationTypes.INTERMEDIATE);
    if (startLocation) {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Starting point',
        secondCol: startLocation.fullCountry.name + ', ' + startLocation.address
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    if (lastLocation) {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Arrival point',
        secondCol: lastLocation.fullCountry.name + ', ' + lastLocation.address
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
      lastLocation.location_meetings.forEach((meeting, meetingIndex) => {
        worksheet.addRow({
          index: this.totalDisplayedRows,
          firstCol: 'Meeting Company ' + (meetingIndex + 1),
          secondCol: meeting.fullCompany.name
        });
        meeting.fullContacts.forEach((person, personIndex) => {
          worksheet.addRow({
            index: this.totalDisplayedRows,
            firstCol: 'Company Contact Person ' + (personIndex + 1),
            secondCol: person.first_name + ' ' + person.last_name
          });
          this.totalIndex++;
          this.totalDisplayedRows++;
        });

        this.totalIndex++;
        this.totalDisplayedRows++;
        worksheet = this.makeGap(worksheet, 1);
      });
    }

    worksheet = this.makeGap(worksheet, 2);
    intermediateLocations.forEach((location, index) => {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Intermediate point ' + (index + 1),
        secondCol: location.fullCountry.name + ', ' + location.address
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
      location.location_meetings.forEach((meeting, meetingIndex) => {
        worksheet.addRow({
          index: this.totalDisplayedRows,
          firstCol: 'Meeting Company ' + (meetingIndex + 1),
          secondCol: meeting.fullCompany.name
        });
        meeting.fullContacts.forEach((person, personIndex) => {
          worksheet.addRow({
            index: this.totalDisplayedRows,
            firstCol: 'Company Contact Person ' + (personIndex + 1),
            secondCol: person.first_name + ' ' + person.last_name
          });
          this.totalIndex++;
          this.totalDisplayedRows++;
        });

        this.totalIndex++;
        this.totalDisplayedRows++;
        worksheet = this.makeGap(worksheet, 1);
      });
      worksheet = this.makeGap(worksheet, 2);
    });

    if (businessTripData.purpose_short) {
      worksheet = this.makeGap(worksheet, 1);
      // Purpose fields
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Purpose short',
        secondCol: businessTripData.purpose_short
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    if (businessTripData.purpose_full) {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Purpose Description',
        secondCol: businessTripData.purpose_full
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    if (businessTripData.hotels.length > 0) {
      businessTripData.hotels.forEach(hotel => {
        worksheet = this.makeGap(worksheet, 1);
        // Hotel
        // if (businessTripData.hotel) {
          worksheet.addRow({
            index: this.totalDisplayedRows,
            firstCol: 'Hotel Name',
            secondCol: hotel.name
          });
          this.totalIndex++;
          this.totalDisplayedRows++;

          if (hotel.fullCountry) {
            worksheet.addRow({
              index: this.totalDisplayedRows,
              firstCol: 'Hotel Address',
              secondCol: hotel.fullCountry.name + ', ' + hotel.address
            });
            this.totalIndex++;
            this.totalDisplayedRows++;
          }

          const start = hotel.residence_start ?
            formatDate(hotel.residence_start, 'dd/MM/yyyy', 'en') : '-';
          const end = hotel.residence_end ?
            formatDate(hotel.residence_end, 'dd/MM/yyyy', 'en') : '-';
          worksheet.addRow({
            index: this.totalDisplayedRows,
            firstCol: 'Hotel Residence start/end',
            secondCol: start + '  -  ' + end
          });
          this.totalIndex++;
          this.totalDisplayedRows++;
          worksheet = this.makeGap(worksheet, 1);
        // }
      });
    }

    // Vehicle
    if (businessTripData.fullVehicle) {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Vehicle Details',
        secondCol: ''
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
      let type = '';
      if (businessTripData.vehicle_type === BusinessTripVehicleType.PRIVATE) {
        type = 'Private';
      }
      if (businessTripData.vehicle_type === BusinessTripVehicleType.RENT) {
        type = 'Rent';
      }
      if (businessTripData.vehicle_type === BusinessTripVehicleType.COMPANY_CAR) {
        type = 'Company Car';
      }
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Type',
        secondCol: type
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
      const vehicle = businessTripData.fullVehicle;
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Model (number)',
        secondCol: vehicle.model + ' (' + vehicle.number + ')'
      });
      this.totalIndex++;
      this.totalDisplayedRows++;

      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Mileage start - end',
        secondCol: businessTripData.start_mileage + '  -  ' + businessTripData.end_mileage
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }
    if (businessTripData.fullInitiator) {
      worksheet = this.makeGap(worksheet, 1);
      // Initiator
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Initiator',
        secondCol: businessTripData.fullInitiator.first_name + ' ' + businessTripData.fullInitiator.last_name
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    // Gap
    worksheet = this.makeGap(worksheet);

    const ownEvidences = businessTripData.expenses
      .filter(expense => expense.type === BusinessTripExpensesType.OWN &&
              expense.is_verified === true);

    if (ownEvidences.length > 0) {
      // Expenses
      worksheet.addRow({
        index: '',
        firstCol: 'OWN EVIDENCES',
        secondCol: '',
        thirdCol: '',
        fourthCol: '',
        fifthCol: '',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);
      worksheet.addRow({
        index: '#',
        firstCol: 'Evidence Name',
        secondCol: 'Evidence Description',
        thirdCol: 'Evidence Sum',
        fourthCol: 'Evidence Currency',
        fifthCol: 'Evidence Status',
        sixthCol: 'Evidence Type',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);

      ownEvidences.forEach((expense, index) => {
        worksheet.addRow({
          index: (index + 1),
          firstCol: expense.fullExpense.name,
          secondCol: expense.fullExpense.description,
          thirdCol: expense.sum,
          fourthCol: expense.currency,
          fifthCol: expense.is_verified ? 'Verified' : 'Need Verification',
          sixthCol: 'Own Evidence',
        });
        this.totalIndex++;
      });
      this.makeGap(worksheet, 1);
      const ownSum: {currency: string | Currency, amount: number }[] = [];
      ownEvidences.forEach(expense => {
        const sumForCurrency = ownSum.find(evidence => evidence.currency === expense.currency);
        if (sumForCurrency) {
          sumForCurrency.amount += +expense.sum;
        } else {
          ownSum.push({
            currency: expense.currency,
            amount: +expense.sum
          });
        }
      });

      if (ownSum.length > 0) {
        // Expenses Sum
        worksheet.addRow({
          index: '',
          firstCol: '',
          secondCol: '',
          thirdCol: 'Total Sum (Verified)',
          fourthCol: 'Total Currency (Verified)',
          fifthCol: '',
        });
        this.totalIndex++;
        worksheet = this.makeHeader(worksheet);

        ownSum.forEach(expenseSum => {
          worksheet.addRow({
            index: '',
            firstCol: '',
            secondCol: '',
            thirdCol: expenseSum.amount,
            fourthCol: expenseSum.currency,
            fifthCol: '',
          });
          this.totalIndex++;
        });
        this.makeGap(worksheet, 3);
      }
    }

    const corporateEvidences = businessTripData.expenses
      .filter(expense => expense.type === BusinessTripExpensesType.CORPORATE &&
        expense.is_verified === true);

    if (corporateEvidences.length > 0) {
      // Expenses
      worksheet.addRow({
        index: '',
        firstCol: 'CORPORATE EVIDENCES',
        secondCol: '',
        thirdCol: '',
        fourthCol: '',
        fifthCol: '',
        sixthCol: '',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);
      worksheet.addRow({
        index: '#',
        firstCol: 'Evidence Name',
        secondCol: 'Evidence Description',
        thirdCol: 'Evidence Sum',
        fourthCol: 'Evidence Currency',
        fifthCol: 'Evidence Status',
        sixthCol: 'Evidence Type',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);

      corporateEvidences.forEach((expense, index) => {
        worksheet.addRow({
          index: (index + 1),
          firstCol: expense.fullExpense.name,
          secondCol: expense.fullExpense.description,
          thirdCol: expense.sum,
          fourthCol: expense.currency,
          fifthCol: expense.is_verified ? 'Verified' : 'Need Verification',
          sixthCol: 'Corporate Evidence',
        });
        this.totalIndex++;
      });
      this.makeGap(worksheet, 1);

      const corporateSum: {currency: string | Currency, amount: number }[] = [];
      corporateEvidences.forEach(expense => {
        const sumForCurrency = corporateSum.find(evidence => evidence.currency === expense.currency);
        if (sumForCurrency) {
          sumForCurrency.amount += +expense.sum;
        } else {
          corporateSum.push({
            currency: expense.currency,
            amount: +expense.sum
          });
        }
      });

      if (corporateSum.length > 0) {
        // Expenses Sum
        worksheet.addRow({
          index: '',
          firstCol: '',
          secondCol: '',
          thirdCol: 'Total Sum (Verified)',
          fourthCol: 'Total Currency (Verified)',
          fifthCol: '',
        });
        this.totalIndex++;
        worksheet = this.makeHeader(worksheet);

        corporateSum.forEach(expenseSum => {
          worksheet.addRow({
            index: '',
            firstCol: '',
            secondCol: '',
            thirdCol: expenseSum.amount,
            fourthCol: expenseSum.currency,
            fifthCol: '',
          });
          this.totalIndex++;
        });
        this.makeGap(worksheet, 3);
      }
    }

    const canceledEvidences = businessTripData.expenses
      .filter(expense => expense.is_verified === false);

    if (canceledEvidences.length > 0) {
      // Expenses
      worksheet.addRow({
        index: '',
        firstCol: 'CANCELED EVIDENCES',
        secondCol: '',
        thirdCol: '',
        fourthCol: '',
        fifthCol: '',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);
      worksheet.addRow({
        index: '#',
        firstCol: 'Evidence Name',
        secondCol: 'Evidence Description',
        thirdCol: 'Evidence Sum',
        fourthCol: 'Evidence Currency',
        fifthCol: 'Evidence Status',
        sixthCol: 'Evidence Type',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);

      canceledEvidences.forEach((expense, index) => {
        worksheet.addRow({
          index: (index + 1),
          firstCol: expense.fullExpense.name,
          secondCol: expense.fullExpense.description,
          thirdCol: expense.sum,
          fourthCol: expense.currency,
          fifthCol: 'Canceled',
          sixthCol: expense.type === BusinessTripExpensesType.OWN ? 'Own Evidence' : 'Corporate Evidence',
        });
        this.totalIndex++;
      });
      this.makeGap(worksheet, 1);

      const canceledSum: {currency: string | Currency, amount: number }[] = [];
      canceledEvidences.forEach(expense => {
        const sumForCurrency = canceledSum.find(evidence => evidence.currency === expense.currency);
        if (sumForCurrency) {
          sumForCurrency.amount += +expense.sum;
        } else {
          canceledSum.push({
            currency: expense.currency,
            amount: +expense.sum
          });
        }
      });

      if (canceledSum.length > 0) {
        // Expenses Sum
        worksheet.addRow({
          index: '',
          firstCol: '',
          secondCol: '',
          thirdCol: 'Total Sum (Verified)',
          fourthCol: 'Total Currency (Verified)',
          fifthCol: '',
        });
        this.totalIndex++;
        worksheet = this.makeHeader(worksheet);

        canceledSum.forEach(expenseSum => {
          worksheet.addRow({
            index: '',
            firstCol: '',
            secondCol: '',
            thirdCol: expenseSum.amount,
            fourthCol: expenseSum.currency,
            fifthCol: '',
          });
          this.totalIndex++;
        });
      }
    }

    // Вызываем скрипт скачивания документы
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = `Business Trip.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  addSection(worksheet) {
    return worksheet;
  }

  makeGap(worksheet, spaceAmount = null) {
    const spaceToPass = spaceAmount ? spaceAmount : SPACE_BETWEEN;
    for (let i = 0; i < spaceToPass; i++) {
      this.totalIndex++;
      worksheet.addRow({
        index: '',
        firstCol: '',
        secondCol: ''
      });
    }
    return worksheet;
  }

  makeHeader(worksheet) {
    worksheet.getRow(this.totalIndex).font = {
      name: 'Calibri',
      size: 13,
      bold: true
    };
    return worksheet;
  }

  viewBusinessTripFiles(files) {
    return this.dialog
      .open<UploadedDataViewerComponent>(UploadedDataViewerComponent, {
        width: 'auto',
        height: 'auto',
        data: files,
        panelClass: 'gallery-modal',
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  createChangeBusinessTrip(entity: BusinessTrip = null) {
    return this.dialog
      .open<CreateBusinessTripComponent>(CreateBusinessTripComponent, {
        width: '800px',
        data: {type: entity ? 'edit' : 'add', entity},
        disableClose: true,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }

  takePhotoModal(entity = null, canVerify = false) {
    return this.dialog
      .open<TakePhotoModalComponent>(TakePhotoModalComponent, {
        width: '800px',
        data: {type: entity ? 'edit' : 'add', entity, canVerify},
        disableClose: false,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }
}
