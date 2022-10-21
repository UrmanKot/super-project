import {ToolOrder} from '../models/tool-order';
import {Nomenclature} from '@shared/models/nomenclature';

export class ToolRequest {
  readonly id: number;
  nomenclature: Nomenclature;
  quantity: number;
  tool_order: ToolOrder;
  is_scanned?: boolean;
}
