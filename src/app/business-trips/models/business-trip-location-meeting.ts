import {Company} from '../../crm/models/company';
import {ContactPerson} from '@shared/models/contact-person';

export class BusinessTripLocationMeeting {
  readonly id?: number;
  readonly location_id?: number;
  company: Partial<Company>;
  contacts: ContactPerson[];

  fullCompany?: Partial<Company>;
  fullContacts?: ContactPerson[];
}
