import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/components/layout/layout.component';
import {AuthGuard} from './auth/auth.guard';
import {ExternalUriGuard} from '@shared/guards/external-uri.guard';
import {OrderStatusesChartComponent} from '@shared/components/order-statuses-chart/order-statuses-chart.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'product-structure',
        title: 'Product structure',
        loadChildren: () => import('./product-structure/product-structure.module').then(m => m.ProductStructureModule)
      },
      {
        path: 'procurement',
        title: 'Procurement',
        loadChildren: () => import('./procurement/procurement.module').then(m => m.ProcurementModule)
      },
      {
        path: 'outsourcing',
        title: 'Outsourcing',
        loadChildren: () => import('./outsourcing/outsourcing.module').then(m => m.OutsourcingModule)
      },
      {
        path: 'purchasing',
        title: 'Purchasing',
        loadChildren: () => import('./purchasing/purchasing.module').then(m => m.PurchasingModule)
      },
      {
        path: 'confirmation',
        title: 'Confirmation',
        loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule)
      },
      {
        path: 'warehouse',
        title: 'Warehouse',
        loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule)
      },
      {
        path: 'sales',
        title: 'Sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      },
      {
        path: 'manufacturing',
        title: 'Manufacturing',
        loadChildren: () => import('./manufacturing/manufacturing.module').then(m => m.ManufacturingModule)
      },
      {
        path: 'delivery-procurement-chains',
        title: 'Delivery Chains',
        loadChildren: () => import('./delivery-chains/delivery-chains.module').then(m => m.DeliveryChainsModule)
      },
      {
        path: 'statistics',
        title: 'ERP Statistics',
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: 'payments',
        title: 'Payments',
        loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'admin',
        title: 'Administration',
        loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
      },
      {
        path: 'crm',
        title: 'CRM',
        loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule)
      },
      {
        path: 'business-trips',
        title: 'Business Trips',
        loadChildren: () => import('./business-trips/business-trips.module').then(m => m.BusinessTripsModule)
      },
      {path: 'order-statuses-chart', component: OrderStatusesChartComponent},
      {
        path: 'correspondents',
        title: 'Correspondents',
        loadChildren: () => import('./correspondent/correspondent.module').then(m => m.CorrespondentModule)
      },
      {
        path: 'instruments',
        title: 'Instruments',
        loadChildren: () => import('./instruments/instruments.module').then(m => m.InstrumentsModule)
      },
      {
        path: 'quality-control',
        title: 'Quality Control',
        loadChildren: () => import('./qc/qc.module').then(m => m.QcModule)
      }, {
        path: 'reports',
        title: 'Reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }, {
        path: 'delivery-chains',
        title: 'Delivery Chains',
        loadChildren: () => import('./delivery-chains/delivery-chains.module').then(m => m.DeliveryChainsModule)
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  // Не удалять
  {path: 'external/:uri', canActivate: [ExternalUriGuard], children: []},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
