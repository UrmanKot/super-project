"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_warehouse_warehouse_module_ts"],{

/***/ 8461:
/*!*****************************************************************!*\
  !*** ./src/app/procurement/services/invoice-product.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceProductService": () => (/* binding */ InvoiceProductService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




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
}
InvoiceProductService.ɵfac = function InvoiceProductService_Factory(t) { return new (t || InvoiceProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
InvoiceProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InvoiceProductService, factory: InvoiceProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3529:
/*!*********************************************************!*\
  !*** ./src/app/procurement/services/invoice.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceService": () => (/* binding */ InvoiceService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class InvoiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
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
        return this.httpClient.get(this.API_URL + this.url + 'all/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
InvoiceService.ɵfac = function InvoiceService_Factory(t) { return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
InvoiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InvoiceService, factory: InvoiceService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




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
}
OrderProductService.ɵfac = function OrderProductService_Factory(t) { return new (t || OrderProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
OrderProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrderProductService, factory: OrderProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7593:
/*!*******************************************************!*\
  !*** ./src/app/procurement/services/order.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7170:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/physical-inventory/physical-inventory-products/physical-inventory-products.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalInventoryProductsComponent": () => (/* binding */ PhysicalInventoryProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/physical-inventory.service */ 2242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 3237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pickers/warehouse-picker/warehouse-picker.component */ 9832);
/* harmony import */ var _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pickers/locator-picker/locator-picker.component */ 9642);
/* harmony import */ var _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pickers/nomenclature-type-picker/nomenclature-type-picker.component */ 2746);
/* harmony import */ var _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pickers/accepted-type-picker/accepted-type-picker.component */ 813);


















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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_19__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_21__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_22__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_22__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_22__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_22__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_22__.CellEditor, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_23__.Paginator, _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_3__.WarehousePickerComponent, _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_4__.LocatorPickerComponent, _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_5__.NomenclatureTypePickerComponent, _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_6__.AcceptedTypePickerComponent], styles: [".action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.375rem;\n  margin-bottom: 0.535rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoeXNpY2FsLWludmVudG9yeS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoicGh5c2ljYWwtaW52ZW50b3J5LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1idXR0b25zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjUzNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3876:
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouse/components/physical-inventory/physical-inventory.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalInventoryComponent": () => (/* binding */ PhysicalInventoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 2242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ 2722);











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

/***/ 9629:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-categories/warehouse-categories.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseCategoriesComponent": () => (/* binding */ WarehouseCategoriesComponent)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 8163);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/categories.service */ 7943);
/* harmony import */ var _shared_services_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/tree.service */ 6106);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/treetable */ 2385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);












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

/***/ 4213:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-insulator/components/warehouse-insulator-invoices/warehouse-insulator-invoices.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseInsulatorInvoicesComponent": () => (/* binding */ WarehouseInsulatorInvoicesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../procurement/services/invoice-product.service */ 8461);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/icons/module-icon/module-icon.component */ 3237);










function WarehouseInsulatorInvoicesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} }
function WarehouseInsulatorInvoicesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorInvoicesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorInvoicesComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 22);
} }
function WarehouseInsulatorInvoicesComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorInvoicesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseInsulatorInvoicesComponent_ng_template_14_i_2_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WarehouseInsulatorInvoicesComponent_ng_template_14_span_3_Template, 2, 0, "span", 21);
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
function WarehouseInsulatorInvoicesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseInsulatorInvoicesComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorInvoicesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseInsulatorInvoicesComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class WarehouseInsulatorInvoicesComponent {
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
WarehouseInsulatorInvoicesComponent.ɵfac = function WarehouseInsulatorInvoicesComponent_Factory(t) { return new (t || WarehouseInsulatorInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceProductService)); };
WarehouseInsulatorInvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WarehouseInsulatorInvoicesComponent, selectors: [["pek-warehouse-insulator-invoices"]], decls: 17, vars: 7, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "value"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-1"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseInsulatorInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Invoice Insulator Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, WarehouseInsulatorInvoicesComponent_ng_template_11_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, WarehouseInsulatorInvoicesComponent_ng_template_12_Template, 11, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WarehouseInsulatorInvoicesComponent_ng_template_13_Template, 11, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WarehouseInsulatorInvoicesComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WarehouseInsulatorInvoicesComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WarehouseInsulatorInvoicesComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("paginator", ctx.invoiceProducts.length > 0)("rows", 10)("value", ctx.invoiceProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.invoiceProducts.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtaW5zdWxhdG9yLWludm9pY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1758:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-insulator/components/warehouse-insulator-orders/warehouse-insulator-orders.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseInsulatorOrdersComponent": () => (/* binding */ WarehouseInsulatorOrdersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/icons/module-icon/module-icon.component */ 3237);










function WarehouseInsulatorOrdersComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} }
function WarehouseInsulatorOrdersComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorOrdersComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorOrdersComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 22);
} }
function WarehouseInsulatorOrdersComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorOrdersComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseInsulatorOrdersComponent_ng_template_14_i_2_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WarehouseInsulatorOrdersComponent_ng_template_14_span_3_Template, 2, 0, "span", 21);
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
function WarehouseInsulatorOrdersComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseInsulatorOrdersComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorOrdersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseInsulatorOrdersComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class WarehouseInsulatorOrdersComponent {
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
WarehouseInsulatorOrdersComponent.ɵfac = function WarehouseInsulatorOrdersComponent_Factory(t) { return new (t || WarehouseInsulatorOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_0__.OrderProductService)); };
WarehouseInsulatorOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WarehouseInsulatorOrdersComponent, selectors: [["pek-warehouse-insulator-orders"]], decls: 17, vars: 7, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "value"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-1"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseInsulatorOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Order Insulator Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, WarehouseInsulatorOrdersComponent_ng_template_11_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, WarehouseInsulatorOrdersComponent_ng_template_12_Template, 11, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WarehouseInsulatorOrdersComponent_ng_template_13_Template, 11, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WarehouseInsulatorOrdersComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WarehouseInsulatorOrdersComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WarehouseInsulatorOrdersComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("paginator", ctx.orderProducts.length > 0)("rows", 10)("value", ctx.orderProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.orderProducts.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtaW5zdWxhdG9yLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7068:
/*!*******************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-insulator/warehouse-insulator.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseInsulatorComponent": () => (/* binding */ WarehouseInsulatorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 3529);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 7593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */ 9504);











function WarehouseInsulatorComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Invoice to view Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["invoices", a1]; };
function WarehouseInsulatorComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseInsulatorComponent_ng_template_13_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.selectedInvoice)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedInvoice == null ? null : ctx_r1.selectedInvoice.id));
} }
function WarehouseInsulatorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function WarehouseInsulatorComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseInsulatorComponent_ng_template_16_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseInsulatorComponent_ng_template_16_span_3_Template, 2, 0, "span", 29);
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
function WarehouseInsulatorComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseInsulatorComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseInsulatorComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseInsulatorComponent_ng_template_23_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Order to view Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["orders", a1]; };
function WarehouseInsulatorComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WarehouseInsulatorComponent_ng_template_23_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.selectedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r8.selectedOrder)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r8.selectedOrder == null ? null : ctx_r8.selectedOrder.id));
} }
function WarehouseInsulatorComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
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
function WarehouseInsulatorComponent_ng_template_25_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", order_r24.root_production_list_products[0].nomenclature.code, " ~", order_r24.root_production_list_products[0].nomenclature.name, " ");
} }
function WarehouseInsulatorComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WarehouseInsulatorComponent_ng_template_25_ng_container_9_Template, 2, 2, "ng-container", 29);
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
function WarehouseInsulatorComponent_ng_template_26_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function WarehouseInsulatorComponent_ng_template_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseInsulatorComponent_ng_template_26_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseInsulatorComponent_ng_template_26_span_3_Template, 2, 0, "span", 29);
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
function WarehouseInsulatorComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseInsulatorComponent_ng_template_27_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseInsulatorComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseInsulatorComponent_div_28_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class WarehouseInsulatorComponent {
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
WarehouseInsulatorComponent.ɵfac = function WarehouseInsulatorComponent_Factory(t) { return new (t || WarehouseInsulatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService)); };
WarehouseInsulatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseInsulatorComponent, selectors: [["pek-warehouse-insulator"]], decls: 29, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "custom-tabs"], ["header", "Invoices Insulator", 3, "selected"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["header", "Orders Insulator"], ["st", ""], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Insulator Items", 1, "ml-auto", 3, "disabled", "routerLink"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "25%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseInsulatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Warehouse Insulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "p-tabView", 6)(9, "p-tabPanel", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseInsulatorComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedInvoice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WarehouseInsulatorComponent_ng_template_13_Template, 3, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseInsulatorComponent_ng_template_14_Template, 11, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseInsulatorComponent_ng_template_15_Template, 12, 10, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseInsulatorComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseInsulatorComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, WarehouseInsulatorComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-tabPanel", 17)(20, "div", 8)(21, "p-table", 9, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseInsulatorComponent_Template_p_table_selectionChange_21_listener($event) { return ctx.selectedOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, WarehouseInsulatorComponent_ng_template_23_Template, 3, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, WarehouseInsulatorComponent_ng_template_24_Template, 11, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, WarehouseInsulatorComponent_ng_template_25_Template, 13, 12, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, WarehouseInsulatorComponent_ng_template_26_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, WarehouseInsulatorComponent_ng_template_27_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, WarehouseInsulatorComponent_div_28_Template, 3, 0, "div", 16);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_11__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_11__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtaW5zdWxhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4969:
/*!***********************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-items/warehouse-items.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseItemsComponent": () => (/* binding */ WarehouseItemsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/categories.service */ 7943);
/* harmony import */ var _services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/warehouse-product.service */ 8200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pickers/product-structure-category-picker/product-structure-category-picker.component */ 7506);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/warehouse-picker/warehouse-picker.component */ 9832);
/* harmony import */ var _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pickers/locator-picker/locator-picker.component */ 9642);
/* harmony import */ var _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pickers/nomenclature-type-picker/nomenclature-type-picker.component */ 2746);
/* harmony import */ var _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pickers/accepted-type-picker/accepted-type-picker.component */ 813);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tree */ 3449);


















