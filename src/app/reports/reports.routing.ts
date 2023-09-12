import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsLayoutComponent} from "./components/reports-layout/reports-layout.component";
import {ReportsCurrenciesComponent} from "./components/reports-currencies/reports-currencies.component";
import {
  ReportsAdditionalExpensesComponent
} from "./components/reports-additional-expenses/reports-additional-expenses.component";
import {ReportsFiltersComponent} from "./components/reports-filters/reports-filters.component";
import {
  ReportsPaymentsCheckerComponent
} from "./components/reports-payments-checker/reports-payments-checker.component";
import {ReportsItemCardComponent} from "./components/reports-item-card/reports-item-card.component";
import {ReportsInComponent} from "./components/reports-in/reports-in.component";
import {
  ReportsWarehouseBalanceComponent
} from "./components/reports-warehouse-balance/reports-warehouse-balance.component";
import {ReportsOutComponent} from "./components/reports-out/reports-out.component";
import {
  ReportsCompanyAccountingNumberComponent
} from "./components/reports-company-accounting-number/reports-company-accounting-number.component";
import {
  ReportsNomenclatureAccountingNumberComponent
} from "./components/reports-nomenclature-accounting-number/reports-nomenclature-accounting-number.component";
import {
  ReportsTechnologiesAccountingNumberComponent
} from "./components/reports-technologies-accounting-number/reports-technologies-accounting-number.component";
import {
  ReportsPurchaseCategoriesAccountingNumberComponent
} from "./components/reports-purchase-categories-accounting-number/reports-purchase-categories-accounting-number.component";
import {
  ReportsAuxiliaryInvoicesAccountingNumberComponent
} from "./components/reposts-auxiliary-invoices-accounting-number/reports-auxiliary-invoices-accounting-number.component";
import {
  ReportsAccountingCategoriesComponent
} from "./components/reports-accounting-categories/reports-accounting-categories.component";
import {ReportsCorrelationComponent} from "./components/reports-correlation/reports-correlation.component";
import {ReportsInvoicesComponent} from "./components/reports-invoices/reports-invoices.component";
import {ReportsInvoicePageComponent} from "./components/reports-invoice-page/reports-invoice-page.component";
import {
  ReportsServiceInvoicePageComponent
} from "./components/reports-service-invoice-page/reports-service-invoice-page.component";
import {ReportsCostReportsComponent} from "./components/reports-cost-reports/reports-cost-reports.component";
import {ReportsNewCostReportComponent} from "./components/reports-new-cost-report/reports-new-cost-report.component";
import {ReportsOldCostReportComponent} from "./components/reports-old-cost-report/reports-old-cost-report.component";

const routes: Routes = [
  {
    path: '',
    component: ReportsLayoutComponent,
    children: [
      {
        path: 'invoices',
        title: 'Invoices',
        component: ReportsInvoicesComponent,
      },
      {path: 'invoices/invoice/:id', component: ReportsInvoicePageComponent},
      {path: 'invoices/service-invoice/:id', component: ReportsServiceInvoicePageComponent},

      {path: 'cost-reports', title: 'Cost Reports', component: ReportsCostReportsComponent},
      {path: 'cost-reports/new/:id', title: 'Cost Report', component: ReportsNewCostReportComponent},
      {path: 'cost-reports/old/:id', title: 'Cost Report', component: ReportsOldCostReportComponent},

      {path: 'currencies', title: 'Currencies', component: ReportsCurrenciesComponent},
      {path: 'additional-expenses', title: 'Additional Expenses', component: ReportsAdditionalExpensesComponent},
      {path: 'filters', title: 'Filters', component: ReportsFiltersComponent},
      {path: 'payments-checker', title: 'Payments Checker', component: ReportsPaymentsCheckerComponent},
      {path: 'item-card', title: 'Item Card', component: ReportsItemCardComponent},
      {path: 'in', title: 'In', component: ReportsInComponent},
      {path: 'wh-balance', title: 'Warehouse Balance', component: ReportsWarehouseBalanceComponent},
      {path: 'out', title: 'Out', component: ReportsOutComponent},
      {path: '', redirectTo: 'invoices', pathMatch: 'full'},

      {
        path: 'configs',
        children: [
          {path: '', redirectTo: 'company-number', pathMatch: 'full'},
          {path: 'company-number', title: 'Company Accounting Number', component: ReportsCompanyAccountingNumberComponent},
          {path: 'nomenclature-number', title: 'Nomenclature Accounting Number', component: ReportsNomenclatureAccountingNumberComponent},
          {path: 'technologies-number', title: 'Technologies Accounting Number', component: ReportsTechnologiesAccountingNumberComponent},
          {path: 'purchase-categories-number', title: 'Purchase Categories Accounting Number', component: ReportsPurchaseCategoriesAccountingNumberComponent},
          {path: 'auxiliary-invoices-number', title: 'Auxiliary Invoices Accounting Number', component: ReportsAuxiliaryInvoicesAccountingNumberComponent},
          {path: 'accounting-categories', title: 'Accounting Categories', component: ReportsAccountingCategoriesComponent},
          {path: 'correlation', title: 'Correlation of Accounting Categories', component: ReportsCorrelationComponent},
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRouting {
}
