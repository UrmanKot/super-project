"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["default-src_app_business-trips_business-trips_module_ts"],{

/***/ 2126:
/*!*****************************************************************!*\
  !*** ./src/app/business-trips/business-trips-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsRoutingModule": () => (/* binding */ BusinessTripsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_layouts_business_trips_layout_business_trips_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/business-trips-layout/business-trips-layout.component */ 4954);
/* harmony import */ var _components_business_trips_business_trips_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/business-trips/business-trips.component */ 8038);
/* harmony import */ var _components_edit_business_trip_edit_business_trip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit-business-trip/edit-business-trip.component */ 62078);
/* harmony import */ var _components_layouts_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/vehicles/vehicles.component */ 76849);
/* harmony import */ var _components_layouts_expanses_expanses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/expanses/expanses.component */ 50970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [{
        path: '', component: _components_layouts_business_trips_layout_business_trips_layout_component__WEBPACK_IMPORTED_MODULE_0__.BusinessTripsLayoutComponent, children: [
            {
                path: 'trips',
                title: 'Business Trips',
                component: _components_business_trips_business_trips_component__WEBPACK_IMPORTED_MODULE_1__.BusinessTripsComponent
            },
            {
                path: 'trip/edit/:tripId',
                data: { isVerify: false },
                title: 'Edit Business Trip',
                component: _components_edit_business_trip_edit_business_trip_component__WEBPACK_IMPORTED_MODULE_2__.EditBusinessTripComponent
            },
            {
                path: 'trip/verify/:tripId',
                data: { isVerify: true },
                title: 'Verify Business Trip',
                component: _components_edit_business_trip_edit_business_trip_component__WEBPACK_IMPORTED_MODULE_2__.EditBusinessTripComponent
            },
            {
                path: 'vehicles',
                title: 'Business Trip Vehicles',
                component: _components_layouts_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__.VehiclesComponent
            },
            {
                title: 'Business Trip Expenses',
                path: 'expenses',
                component: _components_layouts_expanses_expanses_component__WEBPACK_IMPORTED_MODULE_4__.ExpansesComponent
            },
            {
                path: '**',
                redirectTo: 'trips'
            },
        ]
    }];
class BusinessTripsRoutingModule {
}
BusinessTripsRoutingModule.ɵfac = function BusinessTripsRoutingModule_Factory(t) { return new (t || BusinessTripsRoutingModule)(); };
BusinessTripsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BusinessTripsRoutingModule });
BusinessTripsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BusinessTripsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 49162:
/*!*********************************************************!*\
  !*** ./src/app/business-trips/business-trips.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsModule": () => (/* binding */ BusinessTripsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _business_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-trips-routing.module */ 2126);
/* harmony import */ var _components_layouts_business_trips_layout_business_trips_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/business-trips-layout/business-trips-layout.component */ 4954);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _components_business_trips_business_trips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/business-trips/business-trips.component */ 8038);
/* harmony import */ var _components_edit_business_trip_edit_business_trip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-business-trip/edit-business-trip.component */ 62078);
/* harmony import */ var _shared_pickers_crm_position_picker_crm_position_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pickers/crm-position-picker/crm-position-picker.component */ 42062);
/* harmony import */ var _components_shared_location_input_location_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/location-input/location-input.component */ 61532);
/* harmony import */ var _components_pickers_business_trip_country_picker_business_trip_country_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pickers/business-trip-country-picker/business-trip-country-picker.component */ 80897);
/* harmony import */ var _components_trip_expenses_table_trip_expenses_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/trip-expenses-table/trip-expenses-table.component */ 25048);
/* harmony import */ var _components_pickers_vehicle_type_picker_vehicle_type_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pickers/vehicle-type-picker/vehicle-type-picker.component */ 35638);
/* harmony import */ var _components_pickers_vehicle_picker_vehicle_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pickers/vehicle-picker/vehicle-picker.component */ 95481);
/* harmony import */ var _modals_create_edit_expense_create_edit_expense_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/create-edit-expense/create-edit-expense.component */ 80204);
/* harmony import */ var _modals_uploaded_data_viewer_uploaded_data_viewer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/uploaded-data-viewer/uploaded-data-viewer.component */ 33574);
/* harmony import */ var _modals_create_edit_expense_expense_picker_expense_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/create-edit-expense/expense-picker/expense-picker.component */ 98935);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var _components_layouts_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/layouts/vehicles/vehicles.component */ 76849);
/* harmony import */ var _modals_create_update_vehicle_create_update_vehicle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/create-update-vehicle/create-update-vehicle.component */ 56568);
/* harmony import */ var _components_layouts_expanses_expanses_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layouts/expanses/expanses.component */ 50970);
/* harmony import */ var _modals_create_update_expense_create_update_expense_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/create-update-expense/create-update-expense.component */ 34248);
/* harmony import */ var _modals_create_business_trip_create_business_trip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/create-business-trip/create-business-trip.component */ 16671);
/* harmony import */ var _components_pickers_business_trips_multi_status_picker_business_trips_multi_status_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pickers/business-trips-multi-status-picker/business-trips-multi-status-picker.component */ 61370);
/* harmony import */ var _components_pickers_business_trips_multi_employee_with_custom_business_trips_multi_employee_with_custom_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pickers/business-trips-multi-employee-with-custom/business-trips-multi-employee-with-custom.component */ 60495);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var _modals_take_photo_modal_take_photo_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/take-photo-modal/take-photo-modal.component */ 50929);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-webcam */ 38986);
/* harmony import */ var _components_edit_business_trip_component_hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-business-trip/component/hotels-list/hotels-list.component */ 47239);
/* harmony import */ var _components_edit_business_trip_component_hotels_list_hotel_list_item_hotel_list_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-business-trip/component/hotels-list/hotel-list-item/hotel-list-item.component */ 88061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_pickers_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/pickers/date-time-picker/date-time-picker.component */ 51424);
/* harmony import */ var _shared_pickers_crm_employee_picker_crm_single_employee_picker_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/pickers/crm-employee-picker/crm-single-employee-picker.component */ 26297);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_components_upload_file_picker_upload_file_picker_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/components/upload-file-picker/upload-file-picker.component */ 59673);
/* harmony import */ var _shared_pickers_currency_picker_currency_picker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/pickers/currency-picker/currency-picker.component */ 62660);













































class BusinessTripsModule {
}
BusinessTripsModule.ɵfac = function BusinessTripsModule_Factory(t) { return new (t || BusinessTripsModule)(); };
BusinessTripsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: BusinessTripsModule });
BusinessTripsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.DatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _business_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessTripsRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_32__.PdfViewerModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__.MultiSelectModule,
        ngx_webcam__WEBPACK_IMPORTED_MODULE_34__.WebcamModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](BusinessTripsModule, { declarations: [_components_layouts_business_trips_layout_business_trips_layout_component__WEBPACK_IMPORTED_MODULE_1__.BusinessTripsLayoutComponent,
        _components_business_trips_business_trips_component__WEBPACK_IMPORTED_MODULE_4__.BusinessTripsComponent,
        _components_edit_business_trip_edit_business_trip_component__WEBPACK_IMPORTED_MODULE_5__.EditBusinessTripComponent,
        _shared_pickers_crm_position_picker_crm_position_picker_component__WEBPACK_IMPORTED_MODULE_6__.CrmPositionPickerComponent,
        _components_shared_location_input_location_input_component__WEBPACK_IMPORTED_MODULE_7__.LocationInputComponent,
        _components_pickers_business_trip_country_picker_business_trip_country_picker_component__WEBPACK_IMPORTED_MODULE_8__.BusinessTripCountryPickerComponent,
        _components_trip_expenses_table_trip_expenses_table_component__WEBPACK_IMPORTED_MODULE_9__.TripExpensesTableComponent,
        _components_pickers_vehicle_type_picker_vehicle_type_picker_component__WEBPACK_IMPORTED_MODULE_10__.VehicleTypePickerComponent,
        _components_pickers_vehicle_picker_vehicle_picker_component__WEBPACK_IMPORTED_MODULE_11__.VehiclePickerComponent,
        _modals_create_edit_expense_create_edit_expense_component__WEBPACK_IMPORTED_MODULE_12__.CreateEditExpenseComponent,
        _modals_uploaded_data_viewer_uploaded_data_viewer_component__WEBPACK_IMPORTED_MODULE_13__.UploadedDataViewerComponent,
        _modals_create_edit_expense_expense_picker_expense_picker_component__WEBPACK_IMPORTED_MODULE_14__.ExpensePickerComponent,
        _components_layouts_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_15__.VehiclesComponent,
        _modals_create_update_vehicle_create_update_vehicle_component__WEBPACK_IMPORTED_MODULE_16__.CreateUpdateVehicleComponent,
        _components_layouts_expanses_expanses_component__WEBPACK_IMPORTED_MODULE_17__.ExpansesComponent,
        _modals_create_update_expense_create_update_expense_component__WEBPACK_IMPORTED_MODULE_18__.CreateUpdateExpenseComponent,
        _modals_create_business_trip_create_business_trip_component__WEBPACK_IMPORTED_MODULE_19__.CreateBusinessTripComponent,
        _components_pickers_business_trips_multi_status_picker_business_trips_multi_status_picker_component__WEBPACK_IMPORTED_MODULE_20__.BusinessTripsMultiStatusPickerComponent,
        _components_pickers_business_trips_multi_employee_with_custom_business_trips_multi_employee_with_custom_component__WEBPACK_IMPORTED_MODULE_21__.BusinessTripsMultiEmployeeWithCustomComponent,
        _modals_take_photo_modal_take_photo_modal_component__WEBPACK_IMPORTED_MODULE_22__.TakePhotoModalComponent,
        _components_edit_business_trip_component_hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_23__.HotelsListComponent,
        _components_edit_business_trip_component_hotels_list_hotel_list_item_hotel_list_item_component__WEBPACK_IMPORTED_MODULE_24__.HotelListItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _business_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessTripsRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_32__.PdfViewerModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__.MultiSelectModule,
        ngx_webcam__WEBPACK_IMPORTED_MODULE_34__.WebcamModule], exports: [_shared_pickers_crm_position_picker_crm_position_picker_component__WEBPACK_IMPORTED_MODULE_6__.CrmPositionPickerComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetComponentScope"](_components_edit_business_trip_edit_business_trip_component__WEBPACK_IMPORTED_MODULE_5__.EditBusinessTripComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_35__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_37__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormGroupName, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_39__.Checkbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_25__.ModuleIconComponent, _shared_pickers_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_26__.DateTimePickerComponent, _shared_pickers_crm_employee_picker_crm_single_employee_picker_component__WEBPACK_IMPORTED_MODULE_27__.CrmSingleEmployeePickerComponent, _shared_pickers_crm_position_picker_crm_position_picker_component__WEBPACK_IMPORTED_MODULE_6__.CrmPositionPickerComponent,
    _components_shared_location_input_location_input_component__WEBPACK_IMPORTED_MODULE_7__.LocationInputComponent,
    _components_trip_expenses_table_trip_expenses_table_component__WEBPACK_IMPORTED_MODULE_9__.TripExpensesTableComponent,
    _components_pickers_vehicle_type_picker_vehicle_type_picker_component__WEBPACK_IMPORTED_MODULE_10__.VehicleTypePickerComponent,
    _components_pickers_vehicle_picker_vehicle_picker_component__WEBPACK_IMPORTED_MODULE_11__.VehiclePickerComponent,
    _components_edit_business_trip_component_hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_23__.HotelsListComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetComponentScope"](_modals_create_edit_expense_create_edit_expense_component__WEBPACK_IMPORTED_MODULE_12__.CreateEditExpenseComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_35__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_40__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_37__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormGroupName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__.MatDialogActions, primeng_dropdown__WEBPACK_IMPORTED_MODULE_42__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_39__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_43__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_43__.SelectableRow, _shared_components_upload_file_picker_upload_file_picker_component__WEBPACK_IMPORTED_MODULE_28__.UploadFilePickerComponent, _shared_pickers_currency_picker_currency_picker_component__WEBPACK_IMPORTED_MODULE_29__.CurrencyPickerComponent, _modals_create_edit_expense_expense_picker_expense_picker_component__WEBPACK_IMPORTED_MODULE_14__.ExpensePickerComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetComponentScope"](_components_edit_business_trip_component_hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_23__.HotelsListComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _components_edit_business_trip_component_hotels_list_hotel_list_item_hotel_list_item_component__WEBPACK_IMPORTED_MODULE_24__.HotelListItemComponent], []);


/***/ }),

/***/ 8038:
/*!**************************************************************************************!*\
  !*** ./src/app/business-trips/components/business-trips/business-trips.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsComponent": () => (/* binding */ BusinessTripsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/business-trip-status.enum */ 37071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 35330);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_business_trip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/business-trip.service */ 96288);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_pickers_multi_countries_picker_multi_countries_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pickers/multi-countries-picker/multi-countries-picker.component */ 92083);
/* harmony import */ var _pickers_business_trips_multi_status_picker_business_trips_multi_status_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pickers/business-trips-multi-status-picker/business-trips-multi-status-picker.component */ 61370);
/* harmony import */ var _pickers_business_trips_multi_employee_with_custom_business_trips_multi_employee_with_custom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pickers/business-trips-multi-employee-with-custom/business-trips-multi-employee-with-custom.component */ 60495);
























const _c0 = ["paginator"];

function BusinessTripsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}

function BusinessTripsComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}

function BusinessTripsComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Trip Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Trip End");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function BusinessTripsComponent_ng_template_62_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BusinessTripsComponent_ng_template_62_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Need To Be Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BusinessTripsComponent_ng_template_62_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " In Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BusinessTripsComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 40)(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BusinessTripsComponent_ng_template_62_span_15_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, BusinessTripsComponent_ng_template_62_span_16_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, BusinessTripsComponent_ng_template_62_span_17_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const expense_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pSelectableRow", expense_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r3.currentPage - 1) * 10 + i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](expense_r10.employee ? expense_r10.employee.first_name + " " + expense_r10.employee.last_name : expense_r10.custom_employee.first_name + " " + expense_r10.custom_employee.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 9, expense_r10.created_at, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](10, 12, expense_r10.trip_start, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](13, 15, expense_r10.trip_end, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", expense_r10.status === ctx_r3.tripStatus.VERIFIED);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", expense_r10.status === ctx_r3.tripStatus.NEED_VERIFICATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", expense_r10.status === ctx_r3.tripStatus.NEW);
  }
}

function BusinessTripsComponent_ng_template_63_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 44);
  }
}

function BusinessTripsComponent_ng_template_63_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BusinessTripsComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BusinessTripsComponent_ng_template_63_i_2_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, BusinessTripsComponent_ng_template_63_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("colspan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
  }
}

function BusinessTripsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BusinessTripsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 46)(1, "p-paginator", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onPageChange", function BusinessTripsComponent_div_65_Template_p_paginator_onPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BusinessTripsComponent_div_65_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.onShowAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r6.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r6.count);
  }
}

function BusinessTripsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BusinessTripsComponent_div_66_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.onShowAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function BusinessTripsComponent_ng_template_67_p_menubar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "p-menubar", 54);
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", !ctx_r23.selectedBusinessTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("model", ctx_r23.menuItems);
  }
}

function BusinessTripsComponent_ng_template_67_p_menubar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "p-menubar", 54);
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", !ctx_r24.selectedBusinessTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("model", ctx_r24.menuItemsMultiple);
  }
}

function BusinessTripsComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BusinessTripsComponent_ng_template_67_p_menubar_1_Template, 1, 3, "p-menubar", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BusinessTripsComponent_ng_template_67_p_menubar_2_Template, 1, 3, "p-menubar", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r9.selectedBusinessTrips || (ctx_r9.selectedBusinessTrips == null ? null : ctx_r9.selectedBusinessTrips.length) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r9.selectedBusinessTrips == null ? null : ctx_r9.selectedBusinessTrips.length) > 1);
  }
}

let BusinessTripsComponent = class BusinessTripsComponent {
  constructor(router, fb, businessTripService, modalService, adapterService, auth) {
    this.router = router;
    this.fb = fb;
    this.businessTripService = businessTripService;
    this.modalService = modalService;
    this.adapterService = adapterService;
    this.auth = auth;
    this.isLoading = false;
    this.tripStatus = _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus;
    this.count = 0;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(null);
    this.businessTrips$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.prepareForSearch()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.iif)(() => !this.isShowAll, this.businessTripService.get(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(response => this.count = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(response => response.results)), this.businessTripService.getAll(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(products => this.count = products.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(response => response)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.paginateToFistPage()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this));
    this.isStartFirstPage = false;
    this.currentPage = 1;
    this.isShowAll = false;
    this.searchForm = this.fb.group({
      employees: [null],
      trip_start: [null],
      trip_end: [null],
      created_at: [null],
      statuses: [null],
      duration_more_than: [null],
      duration: ['other'],
      durationOther: [0],
      location_countries_ids: [null]
    });
    this.queryKey = this.adapterService.generateQueryKey(this.searchForm);
    this.query = [];
    this.menuItems = [{
      label: 'Selected Business Trip',
      items: [{
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editExpenseBusinessTrip()
      }, {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteBusinessTrip()
      }, {
        label: 'Export To XLS',
        icon: 'pi pi-file-excel',
        command: () => this.exportToXls()
      }]
    }];
    this.menuItemsMultiple = [{
      label: 'Selected Business Trips',
      items: [{
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteBusinessTrip()
      }, {
        label: 'Export To XLS',
        icon: 'pi pi-file-excel',
        command: () => this.exportToXls()
      }]
    }];
    this.tableScrollHeight = '29.625rem';

    if (auth.user.can_verify_expenses) {
      this.menuItems[0].items.splice(1, 0, {
        label: 'Verify BT',
        icon: 'pi pi-check',
        command: () => this.verifyBt()
      });
    }
  }

  ngOnInit() {}

  createBusinessTrip() {
    this.businessTripService.createChangeBusinessTrip().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(res => {
      if (res) this.search$.next();
    });
  }

  editExpenseBusinessTrip() {
    this.router.navigate(['/business-trips/trip/edit/', this.selectedBusinessTrips[0].id]);
  }

  verifyBt() {
    this.router.navigate(['/business-trips/trip/verify/', this.selectedBusinessTrips[0].id]);
  }

  deleteBusinessTrip() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        const calls = [];
        this.selectedBusinessTrips.forEach(trip => {
          calls.push(this.businessTripService.delete(trip).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)));
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([...calls]).subscribe(() => {
          this.search$.next();
        });
      }
    });
  }

  exportToXls() {
    const tripIds = this.selectedBusinessTrips.map(trip => trip.id);
    this.businessTripService.getBtForExport([{
      name: 'business_trips_ids',
      value: tripIds
    }]).subscribe(res => {
      res.forEach(trip => {
        this.businessTripService.exportToExcel(trip).then();
      });
    });
  }

  paginate(evt) {
    if (!this.isStartFirstPage) {
      this.currentPage = evt.page + 1;
      this.search$.next();
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onShowAll(value) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedBusinessTrips = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [{
      name: 'page',
      value: this.currentPage
    }, {
      name: 'by_user_trip_permissions',
      value: true
    }];

    if (!this.isShowAll) {
      this.query.push({
        name: 'paginated',
        value: true
      });
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null && key !== 'duration' && key !== 'durationOther') {
        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  onSelectEmployees(employees) {
    this.searchForm.get('employees').patchValue(employees);
    this.search$.next();
  }

  onSelectStatuses(statuses) {
    this.searchForm.get('statuses').patchValue(statuses);
    this.search$.next();
  }

  onSelectDuration() {
    switch (this.searchForm.get('duration').value) {
      case 'hour':
        this.searchForm.get('duration_more_than').patchValue(3600);
        break;

      case 'day':
        this.searchForm.get('duration_more_than').patchValue(86400);
        break;

      case 'month':
        this.searchForm.get('duration_more_than').patchValue(2678400);
        break;

      case 'other':
        this.searchForm.get('duration_more_than').patchValue(3600 * this.searchForm.get('durationOther').value);
        break;
    }

    this.search$.next();
  }

  changeOtherDuration() {
    if (this.searchForm.get('duration').value === 'other') {
      this.searchForm.get('duration_more_than').patchValue(3600 * this.searchForm.get('durationOther').value);
      this.search$.next();
    }
  }

  onSelectCountries(countries) {
    this.searchForm.get('location_countries_ids').patchValue(countries?.map(c => c.alpha2_code).join(',') ?? null);
    console.log(this.searchForm.get('location_countries_ids').value);
    this.search$.next();
  }

};

BusinessTripsComponent.ɵfac = function BusinessTripsComponent_Factory(t) {
  return new (t || BusinessTripsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_business_trip_service__WEBPACK_IMPORTED_MODULE_1__.BusinessTripService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};

BusinessTripsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: BusinessTripsComponent,
  selectors: [["pek-business-trips"]],
  viewQuery: function BusinessTripsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 69,
  vars: 20,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Business Trip", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], [3, "valueChange"], ["formControlName", "trip_start", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], ["formControlName", "trip_end", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], ["formControlName", "created_at", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], [3, "selectCountries"], [1, "col-6"], [1, "duration"], [1, "d-flex"], [1, "other-duration"], [1, "other-duration-row"], ["type", "number", "pInputText", "", "formControlName", "durationOther", "placeholder", "Number in hours", 3, "ngModelChange"], [1, "col-3", "col-actions"], [1, "page__table"], [1, "table-pagination-preloader"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 27.375rem)", 3, "scrollable", "rows", "value", "selection", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [4, "ngIf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "action-buttons"], ["class", "ml-auto", 3, "model", "disabled", 4, "ngIf"], [1, "ml-auto", 3, "model"]],
  template: function BusinessTripsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Business Trips");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BusinessTripsComponent_Template_button_click_7_listener() {
        return ctx.createBusinessTrip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, BusinessTripsComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "form", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Employees");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "pek-business-trips-multi-employee-with-custom", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function BusinessTripsComponent_Template_pek_business_trips_multi_employee_with_custom_valueChange_19_listener($event) {
        return ctx.onSelectEmployees($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Date Trip Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "p-calendar", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BusinessTripsComponent_Template_p_calendar_ngModelChange_24_listener() {
        return ctx.search$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 13)(26, "div", 14)(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Date Trip End");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "p-calendar", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BusinessTripsComponent_Template_p_calendar_ngModelChange_29_listener() {
        return ctx.search$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 13)(31, "div", 14)(32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Date Trip Created");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "p-calendar", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BusinessTripsComponent_Template_p_calendar_ngModelChange_34_listener() {
        return ctx.search$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Statuses");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "pek-business-trips-multi-status-picker", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function BusinessTripsComponent_Template_pek_business_trips_multi_status_picker_valueChange_39_listener($event) {
        return ctx.onSelectStatuses($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 13)(41, "div", 14)(42, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Countries");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "pek-multi-countries-picker", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectCountries", function BusinessTripsComponent_Template_pek_multi_countries_picker_selectCountries_44_listener($event) {
        return ctx.onSelectCountries($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 20)(46, "div", 21)(47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Duration Is Longer Than");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 22)(50, "div", 23)(51, "div", 24)(52, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BusinessTripsComponent_Template_input_ngModelChange_52_listener() {
        return ctx.changeOtherDuration();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Hour(s)");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, BusinessTripsComponent_ng_container_56_Template, 1, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 27)(58, "div", 28)(59, "p-table", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function BusinessTripsComponent_Template_p_table_selectionChange_59_listener($event) {
        return ctx.selectedBusinessTrips = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](60, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, BusinessTripsComponent_ng_template_61_Template, 13, 0, "ng-template", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, BusinessTripsComponent_ng_template_62_Template, 18, 18, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, BusinessTripsComponent_ng_template_63_Template, 4, 3, "ng-template", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, BusinessTripsComponent_div_64_Template, 2, 0, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, BusinessTripsComponent_div_65_Template, 5, 4, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, BusinessTripsComponent_div_66_Template, 3, 0, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, BusinessTripsComponent_ng_template_67_Template, 3, 2, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](68);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("module", "business-trip")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("scrollable", true)("rows", 10)("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](60, 18, ctx.businessTrips$))("selection", ctx.selectedBusinessTrips);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_20__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_22__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, primeng_menubar__WEBPACK_IMPORTED_MODULE_23__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_24__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_24__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_25__.Paginator, primeng_calendar__WEBPACK_IMPORTED_MODULE_26__.Calendar, _shared_pickers_multi_countries_picker_multi_countries_picker_component__WEBPACK_IMPORTED_MODULE_6__.MultiCountriesPickerComponent, _pickers_business_trips_multi_status_picker_business_trips_multi_status_picker_component__WEBPACK_IMPORTED_MODULE_7__.BusinessTripsMultiStatusPickerComponent, _pickers_business_trips_multi_employee_with_custom_business_trips_multi_employee_with_custom_component__WEBPACK_IMPORTED_MODULE_8__.BusinessTripsMultiEmployeeWithCustomComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
  styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background: transparent;\n  cursor: pointer;\n  color: #6c757d;\n  right: 0.6rem;\n  top: 0.275rem;\n}\n\n.other-duration[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.col-actions[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.duration[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.duration[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin-bottom: 0.6875rem;\n  font-weight: 500;\n}\n\n.other-duration-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.other-duration-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLXRyaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQUtFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU9BO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBT0U7RUFDRSxtQkFBQTtBQUxKIiwiZmlsZSI6ImJ1c2luZXNzLXRyaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG59XHJcblxyXG4uY29sLTMge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIHJpZ2h0OiAwLjZyZW07XHJcbiAgICB0b3A6IDAuMjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm90aGVyLWR1cmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sLWFjdGlvbnMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5kdXJhdGlvbiB7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcblxyXG4gICYgPiBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ub3RoZXItZHVyYXRpb24tcm93IHtcclxuICAvL21hcmdpbi1sZWZ0OiAwLjc1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
});
BusinessTripsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], BusinessTripsComponent);


/***/ }),

/***/ 88061:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/business-trips/components/edit-business-trip/component/hotels-list/hotel-list-item/hotel-list-item.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotelListItemComponent": () => (/* binding */ HotelListItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_business_trip_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/business-trip.service */ 96288);
/* harmony import */ var _services_business_trip_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/business-trip-hotel.service */ 93324);
/* harmony import */ var _services_business_trip_hotel_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/business-trip-hotel-files.service */ 10139);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_components_upload_file_picker_upload_file_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/upload-file-picker/upload-file-picker.component */ 59673);
/* harmony import */ var _shared_directives_paste_screen_image_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/directives/paste-screen-image.directive */ 40609);
/* harmony import */ var _pickers_business_trip_country_picker_business_trip_country_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../pickers/business-trip-country-picker/business-trip-country-picker.component */ 80897);



















