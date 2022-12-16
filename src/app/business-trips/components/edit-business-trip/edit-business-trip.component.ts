import { Component, OnInit } from '@angular/core';
import {CRMEmployee} from '../../../crm/models/crm-employee';
import {CrmPosition} from '../../models/crm-position';
import {Vehicle} from '../../models/vehicle';
import {BusinessTripExpense} from '../../models/business-trip-expense';
import {BusinessTripHotel} from '../../models/business-trip-hotel';
import {BusinessTripLocation} from '../../models/business-trip-location';
import {BusinessTripStatus} from '../../models/business-trip-status.enum';
import {BusinessTrip} from '../../models/business-trip';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {BusinessTripLocationTypes} from '../../enums/business-trip-location-status.enum';
import {HotelFiles} from '../../models/hotel-files';
import {QuerySearch} from '@shared/models/other';
import {ExpensesSum} from '../../models/expenses-sum';
import {Company} from '../../../crm/models/company';
import {CrmEmployeeService} from '../../../crm/services/crm-employee.service';
import {BusinessTripService} from '../../services/business-trip.service';
import {ModalService} from '@shared/services/modal.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ActivatedRoute} from '@angular/router';
import {MenuItem, MessageService} from 'primeng/api';
import {CrmPositionsService} from '../../services/crm-positions.service';
import {VehicleService} from '../../services/vehicle.service';
import {CompanyService} from '../../../crm/services/company.service';
import {debounceTime, map, switchMap, take} from 'rxjs/operators';
import {BusinessTripEmployee} from '../../models/business-trip-employee';
import {Expense} from '../../models/expense';
import {Currency} from '@shared/models/currency';
import {of} from 'rxjs';
import {BusinessTripLocationMeeting} from '../../models/business-trip-location-meeting';
import {ExpenseService} from '../../services/expense.service';
import { deepCopy } from "deep-copy-ts";

export class DataToSend {
  readonly id?: number;
  employee?: number;
  custom_employee?: CRMEmployee;
  full_employee?: CRMEmployee;
  fullPosition?: CrmPosition;
  fullVehicle?: Vehicle;
  fullInitiator?: CRMEmployee;
  initiator?: number;
  expenses?: BusinessTripExpense[];
  hotel?: BusinessTripHotel;
  vehicle?: Vehicle;
  custom_vehicle?: Vehicle;
  locations?: BusinessTripLocation[];
  purpose_full?: string;
  purpose_short?: string;
  vehicle_type?: string;
  trip_end?: string;
  trip_start?: string;
  status?: BusinessTripStatus;
  delete_hotel_files_ids?: number [];
  delete_location_ids?: number [];
  delete_expenses_ids?: number [];
  start_mileage?: number;
  end_mileage?: number;
}

@Component({
  selector: 'pek-edit-business-trip',
  templateUrl: './edit-business-trip.component.html',
  styleUrls: ['./edit-business-trip.component.scss']
})
export class EditBusinessTripComponent implements OnInit {
  tripExpenses: BusinessTripExpense[] = [];
  businessTrip: BusinessTrip;
  tripStatuses = BusinessTripStatus;
  form: FormGroup;

  endDate = null;
  startDate = null;
  locationStatus = BusinessTripLocationTypes;

  hotelEndDate = null;
  hotelStartDate = null;
  isExpensesRefreshing = false;

  formData = new FormData();
  tripId: number;

  isDataPrepared = false;

  selectedHotelFile: HotelFiles;
  preparedFiles: HotelFiles[];
  hotelFilesToDeleteIds: number[] = [];
  pointsToDeleteIds: number[] = [];
  expensesToDeleteIds: number[] = [];
  employeeFilter: [QuerySearch] = [{name: 'by_user_trip_permissions', value: true}];
  isVerify = false;
  isExportView = false;
  expensesSum: ExpensesSum[];

  companiesFilters: Company[];