function WarehouseItemsComponent_div_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
} if (rf & 2) {
    const node_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", node_r13.data.name, " ");
} }
function WarehouseItemsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "p-tree", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, WarehouseItemsComponent_div_15_ng_template_3_Template, 1, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("metaKeySelection", false)("value", ctx_r0.categoriesTree);
} }
function WarehouseItemsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function WarehouseItemsComponent_ng_template_73_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_73_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (product_r14.nomenclature.category == null ? null : product_r14.nomenclature.category.unit_of_measure == null ? null : product_r14.nomenclature.category.unit_of_measure.symbol) ? product_r14.nomenclature.category == null ? null : product_r14.nomenclature.category.unit_of_measure == null ? null : product_r14.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function WarehouseItemsComponent_ng_template_73_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (product_r14.nomenclature.root_category == null ? null : product_r14.nomenclature.root_category.unit_of_measure == null ? null : product_r14.nomenclature.root_category.unit_of_measure.symbol) ? product_r14.nomenclature.root_category == null ? null : product_r14.nomenclature.root_category.unit_of_measure == null ? null : product_r14.nomenclature.root_category.unit_of_measure.symbol : "Pcs", " ");
} }
function WarehouseItemsComponent_ng_template_73_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, WarehouseItemsComponent_ng_template_73_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WarehouseItemsComponent_ng_template_73_ng_container_13_ng_container_2_Template, 2, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.root_category);
} }
function WarehouseItemsComponent_ng_template_73_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Pcs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_73_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.locator.warehouse.name, " ");
} }
function WarehouseItemsComponent_ng_template_73_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.locator.name, " ");
} }
function WarehouseItemsComponent_ng_template_73_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"](" R: ", product_r14.locator.row, " Col: ", product_r14.locator.column, " Sh: ", product_r14.locator.shelf, " Pl: ", product_r14.locator.place, " ");
} }
function WarehouseItemsComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 46)(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, WarehouseItemsComponent_ng_template_73_b_6_Template, 2, 0, "b", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, WarehouseItemsComponent_ng_template_73_ng_container_13_Template, 3, 2, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, WarehouseItemsComponent_ng_template_73_span_14_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, WarehouseItemsComponent_ng_template_73_ng_container_18_Template, 2, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, WarehouseItemsComponent_ng_template_73_ng_container_20_Template, 2, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, WarehouseItemsComponent_ng_template_73_span_21_Template, 2, 4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const i_r15 = ctx.rowIndex;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", product_r14)("pRowToggler", product_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx_r8.searchForm.get("page").value - 1) * 10 + i_r15 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.current_technology == null ? null : product_r14.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.total_locator_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.category || product_r14.nomenclature.root_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !product_r14.nomenclature.category && !product_r14.nomenclature.root_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", product_r14.nomenclature.category == null ? null : product_r14.nomenclature.category.name, " ", product_r14.nomenclature.root_category == null ? null : product_r14.nomenclature.root_category.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.locator);
} }
function WarehouseItemsComponent_ng_template_74_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 38);
} }
function WarehouseItemsComponent_ng_template_74_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, WarehouseItemsComponent_ng_template_74_i_2_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, WarehouseItemsComponent_ng_template_74_span_3_Template, 2, 0, "span", 48);
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
function WarehouseItemsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function WarehouseItemsComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 54)(1, "p-paginator", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onPageChange", function WarehouseItemsComponent_div_76_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r11.countProducts);
} }
class WarehouseItemsComponent {
    constructor(fb, productCategoriesService, warehouseProductService) {
        this.fb = fb;
        this.productCategoriesService = productCategoriesService;
        this.warehouseProductService = warehouseProductService;
        this.isLoading = true;
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
            accepted_by_invoices: [null],
            page: [1],
        });
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'at_area', value: false }
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }
    ngOnInit() {
        this.getCategories();
        this.getProductsForPagination();
    }
    getCategories() {
        this.productCategoriesService.get([{ name: 'is_for_root', value: false }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(categories => {
            this.categories = categories;
            this.createTree();
            this.isLoadingCategories = false;
        });
    }
    getProductsForPagination() {
        this.warehouseProductService.getGroupedPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(response => {
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
                    product.checkedForGeneration = false;
                    product.uid = idx;
                }
            });
            this.products = response.results;
            this.countProducts = response.count;
            this.isLoading = false;
        });
    }
    searchProducts() {
        this.isLoading = true;
        this.selectedProduct = null;
        this.destroy$.next(true);
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'at_area', value: false }
        ];
        this.getProductsForPagination();
    }
    onAddItem() {
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
    getProductsAll() {
    }
    selectWarehouse(warehouseId) {
        let value = null;
        if (warehouseId)
            value = warehouseId;
        this.searchForm.get('warehouse').patchValue(value);
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchProducts();
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseItemsComponent.ɵfac = function WarehouseItemsComponent_Factory(t) { return new (t || WarehouseItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseProductService)); };
WarehouseItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: WarehouseItemsComponent, selectors: [["pek-warehouse-items"]], decls: 77, vars: 14, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Item", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "warehouse-items"], [1, "warehouse-items__left"], [1, "form-group"], ["class", "warehouse-items__tree-wrapper", 4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "warehouse-items__right"], [1, "page__table"], [1, "warehouse-items__form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-4"], ["pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["searchBoxName", ""], ["searchBoxDescription", ""], [1, "col-6"], [3, "selectWarehouse"], [3, "warehouseId", "isAllLocators", "isDisabled"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 30.25rem)", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 4, "ngIf"], [1, "warehouse-items__tree-wrapper"], [1, "warehouse-items__tree"], ["selectionMode", "single", 3, "metaKeySelection", "value"], ["pTemplate", "default"], [1, "warehouse-items__spinner"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "6%"], [1, "text-center", 2, "width", "13%"], [1, "text-center", 2, "width", "12%"], [1, "text-center", 2, "width", "14%"], [3, "pSelectableRow", "pRowToggler"], [1, "text-center", 2, "width", "5%"], [4, "ngIf"], ["class", "d-block", 4, "ngIf"], [1, "d-block"], [1, "text-center", "p-2"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all"]], template: function WarehouseItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Warehouse Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WarehouseItemsComponent_Template_button_click_7_listener() { return ctx.onAddItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, WarehouseItemsComponent_div_15_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, WarehouseItemsComponent_ng_template_16_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "form", 15)(21, "div", 16)(22, "div", 17)(23, "div", 10)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 17)(29, "div", 10)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "input", 18, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 17)(35, "div", 10)(36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 18, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 17)(41, "div", 16)(42, "div", 22)(43, "div", 10)(44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Warehouses");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "pek-warehouse-picker", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectWarehouse", function WarehouseItemsComponent_Template_pek_warehouse_picker_selectWarehouse_46_listener($event) { return ctx.selectWarehouse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 22)(48, "div", 10)(49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "pek-locator-picker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 17)(53, "div", 16)(54, "div", 22)(55, "div", 10)(56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "pek-nomenclature-type-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 22)(60, "div", 10)(61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Accepted Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "pek-accepted-type-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 17)(65, "div", 10)(66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Product Structure Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "pek-product-structure-category-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 25)(70, "p-table", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function WarehouseItemsComponent_Template_p_table_selectionChange_70_listener($event) { return ctx.selectedProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, WarehouseItemsComponent_ng_template_72_Template, 19, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, WarehouseItemsComponent_ng_template_73_Template, 22, 15, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, WarehouseItemsComponent_ng_template_74_Template, 4, 3, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, WarehouseItemsComponent_div_75_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, WarehouseItemsComponent_div_76_Template, 5, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoadingCategories)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("warehouseId", ctx.searchForm.get("warehouse").value)("isAllLocators", false)("isDisabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedProduct)("value", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__.ProductStructureCategoryPickerComponent, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_16__.RowToggler, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_17__.Paginator, _shared_pickers_warehouse_picker_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_4__.WarehousePickerComponent, _shared_pickers_locator_picker_locator_picker_component__WEBPACK_IMPORTED_MODULE_5__.LocatorPickerComponent, _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_6__.NomenclatureTypePickerComponent, _shared_pickers_accepted_type_picker_accepted_type_picker_component__WEBPACK_IMPORTED_MODULE_7__.AcceptedTypePickerComponent, primeng_tree__WEBPACK_IMPORTED_MODULE_18__.Tree], styles: [".page__card[_ngcontent-%COMP%] {\n  padding-top: 1.75rem;\n}\n\n.warehouse-items[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.warehouse-items__spinner[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 0.625rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.warehouse-items__tree[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n\n.warehouse-items__tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%] {\n  width: 24rem;\n  flex: 0 0 24rem;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  top: -0.125rem;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree {\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  border-radius: 0.625rem !important;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree::-webkit-scrollbar-thumb {\n  border-radius: 0.625rem;\n  background-color: #d1d2d8;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree::-webkit-scrollbar {\n  cursor: auto;\n  width: 0.5rem;\n  background-color: #f8f9fa;\n}\n\n.warehouse-items__right[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 1.75rem;\n}\n\n.warehouse-items__right[_ngcontent-%COMP%]  .p-datatable-header {\n  padding: 0 0 1rem !important;\n}\n\n.warehouse-items__form[_ngcontent-%COMP%] {\n  margin-top: -0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFGTjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9NO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFMUjs7QUFPUTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFMVjs7QUFRUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFOVjs7QUFZRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtBQVZKOztBQWFNO0VBQ0UsNEJBQUE7QUFYUjs7QUFnQkU7RUFDRSxxQkFBQTtBQWRKIiwiZmlsZSI6IndhcmVob3VzZS1pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX19jYXJkIHtcclxuICBwYWRkaW5nLXRvcDogMS43NXJlbTtcclxufVxyXG5cclxuLndhcmVob3VzZS1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJl9fc3Bpbm5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fdHJlZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX190cmVlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19sZWZ0IHtcclxuICAgIHdpZHRoOiAyNHJlbTtcclxuICAgIGZsZXg6IDAgMCAyNHJlbTtcclxuXHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTAuMTI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjo6bmctZGVlcCB7XHJcbiAgICAgIC5wLXRyZWUge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDJkODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAwLjVyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMS43NXJlbTtcclxuXHJcbiAgICAmOjpuZy1kZWVwIHtcclxuICAgICAgLnAtZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC42MjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5797:
/*!*************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-layout/warehouse-layout.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseLayoutComponent": () => (/* binding */ WarehouseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 2176);



class WarehouseLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Items', commands: ['items'] },
            { label: 'Production Requests', commands: ['production-requests'] },
            { label: 'Tool Requests', commands: ['tool-requests'] },
            { label: 'Where Used', commands: ['where-used'] },
            { label: 'Physical Inventory', commands: ['physical-inventory'] },
            { label: 'Warehouses', commands: ['warehouses'] },
            { label: 'Categories', commands: ['categories'] },
            { label: 'Units of Measure', commands: ['measure'] },
            { label: 'Serial Number Types', commands: ['serial-types'] },
            { label: 'Insulator', commands: ['insulator'] },
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

/***/ 7010:
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-locators/warehouse-locators.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseLocatorsComponent": () => (/* binding */ WarehouseLocatorsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_locator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/locator.service */ 7041);
/* harmony import */ var _services_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/warehouse.service */ 7098);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);













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

/***/ 941:
/*!*************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-production-request/warehouse-production-request.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseProductionRequestComponent": () => (/* binding */ WarehouseProductionRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);



class WarehouseProductionRequestComponent {
    constructor() { }
    ngOnInit() {
    }
}
WarehouseProductionRequestComponent.ɵfac = function WarehouseProductionRequestComponent_Factory(t) { return new (t || WarehouseProductionRequestComponent)(); };
WarehouseProductionRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarehouseProductionRequestComponent, selectors: [["pek-warehouse-production-request"]], decls: 11, vars: 2, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete"], [1, "page__content"], [1, "page__card"], [1, "page__table"]], template: function WarehouseProductionRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Requests for Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "warehouse")("isActive", true);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcHJvZHVjdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2659:
/*!***************************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-production-requests/warehouse-production-requests.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseProductionRequestsComponent": () => (/* binding */ WarehouseProductionRequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 7593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);








const _c0 = function (a0) { return [a0]; };
function WarehouseProductionRequestsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.selectedOrder)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r1.selectedOrder == null ? null : ctx_r1.selectedOrder.id));
} }
function WarehouseProductionRequestsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Closing Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Root Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const _c1 = function (a1) { return ["/dash/production/plan/tasks", a1]; };
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, item_r10.list.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r10.list.list_product.nomenclature.code, "~", item_r10.list.list_product.nomenclature.name, " (", item_r10.count, ") ");
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_1_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serial_r19 = ctx.$implicit;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, serial_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r10.list.list_product.nomenclature.code, "~", item_r10.list.list_product.nomenclature.name, " (", item_r10.count, ") ");
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_1_ng_template_0_a_0_Template, 2, 6, "a", 31);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r10.list.serial_numbers);
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_1_ng_template_0_Template, 1, 1, "ng-template");
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_a_0_Template, 2, 6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_1_Template, 1, 0, null, 30);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.list.serial_numbers.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.list.serial_numbers.length >= 1);
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_2_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.showProductionLists(order_r7.root_production_plans)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r10.list.list_product.nomenclature.code, "~", item_r10.list.list_product.nomenclature.name, " (", item_r10.count, ") ");
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_2_ng_template_0_Template, 2, 3, "ng-template");
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.showProductionLists(order_r7.root_production_plans)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_2_Template, 1, 0, null, 30);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r10.list.list_product.nomenclature.code, "~", item_r10.list.list_product.nomenclature.name, " (", item_r10.count, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.list.serial_numbers.length >= 1);
} }
function WarehouseProductionRequestsComponent_ng_template_16_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_1_Template, 2, 2, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseProductionRequestsComponent_ng_template_16_div_13_ng_template_2_Template, 3, 4, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.count === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.count > 1);
} }
const _c2 = function (a1) { return ["materials", a1]; };
function WarehouseProductionRequestsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 24)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 21)(4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WarehouseProductionRequestsComponent_ng_template_16_div_13_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", order_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c2, order_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", order_r7.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 7, order_r7.created, "dd/MM/yyyy HH:MM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 10, order_r7.production_requests_fully_completed, "dd/MM/yyyy HH:MM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.getRootLists(order_r7.root_production_plans));
} }
function WarehouseProductionRequestsComponent_ng_template_17_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 35);
} }
function WarehouseProductionRequestsComponent_ng_template_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WarehouseProductionRequestsComponent_ng_template_17_i_2_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WarehouseProductionRequestsComponent_ng_template_17_span_3_Template, 2, 0, "span", 30);
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
function WarehouseProductionRequestsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_ng_template_18_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WarehouseProductionRequestsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WarehouseProductionRequestsComponent_div_19_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class WarehouseProductionRequestsComponent {
    constructor(orderService) {
        this.orderService = orderService;
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
}
WarehouseProductionRequestsComponent.ɵfac = function WarehouseProductionRequestsComponent_Factory(t) { return new (t || WarehouseProductionRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService)); };
WarehouseProductionRequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WarehouseProductionRequestsComponent, selectors: [["pek-warehouse-production-requests"]], decls: 20, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-table", "label", "Hierarchy", 1, "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-list", "label", "List"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Parts/Materials List", 1, "ml-auto", 3, "disabled", "routerLink"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "30%"], [2, "width", "45%"], [3, "pSelectableRow"], ["target", "_blank", 3, "routerLink"], ["class", "d-block", 4, "ngFor", "ngForOf"], [1, "d-block"], [3, "ngIf"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "click"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseProductionRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Production Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function WarehouseProductionRequestsComponent_Template_p_table_selectionChange_12_listener($event) { return ctx.selectedOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WarehouseProductionRequestsComponent_ng_template_14_Template, 2, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WarehouseProductionRequestsComponent_ng_template_15_Template, 11, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WarehouseProductionRequestsComponent_ng_template_16_Template, 14, 15, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, WarehouseProductionRequestsComponent_ng_template_17_Template, 4, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, WarehouseProductionRequestsComponent_ng_template_18_Template, 2, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, WarehouseProductionRequestsComponent_div_19_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true)("paginator", ctx.orders.length > 0)("rows", 10)("selection", ctx.selectedOrder)("value", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.orders.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcHJvZHVjdGlvbi1yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6820:
/*!*************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-serial-types/warehouse-serial-types.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseSerialTypesComponent": () => (/* binding */ WarehouseSerialTypesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_serial_type_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/serial-type.service */ 2595);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);









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

