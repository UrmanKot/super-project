"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_sales_sales_module_ts"],{

/***/ 83166:
/*!*********************************************************************************************!*\
  !*** ./src/app/sales/components/configs/nomenclature-price/nomenclature-price.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NomenclaturePriceComponent": () => (/* binding */ NomenclaturePriceComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 87958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pickers/nomenclature-type-picker/nomenclature-type-picker.component */ 72746);
















const _c0 = ["paginator"];
const _c1 = ["searchBoxName"];
const _c2 = ["searchBoxCode"];
function NomenclaturePriceComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function NomenclaturePriceComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function NomenclaturePriceComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function NomenclaturePriceComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 35)(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const nomenclature_r13 = ctx.$implicit;
    const i_r14 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", nomenclature_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r6.searchForm.get("page").value - 1) * 10 + i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](nomenclature_r13.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](nomenclature_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 5, nomenclature_r13.price, "1.2-2"));
} }
function NomenclaturePriceComponent_ng_template_42_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 39);
} }
function NomenclaturePriceComponent_ng_template_42_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NomenclaturePriceComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NomenclaturePriceComponent_ng_template_42_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NomenclaturePriceComponent_ng_template_42_span_3_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
} }
function NomenclaturePriceComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NomenclaturePriceComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41)(1, "p-paginator", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function NomenclaturePriceComponent_div_44_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclaturePriceComponent_div_44_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r9.nomenclatures.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r9.count);
} }
function NomenclaturePriceComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "p-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclaturePriceComponent_div_45_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function NomenclaturePriceComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "button", 47);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r12.selectedNomenclature);
} }
const _c3 = function (a0, a1) { return [a0, a1]; };
class NomenclaturePriceComponent {
    constructor(fb, nomenclatureService) {
        this.fb = fb;
        this.nomenclatureService = nomenclatureService;
        this.nomenclatureType = _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType;
        this.nomenclatures = [];
        this.tableScrollHeight = '24.125rem';
        this.isHideFilters = false;
        this.isStartOnePage = false;
        this.isShowAll = false;
        this.isLoading = true;
        this.count = 0;
        this.searchForm = this.fb.group({
            name: [null],
            code: [null],
            page: [1],
            type_numbers: [null],
            has_price: [null],
        });
        this.queryKey = 'name:null/code:null/type_numbers:null/has_price:null';
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'type_numbers', value: `${_shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.MANUFACTURED},${_shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.ASSEMBLY}` },
            { name: 'paginated', value: true },
            { name: 'order_by_price', value: true },
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.searchBoxName.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.selectedNomenclature = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.searchBoxName.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(350)).subscribe(() => {
            this.searchNomenclatures();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.searchBoxCode.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.selectedNomenclature = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.searchBoxCode.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(350)).subscribe(() => {
            this.searchNomenclatures();
        });
    }
    ngOnInit() {
        this.getNomenclaturesForPagination();
    }
    getNomenclaturesForPagination() {
        this.nomenclatureService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(nomenclatures => {
            this.nomenclatures = nomenclatures.results;
            this.count = nomenclatures.count;
            if (this.isStartOnePage) {
                this.paginator.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    getNomenclatures() {
        this.nomenclatureService.get(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(nomenclatures => {
            this.nomenclatures = nomenclatures;
            this.count = nomenclatures.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    searchNomenclatures() {
        this.isLoading = true;
        this.destroy$.next(true);
        this.selectedNomenclature = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/type_numbers:${this.searchForm.get('type_numbers').value}/has_price:${this.searchForm.get('has_price').value}`;
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
            this.searchForm.get('page').patchValue(1);
            this.isStartOnePage = true;
        }
        this.query = [
            { name: 'order_by_price', value: true },
        ];
        if (!this.isShowAll) {
            this.query.push({ name: 'paginated', value: 'true' });
            this.query.push({ name: 'page', value: this.searchForm.get('page').value });
        }
        if (this.searchForm.get('name').value) {
            this.query.push({ name: 'name', value: this.searchForm.get('name').value });
        }
        if (this.searchForm.get('code').value) {
            this.query.push({ name: 'code', value: this.searchForm.get('code').value });
        }
        if (this.searchForm.get('has_price').value !== null) {
            this.query.push({ name: 'has_price', value: this.searchForm.get('has_price').value });
        }
        if (this.searchForm.get('type_numbers').value !== null) {
            this.query.push({ name: 'type_numbers', value: this.searchForm.get('type_numbers').value });
        }
        else {
            this.query.push({ name: 'type_numbers', value: `${_shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.MANUFACTURED},${_shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.ASSEMBLY}` });
        }
        if (!this.isShowAll) {
            this.getNomenclaturesForPagination();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getNomenclatures();
        }
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
    onShowAll() {
        this.isShowAll = true;
        this.setTableScrollHeight();
        this.searchNomenclatures();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.setTableScrollHeight();
        this.searchNomenclatures();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchNomenclatures();
        }
    }
    onChoiceNomenclatureType(type) {
        this.searchForm.get('type_numbers').patchValue(type);
        this.searchNomenclatures();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
NomenclaturePriceComponent.ɵfac = function NomenclaturePriceComponent_Factory(t) { return new (t || NomenclaturePriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__.NomenclatureService)); };
NomenclaturePriceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NomenclaturePriceComponent, selectors: [["pek-nomenclature-price"]], viewQuery: function NomenclaturePriceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
    } }, decls: 48, vars: 25, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], ["tooltipPosition", "left", 1, "icon", "pi", 3, "pTooltip", "click"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], [3, "filteredNomenclatureTypes", "choiceNomenclatureType"], [1, "actions"], [1, "checkbox", "mr-auto"], ["label", "Has Price?", "formControlName", "has_price", 3, "binary", "ngModelChange"], [1, "table-pagination-preloader"], ["selectionMode", "single", "rowExpandMode", "single", "dataKey", "id", 3, "scrollHeight", "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "text-center", 2, "width", "5%"], [2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Edit Price", 1, "p-button-icon", "ml-auto", 3, "disabled"]], template: function NomenclaturePriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Nomenclature Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NomenclaturePriceComponent_ng_container_10_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclaturePriceComponent_Template_button_click_11_listener() { return ctx.toggleFilterVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "form", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "pek-nomenclature-type-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("choiceNomenclatureType", function NomenclaturePriceComponent_Template_pek_nomenclature_type_picker_choiceNomenclatureType_30_listener($event) { return ctx.onChoiceNomenclatureType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 12)(32, "div", 13)(33, "div", 19)(34, "div", 20)(35, "p-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NomenclaturePriceComponent_Template_p_checkbox_ngModelChange_35_listener() { return ctx.searchNomenclatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, NomenclaturePriceComponent_ng_container_36_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22)(38, "p-table", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function NomenclaturePriceComponent_Template_p_table_selectionChange_38_listener($event) { return ctx.selectedNomenclature = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, NomenclaturePriceComponent_ng_template_40_Template, 9, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, NomenclaturePriceComponent_ng_template_41_Template, 10, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, NomenclaturePriceComponent_ng_template_42_Template, 4, 3, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, NomenclaturePriceComponent_div_43_Template, 2, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, NomenclaturePriceComponent_div_44_Template, 5, 4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, NomenclaturePriceComponent_div_45_Template, 3, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, NomenclaturePriceComponent_ng_template_46_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "sales")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", ctx.isHideFilters ? "Expand Filters" : "Collapse Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filteredNomenclatureTypes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](22, _c3, ctx.nomenclatureType.MANUFACTURED, ctx.nomenclatureType.ASSEMBLY));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollHeight", "calc(100vh - " + ctx.tableScrollHeight + ")")("scrollable", true)("rows", 10)("selection", ctx.selectedNomenclature)("value", ctx.nomenclatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator, _shared_pickers_nomenclature_type_picker_nomenclature_type_picker_component__WEBPACK_IMPORTED_MODULE_3__.NomenclatureTypePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  margin-top: 0.3125rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 2.2665rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbWVuY2xhdHVyZS1wcmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoibm9tZW5jbGF0dXJlLXByaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMi4yNjY1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 87571:
/*!***************************************************************!*\
  !*** ./src/app/sales/components/regions/regions.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionsComponent": () => (/* binding */ RegionsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_region_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/region.service */ 28957);
/* harmony import */ var _shared_services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/country.service */ 12334);
/* harmony import */ var _shared_services_sub_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/sub-region.service */ 48424);
/* harmony import */ var _services_country_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/country-region.service */ 50797);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);














function RegionsComponent_ng_template_12_p_menubar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-menubar", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r3.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx_r3.menuItemsRegion);
} }
function RegionsComponent_ng_template_12_p_menubar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-menubar", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx_r4.menuItemsCountry);
} }
function RegionsComponent_ng_template_12_p_menubar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-menubar", 15);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx_r5.menuItemsSubRegion);
} }
function RegionsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RegionsComponent_ng_template_12_p_menubar_1_Template, 1, 3, "p-menubar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RegionsComponent_ng_template_12_p_menubar_2_Template, 1, 3, "p-menubar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RegionsComponent_ng_template_12_p_menubar_3_Template, 1, 3, "p-menubar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selected && ctx_r0.selected.data.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selected && ctx_r0.selected.data.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selected && ctx_r0.selected.data.subRegion);
} }
function RegionsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function RegionsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "p-treeTableToggler", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r6 = ctx.$implicit;
    const rowData_r7 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", rowNode_r6)("ttSelectableRow", rowNode_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", rowNode_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", rowData_r7.region == null ? null : rowData_r7.region.name, " ", rowData_r7.country == null ? null : rowData_r7.country.name, " ", rowData_r7.subRegion == null ? null : rowData_r7.subRegion.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r7.country == null ? null : rowData_r7.country.alpha2_code, " ");
} }
class RegionsComponent {
    constructor(regionService, countryService, subRegionService, countryRegionService, modalService) {
        this.regionService = regionService;
        this.countryService = countryService;
        this.subRegionService = subRegionService;
        this.countryRegionService = countryRegionService;
        this.modalService = modalService;
        this.tree = [];
        this.regions = [];
        this.countries = [];
        this.subRegions = [];
        this.expanseMapCountry = {};
        this.expanseMapRegion = {};
        this.expanseMapSubRegion = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.menuItemsCountry = [{
                label: 'Selected Country',
                items: [
                    {
                        label: 'Edit Country',
                        icon: 'pi pi-pencil',
                        command: () => this.editCountry()
                    },
                    {
                        label: 'Add Region',
                        icon: 'pi pi-plus',
                        command: () => this.addRegion()
                    },
                    {
                        label: 'Remove Country',
                        icon: 'pi pi-trash',
                        command: () => this.deleteCountry()
                    },
                ]
            }];
        this.menuItemsRegion = [{
                label: 'Selected Region',
                items: [
                    {
                        label: 'Edit Region',
                        icon: 'pi pi-pencil',
                        command: () => this.editRegion()
                    },
                    {
                        label: 'Add Sub Region',
                        icon: 'pi pi-plus',
                        command: () => this.addSubRegion()
                    },
                    {
                        label: 'Remove Region',
                        icon: 'pi pi-trash',
                        command: () => this.deleteRegion()
                    }
                ]
            }];
        this.menuItemsSubRegion = [{
                label: 'Selected Region',
                items: [
                    {
                        label: 'Edit Sub Region',
                        icon: 'pi pi-pencil',
                        command: () => this.editSubRegion()
                    },
                    {
                        label: 'Remove Sub Region',
                        icon: 'pi pi-trash',
                        command: () => this.deleteSubRegion()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.loadInfo();
    }
    loadInfo() {
        this.selected = null;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)({
            regions: this.regionService.get(),
            countries: this.countryService.get(),
            subRegion: this.subRegionService.get(),
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({ regions, countries, subRegion }) => {
            this.regions = regions;
            this.countries = countries;
            this.subRegions = subRegion;
            this.createTree();
        });
    }
    createTree() {
        if (this.tree) {
            this.mapExpansion();
        }
        const tree = [];
        let expanded = false;
        if (this.expanseMapCountry) {
            expanded = this.expanseMapCountry[9000000];
        }
        tree.push({
            data: { country: { name: 'Not Country', id: 9000000 } },
            expanded: expanded,
            children: this.regions.filter(r => !r.country).map(region => {
                let expanded = false;
                if (this.expanseMapRegion) {
                    expanded = this.expanseMapRegion[region.id];
                }
                return {
                    data: { region: region },
                    expanded: expanded,
                    children: [],
                };
            })
        });
        this.countries.forEach(country => {
            let expanded = false;
            if (this.expanseMapCountry) {
                expanded = this.expanseMapCountry[country.id];
            }
            tree.push({
                data: { country: country },
                expanded: expanded,
                children: this.regions.filter(r => r.country).filter(r => r.country.id === country.id).map(region => {
                    let expanded = false;
                    if (this.expanseMapRegion) {
                        expanded = this.expanseMapRegion[region.id];
                    }
                    return {
                        data: { region: region },
                        expanded: expanded,
                        children: [],
                    };
                })
            });
        });
        tree.forEach(node => {
            node.children.forEach(child => {
                const regionSubRegions = this.subRegions.filter(el => el.region === child.data.region.id);
                if (regionSubRegions.length > 0) {
                    child.children.push(...regionSubRegions.map(subRegion => {
                        let expanded = false;
                        if (this.expanseMapCountry) {
                            expanded = this.expanseMapSubRegion[subRegion.id];
                        }
                        return {
                            data: { subRegion: subRegion, countryRegionId: child.data.region.country.id },
                            children: [],
                            expanded: expanded,
                            parent: child
                        };
                    }));
                }
            });
        });
        this.tree = tree.map(n => n);
    }
    mapExpansion() {
        this.tree.forEach(element => {
            this.createExpanseMap(element);
        });
    }
    createExpanseMap(node) {
        if (node.expanded) {
            if (node.data.country) {
                this.expanseMapCountry[node.data.country.id] = node.expanded;
            }
            else if (node.data.region) {
                this.expanseMapRegion[node.data.region.id] = node.expanded;
            }
            else if (node.data.subRegion) {
                this.expanseMapSubRegion[node.data.subRegion.id] = node.expanded;
            }
        }
        else {
            if (node.data.country) {
                this.expanseMapCountry[node.data.country.id] = false;
            }
            else if (node.data.region) {
                this.expanseMapRegion[node.data.region.id] = false;
            }
            else if (node.data.subRegion) {
                this.expanseMapSubRegion[node.data.subRegion.id] = false;
            }
        }
        if (node.children) {
            node.children.forEach(element => {
                this.createExpanseMap(element);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    createCountry() {
        this.countryRegionService.createEditCountryModal().subscribe(res => {
            if (res) {
                this.loadInfo();
            }
        });
    }
    editCountry() {
        this.countryRegionService.createEditCountryModal(this.selected.data.country).subscribe(res => {
            if (res) {
                this.loadInfo();
            }
        });
    }
    deleteCountry() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe((confirm) => {
            if (confirm) {
                this.countryService.delete(this.selected.data.country).subscribe(res => {
                    this.loadInfo();
                });
            }
        });
    }
    editRegion() {
        this.countryRegionService.createEditRegionModal(this.selected.data.region).subscribe(res => {
            if (res) {
                this.loadInfo();
            }
        });
    }
    deleteRegion() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe((confirm) => {
            if (confirm) {
                this.regionService.delete(this.selected.data.region).subscribe(res => {
                    this.loadInfo();
                });
            }
        });
    }
    addRegion() {
        this.countryRegionService.createEditRegionModal(null, this.selected.data.country.id).subscribe(res => {
            if (res) {
                this.loadInfo();
            }
        });
    }
    addSubRegion() {
        this.countryRegionService.createEditSubRegionModal(this.selected.data.region.country?.id, null, this.selected.data.region.id).subscribe(res => {
            if (res) {
                this.loadInfo();
            }
        });
    }
    editSubRegion() {
        this.countryRegionService.createEditSubRegionModal(this.selected.data.countryRegionId, this.selected.data.subRegion, this.selected.data.subRegion.region).subscribe(res => {
            if (res) {
                this.loadInfo();
            }
        });
    }
    deleteSubRegion() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe((confirm) => {
            if (confirm) {
                this.subRegionService.delete(this.selected.data.subRegion).subscribe(res => {
                    this.loadInfo();
                });
            }
        });
    }
}
RegionsComponent.ɵfac = function RegionsComponent_Factory(t) { return new (t || RegionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_region_service__WEBPACK_IMPORTED_MODULE_0__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_country_service__WEBPACK_IMPORTED_MODULE_1__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_sub_region_service__WEBPACK_IMPORTED_MODULE_2__.SubRegionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_country_region_service__WEBPACK_IMPORTED_MODULE_3__.CountryRegionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService)); };
RegionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RegionsComponent, selectors: [["pek-regions"]], decls: 15, vars: 5, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Country", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.2rem)", 3, "value", "selection", "scrollable", "selectionChange"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "action-buttons"], ["class", "ml-auto", 3, "model", "disabled", 4, "ngIf"], [1, "ml-auto", 3, "model"], [2, "padding-left", "52px", "width", "60%"], [2, "width", "40%"], [3, "ttRow", "ttSelectableRow"], [2, "width", "60%"], [3, "rowNode"]], template: function RegionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Countries & Regions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionsComponent_Template_button_click_7_listener() { return ctx.createCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-treeTable", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function RegionsComponent_Template_p_treeTable_selectionChange_11_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RegionsComponent_ng_template_12_Template, 4, 3, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RegionsComponent_ng_template_13_Template, 5, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RegionsComponent_ng_template_14_Template, 7, 7, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "sales")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.tree)("selection", ctx.selected)("scrollable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TTSelectableRow, primeng_menubar__WEBPACK_IMPORTED_MODULE_15__.Menubar, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 55827:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/components/sales-chain-page/sales-chain-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesChainPageComponent": () => (/* binding */ SalesChainPageComponent)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _crm_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../crm/services/company.service */ 54600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _services_sales_chain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sales-chain-service */ 96976);
/* harmony import */ var _services_sales_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sales-status.service */ 50371);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_event_sales_chain_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event-sales-chain.service */ 22402);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _services_sales_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sales-file.service */ 27495);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);




















function SalesChainPageComponent_div_14_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r30.saleChain.company == null ? null : ctx_r30.saleChain.company.country == null ? null : ctx_r30.saleChain.company.country.name);
} }
function SalesChainPageComponent_div_14_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r31.saleChain.company == null ? null : ctx_r31.saleChain.company.region == null ? null : ctx_r31.saleChain.company.region.name);
} }
function SalesChainPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Company Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Phone Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span")(22, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Tax Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Register Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 40)(33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Nomenclature: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, " Country: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, SalesChainPageComponent_div_14_span_43_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, " Region: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, SalesChainPageComponent_div_14_span_46_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](51, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Comment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.phone_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r0.saleChain.company.website, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.tax_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.registration_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.supplier_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.saleChain.company == null ? null : ctx_r0.saleChain.company.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.saleChain.company == null ? null : ctx_r0.saleChain.company.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r0.saleChain.chain_status == null ? null : ctx_r0.saleChain.chain_status.status.name, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](51, 15, ctx_r0.saleChain.chain_status == null ? null : ctx_r0.saleChain.chain_status.date, "dd.MM.yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.saleChain.company.comment);
} }
function SalesChainPageComponent_ng_template_22_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Choose the Contact Person to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SalesChainPageComponent_ng_template_22_p_1_Template, 2, 0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "p-menubar", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.selectedEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", !ctx_r2.selectedEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("model", ctx_r2.salesChainEvents);
} }
function SalesChainPageComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Event Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Event Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "p-sortIcon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Event End ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Event Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Event Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Is Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SalesChainPageComponent_ng_template_24_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Not Related ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function SalesChainPageComponent_ng_template_24_ng_container_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", employee_r39.first_name + " " + employee_r39.last_name, " ");
} }
function SalesChainPageComponent_ng_template_24_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SalesChainPageComponent_ng_template_24_ng_container_15_span_1_Template, 3, 1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const activity_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", activity_r33.event.employee);
} }
function SalesChainPageComponent_ng_template_24_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 62);
} }
const _c0 = function (a1) { return ["/dash/crm/events-list/event-card/", a1]; };
function SalesChainPageComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 55)(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, SalesChainPageComponent_ng_template_24_ng_container_14_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, SalesChainPageComponent_ng_template_24_ng_container_15_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 54)(19, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, SalesChainPageComponent_ng_template_24_i_20_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const activity_r33 = ctx.$implicit;
    const i_r34 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pSelectableRow", activity_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", activity_r33.event.event_type.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c0, activity_r33.event.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 12, activity_r33.event.start, "dd/MM/yyyy, HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 15, activity_r33.event.end, "dd/MM/yyyy, HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", activity_r33.event.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", activity_r33.event.employee.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", activity_r33.event.employee.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", activity_r33.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", activity_r33.is_done)("ngIfElse", _r28);
} }
function SalesChainPageComponent_ng_template_25_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 65);
} }
function SalesChainPageComponent_ng_template_25_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SalesChainPageComponent_ng_template_25_i_2_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SalesChainPageComponent_ng_template_25_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function SalesChainPageComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_ng_template_26_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44); _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21); _r1.paginator = false; return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r1.scrollable = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68)(1, "p-button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_div_28_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r1.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SalesChainPageComponent_ng_template_40_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Choose the Contact Person to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SalesChainPageComponent_ng_template_40_p_1_Template, 2, 0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "p-menubar", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r10.selectedSalesReservation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", !ctx_r10.selectedSalesReservation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("model", ctx_r10.products);
} }
function SalesChainPageComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Serial number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SalesChainPageComponent_ng_template_42_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", reservation_r48.nomenclature.name, " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", reservation_r48.warehouse_product.nomenclature.name, " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", reservation_r48.list_product.nomenclature.name, " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", reservation_r48.nomenclature.code, " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", reservation_r48.warehouse_product.nomenclature.code, " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", reservation_r48.list_product.nomenclature.code, " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (reservation_r48.warehouse_product.serial_number == null ? null : reservation_r48.warehouse_product.serial_number.type_with_number) ? reservation_r48.warehouse_product.serial_number == null ? null : reservation_r48.warehouse_product.serial_number.type_with_number : reservation_r48.warehouse_product.serial_number == null ? null : reservation_r48.warehouse_product.serial_number.id, " ");
} }
function SalesChainPageComponent_ng_template_42_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div");
} }
function SalesChainPageComponent_ng_template_42_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " Available now ");
} }
function SalesChainPageComponent_ng_template_42_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, reservation_r48.list_product == null ? null : reservation_r48.list_product.delivery_date, "dd/MM/yyyy"), " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Ready ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function SalesChainPageComponent_ng_template_42_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r63.statuses[reservation_r48.list_product.status], " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function SalesChainPageComponent_ng_template_42_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, reservation_r48.nomenclature.price, "1.2-2"), " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, reservation_r48.warehouse_product.nomenclature.price, "1.2-2"), " ");
} }
function SalesChainPageComponent_ng_template_42_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reservation_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, reservation_r48.list_product.nomenclature.price, "1.2-2"), " ");
} }
function SalesChainPageComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 55)(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, SalesChainPageComponent_ng_template_42_ng_container_7_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SalesChainPageComponent_ng_template_42_ng_container_8_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, SalesChainPageComponent_ng_template_42_ng_container_9_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, SalesChainPageComponent_ng_template_42_ng_container_11_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, SalesChainPageComponent_ng_template_42_ng_container_12_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SalesChainPageComponent_ng_template_42_ng_container_13_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td", 70)(15, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, SalesChainPageComponent_ng_template_42_ng_container_17_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 54)(19, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Delivery date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, SalesChainPageComponent_ng_template_42_div_21_Template, 1, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, SalesChainPageComponent_ng_template_42_ng_template_22_Template, 1, 0, "ng-template", null, 73, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, SalesChainPageComponent_ng_template_42_ng_template_24_Template, 2, 4, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td", 54)(27, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, SalesChainPageComponent_ng_template_42_ng_container_29_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, SalesChainPageComponent_ng_template_42_ng_container_30_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, SalesChainPageComponent_ng_template_42_ng_container_31_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td", 54)(33, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, SalesChainPageComponent_ng_template_42_ng_container_35_Template, 3, 4, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, SalesChainPageComponent_ng_template_42_ng_container_36_Template, 3, 4, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, SalesChainPageComponent_ng_template_42_ng_container_37_Template, 3, 4, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const reservation_r48 = ctx.$implicit;
    const rowIndex_r49 = ctx.rowIndex;
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](23);
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pSelectableRow", reservation_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](rowIndex_r49 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 19, reservation_r48.created_at, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.warehouse_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.warehouse_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.warehouse_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.warehouse_product)("ngIfThen", _r58)("ngIfElse", _r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.warehouse_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !reservation_r48.list_product && !reservation_r48.warehouse_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.warehouse_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reservation_r48.list_product);
} }
function SalesChainPageComponent_ng_template_43_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 65);
} }
function SalesChainPageComponent_ng_template_43_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SalesChainPageComponent_ng_template_43_i_2_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SalesChainPageComponent_ng_template_43_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r13.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r13.isLoading);
} }
function SalesChainPageComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_54_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Choose the Contact Person to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SalesChainPageComponent_ng_template_54_p_1_Template, 2, 0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "p-menubar", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r15.selectedOffer);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", !ctx_r15.selectedOffer);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("model", ctx_r15.offersMenu);
} }
function SalesChainPageComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "OfferID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SalesChainPageComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 55)(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const offer_r83 = ctx.$implicit;
    const rowIndex_r84 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pSelectableRow", offer_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](rowIndex_r84 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 6, offer_r83.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", offer_r83.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", offer_r83.customer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", offer_r83.sum, " ");
} }
function SalesChainPageComponent_ng_template_57_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 65);
} }
function SalesChainPageComponent_ng_template_57_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SalesChainPageComponent_ng_template_57_i_2_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SalesChainPageComponent_ng_template_57_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r18.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r18.isLoading);
} }
function SalesChainPageComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42)(1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_ng_template_65_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.onAddFile()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SalesChainPageComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SalesChainPageComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 55)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 54)(8, "div", 80)(9, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_ng_template_67_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92); const file_r89 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r91.onDownloadFile(file_r89)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_ng_template_67_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92); const file_r89 = restoredCtx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r93.onRemoveFile(file_r89.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const file_r89 = ctx.$implicit;
    const rowIndex_r90 = ctx.rowIndex;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pSelectableRow", file_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](rowIndex_r90 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r23.getName(file_r89.file), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", ctx_r23.addition.has(file_r89.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", ctx_r23.deletion.has(file_r89.id));
} }
function SalesChainPageComponent_ng_template_68_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 65);
} }
function SalesChainPageComponent_ng_template_68_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SalesChainPageComponent_ng_template_68_i_2_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SalesChainPageComponent_ng_template_68_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r24.isLoading);
} }
function SalesChainPageComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SalesChainPageComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 85);
} }
class SalesChainPageComponent {
    constructor(companyService, route, router, invoiceService, salesChainService, salesStatus, modalService, eventSalesChainService, adapterService, salesFileService) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
        this.invoiceService = invoiceService;
        this.salesChainService = salesChainService;
        this.salesStatus = salesStatus;
        this.modalService = modalService;
        this.eventSalesChainService = eventSalesChainService;
        this.adapterService = adapterService;
        this.salesFileService = salesFileService;
        this.isLoading = true;
        this.statuses = { '0': 'Not Processed', '1': 'Completed', '2': 'Deficit', '3': 'Reserved' };
        this.isLoadingReservation = true;
        this.deletion = new Set();
        this.addition = new Set();
        this.invoices = [];
        this.offers = [];
        this.selectedOffer = null;
        this.isLoadingOffers = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.salesReservation = [];
        this.salesActivities = [];
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.files = [];
        this.salesChainEvents = [{
                label: 'Selected Events',
                items: [
                    {
                        label: 'Confirm',
                        icon: 'pi pi-check',
                        command: () => this.onConfirmEvent(),
                        disabled: true
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditEvent()
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-trash',
                        command: () => this.onDeleteEvent()
                    },
                ]
            }];
        this.products = [{
                label: 'Selected product',
                items: [
                    {
                        label: 'Delete',
                        icon: 'pi pi-trash',
                        command: () => this.onDeleteProduct()
                    }
                ]
            }];
        this.offersMenu = [{
                label: 'Selected product',
                items: [
                    {
                        label: 'Delete',
                        icon: 'pi pi-trash',
                        command: () => this.onDeleteOffer()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(id => this.saleChainId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(id => this.salesChainService.getById(+id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$)).subscribe(saleChain => {
            this.saleChain = saleChain;
            this.salesActivities = saleChain.activities;
            this.salesActivities.sort((a, b) => {
                const dateA = new Date(a.event.start);
                const dateB = new Date(b.event.start);
                // @ts-ignore
                return (dateB - dateA);
            });
            this.isLoading = false;
        });
        this.getReservation();
        this.getOffers();
        this.getAllFile();
    }
    getName(name) {
        let name_arr = name.split('/');
        return name_arr[name_arr.length - 1];
    }
    getReservation() {
        this.salesChainService.getReservation(this.saleChainId).subscribe(salesReservation => {
            // @ts-ignore
            this.salesReservation = salesReservation;
            this.isLoadingReservation = false;
        });
    }
    getOffers() {
        this.offers = [
            {
                id: 1,
                date: '2022-10-21',
                customer: {
                    id: 1,
                    name: 'Customer Name'
                },
                sum: 97
            },
            {
                id: 2,
                date: '2022-10-21',
                customer: {
                    id: 1,
                    name: 'Customer Name'
                },
                sum: 97
            },
        ];
    }
    onEditEvent() {
        this.eventSalesChainService.editCompanyToEvent(this.selectedEvent).subscribe(() => {
            this.getAll();
        });
    }
    editChainStatus() {
        this.salesChainService.editSalesChainStatus(this.saleChain).subscribe(res => {
            if (res) {
                this.getAll();
            }
        });
    }
    onConfirmEvent() {
        this.modalService.confirm('success')
            .subscribe(confirm => {
            if (confirm) {
                this.eventSalesChainService.updateEvent(this.selectedEvent.id, { is_done: true }).subscribe(() => {
                    this.getAll();
                });
            }
        });
    }
    onDeleteEvent() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.eventSalesChainService.deleteEvent(this.selectedEvent).subscribe();
                this.salesActivities = this.salesActivities.filter(a => a.id !== this.selectedEvent.id);
                this.selectedEvent = null;
            }
        });
    }
    onSelectedEvent() {
        if (this.selectedEvent) {
            this.salesChainEvents[0].items[0].disabled = this.selectedEvent.is_done !== false;
        }
    }
    onDeleteProduct() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.salesChainService.deleteProduct(this.selectedSalesReservation.id).subscribe();
            }
        });
    }
    onAddProduct() {
        this.salesChainService.createChoiseProduct(this.selectedSalesReservation).subscribe();
    }
    getAllFile() {
        this.salesChainService.getFile().subscribe(files => {
            this.files = files;
        });
    }
    getFileName(file) {
        let name = file.split('/');
        return name[name.length - 1];
    }
    onAddFile() {
        this.salesChainService.createSalesFileModal(this.saleChainId).subscribe(file => {
            if (file) {
                console.log(file);
                this.files.push(file);
                this.files = this.files.map(f => f);
            }
            this.getAllFile();
        });
    }
    onDownloadFile(file) {
        this.addition.add(file.id);
        this.salesChainService.downloadFile(file).subscribe(response => {
            console.log(response);
            const filename = this.getFileName(file.file);
            this.adapterService.downloadFile(filename, response);
            this.addition.clear();
        });
    }
    onRemoveFile(id) {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.deletion.add(id);
                this.salesFileService.remove(id).subscribe(() => {
                    this.files = this.files.filter(i => i.id != id);
                    this.deletion.clear();
                });
            }
        });
    }
    onDeleteOffer() {
        console.log(this.selectedOffer);
        this.salesChainService.removeGenerateOffer(this.selectedOffer.id).subscribe(res => {
            console.log(res);
        });
    }
    onGenerateOffer() {
        this.salesChainService.getGenerateOffer(this.saleChainId).subscribe(res => {
            console.log(res);
        });
    }
}
SalesChainPageComponent.ɵfac = function SalesChainPageComponent_Factory(t) { return new (t || SalesChainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_crm_services_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_2__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_3__.SalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_sales_status_service__WEBPACK_IMPORTED_MODULE_4__.SalesStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_event_sales_chain_service__WEBPACK_IMPORTED_MODULE_6__.EventSalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_7__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_sales_file_service__WEBPACK_IMPORTED_MODULE_8__.SalesFileService)); };
SalesChainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SalesChainPageComponent, selectors: [["pek-sales-chain-page"]], decls: 74, vars: 32, consts: [[1, "company-page"], [1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Company card", 1, "mr-2", 3, "disabled"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Open Statuses", 1, "p-button-icon", 3, "disabled", "click"], [1, "page__content"], [1, "mb-4"], [1, "page__card", "company-information-card", "mb-4"], ["class", "company-information", 4, "ngIf", "ngIfElse"], [1, "page__card", "mb-4"], [1, "page__table"], [1, "table-pagination-preloader"], ["scrollHeight", "calc(100vh - 18.8rem)", "selectionMode", "single", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Generate Offer", 1, "mr-2", 3, "disabled"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Product", 1, "p-button-icon", 3, "disabled", "click"], ["selectionMode", "single", 3, "scrollable", "value", "selection", "rows", "paginator", "selectionChange"], ["st", ""], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Generate Offer", 1, "mr-2", 3, "click"], ["selectionMode", "single", 1, "adaptive-table", 3, "value", "selection", "rows", "paginator", "selectionChange"], [1, "page__card"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["mt", ""], ["infoLoading", ""], ["notGrouped", ""], [1, "company-information"], [1, "row"], [1, "col-md-5"], ["target", "_blank", 3, "href"], [1, "col-md-7"], [4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], ["pSortableColumn", "event.start", 2, "width", "12%"], ["field", "event.start"], ["pSortableColumn", "event.end", 2, "width", "12%"], ["field", "event.end"], [2, "width", "20%"], [2, "width", "11%"], [1, "text-center", 2, "width", "10%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [2, "width", "12%", 3, "routerLink"], [2, "width", "12%"], [1, "icons"], ["class", "pi pi-check text-success", 4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "pi", "pi-check", "text-success"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "pTooltip", "Remove Pagination", "styleClass", "p-button-text", 3, "click"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "", 2, "width", "15%"], [1, "title-hidden"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["availableNow", ""], ["availableLater", ""], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "30%"], [1, "text-center", 2, "width", "25%"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add File", 1, "ml-auto", 3, "click"], [2, "width", "85%"], [1, "d-flex", "justify-content-center"], ["pButton", "", "type", "button", "icon", "pi pi-download", 1, "p-button-primary", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", "mr-2", 3, "loading", "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", 3, "loading", "click"], [1, "text-center", "p-2"], [1, "info-loading"], [1, "pi", "pi-times", "text-danger"]], template: function SalesChainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "pek-module-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Chain Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_Template_button_click_9_listener() { return ctx.editChainStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 8)(11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Chain Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, SalesChainPageComponent_div_14_Template, 56, 18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "p-table", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function SalesChainPageComponent_Template_p_table_selectionChange_20_listener($event) { return ctx.selectedEvent = $event; })("selectionChange", function SalesChainPageComponent_Template_p_table_selectionChange_20_listener() { return ctx.onSelectedEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, SalesChainPageComponent_ng_template_22_Template, 3, 4, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, SalesChainPageComponent_ng_template_23_Template, 19, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, SalesChainPageComponent_ng_template_24_Template, 21, 20, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, SalesChainPageComponent_ng_template_25_Template, 4, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, SalesChainPageComponent_ng_template_26_Template, 2, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, SalesChainPageComponent_div_27_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, SalesChainPageComponent_div_28_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 24)(30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_Template_button_click_34_listener() { return ctx.onAddProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 12)(36, "div", 13)(37, "div", 14)(38, "p-table", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function SalesChainPageComponent_Template_p_table_selectionChange_38_listener($event) { return ctx.selectedSalesReservation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, SalesChainPageComponent_ng_template_40_Template, 3, 4, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, SalesChainPageComponent_ng_template_41_Template, 17, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, SalesChainPageComponent_ng_template_42_Template, 38, 22, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, SalesChainPageComponent_ng_template_43_Template, 4, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, SalesChainPageComponent_div_44_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 24)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 5)(49, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SalesChainPageComponent_Template_button_click_49_listener() { return ctx.onGenerateOffer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 12)(51, "div", 13)(52, "div", 14)(53, "p-table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function SalesChainPageComponent_Template_p_table_selectionChange_53_listener($event) { return ctx.selectedOffer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, SalesChainPageComponent_ng_template_54_Template, 3, 4, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, SalesChainPageComponent_ng_template_55_Template, 11, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, SalesChainPageComponent_ng_template_56_Template, 12, 9, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, SalesChainPageComponent_ng_template_57_Template, 4, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, SalesChainPageComponent_div_58_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 31)(62, "div", 13)(63, "p-table", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function SalesChainPageComponent_Template_p_table_selectionChange_63_listener($event) { return ctx.selectedFile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, SalesChainPageComponent_ng_template_65_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, SalesChainPageComponent_ng_template_66_Template, 7, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, SalesChainPageComponent_ng_template_67_Template, 11, 5, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, SalesChainPageComponent_ng_template_68_Template, 4, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](69, SalesChainPageComponent_div_69_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, SalesChainPageComponent_ng_template_70_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, SalesChainPageComponent_ng_template_72_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("module", "sales")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("scrollable", true)("paginator", ctx.salesActivities.length > 0)("rows", 10)("value", ctx.salesActivities)("selection", ctx.selectedEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading && (ctx.saleChain.company == null ? null : ctx.saleChain.company.contact_persons.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoadingReservation);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoadingReservation);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("scrollable", true)("value", ctx.salesReservation)("selection", ctx.selectedSalesReservation)("rows", 10)("paginator", !ctx.isLoadingReservation && ctx.salesReservation.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.offers)("selection", ctx.selectedOffer)("rows", 10)("paginator", !ctx.isLoadingOffers && ctx.offers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("scrollable", true)("paginator", ctx.files.length > 0)("rows", 10)("value", ctx.files)("selection", ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_18__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_20__.Menubar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_21__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_22__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_22__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_22__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_22__.SortIcon, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_9__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n\n.company-information-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.75rem 1.125rem;\n}\n\n.company-information[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n\n.company-information[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n  font-weight: 500;\n  font-size: 1.0625rem;\n}\n\n.company-information[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.company-information[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.info-loading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 16.267rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icons[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n}\n\n.company-page[_ngcontent-%COMP%]  .p-menubar .p-submenu-list {\n  width: 13.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLWNoYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNJO0VBQ0UsZ0JBQUE7QUFDTjs7QUFFSTtFQUNFLGdCQUFBO0FBQU47O0FBS0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBRkY7O0FBUU07RUFDRSx5QkFBQTtBQUxSIiwiZmlsZSI6InNhbGVzLWNoYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbXBhbnktaW5mb3JtYXRpb24tY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtIDEuMTI1cmVtO1xyXG59XHJcblxyXG4uY29tcGFueS1pbmZvcm1hdGlvbiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjA2MjVyZW07XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbmZvLWxvYWRpbmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTYuMjY3cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5jb21wYW55LXBhZ2Uge1xyXG4gICY6Om5nLWRlZXAge1xyXG4gICAgLnAtbWVudWJhciB7XHJcbiAgICAgIC5wLXN1Ym1lbnUtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEzLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 61867:
/*!*************************************************************************!*\
  !*** ./src/app/sales/components/sales-chains/sales-chains.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesChainsComponent": () => (/* binding */ SalesChainsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_sales_chain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sales-chain-service */ 96976);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_multi_company_picker_multi_company_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/multi-company-picker/multi-company-picker.component */ 85594);
/* harmony import */ var _shared_pickers_multi_sales_status_picker_multi_sales_status_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pickers/multi-sales-status-picker/multi-sales-status-picker.component */ 25541);
/* harmony import */ var _shared_pickers_multi_company_category_picker_multi_company_category_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pickers/multi-company-category-picker/multi-company-category-picker.component */ 37385);


















const _c0 = ["paginator"];
function SalesChainsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function SalesChainsComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function SalesChainsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Status Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function SalesChainsComponent_ng_template_37_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chain_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](chain_r11.chain_status.status.name);
} }
function SalesChainsComponent_ng_template_37_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function SalesChainsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 35)(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 30)(4, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SalesChainsComponent_ng_template_37_ng_container_10_Template, 2, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SalesChainsComponent_ng_template_37_ng_container_11_Template, 3, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const chain_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", chain_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "/crm/business-partners/company-page/" + chain_r11.company_id, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](chain_r11.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 9, chain_r11.created_at, "dd/MM/y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chain_r11.chain_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !chain_r11.chain_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 12, chain_r11.chain_status == null ? null : chain_r11.chain_status.date, "dd/MM/y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", chain_r11.comment, " ");
} }
function SalesChainsComponent_ng_template_38_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 41);
} }
function SalesChainsComponent_ng_template_38_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SalesChainsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SalesChainsComponent_ng_template_38_i_2_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SalesChainsComponent_ng_template_38_span_3_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function SalesChainsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SalesChainsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43)(1, "p-paginator", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onPageChange", function SalesChainsComponent_div_40_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesChainsComponent_div_40_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r7.salesChain.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r7.countChains);
} }
function SalesChainsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesChainsComponent_div_41_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function SalesChainsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p-menubar", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r10.selectedSalesChain);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("model", ctx_r10.menuItems);
} }
class SalesChainsComponent {
    constructor(fb, salesChainService, modalService, router, route) {
        this.fb = fb;
        this.salesChainService = salesChainService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url + 'dash/';
        this.menuItems = [{
                label: 'Selected Sales Chain',
                items: [
                    {
                        label: 'Chain Page',
                        icon: 'pi pi-folder',
                        command: () => this.onGoToChainPage(this.selectedSalesChain)
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveChain()
                    }
                ]
            }];
        this.tableScrollHeight = '24.125rem';
        this.isHideFilters = false;
        this.isStartOnePage = false;
        this.isShowAll = false;
        this.isLoading = true;
        this.salesChain = [];
        this.searchForm = this.fb.group({
            status_ids: [null],
            company_ids: [null],
            country_ids: [null],
            regions_ids: [null],
            order_by_name: [null],
            order_by_date: [null],
            order_by_status: [null],
            company__categories__in: [null],
            page: [1],
        });
        this.countChains = 0;
        this.queryKey = 'company_ids:null/company__categories__in:null/status_ids:null';
        this.query = [
            { name: 'paginated', value: 'true' },
            { name: 'page', value: this.searchForm.get('page').value },
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.getSalesChainsForPagination();
    }
    createSaleChain() {
        this.salesChainService.createEditSalesChainModal().subscribe(salesChain => {
            if (salesChain) {
                this.searchChains();
            }
        });
    }
    getSalesChainsForPagination() {
        this.salesChainService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(sales => {
            this.salesChain = sales.results;
            this.countChains = sales.count;
            if (this.isStartOnePage) {
                this.paginator.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    getSalesChains() {
        this.salesChainService.get(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(salesChains => {
            this.salesChain = salesChains;
            this.countChains = salesChains.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    searchChains() {
        this.isLoading = true;
        this.destroy$.next(true);
        this.selectedSalesChain = null;
        const newQueryKey = `'company_ids:${this.searchForm.get('company_ids').value}/company__categories__in:${this.searchForm.get('company__categories__in').value}/status_ids:${this.searchForm.get('status_ids').value}'`;
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
        if (this.searchForm.get('company_ids').value) {
            this.query.push({
                name: 'company_ids',
                value: this.searchForm.get('company_ids').value,
            });
        }
        if (this.searchForm.get('company__categories__in').value !== null) {
            this.query.push({
                name: 'company__categories__in',
                value: this.searchForm.get('company__categories__in').value
            });
        }
        if (this.searchForm.get('status_ids').value) {
            this.query.push({
                name: 'status_ids',
                value: this.searchForm.get('status_ids').value,
            });
        }
        if (!this.isShowAll) {
            this.getSalesChainsForPagination();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getSalesChains();
        }
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
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchChains();
        }
    }
    onSelectCompanies(ids) {
        this.searchForm.get('company_ids').patchValue(ids);
        this.searchChains();
    }
    onSelectStatuses(ids) {
        this.searchForm.get('status_ids').patchValue(ids);
        this.searchChains();
    }
    onSelectCompanyCategories(ids) {
        this.searchForm.get('company__categories__in').patchValue(ids);
        this.searchChains();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onRemoveChain() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.salesChainService.delete(this.selectedSalesChain).subscribe(() => {
                    this.selectedSalesChain = null;
                    this.searchChains();
                });
            }
        });
    }
    onGoToCompany(salesChain) {
        window.open(`${this.link}crm/businnes-partners/company-page/` + salesChain.company_id, '_blank');
    }
    onGoToChainPage(salesChain) {
        // Add product is missing in new version
        window.open(`${this.link}sales/sales-chains/chain-page/` + salesChain.id, '_blank');
        // this.router.navigate(['chain-page', salesChain.id], {relativeTo: this.route})
    }
}
SalesChainsComponent.ɵfac = function SalesChainsComponent_Factory(t) { return new (t || SalesChainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_1__.SalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute)); };
SalesChainsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SalesChainsComponent, selectors: [["pek-sales-procurement-chains"]], viewQuery: function SalesChainsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 44, vars: 20, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Sales Chain", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], ["tooltipPosition", "left", 1, "icon", "pi", 3, "pTooltip", "click"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], [3, "selectCompanies"], [3, "selectStatuses"], [3, "selectCompanyCategories"], [1, "table-pagination-preloader"], ["selectionMode", "single", "rowExpandMode", "single", "dataKey", "id", 3, "scrollHeight", "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "text-center", 2, "width", "5%"], [2, "width", "30%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "10%"], [2, "width", "20%"], [1, "table-row", 3, "pSelectableRow"], [3, "href"], [4, "ngIf"], [1, "text-warning"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function SalesChainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Sales Chains");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesChainsComponent_Template_button_click_7_listener() { return ctx.createSaleChain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SalesChainsComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesChainsComponent_Template_button_click_13_listener() { return ctx.toggleFilterVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "form", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "pek-multi-company-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectCompanies", function SalesChainsComponent_Template_pek_multi_company_picker_selectCompanies_20_listener($event) { return ctx.onSelectCompanies($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "pek-multi-sales-status-picker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectStatuses", function SalesChainsComponent_Template_pek_multi_sales_status_picker_selectStatuses_25_listener($event) { return ctx.onSelectStatuses($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Company Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "pek-multi-company-category-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectCompanyCategories", function SalesChainsComponent_Template_pek_multi_company_category_picker_selectCompanyCategories_30_listener($event) { return ctx.onSelectCompanyCategories($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, SalesChainsComponent_ng_container_32_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 19)(34, "p-table", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function SalesChainsComponent_Template_p_table_selectionChange_34_listener($event) { return ctx.selectedSalesChain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, SalesChainsComponent_ng_template_36_Template, 13, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, SalesChainsComponent_ng_template_37_Template, 17, 15, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, SalesChainsComponent_ng_template_38_Template, 4, 3, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, SalesChainsComponent_div_39_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, SalesChainsComponent_div_40_Template, 5, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SalesChainsComponent_div_41_Template, 3, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, SalesChainsComponent_ng_template_42_Template, 2, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("module", "sales")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.isHideFilters ? "Expand Filters" : "Collapse Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("scrollHeight", "calc(100vh - " + ctx.tableScrollHeight + ")")("scrollable", true)("rows", 10)("selection", ctx.selectedSalesChain)("value", ctx.salesChain);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, primeng_menubar__WEBPACK_IMPORTED_MODULE_15__.Menubar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_17__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_18__.Paginator, _shared_pickers_multi_company_picker_multi_company_picker_component__WEBPACK_IMPORTED_MODULE_4__.MultiCompanyPickerComponent, _shared_pickers_multi_sales_status_picker_multi_sales_status_picker_component__WEBPACK_IMPORTED_MODULE_5__.MultiSalesStatusPickerComponent, _shared_pickers_multi_company_category_picker_multi_company_category_picker_component__WEBPACK_IMPORTED_MODULE_6__.MultiCompanyCategoryPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n\n.page__card[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLWNoYWlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNhbGVzLWNoYWlucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtMC4yNXJlbTtcclxufVxyXG5cclxuLnBhZ2VfX2NhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 51026:
/*!*************************************************************************!*\
  !*** ./src/app/sales/components/sales-layout/sales-layout.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesLayoutComponent": () => (/* binding */ SalesLayoutComponent)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);




class SalesLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Sales Chains', commands: ['sales-procurement-chains'] },
            {
                label: 'Prices',
                commands: [`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/sales/sales-configs/nomenclature-price`],
                isExternal: true
            },
        ];
        this.settingsRoutes = [
            { label: 'Statuses', commands: ['statuses'] },
            { label: 'Countries & Regions', commands: ['regions'] },
        ];
    }
    ngOnInit() {
    }
}
SalesLayoutComponent.ɵfac = function SalesLayoutComponent_Factory(t) { return new (t || SalesLayoutComponent)(); };
SalesLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SalesLayoutComponent, selectors: [["pek-sales-layout"]], decls: 2, vars: 3, consts: [[3, "module", "routes", "settingsRoutes"]], template: function SalesLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "Sales")("routes", ctx.routes)("settingsRoutes", ctx.settingsRoutes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 20894:
/*!***********************************************************************!*\
  !*** ./src/app/sales/components/sales-lists/sales-lists.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesListsComponent": () => (/* binding */ SalesListsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 87958);
/* harmony import */ var _warehouse_services_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../warehouse/services/list.service */ 89307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 42722);
















const _c0 = ["paginator"];
const _c1 = ["dt"];
const _c2 = ["searchBoxName"];
const _c3 = ["searchBoxCode"];
function SalesListsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function SalesListsComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 33)(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pcs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", product_r10)("pRowToggler", product_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r4.searchForm.get("page").value - 1) * 10 + i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r10.description);
} }
function SalesListsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 35)(1, "td", 36)(2, "form", 37)(3, "div", 38)(4, "div", 13)(5, "div", 14)(6, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Number Of Sets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 41)(10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true);
} }
function SalesListsComponent_ng_template_33_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 47);
} }
function SalesListsComponent_ng_template_33_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SalesListsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SalesListsComponent_ng_template_33_i_2_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SalesListsComponent_ng_template_33_span_3_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function SalesListsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SalesListsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "p-paginator", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function SalesListsComponent_div_35_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListsComponent_div_35_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r8.nomenclatures.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r8.countNomenclatures);
} }
function SalesListsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53)(1, "p-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListsComponent_div_36_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class SalesListsComponent {
    constructor(fb, nomenclatureService, listService) {
        this.fb = fb;
        this.nomenclatureService = nomenclatureService;
        this.listService = listService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.isSaving = false;
        this.searchForm = this.fb.group({
            name: [null],
            code: [null],
            page: [1]
        });
        this.tableScrollHeight = '24.125rem';
        this.isHideFilters = false;
        this.form = this.fb.group({
            nomenclature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]],
            is_grouped: [false]
        });
        this.isStartOnePage = false;
        this.isShowAll = false;
        this.nomenclatures = [];
        this.isLoading = true;
        this.countNomenclatures = 0;
        this.queryKey = 'name:null/code:null';
        this.query = [
            { name: 'type', value: '1' },
            { name: 'paginated', value: 'true' },
            { name: 'page', value: this.searchForm.get('page').value },
        ];
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.searchBoxName.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.selectedNomenclature = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.searchBoxName.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(350)).subscribe(() => {
            this.searchNomenclatures();
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.searchBoxCode.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.selectedNomenclature = null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.searchBoxCode.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(350)).subscribe(() => {
            this.searchNomenclatures();
        });
    }
    ngOnInit() {
        this.getNomenclaturesForPagination();
    }
    getNomenclatures() {
        this.nomenclatureService.get(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(nomenclatures => {
            this.nomenclatures = nomenclatures;
            this.countNomenclatures = nomenclatures.length;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    getNomenclaturesForPagination() {
        this.nomenclatureService.getForPagination(this.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(nomenclatures => {
            this.nomenclatures = nomenclatures.results;
            this.countNomenclatures = nomenclatures.count;
            if (this.isStartOnePage) {
                this.paginator.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    searchNomenclatures() {
        this.isLoading = true;
        this.destroy$.next(true);
        this.selectedNomenclature = null;
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}`;
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
        this.query.push({ name: 'type', value: '1' });
        if (this.searchForm.get('code').value) {
            this.query.push({ name: 'code', value: this.searchForm.get('code').value });
        }
        if (this.searchForm.get('name').value)
            this.query.push({ name: 'name', value: this.searchForm.get('name').value });
        if (!this.isShowAll) {
            this.getNomenclaturesForPagination();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getNomenclatures();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.setTableScrollHeight();
        this.searchNomenclatures();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.setTableScrollHeight();
        this.searchNomenclatures();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchNomenclatures();
        }
    }
    onSelectionChange() {
        if (this.selectedNomenclature) {
            this.form.get('nomenclature').patchValue(this.selectedNomenclature.id);
        }
        else {
            this.form.get('nomenclature').patchValue(null);
        }
    }
    onMakeProductionList() {
        if (this.form.valid) {
            this.isSaving = true;
            this.listService.makeProductionList(this.form.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => this.isSaving = false)).subscribe();
        }
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
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
SalesListsComponent.ɵfac = function SalesListsComponent_Factory(t) { return new (t || SalesListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__.NomenclatureService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_warehouse_services_list_service__WEBPACK_IMPORTED_MODULE_1__.ListService)); };
SalesListsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SalesListsComponent, selectors: [["pek-sales-lists"]], viewQuery: function SalesListsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
    } }, decls: 37, vars: 20, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Make", 1, "p-button-success", "p-button-icon", 3, "disabled", "loading", "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], ["tooltipPosition", "left", 1, "icon", "pi", 3, "pTooltip", "click"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], [1, "table-pagination-preloader"], ["selectionMode", "single", "rowExpandMode", "single", "dataKey", "id", 3, "scrollHeight", "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "30%"], [1, "text-center", 2, "width", "10%"], [2, "width", "25%"], [3, "pSelectableRow", "pRowToggler"], [1, "text-center", 2, "width", "5%"], [1, "disabled"], ["colspan", "5"], [3, "formGroup"], [1, "row", "align-items-center"], ["for", "quantity"], ["id", "quantity", "min", "1", "type", "number", "pInputText", "", "formControlName", "quantity", 1, "form-control"], [1, "col-6", "d-flex", "align-items-center"], [1, "form-group", "checkbox"], ["label", "Group Production Plan", "formControlName", "is_grouped", 3, "binary"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function SalesListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Make Production List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListsComponent_Template_button_click_7_listener() { return ctx.onMakeProductionList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListsComponent_Template_button_click_12_listener() { return ctx.toggleFilterVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19)(28, "p-table", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function SalesListsComponent_Template_p_table_selectionChange_28_listener($event) { return ctx.selectedNomenclature = $event; })("selectionChange", function SalesListsComponent_Template_p_table_selectionChange_28_listener() { return ctx.onSelectionChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, SalesListsComponent_ng_template_30_Template, 11, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SalesListsComponent_ng_template_31_Template, 11, 6, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SalesListsComponent_ng_template_32_Template, 12, 2, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, SalesListsComponent_ng_template_33_Template, 4, 3, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SalesListsComponent_div_34_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SalesListsComponent_div_35_Template, 5, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, SalesListsComponent_div_36_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "sales")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid)("loading", ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pTooltip", ctx.isHideFilters ? "Expand Filters" : "Collapse Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollHeight", "calc(100vh - " + ctx.tableScrollHeight + ")")("scrollable", true)("rows", 10)("selection", ctx.selectedNomenclature)("value", ctx.nomenclatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_18__.RowToggler, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator], styles: [".checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.125rem;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n\n.page__card[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNhbGVzLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94IHtcclxuICBtYXJnaW4tdG9wOiAyLjEyNXJlbTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG59XHJcblxyXG4ucGFnZV9fY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6398:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/components/sales-statuses/sales-statuses.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesStatusesComponent": () => (/* binding */ SalesStatusesComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_sales_status_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sales-status.service */ 50371);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);









function SalesStatusesComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Sales Status to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SalesStatusesComponent_div_19_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 25);
} }
function SalesStatusesComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesStatusesComponent_div_19_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const status_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.toggleLine(status_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SalesStatusesComponent_div_19_div_2_div_1_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const status_r4 = ctx.$implicit;
    const idx_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r3.selectedSalesStatus && ctx_r3.selectedSalesStatus.id === status_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](idx_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", status_r4.name, " ");
} }
function SalesStatusesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function SalesStatusesComponent_div_19_Template_div_cdkDropListDropped_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.drop($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SalesStatusesComponent_div_19_div_2_Template, 7, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r1.statuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.statuses);
} }
function SalesStatusesComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SalesStatusesComponent {
    constructor(salesStatusService, modalService) {
        this.salesStatusService = salesStatusService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Sales Status',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditSalesStatus()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveSalesStatus()
                    }
                ]
            }];
        this.isLoading = true;
        this.statuses = [];
    }
    ngOnInit() {
        this.salesStatusService.get().subscribe(statuses => {
            this.statuses = statuses;
            this.isLoading = false;
        });
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        if (event.previousIndex !== event.currentIndex) {
            const currentStatus = this.statuses[event.currentIndex];
            const newOrder = this.statuses.findIndex(s => s.id === currentStatus.id);
            this.salesStatusService.changeOrder(currentStatus, newOrder).subscribe();
        }
    }
    onAddSalesStatus() {
        this.salesStatusService.createEditSalesStatusModal('create').subscribe(status => {
            if (status) {
                this.statuses.push(status);
            }
        });
    }
    toggleLine(status) {
        if (this.selectedSalesStatus === status) {
            this.selectedSalesStatus = null;
        }
        else {
            this.selectedSalesStatus = status;
        }
    }
    onEditSalesStatus() {
        this.salesStatusService.createEditSalesStatusModal('edit', this.selectedSalesStatus).subscribe(status => {
            if (status) {
                const index = this.statuses.findIndex(t => t.id === this.selectedSalesStatus.id);
                this.statuses[index] = status;
                this.selectedSalesStatus = this.statuses[index];
            }
        });
    }
    onRemoveSalesStatus() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.salesStatusService.delete(this.selectedSalesStatus).subscribe(() => {
                    const index = this.statuses.findIndex(w => w.id === this.selectedSalesStatus.id);
                    this.statuses.splice(index, 1);
                    this.selectedSalesStatus = null;
                });
            }
        });
    }
}
SalesStatusesComponent.ɵfac = function SalesStatusesComponent_Factory(t) { return new (t || SalesStatusesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sales_status_service__WEBPACK_IMPORTED_MODULE_0__.SalesStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
SalesStatusesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SalesStatusesComponent, selectors: [["pek-sales-statuses"]], decls: 21, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Status Type", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "d-flex", "actions"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "order-statuses"], [1, "order-statuses-header"], [1, "table-col", "text-center", 2, "width", "5%"], [1, "table-col", 2, "width", "95%"], ["class", "order-statuses-body", 4, "ngIf"], ["class", "p-4 order-statuses-loading", 4, "ngIf"], [1, "subtitle"], [1, "order-statuses-body"], ["cdkDropList", "", 1, "order-statuses-list", "order-statuses_dragging", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "order-statuses-line order-statuses-line_dragging", "cdkDrag", "", "cdkDragBoundary", ".workloads_dragging", 3, "active", "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragBoundary", ".workloads_dragging", 1, "order-statuses-line", "order-statuses-line_dragging", 3, "click"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "order-statuses-item"], [1, "table-col", 2, "width", "80%"], [1, "example-custom-placeholder"], [1, "p-4", "order-statuses-loading"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"]], template: function SalesStatusesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Statuses Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesStatusesComponent_Template_button_click_7_listener() { return ctx.onAddSalesStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SalesStatusesComponent_p_11_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-menubar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SalesStatusesComponent_div_19_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SalesStatusesComponent_div_20_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "sales")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedSalesStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.selectedSalesStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragPlaceholder], styles: [".order-statuses[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.order-statuses[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.order-statuses-body[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.order-statuses-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background: #f8f9fa;\n  border-bottom: solid 1px #e9ecef;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  min-height: 35px;\n}\n.order-statuses-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n.order-statuses-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.table-col[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n}\n.order-statuses-body[_ngcontent-%COMP%] {\n  font: inherit;\n  overflow: auto;\n  max-height: calc(100vh - 19rem);\n}\n.order-statuses-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 0.625rem;\n  background-color: #d1d2d8;\n}\n.order-statuses-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  cursor: auto;\n  width: 0.5rem;\n  background-color: #f8f9fa;\n}\n.order-statuses_dragging[_ngcontent-%COMP%] {\n  display: block;\n}\n.order-statuses-line[_ngcontent-%COMP%] {\n  transition: background 0.1s, color 0.1s;\n}\n.order-statuses-line.active[_ngcontent-%COMP%] {\n  background: #EFF6FF !important;\n  color: var(--theme-color-primary);\n}\n.order-statuses-line[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.order-statuses-line_dragging[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #e9ecef;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  font-size: 16px;\n  background: #fff;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.order-statuses_dragging.cdk-drop-list-dragging[_ngcontent-%COMP%]   .order-statuses-line_dragging[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.order-statuses_dragging.cdk-drop-list-dragging[_ngcontent-%COMP%]   .order-statuses-line_dragging[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 35px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: 4px;\n}\n.order-statuses-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXN0YXR1c2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrSkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUdBO0VBQ0UsaUNBQUE7RUFDQSxrQ0FBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxzQkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQURGO0FBR0U7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFGSjtBQU9BO0VBQ0UsY0FBQTtBQUpGO0FBT0E7RUFDRSx1Q0FBQTtBQUpGO0FBTUU7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0FBSko7QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFRQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEY7QUFRQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUxGO0FBVUE7RUFDRSxzREFBQTtBQVBGO0FBVUE7RUFDRSxzREFBQTtBQVBGO0FBVUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFQRjtBQVlBO0VBQ0Usc0RBQUE7QUFURjtBQVlBO0VBQ0Usc0RBQUE7QUFURjtBQVlBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtBQVRGO0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBVEYiLCJmaWxlIjoic2FsZXMtc3RhdHVzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItc3RhdHVzZXMge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sOztcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzZXMtYm9keSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzZXMtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2U5ZWNlZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVyZW07XHJcbiAgbWluLWhlaWdodDogMzVweDtcclxuXHJcbiAgZGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1zdGF0dXNlcy1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG4udGFibGUtY29sIHtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLm9yZGVyLXN0YXR1c2VzLWJvZHkge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE5cmVtKTtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMmQ4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgd2lkdGg6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm9yZGVyLXN0YXR1c2VzX2RyYWdnaW5nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm9yZGVyLXN0YXR1c2VzLWxpbmUge1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcywgY29sb3IgMC4xcztcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI0VGRjZGRiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgfVxyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzZXMtbGluZV9kcmFnZ2luZyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlOWVjZWY7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzZXNfZHJhZ2dpbmcuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAub3JkZXItc3RhdHVzZXMtbGluZV9kcmFnZ2luZzpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzZXNfZHJhZ2dpbmcuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAub3JkZXItc3RhdHVzZXMtbGluZV9kcmFnZ2luZzpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XHJcbiAgbWluLWhlaWdodDogMzVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ub3JkZXItc3RhdHVzZXMtbG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 48585:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/modals/create-choice-product-modal/create-choice-product-modal.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateChoiceProductModalComponent": () => (/* binding */ CreateChoiceProductModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class CreateChoiceProductModalComponent {
    constructor(fb, productStructureCategoryService) {
        this.fb = fb;
        this.productStructureCategoryService = productStructureCategoryService;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
        this.isLoading = false;
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.productStructureCategoryService.get().subscribe();
    }
}
CreateChoiceProductModalComponent.ɵfac = function CreateChoiceProductModalComponent_Factory(t) { return new (t || CreateChoiceProductModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_0__.ProductStructureCategoryService)); };
CreateChoiceProductModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateChoiceProductModalComponent, selectors: [["pek-create-choice-product-modal"]], decls: 27, vars: 4, consts: [[1, "modal-header-container", "d-flex", "justify-content-between"], ["mat-dialog-title", "", 1, "modal-heading"], [3, "formGroup"], [1, "row"], [1, "col-4"], [1, "form-group"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", "", 1, "form-control"], ["for", "code"], ["formControlName", "code", "id", "code", "type", "text", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["for", "description"], ["formControlName", "description", "id", "description", "type", "text", "pInputText", "", 1, "form-control"], ["searchBoxDescription", ""], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Save", 1, "p-button-success", 3, "loading", "disabled"]], template: function CreateChoiceProductModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Choice Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4)(19, "div", 5)(20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "button", 15)(26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2hvaWNlLXByb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 24910:
/*!***********************************************************************************!*\
  !*** ./src/app/sales/modals/create-edit-country/create-edit-country.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditCountryComponent": () => (/* binding */ CreateEditCountryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/country.service */ 12334);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 69906);








