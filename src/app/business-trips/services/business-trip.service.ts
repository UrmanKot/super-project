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
    return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
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
      const test = formatDate(businessTripData.trip_start, 'dd-mm-yyyy', 'en');
      const start = businessTripData.trip_start ?
        formatDate(businessTripData.trip_start, 'dd-MM-yyyy HH:mm', 'en')
        : '-';
      const end = businessTripData.trip_end ?
        formatDate(businessTripData.trip_end, 'dd-MM-yyyy HH:mm', 'en')
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
        secondCol: startLocation.country + ', ' + startLocation.address
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    if (lastLocation) {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Arrival point',
        secondCol: lastLocation.country + ', ' + lastLocation.address
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
    }

    intermediateLocations.forEach((location, index) => {
      worksheet.addRow({
        index: this.totalDisplayedRows,
        firstCol: 'Intermediate point ' + (index + 1),
        secondCol: location.country + ', ' + location.address
      });
      this.totalIndex++;
      this.totalDisplayedRows++;
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

    if (businessTripData.hotel) {
      worksheet = this.makeGap(worksheet, 1);
      // Hotel
      if (businessTripData.hotel) {
        worksheet.addRow({
          index: this.totalDisplayedRows,
          firstCol: 'Hotel Name',
          secondCol: businessTripData.hotel.name
        });
        this.totalIndex++;
        this.totalDisplayedRows++;

        worksheet.addRow({
          index: this.totalDisplayedRows,
          firstCol: 'Hotel Address',
          secondCol: businessTripData.hotel.country + ', ' + businessTripData.hotel.address
        });
        this.totalIndex++;
        this.totalDisplayedRows++;
        const start = businessTripData.hotel.residence_start ?
          formatDate(businessTripData.hotel.residence_start, 'dd-MM-yyyy HH:mm', 'en') : '-';
        const end = businessTripData.hotel.residence_end ?
          formatDate(businessTripData.hotel.residence_end, 'dd-MM-yyyy HH:mm', 'en') : '-';
        worksheet.addRow({
          index: this.totalDisplayedRows,
          firstCol: 'Hotel Residence start/end',
          secondCol: start + '  -  ' + end
        });
        this.totalIndex++;
        this.totalDisplayedRows++;
        worksheet = this.makeGap(worksheet, 1);
      }
    }

    // Vehicle
    if (businessTripData.fullVehicle) {
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

    if (businessTripData.expenses.length > 0) {
      // Expenses
      worksheet.addRow({
        index: '#',
        firstCol: 'Expense Name',
        secondCol: 'Expense Description',
        thirdCol: 'Expense Sum',
        fourthCol: 'Expense Currency',
        fifthCol: 'Expense Status',
      });
      this.totalIndex++;
      worksheet = this.makeHeader(worksheet);

      businessTripData.expenses.forEach((expense, index) => {
        worksheet.addRow({
          index: (index + 1),
          firstCol: expense.fullExpense.name,
          secondCol: expense.fullExpense.description,
          thirdCol: expense.sum,
          fourthCol: expense.currency,
          fifthCol: expense.is_verified ? 'Verified' : 'Need Verification',
        });
        this.totalIndex++;
      });
      this.makeGap(worksheet, 1);

      if (expensesSum && expensesSum.length > 0) {
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

        expensesSum.forEach(expenseSum => {
          worksheet.addRow({
            index: '',
            firstCol: '',
            secondCol: '',
            thirdCol: expenseSum.sum,
            fourthCol: expenseSum.currency.code,
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
