import {BusinessTripLocationTypes} from '../enums/business-trip-location-status.enum';
import {BusinessTripLocationMeeting} from './business-trip-location-meeting';
import {BusinessTripCountry} from './business-trip-country';

export class BusinessTripLocation {
  readonly id?: number;
  readonly business_trip_id?: number;
  country?: BusinessTripCountry;
  fullCountry?: BusinessTripCountry;
  address?: string;
  type?: BusinessTripLocationTypes;
  location_meetings?: BusinessTripLocationMeeting[];
}
