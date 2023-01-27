import {Nomenclature} from '@shared/models/nomenclature';
import {Locator} from '../../warehouse/models/locator';
import {ListProduct} from '../../warehouse/models/list-product';
import {Technology} from '../../product-structure/models/technology';

export class OrderProduct {
  readonly id: number;
  ids?: number[];
  current_technology: any;
  nomenclature: Nomenclature;
  order: string;
  accepted_quantity: number;
  initial_quantity: number;
  quantity: number;
  ordered_quantity: number;
  passed_quantity?: number;
  not_passed_quantity?: number;
  request_type: string;
  status: 0 | 1 | 2 | string;
  request_date?;
  request_id?;
  technologies?;
  details?: OrderDetail;
  root_lists?;
  root_production_list_products?: any[];
  exists_on_locators?: Locator[];
  production_list_products?: any[];
  is_technology_ready?: boolean;
  not_ordered_product_id?: number;
  quality_control?: number;
  // details?: OrderDetail;
  isReady?: boolean;
  products: OrderProduct[];
  reception_date?: string;
  isSelected?: boolean;
  checkedForGeneration?: boolean;
  serial_numbers?: { id: number, type_with_number: string, is_passed: boolean }[];
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