class CreateEditCountryComponent {
    constructor(fb, dialogRef, countryService, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.countryService = countryService;
        this.data = data;
        this.form = this.fb.group({
            id: [null],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            alpha2_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
        });
    }
    ngOnInit() {
        if (this.data.country) {
            this.form.patchValue(this.data.country);
        }
    }
    onSave() {
        if (this.form.value.id) {
            this.countryService.update(this.form.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
        else {
            this.countryService.create(this.form.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
    }
}
CreateEditCountryComponent.ɵfac = function CreateEditCountryComponent_Factory(t) { return new (t || CreateEditCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_country_service__WEBPACK_IMPORTED_MODULE_0__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditCountryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditCountryComponent, selectors: [["pek-create-edit-country"]], decls: 16, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], ["for", "alpha2_code"], ["type", "text", "id", "alpha2_code", "pInputText", "", "formControlName", "alpha2_code", "maxlength", "2"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditCountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Code*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditCountryComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.form.get("id").value ? "Edit" : "Create", " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.form.get("id").value ? "Edit" : "Create")("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 50080:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/modals/create-edit-region/create-edit-region.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditRegionComponent": () => (/* binding */ CreateEditRegionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_region_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/region.service */ 28957);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _shared_pickers_crm_company_picker_crm_company_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/crm-company-picker/crm-company-picker.component */ 97198);









class CreateEditRegionComponent {
    constructor(fb, dialogRef, regionService, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.regionService = regionService;
        this.data = data;
        this.form = this.fb.group({
            id: [null],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            country: [null],
        });
        if (this.data.region) {
            this.form.get('id').setValue(this.data.region.id);
            this.form.get('name').setValue(this.data.region.name);
            if (this.data.region.country) {
                this.form.get('country').setValue(this.data.region.country.id);
            }
        }
        if (this.data.selectedCountry) {
            this.form.get('country').setValue(this.data.selectedCountry);
        }
    }
    ngOnInit() {
    }
    onSave() {
        if (this.form.value.id) {
            this.regionService.update(this.form.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
        else {
            this.regionService.create(this.form.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
    }
}
CreateEditRegionComponent.ɵfac = function CreateEditRegionComponent_Factory(t) { return new (t || CreateEditRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_region_service__WEBPACK_IMPORTED_MODULE_0__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateEditRegionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateEditRegionComponent, selectors: [["pek-create-edit-region"]], decls: 16, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], [3, "country", "valueChange"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditRegionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Country*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "pek-crm-company-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CreateEditRegionComponent_Template_pek_crm_company_picker_valueChange_12_listener($event) { return ctx.form.get("country").setValue($event.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEditRegionComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.form.get("id").value ? "Edit" : "Create", " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("country", ctx.form.get("country").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.form.get("id").value ? "Edit" : "Create")("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _shared_pickers_crm_company_picker_crm_company_picker_component__WEBPACK_IMPORTED_MODULE_1__.CrmCompanyPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1yZWdpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98909:
/*!*****************************************************************************************!*\
  !*** ./src/app/sales/modals/create-edit-sub-region/create-edit-sub-region.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditSubRegionComponent": () => (/* binding */ CreateEditSubRegionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_sub_region_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/sub-region.service */ 48424);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _shared_pickers_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/region-picker/region-picker.component */ 80966);









class CreateEditSubRegionComponent {
    constructor(fb, subRegionService, dialogRef, data) {
        this.fb = fb;
        this.subRegionService = subRegionService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = this.fb.group({
            id: [null],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            subRegion: [null],
            region: [null],
            country: [null],
        });
    }
    ngOnInit() {
        if (this.data.subRegion) {
            this.form.get('id').setValue(this.data.subRegion.id);
            this.form.get('name').setValue(this.data.subRegion.name);
            if (this.data.selectedRegion) {
                this.form.get('region').setValue(this.data.selectedRegion);
            }
        }
        if (this.data.selectedRegion) {
            this.form.get('region').setValue(this.data.selectedRegion);
        }
        if (this.data.countrySelected) {
            this.form.get('country').setValue(this.data.countrySelected);
        }
    }
    onSave() {
        if (this.form.value.id) {
            this.subRegionService.update(this.form.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
        else {
            this.subRegionService.create(this.form.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
    }
    regionSelected(regionId) {
        this.form.get('region').patchValue(regionId, { emitEvent: false });
    }
}
CreateEditSubRegionComponent.ɵfac = function CreateEditSubRegionComponent_Factory(t) { return new (t || CreateEditSubRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_sub_region_service__WEBPACK_IMPORTED_MODULE_0__.SubRegionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateEditSubRegionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateEditSubRegionComponent, selectors: [["pek-create-edit-sub-region"]], decls: 16, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], [3, "countrySelected", "selectedRegionId", "selectRegion"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditSubRegionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Region*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "pek-region-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectRegion", function CreateEditSubRegionComponent_Template_pek_region_picker_selectRegion_12_listener($event) { return ctx.regionSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEditSubRegionComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.form.get("id").value ? "Edit" : "Create", " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("countrySelected", ctx.form.get("country").value)("selectedRegionId", ctx.form.get("region").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.form.get("id").value ? "Edit" : "Create")("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _shared_pickers_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_1__.RegionPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1zdWItcmVnaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8823:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/modals/create-sales-chain/create-sales-chain.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSalesChainComponent": () => (/* binding */ CreateSalesChainComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_sales_chain_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sales-chain-service */ 96976);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/company-picker/company-picker.component */ 66242);







class CreateSalesChainComponent {
    constructor(fb, salesChainService, dialogRef) {
        this.fb = fb;
        this.salesChainService = salesChainService;
        this.dialogRef = dialogRef;
        this.isSaving = false;
        this.form = this.fb.group({
            company: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    ngOnInit() {
    }
    onSave() {
        if (this.form.valid) {
            const send = {
                company_id: this.form.get('company').value,
                statuses: [],
            };
            this.salesChainService.create(send).subscribe(salesChain => this.dialogRef.close(salesChain));
        }
    }
    onSelectCompany(id) {
        this.form.get('company').patchValue(id);
    }
}
CreateSalesChainComponent.ɵfac = function CreateSalesChainComponent_Factory(t) { return new (t || CreateSalesChainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_0__.SalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
CreateSalesChainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateSalesChainComponent, selectors: [["pek-create-sales-chain"]], decls: 12, vars: 4, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "selectCompany"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Create Sale Chain", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function CreateSalesChainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Create Sales Chain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "pek-company-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectCompany", function CreateSalesChainComponent_Template_pek_company_picker_selectCompany_8_listener($event) { return ctx.onSelectCompany($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-dialog-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateSalesChainComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _shared_pickers_company_picker_company_picker_component__WEBPACK_IMPORTED_MODULE_1__.CompanyPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc2FsZXMtY2hhaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 94877:
/*!*******************************************************************************************!*\
  !*** ./src/app/sales/modals/create-sales-file-modal/create-sales-file-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSalesFileModalComponent": () => (/* binding */ CreateSalesFileModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_sales_chain_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sales-chain-service */ 96976);
/* harmony import */ var _services_sales_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sales-file.service */ 27495);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/upload-file/upload-file.component */ 75288);







class CreateSalesFileModalComponent {
    constructor(salesChainService, dialogRef, salesFileService, data) {
        this.salesChainService = salesChainService;
        this.dialogRef = dialogRef;
        this.salesFileService = salesFileService;
        this.data = data;
        this.uploadFiles = [];
        this.files = [];
        this.isLoading = true;
        this.isPending = false;
    }
    ngOnInit() {
    }
    onSelectFiles(files) {
        this.uploadFiles = files;
    }
    onUploadFiles() {
        this.isPending = true;
        this.salesFileService.upload(this.uploadFiles).subscribe(res => {
            this.dialogRef.close();
        });
    }
}
CreateSalesFileModalComponent.ɵfac = function CreateSalesFileModalComponent_Factory(t) { return new (t || CreateSalesFileModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_0__.SalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sales_file_service__WEBPACK_IMPORTED_MODULE_1__.SalesFileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateSalesFileModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateSalesFileModalComponent, selectors: [["pek-create-sales-file-modal"]], decls: 8, vars: 4, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "multiple", "selectFile"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Upload", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function CreateSalesFileModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Add File To Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content")(4, "pek-upload-file", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectFile", function CreateSalesFileModalComponent_Template_pek_upload_file_selectFile_4_listener($event) { return ctx.onSelectFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateSalesFileModalComponent_Template_button_click_7_listener() { return ctx.onUploadFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx.isPending)("disabled", ctx.uploadFiles.length === 0);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_2__.UploadFileComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc2FsZXMtZmlsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 74686:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/modals/edit-event-modal/edit-event-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEventModalComponent": () => (/* binding */ EditEventModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_event_sales_chain_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-sales-chain.service */ 22402);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 69906);








class EditEventModalComponent {
    constructor(fb, eventSalesChainService, dialogRef, data) {
        this.fb = fb;
        this.eventSalesChainService = eventSalesChainService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    ngOnInit() {
        this.form.get('comment').patchValue(this.data.eventCompany.comment);
    }
    onSave() {
        if (this.form.valid) {
            this.isSaving = true;
            const send = {
                comment: this.form.get('comment').value
            };
            this.eventSalesChainService.updateComment(this.data.eventCompany.id, send).subscribe(res => this.dialogRef.close());
        }
    }
}
EditEventModalComponent.ɵfac = function EditEventModalComponent_Factory(t) { return new (t || EditEventModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_sales_chain_service__WEBPACK_IMPORTED_MODULE_0__.EventSalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
EditEventModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditEventModalComponent, selectors: [["pek-edit-event-modal"]], decls: 12, vars: 4, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "comment"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Edit", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function EditEventModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Edit Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Comment*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditEventModalComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWV2ZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9318:
/*!*******************************************************************************************************!*\
  !*** ./src/app/sales/modals/edit-nomenclature-price-modal/edit-nomenclature-price-modal.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNomenclaturePriceModalComponent": () => (/* binding */ EditNomenclaturePriceModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 87958);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);





class EditNomenclaturePriceModalComponent {
    constructor(nomenclature, dialogRef, nomenclatureService) {
        this.nomenclature = nomenclature;
        this.dialogRef = dialogRef;
        this.nomenclatureService = nomenclatureService;
    }
    ngOnInit() {
    }
    onSave() {
        const data = {
            id: this.nomenclature.id,
            price: this.nomenclature.price,
        };
        this.nomenclatureService.updatePartly(data).subscribe();
        this.dialogRef.close();
    }
}
EditNomenclaturePriceModalComponent.ɵfac = function EditNomenclaturePriceModalComponent_Factory(t) { return new (t || EditNomenclaturePriceModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__.NomenclatureService)); };
EditNomenclaturePriceModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditNomenclaturePriceModalComponent, selectors: [["pek-edit-nomenclature-price-modal"]], decls: 0, vars: 0, template: function EditNomenclaturePriceModalComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW5vbWVuY2xhdHVyZS1wcmljZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92115:
/*!***********************************************************************************!*\
  !*** ./src/app/sales/modals/edit-statuses-modal/edit-statuses-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStatusesModalComponent": () => (/* binding */ EditStatusesModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_sales_status_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sales-status.service */ 50371);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _services_sales_chain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sales-chain-service */ 96976);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ 32547);












class EditStatusesModalComponent {
    constructor(fb, salesStatusService, adapterService, salesChainService, dialogRef, data) {
        this.fb = fb;
        this.salesStatusService = salesStatusService;
        this.adapterService = adapterService;
        this.salesChainService = salesChainService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = this.fb.group({
            status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.isSaving = false;
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.salesStatusService.get().subscribe(status => {
                this.statuses = status;
            });
            this.form.get('status').patchValue(this.data.salesChain.chain_status.status.id);
            this.form.get('date').patchValue(new Date(this.data.salesChain.chain_status.date));
            this.form.get('comment').patchValue(this.data.salesChain.comment);
            console.log(this.data);
        }
    }
    saveStatus() {
        if (this.form.valid) {
            this.isSaving = true;
            const send = {
                comment: this.form.get('comment').value,
                chain_status: {
                    date: this.adapterService.dateAdapter(this.form.get('date').value),
                    status: this.form.get('status').value
                }
            };
            this.salesChainService.updateStatus(this.data.salesChain.id, send).subscribe(res => this.dialogRef.close());
        }
    }
}
EditStatusesModalComponent.ɵfac = function EditStatusesModalComponent_Factory(t) { return new (t || EditStatusesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_sales_status_service__WEBPACK_IMPORTED_MODULE_0__.SalesStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_2__.SalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
EditStatusesModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditStatusesModalComponent, selectors: [["pek-edit-statuses-modal"]], decls: 25, vars: 7, consts: [[1, "modal-header-container", "d-flex", "justify-content-between"], ["mat-dialog-title", "", 1, "modal-heading"], [1, "overflow-visible"], [3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], ["formControlName", "status", "placeholder", "Choose Status", "optionLabel", "name", "optionValue", "id", 3, "options"], ["placeholder", "Choose Date", "formControlName", "date", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput"], [1, "col-12"], ["for", "comment", 1, "label"], ["formControlName", "comment", "id", "comment", "type", "text", "pInputText", ""], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Save", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function EditStatusesModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Edit Statuses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-dialog-content", 2)(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5)(13, "div", 6)(14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "p-calendar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9)(18, "div", 6)(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-dialog-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditStatusesModalComponent_Template_button_click_24_listener() { return ctx.saveStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_calendar__WEBPACK_IMPORTED_MODULE_9__.Calendar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXN0YXR1c2VzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 29146:
/*!***************************************!*\
  !*** ./src/app/sales/sales.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesModule": () => (/* binding */ SalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _sales_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.routing */ 6601);
/* harmony import */ var _components_sales_lists_sales_lists_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sales-lists/sales-lists.component */ 20894);
/* harmony import */ var _components_sales_layout_sales_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sales-layout/sales-layout.component */ 51026);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _components_sales_chains_sales_chains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sales-chains/sales-chains.component */ 61867);
/* harmony import */ var _components_configs_nomenclature_price_nomenclature_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/configs/nomenclature-price/nomenclature-price.component */ 83166);
/* harmony import */ var _components_sales_statuses_sales_statuses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sales-statuses/sales-statuses.component */ 6398);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _modals_create_edit_sales_status_create_edit_sales_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/create-edit-sales-status/create-edit-sales-status.component */ 88986);
/* harmony import */ var _modals_edit_nomenclature_price_modal_edit_nomenclature_price_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/edit-nomenclature-price-modal/edit-nomenclature-price-modal.component */ 9318);
/* harmony import */ var _modals_create_sales_chain_create_sales_chain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/create-sales-chain/create-sales-chain.component */ 8823);
/* harmony import */ var _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/regions/regions.component */ 87571);
/* harmony import */ var _components_sales_chain_page_sales_chain_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sales-chain-page/sales-chain-page.component */ 55827);
/* harmony import */ var _modals_edit_event_modal_edit_event_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/edit-event-modal/edit-event-modal.component */ 74686);
/* harmony import */ var _modals_edit_statuses_modal_edit_statuses_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/edit-statuses-modal/edit-statuses-modal.component */ 92115);
/* harmony import */ var _modals_create_choice_product_modal_create_choice_product_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/create-choice-product-modal/create-choice-product-modal.component */ 48585);
/* harmony import */ var _modals_create_sales_file_modal_create_sales_file_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/create-sales-file-modal/create-sales-file-modal.component */ 94877);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var _modals_create_edit_country_create_edit_country_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/create-edit-country/create-edit-country.component */ 24910);
/* harmony import */ var _modals_create_edit_region_create_edit_region_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/create-edit-region/create-edit-region.component */ 50080);
/* harmony import */ var _modals_create_edit_sub_region_create_edit_sub_region_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/create-edit-sub-region/create-edit-sub-region.component */ 98909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
























class SalesModule {
}
SalesModule.ɵfac = function SalesModule_Factory(t) { return new (t || SalesModule)(); };
SalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: SalesModule });
SalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _sales_routing__WEBPACK_IMPORTED_MODULE_0__.SalesRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__.DragDropModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__.MultiSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](SalesModule, { declarations: [_components_sales_lists_sales_lists_component__WEBPACK_IMPORTED_MODULE_1__.SalesListsComponent,
        _components_sales_layout_sales_layout_component__WEBPACK_IMPORTED_MODULE_2__.SalesLayoutComponent,
        _components_sales_chains_sales_chains_component__WEBPACK_IMPORTED_MODULE_5__.SalesChainsComponent,
        _components_configs_nomenclature_price_nomenclature_price_component__WEBPACK_IMPORTED_MODULE_6__.NomenclaturePriceComponent,
        _components_sales_statuses_sales_statuses_component__WEBPACK_IMPORTED_MODULE_7__.SalesStatusesComponent,
        _modals_create_edit_sales_status_create_edit_sales_status_component__WEBPACK_IMPORTED_MODULE_8__.CreateEditSalesStatusComponent,
        _modals_edit_nomenclature_price_modal_edit_nomenclature_price_modal_component__WEBPACK_IMPORTED_MODULE_9__.EditNomenclaturePriceModalComponent,
        _modals_create_sales_chain_create_sales_chain_component__WEBPACK_IMPORTED_MODULE_10__.CreateSalesChainComponent,
        _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_11__.RegionsComponent,
        _components_sales_chain_page_sales_chain_page_component__WEBPACK_IMPORTED_MODULE_12__.SalesChainPageComponent,
        _modals_edit_event_modal_edit_event_modal_component__WEBPACK_IMPORTED_MODULE_13__.EditEventModalComponent,
        _modals_edit_statuses_modal_edit_statuses_modal_component__WEBPACK_IMPORTED_MODULE_14__.EditStatusesModalComponent,
        _modals_create_choice_product_modal_create_choice_product_modal_component__WEBPACK_IMPORTED_MODULE_15__.CreateChoiceProductModalComponent,
        _modals_create_sales_file_modal_create_sales_file_modal_component__WEBPACK_IMPORTED_MODULE_16__.CreateSalesFileModalComponent,
        _modals_create_edit_country_create_edit_country_component__WEBPACK_IMPORTED_MODULE_17__.CreateEditCountryComponent,
        _modals_create_edit_region_create_edit_region_component__WEBPACK_IMPORTED_MODULE_18__.CreateEditRegionComponent,
        _modals_create_edit_sub_region_create_edit_sub_region_component__WEBPACK_IMPORTED_MODULE_19__.CreateEditSubRegionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _sales_routing__WEBPACK_IMPORTED_MODULE_0__.SalesRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__.DragDropModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__.MultiSelectModule] }); })();


/***/ }),

