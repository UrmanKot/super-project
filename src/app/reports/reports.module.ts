import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportsRouting} from './reports.routing';
import {ReportsLayoutComponent} from './components/reports-layout/reports-layout.component';
import {LayoutModule} from "../layout/layout.module";
import {ReportsCurrenciesComponent} from './components/reports-currencies/reports-currencies.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "@shared/shared.module";
import {TableModule} from "primeng/table";
import {CreateEditCurrencyComponent} from './modals/create-edit-currency/create-edit-currency.component';
import { ReportsAdditionalExpensesComponent } from './components/reports-additional-expenses/reports-additional-expenses.component';
import { CreateEditAdditionalExpensesComponent } from './modals/create-edit-additional-expenses/create-edit-additional-expenses.component';
import { CreateEditInvoiceFilterComponent } from './modals/create-edit-invoice-filter/create-edit-invoice-filter.component';
import { CreateEditReportFilterComponent } from './modals/create-edit-report-filter/create-edit-report-filter.component';
import { ReportsFiltersComponent } from './components/reports-filters/reports-filters.component';
import { ReportsPaymentsCheckerComponent } from './components/reports-payments-checker/reports-payments-checker.component';
import { ReportsItemCardComponent } from './components/reports-item-card/reports-item-card.component';
import { ReportsInComponent } from './components/reports-in/reports-in.component';
import { ReportsWarehouseBalanceComponent } from './components/reports-warehouse-balance/reports-warehouse-balance.component';
import { ReportsFiltersModalComponent } from './modals/reports-filters-modal/reports-filters-modal.component';
import { ReportsOutComponent } from './components/reports-out/reports-out.component';
import {
  ReportsCompanyAccountingNumberComponent
} from "./components/reports-company-accounting-number/reports-company-accounting-number.component";
import {
  ReportsNomenclatureAccountingNumberComponent
} from "./components/reports-nomenclature-accounting-number/reports-nomenclature-accounting-number.component";
import {
  ReportsTechnologiesAccountingNumberComponent
} from "./components/reports-technologies-accounting-number/reports-technologies-accounting-number.component";
import { ReportsPurchaseCategoriesAccountingNumberComponent } from './components/reports-purchase-categories-accounting-number/reports-purchase-categories-accounting-number.component';
import {
  ReportsAuxiliaryInvoicesAccountingNumberComponent
} from "./components/reposts-auxiliary-invoices-accounting-number/reports-auxiliary-invoices-accounting-number.component";
import { ReportsAccountingCategoriesComponent } from './components/reports-accounting-categories/reports-accounting-categories.component';
import { CreateEditAccountingCategoryComponent } from './modals/create-edit-accounting-category/create-edit-accounting-category.component';
import { ReportsCorrelationComponent } from './components/reports-correlation/reports-correlation.component';
import { AccountingCategoryPickerComponent } from './modals/accounting-category-picker/accounting-category-picker.component';
import { ReportsInvoicesComponent } from './components/reports-invoices/reports-invoices.component';
import { InvoiceFiltersModalComponent } from './modals/invoice-filters-modal/invoice-filters-modal.component';
import { CreateAuxiliaryInvoiceModalComponent } from './modals/create-auxiliary-invoice-modal/create-auxiliary-invoice-modal.component';
import { ReportsInvoicePageComponent } from './components/reports-invoice-page/reports-invoice-page.component';
import { ReportsServiceInvoicePageComponent } from './components/reports-service-invoice-page/reports-service-invoice-page.component';
import { InvoiceFilesModalComponent } from './modals/invoice-files-modal/invoice-files-modal.component';
import { AuxiliaryInvoiceFilesModalComponent } from './modals/auxiliary-invoice-files-modal/auxiliary-invoice-files-modal.component';
import { ReportGenerateXmlComponent } from './modals/report-generate-xml/report-generate-xml.component';
import { EditInvoiceGenerateXmlComponent } from './modals/edit-invoice-generate-xml/edit-invoice-generate-xml.component';
import { GenerateIntrastatXmlComponent } from './modals/generate-intrastat-xml/generate-intrastat-xml.component';
import { CreateEditInvoiceServiceComponent } from './modals/create-edit-invoice-service/create-edit-invoice-service.component';
import { DistributeInvoicePriceModalComponent } from './modals/distribute-invoice-price-modal/distribute-invoice-price-modal.component';
import { NewInvoiceProductModalComponent } from './modals/new-invoice-product-modal/new-invoice-product-modal.component';
import { CreateEditInvoiceProductComponent } from './modals/create-edit-invoice-product/create-edit-invoice-product.component';
import { RmaInvoiceModalComponent } from './modals/rma-invoice-modal/rma-invoice-modal.component';
import { InvoiceRedeliveryRmaModalComponent } from './modals/invoice-redelivery-rma-modal/invoice-redelivery-rma-modal.component';
import { InvoiceProductDeliveryDateComponent } from './modals/invoice-product-delivery-date/invoice-product-delivery-date.component';
import { SelectBindInvoiceModalComponent } from './modals/select-bind-invoice-modal/select-bind-invoice-modal.component';
import { ReportsCostReportsComponent } from './components/reports-cost-reports/reports-cost-reports.component';
import { ReportsOldCostReportComponent } from './components/reports-old-cost-report/reports-old-cost-report.component';
import { ReportsNewCostReportComponent } from './components/reports-new-cost-report/reports-new-cost-report.component';
import { AdditionalExpensesModalComponent } from './modals/additional-expenses-modal/additional-expenses-modal.component';
import { AllocateToToolRequestModalComponent } from './modals/allocate-to-tool-request-modal/allocate-to-tool-request-modal.component';


