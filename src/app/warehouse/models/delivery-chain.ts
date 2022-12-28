import {Company} from '../../crm/models/company';
import {SalesChain} from '../../sales/models/sales-chain';

export class DeliveryChain {
  readonly id: number;
  customer?: Company;
  status?: { id: number; name: string; };
  serial_number?: string;
  comment?: string;
  sales_chain: SalesChain;
  created_at: Date;
  closed_at?: Date;
}
