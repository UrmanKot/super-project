import {Component, OnInit} from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';
import {environment} from '@env/environment';

@Component({
  selector: 'pek-sales-layout',
  templateUrl: './sales-layout.component.html',
  styleUrls: ['./sales-layout.component.scss']
})
export class SalesLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Sales Chains', commands: ['sales-procurement-chains']},
    {
      label: 'Prices',
      commands: [`${environment.link_url}dash/sales/sales-configs/nomenclature-price`],
      isExternal: true
    },
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Statuses', commands: ['statuses']},
    {label: 'Countries & Regions', commands: ['regions']},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
