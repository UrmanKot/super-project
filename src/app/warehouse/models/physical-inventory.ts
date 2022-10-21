import {Warehouse} from './warehouse';
import {Locator} from './locator';
import {Product} from '../../product-structure/models/product';

export class PhysicalInventory {
  readonly id: number;
  status: '0' | '1';
  completed: boolean;
  system_creation_date: string;
  warehouses: Warehouse[];
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
  total_cost: string;
  total_price: string;
  unit_cost: string;
  unit_price: string;
  checkedForGeneration?: boolean;
  is_scanned?: boolean;
  is_scanned_root?: boolean;
}
