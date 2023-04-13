import {List} from './list';
import {Nomenclature} from '@shared/models/nomenclature';
import {SerialNumber} from '../../procurement/models/invoice';
import {Technology} from '../../product-structure/models/technology';

export class ListProduct {
  readonly id: number;
  uid?: number;
  total_required_quantity: number;
  required_quantity_per_one: number;
  reserved_quantity: number;
  warehouse_quantity: string;
  required_quantity: number;
  actual_quantity: number;
  level: number;
  list: number | List;
  nomenclature: Nomenclature;
  available_on_locator?: any
  future_serial_numbers?: SerialNumber[];
  reserved_serial_numbers?: SerialNumber[];
  has_children?: any;
  parent?: number;
  status?: string;
  list_url?: string;
  products?: ListProduct[];
  technology: Technology;
  technologies: any[];
  groupedProductIds?: number[];
  groupedProducts: ListProduct[];
  task_sort_value?: number;
  blockedExpand?: boolean;
  warehouseQuantities?: number[];
  next_technology_list_product: number;
  parent_technology_list_product?: number;
  groupId?: number;
  groupKey?: string;
  filteredProducts?: ListProduct[];
  uiParent?: number;
  currentTechnology: Technology;
  pureTotalRequiredQuantity?: number;
  children?: ListProduct[];
}

export class ActualQuantityPayload {
  id: number;
  actual_quantity: number;
  serial_product_ids?: number[];
  root_serial_numbers_in_production?: number[];
  group?: number;
}

export class ListProductQuantity {
  products: ListProduct[];
  quantity: number;
}
