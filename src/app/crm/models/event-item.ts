import {EventType} from './event-type';
import {CRMEmployee} from './crm-employee';
import {Company} from './company';

export class EventItem {
  readonly id: number;
  event_type: EventType;
  start: Date;
  end: Date;
  startDate: Date;
  endDate: Date;
  employee_ids: CRMEmployee[];
  employee: CRMEmployee[];
  description?: string;
  google_event_id: string;
  task;
  on_companies: Company[];
  contact_ids?: number[];
  company_ids?: number[];
  // on_contacts: ContactPerson[];
  is_complete: boolean;
  is_inner: boolean;
  is_locked_by_company: boolean;
  isDatesColliding?: boolean;
}
