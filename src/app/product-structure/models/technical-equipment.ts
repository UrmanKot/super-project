import {Nomenclature} from '@shared/models/nomenclature';
import {Technology} from './technology';

export class TechnicalEquipment {
  readonly id?: number;
  nomenclature?: Nomenclature;
  nomenclature_in_use?: Nomenclature;
  technology?: Technology;
  quantity?: number;
}
