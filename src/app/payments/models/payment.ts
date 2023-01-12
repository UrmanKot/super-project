import {Company} from '../../crm/models/company';
import {Invoice} from '../../procurement/models/invoice';

export class Payment {
  readonly id: number;
  payment_date?: Date;
  payment_date_to?: Date;
  service_invoices?: Invoice[];
  total_price?: number;
  supplier?: Company;
  invoices?: Invoice[];
  invoice_total_price: number;
  payment_amount: string;
  is_paid?: boolean;
  status?: string;
  filter_status?;
  amount: number;
  invoice: {
    id: number;
    order: {
      id: number;
      accounting_type: number;
      purchase_category: any
    }
  };
}

export class PaymentFile {
  readonly id: number;
  file: string;
  payment_id: number;
}
