import {ContactPerson} from '@shared/models/contact-person';

export class Company {
  readonly id: number;
  categories?: any | null;
  linked_contacts?: number[];
  name?: string;
  address?: string;
  comment?: string;
  tax_number?: string;
  registration_number?: string;
  linked_companies?: any[];
  website?: string;
  phone_number?: string;
  email?: string;
  supplier_nomenclature?: string;
  filter_id?;
  contact_persons?: ContactPerson[];
  activities?;
  // files?: CompanyFile[];
  accounting_number?: number;
  has_not_vat?: boolean;
  is_fixed_asset?: boolean;
  is_non_ressivable?: boolean;
  company_name?: string;
  company_id?: number;
  country?: any;
  region?: any;
  link_weight?: number;
  contact_person?: ContactPerson;
  to_company?: any;
}

export class Companies {
  count: number;
  next: string;
  previous: string;
  results: Company[];
}

export enum ECompanyCategories {
  OUTSOURCE = '0',
  SUPPLIER = '1',
  CUSTOMER = '2',
  COMPETITOR = '3',
  FORWARDER = '4',
}

export type AddEventModalType = 'withEmployee' | 'withoutEmployee';
