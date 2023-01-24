import {Vehicle} from './vehicle';

export class BusinessTripVehicle {
  readonly id: number;
  vehicle_type?: string;
  vehicle?: Vehicle | number;
  custom_vehicle?: Vehicle | number;
  start_mileage?: number;
  end_mileage?: number;
  end_mileage_file?: string;
  start_mileage_file?: string;
}
