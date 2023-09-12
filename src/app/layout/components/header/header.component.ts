import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationLink} from '../../navigation-route';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.mobile.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() module: string;
  @Input() routes: NavigationLink[];
  @Input() settingsRoutes: NavigationLink[];
  @Output() clickRoute: EventEmitter<NavigationLink> = new EventEmitter<NavigationLink>();

  isShowMobileNav = false;
  isShowSettings: boolean;
  isShowSwitcher: boolean;
  isShowAdditionalButtons: boolean;

  settingRouters = [
    '/warehouse/measure',
    '/warehouse/warehouses',
    '/warehouse/serial-types',
    '/warehouse/categories',
    '/procurement/services',
    '/procurement/statuses',
    '/manufacturing/employees',
    '/manufacturing/positions',
    '/manufacturing/machines',
    '/manufacturing/order-statuses',
    '/production/instruments-tools',
    '/production/areas',
    '/production/tool-orders',
    '/accounting/currencies',
    '/accounting/accounting-services',
    '/accounting/filters',
    '/purchasing/categories',
    '/purchasing/statuses',
    '/product-structure/technologies',
    '/product-structure/prefixes',
    '/quality-control/protocols',
    '/crm/company-categories',
    '/crm/event-types',
    '/crm/employees',
    '/crm/external-events',
    '/crm/users-profiles',
    '/sales/statuses',
    '/sales/regions',
    '/business-trips/vehicles',
    '/business-trips/expenses',
    '/correspondents/outgoing-categories',
    '/correspondents/incoming-categories',
    '/outsourcing/statuses',
    '/reports/currencies',
    '/reports/additional-expenses',
    '/reports/filters',
  ];

  settingModules = [
    '/warehouse',
    '/procurement/',
    '/production/',
    '/accounting/',
    '/purchasing/',
    '/product-structure/',
    '/quality-control/',
    '/crm/',
    '/sales/',
    '/outsourcing/',
    '/business-trips/',
    '/correspondents/',
    '/manufacturing',
    '/reports',
  ];

  additionalBtnRouters = [
    '/manufacturing/plans/all',
    '/manufacturing/plans/plan/',
  ];

  constructor(
    private router: Router,
    private readonly modalService: ModalService,
  ) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        this.closeMobileMenu();
      }
    });
  }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks() {
    const routerLink = this.router.url;
    this.isShowSettings = this.settingRouters.some(route => routerLink.includes(route));
    this.isShowSwitcher = this.settingModules.some(module => routerLink.includes(module));
    this.isShowAdditionalButtons = this.additionalBtnRouters.some(route => routerLink.includes(route));
  }

  toggleVisibleSettingMenu() {
    this.isShowSettings = !this.isShowSettings;
    this.checkUrl();
  }

  openMobileMenu() {
    this.isShowMobileNav = true;
    this.getLinks();
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.isShowMobileNav = false;
    document.body.style.overflow = '';
  }

  onOpenBusinessGuide() {
    this.modalService.showBusinessGuide();
  }

  toggleChanged() {
    this.checkUrl();
  }

  checkUrl() {
    // Check current url and if we are on settings url, go to module default page
    const currentRouterLink = this.router.url;
    const onSettingsPage = this.settingRouters.some(route => currentRouterLink.includes(route));
    if (onSettingsPage && !this.isShowSettings) {
      const module = currentRouterLink.split('/')[1];
      this.router.navigate([`/${module}`]);
    }
  }

  onClickRoute(route: NavigationLink) {
    console.log(route)
   this.clickRoute.emit(route);
  }
}
