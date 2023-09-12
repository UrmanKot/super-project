import {Request} from './request';
import {SerialNumber} from '../../procurement/models/invoice';
import {Locator} from './locator';

export class GroupedRequest extends Request {
  ids?: number[];
  listIds?: number[];
  for_order_ids?: number[];
  requests?: Request[];
  all_reserved_serial_products?: SerialNumber[];
  total_required_quantity?: number;
  total_initial_quantity?: number;
  unique_locators?: Locator[];
  available_quantity_sum?: number;
  qc_delivery_status?: any;
}