/***/ 9039:
/*!*************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-tool-request/warehouse-tool-request.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseToolRequestComponent": () => (/* binding */ WarehouseToolRequestComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_tool_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tool-request.service */ 3187);
/* harmony import */ var _services_tool_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tool-order.service */ 5573);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);











function WarehouseToolRequestComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" Order ID: ", ctx_r0.order.id, " Area: ", ctx_r0.order.area_locator.area.name, " Locator: ", ctx_r0.order.area_locator.name, " ");
} }
function WarehouseToolRequestComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.selectedRequest);
} }
function WarehouseToolRequestComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Requested Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseToolRequestComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 25)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const request_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", request_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r11 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", request_r10.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", request_r10.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", request_r10.required_quantity, " ");
} }
function WarehouseToolRequestComponent_ng_template_17_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 29);
} }
function WarehouseToolRequestComponent_ng_template_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseToolRequestComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WarehouseToolRequestComponent_ng_template_17_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WarehouseToolRequestComponent_ng_template_17_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function WarehouseToolRequestComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseToolRequestComponent_ng_template_18_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseToolRequestComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WarehouseToolRequestComponent_div_19_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function WarehouseToolRequestComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " ...\n");
} }
class WarehouseToolRequestComponent {
    constructor(route, toolRequestService, toolOrderService) {
        this.route = route;
        this.toolRequestService = toolRequestService;
        this.toolOrderService = toolOrderService;
        this.isLoading = true;
        this.requests = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(id => this.orderId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.getToolOrder()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.getToolRequest())).subscribe();
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
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
WarehouseToolRequestComponent.ɵfac = function WarehouseToolRequestComponent_Factory(t) { return new (t || WarehouseToolRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tool_request_service__WEBPACK_IMPORTED_MODULE_0__.ToolRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tool_order_service__WEBPACK_IMPORTED_MODULE_1__.ToolOrderService)); };
WarehouseToolRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseToolRequestComponent, selectors: [["pek-warehouse-tool-request"]], decls: 22, vars: 10, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["empty", ""], [1, "d-flex"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "ml-auto", 3, "disabled"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [2, "width", "45%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function WarehouseToolRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Tool Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WarehouseToolRequestComponent_ng_container_6_Template, 2, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WarehouseToolRequestComponent_Template_p_table_selectionChange_12_listener($event) { return ctx.selectedRequest = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseToolRequestComponent_ng_template_14_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseToolRequestComponent_ng_template_15_Template, 9, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseToolRequestComponent_ng_template_16_Template, 9, 5, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseToolRequestComponent_ng_template_17_Template, 4, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, WarehouseToolRequestComponent_ng_template_18_Template, 2, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, WarehouseToolRequestComponent_div_19_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, WarehouseToolRequestComponent_ng_template_20_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.order)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.requests.length > 0)("rows", 10)("selection", ctx.selectedRequest)("value", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading && ctx.requests.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtdG9vbC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6538:
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-tool-requests/warehouse-tool-requests.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseToolRequestsComponent": () => (/* binding */ WarehouseToolRequestsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tool-order.service */ 5573);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);









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

/***/ 2090:
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-units-measure/warehouse-units-measure.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseUnitsMeasureComponent": () => (/* binding */ WarehouseUnitsMeasureComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_unit_measure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/unit-measure.service */ 4712);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);










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

/***/ 1878:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-warehouses/warehouse-warehouses.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseWarehousesComponent": () => (/* binding */ WarehouseWarehousesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/warehouse.service */ 7098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);











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

/***/ 242:
/*!*********************************************************************************************!*\
  !*** ./src/app/warehouse/components/warehouse-where-used/warehouse-where-used.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseWhereUsedComponent": () => (/* binding */ WarehouseWhereUsedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 3068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 7958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pickers/product-structure-category-picker/product-structure-category-picker.component */ 7506);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 3237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/product-category-picker/product-category-picker.component */ 5051);















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

