export class BaseService {
  readonly id: number;
  name: string;
  comment: string;
  parent?: number;
  accounting_number?: number;
}
