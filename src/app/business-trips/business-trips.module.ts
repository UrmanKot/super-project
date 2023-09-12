import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {BusinessTripsRoutingModule} from './business-trips-routing.module';
import {BusinessTripsLayoutComponent} from './components/layouts/business-trips-layout/business-trips-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import {BusinessTripsComponent} from './components/business-trips/business-trips.component';
import { EditBusinessTripComponent } from './components/edit-business-trip/edit-business-trip.component';
import {CrmPositionPickerComponent} from '../shared/pickers/crm-position-picker/crm-position-picker.component';
import { LocationInputComponent } from './components/shared/location-input/location-input.component';
import { BusinessTripCountryPickerComponent } from './components/pickers/business-trip-country-picker/business-trip-country-picker.component';
import {TripExpensesTableComponent} from './components/trip-expenses-table/trip-expenses-table.component';
import {VehicleTypePickerComponent} from './components/pickers/vehicle-type-picker/vehicle-type-picker.component';
import { VehiclePickerComponent } from './components/pickers/vehicle-picker/vehicle-picker.component';
import { CreateEditExpenseComponent } from './modals/create-edit-expense/create-edit-expense.component';
import { UploadedDataViewerComponent } from './modals/uploaded-data-viewer/uploaded-data-viewer.component';
import {ExpensePickerComponent} from './modals/create-edit-expense/expense-picker/expense-picker.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { VehiclesComponent } from './components/layouts/vehicles/vehicles.component';
import {CreateUpdateVehicleComponent} from './modals/create-update-vehicle/create-update-vehicle.component';
import { ExpansesComponent } from './components/layouts/expanses/expanses.component';
import { CreateUpdateExpenseComponent } from './modals/create-update-expense/create-update-expense.component';
import { CreateBusinessTripComponent } from './modals/create-business-trip/create-business-trip.component';
import { BusinessTripsMultiStatusPickerComponent } from './components/pickers/business-trips-multi-status-picker/business-trips-multi-status-picker.component';
import { BusinessTripsMultiEmployeeWithCustomComponent } from './components/pickers/business-trips-multi-employee-with-custom/business-trips-multi-employee-with-custom.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { TakePhotoModalComponent } from './modals/take-photo-modal/take-photo-modal.component';
import {WebcamModule} from 'ngx-webcam';
import { HotelsListComponent } from './components/edit-business-trip/component/hotels-list/hotels-list.component';
import { HotelListItemComponent } from './components/edit-business-trip/component/hotels-list/hotel-list-item/hotel-list-item.component';


@NgModule({
    declarations: [
        BusinessTripsLayoutComponent,
        BusinessTripsComponent,
        EditBusinessTripComponent,
        CrmPositionPickerComponent,
        LocationInputComponent,
        BusinessTripCountryPickerComponent,
        TripExpensesTableComponent,
        VehicleTypePickerComponent,
        VehiclePickerComponent,
        CreateEditExpenseComponent,
        UploadedDataViewerComponent,
        ExpensePickerComponent,
        VehiclesComponent,
        CreateUpdateVehicleComponent,
        ExpansesComponent,
        CreateUpdateExpenseComponent,
        CreateBusinessTripComponent,
        BusinessTripsMultiStatusPickerComponent,
        BusinessTripsMultiEmployeeWithCustomComponent,
        TakePhotoModalComponent,
        HotelsListComponent,
        HotelListItemComponent,
    ],
    imports: [
        CommonModule,
        BusinessTripsRoutingModule,
        SharedModule,
        LayoutModule,
        PdfViewerModule,
        MultiSelectModule,
        WebcamModule,
    ],
    exports: [
        CrmPositionPickerComponent,
        BusinessTripsMultiEmployeeWithCustomComponent
    ],
    providers: [DatePipe]
})
export class BusinessTripsModule {
}
