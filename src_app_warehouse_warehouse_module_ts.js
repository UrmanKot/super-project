(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_warehouse_warehouse_module_ts"],{

/***/ 48461:
/*!*****************************************************************!*\
  !*** ./src/app/procurement/services/invoice-product.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceProductService": () => (/* binding */ InvoiceProductService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 91640);
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...send.map(product => this.httpClient.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.warehouse_url + 'invoice_product_to_warehouse/', [product.data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response))));
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderProductService": () => (/* binding */ OrderProductService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 91640);
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...send.map(product => this.httpClient.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.warehouse_url + 'order_product_to_warehouse/', [product.data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response))));
    }
}
OrderProductService.ɵfac = function OrderProductService_Factory(t) { return new (t || OrderProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
OrderProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrderProductService, factory: OrderProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37593:
/*!*******************************************************!*\
  !*** ./src/app/procurement/services/order.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _warehouse_modals_qc_accept_to_warehouse_qc_accept_to_warehouse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component */ 64672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class OrderService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'orders/';
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    getProductsToAccept(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/products_to_accept/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    openAcceptToWarehouseModal(items, id, type = 'order') {
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
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10764:
/*!*************************************************!*\
  !*** ./src/app/shared/services/task.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class TaskService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production_url;
        this.url = 'tasks/';
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57170:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/physical-inventory/physical-inventory-products/physical-inventory-products.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalInventoryProductsComponent": () => (/* binding */ PhysicalInventoryProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/physical-inventory.service */ 82242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pickers/warehouse-picker/warehouse-picker.component */ 29832);
/* harmony import */ var _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pickers/locator-picker/locator-picker.component */ 79642);
/* harmony import */ var _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pickers/nomenclature-type-picker/nomenclature-type-picker.component */ 72746);
/* harmony import */ var _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pickers/accepted-type-picker/accepted-type-picker.component */ 30813);


















