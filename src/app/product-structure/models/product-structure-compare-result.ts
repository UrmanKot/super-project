import {ProductStructureCompare} from './product-structure-compare';


export class AncestorProductStructureCompare {
  id: number;
  nomenclature__code: string;
  parent_id: number;
}

export class ProductStructureCompareResult {
  new_structure: ProductStructureCompare;
  current_structure: ProductStructureCompare;
  ancestors_products: AncestorProductStructureCompare[];
}
