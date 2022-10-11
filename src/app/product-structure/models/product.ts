import {Nomenclature} from '@shared/models/nomenclature';

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
  // serial_number?: SerialNumber;
  is_scanned?: boolean;
  is_scanned_root?: boolean;
  checkedForGeneration?: boolean;
  parent?: number;
}

export class ProductFile {
  readonly id: number;
  file: string;
  product_id: number;
}