const _c0 = ["paginator"];
const _c1 = ["searchBoxName"];
const _c2 = ["searchBoxCode"];
const _c3 = ["searchBoxDescription"];
function PhysicalInventoryProductsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function PhysicalInventoryProductsComponent_ng_container_7_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PhysicalInventoryProductsComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PhysicalInventoryProductsComponent_ng_container_7_ng_container_1_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const warehouse_r13 = ctx.$implicit;
    const idx_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", warehouse_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", idx_r14 !== ctx_r12.currentInventory.warehouses.length - 1);
} }
function PhysicalInventoryProductsComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PhysicalInventoryProductsComponent_ng_container_7_ng_container_1_Template, 3, 2, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.currentInventory.warehouses);
} }
function PhysicalInventoryProductsComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Initial Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Entered Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.product.nomenclature.code, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.physical_inventory_nomenclature.code, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_7_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_7_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", inventoryProduct_r16.countProducts, ") ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PhysicalInventoryProductsComponent_ng_template_65_ng_container_7_b_1_Template, 2, 0, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PhysicalInventoryProductsComponent_ng_template_65_ng_container_7_b_3_Template, 2, 1, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product.nomenclature.bulk_or_serial === "1");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_8_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_8_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", inventoryProduct_r16.countProducts, ") ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PhysicalInventoryProductsComponent_ng_template_65_ng_container_8_b_1_Template, 2, 0, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PhysicalInventoryProductsComponent_ng_template_65_ng_container_8_b_3_Template, 2, 1, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.physical_inventory_nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.physical_inventory_nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.physical_inventory_nomenclature.bulk_or_serial === "1");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.product.current_technology == null ? null : inventoryProduct_r16.product.current_technology.name, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.physical_inventory_technology == null ? null : inventoryProduct_r16.physical_inventory_technology.name, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_ng_template_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](inventoryProduct_r16.new_quantity = $event); })("ngModelChange", function PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_ng_template_1_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r53.newQuantity$.next(inventoryProduct_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", inventoryProduct_r16.new_quantity);
} }
function PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.new_quantity, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_ng_template_1_Template, 1, 1, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_ng_template_2_Template, 1, 1, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PhysicalInventoryProductsComponent_ng_template_65_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](inventoryProduct_r16.new_quantity);
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.product.nomenclature.category == null ? null : inventoryProduct_r16.product.nomenclature.category.name, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.physical_inventory_nomenclature.category == null ? null : inventoryProduct_r16.physical_inventory_nomenclature.category.name, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (inventoryProduct_r16.product.nomenclature.category == null ? null : inventoryProduct_r16.product.nomenclature.category.unit_of_measure == null ? null : inventoryProduct_r16.product.nomenclature.category.unit_of_measure.symbol) ? inventoryProduct_r16.product.nomenclature.category == null ? null : inventoryProduct_r16.product.nomenclature.category.unit_of_measure == null ? null : inventoryProduct_r16.product.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (inventoryProduct_r16.physical_inventory_nomenclature.category == null ? null : inventoryProduct_r16.physical_inventory_nomenclature.category.unit_of_measure == null ? null : inventoryProduct_r16.physical_inventory_nomenclature.category.unit_of_measure.symbol) ? inventoryProduct_r16.physical_inventory_nomenclature.category == null ? null : inventoryProduct_r16.physical_inventory_nomenclature.category.unit_of_measure == null ? null : inventoryProduct_r16.physical_inventory_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.locator.warehouse.name, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.locator.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"](" R: ", inventoryProduct_r16.locator.row, " Col: ", inventoryProduct_r16.locator.column, " Sh: ", inventoryProduct_r16.locator.shelf, " Pl: ", inventoryProduct_r16.locator.place, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.product.locator.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"](" R: ", inventoryProduct_r16.product.locator.row, " Col: ", inventoryProduct_r16.product.locator.column, " Sh: ", inventoryProduct_r16.product.locator.shelf, " Pl: ", inventoryProduct_r16.product.locator.place, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PhysicalInventoryProductsComponent_ng_template_65_ng_template_27_div_0_Template, 4, 5, "div", 4);
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product.locator);
} }
function PhysicalInventoryProductsComponent_ng_template_65_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    const inventoryProduct_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.product.locator.warehouse.name, " ");
} }
function PhysicalInventoryProductsComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, PhysicalInventoryProductsComponent_ng_template_65_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PhysicalInventoryProductsComponent_ng_template_65_ng_container_5_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, PhysicalInventoryProductsComponent_ng_template_65_ng_container_7_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, PhysicalInventoryProductsComponent_ng_template_65_ng_container_8_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, PhysicalInventoryProductsComponent_ng_template_65_ng_container_10_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, PhysicalInventoryProductsComponent_ng_template_65_ng_container_11_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, PhysicalInventoryProductsComponent_ng_template_65_p_cellEditor_15_Template, 3, 0, "p-cellEditor", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, PhysicalInventoryProductsComponent_ng_template_65_span_16_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PhysicalInventoryProductsComponent_ng_template_65_ng_container_18_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, PhysicalInventoryProductsComponent_ng_template_65_ng_container_19_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PhysicalInventoryProductsComponent_ng_template_65_ng_container_21_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, PhysicalInventoryProductsComponent_ng_template_65_ng_container_22_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, PhysicalInventoryProductsComponent_ng_template_65_ng_container_24_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, PhysicalInventoryProductsComponent_ng_template_65_div_26_Template, 4, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, PhysicalInventoryProductsComponent_ng_template_65_ng_template_27_Template, 1, 1, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, PhysicalInventoryProductsComponent_ng_template_65_ng_template_29_Template, 1, 1, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inventoryProduct_r16 = ctx.$implicit;
    const i_r17 = ctx.rowIndex;
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", inventoryProduct_r16)("pRowToggler", inventoryProduct_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r7.searchForm.get("page").value - 1) * 10 + i_r17 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product && !inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product && !inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !inventoryProduct_r16.product && inventoryProduct_r16.physical_inventory_technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inventoryProduct_r16.initial_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.currentInventory && ctx_r7.currentInventory.status === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.currentInventory && ctx_r7.currentInventory.status === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product && !inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.product && !inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.physical_inventory_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.locator)("ngIfElse", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryProduct_r16.locator)("ngIfElse", _r32);
} }
function PhysicalInventoryProductsComponent_ng_template_66_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 59);
} }
function PhysicalInventoryProductsComponent_ng_template_66_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PhysicalInventoryProductsComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PhysicalInventoryProductsComponent_ng_template_66_i_2_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PhysicalInventoryProductsComponent_ng_template_66_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.isLoadingInventoryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r8.isLoadingInventoryList);
} }
function PhysicalInventoryProductsComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PhysicalInventoryProductsComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61)(1, "p-paginator", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onPageChange", function PhysicalInventoryProductsComponent_div_68_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r71.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhysicalInventoryProductsComponent_div_68_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r73.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r10.inventoryProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r10.countProducts);
} }
function PhysicalInventoryProductsComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 65)(1, "p-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhysicalInventoryProductsComponent_div_69_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r74.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
class PhysicalInventoryProductsComponent {
    constructor(route, fb, modalService, physicalInventoryService, router) {
        this.route = route;
        this.fb = fb;
        this.modalService = modalService;
        this.physicalInventoryService = physicalInventoryService;
        this.router = router;
        this.isCompleting = false;
        this.isCancelation = false;
        this.searchForm = this.fb.group({
            name: [null],
            code: [null],
            description: [null],
            warehouse: [null],
            category: [null],
            locator: [null],
            type: [null],
            accepted_by_invoices: [null],
            page: [1],
        });
        this.isShowAll = false;
        this.warehousesIds = [];
        this.inventoryProducts = [];
        this.isLoadingCurrentInventory = true;
        this.isLoadingInventoryList = true;
        this.queryKey = 'name:null/code:null/description:null/type:null/accepted_by_invoices:null/warehouse:null/locator:null/category:null';
        this.query = [
            { name: 'paginated', value: true },
            { name: 'page', value: this.searchForm.get('page').value },
        ];
        this.isStartOnePage = false;
        this.countProducts = 0;
        this.currentInventory = null;
        this.newQuantity$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.searchBoxName.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.selectedInventoryProduct = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => this.searchBoxName.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(350)).subscribe(() => {
            this.searchProducts();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.searchBoxCode.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.selectedInventoryProduct = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => this.searchBoxCode.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(350)).subscribe(() => {
            this.searchProducts();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.searchBoxDescription.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.selectedInventoryProduct = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => this.searchBoxDescription.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(350)).subscribe(() => {
            this.searchProducts();
        });
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(id => this.inventoryId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.physicalInventoryService.getById(this.inventoryId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(inventory => {
            this.currentInventory = inventory;
            this.warehousesIds = this.currentInventory.warehouses.map(w => w.id);
            this.isLoadingCurrentInventory = false;
        });
        this.onChangeQuantity();
        this.getInventoryProductsForPagination();
    }
    onChangeQuantity() {
        this.newQuantity$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(inventoryProduct => this.prepareForSave(inventoryProduct)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(350), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(inventoryProduct => this.physicalInventoryService.updateQuantityInventoryProduct(inventoryProduct))).subscribe();
    }
    prepareForSave(inventoryProduct) {
        if (inventoryProduct.new_quantity === null || inventoryProduct.new_quantity < 0) {
            inventoryProduct.new_quantity = 0;
        }
    }
    searchProducts() {
        this.isLoadingInventoryList = true;
        this.destroy$.next(true);
        this.selectedInventoryProduct = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/description:${this.searchForm.get('description').value}/type:${this.searchForm.get('type').value}/accepted_by_invoices:${this.searchForm.get('accepted_by_invoices').value}/warehouse:${this.searchForm.get('warehouse').value}/locator:${this.searchForm.get('locator').value}/category:${this.searchForm.get('category').value}`;
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
            this.searchForm.get('page').patchValue(1);
            this.isStartOnePage = true;
        }
        this.query = [];
        if (!this.isShowAll) {
            this.query = [
                { name: 'paginated', value: 'true' },
                { name: 'page', value: this.searchForm.get('page').value },
            ];
        }
        if (this.searchForm.get('code').value) {
            this.query.push({ name: 'code', value: this.searchForm.get('code').value });
        }
        if (this.searchForm.get('name').value)
            this.query.push({ name: 'name', value: this.searchForm.get('name').value });
        if (this.searchForm.get('description').value)
            this.query.push({
                name: 'description',
                value: this.searchForm.get('description').value
            });
        if (this.searchForm.get('warehouse').value)
            this.query.push({
                name: 'warehouse',
                value: this.searchForm.get('warehouse').value
            });
        if (this.searchForm.get('locator').value)
            this.query.push({
                name: 'locator',
                value: this.searchForm.get('locator').value
            });
        if (this.searchForm.get('type').value !== null)
            this.query.push({
                name: 'type',
                value: this.searchForm.get('type').value
            });
        if (this.searchForm.get('accepted_by_invoices').value !== null)
            this.query.push({
                name: 'accepted_by_invoices',
                value: this.searchForm.get('accepted_by_invoices').value
            });
        if (!this.isShowAll) {
            this.getInventoryProductsForPagination();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getInventoryProducts();
        }
    }
    getInventoryProductsForPagination() {
        const newInventoryProducts = [];
        this.physicalInventoryService.getInventoryProductsListsForPagination(this.inventoryId, this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(inventoryLists => {
            inventoryLists.results.forEach(list => {
                list.products[0].countProducts = list.products.length;
                list.products[0].products = [...list.products];
                list.products[0].is_scanned_root = list.is_scanned;
                list.products[0].root_id = list.id;
                newInventoryProducts.push(list.products[0]);
            });
            this.inventoryProducts = [...newInventoryProducts];
            this.countProducts = inventoryLists.count;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoadingInventoryList = false;
        });
    }
    getInventoryProducts() {
        const newInventoryProducts = [];
        this.physicalInventoryService.getInventoryProducts(this.inventoryId, this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(inventoryLists => {
            inventoryLists.forEach(list => {
                list.products[0].countProducts = list.products.length;
                list.products[0].products = [...list.products];
                list.products[0].is_scanned_root = list.is_scanned;
                list.products[0].root_id = list.id;
                newInventoryProducts.push(list.products[0]);
            });
            this.inventoryProducts = [...newInventoryProducts];
            this.countProducts = inventoryLists.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoadingInventoryList = false;
        });
    }
    onSelectWarehouse(id) {
        this.searchForm.get('warehouse').patchValue(id);
        this.searchForm.get('locator').patchValue(null);
        this.searchProducts();
    }
    onSelectLocator(id) {
        this.searchForm.get('locator').patchValue(id);
        this.searchProducts();
    }
    onSelectNomenclatureType(type) {
        this.searchForm.get('type').patchValue(type);
        this.searchProducts();
    }
    onSelectAcceptedByInvoices(value) {
        this.searchForm.get('accepted_by_invoices').patchValue(value);
        this.searchProducts();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchProducts();
        }
    }
    onComplete() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                this.isCompleting = true;
                this.physicalInventoryService.completePhysicalInventory(+this.inventoryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => this.isCompleting = false)).subscribe(() => {
                    this.router.navigateByUrl('/warehouse/physical-inventory').then();
                });
            }
        });
    }
    onRemovePhysicalInventory() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.isCancelation = true;
                this.physicalInventoryService.removePhysicalInventory(+this.inventoryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => this.isCancelation = false)).subscribe(() => {
                    this.router.navigateByUrl('/warehouse/physical-inventory').then();
                });
            }
        });
    }
    onShowAll() {
        this.isShowAll = true;
        this.searchProducts();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.searchProducts();
    }
    onMoveProduct() {
        this.physicalInventoryService.openPhysicalInventoryProductMoveModal(this.selectedInventoryProduct).subscribe(res => {
            if (res) {
                this.searchProducts();
            }
        });
    }
    onOpenAddProductModal() {
        this.physicalInventoryService.openAddProductToPhysicalInventory(this.inventoryId).subscribe(res => {
            if (res) {
                this.searchProducts();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
PhysicalInventoryProductsComponent.ɵfac = function PhysicalInventoryProductsComponent_Factory(t) { return new (t || PhysicalInventoryProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_1__.PhysicalInventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router)); };
PhysicalInventoryProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PhysicalInventoryProductsComponent, selectors: [["pek-physical-inventory-products"]], viewQuery: function PhysicalInventoryProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchBoxDescription = _t.first);
    } }, decls: 70, vars: 20, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Product", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Cancel Physical Inventory", 1, "p-button-danger", "p-button-icon", 3, "loading", "click"], [1, "page__content"], [1, "page__card"], [1, "physical-inventory-products__form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-4"], [1, "form-group"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], ["formControlName", "description", "pInputText", "", 1, "form-control"], ["searchBoxDescription", ""], [1, "col-6"], [3, "acceptedWarehouseIds", "selectWarehouse"], [3, "warehouseId", "isAllLocators", "isDisabled", "selectLocator"], [3, "choiceNomenclatureType"], [3, "selectAcceptedType"], [1, "action-buttons"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Move product", 1, "ml-auto", "mt-auto", 3, "disabled", "click"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 30.25rem)", "dataKey", "id", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "14%"], [2, "width", "10%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "9%"], [1, "text-center", 2, "width", "11%"], [1, "text-center", 2, "width", "13%"], [1, "text-center", 2, "width", "6%"], [1, "text-center", 2, "width", "12%"], [3, "pSelectableRow", "pRowToggler"], [1, "text-center", 2, "width", "5%"], ["pEditableColumn", "", 1, "text-center", 2, "width", "11%"], [4, "ngIf", "ngIfElse"], ["productLocator", ""], ["productWarehouse", ""], ["pTemplate", "input"], ["pTemplate", "output"], ["pInputText", "", "type", "number", "step", "1", 2, "width", "100%", "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "d-block"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function PhysicalInventoryProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Physical Inventory Products of Warehouses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PhysicalInventoryProductsComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, PhysicalInventoryProductsComponent_ng_container_7_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhysicalInventoryProductsComponent_Template_button_click_9_listener() { return ctx.onOpenAddProductModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhysicalInventoryProductsComponent_Template_button_click_10_listener() { return ctx.onComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhysicalInventoryProductsComponent_Template_button_click_11_listener() { return ctx.onRemovePhysicalInventory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "form", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 13)(35, "div", 12)(36, "div", 21)(37, "div", 14)(38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "pek-warehouse-picker", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectWarehouse", function PhysicalInventoryProductsComponent_Template_pek_warehouse_picker_selectWarehouse_40_listener($event) { return ctx.onSelectWarehouse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 21)(42, "div", 14)(43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "pek-locator-picker", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectLocator", function PhysicalInventoryProductsComponent_Template_pek_locator_picker_selectLocator_45_listener($event) { return ctx.onSelectLocator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 13)(47, "div", 12)(48, "div", 21)(49, "div", 14)(50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "pek-nomenclature-type-picker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("choiceNomenclatureType", function PhysicalInventoryProductsComponent_Template_pek_nomenclature_type_picker_choiceNomenclatureType_52_listener($event) { return ctx.onSelectNomenclatureType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 21)(54, "div", 14)(55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Accepted Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "pek-accepted-type-picker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectAcceptedType", function PhysicalInventoryProductsComponent_Template_pek_accepted_type_picker_selectAcceptedType_57_listener($event) { return ctx.onSelectAcceptedByInvoices($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 13)(59, "div", 26)(60, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PhysicalInventoryProductsComponent_Template_button_click_60_listener() { return ctx.onMoveProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 28)(62, "p-table", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function PhysicalInventoryProductsComponent_Template_p_table_selectionChange_62_listener($event) { return ctx.selectedInventoryProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, PhysicalInventoryProductsComponent_ng_template_64_Template, 21, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, PhysicalInventoryProductsComponent_ng_template_65_Template, 31, 20, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, PhysicalInventoryProductsComponent_ng_template_66_Template, 4, 3, "ng-template", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, PhysicalInventoryProductsComponent_div_67_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, PhysicalInventoryProductsComponent_div_68_Template, 5, 4, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, PhysicalInventoryProductsComponent_div_69_Template, 3, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingCurrentInventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoadingCurrentInventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", ctx.isCompleting)("disabled", !ctx.currentInventory || ctx.isLoadingCurrentInventory && ctx.currentInventory.status === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", ctx.isCancelation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("acceptedWarehouseIds", ctx.warehousesIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("warehouseId", ctx.searchForm.get("warehouse").value)("isAllLocators", false)("isDisabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.selectedInventoryProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedInventoryProduct)("value", ctx.inventoryProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingInventoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_19__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_21__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_22__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_22__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_22__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_22__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_22__.CellEditor, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_23__.Paginator, _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_3__.WarehousePickerComponent, _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_4__.LocatorPickerComponent, _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_5__.NomenclatureTypePickerComponent, _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_6__.AcceptedTypePickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaHlzaWNhbC1pbnZlbnRvcnktcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 53876:
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouse/components/physical-inventory/physical-inventory.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalInventoryComponent": () => (/* binding */ PhysicalInventoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 82242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ 42722);











function PhysicalInventoryComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function PhysicalInventoryComponent_ng_template_17_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhysicalInventoryComponent_ng_template_17_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhysicalInventoryComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 23)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PhysicalInventoryComponent_ng_template_17_span_9_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PhysicalInventoryComponent_ng_template_17_span_10_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const physicalInventory_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", physicalInventory_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r2.searchForm.get("page").value - 1) * 10 + i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](physicalInventory_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 6, physicalInventory_r7 == null ? null : physicalInventory_r7.system_creation_date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", physicalInventory_r7.status === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", physicalInventory_r7.status === "0");
} }
function PhysicalInventoryComponent_ng_template_18_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 27);
} }
function PhysicalInventoryComponent_ng_template_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhysicalInventoryComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PhysicalInventoryComponent_ng_template_18_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PhysicalInventoryComponent_ng_template_18_span_3_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
function PhysicalInventoryComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhysicalInventoryComponent_ng_template_19_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhysicalInventoryComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhysicalInventoryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "p-paginator", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onPageChange", function PhysicalInventoryComponent_div_21_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r6.countPhysicalInventory);
} }
const _c0 = function (a0) { return [a0]; };
class PhysicalInventoryComponent {
    constructor(fb, physicalInventoryService) {
        this.fb = fb;
        this.physicalInventoryService = physicalInventoryService;
        this.isLoading = true;
        this.physicalInventories = [];
        this.countPhysicalInventory = 0;
        this.searchForm = this.fb.group({
            page: [1]
        });
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true }
        ];
    }
    ngOnInit() {
        this.getPhysicalInventoryForPagination();
    }
    getPhysicalInventoryForPagination() {
        this.physicalInventoryService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(physicalInventories => {
            this.physicalInventories = physicalInventories.results;
            this.countPhysicalInventory = physicalInventories.count;
            this.isLoading = false;
        });
    }
    searchPhysicalInventory() {
        this.isLoading = true;
        this.selectedPhysicalInventory = null;
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true }
        ];
        this.getPhysicalInventoryForPagination();
    }
    onCreatePhysicalInventory() {
        this.physicalInventoryService.openCreatePhysicalInventoryModal().subscribe(response => {
            if (response) {
                this.searchPhysicalInventory();
            }
        });
    }
    paginate(evt) {
        this.searchForm.get('page').patchValue(evt.page + 1);
        this.searchPhysicalInventory();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
PhysicalInventoryComponent.ɵfac = function PhysicalInventoryComponent_Factory(t) { return new (t || PhysicalInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__.PhysicalInventoryService)); };
PhysicalInventoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PhysicalInventoryComponent, selectors: [["pek-physical-inventory"]], decls: 22, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Physical Inventory", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__block"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Inventory Products", 1, "ml-auto", 3, "routerLink", "disabled"], [1, "page__table"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 4, "ngIf"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "25%"], [1, "text-center", 2, "width", "35%"], [3, "pSelectableRow"], [4, "ngIf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all"]], template: function PhysicalInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Physical Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhysicalInventoryComponent_Template_button_click_7_listener() { return ctx.onCreatePhysicalInventory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "p-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function PhysicalInventoryComponent_Template_p_table_selectionChange_14_listener($event) { return ctx.selectedPhysicalInventory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PhysicalInventoryComponent_ng_template_16_Template, 9, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PhysicalInventoryComponent_ng_template_17_Template, 11, 9, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PhysicalInventoryComponent_ng_template_18_Template, 4, 3, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PhysicalInventoryComponent_ng_template_19_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PhysicalInventoryComponent_div_20_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PhysicalInventoryComponent_div_21_Template, 5, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.selectedPhysicalInventory == null ? null : ctx.selectedPhysicalInventory.id))("disabled", !ctx.selectedPhysicalInventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedPhysicalInventory)("value", ctx.physicalInventories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.physicalInventories.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_11__.Paginator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaHlzaWNhbC1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 57087:
/*!********************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/production-lists/list-product-print-item/list-product-print-item.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProductPrintItemComponent": () => (/* binding */ ListProductPrintItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function ListProductPrintItemComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((product_r2.nomenclature == null ? null : product_r2.nomenclature.category == null ? null : product_r2.nomenclature.category.unit_of_measure == null ? null : product_r2.nomenclature.category.unit_of_measure.symbol) ? product_r2.nomenclature == null ? null : product_r2.nomenclature.category == null ? null : product_r2.nomenclature.category.unit_of_measure == null ? null : product_r2.nomenclature.category.unit_of_measure.symbol : "Pcs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.total_required_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.available_on_locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.statuses[product_r2.status]);
} }
function ListProductPrintItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Req Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListProductPrintItemComponent_div_0_div_18_Template, 15, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Production List ", ctx_r0.product.data.nomenclature.name, " (", ctx_r0.product.data.list, ") ", ctx_r0.product.data.nomenclature.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.product.children);
} }
class ListProductPrintItemComponent {
    constructor() {
        this.statuses = { '0': 'Not Processed', '1': 'Completed', '2': 'Deficit', '3': 'Reserved' };
    }
    ngOnInit() {
    }
}
ListProductPrintItemComponent.ɵfac = function ListProductPrintItemComponent_Factory(t) { return new (t || ListProductPrintItemComponent)(); };
ListProductPrintItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListProductPrintItemComponent, selectors: [["app-list-product-print-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "list-product-print-item", 4, "ngIf"], [1, "list-product-print-item"], [1, "list-product-print-item__row"], [1, "list-product-print-item__col"], ["class", "list-product-print-item__row", 4, "ngFor", "ngForOf"]], template: function ListProductPrintItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListProductPrintItemComponent_div_0_Template, 19, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.children.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".list-product-print-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.list-product-print-item__row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border: 1px solid #000;\n  border-bottom: none;\n}\n.list-product-print-item__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #000;\n}\n.list-product-print-item__col[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(1) {\n  width: 5%;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(2) {\n  width: 20%;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(3) {\n  width: 25%;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(4) {\n  width: 5%;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(5) {\n  width: 15%;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(6) {\n  width: 15%;\n}\n.list-product-print-item__col[_ngcontent-%COMP%]:nth-child(7) {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcHJvZHVjdC1wcmludC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLDZCQUFBO0FBQU47QUFJRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQUtJO0VBQ0UsVUFBQTtBQUhOO0FBTUk7RUFDRSxVQUFBO0FBSk47QUFPSTtFQUNFLFNBQUE7QUFMTjtBQVFJO0VBQ0UsVUFBQTtBQU5OO0FBU0k7RUFDRSxVQUFBO0FBUE47QUFVSTtFQUNFLFVBQUE7QUFSTiIsImZpbGUiOiJsaXN0LXByb2R1Y3QtcHJpbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LXByb2R1Y3QtcHJpbnQtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgJl9fcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgd2lkdGg6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB3aWR0aDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg3KSB7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 70559:
/*!****************************************************************************************************!*\
  !*** ./src/app/warehouse/components/production-lists/production-list/production-list.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductionListComponent": () => (/* binding */ ProductionListComponent),
/* harmony export */   "TreePrint": () => (/* binding */ TreePrint)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/list.service */ 89307);
/* harmony import */ var _services_list_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/list-product.service */ 31741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);









function ProductionListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" (", ctx_r0.list.id, ") ", ctx_r0.list.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", ctx_r0.list.nomenclature.name, ") ");
} }
function ProductionListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ProductionListComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.makeDeficit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductionListComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.makeRequestsForAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductionListComponent_ng_container_27_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_27_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.showImages(ctx_r16.selectedNode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_27_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.editQuantity(ctx_r18.selectedNode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_27_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.cancelQuantities(ctx_r19.selectedNode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r12.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r12.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r12.selectedNode);
} }
function ProductionListComponent_ng_container_27_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 33)(4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_27_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20._location.back()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Total Req Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Req Qty Per One");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Free Wh Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Reserved Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Actual Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
const _c0 = function (a1) { return ["/warehouse/production-lists/", a1]; };
function ProductionListComponent_ng_container_27_ng_template_5_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", product_r22.list_url && (product_r22.status == 1 || product_r22.status == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, product_r22.list));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature == null ? null : product_r22.nomenclature.code, " ");
} }
function ProductionListComponent_ng_container_27_ng_template_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature == null ? null : product_r22.nomenclature.code, " ");
} }
function ProductionListComponent_ng_container_27_ng_template_5_b_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2, a3) { return { "badge_secondary": a0, "badge_success": a1, "badge_danger": a2, "badge_reserved": a3 }; };
function ProductionListComponent_ng_container_27_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 41)(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductionListComponent_ng_container_27_ng_template_5_a_4_Template, 2, 6, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductionListComponent_ng_container_27_ng_template_5_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductionListComponent_ng_container_27_ng_template_5_b_7_Template, 2, 0, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 40)(24, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r22 = ctx.$implicit;
    const i_r23 = ctx.rowIndex;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deficit", (product_r22.descendants_has_deficit_accepted || product_r22.is_deficit_accepted) && product_r22.total_required_quantity > product_r22.actual_quantity)("free-products", (product_r22.has_free_warehouse_products || product_r22.descendants_has_free_warehouse_products) && product_r22.total_required_quantity > product_r22.actual_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", product_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r22.list_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !product_r22.list_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r22.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" (", product_r22.id, ") ", product_r22.nomenclature == null ? null : product_r22.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r22.total_required_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r22.required_quantity_per_one);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r22.warehouse_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r22.reserved_quantity ? product_r22.reserved_quantity : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r22.actual_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (product_r22.nomenclature.category == null ? null : product_r22.nomenclature.category.unit_of_measure == null ? null : product_r22.nomenclature.category.unit_of_measure.symbol) ? product_r22.nomenclature == null ? null : product_r22.nomenclature.category == null ? null : product_r22.nomenclature.category.unit_of_measure == null ? null : product_r22.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r22.available_on_locator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](20, _c1, product_r22.status == 0, product_r22.status == 1, product_r22.status == 2, product_r22.status == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.statuses[product_r22.status], " ");
} }
function ProductionListComponent_ng_container_27_ng_template_6_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 49);
} }
function ProductionListComponent_ng_container_27_ng_template_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductionListComponent_ng_container_27_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductionListComponent_ng_container_27_ng_template_6_i_2_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductionListComponent_ng_container_27_ng_template_6_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r15.isLoading);
} }
function ProductionListComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ProductionListComponent_ng_container_27_Template_p_table_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.selectedNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductionListComponent_ng_container_27_ng_template_3_Template, 4, 3, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductionListComponent_ng_container_27_ng_template_4_Template, 25, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductionListComponent_ng_container_27_ng_template_5_Template, 26, 25, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductionListComponent_ng_container_27_ng_template_6_Template, 4, 3, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("value", ctx_r4.products)("selection", ctx_r4.selectedNode);
} }
function ProductionListComponent_ng_container_28_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_28_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.expandAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_28_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.collapseAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_28_ng_template_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.showImages(ctx_r40.selectedNodeTree.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_28_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.editQuantity(ctx_r41.selectedNodeTree.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_28_ng_template_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.cancelQuantities(ctx_r42.selectedNodeTree.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r33.selectedNodeTree);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r33.selectedNodeTree);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r33.selectedNodeTree);
} }
function ProductionListComponent_ng_container_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 54)(2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_ng_container_28_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43._location.back()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Total Req Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Req Qty Per One");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Free Wh Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Reserved Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Actual Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ProductionListComponent_ng_container_28_ng_template_4_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", rowData_r46.list_url && (rowData_r46.status == 1 || rowData_r46.status == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, rowData_r46.list));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r46.nomenclature.code, " ");
} }
function ProductionListComponent_ng_container_28_ng_template_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.nomenclature.code);
} }
function ProductionListComponent_ng_container_28_ng_template_4_b_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductionListComponent_ng_container_28_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 55)(1, "td", 56)(2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-treeTableToggler", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductionListComponent_ng_container_28_ng_template_4_a_4_Template, 2, 6, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductionListComponent_ng_container_28_ng_template_4_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductionListComponent_ng_container_28_ng_template_4_b_7_Template, 2, 0, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 40)(24, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const rowNode_r45 = ctx.$implicit;
    const rowData_r46 = ctx.rowData;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deficit", (rowData_r46.descendants_has_deficit_accepted || rowData_r46.is_deficit_accepted) && rowData_r46.total_required_quantity > rowData_r46.actual_quantity)("free-products", (rowData_r46.has_free_warehouse_products || rowData_r46.descendants_has_free_warehouse_products) && rowData_r46.total_required_quantity > rowData_r46.actual_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ttRow", rowNode_r45)("ttSelectableRow", rowNode_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled-toggler", rowData_r46.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowNode", rowNode_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowData_r46.list_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rowData_r46.list_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowData_r46.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" (", rowData_r46.id, ") ", rowData_r46.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.total_required_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.required_quantity_per_one);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.warehouse_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.reserved_quantity ? rowData_r46.reserved_quantity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.actual_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((rowData_r46.nomenclature.category == null ? null : rowData_r46.nomenclature.category.unit_of_measure == null ? null : rowData_r46.nomenclature.category.unit_of_measure.symbol) ? rowData_r46.nomenclature == null ? null : rowData_r46.nomenclature.category == null ? null : rowData_r46.nomenclature.category.unit_of_measure == null ? null : rowData_r46.nomenclature.category.unit_of_measure.symbol : "Pcs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r46.available_on_locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](23, _c1, rowData_r46.status == 0, rowData_r46.status == 1, rowData_r46.status == 2, rowData_r46.status == 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r35.statuses[rowData_r46.status], " ");
} }
function ProductionListComponent_ng_container_28_ng_template_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 49);
} }
function ProductionListComponent_ng_container_28_ng_template_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductionListComponent_ng_container_28_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductionListComponent_ng_container_28_ng_template_5_i_2_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductionListComponent_ng_container_28_ng_template_5_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r36.isLoadingTree);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r36.isLoadingTree);
} }
function ProductionListComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-treeTable", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ProductionListComponent_ng_container_28_Template_p_treeTable_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r55.selectedNodeTree = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductionListComponent_ng_container_28_ng_template_2_Template, 6, 3, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductionListComponent_ng_container_28_ng_template_3_Template, 23, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductionListComponent_ng_container_28_ng_template_4_Template, 26, 28, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductionListComponent_ng_container_28_ng_template_5_Template, 4, 3, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r5.tree)("selection", ctx_r5.selectedNodeTree);
} }
function ProductionListComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-list-product-print-item", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r58);
} }
function ProductionListComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductionListComponent_div_29_div_2_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.productsForPrint);
} }
class TreePrint {
}
class ProductionListComponent {
    constructor(route, modalService, listService, listProductService, router, _location) {
        this.route = route;
        this.modalService = modalService;
        this.listService = listService;
        this.listProductService = listProductService;
        this.router = router;
        this._location = _location;
        this.mode = 'hierarchy';
        this.addedTree = [];
        this.isSetAllActualQuantities = false;
        this.isLoading = true;
        this.listId = this.route.snapshot.paramMap.get('id');
        this.statuses = { '0': 'Not Processed', '1': 'Completed', '2': 'Deficit', '3': 'Reserved' };
        this.showComplete = false;
        this.isLoadingTree = true;
        this.isShowPrint = false;
        this.isLoadingListsForPrint = false;
        this.routerHandler$ = router.events.subscribe(res => {
            if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                this.listId = this.route.snapshot.paramMap.get('id');
                this.getAll();
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.routerHandler$.unsubscribe();
    }
    getAll() {
        this.selectedNodeTree = null;
        this.selectedNode = null;
        this.tree = [];
        this.addedTree = [];
        this.copyProducts = [];
        this.products = [];
        this.isLoading = true;
        this.isLoadingTree = true;
        this.listService.getById(+this.listId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(res => {
            this.list = JSON.parse(JSON.stringify(res));
        });
        this.listProductService.get([{ name: 'list', value: this.listId }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(res => {
            this.products = res.filter(x => {
                return x.level > 0;
            });
            this.isSetAllActualQuantities = this.products.every(product => product.status !== '0');
            this.showComplete = true;
            this.products.forEach(element => {
                if (element.actual_quantity === null) {
                    this.showComplete = false;
                }
            });
            let ss = { '0': 3, '1': 1, '2': 2 };
            this.products.sort((a, b) => ss[a.nomenclature.type] - ss[b.nomenclature.type]);
            this.copyProducts = [...this.products];
            this.isLoading = false;
            this.getTree();
        });
    }
    getTree() {
        this.copyProducts.forEach(p => {
            if (p.actual_quantity === null) {
                p.actual_quantity = 0;
            }
        });
        this.addedTree = this.copyProducts.map(p => {
            return {
                data: p,
                children: [],
                expanded: false,
                parent: null,
            };
        });
        const productIds = this.copyProducts.filter(p => p.has_children).map(p => p.list);
        const get = (ids) => {
            this.listProductService.getPartly(ids).subscribe(response => {
                // @ts-ignore
                const newProducts = response.flat();
                newProducts.forEach(p => {
                    if (p.actual_quantity === null) {
                        p.actual_quantity = 0;
                    }
                });
                const newIds = newProducts.filter(p => p.has_children).map(p => p.list);
                this.copyProducts = [...this.copyProducts, ...newProducts];
                if (newIds.length > 0) {
                    get(newIds);
                }
                else {
                    this.generateTree();
                    this.isLoadingTree = false;
                }
            });
        };
        if (productIds.length > 0) {
            get(productIds);
        }
        else {
            this.tree = [...this.addedTree];
            this.isLoadingTree = false;
        }
    }
    generateTree() {
        const getChildren = (nodes) => {
            nodes.forEach(node => {
                const children = this.copyProducts.filter(c => c.parent === node.data.id);
                if (children.length > 0) {
                    node.children = children.map(product => {
                        return {
                            data: product,
                            children: [],
                            expanded: false,
                            parent: node,
                        };
                    });
                    getChildren(node.children);
                }
            });
        };
        getChildren(this.addedTree);
        this.tree = [...this.addedTree];
    }
    printPage() {
        this.productsForPrint = [];
        this.isLoadingListsForPrint = true;
        // const ids = this.products.filter(p => p.list_url).map(p => p.list) as number[];
        this.productsForPrint = this.products.map(p => {
            return {
                children: [],
                data: p,
            };
        });
        this.list.list = this.listId;
        this.productsForPrint.unshift({
            data: this.list,
            children: this.products
        });
        const getProducts = (products) => {
            const ids = products.filter(p => p.list_url).map(p => p.list);
            if (ids.length > 0) {
                this.listProductService.getPartly(ids).subscribe(response => {
                    // @ts-ignore
                    const newProducts = response.flat();
                    newProducts.forEach(product => {
                        if (product.list_url) {
                            this.productsForPrint.push({
                                data: product,
                                children: [],
                            });
                        }
                        const index = this.productsForPrint.findIndex(p => p.data.id === product.parent);
                        this.productsForPrint[index].children.push(product);
                    });
                    getProducts(newProducts.filter(p => p.list_url));
                });
            }
            else {
                this.isShowPrint = true;
                setTimeout(() => {
                    window.print();
                });
            }
        };
        getProducts(this.products);
    }
    setQuantities() {
        if (this.mode === 'list') {
            this.listService.setQuantities(+this.listId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(res => this.getAll());
        }
        else {
            if (!this.selectedNodeTree) {
                this.listService.setQuantities(+this.listId).subscribe(() => {
                    this.getAll();
                });
            }
            else {
                if (this.selectedNodeTree.data.list_url) {
                    this.listService.setQuantities(this.selectedNodeTree.data.list).subscribe(() => {
                        this.getAll();
                    });
                }
            }
        }
    }
    editQuantity(node) {
        this.modalService.editListProduct(node).subscribe(response => {
            console.log(response);
            // if (node.list_url) {
            //   this.getAll();
            // } else {
            if (response.actual_quantity === null) {
                response.actual_quantity = 0;
            }
            const index = this.products.findIndex(p => p.id === response.id);
            this.products[index] = response;
            const find = (nodes) => {
                nodes.forEach(n => {
                    if (n.data.id === response.id) {
                        n.data = response;
                    }
                    else if (n.children.length > 0) {
                        find(n.children);
                    }
                });
            };
            find(this.tree);
            // }
        });
    }
    process() {
        this.modalService.completeList(this.list).subscribe(conf => {
            if (conf) {
                this._location.back();
            }
        });
    }
    makeDeficit() {
        this.modalService.confirm('success').subscribe(res => {
            if (res) {
                this.listService.make_deficit(this.list.id).subscribe(res => {
                    this.getAll();
                });
            }
        });
    }
    makeRequestsForAll() {
        this.listService.makeRequestsForAll(this.list).subscribe();
    }
    showImages(node) {
        console.log(node);
        this.modalService.showImageGallery([], node.nomenclature.id, 1).subscribe();
    }
    cancelQuantities(node) {
        this.modalService.confirm('success').subscribe(res => {
            if (res) {
                const id = node.id;
                this.listService.canceledActualQuantity(id).subscribe(response => {
                    // if (node.list_url) {
                    //   this.getAll();
                    //   node = null;
                    // } else {
                    if (response.actual_quantity === null) {
                        response.actual_quantity = 0;
                    }
                    const index = this.products.findIndex(p => p.id === response.id);
                    this.products[index] = response;
                    const find = (nodes) => {
                        nodes.forEach(n => {
                            if (n.data.id === response.id) {
                                n.data = response;
                            }
                            else if (n.children.length > 0) {
                                find(n.children);
                            }
                        });
                    };
                    find(this.tree);
                    // }
                });
            }
        });
    }
    expandAll() {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.tree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, true);
        });
        this.tree = temp;
    }
    collapseAll() {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.tree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, false);
        });
        this.tree = temp;
        this.selectedNodeTree = null;
    }
    expandCollapseRecursive(node, isExpand) {
        if (node.data.status != 1) {
            node.expanded = isExpand;
            if (node.children) {
                node.children.forEach(childNode => {
                    this.expandCollapseRecursive(childNode, isExpand);
                });
            }
        }
    }
}
ProductionListComponent.ɵfac = function ProductionListComponent_Factory(t) { return new (t || ProductionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_list_service__WEBPACK_IMPORTED_MODULE_2__.ListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_list_product_service__WEBPACK_IMPORTED_MODULE_3__.ListProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
ProductionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductionListComponent, selectors: [["pek-production-list"]], decls: 30, vars: 13, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf"], [1, "colors"], [1, "colors__color"], [1, "colors__color-block", "colors__color-block_deficit"], [1, "colors__color-block", "colors__color-block_free-products"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Set Actual Quantities", 1, "mr-2", 3, "disabled", "click"], ["class", "mr-2", "pButton", "", "type", "button", "label", "Make Requests", 3, "click", 4, "ngIf"], ["class", "mr-2", "pButton", "", "type", "button", "label", "Make request for all", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-table", "label", "Hierarchy", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-list", "label", "List", 3, "disabled", "click"], [1, "page__content"], [1, "page__card"], ["class", "print-list-product", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Make Requests", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Make request for all", 1, "mr-2", 3, "click"], ["scrollHeight", "calc(100vh - 350px)", "selectionMode", "single", 3, "scrollable", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Set Actual Quantity", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Cancel Actual Quantities", 3, "disabled", "click"], [1, "text-center", 2, "width", "3%"], [2, "width", "16%"], [1, "back", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "text-center", 2, "width", "8%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "7%"], [1, "text-center", 2, "width", "5%"], [1, "d-print-none", "text-center", 2, "width", "10%"], [3, "pSelectableRow"], [1, "index-header", "text-center", 2, "width", "3%"], [1, "code-column", 2, "width", "16%"], ["class", "list-parent", 3, "routerLink", "disabled", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "list-parent", 3, "routerLink"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["selectionMode", "single", 1, "categories-tree", 3, "value", "selection", "selectionChange"], ["pButton", "", "type", "button", "label", "Expand All", 1, "ml-auto", "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Collapse All", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "mr-2", 3, "disabled", "click"], [2, "padding-left", "16px", "width", "19%"], [3, "ttRow", "ttSelectableRow"], [2, "width", "19%"], [1, "toggle-row"], [3, "rowNode"], ["class", "list-parent", 3, "disabled", "routerLink", 4, "ngIf"], [1, "text-center", "p-5"], [1, "print-list-product"], [1, "print-list-product__list"], ["class", "print-list-product__item", 4, "ngFor", "ngForOf"], [1, "print-list-product__item"], [3, "product"]], template: function ProductionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Production List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductionListComponent_ng_container_6_Template, 4, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductionListComponent_ng_container_7_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Deficit Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Free Warehouse Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9)(18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_Template_button_click_18_listener() { return ctx.printPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_Template_button_click_19_listener() { return ctx.process(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_Template_button_click_20_listener() { return ctx.setQuantities(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProductionListComponent_button_21_Template, 1, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProductionListComponent_button_22_Template, 1, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_Template_button_click_23_listener() { return ctx.mode = "hierarchy"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductionListComponent_Template_button_click_24_listener() { return ctx.mode = "list"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17)(26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProductionListComponent_ng_container_27_Template, 7, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ProductionListComponent_ng_container_28_Template, 6, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductionListComponent_div_29_Template, 3, 1, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.list == null ? null : ctx.list.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.selectedNodeTree && !ctx.selectedNodeTree.data.list_url || (ctx.list == null ? null : ctx.list.completed));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.list && !(ctx.list == null ? null : ctx.list.completed) && !(ctx.list == null ? null : ctx.list.is_deficit_requested) && ctx.isSetAllActualQuantities);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.list && !(ctx.list == null ? null : ctx.list.completed) && !(ctx.list == null ? null : ctx.list.is_deficit_requested) && ctx.isSetAllActualQuantities);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.mode === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.mode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowPrint);
    } }, styles: [".colors[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-left: 1rem;\n}\n.colors__color[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.colors__color-block[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n}\n.colors__color-block_free-products[_ngcontent-%COMP%] {\n  background: #e1efe2;\n}\n.colors__color-block_deficit[_ngcontent-%COMP%] {\n  background: #f5dfe1;\n}\n.free-products[_ngcontent-%COMP%] {\n  background: #e1efe2 !important;\n}\n.deficit[_ngcontent-%COMP%] {\n  background: #f5dfe1 !important;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n.back[_ngcontent-%COMP%] {\n  background: transparent;\n  cursor: pointer;\n  color: #343a40;\n  position: relative;\n  margin-right: 0.25rem;\n}\n.back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.disabled-toggler[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.list-parent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: underline;\n}\n.print-list-product[_ngcontent-%COMP%] {\n  z-index: 1000;\n  background: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: none;\n}\n@media print {\n  .print-list-product[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0FBQU47QUFHSTtFQUNFLG1CQUFBO0FBRE47QUFNQTtFQUNFLDhCQUFBO0FBSEY7QUFNQTtFQUNFLDhCQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUhGO0FBTUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUhGO0FBS0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFPQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpGO0FBT0E7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBSkY7QUFPQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQUpGO0FBTUU7RUFURjtJQVVJLGNBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InByb2R1Y3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cclxuICAmX19jb2xvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NvbG9yLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuXHJcbiAgICAmX2ZyZWUtcHJvZHVjdHMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTFlZmUyO1xyXG4gICAgfVxyXG5cclxuICAgICZfZGVmaWNpdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWRmZTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZnJlZS1wcm9kdWN0cyB7XHJcbiAgYmFja2dyb3VuZDogI2UxZWZlMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVmaWNpdCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZGZlMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlZC10b2dnbGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udG9nZ2xlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5saXN0LXBhcmVudCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnByaW50LWxpc3QtcHJvZHVjdCB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 19144:
/*!*************************************************************************************!*\
  !*** ./src/app/warehouse/components/production-lists/production-lists.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductionListsComponent": () => (/* binding */ ProductionListsComponent),
/* harmony export */   "ViewMode": () => (/* binding */ ViewMode)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/list.service */ 89307);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pickers/product-structure-category-picker/product-structure-category-picker.component */ 77506);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pickers/product-category-picker/product-category-picker.component */ 15051);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ 32547);


















const _c0 = ["paginator"];
const _c1 = ["searchBoxName"];
const _c2 = ["searchBoxCode"];
function ProductionListsComponent_ng_container_59_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Date Of Creation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Sets");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Not Processed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Deficit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Outsource");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Own Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Purchased");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ProductionListsComponent_ng_container_59_ng_template_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", list_r11.locator.name + " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" R: ", list_r11.locator.row, " Col: ", list_r11.locator.column, " Sh: ", list_r11.locator.shelf, " Pl: ", list_r11.locator.place, " ");
} }
function ProductionListsComponent_ng_container_59_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 43)(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ProductionListsComponent_ng_container_59_ng_template_5_ng_container_13_Template, 4, 5, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deficit", list_r11.descendants_has_deficit_accepted)("free-products", list_r11.descendants_has_free_warehouse_products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", list_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("(", list_r11.id, ") ", list_r11.nomenclature.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 18, list_r11.created, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.sets_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", list_r11.locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.statistics.total_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.statistics.not_processed_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.statistics.deficit_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.statistics.outsource_production_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.statistics.own_production_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](list_r11.statistics.purchased_ordered_count);
} }
function ProductionListsComponent_ng_container_59_ng_template_6_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 46);
} }
function ProductionListsComponent_ng_container_59_ng_template_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProductionListsComponent_ng_container_59_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProductionListsComponent_ng_container_59_ng_template_6_i_2_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductionListsComponent_ng_container_59_ng_template_6_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
} }
function ProductionListsComponent_ng_container_59_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProductionListsComponent_ng_container_59_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48)(1, "p-paginator", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onPageChange", function ProductionListsComponent_ng_container_59_div_8_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductionListsComponent_ng_container_59_div_8_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hide", ctx_r9.lists.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r9.count);
} }
function ProductionListsComponent_ng_container_59_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductionListsComponent_ng_container_59_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ProductionListsComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 28)(2, "p-table", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ProductionListsComponent_ng_container_59_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.selectedList = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProductionListsComponent_ng_container_59_ng_template_4_Template, 25, 0, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProductionListsComponent_ng_container_59_ng_template_5_Template, 26, 21, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProductionListsComponent_ng_container_59_ng_template_6_Template, 4, 3, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ProductionListsComponent_ng_container_59_div_7_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProductionListsComponent_ng_container_59_div_8_Template, 5, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProductionListsComponent_ng_container_59_div_9_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx_r2.selectedList)("value", ctx_r2.lists);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isShowAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isShowAll);
} }
function ProductionListsComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " In development ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
const _c3 = function (a0) { return [a0]; };
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["LIST"] = 0] = "LIST";
    ViewMode[ViewMode["HIERARCHY"] = 1] = "HIERARCHY";
})(ViewMode || (ViewMode = {}));
class ProductionListsComponent {
    constructor(modalService, listService, adapterService, fb) {
        this.modalService = modalService;
        this.listService = listService;
        this.adapterService = adapterService;
        this.fb = fb;
        this.isShowAll = false;
        this.isStartOnePage = false;
        this.isLoading = true;
        this.viewModeType = ViewMode;
        this.viewMode = ViewMode.LIST;
        this.queryKey = 'name:/code:/responsible_employee_id:null/date_created_after:null/date_created_before:null/category_ids:null';
        this.searchForm = this.fb.group({
            page: [1],
            name: [''],
            code: [''],
            responsible_employee_id: [null],
            date_created_after: [null],
            date_created_before: [null],
            category_ids: null,
            root_categories: null,
        });
        this.lists = [];
        this.count = 0;
        this.query = [
            { name: 'paginated', value: true },
            { name: 'page', value: this.searchForm.get('page').value },
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.searchBoxName.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.selectedList = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => this.searchBoxName.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(350)).subscribe(() => {
            this.searchLists();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.searchBoxCode.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.selectedList = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => this.searchBoxCode.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(350)).subscribe(() => {
            this.searchLists();
        });
    }
    ngOnInit() {
        this.getProductionListsForPagination();
    }
    getProductionListsForPagination() {
        this.listService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(lists => {
            this.lists = lists.results;
            this.count = lists.count;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    getProductionLists() {
        this.listService.get(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(lists => {
            this.lists = lists;
            this.count = lists.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    searchLists() {
        this.isLoading = true;
        this.destroy$.next(true);
        this.selectedList = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/responsible_employee_id:${this.searchForm.get('responsible_employee_id').value}/date_created_after:${this.searchForm.get('date_created_after').value}/date_created_before:${this.searchForm.get('date_created_before').value}/category_ids:${this.searchForm.get('category_ids').value}`;
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
            this.searchForm.get('page').patchValue(1);
            this.isStartOnePage = true;
        }
        this.query = [];
        if (!this.isShowAll) {
            this.query = [
                { name: 'paginated', value: 'true' },
                { name: 'page', value: this.searchForm.get('page').value },
            ];
        }
        if (this.searchForm.get('name').value) {
            this.query.push({ name: 'name', value: this.searchForm.get('name').value });
        }
        if (this.searchForm.get('code').value) {
            this.query.push({ name: 'code', value: this.searchForm.get('code').value });
        }
        if (this.searchForm.get('responsible_employee_id').value) {
            this.query.push({ name: 'responsible_employee_id', value: this.searchForm.get('responsible_employee_id').value });
        }
        if (this.searchForm.get('root_categories').value) {
            this.query.push({ name: 'root_categories', value: this.searchForm.get('root_categories').value });
        }
        if (this.searchForm.get('date_created_after').value) {
            this.query.push({
                name: 'date_created_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('date_created_after').value)
            });
        }
        if (this.searchForm.get('date_created_before').value) {
            this.query.push({
                name: 'date_created_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('date_created_before').value)
            });
        }
        if (this.searchForm.get('category_ids').value) {
            this.query.push({ name: 'category_ids', value: this.searchForm.get('category_ids').value });
        }
        if (!this.isShowAll) {
            this.getProductionListsForPagination();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getProductionLists();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.searchLists();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.searchLists();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchLists();
        }
    }
    onSelectProductStructureCategory(ids) {
        if (ids) {
            this.searchForm.get('root_categories').patchValue(ids.join(','));
        }
        else {
            this.searchForm.get('root_categories').patchValue('');
        }
        this.searchLists();
    }
    onSelectCategory(ids) {
        if (ids) {
            this.searchForm.get('category_ids').patchValue(ids.join(','));
        }
        else {
            this.searchForm.get('category_ids').patchValue('');
        }
        this.searchLists();
    }
    onSelectEmployee(id) {
        this.searchForm.get('responsible_employee_id').patchValue(id);
        this.searchLists();
    }
    onChoiceViewType(mode) {
        this.viewMode = mode;
        this.selectedList = null;
    }
    onSetListLocator() {
        this.listService.openSetProductionListLocatorModal(this.selectedList.id).subscribe(response => {
            if (response) {
                this.searchLists();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
ProductionListsComponent.ɵfac = function ProductionListsComponent_Factory(t) { return new (t || ProductionListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_list_service__WEBPACK_IMPORTED_MODULE_1__.ListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_2__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder)); };
ProductionListsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductionListsComponent, selectors: [["pek-production-lists"]], viewQuery: function ProductionListsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
    } }, decls: 61, vars: 19, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "colors"], [1, "colors__color"], [1, "colors__color-block", "colors__color-block_deficit"], [1, "colors__color-block", "colors__color-block_free-products"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-table", "label", "Hierarchy", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-list", "label", "List", 3, "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "physical-inventory-products__form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], [3, "isAllIds", "choiceCategoryFolAllIds"], ["formControlName", "date_created_after", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], ["formControlName", "date_created_before", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], [1, "action-buttons"], ["target", "_blank", "pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Production List", 1, "ml-auto", "mt-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Set List Locator", 1, "mt-auto", 3, "disabled", "click"], [4, "ngIf"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 30.25rem)", "dataKey", "id", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "text-center", 2, "width", "5%"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "6%"], [2, "width", "9%"], [1, "text-center", 2, "width", "7%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function ProductionListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Production Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Deficit Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Free Warehouse Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductionListsComponent_Template_button_click_16_listener() { return ctx.onChoiceViewType(ctx.viewModeType.HIERARCHY); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductionListsComponent_Template_button_click_17_listener() { return ctx.onChoiceViewType(ctx.viewModeType.LIST); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "form", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 15)(29, "div", 16)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 15)(35, "div", 16)(36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "pek-product-category-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("choiceCategoryFolAllIds", function ProductionListsComponent_Template_pek_product_category_picker_choiceCategoryFolAllIds_38_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 15)(40, "div", 16)(41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Product Structure Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "pek-product-structure-category-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("choiceCategoryFolAllIds", function ProductionListsComponent_Template_pek_product_structure_category_picker_choiceCategoryFolAllIds_43_listener($event) { return ctx.onSelectProductStructureCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 15)(45, "div", 16)(46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Created Date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p-calendar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProductionListsComponent_Template_p_calendar_ngModelChange_48_listener() { return ctx.searchLists(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 15)(50, "div", 16)(51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Created Date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p-calendar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProductionListsComponent_Template_p_calendar_ngModelChange_53_listener() { return ctx.searchLists(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 15)(56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductionListsComponent_Template_button_click_58_listener() { return ctx.onSetListLocator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ProductionListsComponent_ng_container_59_Template, 10, 7, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ProductionListsComponent_ng_container_60_Template, 2, 0, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.viewMode === ctx.viewModeType.HIERARCHY);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.viewMode === ctx.viewModeType.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isAllIds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isAllIds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx.selectedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c3, ctx.selectedList == null ? null : ctx.selectedList.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModeType.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModeType.HIERARCHY);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryPickerComponent, primeng_table__WEBPACK_IMPORTED_MODULE_19__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_20__.Paginator, _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_5__.ProductCategoryPickerComponent, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.colors[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-left: 1rem;\n}\n\n.colors__color[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.colors__color-block[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n}\n\n.colors__color-block_free-products[_ngcontent-%COMP%] {\n  background: #e1efe2;\n}\n\n.colors__color-block_deficit[_ngcontent-%COMP%] {\n  background: #f5dfe1;\n}\n\n.free-products[_ngcontent-%COMP%] {\n  background: #e1efe2 !important;\n}\n\n.deficit[_ngcontent-%COMP%] {\n  background: #f5dfe1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rpb24tbGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUk7RUFDRSxtQkFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFNQTtFQUNFLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGIiwiZmlsZSI6InByb2R1Y3Rpb24tbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbG9ycyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcblxyXG4gICZfX2NvbG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fY29sb3ItYmxvY2sge1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG5cclxuICAgICZfZnJlZS1wcm9kdWN0cyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlMWVmZTI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9kZWZpY2l0IHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y1ZGZlMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mcmVlLXByb2R1Y3RzIHtcclxuICBiYWNrZ3JvdW5kOiAjZTFlZmUyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZWZpY2l0IHtcclxuICBiYWNrZ3JvdW5kOiAjZjVkZmUxICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 29629:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-categories/warehouse-categories.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseCategoriesComponent": () => (/* binding */ WarehouseCategoriesComponent)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 38163);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/categories.service */ 67943);
/* harmony import */ var _shared_services_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/tree.service */ 66106);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);












function WarehouseCategoriesComponent_ng_template_12_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Choose the Category to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseCategoriesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseCategoriesComponent_ng_template_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.up()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseCategoriesComponent_ng_template_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.down()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WarehouseCategoriesComponent_ng_template_12_p_3_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-menubar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseCategoriesComponent_ng_template_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onExpandAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseCategoriesComponent_ng_template_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.onCollapseAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.selectedCategory)("loading", ctx_r0.isMovingUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.selectedCategory)("loading", ctx_r0.isMovingDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r0.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r0.menuItems);
} }
function WarehouseCategoriesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Unit of Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function WarehouseCategoriesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-treeTableToggler", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r10 = ctx.$implicit;
    const rowData_r11 = ctx.rowData;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ttRow", rowNode_r10)("ttSelectableRow", rowNode_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowNode", rowNode_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.getMeasure(rowData_r11.unit_of_measure), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r11.description, " ");
} }
function WarehouseCategoriesComponent_ng_template_15_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 31);
} }
function WarehouseCategoriesComponent_ng_template_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseCategoriesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WarehouseCategoriesComponent_ng_template_15_i_2_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WarehouseCategoriesComponent_ng_template_15_span_3_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
class WarehouseCategoriesComponent {
    constructor(categoriesService, treeService, modalService) {
        this.categoriesService = categoriesService;
        this.treeService = treeService;
        this.modalService = modalService;
        this.menuItems = [
            {
                label: 'Selected Category',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditCategory()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveCategory()
                    }
                ]
            }
        ];
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.categories = [];
        this.expanseMap = {};
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.categoriesService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(categories => {
            this.categories = categories;
            this.createTree();
            this.isLoading = false;
        });
    }
    onAddCategory() {
        this.categoriesService.createEditWarehouseCategoryModal('create').subscribe(category => {
            if (category) {
                this.categories.unshift(category);
                this.createTree();
            }
        });
    }
    onEditCategory() {
        this.categoriesService.createEditWarehouseCategoryModal('edit', this.selectedCategory.data).subscribe(category => {
            if (category) {
                const index = this.categories.findIndex(t => t.id === this.selectedCategory.data.id);
                this.categories[index] = category;
                this.createTree();
                this.selectedCategory = this.treeService.findSelectedNode(this.selectedCategory, this.categoriesTree);
            }
        });
    }
    onRemoveCategory() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.categoriesService.delete(this.selectedCategory.data).subscribe(() => {
                    const index = this.categories.findIndex(t => t.id === this.selectedCategory.data.id);
                    this.categories.splice(index, 1);
                    this.selectedCategory = null;
                    this.createTree();
                });
            }
        });
    }
    createTree() {
        if (this.categoriesTree) {
            this.treeService.mapExpansion(this.categoriesTree, this.expanseMap);
        }
        this.categoriesTree = this.treeService.createTree(this.categories, this.expanseMap);
    }
    getMeasure(measure) {
        if (measure != null) {
            return measure.name + ' (' + measure.symbol + ')';
        }
        else {
            return '_';
        }
    }
    onExpandAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(this.categoriesTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, true);
        });
        this.categoriesTree = temp;
    }
    onCollapseAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(this.categoriesTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, false);
        });
        this.categoriesTree = temp;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    down() {
        const node = this.selectedCategory;
        const index = this.findIndexToMove(node.data.id);
        if ((index < node.parent?.children.length - 1 || (!node.parent && index < this.categoriesTree.length - 1)) && !this.isMovingDown) {
            this.isMovingDown = true;
            const move = {
                parent: node.parent ? node.parent.children[index + 1].data.id : this.categoriesTree[index + 1].data.id,
                move_to: 'right'
            };
            this.categoriesService.move(move, node.data.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isMovingDown = false)).subscribe(category => {
                const index = this.categories.findIndex(c => c.id === node.data.id);
                this.categories[index] = category;
                this.productMoved(category, 'down');
            });
        }
    }
    up() {
        const node = this.selectedCategory;
        const index = this.findIndexToMove(node.data.id);
        if (index > 0 && !this.isMovingUp) {
            this.isMovingUp = true;
            const move = {
                parent: node.parent ? node.parent.children[index - 1].data.id : this.categoriesTree[index - 1].data.id,
                move_to: 'left'
            };
            this.categoriesService.move(move, node.data.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isMovingUp = false)).subscribe(category => {
                const index = this.categories.findIndex(c => c.id === node.data.id);
                this.categories[index] = category;
                this.productMoved(category, 'up');
            });
        }
    }
    findIndexToMove(selectedNodeId) {
        let index;
        const find = (nodes) => {
            nodes.forEach((node, i) => {
                if (node.data.id === selectedNodeId) {
                    index = i;
                    return;
                }
                else {
                    find(node.children);
                }
            });
        };
        find(this.categoriesTree);
        return index;
    }
    productMoved(category, direction) {
        let findedProduct;
        let parentProduct;
        const findProduct = (nodes) => {
            nodes.forEach(node => {
                if (node.data.id === category.id) {
                    findedProduct = node;
                }
                else {
                    if (node.children && node.children.length > 0) {
                        findProduct(node.children);
                    }
                }
            });
        };
        const findParent = (nodes) => {
            nodes.forEach(node => {
                if (node.data.id === findedProduct.parent.data.id) {
                    parentProduct = node;
                }
                else {
                    if (node.children && node.children.length > 0) {
                        findParent(node.children);
                    }
                }
            });
        };
        findProduct(this.categoriesTree);
        if (findedProduct.parent) {
            findParent(this.categoriesTree);
        }
        else {
            parentProduct = findedProduct;
        }
        if (findedProduct.parent) {
            const index = parentProduct.children.findIndex(child => child.data.id === category.id);
            if (direction === 'down') {
                [parentProduct.children[index], parentProduct.children[index + 1]] = [parentProduct.children[index + 1], parentProduct.children[index]];
            }
            else {
                [parentProduct.children[index], parentProduct.children[index - 1]] = [parentProduct.children[index - 1], parentProduct.children[index]];
            }
        }
        else {
            const index = this.categoriesTree.findIndex(node => node.data.id === category.id);
            if (direction === 'down') {
                [this.categoriesTree[index], this.categoriesTree[index + 1]] = [this.categoriesTree[index + 1], this.categoriesTree[index]];
            }
            else {
                [this.categoriesTree[index], this.categoriesTree[index - 1]] = [this.categoriesTree[index - 1], this.categoriesTree[index]];
            }
        }
        this.categoriesTree = this.categoriesTree.map(node => node);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseCategoriesComponent.ɵfac = function WarehouseCategoriesComponent_Factory(t) { return new (t || WarehouseCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_tree_service__WEBPACK_IMPORTED_MODULE_1__.TreeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
WarehouseCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WarehouseCategoriesComponent, selectors: [["pek-warehouse-categories"]], decls: 16, vars: 5, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Category", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.2rem)", 3, "value", "selection", "scrollable", "selectionChange"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex", "align-items-center"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-up", 1, "p-button-rounded", "mr-2", 3, "disabled", "loading", "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-down", 1, "p-button-rounded", "mr-2", 3, "disabled", "loading", "click"], ["class", "ml-1 subtitle", 4, "ngIf"], [1, "product-structure-bar", "ml-auto", "mr-2", 3, "model"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand All", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse All", 3, "click"], [1, "ml-1", "subtitle"], [2, "padding-left", "52px", "width", "40%"], [1, "text-center", 2, "width", "35%"], [2, "width", "35%"], [3, "ttRow", "ttSelectableRow"], [2, "width", "40%"], [3, "rowNode"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"]], template: function WarehouseCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Warehouse Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseCategoriesComponent_Template_button_click_7_listener() { return ctx.onAddCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-treeTable", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function WarehouseCategoriesComponent_Template_p_treeTable_selectionChange_11_listener($event) { return ctx.selectedCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WarehouseCategoriesComponent_ng_template_12_Template, 7, 8, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WarehouseCategoriesComponent_ng_template_13_Template, 7, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WarehouseCategoriesComponent_ng_template_14_Template, 9, 6, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WarehouseCategoriesComponent_ng_template_15_Template, 4, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.categoriesTree)("selection", ctx.selectedCategory)("scrollable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTSelectableRow, primeng_menubar__WEBPACK_IMPORTED_MODULE_13__.Menubar, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 33598:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseIsolatorInvoicesComponent": () => (/* binding */ WarehouseIsolatorInvoicesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/icons/module-icon/module-icon.component */ 73237);










function WarehouseIsolatorInvoicesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} }
function WarehouseIsolatorInvoicesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Not Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function WarehouseIsolatorInvoicesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.passed_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.not_passed_quantity);
} }
function WarehouseIsolatorInvoicesComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 22);
} }
function WarehouseIsolatorInvoicesComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorInvoicesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseIsolatorInvoicesComponent_ng_template_14_i_2_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WarehouseIsolatorInvoicesComponent_ng_template_14_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseIsolatorInvoicesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseIsolatorInvoicesComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorInvoicesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseIsolatorInvoicesComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class WarehouseIsolatorInvoicesComponent {
    constructor(route, invoiceProductService) {
        this.route = route;
        this.invoiceProductService = invoiceProductService;
        this.isLoading = true;
        this.invoiceProducts = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => this.invoiceProductService.get([
            { name: 'invoice', value: id },
            { name: 'not_passed_quantity__gt', value: 0 }
        ])), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(invoiceProducts => {
            this.invoiceProducts = invoiceProducts;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseIsolatorInvoicesComponent.ɵfac = function WarehouseIsolatorInvoicesComponent_Factory(t) { return new (t || WarehouseIsolatorInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceProductService)); };
WarehouseIsolatorInvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WarehouseIsolatorInvoicesComponent, selectors: [["pek-warehouse-isolator-invoices"]], decls: 17, vars: 7, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "value"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-1"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseIsolatorInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Invoice Isolator Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, WarehouseIsolatorInvoicesComponent_ng_template_11_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, WarehouseIsolatorInvoicesComponent_ng_template_12_Template, 11, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WarehouseIsolatorInvoicesComponent_ng_template_13_Template, 11, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WarehouseIsolatorInvoicesComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WarehouseIsolatorInvoicesComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WarehouseIsolatorInvoicesComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("paginator", ctx.invoiceProducts.length > 0)("rows", 10)("value", ctx.invoiceProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.invoiceProducts.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtaXNvbGF0b3ItaW52b2ljZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 59813:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-isolator/components/warehouse-isolator-orders/warehouse-isolator-orders.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseIsolatorOrdersComponent": () => (/* binding */ WarehouseIsolatorOrdersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/icons/module-icon/module-icon.component */ 73237);










function WarehouseIsolatorOrdersComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} }
function WarehouseIsolatorOrdersComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Not Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function WarehouseIsolatorOrdersComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.passed_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r7.not_passed_quantity);
} }
function WarehouseIsolatorOrdersComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 22);
} }
function WarehouseIsolatorOrdersComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorOrdersComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseIsolatorOrdersComponent_ng_template_14_i_2_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WarehouseIsolatorOrdersComponent_ng_template_14_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseIsolatorOrdersComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseIsolatorOrdersComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorOrdersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseIsolatorOrdersComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class WarehouseIsolatorOrdersComponent {
    constructor(route, orderProductService) {
        this.route = route;
        this.orderProductService = orderProductService;
        this.isLoading = true;
        this.orderProducts = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => this.orderProductService.get([
            { name: 'not_passed_quantity__gt', value: '0' },
            { name: 'order', value: id }
        ])), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(orderProducts => {
            this.orderProducts = orderProducts;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseIsolatorOrdersComponent.ɵfac = function WarehouseIsolatorOrdersComponent_Factory(t) { return new (t || WarehouseIsolatorOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_0__.OrderProductService)); };
WarehouseIsolatorOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WarehouseIsolatorOrdersComponent, selectors: [["pek-warehouse-isolator-orders"]], decls: 17, vars: 7, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "value"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-1"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseIsolatorOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Order Isolator Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, WarehouseIsolatorOrdersComponent_ng_template_11_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, WarehouseIsolatorOrdersComponent_ng_template_12_Template, 11, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WarehouseIsolatorOrdersComponent_ng_template_13_Template, 11, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WarehouseIsolatorOrdersComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WarehouseIsolatorOrdersComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WarehouseIsolatorOrdersComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("paginator", ctx.orderProducts.length > 0)("rows", 10)("value", ctx.orderProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.orderProducts.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtaXNvbGF0b3Itb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7888:
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-isolator/warehouse-isolator.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseIsolatorComponent": () => (/* binding */ WarehouseIsolatorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */ 79504);











function WarehouseIsolatorComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Invoice to view Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["invoices", a1]; };
function WarehouseIsolatorComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseIsolatorComponent_ng_template_13_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.selectedInvoice)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedInvoice == null ? null : ctx_r1.selectedInvoice.id));
} }
function WarehouseIsolatorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseIsolatorComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26)(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r15 = ctx.$implicit;
    const i_r16 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", invoice_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 7, invoice_r15.system_creation_date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", invoice_r15.self_serial_number, " ", invoice_r15.self_proforma_serial_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r15.order == null ? null : invoice_r15.order.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r15.supplier == null ? null : invoice_r15.supplier.name);
} }
function WarehouseIsolatorComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function WarehouseIsolatorComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseIsolatorComponent_ng_template_16_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseIsolatorComponent_ng_template_16_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoadingInvoices);
} }
function WarehouseIsolatorComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseIsolatorComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseIsolatorComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseIsolatorComponent_ng_template_23_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Order to view Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["orders", a1]; };
function WarehouseIsolatorComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseIsolatorComponent_ng_template_23_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.selectedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r8.selectedOrder)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r8.selectedOrder == null ? null : ctx_r8.selectedOrder.id));
} }
function WarehouseIsolatorComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseIsolatorComponent_ng_template_25_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", order_r24.root_production_list_products[0].nomenclature.code, " ~", order_r24.root_production_list_products[0].nomenclature.name, " ");
} }
function WarehouseIsolatorComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26)(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WarehouseIsolatorComponent_ng_template_25_ng_container_9_Template, 2, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r24 = ctx.$implicit;
    const i_r25 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", order_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r25 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, order_r24.created, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r24.root_production_list_products.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 9, order_r24.items_reception_date, "dd/MM/yyyy"));
} }
function WarehouseIsolatorComponent_ng_template_26_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function WarehouseIsolatorComponent_ng_template_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseIsolatorComponent_ng_template_26_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseIsolatorComponent_ng_template_26_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.isLoadingOrders);
} }
function WarehouseIsolatorComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseIsolatorComponent_ng_template_27_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseIsolatorComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseIsolatorComponent_div_28_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseIsolatorComponent {
    constructor(invoiceService, orderService) {
        this.invoiceService = invoiceService;
        this.orderService = orderService;
        this.isLoadingInvoices = true;
        this.isLoadingOrders = true;
        this.invoices = [];
        this.orders = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getInvoices();
        this.getOrders();
    }
    getInvoices() {
        this.invoiceService.get([{ name: 'contains_isolated_products', value: true }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(invoices => {
            this.invoices = invoices;
            this.isLoadingInvoices = false;
        });
    }
    getOrders() {
        this.orderService.get([{ name: 'contains_isolated_products', value: true }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(orders => {
            this.orders = orders;
            this.isLoadingOrders = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseIsolatorComponent.ɵfac = function WarehouseIsolatorComponent_Factory(t) { return new (t || WarehouseIsolatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService)); };
WarehouseIsolatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseIsolatorComponent, selectors: [["pek-warehouse-isolator"]], decls: 29, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "custom-tabs"], ["header", "Invoices Isolator", 3, "selected"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["header", "Orders Isolator"], ["st", ""], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Isolator Items", 1, "ml-auto", 3, "disabled", "routerLink"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "25%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseIsolatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Warehouse Isolator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "p-tabView", 6)(9, "p-tabPanel", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseIsolatorComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedInvoice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseIsolatorComponent_ng_template_13_Template, 3, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseIsolatorComponent_ng_template_14_Template, 11, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseIsolatorComponent_ng_template_15_Template, 12, 10, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseIsolatorComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseIsolatorComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, WarehouseIsolatorComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-tabPanel", 17)(20, "div", 8)(21, "p-table", 9, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseIsolatorComponent_Template_p_table_selectionChange_21_listener($event) { return ctx.selectedOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, WarehouseIsolatorComponent_ng_template_23_Template, 3, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, WarehouseIsolatorComponent_ng_template_24_Template, 11, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, WarehouseIsolatorComponent_ng_template_25_Template, 13, 12, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, WarehouseIsolatorComponent_ng_template_26_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, WarehouseIsolatorComponent_ng_template_27_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, WarehouseIsolatorComponent_div_28_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.invoices.length > 0)("rows", 10)("selection", ctx.selectedInvoice)("value", ctx.invoices);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoadingInvoices && ctx.invoices.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.orders.length > 0)("rows", 10)("selection", ctx.selectedOrder)("value", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r7.paginator && !ctx.isLoadingOrders && ctx.orders.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_11__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_11__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtaXNvbGF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 14969:
/*!***********************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-items/warehouse-items.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseItemsComponent": () => (/* binding */ WarehouseItemsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/categories.service */ 67943);
/* harmony import */ var _services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/warehouse-product.service */ 8200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pickers/product-structure-category-picker/product-structure-category-picker.component */ 77506);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/warehouse-picker/warehouse-picker.component */ 29832);
/* harmony import */ var _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pickers/locator-picker/locator-picker.component */ 79642);
/* harmony import */ var _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pickers/nomenclature-type-picker/nomenclature-type-picker.component */ 72746);
/* harmony import */ var _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pickers/accepted-type-picker/accepted-type-picker.component */ 30813);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/tree */ 93449);



















