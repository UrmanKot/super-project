"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_procurement_procurement_module_ts"],{

/***/ 90558:
/*!*******************************************************************!*\
  !*** ./src/app/procurement/components/chains/chains.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainsComponent": () => (/* binding */ ChainsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/order.service */ 37593);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_pickers_multi_product_structure_categories_picker_multi_product_structure_categories_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pickers/multi-product-structure-categories-picker/multi-product-structure-categories-picker.component */ 66913);
/* harmony import */ var _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/company-picker/company-picker.component */ 66242);
/* harmony import */ var _pickers_statuses_picker_statuses_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pickers/statuses-picker/statuses-picker.component */ 39165);















function ChainsComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Supplier Nomenclature");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Root Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Completion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ChainsComponent_ng_template_56_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", item_r8.list.nomenclature.code, "~", item_r8.list.nomenclature.name, " (", item_r8.count, ") ");
} }
function ChainsComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 32)(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 31)(13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ChainsComponent_ng_template_56_div_16_Template, 2, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const i_r6 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", order_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 10, order_r5.created, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r5.supplier == null ? null : order_r5.supplier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r5.supplier == null ? null : order_r5.supplier.supplier_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r5.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.getRootLists(order_r5.root_production_list_products));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r5.status == null ? null : order_r5.status.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](21, 13, order_r5 == null ? null : order_r5.activeStatusDate, "dd/MM/yyyy"));
} }
function ChainsComponent_ng_template_57_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 38);
} }
function ChainsComponent_ng_template_57_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChainsComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChainsComponent_ng_template_57_i_2_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChainsComponent_ng_template_57_span_3_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
function ChainsComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChainsComponent_ng_template_58_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](54); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["order", a1]; };
class ChainsComponent {
    constructor(fb, orderService, adapterService) {
        this.fb = fb;
        this.orderService = orderService;
        this.adapterService = adapterService;
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
        this.orders = [];
        this.isLoading = false;
        this.isHideFilters = false;
        this.nomenclaturesList = [];
        this.rootLists = [];
        this.query = [
            { name: 'accounting_type', value: 1 },
            { name: 'has_purchase_category', value: false },
            { name: 'exclude_with_active_final_status', value: true }
        ];
        this.tableScrollHeight = '29.625rem';
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.isLoading = true;
        this.orderService.get(this.query).subscribe(orders => {
            this.orders = orders;
            this.orders.map(x => {
                x.created = new Date(x.created);
                x.created_to = x.created;
                x.status = x.statuses.filter(stat => stat.is_active)[0]?.status;
                x.activeStatusDate = x.statuses.filter(stat => stat.is_active)[0]?.estimated_date;
            });
            this.generateNomenclaturesListAndRootLists();
        });
    }
    generateNomenclaturesListAndRootLists() {
        this.orders.forEach(order => {
            if (order.activeStatusDate) {
                order.activeStatusDate = new Date(order.activeStatusDate);
            }
            order.order_products.forEach(orderProduct => {
                if (!this.nomenclaturesList.includes(orderProduct.nomenclature)) {
                    this.nomenclaturesList.push(orderProduct.nomenclature);
                }
            });
            order.root_production_list_products.forEach(root => this.rootLists.push(root));
            this.rootLists = this.rootLists.map(root => {
                return {
                    ...root,
                    fullName: `(${root.id}) ${root.nomenclature.code}~${root.nomenclature.name}`
                };
            });
        });
        this.nomenclaturesList = this.adapterService.removeDuplicates(this.nomenclaturesList, x => x.id);
        this.rootLists = this.adapterService.removeDuplicates(this.rootLists, x => x.id);
        this.nomenclaturesList.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
        this.rootLists.sort((a, b) => {
            if (a.fullName < b.fullName)
                return -1;
            if (a.fullName > b.fullName)
                return 1;
            return 0;
        });
    }
    getRootLists(rootLists) {
        const lists = [];
        rootLists.forEach((res) => {
            const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
            if (found) {
                found.count++;
            }
            else {
                lists.push({ list: res, count: 1 });
            }
        });
        return lists;
    }
}
ChainsComponent.ɵfac = function ChainsComponent_Factory(t) { return new (t || ChainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__.AdapterService)); };
ChainsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChainsComponent, selectors: [["pek-chains"]], decls: 59, vars: 29, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], [1, "mr-2", "p-button-warning"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [1, "icon", "pi"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["optionValue", "id", "optionLabel", "name", "placeholder", "No Nomenclature Selected", 3, "filter", "showClear", "options"], ["optionValue", "fullName", "optionLabel", "fullName", "placeholder", "No List Selected", 3, "filter", "showClear", "options"], [3, "accountingType"], ["dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput"], [3, "routerLink"], [1, "page__table"], ["selectionMode", "single", "dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "scrollHeight", "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], [1, "text-center", 2, "width", "3%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "7%"], [1, "text-center", 2, "width", "15%"], [2, "width", "15%"], [3, "pSelectableRow"], [1, "word-break"], ["class", "word-break", 4, "ngFor", "ngForOf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function ChainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Procurement Chains");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 9)(12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "form", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Nomenclature");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "p-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "pek-company-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 13)(26, "div", 14)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Root List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "p-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 13)(31, "div", 14)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "pek-statuses-picker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "p-calendar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 13)(41, "div", 14)(42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "p-calendar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 13)(46, "div", 14)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Product Structure Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "pek-multi-product-structure-categories-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 20)(53, "p-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ChainsComponent_Template_p_table_selectionChange_53_listener($event) { return ctx.selectedOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, ChainsComponent_ng_template_55_Template, 19, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, ChainsComponent_ng_template_56_Template, 22, 16, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ChainsComponent_ng_template_57_Template, 4, 3, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, ChainsComponent_ng_template_58_Template, 2, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "manufacturing-procurement")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("filter", true)("showClear", true)("options", ctx.nomenclaturesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("filter", true)("showClear", true)("options", ctx.rootLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("accountingType", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](27, _c0, ctx.selectedOrder == null ? null : ctx.selectedOrder.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollHeight", "calc(100vh - " + ctx.tableScrollHeight + ")")("scrollable", true)("paginator", true)("rows", 10)("selection", ctx.selectedOrder)("value", ctx.orders);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.Calendar, _shared_pickers_multi_product_structure_categories_picker_multi_product_structure_categories_picker_component__WEBPACK_IMPORTED_MODULE_3__.MultiProductStructureCategoriesPickerComponent, _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_4__.CompanyPickerComponent, _pickers_statuses_picker_statuses_picker_component__WEBPACK_IMPORTED_MODULE_5__.StatusesPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYWlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoiY2hhaW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 98933:
/*!*******************************************************************************************!*\
  !*** ./src/app/procurement/components/procurement-layout/procurement-layout.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcurementLayoutComponent": () => (/* binding */ ProcurementLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class ProcurementLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Procurement Chains', commands: ['chains'] },
        ];
    }
    ngOnInit() {
    }
}
ProcurementLayoutComponent.ɵfac = function ProcurementLayoutComponent_Factory(t) { return new (t || ProcurementLayoutComponent)(); };
ProcurementLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProcurementLayoutComponent, selectors: [["pek-procurement-layout"]], decls: 2, vars: 2, consts: [[3, "module", "routes", "settingsRoutes"]], template: function ProcurementLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Production Lists Procurement")("routes", ctx.routes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jdXJlbWVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 32346:
/*!***************************************************************************************************!*\
  !*** ./src/app/procurement/components/procurement-order-page/procurement-order-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcurementOrderPageComponent": () => (/* binding */ ProcurementOrderPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/order-page/order-page.component */ 35198);






class ProcurementOrderPageComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(id => this.orderId = +id)).subscribe();
    }
}
ProcurementOrderPageComponent.ɵfac = function ProcurementOrderPageComponent_Factory(t) { return new (t || ProcurementOrderPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
ProcurementOrderPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProcurementOrderPageComponent, selectors: [["pek-procurement-order-page"]], decls: 12, vars: 4, consts: [[1, "procurement-order-page"], [1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Order Files", 1, "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Order Files"], [1, "page__content"], [3, "orderId"]], template: function ProcurementOrderPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "pek-module-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "button", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "pek-order-page", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "manufacturing-procurement")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Order ", ctx.orderId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("orderId", ctx.orderId);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__.ModuleIconComponent, _shared_components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_1__.OrderPageComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jdXJlbWVudC1vcmRlci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 39165:
/*!**********************************************************************************!*\
  !*** ./src/app/procurement/pickers/statuses-picker/statuses-picker.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusesPickerComponent": () => (/* binding */ StatusesPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/status.service */ 79047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/multiselect */ 30850);







function StatusesPickerComponent_p_multiSelect_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-multiSelect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StatusesPickerComponent_p_multiSelect_1_Template_p_multiSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectedStatuses = $event); })("ngModelChange", function StatusesPickerComponent_p_multiSelect_1_Template_p_multiSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onSelectStatuses($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.statuses)("ngModel", ctx_r0.selectedStatuses)("showClear", true);
} }
function StatusesPickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StatusesPickerComponent {
    constructor(statusService) {
        this.statusService = statusService;
        this.selectStatuses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isLoading = true;
        this.statuses = [];
        this.selectedStatuses = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.statusService.get([
            { name: 'accounting_type', value: this.accountingType }
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(statuses => {
            this.statuses = statuses;
            this.isLoading = false;
        });
    }
    onSelectStatuses(statuses) {
        if (statuses) {
            this.selectStatuses.emit(statuses.map(s => s.id));
        }
        else {
            this.selectStatuses.emit(null);
        }
    }
}
StatusesPickerComponent.ɵfac = function StatusesPickerComponent_Factory(t) { return new (t || StatusesPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_status_service__WEBPACK_IMPORTED_MODULE_0__.StatusService)); };
StatusesPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatusesPickerComponent, selectors: [["pek-statuses-picker"]], inputs: { accountingType: "accountingType" }, outputs: { selectStatuses: "selectStatuses" }, decls: 4, vars: 2, consts: [[1, "status-picker"], ["optionLabel", "value", "placeholder", "Select Statuses", 3, "options", "ngModel", "showClear", "ngModelChange", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["optionLabel", "value", "placeholder", "Select Statuses", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function StatusesPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StatusesPickerComponent_p_multiSelect_1_Template, 1, 3, "p-multiSelect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StatusesPickerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__.MultiSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXNlcy1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 97279:
/*!***************************************************!*\
  !*** ./src/app/procurement/procurement.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcurementModule": () => (/* binding */ ProcurementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _procurement_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procurement.routing */ 55591);
/* harmony import */ var _components_chains_chains_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chains/chains.component */ 90558);
/* harmony import */ var _components_procurement_layout_procurement_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/procurement-layout/procurement-layout.component */ 98933);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _pickers_statuses_picker_statuses_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pickers/statuses-picker/statuses-picker.component */ 39165);
/* harmony import */ var _warehouse_warehouse_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../warehouse/warehouse.module */ 10273);
/* harmony import */ var _components_procurement_order_page_procurement_order_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/procurement-order-page/procurement-order-page.component */ 32346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);










