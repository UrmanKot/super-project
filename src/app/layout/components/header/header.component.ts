import {Component, Input, OnInit} from '@angular/core';
import {NavigationLink} from '../../navigation-route';
import {NavigationStart, Router} from '@angular/router';
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

  isShowMobileNav = false;
  isShowSettings: boolean;
  isShowSwitcher: boolean;

  settingRouters = [
    '/warehouse/measure',
    '/warehouse/warehouses',
    '/warehouse/serial-types',
    '/warehouse/categories',
    '/procurement/services',
    '/procurement/statuses',
    '/production/employees',
    '/production/positions',
    '/production/machines',
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
  }

  toggleVisibleSettingMenu() {
    this.isShowSettings = !this.isShowSettings;
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
}
