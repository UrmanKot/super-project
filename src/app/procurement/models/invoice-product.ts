import {Nomenclature} from '@shared/models/nomenclature';
import {Invoice} from './invoice';
import {Locator} from '../../warehouse/models/locator';

export class InvoiceProduct {
  readonly id: number;
  price: string;
  quantity: number;
  passed_quantity: number;
  not_passed_quantity: number;
  accepted_quantity?: number;
  invoice: number | Invoice;
  description: string;
  quality_control: string;
  unit_price?: string;
  ddv?: number;
  discount?: string;
  supplier_unit_price?: string;
  isSelected?: boolean;
  checkedForGeneration?: boolean;
  nomenclature?: Nomenclature;
  products: InvoiceProduct[];
  exists_on_locators: Locator[];
}

export enum EInvoiceProductQualityControl {
  NOT_PASSED = 0,
  PASSED = 1,
  PARTLY_PASSED = 2,
}
