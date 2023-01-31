import {Company} from '../../crm/models/company';
import {PurchaseCategory} from '../../purchasing/models/purchase-category';
import {Task} from '@shared/models/task';

export class Order {
  readonly id: number;
  request: string;
  supplier: Company;
  created?: any;
  updated?: string;
  deadline?: Date;
  promised_date: string;
  comment: string;
  statuses: Array<any>;
  dates: any;
  type;
  accointing_type;
  status?;
  order_products?: any[];
  root_lists?: any[];
  root_production_list_products?: any[];
  root_search_lists?;
  created_to?;
  completed?: boolean;
  qc_completed?: boolean;
  searchFieldList?: any;
  searchFiledStatus?: any;
  quality_control: boolean;
  is_closed?: boolean;
  is_prepared?: boolean;
  purchase_category?: PurchaseCategory;
  companyId?: number;
  statusesIds?: number[];
  dateFrom?: Date;
  dateTo?: Date;
  rootLists?: [];
  list_ids?: number[];
  orderStatuses?: any;
  root_production_plans?: any[];
  unique_root_production_plans?: any[];
  root_production_plans_display?: {root_list: Task, list: Task[]}[];
  activeStatusDate?: any;
  // root_production_list_products?: ListProduct[];
  can_select_supplier?: boolean;
  is_hand_added?: boolean;
  accounting_type?: number;
}

export class Orders {
  prev: string;
  next: string;
  count: number;
  results: Order[];
}
