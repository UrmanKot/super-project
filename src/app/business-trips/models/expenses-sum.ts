import {Currency} from '@shared/models/currency';

export class ExpensesSum {
  currencyCode: string | number;
  currency: Currency;
  sum: number;
}
