import {BusinessTripStatus} from './business-trip-status.enum';
import {CRMEmployee} from '../../crm/models/crm-employee';
import {BusinessTripEmployee} from './business-trip-employee';
import {Hotel} from './hotel';
import {Vehicle} from './vehicle';
import {BusinessTripExpense} from './business-trip-expense';
import {BusinessTripLocation} from './business-trip-location';
import {BusinessTripHotel} from './business-trip-hotel';

export class BusinessTrip {
  readonly id: number;
  status: BusinessTripStatus;
  employee?: CRMEmployee | number;
  custom_employee?: BusinessTripEmployee | number;
  trip_start?: Date;
  trip_end?: Date;
  created_at?: Date;
  purpose_short?: string;
  vehicle_type?: string;
  purpose_full?: string;
  hotel?: Hotel | number;
  vehicle?: Vehicle | number;
  custom_vehicle?: Vehicle | number;
  expenses?: BusinessTripExpense[] | number;
  hotels?: BusinessTripHotel[] | number;
  initiator?: number;
  start_mileage?: number;
  end_mileage?: number;
  locations?: BusinessTripLocation[];
}

export class BusinessTripPaginated {
  prev: string;
  next: string;
  count: number;
  results: BusinessTrip[];
}
