import {Nomenclature} from "@shared/models/nomenclature";
import {ListProduct} from "../../warehouse/models/list-product";
import {Invoice} from "../../procurement/models/invoice";
import {Category} from "../../product-structure/models/category";

export class AccountingProduct {
  readonly id: number;
  nomenclature: Nomenclature;
  total_assembly_cost?: string;
  quantity: number;
  completed?: string;
  lft: number;
  rght: number;
  sumTotal?: number;
  sumCost?: number;
  parent: number;
  list_product?: ListProduct;
  assembly_info?: any[];
  accounting_services?;
  written_off_warehouse_products?: any;
  product_info: {
    invoice: number;
    invoice_creation_date: string;
    order: number;
    quantity: number;
    supplier: string;
    total_discount_price: number;
    total_final_price: number;
    unit_discount_price: number;
    unit_final_price: number;
  }[];
  from_products?: any;
  visible?: boolean;
  is_old_cost_report?: boolean;
  list_product_id?: number;
  task_id?: number;
}

export class HistoryProduct {
  accepted: HistoryProductAccepted;
  out: HistoryProductOut[];
}

export class HistoryProductOut {
  created?: Date;
  quantity?: number;
  remains?: number;
  invoice?: Invoice;
  nomenclature?: Nomenclature;
  order?: number;
  current_technology?: string;
  supplier?: string;
  supplier_unit_price?: number;
  supplier_total_price?: number;
  supplier_unit_cost?: number;
  supplier_total_cost?: number;
}

export class HistoryProductAccepted {
  document_creation_date?: Date;
  accepted_quantity?: number;
  invoice?: Invoice;
  nomenclature?: Nomenclature;
  order?: number;
  current_technology?: string;
  supplier?: string;
  supplier_unit_price?: number;
  supplier_total_price?: number;
  supplier_unit_cost?: number;
  supplier_total_cost?: number;
  type?: string;
}

export class BalanceProduct {
  readonly id: number;
  nomenclature: Nomenclature;
  purchase_category: any;
  name?: string;
  code?: string;
  category?: Category;
  quantity?: number;
  supplier?: string;
  invoice?: string;
  date: Date;
  current_technology?: string;
  supplier_total_cost?: number;
  supplier_total_price?: number;
  supplier_unit_cost?: number;
  supplier_unit_price?: number;
  order?: number;
  document_creation_date?;
  written_off_for_list?: string;
  total_quantity?: number;
  type?: any;
  total_cost?;
  accepted_by_invoices?: {
    invoice: number;
    document_creation_date: string;
    order: number;
    quantity: number;
    accepted_quantity?: number;
    supplier: string;
    total_cost: number;
    total_price: number;
    unit_cost: number;
    unit_price: number;
    current_technology?: string;
    supplier_total_cost?: number;
    supplier_total_price?: number;
    supplier_unit_cost?: number;
    supplier_unit_price?: number;
  }[];
  extra_info?: {
    invoice: number;
    document_creation_date: string;
    order: number;
    quantity: number;
    supplier: string;
    total_cost: number;
    total_price: number;
    unit_cost: number;
    unit_price: number;
    current_technology?: string;
    supplier_total_cost?: number;
    supplier_total_price?: number;
    supplier_unit_cost?: number;
    supplier_unit_price?: number;
    physical_inventory?: any;
  }[];

  accepted_by_orders?: {
    invoice: number;
    document_creation_date: string;
    order: number;
    quantity: number;
    supplier: string;
    total_cost: number;
    total_price: number;
    unit_cost: number;
    unit_price: number;
    current_technology?: string;
    supplier_total_cost?: number;
    supplier_total_price?: number;
    supplier_unit_cost?: number;
    supplier_unit_price?: number;
  }[];

  accepted_by_physical_inventories?: any[]
}

export class AccountingProducts {
  prev: string;
  next: string;
  count: number;
  results: AccountingProduct[];
}