const _c0 = ["filePicker"];
function HotelListItemComponent_p_footer_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-footer", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HotelListItemComponent_p_footer_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](25); ctx_r8.setHotelStartValue(_r0.value); ctx_r8.hotelChanged.next(); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Set Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HotelListItemComponent_p_footer_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-footer", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HotelListItemComponent_p_footer_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32); ctx_r10.setHotelEndValue(_r2.value); ctx_r10.hotelChanged.next(); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r2.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Set Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HotelListItemComponent_ng_template_46_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Choose the Hotel Files to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function HotelListItemComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HotelListItemComponent_ng_template_46_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "p-menubar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.selectedHotelFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", !ctx_r5.selectedHotelFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("model", ctx_r5.menuItems);
} }
function HotelListItemComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function HotelListItemComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 32)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td")(4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const file_r13 = ctx.$implicit;
    const i_r14 = ctx.rowIndex;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", file_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", file_r13.file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.getName(file_r13.file), " ");
} }
class HotelListItemComponent {
    constructor(businessService, businessTripHotelService, businessTripHotelFilesService, modalService, adapterService) {
        this.businessService = businessService;
        this.businessTripHotelService = businessTripHotelService;
        this.businessTripHotelFilesService = businessTripHotelFilesService;
        this.modalService = modalService;
        this.adapterService = adapterService;
        this.hotelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.showFilePicker = true;
        this.hotelUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.hotelDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.menuItems = [{
                label: 'Selected Hotel Files',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteFile()
                    }
                ]
            }];
        this.hotelEndDate = null;
        this.hotelStartDate = null;
        this.startDate = null;
        this.endDate = null;
        this.formData = new FormData();
    }
    ngOnInit() {
        if (this.tripHotel.residence_start) {
            this.startDate = new Date(this.tripHotel.residence_start);
        }
        if (this.tripHotel.residence_end) {
            this.endDate = new Date(this.tripHotel.residence_end);
        }
        if (this.tripHotel.id) {
            this.loadHotelFiles(this.tripHotel.id);
        }
        this.hotelChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(400), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
            this.updateHotel();
        });
    }
    updateHotel() {
        const updatedHotel = {
            residence_start: this.tripHotel.residence_start ? this.tripHotel.residence_start : null,
            residence_end: this.tripHotel.residence_end ? this.tripHotel.residence_end : null,
            address: this.tripHotel.address,
            country: this.tripHotel.country?.code,
            name: this.tripHotel.name,
            id: this.tripHotel.id,
            business_trip: this.businessTripId,
        };
        if (!updatedHotel.name || !updatedHotel.country) {
            return;
        }
        if (updatedHotel.id) {
            this.businessTripHotelService
                .update(updatedHotel.id, updatedHotel)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                .subscribe(res => {
                this.hotelUpdated.next(this.tripHotel);
            });
        }
        else {
            this.businessTripHotelService
                .create(updatedHotel)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                .subscribe(res => {
                this.tripHotel.id = res.id;
                this.hotelUpdated.next(this.tripHotel);
            });
        }
    }
    get country() {
        return this.tripHotel.country ? this.tripHotel.country.code : null;
    }
    get start_date() {
        return this.tripHotel.residence_start ? new Date(this.tripHotel.residence_start) : null;
    }
    get end_date() {
        return this.tripHotel.residence_end ? new Date(this.tripHotel.residence_end) : null;
    }
    viewHotelFiles() {
        const data = { links: this.preparedFiles, files: [] };
        this.businessService.viewBusinessTripFiles(data);
    }
    loadHotelFiles(hotelId) {
        this.businessTripHotelFilesService.get([{
                name: 'business_trip_hotel_id',
                value: hotelId
            }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(response => {
            this.preparedFiles = response;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    clickHotelOutside(type) {
        if (this.endDate?.getTime() !== this.hotelStartDate?.getTime()) {
            this.tripHotel.residence_end = this.hotelStartDate;
        }
        if (this.endDate?.getTime() !== this.hotelEndDate?.getTime()) {
            this.tripHotel.residence_end = this.hotelEndDate;
        }
    }
    setHotelStartValue(start) {
        this.tripHotel.residence_start = this.adapterService.dateAdapter(start);
        if (start) {
            this.hotelStartDate = start;
            this.startDate = new Date(this.tripHotel.residence_start);
            if (this.tripHotel.residence_end &&
                this.tripHotel.residence_end < this.tripHotel.residence_start) {
                this.setHotelEndValue(this.tripHotel.residence_start);
            }
        }
    }
    setHotelEndValue(end) {
        if (end) {
            this.tripHotel.residence_end = this.adapterService.dateAdapter(end);
            this.hotelEndDate = end;
        }
    }
    filesChanged(files) {
        if (files.length > 0) {
            this.tripHotel.files = files;
            setTimeout(() => {
                this.updateFiles();
            }, 1000);
        }
    }
    updateFiles() {
        this.showFilePicker = false;
        const data = [];
        this.tripHotel.files.forEach(file => {
            data.push({
                file: file,
                business_trip_id: this.tripHotel.id
            });
        });
        const send = {
            files: this.tripHotel.files,
            id: this.tripHotel.id
        };
        const result = this.obj2FormData(send);
        this.businessTripHotelFilesService.add_hotel_files(result).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(res => {
            this.loadHotelFiles(this.tripHotel.id);
            this.filePicker.clearFiles();
        });
    }
    obj2FormData(obj, formData = new FormData()) {
        this.formData = formData;
        this.createFormData(obj);
        return this.formData;
    }
    createFormData(obj, subKeyStr = '') {
        for (const i in obj) {
            const value = obj[i];
            const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;
            if (typeof (value) === 'string' || typeof (value) === 'number' || typeof (value) === 'boolean') {
                // @ts-ignore
                this.formData.append(subKeyStrTrans, value);
            }
            else if (typeof (value) === 'object') {
                if (value instanceof File) {
                    this.formData.append(subKeyStrTrans, value);
                }
                else {
                    this.createFormData(value, subKeyStrTrans);
                }
            }
        }
    }
    getName(name) {
        const nameArr = name.split('/');
        return nameArr[nameArr.length - 1];
    }
    deleteFile() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.businessTripHotelFilesService.delete(this.selectedHotelFile).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
                    this.selectedHotelFile = null;
                    this.loadHotelFiles(this.tripHotel.id);
                });
            }
        });
    }
    fileAdded(file) {
        this.tripHotel.files = [file];
        setTimeout(() => {
            this.updateFiles();
        }, 1000);
    }
    deleteHotel() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                if (this.tripHotel.id) {
                    this.businessTripHotelService
                        .delete(this.tripHotel)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
                        .subscribe(res => {
                        this.hotelDeleted.next();
                    });
                }
                else {
                    this.hotelDeleted.next();
                }
            }
        });
    }
}
HotelListItemComponent.ɵfac = function HotelListItemComponent_Factory(t) { return new (t || HotelListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_business_trip_service__WEBPACK_IMPORTED_MODULE_0__.BusinessTripService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_business_trip_hotel_service__WEBPACK_IMPORTED_MODULE_1__.BusinessTripHotelService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_business_trip_hotel_files_service__WEBPACK_IMPORTED_MODULE_2__.BusinessTripHotelFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__.AdapterService)); };
HotelListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HotelListItemComponent, selectors: [["pek-hotel-list-item"]], viewQuery: function HotelListItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.filePicker = _t.first);
    } }, inputs: { tripHotel: "tripHotel", businessTripId: "businessTripId" }, outputs: { hotelUpdated: "hotelUpdated", hotelDeleted: "hotelDeleted" }, decls: 54, vars: 22, consts: [["pekPasteScreenImage", "", 1, "page__card", 3, "imageAdded"], [1, "row"], [1, "col-4"], [1, "form-group"], ["pInputText", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "country", "valueChangeFull"], [1, "col-6"], ["hourFormat", "24", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "firstDayOfWeek", "hideOnDateTimeSelect", "showButtonBar", "ngModel", "readonlyInput", "onClickOutside"], ["startHotel", ""], ["class", "d-flex justify-content-center align-items-center", 4, "ngIf"], ["hourFormat", "24", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "firstDayOfWeek", "minDate", "disabled", "hideOnDateTimeSelect", "showButtonBar", "ngModel", "readonlyInput", "onClickOutside"], ["endHotel", ""], [1, "col-12"], [3, "fileChanged"], ["filePicker", ""], [1, "col-11"], [1, "col-1"], ["pButton", "", "type", "button", "icon", "fa fa-eye", "label", "View files", 3, "click"], ["selectionMode", "single", 3, "paginator", "rows", "value", "scrollable", "selection", "selectionChange"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "col-10"], [1, "col-2"], ["pButton", "", "type", "button", "icon", "fa fa-trash", "label", "Delete Hotel", 1, "p-button-danger", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "btn", "btn-primary", "position-absolute", "mb-5", 3, "click"], [1, "d-flex", "align-items-center"], ["class", "subtitle ml-1 mr-2", 4, "ngIf"], [1, "ml-auto", "mr-2", 3, "model"], [1, "subtitle", "ml-1", "mr-2"], [1, "index-header"], [3, "pSelectableRow"], [3, "href"]], template: function HotelListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("imageAdded", function HotelListItemComponent_Template_div_imageAdded_0_listener($event) { return ctx.fileAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div")(2, "div")(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HotelListItemComponent_Template_input_ngModelChange_8_listener() { return ctx.hotelChanged.next(); })("ngModelChange", function HotelListItemComponent_Template_input_ngModelChange_8_listener($event) { return ctx.tripHotel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "pek-business-trip-country-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChangeFull", function HotelListItemComponent_Template_pek_business_trip_country_picker_valueChangeFull_13_listener($event) { ctx.tripHotel.country = $event; return ctx.hotelChanged.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HotelListItemComponent_Template_input_ngModelChange_18_listener() { return ctx.hotelChanged.next(); })("ngModelChange", function HotelListItemComponent_Template_input_ngModelChange_18_listener($event) { return ctx.tripHotel.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 1)(20, "div", 6)(21, "div", 3)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Residence Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p-calendar", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickOutside", function HotelListItemComponent_Template_p_calendar_onClickOutside_24_listener() { return ctx.clickHotelOutside("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, HotelListItemComponent_p_footer_26_Template, 3, 0, "p-footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 6)(28, "div", 3)(29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Residence End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p-calendar", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickOutside", function HotelListItemComponent_Template_p_calendar_onClickOutside_31_listener() { return ctx.clickHotelOutside("end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, HotelListItemComponent_p_footer_33_Template, 3, 0, "p-footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 1)(35, "div", 12)(36, "div", 3)(37, "pek-upload-file-picker", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("fileChanged", function HotelListItemComponent_Template_pek_upload_file_picker_fileChanged_37_listener($event) { return ctx.filesChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 1)(40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 16)(43, "div", 3)(44, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HotelListItemComponent_Template_button_click_44_listener() { return ctx.viewHotelFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "p-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function HotelListItemComponent_Template_p_table_selectionChange_45_listener($event) { return ctx.selectedHotelFile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, HotelListItemComponent_ng_template_46_Template, 3, 4, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, HotelListItemComponent_ng_template_47_Template, 5, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, HotelListItemComponent_ng_template_48_Template, 6, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 23)(52, "div", 3)(53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HotelListItemComponent_Template_button_click_53_listener() { return ctx.deleteHotel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](25);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.tripHotel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("country", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.tripHotel.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("firstDayOfWeek", 1)("hideOnDateTimeSelect", false)("showButtonBar", true)("ngModel", ctx.startDate)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("firstDayOfWeek", 1)("minDate", ctx.startDate)("disabled", !ctx.startDate)("hideOnDateTimeSelect", false)("showButtonBar", true)("ngModel", ctx.endDate)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r2.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paginator", true)("rows", 10)("value", ctx.preparedFiles)("scrollable", true)("selection", ctx.selectedHotelFile);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_15__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, primeng_menubar__WEBPACK_IMPORTED_MODULE_17__.Menubar, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SelectableRow, primeng_calendar__WEBPACK_IMPORTED_MODULE_19__.Calendar, _shared_components_upload_file_picker_upload_file_picker_component__WEBPACK_IMPORTED_MODULE_5__.UploadFilePickerComponent, _shared_directives_paste_screen_image_directive__WEBPACK_IMPORTED_MODULE_6__.PasteScreenImageDirective, _pickers_business_trip_country_picker_business_trip_country_picker_component__WEBPACK_IMPORTED_MODULE_7__.BusinessTripCountryPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3RlbC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 47239:
/*!*************************************************************************************************************!*\
  !*** ./src/app/business-trips/components/edit-business-trip/component/hotels-list/hotels-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotelsListComponent": () => (/* binding */ HotelsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _models_business_trip_hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/business-trip-hotel */ 24182);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_business_trip_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/business-trip-hotel.service */ 93324);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 14356);






function HotelsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "pek-hotel-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("hotelUpdated", function HotelsListComponent_div_0_Template_pek_hotel_list_item_hotelUpdated_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const hotel_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.hotelUpdated(hotel_r2, $event)); })("hotelDeleted", function HotelsListComponent_div_0_Template_pek_hotel_list_item_hotelDeleted_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.getBusinessTripHotels()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const hotel_r2 = ctx.$implicit;
    const first_r3 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("space-up", !first_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("businessTripId", ctx_r0.businessTripId)("tripHotel", hotel_r2);
} }
function HotelsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " No Hotels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class HotelsListComponent {
    constructor(businessTripHotelService, messageService) {
        this.businessTripHotelService = businessTripHotelService;
        this.messageService = messageService;
        this.tripHotels = [];
        this.currentBusinessTripHotels = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.businessTripId) {
            this.getBusinessTripHotels();
        }
    }
    getBusinessTripHotels() {
        this.businessTripHotelService.get([{
                name: 'business_trip',
                value: this.businessTripId
            }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(res => {
            this.tripHotels = res;
            this.currentBusinessTripHotels.emit(this.tripHotels);
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    hotelUpdated(hotel, $event) {
        hotel = $event;
        this.currentBusinessTripHotels.emit(this.tripHotels);
    }
    addHotel() {
        const hotel = new _models_business_trip_hotel__WEBPACK_IMPORTED_MODULE_0__.BusinessTripHotel();
        this.tripHotels.push(hotel);
        this.messageService.add({ severity: 'success', summary: 'Hotel Added', detail: `Hotel added to the list` });
    }
}
HotelsListComponent.ɵfac = function HotelsListComponent_Factory(t) { return new (t || HotelsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_business_trip_hotel_service__WEBPACK_IMPORTED_MODULE_1__.BusinessTripHotelService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
HotelsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HotelsListComponent, selectors: [["pek-hotels-list"]], inputs: { tripHotels: "tripHotels", businessTripId: "businessTripId" }, outputs: { currentBusinessTripHotels: "currentBusinessTripHotels" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "businessTripId", "tripHotel", "hotelUpdated", "hotelDeleted"], [1, "d-flex", "justify-content-center"]], template: function HotelsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HotelsListComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HotelsListComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tripHotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tripHotels.length === 0);
    } }, styles: [".space-up[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdGVscy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaG90ZWxzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2UtdXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 62078:
/*!**********************************************************************************************!*\
  !*** ./src/app/business-trips/components/edit-business-trip/edit-business-trip.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataToSend": () => (/* binding */ DataToSend),
/* harmony export */   "EditBusinessTripComponent": () => (/* binding */ EditBusinessTripComponent)
/* harmony export */ });
/* harmony import */ var _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/business-trip-status.enum */ 37071);
/* harmony import */ var _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/business-trip-location-status.enum */ 39856);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-copy-ts */ 47307);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/business-trip-vehicle-type */ 78604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _crm_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../crm/services/crm-employee.service */ 29038);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_business_trip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/business-trip.service */ 96288);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _services_business_trip_vehicle_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/business-trip-vehicle.service */ 89801);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _crm_services_crm_positions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../crm/services/crm-positions.service */ 3230);
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/vehicle.service */ 66029);
/* harmony import */ var _crm_services_company_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../crm/services/company.service */ 54600);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/expense.service */ 42503);
/* harmony import */ var _services_business_location_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/business-location.service */ 38069);
/* harmony import */ var _services_business_trip_hotel_files_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/business-trip-hotel-files.service */ 10139);






















