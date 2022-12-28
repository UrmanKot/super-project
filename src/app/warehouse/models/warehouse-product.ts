import {Nomenclature} from '@shared/models/nomenclature';
import {Locator} from './locator';
import {AreaLocator} from './area-locator';

export class WarehouseProduct {
  readonly id: number;
  quantity?: number;
  total_quantity?: number;
  total_area_locator_quantity?: number;
  total_locator_quantity?: number;
  name?: string;
  code?: string;
  fullName?: string;
  nomenclature?: number & Nomenclature;
  // serial_number?: string | SerialNumber;
  serial_number?: any;
  serial_numbers?: any;
  locator?: Locator;
  area_locator?: AreaLocator;
  // invoice?: number | Invoice;
  uid?: number;
  uom?: string;
  freeQuantity?: number;
  extra_info: WarehouseProductExtraInfo[];
  checkedForGeneration?: boolean;

  used_by_order?: {order_id: number, accounting_type: number}[]
}

export class WarehouseProducts {
  prev: string;
  next: string;
  count: number;
  results: WarehouseProduct[]
}

export class WarehouseProductExtraInfo {
  id: number;
  is_reserved_for_sale: boolean;
  quantity: number;
  serial_number_str: string;
  serial_number_id: number;
  invoice_id: number;
  order_id: number;
  reserved_by_opened_production_lists_quantity: number;
  warehouseproductqcprotocol: number;
}
