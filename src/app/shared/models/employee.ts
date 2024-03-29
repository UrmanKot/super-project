import {EmployeePosition} from '@shared/models/employee-position';

export class Employee {
  readonly id: number;
  position?: EmployeePosition;
  first_name: string;
  last_name: string;
  fullName?: string;
  start_time: string;
  max_working_time: string;
}
