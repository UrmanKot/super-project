import {Order} from './order';
import {Company} from "../../crm/models/company";
import {InvoiceProduct} from './invoice-product';
import {Currency} from "@shared/models/currency";

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
  invoice?: Invoice;
  currency: Currency;
  invoice_date: Date;
  items_reception_date: Date;
  items_reception_date_to: Date;
  invoice_reception_date: Date;
  invoice_reception_date_to: Date;
  due_date: Date;
  is_proforma: boolean;
  proformas: Invoice[] | null;
  total_price_converted: number;
  have_payment_amount_created?: number;
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
  rma_products_count?: number;
  delivery_days?: number;
  exchange_rate?: string;

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
  qc_started_date?: any;
}

export class SerialNumber {
  id: number;
  type_with_number: string;
  is_passed: boolean;
  traversed?: boolean;
  warehouseproductqcprotocol_set?: any;
  invoice_product_id?: number;
  reserved_for_root_production_list_info?: {
    id: number;
    name: string;
    code: string;
    task_id: number;
  }
}

export class Invoices {
  prev: string;
  next: string;
  count: number;
  results: Invoice[];
}

export class InvoiceFile {
  readonly id: number;
  file: string;
  invoice_id: number;
}
