import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-procurement-layout',
  templateUrl: './procurement-layout.component.html',
  styleUrls: ['./procurement-layout.component.scss']
})
export class ProcurementLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Procurement Chains', commands: ['chains']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
