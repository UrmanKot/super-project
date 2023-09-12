export class AccountingCategory {
  readonly id: number;
  code: string;
  name: string;
}

export class AccountingCategories {
  count: number;
  next: string;
  previous: string;
  results: AccountingCategory[];
}

