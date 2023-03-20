import {EventItem} from './event-item';

export class EventReport {
  id: number;
  next_events?: EventItem[];
  last_events?: EventItem[];
  next_event?: EventItem;
  last_event?: EventItem;
  name?: string;

  lastDateEventsStart?: Date;
  lastDateEventsEnd?: Date;
  nextDateEventsStart?: Date;
  nextDateEventsEnd?: Date;

  groupedLastEvents?: any;
  groupedNextEvents?: any;
  last_event_impression?: string;
}

export class EventsReports {
  count: number;
  next: string;
  previous: string;
  results: EventReport[];
}