const _c0 = ["filePicker"];
const _c1 = ["hotelsList"];
function EditBusinessTripComponent_div_14_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 24)(3, "div", 20)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_14_div_7_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r14.employeeChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 24)(8, "div", 20)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_14_div_7_Template_input_ngModelChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r16.employeeChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 24)(13, "div", 20)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "app-crm-position-picker", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function EditBusinessTripComponent_div_14_div_7_Template_app_crm_position_picker_valueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); ctx_r17.form.get("employee_position").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r17.employeeChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("position", ctx_r11.form.get("employee_position").value);
} }
const _c2 = function () { return { standalone: true }; };
function EditBusinessTripComponent_div_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 28)(1, "div", 18)(2, "div", 24)(3, "div", 20)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "pek-crm-single-employee-picker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function EditBusinessTripComponent_div_14_ng_template_8_Template_pek_crm_single_employee_picker_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); ctx_r18._employee.setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.employeeChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 24)(8, "div", 20)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 24)(13, "div", 20)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("filters", ctx_r13.employeeFilter)("showProfession", true)("employee", ctx_r13._employee.get("id").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r13._employee.get("position").value ? ctx_r13._employee.get("position").value.title : null)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](6, _c2));
} }
function EditBusinessTripComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Not Listed Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onChange", function EditBusinessTripComponent_div_14_Template_p_checkbox_onChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.employeeChanged()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, EditBusinessTripComponent_div_14_div_7_Template, 17, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, EditBusinessTripComponent_div_14_ng_template_8_Template, 17, 7, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.form.get("isOtherEmployee").value)("ngIfElse", _r12);
} }
function EditBusinessTripComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 32)(3, "div", 20)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Start Date an time");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "pek-date-time-picker", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("setDate", function EditBusinessTripComponent_div_19_Template_pek_date_time_picker_setDate_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r22.setStartValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.infoChangedEmit.next(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 32)(8, "div", 20)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "pek-date-time-picker", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("setDate", function EditBusinessTripComponent_div_19_Template_pek_date_time_picker_setDate_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r24.setEndValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r24.infoChangedEmit.next(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("maxDate", (tmp_0_0 = ctx_r1.form.get("trip_end")) == null ? null : tmp_0_0.value)("date", (tmp_1_0 = ctx_r1.form.get("trip_start")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("minDate", (tmp_2_0 = ctx_r1.form.get("trip_start")) == null ? null : tmp_2_0.value)("date", (tmp_3_0 = ctx_r1.form.get("trip_end")) == null ? null : tmp_3_0.value);
} }
function EditBusinessTripComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "h2")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Starting Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "pek-location-input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("countryChanged", function EditBusinessTripComponent_div_24_Template_pek_location_input_countryChanged_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r25.form.get("start_location_country").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r25.locationChanged.next({ type: ctx_r25.locationStatus.FIRST, locationIndex: null })); })("addressChanged", function EditBusinessTripComponent_div_24_Template_pek_location_input_addressChanged_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r27.form.get("start_location_address").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r27.locationChanged.next({ type: ctx_r27.locationStatus.FIRST, locationIndex: null })); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 18)(9, "div", 19)(10, "div", 20)(11, "h2")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "Arrival Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "pek-location-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("meetingsChanged", function EditBusinessTripComponent_div_24_Template_pek_location_input_meetingsChanged_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r28.lastPointMeetingChanged($event)); })("countryChanged", function EditBusinessTripComponent_div_24_Template_pek_location_input_countryChanged_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r29.form.get("last_location_country").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r29.locationChanged.next({ type: ctx_r29.locationStatus.LAST, locationIndex: null })); })("addressChanged", function EditBusinessTripComponent_div_24_Template_pek_location_input_addressChanged_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r30.form.get("last_location_address").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r30.locationChanged.next({ type: ctx_r30.locationStatus.LAST, locationIndex: null })); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("country", ctx_r2.form.get("start_location_country").value)("address", ctx_r2.form.get("start_location_address").value)("locationId", ctx_r2.form.get("start_location_id").value)("type", ctx_r2.locationStatus.FIRST)("showHr", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("country", ctx_r2.form.get("last_location_country").value)("address", ctx_r2.form.get("last_location_address").value)("locationId", ctx_r2.form.get("last_location_id").value)("type", ctx_r2.locationStatus.LAST)("showHr", false)("companiesFilters", ctx_r2.companiesFilters)("showAddMeetings", true);
} }
function EditBusinessTripComponent_div_30_pek_location_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "pek-location-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("emitDeletePoint", function EditBusinessTripComponent_div_30_pek_location_input_1_Template_pek_location_input_emitDeletePoint_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37); const point_r33 = restoredCtx.$implicit; const index_r34 = restoredCtx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.removePoint(point_r33, index_r34)); })("meetingsChanged", function EditBusinessTripComponent_div_30_pek_location_input_1_Template_pek_location_input_meetingsChanged_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37); const point_r33 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r38.meetingChanged(point_r33, $event)); })("countryChanged", function EditBusinessTripComponent_div_30_pek_location_input_1_Template_pek_location_input_countryChanged_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37); const point_r33 = restoredCtx.$implicit; const index_r34 = restoredCtx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); point_r33.get("country").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r39.locationChanged.next({ type: ctx_r39.locationStatus.INTERMEDIATE, locationIndex: index_r34 })); })("addressChanged", function EditBusinessTripComponent_div_30_pek_location_input_1_Template_pek_location_input_addressChanged_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37); const point_r33 = restoredCtx.$implicit; const index_r34 = restoredCtx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); point_r33.get("address").setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r40.locationChanged.next({ type: ctx_r40.locationStatus.INTERMEDIATE, locationIndex: index_r34 })); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r33 = ctx.$implicit;
    const last_r35 = ctx.last;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("last", last_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("country", point_r33.get("country").value)("address", point_r33.get("address").value)("locationId", point_r33.get("id").value)("showHr", !last_r35)("showDelete", true)("companiesFilters", ctx_r31.companiesFilters)("type", ctx_r31.locationStatus.INTERMEDIATE)("showAddMeetings", true);
} }
function EditBusinessTripComponent_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 39)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " No Intermediate Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function EditBusinessTripComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, EditBusinessTripComponent_div_30_pek_location_input_1_Template, 1, 10, "pek-location-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, EditBusinessTripComponent_div_30_div_2_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3._intermediatePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r3._intermediatePoints.length === 0);
} }
function EditBusinessTripComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Purpose short");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_35_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r41.infoChangedEmit.next(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 18)(8, "div", 19)(9, "div", 20)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Purpose Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_35_Template_textarea_ngModelChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.infoChangedEmit.next(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
} }
function EditBusinessTripComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "pek-hotels-list", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("currentBusinessTripHotels", function EditBusinessTripComponent_div_41_Template_pek_hotels_list_currentBusinessTripHotels_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r45.updateHotels($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("businessTripId", ctx_r5.tripId);
} }
function EditBusinessTripComponent_div_46_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 24)(1, "div", 20)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Vehicle Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_46_ng_template_7_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r51.vehicleChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 24)(6, "div", 20)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Vehicle Registration Plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_46_ng_template_7_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r53.vehicleChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} }
function EditBusinessTripComponent_div_46_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 49)(1, "div", 20)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "pek-vehicle-picker", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function EditBusinessTripComponent_div_46_ng_template_8_Template_pek_vehicle_picker_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); ctx_r54._vehicle.setValue($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r54.vehicleChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 49)(6, "div", 20)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Vehicle Registration Plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("placeholder", "Vehicle Model")("vehicle", ctx_r48._vehicle.get("id").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("disabled", true);
} }
function EditBusinessTripComponent_div_46_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 32)(2, "div", 20)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Start Mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_46_div_9_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.vehicleChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 32)(7, "div", 20)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "End Mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditBusinessTripComponent_div_46_div_9_Template_input_ngModelChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.vehicleChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} }
function EditBusinessTripComponent_div_46_ng_template_10_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_div_46_ng_template_10_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.viewFile()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("href", ctx_r60.form.get("start_mileage_file").value, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r60.getName(ctx_r60.form.get("start_mileage_file").value), " ");
} }
function EditBusinessTripComponent_div_46_ng_template_10_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_div_46_ng_template_10_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r67.removeMileageFile("start_mileage_file")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " Remove File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function EditBusinessTripComponent_div_46_ng_template_10_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("href", ctx_r63.form.get("end_mileage_file").value, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r63.getName(ctx_r63.form.get("end_mileage_file").value), " ");
} }
function EditBusinessTripComponent_div_46_ng_template_10_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_div_46_ng_template_10_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r69.removeMileageFile("end_mileage_file")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " Remove File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function EditBusinessTripComponent_div_46_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "div", 32)(2, "div", 54)(3, "label", 55)(4, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function EditBusinessTripComponent_div_46_ng_template_10_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r71.imageManipulation($event, $event.target, "start_mileage_file")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Choose File");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, EditBusinessTripComponent_div_46_ng_template_10_a_10_Template, 2, 2, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, EditBusinessTripComponent_div_46_ng_template_10_button_11_Template, 3, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 32)(13, "div", 54)(14, "label", 61)(15, "input", 62, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function EditBusinessTripComponent_div_46_ng_template_10_Template_input_input_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r73.imageManipulation($event, $event.target, "end_mileage_file")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Choose File");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, EditBusinessTripComponent_div_46_ng_template_10_a_21_Template, 2, 2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, EditBusinessTripComponent_div_46_ng_template_10_button_22_Template, 3, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r50.form.get("start_mileage_file").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r50.form.get("start_mileage_file").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r50.form.get("end_mileage_file").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r50.form.get("end_mileage_file").value);
} }
function EditBusinessTripComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 24)(3, "div", 20)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Vehicle Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "pek-vehicle-type-picker", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function EditBusinessTripComponent_div_46_Template_pek_vehicle_type_picker_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r74.changedVehicleType($event); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r74.vehicleChangedEmit.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, EditBusinessTripComponent_div_46_ng_template_7_Template, 10, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, EditBusinessTripComponent_div_46_ng_template_8_Template, 10, 3, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, EditBusinessTripComponent_div_46_div_9_Template, 11, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, EditBusinessTripComponent_div_46_ng_template_10_Template, 23, 4, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("type", ctx_r6.form.get("vehicle_type").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.form.get("vehicle_type").value === ctx_r6.BusinessTripVehicleType.PRIVATE || ctx_r6.form.get("vehicle_type").value === ctx_r6.BusinessTripVehicleType.RENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.form.get("vehicle_type").value === ctx_r6.BusinessTripVehicleType.COMPANY_CAR);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.form.get("vehicle_type").value !== ctx_r6.BusinessTripVehicleType.WITHOUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.form.get("vehicle_type").value !== ctx_r6.BusinessTripVehicleType.WITHOUT);
} }
function EditBusinessTripComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Initiator");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "pek-crm-single-employee-picker", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function EditBusinessTripComponent_div_51_Template_pek_crm_single_employee_picker_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); ctx_r76.form.get("initiator").setValue($event.id); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r76.infoChangedEmit.next(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("employee", ctx_r7.form.get("initiator").value);
} }
function EditBusinessTripComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 39)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " No Evidences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function EditBusinessTripComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
class DataToSend {
}
class EditBusinessTripComponent {
    constructor(crmEmployeeService, fb, businessService, modalService, adapterService, businessTripVehicleService, route, messageService, employeePositionService, vehicleService, companiesService, expenseService, businessLocationService, businessTripHotelFilesService) {
        this.crmEmployeeService = crmEmployeeService;
        this.fb = fb;
        this.businessService = businessService;
        this.modalService = modalService;
        this.adapterService = adapterService;
        this.businessTripVehicleService = businessTripVehicleService;
        this.route = route;
        this.messageService = messageService;
        this.employeePositionService = employeePositionService;
        this.vehicleService = vehicleService;
        this.companiesService = companiesService;
        this.expenseService = expenseService;
        this.businessLocationService = businessLocationService;
        this.businessTripHotelFilesService = businessTripHotelFilesService;
        this.tripExpenses = [];
        this.tripHotels = [];
        this.tripStatuses = _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus;
        this.endDate = null;
        this.startDate = null;
        this.locationStatus = _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes;
        this.hotelEndDate = null;
        this.hotelStartDate = null;
        this.isExpensesRefreshing = false;
        this.formData = new FormData();
        this.isDataPrepared = false;
        this.hotelFilesToDeleteIds = [];
        this.pointsToDeleteIds = [];
        this.expensesToDeleteIds = [];
        this.employeeFilter = [{ name: 'by_user_trip_permissions', value: true }];
        this.isVerify = false;
        this.isExportView = false;
        this.BusinessTripVehicleType = _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType;
        this.menuItems = [{
                label: 'Selected Hotel Files',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteFile()
                    }
                ]
            }];
        this.locationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.employeeChangedEmit = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.infoChangedEmit = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.hotelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.vehicleChangedEmit = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.showFilePicker = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_3__.environment.image_path;
        this.route.data.subscribe(res => {
            this.isVerify = res['isVerify'];
        });
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(params => Number(params.get('tripId')))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(tripId => {
            this.tripId = tripId;
            this.getBusinessTrip(this.tripId);
        });
        this.employeeChangedEmit.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(400), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(() => {
            this.employeeUpdate();
            this.infoChangedEmit.next(false);
        });
        this.infoChangedEmit.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(400), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(res => {
            if (this.isDataPrepared) {
                this.infoChanged(res);
            }
        });
        this.hotelChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(() => {
            this.updateHotelInfo();
            this.infoChangedEmit.next(false);
        });
        this.vehicleChangedEmit.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(() => {
            this.vehicleUpdate();
            this.infoChangedEmit.next(false);
        });
    }
    ngOnInit() {
        this.loadCompanies();
        this.locationChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(type => {
            if (this.isDataPrepared) {
                this.updateLocationDefault(type.type, type.locationIndex);
            }
        });
    }
    getBusinessTripVehicle() {
        this.businessTripVehicleService.get([{ name: 'business_trip', value: this.tripId }]).subscribe(res => {
            if (res.length > 0) {
                this.form.get('business_trip_vehicle_id').setValue(res[0].id);
                this.form.get('vehicle_type').setValue(res[0].vehicle_type);
                this.form.get('start_mileage').setValue(res[0].start_mileage);
                this.form.get('end_mileage').setValue(res[0].end_mileage);
                this.form.get('end_mileage').setValue(res[0].end_mileage);
                this.form.get('start_mileage_file').setValue(res[0].start_mileage_file);
                this.form.get('end_mileage_file').setValue(res[0].end_mileage_file);
                if (res[0].custom_vehicle) {
                    const vehicle = res[0].custom_vehicle;
                    this.form.get('isOtherVehicle').setValue(true);
                    this.form.get('vehicle_model').setValue(vehicle.model);
                    this.form.get('vehicle_number').setValue(vehicle.number);
                    this.form.get('vehicle_id').setValue(vehicle.id);
                }
                if (res[0].vehicle) {
                    this.form.get('isOtherVehicle').setValue(false);
                    this.form.get('vehicle').setValue(res[0].vehicle);
                }
            }
        });
    }
    loadCompanies() {
        this.companiesService.get([{ name: 'by_user', value: true }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(companies => {
            this.companiesFilters = companies;
        });
    }
    prepareForm() {
        return this.fb.group({
            isOtherEmployee: [false],
            employee: this.fb.group({
                id: [null],
                first_name: [null],
                last_name: [null],
                position: [null]
            }),
            employee_first_name: [''],
            employee_last_name: [''],
            employee_position: [null],
            employee_id: [null],
            initiator: [null],
            trip_start: [null],
            trip_end: [null],
            start_location_id: [null],
            start_location_country: [null],
            start_location_address: [null],
            last_location_id: [null],
            vehicle_type: [_enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.WITHOUT],
            business_trip_vehicle_id: [null],
            last_location_country: [null],
            last_location_address: [null],
            last_location_meetings: this.fb.array([]),
            intermediatePoints: this.fb.array([]),
            purpose_short: [''],
            purpose_full: [''],
            isOtherVehicle: [false],
            vehicle: this.fb.group({
                id: [null],
                model: [null],
                number: [null]
            }),
            vehicle_model: [''],
            vehicle_number: [''],
            start_mileage: [0],
            end_mileage: [0],
            start_mileage_file: [''],
            end_mileage_file: [''],
            vehicle_id: [null],
            showHotel: [false],
            expenses: this.fb.array([]),
            hotels: this.fb.array([]),
            hotel: this.fb.group({
                id: [null],
                residence_start: [null],
                residence_end: [null],
                files: [null],
                hotel_name: [null],
                hotel_country: [null],
                hotel_address: [null],
                base64Files: this.fb.array([])
            })
        });
    }
    getBusinessTrip(id) {
        this.form = this.prepareForm();
        this.businessService.getDetailed(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(trip => {
            this.businessTrip = trip;
            if (this.businessTrip.custom_employee) {
                const employee = this.businessTrip.custom_employee;
                this.form.get('isOtherEmployee').setValue(true);
                this.form.get('employee_first_name').setValue(employee.first_name);
                this.form.get('employee_last_name').setValue(employee.last_name);
                if (employee.position) {
                    this.form.get('employee_position').setValue(employee.position.id);
                }
                this.form.get('employee_id').setValue(employee.id);
            }
            if (this.businessTrip.employee) {
                const employee = this.businessTrip.employee;
                this.form.get('employee').setValue(employee);
            }
            if (this.businessTrip.trip_end) {
                this.form.get('trip_end').setValue(new Date(this.businessTrip.trip_end));
            }
            if (this.businessTrip.trip_start) {
                this.form.get('trip_start').setValue(new Date(this.businessTrip.trip_start));
            }
            this.form.get('purpose_full').setValue(this.businessTrip.purpose_full);
            this.form.get('purpose_short').setValue(this.businessTrip.purpose_short);
            // Locations
            this.businessTrip.locations.forEach(location => {
                if (location.type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.FIRST) {
                    this.form.get('start_location_country').setValue(location.country);
                    this.form.get('start_location_address').setValue(location.address);
                    this.form.get('start_location_id').setValue(location.id);
                }
                if (location.type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.LAST) {
                    this.form.get('last_location_country').setValue(location.country);
                    this.form.get('last_location_address').setValue(location.address);
                    this.form.get('last_location_id').setValue(location.id);
                    location.location_meetings.forEach(meeting => {
                        this.form.get('last_location_meetings').push(this.fb.group({
                            id: meeting.id,
                            location_id: meeting.location_id,
                            company: meeting.company,
                            contacts: this.fb.array(meeting.contacts)
                        }));
                    }, { emitEvent: false });
                }
                if (location.type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.INTERMEDIATE) {
                    this.form.get('intermediatePoints').push(this.fb.group({
                        id: location.id,
                        country: location.country,
                        address: location.address,
                        location_meetings: this.fb.array(location.location_meetings),
                    }));
                }
            });
            this.form.get('initiator').setValue(this.businessTrip.initiator);
            this.getBusinessTripVehicle();
            this.isDataPrepared = true;
        });
    }
    updateExpenses(expenses) {
        if (expenses && expenses.length > 0) {
            this.form.removeControl('expenses');
            this.form.addControl('expenses', this.fb.array([]));
            expenses.forEach(expense => {
                let expensePrepared = {
                    id: null,
                    name: null,
                    description: null,
                };
                let customExpensePrepared = {
                    id: null,
                    name: null,
                    description: null,
                };
                if (expense.expense) {
                    expensePrepared = expense.expense;
                }
                if (expense.custom_expense) {
                    customExpensePrepared = expense.custom_expense;
                }
                this.form.get('expenses').push(this.fb.group({
                    base64File: null,
                    currency: expense.currency,
                    custom_expense: customExpensePrepared,
                    expense: expensePrepared,
                    id: expense.id,
                    sum: expense.sum,
                    isOther: !!customExpensePrepared.id,
                    is_verified: expense.is_verified,
                    type: expense.type,
                    file: expense.file,
                    uploaded_file: null,
                    clear_file: false,
                }));
            });
            this.tripExpenses = [];
            this.form.get('expenses').controls.forEach(group => {
                this.tripExpenses.push(group.value);
            });
        }
    }
    updateHotels(hotels) {
        if (hotels.length > 0) {
            this.form.get('showHotel').setValue(true);
            this.form.removeControl('hotels');
            this.form.addControl('hotels', this.fb.array([]));
            hotels.forEach(hotel => {
                this.form.get('hotels').push(this.fb.group({
                    id: hotel.id,
                    residence_start: hotel.residence_start ? new Date(hotel.residence_start) : null,
                    residence_end: hotel.residence_end ? new Date(hotel.residence_end) : null,
                    files: [],
                    hotel_name: hotel.name,
                    hotel_country: hotel.country,
                    hotel_address: hotel.address,
                    base64Files: this.fb.array([])
                }));
            });
            this.tripHotels = [];
            this.form.get('hotels').controls.forEach(group => {
                this.tripHotels.push(group.value);
            });
        }
    }
    setStartValue(start) {
        if (start) {
            this.form.get('trip_start').patchValue(start);
            this.startDate = start;
            if (this.form.get('trip_end').value && this.form.get('trip_end').value < this.form.get('trip_start').value) {
                this.setEndValue(this.form.get('trip_end').value);
            }
        }
    }
    setEndValue(end) {
        if (end) {
            this.form.get('trip_end').patchValue(end);
            this.endDate = end;
        }
    }
    addIntermediatePoint() {
        this.form.get('intermediatePoints').push(this.fb.group({
            id: [],
            country: [],
            address: [],
            location_meetings: this.fb.array([]),
        }));
    }
    get _intermediatePoints() {
        return this.form.get('intermediatePoints').controls;
    }
    removePoint(point, index) {
        if (point.value.id) {
            this.businessLocationService.delete(point.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(() => {
                this.form.get('intermediatePoints').removeAt(index);
            });
        }
        else {
            this.form.get('intermediatePoints').removeAt(index);
        }
    }
    get _hotel() {
        return this.form.get('hotel');
    }
    editTripExpense(index) {
        const element = this.form.get('expenses').controls[index].value;
        this.expenseService
            .createChangeExpanseItem(element, this.isVerify)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res) {
                this.form.get('expenses').controls[index].setValue(res.value);
                this.tripExpenses = [];
                this.form.get('expenses').controls.forEach(group => {
                    this.tripExpenses.push(group.value);
                });
            }
        });
    }
    setHotelEndValue(end) {
        if (end) {
            this._hotel.get('residence_end').patchValue(end);
            this.hotelEndDate = end;
        }
    }
    get _employee() {
        return this.form.get('employee');
    }
    get _vehicle() {
        return this.form.get('vehicle');
    }
    editBusinessTrip(status) {
        if (!this.form.valid) {
            this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Fill all required field` });
            return;
        }
        if (this.form.valid) {
            const dataToSend = this.prepareDataToSend(status);
            const result = this.obj2FormData(dataToSend);
            this.businessService
                .update(this.tripId, result)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
                .subscribe((res) => {
                this.isDataPrepared = false;
                this.form.reset();
                this.hotelFilesToDeleteIds = [];
                this.preparedFiles = [];
                this.selectedHotelFile = null;
                this.businessTrip = null;
                this.tripExpenses = [];
                this.getBusinessTrip(this.tripId);
            });
        }
    }
    prepareDataToSend(status, prepareToExport = false) {
        const preparedLocations = [];
        let tempFormValue;
        if (prepareToExport) {
            tempFormValue = (0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(this.form.value);
        }
        else {
            tempFormValue = this.form.value;
        }
        if (tempFormValue.start_location_country) {
            const startLocation = {
                id: tempFormValue.start_location_id,
                type: _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.FIRST,
                address: tempFormValue.start_location_address,
                fullCountry: tempFormValue.start_location_country,
                country: tempFormValue.start_location_country?.code,
            };
            preparedLocations.push(startLocation);
        }
        if (tempFormValue.last_location_country) {
            const lastLocation = {
                id: tempFormValue.last_location_id,
                type: _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.LAST,
                address: tempFormValue.last_location_address,
                fullCountry: tempFormValue.last_location_country,
                country: tempFormValue.last_location_country?.code,
                location_meetings: tempFormValue.last_location_meetings
            };
            preparedLocations.push(lastLocation);
        }
        const locations = tempFormValue.intermediatePoints;
        locations.forEach(location => {
            location.type = _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.INTERMEDIATE;
            location.fullCountry = location.country;
            location.country = location.country?.code;
        });
        preparedLocations.push(...locations);
        preparedLocations.forEach(location => {
            if (location.location_meetings) {
                location.location_meetings.forEach(meeting => {
                    meeting.fullCompany = meeting.company;
                    meeting.fullContacts = meeting.contacts;
                    meeting.company = meeting.company?.id;
                    meeting.contacts = meeting.contacts.map(contact => contact.id);
                });
            }
        });
        const tripStart = tempFormValue.trip_start ?
            this.adapterService.dateTimeAdapter(new Date(tempFormValue.trip_start)) : null;
        const tripEnd = tempFormValue.trip_end ?
            this.adapterService.dateTimeAdapter(new Date(tempFormValue.trip_end)) : null;
        const dataToSend = {
            initiator: tempFormValue.initiator,
            locations: preparedLocations,
            purpose_full: tempFormValue.purpose_full ? tempFormValue.purpose_full : null,
            purpose_short: tempFormValue.purpose_short ? tempFormValue.purpose_short : null,
            vehicle_type: tempFormValue.vehicle_type,
            trip_end: tripEnd ? tripEnd : null,
            trip_start: tripStart ? tripStart : null,
            expenses: [],
            hotels: [],
            start_mileage: tempFormValue.start_mileage,
            end_mileage: tempFormValue.end_mileage,
            status,
        };
        tempFormValue.hotels.forEach(hotel => {
            if (hotel.hotel_name) {
                const hotelStartDate = hotel.residence_start ?
                    this.adapterService.dateAdapter(new Date(hotel.residence_start)) : null;
                const hotelEndDate = hotel.residence_end ?
                    this.adapterService.dateAdapter(new Date(hotel.residence_end)) : null;
                const hotelInfo = {
                    residence_start: hotelStartDate ? new Date(hotel.residence_start) : null,
                    residence_end: hotelEndDate ? new Date(hotel.residence_end) : null,
                    address: hotel.hotel_address,
                    country: hotel.hotel_country.code,
                    fullCountry: hotel.hotel_country,
                    name: hotel.hotel_name,
                    id: hotel.id,
                    files: hotel.files,
                };
                dataToSend.hotels.push(hotelInfo);
            }
        });
        if (tempFormValue.employee.id) {
            dataToSend.employee = tempFormValue.employee.id;
            dataToSend.full_employee = tempFormValue.employee;
        }
        else {
            dataToSend.custom_employee = {
                id: tempFormValue.employee_id,
                first_name: tempFormValue.employee_first_name,
                last_name: tempFormValue.employee_last_name,
                position: tempFormValue.employee_position,
            };
            dataToSend.full_employee = dataToSend.custom_employee;
        }
        if (tempFormValue.vehicle_type !== _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.WITHOUT) {
            if (tempFormValue.vehicle.id && tempFormValue.vehicle_type === _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.COMPANY_CAR) {
                dataToSend.vehicle = tempFormValue.vehicle.id;
            }
            else if ((tempFormValue.vehicle_type === _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.PRIVATE || tempFormValue.vehicle_type === _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.RENT) && tempFormValue.vehicle_model) {
                dataToSend.custom_vehicle = {
                    id: tempFormValue.vehicle_id,
                    model: tempFormValue.vehicle_model,
                    number: tempFormValue.vehicle_number,
                };
            }
            else {
                dataToSend.vehicle = null;
                dataToSend.custom_vehicle = null;
            }
        }
        else {
            dataToSend.vehicle = null;
            dataToSend.custom_vehicle = null;
        }
        if (tempFormValue.expenses) {
            tempFormValue.expenses.forEach((tripExpense) => {
                const businessExpense = {
                    currency: tripExpense.currency,
                    id: tripExpense.id,
                    sum: tripExpense.sum,
                    is_verified: tripExpense.is_verified,
                    clear_file: tripExpense.clear_file,
                    type: tripExpense.type,
                };
                if (tripExpense.expense.name) {
                    businessExpense.expense = tripExpense.expense.id;
                    businessExpense.currency = tripExpense.currency.code;
                    businessExpense.fullExpense = tripExpense.expense;
                }
                if (tripExpense.custom_expense.name) {
                    businessExpense.custom_expense = tripExpense.custom_expense;
                    businessExpense.currency = tripExpense.currency.code;
                    businessExpense.fullExpense = tripExpense.custom_expense;
                }
                if (tripExpense.base64File) {
                    businessExpense.file = tripExpense.uploaded_file;
                }
                dataToSend.expenses.push(businessExpense);
            });
        }
        dataToSend.delete_hotel_files_ids = this.hotelFilesToDeleteIds;
        dataToSend.delete_location_ids = this.pointsToDeleteIds;
        dataToSend.delete_expenses_ids = this.expensesToDeleteIds;
        return dataToSend;
    }
    employeeUpdate() {
        const employeeUpdate = {};
        if (this.form.value.employee.id) {
            employeeUpdate.employee = this.form.value.employee.id;
            employeeUpdate.custom_employee = null;
        }
        else {
            const position = this.form.value.employee_position;
            const firstName = this.form.value.employee_first_name;
            const lastNameName = this.form.value.employee_last_name;
            if (!firstName || !lastNameName) {
                return;
            }
            employeeUpdate.custom_employee = {
                id: this.form.value.employee_id,
                first_name: this.form.value.employee_first_name,
                last_name: this.form.value.employee_last_name,
                position: position ? position : null,
            };
            employeeUpdate.employee = null;
        }
        this.businessService
            .updateBusinessTripEmployee(this.tripId, employeeUpdate)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe((trip) => {
            if (trip.custom_employee) {
                const employee = trip.custom_employee;
                if (employee.position) {
                    this.form.get('employee_position').setValue(employee.position.id);
                }
                this.form.get('employee_id').setValue(employee.id);
            }
            if (trip.employee) {
                const employee = trip.employee;
                this.form.get('employee').setValue(employee);
            }
        });
    }
    vehicleUpdate() {
        const vehicleData = {};
        const formData = this.form.value;
        vehicleData.vehicle_type = formData.vehicle_type;
        vehicleData.business_trip = this.tripId;
        vehicleData.start_mileage = formData.start_mileage;
        vehicleData.end_mileage = formData.end_mileage;
        if (formData.vehicle_type !== _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.WITHOUT) {
            if (formData.vehicle.id && formData.vehicle_type === _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.COMPANY_CAR) {
                vehicleData.vehicle = formData.vehicle.id;
                vehicleData.custom_vehicle = null;
            }
            else if ((formData.vehicle_type === _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.PRIVATE || formData.vehicle_type === _enums_business_trip_vehicle_type__WEBPACK_IMPORTED_MODULE_4__.BusinessTripVehicleType.RENT) && formData.vehicle_model) {
                const model = formData.vehicle_model;
                const number = formData.vehicle_number;
                if (!model || !number) {
                    return;
                }
                vehicleData.custom_vehicle = {
                    id: formData.vehicle_id,
                    model: model,
                    number: number,
                };
                vehicleData.vehicle = null;
            }
            else {
                vehicleData.vehicle = null;
                vehicleData.custom_vehicle = null;
            }
        }
        else {
            vehicleData.vehicle = null;
            vehicleData.custom_vehicle = null;
        }
        const vehicleId = this.form.get('business_trip_vehicle_id').value;
        this.businessTripVehicleService.update_vehicle(vehicleId, vehicleData).subscribe(response => {
            this.form.get('business_trip_vehicle_id').setValue(response.data.id);
        });
    }
    obj2FormData(obj, formData = new FormData()) {
        this.formData = formData;
        this.createFormData(obj);
        return this.formData;
    }
    createFormData(obj, subKeyStr = '') {
        for (const i in obj) {
            const value = obj[i];
            const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;
            if (typeof (value) === 'string' || typeof (value) === 'number' || typeof (value) === 'boolean') {
                // @ts-ignore
                this.formData.append(subKeyStrTrans, value);
            }
            else if (typeof (value) === 'object') {
                if (value instanceof File) {
                    this.formData.append(subKeyStrTrans, value);
                }
                else {
                    this.createFormData(value, subKeyStrTrans);
                }
            }
        }
    }
    employeeChanged() {
        this.form.get('employee').reset();
        this.form.get('employee_first_name').reset();
        this.form.get('employee_last_name').reset();
        this.form.get('employee_position').reset();
    }
    vehicleChanged() {
        this.form.get('vehicle').reset();
        this.form.get('vehicle_model').reset();
        this.form.get('vehicle_number').reset();
    }
    filesChanged(files) {
        if (files.length > 0) {
            this._hotel.get('files').setValue(files);
            setTimeout(() => {
                this.updateFiles();
            }, 1000);
        }
    }
    fileToBase64(file) {
        const fileReader = new FileReader();
        fileReader.onload = event => {
            const base64 = event.target.result;
            this._hotel.get('base64Files').push(this.fb.group({
                file: base64
            }));
        };
        fileReader.readAsDataURL(file);
    }
    deleteFile() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.businessTripHotelFilesService.delete(this.selectedHotelFile).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(() => {
                    this.selectedHotelFile = null;
                    this.loadHotelFiles(this._hotel.get('id').value);
                });
            }
        });
    }
    downloadHotelFile(file) {
        this.businessService.download_hotel_file(file.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(response => {
            const filename = this.getName(file.file);
            this.adapterService.downloadFile(filename, response);
        });
    }
    getName(name) {
        const nameArr = name.split('/');
        return nameArr[nameArr.length - 1];
    }
    deleteExpense(expense) {
        const foundExpenseIndex = this.tripExpenses.findIndex(innerExpense => innerExpense === expense);
        if (foundExpenseIndex > -1) {
            if (this.tripExpenses[foundExpenseIndex].id) {
                this.expensesToDeleteIds.push(this.tripExpenses[foundExpenseIndex].id);
            }
            this.tripExpenses.splice(foundExpenseIndex, 1);
            this.form.get('expenses').removeAt(foundExpenseIndex);
        }
    }
    loadEmployeePositionData(preparedData) {
        if (preparedData.custom_employee) {
            let positionId;
            positionId = preparedData.custom_employee.position;
            if (positionId) {
                return this.employeePositionService.getById(positionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(res => {
                    preparedData.fullPosition = res;
                    return preparedData;
                }));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(preparedData);
            }
        }
        else if (preparedData.full_employee.position) {
            preparedData.fullPosition = preparedData.full_employee.position;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(preparedData);
    }
    loadInitiatorData(preparedData) {
        const position = preparedData.initiator;
        if (position) {
            return this.crmEmployeeService.getById(position).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(res => {
                preparedData.fullInitiator = res;
                return preparedData;
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(preparedData);
    }
    loadVehicleData(preparedData) {
        if (preparedData.vehicle) {
            const vehicleId = preparedData.vehicle;
            return this.vehicleService.getById(vehicleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(res => {
                preparedData.fullVehicle = res;
                return preparedData;
            }));
        }
        else if (preparedData.custom_vehicle) {
            preparedData.fullVehicle = preparedData.custom_vehicle;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(preparedData);
    }
    export() {
        const preparedData = this.prepareDataToSend(this.businessTrip.status, true);
        this.loadEmployeePositionData(preparedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(res => {
            return this.loadInitiatorData(res);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(res => {
            return this.loadVehicleData(res);
        })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(res => {
            this.businessService.exportToExcel(res).then();
        });
    }
    meetingChanged(point, meetings) {
    }
    lastPointMeetingChanged($event) {
    }
    changedVehicleType($event) {
        this.form.get('vehicle_type').setValue($event);
    }
    viewHotelFiles() {
        const files = this.form.get('hotel').value;
        const data = { links: this.preparedFiles, files: files.base64Files };
        this.businessService.viewBusinessTripFiles(data);
    }
    updateLocationDefault(type, locationIndex) {
        let country;
        let address;
        let id;
        let data;
        if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.FIRST) {
            country = this.form.get('start_location_country').value?.code;
            address = this.form.get('start_location_address').value;
            if (!country || !address) {
                return;
            }
            id = this.form.get('start_location_id').value;
            data = {
                id,
                country,
                address,
                type: type,
                business_trip_id: this.businessTrip.id
            };
        }
        else if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.LAST) {
            country = this.form.get('last_location_country').value.code;
            address = this.form.get('last_location_address').value;
            id = this.form.get('last_location_id').value;
            if (!country || !address) {
                return;
            }
            data = {
                id,
                country,
                address,
                business_trip_id: this.businessTrip.id,
                type: type,
            };
        }
        else {
            const point = this.form.get('intermediatePoints').value.at(locationIndex);
            country = point.country?.code;
            address = point.address;
            id = point.id;
            if (!country || !address) {
                return;
            }
            data = {
                id,
                country,
                address,
                business_trip_id: this.businessTrip.id,
                type: type,
            };
        }
        if (data.id) {
            this.businessLocationService.update(data.id, data).subscribe((res) => {
                if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.FIRST) {
                    this.form.get('start_location_country').setValue(res.data.country);
                    this.form.get('start_location_address').setValue(res.data.address);
                    this.form.get('start_location_id').setValue(res.data.id);
                }
                if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.LAST) {
                    this.form.get('last_location_country').setValue(res.data.country);
                    this.form.get('last_location_address').setValue(res.data.address);
                    this.form.get('last_location_id').setValue(res.data.id);
                }
                if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.INTERMEDIATE) {
                    this.form.get('intermediatePoints').value.at(locationIndex).patchValue(res.data);
                }
            });
        }
        else {
            this.businessLocationService.create(data).subscribe(res => {
                if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.FIRST) {
                    this.form.get('start_location_country').setValue(res.country);
                    this.form.get('start_location_address').setValue(res.address);
                    this.form.get('start_location_id').setValue(res.id);
                }
                if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.LAST) {
                    this.form.get('last_location_country').setValue(res.country);
                    this.form.get('last_location_address').setValue(res.address);
                    this.form.get('last_location_id').setValue(res.id);
                }
                if (type === _enums_business_trip_location_status_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessTripLocationTypes.INTERMEDIATE) {
                    this.form.get('intermediatePoints').at(locationIndex).patchValue(res);
                }
            });
        }
    }
    infoChanged(validateTrip = false) {
        const tripStart = this.form.get('trip_start').value ?
            this.adapterService.dateTimeAdapter(new Date(this.form.get('trip_start').value)) : null;
        const tripEnd = this.form.get('trip_end').value ?
            this.adapterService.dateTimeAdapter(new Date(this.form.get('trip_end').value)) : null;
        const employeeUpdate = {
            trip_end: tripEnd ? tripEnd : null,
            trip_start: tripStart ? tripStart : null,
            initiator: this.form.get('initiator').value,
            purpose_full: this.form.get('purpose_full').value ? this.form.get('purpose_full').value : '',
            purpose_short: this.form.get('purpose_short').value ? this.form.get('purpose_short').value : '',
            start_mileage: this.form.get('start_mileage').value,
            end_mileage: this.form.get('end_mileage').value,
            status: validateTrip ? _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus.VERIFIED : _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus.NEED_VERIFICATION,
        };
        this.businessService
            .update(this.tripId, employeeUpdate)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$))
            .subscribe();
    }
    updateHotelInfo() {
        const tempFormValue = (0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(this.form.value);
        if (tempFormValue.hotel.hotel_name) {
            const hotelStartDate = tempFormValue.hotel.residence_start ?
                this.adapterService.dateAdapter(new Date(tempFormValue.hotel.residence_start)) : null;
            const hotelEndDate = tempFormValue.hotel.residence_end ?
                this.adapterService.dateAdapter(new Date(tempFormValue.hotel.residence_end)) : null;
            const hotelData = {
                residence_start: hotelStartDate ? hotelStartDate : null,
                residence_end: hotelEndDate ? hotelEndDate : null,
                address: tempFormValue.hotel.hotel_address,
                country: tempFormValue.hotel.hotel_country?.code,
                name: tempFormValue.hotel.hotel_name,
                id: tempFormValue.hotel.id,
            };
            if (!hotelData.residence_start ||
                !hotelData.residence_end ||
                !hotelData.address ||
                !hotelData.country ||
                !hotelData.name) {
                return;
            }
            // this.businessService.updateHotelInfo(this.tripId, hotelData).pipe(takeUntil(this.destroy$)).subscribe(res => {
            //   this._hotel.get('id').setValue((res.hotel as Hotel).id);
            // });
        }
    }
    loadHotelFiles(hotelId) {
        this.businessTripHotelFilesService.get([{ name: 'business_trip_hotel_id', value: hotelId }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(response => {
            this.preparedFiles = response;
        });
    }
    updateFiles() {
        this.showFilePicker = false;
        const data = [];
        this._hotel.get('files').value.forEach(file => {
            data.push({
                file: file,
                business_trip_id: this._hotel.get('id').value
            });
        });
        const send = {
            files: this._hotel.get('files').value,
            id: this._hotel.get('id').value
        };
        const result = this.obj2FormData(send);
        this.businessTripHotelFilesService.add_hotel_files(result).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(res => {
            this.loadHotelFiles(this._hotel.get('id').value);
            this.filePicker.clearFiles();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    fileAdded(file) {
        this._hotel.get('files').setValue([file]);
        setTimeout(() => {
            this.updateFiles();
        }, 1000);
    }
    addHotels() {
        this.hotelsList.addHotel();
    }
    imageManipulation($event, files, field) {
        // @ts-ignore
        const newFiles = Array.from(files.files);
        const vehicleId = this.form.get('business_trip_vehicle_id').value;
        if (field === 'start_mileage_file') {
            this.start_mileage_file = newFiles[0];
            const toUpdate = {
                start_mileage_file: newFiles[0]
            };
            const sendDate = this.obj2FormData(toUpdate);
            this.businessTripVehicleService.update(vehicleId, sendDate).subscribe(res => {
                if (field === 'start_mileage_file') {
                    this.form.get('start_mileage_file').setValue(res.data.start_mileage_file);
                }
            });
        }
        if (field === 'end_mileage_file') {
            this.end_mileage_file = newFiles[0];
            const toUpdate = {
                end_mileage_file: newFiles[0]
            };
            const sendDate = this.obj2FormData(toUpdate);
            this.businessTripVehicleService.update(vehicleId, sendDate).subscribe(res => {
                if (field === 'end_mileage_file') {
                    this.form.get('end_mileage_file').setValue(res.data.end_mileage_file);
                }
            });
        }
        this.vehicleChangedEmit.next();
    }
    removeMileageFile(field) {
        let toUpdate;
        const vehicleId = this.form.get('business_trip_vehicle_id').value;
        if (field === 'start_mileage_file') {
            toUpdate = {
                start_mileage_file: null
            };
        }
        if (field === 'end_mileage_file') {
            toUpdate = {
                end_mileage_file: null
            };
        }
        this.businessTripVehicleService.update(vehicleId, toUpdate).subscribe(res => {
            if (field === 'start_mileage_file') {
                this.form.get('start_mileage_file').setValue(res.data.start_mileage_file);
            }
            if (field === 'end_mileage_file') {
                this.form.get('end_mileage_file').setValue(res.data.end_mileage_file);
            }
        });
    }
    takePhoto(field) {
        this.businessService.takePhotoModal().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(file => {
            if (file) {
                field = file;
                this.vehicleChangedEmit.next();
            }
        });
    }
    viewFile() {
    }
    getBtForExport() {
        this.businessService.getBtForExport([{ name: 'business_trips_ids', value: [this.tripId] }]).subscribe(res => {
            if (res) {
                this.businessService.exportToExcel(res[0]).then();
            }
        });
    }
}
EditBusinessTripComponent.ɵfac = function EditBusinessTripComponent_Factory(t) { return new (t || EditBusinessTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_crm_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_5__.CrmEmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_business_trip_service__WEBPACK_IMPORTED_MODULE_6__.BusinessTripService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_8__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_business_trip_vehicle_service__WEBPACK_IMPORTED_MODULE_9__.BusinessTripVehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_26__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_crm_services_crm_positions_service__WEBPACK_IMPORTED_MODULE_10__.CrmPositionsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_11__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_crm_services_company_service__WEBPACK_IMPORTED_MODULE_12__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_13__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_business_location_service__WEBPACK_IMPORTED_MODULE_14__.BusinessLocationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_business_trip_hotel_files_service__WEBPACK_IMPORTED_MODULE_15__.BusinessTripHotelFilesService)); };
EditBusinessTripComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: EditBusinessTripComponent, selectors: [["pek-edit-business-trip"]], viewQuery: function EditBusinessTripComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.filePicker = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.hotelsList = _t.first);
    } }, decls: 57, vars: 22, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-file-excel", "label", "Export to xls", 1, "p-button-secondary", "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Save", 3, "click"], [3, "formGroup"], [1, "page__content"], [1, "mb-4"], [1, "page__card"], [4, "ngIf", "ngIfElse"], [1, "mb-4", "d-flex", "justify-content-between"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Intermediate Point", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Hotel", 3, "click"], [3, "businessTripId", "isVerify", "verifyBusinessTrip", "currentBusinessTripExpenses", "deleteExpense", "editExpense", "unverifyTrip", "expenseSumEmit"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["infoLoading", ""], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "other"], ["id", "other", "formControlName", "isOtherEmployee", 3, "binary", "onChange"], ["predefinedEmployee", ""], [1, "col-4"], ["pInputText", "", "formControlName", "employee_first_name", 1, "form-control", 3, "ngModelChange"], ["pInputText", "", "formControlName", "employee_last_name", 1, "form-control", 3, "ngModelChange"], [3, "position", "valueChange"], ["formGroupName", "employee"], [3, "filters", "showProfession", "employee", "valueChange"], ["pInputText", "", "formControlName", "last_name", 1, "form-control", 3, "disabled"], ["pInputText", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions"], [1, "col-6"], ["placeholder", "Choice Start Date and Time", 3, "maxDate", "date", "setDate"], ["placeholder", "Choice End Date and Time", 3, "minDate", "date", "setDate"], [3, "country", "address", "locationId", "type", "showHr", "countryChanged", "addressChanged"], [3, "country", "address", "locationId", "type", "showHr", "companiesFilters", "showAddMeetings", "meetingsChanged", "countryChanged", "addressChanged"], ["class", "location", 3, "country", "address", "locationId", "showHr", "last", "showDelete", "companiesFilters", "type", "showAddMeetings", "emitDeletePoint", "meetingsChanged", "countryChanged", "addressChanged", 4, "ngFor", "ngForOf"], [1, "location", 3, "country", "address", "locationId", "showHr", "showDelete", "companiesFilters", "type", "showAddMeetings", "emitDeletePoint", "meetingsChanged", "countryChanged", "addressChanged"], [1, "d-flex", "justify-content-center"], ["pInputText", "", "formControlName", "purpose_short", 1, "form-control", 3, "ngModelChange"], ["pInputTextarea", "", "formControlName", "purpose_full", "id", "comment", 1, "form-control", 3, "ngModelChange"], [3, "businessTripId", "currentBusinessTripHotels"], ["hotelsList", ""], [3, "type", "valueChange"], [3, "ngIf"], ["class", "row", 4, "ngIf"], ["pInputText", "", "formControlName", "vehicle_model", 1, "form-control", 3, "ngModelChange"], ["pInputText", "", "formControlName", "vehicle_number", 1, "form-control", 3, "ngModelChange"], ["formGroupName", "vehicle", 1, "col-4"], [3, "placeholder", "vehicle", "valueChange"], ["pInputText", "", "formControlName", "number", 1, "form-control"], ["pInputText", "", "formControlName", "start_mileage", 1, "form-control", 3, "ngModelChange"], ["pInputText", "", "formControlName", "end_mileage", 1, "form-control", 3, "ngModelChange"], [1, "form-group", "vehicle-file-selector"], ["for", "vehicleMileageStartFile", 1, "input-file", "d-flex", "align-items-center"], ["type", "file", "id", "vehicleMileageStartFile", 3, "input"], ["inputFile", ""], [1, "fa", "fa-download"], [3, "href", "click", 4, "ngIf"], ["class", "remove", 3, "click", 4, "ngIf"], ["for", "vehicleMileageEndFile", 1, "input-file", "d-flex", "align-items-center"], ["type", "file", "id", "vehicleMileageEndFile", 3, "input"], [3, "href", 4, "ngIf"], [3, "href", "click"], [1, "remove", 3, "click"], [1, "pi", "pi-times"], [3, "href"], [3, "employee", "valueChange"], [1, "info-loading"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"]], template: function EditBusinessTripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Edit Business Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_Template_button_click_7_listener() { return ctx.getBtForExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_Template_button_click_8_listener() { return ctx.editBusinessTrip(ctx.tripStatuses.NEED_VERIFICATION); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "form", 7)(10, "div", 8)(11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, EditBusinessTripComponent_div_14_Template, 10, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 8)(16, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "Date Trip Start/End");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, EditBusinessTripComponent_div_19_Template, 12, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 8)(21, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "Points Start/Arrival");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, EditBusinessTripComponent_div_24_Template, 15, 12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 8)(26, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "Intermediate Points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_Template_button_click_28_listener() { return ctx.addIntermediatePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](30, EditBusinessTripComponent_div_30_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 8)(32, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, EditBusinessTripComponent_div_35_Template, 13, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 8)(37, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, " Hotel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditBusinessTripComponent_Template_button_click_39_listener() { return ctx.addHotels(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, EditBusinessTripComponent_div_41_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "div", 8)(43, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, EditBusinessTripComponent_div_46_Template, 11, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 8)(48, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "Initiator");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](51, EditBusinessTripComponent_div_51_Template, 7, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 8)(53, "pek-trip-expenses-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("verifyBusinessTrip", function EditBusinessTripComponent_Template_pek_trip_expenses_table_verifyBusinessTrip_53_listener() { return ctx.infoChangedEmit.next(true); })("currentBusinessTripExpenses", function EditBusinessTripComponent_Template_pek_trip_expenses_table_currentBusinessTripExpenses_53_listener($event) { return ctx.updateExpenses($event); })("deleteExpense", function EditBusinessTripComponent_Template_pek_trip_expenses_table_deleteExpense_53_listener($event) { return ctx.deleteExpense($event); })("editExpense", function EditBusinessTripComponent_Template_pek_trip_expenses_table_editExpense_53_listener($event) { return ctx.editTripExpense($event); })("unverifyTrip", function EditBusinessTripComponent_Template_pek_trip_expenses_table_unverifyTrip_53_listener() { return ctx.infoChangedEmit.next(false); })("expenseSumEmit", function EditBusinessTripComponent_Template_pek_trip_expenses_table_expenseSumEmit_53_listener($event) { return ctx.expensesSum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](54, EditBusinessTripComponent_div_54_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, EditBusinessTripComponent_ng_template_55_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("module", "business-trip")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isDataPrepared)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("businessTripId", ctx.tripId)("isVerify", ctx.isVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.tripExpenses.length === 0);
    } }, styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n\n.info-loading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 16.267rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n}\n\n.location[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n.location.last[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.input-file[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 10px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.input-file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.input-file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  color: #002e72;\n}\n\n.input-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 500;\n  color: #002e72;\n}\n\n.input-file[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.delete-image[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #dc3545;\n  padding: 0;\n  position: relative;\n  top: 2px;\n}\n\n.delete-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-size: 16px;\n  position: relative;\n  top: 1px;\n}\n\n.delete-image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.delete-image[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.remove[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: inherit;\n  right: -15.375rem;\n  bottom: 0.25rem;\n  font-weight: 500;\n  padding: 0.375rem 1.125rem;\n  color: var(--theme-color-danger);\n  border-radius: 0.625rem;\n  width: 9.875rem;\n  background: rgba(255, 237, 237, 0.4588235294);\n  margin-left: 0.5rem;\n}\n\n.remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  margin-right: 0.5rem;\n}\n\n.vehicle-file-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: revert;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYnVzaW5lc3MtdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBT0k7RUFDRSwwQkFBQTtBQUxOOztBQVVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFQRjs7QUFTRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQVBKOztBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0U7RUFDRSwwQkFBQTtBQVRKOztBQWFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBVkY7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQVZKOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVhGIiwiZmlsZSI6ImVkaXQtYnVzaW5lc3MtdHJpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW5mby1sb2FkaW5nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE2LjI2N3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMXB4O1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICYubGFzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pbnB1dC1maWxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6ICMwMDJlNzI7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMDJlNzI7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZWxldGUtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2RjMzU0NTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbi5yZW1vdmUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHJpZ2h0OiAtMTUuMzc1cmVtOztcclxuICBib3R0b206IDAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAxLjEyNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItZGFuZ2VyKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICB3aWR0aDogOS44NzVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZWRlZDc1O1xyXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnZlaGljbGUtZmlsZS1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcmV2ZXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4954:
/*!************************************************************************************************************!*\
  !*** ./src/app/business-trips/components/layouts/business-trips-layout/business-trips-layout.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsLayoutComponent": () => (/* binding */ BusinessTripsLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layout/components/header/header.component */ 42176);



class BusinessTripsLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Business Trips', commands: ['trips'] },
        ];
        this.settingsRoutes = [
            { label: 'Vehicles', commands: ['vehicles'] },
            { label: 'Expenses', commands: ['expenses'] },
        ];
    }
    ngOnInit() {
    }
}
BusinessTripsLayoutComponent.ɵfac = function BusinessTripsLayoutComponent_Factory(t) { return new (t || BusinessTripsLayoutComponent)(); };
BusinessTripsLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BusinessTripsLayoutComponent, selectors: [["pek-business-trips-layout"]], decls: 2, vars: 3, consts: [[3, "module", "routes", "settingsRoutes"]], template: function BusinessTripsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Business Trips")("routes", ctx.routes)("settingsRoutes", ctx.settingsRoutes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy10cmlwcy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50970:
/*!**********************************************************************************!*\
  !*** ./src/app/business-trips/components/layouts/expanses/expanses.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansesComponent": () => (/* binding */ ExpansesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/expense.service */ 42503);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ 42722);












const _c0 = ["paginator"];
function ExpansesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ExpansesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const expense_r9 = ctx.$implicit;
    const i_r10 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", expense_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.searchForm.get("page").value - 1) * 10 + i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](expense_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](expense_r9.description);
} }
function ExpansesComponent_ng_template_18_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function ExpansesComponent_ng_template_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExpansesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExpansesComponent_ng_template_18_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExpansesComponent_ng_template_18_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
function ExpansesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExpansesComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-paginator", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function ExpansesComponent_div_20_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpansesComponent_div_20_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r5.expenses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r5.count);
} }
function ExpansesComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "p-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpansesComponent_div_21_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ExpansesComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-menubar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r8.selectedExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r8.menuItems);
} }
class ExpansesComponent {
    constructor(expenseService, modalService, fb) {
        this.expenseService = expenseService;
        this.modalService = modalService;
        this.fb = fb;
        this.menuItems = [{
                label: 'Selected Expense',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.editExpense()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteExpense()
                    }
                ]
            }];
        this.count = 0;
        this.isShowAll = false;
        this.isStartOnePage = false;
        this.searchForm = this.fb.group({
            page: [1],
        });
        this.query = [
            { name: 'paginated', value: true },
            { name: 'page', value: this.searchForm.get('page').value }
        ];
        this.tableScrollHeight = '24.125rem';
        this.isHideFilters = false;
        this.getPaginated();
    }
    ngOnInit() {
    }
    toggleFilterVisibility() {
        this.isHideFilters = !this.isHideFilters;
        this.setTableScrollHeight();
    }
    setTableScrollHeight() {
        if (this.isHideFilters && !this.isShowAll) {
            this.tableScrollHeight = '20.875rem';
            return;
        }
        if (this.isHideFilters && this.isShowAll) {
            this.tableScrollHeight = '18.75rem';
            return;
        }
        if (!this.isHideFilters && this.isShowAll) {
            this.tableScrollHeight = '21.875rem';
            return;
        }
        if (!this.isHideFilters && !this.isShowAll) {
            this.tableScrollHeight = '24.125rem';
            return;
        }
    }
    prepareQuery() {
        this.query = [];
        if (!this.isShowAll) {
            this.query = [
                { name: 'paginated', value: 'true' },
                { name: 'page', value: this.searchForm.get('page').value },
            ];
        }
    }
    searchExpenses() {
        this.prepareQuery();
        if (!this.isShowAll) {
            this.getPaginated();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getAll();
        }
    }
    getPaginated() {
        this.expenseService
            .getPaginated(this.query)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            this.expenses = res.results;
            this.count = res.count;
            this.selectedExpense = null;
        });
    }
    getAll() {
        this.expenseService
            .get()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            this.expenses = res;
            this.selectedExpense = null;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
                this.isLoading = false;
            }
        });
    }
    addExpanse() {
        this.expenseService
            .createChangeExpense()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            if (res) {
                this.getAll();
            }
        });
    }
    editExpense() {
        this.expenseService
            .createChangeExpense(this.selectedExpense)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            if (res) {
                this.getAll();
            }
        });
    }
    deleteExpense() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((confirm) => {
            if (confirm) {
                this.expenseService
                    .delete(this.selectedExpense)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
                    .subscribe((del) => {
                    this.getAll();
                });
            }
        });
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchExpenses();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.searchExpenses();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.searchExpenses();
    }
}
ExpansesComponent.ɵfac = function ExpansesComponent_Factory(t) { return new (t || ExpansesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_0__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
ExpansesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExpansesComponent, selectors: [["pek-expanses"]], viewQuery: function ExpansesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 24, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Expense", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "action-buttons"], [1, "ml-auto", 3, "model"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 335px)", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "50%"], [1, "text-center", 2, "width", "45%"], [1, "table-row", 3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function ExpansesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Expanses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpansesComponent_Template_button_click_7_listener() { return ctx.addExpanse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-menubar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "p-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ExpansesComponent_Template_p_table_selectionChange_14_listener($event) { return ctx.selectedExpense = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ExpansesComponent_ng_template_16_Template, 7, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ExpansesComponent_ng_template_17_Template, 7, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ExpansesComponent_ng_template_18_Template, 4, 3, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ExpansesComponent_div_19_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ExpansesComponent_div_20_Template, 5, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ExpansesComponent_div_21_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ExpansesComponent_ng_template_22_Template, 2, 3, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "business-trip")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.selectedExpense);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedExpense)("value", ctx.expenses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_9__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_11__.Paginator], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n\n.page__card[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZXhwYW5zZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XHJcbn1cclxuXHJcbi5wYWdlX19jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 76849:
/*!**********************************************************************************!*\
  !*** ./src/app/business-trips/components/layouts/vehicles/vehicles.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesComponent": () => (/* binding */ VehiclesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/vehicle.service */ 66029);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ 42722);












const _c0 = ["paginator"];
function VehiclesComponent_ng_template_14_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Vehicle to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VehiclesComponent_ng_template_14_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedVehicle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedVehicle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function VehiclesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vehicle Registration Plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function VehiclesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 25)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const vehicle_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", vehicle_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r4.searchForm.get("page").value - 1) * 10 + i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vehicle_r10.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vehicle_r10.number);
} }
function VehiclesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 3);
} }
function VehiclesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "p-paginator", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function VehiclesComponent_div_20_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesComponent_div_20_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r7.vehicles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r7.count);
} }
function VehiclesComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "p-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesComponent_div_21_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class VehiclesComponent {
    constructor(vehicleService, modalService, fb) {
        this.vehicleService = vehicleService;
        this.modalService = modalService;
        this.fb = fb;
        this.searchForm = this.fb.group({
            page: [1],
        });
        this.query = [
            { name: 'paginated', value: true },
            { name: 'page', value: this.searchForm.get('page').value }
        ];
        this.menuItems = [{
                label: 'Selected Vehicle',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.editVehicle()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteVehicle()
                    }
                ]
            }];
        this.count = 0;
        this.isShowAll = false;
        this.isStartOnePage = false;
        this.searchVehicles();
    }
    ngOnInit() {
    }
    prepareQuery() {
        this.query = [];
        if (!this.isShowAll) {
            this.query = [
                { name: 'paginated', value: 'true' },
                { name: 'page', value: this.searchForm.get('page').value },
            ];
        }
    }
    searchVehicles() {
        this.prepareQuery();
        if (!this.isShowAll) {
            this.getPaginated();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getAll();
        }
    }
    getPaginated() {
        this.vehicleService
            .getPaginated(this.query)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            this.vehicles = res.results;
            this.count = res.count;
            this.selectedVehicle = null;
        });
    }
    getAll() {
        this.vehicleService
            .get()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            this.vehicles = res;
            this.selectedVehicle = null;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
                this.isLoading = false;
            }
        });
    }
    addVehicle() {
        this.vehicleService
            .createChangeVehicle()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            if (res) {
                this.getAll();
            }
        });
    }
    editVehicle() {
        this.vehicleService
            .createChangeVehicle(this.selectedVehicle)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((res) => {
            if (res) {
                this.getAll();
            }
        });
    }
    deleteVehicle() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((confirm) => {
            if (confirm) {
                this.vehicleService
                    .delete(this.selectedVehicle)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
                    .subscribe((del) => {
                    this.getAll();
                });
            }
        });
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchVehicles();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.searchVehicles();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.searchVehicles();
    }
}
VehiclesComponent.ɵfac = function VehiclesComponent_Factory(t) { return new (t || VehiclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
VehiclesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehiclesComponent, selectors: [["pek-vehicles"]], viewQuery: function VehiclesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 22, vars: 9, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Vehicle", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 335px)", 3, "rows", "selection", "scrollable", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["class", "subtitle ml-1 mr-2", 4, "ngIf"], [1, "ml-auto", "mr-2", 3, "model"], [1, "subtitle", "ml-1", "mr-2"], [1, "index-header"], [3, "pSelectableRow"], [1, "text-center", "p-5"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function VehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesComponent_Template_button_click_7_listener() { return ctx.addVehicle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function VehiclesComponent_Template_p_table_selectionChange_12_listener($event) { return ctx.selectedVehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, VehiclesComponent_ng_template_14_Template, 3, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VehiclesComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, VehiclesComponent_ng_template_16_Template, 7, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, VehiclesComponent_ng_template_17_Template, 7, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, VehiclesComponent_ng_template_18_Template, 4, 1, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, VehiclesComponent_div_19_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, VehiclesComponent_div_20_Template, 5, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, VehiclesComponent_div_21_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "business-trip")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("selection", ctx.selectedVehicle)("scrollable", true)("value", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_9__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_11__.Paginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 80897:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/business-trips/components/pickers/business-trip-country-picker/business-trip-country-picker.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripCountryPickerComponent": () => (/* binding */ BusinessTripCountryPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_business_trip_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/business-trip-country.service */ 14765);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ 38992);






class BusinessTripCountryPickerComponent {
    constructor(businessCountryService) {
        this.businessCountryService = businessCountryService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.valueChangeFull = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.getCompaniesFilters();
    }
    getCompaniesFilters() {
        if (!this.preloadedCountries) {
            this.businessCountryService.get().subscribe(companies => {
                this.countries = companies;
            });
        }
    }
    onChange(country) {
        this.setValue(country);
    }
    registerOnChange(fn) {
        this.valueChange.subscribe(fn);
    }
    registerOnTouched(fn) {
        // okay
    }
    setValue(country) {
        this.country = country;
        this.valueChange.emit(this.country);
        this.countrySelected = this.countries.find(country => country.code === this.country);
        this.valueChangeFull.emit(this.countrySelected);
    }
    writeValue(obj) {
        this.country = obj;
    }
}
BusinessTripCountryPickerComponent.ɵfac = function BusinessTripCountryPickerComponent_Factory(t) { return new (t || BusinessTripCountryPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_business_trip_country_service__WEBPACK_IMPORTED_MODULE_0__.BusinessTripCountryService)); };
BusinessTripCountryPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BusinessTripCountryPickerComponent, selectors: [["pek-business-trip-country-picker"]], inputs: { countries: "countries", country: "country", countrySelected: "countrySelected", preloadedCountries: "preloadedCountries" }, outputs: { valueChange: "valueChange", valueChangeFull: "valueChangeFull" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => BusinessTripCountryPickerComponent),
                multi: false
            }])], decls: 1, vars: 3, consts: [["optionValue", "code", "optionLabel", "name", "placeholder", "No Country Selected", 3, "filter", "options", "ngModel", "ngModelChange"]], template: function BusinessTripCountryPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BusinessTripCountryPickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.country = $event; })("ngModelChange", function BusinessTripCountryPickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filter", true)("options", ctx.countries)("ngModel", ctx.country);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy10cmlwLWNvdW50cnktcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 60495:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/business-trips/components/pickers/business-trips-multi-employee-with-custom/business-trips-multi-employee-with-custom.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsMultiEmployeeWithCustomComponent": () => (/* binding */ BusinessTripsMultiEmployeeWithCustomComponent),
/* harmony export */   "EmployeeWithCustom": () => (/* binding */ EmployeeWithCustom)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var _crm_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../crm/services/crm-employee.service */ 29038);
/* harmony import */ var _models_custom_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/custom-employees.service */ 92188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/multiselect */ 30850);











function BusinessTripsMultiEmployeeWithCustomComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", employee_r1.employee.first_name, " ", employee_r1.employee.last_name, "");
} }
function BusinessTripsMultiEmployeeWithCustomComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", employee_r1.customEmployee.first_name, " ", employee_r1.customEmployee.last_name, " (C) ");
} }
function BusinessTripsMultiEmployeeWithCustomComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BusinessTripsMultiEmployeeWithCustomComponent_ng_template_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BusinessTripsMultiEmployeeWithCustomComponent_ng_template_1_div_2_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", employee_r1.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", employee_r1.customEmployee);
} }
class EmployeeWithCustom {
}
class BusinessTripsMultiEmployeeWithCustomComponent {
    constructor(crmEmployeeService, customEmployeesService) {
        this.crmEmployeeService = crmEmployeeService;
        this.customEmployeesService = customEmployeesService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.customEmployees = [];
        this.employeeFilter = [{ name: 'by_user_trip_permissions', value: true }];
    }
    ngOnInit() {
        this.getEmployees();
    }
    getContactPersons() {
        return this.crmEmployeeService.get(this.employeeFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(employees => {
            return employees.map(employee => {
                return {
                    employee, order: 1, id: 'e' + employee.id
                };
            });
        }));
    }
    getCustomEmployees() {
        return this.customEmployeesService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(employees => {
            return employees.map(employee => {
                console.log(employee);
                return {
                    customEmployee: employee, order: 2, id: 'c' + employee.id
                };
            });
        }));
    }
    getEmployees() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.getContactPersons(), this.getCustomEmployees()).subscribe(res => {
            this.customEmployees.push(...res);
            console.log(this.customEmployees);
            this.customEmployees.sort((a, b) => a.order - b.order);
        });
    }
    onChange(employees) {
        this.setValue(employees);
    }
    registerOnChange(fn) {
        this.valueChange.subscribe(fn);
    }
    setValue(employees) {
        this.selectedEmployees = employees;
        if (this.selectedEmployees) {
            const selectedEmployees = this.customEmployees.filter(filterEmployee => {
                return this.selectedEmployees.findIndex(employee => filterEmployee.id === employee) > -1;
            });
            this.valueChange.emit(selectedEmployees);
        }
        else {
            this.valueChange.emit(null);
        }
    }
    writeValue(obj) {
        this.selectedEmployees = obj;
    }
}
BusinessTripsMultiEmployeeWithCustomComponent.ɵfac = function BusinessTripsMultiEmployeeWithCustomComponent_Factory(t) { return new (t || BusinessTripsMultiEmployeeWithCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_crm_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__.CrmEmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_models_custom_employees_service__WEBPACK_IMPORTED_MODULE_1__.CustomEmployeesService)); };
BusinessTripsMultiEmployeeWithCustomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BusinessTripsMultiEmployeeWithCustomComponent, selectors: [["pek-business-trips-multi-employee-with-custom"]], outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => BusinessTripsMultiEmployeeWithCustomComponent), multi: true
            }
        ])], decls: 2, vars: 3, consts: [["optionValue", "id", "optionLabel", "employee.fullName", "placeholder", "Choice Employees", 3, "options", "ngModel", "showClear", "ngModelChange"], ["pTemplate", "item"], [1, "contact-item"], [4, "ngIf"]], template: function BusinessTripsMultiEmployeeWithCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-multiSelect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BusinessTripsMultiEmployeeWithCustomComponent_Template_p_multiSelect_ngModelChange_0_listener($event) { return ctx.selectedEmployees = $event; })("ngModelChange", function BusinessTripsMultiEmployeeWithCustomComponent_Template_p_multiSelect_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BusinessTripsMultiEmployeeWithCustomComponent_ng_template_1_Template, 3, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customEmployees)("ngModel", ctx.selectedEmployees)("showClear", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__.MultiSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy10cmlwcy1tdWx0aS1lbXBsb3llZS13aXRoLWN1c3RvbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 61370:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/business-trips/components/pickers/business-trips-multi-status-picker/business-trips-multi-status-picker.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsMultiStatusPickerComponent": () => (/* binding */ BusinessTripsMultiStatusPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/business-trip-status.enum */ 37071);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/multiselect */ 30850);






class BusinessTripsMultiStatusPickerComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.statuses = [
            {
                value: _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus.VERIFIED,
                title: 'Verified'
            },
            {
                value: _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus.NEED_VERIFICATION,
                title: 'Need Verified'
            },
            {
                value: _models_business_trip_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripStatus.NEW,
                title: 'In Progress'
            },
        ];
    }
    ngOnInit() {
    }
    onChange(employees) {
        this.setValue(employees);
    }
    registerOnChange(fn) {
        this.valueChange.subscribe(fn);
    }
    registerOnTouched(fn) {
        // okay
    }
    setValue(employees) {
        this.selectedStatuses = employees;
        this.valueChange.emit(this.selectedStatuses);
    }
    writeValue(obj) {
        this.selectedStatuses = obj;
    }
}
BusinessTripsMultiStatusPickerComponent.ɵfac = function BusinessTripsMultiStatusPickerComponent_Factory(t) { return new (t || BusinessTripsMultiStatusPickerComponent)(); };
BusinessTripsMultiStatusPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BusinessTripsMultiStatusPickerComponent, selectors: [["pek-business-trips-multi-status-picker"]], outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => BusinessTripsMultiStatusPickerComponent), multi: true }])], decls: 1, vars: 3, consts: [["optionValue", "value", "optionLabel", "title", 3, "options", "ngModel", "showClear", "ngModelChange"]], template: function BusinessTripsMultiStatusPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-multiSelect", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BusinessTripsMultiStatusPickerComponent_Template_p_multiSelect_ngModelChange_0_listener($event) { return ctx.selectedStatuses = $event; })("ngModelChange", function BusinessTripsMultiStatusPickerComponent_Template_p_multiSelect_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.statuses)("ngModel", ctx.selectedStatuses)("showClear", true);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_3__.MultiSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy10cmlwcy1tdWx0aS1zdGF0dXMtcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 95481:
/*!**********************************************************************************************!*\
  !*** ./src/app/business-trips/components/pickers/vehicle-picker/vehicle-picker.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclePickerComponent": () => (/* binding */ VehiclePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/vehicle.service */ 66029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 38992);









function VehiclePickerComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.selectedVehicle.model);
} }
function VehiclePickerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VehiclePickerComponent_ng_template_1_div_0_Template, 3, 1, "div", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.vehicle);
} }
function VehiclePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const vehicle_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", vehicle_r3.model, " (", vehicle_r3.number, ")");
} }
class VehiclePickerComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.placeholder = 'Vehicle';
        this.isLoading = true;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.vehicleService
            .get()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
            .subscribe((res) => {
            this.vehicles = res;
            if (this.vehicle) {
                this.selectedVehicle = this.vehicles.find(currency => currency.id === this.vehicle);
            }
            this.isLoading = false;
        });
    }
    onChange(vehicle) {
        this.setValue(vehicle);
    }
    registerOnChange(fn) {
        this.valueChange.subscribe(fn);
    }
    registerOnTouched(fn) {
        // okay
    }
    setValue(vehicle) {
        this.vehicle = vehicle;
        this.selectedVehicle = this.vehicles.find(currency => currency.id === this.vehicle);
        this.valueChange.emit(this.selectedVehicle);
    }
    writeValue(obj) {
        this.vehicle = obj;
    }
}
VehiclePickerComponent.ɵfac = function VehiclePickerComponent_Factory(t) { return new (t || VehiclePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__.VehicleService)); };
VehiclePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VehiclePickerComponent, selectors: [["pek-vehicle-picker"]], inputs: { vehicle: "vehicle", selectedVehicle: "selectedVehicle", placeholder: "placeholder", showClear: "showClear" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => VehiclePickerComponent), multi: true }])], decls: 3, vars: 5, consts: [["optionValue", "id", "optionLabel", "model", "placeholder", "Choose Vehicle", 3, "filter", "showClear", "ngModel", "options", "disabled", "ngModelChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["class", "country-item country-item-value", 4, "ngIf"], [1, "country-item", "country-item-value"], [1, "country-item"]], template: function VehiclePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VehiclePickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.vehicle = $event; })("ngModelChange", function VehiclePickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VehiclePickerComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VehiclePickerComponent_ng_template_2_Template, 3, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filter", true)("showClear", ctx.showClear)("ngModel", ctx.vehicle)("options", ctx.vehicles)("disabled", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35638:
/*!********************************************************************************************************!*\
  !*** ./src/app/business-trips/components/pickers/vehicle-type-picker/vehicle-type-picker.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleTypePickerComponent": () => (/* binding */ VehicleTypePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ 38992);





class VehicleTypePickerComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.types = [
            {
                id: '0',
                value: 'Without'
            },
            {
                id: '1',
                value: 'Private'
            },
            {
                id: '2',
                value: 'Rent'
            },
            {
                id: '3',
                value: 'Company Car'
            }
        ];
    }
    ngOnInit() {
    }
    onChange(position) {
        this.setValue(position);
    }
    registerOnChange(fn) {
        this.valueChange.subscribe(fn);
    }
    registerOnTouched(fn) {
        // okay
    }
    setValue(type) {
        this.type = type;
        this.valueChange.emit(this.type);
    }
    writeValue(obj) {
        this.type = obj;
    }
}
VehicleTypePickerComponent.ɵfac = function VehicleTypePickerComponent_Factory(t) { return new (t || VehicleTypePickerComponent)(); };
VehicleTypePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleTypePickerComponent, selectors: [["pek-vehicle-type-picker"]], inputs: { type: "type" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => VehicleTypePickerComponent),
                multi: false
            }])], decls: 1, vars: 3, consts: [["optionValue", "id", "optionLabel", "value", "placeholder", "Choose Vehicle Type", 3, "filter", "ngModel", "options", "ngModelChange"]], template: function VehicleTypePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VehicleTypePickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.type = $event; })("ngModelChange", function VehicleTypePickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", true)("ngModel", ctx.type)("options", ctx.types);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLXR5cGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 61532:
/*!*********************************************************************************************!*\
  !*** ./src/app/business-trips/components/shared/location-input/location-input.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInputComponent": () => (/* binding */ LocationInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_location_meeting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/location-meeting.service */ 36274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pickers/company-picker/company-picker.component */ 66242);
/* harmony import */ var _shared_pickers_multi_contacts_picker_multi_contacts_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pickers/multi-contacts-picker/multi-contacts-picker.component */ 93565);
/* harmony import */ var _pickers_business_trip_country_picker_business_trip_country_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pickers/business-trip-country-picker/business-trip-country-picker.component */ 80897);













function LocationInputComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LocationInputComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.delete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LocationInputComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function LocationInputComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "pek-company-picker", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectCompanyFull", function LocationInputComponent_ng_template_17_Template_pek_company_picker_selectCompanyFull_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const meeting_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.updateMeeting(meeting_r6, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "pek-multi-contacts-picker", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChangeFull", function LocationInputComponent_ng_template_17_Template_pek_multi_contacts_picker_valueChangeFull_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const meeting_r6 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.employeeChanged.next({ meeting: meeting_r6, contacts: $event })); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 2)(8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LocationInputComponent_ng_template_17_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const meeting_r6 = restoredCtx.$implicit; const index_r7 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.deleteMeeting(meeting_r6, index_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const meeting_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentCompanyId", meeting_r6.company == null ? null : meeting_r6.company.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("contactsListFull", meeting_r6.contacts)("searchByCompany", true)("companyId", meeting_r6.company == null ? null : meeting_r6.company.id);
} }
function LocationInputComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LocationInputComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.addMeeting()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class LocationInputComponent {
    constructor(modalService, locationMeetingService) {
        this.modalService = modalService;
        this.locationMeetingService = locationMeetingService;
        this.locationMeetings = [];
        this.showHr = false;
        this.countryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.addressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.meetingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.emitDeletePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.employeeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.locationLoaded = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnChanges(changes) {
        if ('locationId' in changes) {
            if (this.locationId) {
                this.getMeetings();
            }
        }
    }
    getMeetings() {
        this.locationLoaded = false;
        this.locationMeetingService.get([{ name: 'location_id', value: this.locationId }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.locationMeetings = res;
            this.meetingsChanged.emit(this.locationMeetings);
        });
    }
    ngOnInit() {
        this.employeeChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe((res) => {
            this.updateMeetingPerson(res.meeting, res.contacts);
        });
    }
    delete() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.emitDeletePoint.emit(this.type);
            }
        });
    }
    addMeeting() {
        if (this.locationId) {
            this.locationMeetings.push({
                company: null,
                id: null,
                location_id: this.locationId,
                contacts: []
            });
        }
    }
    updateMeeting(locationMeeting, $event) {
        if (!locationMeeting.company || locationMeeting.company.id !== $event) {
            locationMeeting.company = $event;
            this.createUpdateMeeting(locationMeeting);
        }
    }
    deleteMeeting(meetingToDelete, index) {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                if (meetingToDelete.id) {
                    this.locationMeetingService.delete(meetingToDelete).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
                        this.getMeetings();
                    });
                }
            }
        });
    }
    createUpdateMeeting(locationMeeting) {
        if (this.locationId) {
            if (locationMeeting.id) {
                const locationData = {
                    company: locationMeeting.company.id,
                    location_id: this.locationId,
                    contacts: locationMeeting.contacts.map(contact => contact.id)
                };
                this.locationMeetingService.update(locationMeeting.id, locationData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
                    this.getMeetings();
                });
            }
            else {
                const locationData = {
                    company: locationMeeting.company.id,
                    location_id: this.locationId,
                    contacts: locationMeeting.contacts.map(contact => contact.id)
                };
                this.locationMeetingService.create(locationData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
                    this.getMeetings();
                });
            }
        }
    }
    getContactsIds(meeting) {
        return meeting.contacts.map(contact => contact.id);
    }
    updateMeetingPerson(meeting, $event) {
        const inter = meeting.contacts.map(contact => contact.id).filter(contact => !$event.map(contact => contact.id).includes(contact));
        const inter2 = $event.map(contact => contact.id).filter(contact => !meeting.contacts.map(contact => contact.id).includes(contact));
        if (inter.length > 0 || inter2.length > 0) {
            meeting.contacts = $event;
            this.createUpdateMeeting(meeting);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
LocationInputComponent.ɵfac = function LocationInputComponent_Factory(t) { return new (t || LocationInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_location_meeting_service__WEBPACK_IMPORTED_MODULE_1__.LocationMeetingService)); };
LocationInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LocationInputComponent, selectors: [["pek-location-input"]], inputs: { country: "country", locationId: "locationId", address: "address", showDelete: "showDelete", showAddMeetings: "showAddMeetings", companiesFilters: "companiesFilters", showHr: "showHr", type: "type" }, outputs: { countryChanged: "countryChanged", addressChanged: "addressChanged", meetingsChanged: "meetingsChanged", emitDeletePoint: "emitDeletePoint" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 6, consts: [[1, "row"], [1, "col-5"], [1, "form-group"], [3, "country", "valueChangeFull"], ["for", "address"], ["pInputText", "", "type", "text", "id", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "class", "p-button-danger p-button-rounded p-button-outlined p-button-rounded_small mr-2 mt-1", 3, "click", 4, "ngIf"], [3, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pButton", "", "icon", "pi pi-plus", "label", "Add Meeting", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", "mr-2", "mt-1", 3, "click"], [3, "currentCompanyId", "selectCompanyFull"], [3, "contactsListFull", "searchByCompany", "companyId", "valueChangeFull"], ["pButton", "", "icon", "pi pi-plus", "label", "Add Meeting", 3, "click"]], template: function LocationInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "pek-business-trip-country-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChangeFull", function LocationInputComponent_Template_pek_business_trip_country_picker_valueChangeFull_5_listener($event) { return ctx.countryChanged.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LocationInputComponent_Template_input_ngModelChange_10_listener($event) { return ctx.address = $event; })("ngModelChange", function LocationInputComponent_Template_input_ngModelChange_10_listener($event) { return ctx.addressChanged.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6)(12, "div", 2)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, LocationInputComponent_button_15_Template, 1, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LocationInputComponent_ng_template_16_Template, 8, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LocationInputComponent_ng_template_17_Template, 9, 4, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, LocationInputComponent_button_18_Template, 1, 0, "button", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("country", ctx.country == null ? null : ctx.country.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.locationMeetings.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.locationMeetings);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAddMeetings);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_2__.CompanyPickerComponent, _shared_pickers_multi_contacts_picker_multi_contacts_picker_component__WEBPACK_IMPORTED_MODULE_3__.MultiContactsPickerComponent, _pickers_business_trip_country_picker_business_trip_country_picker_component__WEBPACK_IMPORTED_MODULE_4__.BusinessTripCountryPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 25048:
/*!************************************************************************************************!*\
  !*** ./src/app/business-trips/components/trip-expenses-table/trip-expenses-table.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripExpensesTableComponent": () => (/* binding */ TripExpensesTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _enums_business_trip_expense_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/business-trip-expense-status.enum */ 43024);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _enums_business_trip_expenses_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/business-trip-expenses-type */ 31824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_business_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/business-trip.service */ 96288);
/* harmony import */ var _services_business_trips_expenses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/business-trips-expenses.service */ 75570);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/expense.service */ 42503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/money-format.pipe */ 15079);


















function TripExpensesTableComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TripExpensesTableComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.verifyBusinessTrip.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TripExpensesTableComponent_ng_template_10_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Choose the Evidences to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TripExpensesTableComponent_ng_template_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p");
} }
function TripExpensesTableComponent_ng_template_10_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TripExpensesTableComponent_ng_template_10_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.updateVerifyStatusOfExpense(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r10.selectedTripExpense.is_verified === false || ctx_r10.selectedTripExpense.is_verified === true);
} }
function TripExpensesTableComponent_ng_template_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TripExpensesTableComponent_ng_template_10_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.updateVerifyStatusOfExpense(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r11.selectedTripExpense.is_verified === false || ctx_r11.selectedTripExpense.is_verified === true);
} }
function TripExpensesTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TripExpensesTableComponent_ng_template_10_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TripExpensesTableComponent_ng_template_10_p_2_Template, 1, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, TripExpensesTableComponent_ng_template_10_button_4_Template, 1, 1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, TripExpensesTableComponent_ng_template_10_button_5_Template, 1, 1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.selectedTripExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isVerify && ctx_r1.selectedTripExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isVerify && ctx_r1.selectedTripExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", !ctx_r1.selectedTripExpense || ctx_r1.selectedTripExpense && (ctx_r1.selectedTripExpense.is_verified || ctx_r1.selectedTripExpense.is_verified === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function TripExpensesTableComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Evidence Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function TripExpensesTableComponent_ng_template_12_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tripExpense_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", tripExpense_r16.files[0].file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r18.getName(tripExpense_r16.files[0].file), " (F ", tripExpense_r16.files.length, ") ");
} }
function TripExpensesTableComponent_ng_template_12_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tripExpense_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", tripExpense_r16.files[0].file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r19.getName(tripExpense_r16.files[0].file), " ");
} }
function TripExpensesTableComponent_ng_template_12_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", file_r27.file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r26.getName(file_r27.file), " ");
} }
function TripExpensesTableComponent_ng_template_12_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TripExpensesTableComponent_ng_template_12_div_15_span_1_Template, 4, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tripExpense_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", tripExpense_r16.files);
} }
function TripExpensesTableComponent_ng_template_12_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Canceled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TripExpensesTableComponent_ng_template_12_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Need To Be Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TripExpensesTableComponent_ng_template_12_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TripExpensesTableComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 24)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TripExpensesTableComponent_ng_template_12_span_13_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, TripExpensesTableComponent_ng_template_12_span_14_Template, 3, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, TripExpensesTableComponent_ng_template_12_div_15_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, TripExpensesTableComponent_ng_template_12_span_19_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, TripExpensesTableComponent_ng_template_12_span_20_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, TripExpensesTableComponent_ng_template_12_span_21_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tripExpense_r16 = ctx.$implicit;
    const i_r17 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", tripExpense_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r17 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tripExpense_r16.expense && tripExpense_r16.expense.name ? tripExpense_r16.expense.name : tripExpense_r16.custom_expense.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tripExpense_r16.expense && tripExpense_r16.expense.name ? tripExpense_r16.expense.description : tripExpense_r16.custom_expense.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 13, tripExpense_r16.sum));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tripExpense_r16.currency.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", tripExpense_r16.files.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", tripExpense_r16.files.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", tripExpense_r16.files.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", tripExpense_r16.type === ctx_r3.BusinessTripExpensesType.CORPORATE ? "Corporate" : "Own", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", tripExpense_r16.is_verified === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !tripExpense_r16.is_verified && tripExpense_r16.is_verified !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", tripExpense_r16.is_verified === true);
} }
function TripExpensesTableComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p")(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const expense_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", expense_r30.currency.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", expense_r30.sum, "", expense_r30.currency.symbol, "");
} }
function TripExpensesTableComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TripExpensesTableComponent_div_19_div_1_Template, 6, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.sumOfVerifiedExpenses);
} }
function TripExpensesTableComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " No Verified Evidences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
class TripExpensesTableComponent {
    constructor(fb, modalService, businessService, businessTripsExpensesService, expenseService) {
        this.fb = fb;
        this.modalService = modalService;
        this.businessService = businessService;
        this.businessTripsExpensesService = businessTripsExpensesService;
        this.expenseService = expenseService;
        this.tripExpenses = [];
        this.editExpense = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.verifyBusinessTrip = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.currentBusinessTripExpenses = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.deleteExpense = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.expenseSumEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.unverifyTrip = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.BusinessTripExpensesType = _enums_business_trip_expenses_type__WEBPACK_IMPORTED_MODULE_2__.BusinessTripExpensesType;
        this.statuses = _enums_business_trip_expense_status_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessTripExpenseStatus;
        this.sumOfVerifiedExpenses = [];
        this.menuItems = [{
                label: 'Selected Evidence',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.editTripExpense()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteTripExpense()
                    }
                ]
            }];
        this.formData = new FormData();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.image_path;
    }
    ngOnInit() {
        this.getBusinessTripsExpenses();
    }
    getBusinessTripsExpenses() {
        this.businessTripsExpensesService.get([{ name: 'business_trip_id', value: this.businessTripId }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(res => {
            this.tripExpenses = res;
            this.currentBusinessTripExpenses.emit(this.tripExpenses);
            this.recalculateExpenses();
        });
    }
    ngOnChanges(changes) {
        this.recalculateExpenses();
    }
    recalculateExpenses() {
        this.sumOfVerifiedExpenses = [];
        this.tripExpenses.forEach(tripExpense => {
            if (tripExpense.is_verified) {
                const addedExpense = this.sumOfVerifiedExpenses.find(expense => expense.currencyCode === tripExpense.currency.code);
                if (addedExpense) {
                    addedExpense.sum = +addedExpense.sum + +tripExpense.sum;
                }
                else {
                    this.sumOfVerifiedExpenses.push({
                        currency: tripExpense.currency,
                        sum: tripExpense.sum,
                        currencyCode: tripExpense.currency.code
                    });
                }
            }
        });
        this.expenseSumEmit.emit(this.sumOfVerifiedExpenses);
    }
    getName(name) {
        const nameArr = name.split('/');
        return nameArr[nameArr.length - 1];
    }
    deleteTripExpense() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.businessTripsExpensesService.delete(this.selectedTripExpense).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(res => {
                    this.getBusinessTripsExpenses();
                    this.selectedTripExpense = null;
                });
            }
        });
    }
    addTripExpanses() {
        const isVerify = false;
        this.expenseService
            .createChangeExpanseItem(null, isVerify)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe((tripExpense) => {
            const preparedData = this.prepareExpense(tripExpense);
            this.businessTripsExpensesService.create(preparedData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(response => {
                if (tripExpense.uploadedFiles.length > 0) {
                    let uploadImages = [];
                    tripExpense.uploadedFiles.forEach(file => {
                        const call = this.businessTripsExpensesService.uploadFiles({
                            business_trip_expense: response.id,
                            file: file
                        });
                        uploadImages.push(call);
                    });
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([
                        ...uploadImages
                    ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(res => {
                        this.getBusinessTripsExpenses();
                        this.unverifyTrip.next();
                    });
                }
                else {
                    this.getBusinessTripsExpenses();
                    this.unverifyTrip.next();
                }
            });
        });
    }
    prepareExpense(tripExpense) {
        tripExpense.business_trip = this.businessTripId;
        const businessExpense = {
            currency: tripExpense.currency,
            id: tripExpense.id,
            sum: tripExpense.sum,
            type: tripExpense.type,
            business_trip: this.businessTripId,
            is_verified: tripExpense.is_verified,
            clear_file: tripExpense.clear_file,
        };
        if (tripExpense.expense?.name) {
            businessExpense.expense = tripExpense.expense.id;
            businessExpense.currency = tripExpense.currency.code;
            businessExpense.fullExpense = tripExpense.expense;
        }
        if (tripExpense.custom_expense?.name) {
            businessExpense.custom_expense = tripExpense.custom_expense;
            businessExpense.currency = tripExpense.currency.code;
            businessExpense.fullExpense = tripExpense.custom_expense;
        }
        return businessExpense;
    }
    viewFile(selectedExpense, file) {
        const preparedFiles = [];
        const files = [];
        if (selectedExpense.base64File) {
            files.push({ file: selectedExpense.base64File });
        }
        if (typeof selectedExpense.file === 'string' && !selectedExpense.base64File) {
            preparedFiles.push({ file });
        }
        const data = { links: preparedFiles, files };
        this.businessService.viewBusinessTripFiles(data);
    }
    editTripExpense() {
        this.expenseService
            .createChangeExpanseItem(this.selectedTripExpense, this.isVerify)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe((tripExpense) => {
            const preparedData = this.prepareExpense(tripExpense.value);
            this.businessTripsExpensesService.update(tripExpense.value.id, preparedData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(response => {
                if (tripExpense.value.deleteImagesIds.length > 0 || tripExpense.value.uploadedFiles.length > 0) {
                    let uploadImages = [];
                    let deleteImages = [];
                    if (tripExpense.value.uploadedFiles.length > 0) {
                        tripExpense.value.uploadedFiles.forEach(file => {
                            const call = this.businessTripsExpensesService.uploadFiles({
                                business_trip_expense: response.data.id,
                                file: file
                            });
                            uploadImages.push(call);
                        });
                    }
                    if (tripExpense.value.deleteImagesIds.length > 0) {
                        tripExpense.value.deleteImagesIds.forEach(fileId => {
                            const call = this.businessTripsExpensesService.deleteFiles(fileId);
                            deleteImages.push(call);
                        });
                    }
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([
                        ...uploadImages,
                        ...deleteImages,
                    ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
                        this.getBusinessTripsExpenses();
                        this.unverifyTrip.next();
                    });
                }
                else {
                    this.getBusinessTripsExpenses();
                    this.unverifyTrip.next();
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    updateVerifyStatusOfExpense(isVerified) {
        this.selectedTripExpense.is_verified = isVerified;
        const preparedData = this.prepareExpense(this.selectedTripExpense);
        this.businessTripsExpensesService.create(preparedData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(response => {
            this.getBusinessTripsExpenses();
        });
    }
}
TripExpensesTableComponent.ɵfac = function TripExpensesTableComponent_Factory(t) { return new (t || TripExpensesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_business_trip_service__WEBPACK_IMPORTED_MODULE_4__.BusinessTripService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_business_trips_expenses_service__WEBPACK_IMPORTED_MODULE_5__.BusinessTripsExpensesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_6__.ExpenseService)); };
TripExpensesTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TripExpensesTableComponent, selectors: [["pek-trip-expenses-table"]], inputs: { businessTripId: "businessTripId", isVerify: "isVerify" }, outputs: { editExpense: "editExpense", verifyBusinessTrip: "verifyBusinessTrip", currentBusinessTripExpenses: "currentBusinessTripExpenses", deleteExpense: "deleteExpense", expenseSumEmit: "expenseSumEmit", unverifyTrip: "unverifyTrip" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 21, vars: 8, consts: [[1, "mb-4", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Verify Business Trip", "class", "mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Evidence", 3, "click"], [1, "page__card"], [1, "content"], [1, "card"], [1, "card-body"], ["selectionMode", "single", 3, "paginator", "rows", "value", "scrollable", "selection", "selectionChange"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "pt-2", "pl-2", "card-body"], [4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Verify Business Trip", 1, "mr-2", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between"], ["class", "subtitle ml-1 mr-2", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-check", "class", "mr-3", "label", "Verify Evidence", 3, "disabled", "click", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-times", "class", "p-button-danger mr-3", "label", "Cancel Evidence", 3, "disabled", "click", 4, "ngIf"], [1, "ml-auto", "mr-2", 3, "model"], [1, "subtitle", "ml-1", "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Verify Evidence", 1, "mr-3", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Cancel Evidence", 1, "p-button-danger", "mr-3", 3, "disabled", "click"], [1, "index-header"], [3, "pSelectableRow"], [1, "files-cont"], ["class", "files-list", 4, "ngIf"], [3, "href"], [1, "files-list"], [4, "ngFor", "ngForOf"], [1, "currency-name"], [1, "currency-value"]], template: function TripExpensesTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Evidences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TripExpensesTableComponent_button_3_Template, 1, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TripExpensesTableComponent_Template_button_click_4_listener() { return ctx.addTripExpanses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function TripExpensesTableComponent_Template_p_table_selectionChange_9_listener($event) { return ctx.selectedTripExpense = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, TripExpensesTableComponent_ng_template_10_Template, 7, 7, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, TripExpensesTableComponent_ng_template_11_Template, 17, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, TripExpensesTableComponent_ng_template_12_Template, 22, 15, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "div", 7)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, TripExpensesTableComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, TripExpensesTableComponent_div_20_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paginator", true)("rows", 10)("value", ctx.tripExpenses)("scrollable", false)("selection", ctx.selectedTripExpense);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sumOfVerifiedExpenses.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sumOfVerifiedExpenses.length === 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_17__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SelectableRow, _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_7__.MoneyFormatPipe], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n\n.currency-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8rem;\n}\n\n.currency-value[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.files-cont[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.files-cont[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 26.25rem;\n  background-color: white;\n  border-radius: 0.625rem;\n  box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n}\n\n.files-cont[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.files-cont[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  pointer-events: initial;\n}\n\n.files-cont[_ngcontent-%COMP%]:hover   .files-list[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXAtZXhwZW5zZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNFLHFCQUFBO0FBQ047O0FBRUk7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFLSTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQUhOIiwiZmlsZSI6InRyaXAtZXhwZW5zZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmN1cnJlbmN5LW5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuLmN1cnJlbmN5LXZhbHVlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5maWxlcy1jb250IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5maWxlcy1saXN0IHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAyNi4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNnB4IDVweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC5maWxlcy1saXN0IHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 43024:
/*!***************************************************************************!*\
  !*** ./src/app/business-trips/enums/business-trip-expense-status.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripExpenseStatus": () => (/* binding */ BusinessTripExpenseStatus)
/* harmony export */ });
var BusinessTripExpenseStatus;
(function (BusinessTripExpenseStatus) {
    BusinessTripExpenseStatus["NON_VERIFIED"] = "0";
    BusinessTripExpenseStatus["VERIFIED"] = "1";
})(BusinessTripExpenseStatus || (BusinessTripExpenseStatus = {}));


/***/ }),

/***/ 80204:
/*!********************************************************************************************!*\
  !*** ./src/app/business-trips/modals/create-edit-expense/create-edit-expense.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditExpenseComponent": () => (/* binding */ CreateEditExpenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _crm_services_crm_positions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../crm/services/crm-positions.service */ 3230);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/expense.service */ 42503);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _services_business_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/business-trip.service */ 96288);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);














function CreateEditExpenseComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Add Evidence");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreateEditExpenseComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Edit Evidence");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CreateEditExpenseComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 10)(2, "div", 6)(3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Evidence Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateEditExpenseComponent_ng_template_12_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.changedField()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 10)(7, "div", 6)(8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Evidence Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateEditExpenseComponent_ng_template_12_Template_input_ngModelChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.changedField()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", ctx_r2.isEditDisabled ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", ctx_r2.isEditDisabled ? "" : null);
} }
function CreateEditExpenseComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 10)(2, "div", 6)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Evidence Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "pek-expense-picker", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function CreateEditExpenseComponent_ng_template_13_Template_pek_expense_picker_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r13.expenseChanged($event); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.changedField()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 10)(7, "div", 6)(8, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Evidence Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isDisabled", ctx_r3.isEditDisabled)("expense", ctx_r3._expense.get("id").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", true);
} }
function CreateEditExpenseComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function CreateEditExpenseComponent_ng_template_39_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 39)(1, "td", 37)(2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 41)(5, "div", 42)(6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateEditExpenseComponent_ng_template_39_tr_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const file_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.deleteExpensesFile(file_r15.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const file_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", file_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", file_r15.file, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r17.getName(file_r15.file), " ");
} }
function CreateEditExpenseComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateEditExpenseComponent_ng_template_39_tr_0_Template, 7, 3, "tr", 38);
} if (rf & 2) {
    const file_r15 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isFileToBeDisplayed(file_r15.id));
} }
function CreateEditExpenseComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " No Files Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 3);
} }
function CreateEditExpenseComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateEditExpenseComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.addExpanse()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "Add");
} }
function CreateEditExpenseComponent_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateEditExpenseComponent_button_44_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.editExpanse()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "Edit");
} }
const _c0 = function () { return { standalone: true }; };
class CreateEditExpenseComponent {
    constructor(dialogRef, fb, crmPositionService, data, expensesService, adapterService, businessService, auth, messageService, businessTripService, modalService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.crmPositionService = crmPositionService;
        this.data = data;
        this.expensesService = expensesService;
        this.adapterService = adapterService;
        this.businessService = businessService;
        this.auth = auth;
        this.messageService = messageService;
        this.businessTripService = businessTripService;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: [null],
            is_verified: [null],
            isOther: [false],
            expense: this.fb.group({
                id: [null],
                name: [null],
                description: [null],
            }),
            custom_expense: this.fb.group({
                id: [null],
                name: [null],
                description: [null]
            }),
            currency: this.fb.group({
                code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                name: [null],
                symbol: [null],
                is_active: [null],
            }),
            sum: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            file: [null],
            type: ['0'],
            uploaded_file: [null],
            clear_file: [false],
            base64File: [null],
            deleteImagesIds: [[]],
            files: [[]],
            uploadedFiles: [[]],
        });
        this.types = [
            {
                name: 'Corporate',
                value: '0'
            },
            {
                name: 'Own',
                value: '1'
            }
        ];
        this.isEditDisabled = false;
        this.canVerify = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_path;
        this.selectedType = this.types[0];
        this.filesIdsToDelete = [];
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.patchValue(this.data.entity);
            if (this.data.entity.expense?.id) {
                this.form.get('isOther').setValue(false);
            }
            else {
                this.form.get('isOther').setValue(true);
            }
            this.expensesFiles = this.data.entity.files;
            this.selectedType = this.types.find(type => type.value === this.data.entity.type);
        }
        // @ts-ignore
        this.canVerify = this.data.canVerify;
    }
    addExpanse() {
        if (this.form.get('isOther').value) {
            const isCustomNameFilled = this.form.get('custom_expense').value.name;
            const isCustomDescriptionFilled = this.form.get('custom_expense').value.description;
            if (!isCustomNameFilled || !isCustomDescriptionFilled) {
                this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Fill Expense Info` });
                return;
            }
        }
        else {
            const isEmployeeFilled = this.form.get('expense').value.id;
            if (!isEmployeeFilled) {
                this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Select Expense` });
                return;
            }
        }
        if (!this.form.get('currency').value.code) {
            this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Select Currency` });
            return;
        }
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
    }
    editExpanse() {
        if (this.form.get('isOther').value) {
            this.form.get('expense').reset();
            const isCustomNameFilled = this.form.get('custom_expense').value.name;
            const isCustomDescriptionFilled = this.form.get('custom_expense').value.description;
            if (!isCustomNameFilled || !isCustomDescriptionFilled) {
                this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Fill Expense Info` });
                return;
            }
        }
        else {
            this.form.get('custom_expense').reset();
            const isEmployeeFilled = this.form.get('expense').value.id;
            if (!isEmployeeFilled) {
                this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Select Expense` });
                return;
            }
        }
        if (!this.form.get('currency').value.code) {
            this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: `Select Currency` });
            return;
        }
        if (this.filesIdsToDelete.length > 0) {
            this.form.get('deleteImagesIds').setValue(this.filesIdsToDelete);
        }
        if (this.form.valid) {
            this.dialogRef.close(this.form);
        }
    }
    get _expense() {
        return this.form.get('expense');
    }
    get _currency() {
        return this.form.get('currency');
    }
    test() {
    }
    expenseChanged($event) {
        this.form.get('expense').setValue($event);
    }
    getById(id) {
        this.expensesService.getById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(expense => {
            this.selectedExpense = expense;
        });
    }
    changed() {
        if (this.form.get('expense').value) {
            this.form.get('expense').reset();
        }
        if (this.form.get('custom_expense').value) {
            this.form.get('custom_expense').reset();
        }
    }
    currencyChanged($event) {
        this.form.get('currency').setValue($event);
    }
    imageManipulation($event, files) {
        // @ts-ignore
        const newFiles = Array.from(files.files);
        const file = newFiles[0];
        this.form.get('uploaded_file').reset();
        this.form.get('base64File').reset();
        this.form.get('uploaded_file').setValue(file);
        this.fileToBase64(file);
        this.form.get('clear_file').setValue(false);
        this.changedField();
    }
    fileToBase64(file) {
        const fileReader = new FileReader();
        fileReader.onload = event => {
            const base64 = event.target.result;
            this.form.get('base64File').setValue(base64);
        };
        fileReader.readAsDataURL(file);
    }
    getName(name) {
        const nameArr = name.split('/');
        return nameArr[nameArr.length - 1];
    }
    changedField() {
        if (!this.auth.user.can_verify_expenses) {
            this.form.get('is_verified').patchValue(false);
        }
    }
    clearFile() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe((res) => {
            if (res) {
                this.file = null;
                if (this.form.get('file').value) {
                    this.form.get('clear_file').setValue(true);
                }
                this.form.get('file').setValue(null);
                this.form.get('uploaded_file').setValue(null);
                this.form.get('base64File').setValue(null);
            }
        });
    }
    viewFile() {
        const preparedFiles = [];
        const files = [];
        if (this.form.get('base64File').value) {
            files.push({ file: this.form.get('base64File').value });
        }
        if (typeof this.form.get('file').value === 'string' && !this.form.get('base64File').value) {
            preparedFiles.push({ file: this.form.get('file').value });
        }
        const data = { links: preparedFiles, files };
        this.businessTripService.viewBusinessTripFiles(data);
    }
    takePhoto() {
        this.businessService.takePhotoModal().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(file => {
            if (file) {
                this.form.get('uploaded_file').reset();
                this.form.get('base64File').reset();
                this.form.get('uploaded_file').setValue(file);
                this.fileToBase64(file);
                this.form.get('clear_file').setValue(false);
                this.changedField();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    typeChanged($event) {
        this.form.get('type').setValue($event.value);
    }
    filesChanged(files) {
        this.form.get('uploadedFiles').setValue(files);
    }
    isFileToBeDisplayed(id) {
        return this.filesIdsToDelete.findIndex(el => el === id) < 0;
    }
    downloadFile(file) {
    }
    deleteExpensesFile(id) {
        this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
            if (confirm) {
                const index = this.expensesFiles.findIndex(el => el.id === id);
                this.expensesFiles.splice(index, 1);
                this.filesIdsToDelete.push(id);
            }
        });
    }
}
CreateEditExpenseComponent.ɵfac = function CreateEditExpenseComponent_Factory(t) { return new (t || CreateEditExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_crm_services_crm_positions_service__WEBPACK_IMPORTED_MODULE_1__.CrmPositionsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_2__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_business_trip_service__WEBPACK_IMPORTED_MODULE_4__.BusinessTripService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_business_trip_service__WEBPACK_IMPORTED_MODULE_4__.BusinessTripService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService)); };
CreateEditExpenseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreateEditExpenseComponent, selectors: [["pek-create-edit-expense"]], decls: 45, vars: 20, consts: [[1, "modal-header"], [1, "modal-header__title"], [4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["for", "other", 2, "display", "block"], ["id", "other", "formControlName", "isOther", 3, "disabled", "binary", "onChange"], [3, "ngIf"], [1, "col-6"], ["formGroupName", "expense", 1, "form-group"], [3, "isDisabled", "currency", "valueChange"], ["for", "price"], ["pInputText", "", "id", "price", "formControlName", "sum", "type", "number", "step", "0.01", "min", "0", 1, "form-control", 3, "ngModelChange"], ["for", "is_verified"], ["optionLabel", "name", 3, "options", "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-12"], [3, "fileChanged"], ["filePicker", ""], ["selectionMode", "single", 1, "table-full-loading", "adaptive-table", "adaptive-table_filters", 3, "rows", "paginator", "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "justify-content-between"], ["pButton", "", "label", "Cancel", "type", "button", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "class", "p-button-success", 3, "label", "click", 4, "ngIf"], ["formGroupName", "custom_expense", 1, "row"], ["for", "name"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control", 3, "ngModelChange"], ["for", "custom_description"], ["pInputText", "", "formControlName", "description", "type", "text", "id", "custom_description", 1, "form-control", 3, "ngModelChange"], ["formGroupName", "expense", 1, "row"], [3, "isDisabled", "expense", "valueChange"], ["for", "description"], ["pInputText", "", "formControlName", "description", "type", "text", "id", "description", 1, "form-control"], [2, "width", "80%"], [2, "width", "20%"], [3, "pSelectableRow", 4, "ngIf"], [3, "pSelectableRow"], [3, "href"], [2, "width", "30%"], [1, "d-flex", "justify-content-center"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", 3, "click"], [1, "no-content"], [1, "text-center", "p-4", 2, "width", "100%"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "click"]], template: function CreateEditExpenseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CreateEditExpenseComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CreateEditExpenseComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Not Listed Evidences");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function CreateEditExpenseComponent_Template_p_checkbox_onChange_11_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CreateEditExpenseComponent_ng_template_12_Template, 11, 2, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, CreateEditExpenseComponent_ng_template_13_Template, 11, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 4)(15, "div", 10)(16, "div", 11)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "pek-currency-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function CreateEditExpenseComponent_Template_pek_currency_picker_valueChange_19_listener($event) { ctx.currencyChanged($event); return ctx.changedField(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10)(21, "div", 6)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Sum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateEditExpenseComponent_Template_input_ngModelChange_24_listener() { return ctx.changedField(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 4)(26, "div", 10)(27, "div", 6)(28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Evidence type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateEditExpenseComponent_Template_p_dropdown_ngModelChange_30_listener($event) { return ctx.selectedType = $event; })("ngModelChange", function CreateEditExpenseComponent_Template_p_dropdown_ngModelChange_30_listener($event) { return ctx.typeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 4)(32, "div", 17)(33, "div", 6)(34, "pek-upload-file-picker", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fileChanged", function CreateEditExpenseComponent_Template_pek_upload_file_picker_fileChanged_34_listener($event) { return ctx.filesChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 4)(37, "p-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CreateEditExpenseComponent_ng_template_38_Template, 5, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CreateEditExpenseComponent_ng_template_39_Template, 1, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, CreateEditExpenseComponent_ng_template_40_Template, 4, 1, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-dialog-actions", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, CreateEditExpenseComponent_button_43_Template, 1, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CreateEditExpenseComponent_button_44_Template, 1, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.type === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isEditDisabled)("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("isOther").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.form.get("isOther").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isDisabled", ctx.isEditDisabled)("currency", ctx._currency.get("code").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", ctx.isEditDisabled ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.types)("ngModel", ctx.selectedType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", 5)("paginator", true)("value", ctx.expensesFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.type === "edit");
    } }, styles: ["pek-upload-file-picker div.p-fileupload-content {\n  max-height: 15.875rem;\n  overflow: auto;\n  padding: 0.5rem 1rem !important;\n}\n  .dark-disabled input {\n  opacity: 1 !important;\n}\n  .dark-disabled.highlight input {\n  font-weight: 500;\n}\n.modal-overflow-visible[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n.input-file[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 10px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.input-file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.input-file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  color: #002e72;\n}\n.input-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 500;\n  color: #002e72;\n}\n.input-file[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.delete-image[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #dc3545;\n  padding: 0;\n  position: relative;\n  top: 2px;\n}\n.delete-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-size: 16px;\n  position: relative;\n  top: 1px;\n}\n.delete-image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n.delete-image[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.remove[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font: inherit;\n  right: -15.375rem;\n  bottom: 0.25rem;\n  font-weight: 500;\n  padding: 0.375rem 1.125rem;\n  color: var(--theme-color-danger);\n  border-radius: 0.625rem;\n  width: 9.875rem;\n  background: rgba(255, 237, 237, 0.4588235294);\n  margin-left: 0.5rem;\n}\n.remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LWV4cGVuc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUROO0FBTUk7RUFDRSxxQkFBQTtBQUpOO0FBUU07RUFDRSxnQkFBQTtBQU5SO0FBYUE7RUFDRSx5QkFBQTtBQVZGO0FBYUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBVkY7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVpKO0FBZ0JJO0VBQ0UsMEJBQUE7QUFkTjtBQW1CQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBaEJGO0FBa0JFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBaEJKO0FBbUJFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBakJKO0FBb0JFO0VBQ0UsMEJBQUE7QUFsQko7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUFuQkY7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQW5CSiIsImZpbGUiOiJjcmVhdGUtZWRpdC1leHBlbnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBwZWstdXBsb2FkLWZpbGUtcGlja2VyIHtcclxuICAgIGRpdi5wLWZpbGV1cGxvYWQtY29udGVudCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE1Ljg3NXJlbTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGFyay1kaXNhYmxlZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLmhpZ2hsaWdodCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLW92ZXJmbG93LXZpc2libGUgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZmlsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiAjMDAyZTcyO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAyZTcyO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGVsZXRlLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDFweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVtb3ZlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICByaWdodDogLTE1LjM3NXJlbTs7XHJcbiAgYm90dG9tOiAwLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMS4xMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLWRhbmdlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgd2lkdGg6IDkuODc1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmVkZWQ3NTtcclxuICBtYXJnaW4tbGVmdDogLjVyZW07XHJcblxyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 98935:
/*!******************************************************************************************************!*\
  !*** ./src/app/business-trips/modals/create-edit-expense/expense-picker/expense-picker.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePickerComponent": () => (/* binding */ ExpensePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/expense.service */ 42503);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 38992);







