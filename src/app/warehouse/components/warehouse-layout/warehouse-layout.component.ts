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
    {label: 'Warehouses', commands: ['warehouses']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
