import {Company} from '../../crm/models/company';

export class ContactPerson {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  position: string;
  phone_number: string;
  comment: string;
  company: number | Company;
  name?: string;
  linked_companies: Company[];
  linked_contacts: ContactPerson[];
  activities?;
  fullName?: string;
  is_done?: boolean;
  contact_person_id?: number;

}