const _c0 = ["paginator"];
const _c1 = ["searchBoxName"];
const _c2 = ["searchBoxCode"];
const _c3 = ["searchBoxDescription"];
function WarehouseItemsComponent_div_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", node_r14.data.name, " ");
} }
function WarehouseItemsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "p-tree", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, WarehouseItemsComponent_div_17_ng_template_3_Template, 1, 1, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("metaKeySelection", false)("value", ctx_r0.categoriesTree);
} }
function WarehouseItemsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function WarehouseItemsComponent_ng_template_75_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_75_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (product_r15.nomenclature.category == null ? null : product_r15.nomenclature.category.unit_of_measure == null ? null : product_r15.nomenclature.category.unit_of_measure.symbol) ? product_r15.nomenclature.category == null ? null : product_r15.nomenclature.category.unit_of_measure == null ? null : product_r15.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function WarehouseItemsComponent_ng_template_75_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (product_r15.nomenclature.root_category == null ? null : product_r15.nomenclature.root_category.unit_of_measure == null ? null : product_r15.nomenclature.root_category.unit_of_measure.symbol) ? product_r15.nomenclature.root_category == null ? null : product_r15.nomenclature.root_category.unit_of_measure == null ? null : product_r15.nomenclature.root_category.unit_of_measure.symbol : "Pcs", " ");
} }
function WarehouseItemsComponent_ng_template_75_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, WarehouseItemsComponent_ng_template_75_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WarehouseItemsComponent_ng_template_75_ng_container_13_ng_container_2_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.nomenclature.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.nomenclature.root_category);
} }
function WarehouseItemsComponent_ng_template_75_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Pcs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_75_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r15.locator.warehouse.name, " ");
} }
function WarehouseItemsComponent_ng_template_75_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r15.locator.name, " ");
} }
function WarehouseItemsComponent_ng_template_75_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"](" R: ", product_r15.locator.row, " Col: ", product_r15.locator.column, " Sh: ", product_r15.locator.shelf, " Pl: ", product_r15.locator.place, " ");
} }
function WarehouseItemsComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 54)(1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, WarehouseItemsComponent_ng_template_75_b_6_Template, 2, 0, "b", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, WarehouseItemsComponent_ng_template_75_ng_container_13_Template, 3, 2, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, WarehouseItemsComponent_ng_template_75_span_14_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, WarehouseItemsComponent_ng_template_75_ng_container_18_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, WarehouseItemsComponent_ng_template_75_ng_container_20_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, WarehouseItemsComponent_ng_template_75_span_21_Template, 2, 4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    const i_r16 = ctx.rowIndex;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", product_r15)("pRowToggler", product_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx_r8.searchForm.get("page").value - 1) * 10 + i_r16 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r15.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r15.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r15.current_technology == null ? null : product_r15.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r15.total_locator_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.nomenclature.category || product_r15.nomenclature.root_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !product_r15.nomenclature.category && !product_r15.nomenclature.root_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", product_r15.nomenclature.category == null ? null : product_r15.nomenclature.category.name, " ", product_r15.nomenclature.root_category == null ? null : product_r15.nomenclature.root_category.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r15.locator);
} }
function WarehouseItemsComponent_ng_template_76_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 46);
} }
function WarehouseItemsComponent_ng_template_76_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WarehouseItemsComponent_ng_template_76_i_2_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, WarehouseItemsComponent_ng_template_76_span_3_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.isLoading);
} }
function WarehouseItemsComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 62)(1, "p-paginator", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onPageChange", function WarehouseItemsComponent_div_78_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WarehouseItemsComponent_div_78_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r11.products.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r11.countProducts);
} }
function WarehouseItemsComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66)(1, "p-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WarehouseItemsComponent_div_79_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r37.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
class WarehouseItemsComponent {
    constructor(fb, productCategoriesService, warehouseProductService) {
        this.fb = fb;
        this.productCategoriesService = productCategoriesService;
        this.warehouseProductService = warehouseProductService;
        this.isShowAll = false;
        this.isLoading = false;
        this.isStartOnePage = false;
        this.products = [];
        this.countProducts = 0;
        this.categoriesTree = [];
        this.isLoadingCategories = true;
        this.searchForm = this.fb.group({
            name: [null],
            code: [null],
            description: [null],
            warehouse: [null],
            category: [null],
            root_categories: [null],
            locator: { value: null, disabled: true },
            type: [null],
            acceptedByInvoices: [null],
            page: [1],
        });
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true },
            { name: 'at_area', value: false }
        ];
        this.queryKey = 'name:null/code:null/description:null/type:null/acceptedByInvoices:null/warehouse:null/locator:null/category:null';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(this.searchBoxName.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.selectedProduct = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => this.searchBoxName.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(350)).subscribe(() => {
            this.searchProducts();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(this.searchBoxCode.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.selectedProduct = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => this.searchBoxCode.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(350)).subscribe(() => {
            this.searchProducts();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(this.searchBoxDescription.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.selectedProduct = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => this.searchBoxDescription.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(350)).subscribe(() => {
            this.searchProducts();
        });
    }
    ngOnInit() {
        this.getCategories();
        // this.getProductsForPagination();
    }
    getCategories() {
        this.productCategoriesService.get([{ name: 'is_for_root', value: false }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(categories => {
            this.categories = categories;
            this.createTree();
            this.isLoadingCategories = false;
        });
    }
    getProductsForPagination() {
        this.warehouseProductService.getGroupedPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(response => {
            response.results.forEach((product, idx) => {
                if (!product.nomenclature) {
                    product.nomenclature = {
                        id: product.nomenclature_id,
                        code: product.code,
                        name: product.name,
                        type: product.type,
                        category: product.category,
                        description: product.description,
                    };
                }
                product.checkedForGeneration = false;
                product.uid = idx;
            });
            this.products = response.results;
            this.countProducts = response.count;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    getProducts() {
        this.warehouseProductService.getGrouped(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(response => {
            response.forEach((product, idx) => {
                if (!product.nomenclature) {
                    product.nomenclature = {
                        id: product.nomenclature_id,
                        code: product.code,
                        name: product.name,
                        type: product.type,
                        category: product.category,
                        description: product.description,
                    };
                }
                product.checkedForGeneration = false;
                product.uid = idx;
            });
            this.products = response;
            this.countProducts = response.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    searchProducts() {
        this.isLoading = true;
        this.destroy$.next(true);
        this.selectedProduct = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/description:${this.searchForm.get('description').value}/type:${this.searchForm.get('type').value}/acceptedByInvoices:${this.searchForm.get('acceptedByInvoices').value}/warehouse:${this.searchForm.get('warehouse').value}/locator:${this.searchForm.get('locator').value}/category:${this.searchForm.get('category').value}`;
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
            this.searchForm.get('page').patchValue(1);
            this.isStartOnePage = true;
        }
        this.query = [];
        if (!this.isShowAll) {
            this.query = [
                { name: 'paginated', value: 'true' },
                { name: 'page', value: this.searchForm.get('page').value },
            ];
        }
        this.query.push({ name: 'at_area', value: false });
        if (this.searchForm.get('name').value)
            this.query.push({
                name: 'name',
                value: this.searchForm.get('name').value.replace(/\+/g, '%2b')
            });
        if (this.searchForm.get('code').value)
            this.query.push({ name: 'code', value: this.searchForm.get('code').value });
        if (this.searchForm.get('description').value)
            this.query.push({
                name: 'description',
                value: this.searchForm.get('description').value
            });
        if (this.searchForm.get('type').value)
            this.query.push({ name: 'type', value: this.searchForm.get('type').value });
        if (this.searchForm.get('warehouse').value)
            this.query.push({
                name: 'warehouse',
                value: this.searchForm.get('warehouse').value
            });
        if (this.searchForm.get('locator').value)
            this.query.push({
                name: 'locator',
                value: this.searchForm.get('locator').value
            });
        if (this.searchForm.get('category').value)
            this.query.push({
                name: 'category',
                value: this.searchForm.get('category').value
            });
        if (this.searchForm.get('root_categories').value)
            this.query.push({
                name: 'root_categories',
                value: this.searchForm.get('root_categories').value
            });
        if (this.searchForm.get('acceptedByInvoices').value !== null)
            this.query.push({
                name: 'accepted_by_invoices',
                value: this.searchForm.get('acceptedByInvoices').value
            });
        if (!this.isShowAll) {
            this.getProductsForPagination();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getProducts();
        }
    }
    onAddItem() {
        this.warehouseProductService.openCreateEditWarehouseProductModal('create').subscribe(response => {
            if (response) {
                this.searchProducts();
            }
        });
    }
    createTree() {
        const getChildren = (nodes) => {
            nodes.forEach(node => {
                const children = this.categories.filter(c => c.parent === node.data.id);
                if (children.length > 0) {
                    node.children = children.map(category => {
                        return {
                            label: category.name,
                            data: category,
                            children: []
                        };
                    });
                    getChildren(node.children);
                }
            });
        };
        const tree = this.categories.filter(c => !c.parent).map(category => {
            return {
                label: category.name,
                data: category,
                children: [],
            };
        });
        getChildren(tree);
        this.categoriesTree = [...tree];
    }
    selectWarehouse(warehouseId) {
        let value = null;
        if (warehouseId)
            value = warehouseId;
        this.searchForm.get('warehouse').patchValue(value);
        this.searchProducts();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchProducts();
        }
    }
    onEditItem() {
        this.warehouseProductService.openCreateEditWarehouseProductModal('edit', this.selectedProduct.nomenclature.id).subscribe(response => {
            if (response) {
                this.searchProducts();
            }
        });
    }
    onMoveProduct() {
        this.warehouseProductService.openMoveWarehouseProductModal(this.selectedProduct).subscribe(response => {
            if (response) {
                this.searchProducts();
            }
        });
    }
    onShowAll() {
        this.isShowAll = true;
        this.searchProducts();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.searchProducts();
    }
    onSelectLocator(id) {
        this.searchForm.get('locator').patchValue(id);
        this.searchProducts();
    }
    onSelectNomenclatureType(type) {
        this.searchForm.get('type').patchValue(type);
        this.searchProducts();
    }
    onSelectAcceptedType(type) {
        this.searchForm.get('acceptedByInvoices').patchValue(type);
        this.searchProducts();
    }
    onSelectCategory(ids) {
        if (ids) {
            this.searchForm.get('root_categories').patchValue(ids.join(','));
        }
        else {
            this.searchForm.get('root_categories').patchValue('');
        }
        this.searchProducts();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseItemsComponent.ɵfac = function WarehouseItemsComponent_Factory(t) { return new (t || WarehouseItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseProductService)); };
WarehouseItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: WarehouseItemsComponent, selectors: [["pek-warehouse-items"]], viewQuery: function WarehouseItemsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchBoxDescription = _t.first);
    } }, decls: 80, vars: 18, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Move", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Edit Item", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Item", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "warehouse-items"], [1, "warehouse-items__left"], [1, "form-group"], ["class", "warehouse-items__tree-wrapper", 4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "warehouse-items__right"], [1, "page__table"], [1, "warehouse-items__form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-4"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], ["formControlName", "description", "pInputText", "", 1, "form-control"], ["searchBoxDescription", ""], [1, "col-6"], [3, "selectWarehouse"], [3, "warehouseId", "isAllLocators", "isDisabled", "selectLocator"], [3, "choiceNomenclatureType"], [3, "selectAcceptedType"], [3, "isAllIds", "choiceCategoryFolAllIds"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 30.25rem)", "dataKey", "uid", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "warehouse-items__tree-wrapper"], [1, "warehouse-items__tree"], ["selectionMode", "single", 3, "metaKeySelection", "value"], ["pTemplate", "default"], [1, "warehouse-items__spinner"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "6%"], [1, "text-center", 2, "width", "13%"], [1, "text-center", 2, "width", "12%"], [1, "text-center", 2, "width", "14%"], [3, "pSelectableRow", "pRowToggler"], [1, "text-center", 2, "width", "5%"], [4, "ngIf"], ["class", "d-block", 4, "ngIf"], [1, "d-block"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function WarehouseItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Warehouse Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WarehouseItemsComponent_Template_button_click_7_listener() { return ctx.onMoveProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WarehouseItemsComponent_Template_button_click_8_listener() { return ctx.onEditItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WarehouseItemsComponent_Template_button_click_9_listener() { return ctx.onAddItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, WarehouseItemsComponent_div_17_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, WarehouseItemsComponent_ng_template_18_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "form", 17)(23, "div", 18)(24, "div", 19)(25, "div", 12)(26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 19)(31, "div", 12)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 19)(37, "div", 12)(38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 19)(43, "div", 18)(44, "div", 26)(45, "div", 12)(46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "pek-warehouse-picker", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectWarehouse", function WarehouseItemsComponent_Template_pek_warehouse_picker_selectWarehouse_48_listener($event) { return ctx.selectWarehouse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 26)(50, "div", 12)(51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "pek-locator-picker", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectLocator", function WarehouseItemsComponent_Template_pek_locator_picker_selectLocator_53_listener($event) { return ctx.onSelectLocator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 19)(55, "div", 18)(56, "div", 26)(57, "div", 12)(58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "pek-nomenclature-type-picker", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("choiceNomenclatureType", function WarehouseItemsComponent_Template_pek_nomenclature_type_picker_choiceNomenclatureType_60_listener($event) { return ctx.onSelectNomenclatureType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 26)(62, "div", 12)(63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Accepted Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "pek-accepted-type-picker", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectAcceptedType", function WarehouseItemsComponent_Template_pek_accepted_type_picker_selectAcceptedType_65_listener($event) { return ctx.onSelectAcceptedType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 19)(67, "div", 12)(68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Product Structure Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "pek-product-structure-category-picker", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("choiceCategoryFolAllIds", function WarehouseItemsComponent_Template_pek_product_structure_category_picker_choiceCategoryFolAllIds_70_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 32)(72, "p-table", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function WarehouseItemsComponent_Template_p_table_selectionChange_72_listener($event) { return ctx.selectedProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, WarehouseItemsComponent_ng_template_74_Template, 19, 0, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, WarehouseItemsComponent_ng_template_75_Template, 22, 15, "ng-template", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, WarehouseItemsComponent_ng_template_76_Template, 4, 3, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, WarehouseItemsComponent_div_77_Template, 2, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, WarehouseItemsComponent_div_78_Template, 5, 4, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, WarehouseItemsComponent_div_79_Template, 3, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.selectedProduct || !(ctx.selectedProduct == null ? null : ctx.selectedProduct.total_locator_quantity) && !(ctx.selectedProduct == null ? null : ctx.selectedProduct.total_area_locator_quantity));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoadingCategories)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("warehouseId", ctx.searchForm.get("warehouse").value)("isAllLocators", false)("isDisabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isAllIds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedProduct)("value", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__.ProductStructureCategoryPickerComponent, primeng_table__WEBPACK_IMPORTED_MODULE_20__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_20__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_20__.RowToggler, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_21__.Paginator, _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_4__.WarehousePickerComponent, _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_5__.LocatorPickerComponent, _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_6__.NomenclatureTypePickerComponent, _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_7__.AcceptedTypePickerComponent, primeng_tree__WEBPACK_IMPORTED_MODULE_22__.Tree], styles: [".page__card[_ngcontent-%COMP%] {\n  padding-top: 1.75rem;\n}\n\n.warehouse-items[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.warehouse-items__spinner[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 0.625rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.warehouse-items__tree[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n\n.warehouse-items__tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%] {\n  width: 24rem;\n  flex: 0 0 24rem;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  top: -0.125rem;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree {\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  border-radius: 0.625rem !important;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree::-webkit-scrollbar-thumb {\n  border-radius: 0.625rem;\n  background-color: #d1d2d8;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree::-webkit-scrollbar {\n  cursor: auto;\n  width: 0.5rem;\n  background-color: #f8f9fa;\n}\n\n.warehouse-items__right[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 1.75rem;\n}\n\n.warehouse-items__right[_ngcontent-%COMP%]  .p-datatable-header {\n  padding: 0 0 1rem !important;\n}\n\n.warehouse-items__form[_ngcontent-%COMP%] {\n  margin-top: -0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFGTjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9NO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFMUjs7QUFPUTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFMVjs7QUFRUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFOVjs7QUFZRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtBQVZKOztBQWFNO0VBQ0UsNEJBQUE7QUFYUjs7QUFnQkU7RUFDRSxxQkFBQTtBQWRKIiwiZmlsZSI6IndhcmVob3VzZS1pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX19jYXJkIHtcclxuICBwYWRkaW5nLXRvcDogMS43NXJlbTtcclxufVxyXG5cclxuLndhcmVob3VzZS1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJl9fc3Bpbm5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fdHJlZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX190cmVlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19sZWZ0IHtcclxuICAgIHdpZHRoOiAyNHJlbTtcclxuICAgIGZsZXg6IDAgMCAyNHJlbTtcclxuXHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTAuMTI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjo6bmctZGVlcCB7XHJcbiAgICAgIC5wLXRyZWUge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDJkODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAwLjVyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMS43NXJlbTtcclxuXHJcbiAgICAmOjpuZy1kZWVwIHtcclxuICAgICAgLnAtZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC42MjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 95797:
/*!*************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-layout/warehouse-layout.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseLayoutComponent": () => (/* binding */ WarehouseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class WarehouseLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Items', commands: ['items'] },
            { label: 'QC-Warehouse', commands: ['warehouse-qc'] },
            { label: 'Production Lists', commands: ['production-lists'] },
            { label: 'Production Requests', commands: ['production-requests'] },
            { label: 'Tool Requests', commands: ['tool-requests'] },
            { label: 'Where Used', commands: ['where-used'] },
            { label: 'Physical Inventory', commands: ['physical-inventory'] },
            { label: 'Warehouses', commands: ['warehouses'] },
            { label: 'Categories', commands: ['categories'] },
            { label: 'Units of Measure', commands: ['measure'] },
            { label: 'Serial Number Types', commands: ['serial-types'] },
            { label: 'Isolator', commands: ['isolator'] },
        ];
    }
    ngOnInit() {
    }
}
WarehouseLayoutComponent.ɵfac = function WarehouseLayoutComponent_Factory(t) { return new (t || WarehouseLayoutComponent)(); };
WarehouseLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarehouseLayoutComponent, selectors: [["pek-warehouse-layout"]], decls: 2, vars: 2, consts: [[3, "module", "routes"]], template: function WarehouseLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Warehouse")("routes", ctx.routes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 47010:
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-locators/warehouse-locators.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseLocatorsComponent": () => (/* binding */ WarehouseLocatorsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_locator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/locator.service */ 47041);
/* harmony import */ var _services_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/warehouse.service */ 57098);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);













function WarehouseLocatorsComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Choose the Locator to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseLocatorsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WarehouseLocatorsComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.selectedLocator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r1.selectedLocator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function WarehouseLocatorsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Shelf");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function WarehouseLocatorsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 26)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const locator_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", locator_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](locator_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](locator_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](locator_r8.row);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](locator_r8.column);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](locator_r8.shelf);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](locator_r8.place);
} }
function WarehouseLocatorsComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 30);
} }
function WarehouseLocatorsComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseLocatorsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WarehouseLocatorsComponent_ng_template_16_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WarehouseLocatorsComponent_ng_template_16_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseLocatorsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseLocatorsComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseLocatorsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseLocatorsComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class WarehouseLocatorsComponent {
    constructor(route, locatorService, warehouseService, modalService) {
        this.route = route;
        this.locatorService = locatorService;
        this.warehouseService = warehouseService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Locator',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditLocator()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveLocator()
                    }
                ]
            }];
        this.locators = [];
        this.isLoading = true;
        this.isLoadingWarehouse = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.getLocators();
        this.getCurrentWarehouse();
    }
    getLocators() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(id => this.warehouseId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.locatorService.get([{ name: 'warehouse', value: this.warehouseId }])), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(locators => {
            this.locators = locators;
            this.isLoading = false;
        });
    }
    getCurrentWarehouse() {
        this.warehouseService.getById(this.warehouseId).subscribe(warehouse => {
            this.currentWarehouse = warehouse;
            this.isLoadingWarehouse = false;
        });
    }
    onAddLocator() {
        this.locatorService.createEditLocatorModal('create').subscribe(locator => {
            if (locator) {
                this.locators.unshift(locator);
            }
        });
    }
    onEditLocator() {
        this.locatorService.createEditLocatorModal('edit', this.selectedLocator).subscribe(locator => {
            if (locator) {
                const index = this.locators.findIndex(t => t.id === this.selectedLocator.id);
                this.locators[index] = locator;
                this.selectedLocator = this.locators[index];
            }
        });
    }
    onRemoveLocator() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.locatorService.delete(this.selectedLocator).subscribe(() => {
                    const index = this.locators.findIndex(w => w.id === this.selectedLocator.id);
                    this.locators.splice(index, 1);
                    this.selectedLocator = null;
                });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseLocatorsComponent.ɵfac = function WarehouseLocatorsComponent_Factory(t) { return new (t || WarehouseLocatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_locator_service__WEBPACK_IMPORTED_MODULE_0__.LocatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_warehouse_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
WarehouseLocatorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WarehouseLocatorsComponent, selectors: [["pek-warehouse-locators"]], decls: 19, vars: 9, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Locator", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "20%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseLocatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseLocatorsComponent_Template_button_click_7_listener() { return ctx.onAddLocator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function WarehouseLocatorsComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedLocator = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WarehouseLocatorsComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WarehouseLocatorsComponent_ng_template_14_Template, 15, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WarehouseLocatorsComponent_ng_template_15_Template, 15, 8, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WarehouseLocatorsComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WarehouseLocatorsComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WarehouseLocatorsComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Locators (Warehouse: ", ctx.isLoadingWarehouse ? "..." : ctx.currentWarehouse.name, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("paginator", ctx.locators.length > 0)("rows", 10)("selection", ctx.selectedLocator)("value", ctx.locators);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.locators.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtbG9jYXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50941:
/*!*************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-production-request/warehouse-production-request.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseProductionRequestComponent": () => (/* binding */ WarehouseProductionRequestComponent)
/* harmony export */ });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 63205);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/task.service */ 10764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);














const _c0 = ["dt"];
const _c1 = function (a1) { return ["/dash/procurement/orders/products", a1]; };
function WarehouseProductionRequestComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r0.order.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.orderId, " ");
} }
const _c2 = function (a1) { return ["/dash/outsource/outsource-chain/products", a1]; };
function WarehouseProductionRequestComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c2, ctx_r1.order.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.orderId, " ");
} }
const _c3 = function (a1) { return ["/dash/production/orders/order", a1]; };
function WarehouseProductionRequestComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, ctx_r2.order.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.orderId, " ");
} }
const _c4 = function (a1) { return ["/dash/production/plan/tasks/", a1]; };
function WarehouseProductionRequestComponent_span_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c4, ctx_r10.order == null ? null : ctx_r10.order.root_production_plans[0].id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r10.order == null ? null : ctx_r10.order.root_production_plans[0].list_product.nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_span_9_span_1_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.order == null ? null : ctx_r3.order.root_production_plans.length) === 1);
} }
function WarehouseProductionRequestComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "a", 14);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c1, ctx_r4.order.id));
} }
function WarehouseProductionRequestComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "a", 14);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c2, ctx_r5.order.id));
} }
function WarehouseProductionRequestComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "a", 14);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c3, ctx_r6.order.id));
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.onCancelItem(ctx_r19.selectedRequest)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.showImages(ctx_r21.selectedRequest.list_product)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.changeView(ctx_r22.viewModes.LIST)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.changeView(ctx_r23.viewModes.HIERARCHY)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.changeView(ctx_r24.viewModes.DETAILED_HIERARCHY)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r12.selectedRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r12.selectedRequest);
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Available Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.material_nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.order_product_nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.list_product.nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_10_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_10_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (request_r25 == null ? null : request_r25.list_product == null ? null : request_r25.list_product.nomenclature == null ? null : request_r25.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.material_nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_11_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_11_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (request_r25 == null ? null : request_r25.list_product == null ? null : request_r25.list_product.nomenclature == null ? null : request_r25.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.order_product_nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_12_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_12_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (request_r25 == null ? null : request_r25.list_product == null ? null : request_r25.list_product.nomenclature == null ? null : request_r25.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.list_product.nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](request_r25.technology);
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", locator_r46.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_18_div_1_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", request_r25.locators);
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 39)(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_8_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_10_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_11_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_12_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_span_14_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_div_18_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const request_r25 = ctx.$implicit;
    const i_r26 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("qr-code-scanned", request_r25.is_scanned);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", request_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r26 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r25.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r25.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !request_r25.material_nomenclature && !request_r25.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r25.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r25.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !request_r25.material_nomenclature && !request_r25.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r25.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.required_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r25.locators);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25.warehouse_quantity, " ");
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_8_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 43);
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_18_ng_template_8_i_2_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_18_ng_template_8_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r16.isLoading);
} }
function WarehouseProductionRequestComponent_ng_container_18_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_ng_template_9_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r11.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_18_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45)(1, "p-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_18_div_10_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r11.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
const _c5 = function () { return ["name"]; };
function WarehouseProductionRequestComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15)(2, "p-table", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function WarehouseProductionRequestComponent_ng_container_18_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.selectedRequest = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WarehouseProductionRequestComponent_ng_container_18_ng_template_4_Template, 6, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WarehouseProductionRequestComponent_ng_container_18_ng_template_5_Template, 2, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WarehouseProductionRequestComponent_ng_container_18_ng_template_6_Template, 17, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WarehouseProductionRequestComponent_ng_container_18_ng_template_7_Template, 21, 15, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WarehouseProductionRequestComponent_ng_container_18_ng_template_8_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, WarehouseProductionRequestComponent_ng_container_18_ng_template_9_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, WarehouseProductionRequestComponent_ng_container_18_div_10_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("paginator", ctx_r7.requests.length > 0)("scrollable", true)("rows", 10)("value", ctx_r7.requests)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c5))("selection", ctx_r7.selectedRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r11.paginator && !ctx_r7.isLoading && ctx_r7.requests.length > 0);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r60.onCancelItem(ctx_r60.selectedRequestNode.data.request)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r62.showImages(ctx_r62.selectedRequestNode.data.request.list_product)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r63.expandCollapseAllOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r64.expandCollapseAllOrders(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r65.changeView(ctx_r65.viewModes.LIST)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r66.changeView(ctx_r66.viewModes.HIERARCHY)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r67.changeView(ctx_r67.viewModes.DETAILED_HIERARCHY)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r56.selectedRequestNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r56.selectedRequestNode);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Available Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.id, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.material_nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.order_product_nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.list_product.nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.request.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.request.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r69.request.material_nomenclature && !rowData_r69.request.order_product_nomenclature);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_1_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_1_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowData_r69.request == null ? null : rowData_r69.request.list_product == null ? null : rowData_r69.request.list_product.nomenclature == null ? null : rowData_r69.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.material_nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_2_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_2_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowData_r69.request == null ? null : rowData_r69.request.list_product == null ? null : rowData_r69.request.list_product.nomenclature == null ? null : rowData_r69.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.order_product_nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_3_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_3_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowData_r69.request == null ? null : rowData_r69.request.list_product == null ? null : rowData_r69.request.list_product.nomenclature == null ? null : rowData_r69.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.list_product.nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_2_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_div_3_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.request.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.request.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r69.request.material_nomenclature && !rowData_r69.request.order_product_nomenclature);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r69.request.technology);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_12_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.request.technology);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.required_quantity, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_16_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", locator_r101.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_16_div_1_div_1_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", rowData_r69.request.locators);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_16_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.request.locators);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.request.warehouse_quantity, " ");
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 53)(1, "td", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-treeTableToggler", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_span_6_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_8_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_10_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_12_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_14_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_16_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_div_18_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r68 = ctx.$implicit;
    const rowData_r69 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ttRow", rowNode_r68)("ttSelectableRow", rowNode_r68)("ttSelectableRowDisabled", rowData_r69.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNode", rowNode_r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bold", rowData_r69.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r69.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r69.level === 4);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 43);
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_19_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_19_ng_template_5_i_2_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_19_ng_template_5_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r59.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r59.isLoading);
} }
function WarehouseProductionRequestComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p-treeTable", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function WarehouseProductionRequestComponent_ng_container_19_Template_p_treeTable_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r107.selectedRequestNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_19_ng_template_2_Template, 8, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_19_ng_template_3_Template, 15, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WarehouseProductionRequestComponent_ng_container_19_ng_template_4_Template, 19, 14, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WarehouseProductionRequestComponent_ng_container_19_ng_template_5_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r8.requestTree)("selection", ctx_r8.selectedRequestNode);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r113.expandCollapseDetailedView()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r115.expandCollapseDetailedView(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r116.changeView(ctx_r116.viewModes.LIST)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r117.changeView(ctx_r117.viewModes.HIERARCHY)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r118.changeView(ctx_r118.viewModes.DETAILED_HIERARCHY)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Available Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bold", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.loading, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bold", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.id, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.id, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bold", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.material_nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.order_product_nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.list_product.nomenclature.code, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r120.request.material_nomenclature && !rowData_r120.request.order_product_nomenclature);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bold", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", rowData_r120.name, " ", rowData_r120.serialNumber, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_1_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_1_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowData_r120.request == null ? null : rowData_r120.request.list_product == null ? null : rowData_r120.request.list_product.nomenclature == null ? null : rowData_r120.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.material_nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_2_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_2_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowData_r120.request == null ? null : rowData_r120.request.list_product == null ? null : rowData_r120.request.list_product.nomenclature == null ? null : rowData_r120.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.order_product_nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_3_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_3_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (rowData_r120.request == null ? null : rowData_r120.request.list_product == null ? null : rowData_r120.request.list_product.nomenclature == null ? null : rowData_r120.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.list_product.nomenclature.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_2_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_div_3_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r120.request.material_nomenclature && !rowData_r120.request.order_product_nomenclature);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r120.request.technology);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_14_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request.technology);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.required_quantity, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_18_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", locator_r160.name, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_18_div_1_div_1_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", rowData_r120.request.locators);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_18_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request.locators);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r120.request.warehouse_quantity, " ");
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 59)(1, "td", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-treeTableToggler", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_4_Template, 2, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_5_Template, 2, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_6_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_8_Template, 2, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_9_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_span_11_Template, 2, 4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_12_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_14_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_16_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_18_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_div_20_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r119 = ctx.$implicit;
    const rowData_r120 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("in-plan", rowData_r120.request)("placeholder", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ttRow", rowNode_r119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNode", rowNode_r119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r120.request);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_6_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 43);
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestComponent_ng_container_20_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseProductionRequestComponent_ng_container_20_ng_template_6_i_2_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_20_ng_template_6_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r112.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r112.isLoading);
} }
function WarehouseProductionRequestComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15)(2, "p-treeTable", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onNodeExpand", function WarehouseProductionRequestComponent_ng_container_20_Template_p_treeTable_onNodeExpand_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r167); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r166.onNodeExpand($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseProductionRequestComponent_ng_container_20_ng_template_3_Template, 6, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WarehouseProductionRequestComponent_ng_container_20_ng_template_4_Template, 15, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WarehouseProductionRequestComponent_ng_container_20_ng_template_5_Template, 21, 17, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WarehouseProductionRequestComponent_ng_container_20_ng_template_6_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r9.detailedRequestTree);
} }
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["LIST"] = 0] = "LIST";
    ViewMode[ViewMode["HIERARCHY"] = 1] = "HIERARCHY";
    ViewMode[ViewMode["DETAILED_HIERARCHY"] = 2] = "DETAILED_HIERARCHY";
})(ViewMode || (ViewMode = {}));
class WarehouseProductionRequestComponent {
    constructor(requestsService, auth, ordersService, route, router, modalService, tasksService) {
        this.requestsService = requestsService;
        this.auth = auth;
        this.ordersService = ordersService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.tasksService = tasksService;
        this.viewModes = ViewMode;
        this.viewMode = ViewMode.LIST;
        this.rootList = null;
        this.currentDate = new Date();
        this.currentReqDate = null;
        this.isLoading = true;
        this.requests = [];
        this.orderId = this.route.snapshot.paramMap.get('id');
        this.requestTree = [];
        this.detailedRequestTree = [];
    }
    ngOnInit() {
        this.getOrderInfo(+this.orderId);
        this.getRequests();
    }
    onCancel() {
        this.modalService.confirm('danger').subscribe(res => {
            if (res) {
                this.requestsService.cancel(+this.orderId).subscribe();
            }
        });
    }
    getOrderInfo(orderId) {
        this.ordersService.getById(orderId).subscribe(order => {
            this.order = order;
            this.prepareDetailedCategoryTree();
        });
    }
    prepareDetailedCategoryTree() {
        const categoriesTemp = [];
        this.order.root_production_plans.forEach(plan => {
            const isAdded = categoriesTemp.findIndex(el => el.id === plan.list_product.id);
            const hasSerialNumber = plan.serial_numbers.length > 0;
            let serialNumber;
            if (hasSerialNumber) {
                const planInfo = plan.serial_numbers[0];
                serialNumber = planInfo.type_with_number ? planInfo.type_with_number : planInfo.id;
            }
            if (isAdded < 0) {
                categoriesTemp.push({
                    name: plan.list_product.nomenclature.name,
                    code: plan.list_product.nomenclature.code,
                    serialNumber,
                    id: plan.list_product.id,
                    planId: plan.id,
                    level: 0,
                    parentId: null
                });
            }
        });
        this.detailedRequestTree = [];
        categoriesTemp.forEach(cat => {
            this.detailedRequestTree.push({
                data: cat,
                children: [{
                        data: { loading: 'Loading data ...' }
                    }],
                expanded: false,
                parent: null
            });
        });
        console.log('this.detailedRequestTree');
        this.detailedRequestTree.forEach(node => {
            console.log('node', node);
            // this.loadPlanInfo(node);
        });
    }
    changeView(view) {
        this.selectedRequest = null;
        this.selectedRequestNode = null;
        this.viewMode = view;
    }
    getRequests() {
        this.isLoading = true;
        this.requests = [];
        // this.requestTree = [];
        this.requestsService.getByOrder(+this.orderId).subscribe(requests => {
            this.isLoading = false;
            this.requests = requests;
            this.prepareTreeCategories();
            if (this.requests.length > 0) {
                this.rootList = this.requests[0].root_production_list_products[0];
                this.currentReqDate = this.requests[0].created;
            }
        });
    }
    expandCollapseAllOrders(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.requestTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.requestTree = temp;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    prepareTreeCategories() {
        const categoriesTemp = [];
        this.requests.forEach(request => {
            if (request.for_order_product) {
                const parentProducts = request.for_order_product.nomenclature;
                const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.id);
                if (isAdded < 0) {
                    categoriesTemp.push({ name: parentProducts.name, id: parentProducts.id, level: 0, parentId: null });
                }
            }
            else if (request.list_product) {
                const parentProducts = request.list_product.list;
                const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.nomenclature.id);
                if (isAdded < 0) {
                    categoriesTemp.push({
                        name: parentProducts.nomenclature.name,
                        id: parentProducts.nomenclature.id,
                        level: 0,
                        parentId: null
                    });
                }
            }
        });
        this.requestTree = [];
        categoriesTemp.forEach(cat => {
            this.requestTree.push({
                data: cat,
                expanded: false,
                parent: null
            });
        });
        this.fillTree();
    }
    fillTree() {
        this.requestTree = this.requestTree.map(node => {
            return {
                ...node,
                children: []
            };
        });
        this.requests.forEach(request => {
            this.requestTree.forEach(node => {
                let parentNomenclature;
                if (request.for_order_product) {
                    parentNomenclature = request.for_order_product.nomenclature;
                }
                else if (request.list_product) {
                    // @ts-ignore
                    parentNomenclature = request.list_product.list.nomenclature;
                }
                if (node.data.id === parentNomenclature.id) {
                    node.children.push({
                        data: { request, level: 4 },
                        expanded: false,
                        children: []
                    });
                }
            });
        });
        console.log('this.requestTree Filled', this.requestTree);
    }
    onNodeExpand($event) {
        if ($event.node.data.level === 0 && $event.node.children.length === 1) {
            this.loadPlanInfo($event.node);
        }
    }
    loadPlanInfo(rowNode) {
        const planId = rowNode.data.planId;
        this.loadRootListTree(planId);
    }
    loadRootListTree(planId) {
        this.tasksService.get([{ name: 'for_root', value: planId }]).subscribe(res => {
            this.buildDetailedPlanTree(res, planId);
        });
    }
    buildDetailedPlanTree(tasks, planId) {
        const planIndex = this.detailedRequestTree.findIndex(el => el.data.planId === planId);
        this.detailedRequestTree[planIndex].children = [];
        tasks.sort((a, b) => a.list_product.level - b.list_product.level);
        tasks.filter(task => task.list_product.level !== 0).forEach(task => {
            this.findLevelParent(task.list_product.level - 1, task);
        });
        // this.detailedRequestTree = [...this.detailedRequestTree];
    }
    findLevelParent(level, task) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.detailedRequestTree);
        temp.forEach(node => {
            this.addToParentTree(node, level, task);
        });
        this.detailedRequestTree = temp;
    }
    addToParentTree(node, level, task) {
        if (node.data.level === level && node.data.id === task.list_product.parent) {
            const existingIndex = node.children.findIndex(el => el.data.id === task.list_product.id);
            if (existingIndex < 0) {
                // const foundInRequest = this.requests.find(el => el.task === task.id);
                const foundInRequest = this.requests.find(el => el.list_product.id === task.list_product.id);
                // if (task.list_product.nomenclature.name .includes('Washer 6 DIN 125 Zn')) {
                //   console.log('foundInRequest', foundInRequest);
                //   console.log('task', task);
                //   console.log('this.requests', this.requests);
                // }
                node.children.push({
                    data: {
                        id: task.list_product.id,
                        code: task.list_product.nomenclature.code,
                        name: task.list_product.nomenclature.name,
                        level: task.list_product.level,
                        request: foundInRequest
                    },
                    children: []
                });
            }
        }
        else if (node.children) {
            node.children.forEach(childNode => {
                this.addToParentTree(childNode, level, task);
            });
        }
    }
    onCancelItem(node) {
        const requestId = node.id;
        this.modalService.confirm('danger').subscribe(res => {
            if (res) {
                this.requestsService.cancelRequest(requestId).subscribe(() => {
                    this.selectedRequest = null;
                });
            }
        });
    }
    expandCollapseDetailedView(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.detailedRequestTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.detailedRequestTree = temp;
    }
    showImages(node) {
        console.log(node);
        const nomenclatureId = node.nomenclature.id;
        this.modalService.showImageGallery([], nomenclatureId, 1).subscribe();
    }
}
WarehouseProductionRequestComponent.ɵfac = function WarehouseProductionRequestComponent_Factory(t) { return new (t || WarehouseProductionRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__.TaskService)); };
WarehouseProductionRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: WarehouseProductionRequestComponent, selectors: [["pek-warehouse-production-request"]], viewQuery: function WarehouseProductionRequestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dateTable = _t.first);
    } }, decls: 21, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], ["target", "blank", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete"], ["pButton", "", "type", "button", "label", "Cancelation", 1, "p-button-danger", "ml-2", 3, "click"], ["pButton", "", "class", "ml-2", "type", "button", "target", "blank", "label", "Go to Order", 3, "routerLink", 4, "ngIf"], [1, "page__content"], [1, "page__card"], ["target", "blank", 3, "routerLink"], ["target", "_blank", 3, "routerLink"], ["pButton", "", "type", "button", "target", "blank", "label", "Go to Order", 1, "ml-2", 3, "routerLink"], [1, "page__table"], ["scrollHeight", "calc(100vh - 18.8rem)", "selectionMode", "single", 1, "adaptive-table", "print-table", 3, "paginator", "scrollable", "rows", "value", "globalFilterFields", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["pButton", "", "type", "button", "label", "Cancel", 1, "ml-auto", "mr-2", "p-button-warning", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "List", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Hierarchy", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Detailed Hierarchy", 1, "mr-2", 3, "click"], [1, "index-header"], [1, "text-center", 2, "width", "5%"], [2, "width", "18%"], [2, "width", "21%"], [2, "width", "12%"], [1, "text-center", 2, "width", "14%"], [1, "text-center", 2, "width", "13%"], [1, "text-center", 2, "width", "12%"], [1, "pagebreak", 3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 300px)", 1, "orders-tree", 3, "value", "selection", "selectionChange"], ["pButton", "", "type", "button", "label", "Expand all", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Collapse all", 1, "mr-2", 3, "click"], [2, "width", "16%"], [2, "width", "20%"], [2, "width", "10%"], [1, "text-center", 2, "width", "10%"], [1, "pagebreak", 3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"], [1, "text-center", 2, "width", "16%"], [1, "toggle-row"], [3, "rowNode"], ["scrollHeight", "calc(100vh - 300px)", 1, "orders-tree", 3, "value", "onNodeExpand"], ["pButton", "", "type", "button", "label", "Expand all", 1, "ml-auto", "mr-2", 3, "click"], [1, "pagebreak", 3, "ttRow"], [3, "bold", 4, "ngIf"]], template: function WarehouseProductionRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Requests for Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WarehouseProductionRequestComponent_a_6_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WarehouseProductionRequestComponent_a_7_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WarehouseProductionRequestComponent_a_8_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, WarehouseProductionRequestComponent_span_9_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseProductionRequestComponent_Template_button_click_12_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, WarehouseProductionRequestComponent_a_13_Template, 1, 3, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, WarehouseProductionRequestComponent_a_14_Template, 1, 3, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, WarehouseProductionRequestComponent_a_15_Template, 1, 3, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, WarehouseProductionRequestComponent_ng_container_18_Template, 11, 8, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, WarehouseProductionRequestComponent_ng_container_19_Template, 6, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, WarehouseProductionRequestComponent_ng_container_20_Template, 7, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.accounting_type) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.accounting_type) == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.accounting_type) == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.order == null ? null : ctx.order.root_production_plans);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.accounting_type) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.accounting_type) == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.order == null ? null : ctx.order.accounting_type) == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModes.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModes.HIERARCHY);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModes.DETAILED_HIERARCHY);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTSelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_6__.ModuleIconComponent], styles: ["@page {\n  size: portrait !important;\n}\n.request-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.request-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 1.2;\n  margin-bottom: 25px;\n}\n.request-row[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  box-sizing: border-box;\n  padding-right: 30px;\n}\n.request-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 19px;\n  margin: 0 0 10px;\n  line-height: 1.2;\n}\n.request-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n.request-row[_ngcontent-%COMP%]:nth-child(1), .request-row[_ngcontent-%COMP%]:nth-child(2), .request-row[_ngcontent-%COMP%]:nth-child(5), .request-row[_ngcontent-%COMP%]:nth-child(6) {\n  width: 30%;\n}\n.request-row[_ngcontent-%COMP%]:nth-child(3), .request-row[_ngcontent-%COMP%]:nth-child(4) {\n  width: 20%;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: flex;\n}\n.user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: space-between;\n  margin-top: 50px;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 20px;\n}\n.user-info[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.print-info[_ngcontent-%COMP%] {\n  display: none;\n}\n@media print {\n  .user-info[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .print-info[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.root-plans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.root-plans[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n  .orders-tree .p-treetable-wrapper {\n  max-height: calc(100vh - 300px);\n  overflow: auto;\n}\n.in-plan[_ngcontent-%COMP%] {\n  background-color: rgba(124, 133, 245, 0.52) !important;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background-color: rgba(215, 215, 215, 0.3215686275) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS1wcm9kdWN0aW9uLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUFESjtBQUlFO0VBSUUsVUFBQTtBQUxKO0FBUUU7RUFFRSxVQUFBO0FBUEo7QUFXQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBUkY7QUFVRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFXRTtFQUNFLFVBQUE7QUFUSjtBQWFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UsWUFBQTtBQVZKO0FBY0k7RUFDRSxtQkFBQTtBQVpOO0FBaUJBO0VBQ0UsYUFBQTtBQWRGO0FBaUJBO0VBQ0U7SUFDRSxhQUFBO0VBZEY7RUFpQkE7SUFDRSxjQUFBO0VBZkY7QUFDRjtBQWtCQTtFQUNFLGVBQUE7QUFoQkY7QUFrQkU7RUFDRSwwQkFBQTtBQWhCSjtBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEJGO0FBdUJJO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0FBcEJOO0FBeUJBO0VBQ0Usc0RBQUE7QUF0QkY7QUF5QkE7RUFDRSw4REFBQTtBQXRCRiIsImZpbGUiOiJ3YXJlaG91c2UtcHJvZHVjdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHBhZ2Uge1xyXG4gIHNpemU6IHBvcnRyYWl0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LXJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgJjpudGgtY2hpbGQoMSksXHJcbiAgJjpudGgtY2hpbGQoMiksXHJcbiAgJjpudGgtY2hpbGQoNSksXHJcbiAgJjpudGgtY2hpbGQoNikge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDMpLFxyXG4gICY6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1pbmZvIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgcCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubGVmdCwgLnJpZ2h0IHtcclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpbnQtaW5mbyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAudXNlci1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAucHJpbnQtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5yb290LXBsYW5zIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRvZ2dsZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5vcmRlcnMtdHJlZSB7XHJcbiAgICAucC10cmVldGFibGUtd3JhcHBlciB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluLXBsYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQgMTMzIDI0NSAvIDUyJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3NTIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 92659:
/*!***************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-production-requests/warehouse-production-requests.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseProductionRequestsComponent": () => (/* binding */ WarehouseProductionRequestsComponent)
/* harmony export */ });
/* harmony import */ var _production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../production-lists/production-lists.component */ 19144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









const _c0 = function (a0) { return [a0]; };
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r3.selectedOrder)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r3.selectedOrder == null ? null : ctx_r3.selectedOrder.id));
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Closing Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Root Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
const _c1 = function (a1) { return ["/dash/production/plan/tasks", a1]; };
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, item_r12.list.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", item_r12.list.list_product.nomenclature.code, "~", item_r12.list.list_product.nomenclature.name, " (", item_r12.count, ") ");
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_1_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serial_r21 = ctx.$implicit;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, serial_r21.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", item_r12.list.list_product.nomenclature.code, "~", item_r12.list.list_product.nomenclature.name, " (", item_r12.count, ") ");
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_1_ng_template_0_a_0_Template, 2, 6, "a", 31);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r12.list.serial_numbers);
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_1_ng_template_0_Template, 1, 1, "ng-template");
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_a_0_Template, 2, 6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_1_Template, 1, 0, null, 9);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r12.list.serial_numbers.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r12.list.serial_numbers.length >= 1);
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_2_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const order_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.showProductionLists(order_r9.root_production_plans)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", item_r12.list.list_product.nomenclature.code, "~", item_r12.list.list_product.nomenclature.name, " (", item_r12.count, ") ");
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_2_ng_template_0_Template, 2, 3, "ng-template");
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const order_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.showProductionLists(order_r9.root_production_plans)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_2_Template, 1, 0, null, 9);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", item_r12.list.list_product.nomenclature.code, "~", item_r12.list.list_product.nomenclature.name, " (", item_r12.count, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r12.list.serial_numbers.length >= 1);
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_1_Template, 2, 2, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_ng_template_2_Template, 3, 4, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r12.count === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r12.count > 1);
} }
const _c2 = function (a1) { return ["materials", a1]; };
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 25)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22)(4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_div_13_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r9 = ctx.$implicit;
    const i_r10 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", order_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, order_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r9.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 7, order_r9.created, "dd/MM/yyyy HH:MM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 10, order_r9.production_requests_fully_completed, "dd/MM/yyyy HH:MM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.getRootLists(order_r9.root_production_plans));
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 35);
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseProductionRequestsComponent_ng_container_11_ng_template_7_i_2_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseProductionRequestsComponent_ng_container_11_ng_template_7_span_3_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function WarehouseProductionRequestsComponent_ng_container_11_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_container_11_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestsComponent_ng_container_11_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_container_11_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseProductionRequestsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10)(2, "p-table", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseProductionRequestsComponent_ng_container_11_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.selectedOrder = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WarehouseProductionRequestsComponent_ng_container_11_ng_template_4_Template, 2, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, WarehouseProductionRequestsComponent_ng_container_11_ng_template_5_Template, 11, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WarehouseProductionRequestsComponent_ng_container_11_ng_template_6_Template, 14, 15, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WarehouseProductionRequestsComponent_ng_container_11_ng_template_7_Template, 4, 3, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WarehouseProductionRequestsComponent_ng_container_11_ng_template_8_Template, 2, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WarehouseProductionRequestsComponent_ng_container_11_div_9_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r0.orders.length > 0)("rows", 10)("selection", ctx_r0.selectedOrder)("value", ctx_r0.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r2.paginator && !ctx_r0.isLoading && ctx_r0.orders.length > 0);
} }
function WarehouseProductionRequestsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " In development ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class WarehouseProductionRequestsComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.viewModeType = _production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_0__.ViewMode;
        this.viewMode = _production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_0__.ViewMode.LIST;
        this.isLoading = true;
        this.orders = [];
        this.query = [
            { name: 'accounting_type__in', value: '2,3' },
            { name: 'is_prepared', value: false }
        ];
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.orderService.get(this.query).subscribe(orders => {
            this.orders = orders;
            this.isLoading = false;
        });
    }
    showProductionLists(plans) {
    }
    getRootLists(rootLists) {
        const lists = [];
        if (rootLists) {
            rootLists.forEach((res) => {
                if (res) {
                    const found = lists.find(el => el.list.root_nomenclature?.id === res.root_nomenclature?.id);
                    if (found) {
                        found.count++;
                    }
                    else {
                        lists.push({ list: res, count: 1 });
                    }
                }
            });
        }
        return lists;
    }
    onChoiceViewType(mode) {
        this.viewMode = mode;
        this.selectedOrder = null;
    }
}
WarehouseProductionRequestsComponent.ɵfac = function WarehouseProductionRequestsComponent_Factory(t) { return new (t || WarehouseProductionRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService)); };
WarehouseProductionRequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseProductionRequestsComponent, selectors: [["pek-warehouse-production-requests"]], decls: 13, vars: 6, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-table", "label", "Hierarchy", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-list", "label", "List", 3, "disabled", "click"], [1, "page__content"], [1, "page__card"], [4, "ngIf"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Parts/Materials List", 1, "ml-auto", 3, "disabled", "routerLink"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "30%"], [2, "width", "45%"], [3, "pSelectableRow"], ["target", "_blank", 3, "routerLink"], ["class", "d-block", 4, "ngFor", "ngForOf"], [1, "d-block"], [3, "ngIf"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "click"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseProductionRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Production Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_Template_button_click_7_listener() { return ctx.onChoiceViewType(ctx.viewModeType.HIERARCHY); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_Template_button_click_8_listener() { return ctx.onChoiceViewType(ctx.viewModeType.LIST); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, WarehouseProductionRequestsComponent_ng_container_11_Template, 10, 6, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WarehouseProductionRequestsComponent_ng_container_12_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.viewMode === ctx.viewModeType.HIERARCHY);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.viewMode === ctx.viewModeType.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModeType.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.viewModeType.HIERARCHY);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcHJvZHVjdGlvbi1yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6159:
/*!**********************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-qc/warehouse-qc-invoice/warehouse-qc-invoice.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseQcInvoiceComponent": () => (/* binding */ WarehouseQcInvoiceComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);











function WarehouseQcInvoiceComponent_ng_template_11_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Invoice Products to Accept Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseQcInvoiceComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseQcInvoiceComponent_ng_template_11_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcInvoiceComponent_ng_template_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onShowImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcInvoiceComponent_ng_template_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onAcceptToWarehouse()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.selectedInvoiceProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.selectedInvoiceProducts.length > 1 || ctx_r1.selectedInvoiceProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.selectedInvoiceProducts.length === 0);
} }
function WarehouseQcInvoiceComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseQcInvoiceComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", invoice_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.current_technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.passed_quantity);
} }
function WarehouseQcInvoiceComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function WarehouseQcInvoiceComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseQcInvoiceComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseQcInvoiceComponent_ng_template_14_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseQcInvoiceComponent_ng_template_14_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseQcInvoiceComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcInvoiceComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseQcInvoiceComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcInvoiceComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseQcInvoiceComponent {
    constructor(invoiceService, route, router, modalService) {
        this.invoiceService = invoiceService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.isLoading = true;
        this.invoiceProducts = [];
        this.selectedInvoiceProducts = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getInvoices();
    }
    getInvoices() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(id => this.invoiceId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.invoiceService.getProductsToAccept(this.invoiceId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(invoiceProducts => {
            this.invoiceProducts = invoiceProducts;
            this.isLoading = false;
        });
    }
    onAcceptToWarehouse() {
        this.invoiceService.openAcceptToWarehouseModal(this.selectedInvoiceProducts, this.invoiceId).subscribe(response => {
            if (response) {
                this.selectedInvoiceProducts.forEach(product => {
                    this.invoiceProducts = this.invoiceProducts.filter(p => p.id !== product.id);
                });
                if (this.invoiceProducts.length === 0) {
                    this.router.navigate(['../../'], { relativeTo: this.route });
                }
                this.selectedInvoiceProducts = [];
            }
        });
    }
    onShowImages() {
        this.modalService.showImageGallery([], this.selectedInvoiceProducts[0].nomenclature.id, 1).subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseQcInvoiceComponent.ɵfac = function WarehouseQcInvoiceComponent_Factory(t) { return new (t || WarehouseQcInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
WarehouseQcInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseQcInvoiceComponent, selectors: [["pek-warehouse-qc-invoice"]], decls: 17, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "selection", "value", "rows", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Accept to warehouse", 3, "disabled", "click"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "20%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseQcInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Invoice Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseQcInvoiceComponent_Template_p_table_selectionChange_9_listener($event) { return ctx.selectedInvoiceProducts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, WarehouseQcInvoiceComponent_ng_template_11_Template, 4, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WarehouseQcInvoiceComponent_ng_template_12_Template, 13, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseQcInvoiceComponent_ng_template_13_Template, 13, 7, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseQcInvoiceComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseQcInvoiceComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseQcInvoiceComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.invoiceProducts.length > 0)("selection", ctx.selectedInvoiceProducts)("value", ctx.invoiceProducts)("rows", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.invoiceProducts.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcWMtaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 59781:
/*!******************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-qc/warehouse-qc-order/warehouse-qc-order.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseQcOrderComponent": () => (/* binding */ WarehouseQcOrderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../procurement/services/order.service */ 37593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);











function WarehouseQcOrderComponent_ng_template_11_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Order Products to Accept Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseQcOrderComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseQcOrderComponent_ng_template_11_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcOrderComponent_ng_template_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onShowImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcOrderComponent_ng_template_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onAcceptToWarehouse()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.selectedOrderProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.selectedOrderProducts.length > 1 || ctx_r1.selectedOrderProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.selectedOrderProducts.length === 0);
} }
function WarehouseQcOrderComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseQcOrderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", invoice_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.current_technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r11.passed_quantity);
} }
function WarehouseQcOrderComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function WarehouseQcOrderComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseQcOrderComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseQcOrderComponent_ng_template_14_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseQcOrderComponent_ng_template_14_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseQcOrderComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcOrderComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseQcOrderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseQcOrderComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseQcOrderComponent {
    constructor(orderService, route, router, modalService) {
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.isLoading = true;
        this.orderProducts = [];
        this.selectedOrderProducts = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getInvoices();
    }
    getInvoices() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(id => this.orderId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.orderService.getProductsToAccept(this.orderId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(orderProducts => {
            this.orderProducts = orderProducts;
            this.isLoading = false;
        });
    }
    onAcceptToWarehouse() {
        this.orderService.openAcceptToWarehouseModal(this.selectedOrderProducts, this.orderId).subscribe(response => {
            if (response) {
                this.selectedOrderProducts.forEach(product => {
                    this.orderProducts = this.orderProducts.filter(p => p.id !== product.id);
                });
                if (this.orderProducts.length === 0) {
                    this.router.navigate(['../../'], { relativeTo: this.route });
                }
                this.selectedOrderProducts = [];
            }
        });
    }
    onShowImages() {
        this.modalService.showImageGallery([], this.selectedOrderProducts[0].nomenclature.id, 1).subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseQcOrderComponent.ɵfac = function WarehouseQcOrderComponent_Factory(t) { return new (t || WarehouseQcOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
WarehouseQcOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseQcOrderComponent, selectors: [["pek-warehouse-qc-order"]], decls: 17, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "selection", "value", "rows", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Accept to warehouse", 3, "disabled", "click"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "20%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseQcOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Order Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseQcOrderComponent_Template_p_table_selectionChange_9_listener($event) { return ctx.selectedOrderProducts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, WarehouseQcOrderComponent_ng_template_11_Template, 4, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WarehouseQcOrderComponent_ng_template_12_Template, 13, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseQcOrderComponent_ng_template_13_Template, 13, 7, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseQcOrderComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseQcOrderComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseQcOrderComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.orderProducts.length > 0)("selection", ctx.selectedOrderProducts)("value", ctx.orderProducts)("rows", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.orderProducts.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcWMtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 30464:
/*!*****************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-qc/warehouse-qc.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseQcComponent": () => (/* binding */ WarehouseQcComponent)
/* harmony export */ });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _shared_services_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/tree.service */ 66106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ 79504);














function WarehouseQcComponent_ng_template_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the Manufacturing Procurement or Outsourcing Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["invoice", a1]; };
function WarehouseQcComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WarehouseQcComponent_ng_template_12_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_12_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.expandCollapseAllInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.expandCollapseAllInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.expandCollapseAllInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r0.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, (ctx_r0.selectedInvoiceNode == null ? null : ctx_r0.selectedInvoiceNode.data.order) ? ctx_r0.selectedInvoiceNode == null ? null : ctx_r0.selectedInvoiceNode.data.order.id : ctx_r0.selectedInvoiceNode == null ? null : ctx_r0.selectedInvoiceNode.data.id));
} }
function WarehouseQcComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function WarehouseQcComponent_ng_template_14_tr_0_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r18.description, ")");
} }
function WarehouseQcComponent_ng_template_14_tr_0_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", invoice_r18.categories, ") ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WarehouseQcComponent_ng_template_14_tr_0_ng_container_4_span_3_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WarehouseQcComponent_ng_template_14_tr_0_ng_container_4_i_4_Template, 2, 1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("category-name", invoice_r18.level === 0 && invoice_r18.hideFromTable !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r18.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.level < 4 && invoice_r18.level > 0);
} }
function WarehouseQcComponent_ng_template_14_tr_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, invoice_r18.order.system_creation_date, "dd/MM/yyyy"));
} }
function WarehouseQcComponent_ng_template_14_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-warning", invoice_r18.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r18.order.self_serial_number, " ", invoice_r18.order.self_proforma_serial_number, " ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r18.supplier == null ? null : invoice_r18.supplier.name, " ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r18.order.supplier == null ? null : invoice_r18.order.supplier.name, " ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r18.order.order == null ? null : invoice_r18.order.order.id, " ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r18.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r18.plan.list_product.nomenclature.code, "~", invoice_r18.plan.list_product.nomenclature.name, " ");
} }
function WarehouseQcComponent_ng_template_14_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 28)(1, "td", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WarehouseQcComponent_ng_template_14_tr_0_ng_container_4_Template, 5, 5, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WarehouseQcComponent_ng_template_14_tr_0_ng_container_5_Template, 4, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WarehouseQcComponent_ng_template_14_tr_0_span_7_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, WarehouseQcComponent_ng_template_14_tr_0_ng_container_9_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, WarehouseQcComponent_ng_template_14_tr_0_span_10_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WarehouseQcComponent_ng_template_14_tr_0_span_12_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, WarehouseQcComponent_ng_template_14_tr_0_ng_container_14_Template, 3, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, WarehouseQcComponent_ng_template_14_tr_0_span_16_Template, 2, 2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const invoiceNode_r17 = ctx_r40.$implicit;
    const invoice_r18 = ctx_r40.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", invoiceNode_r17)("ttSelectableRowDisabled", !invoice_r18.order && !invoice_r18.level || invoice_r18.level < 4)("ttSelectableRow", invoiceNode_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-center", invoice_r18.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", invoiceNode_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !invoice_r18.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.level === 4 && invoice_r18.plan);
} }
function WarehouseQcComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, WarehouseQcComponent_ng_template_14_tr_0_Template, 17, 14, "tr", 27);
} if (rf & 2) {
    const invoice_r18 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !invoice_r18.hideFromTable);
} }
function WarehouseQcComponent_ng_template_15_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 38);
} }
function WarehouseQcComponent_ng_template_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function WarehouseQcComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, WarehouseQcComponent_ng_template_15_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WarehouseQcComponent_ng_template_15_span_3_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
function WarehouseQcComponent_ng_template_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the Own Production Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["order", a1]; };
function WarehouseQcComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WarehouseQcComponent_ng_template_19_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r44.expandCollapseAllOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.expandCollapseAllOrders(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r4.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r4.selectedOrderNode == null ? null : ctx_r4.selectedOrderNode.data.order.id));
} }
function WarehouseQcComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function WarehouseQcComponent_ng_template_21_tr_0_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", rowData_r48.categories, ") ");
} }
function WarehouseQcComponent_ng_template_21_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, rowData_r48.order == null ? null : rowData_r48.order.created, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_21_tr_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-warning", rowData_r48.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r48.order.id, " ");
} }
function WarehouseQcComponent_ng_template_21_tr_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const rowData_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, rowData_r48.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_21_tr_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const rowData_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", rowData_r48.plan.list_product.nomenclature.code, "~", rowData_r48.plan.list_product.nomenclature.name, " ");
} }
function WarehouseQcComponent_ng_template_21_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 42)(1, "td", 43)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WarehouseQcComponent_ng_template_21_tr_0_i_6_Template, 2, 1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WarehouseQcComponent_ng_template_21_tr_0_span_7_Template, 3, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, WarehouseQcComponent_ng_template_21_tr_0_span_9_Template, 2, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, WarehouseQcComponent_ng_template_21_tr_0_ng_container_11_Template, 3, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, WarehouseQcComponent_ng_template_21_tr_0_ng_container_13_Template, 2, 2, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rowNode_r47 = ctx_r60.$implicit;
    const rowData_r48 = ctx_r60.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", rowNode_r47)("ttSelectableRow", rowNode_r47)("ttSelectableRowDisabled", rowData_r48.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", rowNode_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("category-name", !rowData_r48.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r48.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r48.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r48.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r48.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r48.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r48.order && rowData_r48.plan);
} }
function WarehouseQcComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, WarehouseQcComponent_ng_template_21_tr_0_Template, 14, 12, "tr", 41);
} if (rf & 2) {
    const rowData_r48 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rowData_r48.hideFromTable);
} }
function WarehouseQcComponent_ng_template_22_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 38);
} }
function WarehouseQcComponent_ng_template_22_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function WarehouseQcComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, WarehouseQcComponent_ng_template_22_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WarehouseQcComponent_ng_template_22_span_3_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
} }
function WarehouseQcComponent_ng_template_26_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the Purchase Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function WarehouseQcComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WarehouseQcComponent_ng_template_26_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_26_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.expandCollapsePurchasedInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarehouseQcComponent_ng_template_26_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r66.expandCollapsePurchasedInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r8.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, (ctx_r8.selectedPurchasedInvoiceNode == null ? null : ctx_r8.selectedPurchasedInvoiceNode.data.invoice) ? ctx_r8.selectedPurchasedInvoiceNode == null ? null : ctx_r8.selectedPurchasedInvoiceNode.data.invoice.id : ctx_r8.selectedPurchasedInvoiceNode == null ? null : ctx_r8.selectedPurchasedInvoiceNode.data.id));
} }
function WarehouseQcComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function WarehouseQcComponent_ng_template_28_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r68.description, ")");
} }
function WarehouseQcComponent_ng_template_28_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", invoice_r68.categories, ") ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WarehouseQcComponent_ng_template_28_ng_container_4_span_3_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WarehouseQcComponent_ng_template_28_ng_container_4_i_4_Template, 2, 1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("category-name", invoice_r68.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", invoice_r68.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level < 4 && invoice_r68.level > 0);
} }
function WarehouseQcComponent_ng_template_28_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, invoice_r68.system_creation_date, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_28_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r68.invoice.system_creation_date, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r68.self_serial_number, " ", invoice_r68.self_proforma_serial_number, " ");
} }
function WarehouseQcComponent_ng_template_28_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-warning", invoice_r68.invoice.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r68.invoice.self_serial_number, " ", invoice_r68.invoice.self_proforma_serial_number, " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r68.supplier == null ? null : invoice_r68.supplier.name, " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r68.invoice.supplier == null ? null : invoice_r68.invoice.supplier.name, " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r68.order == null ? null : invoice_r68.order.id, " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r68.invoice.order == null ? null : invoice_r68.invoice.order.id, " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r68.items_reception_date, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r68.invoice.items_reception_date, "dd/MM/yyyy"), " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", root_list_r98.list_product.nomenclature.name, " ");
} }
function WarehouseQcComponent_ng_template_28_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WarehouseQcComponent_ng_template_28_ng_container_20_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", invoice_r68.root_production_plans);
} }
function WarehouseQcComponent_ng_template_28_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r68.plan.list_product.nomenclature.code, "~", invoice_r68.plan.list_product.nomenclature.name, " ");
} }
function WarehouseQcComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 28)(1, "td", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WarehouseQcComponent_ng_template_28_ng_container_4_Template, 5, 5, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WarehouseQcComponent_ng_template_28_ng_container_5_Template, 4, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WarehouseQcComponent_ng_template_28_span_6_Template, 3, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, WarehouseQcComponent_ng_template_28_ng_container_8_Template, 2, 2, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, WarehouseQcComponent_ng_template_28_span_9_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, WarehouseQcComponent_ng_template_28_ng_container_11_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WarehouseQcComponent_ng_template_28_ng_container_12_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, WarehouseQcComponent_ng_template_28_ng_container_14_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, WarehouseQcComponent_ng_template_28_ng_container_15_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, WarehouseQcComponent_ng_template_28_ng_container_17_Template, 3, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, WarehouseQcComponent_ng_template_28_ng_container_18_Template, 3, 4, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, WarehouseQcComponent_ng_template_28_ng_container_20_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, WarehouseQcComponent_ng_template_28_ng_container_21_Template, 2, 2, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoiceNode_r67 = ctx.$implicit;
    const invoice_r68 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", invoiceNode_r67)("ttSelectableRowDisabled", !invoice_r68.order && !invoice_r68.level || invoice_r68.level < 4)("ttSelectableRow", invoiceNode_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-center", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", invoiceNode_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r68.level === 4 && invoice_r68.plan);
} }
function WarehouseQcComponent_ng_template_29_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 38);
} }
function WarehouseQcComponent_ng_template_29_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function WarehouseQcComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, WarehouseQcComponent_ng_template_29_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WarehouseQcComponent_ng_template_29_span_3_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r11.isLoading);
} }
class WarehouseQcComponent {
    constructor(invoiceService, orderService, productStructureCategoriesService, treeService) {
        this.invoiceService = invoiceService;
        this.orderService = orderService;
        this.productStructureCategoriesService = productStructureCategoriesService;
        this.treeService = treeService;
        this.isLoading = true;
        this.invoices = [];
        this.orders = [];
    }
    ngOnInit() {
        // this.getCategories();
        // this.getInvoices();
        // this.getOrders();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
            categories: this.productStructureCategoriesService.get(),
            invoices: this.invoiceService.get([
                { name: 'completed', value: true },
                { name: 'qc_completed', value: true },
                { name: 'is_full_accepted', value: false }
            ]),
            orders: this.orderService.get([
                { name: 'completed', value: true },
                { name: 'qc_completed', value: true },
                { name: 'is_full_accepted', value: false }
            ])
        }).subscribe(({ categories, invoices, orders }) => {
            this.categories = this.treeService.createTree(categories);
            this.ownProductionCategorizedList = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
            this.invoices = invoices;
            this.makeUniqueProductionPlansInvoice(this.invoices);
            this.resetProductPaymentTree();
            this.orders = orders;
            this.makeUniqueProductionPlansInvoice(this.orders);
            this.fillOwnProductionWithData();
            this.isLoading = false;
        });
    }
    getCategories() {
        this.productStructureCategoriesService.get().subscribe(categories => {
            // this.categories = this.treeService.createTree(categories);
            // this.ownProductionCategorizedList = cloneDeep(this.categories);
        });
    }
    getInvoices() {
        this.invoiceService.get([
            { name: 'completed', value: true },
            { name: 'qc_completed', value: true },
            { name: 'is_full_accepted', value: false }
        ]).subscribe(invoices => {
            this.invoices = invoices;
            this.makeUniqueProductionPlansInvoice(this.invoices);
            this.resetProductPaymentTree();
            this.isLoading = false;
        });
    }
    getOrders() {
        this.orderService.get([
            { name: 'completed', value: true },
            { name: 'qc_completed', value: true },
            { name: 'is_full_accepted', value: false }
        ]).subscribe(orders => {
            this.orders = orders;
            this.makeUniqueProductionPlansInvoice(this.orders);
            this.fillOwnProductionWithData();
        });
    }
    makeUniqueProductionPlansInvoice(items) {
        items.forEach(item => {
            item.unique_root_production_plans = [];
            item.root_production_plans.forEach(plan => {
                if (plan.root_nomenclature) {
                    const nomenclatureId = plan.root_nomenclature.id;
                    const existingIndex = item.unique_root_production_plans.findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);
                    if (existingIndex < 0) {
                        item.unique_root_production_plans.push(plan);
                    }
                }
            });
        });
    }
    fillOwnProductionWithData() {
        this.fillCategorizedTree();
    }
    fillCategorizedTree() {
        const categoriesTemp = [];
        this.orders.forEach(order => {
            order.unique_root_production_plans.forEach(plan => {
                if (plan.root_nomenclature && plan.root_nomenclature.root_category) {
                    const rootCatId = plan.root_nomenclature.root_category.id;
                    const rootCatName = plan.root_nomenclature.root_category.name;
                    const rootLevel = 1;
                    const catId = plan.root_nomenclature.id;
                    const catName = plan.root_nomenclature.name;
                    const catLevel = 2;
                    const rootExistsIndex = categoriesTemp.findIndex(cat => cat.id === rootCatId && rootLevel === cat.level);
                    if (rootExistsIndex < 0) {
                        categoriesTemp.push({
                            id: rootCatId,
                            level: rootLevel,
                            name: rootCatName,
                            parentId: null
                        });
                    }
                    const catExistsIndex = categoriesTemp.findIndex(cat => cat.id === catId && catLevel === cat.level);
                    if (catExistsIndex < 0) {
                        categoriesTemp.push({
                            id: catId,
                            level: catLevel,
                            name: catName,
                            parentId: rootCatId
                        });
                    }
                }
            });
            if (order.unique_root_production_plans.length < 1) {
                const noCategoryIndex = this.ownProductionCategorizedList.findIndex(nodeInner => nodeInner.data.id === -1);
                if (noCategoryIndex < 0) {
                    this.ownProductionCategorizedList.push({
                        data: {
                            id: -1,
                            level: 1,
                            name: 'No Root List',
                            parentId: null
                        },
                        expanded: false,
                        children: [
                            {
                                data: { order, plan: null, level: 4 },
                                expanded: false,
                                children: []
                            }
                        ]
                    });
                }
                else {
                    this.ownProductionCategorizedList[noCategoryIndex].children.push({
                        data: { order, plan: null, level: 4 },
                        expanded: false,
                        children: []
                    });
                }
            }
        });
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.ownProductionCategorizedList);
        temp.forEach(node => {
            this.appendCategories(node, categoriesTemp);
        });
        temp.forEach(node => {
            this.fillWithTheData(node, this.orders);
        });
        temp.forEach(node => {
            this.removeUpdateEmptyCategories(node);
        });
        this.ownProductionCategorizedList = temp;
    }
    resetProductPaymentTree() {
        const categories = [];
        this.invoices.forEach(invoice => {
            const purchaseCategory = invoice.purchase_category;
            if (purchaseCategory) {
                const isAdded = categories.findIndex(el => el.id === purchaseCategory.id);
                if (isAdded < 0) {
                    categories.push({
                        name: purchaseCategory.name,
                        id: purchaseCategory.id,
                        description: purchaseCategory.description
                    });
                }
            }
            else {
                if (invoice.order.accounting_type === 1) {
                    const isAdded = categories.findIndex(el => el.id === -2);
                    if (isAdded < 0) {
                        categories.push({ name: 'Manufacturing Procurement', id: -2, description: '', level: 0 });
                    }
                }
                if (invoice.order.accounting_type === 2) {
                    const isAdded = categories.findIndex(el => el.id === -1);
                    if (isAdded < 0) {
                        categories.push({ name: 'Outsourcing', id: -1, description: '', level: 0 });
                    }
                }
            }
        });
        this.invoiceTree = [];
        categories.sort((a, b) => a.id - b.id);
        categories.forEach(cat => {
            this.invoiceTree.push({
                data: cat,
                expanded: false,
                parent: null
            });
        });
        this.createPaymentTree();
    }
    createPaymentTree() {
        this.invoiceTree = this.invoiceTree.map(node => {
            return {
                ...node,
                children: []
            };
        });
        this.invoiceTree.forEach(node => {
            this.invoices.filter(invoice => invoice.purchase_category).forEach(invoice => {
                const purchaseCategory = invoice.purchase_category;
                if (purchaseCategory) {
                    if (purchaseCategory.id === node.data.id) {
                        node.children.push({
                            data: invoice,
                            expanded: false,
                            children: []
                        });
                    }
                }
            });
            // Preparing Manufacturing Procurement
            if (node.data.id === -2) {
                const manProc = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order.accounting_type === 1);
                node.children = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
                this.prepareInnerTreeCategories(manProc, node);
            }
            // Preparing Outsourcing
            if (node.data.id === -1) {
                const outsourcing = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order.accounting_type === 2);
                node.children = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
                this.prepareInnerTreeCategories(outsourcing, node);
            }
        });
        this.separatePurchasedAndManufactured();
    }
    prepareInnerTreeCategories(invoices, nodeInner) {
        const categoriesTemp = [];
        invoices.forEach(order => {
            order.unique_root_production_plans.forEach(plan => {
                if (plan.root_nomenclature) {
                    const rootCatId = plan.root_nomenclature.root_category.id;
                    const rootCatName = plan.root_nomenclature.root_category.name;
                    const rootLevel = 1;
                    const catId = plan.root_nomenclature.id;
                    const catName = plan.root_nomenclature.name;
                    const catLevel = 2;
                    const rootExistsIndex = categoriesTemp.findIndex(cat => cat.id === rootCatId && rootLevel === cat.level);
                    if (rootExistsIndex < 0) {
                        categoriesTemp.push({
                            id: rootCatId,
                            level: rootLevel,
                            name: rootCatName,
                            parentId: null
                        });
                    }
                    const catExistsIndex = categoriesTemp.findIndex(cat => cat.id === catId && catLevel === cat.level);
                    if (catExistsIndex < 0) {
                        categoriesTemp.push({
                            id: catId,
                            level: catLevel,
                            name: catName,
                            parentId: rootCatId
                        });
                    }
                }
                else {
                    const indexNoNomenclature = categoriesTemp.findIndex(cat => cat.id === -2);
                    if (indexNoNomenclature < 0) {
                        categoriesTemp.push({
                            id: -2,
                            level: 1,
                            name: 'No root nomenclature',
                            parentId: null
                        });
                    }
                }
            });
            if (order.unique_root_production_plans.length < 1) {
                const noCategoryIndex = nodeInner.children.findIndex(node => node.data.id === -1);
                if (noCategoryIndex < 0) {
                    nodeInner.children.push({
                        data: {
                            id: -1,
                            level: 1,
                            name: 'No Root List',
                            parentId: null
                        },
                        expanded: false,
                        children: [
                            {
                                data: { order, plan: null, level: 4 },
                                expanded: false,
                                children: []
                            }
                        ]
                    });
                }
                else {
                    nodeInner.children[noCategoryIndex].children.push({
                        data: { order, plan: null, level: 4 },
                        expanded: false,
                        children: []
                    });
                }
            }
        });
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(nodeInner.children);
        temp.forEach(node => {
            this.appendCategories(node, categoriesTemp);
        });
        temp.forEach(node => {
            this.fillWithTheData(node, invoices);
        });
        temp.forEach(node => {
            this.removeUpdateEmptyCategories(node);
        });
        nodeInner.children = temp;
    }
    separatePurchasedAndManufactured() {
        this.invoicePurchasedTree = this.invoiceTree.filter(invoice => invoice.data.id >= 0);
        this.invoiceManufacturedTree = this.invoiceTree.filter(invoice => invoice.data.id < 0);
    }
    appendCategories(node, categoriesTemp) {
        if (!node.children) {
            node.children = [];
        }
        categoriesTemp.forEach(cat => {
            if (cat.parentId === node.data.id) {
                node.children.push({
                    data: {
                        id: cat.id,
                        name: cat.name,
                        level: cat.level,
                        parentId: cat.parentId,
                        isCategory: true,
                        categories: 0
                    },
                    expanded: false,
                    children: []
                });
            }
        });
        if (node.children) {
            node.children.forEach(childNode => {
                this.appendCategories(childNode, categoriesTemp);
            });
        }
    }
    fillWithTheData(node, orders) {
        if (!node.children) {
            node.children = [];
        }
        if (node.data.isCategory) {
            orders.forEach(order => {
                order.unique_root_production_plans.forEach(plan => {
                    if (plan.root_nomenclature) {
                        const catId = plan.root_nomenclature.id;
                        if (node.data.id === catId) {
                            const existingCatChildIndex = node.children.findIndex(cat => cat.data.id === plan.list_product.nomenclature.id);
                            if (existingCatChildIndex < 0) {
                                node.children.push({
                                    data: {
                                        id: plan.list_product.nomenclature.id,
                                        name: plan.list_product.nomenclature.name,
                                        level: 3,
                                        categories: 0,
                                    },
                                    expanded: false,
                                    children: [{
                                            data: { order, plan, level: 4 },
                                            expanded: false,
                                            children: []
                                        }]
                                });
                            }
                            else {
                                node.children[existingCatChildIndex].children.push({
                                    data: { order, plan, level: 4 },
                                    expanded: false,
                                    children: []
                                });
                            }
                        }
                    }
                });
            });
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.fillWithTheData(childNode, orders);
            });
        }
    }
    removeUpdateEmptyCategories(node) {
        if (!node.data.isCategory && !node.data.order) {
            let hideFromTable = true;
            const hasContent = node.children.filter(child => child.data.order).length > 0;
            if (hasContent) {
                hideFromTable = false;
            }
            node.children.forEach(childNode => {
                checkForContent(childNode);
            });
            function checkForContent(childNode) {
                if (hideFromTable) {
                    const hasContentInner = childNode.children.filter(child => child.data.order).length > 0;
                    if (hasContentInner) {
                        hideFromTable = false;
                    }
                }
                childNode.children.forEach(childNode2 => {
                    checkForContent(childNode2);
                });
            }
            node.data.hideFromTable = hideFromTable;
        }
        node.data.categories = node.children.length;
        if (node.children) {
            node.children.forEach((childNode, indexChild) => {
                this.removeUpdateEmptyCategories(childNode);
            });
        }
    }
    expandCollapseAllInvoices(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.invoiceManufacturedTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.invoiceManufacturedTree = temp;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    expandCollapseAllOrders(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.ownProductionCategorizedList);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.ownProductionCategorizedList = temp;
    }
    expandCollapsePurchasedInvoices(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.invoicePurchasedTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.invoicePurchasedTree = temp;
    }
}
WarehouseQcComponent.ɵfac = function WarehouseQcComponent_Factory(t) { return new (t || WarehouseQcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_tree_service__WEBPACK_IMPORTED_MODULE_4__.TreeService)); };
WarehouseQcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: WarehouseQcComponent, selectors: [["pek-warehouse-qc"]], decls: 30, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "custom-tabs"], ["header", "Manufacturing Procurement and Outsourcing Invoices", 3, "selected"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 21.85rem)", 3, "value", "scrollable", "selection", "selectionChange"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Own Production Invoices"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 21.85rem)", 3, "value", "selection", "scrollable", "selectionChange"], ["header", "Purchase Invoices"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", 1, "ml-auto", "mr-2", 3, "routerLink", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand All", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse All", 3, "click"], [1, "subtitle"], [2, "width", "30%", "padding-left", "19px"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "15%"], [2, "width", "20%"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow", 4, "ngIf"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow"], [2, "width", "30%"], [1, "table-toggle"], [3, "rowNode"], [4, "ngIf"], [3, "text-warning", 4, "ngIf"], ["style", "font-style: normal", 4, "ngIf"], [2, "font-style", "normal"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", 1, "ml-auto", "mr-2", 3, "routerLink"], [2, "width", "55%", "padding-left", "19px"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled", 4, "ngIf"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"], [1, "text-center", 2, "width", "55%"], [1, "category-name"], [4, "ngFor", "ngForOf"]], template: function WarehouseQcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "QC-Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "p-tabView", 6)(9, "p-tabPanel", 7)(10, "div", 8)(11, "p-treeTable", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function WarehouseQcComponent_Template_p_treeTable_selectionChange_11_listener($event) { return ctx.selectedInvoiceNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WarehouseQcComponent_ng_template_12_Template, 5, 6, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, WarehouseQcComponent_ng_template_13_Template, 13, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, WarehouseQcComponent_ng_template_14_Template, 1, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, WarehouseQcComponent_ng_template_15_Template, 4, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p-tabPanel", 14)(17, "div", 8)(18, "p-treeTable", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function WarehouseQcComponent_Template_p_treeTable_selectionChange_18_listener($event) { return ctx.selectedOrderNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, WarehouseQcComponent_ng_template_19_Template, 5, 6, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, WarehouseQcComponent_ng_template_20_Template, 9, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, WarehouseQcComponent_ng_template_21_Template, 1, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, WarehouseQcComponent_ng_template_22_Template, 4, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p-tabPanel", 16)(24, "div", 8)(25, "p-treeTable", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function WarehouseQcComponent_Template_p_treeTable_selectionChange_25_listener($event) { return ctx.selectedPurchasedInvoiceNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, WarehouseQcComponent_ng_template_26_Template, 5, 6, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, WarehouseQcComponent_ng_template_27_Template, 13, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, WarehouseQcComponent_ng_template_28_Template, 22, 19, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, WarehouseQcComponent_ng_template_29_Template, 4, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.invoiceManufacturedTree)("scrollable", true)("selection", ctx.selectedInvoiceNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.ownProductionCategorizedList)("selection", ctx.selectedOrderNode)("scrollable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.invoicePurchasedTree)("scrollable", true)("selection", ctx.selectedPurchasedInvoiceNode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTSelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS1xYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJ3YXJlaG91c2UtcWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 46820:
/*!*************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-serial-types/warehouse-serial-types.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseSerialTypesComponent": () => (/* binding */ WarehouseSerialTypesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_serial_type_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/serial-type.service */ 2595);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









function WarehouseSerialTypesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Serial Type to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseSerialTypesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseSerialTypesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedSerialType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedSerialType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function WarehouseSerialTypesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Prefix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Start Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseSerialTypesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", type_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r8.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r8.start_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r8.suffix);
} }
function WarehouseSerialTypesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function WarehouseSerialTypesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseSerialTypesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseSerialTypesComponent_ng_template_16_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseSerialTypesComponent_ng_template_16_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseSerialTypesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseSerialTypesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseSerialTypesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseSerialTypesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseSerialTypesComponent {
    constructor(serialTypeService, modalService) {
        this.serialTypeService = serialTypeService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Serial Type',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditSerialType()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveSerialType()
                    }
                ]
            }];
        this.isLoading = true;
        this.serialTypes = [];
    }
    ngOnInit() {
        this.getSerialTypes();
    }
    getSerialTypes() {
        this.serialTypeService.get().subscribe(serialTypes => {
            this.serialTypes = serialTypes;
            this.isLoading = false;
        });
    }
    onEditSerialType() {
        this.serialTypeService.createEditSerialTypeModal('edit', this.selectedSerialType).subscribe(serialTypes => {
            if (serialTypes) {
                const index = this.serialTypes.findIndex(t => t.id === this.selectedSerialType.id);
                this.serialTypes[index] = serialTypes;
                this.selectedSerialType = this.serialTypes[index];
            }
        });
    }
    onRemoveSerialType() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.serialTypeService.delete(this.selectedSerialType).subscribe(() => {
                    const index = this.serialTypes.findIndex(w => w.id === this.selectedSerialType.id);
                    this.serialTypes.splice(index, 1);
                    this.selectedSerialType = null;
                });
            }
        });
    }
    onAddSerialType() {
        this.serialTypeService.createEditSerialTypeModal('create').subscribe(serialType => {
            if (serialType) {
                this.serialTypes.unshift(serialType);
            }
        });
    }
}
WarehouseSerialTypesComponent.ɵfac = function WarehouseSerialTypesComponent_Factory(t) { return new (t || WarehouseSerialTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_serial_type_service__WEBPACK_IMPORTED_MODULE_0__.SerialTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
WarehouseSerialTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseSerialTypesComponent, selectors: [["pek-warehouse-serial-types"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Serial Type", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [1, "text-center", 2, "width", "20%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseSerialTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Serial Number Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseSerialTypesComponent_Template_button_click_7_listener() { return ctx.onAddSerialType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseSerialTypesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedSerialType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseSerialTypesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseSerialTypesComponent_ng_template_14_Template, 11, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseSerialTypesComponent_ng_template_15_Template, 11, 6, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseSerialTypesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseSerialTypesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, WarehouseSerialTypesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.serialTypes.length > 0)("rows", 10)("selection", ctx.selectedSerialType)("value", ctx.serialTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.serialTypes.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2Utc2VyaWFsLXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 19039:
/*!*************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-tool-request/warehouse-tool-request.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseToolRequestComponent": () => (/* binding */ WarehouseToolRequestComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_tool_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tool-request.service */ 83187);
/* harmony import */ var _services_tool_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tool-order.service */ 85573);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);












function WarehouseToolRequestComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Order ID: ", ctx_r0.order.id, " Area: ", ctx_r0.order.area_locator.area.name, " Locator: ", ctx_r0.order.area_locator.name, " ");
} }
function WarehouseToolRequestComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseToolRequestComponent_ng_template_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.onShowImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.selectedRequest);
} }
function WarehouseToolRequestComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Requested Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function WarehouseToolRequestComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 25)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const request_r12 = ctx.$implicit;
    const i_r13 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", request_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r13 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", request_r12.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", request_r12.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", request_r12.required_quantity, " ");
} }
function WarehouseToolRequestComponent_ng_template_17_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 29);
} }
function WarehouseToolRequestComponent_ng_template_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseToolRequestComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WarehouseToolRequestComponent_ng_template_17_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WarehouseToolRequestComponent_ng_template_17_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function WarehouseToolRequestComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseToolRequestComponent_ng_template_18_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseToolRequestComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseToolRequestComponent_div_19_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function WarehouseToolRequestComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " ...\n");
} }
class WarehouseToolRequestComponent {
    constructor(route, toolRequestService, toolOrderService, modalService, router) {
        this.route = route;
        this.toolRequestService = toolRequestService;
        this.toolOrderService = toolOrderService;
        this.modalService = modalService;
        this.router = router;
        this.isLoading = true;
        this.isCompleting = false;
        this.requests = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(id => this.orderId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.getToolOrder()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.getToolRequest())).subscribe();
    }
    getToolOrder() {
        this.toolOrderService.getById(this.orderId).subscribe(toolOrder => {
            this.order = toolOrder;
        });
    }
    getToolRequest() {
        this.toolRequestService.get([
            { name: 'tool_order', value: this.orderId },
            { name: 'is_completed', value: false }
        ]).subscribe(requests => {
            this.requests = requests;
            this.isLoading = false;
        });
    }
    onShowImages() {
        this.modalService.showImageGallery([], this.selectedRequest.nomenclature.id, 1).subscribe();
    }
    onComplete() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                this.isCompleting = true;
                this.toolOrderService.complete(this.orderId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isCompleting = false)).subscribe(() => {
                    this.router.navigate(['/warehouse/tool-requests/']);
                });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseToolRequestComponent.ɵfac = function WarehouseToolRequestComponent_Factory(t) { return new (t || WarehouseToolRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tool_request_service__WEBPACK_IMPORTED_MODULE_0__.ToolRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tool_order_service__WEBPACK_IMPORTED_MODULE_1__.ToolOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
WarehouseToolRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WarehouseToolRequestComponent, selectors: [["pek-warehouse-tool-request"]], decls: 22, vars: 11, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", 3, "loading", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["empty", ""], [1, "d-flex"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "ml-auto", 3, "disabled", "click"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [2, "width", "45%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseToolRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Tool Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WarehouseToolRequestComponent_ng_container_6_Template, 2, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WarehouseToolRequestComponent_Template_button_click_8_listener() { return ctx.onComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function WarehouseToolRequestComponent_Template_p_table_selectionChange_12_listener($event) { return ctx.selectedRequest = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WarehouseToolRequestComponent_ng_template_14_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WarehouseToolRequestComponent_ng_template_15_Template, 9, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WarehouseToolRequestComponent_ng_template_16_Template, 9, 5, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WarehouseToolRequestComponent_ng_template_17_Template, 4, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WarehouseToolRequestComponent_ng_template_18_Template, 2, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, WarehouseToolRequestComponent_div_19_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, WarehouseToolRequestComponent_ng_template_20_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.order)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx.isCompleting);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("paginator", ctx.requests.length > 0)("rows", 10)("selection", ctx.selectedRequest)("value", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading && ctx.requests.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtdG9vbC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 56538:
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-tool-requests/warehouse-tool-requests.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseToolRequestsComponent": () => (/* binding */ WarehouseToolRequestsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tool-order.service */ 85573);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









function WarehouseToolRequestsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function WarehouseToolRequestsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19)(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const i_r7 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", order_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r6.area_locator.area.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r6.area_locator.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 5, order_r6.created, "dd/MM/yyyy"));
} }
function WarehouseToolRequestsComponent_ng_template_15_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 23);
} }
function WarehouseToolRequestsComponent_ng_template_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseToolRequestsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseToolRequestsComponent_ng_template_15_i_2_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WarehouseToolRequestsComponent_ng_template_15_span_3_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
function WarehouseToolRequestsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseToolRequestsComponent_ng_template_16_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseToolRequestsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "p-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseToolRequestsComponent_div_17_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return [a0]; };
class WarehouseToolRequestsComponent {
    constructor(toolRequestService) {
        this.toolRequestService = toolRequestService;
        this.isLoading = true;
        this.toolRequests = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.getRequests();
    }
    getRequests() {
        this.toolRequestService.get([{ name: 'is_completed', value: false }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(toolRequests => {
            this.toolRequests = toolRequests;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseToolRequestsComponent.ɵfac = function WarehouseToolRequestsComponent_Factory(t) { return new (t || WarehouseToolRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__.ToolOrderService)); };
WarehouseToolRequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WarehouseToolRequestsComponent, selectors: [["pek-warehouse-tool-requests"]], decls: 18, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], [1, "page__block"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Nomenclatures", 1, "ml-auto", 3, "routerLink", "disabled"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "35%"], [1, "text-center", 2, "width", "30%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseToolRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tool Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function WarehouseToolRequestsComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedRequest = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WarehouseToolRequestsComponent_ng_template_13_Template, 9, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WarehouseToolRequestsComponent_ng_template_14_Template, 10, 8, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WarehouseToolRequestsComponent_ng_template_15_Template, 4, 3, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WarehouseToolRequestsComponent_ng_template_16_Template, 2, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, WarehouseToolRequestsComponent_div_17_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.selectedRequest == null ? null : ctx.selectedRequest.id))("disabled", !ctx.selectedRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("paginator", ctx.toolRequests.length > 0)("rows", 10)("selection", ctx.selectedRequest)("value", ctx.toolRequests);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.toolRequests.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtdG9vbC1yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 82090:
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-units-measure/warehouse-units-measure.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseUnitsMeasureComponent": () => (/* binding */ WarehouseUnitsMeasureComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unit_measure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/unit-measure.service */ 74712);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);










function WarehouseUnitsMeasureComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Unit of Measure to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseUnitsMeasureComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseUnitsMeasureComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedUnitMeasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedUnitMeasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function WarehouseUnitsMeasureComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseUnitsMeasureComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
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
    const unit_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", unit_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](unit_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](unit_r8.symbol);
} }
function WarehouseUnitsMeasureComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function WarehouseUnitsMeasureComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseUnitsMeasureComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseUnitsMeasureComponent_ng_template_16_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseUnitsMeasureComponent_ng_template_16_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseUnitsMeasureComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseUnitsMeasureComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseUnitsMeasureComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseUnitsMeasureComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseUnitsMeasureComponent {
    constructor(unitMeasureService, modalService) {
        this.unitMeasureService = unitMeasureService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Unit',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditUnit()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveUnit()
                    }
                ]
            }];
        this.isLoading = true;
        this.unitsMeasure = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getUnitsMeasure();
    }
    getUnitsMeasure() {
        this.unitMeasureService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(unitsMeasure => {
            this.unitsMeasure = unitsMeasure;
            this.isLoading = false;
        });
    }
    onAddUnit() {
        this.unitMeasureService.createEditUnitMeasureModal('create').subscribe(unitMeasure => {
            if (unitMeasure) {
                this.unitsMeasure.unshift(unitMeasure);
            }
        });
    }
    onEditUnit() {
        this.unitMeasureService.createEditUnitMeasureModal('edit', this.selectedUnitMeasure).subscribe(unitMeasure => {
            if (unitMeasure) {
                const index = this.unitsMeasure.findIndex(t => t.id === this.selectedUnitMeasure.id);
                this.unitsMeasure[index] = unitMeasure;
                this.selectedUnitMeasure = this.unitsMeasure[index];
            }
        });
    }
    onRemoveUnit() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.unitMeasureService.delete(this.selectedUnitMeasure).subscribe(() => {
                    const index = this.unitsMeasure.findIndex(w => w.id === this.selectedUnitMeasure.id);
                    this.unitsMeasure.splice(index, 1);
                    this.selectedUnitMeasure = null;
                });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseUnitsMeasureComponent.ɵfac = function WarehouseUnitsMeasureComponent_Factory(t) { return new (t || WarehouseUnitsMeasureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_unit_measure_service__WEBPACK_IMPORTED_MODULE_0__.UnitMeasureService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
WarehouseUnitsMeasureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseUnitsMeasureComponent, selectors: [["pek-warehouse-units-measure"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Unit", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "45%"], [1, "text-center", 2, "width", "50%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseUnitsMeasureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Units of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseUnitsMeasureComponent_Template_button_click_7_listener() { return ctx.onAddUnit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseUnitsMeasureComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedUnitMeasure = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseUnitsMeasureComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseUnitsMeasureComponent_ng_template_14_Template, 7, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseUnitsMeasureComponent_ng_template_15_Template, 7, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseUnitsMeasureComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseUnitsMeasureComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, WarehouseUnitsMeasureComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.unitsMeasure.length > 0)("rows", 10)("selection", ctx.selectedUnitMeasure)("value", ctx.unitsMeasure);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.unitsMeasure.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_9__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtdW5pdHMtbWVhc3VyZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 11878:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-warehouses/warehouse-warehouses.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseWarehousesComponent": () => (/* binding */ WarehouseWarehousesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/warehouse.service */ 57098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);











function WarehouseWarehousesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Warehouse to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseWarehousesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseWarehousesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedWarehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedWarehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function WarehouseWarehousesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseWarehousesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
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
    const warehouse_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", warehouse_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](warehouse_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](warehouse_r8.description);
} }
function WarehouseWarehousesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function WarehouseWarehousesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseWarehousesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseWarehousesComponent_ng_template_16_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseWarehousesComponent_ng_template_16_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function WarehouseWarehousesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseWarehousesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseWarehousesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseWarehousesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseWarehousesComponent {
    constructor(warehouseService, router, route, modalService) {
        this.warehouseService = warehouseService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Warehouse',
                items: [
                    {
                        label: 'Locators',
                        icon: 'pi pi-bars',
                        command: () => this.onGoToWarehouseLocators()
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditTechnology()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveTechnology()
                    }
                ]
            }];
        this.warehouses = [];
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getWarehouses();
    }
    getWarehouses() {
        this.warehouseService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(warehouses => {
            this.warehouses = warehouses;
            this.isLoading = false;
        });
    }
    onAddWarehouse() {
        this.warehouseService.createEditWarehouseModal('create').subscribe(warehouse => {
            if (warehouse) {
                this.warehouses.unshift(warehouse);
            }
        });
    }
    onGoToWarehouseLocators() {
        this.router.navigate([this.selectedWarehouse.id, 'locators'], { relativeTo: this.route });
    }
    onEditTechnology() {
        this.warehouseService.createEditWarehouseModal('edit', this.selectedWarehouse).subscribe(warehouse => {
            if (warehouse) {
                const index = this.warehouses.findIndex(t => t.id === this.selectedWarehouse.id);
                this.warehouses[index] = warehouse;
                this.selectedWarehouse = this.warehouses[index];
            }
        });
    }
    onRemoveTechnology() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.warehouseService.delete(this.selectedWarehouse).subscribe(() => {
                    const index = this.warehouses.findIndex(w => w.id === this.selectedWarehouse.id);
                    this.warehouses.splice(index, 1);
                    this.selectedWarehouse = null;
                });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseWarehousesComponent.ɵfac = function WarehouseWarehousesComponent_Factory(t) { return new (t || WarehouseWarehousesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
WarehouseWarehousesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseWarehousesComponent, selectors: [["pek-warehouse-warehouses"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Warehouse", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "45%"], [2, "width", "50%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseWarehousesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseWarehousesComponent_Template_button_click_7_listener() { return ctx.onAddWarehouse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseWarehousesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedWarehouse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseWarehousesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseWarehousesComponent_ng_template_14_Template, 7, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseWarehousesComponent_ng_template_15_Template, 7, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseWarehousesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseWarehousesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, WarehouseWarehousesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.warehouses.length > 0)("rows", 10)("selection", ctx.selectedWarehouse)("value", ctx.warehouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.warehouses.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_10__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2Utd2FyZWhvdXNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 40242:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-where-used/warehouse-where-used.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseWhereUsedComponent": () => (/* binding */ WarehouseWhereUsedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 87958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pickers/product-structure-category-picker/product-structure-category-picker.component */ 77506);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/product-category-picker/product-category-picker.component */ 15051);















const _c0 = ["paginator"];
const _c1 = ["searchBoxName"];
const _c2 = ["searchBoxCode"];
function WarehouseWhereUsedComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function WarehouseWhereUsedComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 32)(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const nomenclature_r14 = ctx.$implicit;
    const i_r15 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pSelectableRow", nomenclature_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r4.searchForm.get("page").value - 1) * 10 + i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](nomenclature_r14.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](nomenclature_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", nomenclature_r14.category == null ? null : nomenclature_r14.category.name, "", nomenclature_r14.root_category == null ? null : nomenclature_r14.root_category.name, "");
} }
function WarehouseWhereUsedComponent_ng_template_38_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 36);
} }
function WarehouseWhereUsedComponent_ng_template_38_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function WarehouseWhereUsedComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WarehouseWhereUsedComponent_ng_template_38_i_2_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WarehouseWhereUsedComponent_ng_template_38_span_3_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.isLoadingNomenclatures);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isLoadingNomenclatures);
} }
function WarehouseWhereUsedComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function WarehouseWhereUsedComponent_ng_template_47_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r18.whereUsedNomenclature.name, " (", ctx_r18.whereUsedNomenclature.code, ") ");
} }
function WarehouseWhereUsedComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Where Used ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WarehouseWhereUsedComponent_ng_template_47_ng_container_2_Template, 2, 2, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.whereUsedNomenclature)("ngIfElse", _r12);
} }
function WarehouseWhereUsedComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function WarehouseWhereUsedComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 30)(4, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const usedNomenclature_r19 = ctx.$implicit;
    const i_r20 = ctx.rowIndex;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r20 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/product-structure/products/structure/" + usedNomenclature_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", usedNomenclature_r19.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](usedNomenclature_r19.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.getType(usedNomenclature_r19.nomenclature.type));
} }
function WarehouseWhereUsedComponent_ng_template_50_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 36);
} }
function WarehouseWhereUsedComponent_ng_template_50_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function WarehouseWhereUsedComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WarehouseWhereUsedComponent_ng_template_50_i_2_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WarehouseWhereUsedComponent_ng_template_50_span_3_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.isLoadingUsedNomenclatures);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r11.isLoadingUsedNomenclatures);
} }
function WarehouseWhereUsedComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Select the Nomenclature)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class WarehouseWhereUsedComponent {
    constructor(fb, nomenclatureService) {
        this.fb = fb;
        this.nomenclatureService = nomenclatureService;
        this.isStartOnePage = false;
        this.isLoadingNomenclatures = true;
        this.isLoadingUsedNomenclatures = false;
        this.nomenclatureList = [];
        this.usedNomenclatures = [];
        this.countNomenclatures = 0;
        this.searchForm = this.fb.group({
            name: [''],
            code: [''],
            category: [''],
            root_categories: [''],
            page: [1]
        });
        this.queryKey = 'name:/code:/categories:/root_categories:';
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true }
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.searchBoxName.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.selectedNomenclature = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => this.searchBoxName.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(350)).subscribe(() => {
            this.searchNomenclatures();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.searchBoxCode.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.selectedNomenclature = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => this.searchBoxCode.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(350)).subscribe(() => {
            this.searchNomenclatures();
        });
    }
    ngOnInit() {
        this.getNomenclatures();
    }
    getNomenclatures() {
        this.nomenclatureService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(nomenclatures => {
            this.nomenclatureList = nomenclatures.results;
            this.countNomenclatures = nomenclatures.count;
            if (this.isStartOnePage) {
                this.paginator.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoadingNomenclatures = false;
        });
    }
    getType(type) {
        switch (type) {
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.PURCHASED:
                return 'Purchased';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.ASSEMBLY:
                return 'Assembly';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.MANUFACTURED:
                return 'Manufactured';
        }
    }
    onSearchWhereUsed() {
        if (this.selectedNomenclature) {
            this.whereUsedNomenclature = this.selectedNomenclature;
            this.isLoadingUsedNomenclatures = true;
            this.usedNomenclatures = [];
            this.destroy$.next(true);
            this.nomenclatureService.searchWhereUsed(this.selectedNomenclature.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(usedNomenclatures => {
                this.usedNomenclatures = usedNomenclatures;
                this.isLoadingUsedNomenclatures = false;
            });
        }
        else {
            this.whereUsedNomenclature = null;
            this.usedNomenclatures = [];
        }
    }
    searchNomenclatures() {
        this.destroy$.next(true);
        this.isLoadingNomenclatures = true;
        this.selectedNomenclature = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/categories:${this.searchForm.get('category').value}/root_categories:${this.searchForm.get('root_categories').value}`;
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
            this.searchForm.get('page').patchValue(1);
            this.isStartOnePage = true;
        }
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true }
        ];
        if (this.searchForm.get('name').value !== '') {
            this.query.push({ name: 'name', value: this.searchForm.get('name').value });
        }
        if (this.searchForm.get('code').value !== '') {
            this.query.push({ name: 'code', value: encodeURIComponent(this.searchForm.get('code').value) });
        }
        if (this.searchForm.get('category').value) {
            this.query.push({ name: 'categories', value: this.searchForm.get('category').value });
        }
        if (this.searchForm.get('root_categories').value)
            this.query.push({
                name: 'root_categories',
                value: this.searchForm.get('root_categories').value
            });
        this.getNomenclatures();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchNomenclatures();
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
    onSelectCategory(ids) {
        if (ids) {
            this.searchForm.get('category').patchValue(ids.join(','));
        }
        else {
            this.searchForm.get('category').patchValue('');
        }
        this.searchNomenclatures();
    }
    onSelectRootCategory(ids) {
        if (ids) {
            this.searchForm.get('root_categories').patchValue(ids.join(','));
        }
        else {
            this.searchForm.get('root_categories').patchValue('');
        }
        this.searchNomenclatures();
    }
}
WarehouseWhereUsedComponent.ɵfac = function WarehouseWhereUsedComponent_Factory(t) { return new (t || WarehouseWhereUsedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__.NomenclatureService)); };
WarehouseWhereUsedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WarehouseWhereUsedComponent, selectors: [["pek-warehouse-where-used"]], viewQuery: function WarehouseWhereUsedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
    } }, decls: 53, vars: 17, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], [1, "warehouse-items__form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], [3, "isAllIds", "choiceCategoryFolAllIds"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 30.25rem)", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["scrollHeight", "calc(100vh - 335px)", "selectionMode", "single", 3, "value", "paginator", "rows"], ["pTemplate", "caption"], ["empty", ""], [1, "text-center", 2, "width", "5%"], [2, "width", "30%"], [2, "width", "35%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "mt-1", "mb-1"], [4, "ngIf", "ngIfElse"], ["target", "_blank", 3, "routerLink"]], template: function WarehouseWhereUsedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Where Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "form", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 9)(24, "div", 10)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "pek-product-category-picker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("choiceCategoryFolAllIds", function WarehouseWhereUsedComponent_Template_pek_product_category_picker_choiceCategoryFolAllIds_27_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9)(29, "div", 10)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Product Structure Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "pek-product-structure-category-picker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("choiceCategoryFolAllIds", function WarehouseWhereUsedComponent_Template_pek_product_structure_category_picker_choiceCategoryFolAllIds_32_listener($event) { return ctx.onSelectRootCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16)(34, "p-table", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function WarehouseWhereUsedComponent_Template_p_table_selectionChange_34_listener($event) { return ctx.selectedNomenclature = $event; })("selectionChange", function WarehouseWhereUsedComponent_Template_p_table_selectionChange_34_listener() { return ctx.onSearchWhereUsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, WarehouseWhereUsedComponent_ng_template_36_Template, 9, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, WarehouseWhereUsedComponent_ng_template_37_Template, 9, 6, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, WarehouseWhereUsedComponent_ng_template_38_Template, 4, 3, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, WarehouseWhereUsedComponent_div_39_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 23)(41, "p-paginator", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onPageChange", function WarehouseWhereUsedComponent_Template_p_paginator_onPageChange_41_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 4)(44, "div", 5)(45, "div", 6)(46, "p-table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, WarehouseWhereUsedComponent_ng_template_47_Template, 3, 2, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, WarehouseWhereUsedComponent_ng_template_48_Template, 9, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, WarehouseWhereUsedComponent_ng_template_49_Template, 10, 5, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, WarehouseWhereUsedComponent_ng_template_50_Template, 4, 3, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, WarehouseWhereUsedComponent_ng_template_51_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isAllIds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isAllIds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedNomenclature)("value", ctx.nomenclatureList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoadingNomenclatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", ctx.nomenclatureList.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 10)("totalRecords", ctx.countNomenclatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.usedNomenclatures)("paginator", ctx.usedNomenclatures.length > 0)("rows", 10);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__.ProductStructureCategoryPickerComponent, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_17__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_18__.Paginator, _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_4__.ProductCategoryPickerComponent], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6IndhcmVob3VzZS13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 84799:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/warehouse/modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductToPhysicalInventoryComponent": () => (/* binding */ AddProductToPhysicalInventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 82242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _shared_components_nomenclature_picker_nomenclature_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/nomenclature-picker/nomenclature-picker.component */ 90728);
/* harmony import */ var _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pickers/group-locator-picker/group-locator-picker.component */ 74159);
/* harmony import */ var _shared_pickers_technology_picker_technology_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/technology-picker/technology-picker.component */ 88457);














function AddProductToPhysicalInventoryComponent_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Technology*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pek-technology-picker", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectTechnology", function AddProductToPhysicalInventoryComponent_div_6_div_10_Template_pek_technology_picker_selectTechnology_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.selectTechnology($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("acceptedTechnologyIds", ctx_r5.selectedNomenclatureTechnologiesIds);
} }
function AddProductToPhysicalInventoryComponent_div_6_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" : ", ctx_r6.selectedNomenclature.code, " ", ctx_r6.selectedNomenclature.name, " ");
} }
function AddProductToPhysicalInventoryComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddProductToPhysicalInventoryComponent_div_6_div_15_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.onSelectProductMode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Select Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AddProductToPhysicalInventoryComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddProductToPhysicalInventoryComponent_div_6_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.onReselectProduct()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Reselect Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AddProductToPhysicalInventoryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "form", 10)(2, "div", 11)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Move to*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "pek-group-locator-picker", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectLocator", function AddProductToPhysicalInventoryComponent_div_6_Template_pek_group_locator_picker_selectLocator_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.selectLocator($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 11)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Quantity*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddProductToPhysicalInventoryComponent_div_6_div_10_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 11)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Product* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AddProductToPhysicalInventoryComponent_div_6_ng_container_14_Template, 2, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddProductToPhysicalInventoryComponent_div_6_div_15_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddProductToPhysicalInventoryComponent_div_6_div_16_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedLocatorId", ctx_r0.form.get("locator_id").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.selectedNomenclature && ctx_r0.selectedNomenclature.type !== ctx_r0.nomenclatureType.PURCHASED && ctx_r0.selectedNomenclatureTechnologiesIds.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.selectedNomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.selectedNomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.selectedNomenclature);
} }
function AddProductToPhysicalInventoryComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddProductToPhysicalInventoryComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.onSave()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx_r1.isSaving)("disabled", ctx_r1.form.invalid);
} }
function AddProductToPhysicalInventoryComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddProductToPhysicalInventoryComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onChoiceProduct()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.selectedNomenclature);
} }
function AddProductToPhysicalInventoryComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "pek-nomenclature-picker", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectProduct", function AddProductToPhysicalInventoryComponent_ng_template_11_Template_pek_nomenclature_picker_selectProduct_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onSelectNomenclature($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("paginationAbsolute", true);
} }
class AddProductToPhysicalInventoryComponent {
    constructor(fb, dialogRef, physicalInventoryService, inventoryId) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.physicalInventoryService = physicalInventoryService;
        this.inventoryId = inventoryId;
        this.isSaving = false;
        this.isSelectProductMode = false;
        this.nomenclatureType = _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType;
        this.selectedNomenclatureTechnologiesIds = [];
        this.form = this.fb.group({
            locator_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            add_quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)]],
            nomenclature_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ngOnInit() {
    }
    onSelectProductMode() {
        this.dialogRef.updateSize('90rem', 'auto');
        this.isSelectProductMode = true;
    }
    selectLocator(id) {
        this.form.get('locator_id').patchValue(id);
    }
    onSelectNomenclature(nomenclature) {
        this.selectedNomenclature = nomenclature;
        if (nomenclature) {
            this.form.get('nomenclature_id').patchValue(nomenclature.id);
            this.selectedNomenclatureTechnologiesIds = nomenclature.technologies.map(t => t.id);
        }
        else {
            this.form.get('nomenclature_id').patchValue(null);
            this.selectedNomenclatureTechnologiesIds = [];
        }
        if (this.selectedNomenclatureTechnologiesIds.length > 0) {
            this.form.addControl('current_technology_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
        }
        else {
            this.form.removeControl('current_technology_id');
        }
    }
    onReselectProduct() {
        this.onSelectProductMode();
        this.selectedNomenclature = null;
        this.form.get('nomenclature_id').patchValue(null);
        this.form.removeControl('current_technology_id');
        this.selectedNomenclatureTechnologiesIds = [];
    }
    onChoiceProduct() {
        this.dialogRef.updateSize('40rem', 'auto');
        this.isSelectProductMode = false;
    }
    onSave() {
        this.isSaving = true;
        const send = this.form.value;
        this.physicalInventoryService.addProductToInventory(this.inventoryId, send).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.isSaving = false)).subscribe(() => this.dialogRef.close(true));
    }
    selectTechnology(id) {
        this.form.get('current_technology_id').patchValue(id);
    }
}
AddProductToPhysicalInventoryComponent.ɵfac = function AddProductToPhysicalInventoryComponent_Factory(t) { return new (t || AddProductToPhysicalInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_1__.PhysicalInventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
AddProductToPhysicalInventoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddProductToPhysicalInventoryComponent, selectors: [["pek-add-product-to-physical-inventory"]], decls: 13, vars: 7, consts: [[1, "modal-header", "modal-header_vertical"], [1, "add-product__header-wrapper"], [1, "add-product__header"], [1, "modal-header__title"], [4, "ngIf", "ngIfElse"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Add Product", "class", "p-button-success", 3, "loading", "disabled", "click", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Select Product", "class", "p-button-success", 3, "disabled", "click", 4, "ngIf"], ["nomenclaturePicker", ""], [3, "formGroup"], [1, "form-group"], [3, "selectedLocatorId", "selectLocator"], ["type", "number", "min", "0", "id", "name", "pInputText", "", "formControlName", "add_quantity"], ["class", "form-group", 4, "ngIf"], [4, "ngIf"], ["class", "custom-button", 4, "ngIf"], [3, "acceptedTechnologyIds", "selectTechnology"], [1, "custom-button"], ["icon", "pi pi-plus", "type", "button", "styleClass", "p-button-text", 3, "click"], ["icon", "pi pi-replay", "type", "button", "styleClass", "p-button-text", 3, "click"], ["pButton", "", "type", "button", "label", "Add Product", 1, "p-button-success", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "label", "Select Product", 1, "p-button-success", 3, "disabled", "click"], [3, "paginationAbsolute", "selectProduct"]], template: function AddProductToPhysicalInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Add product to Physical Inventory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddProductToPhysicalInventoryComponent_div_6_Template, 17, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-dialog-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddProductToPhysicalInventoryComponent_button_9_Template, 1, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddProductToPhysicalInventoryComponent_button_10_Template, 1, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddProductToPhysicalInventoryComponent_ng_template_11_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSelectProductMode)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("buttons", ctx.isSelectProductMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSelectProductMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSelectProductMode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _shared_components_nomenclature_picker_nomenclature_picker_component__WEBPACK_IMPORTED_MODULE_2__.NomenclaturePickerComponent, _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_3__.GroupLocatorPickerComponent, _shared_pickers_technology_picker_technology_picker_component__WEBPACK_IMPORTED_MODULE_4__.TechnologyPickerComponent], styles: [".buttons[_ngcontent-%COMP%] {\n  padding-bottom: 1.125rem !important;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LXRvLXBoeXNpY2FsLWludmVudG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6ImFkZC1wcm9kdWN0LXRvLXBoeXNpY2FsLWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4xMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3107:
/*!***********************************************************************************************!*\
  !*** ./src/app/warehouse/modals/create-edit-serial-type/create-edit-serial-type.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditSerialTypeComponent": () => (/* binding */ CreateEditSerialTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_serial_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serial-type.service */ 2595);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 17485);













