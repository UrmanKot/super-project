import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

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
    routerLink: '/confirmation',
  }, {
    label: 'Warehouse',
    icon: 'icon-warehouse',
    routerLink: '/any',
  }, {
    label: 'Manufacturing Procurement',
    icon: 'icon-manufacturing-procurement',
    routerLink: '/any',
  }, {
    label: 'Quality Control',
    icon: 'icon-quality-control',
    routerLink: '/any',
  }, {
    label: 'Manufacturing',
    icon: 'icon-manufacturing',
    routerLink: '/any',
  }, {
    label: 'Contacts & Events',
    icon: 'icon-contacts-events',
    routerLink: '/any',
  }, {
    label: 'Outsourcing',
    icon: 'icon-outsourcing',
    routerLink: '/any',
  }, {
    label: 'Purchasing',
    icon: 'icon-purchasing',
    routerLink: '/any',
  }, {
    label: 'Sales',
    icon: 'icon-sales',
    routerLink: '/any',
  }, {
    label: 'Reports',
    icon: 'icon-reports',
    routerLink: '/any',
  }, {
    label: 'Administration',
    icon: 'icon-administration',
    routerLink: '/any',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
