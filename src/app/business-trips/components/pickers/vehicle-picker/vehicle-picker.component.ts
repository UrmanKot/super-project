import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Vehicle} from '../../../models/vehicle';
import {take} from 'rxjs/operators';
import {VehicleService} from '../../../services/vehicle.service';

@Component({
  selector: 'pek-vehicle-picker',
  templateUrl: './vehicle-picker.component.html',
  styleUrls: ['./vehicle-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VehiclePickerComponent), multi: true}]
})
export class VehiclePickerComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange  = new EventEmitter<Vehicle>();
  @Input() vehicle: number;
  @Input() selectedVehicle: Vehicle;
  @Input() placeholder = 'Vehicle';
  @Input() showClear: boolean;

  vehicles: Vehicle[];
  isLoading = true;

  constructor(
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.vehicleService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.vehicles = res;
        if (this.vehicle) {
          this.selectedVehicle = this.vehicles.find(currency => currency.id === this.vehicle);
        }
        this.isLoading = false;
      });
  }

  onChange(vehicle: number) {
    this.setValue(vehicle);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(vehicle: number) {
    this.vehicle = vehicle;
    this.selectedVehicle = this.vehicles.find(currency => currency.id === this.vehicle);
    this.valueChange.emit(this.selectedVehicle);
  }

  writeValue(obj: any): void {
    this.vehicle = obj;
  }
}
