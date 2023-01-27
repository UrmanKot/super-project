export class ProductStructureCompare {
  id?: number;
  code?: string;
  name: string;
  parent_id?: number;
  quantity: number;
  children?: ProductStructureCompare[];
  parent?: ProductStructureCompare;
  isNew?: boolean;
  isDeleted?: boolean;
  hasNameChanged?: boolean;
  hasQuantityChanged?: boolean;
  hasCycle?: boolean;
}
