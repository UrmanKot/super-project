import {OrderProduct} from '../../procurement/models/order-product';
import {WarehouseProduct} from './warehouse-product';
import {Nomenclature} from '@shared/models/nomenclature';
import {TechnicalEquipmentInUse} from './technical-equipment-in-use';

export class OrderTechnicalEquipment {
  readonly id: number;
  order_product: OrderProduct | number;
  warehouse_product: WarehouseProduct | number;
  nomenclature: Nomenclature | number;
  quantity: number;
  accepted_quantity: number;
  passed_quantity: number;
  not_passed_quantity: number;
  total_quantity: number;
  total_accepted_quantity: number;
  total_passed_quantity: number;
  total_not_passed_quantity: number;
  in_use: Boolean;
  in_qc: Boolean;
  quality_control?: number;
  locators?: string[]
  available_locators?: string[]
  in_use_product_id?: { technicalEquipment: TechnicalEquipmentInUse, quantity: number, isolated_quantity?: number }[];
}
