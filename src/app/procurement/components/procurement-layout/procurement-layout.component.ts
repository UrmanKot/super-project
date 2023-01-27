import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-procurement-layout',
  templateUrl: './procurement-layout.component.html',
  styleUrls: ['./procurement-layout.component.scss']
})
export class ProcurementLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Procurement Chain Creation', commands: ['order-products']},
    {label: 'Procurement Chains', commands: ['chains']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Auxiliary Invoices Types', commands: ['services']},
    {label: 'Order Statuses', commands: ['statuses']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
