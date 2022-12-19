import {BusinessTripCountry} from './business-trip-country';

export class BusinessTripHotel {
  readonly id?: number;
  residence_start?: string;
  residence_end?: string;
  file?: string;
  address?: string;
  country?: string;
  fullCountry?: BusinessTripCountry;
  name?: string;
  files?: any;
}