class ExpensePickerComponent {
    constructor(expensesService) {
        this.expensesService = expensesService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isLoading = true;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.expensesService
            .get()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
            .subscribe((res) => {
            this.expenses = res;
            this.isLoading = false;
        });
    }
    onChange(expanse) {
        this.setValue(expanse);
    }
    registerOnChange(fn) {
        this.valueChange.subscribe(fn);
    }
    registerOnTouched(fn) {
        // okay
    }
    setValue(value) {
        this.expense = value;
        this.valueChange.emit(this.expenses.find(expense => expense.id === this.expense));
    }
    writeValue(obj) {
        this.expense = obj;
    }
}
ExpensePickerComponent.ɵfac = function ExpensePickerComponent_Factory(t) { return new (t || ExpensePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_0__.ExpenseService)); };
ExpensePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExpensePickerComponent, selectors: [["pek-expense-picker"]], inputs: { expense: "expense", showClear: "showClear", isDisabled: "isDisabled" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ExpensePickerComponent), multi: true }])], decls: 1, vars: 5, consts: [["optionValue", "id", "optionLabel", "name", "placeholder", "Choose Expanse", 3, "filter", "showClear", "ngModel", "options", "disabled", "ngModelChange"]], template: function ExpensePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExpensePickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.expense = $event; })("ngModelChange", function ExpensePickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filter", true)("showClear", ctx.showClear)("ngModel", ctx.expense)("options", ctx.expenses)("disabled", ctx.isLoading || ctx.isDisabled);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 34248:
/*!************************************************************************************************!*\
  !*** ./src/app/business-trips/modals/create-update-expense/create-update-expense.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUpdateExpenseComponent": () => (/* binding */ CreateUpdateExpenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/expense.service */ 42503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);










function CreateUpdateExpenseComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateUpdateExpenseComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateUpdateExpenseComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateUpdateExpenseComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.addExpense()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Add");
} }
function CreateUpdateExpenseComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateUpdateExpenseComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.editExpense()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Edit");
} }
class CreateUpdateExpenseComponent {
    constructor(dialogRef, fb, expensesService, data) {
        this.dialogRef = dialogRef;
        this.expensesService = expensesService;
        this.data = data;
        this.form = fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            description: ['']
        });
        if (this.data.type === 'edit') {
            this.form.patchValue(this.data.entity);
        }
    }
    ngOnInit() { }
    addExpense() {
        if (this.form.valid) {
            this.expensesService
                .create(this.form.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe((res) => {
                this.dialogRef.close(res);
            });
        }
    }
    editExpense() {
        if (this.form.valid) {
            this.form.value.id = this.data.entity.id;
            this.expensesService
                .update(this.form.value.id, this.form.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe((res) => {
                this.dialogRef.close(res);
            });
        }
    }
}
CreateUpdateExpenseComponent.ɵfac = function CreateUpdateExpenseComponent_Factory(t) { return new (t || CreateUpdateExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_expense_service__WEBPACK_IMPORTED_MODULE_0__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateUpdateExpenseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateUpdateExpenseComponent, selectors: [["pek-create-update-expense"]], decls: 18, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control"], ["for", "description"], ["pInputText", "", "formControlName", "description", "type", "text", "id", "description", 1, "form-control"], [1, "justify-content-between"], ["pButton", "", "label", "Cancel", "type", "button", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "class", "p-button-success", 3, "label", "click", 4, "ngIf"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "click"]], template: function CreateUpdateExpenseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateUpdateExpenseComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateUpdateExpenseComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CreateUpdateExpenseComponent_button_16_Template, 1, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateUpdateExpenseComponent_button_17_Template, 1, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "edit");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXBkYXRlLWV4cGVuc2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56568:
/*!************************************************************************************************!*\
  !*** ./src/app/business-trips/modals/create-update-vehicle/create-update-vehicle.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUpdateVehicleComponent": () => (/* binding */ CreateUpdateVehicleComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/vehicle.service */ 66029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);










function CreateUpdateVehicleComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateUpdateVehicleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateUpdateVehicleComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateUpdateVehicleComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.addVehicle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Add");
} }
function CreateUpdateVehicleComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateUpdateVehicleComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.editVehicle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Edit");
} }
class CreateUpdateVehicleComponent {
    constructor(dialogRef, fb, vehiclesService, data) {
        this.dialogRef = dialogRef;
        this.vehiclesService = vehiclesService;
        this.data = data;
        this.form = fb.group({
            model: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            number: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
        if (this.data.type === 'edit') {
            this.form.patchValue(this.data.entity);
        }
    }
    ngOnInit() {
    }
    addVehicle() {
        if (this.form.valid) {
            this.vehiclesService
                .create(this.form.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe((res) => {
                this.dialogRef.close(res);
            });
        }
    }
    editVehicle() {
        if (this.form.valid) {
            this.form.value.id = this.data.entity.id;
            this.vehiclesService
                .update(this.form.value.id, this.form.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe((res) => {
                this.dialogRef.close(res);
            });
        }
    }
}
CreateUpdateVehicleComponent.ɵfac = function CreateUpdateVehicleComponent_Factory(t) { return new (t || CreateUpdateVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_0__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateUpdateVehicleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateUpdateVehicleComponent, selectors: [["pek-create-update-vehicle"]], decls: 18, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "model"], ["pInputText", "", "formControlName", "model", "type", "text", "id", "model", 1, "form-control"], ["for", "number"], ["pInputText", "", "formControlName", "number", "type", "text", "id", "number", 1, "form-control"], [1, "justify-content-between"], ["pButton", "", "label", "Cancel", "type", "button", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "class", "p-button-success", 3, "label", "click", 4, "ngIf"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "click"]], template: function CreateUpdateVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateUpdateVehicleComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateUpdateVehicleComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Model ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Vehicle Registration Plate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CreateUpdateVehicleComponent_button_16_Template, 1, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateUpdateVehicleComponent_button_17_Template, 1, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "edit");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXBkYXRlLXZlaGljbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 24182:
/*!**************************************************************!*\
  !*** ./src/app/business-trips/models/business-trip-hotel.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripHotel": () => (/* binding */ BusinessTripHotel)
/* harmony export */ });
class BusinessTripHotel {
}


