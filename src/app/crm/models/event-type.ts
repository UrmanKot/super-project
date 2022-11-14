import {UserProfile} from './user-profile';

export class EventType {
  readonly id: number;
  name: string;
  description: string;
  google_calendar_id: string;
  color?: string;
  access_users: UserProfile[];
  is_inner: boolean;
  is_auto: boolean;
  google_owner_first_name: string;
  google_owner_last_name: string;
  google_owner_gmail: string;
  short_name?: string;
  color_hex?: string;
}