/***/ 4799:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/warehouse/modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductToPhysicalInventoryComponent": () => (/* binding */ AddProductToPhysicalInventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 3068);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 2242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var _shared_components_nomenclature_picker_nomenclature_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/nomenclature-picker/nomenclature-picker.component */ 728);
/* harmony import */ var _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pickers/group-locator-picker/group-locator-picker.component */ 4159);
/* harmony import */ var _shared_pickers_technology_picker_technology_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/technology-picker/technology-picker.component */ 8457);














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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditSerialTypeComponent": () => (/* binding */ CreateEditSerialTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 3068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_serial_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/serial-type.service */ 2595);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);













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

/***/ 1471:
/*!***************************************************************************************************!*\
  !*** ./src/app/warehouse/modals/create-physical-inventory/create-physical-inventory.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePhysicalInventoryComponent": () => (/* binding */ CreatePhysicalInventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 2242);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var _shared_pickers_multi_warehouse_picker_multi_warehouse_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pickers/multi-warehouse-picker/multi-warehouse-picker.component */ 9393);
/* harmony import */ var _shared_pickers_multi_locator_picker_multi_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/multi-locator-picker/multi-locator-picker.component */ 8124);










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

/***/ 8381:
/*!***************************************************************************************************************!*\
  !*** ./src/app/warehouse/modals/move-physical-inventory-product/move-physical-inventory-product.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovePhysicalInventoryProductComponent": () => (/* binding */ MovePhysicalInventoryProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_physical_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/physical-inventory.service */ 2242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var _shared_pickers_group_locator_picker_group_locator_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/group-locator-picker/group-locator-picker.component */ 4159);
