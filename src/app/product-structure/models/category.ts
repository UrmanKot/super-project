import {UnitMeasure} from './unit-measure';

export class Category {
  readonly id: number;
  name?: string;
  description?: string;
  unit_of_measure?: UnitMeasure;
  parent?: number;
  expanded?: boolean;
  is_for_sales_chain?: boolean;
  lft?: number;
  rght?: number;
  tree_id?: number;
  // categories?: Nomenclature[];
}
