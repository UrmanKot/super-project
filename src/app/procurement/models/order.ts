import {Company} from '../../crm/models/company';
import {PurchaseCategory} from '../../purchasing/models/purchase-category';
import {Task} from '@shared/models/task';
import {Technology} from '../../product-structure/models/technology';

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
  order?: Order;
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
  ordered_products_unique_technologies?: Technology[]
  qc_wh_started_date?: Date;
  qc_closed_date?: Date;
  qc_started_date?: Date;
  qc_wh_closed_date?: Date;
  freeNomenclatureQuantityAtChain?: number;
  sent_to_qc_quantity?: number;
  isReceiptDateOverdue?: boolean;
}

export class Orders {
  prev: string;
  next: string;
  count: number;
  results: Order[];
}
