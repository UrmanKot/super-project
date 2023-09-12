export class QcDeliveryStatus {
  readonly id: number;
  name?: string;
  is_qc_completed?: boolean;
  is_ready_to_complete?: boolean;
  is_wrong?: boolean;
  qc_stage?: number;
}
  