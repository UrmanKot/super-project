import {Component, OnInit} from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-qc-layout',
  templateUrl: './qc-layout.component.html',
  styleUrls: ['./qc-layout.component.scss']
})
export class QcLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Invoices', commands: ['list']},
    {label: 'Delivery', commands: ['delivery']},
  ];

  settingRoutes: NavigationLink[] = [
    {label: 'Protocols', commands: ['protocols']},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
