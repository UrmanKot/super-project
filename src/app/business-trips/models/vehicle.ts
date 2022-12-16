import {BusinessTrip} from './business-trip';

export class Vehicle {
  readonly id?: number;
  model: string;
  number: string;
  fullInfo?: string;
}

export class VehiclePaginated {
  prev: string;
  next: string;
  count: number;
  results: Vehicle[];
}