/* harmony import */ var _product_structure_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../product-structure/models/product */ 6922);











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

/***/ 2242:
/*!******************************************************************!*\
  !*** ./src/app/warehouse/services/physical-inventory.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalInventoryService": () => (/* binding */ PhysicalInventoryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var _modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-physical-inventory/create-physical-inventory.component */ 1471);
/* harmony import */ var _modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/move-physical-inventory-product/move-physical-inventory-product.component */ 8381);
/* harmony import */ var _modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component */ 4799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);








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

/***/ 2595:
/*!***********************************************************!*\
  !*** ./src/app/warehouse/services/serial-type.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerialTypeService": () => (/* binding */ SerialTypeService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-serial-type/create-edit-serial-type.component */ 3107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);






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

/***/ 5573:
/*!**********************************************************!*\
  !*** ./src/app/warehouse/services/tool-order.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolOrderService": () => (/* binding */ ToolOrderService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




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
}
ToolOrderService.ɵfac = function ToolOrderService_Factory(t) { return new (t || ToolOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ToolOrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ToolOrderService, factory: ToolOrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3187:
/*!************************************************************!*\
  !*** ./src/app/warehouse/services/tool-request.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestService": () => (/* binding */ ToolRequestService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




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

/***/ 273:
/*!***********************************************!*\
  !*** ./src/app/warehouse/warehouse.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseModule": () => (/* binding */ WarehouseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _warehouse_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse.routing */ 7832);
/* harmony import */ var _components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/warehouse-items/warehouse-items.component */ 4969);
/* harmony import */ var _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/warehouse-layout/warehouse-layout.component */ 5797);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/warehouse-warehouses/warehouse-warehouses.component */ 1878);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/tree */ 3449);
/* harmony import */ var _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/warehouse-locators/warehouse-locators.component */ 7010);
/* harmony import */ var _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/warehouse-units-measure/warehouse-units-measure.component */ 2090);
/* harmony import */ var _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/warehouse-serial-types/warehouse-serial-types.component */ 6820);
/* harmony import */ var _components_warehouse_insulator_warehouse_insulator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/warehouse-insulator/warehouse-insulator.component */ 7068);
/* harmony import */ var _components_warehouse_insulator_components_warehouse_insulator_invoices_warehouse_insulator_invoices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/warehouse-insulator/components/warehouse-insulator-invoices/warehouse-insulator-invoices.component */ 4213);
/* harmony import */ var _components_warehouse_insulator_components_warehouse_insulator_orders_warehouse_insulator_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/warehouse-insulator/components/warehouse-insulator-orders/warehouse-insulator-orders.component */ 1758);
/* harmony import */ var _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/warehouse-categories/warehouse-categories.component */ 9629);
/* harmony import */ var _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/warehouse-where-used/warehouse-where-used.component */ 242);
/* harmony import */ var _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory.component */ 3876);
/* harmony import */ var _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory-products/physical-inventory-products.component */ 7170);
/* harmony import */ var _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/warehouse-tool-requests/warehouse-tool-requests.component */ 6538);
/* harmony import */ var _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/warehouse-tool-request/warehouse-tool-request.component */ 9039);
/* harmony import */ var _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/warehouse-production-requests/warehouse-production-requests.component */ 2659);
/* harmony import */ var _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/warehouse-production-request/warehouse-production-request.component */ 941);
/* harmony import */ var _modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modals/create-physical-inventory/create-physical-inventory.component */ 1471);
/* harmony import */ var _modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modals/move-physical-inventory-product/move-physical-inventory-product.component */ 8381);
/* harmony import */ var _modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component */ 4799);
/* harmony import */ var _modals_create_edit_warehouse_create_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/create-edit-warehouse/create-edit-warehouse.component */ 5223);
/* harmony import */ var _modals_create_edit_locator_create_edit_locator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modals/create-edit-locator/create-edit-locator.component */ 1980);
/* harmony import */ var _modals_create_edit_warehouse_category_create_edit_warehouse_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/create-edit-warehouse-category/create-edit-warehouse-category.component */ 9680);
/* harmony import */ var _modals_create_edit_unit_measure_create_edit_unit_measure_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modals/create-edit-unit-measure/create-edit-unit-measure.component */ 6392);
/* harmony import */ var _modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/create-edit-serial-type/create-edit-serial-type.component */ 3107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/pickers/product-category-picker/product-category-picker.component */ 5051);
/* harmony import */ var _shared_pickers_unit_measure_picker_unit_measure_picker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/pickers/unit-measure-picker/unit-measure-picker.component */ 3999);






