class ProcurementModule {
}
ProcurementModule.ɵfac = function ProcurementModule_Factory(t) { return new (t || ProcurementModule)(); };
ProcurementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProcurementModule });
ProcurementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _procurement_routing__WEBPACK_IMPORTED_MODULE_0__.ProcurementRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _warehouse_warehouse_module__WEBPACK_IMPORTED_MODULE_6__.WarehouseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProcurementModule, { declarations: [_components_chains_chains_component__WEBPACK_IMPORTED_MODULE_1__.ChainsComponent,
        _components_procurement_layout_procurement_layout_component__WEBPACK_IMPORTED_MODULE_2__.ProcurementLayoutComponent,
        _pickers_statuses_picker_statuses_picker_component__WEBPACK_IMPORTED_MODULE_5__.StatusesPickerComponent,
        _components_procurement_order_page_procurement_order_page_component__WEBPACK_IMPORTED_MODULE_7__.ProcurementOrderPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _procurement_routing__WEBPACK_IMPORTED_MODULE_0__.ProcurementRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _warehouse_warehouse_module__WEBPACK_IMPORTED_MODULE_6__.WarehouseModule] }); })();


/***/ }),

/***/ 55591:
/*!****************************************************!*\
  !*** ./src/app/procurement/procurement.routing.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcurementRouting": () => (/* binding */ ProcurementRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_procurement_layout_procurement_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/procurement-layout/procurement-layout.component */ 98933);
/* harmony import */ var _components_chains_chains_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chains/chains.component */ 90558);
/* harmony import */ var _components_procurement_order_page_procurement_order_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/procurement-order-page/procurement-order-page.component */ 32346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    {
        path: '',
        component: _components_procurement_layout_procurement_layout_component__WEBPACK_IMPORTED_MODULE_0__.ProcurementLayoutComponent,
        children: [
            { path: '', redirectTo: 'chains', pathMatch: 'full' },
            {
                path: 'chains',
                children: [
                    { path: '', title: 'Procurement Chains', component: _components_chains_chains_component__WEBPACK_IMPORTED_MODULE_1__.ChainsComponent },
                    { path: 'order/:id', title: 'Procurement Order', component: _components_procurement_order_page_procurement_order_page_component__WEBPACK_IMPORTED_MODULE_2__.ProcurementOrderPageComponent },
                ]
            },
        ]
    }
];
class ProcurementRouting {
}
ProcurementRouting.ɵfac = function ProcurementRouting_Factory(t) { return new (t || ProcurementRouting)(); };
ProcurementRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProcurementRouting });
ProcurementRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProcurementRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 79047:
/*!********************************************************!*\
  !*** ./src/app/procurement/services/status.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusService": () => (/* binding */ StatusService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class StatusService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'statuses/';
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
StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
StatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_procurement_procurement_module_ts.js.map