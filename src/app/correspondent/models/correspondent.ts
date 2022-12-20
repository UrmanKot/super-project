import {CorrespondentsCategory} from './correspondents-category';

export class CorrespondentFiles {
  readonly id:number;
  correspondent: number;
  file: string;
}

export class Correspondent {
  readonly id:number;
  date_received: Date;
  external_id: string;
  category?: CorrespondentsCategory;
  files: CorrespondentFiles[];
}

export class Correspondents {
  count: number;
  next: string;
  previous: string;
  results: Correspondent[];
}
