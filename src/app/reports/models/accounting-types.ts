import {AccountingCategory} from "./accounting-category";

export class AccountingType {
  readonly id: number;
  name: string;
  accounting_category?: AccountingCategory | number;
}


