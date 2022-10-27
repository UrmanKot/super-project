import {Nomenclature} from '@shared/models/nomenclature';

export class OrderProduct {
  readonly id: number;
  ids?: number[];
  current_technology: any;
  nomenclature: Nomenclature;
  order: string;
  accepted_quantity: number;
  initial_quantity: number;
  quantity: number;
  ordered_quantity: number;
  passed_quantity?: number;
  not_passed_quantity?: number;
  request_type: string;
  status: 0 | 1 | 2 | string;
  request_date?;
  request_id?;
  technologies?;
  root_lists?;
  root_production_list_products?: any[];
  production_list_products?: any[];
  is_technology_ready?: boolean;
  quality_control?: number;
  // details?: OrderDetail;
  isReady?: boolean;
  products: OrderProduct[];
  reception_date?: string;
  isSelected?: boolean;
  checkedForGeneration?: boolean;
  serial_numbers?: { id: number, type_with_number: string, is_passed: boolean }[];
}
