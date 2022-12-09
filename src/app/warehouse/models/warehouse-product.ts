import {Nomenclature} from '@shared/models/nomenclature';
import {Locator} from './locator';

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
  // invoice?: number | Invoice;
  uid?: number;
  uom?: string;
  freeQuantity?: number;
  // extra_info: WarehouseProductExtraInfo[];
  checkedForGeneration?: boolean;

  used_by_order?: {order_id: number, accounting_type: number}[]
}

export class WarehouseProducts {
  prev: string;
  next: string;
  count: number;
  results: WarehouseProduct[]
}