function CreateEditSerialTypeComponent_div_32_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditSerialTypeComponent_div_32_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 29)(10, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEditSerialTypeComponent_div_32_ng_template_3_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const nomenclature_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onRemoveNomenclature(nomenclature_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const nomenclature_r5 = ctx.$implicit;
    const i_r6 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](nomenclature_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](nomenclature_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.getType(nomenclature_r5.type));
} }
function CreateEditSerialTypeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreateEditSerialTypeComponent_div_32_ng_template_2_Template, 10, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateEditSerialTypeComponent_div_32_ng_template_3_Template, 11, 4, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.nomenclatures)("paginator", true)("rows", 10);
} }
function CreateEditSerialTypeComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "The nomenclature is missing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CreateEditSerialTypeComponent {
    constructor(fb, serialTypeService, modalService, dialogRef, data) {
        this.fb = fb;
        this.serialTypeService = serialTypeService;
        this.modalService = modalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.nomenclatures = [];
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            prefix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            suffix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            start_number: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            nomenclature_set: [[]],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.serialType.id));
            this.form.patchValue(this.data.serialType);
            this.form.get('nomenclature_set').patchValue(this.data.serialType.nomenclature_set.map(n => n.id));
            this.nomenclatures = this.data.serialType.nomenclature_set;
        }
    }
    getType(type) {
        switch (type) {
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.PURCHASED:
                return 'Purchased';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.ASSEMBLY:
                return 'Assembly';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.MANUFACTURED:
                return 'Manufactured';
        }
    }
    onRemoveNomenclature(id) {
        const index = this.nomenclatures.findIndex(n => n.id === id);
        this.nomenclatures.splice(index, 1);
        this.form.get('nomenclature_set').patchValue(this.nomenclatures.map(n => n.id));
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createSerialType();
                break;
            }
            case 'edit': {
                this.editSerialType();
                break;
            }
        }
    }
    onChoiceNomenclature() {
        this.modalService.choiceNomenclatureModal().subscribe(nomenclature => {
            if (nomenclature) {
                this.form.get('nomenclature_set').value.push(nomenclature.id);
                this.nomenclatures.push(nomenclature);
            }
        });
    }
    createSerialType() {
        const send = this.form.value;
        this.serialTypeService.create(send).subscribe({
            next: serialType => this.dialogRef.close(serialType),
            error: () => this.isSaving = false,
        });
    }
    editSerialType() {
        const send = this.form.value;
        this.serialTypeService.update(send).subscribe({
            next: serialType => this.dialogRef.close(serialType),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditSerialTypeComponent.ɵfac = function CreateEditSerialTypeComponent_Factory(t) { return new (t || CreateEditSerialTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_serial_type_service__WEBPACK_IMPORTED_MODULE_1__.SerialTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
CreateEditSerialTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateEditSerialTypeComponent, selectors: [["pek-create-edit-serial-type"]], decls: 38, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], [1, "row"], [1, "col-4"], ["for", "prefix"], ["formControlName", "prefix", "pInputText", "", "type", "text", "id", "prefix", "required", "required", 1, "form-control"], ["for", "start"], ["formControlName", "start_number", "pInputText", "", "type", "number", "id", "start", "required", "required", 1, "form-control"], ["for", "suffix"], ["formControlName", "suffix", "pInputText", "", "type", "text", "id", "suffix", "required", "required", 1, "form-control"], [1, "nomenclature-header"], [1, "custom-button"], ["icon", "pi pi-plus", "type", "button", "styleClass", "p-button-text", 3, "click"], [4, "ngIf", "ngIfElse"], ["empty", ""], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"], ["selectionMode", "single", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-center", 2, "width", "7%"], [2, "width", "33%"], [2, "width", "30%"], [1, "text-center", 2, "width", "20%"], [1, "text-right", 2, "width", "10%"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", 3, "click"], [1, "empty"]], template: function CreateEditSerialTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 3)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Prefix* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "div", 3)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Start Number* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7)(21, "div", 3)(22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Suffix* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 3)(26, "div", 14)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Nomenclatures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15)(30, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEditSerialTypeComponent_Template_p_button_click_30_listener() { return ctx.onChoiceNomenclature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Add Nomenclature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CreateEditSerialTypeComponent_div_32_Template, 4, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CreateEditSerialTypeComponent_ng_template_33_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-dialog-actions", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEditSerialTypeComponent_Template_button_click_37_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Serial Number Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nomenclatures.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table], styles: [".nomenclature-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.nomenclature-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LXNlcmlhbC10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtZWRpdC1zZXJpYWwtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub21lbmNsYXR1cmUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 51471:
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse/modals/create-physical-inventory/create-physical-inventory.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePhysicalInventoryComponent": () => (/* binding */ CreatePhysicalInventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 82242);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_pickers_multi_warehouse_picker_multi_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pickers/multi-warehouse-picker/multi-warehouse-picker.component */ 39393);
/* harmony import */ var _shared_pickers_multi_locator_picker_multi_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/multi-locator-picker/multi-locator-picker.component */ 98124);










class CreatePhysicalInventoryComponent {
    constructor(fb, dialogRef, physicalInventoryServices, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.physicalInventoryServices = physicalInventoryServices;
        this.data = data;
        this.form = this.fb.group({
            warehouses: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            locators: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.isSaving = false;
    }
    ngOnInit() {
    }
    selectWarehouses(warehouses) {
        let value = null;
        if (warehouses?.length > 0)
            value = warehouses.map(w => w.id);
        this.form.get('warehouses').patchValue(value);
    }
    selectLocators(locators) {
        let value = null;
        if (locators?.length > 0)
            value = locators.map(w => w.id);
        this.form.get('locators').patchValue(value);
    }
    onCreatePhysicalInventory() {
        this.isSaving = true;
        const locatorsIds = this.form.get('locators').value.splice(',').join(',');
        this.physicalInventoryServices.createPhysicalInventory(locatorsIds).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.isSaving = false)).subscribe(() => this.dialogRef.close(true));
    }
}
CreatePhysicalInventoryComponent.ɵfac = function CreatePhysicalInventoryComponent_Factory(t) { return new (t || CreatePhysicalInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__.PhysicalInventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
CreatePhysicalInventoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreatePhysicalInventoryComponent, selectors: [["pek-create-physical-inventory"]], decls: 18, vars: 7, consts: [[1, "modal-header", "modal-header_vertical"], [1, "add-product__header-wrapper"], [1, "add-product__header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "currentWarehousesIds", "selectWarehouses"], [3, "isDisabled", "currentWarehousesIds", "selectLocators"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Create", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function CreatePhysicalInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Create Physical Inventory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-dialog-content")(6, "form", 4)(7, "div", 5)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "pek-multi-warehouse-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectWarehouses", function CreatePhysicalInventoryComponent_Template_pek_multi_warehouse_picker_selectWarehouses_10_listener($event) { return ctx.selectWarehouses($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "pek-multi-locator-picker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectLocators", function CreatePhysicalInventoryComponent_Template_pek_multi_locator_picker_selectLocators_14_listener($event) { return ctx.selectLocators($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreatePhysicalInventoryComponent_Template_button_click_17_listener() { return ctx.onCreatePhysicalInventory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentWarehousesIds", ctx.form.get("warehouses").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isDisabled", true)("currentWarehousesIds", ctx.form.get("warehouses").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _shared_pickers_multi_warehouse_picker_multi_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_1__.MultiWarehousePickerComponent, _shared_pickers_multi_locator_picker_multi_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__.MultiLocatorPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGh5c2ljYWwtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 98381:
/*!***************************************************************************************************************!*\
  !*** ./src/app/warehouse/modals/move-physical-inventory-product/move-physical-inventory-product.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovePhysicalInventoryProductComponent": () => (/* binding */ MovePhysicalInventoryProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 82242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/group-locator-picker/group-locator-picker.component */ 74159);
/* harmony import */ var _product_structure_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../product-structure/models/product */ 26922);











function MovePhysicalInventoryProductComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.data.product.nomenclature.name, " ");
} }
function MovePhysicalInventoryProductComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.data.physical_inventory_nomenclature.name, " ");
} }
class MovePhysicalInventoryProductComponent {
    constructor(fb, dialogRef, physicalInventoryService, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.physicalInventoryService = physicalInventoryService;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            new_locator_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    ngOnInit() {
    }
    selectLocator(id) {
        this.form.get('new_locator_id').patchValue(id);
    }
    onMoveProduct() {
        this.isSaving = true;
        this.physicalInventoryService.movePhysicalInventoryProduct(this.data.id, this.form.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.isSaving = false)).subscribe(() => this.dialogRef.close(true));
    }
}
MovePhysicalInventoryProductComponent.ɵfac = function MovePhysicalInventoryProductComponent_Factory(t) { return new (t || MovePhysicalInventoryProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__.PhysicalInventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
MovePhysicalInventoryProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MovePhysicalInventoryProductComponent, selectors: [["pek-move-physical-inventory-product"]], decls: 19, vars: 12, consts: [[1, "modal-header", "modal-header_vertical"], [1, "add-product__header-wrapper"], [1, "add-product__header"], [1, "modal-header__title"], [4, "ngIf", "ngIfElse"], ["productTitle", ""], [3, "formGroup"], [1, "current-locator"], [1, "form-group"], [3, "product", "selectLocator"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Move", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function MovePhysicalInventoryProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Move Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MovePhysicalInventoryProductComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MovePhysicalInventoryProductComponent_ng_template_6_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-dialog-content")(9, "form", 6)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Move to*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "pek-group-locator-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectLocator", function MovePhysicalInventoryProductComponent_Template_pek_group_locator_picker_selectLocator_15_listener($event) { return ctx.selectLocator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovePhysicalInventoryProductComponent_Template_button_click_18_listener() { return ctx.onMoveProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.product)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate5"](" Current Locator: ", ctx.data.product.locator.name, " R: ", ctx.data.product.locator.row, " Col: ", ctx.data.product.locator.column, " Sh: ", ctx.data.product.locator.shelf, " Pl: ", ctx.data.product.locator.place, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_1__.GroupLocatorPickerComponent], styles: [".current-locator[_ngcontent-%COMP%] {\n  font-weight: 400;\n  display: block;\n  margin-bottom: 0.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmUtcGh5c2ljYWwtaW52ZW50b3J5LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6Im1vdmUtcGh5c2ljYWwtaW52ZW50b3J5LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudC1sb2NhdG9yIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMTI1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 64672:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 82242:
/*!******************************************************************!*\
  !*** ./src/app/warehouse/services/physical-inventory.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalInventoryService": () => (/* binding */ PhysicalInventoryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-physical-inventory/create-physical-inventory.component */ 51471);
/* harmony import */ var _modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/move-physical-inventory-product/move-physical-inventory-product.component */ 98381);
/* harmony import */ var _modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component */ 84799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);








class PhysicalInventoryService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.warehouse_url;
        this.url = 'physical_inventory/';
    }
    getForPagination(query) {
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    getInventoryProducts(id, query) {
        let queryParams = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryParams += '&' + element.name + '=' + element.value;
                }
                else {
                    queryParams += '&' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + 'physical_inventory_products_lists/?physical_inventory_id=' + id + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    getInventoryProductsListsForPagination(id, query) {
        let queryParams = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryParams += '&' + element.name + '=' + element.value;
                }
                else {
                    queryParams += '&' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + 'physical_inventory_products_lists/?physical_inventory_id=' + id + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    createPhysicalInventory(locatorsIds) {
        return this.httpClient.post(this.API_URL + this.url + '?locators_ids=' + locatorsIds, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    completePhysicalInventory(inventoryId) {
        return this.httpClient.post(this.API_URL + this.url + inventoryId + '/complete_physical_inventory/', null);
    }
    removePhysicalInventory(inventoryId) {
        return this.httpClient.delete(this.API_URL + this.url + inventoryId + '/');
    }
    updateQuantityInventoryProduct(inventoryProduct) {
        const send = {
            is_scanned: inventoryProduct.is_scanned,
            new_quantity: inventoryProduct.new_quantity
        };
        return this.httpClient.put(this.API_URL + 'physical_inventory_products/' + inventoryProduct.id + '/', send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    movePhysicalInventoryProduct(id, send) {
        return this.httpClient.post(this.API_URL + 'physical_inventory_products/' + id + '/move_to_locator/', send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    addProductToInventory(inventoryId, send) {
        return this.httpClient.post(this.API_URL + this.url + inventoryId + '/add_to_inventory/', send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    openCreatePhysicalInventoryModal() {
        return this.dialog
            .open(_modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_1__.CreatePhysicalInventoryComponent, {
            width: '40rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    openPhysicalInventoryProductMoveModal(product) {
        return this.dialog
            .open(_modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_2__.MovePhysicalInventoryProductComponent, {
            width: '40rem',
            height: 'auto',
            data: product,
            panelClass: 'modal-overflow-visible',
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    openAddProductToPhysicalInventory(inventoryId) {
        return this.dialog
            .open(_modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_3__.AddProductToPhysicalInventoryComponent, {
            width: '40rem',
            height: 'auto',
            data: inventoryId,
            panelClass: 'modal-overflow-visible',
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
PhysicalInventoryService.ɵfac = function PhysicalInventoryService_Factory(t) { return new (t || PhysicalInventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
PhysicalInventoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PhysicalInventoryService, factory: PhysicalInventoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63205:
/*!*******************************************************!*\
  !*** ./src/app/warehouse/services/request.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class RequestService {
    constructor(http) {
        this.http = http;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production_url;
        this.API_URL_PROCUREMENT = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'production_requests/';
    }
    getByOrder(orderId) {
        return this.http.get(this.API_URL + this.url + '?order=' + orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    cancelRequest(id) {
        return this.http.post(this.API_URL + this.url + `${id}/cancel/`, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    cancel(id) {
        return this.http.post(this.API_URL_PROCUREMENT + `orders/${id}/cancel_production_requests/`, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2595:
/*!***********************************************************!*\
  !*** ./src/app/warehouse/services/serial-type.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerialTypeService": () => (/* binding */ SerialTypeService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-serial-type/create-edit-serial-type.component */ 3107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class SerialTypeService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.warehouse_url;
        this.url = 'serial_number_types/';
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    create(serialType) {
        return this.httpClient.post(this.API_URL + this.url, serialType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    updatePartly(serialType) {
        return this.httpClient.patch(this.API_URL + this.url + serialType.id + '/', serialType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    update(serialType) {
        return this.httpClient.put(this.API_URL + this.url + serialType.id + '/', serialType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    delete(serialType) {
        return this.httpClient.delete(this.API_URL + this.url + serialType.id + '/');
    }
    createEditSerialTypeModal(type, serialType) {
        return this.dialog
            .open(_modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditSerialTypeComponent, {
            width: '65rem',
            height: 'auto',
            data: { type, serialType },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
SerialTypeService.ɵfac = function SerialTypeService_Factory(t) { return new (t || SerialTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
SerialTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SerialTypeService, factory: SerialTypeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85573:
/*!**********************************************************!*\
  !*** ./src/app/warehouse/services/tool-order.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolOrderService": () => (/* binding */ ToolOrderService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class ToolOrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production_url;
        this.url = 'tool_orders/';
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    complete(id) {
        return this.httpClient.post(this.API_URL + this.url + id + '/complete/', null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data;
        }));
    }
}
ToolOrderService.ɵfac = function ToolOrderService_Factory(t) { return new (t || ToolOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ToolOrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ToolOrderService, factory: ToolOrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83187:
/*!************************************************************!*\
  !*** ./src/app/warehouse/services/tool-request.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestService": () => (/* binding */ ToolRequestService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class ToolRequestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production_url;
        this.url = 'tool_requests/';
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
ToolRequestService.ɵfac = function ToolRequestService_Factory(t) { return new (t || ToolRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ToolRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ToolRequestService, factory: ToolRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10273:
/*!***********************************************!*\
  !*** ./src/app/warehouse/warehouse.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseModule": () => (/* binding */ WarehouseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _warehouse_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse.routing */ 27832);
/* harmony import */ var _components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/warehouse-items/warehouse-items.component */ 14969);
/* harmony import */ var _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/warehouse-layout/warehouse-layout.component */ 95797);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/warehouse-warehouses/warehouse-warehouses.component */ 11878);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/tree */ 93449);
/* harmony import */ var _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/warehouse-locators/warehouse-locators.component */ 47010);
/* harmony import */ var _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/warehouse-units-measure/warehouse-units-measure.component */ 82090);
/* harmony import */ var _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/warehouse-serial-types/warehouse-serial-types.component */ 46820);
/* harmony import */ var _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/warehouse-categories/warehouse-categories.component */ 29629);
/* harmony import */ var _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/warehouse-where-used/warehouse-where-used.component */ 40242);
/* harmony import */ var _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory.component */ 53876);
/* harmony import */ var _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory-products/physical-inventory-products.component */ 57170);
/* harmony import */ var _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/warehouse-tool-requests/warehouse-tool-requests.component */ 56538);
/* harmony import */ var _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/warehouse-tool-request/warehouse-tool-request.component */ 19039);
/* harmony import */ var _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/warehouse-production-requests/warehouse-production-requests.component */ 92659);
/* harmony import */ var _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/warehouse-production-request/warehouse-production-request.component */ 50941);
/* harmony import */ var _modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/create-physical-inventory/create-physical-inventory.component */ 51471);
/* harmony import */ var _modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/move-physical-inventory-product/move-physical-inventory-product.component */ 98381);
/* harmony import */ var _modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component */ 84799);
/* harmony import */ var _modals_create_edit_warehouse_create_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modals/create-edit-warehouse/create-edit-warehouse.component */ 55223);
/* harmony import */ var _modals_create_edit_locator_create_edit_locator_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modals/create-edit-locator/create-edit-locator.component */ 91980);
/* harmony import */ var _modals_create_edit_warehouse_category_create_edit_warehouse_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/create-edit-warehouse-category/create-edit-warehouse-category.component */ 29680);
/* harmony import */ var _modals_create_edit_unit_measure_create_edit_unit_measure_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/create-edit-unit-measure/create-edit-unit-measure.component */ 6392);
/* harmony import */ var _modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modals/create-edit-serial-type/create-edit-serial-type.component */ 3107);
/* harmony import */ var _modals_create_edit_warehouse_item_create_edit_warehouse_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/create-edit-warehouse-item/create-edit-warehouse-product.component */ 37145);
/* harmony import */ var _product_structure_product_structure_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../product-structure/product-structure.module */ 55707);
/* harmony import */ var _modals_move_warehouse_product_move_warehouse_product_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/move-warehouse-product/move-warehouse-product.component */ 10536);
/* harmony import */ var _components_production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/production-lists/production-lists.component */ 19144);
/* harmony import */ var _components_production_lists_production_list_production_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/production-lists/production-list/production-list.component */ 70559);
/* harmony import */ var _modals_set_production_list_locator_set_production_list_locator_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/set-production-list-locator/set-production-list-locator.component */ 97610);
/* harmony import */ var _components_production_lists_list_product_print_item_list_product_print_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/production-lists/list-product-print-item/list-product-print-item.component */ 57087);
/* harmony import */ var _components_warehouse_qc_warehouse_qc_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/warehouse-qc/warehouse-qc.component */ 30464);
/* harmony import */ var _components_warehouse_qc_warehouse_qc_invoice_warehouse_qc_invoice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/warehouse-qc/warehouse-qc-invoice/warehouse-qc-invoice.component */ 6159);
/* harmony import */ var _modals_qc_accept_to_warehouse_qc_accept_to_warehouse_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component */ 64672);
/* harmony import */ var _components_warehouse_qc_warehouse_qc_order_warehouse_qc_order_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/warehouse-qc/warehouse-qc-order/warehouse-qc-order.component */ 59781);
/* harmony import */ var _components_warehouse_isolator_warehouse_isolator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/warehouse-isolator/warehouse-isolator.component */ 7888);
/* harmony import */ var _components_warehouse_isolator_components_warehouse_isolator_invoices_warehouse_isolator_invoices_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component */ 33598);
/* harmony import */ var _components_warehouse_isolator_components_warehouse_isolator_orders_warehouse_isolator_orders_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/warehouse-isolator/components/warehouse-isolator-orders/warehouse-isolator-orders.component */ 59813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../shared/pickers/product-category-picker/product-category-picker.component */ 15051);
/* harmony import */ var _shared_pickers_unit_measure_picker_unit_measure_picker_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../shared/pickers/unit-measure-picker/unit-measure-picker.component */ 53999);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../shared/icons/module-icon/module-icon.component */ 73237);























































