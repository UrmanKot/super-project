import {Nomenclature} from "@shared/models/nomenclature";
import {WarehouseProduct} from "../../warehouse/models/warehouse-product";
import {Company} from "../../crm/models/company";
import {EventItem} from "../../crm/models/event-item";

export class SalesChain {
  chain_status: SalesStatus;
  comment: string;
  company: Company;
  company_id: number;
  created_at: string;
  events: any[];
  files: any[];
  id: number;
  statuses: []
  activities: SalesActivity[]
}

export class SalesChains {
  prev: string;
  next: string;
  count: number;
  results: SalesChain[]
}

export class SalesStatus {
  id: number;
  date: string;
  name?: string;
  is_active: boolean;
  sales_chain: number;
  status: {
    id: number
    name: string
  };
}

export class SalesReservation {
  created_at: string;
  updated_at: string;
  id: string;
  list_product: number;
  nomenclature: Nomenclature;
  quantity: number;
  sales_chain: number;
  warehouse_product: WarehouseProduct;
}

export class SalesActivity {
  comment: string;
  company: number;
  event: EventItem;
  id: number;
  is_done: boolean;
}

export class SalesFile {
  readonly id: number;
  file: string;
  sales_chain: SalesChain
}
