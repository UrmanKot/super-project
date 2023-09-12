import { Component, OnInit } from '@angular/core';
import {NavigationLink} from "../../../layout/navigation-route";

@Component({
  selector: 'pek-reports-layout',
  templateUrl: './reports-layout.component.html',
  styleUrls: ['./reports-layout.component.scss']
})
export class ReportsLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Invoices', commands: ['invoices']},
    {label: 'Cost Reports', commands: ['cost-reports']},
    {label: 'Warehouse Balance', commands: ['wh-balance']},
    {label: 'Out', commands: ['out']},
    {label: 'In', commands: ['in']},
    {label: 'Item Card', commands: ['item-card']},
    {
      label: 'Accounting Config',
      commands: ['configs'],
      children: [
        {label: 'Company Accounting Number', commands: ['configs/company-number']},
        {label: 'Nomenclature Accounting Number', commands: ['configs/nomenclature-number']},
        {label: 'Technologies Accounting Number', commands: ['configs/technologies-number']},
        {label: 'Purchase Categories Accounting Number', commands: ['configs/purchase-categories-number']},
        {label: 'Auxiliary Invoices Accounting Number', commands: ['configs/auxiliary-invoices-number']},
        {label: 'Accounting Categories', commands: ['configs/accounting-categories']},
        {label: 'Correlation of Accounting Categories', commands: ['configs/correlation']},
      ]
    },
    {label: 'Payments Checker', commands: ['payments-checker']},
  ];

  settingRoutes: NavigationLink[] = [
    {label: 'Currencies', commands: ['currencies']},
    {label: 'Additional Expenses', commands: ['additional-expenses']},
    {label: 'Filters', commands: ['filters']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
