import {Nomenclature} from '@shared/models/nomenclature';

export class List {
  readonly id: number;
  // locator: Locator | null;
  code: string;
  name: string;
  created: string;
  completed: boolean;
  sets_number: number;
  is_deficit_requested: boolean;
  fullName?: string;
  nomenclature?: Nomenclature;
  label?: string;
  list?: any;
  root_production_plans?: any[];
}