class WarehouseModule {
}
WarehouseModule.ɵfac = function WarehouseModule_Factory(t) { return new (t || WarehouseModule)(); };
WarehouseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({ type: WarehouseModule });
WarehouseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_43__.CommonModule,
        _warehouse_routing__WEBPACK_IMPORTED_MODULE_0__.WarehouseRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_44__.TreeModule,
        _product_structure_product_structure_module__WEBPACK_IMPORTED_MODULE_26__.ProductStructureModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](WarehouseModule, { declarations: [_components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseItemsComponent,
        _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseLayoutComponent,
        _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_5__.WarehouseWarehousesComponent,
        _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_6__.WarehouseLocatorsComponent,
        _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_7__.WarehouseUnitsMeasureComponent,
        _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_8__.WarehouseSerialTypesComponent,
        _components_warehouse_isolator_warehouse_isolator_component__WEBPACK_IMPORTED_MODULE_36__.WarehouseIsolatorComponent,
        _components_warehouse_isolator_components_warehouse_isolator_invoices_warehouse_isolator_invoices_component__WEBPACK_IMPORTED_MODULE_37__.WarehouseIsolatorInvoicesComponent,
        _components_warehouse_isolator_components_warehouse_isolator_orders_warehouse_isolator_orders_component__WEBPACK_IMPORTED_MODULE_38__.WarehouseIsolatorOrdersComponent,
        _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_9__.WarehouseCategoriesComponent,
        _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_10__.WarehouseWhereUsedComponent,
        _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_11__.PhysicalInventoryComponent,
        _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_12__.PhysicalInventoryProductsComponent,
        _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_13__.WarehouseToolRequestsComponent,
        _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_14__.WarehouseToolRequestComponent,
        _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_15__.WarehouseProductionRequestsComponent,
        _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_16__.WarehouseProductionRequestComponent,
        _modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_17__.CreatePhysicalInventoryComponent,
        _modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_18__.MovePhysicalInventoryProductComponent,
        _modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_19__.AddProductToPhysicalInventoryComponent,
        _modals_create_edit_warehouse_create_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_20__.CreateEditWarehouseComponent,
        _modals_create_edit_locator_create_edit_locator_component__WEBPACK_IMPORTED_MODULE_21__.CreateEditLocatorComponent,
        _modals_create_edit_warehouse_category_create_edit_warehouse_category_component__WEBPACK_IMPORTED_MODULE_22__.CreateEditWarehouseCategoryComponent,
        _modals_create_edit_unit_measure_create_edit_unit_measure_component__WEBPACK_IMPORTED_MODULE_23__.CreateEditUnitMeasureComponent,
        _modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_24__.CreateEditSerialTypeComponent,
        _modals_create_edit_warehouse_item_create_edit_warehouse_product_component__WEBPACK_IMPORTED_MODULE_25__.CreateEditWarehouseProductComponent,
        _modals_move_warehouse_product_move_warehouse_product_component__WEBPACK_IMPORTED_MODULE_27__.MoveWarehouseProductComponent,
        _components_production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_28__.ProductionListsComponent,
        _components_production_lists_production_list_production_list_component__WEBPACK_IMPORTED_MODULE_29__.ProductionListComponent,
        _modals_set_production_list_locator_set_production_list_locator_component__WEBPACK_IMPORTED_MODULE_30__.SetProductionListLocatorComponent,
        _components_production_lists_list_product_print_item_list_product_print_item_component__WEBPACK_IMPORTED_MODULE_31__.ListProductPrintItemComponent,
        _components_warehouse_qc_warehouse_qc_component__WEBPACK_IMPORTED_MODULE_32__.WarehouseQcComponent,
        _components_warehouse_qc_warehouse_qc_invoice_warehouse_qc_invoice_component__WEBPACK_IMPORTED_MODULE_33__.WarehouseQcInvoiceComponent,
        _modals_qc_accept_to_warehouse_qc_accept_to_warehouse_component__WEBPACK_IMPORTED_MODULE_34__.QcAcceptToWarehouseComponent,
        _components_warehouse_qc_warehouse_qc_order_warehouse_qc_order_component__WEBPACK_IMPORTED_MODULE_35__.WarehouseQcOrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_43__.CommonModule,
        _warehouse_routing__WEBPACK_IMPORTED_MODULE_0__.WarehouseRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_44__.TreeModule,
        _product_structure_product_structure_module__WEBPACK_IMPORTED_MODULE_26__.ProductStructureModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetComponentScope"](_modals_create_edit_warehouse_category_create_edit_warehouse_category_component__WEBPACK_IMPORTED_MODULE_22__.CreateEditWarehouseCategoryComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_45__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_46__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_47__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_47__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_48__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_48__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_48__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_49__.InputTextarea, _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_39__.ProductCategoryPickerComponent, _shared_pickers_unit_measure_picker_unit_measure_picker_component__WEBPACK_IMPORTED_MODULE_40__.UnitMeasurePickerComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetComponentScope"](_components_production_lists_production_list_production_list_component__WEBPACK_IMPORTED_MODULE_29__.ProductionListComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_43__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_43__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_43__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_50__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_45__.ButtonDirective, primeng_treetable__WEBPACK_IMPORTED_MODULE_51__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_52__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_51__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_51__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_51__.TTSelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_53__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_53__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_41__.ModuleIconComponent, _components_production_lists_list_product_print_item_list_product_print_item_component__WEBPACK_IMPORTED_MODULE_31__.ListProductPrintItemComponent], []);


/***/ }),

