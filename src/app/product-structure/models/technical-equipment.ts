import {Nomenclature} from '@shared/models/nomenclature';

export class TechnicalEquipment {
  readonly id?: number;
  nomenclature?: Nomenclature;
  technical_equipment?: Nomenclature;
  quantity?: number;
}
