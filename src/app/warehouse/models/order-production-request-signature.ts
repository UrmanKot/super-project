export class OrderProductionRequestSignature {
  readonly id?: number;
  order: number;
  full_name: string;
  signature: string | File;
  created_at?: Date;
}
