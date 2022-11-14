"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_crm_crm_module_ts"],{

/***/ 20812:
/*!*****************************************************************!*\
  !*** ./src/app/crm/components/companies/companies.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesComponent": () => (/* binding */ CompaniesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/company.service */ 54600);
/* harmony import */ var _services_company_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/company-category.service */ 47217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_company_category_picker_company_category_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pickers/company-category-picker/company-category-picker.component */ 90528);
/* harmony import */ var _shared_pickers_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/region-picker/region-picker.component */ 80966);















function CompaniesComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function CompaniesComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function CompaniesComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function CompaniesComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 33)(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const chain_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pSelectableRow", chain_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 3, chain_r11.created_at, "dd/MM/y"), " ");
} }
function CompaniesComponent_ng_template_46_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 37);
} }
function CompaniesComponent_ng_template_46_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CompaniesComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CompaniesComponent_ng_template_46_i_2_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CompaniesComponent_ng_template_46_span_3_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function CompaniesComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CompaniesComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "p-paginator", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onPageChange", function CompaniesComponent_div_48_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompaniesComponent_div_48_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r7.salesChain.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r7.countChains);
} }
function CompaniesComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "p-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompaniesComponent_div_49_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function CompaniesComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-menubar", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r10.selectedSalesChain);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("model", ctx_r10.menuItems);
} }
class CompaniesComponent {
    constructor(fb, companyService, companyCategoryService) {
        this.fb = fb;
        this.companyService = companyService;
        this.companyCategoryService = companyCategoryService;
        this.searchForm = this.fb.group({
            page: [1],
            name: [null],
            region: [null],
            category: [null],
            nomenclature: [null],
            selectedNomenclature: [null],
            contains_contact_person: [null]
        });
        this.countChains = 0;
        this.salesChain = [];
        this.isStartOnePage = false;
        this.isShowAll = false;
        this.isLoading = true;
        this.menuItems = [{
                label: 'Selected Company',
                items: [
                    {
                        label: 'Company Card',
                        icon: 'pi pi-card',
                        // command: () => this.onGoToChainPage()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        // command: () => this.onRemoveChain()
                    }
                ]
            }];
        this.tableScrollHeight = '24.125rem';
        this.isHideFilters = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
    }
    searchChains() {
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
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchChains();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.setTableScrollHeight();
        this.searchChains();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.setTableScrollHeight();
        this.searchChains();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_company_service__WEBPACK_IMPORTED_MODULE_0__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_company_category_service__WEBPACK_IMPORTED_MODULE_1__.CompanyCategoryService)); };
CompaniesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["pek-companies"]], decls: 52, vars: 19, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Company"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "icon", "pi", 3, "click"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 1, "form-control"], ["for", "person-name"], ["id", "person-name", "type", "text", "pInputText", "", "formControlName", "contains_contact_person", 1, "form-control"], [1, "table-pagination-preloader"], ["selectionMode", "single", "rowExpandMode", "single", "dataKey", "id", 3, "scrollHeight", "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "text-center", 2, "width", "5%"], [2, "width", "30%"], [1, "text-center", 2, "width", "15%"], [1, "table-row", 3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Company Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CompaniesComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompaniesComponent_Template_button_click_13_listener() { return ctx.toggleFilterVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "form", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "pek-company-category-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "pek-region-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Contact Person Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "div", 14)(37, "div", 14)(38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CompaniesComponent_ng_container_40_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20)(42, "p-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function CompaniesComponent_Template_p_table_selectionChange_42_listener($event) { return ctx.selectedSalesChain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, CompaniesComponent_ng_template_44_Template, 7, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CompaniesComponent_ng_template_45_Template, 7, 6, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CompaniesComponent_ng_template_46_Template, 4, 3, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CompaniesComponent_div_47_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CompaniesComponent_div_48_Template, 5, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, CompaniesComponent_div_49_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CompaniesComponent_ng_template_50_Template, 2, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollHeight", "calc(100vh - " + ctx.tableScrollHeight + ")")("scrollable", true)("rows", 10)("selection", ctx.selectedSalesChain)("value", ctx.salesChain);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_menubar__WEBPACK_IMPORTED_MODULE_12__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_14__.Paginator, _shared_pickers_company_category_picker_company_category_picker_component__WEBPACK_IMPORTED_MODULE_3__.CompanyCategoryPickerComponent, _shared_pickers_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_4__.RegionPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW5pZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 19754:
/*!***********************************************************************************!*\
  !*** ./src/app/crm/components/company-categories/company-categories.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyCategoriesComponent": () => (/* binding */ CompanyCategoriesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_company_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/company-category.service */ 47217);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);










function CompanyCategoriesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Company Category to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CompanyCategoriesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CompanyCategoriesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function CompanyCategoriesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function CompanyCategoriesComponent_ng_template_15_span_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CompanyCategoriesComponent_ng_template_15_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CompanyCategoriesComponent_ng_template_15_span_6_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r11 = ctx.$implicit;
    const idx_r12 = ctx.index;
    const category_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", module_r11.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", idx_r12 !== category_r8.modules.length - 1);
} }
function CompanyCategoriesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CompanyCategoriesComponent_ng_template_15_span_6_Template, 3, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", category_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", category_r8.modules);
} }
function CompanyCategoriesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 29);
} }
function CompanyCategoriesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CompanyCategoriesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CompanyCategoriesComponent_ng_template_16_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CompanyCategoriesComponent_ng_template_16_span_3_Template, 2, 0, "span", 26);
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
function CompanyCategoriesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyCategoriesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CompanyCategoriesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyCategoriesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class CompanyCategoriesComponent {
    constructor(companyCategoryService, modalService) {
        this.companyCategoryService = companyCategoryService;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.menuItems = [{
                label: 'Selected Company Category',
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
            }];
        this.categories = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.getCompanyCategories();
    }
    getCompanyCategories() {
        this.companyCategoryService.get().subscribe(categories => {
            this.categories = categories;
            this.isLoading = false;
        });
    }
    onAddCategory() {
        this.companyCategoryService.createEditWarehouseModal('create').subscribe(category => {
            if (category) {
                this.categories.push(category);
                this.renderTable();
            }
        });
    }
    onEditCategory() {
        this.companyCategoryService.createEditWarehouseModal('edit', this.selectedCategory).subscribe(category => {
            if (category) {
                const index = this.categories.findIndex(t => t.id === this.selectedCategory.id);
                this.categories[index] = category;
                this.selectedCategory = this.categories[index];
                this.renderTable();
            }
        });
    }
    onRemoveCategory() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.companyCategoryService.delete(this.selectedCategory).subscribe(() => {
                    const index = this.categories.findIndex(w => w.id === this.selectedCategory.id);
                    this.categories.splice(index, 1);
                    this.selectedCategory = null;
                    this.renderTable();
                });
            }
        });
    }
    renderTable() {
        this.categories = this.categories.map(el => el);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CompanyCategoriesComponent.ɵfac = function CompanyCategoriesComponent_Factory(t) { return new (t || CompanyCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_company_category_service__WEBPACK_IMPORTED_MODULE_0__.CompanyCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
CompanyCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CompanyCategoriesComponent, selectors: [["pek-company-categories"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Category", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "40%"], [2, "width", "55%"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function CompanyCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Company Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanyCategoriesComponent_Template_button_click_7_listener() { return ctx.onAddCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function CompanyCategoriesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CompanyCategoriesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CompanyCategoriesComponent_ng_template_14_Template, 7, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CompanyCategoriesComponent_ng_template_15_Template, 7, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CompanyCategoriesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CompanyCategoriesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CompanyCategoriesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.categories.length > 0)("rows", 10)("selection", ctx.selectedCategory)("value", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.categories.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84615:
/*!*************************************************************************!*\
  !*** ./src/app/crm/components/crm-employees/crm-employees.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmEmployeesComponent": () => (/* binding */ CrmEmployeesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/crm-employee.service */ 29038);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);










function CrmEmployeesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Employee to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmEmployeesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrmEmployeesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedEmployee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedEmployee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function CrmEmployeesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function CrmEmployeesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
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
    const employee_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", employee_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](employee_r8.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](employee_r8.last_name);
} }
function CrmEmployeesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function CrmEmployeesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmEmployeesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrmEmployeesComponent_ng_template_16_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrmEmployeesComponent_ng_template_16_span_3_Template, 2, 0, "span", 27);
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
function CrmEmployeesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmEmployeesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmEmployeesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmEmployeesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class CrmEmployeesComponent {
    constructor(crmEmployeeService, modalService) {
        this.crmEmployeeService = crmEmployeeService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Employee',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditEmployee()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveEmployee()
                    }
                ]
            }];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.employees = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.crmEmployeeService.get().subscribe(employees => {
            this.employees = employees;
            this.isLoading = false;
        });
    }
    onAddEmployee() {
        this.crmEmployeeService.createEditEmployeeModal('create').subscribe(employee => {
            if (employee) {
                this.employees.unshift(employee);
                this.renderTable();
            }
        });
    }
    onEditEmployee() {
        this.crmEmployeeService.createEditEmployeeModal('edit', this.selectedEmployee).subscribe(employee => {
            if (employee) {
                const index = this.employees.findIndex(t => t.id === this.selectedEmployee.id);
                this.employees[index] = employee;
                this.selectedEmployee = this.employees[index];
                this.renderTable();
            }
        });
    }
    onRemoveEmployee() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.crmEmployeeService.delete(this.selectedEmployee).subscribe(() => {
                    const index = this.employees.findIndex(w => w.id === this.selectedEmployee.id);
                    this.employees.splice(index, 1);
                    this.selectedEmployee = null;
                    this.renderTable();
                });
            }
        });
    }
    renderTable() {
        this.employees = this.employees.map(el => el);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CrmEmployeesComponent.ɵfac = function CrmEmployeesComponent_Factory(t) { return new (t || CrmEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__.CrmEmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
CrmEmployeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrmEmployeesComponent, selectors: [["pek-crm-employees"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Event Type", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "45%"], [2, "width", "50%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function CrmEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmEmployeesComponent_Template_button_click_7_listener() { return ctx.onAddEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function CrmEmployeesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedEmployee = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CrmEmployeesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CrmEmployeesComponent_ng_template_14_Template, 7, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CrmEmployeesComponent_ng_template_15_Template, 7, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrmEmployeesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CrmEmployeesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CrmEmployeesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.employees.length > 0)("rows", 10)("selection", ctx.selectedEmployee)("value", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.employees.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 52824:
/*!***************************************************************************!*\
  !*** ./src/app/crm/components/crm-event-card/crm-event-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmEventCardComponent": () => (/* binding */ CrmEventCardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_events_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/events-list.service */ 50828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_event_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event-company.service */ 9068);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);













function CrmEventCardComponent_div_12_h4_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", employee_r14.first_name + " " + employee_r14.last_name, " ");
} }
function CrmEventCardComponent_div_12_h4_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Employee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CrmEventCardComponent_div_12_h4_19_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.event.employee);
} }
function CrmEventCardComponent_div_12_h4_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", employee_r16.first_name + " " + employee_r16.last_name, ", ");
} }
function CrmEventCardComponent_div_12_h4_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Employees: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CrmEventCardComponent_div_12_h4_20_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.event.employee);
} }
function CrmEventCardComponent_div_12_h4_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Employee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Not Related ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function CrmEventCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Event Start: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Event End: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Event Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CrmEventCardComponent_div_12_h4_19_Template, 3, 1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CrmEventCardComponent_div_12_h4_20_Template, 3, 1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CrmEventCardComponent_div_12_h4_21_Template, 4, 0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.event.event_type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 7, ctx_r0.event.start, "dd/MM/yyyy, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 10, ctx_r0.event.end, "dd/MM/yyyy, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.event.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.employee.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.employee.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.employee.length === 0);
} }
function CrmEventCardComponent_ng_template_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Choose the Company to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CrmEventCardComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CrmEventCardComponent_ng_template_19_p_1_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-menubar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrmEventCardComponent_ng_template_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.onAddCompanyToEvent()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.selectedEventCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r2.selectedEventCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r2.menuItems);
} }
function CrmEventCardComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Is Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function CrmEventCardComponent_ng_template_21_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 38);
} }
function CrmEventCardComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33)(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 34)(9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CrmEventCardComponent_ng_template_21_i_10_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const company_r20 = ctx.$implicit;
    const i_r21 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", company_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/dash/crm/businnes-partners/company-page/" + company_r20.company.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", company_r20.company.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", company_r20.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", company_r20.is_done)("ngIfElse", _r8);
} }
function CrmEventCardComponent_ng_template_22_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 41);
} }
function CrmEventCardComponent_ng_template_22_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CrmEventCardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CrmEventCardComponent_ng_template_22_i_2_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CrmEventCardComponent_ng_template_22_span_3_Template, 2, 0, "span", 22);
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
function CrmEventCardComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrmEventCardComponent_ng_template_23_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CrmEventCardComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrmEventCardComponent_div_24_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function CrmEventCardComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 44);
} }
class CrmEventCardComponent {
    constructor(eventListService, route, modalService, eventCompanyService) {
        this.eventListService = eventListService;
        this.route = route;
        this.modalService = modalService;
        this.eventCompanyService = eventCompanyService;
        this.menuItems = [{
                label: 'Selected Company',
                items: [
                    {
                        label: 'Done',
                        icon: 'pi pi-check',
                        command: () => this.onDoneCompany()
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
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.getEvent();
    }
    getEvent() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(id => this.eventId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.eventListService.getById(this.eventId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(event => {
            this.event = event;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onDoneCompany() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                this.eventCompanyService.update(this.selectedEventCompany.id, { is_done: true }).subscribe(() => this.getEvent());
            }
        });
    }
    onEditTechnology() {
        return undefined;
    }
    onRemoveTechnology() {
        return undefined;
    }
    onAddCompanyToEvent() {
        this.eventListService.openAddCompanyToEventModal(this.eventId).subscribe(event => {
            if (event) {
                this.getEvent();
            }
        });
    }
}
CrmEventCardComponent.ɵfac = function CrmEventCardComponent_Factory(t) { return new (t || CrmEventCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_events_list_service__WEBPACK_IMPORTED_MODULE_0__.EventsListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_event_company_service__WEBPACK_IMPORTED_MODULE_2__.EventCompanyService)); };
CrmEventCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CrmEventCardComponent, selectors: [["pek-crm-event-card"]], decls: 27, vars: 9, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "mb-4"], [1, "page__card", "event-card", "mb-4"], [1, "event-card__info"], [1, "row"], ["class", "col-md-5", 4, "ngIf"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["notGrouped", ""], [1, "col-md-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Company", 1, "ml-2", 3, "click"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [2, "width", "45%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center"], [3, "routerLink"], [1, "icons"], ["class", "pi pi-check text-success", 4, "ngIf", "ngIfElse"], [1, "pi", "pi-check", "text-success"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "pi", "pi-times", "text-danger"]], template: function CrmEventCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Event Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Event Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CrmEventCardComponent_div_12_Template, 22, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Event Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "p-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function CrmEventCardComponent_Template_p_table_selectionChange_17_listener($event) { return ctx.selectedEventCompany = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CrmEventCardComponent_ng_template_19_Template, 4, 4, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CrmEventCardComponent_ng_template_20_Template, 9, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CrmEventCardComponent_ng_template_21_Template, 11, 7, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CrmEventCardComponent_ng_template_22_Template, 4, 3, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CrmEventCardComponent_ng_template_23_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CrmEventCardComponent_div_24_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CrmEventCardComponent_ng_template_25_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("paginator", (ctx.event == null ? null : ctx.event.on_companies.length) > 0)("rows", 10)("selection", ctx.selectedEventCompany)("value", ctx.event == null ? null : ctx.event.on_companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading && (ctx.event == null ? null : ctx.event.on_companies.length) > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".event-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.75rem 1.125rem;\n}\n.event-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n  font-weight: 500;\n  font-size: 1.0625rem;\n}\n.event-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.event-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.icons[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNybS1ldmVudC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0FBQU47QUFLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUZGO0FBS0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBRkYiLCJmaWxlIjoiY3JtLWV2ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtIDEuMTI1cmVtO1xyXG5cclxuICBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmljb25zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9010:
/*!***********************************************************************************!*\
  !*** ./src/app/crm/components/crm-events-reports/crm-events-reports.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmEventsReportsComponent": () => (/* binding */ CrmEventsReportsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_events_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/events-report.service */ 97138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_pickers_multi_sales_status_picker_multi_sales_status_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/multi-sales-status-picker/multi-sales-status-picker.component */ 25541);
/* harmony import */ var _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pickers/company-picker/company-picker.component */ 66242);
/* harmony import */ var _shared_icons_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/sort-icon/sort-icon.component */ 49258);
/* harmony import */ var _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pickers/crm-employee-picker/crm-employee-picker.component */ 9290);
/* harmony import */ var _pickers_crm_multi_event_types_picker_crm_multi_event_types_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pickers/crm-multi-event-types-picker/crm-multi-event-types-picker.component */ 59741);




















