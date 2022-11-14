import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrmLayoutComponent} from './components/crm-layout/crm-layout.component';
import {CompaniesComponent} from './components/companies/companies.component';
import {CompanyCategoriesComponent} from './components/company-categories/company-categories.component';
import {EventTypesComponent} from './components/event-types/event-types.component';
import {CrmEmployeesComponent} from './components/crm-employees/crm-employees.component';
import {CrmExternalEventsComponent} from './components/crm-external-events/crm-external-events.component';
import {CrmUsersProfilesComponent} from './components/crm-users-profiles/crm-users-profiles.component';
import {CrmSchedulesComponent} from './components/crm-schedules/crm-schedules.component';
import {CrmEventsReportsComponent} from './components/crm-events-reports/crm-events-reports.component';
import {CrmEventCardComponent} from './components/crm-event-card/crm-event-card.component';

const routes: Routes = [
  {
    path: '',
    component: CrmLayoutComponent,
    children: [
      {path: '', redirectTo: 'business-partners', pathMatch: 'full'},
      {path: 'business-partners', title: 'Company card', component: CompaniesComponent},
      {path: 'events-reports', title: 'Events Reports', component: CrmEventsReportsComponent},
      {path: 'schedules', title: 'Schedules', component: CrmSchedulesComponent},
      {path: 'company-categories', title: 'Company categories', component: CompanyCategoriesComponent},
      {path: 'event-types', title: 'Event Types', component: EventTypesComponent},
      {path: 'employees', title: 'Employees', component: CrmEmployeesComponent},
      {path: 'external-events', title: 'External Event Types', component: CrmExternalEventsComponent},
      {path: 'users-profiles', title: 'Users Profiles', component: CrmUsersProfilesComponent},
      {
        path: 'events',
        children: [
          {path: ':id', title: 'Event Card', component: CrmEventCardComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRouting {
}
