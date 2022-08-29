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
  status?;
  filter_status?;
}
