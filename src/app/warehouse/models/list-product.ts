import {List} from './list';
import {Nomenclature} from '@shared/models/nomenclature';
import {SerialNumber} from '../../procurement/models/invoice';

export class ListProduct {
  readonly id: number;
  total_required_quantity: string;
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
}
