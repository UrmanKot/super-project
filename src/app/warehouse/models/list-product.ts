import {List} from './list';
import {Nomenclature} from '@shared/models/nomenclature';
import {SerialNumber} from '../../procurement/models/invoice';
import {Technology} from '../../product-structure/models/technology';

export class ListProduct {
  readonly id: number;
  uid?: number;
  total_required_quantity: number;
  required_quantity_per_one: number;
  reserved_quantity: number;
  warehouse_quantity: string;
  required_quantity: number;
  actual_quantity: number;
  level: number;
  list: number | List;
  nomenclature: Nomenclature;
  available_on_locator?: any;
  future_serial_numbers?: SerialNumber[];
  reserved_serial_numbers?: SerialNumber[];
  reserved_on_stock_serial_numbers?: SerialNumber[];
  has_children?: any;
  parent?: number;
  status?: string;
  list_url?: string;
  products?: ListProduct[];
  technology: Technology;
  groupedProductIds?: number[];
  groupedListIds?: number[];
  productionPlanId?: number;
  technologies: any[];
  groupedProducts: ListProduct[];
  task_sort_value?: number;
  blockedExpand?: boolean;
  warehouseQuantities?: number[];
  next_technology_list_product: number;
  parent_technology_list_product?: number;
  groupId?: number;
  groupKey?: string;
  filteredProducts?: ListProduct[];
  uiParent?: number;
  currentTechnology: Technology;
  pureTotalRequiredQuantity?: number;
  children?: ListProduct[];
  ff?: string;
  isSelected?: boolean;
  tasks: any[];
  quantityToAllocate?: number = 0;
  assembly_has_order_with_fully_completed_production_requests?: boolean;
}

export class TreeNodeListProduct {
  uid: number;

  data: ListProduct;
  expanded: boolean = false;
  isSticky?: boolean = false;
  parent: TreeNodeListProduct;
  children: TreeNodeListProduct[] = [];
  tasks: any[] = [];

  listProduct: ListProduct;
  listProducts: ListProduct[] = [];

  constructor(
    config?: Partial<TreeNodeListProduct>,
  ) {
    if (config) {
      Object.assign(this, config);
    }
  }

  removeDuplicates(data: any[], key: any) {
    return [...new Map(data.map(x => [key(x), x])).values()];
  }

  applyData() {
    this.data.filteredProducts = [...this.listProducts];
    this.data.products = [...this.listProducts];
    this.data.groupedProductIds = this.listProducts.map(p => p.id);
    this.data.groupedListIds = this.listProducts.map(p => p.list as number).filter(this.onlyUnique);
    this.data.warehouseQuantities = this.removeDuplicates(this.listProducts, list => list.technology?.id)
      .sort((a, b) => a.task_sort_value - b.task_sort_value)
      .map(l => l.warehouse_quantity);

    this.data.technologies = this.listProducts.filter(l => l.technology).map(listProduct => {
      return {
        ...listProduct.technology,
        task_sort_value: listProduct.task_sort_value,
      };
    });

    this.data.technologies = this.removeDuplicates(this.data.technologies, x => x.name);
    this.data.technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);


    let actual = 0;
    let reserved = 0;

    this.tasks.forEach(task => {
      actual += task.tasks.reduce((sum, lp) => sum += lp.actual_quantity, 0)
    })

    this.tasks.forEach(task => {
      reserved += task.tasks.reduce((sum, lp) => sum += lp.reserved_quantity, 0)
    })

    this.data.total_required_quantity = this.tasks[0].tasks.length;

    this.data.reserved_quantity = this.listProducts.reduce((sum, lp) => sum += lp.reserved_quantity, 0)
    this.data.actual_quantity = this.listProducts.reduce((sum, lp) => sum += lp.actual_quantity, 0);
    this.data.blockedExpand = this.listProducts.some(lp => lp.status === 'Reserved') ||
      this.listProducts.some(lp => lp.status === 'Completed') || this.listProducts.some(lp => lp.assembly_has_order_with_fully_completed_production_requests);

    this.data.currentTechnology = this.listProducts.find(lp => lp.status === 'Completed')?.technology;

    if (this.data.technologies.length > 0) {
      this.data.status = this.tasks.some(p => p.status === 'Deficit' || p.status === 'Completed') ? 'Deficit' : this.data.status;

      if (this.data.currentTechnology?.id === this.data.technologies[this.data.technologies.length - 1]?.id) {
        this.data.status = 'Completed';
      }
    }
  }

  onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
}

export class ActualQuantityPayload {
  id: number;
  actual_quantity: number;
  serial_product_ids?: number[];
  root_serial_numbers_in_production?: number[];
  group?: number;
}

export class ListProductQuantity {
  products: ListProduct[];
  quantity: number;
}

export class ListProductsDetailed {
  listproduct_id: number;
  quantity: number;

  constructor(config?: Partial<ListProductsDetailed>) {
    if (config) {
      Object.assign(this, config);
    }
  }
}

export class ListItemToAllocate {
  quantity: number;
  listproduct_id: number;
  invoice_product_id: number;
  listproductsDetailed: ListProductsDetailed[] = [];
  listproductsToSubmit: ListProductsDetailed[] = [];
}
