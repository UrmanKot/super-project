export class PhysicalInventory {
  readonly id: number;
  status: '0' | '1';
  completed: boolean;
  system_creation_date: string;
}

export class PhysicalInventories {
  count: number;
  next: string;
  previous: string;
  results: PhysicalInventory[];
}
