"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_instruments_instruments_module_ts"],{

/***/ 49437:
/*!*************************************************************************!*\
  !*** ./src/app/instruments/components/area-list/area-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaListComponent": () => (/* binding */ AreaListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_areas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/areas.service */ 63378);
/* harmony import */ var _services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/instrument-and-tools-modals.service */ 59749);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 42722);















const _c0 = ["paginator"];
function AreaListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function AreaListComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function AreaListComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AreaListComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function AreaListComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 30)(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const area_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", area_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r11.description);
} }
function AreaListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 6);
} }
function AreaListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "p-paginator", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function AreaListComponent_div_30_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_30_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("paginator-wrap", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r7.count);
} }
function AreaListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_31_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function AreaListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-menubar", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r10.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r10.menuItems);
} }
class AreaListComponent {
    constructor(areasService, instrumentAndToolsService, fb, modalService, router, activatedRoute) {
        this.areasService = areasService;
        this.instrumentAndToolsService = instrumentAndToolsService;
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.isStartOnePage = false;
        this.searchForm = this.fb.group({
            page: [1],
        });
        this.menuItems = [{
                label: 'Selected Locator',
                items: [
                    {
                        label: 'Locators',
                        icon: 'pi pi-bars',
                        command: () => this.editLocators()
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.editArea()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteArea()
                    }
                ]
            }];
        this.query = [
            { name: 'paginated', value: true },
            { name: 'page', value: this.searchForm.get('page').value }
        ];
    }
    ngOnInit() {
        this.search();
    }
    getAreas() {
        this.selectedNode = null;
        this.areasService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.areas = res;
            this.isLoading = false;
        });
    }
    prepareQuery() {
        this.query = [];
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true },
        ];
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    search() {
        this.prepareQuery();
        if (!this.isShowAll) {
            this.getPaginated();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getAll();
        }
    }
    getAll() {
        this.selectedNode = null;
        this.areasService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.areas = res;
            this.selectedNode = null;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
                this.isLoading = false;
            }
        });
    }
    getPaginated() {
        this.areasService
            .get_paginated(this.query)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            this.count = res.count;
            this.areas = res.results;
            this.selectedNode = null;
        });
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.search();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.search();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.search();
    }
    editArea() {
        this.instrumentAndToolsService.createEditAreaModal('edit', this.selectedNode).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.search();
        });
    }
    deleteArea() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe((confirm) => {
            if (confirm) {
                this.areasService
                    .delete(this.selectedNode)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                    .subscribe((del) => {
                    this.search();
                });
            }
        });
    }
    createArea() {
        this.instrumentAndToolsService.createEditAreaModal('create').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.search();
        });
    }
    editLocators() {
        this.router.navigate(['locators', this.selectedNode.id], { relativeTo: this.activatedRoute });
    }
}
AreaListComponent.ɵfac = function AreaListComponent_Factory(t) { return new (t || AreaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_areas_service__WEBPACK_IMPORTED_MODULE_0__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_1__.InstrumentAndToolsModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
AreaListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AreaListComponent, selectors: [["pek-area-list"]], viewQuery: function AreaListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 34, vars: 11, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Area", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "col-2"], [1, "col-10"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 335px)", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "paginator-wrapper", 3, "paginator-wrap", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "index-header"], [1, "index-header", 2, "width", "5%"], [2, "width", "45%"], [2, "width", "50%"], [3, "pSelectableRow"], [2, "width", "5%"], [1, "text-center", "p-5"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function AreaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_Template_button_click_7_listener() { return ctx.createArea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AreaListComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 11)(14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 13)(16, "div", 13)(17, "div", 14)(18, "div", 14)(19, "div", 14)(20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AreaListComponent_ng_container_22_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16)(24, "p-table", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function AreaListComponent_Template_p_table_selectionChange_24_listener($event) { return ctx.selectedNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AreaListComponent_ng_template_26_Template, 2, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AreaListComponent_ng_template_27_Template, 7, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AreaListComponent_ng_template_28_Template, 7, 4, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AreaListComponent_ng_template_29_Template, 4, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AreaListComponent_div_30_Template, 5, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AreaListComponent_div_31_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AreaListComponent_ng_template_32_Template, 2, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "instruments")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedNode)("value", ctx.areas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, primeng_menubar__WEBPACK_IMPORTED_MODULE_13__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.Paginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68093:
/*!******************************************************************************************************!*\
  !*** ./src/app/instruments/components/area-list/components/locators-list/locators-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocatorsListComponent": () => (/* binding */ LocatorsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_area_locators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/area-locators.service */ 64128);
/* harmony import */ var _shared_services_areas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/areas.service */ 63378);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/instrument-and-tools-modals.service */ 59749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/icons/module-icon/module-icon.component */ 73237);














function LocatorsListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.activeArea.name);
} }
function LocatorsListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LocatorsListComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LocatorsListComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LocatorsListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function LocatorsListComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 29)(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const locator_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pSelectableRow", locator_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](locator_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](locator_r10.description);
} }
function LocatorsListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 31)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 6);
} }
function LocatorsListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-menubar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r9.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("model", ctx_r9.menuItems);
} }
class LocatorsListComponent {
    constructor(route, locatorService, areasService, modalService, instrumentAndToolsService) {
        this.route = route;
        this.locatorService = locatorService;
        this.areasService = areasService;
        this.modalService = modalService;
        this.instrumentAndToolsService = instrumentAndToolsService;
        this.area_id = this.route.snapshot.paramMap.get('areaId');
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.menuItems = [{
                label: 'Selected Area Locator',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.edit()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.delete()
                    }
                ]
            }];
        this.getAll();
        this.areasService.getById(this.area_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => this.activeArea = res), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe();
    }
    ngOnInit() {
    }
    getAll() {
        this.selectedNode = null;
        this.locatorService.get([{ name: 'area', value: this.area_id }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(res => {
            this.locators = res;
        });
    }
    delete() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.locatorService.delete(this.selectedNode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(del => {
                    this.getAll();
                });
            }
        });
    }
    edit() {
        this.instrumentAndToolsService.createEditAreaLocatorModal('edit', this.selectedNode).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.getAll();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    createAreaLocator() {
        this.instrumentAndToolsService.createEditAreaLocatorModal('create', null, this.activeArea.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.getAll();
        });
    }
}
LocatorsListComponent.ɵfac = function LocatorsListComponent_Factory(t) { return new (t || LocatorsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_area_locators_service__WEBPACK_IMPORTED_MODULE_0__.AreaLocatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_areas_service__WEBPACK_IMPORTED_MODULE_1__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_3__.InstrumentAndToolsModalsService)); };
LocatorsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LocatorsListComponent, selectors: [["pek-locators-list"]], decls: 34, vars: 10, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Locator", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "form", "mb-3"], [1, "row"], [1, "col-3"], [1, "col-2"], [1, "col-10"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 335px)", 3, "scrollable", "rows", "paginator", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["actionButtons", ""], [1, "index-header"], [1, "index-header", 2, "width", "5%"], [2, "width", "45%"], [2, "width", "50%"], [3, "pSelectableRow"], [2, "width", "5%"], [1, "text-center", "p-5"], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function LocatorsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Locators (Area: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LocatorsListComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LocatorsListComponent_Template_button_click_9_listener() { return ctx.createAreaLocator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LocatorsListComponent_ng_container_14_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "div", 14)(18, "div", 14)(19, "div", 15)(20, "div", 15)(21, "div", 15)(22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LocatorsListComponent_ng_container_24_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 17)(26, "p-table", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function LocatorsListComponent_Template_p_table_selectionChange_26_listener($event) { return ctx.selectedNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, LocatorsListComponent_ng_template_28_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, LocatorsListComponent_ng_template_29_Template, 7, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LocatorsListComponent_ng_template_30_Template, 7, 4, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, LocatorsListComponent_ng_template_31_Template, 4, 1, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, LocatorsListComponent_ng_template_32_Template, 2, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "instruments")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeArea);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollable", true)("rows", 10)("paginator", true)("selection", ctx.selectedNode)("value", ctx.locators);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdG9ycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 25502:
/*!***********************************************************************************************************!*\
  !*** ./src/app/instruments/components/instruments-and-tools-list/instruments-and-tools-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentsAndToolsListComponent": () => (/* binding */ InstrumentsAndToolsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../warehouse/services/warehouse-product.service */ 8200);
