import {Currency} from './warehouse';
import {Locator} from './locator';
import {Product} from '../../product-structure/models/product';
import {SerialNumber} from '../../procurement/models/invoice';

export class PhysicalInventory {
  readonly id: number;
  status: '0' | '1';
  completed: boolean;
  system_creation_date: string;
  warehouses: Currency[];
  locators: Locator[];
}

export class PhysicalInventories {
  count: number;
  next: string;
  previous: string;
  results: PhysicalInventory[];
}

export class InventoryList {
  id: number;
  is_scanned: boolean;
  products: Product[];
}

export class InventoryLists {
  count: number;
  next: string;
  previous: string;
  results: InventoryList[];
}

export class InventoryProduct {
  id: number;
  product: Product;
  new_quantity: number;
  initial_quantity: number;
  initial_locator: number;
  current_available_quantity?: number;
  total_cost: string;
  total_price: string;
  serial_number: SerialNumber;
  unit_cost: string;
  unit_price: string;
  checkedForGeneration?: boolean;
  is_scanned?: boolean;
  is_scanned_root?: boolean;
}
