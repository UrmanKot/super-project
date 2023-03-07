"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_qc_qc_module_ts"],{

/***/ 60716:
/*!******************************************************************!*\
  !*** ./src/app/qc/components/qc-invoice/qc-invoice.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcInvoiceComponent": () => (/* binding */ QcInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class QcInvoiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
QcInvoiceComponent.ɵfac = function QcInvoiceComponent_Factory(t) { return new (t || QcInvoiceComponent)(); };
QcInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QcInvoiceComponent, selectors: [["pek-qc-invoice"]], decls: 2, vars: 0, template: function QcInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "qc-invoice works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxYy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 80099:
/*!****************************************************************!*\
  !*** ./src/app/qc/components/qc-layout/qc-layout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcLayoutComponent": () => (/* binding */ QcLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class QcLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Invoices', commands: ['list'] },
            { label: 'Protocols', commands: ['protocols'] },
        ];
    }
    ngOnInit() {
    }
}
QcLayoutComponent.ɵfac = function QcLayoutComponent_Factory(t) { return new (t || QcLayoutComponent)(); };
QcLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QcLayoutComponent, selectors: [["pek-qc-layout"]], decls: 2, vars: 2, consts: [[3, "module", "routes"]], template: function QcLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Quality Control")("routes", ctx.routes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxYy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 39818:
/*!************************************************************!*\
  !*** ./src/app/qc/components/qc-list/qc-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcListComponent": () => (/* binding */ QcListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ 79504);














function QcListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_template_14_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Choose the Production Lists Procurement or Outsourcing Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a2) { return ["../", "invoice", a2]; };
function QcListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QcListComponent_ng_template_14_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcListComponent_ng_template_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.expandCollapseAllInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcListComponent_ng_template_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.expandCollapseAllInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r2.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, (ctx_r2.selectedInvoiceNode == null ? null : ctx_r2.selectedInvoiceNode.data.order) ? ctx_r2.selectedInvoiceNode == null ? null : ctx_r2.selectedInvoiceNode.data.order.id : ctx_r2.selectedInvoiceNode == null ? null : ctx_r2.selectedInvoiceNode.data.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.isLoadingInvoices);
} }
function QcListComponent_ng_template_15_tr_0_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", invoice_r20.description, ")");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", invoice_r20.categories, ")");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QcListComponent_ng_template_15_tr_0_ng_container_4_span_3_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, QcListComponent_ng_template_15_tr_0_ng_container_4_i_4_Template, 2, 1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("category-name", invoice_r20.level === 0 && invoice_r20.hideFromTable !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r20.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level < 4 && invoice_r20.level > 0);
} }
function QcListComponent_ng_template_15_tr_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, (invoice_r20.order == null ? null : invoice_r20.order.order == null ? null : invoice_r20.order.order.qc_started_date) ? invoice_r20.order == null ? null : invoice_r20.order.order == null ? null : invoice_r20.order.order.qc_started_date : invoice_r20.order.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", invoice_r20.self_serial_number, " ", invoice_r20.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_template_15_tr_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", invoice_r20.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", invoice_r20.order.self_serial_number, " ", invoice_r20.order.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_template_15_tr_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r20.order == null ? null : invoice_r20.order.order == null ? null : invoice_r20.order.order.id, " ");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r20.supplier == null ? null : invoice_r20.supplier.name, " ");
} }
function QcListComponent_ng_template_15_tr_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r20.order.supplier == null ? null : invoice_r20.order.supplier.name, " ");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, invoice_r20.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_template_15_tr_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, invoice_r20.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", root_list_r48.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_template_15_tr_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QcListComponent_ng_template_15_tr_0_ng_container_18_div_1_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", invoice_r20.unique_root_production_plans);
} }
function QcListComponent_ng_template_15_tr_0_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", invoice_r20.plan.list_product.nomenclature.code, "~", invoice_r20.plan.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", invoice_r20.plan.required_quantity, ")");
} }
function QcListComponent_ng_template_15_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-treeTableToggler", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, QcListComponent_ng_template_15_tr_0_ng_container_4_Template, 5, 5, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, QcListComponent_ng_template_15_tr_0_span_5_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, QcListComponent_ng_template_15_tr_0_ng_container_7_Template, 2, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QcListComponent_ng_template_15_tr_0_span_8_Template, 2, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, QcListComponent_ng_template_15_tr_0_span_10_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, QcListComponent_ng_template_15_tr_0_ng_container_12_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QcListComponent_ng_template_15_tr_0_span_13_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, QcListComponent_ng_template_15_tr_0_ng_container_15_Template, 3, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, QcListComponent_ng_template_15_tr_0_span_16_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, QcListComponent_ng_template_15_tr_0_ng_container_18_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, QcListComponent_ng_template_15_tr_0_span_19_Template, 4, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const invoiceNode_r19 = ctx_r51.$implicit;
    const invoice_r20 = ctx_r51.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ttRow", invoiceNode_r19)("ttSelectableRowDisabled", !invoice_r20.order && !invoice_r20.level || invoice_r20.level < 4)("ttSelectableRow", invoiceNode_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-center", invoice_r20.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowNode", invoiceNode_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !invoice_r20.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r20.level === 4 && invoice_r20.plan);
} }
function QcListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QcListComponent_ng_template_15_tr_0_Template, 20, 17, "tr", 26);
} if (rf & 2) {
    const invoice_r20 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !invoice_r20.hideFromTable);
} }
function QcListComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 38);
} }
function QcListComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QcListComponent_ng_template_16_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QcListComponent_ng_template_16_span_3_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.isLoadingInvoices);
} }
function QcListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_template_22_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Choose Own Production Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function (a2) { return ["../", "order", a2]; };
function QcListComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QcListComponent_ng_template_22_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcListComponent_ng_template_22_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.expandCollapseAllOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcListComponent_ng_template_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r57.expandCollapseAllOrders(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r7.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, ctx_r7.selectedOrderNode == null ? null : ctx_r7.selectedOrderNode.data.order.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r7.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r7.isLoadingOrders);
} }
function QcListComponent_ng_template_23_tr_0_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", rowData_r59.categories, ")");
} }
function QcListComponent_ng_template_23_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, rowData_r59.order.qc_started_date ? rowData_r59.order.qc_started_date : rowData_r59.order.created, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_template_23_tr_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", rowData_r59.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r59.order.id, " ");
} }
function QcListComponent_ng_template_23_tr_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, rowData_r59.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_template_23_tr_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", rowData_r59.plan.list_product.nomenclature.code, "~", rowData_r59.plan.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_template_23_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 41)(1, "td", 28)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-treeTableToggler", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QcListComponent_ng_template_23_tr_0_i_6_Template, 2, 1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, QcListComponent_ng_template_23_tr_0_span_7_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, QcListComponent_ng_template_23_tr_0_span_9_Template, 2, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, QcListComponent_ng_template_23_tr_0_span_11_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QcListComponent_ng_template_23_tr_0_span_13_Template, 2, 2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const rowNode_r58 = ctx_r71.$implicit;
    const rowData_r59 = ctx_r71.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ttRow", rowNode_r58)("ttSelectableRow", rowNode_r58)("ttSelectableRowDisabled", rowData_r59.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowNode", rowNode_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("category-name", rowData_r59.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r59.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", rowData_r59.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", rowData_r59.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", rowData_r59.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", rowData_r59.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", rowData_r59.order && rowData_r59.plan);
} }
function QcListComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QcListComponent_ng_template_23_tr_0_Template, 14, 12, "tr", 40);
} if (rf & 2) {
    const rowData_r59 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !rowData_r59.hideFromTable);
} }
function QcListComponent_ng_template_24_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 38);
} }
function QcListComponent_ng_template_24_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QcListComponent_ng_template_24_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QcListComponent_ng_template_24_span_3_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.isLoadingOrders);
} }
function QcListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_template_30_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Choose the General Procurement Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QcListComponent_ng_template_30_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcListComponent_ng_template_30_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r75.expandCollapsePurchasedInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QcListComponent_ng_template_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r77.expandCollapsePurchasedInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r12.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r12.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, (ctx_r12.selectedPurchasedInvoiceNode == null ? null : ctx_r12.selectedPurchasedInvoiceNode.data.invoice) ? ctx_r12.selectedPurchasedInvoiceNode == null ? null : ctx_r12.selectedPurchasedInvoiceNode.data.invoice.id : ctx_r12.selectedPurchasedInvoiceNode == null ? null : ctx_r12.selectedPurchasedInvoiceNode.data.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r12.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r12.isLoadingInvoices);
} }
function QcListComponent_ng_template_31_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", invoice_r79.description, ")");
} }
function QcListComponent_ng_template_31_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", invoice_r79.categories, ")");
} }
function QcListComponent_ng_template_31_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QcListComponent_ng_template_31_ng_container_4_span_3_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, QcListComponent_ng_template_31_ng_container_4_i_4_Template, 2, 1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("category-name", !invoice_r79.level && invoice_r79.level !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", invoice_r79.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.level < 4 && invoice_r79.level > 0);
} }
function QcListComponent_ng_template_31_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, invoice_r79.order.qc_started_date ? invoice_r79.order.qc_started_date : invoice_r79.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_template_31_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", invoice_r79.self_serial_number, " ", invoice_r79.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_template_31_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", invoice_r79.invoice.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", invoice_r79.invoice.self_serial_number, " ", invoice_r79.invoice.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_template_31_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r79.order.id, " ");
} }
function QcListComponent_ng_template_31_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r79.supplier == null ? null : invoice_r79.supplier.name, " ");
} }
function QcListComponent_ng_template_31_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", invoice_r79.invoice.supplier == null ? null : invoice_r79.invoice.supplier.name, " ");
} }
function QcListComponent_ng_template_31_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, invoice_r79.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_template_31_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, invoice_r79.invoice.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_template_31_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", root_list_r106.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_template_31_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QcListComponent_ng_template_31_ng_container_18_div_1_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", invoice_r79.unique_root_production_plans);
} }
function QcListComponent_ng_template_31_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", invoice_r79.plan.list_product.nomenclature.code, "~", invoice_r79.plan.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", invoice_r79.plan.required_quantity, ")");
} }
function QcListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-treeTableToggler", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, QcListComponent_ng_template_31_ng_container_4_Template, 5, 5, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, QcListComponent_ng_template_31_ng_container_5_Template, 4, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, QcListComponent_ng_template_31_ng_container_7_Template, 2, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QcListComponent_ng_template_31_span_8_Template, 2, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, QcListComponent_ng_template_31_ng_container_10_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, QcListComponent_ng_template_31_ng_container_12_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QcListComponent_ng_template_31_span_13_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, QcListComponent_ng_template_31_ng_container_15_Template, 3, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, QcListComponent_ng_template_31_span_16_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, QcListComponent_ng_template_31_ng_container_18_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, QcListComponent_ng_template_31_span_19_Template, 4, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoiceNode_r78 = ctx.$implicit;
    const invoice_r79 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ttRow", invoiceNode_r78)("ttSelectableRowDisabled", !invoice_r79.order && !invoice_r79.level || invoice_r79.level < 4)("ttSelectableRow", invoiceNode_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-center", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowNode", invoiceNode_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", invoice_r79.level === 4 && invoice_r79.plan);
} }
function QcListComponent_ng_template_32_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 38);
} }
function QcListComponent_ng_template_32_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QcListComponent_ng_template_32_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QcListComponent_ng_template_32_span_3_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r14.isLoadingInvoices);
} }
class QcListComponent {
    constructor(invoiceService, orderService, productStructureCategoryService) {
        this.invoiceService = invoiceService;
        this.orderService = orderService;
        this.productStructureCategoryService = productStructureCategoryService;
        this.isLoadingInvoices = true;
        this.isLoadingOrders = true;
        this.expanseMap = {};
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)({
            categories: this.productStructureCategoryService.get(),
            invoices: this.invoiceService.get([
                { name: 'needs_qc', value: true },
                { name: 'by_qc_module_permission', value: true }
            ]),
            orders: this.orderService.get([
                { name: 'needs_qc', value: true },
                { name: 'by_qc_module_permission', value: true }
            ])
        }).subscribe(({ categories, invoices, orders }) => {
            if (this.categories) {
                this.mapExpansion();
            }
            this.createTree(categories);
            this.invoices = invoices;
            this.makeUniqueProductionPlansInvoice();
            this.resetProductPaymentTree();
            this.orders = orders;
            this.makeUniqueProductionPlans();
            this.fillOwnProductionWithData();
            this.isLoadingInvoices = false;
        });
    }
    mapExpansion() {
        this.categories.forEach(element => {
            this.createExpanseMap(element);
        });
    }
    createExpanseMap(node) {
        if (node.expanded) {
            this.expanseMap[node.data.id] = node.expanded;
        }
        else {
            this.expanseMap[node.data.id] = false;
        }
        if (node.children) {
            node.children.forEach(element => {
                this.createExpanseMap(element);
            });
        }
    }
    getInvoices() {
        this.invoiceService.get([
            { name: 'needs_qc', value: true },
            { name: 'by_qc_module_permission', value: true }
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(invoices => this.invoices = invoices), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.makeUniqueProductionPlansInvoice()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.resetProductPaymentTree()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isLoadingInvoices = false)).subscribe();
    }
    getServices() {
        this.orderService.get([
            { name: 'needs_qc', value: true },
            { name: 'by_qc_module_permission', value: true }
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(orders => this.orders = orders), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.makeUniqueProductionPlans()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.fillOwnProductionWithData())).subscribe();
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
                        description: purchaseCategory.description,
                    });
                }
            }
            else {
                if (invoice.order?.accounting_type === 1) {
                    const isAdded = categories.findIndex(el => el.id === -2);
                    if (isAdded < 0) {
                        categories.push({ name: 'Production Lists Procurement', id: -2, description: '', level: 0 });
                    }
                }
                if (invoice.order?.accounting_type === 2) {
                    const isAdded = categories.findIndex(el => el.id === -1);
                    if (isAdded < 0) {
                        categories.push({ name: 'Outsourcing', id: -1, description: '', level: 0 });
                    }
                }
            }
        });
        categories.sort((a, b) => a.id - b.id);
        this.invoiceTree = [];
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
            // Preparing Purchased Invoices
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
                const manProc = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order?.accounting_type === 1);
                node.children = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
                this.prepareInnerTreeCategories(manProc, node);
            }
            // Preparing Outsourcing
            if (node.data.id === -1) {
                const outsourcing = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order?.accounting_type === 2);
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
                            level: 0,
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
    makeUniqueProductionPlans() {
        this.orders.forEach(order => {
            order.unique_root_production_plans = [];
            order.root_production_plans.forEach(plan => {
                if (plan.root_nomenclature) {
                    const nomenclatureId = plan.root_nomenclature.id;
                    const existingIndex = order.unique_root_production_plans
                        .findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);
                    if (existingIndex < 0) {
                        order.unique_root_production_plans.push(plan);
                    }
                }
            });
        });
    }
    makeUniqueProductionPlansInvoice() {
        this.invoices.forEach(invoice => {
            invoice.unique_root_production_plans = [];
            invoice.root_production_plans.forEach(plan => {
                if (plan.root_nomenclature) {
                    const nomenclatureId = plan.root_nomenclature.id;
                    const existingIndex = invoice.unique_root_production_plans
                        .findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);
                    if (existingIndex < 0) {
                        invoice.unique_root_production_plans.push(plan);
                    }
                }
            });
        });
    }
    createTree(data) {
        const dd = [];
        data.forEach(element => {
            const ins = { data: element, expanded: false };
            if (this.expanseMap) {
                ins.expanded = this.expanseMap[element.id];
            }
            dd.push(ins);
        });
        const root = [];
        const idMapping = dd.reduce((acc, el, i) => {
            acc[el.data.id] = i;
            return acc;
        }, {});
        dd.forEach(el => {
            if (el.data.parent === null) {
                root.push(el);
                return;
            }
            const parentEl = dd[idMapping[el.data.parent]];
            parentEl.children = [...(parentEl.children || []), el];
            if (parentEl.children.length === 0) {
                delete parentEl.children;
            }
        });
        this.categories = root;
        this.ownProductionCategorizedList = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
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
                            level: 0,
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
        if (this.ownProductionCategorizedList) {
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
            this.isLoadingOrders = false;
        }
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
    expandCollapsePurchasedInvoices(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.invoicePurchasedTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.invoicePurchasedTree = temp;
    }
    expandCollapseAllOrders(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.ownProductionCategorizedList);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.ownProductionCategorizedList = temp;
    }
}
QcListComponent.ɵfac = function QcListComponent_Factory(t) { return new (t || QcListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryService)); };
QcListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QcListComponent, selectors: [["pek-qc-list"]], decls: 33, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "custom-tabs"], [3, "header", "selected"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 22rem)", 3, "value", "selection", "scrollable", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "header"], [2, "width", "20%", "padding-left", "19px"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "20%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "Expand All", "icon", "pi pi-angle-down", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Collapse All", "icon", "pi pi-angle-up", 3, "disabled", "click"], [1, "subtitle"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow", 4, "ngIf"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow"], [2, "width", "20%"], [1, "table-toggle"], [3, "rowNode"], [4, "ngIf"], [3, "text-warning", 4, "ngIf"], ["style", "font-style: normal", 4, "ngIf"], [2, "font-style", "normal"], [4, "ngFor", "ngForOf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "text-center", 2, "width", "45%"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled", 4, "ngIf"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"]], template: function QcListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "p-tabView", 6)(9, "p-tabPanel", 7)(10, "div", 8)(11, "p-treeTable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function QcListComponent_Template_p_treeTable_selectionChange_11_listener($event) { return ctx.selectedInvoiceNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, QcListComponent_ng_template_13_Template, 13, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, QcListComponent_ng_template_14_Template, 5, 8, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, QcListComponent_ng_template_15_Template, 1, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, QcListComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p-tabPanel", 15)(18, "div", 8)(19, "p-treeTable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function QcListComponent_Template_p_treeTable_selectionChange_19_listener($event) { return ctx.selectedOrderNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, QcListComponent_ng_template_21_Template, 9, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, QcListComponent_ng_template_22_Template, 5, 8, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, QcListComponent_ng_template_23_Template, 1, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, QcListComponent_ng_template_24_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p-tabPanel", 15)(26, "div", 8)(27, "p-treeTable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function QcListComponent_Template_p_treeTable_selectionChange_27_listener($event) { return ctx.selectedPurchasedInvoiceNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, QcListComponent_ng_template_29_Template, 13, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, QcListComponent_ng_template_30_Template, 5, 8, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, QcListComponent_ng_template_31_Template, 20, 17, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, QcListComponent_ng_template_32_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "quality-control")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "Production Lists Procurement and Outsourcing Invoices")("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.invoiceManufacturedTree)("selection", ctx.selectedInvoiceNode)("scrollable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "Own Production Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.ownProductionCategorizedList)("selection", ctx.selectedOrderNode)("scrollable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "General Procurement Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.invoicePurchasedTree)("selection", ctx.selectedPurchasedInvoiceNode)("scrollable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_11__.TTSelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoicWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 76443:
/*!**************************************************************!*\
  !*** ./src/app/qc/components/qc-order/qc-order.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcOrderComponent": () => (/* binding */ QcOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class QcOrderComponent {
    constructor() { }
    ngOnInit() {
    }
}
QcOrderComponent.ɵfac = function QcOrderComponent_Factory(t) { return new (t || QcOrderComponent)(); };
QcOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QcOrderComponent, selectors: [["pek-qc-order"]], decls: 2, vars: 0, template: function QcOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "qc-order works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxYy1vcmRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 13951:
/*!*********************************!*\
  !*** ./src/app/qc/qc.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcModule": () => (/* binding */ QcModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _qc_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qc.routing */ 91403);
