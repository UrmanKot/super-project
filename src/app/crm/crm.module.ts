import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRouting } from './crm.routing';
import { CompaniesComponent } from './components/companies/companies.component';
import { CrmLayoutComponent } from './components/crm-layout/crm-layout.component';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import { CompanyCategoriesComponent } from './components/company-categories/company-categories.component';
import { CreateEditCompanyCategoryComponent } from './modals/create-edit-company-category/create-edit-company-category.component';
import { EventTypesComponent } from './components/event-types/event-types.component';
import { CreateEditEventTypeComponent } from './modals/create-edit-event-type/create-edit-event-type.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import { CrmEmployeePickerComponent } from './pickers/crm-employee-picker/crm-employee-picker.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { CrmEmployeesComponent } from './components/crm-employees/crm-employees.component';
import { CreateEditCrmEmployeeComponent } from './modals/create-edit-crm-employee/create-edit-crm-employee.component';
import { CrmExternalEventsComponent } from './components/crm-external-events/crm-external-events.component';
import { CreateEditExternalEventTypeComponent } from './modals/create-edit-external-event-type/create-edit-external-event-type.component';
import { CrmUsersProfilesComponent } from './components/crm-users-profiles/crm-users-profiles.component';
import { CreateEditUserProfileComponent } from './modals/create-edit-user-profile/create-edit-user-profile.component';
import { CrmSchedulesComponent } from './components/crm-schedules/crm-schedules.component';
import { CreateEditScheduleComponent } from './modals/create-edit-schedule/create-edit-schedule.component';
import { CrmEventTypePickerComponent } from './pickers/crm-event-type-picker/crm-event-type-picker.component';
import { CrmEventsReportsComponent } from './components/crm-events-reports/crm-events-reports.component';
import { CrmMultiEventTypesPickerComponent } from './pickers/crm-multi-event-types-picker/crm-multi-event-types-picker.component';
import { CrmEventCardComponent } from './components/crm-event-card/crm-event-card.component';
import { AddCompanyToEventComponent } from './modals/add-company-to-event/add-company-to-event.component';
import { AddContactPersonToEventComponent } from './modals/add-contact-person-to-event/add-contact-person-to-event.component';
import { CrmContactPersonPickerComponent } from './pickers/crm-contact-person-picker/crm-contact-person-picker.component';
import { EditCrmEventContactPersonComponent } from './modals/edit-crm-event-contact-person/edit-crm-event-contact-person.component';
import {EditCrmEventCompanyComponent} from './modals/edit-crm-event-company/edit-crm-event-company.component';
import {CreateEditLinkedEventComponent} from './modals/create-edit-linked-event/create-edit-linked-event.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    CrmLayoutComponent,
    CompanyCategoriesComponent,
    CreateEditCompanyCategoryComponent,
    EventTypesComponent,
    CreateEditEventTypeComponent,
    CrmEmployeePickerComponent,
    CrmEmployeesComponent,
    CreateEditCrmEmployeeComponent,
    CrmExternalEventsComponent,
    CreateEditExternalEventTypeComponent,
    CrmUsersProfilesComponent,
    CreateEditUserProfileComponent,
    CrmSchedulesComponent,
    CreateEditScheduleComponent,
    CrmEventTypePickerComponent,
    CrmEventsReportsComponent,
    CrmMultiEventTypesPickerComponent,
    CrmEventCardComponent,
    AddCompanyToEventComponent,
    EditCrmEventCompanyComponent,
    AddContactPersonToEventComponent,
    CrmContactPersonPickerComponent,
    EditCrmEventContactPersonComponent,
    CreateEditLinkedEventComponent,
  ],
  imports: [
    CommonModule,
    CrmRouting,
    SharedModule,
    LayoutModule,
    ColorPickerModule,
    MultiSelectModule
  ]
})
export class CrmModule { }