class WarehouseModule {
}
WarehouseModule.ɵfac = function WarehouseModule_Factory(t) { return new (t || WarehouseModule)(); };
WarehouseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: WarehouseModule });
WarehouseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _warehouse_routing__WEBPACK_IMPORTED_MODULE_0__.WarehouseRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_32__.TreeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](WarehouseModule, { declarations: [_components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseItemsComponent,
        _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseLayoutComponent,
        _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_5__.WarehouseWarehousesComponent,
        _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_6__.WarehouseLocatorsComponent,
        _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_7__.WarehouseUnitsMeasureComponent,
        _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_8__.WarehouseSerialTypesComponent,
        _components_warehouse_insulator_warehouse_insulator_component__WEBPACK_IMPORTED_MODULE_9__.WarehouseInsulatorComponent,
        _components_warehouse_insulator_components_warehouse_insulator_invoices_warehouse_insulator_invoices_component__WEBPACK_IMPORTED_MODULE_10__.WarehouseInsulatorInvoicesComponent,
        _components_warehouse_insulator_components_warehouse_insulator_orders_warehouse_insulator_orders_component__WEBPACK_IMPORTED_MODULE_11__.WarehouseInsulatorOrdersComponent,
        _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_12__.WarehouseCategoriesComponent,
        _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_13__.WarehouseWhereUsedComponent,
        _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_14__.PhysicalInventoryComponent,
        _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_15__.PhysicalInventoryProductsComponent,
        _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_16__.WarehouseToolRequestsComponent,
        _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_17__.WarehouseToolRequestComponent,
        _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_18__.WarehouseProductionRequestsComponent,
        _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_19__.WarehouseProductionRequestComponent,
        _modals_create_physical_inventory_create_physical_inventory_component__WEBPACK_IMPORTED_MODULE_20__.CreatePhysicalInventoryComponent,
        _modals_move_physical_inventory_product_move_physical_inventory_product_component__WEBPACK_IMPORTED_MODULE_21__.MovePhysicalInventoryProductComponent,
        _modals_add_product_to_physical_inventory_add_product_to_physical_inventory_component__WEBPACK_IMPORTED_MODULE_22__.AddProductToPhysicalInventoryComponent,
        _modals_create_edit_warehouse_create_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_23__.CreateEditWarehouseComponent,
        _modals_create_edit_locator_create_edit_locator_component__WEBPACK_IMPORTED_MODULE_24__.CreateEditLocatorComponent,
        _modals_create_edit_warehouse_category_create_edit_warehouse_category_component__WEBPACK_IMPORTED_MODULE_25__.CreateEditWarehouseCategoryComponent,
        _modals_create_edit_unit_measure_create_edit_unit_measure_component__WEBPACK_IMPORTED_MODULE_26__.CreateEditUnitMeasureComponent,
        _modals_create_edit_serial_type_create_edit_serial_type_component__WEBPACK_IMPORTED_MODULE_27__.CreateEditSerialTypeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _warehouse_routing__WEBPACK_IMPORTED_MODULE_0__.WarehouseRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_32__.TreeModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetComponentScope"](_modals_create_edit_warehouse_category_create_edit_warehouse_category_component__WEBPACK_IMPORTED_MODULE_25__.CreateEditWarehouseCategoryComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_33__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_37__.InputTextarea, _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_28__.ProductCategoryPickerComponent, _shared_pickers_unit_measure_picker_unit_measure_picker_component__WEBPACK_IMPORTED_MODULE_29__.UnitMeasurePickerComponent], []);


/***/ }),

/***/ 7832:
/*!************************************************!*\
  !*** ./src/app/warehouse/warehouse.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseRouting": () => (/* binding */ WarehouseRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_warehouse_items_warehouse_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/warehouse-items/warehouse-items.component */ 4969);
