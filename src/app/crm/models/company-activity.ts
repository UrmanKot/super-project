import {EventItem} from './event-item';
import {Impression} from './event-company';

export class CompanyActivity {
  comment: string;
  company: number;
  event: EventItem;
  id: number;
  is_done: boolean;
  impression?: Impression;
}
