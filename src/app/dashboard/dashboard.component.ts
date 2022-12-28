import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {environment} from '@env/environment.prod';
import {AuthService} from '../auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';

export class DashboardMenuItem implements MenuItem {
  label?: string;
  routerLink?: any;
  icon?: string;
  requiredModulePermission?: string;
}

@Component({
  selector: 'pek-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routes: DashboardMenuItem[] = [{
    label: 'Product Structure',
    routerLink: '/product-structure',
    icon: 'icon-product-structure',
    requiredModulePermission: 'can_edit_product_structure'
  }, {
    label: 'Confirmation',
    icon: 'icon-confirmation',
    routerLink: ['/confirmation'],
    requiredModulePermission: 'can_edit_confirmation'
  }, {
    label: 'Warehouse',
    icon: 'icon-warehouse',
    routerLink: ['/warehouse'],
    requiredModulePermission: 'can_edit_warehouse'
    // routerLink: ['/external', `${environment.link_url}dash/warehouse/products`],
  }, {
    label: 'Production Lists Procurement',
    icon: 'icon-manufacturing-procurement',
    routerLink: ['/external', `${environment.link_url}dash/procurement/orders`],
    requiredModulePermission: 'can_edit_manufacturing_procurement'
  }, {
    label: 'Outsourcing',
    icon: 'icon-outsourcing',
    routerLink: ['/external', `${environment.link_url}dash/outsource/outsource-chain`],
    requiredModulePermission: 'can_edit_outsourcing'
  }, {
    label: 'General Procurement',
    icon: 'icon-manufacturing-procurement',
    // icon: 'icon-purchasing',
    routerLink: ['/external', `${environment.link_url}dash/purchasing/orders`],
    requiredModulePermission: 'can_edit_purchase'
  }, {
    label: 'Contacts & Events',
    icon: 'icon-contacts-events',
    routerLink: ['/crm'],
    // routerLink: ['/external', `${environment.link_url}dash/crm/businnes-partners`],
    requiredModulePermission: 'can_edit_contacts_and_events'
  }, {
    label: 'QC',
    icon: 'icon-quality-control',
    routerLink: ['/external', `${environment.link_url}dash/quality-control/invoices`],
    requiredModulePermission: 'can_edit_quality_control'
  }, {
    label: 'Manufacturing',
    icon: 'icon-manufacturing',
    routerLink: ['/external', `${environment.link_url}dash/production/plan`],
    requiredModulePermission: 'can_edit_manufacturing'
  }, {
    label: 'Sales',
    icon: 'icon-sales',
    // routerLink: ['/external', `${environment.link_url}dash/sales/lists`],
    routerLink: ['/sales'],
    requiredModulePermission: 'can_edit_sales'
  }, {
    label: 'Payments',
    icon: 'icon-payments',
    routerLink: ['/external', `${environment.link_url}dash/payments`],
    requiredModulePermission: 'can_edit_payments'
  }, {
    label: 'Administration',
    icon: 'icon-administration',
    routerLink: ['/external', `${environment.link_url}dash/admin/users-list`],
    requiredModulePermission: 'can_edit_administration'
  }, {
    label: 'Corespondents',
    icon: 'pi pi-users',
    routerLink: [`/correspondents`],
    requiredModulePermission: 'can_edit_correspondents'
  }, {
    label: 'Reports',
    icon: 'icon-reports',
    routerLink: ['/external', `${environment.link_url}dash/accounting/cost-reports`],
    requiredModulePermission: 'can_edit_reports'
  }, {
    label: 'Delivery',
    icon: 'icon-delivery-chains',
    routerLink: ['/external', `${environment.link_url}dash/delivery-chains`],
    requiredModulePermission: 'can_edit_delivery_chain'
  }, {
    label: 'Business Trips',
    icon: 'pi pi-car',
    routerLink: [`/business-trips/trips`],
    requiredModulePermission: 'can_edit_business_trips'
  }, {
    label: 'Instruments/Tools/Equipment',
    icon: 'pi pi-database',
    routerLink: [`/instruments/instruments-and-tools`],
    requiredModulePermission: 'can_edit_instruments_and_tools'
  }, {
    label: 'ERP Statistics',
    icon: 'pi pi-chart-bar',
    routerLink: ['/statistics'],
    requiredModulePermission: 'can_edit_instruments_and_tools'
  }];

  constructor(
    public auth: AuthService,
    private router: Router,
    private modalService: ModalService
  ) {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) this.changeRoute(evt.url);
    });
  }

  ngOnInit(): void {
  }

  changeRoute(url: string) {
    if (url.includes('showGuide=true')) {
      setTimeout(() => {
        this.showGuide();
      }, 700);
    }
  }

  logout() {
    this.modalService.confirm('danger', 'Log Out').subscribe(res => {
      if (res) {
        this.auth.logout();
        this.router.navigateByUrl('/login').then();
      }
    });
  }

  showGuide() {
    this.modalService.showBusinessGuide();
  }
}
