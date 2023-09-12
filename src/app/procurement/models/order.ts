import {Company} from '../../crm/models/company';
import {PurchaseCategory} from '../../purchasing/models/purchase-category';
import {Task} from '@shared/models/task';
import {Technology} from '../../product-structure/models/technology';
import {OrderProduct} from './order-product';
import {ListProduct} from '../../warehouse/models/list-product';
import {ToolRequest} from '../../warehouse/models/tool-request';

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
  display_production_list_products?: { list: ListProduct, count?: number, allLists: ListProduct[]}[];
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
  uniqueOrderProducts?: OrderProduct[];
  orderStatuses?: any;
  root_production_plans?: any[];
  unique_root_production_plans?: any[];
  root_production_plans_display?: {root_list: Task, list: Task[]}[];
  root_lists_display?: {root_list: ListProduct, list: ListProduct[], count: number, total_quantity: number}[];
  activeStatusDate?: any;
  // root_production_list_products?: ListProduct[];
  can_select_supplier?: boolean;
  is_hand_added?: boolean;
  accounting_type?: number;
  ordered_products_unique_technologies?: Technology[]
  qc_delivery_status?: any;
  qc_wh_started_date?: Date;
  qc_closed_date?: Date;
  qc_started_date?: Date;
  qc_wh_closed_date?: Date;
  qc_delivery_closed_date?: Date;
  qc_delivery_started_date?: Date;
  freeNomenclatureQuantityAtChain?: number;
  sent_to_qc_quantity?: number;
  isReceiptDateOverdue?: boolean;
  contains_rma_invoices?: boolean;
  tool_requests?: ToolRequest[];
  hasRequestedByMinimumValueProducts?: boolean;
  expected_delivery_date?: Date;
  is_overdue?: boolean;

  uniqueToolRequests?: [
    {
      toolRequest?: ToolRequest,
      count?: number
    }
  ];

  constructor(config?: Partial<Order>) {
    if (config) {
      Object.assign(this, config);
    }
  }

  generateUniqueToolRequests() {
    if (this.order_products) {
      this.order_products.forEach(prod => {
        prod.tool_requests.forEach(request => {
          const addedRequest = this.uniqueToolRequests?.find(toolRequest => toolRequest.toolRequest.tool_order.area_locator.id === request.tool_order.area_locator.id)
          if (!addedRequest) {
            if (!this.uniqueToolRequests) {
              this.uniqueToolRequests = [{
                toolRequest: request,
                count: 1
              }];
            } else {
              this.uniqueToolRequests.push({
                toolRequest: request,
                count: 1
              });
            }
          } else {
            addedRequest.count++;
          }
        });
      });
    }

    if (!this.order_products && this.tool_requests) {
      this.tool_requests.forEach(request => {
        const addedRequest = this.uniqueToolRequests?.find(toolRequest => toolRequest.toolRequest.tool_order.area_locator.id === request.tool_order.area_locator.id)
        if (!addedRequest) {
          if (!this.uniqueToolRequests) {
            this.uniqueToolRequests = [{
              toolRequest: request,
              count: 1
            }];
          } else {
            this.uniqueToolRequests.push({
              toolRequest: request,
              count: 1
            });
          }
        } else {
          addedRequest.count++;
        }
      });
      console.log('prepare');

    }
  }
}

export class Orders {
  prev: string;
  next: string;
  count: number;
  results: Order[];
}
