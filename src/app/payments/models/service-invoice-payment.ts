import {Company} from "../../crm/models/company";
import {Invoice} from "../../procurement/models/invoice";

export class ServiceInvoicePayment {
  readonly id: number;
  payment_date?: Date;
  total_price?: number;
  service_invoices?: Invoice[];
  is_paid?: boolean;
  paid_by_card?: boolean;
  service_invoice_total_price: number;
  service_invoice_payment_amount: string;
  self_serial_number?: string;
  self_proforma_serial_number?: string;
  total_price_converted: number;
  is_proforma: boolean;
  invoice_total_price?: number;
  payment_amount?: string;
  label?:string;
  payment_method?:string;
  payment_date_to?;
  supplier?: Company;
  serviceinvoice: {
    id: number,
    order: {
      id: number;
      accounting_type: number,
      purchase_category: any,
    }
  }
  unique_root_plans?: {planName: string, count: number}[]
  invoices?: {
    id: number,
    order: {
      id: number;
      accounting_type: number,
      purchase_category: any,
      root_production_list_products: any
    },
    supplier?: {
      id: number
    }
  }[]
  status?;
  filter_status?;
  amount:number;
}
export class ServiceInvoicePaymentFile {
  readonly id: number;
  file: string;
  service_invoice_payment_id: number;
}