@NgModule({
  declarations: [
    ReportsLayoutComponent,
    ReportsCurrenciesComponent,
    CreateEditCurrencyComponent,
    ReportsAdditionalExpensesComponent,
    CreateEditAdditionalExpensesComponent,
    CreateEditInvoiceFilterComponent,
    CreateEditReportFilterComponent,
    ReportsFiltersComponent,
    ReportsPaymentsCheckerComponent,
    ReportsItemCardComponent,
    ReportsInComponent,
    ReportsWarehouseBalanceComponent,
    ReportsFiltersModalComponent,
    ReportsOutComponent,
    ReportsCompanyAccountingNumberComponent,
    ReportsNomenclatureAccountingNumberComponent,
    ReportsTechnologiesAccountingNumberComponent,
    ReportsPurchaseCategoriesAccountingNumberComponent,
    ReportsAuxiliaryInvoicesAccountingNumberComponent,
    ReportsAccountingCategoriesComponent,
    CreateEditAccountingCategoryComponent,
    ReportsCorrelationComponent,
    AccountingCategoryPickerComponent,
    ReportsInvoicesComponent,
    InvoiceFiltersModalComponent,
    CreateAuxiliaryInvoiceModalComponent,
    ReportsInvoicePageComponent,
    ReportsServiceInvoicePageComponent,
    InvoiceFilesModalComponent,
    AuxiliaryInvoiceFilesModalComponent,
    ReportGenerateXmlComponent,
    EditInvoiceGenerateXmlComponent,
    GenerateIntrastatXmlComponent,
    CreateEditInvoiceServiceComponent,
    DistributeInvoicePriceModalComponent,
    NewInvoiceProductModalComponent,
    CreateEditInvoiceProductComponent,
    RmaInvoiceModalComponent,
    InvoiceRedeliveryRmaModalComponent,
    InvoiceProductDeliveryDateComponent,
    SelectBindInvoiceModalComponent,
    ReportsCostReportsComponent,
    ReportsOldCostReportComponent,
    ReportsNewCostReportComponent,
    AdditionalExpensesModalComponent,
    AllocateToToolRequestModalComponent
  ],
  imports: [
    CommonModule,
    ReportsRouting,
    LayoutModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    SharedModule
  ]
})
export class ReportsModule {
}
