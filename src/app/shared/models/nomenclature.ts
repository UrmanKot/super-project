import {Category} from '../../product-structure/models/category';
import {Technology} from '../../product-structure/models/technology';
import {TechnicalEquipment} from '../../product-structure/models/technical-equipment';
import {Country} from "@shared/models/country";

export class Nomenclature {
  readonly id?: number;
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
  has_technical_equipment?: boolean;
  technical_equipments?: TechnicalEquipment[];
  deleted_technical_equipments_ids?: number[];
  qc_protocol?: number;
  min_quantity?: number;
  max_quantity?: number;
  free_quantity?: number;
  bulk_or_serial?: '1' | '0';
  tasks?: Task[];
  root_category?: Category;
  price?: any
  country_of_origin_default?: Country;
  weight?: number;
  width?: number;
  length?: number;
  height?: number;
  tariff_code?: any;
}

export class NomenclatureImage {
  readonly id: number;
  image: string | ArrayBuffer;
  file?: File;
}

export class NomenclatureFile {
  readonly id: number;
  file: string;
  nomenclature: number;
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
