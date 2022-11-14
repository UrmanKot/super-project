import {EventType} from './event-type';
import {Employee} from '@shared/models/employee';

export class Schedule {
  readonly id: number;
  type?: ScheduleType;
  event_type: EventType & number;
  start: string;
  end: string;
  description: string;
  employee?: Employee[] | number[];
  values?: any;
}

export enum ScheduleType {
  WEEK_DAYS = '0'
}