/***/ 6601:
/*!****************************************!*\
  !*** ./src/app/sales/sales.routing.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesRouting": () => (/* binding */ SalesRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_sales_layout_sales_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sales-layout/sales-layout.component */ 51026);
/* harmony import */ var _components_configs_nomenclature_price_nomenclature_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/configs/nomenclature-price/nomenclature-price.component */ 83166);
/* harmony import */ var _components_sales_statuses_sales_statuses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sales-statuses/sales-statuses.component */ 6398);
/* harmony import */ var _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/regions/regions.component */ 87571);
/* harmony import */ var _components_sales_chains_sales_chains_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sales-chains/sales-chains.component */ 61867);
/* harmony import */ var _components_sales_chain_page_sales_chain_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sales-chain-page/sales-chain-page.component */ 55827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: '',
        component: _components_sales_layout_sales_layout_component__WEBPACK_IMPORTED_MODULE_0__.SalesLayoutComponent,
        children: [
            { path: '', redirectTo: 'sales-procurement-chains', pathMatch: 'full' },
            {
                path: 'sales-procurement-chains',
                children: [
                    { path: '', title: 'Sales Chains', component: _components_sales_chains_sales_chains_component__WEBPACK_IMPORTED_MODULE_4__.SalesChainsComponent },
                    { path: 'chain-page/:id', title: 'Sales Chain', component: _components_sales_chain_page_sales_chain_page_component__WEBPACK_IMPORTED_MODULE_5__.SalesChainPageComponent }
                ]
            },
            { path: 'statuses', title: 'Statuses Type', component: _components_sales_statuses_sales_statuses_component__WEBPACK_IMPORTED_MODULE_2__.SalesStatusesComponent },
            { path: 'regions', title: 'Countries & Regions', component: _components_regions_regions_component__WEBPACK_IMPORTED_MODULE_3__.RegionsComponent },
            {
                path: 'configs',
                children: [
                    { path: '', redirectTo: 'nomenclature-price', pathMatch: 'full' },
                    { path: 'nomenclature-price', title: 'Nomenclature Price', component: _components_configs_nomenclature_price_nomenclature_price_component__WEBPACK_IMPORTED_MODULE_1__.NomenclaturePriceComponent }
                ]
            }
        ]
    }
];
class SalesRouting {
}
SalesRouting.ɵfac = function SalesRouting_Factory(t) { return new (t || SalesRouting)(); };
SalesRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SalesRouting });
SalesRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SalesRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 50797:
/*!**********************************************************!*\
  !*** ./src/app/sales/services/country-region.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryRegionService": () => (/* binding */ CountryRegionService)
