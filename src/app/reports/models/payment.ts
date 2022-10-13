export class Payment {
  readonly id: number;
  payment_date?: Date;
  payment_date_to?: Date;
  total_price?: number;
  // supplier?: Company;
  // invoices?: Invoice[];
  invoice_total_price: number;
  payment_amount: string;
  is_paid?: boolean;
  status?: string;
  filter_status?;
  invoice: {
    id: number;
    order: {
      id: number;
      accounting_type: number;
      purchase_category: any
    }
  }
}
