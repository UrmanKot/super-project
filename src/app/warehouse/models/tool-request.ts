import {ToolOrder} from './tool-order';

export class ToolRequest {
  readonly id: number;

  required_quantity?: number;

  nomenclature?: any;
  tool_order?: ToolOrder;
}
