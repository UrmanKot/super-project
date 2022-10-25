import {Nomenclature, Nomenclatures} from '@shared/models/nomenclature';

export class SerialType {
  readonly id: number;
  name: string;
  prefix: number;
  suffix: number;
  start_number: number;
  nomenclature_set: Partial<Nomenclature>[]
}
