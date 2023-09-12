import {CorrespondentsCategory} from './correspondents-category';

export class CorrespondentFiles {
  readonly id:number;
  correspondent: number;
  file: string;
}

export class Correspondent {
  readonly id:number;
  date_received: Date;
  external_date: Date;
  external_id: string;
  origin: string;
  description: string;
  letter_registration_number?: string;
  category?: CorrespondentsCategory;
  files: CorrespondentFiles[];
  categoryPath?: string;
}

export class Correspondents {
  count: number;
  next: string;
  previous: string;
  results: Correspondent[];
}
