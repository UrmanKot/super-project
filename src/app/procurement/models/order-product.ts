import {Nomenclature} from '@shared/models/nomenclature';
import {Locator} from '../../warehouse/models/locator';
import {ListProduct} from '../../warehouse/models/list-product';
import {Technology} from '../../product-structure/models/technology';
import {GroupedRequest} from '../../warehouse/models/grouped-request';
import {User} from '@shared/models/user';

export enum OrderRequestType {
  MANUALLY = "0",
  AUTOMATICALLY = "1"
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
  production_list_products?: any[];
  is_technology_ready?: boolean;
  not_ordered_product_id?: number;
  free_quantity_without_final_status?: number;
  quality_control?: number;
  // details?: OrderDetail;
  isReady?: boolean;
  products: OrderProduct[];
  reception_date?: string;
  isSelected?: boolean;
  checkedForGeneration?: boolean;
  serial_numbers?: { id: number, type_with_number: string, is_passed: boolean }[];
  creator?: User;
  is_subtracted_from_free_quantity?: boolean;
  invoice_quantity?: number;
  proforma_invoice_quantity?: number;
}

export class OrderProductGroupedForPrint  extends OrderProduct {
  // orderProduct?: OrderProduct;
  // listProduct?: ListProduct;
  children?: GroupedRequest[];
}

export class OrderMaterial {
  readonly id: number;
  name: string;
  code: string;
  required_quantity: number;
  list_product: ListProduct;
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
}

