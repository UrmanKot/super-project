import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {BusinessTripStatus} from '../../models/business-trip-status.enum';
import {BusinessTrip} from '../../models/business-trip';
import {BusinessTripService} from '../../services/business-trip.service';
import {MenuItem} from 'primeng/api';
import {Paginator} from 'primeng/paginator';
import {AuthService} from '../../../auth/auth.service';
import {BehaviorSubject, forkJoin, iif, Observable} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {
  EmployeeWithCustom
} from '../pickers/business-trips-multi-employee-with-custom/business-trips-multi-employee-with-custom.component';
import {Country} from '@shared/models/country';
import { Vehicle } from '../../models/vehicle';

@UntilDestroy()
@Component({
  selector: 'pek-business-trips',
  templateUrl: './business-trips.component.html',
  styleUrls: ['./business-trips.component.scss']
})
export class BusinessTripsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  isLoading = false;

  selectedBusinessTrips: BusinessTrip[];
  tripStatus = BusinessTripStatus;

  count = 0;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  isHideFilters = false;

  businessTrips$: Observable<BusinessTrip[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() => !this.isShowAll,
        this.businessTripService.get(this.query).pipe(
          tap(response => this.count = response.count),
          map(response => response.results),
        ),
        this.businessTripService.getAll(this.query).pipe(
          tap(products => this.count = products.length),
          map(response => response)
        )
      ),
    ),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  isStartFirstPage = false;
  currentPage = 1;

  isShowAll = false;

  searchForm: FormGroup = this.fb.group({
    employees: [null],
    trip_start: [null],
    trip_end: [null],
    created_at: [null],
    statuses: [null],
    duration_more_than: [null],
    duration: ['other'],
    durationOther: [0],
    location_countries_ids: [null],
    vehicle_ids: [null],
  });

  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);
  query: QuerySearch[] = [];

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
      },
      {
        label: 'Export To XLS',
        icon: 'pi pi-file-excel',
        command: () => this.exportToXls()
      }
    ]
  }];

  menuItemsMultiple: MenuItem[] = [{
    label: 'Selected Business Trips',
    items: [
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteBusinessTrip()
      },
      {
        label: 'Export To XLS',
        icon: 'pi pi-file-excel',
        command: () => this.exportToXls()
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
      });
    }
  }

  ngOnInit(): void {

  }

  createBusinessTrip() {
    this.businessTripService.createChangeBusinessTrip().pipe(
      untilDestroyed(this)
    ).subscribe(res => {
      if (res) this.search$.next();
    });
  }

  editExpenseBusinessTrip() {
    this.router.navigate(['/business-trips/trip/edit/', this.selectedBusinessTrips[0].id]);
  }

  verifyBt() {
    this.router.navigate(['/business-trips/trip/verify/', this.selectedBusinessTrips[0].id]);
  }

  deleteBusinessTrip() {
    this.modalService.confirm('danger', 'Confirm').subscribe((confirm) => {
      if (confirm) {
        const calls = [];
        this.selectedBusinessTrips.forEach(trip => {
          calls.push(this.businessTripService.delete(trip).pipe(
            untilDestroyed(this)
          ))
        });
        forkJoin([...calls]).subscribe(() => {
          this.search$.next();
        });
      }
    });
  }

  exportToXls() {
    const tripIds = this.selectedBusinessTrips.map(trip => trip.id);
    this.businessTripService.getBtForExport([{name: 'ids', value: tripIds}]).subscribe(res => {
      res.forEach(trip => {
          this.businessTripService.exportToExcel(trip).then();
      });
    });
  }

  paginate(evt: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = evt.page + 1;
      this.search$.next();
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }


  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedBusinessTrips = null;

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
      {name: 'by_user_trip_permissions', value: true},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true},);
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null && key !== 'duration' && key !== 'durationOther') {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  onSelectEmployees(employees: EmployeeWithCustom[]) {
    this.searchForm.get('employees').patchValue(employees);
    this.search$.next();
  }

  onSelectStatuses(statuses: string[]) {
    this.searchForm.get('statuses').patchValue(statuses);
    this.search$.next();
  }

  onSelectDuration() {
    switch (this.searchForm.get('duration').value) {
      case 'hour':
        this.searchForm.get('duration_more_than').patchValue(3600);
        break;
      case 'day':
        this.searchForm.get('duration_more_than').patchValue(86400);
        break;
      case 'month':
        this.searchForm.get('duration_more_than').patchValue(2678400);
        break;
      case 'other':
        this.searchForm.get('duration_more_than').patchValue(3600 * this.searchForm.get('durationOther').value);
        break;
    }

    this.search$.next();
  }

  changeOtherDuration() {
    if (this.searchForm.get('duration').value === 'other') {
      this.searchForm.get('duration_more_than').patchValue(3600 * this.searchForm.get('durationOther').value);
      this.search$.next();
    }
  }

  onSelectCountries(countries: Country[]) {
    this.searchForm.get('location_countries_ids').patchValue(countries?.map(c => c.alpha2_code).join(',') ?? null);
    console.log(this.searchForm.get('location_countries_ids').value);
    this.search$.next()
  }
  onSelectVehicles(vehicles: Vehicle[]) {
    this.searchForm.get('vehicle_ids').patchValue(vehicles?.map(v => v.id).join(',') ?? null);
    console.log(this.searchForm.get('vehicle_ids').value);
    this.search$.next()
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
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