/* harmony import */ var _services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/instrument-and-tools-modals.service */ 59749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pickers/product-structure-category-picker/product-structure-category-picker.component */ 77506);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_components_categories_tree_picker_categories_tree_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/categories-tree-picker/categories-tree-picker.component */ 621);
/* harmony import */ var _shared_pickers_area_picker_area_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pickers/area-picker/area-picker.component */ 85400);
/* harmony import */ var _shared_pickers_area_locator_picker_area_locator_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pickers/area-locator-picker/area-locator-picker.component */ 25483);


















const _c0 = ["paginator"];
const _c1 = ["searchBoxName"];
const _c2 = ["searchBoxCode"];
function InstrumentsAndToolsListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36)(1, "div", 36)(2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstrumentsAndToolsListComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.onMoveProduct()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstrumentsAndToolsListComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.returnToQc()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstrumentsAndToolsListComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.writeOff()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.selectedProduct.length > 1);
} }
function InstrumentsAndToolsListComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function InstrumentsAndToolsListComponent_ng_template_53_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsListComponent_ng_template_53_b_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "(T)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsListComponent_ng_template_53_span_9_div_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r25.link + "production/orders/order/" + order_r24.order_id, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", order_r24.order_id, " ");
} }
function InstrumentsAndToolsListComponent_ng_template_53_span_9_div_6_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r26.link + "outsource/outsource-chain/products/" + order_r24.order_id, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", order_r24.order_id, " ");
} }
function InstrumentsAndToolsListComponent_ng_template_53_span_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, InstrumentsAndToolsListComponent_ng_template_53_span_9_div_6_a_1_Template, 2, 2, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, InstrumentsAndToolsListComponent_ng_template_53_span_9_div_6_a_2_Template, 2, 2, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", order_r24.accounting_type === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", order_r24.accounting_type === 2);
} }
function InstrumentsAndToolsListComponent_ng_template_53_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 52)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "In Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 53)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "In use by orders:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, InstrumentsAndToolsListComponent_ng_template_53_span_9_div_6_Template, 3, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", product_r14.used_by_order);
} }
function InstrumentsAndToolsListComponent_ng_template_53_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (product_r14.nomenclature.category == null ? null : product_r14.nomenclature.category.unit_of_measure == null ? null : product_r14.nomenclature.category.unit_of_measure.symbol) ? product_r14.nomenclature.category == null ? null : product_r14.nomenclature.category.unit_of_measure == null ? null : product_r14.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function InstrumentsAndToolsListComponent_ng_template_53_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (product_r14.nomenclature.root_category == null ? null : product_r14.nomenclature.root_category.unit_of_measure == null ? null : product_r14.nomenclature.root_category.unit_of_measure.symbol) ? product_r14.nomenclature.root_category == null ? null : product_r14.nomenclature.root_category.unit_of_measure == null ? null : product_r14.nomenclature.root_category.unit_of_measure.symbol : "Pcs", " ");
} }
function InstrumentsAndToolsListComponent_ng_template_53_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, InstrumentsAndToolsListComponent_ng_template_53_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, InstrumentsAndToolsListComponent_ng_template_53_ng_container_13_ng_container_2_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.root_category);
} }
function InstrumentsAndToolsListComponent_ng_template_53_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Pcs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsListComponent_ng_template_53_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r14.area_locator.area.name);
} }
function InstrumentsAndToolsListComponent_ng_template_53_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r14.area_locator.name);
} }
function InstrumentsAndToolsListComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, InstrumentsAndToolsListComponent_ng_template_53_b_6_Template, 2, 0, "b", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, InstrumentsAndToolsListComponent_ng_template_53_b_7_Template, 2, 0, "b", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, InstrumentsAndToolsListComponent_ng_template_53_span_9_Template, 7, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, InstrumentsAndToolsListComponent_ng_template_53_ng_container_13_Template, 3, 2, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, InstrumentsAndToolsListComponent_ng_template_53_span_14_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, InstrumentsAndToolsListComponent_ng_template_53_ng_container_18_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, InstrumentsAndToolsListComponent_ng_template_53_ng_container_20_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const i_r15 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", product_r14)("pRowToggler", product_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx_r5.searchForm.get("page").value - 1) * 10 + i_r15 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.has_technical_equipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.used_by_order && product_r14.used_by_order.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r14.total_locator_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.nomenclature.category || product_r14.nomenclature.root_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !product_r14.nomenclature.category && !product_r14.nomenclature.root_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", product_r14.nomenclature.category == null ? null : product_r14.nomenclature.category.name, " ", product_r14.nomenclature.root_category == null ? null : product_r14.nomenclature.root_category.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.area_locator);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r14.area_locator);
} }
function InstrumentsAndToolsListComponent_ng_template_54_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 59);
} }
function InstrumentsAndToolsListComponent_ng_template_54_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsListComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, InstrumentsAndToolsListComponent_ng_template_54_i_2_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, InstrumentsAndToolsListComponent_ng_template_54_span_3_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function InstrumentsAndToolsListComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsListComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 61)(1, "p-paginator", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onPageChange", function InstrumentsAndToolsListComponent_div_56_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstrumentsAndToolsListComponent_div_56_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r42.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r8.products.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r8.countProducts);
} }
function InstrumentsAndToolsListComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 65)(1, "p-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstrumentsAndToolsListComponent_div_57_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
class InstrumentsAndToolsListComponent {
    constructor(fb, warehouseProductService, instrumentAndToolsService) {
        this.fb = fb;
        this.warehouseProductService = warehouseProductService;
        this.instrumentAndToolsService = instrumentAndToolsService;
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url + 'dash/';
        this.searchForm = this.fb.group({
            name: [null],
            code: [null],
            description: [null],
            area: [null],
            category: [null],
            root_categories: [null],
            area_locator: { value: null, disabled: true },
            type: [null],
            acceptedByInvoices: [null],
            page: [1],
        });
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true },
            { name: 'at_area', value: false }
        ];
        this.tableScrollHeight = '29.75rem';
        this.isHideFilters = false;
        this.isShowAll = false;
        this.isLoading = false;
        this.isStartOnePage = false;
        this.selectedProduct = [];
        this.queryKey = 'name:null/code:null/description:null/type:null/acceptedByInvoices:null/area:null/area_locator:null/category:null';
        this.products = [];
        this.countProducts = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }
    ngOnInit() {
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
    }
    onSelectCategory(category) {
        if (category) {
            this.searchForm.get('category').patchValue(category.id);
        }
        else {
            this.searchForm.get('category').patchValue(null);
        }
        this.searchProducts();
    }
    searchProducts() {
        this.isLoading = true;
        this.destroy$.next(true);
        this.selectedProduct = [];
        const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/description:${this.searchForm.get('description').value}/type:${this.searchForm.get('type').value}/acceptedByInvoices:${this.searchForm.get('acceptedByInvoices').value}/area:${this.searchForm.get('area').value}/area_locator:${this.searchForm.get('area_locator').value}/category:${this.searchForm.get('category').value}`;
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
        this.query.push({ name: 'at_area', value: true });
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
        if (this.searchForm.get('area').value)
            this.query.push({
                name: 'area',
                value: this.searchForm.get('area').value
            });
        if (this.searchForm.get('area_locator').value)
            this.query.push({
                name: 'area_locator',
                value: this.searchForm.get('area_locator').value
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
            this.tableScrollHeight = '18.25rem';
            return;
        }
        if (!this.isHideFilters && this.isShowAll) {
            this.tableScrollHeight = '27.5rem';
            return;
        }
        if (!this.isHideFilters && !this.isShowAll) {
            this.tableScrollHeight = '29.75rem';
            return;
        }
    }
    onSelectProductStructureCategory(ids) {
        if (ids) {
            this.searchForm.get('root_categories').patchValue(ids.join(','));
        }
        else {
            this.searchForm.get('root_categories').patchValue('');
        }
        this.searchProducts();
    }
    selectWarehouse(areaId) {
        let value = null;
        if (areaId)
            value = areaId;
        this.searchForm.get('area').patchValue(value);
        this.searchProducts();
    }
    onSelectLocator(id) {
        this.searchForm.get('area_locator').patchValue(id);
        this.searchProducts();
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
    onShowAll() {
        this.isShowAll = true;
        this.setTableScrollHeight();
        this.searchProducts();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.setTableScrollHeight();
        this.searchProducts();
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.searchProducts();
        }
    }
    returnToQc() {
        this.instrumentAndToolsService.productWriteOfReturnModal(this.selectedProduct, 'warehouseReturn').subscribe(() => {
            this.selectedProduct = null;
            this.searchProducts();
        });
    }
    writeOff() {
        this.instrumentAndToolsService.productWriteOfReturnModal(this.selectedProduct, 'writeOff').subscribe(() => {
            this.selectedProduct = null;
            this.searchProducts();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onMoveProduct() {
        this.instrumentAndToolsService.productMoveToAreaLocatorModal(this.selectedProduct[0]).subscribe(response => {
            if (response) {
                this.searchProducts();
            }
        });
    }
}
InstrumentsAndToolsListComponent.ɵfac = function InstrumentsAndToolsListComponent_Factory(t) { return new (t || InstrumentsAndToolsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseProductService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_2__.InstrumentAndToolsModalsService)); };
InstrumentsAndToolsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: InstrumentsAndToolsListComponent, selectors: [["pek-instruments-and-tools-list"]], viewQuery: function InstrumentsAndToolsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchBoxName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchBoxCode = _t.first);
    } }, decls: 58, vars: 22, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], ["class", "page__tools", 4, "ngIf"], [1, "page__content"], [1, "page__card"], [1, "warehouse-items"], [1, "warehouse-items__left"], [1, "form-group"], [3, "categorySelected"], [1, "warehouse-items__right"], [1, "page__table"], [1, "filters-visibility"], [1, "filters-visibility__header"], [1, "icon", "pi", 3, "click"], [1, "warehouse-items__form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-4"], ["formControlName", "code", "pInputText", "", 1, "form-control"], ["searchBoxCode", ""], ["formControlName", "name", "pInputText", "", 1, "form-control"], ["searchBoxName", ""], [1, "col-6"], [3, "showClear", "valueChange"], [3, "isDisabled", "areaId", "valueChange"], [3, "isAllIds", "choiceCategoryFolAllIds"], [1, "table-pagination-preloader"], ["selectionMode", "multiple", "dataKey", "uid", 3, "scrollHeight", "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "label", "Move", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Return To Warehouse", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Write Off", 1, "mr-2", 3, "click"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "6%"], [1, "text-center", 2, "width", "13%"], [1, "text-center", 2, "width", "12%"], [1, "text-center", 2, "width", "14%"], [3, "pSelectableRow", "pRowToggler"], [1, "text-center", 2, "width", "5%"], [1, "in-use", 2, "width", "15%"], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "in-use-info"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]], template: function InstrumentsAndToolsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Instruments And Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, InstrumentsAndToolsListComponent_div_6_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "pek-categories-tree-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("categorySelected", function InstrumentsAndToolsListComponent_Template_pek_categories_tree_picker_categorySelected_12_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstrumentsAndToolsListComponent_Template_button_click_17_listener() { return ctx.toggleFilterVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "form", 16)(19, "div", 17)(20, "div", 18)(21, "div", 9)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 18)(27, "div", 9)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 18)(33, "div", 17)(34, "div", 23)(35, "div", 9)(36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "pek-area-picker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function InstrumentsAndToolsListComponent_Template_pek_area_picker_valueChange_38_listener($event) { return ctx.selectWarehouse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 23)(40, "div", 9)(41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Area Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "pek-area-locator-picker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function InstrumentsAndToolsListComponent_Template_pek_area_locator_picker_valueChange_43_listener($event) { return ctx.onSelectLocator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 18)(45, "div", 9)(46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Product Structure Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "pek-product-structure-category-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("choiceCategoryFolAllIds", function InstrumentsAndToolsListComponent_Template_pek_product_structure_category_picker_choiceCategoryFolAllIds_48_listener($event) { return ctx.onSelectProductStructureCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 27)(50, "p-table", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function InstrumentsAndToolsListComponent_Template_p_table_selectionChange_50_listener($event) { return ctx.selectedProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, InstrumentsAndToolsListComponent_ng_template_52_Template, 17, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, InstrumentsAndToolsListComponent_ng_template_53_Template, 21, 15, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, InstrumentsAndToolsListComponent_ng_template_54_Template, 4, 3, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, InstrumentsAndToolsListComponent_div_55_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, InstrumentsAndToolsListComponent_div_56_Template, 5, 4, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, InstrumentsAndToolsListComponent_div_57_Template, 3, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("module", "instruments")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedProduct && ctx.selectedProduct.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isDisabled", !ctx.searchForm.get("area").value)("areaId", ctx.searchForm.get("area").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isAllIds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollHeight", "calc(100vh - " + ctx.tableScrollHeight + ")")("scrollable", true)("rows", 10)("selection", ctx.selectedProduct)("value", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _shared_pickers_product_structure_category_picker_product_structure_category_picker_component__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryPickerComponent, primeng_table__WEBPACK_IMPORTED_MODULE_20__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_20__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_20__.RowToggler, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_21__.Paginator, _shared_components_categories_tree_picker_categories_tree_picker_component__WEBPACK_IMPORTED_MODULE_5__.CategoriesTreePickerComponent, _shared_pickers_area_picker_area_picker_component__WEBPACK_IMPORTED_MODULE_6__.AreaPickerComponent, _shared_pickers_area_locator_picker_area_locator_picker_component__WEBPACK_IMPORTED_MODULE_7__.AreaLocatorPickerComponent], styles: [".page__card[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n}\n\n.warehouse-items[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.warehouse-items__spinner[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 0.625rem;\n  height: calc(100vh - 242px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.warehouse-items__tree[_ngcontent-%COMP%] {\n  bottom: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  height: calc(100vh - 242px);\n}\n\n.warehouse-items__tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%] {\n  width: 24rem;\n  flex: 0 0 24rem;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  top: -0.125rem;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree {\n  overflow: auto;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  border-radius: 0.625rem !important;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree::-webkit-scrollbar-thumb {\n  border-radius: 0.625rem;\n  background-color: #d1d2d8;\n}\n\n.warehouse-items__left[_ngcontent-%COMP%]  .p-tree::-webkit-scrollbar {\n  cursor: auto;\n  width: 0.5rem;\n  background-color: #f8f9fa;\n}\n\n.warehouse-items__right[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 1.75rem;\n}\n\n.warehouse-items__right[_ngcontent-%COMP%]  .p-datatable-header {\n  padding: 0 0 1rem !important;\n}\n\n.warehouse-items__form[_ngcontent-%COMP%] {\n  margin-top: -0.625rem;\n}\n\n.filters-visibility_hide[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  top: 0.625rem !important;\n}\n\n.filters-visibility__header[_ngcontent-%COMP%] {\n  min-height: 1.375rem;\n}\n\n.page__card[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.in-use[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.in-use[_ngcontent-%COMP%]:hover   .in-use-info[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: initial;\n}\n\n.in-use-info[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: 0.25s ease;\n  opacity: 0;\n  background: #fff;\n  z-index: 3;\n  width: 9rem;\n  right: -3rem;\n  top: -1.5rem;\n  padding: 0.75rem 1rem;\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.15);\n  border-radius: 0.5rem;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydW1lbnRzLWFuZC10b29scy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFGTjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9NO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUxSOztBQU9RO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQUxWOztBQVFRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQU5WOztBQVlFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBVko7O0FBYU07RUFDRSw0QkFBQTtBQVhSOztBQWdCRTtFQUNFLHFCQUFBO0FBZEo7O0FBb0JJO0VBQ0Usd0JBQUE7QUFqQk47O0FBcUJFO0VBQ0Usb0JBQUE7QUFuQko7O0FBdUJBO0VBQ0Usa0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7QUFwQkY7O0FBdUJJO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBckJOOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUF4QkYiLCJmaWxlIjoiaW5zdHJ1bWVudHMtYW5kLXRvb2xzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9fY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XHJcbn1cclxuXHJcbi53YXJlaG91c2UtaXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICZfX3NwaW5uZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQycHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3RyZWUge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQycHgpO1xyXG4gIH1cclxuXHJcbiAgJl9fdHJlZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fbGVmdCB7XHJcbiAgICB3aWR0aDogMjRyZW07XHJcbiAgICBmbGV4OiAwIDAgMjRyZW07XHJcblxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0wLjEyNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Om5nLWRlZXAge1xyXG4gICAgICAucC10cmVlIHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQyZDg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMC41cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3JpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNzVyZW07XHJcblxyXG4gICAgJjo6bmctZGVlcCB7XHJcbiAgICAgIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Zvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNjI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlcnMtdmlzaWJpbGl0eSB7XHJcbiAgJl9oaWRlIHtcclxuICAgIC5pY29uIHtcclxuICAgICAgdG9wOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEuMzc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2VfX2NhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmluLXVzZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC5pbi11c2UtaW5mbyB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pbi11c2UtaW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDlyZW07XHJcbiAgcmlnaHQ6IC0zcmVtO1xyXG4gIHRvcDogLTEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCAxcHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 60760:
/*!*******************************************************************************************!*\
  !*** ./src/app/instruments/components/instruments-layout/instruments-layout.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentsLayoutComponent": () => (/* binding */ InstrumentsLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class InstrumentsLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Instruments And Tools', commands: ['instruments-and-tools'] },
            { label: 'Areas', commands: ['areas'] },
            { label: 'Tool Request', commands: ['tool-request'] }
        ];
        this.settingsRoutes = [];
    }
    ngOnInit() {
    }
}
InstrumentsLayoutComponent.ɵfac = function InstrumentsLayoutComponent_Factory(t) { return new (t || InstrumentsLayoutComponent)(); };
InstrumentsLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InstrumentsLayoutComponent, selectors: [["pek-instruments-layout"]], decls: 2, vars: 3, consts: [[3, "module", "routes", "settingsRoutes"]], template: function InstrumentsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Instruments")("routes", ctx.routes)("settingsRoutes", ctx.settingsRoutes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVtZW50cy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68265:
/*!****************************************************************************************************************!*\
  !*** ./src/app/instruments/components/tool-requests-list/request-orders-list/request-orders-list.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestOrdersListComponent": () => (/* binding */ RequestOrdersListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _warehouse_services_tool_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../warehouse/services/tool-request.service */ 83187);
/* harmony import */ var _warehouse_services_tool_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../warehouse/services/tool-order.service */ 85573);
/* harmony import */ var _services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/instrument-and-tools-modals.service */ 59749);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/icons/module-icon/module-icon.component */ 73237);














function RequestOrdersListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("Order ID: ", ctx_r0.activeOrder.id, " Area: ", ctx_r0.activeOrder.area_locator.area.name, " Locator: ", ctx_r0.activeOrder.area_locator.name, "");
} }
function RequestOrdersListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function RequestOrdersListComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function RequestOrdersListComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RequestOrdersListComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Requested Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function RequestOrdersListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 29)(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const request_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pSelectableRow", request_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](request_r10.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](request_r10.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](request_r10.required_quantity);
} }
function RequestOrdersListComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 31)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 6);
} }
function RequestOrdersListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-menubar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r9.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("model", ctx_r9.menuItems);
} }
class RequestOrdersListComponent {
    constructor(route, toolRequestService, toolOrderService, instrumentAndToolsService, modalService) {
        this.route = route;
        this.toolRequestService = toolRequestService;
        this.toolOrderService = toolOrderService;
        this.instrumentAndToolsService = instrumentAndToolsService;
        this.modalService = modalService;
        this.orderId = this.route.snapshot.paramMap.get('orderId');
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.menuItems = [{
                label: 'Selected Request Nomenclature',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.edit()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.delete()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.getAll();
        this.getCurrentOrder();
    }
    getCurrentOrder() {
        this.toolOrderService.getById(+this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => this.activeOrder = res), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe();
    }
    add() {
        this.instrumentAndToolsService.createEditToolRequestNomenclatureModal('create', this.activeOrder.id).subscribe(() => {
            this.getAll();
        });
    }
    getAll() {
        this.selectedNode = null;
        this.toolRequestService.get([{ name: 'tool_order', value: this.orderId }, {
                name: 'is_completed',
                value: false
            }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(res => {
            this.requests = res;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    edit() {
        this.instrumentAndToolsService.createEditToolRequestNomenclatureModal('edit', this.activeOrder.id, this.selectedNode).subscribe(() => {
            this.getAll();
        });
    }
    delete() {
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.toolRequestService.delete(this.selectedNode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(del => {
                    this.getAll();
                });
            }
        });
    }
}
RequestOrdersListComponent.ɵfac = function RequestOrdersListComponent_Factory(t) { return new (t || RequestOrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_warehouse_services_tool_request_service__WEBPACK_IMPORTED_MODULE_0__.ToolRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_warehouse_services_tool_order_service__WEBPACK_IMPORTED_MODULE_1__.ToolOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_2__.InstrumentAndToolsModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService)); };
RequestOrdersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RequestOrdersListComponent, selectors: [["pek-request-orders-list"]], decls: 33, vars: 10, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Request", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "form", "mb-3"], [1, "row"], [1, "col-3"], [1, "col-2"], [1, "col-10"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 335px)", 3, "scrollable", "rows", "paginator", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["actionButtons", ""], [1, "index-header"], [1, "index-header", 2, "width", "5%"], [2, "width", "35%"], [2, "width", "30%"], [3, "pSelectableRow"], [2, "width", "5%"], [1, "text-center", "p-5"], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function RequestOrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Requests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RequestOrdersListComponent_ng_container_6_Template, 2, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequestOrdersListComponent_Template_button_click_8_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, RequestOrdersListComponent_ng_container_13_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 14)(17, "div", 14)(18, "div", 15)(19, "div", 15)(20, "div", 15)(21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, RequestOrdersListComponent_ng_container_23_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 17)(25, "p-table", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function RequestOrdersListComponent_Template_p_table_selectionChange_25_listener($event) { return ctx.selectedNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, RequestOrdersListComponent_ng_template_27_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RequestOrdersListComponent_ng_template_28_Template, 9, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RequestOrdersListComponent_ng_template_29_Template, 9, 5, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RequestOrdersListComponent_ng_template_30_Template, 4, 1, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, RequestOrdersListComponent_ng_template_31_Template, 2, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "instruments")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollable", true)("rows", 10)("paginator", true)("selection", ctx.selectedNode)("value", ctx.requests);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_14__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LW9yZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 40792:
/*!*******************************************************************************************!*\
  !*** ./src/app/instruments/components/tool-requests-list/tool-requests-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestsListComponent": () => (/* binding */ ToolRequestsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _warehouse_services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../warehouse/services/tool-order.service */ 85573);
/* harmony import */ var _services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/instrument-and-tools-modals.service */ 59749);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 42722);















const _c0 = ["paginator"];
function ToolRequestsListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function ToolRequestsListComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function ToolRequestsListComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ToolRequestsListComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ToolRequestsListComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 30)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r11 = ctx.$implicit;
    const i_r12 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", order_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](order_r11.area_locator.area.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](order_r11.area_locator.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](order_r11.created);
} }
function ToolRequestsListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 31)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 6);
} }
function ToolRequestsListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "p-paginator", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function ToolRequestsListComponent_div_30_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolRequestsListComponent_div_30_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.onShowAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("paginator-wrap", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r7.count);
} }
function ToolRequestsListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "p-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolRequestsListComponent_div_31_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.onShowPartial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ToolRequestsListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-menubar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r10.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r10.menuItems);
} }
class ToolRequestsListComponent {
    constructor(toolOrderService, instrumentAndToolsService, fb, modalService, router, activatedRoute) {
        this.toolOrderService = toolOrderService;
        this.instrumentAndToolsService = instrumentAndToolsService;
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.isStartOnePage = false;
        this.searchForm = this.fb.group({
            page: [1],
        });
        this.menuItems = [{
                label: 'Selected Tool Request',
                items: [
                    {
                        label: 'Nomenclatures',
                        icon: 'pi pi-bars',
                        command: () => this.editNomenclatures()
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.edit()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.deleteRequest()
                    }
                ]
            }];
        this.query = [
            { name: 'paginated', value: true },
            { name: 'page', value: this.searchForm.get('page').value }
        ];
    }
    ngOnInit() {
        this.search();
    }
    prepareQuery() {
        this.query = [];
        this.query = [
            { name: 'page', value: this.searchForm.get('page').value },
            { name: 'paginated', value: true },
            { name: 'is_completed', value: false },
        ];
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    search() {
        this.prepareQuery();
        if (!this.isShowAll) {
            this.getPaginated();
        }
        else {
            this.searchForm.get('page').patchValue(1);
            this.getAll();
        }
    }
    getAll() {
        this.selectedNode = null;
        this.toolOrderService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.requests = res;
            this.selectedNode = null;
            if (this.isStartOnePage) {
                this.paginator?.changePage(0);
                this.isLoading = false;
            }
        });
    }
    getPaginated() {
        this.toolOrderService
            .get_paginated(this.query)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            this.count = res.count;
            this.requests = res.results;
            this.selectedNode = null;
        });
    }
    paginate(evt) {
        if (!this.isStartOnePage) {
            this.searchForm.get('page').patchValue(evt.page + 1);
            this.search();
        }
    }
    onShowAll() {
        this.isShowAll = true;
        this.search();
    }
    onShowPartial() {
        this.isShowAll = false;
        this.search();
    }
    edit() {
        this.instrumentAndToolsService.createEditToolRequestModal('edit', this.selectedNode).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.search();
        });
    }
    deleteRequest() {
        this.modalService
            .confirm('danger', 'Confirm')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe((confirm) => {
            if (confirm) {
                this.toolOrderService
                    .delete(this.selectedNode)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
                    .subscribe((del) => {
                    this.search();
                });
            }
        });
    }
    createArea() {
        this.instrumentAndToolsService.createEditToolRequestModal('create').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(res => {
            this.router.navigate(['requests', res.id], { relativeTo: this.activatedRoute });
        });
    }
    editNomenclatures() {
        this.router.navigate(['requests', this.selectedNode.id], { relativeTo: this.activatedRoute });
    }
}
ToolRequestsListComponent.ɵfac = function ToolRequestsListComponent_Factory(t) { return new (t || ToolRequestsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_warehouse_services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__.ToolOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_1__.InstrumentAndToolsModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
ToolRequestsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ToolRequestsListComponent, selectors: [["pek-tool-requests-list"]], viewQuery: function ToolRequestsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 34, vars: 11, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Request", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "col-2"], [1, "col-10"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 335px)", 3, "scrollable", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "paginator-wrapper", 3, "paginator-wrap", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], ["actionButtons", ""], [1, "index-header"], [1, "index-header", 2, "width", "5%"], [2, "width", "30%"], [2, "width", "35%"], [3, "pSelectableRow"], [1, "text-center", "p-5"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function ToolRequestsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Tool Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolRequestsListComponent_Template_button_click_7_listener() { return ctx.createArea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ToolRequestsListComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 11)(14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 13)(16, "div", 13)(17, "div", 14)(18, "div", 14)(19, "div", 14)(20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ToolRequestsListComponent_ng_container_22_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16)(24, "p-table", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ToolRequestsListComponent_Template_p_table_selectionChange_24_listener($event) { return ctx.selectedNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ToolRequestsListComponent_ng_template_26_Template, 2, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ToolRequestsListComponent_ng_template_27_Template, 9, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ToolRequestsListComponent_ng_template_28_Template, 9, 5, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ToolRequestsListComponent_ng_template_29_Template, 4, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ToolRequestsListComponent_div_30_Template, 5, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ToolRequestsListComponent_div_31_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ToolRequestsListComponent_ng_template_32_Template, 2, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "instruments")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("rows", 10)("selection", ctx.selectedNode)("value", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, primeng_menubar__WEBPACK_IMPORTED_MODULE_13__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.Paginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sLXJlcXVlc3RzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 64764:
/*!***********************************************************!*\
  !*** ./src/app/instruments/instruments-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentsRoutingModule": () => (/* binding */ InstrumentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_instruments_layout_instruments_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/instruments-layout/instruments-layout.component */ 60760);
/* harmony import */ var _components_instruments_and_tools_list_instruments_and_tools_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/instruments-and-tools-list/instruments-and-tools-list.component */ 25502);
/* harmony import */ var _components_area_list_area_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/area-list/area-list.component */ 49437);
/* harmony import */ var _components_tool_requests_list_tool_requests_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tool-requests-list/tool-requests-list.component */ 40792);
/* harmony import */ var _components_tool_requests_list_request_orders_list_request_orders_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tool-requests-list/request-orders-list/request-orders-list.component */ 68265);
/* harmony import */ var _components_area_list_components_locators_list_locators_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/area-list/components/locators-list/locators-list.component */ 68093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    {
        path: '',
        title: 'Instruments',
        component: _components_instruments_layout_instruments_layout_component__WEBPACK_IMPORTED_MODULE_0__.InstrumentsLayoutComponent,
        children: [
            {
                path: 'instruments-and-tools',
                title: 'Instruments And Tools',
                component: _components_instruments_and_tools_list_instruments_and_tools_list_component__WEBPACK_IMPORTED_MODULE_1__.InstrumentsAndToolsListComponent
            },
            {
                path: 'areas',
                title: 'Areas',
                component: _components_area_list_area_list_component__WEBPACK_IMPORTED_MODULE_2__.AreaListComponent
            },
            {
                path: 'areas/locators/:areaId',
                title: 'Areas',
                component: _components_area_list_components_locators_list_locators_list_component__WEBPACK_IMPORTED_MODULE_5__.LocatorsListComponent
            },
            { path: 'tool-request',
                component: _components_tool_requests_list_tool_requests_list_component__WEBPACK_IMPORTED_MODULE_3__.ToolRequestsListComponent },
            { path: 'tool-request/requests/:orderId',
                component: _components_tool_requests_list_request_orders_list_request_orders_list_component__WEBPACK_IMPORTED_MODULE_4__.RequestOrdersListComponent },
        ]
    }
];
class InstrumentsRoutingModule {
}
InstrumentsRoutingModule.ɵfac = function InstrumentsRoutingModule_Factory(t) { return new (t || InstrumentsRoutingModule)(); };
InstrumentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: InstrumentsRoutingModule });
InstrumentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InstrumentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 67292:
/*!***************************************************!*\
  !*** ./src/app/instruments/instruments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentsModule": () => (/* binding */ InstrumentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _instruments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instruments-routing.module */ 64764);
/* harmony import */ var _components_instruments_layout_instruments_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/instruments-layout/instruments-layout.component */ 60760);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_instruments_and_tools_list_instruments_and_tools_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/instruments-and-tools-list/instruments-and-tools-list.component */ 25502);
/* harmony import */ var _components_tool_requests_list_tool_requests_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tool-requests-list/tool-requests-list.component */ 40792);
/* harmony import */ var _components_tool_requests_list_request_orders_list_request_orders_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tool-requests-list/request-orders-list/request-orders-list.component */ 68265);
/* harmony import */ var _components_area_list_area_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/area-list/area-list.component */ 49437);
/* harmony import */ var _components_area_list_components_locators_list_locators_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/area-list/components/locators-list/locators-list.component */ 68093);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _modals_create_edit_area_create_edit_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/create-edit-area/create-edit-area.component */ 56406);
/* harmony import */ var _modals_create_edit_area_locator_create_edit_area_locator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/create-edit-area-locator/create-edit-area-locator.component */ 38854);
/* harmony import */ var _modals_create_edit_tool_request_create_edit_tool_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/create-edit-tool-request/create-edit-tool-request.component */ 92911);
/* harmony import */ var _modals_create_update_tool_order_request_create_update_tool_order_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/create-update-tool-order-request/create-update-tool-order-request.component */ 72086);
/* harmony import */ var _modals_product_move_to_area_locator_product_move_to_area_locator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/product-move-to-area-locator/product-move-to-area-locator.component */ 99779);
/* harmony import */ var _modals_instrumentr_and_tools_writeoff_return_instruments_and_tools_write_off_return_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/instrumentr-and-tools-writeoff-return/instruments-and-tools-write-off-return.component */ 95145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);

















class InstrumentsModule {
}
InstrumentsModule.ɵfac = function InstrumentsModule_Factory(t) { return new (t || InstrumentsModule)(); };
InstrumentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: InstrumentsModule });
InstrumentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _instruments_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstrumentsRoutingModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](InstrumentsModule, { declarations: [_components_instruments_layout_instruments_layout_component__WEBPACK_IMPORTED_MODULE_1__.InstrumentsLayoutComponent,
        _components_instruments_and_tools_list_instruments_and_tools_list_component__WEBPACK_IMPORTED_MODULE_3__.InstrumentsAndToolsListComponent,
        _components_tool_requests_list_tool_requests_list_component__WEBPACK_IMPORTED_MODULE_4__.ToolRequestsListComponent,
        _components_tool_requests_list_request_orders_list_request_orders_list_component__WEBPACK_IMPORTED_MODULE_5__.RequestOrdersListComponent,
        _components_area_list_area_list_component__WEBPACK_IMPORTED_MODULE_6__.AreaListComponent,
        _components_area_list_components_locators_list_locators_list_component__WEBPACK_IMPORTED_MODULE_7__.LocatorsListComponent,
        _modals_create_edit_area_create_edit_area_component__WEBPACK_IMPORTED_MODULE_9__.CreateEditAreaComponent,
        _modals_create_edit_area_locator_create_edit_area_locator_component__WEBPACK_IMPORTED_MODULE_10__.CreateEditAreaLocatorComponent,
        _modals_create_edit_tool_request_create_edit_tool_request_component__WEBPACK_IMPORTED_MODULE_11__.CreateEditToolRequestComponent,
        _modals_create_update_tool_order_request_create_update_tool_order_request_component__WEBPACK_IMPORTED_MODULE_12__.CreateUpdateToolOrderRequestComponent,
        _modals_product_move_to_area_locator_product_move_to_area_locator_component__WEBPACK_IMPORTED_MODULE_13__.ProductMoveToAreaLocatorComponent,
        _modals_instrumentr_and_tools_writeoff_return_instruments_and_tools_write_off_return_component__WEBPACK_IMPORTED_MODULE_14__.InstrumentsAndToolsWriteOffReturnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _instruments_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstrumentsRoutingModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule] }); })();


/***/ }),

/***/ 38854:
/*!***************************************************************************************************!*\
  !*** ./src/app/instruments/modals/create-edit-area-locator/create-edit-area-locator.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditAreaLocatorComponent": () => (/* binding */ CreateEditAreaLocatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_area_locators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/area-locators.service */ 64128);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _shared_pickers_area_picker_area_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/area-picker/area-picker.component */ 85400);











class CreateEditAreaLocatorComponent {
    constructor(dialogRef, fb, areaLocatorsService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.areaLocatorsService = areaLocatorsService;
        this.data = data;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            area: [Number(data.locator), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.locator.id));
            this.form.patchValue(this.data.locator);
            this.form.get('area').patchValue(this.data.locator.area.id);
        }
        else {
            this.form.get('area').patchValue(this.data.areaId);
        }
    }
    ngOnInit() {
    }
    onSave() {
        if (this.form.get('id')) {
            this.change();
        }
        else {
            this.create();
        }
    }
    create() {
        if (this.form.valid) {
            this.areaLocatorsService.create(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(res => {
                this.dialogRef.close(res);
            });
        }
    }
    change() {
        if (this.form.valid) {
            this.areaLocatorsService.update(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(res => {
                this.dialogRef.close(res);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    valuesChanged($event) {
    }
}
CreateEditAreaLocatorComponent.ɵfac = function CreateEditAreaLocatorComponent_Factory(t) { return new (t || CreateEditAreaLocatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_area_locators_service__WEBPACK_IMPORTED_MODULE_0__.AreaLocatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
CreateEditAreaLocatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateEditAreaLocatorComponent, selectors: [["pek-create-edit-area-locator"]], decls: 20, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], [3, "isDisabled", "area", "valueChange"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control"], ["for", "description"], ["pInputText", "", "formControlName", "description", "type", "text", "id", "description", 1, "form-control"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditAreaLocatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "pek-area-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function CreateEditAreaLocatorComponent_Template_pek_area_picker_valueChange_8_listener($event) { return ctx.form.get("area").setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 3)(14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEditAreaLocatorComponent_Template_button_click_19_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isDisabled", true)("area", ctx.form.get("area").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _shared_pickers_area_picker_area_picker_component__WEBPACK_IMPORTED_MODULE_1__.AreaPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1hcmVhLWxvY2F0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56406:
/*!***********************************************************************************!*\
  !*** ./src/app/instruments/modals/create-edit-area/create-edit-area.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditAreaComponent": () => (/* binding */ CreateEditAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_areas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/areas.service */ 63378);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);










class CreateEditAreaComponent {
    constructor(dialogRef, fb, areasService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.areasService = areasService;
        this.data = data;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.area.id));
            this.form.patchValue(this.data.area);
        }
    }
    ngOnInit() {
    }
    onSave() {
        if (this.form.get('id')) {
            this.change();
        }
        else {
            this.create();
        }
    }
    create() {
        if (this.form.valid) {
            this.areasService.create(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(res => {
                this.dialogRef.close(res);
            });
        }
    }
    change() {
        if (this.form.valid) {
            this.areasService.update(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(res => {
                this.dialogRef.close(res);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CreateEditAreaComponent.ɵfac = function CreateEditAreaComponent_Factory(t) { return new (t || CreateEditAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_areas_service__WEBPACK_IMPORTED_MODULE_0__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
CreateEditAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateEditAreaComponent, selectors: [["pek-create-edit-area"]], decls: 16, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control"], ["for", "description"], ["pInputText", "", "formControlName", "description", "type", "text", "id", "description", 1, "form-control"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEditAreaComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1hcmVhLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 92911:
/*!***************************************************************************************************!*\
  !*** ./src/app/instruments/modals/create-edit-tool-request/create-edit-tool-request.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditToolRequestComponent": () => (/* binding */ CreateEditToolRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _warehouse_services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../warehouse/services/tool-order.service */ 85573);
/* harmony import */ var _shared_services_area_locators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/area-locators.service */ 64128);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_pickers_area_locator_picker_area_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/area-locator-picker/area-locator-picker.component */ 25483);










class CreateEditToolRequestComponent {
    constructor(dialogRef, toolOrderService, areaLocatorService, fb, data) {
        this.dialogRef = dialogRef;
        this.toolOrderService = toolOrderService;
        this.areaLocatorService = areaLocatorService;
        this.data = data;
        this.isSaving = false;
        this.form = fb.group({
            area_locator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.toolOrder.id));
            this.form.get('area_locator').patchValue(this.data.toolOrder.area_locator.id);
        }
    }
    ngOnInit() {
    }
    create() {
        if (this.form.valid) {
            this.toolOrderService.create(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(res => { this.dialogRef.close(res); });
        }
    }
    change() {
        if (this.form.valid) {
            this.toolOrderService.update(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(res => { this.dialogRef.close(res); });
        }
    }
    onSave() {
        if (this.form.get('id')) {
            this.change();
        }
        else {
            this.create();
        }
    }
    test() {
        console.log('this.form', this.form);
    }
}
CreateEditToolRequestComponent.ɵfac = function CreateEditToolRequestComponent_Factory(t) { return new (t || CreateEditToolRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_warehouse_services_tool_order_service__WEBPACK_IMPORTED_MODULE_0__.ToolOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_area_locators_service__WEBPACK_IMPORTED_MODULE_1__.AreaLocatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
CreateEditToolRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateEditToolRequestComponent, selectors: [["pek-create-edit-tool-request"]], decls: 12, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "locator", "valueChange"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditToolRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "pek-area-locator-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function CreateEditToolRequestComponent_Template_pek_area_locator_picker_valueChange_8_listener($event) { return ctx.form.get("area_locator").setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-dialog-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEditToolRequestComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("locator", ctx.form.get("area_locator").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _shared_pickers_area_locator_picker_area_locator_picker_component__WEBPACK_IMPORTED_MODULE_2__.AreaLocatorPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC10b29sLXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 72086:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/instruments/modals/create-update-tool-order-request/create-update-tool-order-request.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUpdateToolOrderRequestComponent": () => (/* binding */ CreateUpdateToolOrderRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/instrument-and-tools-modals.service */ 59749);
/* harmony import */ var _warehouse_services_tool_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../warehouse/services/tool-request.service */ 83187);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);











function CreateUpdateToolOrderRequestComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.selectedProduct.nomenclature.name, " Quantity: ", ctx_r0.selectedProduct.quantity, " ");
} }
class CreateUpdateToolOrderRequestComponent {
    constructor(fb, dialogRef, instrumentAndToolsService, toolRequestService, data) {
        this.dialogRef = dialogRef;
        this.instrumentAndToolsService = instrumentAndToolsService;
        this.toolRequestService = toolRequestService;
        this.data = data;
        this.isSaving = false;
        this.form = fb.group({
            tool_order: [Number(data.toolOrderId), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            nomenclature: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            initial_quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        if (this.data.type === 'edit') {
            this.selectedProduct = data.toolRequest;
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.toolRequest.id));
            this.form.patchValue(this.data.toolRequest);
            this.form.get('nomenclature').patchValue(this.data.toolRequest.nomenclature.id);
            this.form.get('tool_order').patchValue(this.data.toolRequest.tool_order);
        }
    }
    ngOnInit() {
    }
    onSave() {
        if (this.form.get('id')) {
            this.change();
        }
        else {
            this.create();
        }
    }
    openWarehouseSearch() {
        this.instrumentAndToolsService.searchInWarehouseNomenclatureModal().subscribe(res => {
            if (res) {
                this.selectedProduct = res;
                this.form.get('nomenclature').patchValue(res.nomenclature.id);
            }
        });
    }
    create() {
        if (this.form.valid) {
            this.toolRequestService.create(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(res => { this.dialogRef.close(res); });
        }
    }
    change() {
        if (this.form.valid) {
            this.toolRequestService.update(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(res => { this.dialogRef.close(res); });
        }
    }
}
CreateUpdateToolOrderRequestComponent.ɵfac = function CreateUpdateToolOrderRequestComponent_Factory(t) { return new (t || CreateUpdateToolOrderRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_instrument_and_tools_modals_service__WEBPACK_IMPORTED_MODULE_0__.InstrumentAndToolsModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_warehouse_services_tool_request_service__WEBPACK_IMPORTED_MODULE_1__.ToolRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
CreateUpdateToolOrderRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateUpdateToolOrderRequestComponent, selectors: [["pek-create-update-tool-order-request"]], decls: 19, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "row"], [1, "col-4"], [1, "form-group"], ["pButton", "", "type", "button", "label", "SEARCH IN WAREHOUSE", 1, "p-button-secondary", 3, "click"], [1, "col-8", "d-flex", "align-items-center"], [4, "ngIf"], ["for", "name"], ["pInputText", "", "formControlName", "initial_quantity", "type", "text", "id", "name", 1, "form-control"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateUpdateToolOrderRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateUpdateToolOrderRequestComponent_Template_button_click_8_listener() { return ctx.openWarehouseSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateUpdateToolOrderRequestComponent_span_11_Template, 2, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Quantity*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-dialog-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateUpdateToolOrderRequestComponent_Template_button_click_18_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXBkYXRlLXRvb2wtb3JkZXItcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 95145:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/instruments/modals/instrumentr-and-tools-writeoff-return/instruments-and-tools-write-off-return.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentsAndToolsWriteOffReturnComponent": () => (/* binding */ InstrumentsAndToolsWriteOffReturnComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../warehouse/services/warehouse-product.service */ 8200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);










function InstrumentsAndToolsWriteOffReturnComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Write Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsWriteOffReturnComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Return To Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InstrumentsAndToolsWriteOffReturnComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.data.product[i_r6].nomenclature.code, " / ", ctx_r2.data.product[i_r6].nomenclature.name, " Quantity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.data.product[i_r6].quantity);
} }
function InstrumentsAndToolsWriteOffReturnComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstrumentsAndToolsWriteOffReturnComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.writeOff()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Write Off");
} }
function InstrumentsAndToolsWriteOffReturnComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstrumentsAndToolsWriteOffReturnComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.returnToWarehouse()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Return To Warehouse");
} }
class InstrumentsAndToolsWriteOffReturnComponent {
    constructor(fb, data, dialogRef, warehouseProductService) {
        this.fb = fb;
        this.data = data;
        this.dialogRef = dialogRef;
        this.warehouseProductService = warehouseProductService;
        this.form = this.fb.group({
            products: this.fb.array([])
        });
    }
    ngOnInit() {
        const fArray = this.data.product.map(x => { return this.fb.group({ id: x.id, quantity: [x.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(x.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]] }); });
        this.form = this.fb.group({
            products: this.fb.array(fArray)
        });
        console.log('this.form', this.form);
    }
    get products() {
        return this.form.get('products');
    }
    returnToWarehouse() {
        if (this.form.valid) {
            this.warehouseProductService.return_to_qc(this.form.get('products').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(res => {
                this.dialogRef.close();
            });
        }
    }
    writeOff() {
        if (this.form.valid) {
            this.warehouseProductService.write_off_confirmation(this.form.get('products').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(res => {
                this.dialogRef.close();
            });
        }
    }
}
InstrumentsAndToolsWriteOffReturnComponent.ɵfac = function InstrumentsAndToolsWriteOffReturnComponent_Factory(t) { return new (t || InstrumentsAndToolsWriteOffReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_0__.WarehouseProductService)); };
InstrumentsAndToolsWriteOffReturnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InstrumentsAndToolsWriteOffReturnComponent, selectors: [["pek-instruments-and-tools-write-off-return"]], decls: 12, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [4, "ngIf"], [3, "formGroup"], ["formArrayName", "products"], [4, "ngFor", "ngForOf"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "class", "p-button-success", 3, "label", "click", 4, "ngIf"], [1, "form-group", 3, "formGroupName"], ["pInputText", "", "formControlName", "quantity", "type", "number", "id", "name", 1, "form-control"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "click"]], template: function InstrumentsAndToolsWriteOffReturnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InstrumentsAndToolsWriteOffReturnComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InstrumentsAndToolsWriteOffReturnComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InstrumentsAndToolsWriteOffReturnComponent_ng_container_7_Template, 7, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, InstrumentsAndToolsWriteOffReturnComponent_button_10_Template, 1, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InstrumentsAndToolsWriteOffReturnComponent_button_11_Template, 1, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type == "writeOff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type == "warehouseReturn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type == "writeOff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type == "warehouseReturn");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVtZW50cy1hbmQtdG9vbHMtd3JpdGUtb2ZmLXJldHVybi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 99779:
/*!***********************************************************************************************************!*\
  !*** ./src/app/instruments/modals/product-move-to-area-locator/product-move-to-area-locator.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductMoveToAreaLocatorComponent": () => (/* binding */ ProductMoveToAreaLocatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../warehouse/services/warehouse-product.service */ 8200);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _shared_pickers_area_locator_picker_area_locator_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/area-locator-picker/area-locator-picker.component */ 25483);
/* harmony import */ var _warehouse_models_warehouse_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../warehouse/models/warehouse-product */ 79246);










class ProductMoveToAreaLocatorComponent {
    constructor(fb, product, dialogRef, warehouseProductService) {
        this.fb = fb;
        this.product = product;
        this.dialogRef = dialogRef;
        this.warehouseProductService = warehouseProductService;
        this.form = this.fb.group({
            quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.product.total_area_locator_quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
            nomenclature: [Number(this.product.nomenclature.id), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            to_area_locator: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            from_area_locator: [Number(this.product.area_locator.id), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() {
        console.log('this.form', this.form.value);
    }
    onChangeQuantity(value) {
        const maxQuantity = this.product.total_area_locator_quantity;
        if (value > maxQuantity) {
            this.form.get('quantity').patchValue(maxQuantity);
        }
    }
    onMove() {
        if (this.form.valid) {
            this.warehouseProductService.moveBulk(this.form.value).subscribe(res => {
                this.dialogRef.close(true);
            });
        }
    }
}
ProductMoveToAreaLocatorComponent.ɵfac = function ProductMoveToAreaLocatorComponent_Factory(t) { return new (t || ProductMoveToAreaLocatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_0__.WarehouseProductService)); };
ProductMoveToAreaLocatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductMoveToAreaLocatorComponent, selectors: [["pek-product-move-to-area-locator"]], decls: 16, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "current_locator_id", "valueChange"], ["for", "quantity"], ["pInputText", "", "formControlName", "quantity", "type", "number", "id", "quantity", 1, "form-control", 3, "ngModelChange"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "disabled", "click"]], template: function ProductMoveToAreaLocatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Locator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "pek-area-locator-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ProductMoveToAreaLocatorComponent_Template_pek_area_locator_picker_valueChange_8_listener($event) { return ctx.form.get("to_area_locator").setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductMoveToAreaLocatorComponent_Template_input_ngModelChange_12_listener($event) { return ctx.onChangeQuantity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductMoveToAreaLocatorComponent_Template_button_click_15_listener() { return ctx.onMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Move Items (", ctx.product.nomenclature.name, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("current_locator_id", ctx.form.get("from_area_locator").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Quantity (Max: ", ctx.product.total_area_locator_quantity, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Move")("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _shared_pickers_area_locator_picker_area_locator_picker_component__WEBPACK_IMPORTED_MODULE_1__.AreaLocatorPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LW1vdmUtdG8tYXJlYS1sb2NhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 59749:
/*!*****************************************************************************!*\
  !*** ./src/app/instruments/services/instrument-and-tools-modals.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstrumentAndToolsModalsService": () => (/* binding */ InstrumentAndToolsModalsService)
/* harmony export */ });
/* harmony import */ var _modals_create_edit_area_create_edit_area_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/create-edit-area/create-edit-area.component */ 56406);
/* harmony import */ var _modals_create_edit_area_locator_create_edit_area_locator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-area-locator/create-edit-area-locator.component */ 38854);
/* harmony import */ var _modals_create_edit_tool_request_create_edit_tool_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/create-edit-tool-request/create-edit-tool-request.component */ 92911);
/* harmony import */ var _shared_modals_warehouse_search_warehouse_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/modals/warehouse-search/warehouse-search.component */ 1326);
/* harmony import */ var _modals_create_update_tool_order_request_create_update_tool_order_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/create-update-tool-order-request/create-update-tool-order-request.component */ 72086);
/* harmony import */ var _modals_product_move_to_area_locator_product_move_to_area_locator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/product-move-to-area-locator/product-move-to-area-locator.component */ 99779);
/* harmony import */ var _modals_instrumentr_and_tools_writeoff_return_instruments_and_tools_write_off_return_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/instrumentr-and-tools-writeoff-return/instruments-and-tools-write-off-return.component */ 95145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);









class InstrumentAndToolsModalsService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    createEditAreaModal(type, area) {
        return this.dialog
            .open(_modals_create_edit_area_create_edit_area_component__WEBPACK_IMPORTED_MODULE_0__.CreateEditAreaComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, area },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    createEditAreaLocatorModal(type, locator, areaId) {
        return this.dialog
            .open(_modals_create_edit_area_locator_create_edit_area_locator_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditAreaLocatorComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, locator, areaId },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    createEditToolRequestModal(type, toolOrder) {
        return this.dialog
            .open(_modals_create_edit_tool_request_create_edit_tool_request_component__WEBPACK_IMPORTED_MODULE_2__.CreateEditToolRequestComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, toolOrder },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    createEditToolRequestNomenclatureModal(type, toolOrderId, toolRequest) {
        return this.dialog
            .open(_modals_create_update_tool_order_request_create_update_tool_order_request_component__WEBPACK_IMPORTED_MODULE_4__.CreateUpdateToolOrderRequestComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, toolRequest, toolOrderId },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    searchInWarehouseNomenclatureModal() {
        return this.dialog
            .open(_shared_modals_warehouse_search_warehouse_search_component__WEBPACK_IMPORTED_MODULE_3__.WarehouseSearchComponent, {
            width: '100vw',
            maxWidth: '100vw',
            height: '100vh',
            maxHeight: '100vh',
            panelClass: 'warehouse-search',
            data: {},
            disableClose: true,
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    productMoveToAreaLocatorModal(product) {
        return this.dialog
            .open(_modals_product_move_to_area_locator_product_move_to_area_locator_component__WEBPACK_IMPORTED_MODULE_5__.ProductMoveToAreaLocatorComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: product,
            disableClose: true,
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    productWriteOfReturnModal(product, type) {
        return this.dialog
            .open(_modals_instrumentr_and_tools_writeoff_return_instruments_and_tools_write_off_return_component__WEBPACK_IMPORTED_MODULE_6__.InstrumentsAndToolsWriteOffReturnComponent, {
            width: '50rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { product, type },
            disableClose: true,
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
InstrumentAndToolsModalsService.ɵfac = function InstrumentAndToolsModalsService_Factory(t) { return new (t || InstrumentAndToolsModalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
InstrumentAndToolsModalsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: InstrumentAndToolsModalsService, factory: InstrumentAndToolsModalsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85573:
/*!**********************************************************!*\
  !*** ./src/app/warehouse/services/tool-order.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    create(entity) {
        return this.httpClient.post(this.API_URL + this.url, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data;
        }));
    }
    update(entity) {
        return this.httpClient.put(this.API_URL + this.url + entity.id + '/', entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    get_paginated(query) {
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
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
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
    create(entity) {
        return this.httpClient.post(this.API_URL + this.url, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data;
        }));
    }
    update(entity) {
        return this.httpClient.put(this.API_URL + this.url + entity.id + '/', entity);
    }
    delete(entity) {
        return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
    }
}
ToolRequestService.ɵfac = function ToolRequestService_Factory(t) { return new (t || ToolRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ToolRequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ToolRequestService, factory: ToolRequestService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_instruments_instruments_module_ts.js.map