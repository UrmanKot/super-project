import {WarehouseProduct} from './warehouse-product';

export class TechnicalEquipmentInUse {
  readonly id: number;
  warehouse_product: WarehouseProduct | number;
  quantity: number;
}