  menuItems: MenuItem[] = [{
    label: 'Selected Hotel Files',
    items: [
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteFile()
      }
    ]
  }];

  constructor(
    private crmEmployeeService: CrmEmployeeService,
    private fb: FormBuilder,
    private businessService: BusinessTripService,
    private modalService: ModalService,
    private adapterService: AdapterService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private employeePositionService: CrmPositionsService,
    private vehicleService: VehicleService,
    private companiesService: CompanyService,
    private expenseService: ExpenseService,
  ) {
    this.route.data.subscribe(res => {
      this.isVerify = res['isVerify'];
    });
    this.route.paramMap.pipe(map(params => Number(params.get('tripId')))).subscribe(tripId => {
      this.tripId = tripId;
      this.getBusinessTrip(this.tripId);
    });
  }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companiesService.get([{name: 'by_user', value: true}]).subscribe(companies => {
      this.companiesFilters = companies;
    });
  }


  prepareForm() {
    return this.fb.group({
      isOtherEmployee: [false],
      employee: this.fb.group({
        id: [null],
        first_name: [null],
        last_name: [null],
        position: [null]
      }),
      employee_first_name: [''],
      employee_last_name: [''],
      employee_position: [null],
      employee_id: [null],
      initiator: [null],
      trip_start: [null],
      trip_end: [null],
      start_location_id: [null],
      start_location_country: [null],
      start_location_address: [null],
      last_location_id: [null],
      vehicle_type: ['0'],
      last_location_country: [null],
      last_location_address: [null],
      last_location_meetings: this.fb.array([]),
      intermediatePoints: this.fb.array([]),
      purpose_short: [''],
      purpose_full: [''],
      isOtherVehicle: [false],
      vehicle: this.fb.group({
        id: [null],
        model: [null],
        number: [null]
      }),
      vehicle_model: [''],
      vehicle_number: [''],
      start_mileage: [0],
      end_mileage: [0],
      vehicle_id: [null],
      showHotel: [false],
      expenses: this.fb.array([]),
      hotel: this.fb.group({
        id: [null],
        residence_start: [null],
        residence_end: [null],
        files: [null],
        hotel_name: [null],
        hotel_country: [null],
        hotel_address: [null],
        base64Files: this.fb.array([])
      })
    });
  }

  getBusinessTrip(id: number): void {
    this.form = this.prepareForm();
    this.businessService.getDetailed(id).subscribe(trip => {
      this.businessTrip = trip;
      if (this.businessTrip.custom_employee) {
        const employee = this.businessTrip.custom_employee as BusinessTripEmployee;
        this.form.get('isOtherEmployee').setValue(true);
        this.form.get('employee_first_name').setValue(employee.first_name);
        this.form.get('employee_last_name').setValue(employee.last_name);
        if (employee.position) {
          this.form.get('employee_position').setValue(employee.position.id);
        }
        this.form.get('employee_id').setValue(employee.id);
      }
      if (this.businessTrip.employee) {
        const employee = this.businessTrip.employee as BusinessTripEmployee;
        this.form.get('employee').setValue(employee);
      }

      if (this.businessTrip.trip_end) {
        this.form.get('trip_end').setValue(new Date(this.businessTrip.trip_end));
      }
      if (this.businessTrip.trip_start) {
        this.form.get('trip_start').setValue(new Date(this.businessTrip.trip_start));
      }
      this.form.get('vehicle_type').setValue(this.businessTrip.vehicle_type);
      this.form.get('purpose_full').setValue(this.businessTrip.purpose_full);
      this.form.get('purpose_short').setValue(this.businessTrip.purpose_short);
      this.form.get('start_mileage').setValue(this.businessTrip.start_mileage);
      this.form.get('end_mileage').setValue(this.businessTrip.end_mileage);

      if (this.businessTrip.custom_vehicle) {
        const vehicle = this.businessTrip.custom_vehicle as Vehicle;
        this.form.get('isOtherVehicle').setValue(true);
        this.form.get('vehicle_model').setValue(vehicle.model);
        this.form.get('vehicle_number').setValue(vehicle.number);
        this.form.get('vehicle_id').setValue(vehicle.id);
      }

      if (this.businessTrip.vehicle) {
        this.form.get('isOtherVehicle').setValue(false);
        this.form.get('vehicle').setValue(this.businessTrip.vehicle);
      }
      if (this.businessTrip.hotel) {
        const hotel = this.businessTrip.hotel as BusinessTripHotel;
        this.form.get('showHotel').setValue(true);
        this.form.get('hotel').setValue({
          id: hotel.id,
          residence_start: hotel.residence_start ? new Date(hotel.residence_start) : null,
          residence_end: hotel.residence_end ? new Date(hotel.residence_end) : null,
          hotel_name: hotel.name,
          hotel_country: hotel.country,
          hotel_address: hotel.address,
          files: [],
          base64Files: [],
        });
        if (hotel.files) {
          this.preparedFiles = hotel.files;
        }
      }
      // Locations
      this.businessTrip.locations.forEach(location => {
        if (location.type === BusinessTripLocationTypes.FIRST) {
          this.form.get('start_location_country').setValue(location.country);
          this.form.get('start_location_address').setValue(location.address);
          this.form.get('start_location_id').setValue(location.id);
        }
        if (location.type === BusinessTripLocationTypes.LAST) {
          this.form.get('last_location_country').setValue(location.country);
          this.form.get('last_location_address').setValue(location.address);
          this.form.get('last_location_id').setValue(location.id);
          location.location_meetings.forEach(meeting => {
            (this.form.get('last_location_meetings') as FormArray).push(this.fb.group({
              id: meeting.id,
              company: meeting.company,
              contacts: this.fb.array(meeting.contacts)
            }));
          });
        }
        if (location.type === BusinessTripLocationTypes.INTERMEDIATE) {
          (this.form.get('intermediatePoints') as FormArray).push(this.fb.group({
            id: location.id,
            country: location.country,
            address: location.address,
            location_meetings: this.fb.array(location.location_meetings),
          }));
        }
      });
      // Expenses
      const expenses = this.businessTrip.expenses as BusinessTripExpense[];
      if (expenses.length > 0) {
        expenses.forEach(expense => {
          let expensePrepared: Expense = {
            id: null,
            name: null,
            description: null,
          };
          let customExpensePrepared: Expense = {
            id: null,
            name: null,
            description: null,
          };

          if (expense.expense) {
            expensePrepared = expense.expense as Expense;
          }

          if (expense.custom_expense) {
            customExpensePrepared = expense.custom_expense as Expense;
          }
          (this.form.get('expenses') as FormArray).push(this.fb.group({
            base64File: null,
            currency: expense.currency,
            custom_expense: customExpensePrepared,
            expense: expensePrepared,
            id: expense.id,
            sum: expense.sum,
            isOther: !!customExpensePrepared.id,
            is_verified: expense.is_verified,
            file: expense.file,
            uploaded_file: null,
            clear_file: false,
          }));
        });
        this.tripExpenses = [];
        (this.form.get('expenses') as FormArray).controls.forEach(group => {
          this.tripExpenses.push(group.value);
        });
      }

      this.form.get('initiator').setValue(this.businessTrip.initiator);

      this.isDataPrepared = true;
    });
  }


  clickOutside(type) {
    if (this.form.value.trip_end?.getTime() !== this.startDate?.getTime()) {
      this.form.get('trip_end').patchValue(this.startDate);
    }
    if (this.form.value.trip_end?.getTime() !== this.endDate?.getTime()) {
      this.form.get('trip_end').patchValue(this.endDate);
    }
  }

  setStartValue(start) {
    if (start) {
      this.form.get('trip_start').patchValue(start);
      this.startDate = start;
      if (this.form.get('trip_end').value && this.form.get('trip_end').value < this.form.get('trip_start').value) {
        this.setEndValue(this.form.get('trip_end').value);
      }
    }
  }

  setEndValue(end) {
    if (end) {
      this.form.get('trip_end').patchValue(end);
      this.endDate = end;
    }
  }

  public addIntermediatePoint(): void {
    (this.form.get('intermediatePoints') as FormArray).push(this.fb.group({
      id: [],
      country: [],
      address: [],
      location_meetings: this.fb.array([]),
    }));
  }

  get _intermediatePoints(): FormGroup[] {
    return (this.form.get('intermediatePoints') as FormArray).controls as FormGroup[];
  }

  removePoint(point: FormGroup, index: number) {
    if (point.value.id) {
      this.pointsToDeleteIds.push(point.value.id);
    }

    (this.form.get('intermediatePoints') as FormArray).removeAt(index);
  }

  get _hotel(): FormGroup {
    return (this.form.get('hotel') as FormGroup) as FormGroup;
  }

  public addTripExpanses(): void {
    this.expenseService
      .createChangeExpanseItem(null, this.isVerify)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.isExpensesRefreshing = true;
          (this.form.get('expenses') as FormArray).push(this.fb.group({
            ...res
          }));
          this.tripExpenses = [];
          (this.form.get('expenses') as FormArray).controls.forEach(group => {
            this.tripExpenses.push(group.value);
          });
          this.isExpensesRefreshing = false;
        }
      });
  }

  editTripExpense(index: number) {
    const element = (this.form.get('expenses') as FormArray).controls[index].value;
    this.expenseService
      .createChangeExpanseItem(element, this.isVerify)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          (this.form.get('expenses') as FormArray).controls[index].setValue(res.value);
          this.tripExpenses = [];
          (this.form.get('expenses') as FormArray).controls.forEach(group => {
            this.tripExpenses.push(group.value);
          });
        }
      });
  }

  get _tripExpanses(): FormGroup[] {
    return (this.form.get('expenses') as FormArray).controls as FormGroup[];
  }

  test() {
    const files = this.form.value.hotel.base64Files.map(base64 => base64.file);
  }

  changedValue($event: any) {
  }

  clickHotelOutside(type) {
    if (this._hotel.value.residence_end?.getTime() !== this.hotelStartDate?.getTime()) {
      this._hotel.get('residence_end').patchValue(this.hotelStartDate);
    }
    if (this._hotel.value.residence_end?.getTime() !== this.hotelEndDate?.getTime()) {
      this._hotel.get('residence_end').patchValue(this.hotelEndDate);
    }
  }

  setHotelStartValue(start) {
    if (start) {
      this._hotel.get('residence_end').patchValue(start);
      this.hotelStartDate = start;
      if (this._hotel.get('residence_end').value &&
        this._hotel.get('residence_end').value < this._hotel.get('residence_start').value) {
        this.setHotelEndValue(this._hotel.get('residence_end').value);
      }
    }
  }

  setHotelEndValue(end) {
    if (end) {
      this._hotel.get('residence_end').patchValue(end);
      this.hotelEndDate = end;
    }
  }

  get _employee(): FormGroup {
    return (this.form.get('employee') as FormGroup) as FormGroup;
  }

  get _vehicle(): FormGroup {
    return (this.form.get('vehicle') as FormGroup) as FormGroup;
  }

  editBusinessTrip(status: BusinessTripStatus) {
    if (!this.form.valid) {
      this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Fill all required field`});
      return;
    }

    if (this.form.valid) {
      const dataToSend = this.prepareDataToSend(status);
      const result = this.obj2FormData(dataToSend);
      this.businessService
        .update(this.tripId, result)
        .pipe(take(1))
        .subscribe((res) => {
          this.isDataPrepared = false;

          this.form.reset();
          this.hotelFilesToDeleteIds = [];
          this.preparedFiles = [];
          this.selectedHotelFile = null;
          this.businessTrip = null;
          this.tripExpenses = [];
          this.getBusinessTrip(this.tripId);
        });
    }
  }

  prepareDataToSend(status: BusinessTripStatus): DataToSend {
    const preparedLocations = [];
    let tempFormValue = deepCopy(this.form.value);

    if (tempFormValue.start_location_country) {
      const startLocation: BusinessTripLocation = {
        id: tempFormValue.start_location_id,
        type: BusinessTripLocationTypes.FIRST,
        address: tempFormValue.start_location_address,
        fullCountry: tempFormValue.start_location_country,
        country: tempFormValue.start_location_country?.code,
      };
      preparedLocations.push(startLocation);
    }
    if (tempFormValue.last_location_country) {
      const lastLocation: BusinessTripLocation = {
        id: tempFormValue.last_location_id,
        type: BusinessTripLocationTypes.LAST,
        address: tempFormValue.last_location_address,
        fullCountry: tempFormValue.last_location_country,
        country: tempFormValue.last_location_country?.code,
        location_meetings: tempFormValue.last_location_meetings
      };
      preparedLocations.push(lastLocation);
    }

    const locations = tempFormValue.intermediatePoints;
    locations.forEach(location => {
      location.type = BusinessTripLocationTypes.INTERMEDIATE;
      location.fullCountry = location.country;
      location.country = location.country?.code;
    });

    preparedLocations.push(...locations);

    preparedLocations.forEach(location => {
      if (location.location_meetings) {
        location.location_meetings.forEach(meeting => {
          meeting.fullCompany = meeting.company;
          meeting.fullContacts = meeting.contacts;
          meeting.company = meeting.company?.id;
          meeting.contacts = meeting.contacts.map(contact => contact.id);
        });
      }
    });
    const tripStart = tempFormValue.trip_start ?
      this.adapterService.dateTimeAdapter(new Date(tempFormValue.trip_start)) : null;
    const tripEnd = tempFormValue.trip_end ?
      this.adapterService.dateTimeAdapter(new Date(tempFormValue.trip_end)) : null;
    const dataToSend: DataToSend = {
      initiator: tempFormValue.initiator,
      locations: preparedLocations,
      purpose_full: tempFormValue.purpose_full ? tempFormValue.purpose_full : null,
      purpose_short: tempFormValue.purpose_short ? tempFormValue.purpose_short : null,
      vehicle_type: tempFormValue.vehicle_type,
      trip_end: tripEnd ? tripEnd : null,
      trip_start: tripStart ? tripStart : null,
      expenses: [],
      start_mileage: tempFormValue.start_mileage,
      end_mileage: tempFormValue.end_mileage,
      status,
    };

    if (tempFormValue.hotel.hotel_name && tempFormValue.showHotel) {
      const hotelStartDate = tempFormValue.hotel.residence_start ?
        this.adapterService.dateAdapter(new Date(tempFormValue.hotel.residence_start)) : null;
      const hotelEndDate = tempFormValue.hotel.residence_end ?
        this.adapterService.dateAdapter(new Date(tempFormValue.hotel.residence_end)) : null;
      dataToSend.hotel = {
        residence_start: hotelStartDate ? hotelStartDate : null,
        residence_end: hotelEndDate ? hotelEndDate : null,
        address: tempFormValue.hotel.hotel_address,
        country: tempFormValue.hotel.hotel_country.code,
        fullCountry: tempFormValue.hotel.hotel_country,
        name: tempFormValue.hotel.hotel_name,
        id: tempFormValue.hotel.id,
        files: tempFormValue.hotel.files,
      };

      if (!dataToSend.hotel.residence_start ||
        !dataToSend.hotel.residence_end ||
        !dataToSend.hotel.address ||
        !dataToSend.hotel.country ||
        !dataToSend.hotel.name) {
        this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Fill Hotel Data`});
      }
    }

    if (tempFormValue.employee.id) {
      dataToSend.employee = tempFormValue.employee.id;
      dataToSend.full_employee = tempFormValue.employee;
    } else {
      dataToSend.custom_employee = {
        id: tempFormValue.employee_id,
        first_name: tempFormValue.employee_first_name,
        last_name: tempFormValue.employee_last_name,
        position: tempFormValue.employee_position,
      };
      dataToSend.full_employee = dataToSend.custom_employee;
    }

    if (tempFormValue.vehicle_type !== '0') {
      if (tempFormValue.vehicle.id && tempFormValue.vehicle_type === '3') {
        dataToSend.vehicle = tempFormValue.vehicle.id;
      } else if ((tempFormValue.vehicle_type === '1' || tempFormValue.vehicle_type === '2') && tempFormValue.vehicle_model) {
        dataToSend.custom_vehicle = {
          id: tempFormValue.vehicle_id,
          model: tempFormValue.vehicle_model,
          number: tempFormValue.vehicle_number,
        };
      } else {
        dataToSend.vehicle = null;
        dataToSend.custom_vehicle = null;
      }
    } else {
      dataToSend.vehicle = null;
      dataToSend.custom_vehicle = null;
    }


    if (tempFormValue.expenses) {
      tempFormValue.expenses.forEach((tripExpense) => {
        const businessExpense: BusinessTripExpense = {
          currency: tripExpense.currency,
          id: tripExpense.id,
          sum: tripExpense.sum,
          is_verified: tripExpense.is_verified,
          clear_file: tripExpense.clear_file,
        };
        if ((tripExpense.expense as Expense).name) {
          businessExpense.expense = (tripExpense.expense as Expense).id;
          businessExpense.currency = (tripExpense.currency as Currency).code as string;
          businessExpense.fullExpense = (tripExpense.expense as Expense);
        }
        if (tripExpense.custom_expense.name) {
          businessExpense.custom_expense = tripExpense.custom_expense;
          businessExpense.currency = (tripExpense.currency as Currency).code as string;
          businessExpense.fullExpense = tripExpense.custom_expense;
        }
        if (tripExpense.base64File) {
          businessExpense.file = tripExpense.uploaded_file;
        }
        dataToSend.expenses.push(businessExpense);
      });
    }

    dataToSend.delete_hotel_files_ids = this.hotelFilesToDeleteIds;
    dataToSend.delete_location_ids = this.pointsToDeleteIds;
    dataToSend.delete_expenses_ids = this.expensesToDeleteIds;
    console.log(this.form.value);
    return dataToSend;
  }

  obj2FormData(obj, formData = new FormData()) {
    this.formData = formData;
    this.createFormData(obj);
    return this.formData;
  }

  createFormData(obj, subKeyStr = '') {
    for (const i in obj) {
      const value = obj[i];
      const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

      if (typeof (value) === 'string' || typeof (value) === 'number' || typeof (value) === 'boolean') {
        // @ts-ignore
        this.formData.append(subKeyStrTrans, value);

      } else if (typeof (value) === 'object') {
        if (value instanceof File) {
          this.formData.append(subKeyStrTrans, value);
        } else {
          this.createFormData(value, subKeyStrTrans);
        }
      }
    }
  }

  employeeChanged() {
    this.form.get('employee').reset();
    this.form.get('employee_first_name').reset();
    this.form.get('employee_last_name').reset();
    this.form.get('employee_position').reset();
  }

  vehicleChanged() {
    this.form.get('vehicle').reset();
    this.form.get('vehicle_model').reset();
    this.form.get('vehicle_number').reset();
  }

  filesChanged(files: File[]) {
    this._hotel.get('files').setValue(files);
    files.forEach(file => {
      this.fileToBase64(file);
    });
  }

  fileToBase64(file: File): void {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      const base64 = event.target.result;
      (this._hotel.get('base64Files') as FormArray).push(this.fb.group({
        file: base64
      }));
    };
    fileReader.readAsDataURL(file);
  }

  deleteFile() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        const index = this.preparedFiles.findIndex(file => file === this.selectedHotelFile);
        this.hotelFilesToDeleteIds.push(this.selectedHotelFile.id);
        this.selectedHotelFile = null;
        this.preparedFiles.splice(index, 1);
      }
    });
  }

  downloadHotelFile(file: any): void {
    this.businessService.download_hotel_file(file.id).subscribe(response => {
      const filename = this.getName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  deleteExpense(expense: BusinessTripExpense) {
    const foundExpenseIndex = this.tripExpenses.findIndex(innerExpense => innerExpense === expense);
    if (foundExpenseIndex > -1) {
      if (this.tripExpenses[foundExpenseIndex].id) {
        this.expensesToDeleteIds.push(this.tripExpenses[foundExpenseIndex].id);
      }
      this.tripExpenses.splice(foundExpenseIndex, 1);
      (this.form.get('expenses') as FormArray).removeAt(foundExpenseIndex);
    }
  }

  loadEmployeePositionData(preparedData: DataToSend) {
    if (preparedData.custom_employee) {
      let positionId;
      positionId = preparedData.custom_employee.position;
      if (positionId) {
        return this.employeePositionService.getById(positionId).pipe(map(res => {
          preparedData.fullPosition = res;
          return preparedData;
        }));
      } else {
        return of(preparedData)
      }
    } else if (preparedData.full_employee.position) {
      preparedData.fullPosition = preparedData.full_employee.position;
    }

    return of(preparedData);
  }

  loadInitiatorData(preparedData: DataToSend) {
    const position = preparedData.initiator as number;
    if (position) {
      return this.crmEmployeeService.getById(position).pipe(map(res => {
        preparedData.fullInitiator = res;
        return preparedData;
      }));
    }
    return of(preparedData);
  }

  loadVehicleData(preparedData: DataToSend) {

    if (preparedData.vehicle) {
      const vehicleId = preparedData.vehicle;
      return this.vehicleService.getById(vehicleId).pipe(map(res => {
        preparedData.fullVehicle = res;
        return preparedData;
      }));
    } else if (preparedData.custom_vehicle) {
      preparedData.fullVehicle = preparedData.custom_vehicle;
    }
    return of(preparedData);
  }

  export() {
    const preparedData = this.prepareDataToSend(this.businessTrip.status);
    this.loadEmployeePositionData(preparedData).pipe(switchMap(res => {
        return this.loadInitiatorData(res);
      }),
      switchMap(res => {
        return this.loadVehicleData(res);
      })).subscribe(res => {
      this.businessService.exportToExcel(res, this.expensesSum).then();
    });
  }

  meetingChanged(point: FormGroup, meetings: BusinessTripLocationMeeting[]) {
  }

  lastPointMeetingChanged($event: BusinessTripLocationMeeting[]) {
  }

  changedVechicleType($event: string) {
    this.form.get('vehicle_type').setValue($event);
  }

  viewHotelFiles() {
    const files = this.form.get('hotel').value;
    const data: {links: any, files: any} = {links: this.preparedFiles, files: files.base64Files};
    this.businessService.viewBusinessTripFiles(data);
  }
}
