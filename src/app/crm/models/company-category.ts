import {Company} from './company';

export class CompanyCategory {
  readonly id: number;
  name: string;
  companies: Company[];
  modules: CompanyCategoryModule[];
}

export class CompanyCategoryModule {
  readonly id: number;
  name: string;
}
