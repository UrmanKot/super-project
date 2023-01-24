export class PurchasingCategory {
  readonly id: number;
  name: string;
  description: string;
  is_material: boolean;
  parent: number;
  accounting_number?: string;
  // accounting_category: AccountingCategory | number;
}

export class PurchasingCategories {
  count: number;
  next: string;
  previous: string;
  results: PurchasingCategory[];
}