/***/ 27832:
/*!************************************************!*\
  !*** ./src/app/warehouse/warehouse.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseRouting": () => (/* binding */ WarehouseRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/warehouse-items/warehouse-items.component */ 14969);
/* harmony import */ var _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/warehouse-layout/warehouse-layout.component */ 95797);
/* harmony import */ var _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/warehouse-warehouses/warehouse-warehouses.component */ 11878);
/* harmony import */ var _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/warehouse-locators/warehouse-locators.component */ 47010);
/* harmony import */ var _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/warehouse-units-measure/warehouse-units-measure.component */ 82090);
/* harmony import */ var _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/warehouse-serial-types/warehouse-serial-types.component */ 46820);
/* harmony import */ var _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/warehouse-categories/warehouse-categories.component */ 29629);
/* harmony import */ var _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/warehouse-where-used/warehouse-where-used.component */ 40242);
/* harmony import */ var _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory.component */ 53876);
/* harmony import */ var _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory-products/physical-inventory-products.component */ 57170);
/* harmony import */ var _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/warehouse-tool-requests/warehouse-tool-requests.component */ 56538);
/* harmony import */ var _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/warehouse-tool-request/warehouse-tool-request.component */ 19039);
/* harmony import */ var _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/warehouse-production-requests/warehouse-production-requests.component */ 92659);
/* harmony import */ var _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/warehouse-production-request/warehouse-production-request.component */ 50941);
/* harmony import */ var _components_production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/production-lists/production-lists.component */ 19144);
/* harmony import */ var _components_production_lists_production_list_production_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/production-lists/production-list/production-list.component */ 70559);
/* harmony import */ var _components_warehouse_qc_warehouse_qc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/warehouse-qc/warehouse-qc.component */ 30464);
/* harmony import */ var _components_warehouse_qc_warehouse_qc_invoice_warehouse_qc_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/warehouse-qc/warehouse-qc-invoice/warehouse-qc-invoice.component */ 6159);
/* harmony import */ var _components_warehouse_qc_warehouse_qc_order_warehouse_qc_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/warehouse-qc/warehouse-qc-order/warehouse-qc-order.component */ 59781);
/* harmony import */ var _components_warehouse_isolator_components_warehouse_isolator_invoices_warehouse_isolator_invoices_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component */ 33598);
/* harmony import */ var _components_warehouse_isolator_components_warehouse_isolator_orders_warehouse_isolator_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/warehouse-isolator/components/warehouse-isolator-orders/warehouse-isolator-orders.component */ 59813);
/* harmony import */ var _components_warehouse_isolator_warehouse_isolator_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/warehouse-isolator/warehouse-isolator.component */ 7888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);

























