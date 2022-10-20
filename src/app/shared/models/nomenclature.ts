import {Category} from '../../product-structure/models/category';
import {Technology} from '../../product-structure/models/technology';

export class Nomenclature {
  readonly id: number;
  code?: string;
  name?: string;
  status?: string;
  parent?: number | Nomenclature;
  technologies?: Technology[];
  images?: NomenclatureImage[];
  category?: Category;
  // category?: any;
  description?: string;
  type?: ENomenclatureType;
  approved?: ENomenclatureApproval;
  fullName?: string;
  // purchase_category?: PurchasingCategory;
  accounting_number?: string;
  is_fixed_asset?: boolean;
  is_non_ressivable?: boolean;
  qc_protocol?: number;
  bulk_or_serial?: '1' | '0';
  tasks?: Task[];
  root_category?: Category;
}

export class NomenclatureImage {
  readonly id: number;
  image: string | ArrayBuffer;
  file?: File;
}

export class Nomenclatures {
  count: number;
  next: string;
  previous: string;
  results: Nomenclature[];
}

export class NewNomenclature {
  readonly id: number;
  name: string;
  parents?: NomenclatureParent[];
}

export class NomenclatureParent {
  readonly id: number;
  name: string;
}

export enum ENomenclatureType {
  PURCHASED = '0',
  ASSEMBLY = '1',
  MANUFACTURED = '2'
}

export enum ENomenclatureApproval {
  NEW = '0',
  APPROVED = '1',
  DECLINED = '2'
}

export enum ENomenclatureBulk {
  BULK = '0',
  SERIAL = '1',
}
