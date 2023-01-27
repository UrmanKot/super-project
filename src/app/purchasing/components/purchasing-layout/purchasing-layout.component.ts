import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-purchasing-layout',
  templateUrl: './purchasing-layout.component.html',
  styleUrls: ['./purchasing-layout.component.scss']
})
export class PurchasingLayoutComponent implements OnInit {
  routes: NavigationLink[] = [
    {label: 'Procurement Requests', commands: ['requests']},
    {label: 'Procurement Chain Creation', commands: ['order-products']},
    {label: 'Procurement Chains', commands: ['chains']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Procurement Categories', commands: ['categories']},
    {label: 'Order Statuses', commands: ['statuses']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
