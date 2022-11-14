import {EventItem} from './event-item';
import {Company} from './company';

export class EventCompany {
  readonly id: number;
  event: EventItem;
  company: Company;
  comment: string;
  is_done: boolean;
}
