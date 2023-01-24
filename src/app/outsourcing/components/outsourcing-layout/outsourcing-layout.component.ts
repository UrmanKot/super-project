import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-outsourcing-layout',
  templateUrl: './outsourcing-layout.component.html',
  styleUrls: ['./outsourcing-layout.component.scss']
})
export class OutsourcingLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Assembly & Manufactured Requests', commands: ['requests']},
    {label: 'Outsourcing Chain Creation', commands: ['order-products']},
    {label: 'Outsourcing Chains', commands: ['chains']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Order Statuses', commands: ['statuses']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
