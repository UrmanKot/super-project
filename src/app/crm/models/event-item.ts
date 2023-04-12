import {EventType} from './event-type';
import {CRMEmployee} from './crm-employee';
import {Company} from './company';
import {ContactPerson} from '@shared/models/contact-person';

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
  on_companies: {
    comment: string;
    company: Company;
    company_id?: number;
    company_name?: string;
    id?: number;
    impression?: string;
    is_done?: boolean;
  }[];
  contact_ids?: number[];
  company_ids?: number[];
  // on_contacts: ContactPerson[];
  on_contacts: {
    comment?: string;
    contact_person: ContactPerson;
    contact_person_id: number;
    id: number;
    is_done?: boolean;
  }[];
  is_complete: boolean;
  is_inner: boolean;
  is_locked_by_company: boolean;
  isDatesColliding?: boolean;
  scheduler?: any;
  root?: any;
  is_done?: boolean;
  impression?: string;
}
