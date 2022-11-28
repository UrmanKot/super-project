"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["default-src_app_procurement_services_invoice_service_ts"],{

/***/ 48461:
/*!*****************************************************************!*\
  !*** ./src/app/procurement/services/invoice-product.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceProductService": () => (/* binding */ InvoiceProductService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 54240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class InvoiceProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'invoice_products/';
    }
    get(query) {
        let queryParams = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryParams += '&' + element.name + '=' + element.value;
                }
                else {
                    queryParams += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + this.url + 'all/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    acceptSeveral(send) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concat)(...send.map(product => this.httpClient.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.warehouse_url + 'invoice_product_to_warehouse/', [product.data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response))));
    }
}
InvoiceProductService.ɵfac = function InvoiceProductService_Factory(t) { return new (t || InvoiceProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
InvoiceProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InvoiceProductService, factory: InvoiceProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73529:
/*!*********************************************************!*\
  !*** ./src/app/procurement/services/invoice.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceService": () => (/* binding */ InvoiceService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _warehouse_modals_qc_accept_to_warehouse_qc_accept_to_warehouse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component */ 64672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class InvoiceService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'invoices/';
    }
    get(query) {
        let queryParams = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryParams += '&' + element.name + '=' + element.value;
                }
                else {
                    queryParams += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + this.url + 'all/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    getProductsToAccept(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/products_to_accept/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    openAcceptToWarehouseModal(items, id, type = 'invoice') {
        return this.dialog
            .open(_warehouse_modals_qc_accept_to_warehouse_qc_accept_to_warehouse_component__WEBPACK_IMPORTED_MODULE_1__.QcAcceptToWarehouseComponent, {
            width: '40rem',
            height: 'auto',
            data: { items, id, type },
            panelClass: 'modal-overflow-visible',
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
InvoiceService.ɵfac = function InvoiceService_Factory(t) { return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
InvoiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InvoiceService, factory: InvoiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6491:
/*!***************************************************************!*\
  !*** ./src/app/procurement/services/order-product.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderProductService": () => (/* binding */ OrderProductService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 54240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class OrderProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'order_products/';
    }
    get(query) {
        let queryParams = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryParams += '&' + element.name + '=' + element.value;
                }
                else {
                    queryParams += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + this.url + 'all/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    acceptSeveral(send) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concat)(...send.map(product => this.httpClient.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.warehouse_url + 'order_product_to_warehouse/', [product.data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response))));
    }
}
OrderProductService.ɵfac = function OrderProductService_Factory(t) { return new (t || OrderProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
OrderProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrderProductService, factory: OrderProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 64672:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcAcceptToWarehouseComponent": () => (/* binding */ QcAcceptToWarehouseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/group-locator-picker/group-locator-picker.component */ 74159);










class QcAcceptToWarehouseComponent {
    constructor(invoiceProductService, orderProductService, fb, dialogRef, data) {
        this.invoiceProductService = invoiceProductService;
        this.orderProductService = orderProductService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            locator: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
    }
    onAccept() {
        if (this.data.type === 'invoice') {
            this.acceptInvoiceProducts();
        }
        if (this.data.type === 'order') {
            this.acceptOrderProducts();
        }
    }
    acceptOrderProducts() {
        this.isSaving = true;
        const send = this.data.items.map(item => {
            return {
                data: {
                    order_product_id: item.id,
                    quantity: item.passed_quantity,
                    locator: this.form.get('locator').value
                }
            };
        });
        this.orderProductService.acceptSeveral(send).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.isSaving = false)).subscribe(() => this.dialogRef.close(true));
    }
    acceptInvoiceProducts() {
        this.isSaving = true;
        const send = this.data.items.map(item => {
            return {
                data: {
                    invoice_product_id: item.id,
                    quantity: item.passed_quantity,
                    locator: this.form.get('locator').value
                }
            };
        });
        this.invoiceProductService.acceptSeveral(send).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.isSaving = false)).subscribe(() => this.dialogRef.close(true));
    }
    onSelectLocator(id) {
        this.form.get('locator').patchValue(id);
    }
}
QcAcceptToWarehouseComponent.ɵfac = function QcAcceptToWarehouseComponent_Factory(t) { return new (t || QcAcceptToWarehouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_1__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
QcAcceptToWarehouseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QcAcceptToWarehouseComponent, selectors: [["pek-qc-accept-to-warehouse"]], decls: 14, vars: 4, consts: [[1, "modal-header", "modal-header_vertical"], [1, "add-product__header-wrapper"], [1, "add-product__header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "selectLocator"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Accept", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function QcAcceptToWarehouseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Accept Items to Warehouse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-dialog-content")(6, "form", 4)(7, "div", 5)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Locator*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "pek-group-locator-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectLocator", function QcAcceptToWarehouseComponent_Template_pek_group_locator_picker_selectLocator_10_listener($event) { return ctx.onSelectLocator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcAcceptToWarehouseComponent_Template_button_click_13_listener() { return ctx.onAccept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__.GroupLocatorPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxYy1hY2NlcHQtdG8td2FyZWhvdXNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_procurement_services_invoice_service_ts.js.map