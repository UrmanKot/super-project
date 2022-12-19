import {HotelFiles} from './hotel-files';

export class Hotel {
  readonly id?: number;
  name: string;
  country: string;
  address: string;
  uploadedFiles?: HotelFiles[];
}
