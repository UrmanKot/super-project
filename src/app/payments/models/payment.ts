import {Company} from "../../crm/models/company";
import {Invoice} from "../../procurement/models/invoice";


export class Payment {
  readonly id: number;
  payment_date?: Date;
  payment_date_to?: Date;
  total_price?: number;
  supplier?: Company;
  invoices?: Invoice[];
  service_invoices?: Invoice[]
  invoice?: Invoice;
  is_paid?: boolean;
  status?: string;
  filter_status?
  amount:number;
}

export class PaymentFile {
  readonly id: number;
  file: string;
  payment_id: number;
}
