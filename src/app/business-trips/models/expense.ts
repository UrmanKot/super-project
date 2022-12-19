import {Vehicle} from './vehicle';

export class Expense {
  readonly id?: number;
  name: string;
  description: string;
}

export class ExpensePaginated {
  prev: string;
  next: string;
  count: number;
  results: Expense[];
}
