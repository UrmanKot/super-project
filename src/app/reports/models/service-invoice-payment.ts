export class ServiceInvoicePayment {
  readonly id: number;
  payment_date?: Date;
  total_price?: number;
  // service_invoices?: Invoice[];
  is_paid?: boolean;
  service_invoice_total_price: number;
  service_invoice_payment_amount: string;
  payment_date_to?;
  // supplier?: Company;
  serviceinvoice: {
    id: number,
    order: {
      id: number;
      accounting_type: number,
      purchase_category: any
    }
  }
  status?;
  filter_status?;
}