/* harmony export */ });
/* harmony import */ var _modals_create_edit_country_create_edit_country_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/create-edit-country/create-edit-country.component */ 24910);
/* harmony import */ var _modals_create_edit_region_create_edit_region_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-region/create-edit-region.component */ 50080);
/* harmony import */ var _modals_create_edit_sub_region_create_edit_sub_region_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/create-edit-sub-region/create-edit-sub-region.component */ 98909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class CountryRegionService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    createEditCountryModal(country) {
        return this.dialog
            .open(_modals_create_edit_country_create_edit_country_component__WEBPACK_IMPORTED_MODULE_0__.CreateEditCountryComponent, {
            width: '35rem',
            height: 'auto',
            data: { country },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    createEditRegionModal(region, selectedCountry) {
        return this.dialog
            .open(_modals_create_edit_region_create_edit_region_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditRegionComponent, {
            width: '35rem',
            height: 'auto',
            data: { region, selectedCountry },
            panelClass: 'modal-overflow-visible',
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    createEditSubRegionModal(countrySelected = null, subRegion, selectedRegion) {
        return this.dialog
            .open(_modals_create_edit_sub_region_create_edit_sub_region_component__WEBPACK_IMPORTED_MODULE_2__.CreateEditSubRegionComponent, {
            width: '35rem',
            height: 'auto',
            data: { countrySelected, subRegion, selectedRegion },
            panelClass: 'modal-overflow-visible',
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
CountryRegionService.ɵfac = function CountryRegionService_Factory(t) { return new (t || CountryRegionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
CountryRegionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CountryRegionService, factory: CountryRegionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 22402:
/*!*************************************************************!*\
  !*** ./src/app/sales/services/event-sales-chain.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventSalesChainService": () => (/* binding */ EventSalesChainService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _modals_edit_event_modal_edit_event_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/edit-event-modal/edit-event-modal.component */ 74686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);






class EventSalesChainService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_partners_url;
        this.url = 'event_companies/';
    }
    updateEvent(eventId, person) {
        return this.httpClient.patch(this.API_URL + this.url + eventId + '/', person).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    deleteEvent(person) {
        return this.httpClient.delete(this.API_URL + this.url + `${person.id}/`);
    }
    updateComment(eventId, person) {
        return this.httpClient.patch(this.API_URL + this.url + `${eventId}/`, person);
    }
    editCompanyToEvent(eventCompany) {
        return this.dialog
            .open(_modals_edit_event_modal_edit_event_modal_component__WEBPACK_IMPORTED_MODULE_1__.EditEventModalComponent, {
            width: '800px',
            data: { type: 'edit', eventCompany },
            disableClose: true,
        })
            .afterClosed()
            .pipe();
    }
}
EventSalesChainService.ɵfac = function EventSalesChainService_Factory(t) { return new (t || EventSalesChainService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
EventSalesChainService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventSalesChainService, factory: EventSalesChainService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96976:
/*!*******************************************************!*\
  !*** ./src/app/sales/services/sales-chain-service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesChainService": () => (/* binding */ SalesChainService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _modals_create_sales_chain_create_sales_chain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-sales-chain/create-sales-chain.component */ 8823);
/* harmony import */ var _modals_edit_statuses_modal_edit_statuses_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/edit-statuses-modal/edit-statuses-modal.component */ 92115);
/* harmony import */ var _modals_create_choice_product_modal_create_choice_product_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/create-choice-product-modal/create-choice-product-modal.component */ 48585);
/* harmony import */ var _modals_create_sales_file_modal_create_sales_file_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/create-sales-file-modal/create-sales-file-modal.component */ 94877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);









class SalesChainService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sales_url;
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
        return this.httpClient.get(this.API_URL + 'sales_chains/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
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
        return this.httpClient.get(this.API_URL + 'sales_chains/' + queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
    }
    create(salesChain) {
        return this.httpClient
            .post(this.API_URL + 'sales_chains/', salesChain).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
    }
    delete(salesChain) {
        return this.httpClient.delete(this.API_URL + 'sales_chains/' + salesChain.id + '/');
    }
    deleteProduct(id) {
        return this.httpClient.delete(this.API_URL + `sales_chain_reservation/${id}`);
    }
    getById(id) {
        return this.httpClient.get(this.API_URL + `sales_chains/${id}/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
    }
    getReservation(id) {
        return this.httpClient.get(this.API_URL + `sales_chain_reservation/?sales_chain=${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
    }
    updateStatus(id, salesChain) {
        return this.httpClient.patch(this.API_URL + '' + `sales_chains/${id}/`, salesChain).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
    }
    getFile() {
        return this.httpClient.get(this.API_URL + `sales_chain_files/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response.data));
    }
    downloadFile(file) {
        return this.httpClient.get(this.API_URL + `sales_chain_files/${file.id}/`, { responseType: 'blob' });
    }
    getGenerateOffer(id) {
        return this.httpClient.get(this.API_URL + `sales_chains/${id}/generate_offer/`, { observe: 'response', responseType: 'blob' });
    }
    removeGenerateOffer(id) {
        return this.httpClient.delete(this.API_URL + `sales_chains/${id}/generate_offer/`);
    }
    // generateOffer(id) {
    //   return this.httpClient.get(this.API_URL + 'sales_chains/' + id + '/generate_offer/', {observe: 'response', responseType: 'blob'});
    // }
    createEditSalesChainModal() {
        return this.dialog
            .open(_modals_create_sales_chain_create_sales_chain_component__WEBPACK_IMPORTED_MODULE_1__.CreateSalesChainComponent, {
            width: '35rem',
            height: 'auto',
            autoFocus: false,
            panelClass: 'modal-overflow-visible',
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    editSalesChainStatus(salesChain) {
        return this.dialog
            .open(_modals_edit_statuses_modal_edit_statuses_modal_component__WEBPACK_IMPORTED_MODULE_2__.EditStatusesModalComponent, {
            width: '800px',
            data: { type: 'edit', salesChain },
            disableClose: true,
        })
            .afterClosed()
            .pipe();
    }
    createChoiseProduct(selectedSalesReservation) {
        return this.dialog
            .open(_modals_create_choice_product_modal_create_choice_product_modal_component__WEBPACK_IMPORTED_MODULE_3__.CreateChoiceProductModalComponent, {
            width: '800px',
            data: { type: 'edit', selectedSalesReservation },
            disableClose: true,
        })
            .afterClosed()
            .pipe();
    }
    createSalesFileModal(saleChainId) {
        return this.dialog
            .open(_modals_create_sales_file_modal_create_sales_file_modal_component__WEBPACK_IMPORTED_MODULE_4__.CreateSalesFileModalComponent, {
            width: '800px',
            data: { type: 'edit', saleChainId },
            disableClose: true,
        })
            .afterClosed()
            .pipe();
    }
}
SalesChainService.ɵfac = function SalesChainService_Factory(t) { return new (t || SalesChainService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
SalesChainService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: SalesChainService, factory: SalesChainService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27495:
/*!******************************************************!*\
  !*** ./src/app/sales/services/sales-file.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesFileService": () => (/* binding */ SalesFileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class SalesFileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sales_url;
    }
    upload(files) {
        const arrayFormData = [];
        files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file);
            arrayFormData.push(formData);
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(...arrayFormData.map(formData => this.httpClient.post(this.API_URL + `sales_chain_files/`, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data))));
    }
    remove(fileId) {
        return this.httpClient.delete(this.API_URL + `sales_chain_files/${fileId}`);
    }
}
SalesFileService.ɵfac = function SalesFileService_Factory(t) { return new (t || SalesFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
SalesFileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SalesFileService, factory: SalesFileService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_sales_module_ts.js.map