const routes = [
    {
        path: '', component: _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseLayoutComponent, children: [
            { path: '', redirectTo: 'items', pathMatch: 'full' },
            { path: 'items', title: 'Warehouse Items', component: _components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_0__.WarehouseItemsComponent },
            {
                path: 'warehouses',
                children: [
                    { path: '', title: 'Warehouses', component: _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseWarehousesComponent },
                    { path: ':id/locators', title: 'Locators', component: _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_3__.WarehouseLocatorsComponent },
                ]
            },
            { path: 'measure', title: 'Units of Measure', component: _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_4__.WarehouseUnitsMeasureComponent },
            { path: 'serial-types', title: 'Serial Number Types', component: _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_5__.WarehouseSerialTypesComponent },
            { path: 'categories', title: 'Warehouse Categories', component: _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_6__.WarehouseCategoriesComponent },
            { path: 'where-used', title: 'Where Used', component: _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_7__.WarehouseWhereUsedComponent },
            {
                path: 'production-requests', children: [
                    { path: '', title: 'Production Requests', component: _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_12__.WarehouseProductionRequestsComponent },
                    { path: ':id', title: 'Tool Request', component: _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_13__.WarehouseProductionRequestComponent }
                ]
            },
            {
                path: 'tool-requests', children: [
                    { path: '', title: 'Tool Requests', component: _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_10__.WarehouseToolRequestsComponent },
                    { path: ':id', title: 'Tool Request', component: _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_11__.WarehouseToolRequestComponent }
                ]
            },
            {
                path: 'physical-inventory', children: [
                    { path: '', title: 'Physical Inventory', component: _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_8__.PhysicalInventoryComponent },
                    { path: ':id', title: 'Physical Inventory Products', component: _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_9__.PhysicalInventoryProductsComponent },
                ]
            },
            {
                path: 'production-lists', children: [
                    { path: '', title: 'Production Lists', component: _components_production_lists_production_lists_component__WEBPACK_IMPORTED_MODULE_14__.ProductionListsComponent },
                    { path: ':id', title: 'Production List', component: _components_production_lists_production_list_production_list_component__WEBPACK_IMPORTED_MODULE_15__.ProductionListComponent },
                ]
            },
            {
                path: 'warehouse-qc', children: [
                    { path: '', title: 'Warehouse QC', component: _components_warehouse_qc_warehouse_qc_component__WEBPACK_IMPORTED_MODULE_16__.WarehouseQcComponent },
                    { path: 'invoice/:id', title: 'Warehouse QC Invoice', component: _components_warehouse_qc_warehouse_qc_invoice_warehouse_qc_invoice_component__WEBPACK_IMPORTED_MODULE_17__.WarehouseQcInvoiceComponent },
                    { path: 'order/:id', title: 'Warehouse QC Order', component: _components_warehouse_qc_warehouse_qc_order_warehouse_qc_order_component__WEBPACK_IMPORTED_MODULE_18__.WarehouseQcOrderComponent },
                ]
            },
            {
                path: 'isolator', children: [
                    { path: '', title: 'Isolator', component: _components_warehouse_isolator_warehouse_isolator_component__WEBPACK_IMPORTED_MODULE_21__.WarehouseIsolatorComponent },
                    { path: 'invoices/:id', title: 'Isolator Invoices', component: _components_warehouse_isolator_components_warehouse_isolator_invoices_warehouse_isolator_invoices_component__WEBPACK_IMPORTED_MODULE_19__.WarehouseIsolatorInvoicesComponent },
                    { path: 'orders/:id', title: 'Isolator Orders', component: _components_warehouse_isolator_components_warehouse_isolator_orders_warehouse_isolator_orders_component__WEBPACK_IMPORTED_MODULE_20__.WarehouseIsolatorOrdersComponent }
                ]
            },
        ]
    },
];
class WarehouseRouting {
}
WarehouseRouting.ɵfac = function WarehouseRouting_Factory(t) { return new (t || WarehouseRouting)(); };
WarehouseRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: WarehouseRouting });
WarehouseRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](WarehouseRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule] }); })();


