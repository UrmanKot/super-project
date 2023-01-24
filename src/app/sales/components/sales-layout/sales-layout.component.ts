import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-sales-layout',
  templateUrl: './sales-layout.component.html',
  styleUrls: ['./sales-layout.component.scss']
})
export class SalesLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    // {label: 'Make Production List', commands: ['lists']},
    {label: 'Sales Chains', commands: ['sales-procurement-chains']},
    // {label: 'Configs', commands: ['configs/nomenclature-price']},
    // {label: 'Statuses', commands: ['statuses']},
    // {label: 'Countries & Regions', commands: ['regions']},
  ]

  settingsRoutes: NavigationLink[] = [
    {label: 'Statuses', commands: ['statuses']},
    {label: 'Countries & Regions', commands: ['regions']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
