import { NavigationExtras } from '@angular/router';
import {Module} from '@shared/module-icon/module-icon.component';
export type NavigationRoutes = NavigationLink[];

export class NavigationLink {
  commands?: any[] | string;
  module?: Module;
  label: string;
  children?: NavigationLink[];
  extras?: NavigationExtras;
}
