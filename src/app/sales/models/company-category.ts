import {Company} from './company';

export class CompanyCategory {
  readonly id: number;
  name: string;
  companies: Company[];
}