/* harmony import */ var _components_warehouse_layout_warehouse_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/warehouse-layout/warehouse-layout.component */ 5797);
/* harmony import */ var _components_warehouse_warehouses_warehouse_warehouses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/warehouse-warehouses/warehouse-warehouses.component */ 1878);
/* harmony import */ var _components_warehouse_locators_warehouse_locators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/warehouse-locators/warehouse-locators.component */ 7010);
/* harmony import */ var _components_warehouse_units_measure_warehouse_units_measure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/warehouse-units-measure/warehouse-units-measure.component */ 2090);
/* harmony import */ var _components_warehouse_serial_types_warehouse_serial_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/warehouse-serial-types/warehouse-serial-types.component */ 6820);
/* harmony import */ var _components_warehouse_insulator_warehouse_insulator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/warehouse-insulator/warehouse-insulator.component */ 7068);
/* harmony import */ var _components_warehouse_insulator_components_warehouse_insulator_invoices_warehouse_insulator_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/warehouse-insulator/components/warehouse-insulator-invoices/warehouse-insulator-invoices.component */ 4213);
/* harmony import */ var _components_warehouse_insulator_components_warehouse_insulator_orders_warehouse_insulator_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/warehouse-insulator/components/warehouse-insulator-orders/warehouse-insulator-orders.component */ 1758);
/* harmony import */ var _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/warehouse-categories/warehouse-categories.component */ 9629);
/* harmony import */ var _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/warehouse-where-used/warehouse-where-used.component */ 242);
/* harmony import */ var _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory.component */ 3876);
/* harmony import */ var _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/physical-inventory/physical-inventory-products/physical-inventory-products.component */ 7170);
/* harmony import */ var _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/warehouse-tool-requests/warehouse-tool-requests.component */ 6538);
/* harmony import */ var _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/warehouse-tool-request/warehouse-tool-request.component */ 9039);
/* harmony import */ var _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/warehouse-production-requests/warehouse-production-requests.component */ 2659);
/* harmony import */ var _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/warehouse-production-request/warehouse-production-request.component */ 941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);




















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
            { path: 'categories', title: 'Warehouse Categories', component: _components_warehouse_categories_warehouse_categories_component__WEBPACK_IMPORTED_MODULE_9__.WarehouseCategoriesComponent },
            { path: 'where-used', title: 'Where Used', component: _components_warehouse_where_used_warehouse_where_used_component__WEBPACK_IMPORTED_MODULE_10__.WarehouseWhereUsedComponent },
            {
                path: 'production-requests', children: [
                    { path: '', title: 'Production Requests', component: _components_warehouse_production_requests_warehouse_production_requests_component__WEBPACK_IMPORTED_MODULE_15__.WarehouseProductionRequestsComponent },
                    { path: ':id', title: 'Tool Request', component: _components_warehouse_production_request_warehouse_production_request_component__WEBPACK_IMPORTED_MODULE_16__.WarehouseProductionRequestComponent }
                ]
            },
            {
                path: 'tool-requests', children: [
                    { path: '', title: 'Tool Requests', component: _components_warehouse_tool_requests_warehouse_tool_requests_component__WEBPACK_IMPORTED_MODULE_13__.WarehouseToolRequestsComponent },
                    { path: ':id', title: 'Tool Request', component: _components_warehouse_tool_request_warehouse_tool_request_component__WEBPACK_IMPORTED_MODULE_14__.WarehouseToolRequestComponent }
                ]
            },
            {
                path: 'physical-inventory', children: [
                    { path: '', title: 'Physical Inventory', component: _components_physical_inventory_physical_inventory_component__WEBPACK_IMPORTED_MODULE_11__.PhysicalInventoryComponent },
                    { path: ':id', title: 'Physical Inventory Products', component: _components_physical_inventory_physical_inventory_products_physical_inventory_products_component__WEBPACK_IMPORTED_MODULE_12__.PhysicalInventoryProductsComponent },
                ]
            },
            {
                path: 'insulator', children: [
                    { path: '', title: 'Insulator', component: _components_warehouse_insulator_warehouse_insulator_component__WEBPACK_IMPORTED_MODULE_6__.WarehouseInsulatorComponent },
                    { path: 'invoices/:id', title: 'Insulator Invoices', component: _components_warehouse_insulator_components_warehouse_insulator_invoices_warehouse_insulator_invoices_component__WEBPACK_IMPORTED_MODULE_7__.WarehouseInsulatorInvoicesComponent },
                    { path: 'orders/:id', title: 'Insulator Orders', component: _components_warehouse_insulator_components_warehouse_insulator_orders_warehouse_insulator_orders_component__WEBPACK_IMPORTED_MODULE_8__.WarehouseInsulatorOrdersComponent }
                ]
            },
        ]
    },
];
class WarehouseRouting {
}
WarehouseRouting.ɵfac = function WarehouseRouting_Factory(t) { return new (t || WarehouseRouting)(); };
WarehouseRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: WarehouseRouting });
WarehouseRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](WarehouseRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_warehouse_warehouse_module_ts.js.map