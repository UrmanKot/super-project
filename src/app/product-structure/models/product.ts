import {Nomenclature} from '@shared/models/nomenclature';
import {Locator} from '../../warehouse/models/locator';
import {SerialNumber} from '../../procurement/models/invoice';

export class Product {
  readonly id: number;
  root_id?: number;
  quantity?: number;
  required_quantity?: number;
  nomenclature?: Nomenclature;
  position?: number;
  task_required_quantity?: number;
  group_uid?: number;
  countProducts?: number;
  product?: Product;
  products?: Product[];
  serial_number?: SerialNumber;
  is_scanned?: boolean;
  is_scanned_root?: boolean;
  checkedForGeneration?: boolean;
  parent?: number;
  lft?: number;
  rght?: number;
  locator?: Locator;
  level?: number;
  physical_inventory_nomenclature?: any;
}

export class ProductFile {
  readonly id: number;
  file: string;
  product_id: number;
}