/* harmony import */ var _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qc-list/qc-list.component */ 39818);
/* harmony import */ var _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qc-layout/qc-layout.component */ 80099);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/qc-invoice/qc-invoice.component */ 60716);
/* harmony import */ var _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/qc-order/qc-order.component */ 76443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class QcModule {
}
QcModule.ɵfac = function QcModule_Factory(t) { return new (t || QcModule)(); };
QcModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: QcModule });
QcModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](QcModule, { declarations: [_components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent,
        _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_2__.QcLayoutComponent,
        _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_5__.QcInvoiceComponent,
        _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_6__.QcOrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule] }); })();


/***/ }),

/***/ 91403:
/*!**********************************!*\
  !*** ./src/app/qc/qc.routing.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcRouting": () => (/* binding */ QcRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/qc-layout/qc-layout.component */ 80099);
/* harmony import */ var _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qc-list/qc-list.component */ 39818);
/* harmony import */ var _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qc-order/qc-order.component */ 76443);
/* harmony import */ var _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/qc-invoice/qc-invoice.component */ 60716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    {
        path: '',
        component: _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_0__.QcLayoutComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', title: 'Quality Control', component: _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent },
            { path: 'invoice/:id', title: 'Invoice Quality Control', component: _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_3__.QcInvoiceComponent },
            { path: 'order/:id', title: 'Order Quality Control', component: _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_2__.QcOrderComponent },
        ]
    }
];
class QcRouting {
}
QcRouting.ɵfac = function QcRouting_Factory(t) { return new (t || QcRouting)(); };
QcRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: QcRouting });
QcRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QcRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_qc_qc_module_ts.js.map