import {Nomenclature} from '@shared/models/nomenclature';

export class TechnicalEquipment {
  readonly id?: number;
  nomenclature?: Nomenclature;
  used_by_nomenclature?: Nomenclature;
  quantity?: number;
}
