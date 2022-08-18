import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/components/layout/layout.component';
import {AuthGuard} from './auth/auth.guard';

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
        path: 'confirmation',
        title: 'Confirmation',
        loadChildren: () => import('./confirmation/confirmation.routing').then(m => m.ConfirmationRouting)
      },
      {path: '**', redirectTo: 'dashboard'},
    ]
  },
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  // Не удалять
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
