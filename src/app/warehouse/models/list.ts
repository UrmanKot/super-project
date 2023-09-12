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
  list?: List;
  root_production_plans?: any[];
  unique_root_production_plans?: any[];
  full_statistics?: any;
  needs_procurement_requests?: boolean;
  family_id?: string;
}

export class Lists {
  count: number;
  next: string;
  previous: string;
  results: List[];
}