/***/ }),

/***/ 37071:
/*!********************************************************************!*\
  !*** ./src/app/business-trips/models/business-trip-status.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripStatus": () => (/* binding */ BusinessTripStatus)
/* harmony export */ });
var BusinessTripStatus;
(function (BusinessTripStatus) {
    BusinessTripStatus["NEW"] = "0";
    BusinessTripStatus["VERIFIED"] = "1";
    BusinessTripStatus["NEED_VERIFICATION"] = "2";
})(BusinessTripStatus || (BusinessTripStatus = {}));


/***/ }),

/***/ 92188:
/*!*******************************************************************!*\
  !*** ./src/app/business-trips/models/custom-employees.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomEmployeesService": () => (/* binding */ CustomEmployeesService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class CustomEmployeesService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'custom-employees/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
}
CustomEmployeesService.ɵfac = function CustomEmployeesService_Factory(t) { return new (t || CustomEmployeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
CustomEmployeesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomEmployeesService, factory: CustomEmployeesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38069:
/*!**********************************************************************!*\
  !*** ./src/app/business-trips/services/business-location.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessLocationService": () => (/* binding */ BusinessLocationService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class BusinessLocationService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-locations/';
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
BusinessLocationService.ɵfac = function BusinessLocationService_Factory(t) { return new (t || BusinessLocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
BusinessLocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BusinessLocationService, factory: BusinessLocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14765:
/*!**************************************************************************!*\
  !*** ./src/app/business-trips/services/business-trip-country.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripCountryService": () => (/* binding */ BusinessTripCountryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class BusinessTripCountryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-countries/';
        this.countriesResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject();
        this.isLoadingCountries = false;
    }
    get(query) {
        if (this.isLoadingCountries) {
            return this.countriesResult;
        }
        else {
            this.isLoadingCountries = true;
            return this.load(query);
        }
    }
    load(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            this.countriesResult.next(response.data);
            return response.data;
        }));
    }
}
BusinessTripCountryService.ɵfac = function BusinessTripCountryService_Factory(t) { return new (t || BusinessTripCountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
BusinessTripCountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BusinessTripCountryService, factory: BusinessTripCountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10139:
/*!******************************************************************************!*\
  !*** ./src/app/business-trips/services/business-trip-hotel-files.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripHotelFilesService": () => (/* binding */ BusinessTripHotelFilesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class BusinessTripHotelFilesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-hotel-files/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    add_hotel_files(send) {
        return this.httpClient
            .post(this.API_URL + this.url + 'add_business_trip_hotel_files/', send)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
BusinessTripHotelFilesService.ɵfac = function BusinessTripHotelFilesService_Factory(t) { return new (t || BusinessTripHotelFilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
BusinessTripHotelFilesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BusinessTripHotelFilesService, factory: BusinessTripHotelFilesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 93324:
/*!************************************************************************!*\
  !*** ./src/app/business-trips/services/business-trip-hotel.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripHotelService": () => (/* binding */ BusinessTripHotelService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class BusinessTripHotelService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-hotels/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    getById(id) {
        return this.httpClient
            .get(this.API_URL + this.url + id + '/')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
BusinessTripHotelService.ɵfac = function BusinessTripHotelService_Factory(t) { return new (t || BusinessTripHotelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
BusinessTripHotelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BusinessTripHotelService, factory: BusinessTripHotelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89801:
/*!**************************************************************************!*\
  !*** ./src/app/business-trips/services/business-trip-vehicle.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripVehicleService": () => (/* binding */ BusinessTripVehicleService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class BusinessTripVehicleService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-vehicles/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    getById(id) {
        return this.httpClient
            .get(this.API_URL + this.url + id + '/')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    update_vehicle(id, entity) {
        return this.httpClient.post(this.API_URL + this.url + 'update_business_trip_vehicle/', entity);
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
BusinessTripVehicleService.ɵfac = function BusinessTripVehicleService_Factory(t) { return new (t || BusinessTripVehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
BusinessTripVehicleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BusinessTripVehicleService, factory: BusinessTripVehicleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75570:
/*!****************************************************************************!*\
  !*** ./src/app/business-trips/services/business-trips-expenses.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsExpensesService": () => (/* binding */ BusinessTripsExpensesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class BusinessTripsExpensesService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-expenses/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
    uploadImage(send, expenseId) {
        const formData = new FormData();
        for (const key in send) {
            if (send[key] !== null) {
                formData.append(key, send[key]);
            }
        }
        return this.httpClient.post(this.API_URL + this.url + expenseId + '/add_file_to_expense/', formData).pipe();
    }
    uploadFiles(send) {
        const formData = new FormData();
        for (const key in send) {
            if (send[key] !== null) {
                formData.append(key, send[key]);
            }
        }
        return this.httpClient
            .post(this.API_URL + 'business-trips-expense-files/', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    deleteFiles(id) {
        return this.httpClient.delete(this.API_URL + 'business-trips-expense-files/' + id + '/');
    }
}
BusinessTripsExpensesService.ɵfac = function BusinessTripsExpensesService_Factory(t) { return new (t || BusinessTripsExpensesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
BusinessTripsExpensesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BusinessTripsExpensesService, factory: BusinessTripsExpensesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42503:
/*!************************************************************!*\
  !*** ./src/app/business-trips/services/expense.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseService": () => (/* binding */ ExpenseService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_edit_expense_create_edit_expense_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-expense/create-edit-expense.component */ 80204);
/* harmony import */ var _modals_create_update_expense_create_update_expense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/create-update-expense/create-update-expense.component */ 34248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class ExpenseService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'expenses/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.data;
        }));
    }
    getPaginated(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.data;
        }));
    }
    getById(id) {
        return this.httpClient
            .get(this.API_URL + this.url + id + '/')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.data;
        }));
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
    createChangeExpanseItem(entity = null, canVerify = false) {
        return this.dialog
            .open(_modals_create_edit_expense_create_edit_expense_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditExpenseComponent, {
            width: '800px',
            data: { type: entity ? 'edit' : 'add', entity, canVerify },
            disableClose: true,
        })
            .afterClosed()
            .pipe();
    }
    createChangeExpense(entity = null) {
        return this.dialog
            .open(_modals_create_update_expense_create_update_expense_component__WEBPACK_IMPORTED_MODULE_2__.CreateUpdateExpenseComponent, {
            width: '800px',
            data: { type: entity ? 'edit' : 'add', entity },
            disableClose: true,
        })
            .afterClosed()
            .pipe();
    }
}
ExpenseService.ɵfac = function ExpenseService_Factory(t) { return new (t || ExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
ExpenseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ExpenseService, factory: ExpenseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36274:
/*!*********************************************************************!*\
  !*** ./src/app/business-trips/services/location-meeting.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationMeetingService": () => (/* binding */ LocationMeetingService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class LocationMeetingService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-locations-meetings/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
LocationMeetingService.ɵfac = function LocationMeetingService_Factory(t) { return new (t || LocationMeetingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
LocationMeetingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LocationMeetingService, factory: LocationMeetingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66029:
/*!************************************************************!*\
  !*** ./src/app/business-trips/services/vehicle.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleService": () => (/* binding */ VehicleService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_update_vehicle_create_update_vehicle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-update-vehicle/create-update-vehicle.component */ 56568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class VehicleService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'vehicles/';
    }
    get(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return response.data;
        }));
    }
    getPaginated(query) {
        let qString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    qString += '&' + element.name + '=' + element.value;
                }
                else {
                    qString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return response.data;
        }));
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            return response.data;
        }));
    }
    create(entity) {
        return this.httpClient
            .post(this.API_URL + this.url, entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
    createChangeVehicle(entity = null) {
        return this.dialog
            .open(_modals_create_update_vehicle_create_update_vehicle_component__WEBPACK_IMPORTED_MODULE_1__.CreateUpdateVehicleComponent, {
            width: '800px',
            data: { type: entity ? 'edit' : 'add', entity },
            disableClose: false,
        })
            .afterClosed()
            .pipe();
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
VehicleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61179:
/*!************************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/cloneArrayBuffer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneArrayBuffer = void 0;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new ArrayBuffer(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

exports.cloneArrayBuffer = cloneArrayBuffer;

/***/ }),

/***/ 51172:
/*!*********************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/cloneDataView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneDataView = void 0;

var cloneArrayBuffer_1 = __webpack_require__(/*! ./cloneArrayBuffer */ 61179);
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @returns {Object} Returns the cloned data view.
 */


