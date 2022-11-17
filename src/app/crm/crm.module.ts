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
import { CreateEditCompanyComponent } from './modals/create-edit-company/create-edit-company.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CreateEditContactPersonComponent } from './modals/create-edit-contact-person/create-edit-contact-person.component';
import { CreateEditLinkedCompanyComponent } from './modals/create-edit-linked-company/create-edit-linked-company.component';
import {SliderModule} from 'primeng/slider';
import { AddCompanyFileModalComponent } from './modals/add-company-file-modal/add-company-file-modal.component';
import {
  CrmEditCompanyActivityComponent
} from './modals/crm-edit-company-activity-event/crm-edit-company-activity.component';
import { AddEventToCompanyComponent } from './modals/add-event-to-company/add-event-to-company.component';
import { CrmMultiContactPersonsPickerComponent } from './pickers/crm-multi-contact-persons-picker/crm-multi-contact-persons-picker.component';
import { EditEmployeeEventDateComponent } from './modals/edit-employee-event-date/edit-employee-event-date.component';
import { ContactPersonPageComponent } from './components/contact-person-page/contact-person-page.component';
import { CrmEventsComponent } from './components/crm-events/crm-events.component';
import { CrmFullCalendarComponent } from './components/crm-full-calendar/crm-full-calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

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
    CreateEditCompanyComponent,
    CompanyPageComponent,
    CreateEditContactPersonComponent,
    CreateEditLinkedCompanyComponent,
    AddCompanyFileModalComponent,
    CrmEditCompanyActivityComponent,
    AddEventToCompanyComponent,
    CrmMultiContactPersonsPickerComponent,
    EditEmployeeEventDateComponent,
    ContactPersonPageComponent,
    CrmEventsComponent,
    CrmFullCalendarComponent,
  ],
  imports: [
    CommonModule,
    CrmRouting,
    SharedModule,
    LayoutModule,
    ColorPickerModule,
    MultiSelectModule,
    SliderModule,
    FullCalendarModule
  ]
})
export class CrmModule { }
