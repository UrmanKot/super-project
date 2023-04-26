import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from "../../../business-trips/models/vehicle";
import {VehicleService} from "../../../business-trips/services/vehicle.service";

@Component({
  selector: 'pek-multi-vehicle-picker',
  templateUrl: './multi-vehicle-picker.component.html',
  styleUrls: ['./multi-vehicle-picker.component.scss']
})
export class MultiVehiclePickerComponent implements OnInit {
  @Input() currentVehiclesIds: number[] = [];
  @Output() selectVehicles: EventEmitter<Vehicle[]> = new EventEmitter<Vehicle[]>();

  isLoading = true;
  vehicles: Vehicle[] = [];
  selectedVehicles: Vehicle[] = [];

  constructor(
    private vehicleService: VehicleService,
  ) {
  }

  ngOnInit(): void {
    this.vehicleService.get().pipe(
    ).subscribe(vehicles => {
      this.vehicles = vehicles;
      this.prepareVehicles();
      this.findVehicles();
      this.isLoading = false;
    })
  }

  prepareVehicles() {
    this.vehicles = this.vehicles.map((vehicle) => {
      return {
        ...vehicle,
        displayLabel: vehicle.model + ' ' + vehicle.number
      };
    });
  }

  onSelectVehicles(vehicles: Vehicle[]) {
    if (vehicles) {
      this.selectVehicles.emit(vehicles);
    } else {
      this.selectVehicles.emit(null);
    }
  }

  findVehicles() {
    if (this.currentVehiclesIds.length > 0) {
      this.currentVehiclesIds.forEach(id => {
        const findVehicle = this.vehicles.find(v => v.id === id);

        if (findVehicle) {
          this.selectedVehicles.push(findVehicle);
        }
      });
    }
  }
}
