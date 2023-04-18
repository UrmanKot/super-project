import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-manufacturing-layout',
  templateUrl: './manufacturing-layout.component.html',
  styleUrls: ['./manufacturing-layout.component.scss']
})
export class ManufacturingLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Plans', commands: ['plans']},
    {label: 'Orders to Own Production', commands: ['order-products']},
    {label: 'Slice Tasks', commands: ['chains']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Order Statuses', commands: ['statuses']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
