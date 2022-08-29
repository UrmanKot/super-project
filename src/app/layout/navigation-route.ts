import { NavigationExtras } from '@angular/router';

export type NavigationRoutes = NavigationGroup[];

export class NavigationLink {
  /** Text content of navigation menu item */
  label: string;
  /**
   * An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   */
  commands: any[];
  /** An options object that determines how the URL should be constructed or interpreted. */
  extras?: NavigationExtras;
  /** Needed permissions */
  /** Недоступно */
  disabled?: boolean;
  aclLogic?: 'all' | 'any';
}

export class NavigationGroup {
  /** Text content of navigation menu item */
  label: string;
  /** If group should be opened by default */
  open?: boolean;
  /** This ads before link commands */
  commands?: any[];
  /** List of clickable router links configs */
  children: NavigationLink[];
  /** Needed permissions */
  aclLogic?: 'all' | 'any';
  /** Icon of navigation menu item */
  icon?: string;
}
