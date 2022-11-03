import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {environment} from '@env/environment.prod';
import {AuthService} from '../auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routes: MenuItem[] = [{
    label: 'Product Structure',
    routerLink: '/product-structure',
    icon: 'icon-product-structure',
  }, {
    label: 'Confirmation',
    icon: 'icon-confirmation',
    routerLink: ['/confirmation'],
  }, {
    label: 'Warehouse',
    icon: 'icon-warehouse',
    routerLink: ['/warehouse'],
    // routerLink: ['/external', `${environment.link_url}dash/warehouse/products`],
  }, {
    label: 'Production Lists Procurement',
    icon: 'icon-manufacturing-procurement',
    routerLink: ['/external', `${environment.link_url}dash/procurement/orders`],
  }, {
    label: 'Outsourcing',
    icon: 'icon-outsourcing',
    routerLink: ['/external', `${environment.link_url}dash/outsource/outsource-chain`],
  }, {
    label: 'General Procurement',
    icon: 'icon-manufacturing-procurement',
    // icon: 'icon-purchasing',
    routerLink: ['/external', `${environment.link_url}dash/purchasing/orders`],
  }, {
    label: 'Contacts & Events',
    icon: 'icon-contacts-events',
    routerLink: ['/external', `${environment.link_url}dash/crm/businnes-partners`],
  }, {
    label: 'QC',
    icon: 'icon-quality-control',
    routerLink: ['/external', `${environment.link_url}dash/quality-control/invoices`],
  }, {
    label: 'Manufacturing',
    icon: 'icon-manufacturing',
    routerLink: ['/external', `${environment.link_url}dash/production/plan`],
  }, {
    label: 'Sales',
    icon: 'icon-sales',
    // routerLink: ['/external', `${environment.link_url}dash/sales/lists`],
    routerLink: ['/sales'],
  }, {
    label: 'Payments',
    icon: 'icon-payments',
    routerLink: ['/external', `${environment.link_url}dash/payments`],
  }, {
    label: 'Administration',
    icon: 'icon-administration',
    routerLink: ['/external', `${environment.link_url}dash/admin/users-list`],
  }, {
    label: 'Corespondents',
    icon: 'pi pi-users',
    routerLink: ['/external', `${environment.link_url}dash/correspondents`],
  }, {
    label: 'Reports',
    icon: 'icon-reports',
    routerLink: ['/external', `${environment.link_url}dash/accounting/cost-reports`],
  }, {
    label: 'Delivery',
    icon: 'icon-delivery-chains',
    routerLink: '/delivery-chains',
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
    this.modalService.showGuide();
  }
}
