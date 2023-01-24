import {BusinessTripCountry} from './business-trip-country';

export class BusinessTripHotel {
  id?: number;
  residence_start?: Date | string;
  business_trip?: number;
  residence_end?: Date | string;
  file?: string;
  address?: string;
  country?: BusinessTripCountry | string;
  fullCountry?: BusinessTripCountry;
  name?: string;
  files?: any;
}
