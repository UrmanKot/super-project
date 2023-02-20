import {ListProduct} from './list-product';

export class Request {
  readonly id?: number;
  for_order_product: any;
  material_nomenclature: any;
  order_product_nomenclature: any;
  technology?: string;
  is_scanned?: boolean;
  root_production_list_products?: any;
  required_quantity?: number;
  created?: Date;
  reserved_serial_products: any[];
  parent_production_list_products: any[];
  list_product: ListProduct;
  parent_task?: number;
  task?: number;
  locators?: any;
  warehouse_quantity?: any;
  is_reserved_warehouse_quantity?: boolean;
}
