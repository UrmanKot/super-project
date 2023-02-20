import {Request} from './request';
import {SerialNumber} from '../../procurement/models/invoice';
import {Locator} from './locator';

export class GroupedRequest extends Request {
  ids?: number[];
  requests?: Request[];
  all_reserved_serial_products?: SerialNumber[];
  total_required_quantity?: number;
  unique_locators?: Locator[];
  available_quantity_sum?: number;
}
