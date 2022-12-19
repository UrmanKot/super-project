import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {Router} from '@angular/router';
import {debounceTime, take} from 'rxjs/operators';
import {BusinessTripStatus} from '../../models/business-trip-status.enum';
import {BusinessTrip} from '../../models/business-trip';
import {BusinessTripService} from '../../services/business-trip.service';
import {MenuItem} from 'primeng/api';
import {Paginator} from 'primeng/paginator';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'pek-business-trips',
  templateUrl: './business-trips.component.html',
  styleUrls: ['./business-trips.component.scss']
})
export class BusinessTripsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  isLoading: boolean;
  businessTrips: BusinessTrip[];
  selectedBusinessTrip: BusinessTrip;
  tripStatus = BusinessTripStatus;

  count = 0;
  isShowAll = false;
  isStartOnePage = false;

  searchForm: FormGroup = this.fb.group({
    employees: [],
    trip_started: [],
    trip_ended: [],
    trip_created: [],
    statuses: [],
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value}
  ];
  statusFilter = [
    {
      value: BusinessTripStatus.VERIFIED,
      title: 'Verified'
    },
    {
      value: BusinessTripStatus.NEED_VERIFICATION,
      title: 'Need Verification'
    },
    {
      value: BusinessTripStatus.NEW,
      title: 'New'
    }
  ];

  menuItems: MenuItem[] = [{
    label: 'Selected Business Trip',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editExpenseBusinessTrip()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteBusinessTrip()
      }
    ]
  }];
  tableScrollHeight = '29.625rem';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private businessTripService: BusinessTripService,
    private modalService: ModalService,
    private adapterService: AdapterService,
    public auth: AuthService
  ) {
    if (auth.user.can_verify_expenses) {
    this.menuItems[0].items.splice(1, 0, {
      label: 'Verify BT',
      icon: 'pi pi-check',
      command: () => this.verifyBt()
    })
    }
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe(res => {
      this.searchBusinessTrips();
    });

    this.searchBusinessTrips();
  }


  prepareQuery(): void {
    this.query = [];

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true},
      {name: 'by_user_trip_permissions', value: true},
    ];

    if (this.searchForm.get('employees').value) {
      const employees = this.searchForm.get('employees').value
        .filter(employee => employee.employee).map(employee => employee.employee);
      if (employees) {
        this.query.push({
          name: 'employees_ids',
          value: employees.map(employee => employee.id)
        });
      }
    }

    if (this.searchForm.get('employees').value) {
      const customUsers = this.searchForm.get('employees').value
        .filter(employee => employee.customEmployee).map(employee => employee.customEmployee);
      if (customUsers) {
        this.query.push({
          name: 'custom_employee_first_names',
          value: customUsers.map(employee => employee.first_name)
        });
        this.query.push({
          name: 'custom_employee_last_names',
          value: customUsers.map(employee => employee.last_name)
        });
      }
    }

    if (this.searchForm.get('statuses').value) {
      this.query.push({
        name: 'statuses',
        value: this.searchForm.get('statuses').value
      });
    }

    if (this.searchForm.get('trip_started').value) {
      this.query.push({
        name: 'trip_start',
        value: this.adapterService.dateAdapter(this.searchForm.get('trip_started').value)
      });
    }

    if (this.searchForm.get('trip_ended').value) {
      this.query.push({
        name: 'trip_end',
        value: this.adapterService.dateAdapter(this.searchForm.get('trip_ended').value)
      });
    }

    if (this.searchForm.get('trip_created').value) {
      this.query.push({
        name: 'created_at',
        value: this.adapterService.dateAdapter(this.searchForm.get('trip_created').value)
      });
    }
  }

  searchBusinessTrips() {
    this.prepareQuery();

    if (!this.isShowAll) {
      this.getPaginated();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getAll();
    }
  }

  getPaginated() {
    this.businessTripService
      .get(this.query)
      .pipe(take(1))
      .subscribe((res) => {
        this.count = res.count;
        this.businessTrips = res.results;
        this.selectedBusinessTrip = null;
      });
  }

  getAll() {
    this.businessTripService
      .getAll(this.query)
      .pipe(take(1))
      .subscribe((res) => {
        this.businessTrips = res;
        this.selectedBusinessTrip = null;
        if (this.isStartOnePage) {
          this.paginator?.changePage(0);
          this.isLoading = false;
        }
      });

  }

  createBusinessTrip() {
    this.businessTripService
      .createChangeBusinessTrip()
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.searchBusinessTrips();
        }
      });
  }

  editExpenseBusinessTrip() {
    this.router.navigate(['/business-trips/trip/edit/', this.selectedBusinessTrip.id]);
  }

  verifyBt() {
    this.router.navigate(['/dash/business-trips/trip/verify/', this.selectedBusinessTrip.id]);
  }

  deleteBusinessTrip() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1))
      .subscribe((confirm) => {
        if (confirm) {
          this.businessTripService
            .delete(this.selectedBusinessTrip)
            .pipe(take(1))
            .subscribe((del) => {
              this.searchBusinessTrips();
            });
        }
      });
  }

  statusFilterChanged(status: any) {

  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchBusinessTrips();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.searchBusinessTrips();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.searchBusinessTrips();
  }

  isHideFilters = false;
  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.9125rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.625rem';
      return;
    }
  }
}
