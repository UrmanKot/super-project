import {Company} from '../../crm/models/company';
import {SalesChain} from '../../sales/models/sales-chain';
import {QcDeliveryStatus} from '../../procurement/models/qc-delivery-status';
import {Status} from "../../procurement/models/status";

export class DeliveryChain {
  readonly id: number;
  customer?: Company;
  status?: Status;
  serial_number?: string;
  comment?: string;
  sales_chain: SalesChain;
  created_at: Date;
  closed_at?: Date;
  estimate_date?: Date;
  qc_delivery_started_date?: Date;
  qc_delivery_closed_date?: Date;
  qc_delivery_status?: QcDeliveryStatus;
  sales_chain_id: number;
}

export class DeliveryChains {
  prev: string;
  next: string;
  count: number;
  results: DeliveryChain[];
}
