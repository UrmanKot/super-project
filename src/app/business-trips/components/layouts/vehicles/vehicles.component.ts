import {Component, OnInit, ViewChild} from '@angular/core';
import {Vehicle} from '../../../models/vehicle';
import {take} from 'rxjs/operators';
import {ModalService} from '@shared/services/modal.service';
import {VehicleService} from '../../../services/vehicle.service';
import {MenuItem} from 'primeng/api';
import {QuerySearch} from '@shared/models/other';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'pek-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  isLoading: boolean;
  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  searchForm: FormGroup = this.fb.group({
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value}
  ];

  menuItems: MenuItem[] = [{
    label: 'Selected Vehicle',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editVehicle()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteVehicle()
      }
    ]
  }];

  count = 0;
  isShowAll = false;
  isStartOnePage = false;

  constructor(
    private vehicleService: VehicleService,
    private modalService: ModalService,
    private fb: FormBuilder,
  ) {
    this.searchVehicles();
  }

  ngOnInit(): void {
  }

  prepareQuery(): void {
    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }
  }

  searchVehicles() {
    this.prepareQuery();
    if (!this.isShowAll) {
      this.getPaginated();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getAll();
    }
  }

  getPaginated() {
    this.vehicleService
      .getPaginated(this.query)
      .pipe(take(1))
      .subscribe((res) => {
        this.vehicles = res.results;
        this.count = res.count;
        this.selectedVehicle = null;
      });
  }

  getAll() {
    this.vehicleService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.vehicles = res;
        this.selectedVehicle = null;
        if (this.isStartOnePage) {
          this.paginator?.changePage(0);
          this.isLoading = false;
        }
      });
  }

  addVehicle() {
    this.vehicleService
      .createChangeVehicle()
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.getAll();
        }
      });
  }

  editVehicle() {
    this.vehicleService
      .createChangeVehicle(this.selectedVehicle)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.getAll();
        }
      });
  }

  deleteVehicle() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1))
      .subscribe((confirm) => {
        if (confirm) {
          this.vehicleService
            .delete(this.selectedVehicle)
            .pipe(take(1))
            .subscribe((del) => {
              this.getAll();
            });
        }
      });
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchVehicles();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.searchVehicles();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.searchVehicles();
  }
}
