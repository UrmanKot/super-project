import {EventItem} from './event-item';

export class EventReport {
  id: number;
  next_events?: EventItem[];
  last_events?: EventItem[];
  next_event?: EventItem;
  last_event?: EventItem;

  lastDateEventsStart?: Date;
  lastDateEventsEnd?: Date;
  nextDateEventsStart?: Date;
  nextDateEventsEnd?: Date;

  groupedLastEvents?: any;
  groupedNextEvents?: any;
}

export class EventsReports {
  count: number;
  next: string;
  previous: string;
  results: EventReport[];
}