function cloneDataView(dataView) {
  var buffer = (0, cloneArrayBuffer_1.cloneArrayBuffer)(dataView.buffer);
  return new DataView(buffer, dataView.byteOffset, dataView.byteLength);
}

exports.cloneDataView = cloneDataView;

/***/ }),

/***/ 5728:
/*!*****************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/cloneDate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneDate = void 0;
/**
 * Creates a clone of `date`.
 *
 * @private
 * @param {Date} typedDate The date to clone.
 * @returns {Object} Returns the cloned date.
 */

function cloneDate(targetDate) {
  return new Date(targetDate.getTime());
}

exports.cloneDate = cloneDate;

/***/ }),

/***/ 29715:
/*!****************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/cloneMap.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneMap = void 0;

var deepCopy_1 = __webpack_require__(/*! ./deepCopy */ 21885);
/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Date} typedDate The map to clone.
 * @returns {Object} Returns the cloned map.
 */


function cloneMap(targetMap) {
  var map = new Map();
  targetMap.forEach(function (value, key) {
    return map.set((0, deepCopy_1.deepCopy)(key), (0, deepCopy_1.deepCopy)(value));
  });
  return map;
}

exports.cloneMap = cloneMap;

/***/ }),

/***/ 91925:
/*!*******************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/cloneRegexp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneRegExp = void 0;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} targetRegexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(targetRegexp) {
  var result = new RegExp(targetRegexp.source, targetRegexp.flags);
  result.lastIndex = targetRegexp.lastIndex;
  return result;
}

exports.cloneRegExp = cloneRegExp;

/***/ }),