const _c0 = ["dt"];
const _c1 = ["paginator"];
function CrmEventsReportsComponent_ng_template_43_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Event Date From");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-calendar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CrmEventsReportsComponent_ng_template_43_div_6_Template_p_calendar_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.searchByLastDate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("firstDayOfWeek", 1)("showButtonBar", true)("readonlyInput", true)("maxDate", ctx_r9.dateRangeLimit);
} }
function CrmEventsReportsComponent_ng_template_43_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Event Date To");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-calendar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CrmEventsReportsComponent_ng_template_43_div_7_Template_p_calendar_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.searchByLastDate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("firstDayOfWeek", 1)("showButtonBar", true)("readonlyInput", true)("maxDate", ctx_r10.dateRangeLimit);
} }
function CrmEventsReportsComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "div", 8)(2, "div", 9)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Event Date Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p-dropdown", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function CrmEventsReportsComponent_ng_template_43_Template_p_dropdown_onChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.changeLastsDateFilterType($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CrmEventsReportsComponent_ng_template_43_div_6_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CrmEventsReportsComponent_ng_template_43_div_7_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.dateLastFilterTypes)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.searchForm.get("datesLastFilterType").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.searchForm.get("datesLastFilterType").value);
} }
function CrmEventsReportsComponent_ng_template_44_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Event Date From");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-calendar", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CrmEventsReportsComponent_ng_template_44_div_6_Template_p_calendar_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.searchByFeatureDate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("firstDayOfWeek", 1)("showButtonBar", true)("readonlyInput", true)("minDate", ctx_r17.dateRangeLimit);
} }
function CrmEventsReportsComponent_ng_template_44_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Event Date To");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-calendar", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CrmEventsReportsComponent_ng_template_44_div_7_Template_p_calendar_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.searchByFeatureDate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("firstDayOfWeek", 1)("showButtonBar", true)("readonlyInput", true)("minDate", ctx_r18.dateRangeLimit);
} }
function CrmEventsReportsComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "div", 8)(2, "div", 9)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Event Date Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p-dropdown", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function CrmEventsReportsComponent_ng_template_44_Template_p_dropdown_onChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.changeFeatureDateFilterType($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CrmEventsReportsComponent_ng_template_44_div_6_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CrmEventsReportsComponent_ng_template_44_div_7_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.dateFutureFilterTypes)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.searchForm.get("datesFutureFilterType").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.searchForm.get("datesFutureFilterType").value);
} }
function CrmEventsReportsComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 43)(1, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_ng_template_49_Template_th_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.sorting(ctx_r25.searchForm.get("order_by_name").value, "order_by_name")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "pek-sort-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "tr", 43)(7, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Last Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Future Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tr")(12, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_ng_template_49_Template_th_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.sorting(ctx_r27.searchForm.get("order_by_date").value, "order_by_date")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "pek-sort-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_ng_template_49_Template_th_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.sorting(ctx_r28.searchForm.get("order_by_date_end").value, "order_by_date_end")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " End Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "pek-sort-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_ng_template_49_Template_th_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.sorting(ctx_r29.searchForm.get("order_by_next_event_date").value, "order_by_next_event_date")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "pek-sort-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_ng_template_49_Template_th_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.sorting(ctx_r30.searchForm.get("order_by_next_event_date_end").value, "order_by_next_event_date_end")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " End Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "pek-sort-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.searchForm.get("order_by_name").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.searchForm.get("order_by_date").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.searchForm.get("order_by_date_end").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.searchForm.get("order_by_next_event_date").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.searchForm.get("order_by_next_event_date_end").value);
} }
function CrmEventsReportsComponent_ng_template_50_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r45.name, ", ");
} }
function CrmEventsReportsComponent_ng_template_50_p_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p")(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const linked_company_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](linked_company_r46.name);
} }
function CrmEventsReportsComponent_ng_template_50_i_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 75);
} }
function CrmEventsReportsComponent_ng_template_50_i_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 76);
} }
function CrmEventsReportsComponent_ng_template_50_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77)(1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const event_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/crm/events/" + (event_r48 == null ? null : event_r48.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](event_r48 == null ? null : event_r48.event_name);
} }
function CrmEventsReportsComponent_ng_template_50_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CrmEventsReportsComponent_ng_template_50_div_63_div_1_Template, 3, 2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.last_events);
} }
function CrmEventsReportsComponent_ng_template_50_div_66_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, event_r51 == null ? null : event_r51.start, "dd/MM/yyyy, HH:mm"), " ");
} }
function CrmEventsReportsComponent_ng_template_50_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CrmEventsReportsComponent_ng_template_50_div_66_div_1_Template, 3, 4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.last_events);
} }
function CrmEventsReportsComponent_ng_template_50_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, event_r54 == null ? null : event_r54.end, "dd/MM/yyyy, HH:mm"), " ");
} }
function CrmEventsReportsComponent_ng_template_50_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CrmEventsReportsComponent_ng_template_50_div_69_div_1_Template, 3, 4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.last_events);
} }
function CrmEventsReportsComponent_ng_template_50_div_72_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", event_r57 == null ? null : event_r57.event_comment, " ");
} }
function CrmEventsReportsComponent_ng_template_50_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CrmEventsReportsComponent_ng_template_50_div_72_div_1_span_4_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const event_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r56.getSmallComment(event_r57 == null ? null : event_r57.event_comment), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r56.getSmallComment(event_r57 == null ? null : event_r57.event_comment));
} }
function CrmEventsReportsComponent_ng_template_50_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CrmEventsReportsComponent_ng_template_50_div_72_div_1_Template, 5, 2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.last_events);
} }
function CrmEventsReportsComponent_ng_template_50_div_75_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function CrmEventsReportsComponent_ng_template_50_div_75_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Not Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function CrmEventsReportsComponent_ng_template_50_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77)(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CrmEventsReportsComponent_ng_template_50_div_75_div_1_ng_container_2_Template, 2, 0, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CrmEventsReportsComponent_ng_template_50_div_75_div_1_ng_container_3_Template, 2, 0, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const event_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", event_r62 == null ? null : event_r62.is_done);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", false);
} }
function CrmEventsReportsComponent_ng_template_50_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CrmEventsReportsComponent_ng_template_50_div_75_div_1_Template, 4, 3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.last_events);
} }
function CrmEventsReportsComponent_ng_template_50_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77)(1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const event_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/dash/crm/events-list/event-card/" + (event_r66 == null ? null : event_r66.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", event_r66 == null ? null : event_r66.event_name, " ");
} }
function CrmEventsReportsComponent_ng_template_50_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, event_r67 == null ? null : event_r67.start, "dd/MM/yyyy, HH:mm"), " ");
} }
function CrmEventsReportsComponent_ng_template_50_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, event_r68 == null ? null : event_r68.end, "dd/MM/yyyy, HH:mm"), " ");
} }
function CrmEventsReportsComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 55)(2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 57)(5, "div", 56)(6, "span")(7, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 59)(10, "div", 7)(11, "div", 60)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CrmEventsReportsComponent_ng_template_50_ng_container_19_Template, 2, 1, "ng-container", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Phone Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "i")(35, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Tax Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Register Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 63)(46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Nomenclature: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Connected Companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, CrmEventsReportsComponent_ng_template_50_p_56_Template, 3, 1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Dont have VAT: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, CrmEventsReportsComponent_ng_template_50_i_59_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, CrmEventsReportsComponent_ng_template_50_i_60_Template, 1, 0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "td", 66)(62, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, CrmEventsReportsComponent_ng_template_50_div_63_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "td", 69)(65, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, CrmEventsReportsComponent_ng_template_50_div_66_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "td", 69)(68, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, CrmEventsReportsComponent_ng_template_50_div_69_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "td", 70)(71, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, CrmEventsReportsComponent_ng_template_50_div_72_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "td", 69)(74, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, CrmEventsReportsComponent_ng_template_50_div_75_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "td", 71)(77, "div", 67)(78, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, CrmEventsReportsComponent_ng_template_50_div_79_Template, 3, 2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "td", 73)(81, "div", 56)(82, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, CrmEventsReportsComponent_ng_template_50_div_83_Template, 3, 4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "td", 74)(85, "div", 56)(86, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, CrmEventsReportsComponent_ng_template_50_div_87_Template, 3, 4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const report_r31 = ctx.$implicit;
    const i_r32 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r4.searchForm.get("page").value - 1) * 10 + i_r32 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/dash/crm/businnes-partners/company-page/" + report_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", report_r31.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.phone_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", report_r31.website, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.tax_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.registration_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.supplier_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](report_r31.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.linked_companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", report_r31.has_not_vat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !report_r31.has_not_vat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", report_r31.last_events && report_r31.last_events.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", report_r31.last_events && report_r31.last_events.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", report_r31.last_events && report_r31.last_events.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", report_r31.last_events && report_r31.last_events.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", report_r31.last_events && report_r31.last_events.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.next_events);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.next_events);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", report_r31.next_events);
} }
function CrmEventsReportsComponent_ng_template_51_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 85);
} }
function CrmEventsReportsComponent_ng_template_51_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CrmEventsReportsComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CrmEventsReportsComponent_ng_template_51_i_2_Template, 1, 0, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CrmEventsReportsComponent_ng_template_51_span_3_Template, 2, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function CrmEventsReportsComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CrmEventsReportsComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87)(1, "p-paginator", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onPageChange", function CrmEventsReportsComponent_div_53_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r72.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_div_53_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r74.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("hide", ctx_r7.eventsReports.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r7.reportsCount);
} }
function CrmEventsReportsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 91)(1, "p-button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CrmEventsReportsComponent_div_54_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r75.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
const _c2 = function () { return { standalone: true }; };
const _c3 = function () { return ["name"]; };
class CrmEventsReportsComponent {
    constructor(fb, eventsReportService) {
        this.fb = fb;
        this.eventsReportService = eventsReportService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.isShowAll = false;
        this.isStartOnePage = false;
        this.reportsCount = 0;
        this.searchForm = this.fb.group({
            page: [1],
            name: [null],
            categories_ids: [null],
            chain_status_ids: [null],
            employees_ids: [null],
            is_null_chain_status: [null],
            order_by_name: [null],
            order_by_date: [true],
            order_by_date_end: [null],
            order_by_next_event_date: [null],
            order_by_next_event_date_end: [null],
            event_date_start: [null],
            event_date_end: [null],
            last_events_date_start: [null],
            last_events_date_end: [null],
            feature_events_date_start: [null],
            feature_events_date_end: [null],
            dateFilterType: [null],
            datesLastFilterType: [null],
            datesFutureFilterType: [null],
            autoEvents: [true],
        });
        this.rangeCalendar = [new Date(), new Date()];
        this.isLoading = false;
        this.selectedFilterType = 'lastNextDate';
        this.queryKey = 'name:null/categories_ids:null/chain_status_ids:null/employees_ids:null/is_null_chain_status:null';
        this.dateLastFilterTypes = [
            { name: 'Last events date start', value: 'lastStart' },
            { name: 'Last events date end', value: 'lastEnd' }
        ];
        this.dateFutureFilterTypes = [
            { name: 'Future events date start', value: 'futureStart' },
            { name: 'Future events date end', value: 'futureEnd' }
        ];
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'ordering', value: '-last_event_start' },
            { name: 'test_method', value: 'true' },
        ];
    }
    get() {
        this.eventsReportService.get(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(response => {
            this.eventsReports = response;
            this.reportsCount = this.eventsReports.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    getForPagination() {
        this.eventsReportService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(response => {
            this.eventsReports = response.results;
            this.reportsCount = response.count;
            if (this.isStartOnePage) {
                this.paginator.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    ngOnInit() {
        this.dateRangeLimit = new Date();
        let date = new Date();
        this.lastTenDays = new Date(date.setDate(date.getDate() - 10));
        date = new Date();
        this.nextYear = new Date(date.setDate(date.getDate() + 365.2422));
        this.today = new Date();
        this.search();
    }
    search() {
        // this.destroy$.next(true);
        // console.log('search');
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        this.isLoading = true;
        this.eventsReports = [];
        this.selectedEventsReport = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/categories_ids:${this.searchForm.get('categories_ids').value}/chain_status_ids:${this.searchForm.get('chain_status_ids').value}/employees_ids:${this.searchForm.get('employees_ids').value}/is_null_chain_status:${this.searchForm.get('is_null_chain_status').value}`;
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
            this.searchForm.get('page').patchValue(1);
            this.isStartOnePage = true;
        }
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
        ];
        if (this.searchForm.get('name').value)
            this.query.push({ name: 'name', value: this.searchForm.get('name').value });
        if (this.searchForm.get('categories_ids').value && this.searchForm.get('categories_ids').value.length > 0) {
            this.query.push({
                name: 'categories_ids',
                value: this.preSearch(this.searchForm.get('categories_ids').value)
            });
        }
        if (this.searchForm.get('chain_status_ids').value && this.searchForm.get('chain_status_ids').value.length > 0) {
            this.query.push({
                name: 'chain_status_ids',
                value: this.searchForm.get('chain_status_ids').value
            });
        }
        if (this.searchForm.get('datesLastFilterType').value) {
            const startDateValue = new Date(this.searchForm.get('last_events_date_start')
                .value.setHours(hour, minutes)).toISOString();
            const endDateValue = new Date(this.searchForm.get('last_events_date_end')
                .value.setHours(hour, minutes)).toISOString();
            if (startDateValue && endDateValue) {
                if (this.searchForm.get('datesLastFilterType').value === 'lastStart') {
                    this.query.push({
                        name: 'last_events_date_start_after',
                        value: startDateValue
                    });
                    this.query.push({
                        name: 'last_events_date_start_before',
                        value: endDateValue
                    });
                }
                if (this.searchForm.get('datesLastFilterType').value === 'lastEnd') {
                    this.query.push({
                        name: 'last_events_date_end_after',
                        value: startDateValue
                    });
                    this.query.push({
                        name: 'last_events_date_end_before',
                        value: endDateValue
                    });
                }
            }
        }
        else {
            this.query.push({
                name: 'last_events_date_start_after',
                value: new Date(this.lastTenDays.setHours(hour, minutes)).toISOString()
            });
            this.query.push({
                name: 'last_events_date_start_before',
                value: new Date(this.today.setHours(hour, minutes)).toISOString()
            });
        }
        if (this.searchForm.get('datesFutureFilterType').value) {
            const startDateValue = new Date(this.searchForm.get('feature_events_date_start')
                .value.setHours(hour, minutes)).toISOString();
            const endDateValue = new Date(this.searchForm.get('feature_events_date_end')
                .value.setHours(hour, minutes)).toISOString();
            if (startDateValue && endDateValue) {
                if (this.searchForm.get('datesFutureFilterType').value === 'futureStart') {
                    this.query.push({
                        name: 'next_events_date_start_after',
                        value: startDateValue
                    });
                    this.query.push({
                        name: 'next_events_date_start_before',
                        value: endDateValue
                    });
                }
                if (this.searchForm.get('datesFutureFilterType').value === 'futureEnd') {
                    this.query.push({
                        name: 'next_events_date_end_after',
                        value: startDateValue
                    });
                    this.query.push({
                        name: 'next_events_date_end_before',
                        value: endDateValue
                    });
                }
            }
        }
        else {
            this.query.push({
                name: 'next_events_date_start_after',
                value: new Date(this.today.setHours(hour, minutes)).toISOString()
            });
            this.query.push({
                name: 'next_events_date_start_before',
                value: new Date(this.nextYear.setHours(hour, minutes)).toISOString()
            });
        }
        const ordering = this.prepareSortingField();
        if (ordering) {
            this.query.push({
                name: 'ordering',
                value: ordering
            });
        }
        if (this.searchForm.get('autoEvents').value) {
            this.query.push({
                name: 'hide_auto_events',
                value: this.searchForm.get('autoEvents').value
            });
        }
        if (this.searchForm.get('employees_ids').value && this.searchForm.get('employees_ids').value.length > 0) {
            this.query.push({
                name: 'employees_ids',
                value: this.preSearch(this.searchForm.get('employees_ids').value)
            });
        }
        if (this.searchForm.get('is_null_chain_status').value !== null)
            this.query.push({
                name: 'is_null_chain_status',
                value: this.searchForm.get('is_null_chain_status').value
            });
        if (this.isShowAll) {
            this.searchForm.get('page').patchValue(1);
            this.get();
        }
        else
            this.getForPagination();
    }
    preSearch(value) {
        if (value && value.length > 0)
            return value.join(',');
    }
    prepareSortingField() {
        let sorting = '';
        if (this.searchForm.get('order_by_name').value !== null) {
            if (this.searchForm.get('order_by_name').value) {
                sorting += '-name,';
            }
            else {
                sorting += 'name,';
            }
        }
        if (this.searchForm.get('order_by_date').value !== null) {
            if (this.searchForm.get('order_by_date').value) {
                sorting += '-last_event_start,';
            }
            else {
                sorting += 'last_event_start,';
            }
        }
        if (this.searchForm.get('order_by_next_event_date').value !== null) {
            if (this.searchForm.get('order_by_next_event_date').value) {
                sorting += '-next_event_start,';
            }
            else {
                sorting += 'next_event_start,';
            }
        }
        if (this.searchForm.get('order_by_next_event_date_end').value !== null) {
            if (this.searchForm.get('order_by_next_event_date_end').value) {
                sorting += '-next_event_end,';
            }
            else {
                sorting += 'next_event_end,';
            }
        }
        if (this.searchForm.get('order_by_date_end').value !== null) {
            if (this.searchForm.get('order_by_date_end').value) {
                sorting += '-last_event_end,';
            }
            else {
                sorting += 'last_event_end,';
            }
        }
        return sorting;
    }
    sorting(value, field) {
        if (value === null) {
            this.searchForm.get(field).patchValue(false);
        }
        else if (value === false) {
            this.searchForm.get(field).patchValue(true);
        }
        else if (value === true) {
            this.searchForm.get(field).patchValue(null);
        }
        this.search();
    }
    searchByLastDate() {
        const startDateValue = this.searchForm.get('last_events_date_start').value;
        const endDateValue = this.searchForm.get('last_events_date_end').value;
        if (startDateValue && endDateValue) {
            this.rangeCalendar = [this.searchForm.get('event_date_start').value, this.searchForm.get('event_date_end').value];
            this.search();
        }
    }
    getSmallComment(comment) {
        if (comment)
            return comment.substring(0, 13) + '...';
    }
    searchByFeatureDate() {
        const startDateValue = this.searchForm.get('feature_events_date_start').value;
        const endDateValue = this.searchForm.get('feature_events_date_end').value;
        if (startDateValue && endDateValue) {
            this.rangeCalendar = [this.searchForm.get('event_date_start').value, this.searchForm.get('event_date_end').value];
            this.search();
        }
    }
    changeLastsDateFilterType(evt) {
        if (!evt.value) {
            this.searchForm.get('last_events_date_start').setValue(null);
            this.searchForm.get('last_events_date_end').setValue(null);
            this.search();
        }
        else {
            this.searchByLastDate();
        }
    }
    changeFeatureDateFilterType(evt) {
        if (!evt.value) {
            this.searchForm.get('feature_events_date_start').setValue(null);
            this.searchForm.get('feature_events_date_end').setValue(null);
            this.search();
        }
        else {
            this.searchByFeatureDate();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.dt.scrollable = true;
        this.search();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.dt.scrollable = false;
        this.search();
    }
    paginate(evt) {
        // Если начинаем с первой страницы, не выполняем запрос повторно, т.к. он и так выполняется
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.search();
        }
    }
    onSelectCompany(id) {
        this.searchForm.get('name').patchValue(id);
        this.search();
    }
    onSelectEventTypes(eventTypes) {
        if (eventTypes) {
            this.searchForm.get('categories_ids').patchValue(eventTypes);
        }
        else {
            this.searchForm.get('categories_ids').patchValue(null);
        }
        this.search();
    }
    onSelectStatuses(ids) {
        this.searchForm.get('chain_status_ids').patchValue(ids);
        this.search();
    }
    onSelectEmployees(evt) {
        if (evt) {
            this.searchForm.get('employees_ids').patchValue(evt);
        }
        else {
            this.searchForm.get('employees_ids').patchValue(null);
        }
        this.search();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CrmEventsReportsComponent.ɵfac = function CrmEventsReportsComponent_Factory(t) { return new (t || CrmEventsReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_events_report_service__WEBPACK_IMPORTED_MODULE_0__.EventsReportService)); };
CrmEventsReportsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CrmEventsReportsComponent, selectors: [["pek-crm-events-reports"]], viewQuery: function CrmEventsReportsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 55, vars: 28, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "pb-2", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], [3, "selectCompany"], [3, "selectEventTypes"], [3, "selectStatuses"], [1, "event-row-filters"], [1, "form-group", "mr-3"], [3, "selectEmployees"], ["for", "auto-events"], ["name", "group1", "inputId", "auto-events", "formControlName", "autoEvents", 1, "checkbox-big", 3, "binary", "onChange"], [1, "row", "mt-2"], [1, "col-3", "mb-1"], [1, "d-flex", "justify-content-between", "events-filters"], ["name", "dates", "value", "lastDate", "label", "Last Events Filter", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "dates", "value", "nextDate", "label", "Future Events Filter", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-9"], [3, "ngIf"], [1, "page__table"], [1, "table-pagination-preloader"], ["selectionMode", "single", 1, "table-full-loading", "events-reports", 3, "rows", "value", "globalFilterFields", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "row", "mt-1"], ["formControlName", "datesLastFilterType", "placeholder", "Select Date Filter Type", "optionLabel", "name", "optionValue", "value", 3, "options", "showClear", "onChange"], ["class", "col-3", 4, "ngIf"], ["inputId", "basic", "dateFormat", "dd/mm/yy", "formControlName", "last_events_date_start", 3, "firstDayOfWeek", "showButtonBar", "readonlyInput", "maxDate", "ngModelChange"], ["inputId", "basic", "formControlName", "last_events_date_end", "dateFormat", "dd/mm/yy", 3, "firstDayOfWeek", "showButtonBar", "readonlyInput", "maxDate", "ngModelChange"], ["formControlName", "datesFutureFilterType", "placeholder", "Select date filter type", "optionLabel", "name", "optionValue", "value", 3, "options", "showClear", "onChange"], ["inputId", "basic", "dateFormat", "dd/mm/yy", "formControlName", "feature_events_date_start", 3, "firstDayOfWeek", "showButtonBar", "readonlyInput", "minDate", "ngModelChange"], ["inputId", "basic", "formControlName", "feature_events_date_end", "dateFormat", "dd/mm/yy", 3, "firstDayOfWeek", "showButtonBar", "readonlyInput", "minDate", "ngModelChange"], [1, "bord-all"], ["rowspan", "3", 1, "text-center", "bord-top", "bord-left", "bord-dark", 2, "width", "5%"], ["rowspan", "3", 1, "bord-dark", "bord-top", "sort-label", 2, "width", "15%", 3, "click"], [3, "value"], ["colspan", "5", 1, "bord", "text-center", "dark-two", "bord-top", 2, "width", "40%"], ["colspan", "3", 1, "bord", "text-center", "bord-top", "dark", 2, "width", "40%"], [1, "bord", "text-center", "dark-two", 2, "width", "10%"], [1, "text-center", "dark-two", "sort-label", 2, "width", "10%", 3, "click"], [1, "text-center", "dark-two", 2, "width", "10%"], [1, "bord", "text-center", "dark", 2, "width", "10%"], [1, "text-center", "dark", "sort-label", 2, "width", "10%", 3, "click"], [1, "text-center", "dark", "border-right", "sort-label", 2, "width", "10%", 3, "click"], [1, "text-center", "bord-dark", 2, "width", "5%"], [1, "event-item"], [1, "table-comment", "small-comment", "bord-dark", 2, "width", "15%"], ["target", "_blank", 3, "routerLink"], [1, "full-comment", "full-comment_big"], [1, "col-md-5"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [1, "col-md-7"], ["class", "pi pi-check text-success", 4, "ngIf"], ["class", "pi pi-times text-danger", 4, "ngIf"], [1, "text-center", "bord", "dark-two", "no-padding", 2, "width", "10%"], [1, "event-item", "event-type-name"], [4, "ngIf"], [1, "text-center", "dark-two", "no-padding", 2, "width", "10%"], [1, "table-comment", "text-center", "dark-two", "no-padding", 2, "width", "10%"], [1, "text-center", "bord", "dark", "no-padding", 2, "width", "10%"], ["class", "report-event", 4, "ngFor", "ngForOf"], [1, "text-center", "dark", "no-padding", 2, "width", "10%"], [1, "text-center", "dark", "border-right", "no-padding", 2, "width", "10%"], [1, "pi", "pi-check", "text-success"], [1, "pi", "pi-times", "text-danger"], [1, "report-event"], [1, "small-comment"], ["class", "full-comment", 4, "ngIf"], [1, "full-comment"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function CrmEventsReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "form", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "pek-company-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectCompany", function CrmEventsReportsComponent_Template_pek_company_picker_selectCompany_16_listener($event) { return ctx.onSelectCompany($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Event Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "pek-crm-multi-event-types-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectEventTypes", function CrmEventsReportsComponent_Template_pek_crm_multi_event_types_picker_selectEventTypes_21_listener($event) { return ctx.onSelectEventTypes($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 8)(23, "div", 9)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Sales Chain Statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "pek-multi-sales-status-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectStatuses", function CrmEventsReportsComponent_Template_pek_multi_sales_status_picker_selectStatuses_26_listener($event) { return ctx.onSelectStatuses($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 8)(28, "div", 13)(29, "div", 14)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "pek-crm-employee-picker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectEmployees", function CrmEventsReportsComponent_Template_pek_crm_employee_picker_selectEmployees_32_listener($event) { return ctx.onSelectEmployees($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 9)(34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Hide Status Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "p-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function CrmEventsReportsComponent_Template_p_checkbox_onChange_36_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 18)(38, "div", 19)(39, "div", 20)(40, "p-radioButton", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CrmEventsReportsComponent_Template_p_radioButton_ngModelChange_40_listener($event) { return ctx.selectedFilterType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "p-radioButton", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CrmEventsReportsComponent_Template_p_radioButton_ngModelChange_41_listener($event) { return ctx.selectedFilterType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, CrmEventsReportsComponent_ng_template_43_Template, 8, 4, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CrmEventsReportsComponent_ng_template_44_Template, 8, 4, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 25)(46, "div", 26)(47, "p-table", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function CrmEventsReportsComponent_Template_p_table_selectionChange_47_listener($event) { return ctx.selectedEventsReport = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, CrmEventsReportsComponent_ng_template_49_Template, 32, 5, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, CrmEventsReportsComponent_ng_template_50_Template, 88, 25, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CrmEventsReportsComponent_ng_template_51_Template, 4, 3, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, CrmEventsReportsComponent_div_52_Template, 2, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, CrmEventsReportsComponent_div_53_Template, 5, 4, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, CrmEventsReportsComponent_div_54_Template, 3, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Events Reports Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 19, ctx.today, "dd.MM"), " Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 22, ctx.today, "HH:mm"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedFilterType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedFilterType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedFilterType === "lastDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedFilterType === "nextDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", 10)("value", ctx.eventsReports)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](27, _c3))("selection", ctx.selectedEventsReport);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__.RadioButton, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_1__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator, primeng_calendar__WEBPACK_IMPORTED_MODULE_20__.Calendar, _shared_pickers_multi_sales_status_picker_multi_sales_status_picker_component__WEBPACK_IMPORTED_MODULE_2__.MultiSalesStatusPickerComponent, _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_3__.CompanyPickerComponent, _shared_icons_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_4__.SortIconComponent, _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_5__.CrmEmployeePickerComponent, _pickers_crm_multi_event_types_picker_crm_multi_event_types_picker_component__WEBPACK_IMPORTED_MODULE_6__.CrmMultiEventTypesPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.checkbox-big[_ngcontent-%COMP%]  .p-checkbox {\n  width: 2.375rem !important;\n  height: 2.25rem !important;\n}\n\n.checkbox-big[_ngcontent-%COMP%]  .p-checkbox-box {\n  width: 2.375rem !important;\n  height: 2.25rem !important;\n}\n\n.event-row-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.event-row-filters[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child {\n  width: 100%;\n}\n\n.events-filters[_ngcontent-%COMP%]  label {\n  font-weight: 500;\n}\n\n.bord[_ngcontent-%COMP%] {\n  border-left: 1px solid #e9ecef !important;\n}\n\n.bord-all[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n}\n\n.dark[_ngcontent-%COMP%] {\n  background: #e9e9e9 !important;\n  border-color: #c3cbd3 !important;\n}\n\n.bord-dark[_ngcontent-%COMP%] {\n  border-color: #c3cbd3 !important;\n}\n\n.sort-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.bord-right-none[_ngcontent-%COMP%] {\n  border-right: 0 !important;\n}\n\n.dark-two[_ngcontent-%COMP%] {\n  background: #f3f3f3 !important;\n  border-color: #c3cbd3 !important;\n}\n\n.bord-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #c3cbd3 !important;\n}\n\n.bord-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #c3cbd3 !important;\n}\n\n.small-comment[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1.267rem;\n}\n\n.small-comment[_ngcontent-%COMP%]:hover   .full-comment[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: initial;\n}\n\n.full-comment[_ngcontent-%COMP%] {\n  transition: 0.25s ease;\n  opacity: 0;\n  position: absolute;\n  background: #fff;\n  z-index: 3;\n  width: 500px;\n  padding: 16px;\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.15);\n  border-radius: 0.5rem;\n  left: 150px;\n  text-align: left;\n  pointer-events: none;\n}\n\n.full-comment[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n\n.full-comment[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:nth-child(8) {\n  margin-bottom: 0;\n}\n\n.full-comment[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.full-comment_big[_ngcontent-%COMP%] {\n  width: 650px;\n}\n\n.table-comment[_ngcontent-%COMP%] {\n  padding: 10px;\n  resize: none;\n}\n\n.table-comment[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 16px;\n}\n\n.events-reports[_ngcontent-%COMP%]  .p-treetable .p-treetable-tbody > tr.p-highlight tr, .events-reports[_ngcontent-%COMP%]  .p-datatable .p-datatable-tbody > tr.p-highlight tr {\n  transition: none !important;\n}\n\n.events-reports[_ngcontent-%COMP%]  .p-treetable .p-treetable-tbody > tr.p-highlight td, .events-reports[_ngcontent-%COMP%]  .p-datatable .p-datatable-tbody > tr.p-highlight td {\n  background: transparent !important;\n  transition: none !important;\n}\n\n.events-reports[_ngcontent-%COMP%]  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover tr {\n  transition: none !important;\n}\n\n.events-reports[_ngcontent-%COMP%]  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover td {\n  background: #e9ecef !important;\n  color: #495057 !important;\n  transition: none !important;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNybS1ldmVudHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFJSTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUFETjs7QUFJSTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUFGTjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUpGOztBQU9JO0VBQ0UsV0FBQTtBQUxOOztBQVlJO0VBQ0UsZ0JBQUE7QUFUTjs7QUFjQTtFQUNFLHlDQUFBO0FBWEY7O0FBY0E7RUFDRSx5QkFBQTtBQVhGOztBQWNBO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBQVhGOztBQWNBO0VBQ0UsZ0NBQUE7QUFYRjs7QUFjQTtFQUNFLGVBQUE7QUFYRjs7QUFjQTtFQUNFLDBCQUFBO0FBWEY7O0FBY0E7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSx3Q0FBQTtBQVhGOztBQWNBO0VBQ0UsMENBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFYRjs7QUFjSTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQVpOOztBQWlCQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFkRjs7QUFnQkU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBZEo7O0FBZ0JJO0VBQ0UsZ0JBQUE7QUFkTjs7QUFpQkk7RUFDRSxnQkFBQTtBQWZOOztBQW1CRTtFQUNFLFlBQUE7QUFqQko7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFsQkY7O0FBcUJFO0VBQ0UsZUFBQTtBQW5CSjs7QUEwQk07RUFDRSwyQkFBQTtBQXZCUjs7QUEwQk07RUFDRSxrQ0FBQTtFQUNBLDJCQUFBO0FBeEJSOztBQTZCTTtFQUNFLDJCQUFBO0FBM0JSOztBQThCTTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQTVCUjs7QUFrQ0E7RUFDRSxhQUFBO0FBL0JGIiwiZmlsZSI6ImNybS1ldmVudHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5jaGVja2JveC1iaWcge1xyXG4gICY6Om5nLWRlZXAge1xyXG4gICAgLnAtY2hlY2tib3gge1xyXG4gICAgICB3aWR0aDogMi4zNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAyLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnAtY2hlY2tib3gtYm94IHtcclxuICAgICAgd2lkdGg6IDIuMzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMi4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmV2ZW50LXJvdy1maWx0ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmV2ZW50cy1maWx0ZXJzIHtcclxuICAmOjpuZy1kZWVwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3JkIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmQtYWxsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uZGFyayB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZTllOSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2MzY2JkMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZC1kYXJrIHtcclxuICBib3JkZXItY29sb3I6ICNjM2NiZDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvcnQtbGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvcmQtcmlnaHQtbm9uZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXJrLXR3byB7XHJcbiAgYmFja2dyb3VuZDogI2YzZjNmMyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2MzY2JkMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZC10b3Age1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzNjYmQzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkLXJpZ2h0IHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzNjYmQzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbWFsbC1jb21tZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMS4yNjdyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgJiAuZnVsbC1jb21tZW50IHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZnVsbC1jb21tZW50IHtcclxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDAgN3B4IDFweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBsZWZ0OiAxNTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfYmlnIHtcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1jb21tZW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICAvL2JveC1zaGFkb3c6IDAgMCA3cHggMXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcblxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmV2ZW50cy1yZXBvcnRzIHtcclxuICAmOjpuZy1kZWVwIHtcclxuICAgIC5wLXRyZWV0YWJsZSAucC10cmVldGFibGUtdGJvZHkgPiB0ci5wLWhpZ2hsaWdodCwgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyLnAtaGlnaGxpZ2h0IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWhvdmVyYWJsZS1yb3dzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyOm5vdCgucC1oaWdobGlnaHQpOmhvdmVyIHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 42454:
/*!*************************************************************************************!*\
  !*** ./src/app/crm/components/crm-external-events/crm-external-events.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmExternalEventsComponent": () => (/* binding */ CrmExternalEventsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_event_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-types.service */ 70229);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









function CrmExternalEventsComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the External Event Type to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmExternalEventsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrmExternalEventsComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedExternalEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedExternalEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function CrmExternalEventsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Google Calendar ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function CrmExternalEventsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const externalEvent_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", externalEvent_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](externalEvent_r8.google_calendar_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](externalEvent_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](externalEvent_r8.google_owner_first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](externalEvent_r8.google_owner_last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](externalEvent_r8.google_owner_gmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", externalEvent_r8.color_hex ? externalEvent_r8.color_hex : "#3788d8");
} }
function CrmExternalEventsComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 33);
} }
function CrmExternalEventsComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmExternalEventsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrmExternalEventsComponent_ng_template_16_i_2_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrmExternalEventsComponent_ng_template_16_span_3_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function CrmExternalEventsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmExternalEventsComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmExternalEventsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "p-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmExternalEventsComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class CrmExternalEventsComponent {
    constructor(eventTypesService, modalService) {
        this.eventTypesService = eventTypesService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected External Event Type',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditEventType()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveEventType()
                    }
                ]
            }];
        this.isLoading = true;
        this.externalEvents = [];
    }
    ngOnInit() {
        this.getEventTypes();
    }
    getEventTypes() {
        this.eventTypesService.get([{ name: 'is_inner', value: false }]).subscribe(eventTypes => {
            this.externalEvents = eventTypes;
            this.isLoading = false;
        });
    }
    onAddEventType() {
        this.eventTypesService.createEditExternalEventType('create').subscribe(eventType => {
            if (eventType) {
                this.externalEvents.unshift(eventType);
                this.renderTable();
            }
        });
    }
    onEditEventType() {
        this.eventTypesService.createEditExternalEventType('edit', this.selectedExternalEvent).subscribe(eventType => {
            if (eventType) {
                const index = this.externalEvents.findIndex(t => t.id === this.selectedExternalEvent.id);
                this.externalEvents[index] = eventType;
                this.selectedExternalEvent = this.externalEvents[index];
                this.renderTable();
            }
        });
    }
    onRemoveEventType() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.eventTypesService.delete(this.selectedExternalEvent).subscribe(() => {
                    const index = this.externalEvents.findIndex(w => w.id === this.selectedExternalEvent.id);
                    this.externalEvents.splice(index, 1);
                    this.selectedExternalEvent = null;
                    this.renderTable();
                });
            }
        });
    }
    renderTable() {
        this.externalEvents = this.externalEvents.map(el => el);
    }
}
CrmExternalEventsComponent.ɵfac = function CrmExternalEventsComponent_Factory(t) { return new (t || CrmExternalEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_event_types_service__WEBPACK_IMPORTED_MODULE_0__.EventTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
CrmExternalEventsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrmExternalEventsComponent, selectors: [["pek-crm-external-events"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New External Event Type", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "30%"], [2, "width", "20%"], [2, "width", "10%"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [3, "pSelectableRow"], [1, "text-center"], [1, "event-color"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function CrmExternalEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "External Event Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmExternalEventsComponent_Template_button_click_7_listener() { return ctx.onAddEventType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function CrmExternalEventsComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedExternalEvent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CrmExternalEventsComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CrmExternalEventsComponent_ng_template_14_Template, 15, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CrmExternalEventsComponent_ng_template_15_Template, 15, 9, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrmExternalEventsComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CrmExternalEventsComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CrmExternalEventsComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.externalEvents.length > 0)("rows", 10)("selection", ctx.selectedExternalEvent)("value", ctx.externalEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.externalEvents.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: [".event-color[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNybS1leHRlcm5hbC1ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJjcm0tZXh0ZXJuYWwtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWNvbG9yIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 64459:
/*!*******************************************************************!*\
  !*** ./src/app/crm/components/crm-layout/crm-layout.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmLayoutComponent": () => (/* binding */ CrmLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class CrmLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Company Card', commands: ['business-partners'] },
            { label: 'Events Reports', commands: ['events-reports'] },
            { label: 'Schedules', commands: ['schedules'] },
            { label: 'Company Categories', commands: ['company-categories'] },
            { label: 'Event Types', commands: ['event-types'] },
            { label: 'Employees', commands: ['employees'] },
            { label: 'External Event Types', commands: ['external-events'] },
            { label: 'Users Profiles', commands: ['users-profiles'] },
        ];
    }
    ngOnInit() {
    }
}
CrmLayoutComponent.ɵfac = function CrmLayoutComponent_Factory(t) { return new (t || CrmLayoutComponent)(); };
CrmLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrmLayoutComponent, selectors: [["pek-crm-layout"]], decls: 2, vars: 2, consts: [[3, "module", "routes"]], template: function CrmLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Contacts & Events")("routes", ctx.routes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 25065:
/*!*************************************************************************!*\
  !*** ./src/app/crm/components/crm-schedules/crm-schedules.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmSchedulesComponent": () => (/* binding */ CrmSchedulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_crm_schedule_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/crm-schedule.service */ 51211);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









function CrmSchedulesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Schedule to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmSchedulesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrmSchedulesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedSchedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedSchedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function CrmSchedulesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function CrmSchedulesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const schedule_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", schedule_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](schedule_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](schedule_r8.description);
} }
function CrmSchedulesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 29);
} }
function CrmSchedulesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmSchedulesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrmSchedulesComponent_ng_template_16_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrmSchedulesComponent_ng_template_16_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function CrmSchedulesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmSchedulesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmSchedulesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmSchedulesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class CrmSchedulesComponent {
    constructor(crmSchedulesService, modalService) {
        this.crmSchedulesService = crmSchedulesService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Schedule',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditSchedule()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveSchedule()
                    }
                ]
            }];
        this.isLoading = true;
        this.schedules = [];
    }
    ngOnInit() {
        this.getSchedules();
    }
    getSchedules() {
        this.crmSchedulesService.get().subscribe(schedules => {
            this.schedules = schedules;
            this.isLoading = false;
        });
    }
    onAddSchedule() {
        this.crmSchedulesService.createEditScheduleModal('create').subscribe(schedules => {
            if (schedules) {
                this.schedules.unshift(schedules);
                this.renderTable();
            }
        });
    }
    onEditSchedule() {
        this.crmSchedulesService.createEditScheduleModal('edit', this.selectedSchedule).subscribe(schedule => {
            if (schedule) {
                const index = this.schedules.findIndex(t => t.id === this.selectedSchedule.id);
                this.schedules[index] = schedule;
                this.selectedSchedule = this.schedules[index];
                this.renderTable();
            }
        });
    }
    onRemoveSchedule() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.crmSchedulesService.delete(this.selectedSchedule).subscribe(() => {
                    const index = this.schedules.findIndex(s => s.id === this.selectedSchedule.id);
                    this.schedules.splice(index, 1);
                    this.selectedSchedule = null;
                    this.renderTable();
                });
            }
        });
    }
    renderTable() {
        this.schedules = this.schedules.map(el => el);
    }
}
CrmSchedulesComponent.ɵfac = function CrmSchedulesComponent_Factory(t) { return new (t || CrmSchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_crm_schedule_service__WEBPACK_IMPORTED_MODULE_0__.CrmScheduleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
CrmSchedulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrmSchedulesComponent, selectors: [["pek-crm-schedules"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Schedule", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "85%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function CrmSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmSchedulesComponent_Template_button_click_7_listener() { return ctx.onAddSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function CrmSchedulesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedSchedule = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CrmSchedulesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CrmSchedulesComponent_ng_template_14_Template, 7, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CrmSchedulesComponent_ng_template_15_Template, 7, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrmSchedulesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CrmSchedulesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CrmSchedulesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.schedules.length > 0)("rows", 10)("selection", ctx.selectedSchedule)("value", ctx.schedules);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.schedules.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tc2NoZWR1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64917:
/*!***********************************************************************************!*\
  !*** ./src/app/crm/components/crm-users-profiles/crm-users-profiles.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmUsersProfilesComponent": () => (/* binding */ CrmUsersProfilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-profile.service */ 74762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









function CrmUsersProfilesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the User Profile to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmUsersProfilesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrmUsersProfilesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedUserProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedUserProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function CrmUsersProfilesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function CrmUsersProfilesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", user_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.gmail);
} }
function CrmUsersProfilesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function CrmUsersProfilesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmUsersProfilesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrmUsersProfilesComponent_ng_template_16_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrmUsersProfilesComponent_ng_template_16_span_3_Template, 2, 0, "span", 27);
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
function CrmUsersProfilesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmUsersProfilesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrmUsersProfilesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmUsersProfilesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class CrmUsersProfilesComponent {
    constructor(modalService, userProfileService) {
        this.modalService = modalService;
        this.userProfileService = userProfileService;
        this.isLoading = true;
        this.menuItems = [{
                label: 'Selected User Profile',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditUserProfile()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveUserProfile()
                    }
                ]
            }];
        this.usersProfiles = [];
    }
    ngOnInit() {
        this.getUserProfiles();
    }
    getUserProfiles() {
        this.userProfileService.get().subscribe(usersProfiles => {
            this.usersProfiles = usersProfiles;
            this.isLoading = false;
        });
    }
    onAddUserProfile() {
        this.userProfileService.createEditUserProfileModel('create').subscribe(userProfile => {
            if (userProfile) {
                this.usersProfiles.unshift(userProfile);
                this.renderTable();
            }
        });
    }
    onEditUserProfile() {
        this.userProfileService.createEditUserProfileModel('edit', this.selectedUserProfile).subscribe(userProfile => {
            if (userProfile) {
                const index = this.usersProfiles.findIndex(t => t.id === this.selectedUserProfile.id);
                this.usersProfiles[index] = userProfile;
                this.selectedUserProfile = this.usersProfiles[index];
                this.renderTable();
            }
        });
    }
    onRemoveUserProfile() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.userProfileService.delete(this.selectedUserProfile).subscribe(() => {
                    const index = this.usersProfiles.findIndex(w => w.id === this.selectedUserProfile.id);
                    this.usersProfiles.splice(index, 1);
                    this.selectedUserProfile = null;
                    this.renderTable();
                });
            }
        });
    }
    renderTable() {
        this.usersProfiles = this.usersProfiles.map(el => el);
    }
}
CrmUsersProfilesComponent.ɵfac = function CrmUsersProfilesComponent_Factory(t) { return new (t || CrmUsersProfilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__.UserProfileService)); };
CrmUsersProfilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrmUsersProfilesComponent, selectors: [["pek-crm-users-profiles"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New User Profile", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "30%"], [2, "width", "35%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function CrmUsersProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrmUsersProfilesComponent_Template_button_click_7_listener() { return ctx.onAddUserProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function CrmUsersProfilesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedUserProfile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CrmUsersProfilesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CrmUsersProfilesComponent_ng_template_14_Template, 9, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CrmUsersProfilesComponent_ng_template_15_Template, 9, 5, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrmUsersProfilesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CrmUsersProfilesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CrmUsersProfilesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.usersProfiles.length > 0)("rows", 10)("selection", ctx.selectedUserProfile)("value", ctx.usersProfiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.usersProfiles.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tdXNlcnMtcHJvZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89646:
/*!*********************************************************************!*\
  !*** ./src/app/crm/components/event-types/event-types.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTypesComponent": () => (/* binding */ EventTypesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_event_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-types.service */ 70229);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);










function EventTypesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Event Type to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EventTypesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventTypesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedEventType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedEventType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function EventTypesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "User Profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function EventTypesComponent_ng_template_15_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Not Related");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function EventTypesComponent_ng_template_15_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r13.user_profile.first_name + " " + user_r13.user_profile.last_name + ", " + user_r13.user_profile.gmail, " ");
} }
function EventTypesComponent_ng_template_15_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventTypesComponent_ng_template_15_ng_container_9_div_1_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const event_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", event_r8.access_users);
} }
function EventTypesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, EventTypesComponent_ng_template_15_ng_container_8_Template, 3, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EventTypesComponent_ng_template_15_ng_container_9_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const event_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", event_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", event_r8.access_users.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", event_r8.access_users.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", event_r8.color_hex ? event_r8.color_hex : "#3788d8");
} }
function EventTypesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 32);
} }
function EventTypesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EventTypesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EventTypesComponent_ng_template_16_i_2_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EventTypesComponent_ng_template_16_span_3_Template, 2, 0, "span", 27);
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
function EventTypesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EventTypesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EventTypesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EventTypesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class EventTypesComponent {
    constructor(eventTypesService, modalService) {
        this.eventTypesService = eventTypesService;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.eventTypes = [];
        this.isLoading = true;
        this.menuItems = [{
                label: 'Selected Event Type',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditEventType()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveEventType()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.getEventTypes();
    }
    getEventTypes() {
        this.eventTypesService.get([
            { name: 'is_inner', value: true, },
            { name: 'is_auto', value: false, },
        ]).subscribe(types => {
            this.eventTypes = types;
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onAddEventType() {
        this.eventTypesService.createEditEventType('create').subscribe(type => {
            if (type) {
                this.eventTypes.push(type);
                this.renderTable();
            }
        });
    }
    onEditEventType() {
        this.eventTypesService.createEditEventType('edit', this.selectedEventType).subscribe(type => {
            if (type) {
                const index = this.eventTypes.findIndex(t => t.id === this.selectedEventType.id);
                this.eventTypes[index] = type;
                this.selectedEventType = this.eventTypes[index];
                this.renderTable();
            }
        });
    }
    onRemoveEventType() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.eventTypesService.delete(this.selectedEventType).subscribe(() => {
                    const index = this.eventTypes.findIndex(w => w.id === this.selectedEventType.id);
                    this.eventTypes.splice(index, 1);
                    this.selectedEventType = null;
                    this.renderTable();
                });
            }
        });
    }
    renderTable() {
        this.eventTypes = this.eventTypes.map(el => el);
    }
}
EventTypesComponent.ɵfac = function EventTypesComponent_Factory(t) { return new (t || EventTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_event_types_service__WEBPACK_IMPORTED_MODULE_0__.EventTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
EventTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EventTypesComponent, selectors: [["pek-event-types"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Event Type", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "25%"], [2, "width", "35%"], [1, "text-center", 2, "width", "25%"], [1, "text-center", 2, "width", "10%"], [3, "pSelectableRow"], [4, "ngIf"], [1, "event-color"], [4, "ngFor", "ngForOf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function EventTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Event Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EventTypesComponent_Template_button_click_7_listener() { return ctx.onAddEventType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function EventTypesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedEventType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EventTypesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EventTypesComponent_ng_template_14_Template, 11, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EventTypesComponent_ng_template_15_Template, 12, 8, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EventTypesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EventTypesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EventTypesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "contacts-events")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.eventTypes.length > 0)("rows", 10)("selection", ctx.selectedEventType)("value", ctx.eventTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.eventTypes.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: [".event-color[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: 3px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXR5cGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImV2ZW50LXR5cGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWNvbG9yIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 42535:
/*!***********************************!*\
  !*** ./src/app/crm/crm.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmModule": () => (/* binding */ CrmModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _crm_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crm.routing */ 96256);
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/companies/companies.component */ 20812);
/* harmony import */ var _components_crm_layout_crm_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/crm-layout/crm-layout.component */ 64459);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_company_categories_company_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/company-categories/company-categories.component */ 19754);
/* harmony import */ var _modals_create_edit_company_category_create_edit_company_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/create-edit-company-category/create-edit-company-category.component */ 17022);
/* harmony import */ var _components_event_types_event_types_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/event-types/event-types.component */ 89646);
/* harmony import */ var _modals_create_edit_event_type_create_edit_event_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/create-edit-event-type/create-edit-event-type.component */ 28739);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/colorpicker */ 26303);
/* harmony import */ var _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pickers/crm-employee-picker/crm-employee-picker.component */ 9290);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var _components_crm_employees_crm_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/crm-employees/crm-employees.component */ 84615);
/* harmony import */ var _modals_create_edit_crm_employee_create_edit_crm_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/create-edit-crm-employee/create-edit-crm-employee.component */ 64713);
/* harmony import */ var _components_crm_external_events_crm_external_events_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/crm-external-events/crm-external-events.component */ 42454);
/* harmony import */ var _modals_create_edit_external_event_type_create_edit_external_event_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/create-edit-external-event-type/create-edit-external-event-type.component */ 49653);
/* harmony import */ var _components_crm_users_profiles_crm_users_profiles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/crm-users-profiles/crm-users-profiles.component */ 64917);
/* harmony import */ var _modals_create_edit_user_profile_create_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/create-edit-user-profile/create-edit-user-profile.component */ 32329);
/* harmony import */ var _components_crm_schedules_crm_schedules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/crm-schedules/crm-schedules.component */ 25065);
/* harmony import */ var _modals_create_edit_schedule_create_edit_schedule_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/create-edit-schedule/create-edit-schedule.component */ 18396);
/* harmony import */ var _pickers_crm_event_type_picker_crm_event_type_picker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pickers/crm-event-type-picker/crm-event-type-picker.component */ 72665);
/* harmony import */ var _components_crm_events_reports_crm_events_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/crm-events-reports/crm-events-reports.component */ 9010);
/* harmony import */ var _pickers_crm_multi_event_types_picker_crm_multi_event_types_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pickers/crm-multi-event-types-picker/crm-multi-event-types-picker.component */ 59741);
/* harmony import */ var _components_crm_event_card_crm_event_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/crm-event-card/crm-event-card.component */ 52824);
/* harmony import */ var _modals_add_company_to_event_add_company_to_event_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/add-company-to-event/add-company-to-event.component */ 85518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _shared_pickers_company_category_module_picker_company_category_module_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/pickers/company-category-module-picker/company-category-module-picker.component */ 59514);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var _shared_pickers_user_profile_picker_user_profile_picker_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/pickers/user-profile-picker/user-profile-picker.component */ 94058);




































class CrmModule {
}
CrmModule.ɵfac = function CrmModule_Factory(t) { return new (t || CrmModule)(); };
CrmModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: CrmModule });
CrmModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _crm_routing__WEBPACK_IMPORTED_MODULE_0__.CrmRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_27__.ColorPickerModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__.MultiSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](CrmModule, { declarations: [_components_companies_companies_component__WEBPACK_IMPORTED_MODULE_1__.CompaniesComponent,
        _components_crm_layout_crm_layout_component__WEBPACK_IMPORTED_MODULE_2__.CrmLayoutComponent,
        _components_company_categories_company_categories_component__WEBPACK_IMPORTED_MODULE_5__.CompanyCategoriesComponent,
        _modals_create_edit_company_category_create_edit_company_category_component__WEBPACK_IMPORTED_MODULE_6__.CreateEditCompanyCategoryComponent,
        _components_event_types_event_types_component__WEBPACK_IMPORTED_MODULE_7__.EventTypesComponent,
        _modals_create_edit_event_type_create_edit_event_type_component__WEBPACK_IMPORTED_MODULE_8__.CreateEditEventTypeComponent,
        _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_9__.CrmEmployeePickerComponent,
        _components_crm_employees_crm_employees_component__WEBPACK_IMPORTED_MODULE_10__.CrmEmployeesComponent,
        _modals_create_edit_crm_employee_create_edit_crm_employee_component__WEBPACK_IMPORTED_MODULE_11__.CreateEditCrmEmployeeComponent,
        _components_crm_external_events_crm_external_events_component__WEBPACK_IMPORTED_MODULE_12__.CrmExternalEventsComponent,
        _modals_create_edit_external_event_type_create_edit_external_event_type_component__WEBPACK_IMPORTED_MODULE_13__.CreateEditExternalEventTypeComponent,
        _components_crm_users_profiles_crm_users_profiles_component__WEBPACK_IMPORTED_MODULE_14__.CrmUsersProfilesComponent,
        _modals_create_edit_user_profile_create_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_15__.CreateEditUserProfileComponent,
        _components_crm_schedules_crm_schedules_component__WEBPACK_IMPORTED_MODULE_16__.CrmSchedulesComponent,
        _modals_create_edit_schedule_create_edit_schedule_component__WEBPACK_IMPORTED_MODULE_17__.CreateEditScheduleComponent,
        _pickers_crm_event_type_picker_crm_event_type_picker_component__WEBPACK_IMPORTED_MODULE_18__.CrmEventTypePickerComponent,
        _components_crm_events_reports_crm_events_reports_component__WEBPACK_IMPORTED_MODULE_19__.CrmEventsReportsComponent,
        _pickers_crm_multi_event_types_picker_crm_multi_event_types_picker_component__WEBPACK_IMPORTED_MODULE_20__.CrmMultiEventTypesPickerComponent,
        _components_crm_event_card_crm_event_card_component__WEBPACK_IMPORTED_MODULE_21__.CrmEventCardComponent,
        _modals_add_company_to_event_add_company_to_event_component__WEBPACK_IMPORTED_MODULE_22__.AddCompanyToEventComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _crm_routing__WEBPACK_IMPORTED_MODULE_0__.CrmRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_27__.ColorPickerModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__.MultiSelectModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_modals_create_edit_company_category_create_edit_company_category_component__WEBPACK_IMPORTED_MODULE_6__.CreateEditCompanyCategoryComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_29__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogActions, _shared_pickers_company_category_module_picker_company_category_module_picker_component__WEBPACK_IMPORTED_MODULE_23__.CompanyCategoryModulePickerComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_modals_create_edit_event_type_create_edit_event_type_component__WEBPACK_IMPORTED_MODULE_8__.CreateEditEventTypeComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_29__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormArrayName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_33__.InputTextarea, _shared_pickers_user_profile_picker_user_profile_picker_component__WEBPACK_IMPORTED_MODULE_24__.UserProfilePickerComponent, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_27__.ColorPicker, _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_9__.CrmEmployeePickerComponent], []);


/***/ }),

/***/ 96256:
/*!************************************!*\
  !*** ./src/app/crm/crm.routing.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmRouting": () => (/* binding */ CrmRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_crm_layout_crm_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/crm-layout/crm-layout.component */ 64459);
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/companies/companies.component */ 20812);
/* harmony import */ var _components_company_categories_company_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/company-categories/company-categories.component */ 19754);
/* harmony import */ var _components_event_types_event_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/event-types/event-types.component */ 89646);
/* harmony import */ var _components_crm_employees_crm_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/crm-employees/crm-employees.component */ 84615);
/* harmony import */ var _components_crm_external_events_crm_external_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/crm-external-events/crm-external-events.component */ 42454);
/* harmony import */ var _components_crm_users_profiles_crm_users_profiles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/crm-users-profiles/crm-users-profiles.component */ 64917);
/* harmony import */ var _components_crm_schedules_crm_schedules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/crm-schedules/crm-schedules.component */ 25065);
/* harmony import */ var _components_crm_events_reports_crm_events_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/crm-events-reports/crm-events-reports.component */ 9010);
/* harmony import */ var _components_crm_event_card_crm_event_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/crm-event-card/crm-event-card.component */ 52824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);













const routes = [
    {
        path: '',
        component: _components_crm_layout_crm_layout_component__WEBPACK_IMPORTED_MODULE_0__.CrmLayoutComponent,
        children: [
            { path: '', redirectTo: 'business-partners', pathMatch: 'full' },
            { path: 'business-partners', title: 'Company card', component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_1__.CompaniesComponent },
            { path: 'events-reports', title: 'Events Reports', component: _components_crm_events_reports_crm_events_reports_component__WEBPACK_IMPORTED_MODULE_8__.CrmEventsReportsComponent },
            { path: 'schedules', title: 'Schedules', component: _components_crm_schedules_crm_schedules_component__WEBPACK_IMPORTED_MODULE_7__.CrmSchedulesComponent },
            { path: 'company-categories', title: 'Company categories', component: _components_company_categories_company_categories_component__WEBPACK_IMPORTED_MODULE_2__.CompanyCategoriesComponent },
            { path: 'event-types', title: 'Event Types', component: _components_event_types_event_types_component__WEBPACK_IMPORTED_MODULE_3__.EventTypesComponent },
            { path: 'employees', title: 'Employees', component: _components_crm_employees_crm_employees_component__WEBPACK_IMPORTED_MODULE_4__.CrmEmployeesComponent },
            { path: 'external-events', title: 'External Event Types', component: _components_crm_external_events_crm_external_events_component__WEBPACK_IMPORTED_MODULE_5__.CrmExternalEventsComponent },
            { path: 'users-profiles', title: 'Users Profiles', component: _components_crm_users_profiles_crm_users_profiles_component__WEBPACK_IMPORTED_MODULE_6__.CrmUsersProfilesComponent },
            {
                path: 'events',
                children: [
                    { path: ':id', title: 'Event Card', component: _components_crm_event_card_crm_event_card_component__WEBPACK_IMPORTED_MODULE_9__.CrmEventCardComponent }
                ]
            },
        ]
    }
];
class CrmRouting {
}
CrmRouting.ɵfac = function CrmRouting_Factory(t) { return new (t || CrmRouting)(); };
CrmRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CrmRouting });
CrmRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CrmRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 85518:
/*!***********************************************************************************!*\
  !*** ./src/app/crm/modals/add-company-to-event/add-company-to-event.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCompanyToEventComponent": () => (/* binding */ AddCompanyToEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_events_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/events-list.service */ 50828);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/company-picker/company-picker.component */ 66242);










class AddCompanyToEventComponent {
    constructor(dialogRef, eventId, fb, eventListService) {
        this.dialogRef = dialogRef;
        this.eventId = eventId;
        this.fb = fb;
        this.eventListService = eventListService;
        this.isSaving = false;
        this.form = this.fb.group({
            company_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            comment: [null],
        });
    }
    ngOnInit() {
        console.log(this.eventId);
    }
    onSave() {
        this.isSaving = true;
        this.eventListService.addCompany(this.eventId, [this.form.value]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isSaving = false)).subscribe(event => {
            this.dialogRef.close(event);
        });
    }
    onSelectCompany(id) {
        this.form.get('company_id').patchValue(id);
    }
}
AddCompanyToEventComponent.ɵfac = function AddCompanyToEventComponent_Factory(t) { return new (t || AddCompanyToEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_events_list_service__WEBPACK_IMPORTED_MODULE_0__.EventsListService)); };
AddCompanyToEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddCompanyToEventComponent, selectors: [["pek-add-company-to-event"]], decls: 16, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "selectCompany"], ["for", "comment"], ["id", "comment", "pInputTextarea", "", "formControlName", "comment", 3, "rows", "autoResize"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function AddCompanyToEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add Company to Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Company*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "pek-company-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectCompany", function AddCompanyToEventComponent_Template_pek_company_picker_selectCompany_8_listener($event) { return ctx.onSelectCompany($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddCompanyToEventComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 2)("autoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Add")("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__.InputTextarea, _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_1__.CompanyPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tcGFueS10by1ldmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 64713:
/*!*******************************************************************************************!*\
  !*** ./src/app/crm/modals/create-edit-crm-employee/create-edit-crm-employee.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditCrmEmployeeComponent": () => (/* binding */ CreateEditCrmEmployeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/crm-employee.service */ 29038);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 69906);








class CreateEditCrmEmployeeComponent {
    constructor(fb, crmEmployeeService, dialogRef, data) {
        this.fb = fb;
        this.crmEmployeeService = crmEmployeeService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.employee.id));
            this.form.patchValue(this.data.employee);
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createEmployee();
                break;
            }
            case 'edit': {
                this.editEmployee();
                break;
            }
        }
    }
    createEmployee() {
        const send = this.form.value;
        this.crmEmployeeService.create(send).subscribe({
            next: employee => this.dialogRef.close(employee),
            error: () => this.isSaving = false,
        });
    }
    editEmployee() {
        const send = this.form.value;
        this.crmEmployeeService.update(send).subscribe({
            next: employee => this.dialogRef.close(employee),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditCrmEmployeeComponent.ɵfac = function CreateEditCrmEmployeeComponent_Factory(t) { return new (t || CreateEditCrmEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__.CrmEmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditCrmEmployeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditCrmEmployeeComponent, selectors: [["pek-create-edit-crm-employee"]], decls: 16, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "first_name"], ["for", "last-name"], ["type", "text", "id", "last-name", "pInputText", "", "formControlName", "last_name"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditCrmEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditCrmEmployeeComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1jcm0tZW1wbG95ZWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 28739:
/*!***************************************************************************************!*\
  !*** ./src/app/crm/modals/create-edit-event-type/create-edit-event-type.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditEventTypeComponent": () => (/* binding */ CreateEditEventTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_event_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-types.service */ 70229);






function CreateEditEventTypeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 4)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User Profiles*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "pek-user-profile-picker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectUserProfile", function CreateEditEventTypeComponent_div_15_Template_pek_user_profile_picker_selectUserProfile_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const user_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onSelectUserProfile($event, user_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Employees*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "pek-crm-employee-picker", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectEmployees", function CreateEditEventTypeComponent_div_15_Template_pek_crm_employee_picker_selectEmployees_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const user_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onSelectEmployees($event, user_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateEditEventTypeComponent_div_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const idx_r2 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.removeUser(idx_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", idx_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentUserProfileId", user_r1.get("profile_id").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentEmployeeIds", user_r1.get("employees_ids").value);
} }
class CreateEditEventTypeComponent {
    constructor(dialogRef, eventTypesService, fb, data) {
        this.dialogRef = dialogRef;
        this.eventTypesService = eventTypesService;
        this.fb = fb;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            google_calendar_id: [null],
            google_owner_first_name: [null],
            google_owner_last_name: [null],
            google_owner_gmail: [null],
            profiles_ids: this.fb.array([
            // this.fb.group({
            //   profile_id: [null, Validators.required],
            //   employees_ids: [null, Validators.required],
            // })
            ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            is_inner: [true],
            color_hex: ['#3788d8', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.data.eventType.color_hex = this.data.eventType.color_hex ? this.data.eventType.color_hex : '#3788d8';
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data.eventType.id));
            this.form.patchValue(this.data.eventType);
            if (this.data.eventType.access_users.length > 0) {
                this.data.eventType.access_users.forEach(user => {
                    this.form.get('profiles_ids').push(this.fb.group({
                        // @ts-ignore
                        profile_id: [user.user_profile.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                        // @ts-ignore
                        employees_ids: [user.access_users_employees.map(u => u.employee.id), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    }));
                });
            }
        }
        if (this.data.type === 'create') {
            this.form.get('profiles_ids').push(this.fb.group({
                profile_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                employees_ids: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            }));
        }
    }
    get users() {
        return this.form.get('profiles_ids');
    }
    addUser() {
        this.form.get('profiles_ids').push(this.fb.group({
            profile_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            employees_ids: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        }));
    }
    removeUser(index) {
        this.form.get('profiles_ids').removeAt(index);
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createEventType();
                break;
            }
            case 'edit': {
                this.editEventType();
                break;
            }
        }
    }
    createEventType() {
        const send = this.form.value;
        this.eventTypesService.create(send).subscribe({
            next: type => this.dialogRef.close(type),
            error: () => this.isSaving = false,
        });
    }
    editEventType() {
        const send = this.form.value;
        this.eventTypesService.update(send).subscribe({
            next: type => this.dialogRef.close(type),
            error: () => this.isSaving = false,
        });
    }
    onSelectUserProfile(userProfileId, user) {
        user.get('profile_id').patchValue(userProfileId);
    }
    onSelectEmployees(employees, user) {
        if (employees) {
            user.get('employees_ids').patchValue(employees.map(e => e.id));
        }
        else {
            user.get('employees_ids').patchValue(null);
        }
    }
}
CreateEditEventTypeComponent.ɵfac = function CreateEditEventTypeComponent_Factory(t) { return new (t || CreateEditEventTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_types_service__WEBPACK_IMPORTED_MODULE_0__.EventTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditEventTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateEditEventTypeComponent, selectors: [["pek-create-edit-event-type"]], decls: 24, vars: 9, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "row-1"], [1, "form-group"], ["for", "name"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control"], [1, "form-group", "ml-3", "form-group_color"], ["formControlName", "color_hex"], ["formArrayName", "profiles_ids", 1, "employees"], ["class", "employees-row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add User", 1, "add-button", "mt-2", "mb-2", 3, "click"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"], [1, "employees-row", 3, "formGroupName"], [1, "employees-col"], [3, "currentUserProfileId", "selectUserProfile"], [3, "currentEmployeeIds", "selectEmployees"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "mr-2", 3, "click"]], template: function CreateEditEventTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-colorPicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CreateEditEventTypeComponent_div_15_Template, 11, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateEditEventTypeComponent_Template_button_click_16_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4)(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateEditEventTypeComponent_Template_button_click_23_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Company Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 2)("autoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, styles: [".row-1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.row-1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child {\n  width: 100%;\n}\n.employees-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.employees-col[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.employees-col[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 0.6875rem;\n}\n.add-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.5rem 1.125rem;\n  color: var(--theme-color-primary);\n  background: rgba(59, 130, 246, 0.04);\n  cursor: pointer;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0.625rem;\n  border: none;\n}\n.add-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LWV2ZW50LXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRkY7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQUhKO0FBT0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSkY7QUFNRTtFQUNFLG9CQUFBO0FBSkoiLCJmaWxlIjoiY3JlYXRlLWVkaXQtZXZlbnQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmVtcGxveWVlcy1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjEyNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMDQpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 49653:
/*!*********************************************************************************************************!*\
  !*** ./src/app/crm/modals/create-edit-external-event-type/create-edit-external-event-type.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditExternalEventTypeComponent": () => (/* binding */ CreateEditExternalEventTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_event_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-types.service */ 70229);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/colorpicker */ 26303);









class CreateEditExternalEventTypeComponent {
    constructor(dialogRef, eventTypesService, fb, data) {
        this.dialogRef = dialogRef;
        this.eventTypesService = eventTypesService;
        this.fb = fb;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            google_calendar_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            google_owner_first_name: [null],
            google_owner_last_name: [null],
            color_hex: ['#3788d8'],
            profiles_ids: [[]],
            google_owner_gmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.data.eventType.color_hex = this.data.eventType.color_hex ? this.data.eventType.color_hex : '#3788d8';
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.eventType.id));
            this.form.patchValue(this.data.eventType);
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createEventType();
                break;
            }
            case 'edit': {
                this.editEventType();
                break;
            }
        }
    }
    createEventType() {
        const send = this.form.value;
        this.eventTypesService.addCalendarFromGoogle(send).subscribe({
            next: type => this.dialogRef.close(type),
            error: () => this.isSaving = false,
        });
    }
    editEventType() {
        const send = this.form.value;
        this.eventTypesService.update(send).subscribe({
            next: type => this.dialogRef.close(type),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditExternalEventTypeComponent.ɵfac = function CreateEditExternalEventTypeComponent_Factory(t) { return new (t || CreateEditExternalEventTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_types_service__WEBPACK_IMPORTED_MODULE_0__.EventTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditExternalEventTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditExternalEventTypeComponent, selectors: [["pek-create-edit-external-event-type"]], decls: 28, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "calendar"], ["pInputText", "", "formControlName", "google_calendar_id", "type", "text", "id", "calendar", 1, "form-control"], ["for", "first-name"], ["pInputText", "", "formControlName", "google_owner_first_name", "type", "text", "id", "first-name", 1, "form-control"], ["for", "last-name"], ["pInputText", "", "formControlName", "google_owner_last_name", "type", "text", "id", "last-name", 1, "form-control"], ["for", "gmail"], ["pInputText", "", "formControlName", "google_owner_gmail", "type", "text", "id", "gmail", 1, "form-control"], [1, "form-group", "form-group_color"], ["formControlName", "color_hex"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditExternalEventTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Google Calendar ID*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3)(18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "p-colorPicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditExternalEventTypeComponent_Template_button_click_27_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Company Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__.ColorPicker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1leHRlcm5hbC1ldmVudC10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 18396:
/*!***********************************************************************************!*\
  !*** ./src/app/crm/modals/create-edit-schedule/create-edit-schedule.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditScheduleComponent": () => (/* binding */ CreateEditScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_crm_schedule_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/crm-schedule.service */ 51211);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pickers/crm-employee-picker/crm-employee-picker.component */ 9290);
/* harmony import */ var _pickers_crm_event_type_picker_crm_event_type_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pickers/crm-event-type-picker/crm-event-type-picker.component */ 72665);












class CreateEditScheduleComponent {
    constructor(dialogRef, crmScheduleService, fb, data) {
        this.dialogRef = dialogRef;
        this.crmScheduleService = crmScheduleService;
        this.fb = fb;
        this.data = data;
        this.isSaving = false;
        this.scheduleDays = [
            { value: 0, name: 'Monday' },
            { value: 1, name: 'Tuesday' },
            { value: 2, name: 'Wednesday' },
            { value: 3, name: 'Thursday' },
            { value: 4, name: 'Friday' },
            { value: 5, name: 'Saturday' },
            { value: 6, name: 'Sunday' },
        ];
        this.form = this.fb.group({
            start: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            end: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            schedule_values: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            event_type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            employee: [[]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.schedule.id));
            this.form.get('start').patchValue(new Date(this.data.schedule.start));
            this.form.get('end').patchValue(new Date(this.data.schedule.end));
            this.form.get('description').patchValue(this.data.schedule.description);
            this.form.get('event_type').patchValue(this.data.schedule.event_type?.id);
            this.form.get('schedule_values').patchValue(this.data.schedule.values);
            this.form.get('employee').patchValue(this.data.schedule.employee.map(e => e.id));
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createSchedule();
                break;
            }
            case 'edit': {
                this.editSchedule();
                break;
            }
        }
    }
    createSchedule() {
        const send = this.form.value;
        this.crmScheduleService.create(send).subscribe({
            next: schedule => this.dialogRef.close(schedule),
            error: () => this.isSaving = false,
        });
    }
    editSchedule() {
        const send = this.form.value;
        this.crmScheduleService.update(send).subscribe({
            next: schedule => this.dialogRef.close(schedule),
            error: () => this.isSaving = false,
        });
    }
    onSelectEventType(id) {
        this.form.get('event_type').patchValue(id);
    }
    onSelectEmployees(employees) {
        if (employees) {
            this.form.get('employee').patchValue(employees.map(e => e.id));
        }
        else {
            this.form.get('employee').patchValue([]);
        }
    }
}
CreateEditScheduleComponent.ɵfac = function CreateEditScheduleComponent_Factory(t) { return new (t || CreateEditScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_crm_schedule_service__WEBPACK_IMPORTED_MODULE_0__.CrmScheduleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
CreateEditScheduleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateEditScheduleComponent, selectors: [["pek-create-edit-schedule"]], decls: 33, vars: 19, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "currentEmployeeIds", "selectEmployees"], [3, "currentEventTypeId", "selectEventType"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [1, "col-group"], ["for", "start"], ["id", "start", "formControlName", "start", "inputId", "timeonly", 3, "showButtonBar", "showTime", "timeOnly", "hourFormat"], [1, "form-group", "col-6"], ["for", "end"], ["id", "end", "formControlName", "end", "inputId", "timeonly", 3, "showButtonBar", "showTime", "timeOnly", "hourFormat"], ["formControlName", "schedule_values", "optionLabel", "name", "optionValue", "value", 3, "options"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "pek-crm-employee-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectEmployees", function CreateEditScheduleComponent_Template_pek_crm_employee_picker_selectEmployees_8_listener($event) { return ctx.onSelectEmployees($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Event Type*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "pek-crm-event-type-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectEventType", function CreateEditScheduleComponent_Template_pek_crm_event_type_picker_selectEventType_12_listener($event) { return ctx.onSelectEventType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3)(14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "div", 3)(19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Start Time*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11)(23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "End Time*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "p-calendar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 3)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Week days* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "p-multiSelect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-dialog-actions", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateEditScheduleComponent_Template_button_click_32_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentEmployeeIds", ctx.form.get("employee").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentEventTypeId", ctx.form.get("event_type").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 2)("autoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showButtonBar", true)("showTime", true)("timeOnly", true)("hourFormat", "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showButtonBar", true)("showTime", true)("timeOnly", true)("hourFormat", "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.scheduleDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__.InputTextarea, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_multiselect__WEBPACK_IMPORTED_MODULE_9__.MultiSelect, _pickers_crm_employee_picker_crm_employee_picker_component__WEBPACK_IMPORTED_MODULE_1__.CrmEmployeePickerComponent, _pickers_crm_event_type_picker_crm_event_type_picker_component__WEBPACK_IMPORTED_MODULE_2__.CrmEventTypePickerComponent], styles: [".col-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.col-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtZWRpdC1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9290:
/*!**********************************************************************************!*\
  !*** ./src/app/crm/pickers/crm-employee-picker/crm-employee-picker.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmEmployeePickerComponent": () => (/* binding */ CrmEmployeePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/crm-employee.service */ 29038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/multiselect */ 30850);







function CrmEmployeePickerComponent_p_multiSelect_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-multiSelect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrmEmployeePickerComponent_p_multiSelect_1_Template_p_multiSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectedEmployees = $event); })("ngModelChange", function CrmEmployeePickerComponent_p_multiSelect_1_Template_p_multiSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onSelectEmployees($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.employees)("ngModel", ctx_r0.selectedEmployees)("showClear", true);
} }
function CrmEmployeePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CrmEmployeePickerComponent {
    constructor(crmEmployeeService) {
        this.crmEmployeeService = crmEmployeeService;
        this.currentEmployeeIds = [];
        this.selectEmployees = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isLoading = true;
        this.employees = [];
        this.selectedEmployees = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.crmEmployeeService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(employees => {
            this.employees = employees;
            this.findEmployees();
            this.isLoading = false;
        });
    }
    ngOnChanges(changes) {
        if ('currentEmployeeIds' in changes) {
            this.selectedEmployees = [];
            this.findEmployees();
        }
    }
    onSelectEmployees(employees) {
        this.selectEmployees.emit(employees);
    }
    findEmployees() {
        if (this.currentEmployeeIds.length > 0) {
            this.currentEmployeeIds.forEach(id => {
                const findEmployee = this.employees.find(t => t.id === id);
                if (findEmployee) {
                    this.selectedEmployees.push(findEmployee);
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CrmEmployeePickerComponent.ɵfac = function CrmEmployeePickerComponent_Factory(t) { return new (t || CrmEmployeePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__.CrmEmployeeService)); };
CrmEmployeePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrmEmployeePickerComponent, selectors: [["pek-crm-employee-picker"]], inputs: { currentEmployeeIds: "currentEmployeeIds" }, outputs: { selectEmployees: "selectEmployees" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "crm-employee-picker"], ["optionLabel", "fullName", "optionValue", "id", "placeholder", "Select Employees", 3, "options", "ngModel", "showClear", "ngModelChange", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["optionLabel", "fullName", "optionValue", "id", "placeholder", "Select Employees", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function CrmEmployeePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CrmEmployeePickerComponent_p_multiSelect_1_Template, 1, 3, "p-multiSelect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CrmEmployeePickerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__.MultiSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tZW1wbG95ZWUtcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 72665:
/*!**************************************************************************************!*\
  !*** ./src/app/crm/pickers/crm-event-type-picker/crm-event-type-picker.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmEventTypePickerComponent": () => (/* binding */ CrmEventTypePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_event_types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-types.service */ 70229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 38992);







function CrmEventTypePickerComponent_p_dropdown_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrmEventTypePickerComponent_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectedEventTypeId = $event); })("ngModelChange", function CrmEventTypePickerComponent_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onSelectEventType()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.eventTypes)("ngModel", ctx_r0.selectedEventTypeId)("showClear", true);
} }
function CrmEventTypePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CrmEventTypePickerComponent {
    constructor(eventTypeService) {
        this.eventTypeService = eventTypeService;
        this.selectEventType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isLoading = true;
        this.eventTypes = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.eventTypeService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(eventTypes => {
            this.eventTypes = eventTypes;
            if (this.currentEventTypeId) {
                this.selectedEventTypeId = this.currentEventTypeId;
            }
            this.isLoading = false;
        });
    }
    onSelectEventType() {
        this.selectEventType.emit(this.selectedEventTypeId);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CrmEventTypePickerComponent.ɵfac = function CrmEventTypePickerComponent_Factory(t) { return new (t || CrmEventTypePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_types_service__WEBPACK_IMPORTED_MODULE_0__.EventTypesService)); };
CrmEventTypePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrmEventTypePickerComponent, selectors: [["pek-crm-event-type-picker"]], inputs: { currentEventTypeId: "currentEventTypeId" }, outputs: { selectEventType: "selectEventType" }, decls: 4, vars: 2, consts: [[1, "crm-event-type-picker"], ["placeholder", "Select Event Type", "optionLabel", "name", "optionValue", "id", 3, "options", "ngModel", "showClear", "ngModelChange", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["placeholder", "Select Event Type", "optionLabel", "name", "optionValue", "id", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function CrmEventTypePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CrmEventTypePickerComponent_p_dropdown_1_Template, 1, 3, "p-dropdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CrmEventTypePickerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tZXZlbnQtdHlwZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 59741:
/*!****************************************************************************************************!*\
  !*** ./src/app/crm/pickers/crm-multi-event-types-picker/crm-multi-event-types-picker.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmMultiEventTypesPickerComponent": () => (/* binding */ CrmMultiEventTypesPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/crm-employee.service */ 29038);
/* harmony import */ var _services_event_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/event-types.service */ 70229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ 30850);








function CrmMultiEventTypesPickerComponent_p_multiSelect_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-multiSelect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CrmMultiEventTypesPickerComponent_p_multiSelect_1_Template_p_multiSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectedEventType = $event); })("ngModelChange", function CrmMultiEventTypesPickerComponent_p_multiSelect_1_Template_p_multiSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onSelectEventTypes($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.eventTypes)("ngModel", ctx_r0.selectedEventType)("showClear", true);
} }
function CrmMultiEventTypesPickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CrmMultiEventTypesPickerComponent {
    constructor(crmEmployeeService, eventTypesService) {
        this.crmEmployeeService = crmEmployeeService;
        this.eventTypesService = eventTypesService;
        this.currentEventTypesIds = [];
        this.selectEventTypes = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isLoading = true;
        this.eventTypes = [];
        this.selectedEventType = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.eventTypesService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(eventTypes => {
            this.eventTypes = eventTypes;
            this.findEventTypes();
            this.isLoading = false;
        });
    }
    ngOnChanges(changes) {
        if ('currentEmployeeIds' in changes) {
            this.selectedEventType = [];
            this.findEventTypes();
        }
    }
    onSelectEventTypes(eventTypes) {
        this.selectEventTypes.emit(eventTypes);
    }
    findEventTypes() {
        if (this.currentEventTypesIds.length > 0) {
            this.currentEventTypesIds.forEach(id => {
                const findEventType = this.eventTypes.find(t => t.id === id);
                if (findEventType) {
                    this.selectedEventType.push(findEventType);
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CrmMultiEventTypesPickerComponent.ɵfac = function CrmMultiEventTypesPickerComponent_Factory(t) { return new (t || CrmMultiEventTypesPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_0__.CrmEmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_types_service__WEBPACK_IMPORTED_MODULE_1__.EventTypesService)); };
CrmMultiEventTypesPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrmMultiEventTypesPickerComponent, selectors: [["pek-crm-multi-event-types-picker"]], inputs: { currentEventTypesIds: "currentEventTypesIds" }, outputs: { selectEventTypes: "selectEventTypes" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "crm-multi-event-types-picker"], ["optionLabel", "name", "optionValue", "id", "placeholder", "Select Event Types", 3, "options", "ngModel", "showClear", "ngModelChange", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["optionLabel", "name", "optionValue", "id", "placeholder", "Select Event Types", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function CrmMultiEventTypesPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CrmMultiEventTypesPickerComponent_p_multiSelect_1_Template, 1, 3, "p-multiSelect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CrmMultiEventTypesPickerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__.MultiSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm0tbXVsdGktZXZlbnQtdHlwZXMtcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 29038:
/*!******************************************************!*\
  !*** ./src/app/crm/services/crm-employee.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmEmployeeService": () => (/* binding */ CrmEmployeeService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_edit_crm_employee_create_edit_crm_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-crm-employee/create-edit-crm-employee.component */ 64713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class CrmEmployeeService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
        this.url = 'employees/';
    }
    get(query) {
        if (this.employees) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.employees);
        }
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
        return this.httpClient.get(this.API_URL + this.url + 'all/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            const employees = response.data.map(e => {
                return {
                    ...e,
                    fullName: `${e.first_name} ${e.last_name}`
                };
            });
            this.employees = employees;
            return employees;
        }));
    }
    create(employee) {
        return this.httpClient.post(this.API_URL + this.url, employee).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    update(employee) {
        return this.httpClient.patch(this.API_URL + this.url + employee.id + '/', employee).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    delete(employee) {
        return this.httpClient.delete(this.API_URL + this.url + employee.id + '/');
    }
    createEditEmployeeModal(type, employee) {
        return this.dialog
            .open(_modals_create_edit_crm_employee_create_edit_crm_employee_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditCrmEmployeeComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, employee },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
CrmEmployeeService.ɵfac = function CrmEmployeeService_Factory(t) { return new (t || CrmEmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
CrmEmployeeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CrmEmployeeService, factory: CrmEmployeeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51211:
/*!******************************************************!*\
  !*** ./src/app/crm/services/crm-schedule.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrmScheduleService": () => (/* binding */ CrmScheduleService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_edit_schedule_create_edit_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-schedule/create-edit-schedule.component */ 18396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class CrmScheduleService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
        this.url = 'schedules/';
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
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
    create(schedule) {
        return this.httpClient.post(this.API_URL + this.url, schedule).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    update(schedule) {
        return this.httpClient.put(this.API_URL + this.url + schedule.id + '/', schedule).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    delete(schedule) {
        return this.httpClient.delete(this.API_URL + this.url + schedule.id + '/');
    }
    createEditScheduleModal(type, schedule) {
        return this.dialog
            .open(_modals_create_edit_schedule_create_edit_schedule_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditScheduleComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, schedule },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
CrmScheduleService.ɵfac = function CrmScheduleService_Factory(t) { return new (t || CrmScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
CrmScheduleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CrmScheduleService, factory: CrmScheduleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9068:
/*!*******************************************************!*\
  !*** ./src/app/crm/services/event-company.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventCompanyService": () => (/* binding */ EventCompanyService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class EventCompanyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
        this.url = 'event_companies/';
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
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    create(company) {
        return this.httpClient.post(this.API_URL + this.url, company).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    update(id, company) {
        return this.httpClient.patch(this.API_URL + this.url + id + '/', company).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
EventCompanyService.ɵfac = function EventCompanyService_Factory(t) { return new (t || EventCompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
EventCompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventCompanyService, factory: EventCompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 70229:
/*!*****************************************************!*\
  !*** ./src/app/crm/services/event-types.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTypesService": () => (/* binding */ EventTypesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _modals_create_edit_event_type_create_edit_event_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-event-type/create-edit-event-type.component */ 28739);
/* harmony import */ var _modals_create_edit_external_event_type_create_edit_external_event_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/create-edit-external-event-type/create-edit-external-event-type.component */ 49653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);








class EventTypesService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
        this.url = 'event_types/';
    }
    get(query) {
        if (this.eventTypes) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.eventTypes);
        }
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
        return this.httpClient.get(this.API_URL + this.url + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            const eventTypes = response.data;
            this.eventTypes = eventTypes;
            return eventTypes;
        }));
    }
    create(eventType) {
        return this.httpClient.post(this.API_URL + this.url, eventType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    update(eventType) {
        return this.httpClient.patch(this.API_URL + this.url + eventType.id + '/', eventType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    delete(eventType) {
        return this.httpClient.delete(this.API_URL + this.url + eventType.id + '/');
    }
    addCalendarFromGoogle(eventType) {
        return this.httpClient.post(this.API_URL + this.url + 'add_calendar_from_google/', eventType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.data));
    }
    createEditEventType(type, eventType) {
        return this.dialog
            .open(_modals_create_edit_event_type_create_edit_event_type_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditEventTypeComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, eventType },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    createEditExternalEventType(type, eventType) {
        return this.dialog
            .open(_modals_create_edit_external_event_type_create_edit_external_event_type_component__WEBPACK_IMPORTED_MODULE_2__.CreateEditExternalEventTypeComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, eventType },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
EventTypesService.ɵfac = function EventTypesService_Factory(t) { return new (t || EventTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
EventTypesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EventTypesService, factory: EventTypesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50828:
/*!*****************************************************!*\
  !*** ./src/app/crm/services/events-list.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsListService": () => (/* binding */ EventsListService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_add_company_to_event_add_company_to_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/add-company-to-event/add-company-to-event.component */ 85518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class EventsListService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
        this.url = 'events_list/';
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + this.url + id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
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
    addCompany(id, event) {
        return this.httpClient.post(this.API_URL + this.url + id + '/add_companies/', event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    openAddCompanyToEventModal(eventId) {
        return this.dialog
            .open(_modals_add_company_to_event_add_company_to_event_component__WEBPACK_IMPORTED_MODULE_1__.AddCompanyToEventComponent, {
            width: '35rem',
            height: 'auto',
            data: eventId,
            autoFocus: false,
            panelClass: 'modal-overflow-visible',
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
EventsListService.ɵfac = function EventsListService_Factory(t) { return new (t || EventsListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
EventsListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventsListService, factory: EventsListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97138:
/*!*******************************************************!*\
  !*** ./src/app/crm/services/events-report.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsReportService": () => (/* binding */ EventsReportService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class EventsReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
    }
    getForPagination(query) {
        query.push({ name: 'paginated', value: true });
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
        return this.httpClient
            .get(this.API_URL + 'events_reports/get_reports_events/' + queryParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
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
        return this.httpClient
            .get(this.API_URL + 'events_reports/get_reports_events/' + queryParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
}
EventsReportService.ɵfac = function EventsReportService_Factory(t) { return new (t || EventsReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
EventsReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventsReportService, factory: EventsReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 26303:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-colorpicker.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORPICKER_VALUE_ACCESSOR": () => (/* binding */ COLORPICKER_VALUE_ACCESSOR),
/* harmony export */   "ColorPicker": () => (/* binding */ ColorPicker),
/* harmony export */   "ColorPickerModule": () => (/* binding */ ColorPickerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 71420);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 68549);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 14356);









const _c0 = ["container"];
const _c1 = ["input"];
const _c2 = ["colorSelector"];
const _c3 = ["colorHandle"];
const _c4 = ["hue"];
const _c5 = ["hueHandle"];

const _c6 = function (a0) {
  return {
    "p-disabled": a0
  };
};

function ColorPicker_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ColorPicker_input_2_Template_input_focus_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onInputFocus());
    })("click", function ColorPicker_input_2_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onInputClick());
    })("keydown", function ColorPicker_input_2_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onInputKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.inputBgColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c6, ctx_r1.disabled))("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.inputId)("tabindex", ctx_r1.tabindex);
  }
}

const _c7 = function (a1, a2) {
  return {
    "p-colorpicker-panel": true,
    "p-colorpicker-overlay-panel": a1,
    "p-disabled": a2
  };
};

const _c8 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

const _c9 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

function ColorPicker_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPicker_div_3_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onOverlayClick($event));
    })("@overlayAnimation.start", function ColorPicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColorPicker_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onOverlayAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7)(2, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function ColorPicker_div_3_Template_div_touchstart_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onColorTouchStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onMove($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onDragEnd());
    })("mousedown", function ColorPicker_div_3_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onColorMousedown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ColorPicker_div_3_Template_div_mousedown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onHueMousedown($event));
    })("touchstart", function ColorPicker_div_3_Template_div_touchstart_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onHueTouchStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onMove($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.onDragEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c7, !ctx_r2.inline, ctx_r2.disabled))("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c8, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)))("@.disabled", ctx_r2.inline === true);
  }
}

const _c10 = function (a1, a2) {
  return {
    "p-colorpicker p-component": true,
    "p-colorpicker-overlay": a1,
    "p-colorpicker-dragging": a2
  };
};

const COLORPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ColorPicker),
  multi: true
};

class ColorPicker {
  constructor(el, renderer, cd, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.format = 'hex';
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.value = {
      h: 0,
      s: 100,
      b: 100
    };
    this.defaultColor = 'ff0000';

    this.onModelChange = () => {};

    this.onModelTouched = () => {};
  }

  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }

  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }

  set hue(element) {
    this.hueViewChild = element;
  }

  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }

  onHueMousedown(event) {
    if (this.disabled) {
      return;
    }

    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }

  onHueTouchStart(event) {
    if (this.disabled) {
      return;
    }

    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }

  onColorTouchStart(event) {
    if (this.disabled) {
      return;
    }

    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
  }

  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild.nativeElement.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }

  onColorMousedown(event) {
    if (this.disabled) {
      return;
    }

    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }

  onMove(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }

    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }

  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }

  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild.nativeElement.getBoundingClientRect();
    let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    let left = rect.left + document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }

  getValueToUpdate() {
    let val;

    switch (this.format) {
      case 'hex':
        val = '#' + this.HSBtoHEX(this.value);
        break;

      case 'rgb':
        val = this.HSBtoRGB(this.value);
        break;

      case 'hsb':
        val = this.value;
        break;
    }

    return val;
  }

  updateModel() {
    this.onModelChange(this.getValueToUpdate());
  }

  writeValue(value) {
    if (value) {
      switch (this.format) {
        case 'hex':
          this.value = this.HEXtoHSB(value);
          break;

        case 'rgb':
          this.value = this.RGBtoHSB(value);
          break;

        case 'hsb':
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }

    this.updateColorSelector();
    this.updateUI();
    this.cd.markForCheck();
  }

  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = '#' + this.HSBtoHEX(hsb);
    }
  }

  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + 'px';
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + 'px';
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + 'px';
    }

    this.inputBgColor = '#' + this.HSBtoHEX(this.value);
  }

  onInputFocus() {
    this.onModelTouched();
  }

  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }

  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        if (!this.inline) {
          this.overlay = event.element;
          this.appendOverlay();

          if (this.autoZIndex) {
            primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
          }

          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          this.updateColorSelector();
          this.updateUI();
        }

        break;

      case 'void':
        this.onOverlayHide();
        break;
    }
  }

  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'visible':
        if (!this.inline) {
          this.onShow.emit({});
        }

        break;

      case 'void':
        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
        }

        this.onHide.emit({});
        break;
    }
  }

  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.overlay, this.appendTo);
    }
  }

  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }

  alignOverlay() {
    if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.absolutePosition(this.overlay, this.inputViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.relativePosition(this.overlay, this.inputViewChild.nativeElement);
  }

  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }

  onInputClick() {
    this.selfClick = true;
    this.togglePanel();
  }

  togglePanel() {
    if (!this.overlayVisible) this.show();else this.hide();
  }

  onInputKeydown(event) {
    switch (event.which) {
      //space
      case 32:
        this.togglePanel();
        event.preventDefault();
        break;
      //escape and tab

      case 27:
      case 9:
        this.hide();
        break;
    }
  }

  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', () => {
        if (!this.selfClick) {
          this.overlayVisible = false;
          this.unbindDocumentClickListener();
        }

        this.selfClick = false;
        this.cd.markForCheck();
      });
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentMousemoveListener = this.renderer.listen(documentTarget, 'mousemove', event => {
        if (this.colorDragging) {
          this.pickColor(event);
        }

        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }

  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }

  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentMouseupListener = this.renderer.listen(documentTarget, 'mouseup', () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }

  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }

  bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }

  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }

  onWindowResize() {
    if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice()) {
      this.hide();
    }
  }

  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_3__.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }

    this.scrollHandler.bindScrollListener();
  }

  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }

  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }

  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }

  validateHEX(hex) {
    var len = 6 - hex.length;

    if (len > 0) {
      var o = [];

      for (var i = 0; i < len; i++) {
        o.push('0');
      }

      o.push(hex);
      hex = o.join('');
    }

    return hex;
  }

  HEXtoRGB(hex) {
    let hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 0x00FF00) >> 8,
      b: hexValue & 0x0000FF
    };
  }

  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }

  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;

    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }

    hsb.h *= 60;

    if (hsb.h < 0) {
      hsb.h += 360;
    }

    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }

  HSBtoRGB(hsb) {
    var rgb = {
      r: null,
      g: null,
      b: null
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;

    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360) h = 0;

      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }

    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }

  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];

    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = '0' + hex[key];
      }
    }

    return hex.join('');
  }

  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }

  onOverlayHide() {
    this.unbindScrollListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentClickListener();
    this.overlay = null;
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }

    if (this.overlay && this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
    }

    this.restoreOverlayAppend();
    this.onOverlayHide();
  }

}

ColorPicker.ɵfac = function ColorPicker_Factory(t) {
  return new (t || ColorPicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};

ColorPicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ColorPicker,
  selectors: [["p-colorPicker"]],
  viewQuery: function ColorPicker_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.colorSelector = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.colorHandle = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hue = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hueHandle = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    style: "style",
    styleClass: "styleClass",
    inline: "inline",
    format: "format",
    appendTo: "appendTo",
    disabled: "disabled",
    tabindex: "tabindex",
    inputId: "inputId",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onChange: "onChange",
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([COLORPICKER_VALUE_ACCESSOR])],
  decls: 4,
  vars: 9,
  consts: [[3, "ngStyle", "ngClass"], ["container", ""], ["type", "text", "class", "p-colorpicker-preview p-inputtext", "readonly", "readonly", 3, "ngClass", "disabled", "backgroundColor", "focus", "click", "keydown", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["type", "text", "readonly", "readonly", 1, "p-colorpicker-preview", "p-inputtext", 3, "ngClass", "disabled", "focus", "click", "keydown"], ["input", ""], [3, "ngClass", "click"], [1, "p-colorpicker-content"], [1, "p-colorpicker-color-selector", 3, "touchstart", "touchmove", "touchend", "mousedown"], ["colorSelector", ""], [1, "p-colorpicker-color"], [1, "p-colorpicker-color-handle"], ["colorHandle", ""], [1, "p-colorpicker-hue", 3, "mousedown", "touchstart", "touchmove", "touchend"], ["hue", ""], [1, "p-colorpicker-hue-handle"], ["hueHandle", ""]],
  template: function ColorPicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPicker_input_2_Template, 2, 8, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPicker_div_3_Template, 11, 11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, !ctx.inline, ctx.colorDragging || ctx.hueDragging));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inline || ctx.overlayVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle],
  styles: [".p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0px;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0px;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-colorPicker',
      template: `
        <div #container [ngStyle]="style" [class]="styleClass" [ngClass]="{'p-colorpicker p-component':true,'p-colorpicker-overlay':!inline,'p-colorpicker-dragging':colorDragging||hueDragging}">
            <input #input type="text" *ngIf="!inline" class="p-colorpicker-preview p-inputtext" readonly="readonly" [ngClass]="{'p-disabled': disabled}"
                (focus)="onInputFocus()" (click)="onInputClick()" (keydown)="onInputKeydown($event)" [attr.id]="inputId" [attr.tabindex]="tabindex" [disabled]="disabled"
                [style.backgroundColor]="inputBgColor">
            <div *ngIf="inline || overlayVisible" [ngClass]="{'p-colorpicker-panel': true, 'p-colorpicker-overlay-panel':!inline, 'p-disabled': disabled}" (click)="onOverlayClick($event)"
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" [@.disabled]="inline === true"
                    (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationEnd($event)">
                <div class="p-colorpicker-content">
                    <div #colorSelector class="p-colorpicker-color-selector" (touchstart)="onColorTouchStart($event)" (touchmove)="onMove($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)">
                        <div class="p-colorpicker-color">
                            <div #colorHandle class="p-colorpicker-color-handle"></div>
                        </div>
                    </div>
                    <div #hue class="p-colorpicker-hue" (mousedown)="onHueMousedown($event)" (touchstart)="onHueTouchStart($event)" (touchmove)="onMove($event)" (touchend)="onDragEnd()">
                        <div #hueHandle class="p-colorpicker-hue-handle"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }))])])],
      providers: [COLORPICKER_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'p-element'
      },
      styles: [".p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0px;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0px;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    inputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    colorSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['colorSelector']
    }],
    colorHandle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['colorHandle']
    }],
    hue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['hue']
    }],
    hueHandle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['hueHandle']
    }]
  });
})();

class ColorPickerModule {}

ColorPickerModule.ɵfac = function ColorPickerModule_Factory(t) {
  return new (t || ColorPickerModule)();
};

ColorPickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ColorPickerModule
});
ColorPickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      exports: [ColorPicker],
      declarations: [ColorPicker]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_crm_crm_module_ts.js.map