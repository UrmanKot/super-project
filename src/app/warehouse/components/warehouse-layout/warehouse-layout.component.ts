import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-warehouse-layout',
  templateUrl: './warehouse-layout.component.html',
  styleUrls: ['./warehouse-layout.component.scss']
})
export class WarehouseLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Items', commands: ['items']},
    {label: 'Production Requests', commands: ['production-requests']},
    {label: 'Tool Requests', commands: ['tool-requests']},
    {label: 'Where Used', commands: ['where-used']},
    {label: 'Physical Inventory', commands: ['physical-inventory']},
    {label: 'Warehouses', commands: ['warehouses']},
    {label: 'Categories', commands: ['categories']},
    {label: 'Units of Measure', commands: ['measure']},
    {label: 'Serial Types', commands: ['serial-types']},
    {label: 'Insulator', commands: ['insulator']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