/***/ 15709:
/*!***********************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/cloneTypedArray.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneTypedArray = void 0;

var cloneArrayBuffer_1 = __webpack_require__(/*! ./cloneArrayBuffer */ 61179);

var TypedArrayMap = {
  "[object Float32Array]": Float32Array,
  "[object Float64Array]": Float64Array,
  "[object Int8Array]": Int8Array,
  "[object Int16Array]": Int16Array,
  "[object Int32Array]": Int32Array,
  "[object Uint8Array]": Uint8Array,
  "[object Uint16Array]": Uint16Array,
  "[object Uint32Array]": Uint32Array,
  "[object Uint8ClampedArray]": Uint8ClampedArray
};
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray(typedArray) {
  try {
    TypedArrayMap["[object BigInt64Array]"] = BigInt64Array;
    TypedArrayMap["[object BigUint64Array]"] = BigUint64Array;
  } catch (e) {}

  var buffer = (0, cloneArrayBuffer_1.cloneArrayBuffer)(typedArray.buffer);
  return new TypedArrayMap[Object.prototype.toString.call(typedArray)](buffer, typedArray.byteOffset, typedArray.length);
}

exports.cloneTypedArray = cloneTypedArray;

/***/ }),

/***/ 21885:
/*!****************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/deepCopy.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deepCopy = void 0;

var cloneArrayBuffer_1 = __webpack_require__(/*! ./cloneArrayBuffer */ 61179);

var cloneDataView_1 = __webpack_require__(/*! ./cloneDataView */ 51172);

var cloneDate_1 = __webpack_require__(/*! ./cloneDate */ 5728);

var cloneMap_1 = __webpack_require__(/*! ./cloneMap */ 29715);

var cloneRegexp_1 = __webpack_require__(/*! ./cloneRegexp */ 91925);

var cloneTypedArray_1 = __webpack_require__(/*! ./cloneTypedArray */ 15709);

var TypedArrayMap = {
  "[object Date]": cloneDate_1.cloneDate,
  "[object ArrayBuffer]": cloneArrayBuffer_1.cloneArrayBuffer,
  "[object DataView]": cloneDataView_1.cloneDataView,
  "[object Float32Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Float64Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Int8Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Int16Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Int32Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Uint8Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Uint8ClampedArray]": cloneTypedArray_1.cloneTypedArray,
  "[object Uint16Array]": cloneTypedArray_1.cloneTypedArray,
  "[object Uint32Array]": cloneTypedArray_1.cloneTypedArray,
  "[object BigInt64Array]": cloneTypedArray_1.cloneTypedArray,
  "[object BigUint64Array]": cloneTypedArray_1.cloneTypedArray,
  "[object RegExp]": cloneRegexp_1.cloneRegExp,
  "[object Map]": cloneMap_1.cloneMap
};
/**
 * Deep copy function for TypeScript.
 * @param T Generic type of target/copied value.
 * @param target Target value to be copied.
 * @see Original source: ts-deepcopy https://github.com/ykdr2017/ts-deepcopy
 * @see Code pen https://codepen.io/erikvullings/pen/ejyBYg
 */

function deepCopy(target) {
  var tag = Object.prototype.toString.call(target);

  if (TypedArrayMap[tag]) {
    return TypedArrayMap[tag](target);
  }

  if (target === null) {
    return target;
  }

  if (target instanceof Array) {
    var cp_1 = [];
    target.forEach(function (v) {
      cp_1.push(v);
    });
    return cp_1.map(function (n) {
      return deepCopy(n);
    });
  }

  if (typeof target === "object") {
    var cp_2 = __assign({}, target);

    Object.keys(cp_2).forEach(function (k) {
      cp_2[k] = deepCopy(cp_2[k]);
    });
    return cp_2;
  }

  return target;
}

exports.deepCopy = deepCopy;

/***/ }),

/***/ 47307:
/*!*************************************************!*\
  !*** ./node_modules/deep-copy-ts/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deepCopy = exports.cloneTypedArray = exports.cloneRegExp = exports.cloneDate = exports.cloneDataView = exports.cloneArrayBuffer = void 0;

var cloneArrayBuffer_1 = __webpack_require__(/*! ./cloneArrayBuffer */ 61179);

Object.defineProperty(exports, "cloneArrayBuffer", ({
  enumerable: true,
  get: function () {
    return cloneArrayBuffer_1.cloneArrayBuffer;
  }
}));

var cloneDataView_1 = __webpack_require__(/*! ./cloneDataView */ 51172);

Object.defineProperty(exports, "cloneDataView", ({
  enumerable: true,
  get: function () {
    return cloneDataView_1.cloneDataView;
  }
}));

var cloneDate_1 = __webpack_require__(/*! ./cloneDate */ 5728);

Object.defineProperty(exports, "cloneDate", ({
  enumerable: true,
  get: function () {
    return cloneDate_1.cloneDate;
  }
}));

var cloneRegexp_1 = __webpack_require__(/*! ./cloneRegexp */ 91925);

Object.defineProperty(exports, "cloneRegExp", ({
  enumerable: true,
  get: function () {
    return cloneRegexp_1.cloneRegExp;
  }
}));

var cloneTypedArray_1 = __webpack_require__(/*! ./cloneTypedArray */ 15709);

Object.defineProperty(exports, "cloneTypedArray", ({
  enumerable: true,
  get: function () {
    return cloneTypedArray_1.cloneTypedArray;
  }
}));

var deepCopy_1 = __webpack_require__(/*! ./deepCopy */ 21885);

Object.defineProperty(exports, "deepCopy", ({
  enumerable: true,
  get: function () {
    return deepCopy_1.deepCopy;
  }
}));

/***/ })

}]);
//# sourceMappingURL=default-src_app_business-trips_business-trips_module_ts.js.map