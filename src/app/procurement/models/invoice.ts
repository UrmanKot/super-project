import {Order} from './order';
import {Company} from "../../crm/models/company";

export class Invoice {
  readonly id: number;
  self_serial_number?: string;
  self_proforma_serial_number?: string;
  supplier_serial_number: string;
  supplier?: Company;
  total_price: number;
  ddv: number;
  tax: number;
  completed: boolean;
  qc_completed: boolean;
  order?: Order;
  related_files: boolean;
  // currency: Currency;
  invoice_date: Date;
  items_reception_date: Date;
  items_reception_date_to: Date;
  invoice_reception_date: Date;
  invoice_reception_date_to: Date;
  due_date: Date;
  is_proforma: boolean;
  proformas: Invoice[] | null;
  total_price_converted: number;
  pure_total_price?: number;
  pure_total_price_converted?: number;
  label?;
  payment_status: string;
  supplierId?: number;
  paid_interest?: number;
  supplier_total_price?: number;
  to_invoices?: any;
  otherCurrency?: number;
  isAux?: boolean;
  isPayment?: boolean;
  isCompleted?: boolean;
  purchase_category?: any;

  creationDateFrom?: Date;
  creationDateTo?: Date;

  invoiceReceptionFrom?: Date;
  invoiceReceptionTo?: Date;

  itemsReceptionFrom?: Date;
  itemsReceptionTo?: Date;
  relatedStatus?: boolean;

  supplierCategories: string[];
  root_production_plans?: any[];
  unique_root_production_plans?: any[];

  system_creation_date?: Date;
  system_creation_date_to: Date;
  related_status?;
  general_invoices?: any[];

}
