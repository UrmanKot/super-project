import {Role} from '@shared/models/role';

export class User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  groups: Role[];
  companycategory_set?: number[];
  company_categories?: {id: number, name: string}[];
  event_types?: {id: number, name: string}[];
  eventtype_set?: number[];
  can_edit_administration?: boolean;
  can_edit_confirmation?: boolean;
  can_edit_contacts_and_events?: boolean;
  can_edit_manufacturing?: boolean;
  can_edit_manufacturing_procurement?: boolean;
  can_edit_outsourcing?: boolean;
  can_edit_product_structure?: boolean;
  can_edit_purchase?: boolean;
  can_edit_quality_control?: boolean;
  can_edit_reports?: boolean;
  can_edit_sales?: boolean;
  can_edit_warehouse?: boolean;
}

export class Users {
  count: number;
  next: string;
  previous: string;
  results: User[];
}

export class UserPermissions {
  can_edit_product_structure?: boolean;
  can_edit_confirmation?: boolean;
  can_edit_warehouse?: boolean;
  can_edit_manufacturing_procurement?: boolean;
  can_edit_quality_control?: boolean;
  can_edit_manufacturing?: boolean;
  can_edit_contacts_and_events?: boolean;
  can_edit_outsourcing?: boolean;
  can_edit_purchase?: boolean;
  can_edit_sales?: boolean;
  can_edit_reports?: boolean;
  can_edit_administration?: boolean;
}
