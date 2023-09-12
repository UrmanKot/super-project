import {Nomenclature} from '@shared/models/nomenclature';
import {Locator} from '../../warehouse/models/locator';
import {ListProduct} from '../../warehouse/models/list-product';
import {Technology} from '../../product-structure/models/technology';
import {GroupedRequest} from '../../warehouse/models/grouped-request';
import {User} from '../../administration/models/user';
import {AreaLocator} from '../../warehouse/models/area-locator';
import {ToolRequest} from '../../warehouse/models/tool-request';

export enum OrderRequestType {
  MANUALLY = "0",
  AUTOMATICALLY = "1",
  TOOL_REQUEST = "2",
  REQUEST_BY_VOLUME = "3",
}

export class OrderProduct {
  readonly id: number;
  ids?: number[];
  current_technology: any;
  nomenclature: Nomenclature;
  order: string;
  accepted_quantity: number;
  initial_quantity: number;
  quantity: number;
  totalQuantity?: number;
  ordered_quantity: number;
  passed_quantity?: number;
  not_passed_quantity?: number;
  request_type: string;
  first_root_plan_name?: string;
  first_product_list_name?: string;
  status: 0 | 1 | 2 | string;
  request_date?;
  request_id?;
  technologies?;
  details?: OrderDetail;
  root_lists?;
  root_production_list_products?: any[];
  equal_order_products?: OrderProduct[];
  exists_on_locators?: Locator[];
  display_production_list_products?: { list: ListProduct, count?: number, allLists: ListProduct[]}[];
  production_list_products?: any[];
  is_technology_ready?: boolean;
  not_ordered_product_id?: number;
  free_quantity_without_final_status?: number;
  root_lists_display?: {root_list: ListProduct, list: ListProduct[], count: number, total_quantity: number}[];
  quality_control?: any;
  // details?: OrderDetail;
  isReady?: boolean;
  is_added_directly?: boolean;
  products: OrderProduct[];
  for_tool_request?: ToolRequest;
  tool_requests?: ToolRequest[];
  reception_date?: string;
  isSelected?: boolean;
  checkedForGeneration?: boolean;
  serial_numbers?: { id: number, type_with_number: string, is_passed: boolean }[];
  creator?: User;
  is_subtracted_from_free_quantity?: boolean;
  invoice_quantity?: number;
  proforma_invoice_quantity?: number;
  orderProducts?: OrderProduct[];
  totalAcceptedQuantity?: number;
  totalQuantityPassed?: number;
  totalQuantityNotPassed?: number;
  totalSerialNumbers: any[];
  quantity_to_write_off?: number;
  task_materials?: any[]
  task_machines?: any[]
  uniqueToolRequests?: [
    {
      toolRequest?: ToolRequest,
      count?: number
    }
  ];

  uniqueToolOrders?: ToolRequest[];

  constructor(config?: Partial<OrderProduct>) {
    if (config) {
      Object.assign(this, config);
    }
  }

  generateUniqueToolRequests() {
    this.tool_requests?.forEach(request => {
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

      this.uniqueToolOrders = [];
      const addedToolOrder = this.uniqueToolOrders?.find(toolRequest => toolRequest.tool_order.id === request.tool_order.id)
      if (!addedToolOrder) {
        this.uniqueToolOrders.push(request);
      }
    });
  }

}

export class OrderProductGroupedForPrint  extends OrderProduct {
  // orderProduct?: OrderProduct;
  // listProduct?: ListProduct;
  listId?: number;
  children?: GroupedRequest[];
}

export class OrderMaterial {
  readonly id: number;
  name: string;
  code: string;
  technology?: string;
  required_quantity: number;
  material_nomenclature?: Nomenclature;
  order_product_nomenclature?: Nomenclature;
  list_product: ListProduct;
  allIds?: number[];
  orderProductTechnologyId?: number;
  totalInitialQuantity?: number;
  totalRequiredQuantity?: number;
  initial_quantity?: number;
  for_order_product?: {
    id: number;
    nomenclature: Nomenclature;
  };
}

export class OrderDetail {
  current_technology: Technology;
  task_employees: [];
  task_materials: OrderMaterial[];
  task_machines: OrderMachine[];
}

export class OrderProducts {
  prev: string;
  next: string;
  count: number;
  results: OrderProduct[];
}

export class OrderMachine {
  readonly id: number;
  machine: any;
  duration: any
}

