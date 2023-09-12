import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';
import {ExpandCollapseHeaderService} from '../../../layout/components/header/services/expand-collapse-header.service';

@Component({
  selector: 'pek-manufacturing-layout',
  templateUrl: './manufacturing-layout.component.html',
  styleUrls: ['./manufacturing-layout.component.scss']
})
export class ManufacturingLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Plans', commands: ['plans']},
    {label: 'Orders To Own Production', commands: ['orders']},
    {label: 'Slice Tasks', commands: ['slice-tasks']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Employees', commands: ['employees']},
    {label: 'Positions', commands: ['positions']},
    {label: 'Machines', commands: ['machines']},
    {label: 'Order Statuses', commands: ['order-statuses']},
  ];

  constructor(
    public expandCollapseHeaderService: ExpandCollapseHeaderService
  ) { }

  ngOnInit(): void {
  }

  expandCollapse(isExpand: boolean = true) {
    this.expandCollapseHeaderService.setExpandCollapseSingle(isExpand);
  }

  expandCollapseAll(isExpand: boolean = true) {
    this.expandCollapseHeaderService.setExpandCollapseAll(isExpand);
  }
}
