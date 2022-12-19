import {CrmPosition} from './crm-position';

export class BusinessTripEmployee {
  readonly id: number;
  first_name: string;
  last_name: string;
  name?: string;
  position?: CrmPosition;
}
