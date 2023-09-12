import {Area, AreaLocator} from './area-locator';

export class ToolOrder {
  readonly id: number;
  area_locator: AreaLocator;
  created: string;
  has_reserved_items?: boolean;

}

export class ToolOrderPaginated {
  prev: string;
  next: string;
  count: number;
  results: ToolOrder[];
}
