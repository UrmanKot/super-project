import {ListProduct} from '../../warehouse/models/list-product';

export class OrderSupplier {
  confirm_status: EOrderSupplierConfirmStatus;
  delivery_date: string | Date;
  id: number;
  list: number;
  price: string | number;
  supplier: string;
  comment: string;
}

export class OrderSupplierConfirmation {
  id: number;
  sent_to_confirmation: boolean;
  order: {
    id: number;
    root_production_list_products: ListProduct[]
  };
}

export enum EOrderSupplierConfirmStatus {
  UNTACHED = 0,
  DECLINED = 1,
  CONFIRMED = 2
}
