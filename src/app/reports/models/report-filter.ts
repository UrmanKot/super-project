export class ReportFilter {
  id: number;
  name: string;
  nomenclature_name?: string;
  nomenclature_code?: string;
  supplier?: any;
  supplier_category?: any;
  nomenclature_categories?: any;
  system_creation_date_after?: string | Date;
  system_creation_date_before?: string | Date;
  invoice_reception_date_after?: string | Date;
  invoice_reception_date_before?: string | Date;
  items_reception_date_after?: string | Date;
  items_reception_date_before?: string | Date;
  is_paid?: boolean;
  opened?: boolean;
}
