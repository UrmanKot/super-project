import {Warehouse} from './warehouse';

export class Locator {
  readonly id: number;
  name: string;
  row: number;
  column: number;
  shelf: number;
  place: number;
  description: string;
  warehouse: Warehouse;
}
