import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarehouseItemsComponent} from './components/warehouse-items/warehouse-items.component';
import {WarehouseLayoutComponent} from './components/warehouse-layout/warehouse-layout.component';
import {WarehouseWarehousesComponent} from './components/warehouse-warehouses/warehouse-warehouses.component';
import {WarehouseLocatorsComponent} from './components/warehouse-locators/warehouse-locators.component';
import {WarehouseUnitsMeasureComponent} from './components/warehouse-units-measure/warehouse-units-measure.component';


import {WarehouseCategoriesComponent} from './components/warehouse-categories/warehouse-categories.component';
import {WarehouseWhereUsedComponent} from './components/warehouse-where-used/warehouse-where-used.component';
import {PhysicalInventoryComponent} from './components/physical-inventory/physical-inventory.component';
import {
  PhysicalInventoryProductsComponent
} from './components/physical-inventory/physical-inventory-products/physical-inventory-products.component';
import {WarehouseToolRequestsComponent} from './components/warehouse-tool-requests/warehouse-tool-requests.component';
import {WarehouseToolRequestComponent} from './components/warehouse-tool-request/warehouse-tool-request.component';
import {
  WarehouseProductionRequestsComponent
} from './components/warehouse-production-requests/warehouse-production-requests.component';
import {
  WarehouseProductionRequestComponent
} from './components/warehouse-production-request/warehouse-production-request.component';
import {ProductionListsComponent} from './components/production-lists/production-lists.component';
import {ProductionListComponent} from './components/production-lists/production-list/production-list.component';
import {WarehouseQcComponent} from './components/warehouse-qc/warehouse-qc.component';
import {
  WarehouseQcInvoiceComponent
} from './components/warehouse-qc/warehouse-qc-invoice/warehouse-qc-invoice.component';
import {WarehouseQcOrderComponent} from './components/warehouse-qc/warehouse-qc-order/warehouse-qc-order.component';
import {
  WarehouseIsolatorInvoicesComponent
} from './components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component';
import {
  WarehouseIsolatorOrdersComponent
} from './components/warehouse-isolator/components/warehouse-isolator-orders/warehouse-isolator-orders.component';
import {WarehouseIsolatorComponent} from './components/warehouse-isolator/warehouse-isolator.component';
import {
  WarehouseShippingRequestsComponent
} from './components/warehouse-shipping-requests/warehouse-shipping-requests.component';
import {
  WarehouseShippingRequestComponent
} from './components/warehouse-shipping-requests/warehouse-shipping-request/warehouse-shipping-request.component';


const routes: Routes = [
  {
    path: '', component: WarehouseLayoutComponent, children: [
      {path: '', redirectTo: 'items', pathMatch: 'full'},
      {path: 'items', title: 'Warehouse Items', component: WarehouseItemsComponent},
      {
        path: 'warehouses',
        children: [
          {path: '', title: 'Warehouses', component: WarehouseWarehousesComponent},
          {path: ':id/locators', title: 'Locators', component: WarehouseLocatorsComponent},
        ]
      },
      {path: 'measure', title: 'Units of Measure', component: WarehouseUnitsMeasureComponent},
      {path: 'categories', title: 'Warehouse Categories', component: WarehouseCategoriesComponent},
      {path: 'where-used', title: 'Where Used', component: WarehouseWhereUsedComponent},
      {
        path: 'production-requests', children: [
          {path: '', title: 'Production Requests', component: WarehouseProductionRequestsComponent},
          {path: ':id', title: 'Production Request', component: WarehouseProductionRequestComponent}
        ]
      },
      {
        path: 'tool-requests', children: [
          {path: '', title: 'Tool Requests', component: WarehouseToolRequestsComponent},
          {path: ':id', title: 'Tool Request', component: WarehouseToolRequestComponent}
        ]
      },
      {
        path: 'physical-inventory', children: [
          {path: '', title: 'Physical Inventory', component: PhysicalInventoryComponent},
          {path: ':id', title: 'Physical Inventory Products', component: PhysicalInventoryProductsComponent},
        ]
      },
      {
        path: 'production-lists', children: [
          {path: '', title: 'Production Lists', component: ProductionListsComponent},
          {path: ':id', title: 'Production List', component: ProductionListComponent},
        ]
      },
      {
        path: 'warehouse-qc', children: [
          {path: '', title: 'Warehouse QC', component: WarehouseQcComponent},
          {path: 'invoice/:id', title: 'Warehouse QC Invoice', component: WarehouseQcInvoiceComponent},
          {path: 'order/:id', title: 'Warehouse QC Order', component: WarehouseQcOrderComponent},
        ]
      },
      {
        path: 'isolator', children: [
          {path: '', title: 'Isolator', component: WarehouseIsolatorComponent},
          {path: 'invoices/:id', title: 'Isolator Invoices', component: WarehouseIsolatorInvoicesComponent},
          {path: 'orders/:id', title: 'Isolator Orders', component: WarehouseIsolatorOrdersComponent}
        ]
      },
      {
        path: 'shipments-requests', children: [
          {path: '', title: 'Shipments Requests', component: WarehouseShippingRequestsComponent},
          {path: ':id', title: 'Shipment Request', component: WarehouseShippingRequestComponent},
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRouting {
}