/***/ }),

/***/ 64738:
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045),
    root = __webpack_require__(/*! ./_root */ 89905);
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ 94536:
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ 79177),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 4074),
    hashGet = __webpack_require__(/*! ./_hashGet */ 44599),
    hashHas = __webpack_require__(/*! ./_hashHas */ 12681),
    hashSet = __webpack_require__(/*! ./_hashSet */ 47981);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ 1789:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 17699),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 28621),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 31288),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 11866),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 96719);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 49281:
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045),
    root = __webpack_require__(/*! ./_root */ 89905);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ 66671:
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 15838),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 19318),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 62967),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 91220),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 20128);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ 1845:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045),
    root = __webpack_require__(/*! ./_root */ 89905);
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ 53000:
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045),
    root = __webpack_require__(/*! ./_root */ 89905);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ 32310:
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ 1789),
    stackClear = __webpack_require__(/*! ./_stackClear */ 30124),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ 847),
    stackGet = __webpack_require__(/*! ./_stackGet */ 66465),
    stackHas = __webpack_require__(/*! ./_stackHas */ 89588),
    stackSet = __webpack_require__(/*! ./_stackSet */ 24927);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ 24030:
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ 89905);
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ 20880:
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ 89905);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ 68062:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045),
    root = __webpack_require__(/*! ./_root */ 89905);
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ 19314:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ 98552:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ 46548:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ 22029),
    isArguments = __webpack_require__(/*! ./isArguments */ 37155),
    isArray = __webpack_require__(/*! ./isArray */ 47985),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 48340),
    isIndex = __webpack_require__(/*! ./_isIndex */ 69241),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 87852);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ 70605:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ 90047:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 47795),
    eq = __webpack_require__(/*! ./eq */ 74987);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ 36523:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ 74987);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ 98547:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ 35782),
    keys = __webpack_require__(/*! ./keys */ 97785);
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ 40959:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ 35782),
    keysIn = __webpack_require__(/*! ./keysIn */ 50225);
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ 47795:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 41222);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ 6504:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ 32310),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ 19314),
    assignValue = __webpack_require__(/*! ./_assignValue */ 90047),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ 98547),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ 40959),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ 66058),
    copyArray = __webpack_require__(/*! ./_copyArray */ 92730),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ 13203),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ 8870),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 27546),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ 90476),
    getTag = __webpack_require__(/*! ./_getTag */ 27771),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ 65965),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ 36205),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ 33219),
    isArray = __webpack_require__(/*! ./isArray */ 47985),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 48340),
    isMap = __webpack_require__(/*! ./isMap */ 50856),
    isObject = __webpack_require__(/*! ./isObject */ 44842),
    isSet = __webpack_require__(/*! ./isSet */ 28289),
    keys = __webpack_require__(/*! ./keys */ 97785),
    keysIn = __webpack_require__(/*! ./keysIn */ 50225);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject(value)) {
    return value;
  }

  var isArr = isArray(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ 20307:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ 44842);
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ 73607:
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 70605),
    isArray = __webpack_require__(/*! ./isArray */ 47985);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ 78286:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ 24030),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 54985),
    objectToString = __webpack_require__(/*! ./_objectToString */ 21050);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ 46584:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 78286),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 58419);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ 37882:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ 27771),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 58419);
/** `Object#toString` result references. */


var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

/***/ }),

/***/ 51219:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ 80801),
    isMasked = __webpack_require__(/*! ./_isMasked */ 45157),
    isObject = __webpack_require__(/*! ./isObject */ 44842),
    toSource = __webpack_require__(/*! ./_toSource */ 38039);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ 45369:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ 27771),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 58419);
/** `Object#toString` result references. */


var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

/***/ }),

/***/ 97908:
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 78286),
    isLength = __webpack_require__(/*! ./isLength */ 98161),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 58419);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ 36364:
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ 98078),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 71405);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ 47564:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ 44842),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 98078),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ 51392);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ 22029:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ 8292:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ 11271:
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 20880);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ 66058:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ 89905);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/***/ }),

/***/ 73357:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 11271);
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */


function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ 40475:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ 1411:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ 24030);
/** Used to convert symbols to primitives and strings. */


var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ 14369:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 11271);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ 92730:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ 35782:
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ 90047),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 47795);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ 13203:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ 35782),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 31403);
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ 8870:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ 35782),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ 30104);
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ 842:
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ 89905);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 41222:
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ 63493:
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ 27546:
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 73607),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 31403),
    keys = __webpack_require__(/*! ./keys */ 97785);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ 90476:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 73607),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ 30104),
    keysIn = __webpack_require__(/*! ./keysIn */ 50225);
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ 44387:
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 1292);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ 73045:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 51219),
    getValue = __webpack_require__(/*! ./_getValue */ 61385);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ 77768:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ 92041);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ 54985:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ 24030);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ 31403:
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 98552),
    stubArray = __webpack_require__(/*! ./stubArray */ 40082);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ 30104:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 70605),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 77768),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 31403),
    stubArray = __webpack_require__(/*! ./stubArray */ 40082);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];

  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }

  return result;
};
module.exports = getSymbolsIn;

/***/ }),

/***/ 27771:
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ 64738),
    Map = __webpack_require__(/*! ./_Map */ 49281),
    Promise = __webpack_require__(/*! ./_Promise */ 1845),
    Set = __webpack_require__(/*! ./_Set */ 53000),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ 68062),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 78286),
    toSource = __webpack_require__(/*! ./_toSource */ 38039);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ 61385:
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ 79177:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 94414);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ 4074:
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ 44599:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 94414);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ 12681:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 94414);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ 47981:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 94414);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ 65965:
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ 36205:
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 11271),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ 73357),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ 40475),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ 1411),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ 14369);
/** `Object#toString` result references. */


var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ 33219:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ 20307),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 77768),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 98078);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ 69241:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 1292:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ 45157:
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 842);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ 98078:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ 17699:
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ 28621:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 36523);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ 31288:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 36523);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ 11866:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 36523);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ 96719:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 36523);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ 15838:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ 94536),
    ListCache = __webpack_require__(/*! ./_ListCache */ 1789),
    Map = __webpack_require__(/*! ./_Map */ 49281);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ 19318:
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ 44387);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ 62967:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ 44387);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ 91220:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ 44387);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ 20128:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ 44387);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ 94414:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ 73045);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ 71405:
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ 92041);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 51392:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ 60322:
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 63493);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ 21050:
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ 92041:
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ 89905:
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 63493);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 30124:
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ 1789);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ 847:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ 66465:
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ 89588:
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ 24927:
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ 1789),
    Map = __webpack_require__(/*! ./_Map */ 49281),
    MapCache = __webpack_require__(/*! ./_MapCache */ 66671);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ 38039:
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ 60978:
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ 6504);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

/***/ }),

/***/ 74987:
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ 37155:
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 46584),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 58419);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ 47985:
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ 14260:
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ 80801),
    isLength = __webpack_require__(/*! ./isLength */ 98161);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ 48340:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ 89905),
    stubFalse = __webpack_require__(/*! ./stubFalse */ 29349);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ 80801:
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 78286),
    isObject = __webpack_require__(/*! ./isObject */ 44842);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ 98161:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ 50856:
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ 37882),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 8292),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 60322);
/* Node.js helper references. */


var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

/***/ }),

/***/ 44842:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ 58419:
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ 28289:
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ 45369),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 8292),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 60322);
/* Node.js helper references. */


var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

/***/ }),

/***/ 87852:
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 97908),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 8292),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 60322);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ 97785:
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 46548),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ 36364),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 14260);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ 50225:
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 46548),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ 47564),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 14260);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ 40082:
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ 29349:
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ })

}]);
//# sourceMappingURL=src_app_warehouse_warehouse_module_ts.js.map