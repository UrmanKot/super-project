export class ProductStructureCompare {
  id?: number;
  code?: string;
  name: string;
  current_name?: string;
  parent_id?: number;
  quantity: number;
  children?: ProductStructureCompare[];
  parent?: ProductStructureCompare;
  existing_structure?: ProductStructureCompare;
  unchangedStructure?: ProductStructureCompare;
  isNew?: boolean;
  isDeleted?: boolean;
  hasNameChanged?: boolean;
  hasQuantityChanged?: boolean;
  hasCheckedForDeletion?: boolean;
  hasCheckedForQuantity?: boolean = false;
  hasCheckedForNew?: boolean;
  hasCycle?: boolean;
}
