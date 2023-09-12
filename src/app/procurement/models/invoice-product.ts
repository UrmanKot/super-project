import {Nomenclature} from '@shared/models/nomenclature';
import {Invoice} from './invoice';
import {Locator} from '../../warehouse/models/locator';
import {Technology} from '../../product-structure/models/technology';
import {BusinessTrip} from '../../business-trips/models/business-trip';
import {InvoiceProductRmaFile} from './invoice-product-rma-file';

export enum OrderProductRequestType {
  MANUALLY = '0',
  AUTOMATICALLY = '1',
  TOOL_REQUEST= '2',
  REQUEST_BY_VOLUME = '3',
}

export class InvoiceProduct {
  readonly id: number;
  idx?: string;
  price: string;
  quantity: number;
  passed_quantity: number;
  not_passed_quantity: number;
  notPassedQuantity: number;
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
  order_product_initial_quantity?: number;
  order_product_free_quantity?: number;
  order_product_id?: number;
  nomenclature?: Nomenclature;
  products: InvoiceProduct[];
  files?: InvoiceProductRmaFile[];
  rma_files?: InvoiceProductRmaFile[];
  serial_numbers: any;
  exists_on_locators: Locator[];
  invoiceProducts?: InvoiceProduct[];
  root_production_plans?: any[];
  current_technology?: Technology;
  current_technology_id?: number;
  allocated_quantity?: number;
  totalQuantity?: number;
  totalAcceptedQuantity?: number;
  totalQuantityPassed?: number;
  totalQuantityNotPassed?: number;
  totalSerialNumbers: any[];
  totalQuantityAllocated: number;
  totalFreeQuantity: number;
  quantity_to_write_off?: number;
  rma_comment?: string;
  rma_status?: string;
  isNonRma?: boolean;
  equalInvoiceProducts?: InvoiceProduct[];
  passed?: 'passed' | 'notPassed';
  fixed_discount?: boolean;
  request_type: OrderProductRequestType;
  rma_reception_date?: any;
  isolator_quantity?: number;
  comment?: string;
  status?: string;
}

export class InvoiceProducts {
  prev: string;
  next: string;
  count: number;
  results: InvoiceProduct[];
}

export enum EInvoiceProductQualityControl {
  NOT_PASSED = 0,
  PASSED = 1,
  PARTLY_PASSED = 2,
}

export enum EInvoiceProductRMAStatus {
  REORDERED = 'Reordered',
  RECEIVED = 'Received',
  PASSED = 'Passed'
}
