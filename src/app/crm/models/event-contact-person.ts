import {EventItem} from './event-item';
import {ContactPerson} from '@shared/models/contact-person';

export class EventContactPerson{
  readonly id: number;
  event: EventItem;
  contact_person: ContactPerson;
  comment:string;
  is_done:boolean;
}
