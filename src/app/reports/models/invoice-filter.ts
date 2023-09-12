export class InvoiceFilter {
  id: number;
  name: string;
  supplier?: any;
  supplier_category?: any;
  system_creation_date_after?: string | Date;
  system_creation_date_before?: string | Date;
  invoice_reception_date_after?: string | Date;
  invoice_reception_date_before?: string | Date;
  items_reception_date_after?: string | Date;
  items_reception_date_before?: string | Date;
  has_proformas?: boolean;
  is_paid?: boolean;
  completed?: boolean;
  type?: boolean;
}
