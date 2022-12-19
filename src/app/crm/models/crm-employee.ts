import {CrmPosition} from '../../business-trips/models/crm-position';

export class CRMEmployee {
  readonly id: number;
  first_name: string;
  last_name: string;
  name?: string;
  fullName?: string;
  position?: CrmPosition;
}
