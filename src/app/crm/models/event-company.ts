import {EventItem} from './event-item';
import {Company} from './company';

export enum Impression {
  NEUTRAL = "0" ,
  POSITIVE = "1",
  NEGATIVE = "2"
}

export class EventCompany {
  readonly id: number;
  event?: EventItem;
  company?: Company;
  comment: string;
  impression?: Impression;
  is_done: boolean;
}
