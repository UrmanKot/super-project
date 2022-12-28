import {BusinessTrip} from '../../business-trips/models/business-trip';

export class AreaLocator {
  readonly id: number;
  name: string;
  description: string;
  area: Area;
}

export class Area {
  readonly id: number;
  name: string;
  description: string;
}

export class AreaPaginated {
  prev: string;
  next: string;
  count: number;
  results: Area[];
}
