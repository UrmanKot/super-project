import {BusinessTripLocationTypes} from '../enums/business-trip-location-status.enum';
import {BusinessTripLocationMeeting} from './business-trip-location-meeting';

export class BusinessTripLocation {
  readonly id?: number;
  country?: string;
  address?: string;
  type?: BusinessTripLocationTypes;
  location_meetings?: BusinessTripLocationMeeting[];
}
