import {List} from './list';
import {Nomenclature} from '@shared/models/nomenclature';
import {SerialNumber} from '../../procurement/models/invoice';
import {Technology} from '../../product-structure/models/technology';

export class ListProduct {
  readonly id: number;
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
  groupedProductIds?: number[];
  technologies: any[];
  children?: ListProduct[]
  task_sort_value?: number;
  blockedExpand?: boolean;
}
