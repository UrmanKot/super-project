"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_manufacturing_manufacturing_module_ts"],{

/***/ 12570:
/*!*******************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-all-plans/manufacturing-all-plans.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingAllPlansComponent": () => (/* binding */ ManufacturingAllPlansComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manufacturing-chart/manufacturing-chart.component */ 12188);


class ManufacturingAllPlansComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManufacturingAllPlansComponent.ɵfac = function ManufacturingAllPlansComponent_Factory(t) { return new (t || ManufacturingAllPlansComponent)(); };
ManufacturingAllPlansComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManufacturingAllPlansComponent, selectors: [["pek-manufacturing-all-plans"]], decls: 2, vars: 1, consts: [[1, "manufacturing-all-plans"], [3, "isPlan"]], template: function ManufacturingAllPlansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "pek-manufacturing-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isPlan", true);
    } }, dependencies: [_manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_0__.ManufacturingChartComponent], styles: [".manufacturing-all-plans[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctYWxsLXBsYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLWFsbC1wbGFucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW51ZmFjdHVyaW5nLWFsbC1wbGFucyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 12188:
/*!***********************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-chart/manufacturing-chart.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingChartComponent": () => (/* binding */ ManufacturingChartComponent),
/* harmony export */   "TaskOrder": () => (/* binding */ TaskOrder),
/* harmony export */   "UITask": () => (/* binding */ UITask)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/task */ 29075);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 73);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _models_list_product_production__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/list-product-production */ 13492);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var _enums_shift_types_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/shift-types.enum */ 7601);
/* harmony import */ var _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/planning-status.enum */ 33060);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/task.service */ 10764);
/* harmony import */ var _product_structure_services_technology_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../product-structure/services/technology.service */ 74351);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/calendar.service */ 43062);

















const _c0 = ["panelBorder"];
function ManufacturingChartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ManufacturingChartComponent_div_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.allProductsOnSelected = $event); })("change", function ManufacturingChartComponent_div_4_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.toggleAllProductsSelected()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.allProductsOnSelected);
} }
function ManufacturingChartComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 38, 39);
} }
function ManufacturingChartComponent_div_22_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_22_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.confirmDateChanges(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManufacturingChartComponent_div_22_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_22_div_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.confirmDateChanges(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManufacturingChartComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManufacturingChartComponent_div_22_div_1_button_2_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManufacturingChartComponent_div_22_div_1_button_3_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r17.hasRootDeliveryDateChanges && !ctx_r17.hasChildDeliveryDateChanges ? "Root" : "", " Dates Of Delivery Changed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r17.hasChildDeliveryDateChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r17.hasRootDeliveryDateChanges && !ctx_r17.hasChildDeliveryDateChanges);
} }
function ManufacturingChartComponent_div_22_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "On Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManufacturingChartComponent_div_22_div_2_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_22_div_2_div_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.sendPlanToCorrections()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Request for planing corrections ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManufacturingChartComponent_div_22_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManufacturingChartComponent_div_22_div_2_div_3_button_3_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r26.getLastTask == null ? null : ctx_r26.getLastTask.change_request));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx_r26.getLastTask == null ? null : ctx_r26.getLastTask.change_request) ? "(Requested For Planing Corrections)" : "", " ");
} }
function ManufacturingChartComponent_div_22_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Waiting Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManufacturingChartComponent_div_22_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_22_div_2_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r32.sendPlanToConfirmation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Sent To Confirmation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ManufacturingChartComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManufacturingChartComponent_div_22_div_2_div_2_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManufacturingChartComponent_div_22_div_2_div_3_Template, 5, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ManufacturingChartComponent_div_22_div_2_span_4_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ManufacturingChartComponent_div_22_div_2_button_5_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx_r18.getLastTask == null ? null : ctx_r18.getLastTask.planning_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r18.PlanningStatus.ON_STOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r18.PlanningStatus.PLANNED);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r18.PlanningStatus.WAITING_CONFIRMATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r18.PlanningStatus.REQUIRES_PLANNING);
} }
function ManufacturingChartComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ManufacturingChartComponent_div_22_div_1_Template, 4, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManufacturingChartComponent_div_22_div_2_Template, 6, 5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.hasDeliveryDateChanges && !ctx_r2.isPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.getLastTask == null ? null : ctx_r2.getLastTask.planning_status) && !ctx_r2.isPlan);
} }
function ManufacturingChartComponent_pek_manufacturing_list_product_production_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "pek-manufacturing-list-product-production", 53);
} if (rf & 2) {
    const rootProduction_r34 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("production", rootProduction_r34)("productionNameWidth", ctx_r3.productionNameWidth)("isRoot", true)("isLeftPanel", true);
} }
function ManufacturingChartComponent_div_32_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateInfo_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, dateInfo_r36.value == null ? null : dateInfo_r36.value.date));
} }
function ManufacturingChartComponent_div_32_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateInfo_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, dateInfo_r36.value.date, "d"));
} }
const _c1 = function (a0) { return { "middle": a0 }; };
function ManufacturingChartComponent_div_32_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 61);
} if (rf & 2) {
    const time_r43 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("margin-left", ctx_r40.marginTimeLeft + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("pTooltip", (time_r43 + 1) * 3 + ":" + "00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c1, time_r43 == 3));
} }
function ManufacturingChartComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManufacturingChartComponent_div_32_div_1_span_2_Template, 3, 3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManufacturingChartComponent_div_32_div_1_span_3_Template, 3, 4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ManufacturingChartComponent_div_32_div_1_div_5_Template, 1, 6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const dateInfo_r36 = ctx.$implicit;
    const idx_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", (dateInfo_r36.value.isVac ? ctx_r35.vacationCoords : ctx_r35.weekdayCoords) + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("ml-3", idx_r37 === 0)("day-header_week", dateInfo_r36.value.isVac);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("day-name_small", ctx_r35.planScale === 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !dateInfo_r36.value.isVac);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", dateInfo_r36.value.isVac);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r35.hours);
} }
function ManufacturingChartComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ManufacturingChartComponent_div_32_div_1_Template, 6, 11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r4.dates));
} }
function ManufacturingChartComponent_div_33_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateInfo_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, dateInfo_r45.value == null ? null : dateInfo_r45.value.start), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, dateInfo_r45.value == null ? null : dateInfo_r45.value.end), "");
} }
function ManufacturingChartComponent_div_33_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateInfo_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, dateInfo_r45.value == null ? null : dateInfo_r45.value.start));
} }
function ManufacturingChartComponent_div_33_div_1_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 67);
} }
function ManufacturingChartComponent_div_33_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 68);
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("right", "-" + (ctx_r55.dayWidth - 2) + "px");
} }
function ManufacturingChartComponent_div_33_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManufacturingChartComponent_div_33_div_1_div_5_div_2_Template, 1, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManufacturingChartComponent_div_33_div_1_div_5_div_3_Template, 1, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r52 = ctx.$implicit;
    const dayIdx_r53 = ctx.index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("margin-left", ctx_r49.dayWidth + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("hour-line-week", dayIdx_r53 === 4 || dayIdx_r53 === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 7, day_r52.date, "MMMM d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", dayIdx_r53 === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", dayIdx_r53 === 4 || dayIdx_r53 === 5);
} }
function ManufacturingChartComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ManufacturingChartComponent_div_33_div_1_span_2_Template, 4, 6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ManufacturingChartComponent_div_33_div_1_span_3_Template, 3, 3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ManufacturingChartComponent_div_33_div_1_div_5_Template, 4, 10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const dateInfo_r45 = ctx.$implicit;
    const idx_r46 = ctx.index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r44.weekdayCoords + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("ml-3", idx_r46 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("day-name_small", ctx_r44.planScale === 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r44.planScale !== 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r44.planScale === 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r44.getDays(dateInfo_r45.value == null ? null : dateInfo_r45.value.days));
} }
function ManufacturingChartComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ManufacturingChartComponent_div_33_div_1_Template, 6, 9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("week-header", ctx_r5.planScale === 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, ctx_r5.weekDates));
} }
function ManufacturingChartComponent_div_34_pek_manufacturing_list_product_production_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "pek-manufacturing-list-product-production", 71);
} if (rf & 2) {
    const rootProduction_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("production", rootProduction_r57);
} }
function ManufacturingChartComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ManufacturingChartComponent_div_34_pek_manufacturing_list_product_production_1_Template, 1, 1, "pek-manufacturing-list-product-production", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.rootProductions);
} }
function ManufacturingChartComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 72)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.cancelEditTasks()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 74)(3, "p-multiSelect", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function ManufacturingChartComponent_div_37_Template_p_multiSelect_onChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.selectTasks()); })("ngModelChange", function ManufacturingChartComponent_div_37_Template_p_multiSelect_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.selectedTechnologiesPlanning = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_37_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r62.editTasks()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r7.technologiesPlanning)("ngModel", ctx_r7.selectedTechnologiesPlanning);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Selected ", ctx_r7.selectedTasks.size, " tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r7.selectedTasks.size);
} }
function ManufacturingChartComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 78)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r63.cancelMakeOrder()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 79)(3, "p-multiSelect", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function ManufacturingChartComponent_div_38_Template_p_multiSelect_onChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.filterTasks()); })("ngModelChange", function ManufacturingChartComponent_div_38_Template_p_multiSelect_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r66.selectedTechnologies = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_38_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r67.makeOrder()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r8.technologies)("ngModel", ctx_r8.selectedTechnologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r8.selectedTechnologies.length === 0);
} }
function ManufacturingChartComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 81)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r68.mode = "planning"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 7)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Click on the button");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "to add items to the plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function ManufacturingChartComponent_div_40_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 104)(1, "p-multiSelect", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function ManufacturingChartComponent_div_40_div_13_Template_p_multiSelect_onChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r71.filterTasksForStatus()); })("ngModelChange", function ManufacturingChartComponent_div_40_div_13_Template_p_multiSelect_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73.selectedProductions = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r70.chartRootTasks)("ngModel", ctx_r70.selectedProductions);
} }
function ManufacturingChartComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 84)(1, "div", 14)(2, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Initialize:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_40_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r74.mode = "make-order"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_40_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r76.mode = "edit-tasks"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_40_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r77.mode = "add-items"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_40_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r78.toggleShowConfirmation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 90)(9, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_40_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r79.togglePlanScale("minus")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_div_40_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r80.togglePlanScale("plus")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ManufacturingChartComponent_div_40_div_13_Template, 2, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 95)(15, "p-multiSelect", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_multiSelect_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r81.selectedStatuses = $event); })("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_multiSelect_ngModelChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r82.filterTasksForStatus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 97)(17, "p-multiSelect", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_multiSelect_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r83.selectedFilterTechnologies = $event); })("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_multiSelect_ngModelChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r84.filterTasksForStatus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 99)(19, "p-multiSelect", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_multiSelect_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r85.selectedProductionTypes = $event); })("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_multiSelect_ngModelChange_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r86.filterTasksForStatus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 101)(21, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Displaying: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p-dropdown", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_dropdown_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.selectedDisplay = $event); })("ngModelChange", function ManufacturingChartComponent_div_40_Template_p_dropdown_ngModelChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r88.onSelectDisplay()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "pi " + (ctx_r10.isShowConfirmationMenu ? "pi-eye-slash" : "pi-eye"))("label", (ctx_r10.isShowConfirmationMenu ? "Hide" : "Show") + " Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r10.planScale === 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r10.planScale, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r10.planScale === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r10.statuses)("ngModel", ctx_r10.selectedStatuses)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r10.technologiesPlanning)("ngModel", ctx_r10.selectedFilterTechnologies)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r10.productionsTypes)("ngModel", ctx_r10.selectedProductionTypes)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r10.displayOptions)("ngModel", ctx_r10.selectedDisplay);
} }
function ManufacturingChartComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Chart loading in progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
const _c2 = function () { return { left: 12 }; };
const _c3 = function () { return { left: true }; };
class Status {
}
class Week {
}
class DateInfo {
}
class WeekInfo {
}
class UITask extends _shared_models_task__WEBPACK_IMPORTED_MODULE_0__.TaskSet {
}
class TaskOrder {
}
class ProductionType {
}
class DisplayOption {
}
let ManufacturingChartComponent = class ManufacturingChartComponent {
    constructor(tasksService, technologiesService, modalService, cd, adapterService, router, route, calendar) {
        this.tasksService = tasksService;
        this.technologiesService = technologiesService;
        this.modalService = modalService;
        this.cd = cd;
        this.adapterService = adapterService;
        this.router = router;
        this.route = route;
        this.calendar = calendar;
        this.PlanningStatus = _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_4__.PlanningStatus;
        this.planScale = 100;
        this.nomenclaturesTypes = { '0': 3, '1': 1, '2': 2 };
        this.selectedStatuses = [];
        this.selectedFilterTechnologies = [];
        this.selectedProductionTypes = [];
        this.productionsTypes = [
            { value: '0', name: 'Outsource' },
            { value: '1', name: 'Own production' },
            { value: '2', name: 'Purchased' },
        ];
        this.statuses = [
            { value: 'Not processed', label: 'Not processed' },
            { value: 'Deficit', label: 'Deficit' },
            { value: 'Rework', label: 'Rework' },
            { value: 'Ordered', label: 'Ordered' },
            { value: 'On stock', label: 'On stock' },
            { value: 'Reserved', label: 'Reserved' },
        ];
        this.selectedDisplay = 'days';
        this.displayOptions = [
            { option: 'days', label: 'Days' },
            { option: 'weeks', label: 'Weeks' }
        ];
        this.isPlan = false;
        this.isRoot = false;
        this.isRootFiltered = false;
        this.productionNameWidth = 150; // ширина столбца name в диаграмме
        this.mode = 'planning';
        /** Все задачи, необходимые для производства детали */
        this.loadingTasks = [];
        this.chartRootTasks = [];
        this.tasks = [];
        this.selectedTasks = new Set();
        this.innerContentWidth = 516; // ширина шапки с датами (500px - ширина .task-header-name, + 16px отступ)
        /** Корневая последовательность сборки - сборка финальной детали из запчастей */
        this.rootProductions = [];
        /** Все последовательности сплошным списком */
        this.productions = [];
        this.marginTimeLeft = 34;
        this.scaleHourVacationDay = 1;
        this.scaleHourWeekdayDay = 12;
        this.vacationCoords = 24;
        this.weekdayCoords = 288;
        this.weekWeekDayCoords = 41.125;
        this.weekScaleHourDay = 1.717;
        this.allTechnologies = [];
        this.technologies = [];
        this.technologiesPlanning = [];
        this.availableTechnologies = new Set();
        this.availableTechnologiesPlanning = new Set();
        this.filteredTasksSet = new Set();
        this.selectedTechnologies = [];
        this.selectedTechnologiesPlanning = [];
        this.selectedProductions = [];
        this.allProductsOnSelected = true;
        this.isShowBorder = false;
        this.frameBorderRight = 0; // положение рамки при ресайзе левой панели
        this.reserveTasks = [];
        this.childrenEndHighlighted = false;
        /** Соответствие началу даты (00 часов) информации о ней. */
        this.dates = new Map();
        this.weekDates = new Map();
        /** Для поиска информации о дате по координате */
        this.datesByCoords = [];
        // rootId = this.route.snapshot.paramMap.get('rootId');
        this.colors = [
            '#fbf8cc',
            '#fde4cf',
            '#ffcfd2',
            '#f1c0e8',
            '#cfbaf0',
            '#a3c4f3',
            '#e8e8e4',
            '#d7e3fc',
            '#dbfdd8',
            '#f9f195',
            '#bdd7d2',
            '#ebf4ff',
            '#ccd5ae',
            '#e3d5ca',
            '#e0d4ed',
            // '#FFF587',
            // '#c1b9eb',
            // '#F2C5BB',
            // '#F2E1AE',
            // '#A5D3E6',
            // '#CAFFBF',
            // '#BABFD9',
            // '#d3daac',
            // '#9BF6FF',
            // '#D9C877',
            // '#c9c7c5',
            // '#e9f6eb',
            // '#F2C9E0',
            // '#BBDDF2',
            // '#F3FEB0',
        ];
        this.isExpanded = true;
        this.hasDeliveryDateChanges = false;
        this.hasRootDeliveryDateChanges = false;
        this.hasChildDeliveryDateChanges = false;
        /** Соответствие ключа строки в графике строке */
        this.productionMap = new Map();
        this.uiTaskMap = new Map();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.isLoading = true;
        this.isShowConfirmationMenu = false;
        this.hours = Array(7).fill(0).map((x, i) => i);
    }
    /** @deprecated */
    get startDate() {
        return this.dates.values().next().value;
    }
    ngOnInit() {
        if (this.isPlan) {
            this.isExpanded = false;
            this.isRoot = true;
        }
        this.technologiesService.get().subscribe(technologies => {
            this.technologies = technologies;
            this.allTechnologies = technologies;
            this.technologiesPlanning = technologies;
            this.getTasks().subscribe();
        });
        document.body.style.overflow = 'hidden';
        this.taskDeleteSub = this.tasksService.delete$.subscribe(taskSet => this.onTaskDelete(taskSet));
        // on esc return to planing mode
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(window, 'keydown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(event => event.key === 'Escape'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => this.mode !== 'planning')).subscribe(event => this.mode = 'planning');
    }
    updateTechnologies() {
        this.availableTechnologies.clear();
        this.availableTechnologiesPlanning.clear();
        // this.tasks.filter(t => !t.is_locked && t.status !== 'Ordered' && t.status !== 'On stock')
        this.tasks.filter(t => !t.is_locked && t.status === 'Deficit')
            .forEach(task => {
            if (!task.technology && task.list_product.nomenclature.type === '1') {
                this.availableTechnologies.add('Assembly');
            }
            else {
                this.availableTechnologies.add(task.technology);
            }
        });
        this.tasks.forEach(task => {
            if (!task.technology && task.list_product.nomenclature.type === '1') {
                this.availableTechnologiesPlanning.add('Assembly');
            }
            else {
                this.availableTechnologiesPlanning.add(task.technology);
            }
        });
        this.technologies = this.allTechnologies.filter(t => this.availableTechnologies.has(t.name));
        this.technologiesPlanning = this.allTechnologies.filter(t => this.availableTechnologiesPlanning.has(t.name));
    }
    getTasks(rootId = null) {
        // Используются для получения тасков
        this.rootId = rootId ? rootId : this.rootId;
        let querySearch = [{ name: 'for_root_id__in', value: this.rootId }];
        // let option = 'for_root_id__in';
        // let value: string | boolean = this.rootId;
        if (this.isPlan && !rootId) {
            // option = 'is_root';
            // value = true;
            querySearch = [
                { name: 'is_root', value: true },
                { name: 'statuses', value: '0,1,2,3' }
            ];
        }
        return this.tasksService.get(querySearch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(tasks => {
            // избавляемся от дубликатов задач
            tasks = tasks.filter(task => !this.tasks.find(t => task.id === t.id));
            // преобразуем строки даты в дату
            tasks = tasks.map(task => {
                return {
                    ...task,
                    status: task.refunded_orders.length > 0 && !task.is_refunded ? 'Deficit' : task.status,
                    production_type: task.list_product.nomenclature.type === '0' ? '2' : task.production_type,
                    start_date: new Date(task.start_date),
                    end_date: new Date(task.end_date),
                    unconfirmed_end_date: task.unconfirmed_end_date ? new Date(task.unconfirmed_end_date) : null,
                };
            });
            // добавляем технологии загруженных задач в список всех используемых технологий
            // tasks.filter(t => !t.is_locked && t.status !== 'Ordered' && t.status !== 'On stock')
            tasks.filter(t => !t.is_locked && t.status === 'Deficit')
                .forEach(task => {
                if (!task.technology && task.list_product.nomenclature.type === '1') {
                    task.technology = 'Assembly';
                    this.availableTechnologies.add('Assembly');
                }
                else {
                    this.availableTechnologies.add(task.technology);
                }
            });
            tasks.forEach(task => {
                if (!task.technology && task.list_product.nomenclature.type === '1') {
                    this.availableTechnologiesPlanning.add('Assembly');
                }
                else {
                    this.availableTechnologiesPlanning.add(task.technology);
                }
                task.list_product.task_required_quantity = task.required_quantity;
                task.groupId = '';
            });
            this.technologies = this.allTechnologies.filter(t => this.availableTechnologies.has(t.name));
            this.technologiesPlanning = this.allTechnologies.filter(t => this.availableTechnologiesPlanning.has(t.name));
            this.tasks.push(...tasks);
            this.loadingTasks = [...this.tasks];
            if (this.isPlan && this.isRoot) {
                this.chartRootTasks = [];
                this.tasks.forEach(task => {
                    if (!this.chartRootTasks.find(t => t.family_id === task.family_id &&
                        t.list_product.id === task.list_product.id && t.technology === task.technology &&
                        task.list_product.tree_id === t.list_product.tree_id)) {
                        this.chartRootTasks.push(task);
                    }
                });
                this.chartRootTasks.forEach(root => root.label = `(${root.list_product.id}) ${root.list_product.nomenclature.name}`);
                this.chartRootTasks.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime() ||
                    this.nomenclaturesTypes[a.list_product.nomenclature.type] - this.nomenclaturesTypes[b.list_product.nomenclature.type] ||
                    a.list_product.nomenclature.id - b.list_product.nomenclature.id);
                this.isRoot = false;
            }
            this.updateTimeline();
            this.updateTree();
            this.update();
            this.paint();
            this.isLoading = false;
            return tasks;
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.untilDestroyed)(this));
    }
    generateTasksGroups() {
        this.tasks.forEach(task => {
            if (task.list_product.level !== 0) {
                const filteredTasks = this.tasks.filter(t => t.list_product.nomenclature.id ===
                    task.list_product.nomenclature.id && t.list_product.level === task.list_product.level &&
                    t.family_id === task.family_id);
                const firstTasks = filteredTasks.filter(t => !t.previous_task);
                const parentTasks = [];
                let groupId = 0;
                firstTasks.forEach(t => {
                    const uiParent = t.list_product.id;
                    groupId++;
                    let currentTask = t;
                    while (currentTask?.next_task) {
                        currentTask.uiGroupId = groupId;
                        currentTask.uiParent = uiParent;
                        parentTasks.push(currentTask);
                        currentTask = this.tasks.find(t2 => t2.id === currentTask.next_task);
                    }
                    currentTask.uiGroupId = groupId;
                    currentTask.uiParent = uiParent;
                    parentTasks.push(currentTask);
                });
                parentTasks.filter(t => t.uiGroupId === task.uiGroupId).forEach(t => {
                    task.groupId += `${t.technology}/${t.status}/${t.list_product.nomenclature.id}/${t.list_product.level}/${t.created_orders.map(o => o.id).join(',')}`;
                    // const ff = this.tasks.filter(p => p.list_product.parent === task.uiParent);
                    // ff.forEach(p => {
                    //   task.groupId += `${p.technology}/${p.status}/${p.list_product.nomenclature.id}/${p.list_product.level}`;
                    // });
                });
            }
        });
    }
    updateTimeline() {
        /** Прибалвяет к дате дни */
        const addDays = (d, days) => {
            const result = new Date(d.getTime());
            result.setDate(result.getDate() + days);
            result.setHours(0, 0, 0, 0);
            return result;
        };
        const min = new Date(Math.min(...this.tasks.filter(t => t.start_date).map(t => t.start_date.getTime())));
        let max = new Date(Math.max(...this.tasks.filter(t => t.end_date).map(t => t.end_date.getTime())));
        const maxUnconfirmed = new Date(Math.max(...this.tasks.filter(t => t.unconfirmed_end_date).map(t => t.unconfirmed_end_date.getTime())));
        if (maxUnconfirmed && maxUnconfirmed > max) {
            max = maxUnconfirmed;
        }
        let x = 0;
        this.dates.clear();
        this.weekDates.clear();
        if (this.selectedDisplay === 'days') {
            let date = addDays(min, 0);
            do {
                const dateInfo = {
                    date: new Date(date),
                    isVac: this.calendar.isVac(date),
                    x,
                };
                dateInfo.date.setHours(0, 0, 0, 0);
                this.dates.set(dateInfo.date.getTime(), dateInfo);
                date = addDays(date, 1);
                x += dateInfo.isVac ? this.vacationCoords : this.weekdayCoords;
            } while (date <= max);
        }
        else {
            const weeks = this.getWeeksBetween(min, max);
            weeks.forEach(week => {
                let i = 0;
                const days = [];
                while (i < 7) {
                    const date = new Date(week.start.getTime() + 86400000 * i);
                    const day = {
                        date: new Date(date),
                        isVac: this.calendar.isVac(date),
                        x,
                    };
                    days.push(day);
                    x += this.weekWeekDayCoords;
                    i++;
                }
                const weekInfo = {
                    start: week.start,
                    end: week.end,
                    days,
                };
                this.weekDates.set(week.start.getTime(), weekInfo);
            });
        }
        this.innerContentWidth = 516;
        // высчитываем длину контейнера
        if (this.selectedDisplay === 'days') {
            this.dates.forEach(day => {
                if (!day.isVac) {
                    this.innerContentWidth += this.weekdayCoords;
                }
                else {
                    this.innerContentWidth += this.vacationCoords;
                }
            });
            this.datesByCoords = Array.from(this.dates.values()).reverse();
        }
        else {
            this.innerContentWidth += Array.from(this.weekDates.values())
                .map(d => d.days)
                .flat()
                .reduce((sum, day) => sum += this.weekWeekDayCoords, 0);
            this.datesByCoords = Array.from(this.weekDates.values()).map(p => p.days).flat().reverse();
        }
    }
    getWeeksBetween(startDate, endDate) {
        const weeks = [];
        let currentDate = new Date(startDate.setHours(0, 0, 0, 0) - 86400000 * (startDate.getDay() - 1));
        currentDate.setHours(0, 0, 0, 0);
        while (currentDate.getTime() <= endDate.getTime()) {
            let weekEndDate = new Date(currentDate);
            weekEndDate.setDate(currentDate.getDate() + 6);
            if (weekEndDate > endDate) {
                weekEndDate = endDate;
            }
            weeks.push({
                start: new Date(currentDate),
                end: weekEndDate,
            });
            currentDate.setDate(currentDate.getDate() + 7);
        }
        const lastWeek = { ...weeks[weeks.length - 1] };
        weeks[weeks.length - 1].end = new Date(lastWeek.end.setHours(0, 0, 0, 0) + 86400000 * (7 - lastWeek.end.getDay()));
        return weeks;
    }
    ;
    testWeek() {
        const min = new Date(Math.min(...this.tasks.filter(t => t.start_date).map(t => t.start_date.getTime())));
        let max = new Date(Math.max(...this.tasks.filter(t => t.end_date).map(t => t.end_date.getTime())));
        const maxUnconfirmed = new Date(Math.max(...this.tasks.filter(t => t.unconfirmed_end_date).map(t => t.unconfirmed_end_date.getTime())));
        if (maxUnconfirmed && maxUnconfirmed > max) {
            max = maxUnconfirmed;
        }
        const weeks = this.getWeeksBetween(min, max);
        let x = 0;
        weeks.forEach(week => {
            let i = 0;
            const days = [];
            while (i < 7) {
                const date = new Date(week.start.getTime() + 86400000 * i);
                const day = {
                    date: new Date(date),
                    isVac: this.calendar.isVac(date),
                    x,
                };
                days.push(day);
                x += this.weekWeekDayCoords;
                i++;
            }
            const weekInfo = {
                start: week.start,
                end: week.end,
                days,
            };
            this.weekDates.set(week.start.getTime(), weekInfo);
        });
        this.datesByCoords = Array.from(this.weekDates.values()).map(p => p.days).flat().reverse();
        this.updateProductions();
    }
    updateProductions() {
        this.productions.forEach(production => {
            production.tasks.forEach(task => {
                task.left = this.getX(task.start_date);
                task.width = this.getX(task.end_date) - task.left;
                this.getTaskDays(task);
                this.updateTimeline();
                this.updateMargins(production);
            });
        });
    }
    getX(date) {
        const dateInfo = this.getDateInfo(date);
        let hoursShift;
        const dateShift = dateInfo?.x;
        if (this.selectedDisplay === 'days') {
            hoursShift = date.getHours() * (dateInfo?.isVac ? this.scaleHourVacationDay : this.scaleHourWeekdayDay);
        }
        else {
            hoursShift = date.getHours() * this.weekScaleHourDay;
        }
        return dateShift + hoursShift;
    }
    getDate(x) {
        const dateInfo = this.getDateInfo(x);
        const delta = x - dateInfo.x;
        let hourScale;
        if (this.selectedDisplay === 'days') {
            hourScale = dateInfo.isVac ? this.scaleHourVacationDay : this.scaleHourWeekdayDay;
        }
        else {
            hourScale = this.weekScaleHourDay;
        }
        const result = new Date(dateInfo.date);
        result.setHours(delta / hourScale);
        return result;
    }
    getDateInfo(x) {
        if (this.selectedDisplay === 'days') {
            let info;
            if (x instanceof Date) {
                const dateStart = new Date(x);
                dateStart.setHours(0, 0, 0, 0);
                info = this.dates?.get(dateStart.getTime());
            }
            else {
                info = this.datesByCoords.find(i => i.x <= x);
            }
            // if (!info) {
            //   throw new Error(`Координата "${x}" выходит за пределы графика`);
            // }
            return info;
        }
        else {
            let info;
            if (x instanceof Date) {
                const dateStart = new Date(x);
                dateStart.setHours(0, 0, 0, 0);
                // info = this.dates?.get(dateStart.getTime());
                for (let week of this.weekDates.values()) {
                    if (!info) {
                        info = week.days.find(d => d.date.getTime() === dateStart.getTime());
                    }
                }
            }
            else {
                info = this.datesByCoords.find(i => i.x <= x);
            }
            return info;
        }
    }
    getTaskDays(task) {
        const dates = new Map();
        /** Прибалвяет к дате дни */
        const addDays = (d, days) => {
            const result = new Date(d.getTime());
            result.setDate(result.getDate() + days);
            return result;
        };
        dates.clear();
        let date = addDays(task.start_date, 0);
        date.setHours(0, 0, 0, 0);
        // const taskEndDate = task.unconfirmed_end_date ? task.unconfirmed_end_date : task.end_date;
        const taskEndDate = task.end_date;
        do {
            const dateInfo = {
                date: new Date(date),
                isVac: this.calendar.isVac(date),
                x: this.getX(date) - task.left,
            };
            dateInfo.date.setHours(0, 0, 0, 0);
            dates.set(dateInfo.date.getTime(), dateInfo);
            date = addDays(date, 1);
        } while (date <= taskEndDate);
        if (task.unconfirmed_end_date && task.unconfirmed_end_date > task.end_date) {
            do {
                const dateInfo = {
                    date: new Date(date),
                    isVac: this.calendar.isVac(date),
                    x: this.getX(date) - task.left,
                };
                dateInfo.date.setHours(0, 0, 0, 0);
                dates.set(dateInfo.date.getTime(), dateInfo);
                date = addDays(date, 1);
            } while (date <= task.unconfirmed_end_date);
        }
        task.days = (Array.from(dates.values()));
    }
    moveBorder(event) {
        this.isShowBorder = true;
        if (this.frameBorderRight !== event.edges.left) {
            if (this.frameBorderRight < event.edges.left) {
                this.frameBorderRight += 12;
            }
            else {
                this.frameBorderRight -= 12;
            }
            if (this.panelBorder) {
                this.panelBorder.nativeElement.style.right = `${-this.frameBorderRight}px`;
            }
        }
    }
    resizePanel(event) {
        const newSize = this.productionNameWidth + event.edges.left;
        if (newSize > 70) {
            this.productionNameWidth = newSize;
        }
        else {
            this.productionNameWidth = 70;
        }
        this.frameBorderRight = 0;
        this.isShowBorder = false;
        if (this.panelBorder) {
            this.panelBorder.nativeElement.style.right = `0px`;
        }
    }
    filteredRoot(evt) {
        const ids = this.selectedProductions.map(t => t.family_id);
        if (ids.length > 0) {
            this.isRootFiltered = true;
            this.productions.forEach(production => {
                production.isVisible = false;
                ids.forEach(id => {
                    if (id === production.tasks[0].family_id) {
                        production.isVisible = true;
                    }
                });
            });
        }
        else {
            this.isRootFiltered = false;
            this.productions.forEach(production => production.isVisible = true);
        }
    }
    filterTasks(isFilteredAll) {
        this.productions.forEach(production => production.isVisible = false);
        this.productions.forEach(production => {
            production.isFiltered = Boolean(production.tasks.find(task => {
                return !this.selectedTechnologies.length ||
                    (isFilteredAll ?
                        this.selectedTechnologies.includes(task.technology ? task.technology : 'Assembly') :
                        this.isTaskMeetsFilterConditions(task));
            }));
            // делаем видимыми родительские элементы
            if (production.isFiltered) {
                let parent = production;
                while (parent) {
                    parent.isVisible = true;
                    parent = parent.parent;
                }
            }
        });
    }
    filterTasksForStatus() {
        const selectedTasks = [];
        this.filteredTasksSet.clear();
        if (!this.selectedStatuses) {
            this.selectedStatuses = [];
        }
        if (!this.selectedFilterTechnologies) {
            this.selectedFilterTechnologies = [];
        }
        if (!this.selectedProductionTypes) {
            this.selectedProductionTypes = [];
        }
        this.productions.forEach(production => production.isVisible = false);
        this.productions.forEach(production => {
            let tasks = production.tasks;
            let filteredTasks = [];
            if (this.isPlan) {
                if (this.selectedProductions.length) {
                    this.selectedProductions.forEach((prod, idx) => {
                        const tt = tasks.filter(t => t.family_id === prod);
                        filteredTasks = filteredTasks.concat(tt);
                        if (idx === this.selectedProductions.length - 1) {
                            tasks = [...filteredTasks];
                            filteredTasks = [];
                        }
                    });
                }
            }
            console.log(this.selectedStatuses);
            console.log(this.selectedFilterTechnologies);
            if (this.selectedStatuses.length) {
                this.selectedStatuses.forEach((status, idx) => {
                    const tt = tasks.filter(t => t.status === status);
                    filteredTasks = filteredTasks.concat(tt);
                    if (idx === this.selectedStatuses.length - 1) {
                        tasks = [...filteredTasks];
                        filteredTasks = [];
                    }
                });
            }
            if (this.selectedFilterTechnologies.length) {
                this.selectedFilterTechnologies.forEach((technology, idx) => {
                    const tt = tasks.filter(t => t.technology === technology);
                    filteredTasks = filteredTasks.concat(tt);
                    if (idx === this.selectedFilterTechnologies.length - 1) {
                        tasks = [...filteredTasks];
                        filteredTasks = [];
                    }
                });
            }
            if (this.selectedProductionTypes.length) {
                this.selectedProductionTypes.forEach((type, idx) => {
                    const tt = tasks.filter(t => t.production_type === type);
                    filteredTasks = filteredTasks.concat(tt);
                    if (idx === this.selectedProductionTypes.length - 1) {
                        tasks = [...filteredTasks];
                        filteredTasks = [];
                    }
                });
            }
            tasks.forEach(t => {
                this.filteredTasksSet.add(t.id);
                if (this.isPlan) {
                    t.tasks.forEach(task => selectedTasks.push(task));
                }
            });
            production.isFiltered = Boolean(production.tasks.find(task => {
                return this.test(task);
            }));
            // делаем видимыми родительские элементы
            if (production.isFiltered) {
                let parent = production;
                while (parent) {
                    parent.isVisible = true;
                    if (this.isPlan) {
                        parent.tasks[0].tasks.forEach(task => selectedTasks.push(task));
                        this.updateMargins(parent);
                    }
                    parent = parent.parent;
                }
            }
        });
        if (this.isPlan) {
            this.reserveTasks = [...this.tasks];
            this.tasks = [...selectedTasks];
            this.productions.filter(p => p.isVisible).forEach(production => {
                production.tasks.forEach(task => {
                    task.left = this.getX(task.start_date);
                    task.width = this.getX(task.end_date) - task.left;
                    this.updateTimeline();
                    this.getTaskDays(task);
                    this.updateMargins(production);
                });
            });
            this.updateTechnologies();
        }
    }
    selectTasks() {
        this.selectedTasks.clear();
        this.selectedTechnologiesPlanning.forEach(t => {
            this.productions.forEach(production => {
                production.tasks.forEach(task => {
                    task.production = production;
                    if (task.technology === t) {
                        this.selectedTasks.add(task);
                    }
                    else if (task.list_product.nomenclature.type !== '0' && !task.technology && t === 'Assembly') {
                        this.selectedTasks.add(task);
                    }
                });
            });
        });
    }
    makeOrder() {
        const technologies = this.getSelectedTechnologies();
        const productions = this.getSelectedProduction();
        if (technologies.length > 0) {
            this.tasksService.makeOrderDialog(technologies).subscribe(response => {
                if (response) {
                    this.filterTasks();
                    const tasks = [];
                    technologies.forEach(tech => {
                        tech.tasks.forEach(task => {
                            tasks.push(task);
                        });
                    });
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)(...tasks.map(task => this.tasksService.getById(task.id))).subscribe(newTasks => {
                        const nTasks = newTasks.flat();
                        tasks.forEach(ta => {
                            const findTask = this.tasks.find(t => t.id === ta.id);
                            if (findTask) {
                                const newFindTask = nTasks.find(task => task.id === ta.id);
                                findTask.created_order = newFindTask.created_order;
                                findTask.created_orders = newFindTask.created_orders;
                                findTask.status = newFindTask.refunded_orders.length > 0 && !newFindTask.is_refunded ? 'Deficit' : newFindTask.status;
                                findTask.start_date = new Date(newFindTask.start_date);
                                findTask.end_date = new Date(newFindTask.end_date);
                            }
                        });
                        productions.forEach(p => {
                            p.tasks.forEach(uiTask => {
                                uiTask.tasks.forEach(task => {
                                    const findTask = tasks.find(t => t.id === task.id);
                                    if (findTask) {
                                        const newFindTask = nTasks.find(t => task.id === t.id);
                                        findTask.created_order = newFindTask.created_order;
                                        findTask.created_orders = newFindTask.created_orders;
                                        findTask.start_date = new Date(newFindTask.start_date);
                                        findTask.end_date = new Date(newFindTask.end_date);
                                        findTask.status = newFindTask.refunded_orders.length > 0 && !newFindTask.is_refunded ? 'Deficit' : newFindTask.status;
                                        uiTask.created_order = newFindTask.created_order;
                                        uiTask.created_orders = newFindTask.created_orders;
                                        uiTask.status = newFindTask.refunded_orders.length > 0 && !newFindTask.is_refunded ? 'Deficit' : newFindTask.status;
                                        uiTask.start_date = new Date(newFindTask.start_date);
                                        uiTask.end_date = new Date(newFindTask.end_date);
                                    }
                                });
                            });
                        });
                    });
                    tasks.forEach(task => {
                        this.tasks.find(t => t.id === task.id).is_locked = true;
                    });
                    this.updateTechnologies();
                }
            });
        }
    }
    editTasks() {
        if (this.selectedTasks.size > 0) {
            const selectedTasks = Array.from(this.selectedTasks);
            this.tasksService.editTasksDialog(selectedTasks).subscribe((positions) => {
                if (positions.start && positions.end) {
                    selectedTasks.forEach(task => {
                        this.applyPositionTask(task, task.production, positions);
                    });
                }
                if (positions.shiftByAmount && positions.shiftByType) {
                    this.updateIfShiftIsApplied(selectedTasks, positions);
                }
            });
        }
    }
    updateIfShiftIsApplied(selectedTasks, positions) {
        selectedTasks.forEach(task => {
            if (task.list_product.nomenclature.type !== _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_2__.ENomenclatureType.PURCHASED) {
                const shiftAmount = positions.shiftByAmount;
                const shiftType = positions.shiftByType;
                let startDate = new Date(task.start_date);
                let endDate = new Date(task.end_date);
                if (shiftType === _enums_shift_types_enum__WEBPACK_IMPORTED_MODULE_3__.ShiftTypes.DAYS) {
                    startDate = new Date(startDate.setDate(startDate.getDate() + shiftAmount));
                    endDate = new Date(endDate.setDate(endDate.getDate() + shiftAmount));
                }
                if (shiftType === _enums_shift_types_enum__WEBPACK_IMPORTED_MODULE_3__.ShiftTypes.HOURS) {
                    startDate = new Date(startDate.setHours(startDate.getHours() + shiftAmount));
                    endDate = new Date(endDate.setHours(endDate.getHours() + shiftAmount));
                }
                if (shiftType === _enums_shift_types_enum__WEBPACK_IMPORTED_MODULE_3__.ShiftTypes.WEEKS) {
                    startDate = new Date(startDate.setDate(startDate.getDate() + shiftAmount * 7));
                    endDate = new Date(endDate.setDate(endDate.getDate() + shiftAmount * 7));
                }
                if (shiftType === _enums_shift_types_enum__WEBPACK_IMPORTED_MODULE_3__.ShiftTypes.MONTHS) {
                    startDate = new Date(startDate.setMonth(startDate.getMonth() + shiftAmount));
                    endDate = new Date(endDate.setMonth(endDate.getMonth() + shiftAmount));
                }
                const newDates = {
                    start: startDate,
                    end: endDate
                };
                this.applyPositionTask(task, task.production, newDates);
            }
        });
    }
    getDuration(task) {
        return (task.end_date.getTime() - task.start_date.getTime()) / 1000 / 60 / 60;
    }
    ngOnDestroy() {
        document.body.style.overflow = '';
        this.destroy$.next(null);
        this.taskDeleteSub.unsubscribe();
    }
    onTaskDelete(set) {
        if (!set.production.parent) {
            this.router.navigateByUrl('dash/production/plan').then();
            return;
        }
        this.tasks = this.tasks.filter(t => !set.tasks.includes(t));
        this.selectedTasks.delete(set);
        set.production.tasks = set.production.tasks.filter(t => t !== set);
        this.updateTechnologies();
        if (set.production.tasks.length === 0) {
            set.production.parent.children = set.production.parent.children.filter(p => p !== set.production);
            this.productions = this.productions.filter(p => p !== set.production);
            this.paint();
        }
    }
    updateTaskDates(task) {
        const data = {
            start_date: task.start_date,
            end_date: task.end_date
        };
        const rootTask = this.getLastTask;
        if (rootTask && rootTask.list_product.id === task.list_product.id && rootTask.planning_status === _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_4__.PlanningStatus.PLANNED) {
            rootTask.planning_status = _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_4__.PlanningStatus.WAITING_CONFIRMATION;
        }
        this.tasksService.update(task, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe(() => {
            task.isSaved = true;
            setTimeout(() => task.isSaved = false, 1000);
        });
    }
    get getLastTask() {
        return this.rootProductions[0]?.tasks?.find(task => !task.next_task && !task.parent_task);
    }
    updateMargins(production) {
        production.tasks.map(task => {
            task.left = this.getX(task.start_date);
            task.width = this.getX(task.end_date) - task.left;
            if (production.product && task.unconfirmed_end_date) {
                task.unconfirmedLeft = null;
                task.unconfirmedSmallerWidth = null;
                task.unconfirmedBiggerWidth = null;
                if (task.unconfirmed_end_date > task.end_date) {
                    task.unconfirmedLeft = task.left;
                    task.unconfirmedBiggerWidth = this.getX(task.unconfirmed_end_date) - task.left;
                }
                if (task.unconfirmed_end_date < task.end_date) {
                    const date = task.unconfirmed_end_date;
                    task.unconfirmedLeft = this.getX(date);
                    task.unconfirmedSmallerWidth = this.getX(task.end_date) - task.unconfirmedLeft;
                }
                this.hasDeliveryDateChanges = true;
                if (!task.parent_task && !task.next_task && task.list_product.level === 0) {
                    this.hasRootDeliveryDateChanges = true;
                }
                else {
                    this.hasChildDeliveryDateChanges = true;
                }
            }
            this.getTaskDays(task);
            return task;
        });
    }
    updateParentMargins(production, isSaved = true) {
        let parent = production;
        while (parent) {
            const childrenEnd = parent.getChildrenEnd();
            parent.tasks.reduce((end, task) => {
                if (task.start_date.getTime() < end.getTime()) {
                    task.duration = (task.end_date.getTime() - task.start_date.getTime()) / 1000 / 60 / 60;
                    const startDate = end;
                    task.start_date = startDate;
                    task.end_date = new Date(task.start_date.getTime() + task.duration * 60 * 60000);
                    task.apply();
                    this.updateTimeline();
                    task.left = this.getX(task.start_date);
                    task.width = this.getX(task.end_date) - task.left;
                    if (isSaved)
                        this.updateTaskDates(task);
                    this.getTaskDays(task);
                }
                return task.end_date;
            }, childrenEnd);
            parent = parent.parent;
        }
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
        const prods = this.isPlan ? this.productions.filter(p => p.isActive && p.isVisible && !p.isBlocked) : this.productions.filter(p => p.isActive && !p.isBlocked);
        if (this.isPlan) {
            const toggleProductions = (productions) => productions.forEach(production => {
                this.toggleProduction(production, this.isExpanded)
                    .subscribe(() => {
                    toggleProductions(production.children);
                });
            });
            toggleProductions(prods.length > 0 ? prods : this.productions.filter(p => p.isVisible && !p.isBlocked));
        }
        else {
            const toggleProductions = (productions) => productions.filter(p => !p.isBlocked).forEach(production => {
                this.toggleProduction(production, this.isExpanded)
                    .subscribe(() => toggleProductions(production.children));
            });
            toggleProductions(prods.length > 0 ? prods : this.productions);
        }
    }
    toggleProduction(production, isExpanded) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_19__.Observable((subscriber) => {
            production.isExpanded = isExpanded !== undefined ? isExpanded : !production.isExpanded;
            if (production.isExpanded && production.hasChildren && !production.children.length) {
                this.getTasks(production.tasks[0].tasks[0].id).subscribe(() => {
                    if (this.isRootFiltered)
                        this.updateTimeline();
                    production.updateGroups();
                    subscriber.next(isExpanded);
                    subscriber.complete();
                }, error => subscriber.error(error));
            }
            else {
                subscriber.next(production.isExpanded);
                subscriber.complete();
            }
        });
    }
    toggleProduction2(production, isExpanded) {
        production.isExpanded = isExpanded !== undefined ? isExpanded : !production.isExpanded;
        if (production.isExpanded && production.hasChildren && !production.children.length) {
            return this.getTasks(production.product.tree_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(() => production.updateGroups()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mapTo)(production.isExpanded));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(production.isExpanded);
    }
    toggleAllProductsSelected() {
        if (!this.allProductsOnSelected) {
            this.productions.map(p => p.isSelected = false);
        }
        else {
            this.productions.map(p => p.isSelected = true);
        }
    }
    changeAllProductsOnSelected() {
        // Если не выбрана хотя бы одна загруженность, значение all становится false
        this.allProductsOnSelected = this.productions.every(p => p.isSelected);
    }
    cancelEditTasks() {
        this.mode = 'planning';
        this.selectedTasks.clear();
        this.productions.map(t => t.isVisible = true);
        this.selectedTechnologies = [];
        this.selectedTechnologiesPlanning = [];
    }
    cancelMakeOrder() {
        this.mode = 'planning';
        this.productions.map(t => t.isVisible = true);
        this.selectedTechnologies = [];
        this.filterTasksForStatus();
    }
    type(type) {
        switch (type) {
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_2__.ENomenclatureType.PURCHASED:
                return 'Purchased';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_2__.ENomenclatureType.ASSEMBLY:
                return 'Assembly';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_2__.ENomenclatureType.MANUFACTURED:
                return 'Manufactured';
        }
    }
    addTasks(production) {
        this.tasksService.addTasks(production.tasks[0].tasks, this.rootId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(tasks => tasks.filter(task => !this.tasks.find(t => task.id === t.id))))
            .subscribe(tasks => {
            console.log(tasks);
            tasks.forEach(task => {
                task.production_type = task.list_product.nomenclature.type === '0' ? '2' : task.production_type;
                task.start_date = new Date(task.start_date);
                task.end_date = new Date(task.end_date);
                task.list_product.task_required_quantity = task.required_quantity;
            });
            this.tasks.push(...tasks);
            this.updateTimeline();
            this.updateTree();
            this.updateParentMargins(production);
            this.updateMargins(production);
            this.updateTree();
            this.update();
            this.paint();
            this.updateTechnologies();
        });
    }
    highlightChildrenEnd() {
        this.childrenEndHighlighted = true;
        setTimeout(() => this.childrenEndHighlighted = false, 2500);
    }
    applyPositionTask(task, production, position) {
        // validate new position
        const prevTasks = production.tasks.filter(t => t.start_date.getTime() < task.start_date.getTime());
        // запретить двигать левее предыдущих задач
        if (prevTasks.length) {
            prevTasks.forEach(prevTask => {
                if (prevTask.end_date.getTime() > position.start.getTime()) {
                    position.start.setTime(prevTask.end_date.getTime());
                    // если переместили, а не изменили размер
                    if (position.end.getTime() < task.end_date.getTime()) {
                        position.end.setTime(position.start.getTime() + task.duration * 60 * 60000);
                    }
                }
            });
        }
        else {
            const childrenEnd = production.getChildrenEnd();
            if (childrenEnd.getTime() > position.start.getTime()) {
                this.highlightChildrenEnd();
                position.start.setTime(childrenEnd.getTime());
                // если переместили, а не изменили размер
                if (position.end.getTime() < task.end_date.getTime()) {
                    position.end.setTime(position.start.getTime() + task.duration * 60 * 60000);
                }
            }
        }
        const nextTasks = production.tasks.filter(t => t.start_date.getTime() > task.start_date.getTime());
        // подвинуть следующие задачи
        nextTasks.reduce((prevEnd, nextTask) => {
            if (nextTask.start_date.getTime() < prevEnd.getTime()) {
                nextTask.duration = (nextTask.end_date.getTime() - nextTask.start_date.getTime()) / 60 / 1000;
                nextTask.start_date.setTime(prevEnd.getTime());
                nextTask.end_date.setTime(nextTask.start_date.getTime() + nextTask.duration * 60000);
                this.updateTaskDates(nextTask);
            }
            return nextTask.end_date;
        }, position.end);
        // apply new position
        task.start_date = position.start;
        task.end_date = position.end;
        task.duration = task.duration = this.getDuration(task);
        task.apply();
        this.updateTimeline();
        this.updateMargins(production);
        this.updateParentMargins(production.parent);
        this.updateTaskDates(task);
    }
    updateTree() {
        this.productionMap = new Map();
        this.uiTaskMap = new Map();
        this.productions = [];
        this.rootProductions = [];
        this.generateTasksGroups();
        const taskMap = new Map();
        // Заполняем соответствия структуры продуктов
        this.tasks.forEach(task => {
            const productKey = `${task.family_id}:${task.list_product.id}`;
            taskMap.set(productKey, task);
        });
        const getProductionKey = (task) => {
            let key = ``;
            do {
                key = `${task.family_id}:${task.list_product.nomenclature.id}:${task.groupId}:${task.list_product.level}/${key}`;
                task = taskMap.get(`${task.family_id}:${task.list_product.parent}`);
            } while (task);
            return key;
        };
        this.tasks.filter(t => t.is_added_manually).forEach((t, i) => t.technologyUid = i + 1);
        // Заполняем соответствия продакшнов с учётом группировок
        this.tasks.forEach(task => {
            const productId = task.list_product.id;
            const productionKey = getProductionKey(task);
            if (!this.productionMap.has(productionKey)) {
                const newProduction = new _models_list_product_production__WEBPACK_IMPORTED_MODULE_1__.ListProductProduction({
                    // @ts-ignore
                    task,
                    product: task.list_product,
                    isExpanded: !this.isPlan,
                    isGrouped: task.is_grouped,
                });
                this.productions.push(newProduction);
                this.productionMap.set(productionKey, newProduction);
            }
            const production = this.productionMap.get(productionKey);
            this.productionMap.set(`${productId}:${task.family_id}`, production);
            if (!production.products.find(p => p.id === task.list_product.id)) {
                production.products.push(task.list_product);
            }
            if (production.products.length > 1) {
                production.isGrouped = true;
            }
            const tech = task.technology ? task.technology : this.type(task.list_product.nomenclature.type);
            const taskKey = `${productionKey}:${tech}:${task.technologyUid}`;
            if (!this.uiTaskMap.has(taskKey)) {
                const newUiTask = new UITask(task);
                this.uiTaskMap.set(taskKey, newUiTask);
                production.tasks.push(newUiTask);
            }
            const uiTask = this.uiTaskMap.get(taskKey);
            if (!uiTask.tasks.find(t => t.id === task.id)) {
                uiTask.tasks.push(task);
            }
        });
        // Построение дерева
        let index = 0;
        this.productionMap.forEach((production) => {
            production.index = index++;
            production.parent = this.productionMap.get(`${production.product.parent}:${production.tasks[0].family_id}`);
            production.isExpanded = production.task.list_product.level === 0 ? !this.isPlan : !production.isBlocked;
            if (production.parent) {
                if (!production.parent.children.includes(production)) {
                    production.parent.children.push(production);
                }
            }
            else {
                if (!this.rootProductions.includes(production)) {
                    this.rootProductions.push(production);
                }
            }
        });
        const rewireProductions = (production) => {
            production.isRootProductionCompleted = true;
            production.isExpanded = true;
            if (production.children.length) {
                production.children.forEach(p => rewireProductions(p));
            }
        };
        this.rootProductions.forEach(production => {
            if (production.task.status === 'On stock') {
                rewireProductions(production);
            }
        });
        this.sortProductions(this.rootProductions);
    }
    sortProductions(productions) {
        productions.sort((a, b) => 
        // new Date(b.tasks[0].created).getTime() - new Date(a.tasks[0].created).getTime() ||
        this.nomenclaturesTypes[a.task.list_product.nomenclature.type] - this.nomenclaturesTypes[b.task.list_product.nomenclature.type] ||
            a.task.list_product.nomenclature.id - b.task.list_product.nomenclature.id);
        productions.forEach(production => {
            if (production.children.length > 0) {
                this.sortProductions(production.children);
            }
        });
    }
    update() {
        // this.rootProductions = this.rootProductions.sort((a, b) =>
        //   new Date(b.tasks[0].created).getTime() - new Date(a.tasks[0].created).getTime() ||
        //   this.nomenclaturesTypes[a.task.list_product.nomenclature.type] - this.nomenclaturesTypes[b.task.list_product.nomenclature.type] ||
        //   a.task.list_product.nomenclature.id - b.task.list_product.nomenclature.id
        // );
        this.sortProductions(this.rootProductions);
        this.productionMap.forEach((production) => {
            this.updateMargins(production);
            production.updateGroups();
        });
    }
    paint() {
        // рекурсивный проход по дереву
        const paintingProduction = (production, colorIndex = 0) => {
            if (production.product.nomenclature.type === '1') {
                production.color = this.colors[colorIndex++ % this.colors.length];
            }
            return production.children.reduce((index, child) => paintingProduction(child, index), colorIndex);
        };
        this.rootProductions.reduce((index, rootProduction) => paintingProduction(rootProduction, index), 0);
    }
    getSelectedTechnologies() {
        return this.productions
            // берём отфильтрованные линии производства
            .filter(p => p.isFiltered)
            // берём только отмеченные галочками
            .filter(p => p.isSelected)
            // берём из них задачи
            .map(p => p.tasks)
            // делаем плоский список задач без вложенностей
            .reduce((acc, val) => acc.concat(val), [])
            // фильтруем задачи отдельно т.к. в одной линии может быть несколько задач
            .filter(task => this.isTaskMeetsFilterConditions(task));
    }
    getSelectedProduction() {
        return this.productions
            // берём отфильтрованные линии производства
            .filter(p => p.isFiltered)
            // берём только отмеченные галочками
            .filter(p => p.isSelected);
    }
    isTaskMeetsFilterConditions(task) {
        return this.selectedTechnologies.includes(task.technology)
            && !task.is_locked && task.status !== 'Not processed' && task.status !== 'Ordered' && task.status !== 'On stock';
    }
    test(task) {
        if (this.filteredTasksSet.has(task.id))
            return true;
        return false;
    }
    togglePlanScale(operation) {
        if (operation === 'minus') {
            this.planScale -= 25;
        }
        if (operation === 'plus') {
            this.planScale += 25;
        }
        if (this.planScale < 25) {
            this.planScale = 25;
        }
        if (this.planScale > 100) {
            this.planScale = 100;
        }
        switch (this.planScale) {
            case 100: {
                this.vacationCoords = 24;
                this.weekdayCoords = 288;
                this.marginTimeLeft = 34;
                this.scaleHourVacationDay = 1;
                this.scaleHourWeekdayDay = 12;
                this.weekWeekDayCoords = 41.125;
                this.weekScaleHourDay = 1.717;
                break;
            }
            case 75: {
                this.vacationCoords = 18;
                this.weekdayCoords = 216;
                this.marginTimeLeft = 25;
                this.scaleHourVacationDay = 1;
                this.scaleHourWeekdayDay = 9;
                this.weekWeekDayCoords = 30.84375;
                this.weekScaleHourDay = 1.2825;
                break;
            }
            case 50: {
                this.vacationCoords = 12;
                this.weekdayCoords = 144;
                this.marginTimeLeft = 16;
                this.scaleHourVacationDay = 1;
                this.scaleHourWeekdayDay = 6;
                this.weekWeekDayCoords = 21.0625;
                this.weekScaleHourDay = 0.855;
                break;
            }
            case 25: {
                this.vacationCoords = 6;
                this.weekdayCoords = 72;
                this.marginTimeLeft = 7.125;
                this.scaleHourVacationDay = 0.5;
                this.scaleHourWeekdayDay = 3;
                this.weekWeekDayCoords = 10.28125;
                this.weekScaleHourDay = 0.4275;
                break;
            }
        }
        this.updateProductions();
    }
    confirmDateChanges(setRootUnconfirmed = false) {
        this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe(confirm => {
            if (confirm) {
                this.tasksService.confirmEndDates(+this.rootId, { is_unconfirmed_root_date: setRootUnconfirmed }).subscribe(res => {
                    window.location.reload();
                });
            }
        });
    }
    sendPlanToConfirmation() {
        const rootTask = this.getLastTask;
        const familyId = rootTask.family_id;
        this.tasksService.sendToPlanningConfirmation({ family_id: familyId }).subscribe(() => {
            rootTask.planning_status = _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_4__.PlanningStatus.WAITING_CONFIRMATION;
        });
    }
    sendPlanToCorrections() {
        const rootTask = this.getLastTask;
        const familyId = rootTask.family_id;
        this.tasksService.sendToPlanningCorrections({ family_id: familyId, change_request: true }).subscribe(() => {
            rootTask.change_request = true;
        });
    }
    toggleShowConfirmation() {
        this.isShowConfirmationMenu = !this.isShowConfirmationMenu;
    }
    getDays(days) {
        return days.filter((d, i) => i !== 0);
    }
    get dayWidth() {
        return (this.weekdayCoords - 10) / 7;
    }
    onSelectDisplay() {
        switch (this.selectedDisplay) {
            case 'weeks':
                this.testWeek();
                break;
            case 'days':
                this.togglePlanScale();
        }
    }
};
ManufacturingChartComponent.ɵfac = function ManufacturingChartComponent_Factory(t) { return new (t || ManufacturingChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_product_structure_services_technology_service__WEBPACK_IMPORTED_MODULE_6__.TechnologyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_8__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_calendar_service__WEBPACK_IMPORTED_MODULE_9__.CalendarService)); };
ManufacturingChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ManufacturingChartComponent, selectors: [["pek-manufacturing-chart"]], viewQuery: function ManufacturingChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.panelBorder = _t.first);
    } }, inputs: { isPlan: "isPlan", rootId: "rootId" }, decls: 43, vars: 40, consts: [[1, "content"], [1, "card"], [1, "card-body"], [1, "chart-wrapper"], ["class", "all-selected", 4, "ngIf"], [1, "tasks-container"], [1, "items-container"], [1, "d-flex"], [1, "left-panel-wrapper"], ["mwlResizable", "", 1, "d-flex", "task-header-name", 3, "enableGhostResize", "resizeSnapGrid", "resizeEnd", "resizing"], [1, "d-flex", "header-items"], [1, "d-flex", "align-items-center", "justify-content-center", "pl-0", "task-toggle", 2, "width", "30px"], [1, "pi", 3, "click"], [1, "d-flex", "align-items-center", 2, "width", "190px"], [1, "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-center", "pl-0", 2, "width", "80px"], [1, "d-flex", "align-items-center", "justify-content-center", "pl-0", 2, "width", "50px"], ["class", "bord", 4, "ngIf"], ["class", "info-container", 4, "ngIf"], ["mwlResizeHandle", "", 1, "resize-handle-right", 3, "resizeEdges"], ["cdkDragHandle", "", 1, "drag-handle"], ["mwlResizable", "", 1, "production-panel-left", 3, "enableGhostResize", "resizeSnapGrid", "resizeEnd", "resizing"], [3, "production", "productionNameWidth", "isRoot", "isLeftPanel", 4, "ngFor", "ngForOf"], [1, "right-panel-wrapper"], [1, "d-flex", "days-header"], ["class", "d-flex", 4, "ngIf"], ["class", "d-flex", 3, "week-header", 4, "ngIf"], ["class", "production-panel-right", 4, "ngIf", "ngIfElse"], [1, "filter", "pl-5", "pr-5"], [1, "plan-d", 3, "ngSwitch"], ["class", "form-group edit-tasks d-flex align-items-center buttons", 4, "ngSwitchCase"], ["class", "form-group d-flex align-items-start planning", 4, "ngSwitchCase"], ["class", "form-group d-flex align-items-center add-tasks buttons", 4, "ngSwitchCase"], ["class", "form-group d-flex align-items-center buttons", 4, "ngSwitchDefault"], ["loading", ""], [1, "all-selected"], ["for", "all-selected"], ["id", "all-selected", "type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "bord"], ["panelBorder", ""], [1, "info-container"], ["class", "d-flex align-items-center", 4, "ngIf"], [4, "ngIf"], ["pButton", "", "class", "p-button-success ml-3 mr-3", 3, "click", 4, "ngIf"], ["pButton", "", 1, "p-button-success", "ml-3", "mr-3", 3, "click"], [3, "ngSwitch"], ["class", "text-success", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["pButton", "", "class", "mr-3", 3, "click", 4, "ngSwitchCase"], [1, "text-success"], ["pButton", "", "class", "ml-3", 3, "click", 4, "ngIf"], ["pButton", "", 1, "ml-3", 3, "click"], ["pButton", "", 1, "mr-3", 3, "click"], [3, "production", "productionNameWidth", "isRoot", "isLeftPanel"], ["class", "day-header", 3, "ml-3", "day-header_week", "width", 4, "ngFor", "ngForOf"], [1, "day-header"], [1, "day-name"], ["class", "text-center", "style", "color: '#f1716d'; display: block", 4, "ngIf"], [1, "d-flex", "hour-container"], ["class", "hour-line", "tooltipPosition", "bottom", 3, "marginLeft", "ngClass", "pTooltip", 4, "ngFor", "ngForOf"], [1, "text-center", 2, "color", "#f1716d", "display", "block"], ["tooltipPosition", "bottom", 1, "hour-line", 3, "ngClass", "pTooltip"], ["class", "day-header", 3, "ml-3", "width", 4, "ngFor", "ngForOf"], ["class", "hour-line", "tooltipPosition", "bottom", 3, "hour-line-week", "marginLeft", "pTooltip", 4, "ngFor", "ngForOf"], ["tooltipPosition", "bottom", 1, "hour-line", 3, "pTooltip"], ["class", "vac-bord vac-bord_left", 4, "ngIf"], ["class", "vac-bord vac-bord_right", 3, "right", 4, "ngIf"], [1, "vac-bord", "vac-bord_left"], [1, "vac-bord", "vac-bord_right"], [1, "production-panel-right"], [3, "production", 4, "ngFor", "ngForOf"], [3, "production"], [1, "form-group", "edit-tasks", "d-flex", "align-items-center", "buttons"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "plan-close-btn", "mr-2", 3, "click"], [1, "unlocked-technologies", "mr-3"], ["optionValue", "name", "optionLabel", "name", "placeholder", "Unlocked Technologies", 3, "options", "ngModel", "onChange", "ngModelChange"], [1, "mr-3"], ["pButton", "", "type", "button", "label", "Edit Tasks", "icon", "pi pi-pencil", 3, "disabled", "click"], [1, "form-group", "d-flex", "align-items-start", "planning"], [1, "unlocked-technologies", "mr-2"], ["pButton", "", "type", "button", "label", "CREATE ORDER", "icon", "pi pi-plus", 3, "disabled", "click"], [1, "form-group", "d-flex", "align-items-center", "add-tasks", "buttons"], [1, "ml-2", "mr-2", "task-btn", "task-btn_icon", "position-relative"], [1, "pi", "pi-plus"], [1, "form-group", "d-flex", "align-items-center", "buttons"], [1, "footer-text", "mr-2"], ["pButton", "", "type", "button", "label", "Order Creation", "icon", "pi pi-database", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Task Planning", "icon", "pi pi-sliders-h", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Items", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", 3, "icon", "label", "click"], [1, "ml-4", "mr-4", "d-flex", "align-items-center", "chart-scale-btns"], ["pButton", "", "type", "button", "icon", "pi pi-search-minus", 3, "disabled", "click"], [1, "plan-scale"], ["pButton", "", "type", "button", "icon", "pi pi-search-plus", 3, "disabled", "click"], ["class", "prod-picker mr-2", 4, "ngIf"], [1, "statuses-picker", "mr-2"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Statuses", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "technologies-picker", "mr-2"], ["optionLabel", "name", "optionValue", "name", "placeholder", "Technologies", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "type-picker"], ["optionLabel", "name", "optionValue", "value", "placeholder", "Type", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "display-picker", "ml-3"], [1, "mr-2"], ["optionLabel", "label", "optionValue", "option", "placeholder", "Displaying", 3, "options", "ngModel", "ngModelChange"], [1, "prod-picker", "mr-2"], ["optionValue", "family_id", "optionLabel", "label", "placeholder", "Production Lists", 1, "plan-multi", 3, "options", "ngModel", "onChange", "ngModelChange"], [1, "loading"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "3rem"]], template: function ManufacturingChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ManufacturingChartComponent_div_4_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resizeEnd", function ManufacturingChartComponent_Template_div_resizeEnd_9_listener($event) { return ctx.resizePanel($event); })("resizing", function ManufacturingChartComponent_Template_div_resizing_9_listener($event) { return ctx.moveBorder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ManufacturingChartComponent_Template_i_click_12_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "UOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ManufacturingChartComponent_div_21_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ManufacturingChartComponent_div_22_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "div", 19)(25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resizeEnd", function ManufacturingChartComponent_Template_div_resizeEnd_26_listener($event) { return ctx.resizePanel($event); })("resizing", function ManufacturingChartComponent_Template_div_resizing_26_listener($event) { return ctx.moveBorder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ManufacturingChartComponent_pek_manufacturing_list_product_production_27_Template, 1, 4, "pek-manufacturing-list-product-production", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "div", 19)(29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 23)(31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ManufacturingChartComponent_div_32_Template, 3, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, ManufacturingChartComponent_div_33_Template, 3, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ManufacturingChartComponent_div_34_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 28)(36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, ManufacturingChartComponent_div_37_Template, 7, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, ManufacturingChartComponent_div_38_Template, 5, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, ManufacturingChartComponent_div_39_Template, 9, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, ManufacturingChartComponent_div_40_Template, 24, 17, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ManufacturingChartComponent_ng_template_41_Template, 4, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("pl-15", ctx.mode === "make-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.selectedTechnologies == null ? null : ctx.selectedTechnologies.length) && ctx.mode === "make-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("tasks-container_small", ctx.isPlan)("disabled-chart", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("min-width", ctx.innerContentWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("pl-33", ctx.mode === "make-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("enableGhostResize", false)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](36, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("pi-minus", ctx.isExpanded)("pi-plus", !ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx.productionNameWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isShowBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isPlan && ctx.isShowConfirmationMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](37, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("enableGhostResize", false)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.rootProductions);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](39, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedDisplay === "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedDisplay === "weeks");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled-panel", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "edit-tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "make-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "add-items");
    } }, styles: [".border-danger[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\np-table[_ngcontent-%COMP%] {\n  width: 20% !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n\n.all-selected[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  top: 53px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1004;\n}\n\n.all-selected[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\n.all-selected[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.border-black[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n\n.tasks-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: auto;\n  overflow-x: scroll;\n  height: calc(100vh - 114px);\n  border-top: 1px solid #dddddd;\n}\n\n.tasks-container_small[_ngcontent-%COMP%] {\n  height: calc(100vh - 114px);\n}\n\n.items-container[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.timeline-tasks[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  align-items: center;\n  margin-left: 500px;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  z-index: 800;\n  cursor: pointer;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n\n.task-product-name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 1px solid rgb(207, 207, 207);\n  border-right: 1px solid rgb(207, 207, 207);\n  display: flex;\n  align-items: center;\n}\n\n.item-time[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.item-time[_ngcontent-%COMP%]:hover {\n  background: rgb(231, 231, 231) !important;\n}\n\n.day-header[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.day-header_week[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n}\n\n.day-header_week[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  text-align: center;\n}\n\n.day-header_week[_ngcontent-%COMP%]::before, .day-header_week[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background: #f1716d;\n  height: calc(100vh - 132px);\n  width: 1px;\n  position: absolute;\n  top: 0;\n}\n\n.day-header_week[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n\n.day-header_week[_ngcontent-%COMP%]::after {\n  right: -1px;\n}\n\n.day-header_week[_ngcontent-%COMP%]   .hour-line[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 0px !important;\n}\n\n.day-header[_ngcontent-%COMP%]   .hour-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgb(73, 73, 73);\n  height: 20px;\n  align-items: flex-end;\n}\n\n.day-header[_ngcontent-%COMP%]   .hour-line[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2px;\n  height: 15px;\n  background: #dddddd;\n}\n\n.day-header[_ngcontent-%COMP%]   .hour-line.middle[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.hour-line-week[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n.week-header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.pp-text-success[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.pp-text-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pp-text-warning[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.d-none-important[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nmwlResizable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  cursor: col-resize;\n  width: 10px;\n}\n\n.resize-handle-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.resize-handle-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.filter[_ngcontent-%COMP%] {\n  flex: 0;\n  z-index: 1003;\n  background: #fff;\n  padding: 0 1.75rem;\n  transition: 0s !important;\n}\n\n.filter[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  width: 180px;\n  font-size: 15px;\n  margin: 0 10px;\n}\n\n.statuses-pick[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: -33px;\n}\n\n.statuses-pick[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  top: 25px;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.day-name[_ngcontent-%COMP%] {\n  min-height: 20px;\n  color: #ababab;\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: flex;\n  justify-content: center;\n}\n\n.day-name_small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.plan-d[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.planning[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.plan-close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--theme-color-primary);\n  padding: 0.625rem 1.125rem;\n  width: 2.5rem !important;\n  border: none !important;\n  position: relative;\n  margin-left: -1rem;\n}\n\n.plan-close-btn[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: var(--theme-color-primary);\n}\n\n.plan-close-btn[_ngcontent-%COMP%]:focus, .plan-close-btn[_ngcontent-%COMP%]:active {\n  box-shadow: none !important;\n}\n\n.plan-close-btn[_ngcontent-%COMP%]  .p-button-icon {\n  font-weight: 700;\n  position: relative;\n  top: 1px;\n}\n\n.unlocked-technologies[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n.production-panel-left[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  margin-right: -1px;\n  z-index: 1000;\n}\n\n.production-panel-right[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  cursor: col-resize;\n  width: 10px;\n  z-index: 1001;\n}\n\n.resize-handle-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.resize-handle-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.left-panel-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  left: 0;\n  z-index: 1002;\n  background: #fff;\n}\n\n.left-panel-wrapper[_ngcontent-%COMP%]   .task-header-name[_ngcontent-%COMP%] {\n  height: 40px;\n  position: sticky;\n  left: 0;\n  top: 0;\n  z-index: 1001;\n  background: #fff;\n  border-bottom: 1px solid #dddddd;\n}\n\n.left-panel-wrapper[_ngcontent-%COMP%]   .task-header-name[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  right: -1px;\n  top: 0;\n  height: 40px;\n  width: 1px;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.header-items[_ngcontent-%COMP%] {\n  color: #ababab;\n  font-weight: 500;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\n\n.right-panel-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.right-panel-wrapper[_ngcontent-%COMP%]   .days-header[_ngcontent-%COMP%] {\n  height: 40px;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: #fff;\n  border-bottom: 1px solid #dddddd;\n}\n\n.task-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-color);\n}\n\n.task-toggle[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n  position: relative;\n  top: 1px;\n}\n\n.bord[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  height: calc(100vh - 114px);\n  width: 3px;\n  border: none !important;\n  padding: 0 !important;\n  border-left: 2px dashed #000 !important;\n}\n\n.add-items[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.task-btn_icon[_ngcontent-%COMP%] {\n  top: 0 !important;\n  cursor: default;\n  width: 21px;\n  height: 21px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--text-color);\n  background: #fff;\n}\n\n.task-btn_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n\n.technologies-filter[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.edit-tasks[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.edit-tasks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.add-tasks[_ngcontent-%COMP%] {\n  flex-direction: row;\n  font-weight: 500;\n}\n\n.prod-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 15rem;\n}\n\n.prod-picker[_ngcontent-%COMP%]   p-multiselect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chart-scale-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625rem 1.125rem;\n  width: 2.5rem !important;\n}\n\n.chart-scale-btns[_ngcontent-%COMP%]   .plan-scale[_ngcontent-%COMP%] {\n  font-weight: 500;\n  width: 3.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #fff;\n  top: 40px;\n  left: 0;\n  right: 0;\n  align-items: center;\n  display: flex;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n  border-bottom: 1px solid #dddddd;\n}\n\n.info-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.loading[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 1.25rem;\n  font-size: 1.25rem;\n}\n\n.disabled-panel[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.disabled-chart[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.type-picker[_ngcontent-%COMP%], .technologies-picker[_ngcontent-%COMP%], .statuses-picker[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n.vacation-day-sat[_ngcontent-%COMP%], .vacation-day-sun[_ngcontent-%COMP%] {\n  position: relative;\n  width: 0 !important;\n}\n\n.vacation-day-sat[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #f1716d;\n  height: calc(100vh - 137px);\n  width: 1px;\n  position: absolute;\n  top: -5px;\n  left: -2px;\n}\n\n.vacation-day-sun[_ngcontent-%COMP%]::after, .vacation-day-sun[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #f1716d;\n  height: calc(100vh - 137px);\n  width: 1px;\n  position: absolute;\n  top: -5px;\n}\n\n.vacation-day-sun[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n\n.vacation-day-sun[_ngcontent-%COMP%]::after {\n  right: -42px;\n}\n\n.display-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.display-picker[_ngcontent-%COMP%]   p-dropdown[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n\n.vac-bord[_ngcontent-%COMP%] {\n  background: #f1716d;\n  height: calc(100vh - 137px);\n  width: 1px;\n  position: absolute;\n  top: -5px;\n}\n\n.vac-bord_left[_ngcontent-%COMP%] {\n  left: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBR0U7RUFDRSwyQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0UsZ0JBQUE7QUFGTjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFXRTtFQUVFLHlDQUFBO0FBVko7O0FBa0JBO0VBRUUsc0JBQUE7QUFoQkY7O0FBa0JFO0VBQ0Usc0JBQUE7RUFFQSxrQkFBQTtBQWpCSjs7QUFtQkk7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFsQk47O0FBcUJJO0VBRUUsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FBcEJOOztBQXVCSTtFQUNFLE9BQUE7QUFyQk47O0FBd0JJO0VBQ0UsV0FBQTtBQXRCTjs7QUF5Qkk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUF2Qk47O0FBMkJFO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0FBM0JKOztBQThCSTtFQUNFLFlBQUE7QUE1Qk47O0FBaUNBO0VBQ0Usa0NBQUE7QUE5QkY7O0FBa0NFO0VBQ0Usa0JBQUE7QUEvQko7O0FBbUNBO0VBQ0UsWUFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxVQUFBO0FBaENGOztBQW1DQTtFQUNFLGFBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0Usd0JBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0Usc0JBQUE7QUFoQ0Y7O0FBbUNBOztFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWhDRjs7QUFtQ0E7RUFDRSxPQUFBO0FBaENGOztBQW1DQTtFQUNFLFFBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBakNGOztBQW9DQTtFQUNFLGdCQUFBO0FBakNGOztBQW9DQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FBbENGOztBQW9DRTtFQUNFLGdCQUFBO0FBbENKOztBQXNDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQW5DRjs7QUFzQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFuQ0Y7O0FBcUNFO0VBQ0UsU0FBQTtBQW5DSjs7QUF3Q0U7RUFDRSx5QkFBQTtBQXJDSjs7QUF5Q0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBdENGOztBQXdDRTtFQUNFLGVBQUE7QUF0Q0o7O0FBMENBO0VBQ0UsYUFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF2Q0Y7O0FBeUNFO0VBQ0UsdUJBQUE7RUFDQSxpQ0FBQTtBQXZDSjs7QUEwQ0U7RUFFRSwyQkFBQTtBQXpDSjs7QUE2Q0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQTNDTjs7QUFnREE7RUFDRSxZQUFBO0FBN0NGOztBQWdEQTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBN0NGOztBQWdEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQTdDRjs7QUFnREE7O0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTdDRjs7QUFnREE7RUFDRSxPQUFBO0FBN0NGOztBQWdEQTtFQUNFLFFBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBN0NGOztBQStDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUE3Q0o7O0FBK0NJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBN0NOOztBQXlEQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUF2REY7O0FBMERBO0VBQ0UsV0FBQTtBQXZERjs7QUF5REU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUF2REo7O0FBMkRBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBeERGOztBQTBERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBeERKOztBQWlFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQTlERjs7QUFpRUE7RUFDRSxnQkFBQTtBQTlERjs7QUFpRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQTlERjs7QUFnRUU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE5REo7O0FBa0VBO0VBQ0UsZUFBQTtBQS9ERjs7QUFtRUE7RUFDRSxtQkFBQTtBQWhFRjs7QUFrRUU7RUFDRSxnQkFBQTtBQWhFSjs7QUFvRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBakVGOztBQXFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFsRUY7O0FBb0VFO0VBQ0UsV0FBQTtBQWxFSjs7QUF1RUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFwRUo7O0FBdUVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFyRUo7O0FBeUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQXRFRjs7QUF3RUU7RUFDRSxnQkFBQTtBQXRFSjs7QUEwRUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBdkVGOztBQXlFRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXZFSjs7QUEyRUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUF4RUY7O0FBMkVBO0VBQ0Usb0JBQUE7QUF4RUY7O0FBNEVBOzs7RUFHRSxZQUFBO0FBekVGOztBQTRFQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBekVGOztBQTZFRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUExRUo7O0FBK0VFO0VBRUUsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBN0VKOztBQWdGRTtFQUNFLE9BQUE7QUE5RUo7O0FBaUZFO0VBQ0UsWUFBQTtBQS9FSjs7QUFtRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFoRkY7O0FBa0ZFO0VBQ0UsV0FBQTtBQWhGSjs7QUFvRkE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQWpGRjs7QUFtRkU7RUFDRSxVQUFBO0FBakZKIiwiZmlsZSI6Im1hbnVmYWN0dXJpbmctY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLWRhbmdlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5wLXRhYmxlIHtcclxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGwtc2VsZWN0ZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA2cHg7XHJcbiAgdG9wOiA1M3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB6LWluZGV4OiAxMDA0O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnRhc2tzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExNHB4KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcclxuXHJcbiAgJl9zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTRweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbXMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUtdGFza3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcblxyXG4gIC50YXNrLXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDgwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIHBhZGRpbmc6IDRweCA0cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YXNrLXByb2R1Y3QtbmFtZSB7XHJcbiAgZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS10aW1lIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMSwgMjMxLCAyMzEpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLy5jaGFydC13cmFwcGVyIHtcclxuLy8gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4vL31cclxuXHJcbi5kYXktaGVhZGVyIHtcclxuICAvL3dpZHRoOiAyODhweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmX3dlZWsge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuZGF5LW5hbWUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vdG9wOiAtMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOjpiZWZvcmUsXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjE3MTZkO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzJweCk7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICByaWdodDogLTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG91ci1saW5lIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvdXItY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDczLCA3MywgNzMpO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmhvdXItbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7O1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIC8vYmFja2dyb3VuZDogcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgYmFja2dyb3VuZDogI2RkZGRkZDtcclxuICAgIC8vbWFyZ2luLWxlZnQ6IDM0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAmLm1pZGRsZSB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ob3VyLWxpbmUtd2VlayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndlZWstaGVhZGVyIHtcclxuICAuZGF5LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBwLXRleHQtc3VjY2VzcyB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucHAtdGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5wcC10ZXh0LXdhcm5pbmcge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5kLW5vbmUtaW1wb3J0YW50IHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm13bFJlc2l6YWJsZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gcmVxdWlyZWQgZm9yIHRoZSBlbmFibGVHaG9zdFJlc2l6ZSBvcHRpb24gdG8gd29ya1xyXG59XHJcblxyXG4ucmVzaXplLWhhbmRsZS1sZWZ0LFxyXG4ucmVzaXplLWhhbmRsZS1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLWxlZnQge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLXJpZ2h0IHtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb290ZXItdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgZmxleDogMDtcclxuICB6LWluZGV4OiAxMDAzO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy9taW4taGVpZ2h0OiA4NXB4O1xyXG4gIHBhZGRpbmc6IDAgMS43NXJlbTtcclxuICB0cmFuc2l0aW9uOiAwcyAhaW1wb3J0YW50O1xyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uc3RhdHVzZXMtcGljayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zM3B4O1xyXG5cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uZGF5LW5hbWUge1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNhYmFiYWI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICZfc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBsYW4tZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnBsYW5uaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5wbGFuLWNsb3NlLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMTI1cmVtO1xyXG4gIHdpZHRoOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOjpuZy1kZWVwIHtcclxuICAgIC5wLWJ1dHRvbi1pY29uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51bmxvY2tlZC10ZWNobm9sb2dpZXMge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3Rpb24tcGFuZWwtbGVmdCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnByb2R1Y3Rpb24tcGFuZWwtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucmVzaXplLWhhbmRsZS1sZWZ0LFxyXG4ucmVzaXplLWhhbmRsZS1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG5cclxuLnJlc2l6ZS1oYW5kbGUtbGVmdCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnJlc2l6ZS1oYW5kbGUtcmlnaHQge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubGVmdC1wYW5lbC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgLnRhc2staGVhZGVyLW5hbWUge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItaXRlbXMge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNywgMjA3LCAyMDcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWl0ZW1zIHtcclxuICBjb2xvcjogI2FiYWJhYjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnJpZ2h0LXBhbmVsLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuZGF5cy1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGFzay10b2dnbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblxyXG4gIC5waSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLy8ucGktbWludXMge1xyXG4gIC8vICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gIHRvcDogMXB4O1xyXG4gIC8vfVxyXG59XHJcblxyXG4uYm9yZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExNHB4KTtcclxuICB3aWR0aDogM3B4O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGQtaXRlbXMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWJ0bl9pY29uIHtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtXHJcbiAgfVxyXG59XHJcblxyXG4udGVjaG5vbG9naWVzLWZpbHRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuLmVkaXQtdGFza3Mge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQtdGFza3Mge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5wcm9kLXBpY2tlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuXHJcbiAgcC1tdWx0aXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydC1zY2FsZS1idG5zIHtcclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDEuMTI1cmVtO1xyXG4gICAgd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBsYW4tc2NhbGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0b3A6IDQwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZWQtcGFuZWwge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmRpc2FibGVkLWNoYXJ0IHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuXHJcbi50eXBlLXBpY2tlcixcclxuLnRlY2hub2xvZ2llcy1waWNrZXIsXHJcbi5zdGF0dXNlcy1waWNrZXIge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxufVxyXG5cclxuLnZhY2F0aW9uLWRheS1zYXQsXHJcbi52YWNhdGlvbi1kYXktc3VuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZhY2F0aW9uLWRheS1zYXQge1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6ICNmMTcxNmQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzdweCk7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgbGVmdDogLTJweDtcclxuICB9XHJcbn1cclxuXHJcbi52YWNhdGlvbi1kYXktc3VuIHtcclxuICAmOjphZnRlcixcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjE3MTZkO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM3cHgpO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTVweDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IC00MnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRpc3BsYXktcGlja2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHAtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udmFjLWJvcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmMTcxNmQ7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM3cHgpO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuXHJcbiAgJl9sZWZ0IHtcclxuICAgIGxlZnQ6IC0ycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
ManufacturingChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()
], ManufacturingChartComponent);



/***/ }),

/***/ 97999:
/*!*******************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-employees/manufacturing-employees.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingEmployeesComponent": () => (/* binding */ ManufacturingEmployeesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/employee.service */ 67894);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);













function ManufacturingEmployeesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Employee to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingEmployeesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManufacturingEmployeesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
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
function ManufacturingEmployeesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Max Working Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ManufacturingEmployeesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](employee_r8.start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](employee_r8.max_working_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](employee_r8.position == null ? null : employee_r8.position.title);
} }
function ManufacturingEmployeesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 29);
} }
function ManufacturingEmployeesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingEmployeesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManufacturingEmployeesComponent_ng_template_16_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ManufacturingEmployeesComponent_ng_template_16_span_3_Template, 2, 0, "span", 28);
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
function ManufacturingEmployeesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingEmployeesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingEmployeesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingEmployeesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
let ManufacturingEmployeesComponent = class ManufacturingEmployeesComponent {
    constructor(employeeService, modalService) {
        this.employeeService = employeeService;
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
        this.employees = [];
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.isLoading = false;
        this.employees$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.employeeService.get()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(employees => this.convertEmployees(employees)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(employees => this.employees = employees), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this));
    }
    ngOnInit() {
        this.employees$.subscribe();
    }
    convertEmployees(employees) {
        return employees.map(employee => {
            return {
                ...employee,
                start_time: employee.start_time.split(':').splice(-3, 2).join(':'),
                max_working_time: employee.max_working_time.split(':').splice(-3, 2).join(':'),
            };
        });
    }
    convertEmployee(employee) {
        return {
            ...employee,
            start_time: employee.start_time.split(':').splice(-3, 2).join(':'),
            max_working_time: employee.max_working_time.split(':').splice(-3, 2).join(':'),
        };
    }
    onAddEmployee() {
        this.employeeService.createEditEmployeeModal('create').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(employee => !!employee)).subscribe(employee => this.employees.unshift(this.convertEmployee(employee)));
    }
    prepareForSearch() {
        this.isLoading = true;
        this.selectedEmployee = null;
        this.employees = [];
    }
    onEditEmployee() {
        this.employeeService.createEditEmployeeModal('edit', this.selectedEmployee).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(employee => !!employee)).subscribe(employee => {
            const index = this.employees.findIndex(t => t.id === this.selectedEmployee.id);
            this.employees[index] = this.convertEmployee(employee);
            this.selectedEmployee = this.employees[index];
        });
    }
    onRemoveEmployee() {
        this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(confirm => confirm)).subscribe(confirm => {
            this.employeeService.delete(this.selectedEmployee.id).subscribe(() => {
                const index = this.employees.findIndex(e => e.id === this.selectedEmployee.id);
                this.employees.splice(index, 1);
                this.selectedEmployee = null;
            });
        });
    }
};
ManufacturingEmployeesComponent.ɵfac = function ManufacturingEmployeesComponent_Factory(t) { return new (t || ManufacturingEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_0__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
ManufacturingEmployeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManufacturingEmployeesComponent, selectors: [["pek-manufacturing-employees"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Employee", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function ManufacturingEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingEmployeesComponent_Template_button_click_7_listener() { return ctx.onAddEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ManufacturingEmployeesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedEmployee = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ManufacturingEmployeesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ManufacturingEmployeesComponent_ng_template_14_Template, 13, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ManufacturingEmployeesComponent_ng_template_15_Template, 13, 7, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ManufacturingEmployeesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ManufacturingEmployeesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ManufacturingEmployeesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.employees.length > 0)("rows", 10)("selection", ctx.selectedEmployee)("value", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.employees.length > 0);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_12__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLWVtcGxveWVlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
ManufacturingEmployeesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()
], ManufacturingEmployeesComponent);



/***/ }),

/***/ 57288:
/*!*************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-layout/manufacturing-layout.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingLayoutComponent": () => (/* binding */ ManufacturingLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class ManufacturingLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Plans', commands: ['plans'] },
            { label: 'Orders To Own Production', commands: ['orders'] },
            { label: 'Slice Tasks', commands: ['slice-tasks'] },
        ];
        this.settingsRoutes = [
            { label: 'Employees', commands: ['employees'] },
            { label: 'Positions', commands: ['positions'] },
            { label: 'Machines', commands: ['machines'] },
            { label: 'Order Statuses', commands: ['order-statuses'] },
        ];
    }
    ngOnInit() {
    }
}
ManufacturingLayoutComponent.ɵfac = function ManufacturingLayoutComponent_Factory(t) { return new (t || ManufacturingLayoutComponent)(); };
ManufacturingLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManufacturingLayoutComponent, selectors: [["pek-manufacturing-layout"]], decls: 2, vars: 3, consts: [[3, "module", "routes", "settingsRoutes"]], template: function ManufacturingLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Manufacturing")("routes", ctx.routes)("settingsRoutes", ctx.settingsRoutes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 38311:
/*!*****************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-machines/manufacturing-machines.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingMachinesComponent": () => (/* binding */ ManufacturingMachinesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/machine.service */ 35907);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);













function ManufacturingMachinesComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Machine to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingMachinesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManufacturingMachinesComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedMachine);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedMachine);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function ManufacturingMachinesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Max working time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ManufacturingMachinesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 25);
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
    const machine_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", machine_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](machine_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](machine_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](machine_r8.max_working_time);
} }
function ManufacturingMachinesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 29);
} }
function ManufacturingMachinesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingMachinesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManufacturingMachinesComponent_ng_template_16_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ManufacturingMachinesComponent_ng_template_16_span_3_Template, 2, 0, "span", 28);
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
function ManufacturingMachinesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingMachinesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingMachinesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingMachinesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
let ManufacturingMachinesComponent = class ManufacturingMachinesComponent {
    constructor(modalService, machineService) {
        this.modalService = modalService;
        this.machineService = machineService;
        this.menuItems = [{
                label: 'Selected Machine',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditMachine()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveMachine()
                    }
                ]
            }];
        this.machines = [];
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.isLoading = false;
        this.machines$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.machineService.get()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(machines => this.machines = machines), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this));
    }
    ngOnInit() {
        this.machines$.subscribe();
    }
    onAddMachine() {
        this.machineService.createEditMachineModal('create').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(position => !!position)).subscribe(position => this.machines.unshift(position));
    }
    prepareForSearch() {
        this.isLoading = true;
        this.selectedMachine = null;
        this.machines = [];
    }
    onEditMachine() {
        this.machineService.createEditMachineModal('edit', this.selectedMachine).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(position => !!position)).subscribe(position => {
            const index = this.machines.findIndex(t => t.id === this.selectedMachine.id);
            this.machines[index] = position;
            this.selectedMachine = this.machines[index];
        });
    }
    onRemoveMachine() {
        this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(confirm => confirm)).subscribe(() => {
            this.machineService.delete(this.selectedMachine.id).subscribe(() => {
                const index = this.machines.findIndex(e => e.id === this.selectedMachine.id);
                this.machines.splice(index, 1);
                this.selectedMachine = null;
            });
        });
    }
};
ManufacturingMachinesComponent.ɵfac = function ManufacturingMachinesComponent_Factory(t) { return new (t || ManufacturingMachinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_machine_service__WEBPACK_IMPORTED_MODULE_1__.MachineService)); };
ManufacturingMachinesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManufacturingMachinesComponent, selectors: [["pek-manufacturing-machines"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Machine", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "35%"], [1, "text-center", 2, "width", "25%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function ManufacturingMachinesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingMachinesComponent_Template_button_click_7_listener() { return ctx.onAddMachine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ManufacturingMachinesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedMachine = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ManufacturingMachinesComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ManufacturingMachinesComponent_ng_template_14_Template, 9, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ManufacturingMachinesComponent_ng_template_15_Template, 9, 5, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ManufacturingMachinesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ManufacturingMachinesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ManufacturingMachinesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.machines.length > 0)("rows", 10)("selection", ctx.selectedMachine)("value", ctx.machines);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.machines.length > 0);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_11__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLW1hY2hpbmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
ManufacturingMachinesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], ManufacturingMachinesComponent);



/***/ }),

/***/ 66487:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-order-page/manufacturing-order-page-print/manufacturing-order-page-print.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingOrderPagePrintComponent": () => (/* binding */ ManufacturingOrderPagePrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function ManufacturingOrderPagePrintComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Order Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.root_production_list_products[0] == null ? null : ctx_r0.order.root_production_list_products[0].nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.root_production_list_products[0] == null ? null : ctx_r0.order.root_production_list_products[0].nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 4, ctx_r0.order.created, "dd.MM.y"));
} }
function ManufacturingOrderPagePrintComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_i_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 27);
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "In QC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Not passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Partly passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_span_3_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_span_4_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", product_r8.passed_quantity, "/", product_r8.initial_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r8.quality_control === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r8.quality_control === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r8.quality_control === "2");
} }
function ManufacturingOrderPagePrintComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 21)(13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22)(18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 23)(23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 24)(27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21)(30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ManufacturingOrderPagePrintComponent_div_8_div_1_i_32_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ManufacturingOrderPagePrintComponent_div_8_div_1_p_33_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22)(35, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "QC passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ManufacturingOrderPagePrintComponent_div_8_div_1_p_37_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ManufacturingOrderPagePrintComponent_div_8_div_1_p_38_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ManufacturingOrderPagePrintComponent_div_8_div_1_p_39_Template, 5, 5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const idx_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.current_technology == null ? null : product_r8.current_technology.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r8.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r8.isReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !product_r8.isReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !product_r8.quality_control && !product_r8.is_technology_ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r8.is_technology_ready && !product_r8.quality_control);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r8.quality_control);
} }
function ManufacturingOrderPagePrintComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManufacturingOrderPagePrintComponent_div_8_div_1_Template, 40, 10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.products);
} }
function ManufacturingOrderPagePrintComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20.material_nomenclature.code, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20.order_product_nomenclature.code, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20.list_product.nomenclature.code, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20.material_nomenclature.name, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20.order_product_nomenclature.name, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20.list_product.nomenclature.name, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManufacturingOrderPagePrintComponent_div_12_div_1_p_10_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManufacturingOrderPagePrintComponent_div_12_div_1_p_11_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManufacturingOrderPagePrintComponent_div_12_div_1_p_12_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 29)(14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ManufacturingOrderPagePrintComponent_div_12_div_1_p_16_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ManufacturingOrderPagePrintComponent_div_12_div_1_p_17_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ManufacturingOrderPagePrintComponent_div_12_div_1_p_18_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 22)(20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22)(25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Req Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const material_r20 = ctx.$implicit;
    const idx_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r20.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r20.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r20.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r20.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r20.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r20.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](material_r20 == null ? null : material_r20.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r20 == null ? null : material_r20.totalInitialQuantity, " ");
} }
function ManufacturingOrderPagePrintComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManufacturingOrderPagePrintComponent_div_12_div_1_Template, 28, 9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.materials);
} }
function ManufacturingOrderPagePrintComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPagePrintComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 30)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 24)(13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22)(18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const machine_r35 = ctx.$implicit;
    const idx_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r36 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](machine_r35.machine.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](machine_r35.machine.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](machine_r35.duration);
} }
function ManufacturingOrderPagePrintComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManufacturingOrderPagePrintComponent_div_16_div_1_Template, 22, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.machines);
} }
class ManufacturingOrderPagePrintComponent {
    constructor(auth) {
        this.auth = auth;
        this.products = [];
        this.materials = [];
        this.machines = [];
        this.currentDate = new Date();
    }
    ngOnInit() {
    }
}
ManufacturingOrderPagePrintComponent.ɵfac = function ManufacturingOrderPagePrintComponent_Factory(t) { return new (t || ManufacturingOrderPagePrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ManufacturingOrderPagePrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManufacturingOrderPagePrintComponent, selectors: [["pek-manufacturing-order-page-print"]], inputs: { order: "order", orderId: "orderId", products: "products", materials: "materials", machines: "machines" }, decls: 46, vars: 13, consts: [[1, "print-order", "print-order_show"], [1, "print-content"], ["class", "print-content__header", 4, "ngIf"], ["class", "table-empty", 4, "ngIf"], ["class", "print-content__table print-content__table_items", 4, "ngIf"], ["class", "print-content__table print-content__table_materials", 4, "ngIf"], [1, "pagebreak"], [1, "user-info"], [1, "left"], [1, "right"], [1, "print-content__header"], [1, "print-content__header-col", "print-content__header-col_code"], [1, "print-content__header-col", "print-content__header-col_name"], [1, "print-content__header-col", "print-content__header-col_id"], [1, "print-content__header-col", "print-content__header-col_date"], [1, "table-empty"], [1, "print-content__table", "print-content__table_items"], ["class", "print-content__table-row", 4, "ngFor", "ngForOf"], [1, "print-content__table-row"], [1, "print-content__table-inner"], [1, "print-content__table-col", 2, "width", "5%"], [1, "print-content__table-col", 2, "width", "30%"], [1, "print-content__table-col", 2, "width", "20%"], [1, "print-content__table-col", 2, "width", "15%"], [1, "print-content__table-col", 2, "width", "35%"], ["class", "fas fa-check text-success", 4, "ngIf"], [4, "ngIf"], [1, "fas", "fa-check", "text-success"], [1, "print-content__table", "print-content__table_materials"], [1, "print-content__table-col", 2, "width", "25%"], [1, "print-content__table-col", 2, "width", "40%"]], template: function ManufacturingOrderPagePrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Execution Order Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManufacturingOrderPagePrintComponent_div_4_Template, 22, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ordered Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManufacturingOrderPagePrintComponent_div_7_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManufacturingOrderPagePrintComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManufacturingOrderPagePrintComponent_div_11_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManufacturingOrderPagePrintComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManufacturingOrderPagePrintComponent_div_15_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ManufacturingOrderPagePrintComponent_div_16_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "div", 8)(20, "div")(21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div")(32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Signed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "div")(36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Retrieved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div")(40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div")(44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Signed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.materials.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.materials.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.machines.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.machines.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.auth.user.first_name, " ", ctx.auth.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 10, ctx.currentDate, "dd.MM.y"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["@media print {\n  .print-order_hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.print-order_show[_ngcontent-%COMP%] {\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n}\n@media print {\n  .print-order_show[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.print-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.2;\n  margin-bottom: 2rem;\n}\n.print-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.3125rem;\n  margin: 0 0 1.25rem;\n  line-height: 1.2;\n}\n.print-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.0625rem;\n  margin: 0 0 0.625rem;\n  line-height: 1.2;\n}\n.print-content__header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3rem;\n}\n.print-content__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n}\n.print-content__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.print-content__header-col[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.print-content__header-col_code[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.print-content__header-col_name[_ngcontent-%COMP%] {\n  width: 32%;\n}\n.print-content__header-col_id[_ngcontent-%COMP%] {\n  width: 13%;\n}\n.print-content__header-col_date[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.print-content__table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  line-height: 1.4;\n  margin: 0;\n  word-wrap: break-word;\n}\n.print-content__table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.print-content__table_items[_ngcontent-%COMP%], .print-content__table_materials[_ngcontent-%COMP%], .print-content__table_machines[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.print-content__table-row[_ngcontent-%COMP%] {\n  page-break-inside: avoid;\n  padding: 0.5rem;\n  display: block;\n  border: 1px solid #696767;\n  border-bottom: none;\n}\n.print-content__table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #696767;\n}\n.print-content__table-col[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.print-content__table-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 3.5rem;\n}\n.user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 500;\n  margin-bottom: 0.375rem;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  line-height: 1.25rem;\n}\n.user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.user-info[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n@media print {\n  .print-content__table-row[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .user-info[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n.table-empty[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.125rem;\n  font-style: italic;\n  margin-bottom: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctb3JkZXItcGFnZS1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQURGO0lBRUksYUFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjtBQUdJO0VBTkY7SUFPSSxjQUFBO0VBQUo7QUFDRjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNFLG9CQUFBO0FBTE47QUFRSTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQU5OO0FBVUU7RUFDRSxxQkFBQTtBQVJKO0FBU0k7RUFDRSxVQUFBO0FBUE47QUFVSTtFQUNFLFVBQUE7QUFSTjtBQVdJO0VBQ0UsVUFBQTtBQVROO0FBWUk7RUFDRSxVQUFBO0FBVk47QUFnQkk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBZE47QUFpQkk7RUFDRSxtQkFBQTtBQWZOO0FBa0JJO0VBR0UsbUJBQUE7QUFsQk47QUFzQkU7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXNCSTtFQUNFLGdDQUFBO0FBcEJOO0FBd0JFO0VBQ0UsZUFBQTtBQXRCSjtBQXlCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQXZCSjtBQTJCQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUF4QkY7QUEwQkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF4Qko7QUEyQkU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUF6Qko7QUE0QkU7RUFDRSxVQUFBO0FBMUJKO0FBOEJJO0VBQ0UscUJBQUE7QUE1Qk47QUFpQ0E7RUFDRTtJQUdFLHdCQUFBO0VBaENGO0VBbUNBO0lBQ0Usd0JBQUE7RUFqQ0Y7QUFDRjtBQXFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbkNGIiwiZmlsZSI6Im1hbnVmYWN0dXJpbmctb3JkZXItcGFnZS1wcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludC1vcmRlciB7XHJcbiAgJl9oaWRlIHtcclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX3Nob3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmludC1jb250ZW50IHtcclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEuMzEyNXJlbTtcclxuICAgIG1hcmdpbjogMCAwIDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMC42MjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIH1cclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2hlYWRlci1jb2wge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgJl9jb2RlIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX25hbWUge1xyXG4gICAgICB3aWR0aDogMzIlO1xyXG4gICAgfVxyXG5cclxuICAgICZfaWQge1xyXG4gICAgICB3aWR0aDogMTMlO1xyXG4gICAgfVxyXG5cclxuICAgICZfZGF0ZSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190YWJsZSB7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmX2l0ZW1zLFxyXG4gICAgJl9tYXRlcmlhbHMsXHJcbiAgICAmX21hY2hpbmVzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RhYmxlLXJvdyB7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OTY3Njc7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjk2NzY3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGFibGUtY29sIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX3RhYmxlLWlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5wcmludC1jb250ZW50X190YWJsZS1yb3cge1xyXG4gICAgLy9wYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xyXG4gICAgLy9wYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICB9XHJcblxyXG4gIC51c2VyLWluZm8ge1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgLy9wYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1lbXB0eSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 47450:
/*!*********************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-order-page/manufacturing-order-page.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingOrderPageComponent": () => (/* binding */ ManufacturingOrderPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 63853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _shared_enums_view_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/view-mode */ 89723);
/* harmony import */ var deep_copy_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-copy-ts */ 47307);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _warehouse_services_order_technical_equipments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../warehouse/services/order-technical-equipments.service */ 80439);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _warehouse_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../warehouse/services/request.service */ 63205);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_components_hover_detailed_info_component_hover_detailed_info_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/hover-detailed-info-component/hover-detailed-info-component.component */ 48666);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _manufacturing_order_page_print_manufacturing_order_page_print_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manufacturing-order-page-print/manufacturing-order-page-print.component */ 66487);
/* harmony import */ var _manufacturing_order_products_info_print_manufacturing_order_products_info_print_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manufacturing-order-products-info-print/manufacturing-order-products-info-print.component */ 25081);


























function ManufacturingOrderPageComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function ManufacturingOrderPageComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" (", ctx_r1.order.root_production_list_products[0].nomenclature.code, " ", ctx_r1.order.root_production_list_products[0].nomenclature.name, ") ");
} }
function ManufacturingOrderPageComponent_ng_template_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose the Item to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_ng_template_21_p_1_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "p-menubar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.onAddProduct()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_ng_template_21_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r30.onAddMaterial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.selectedProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("disabled", !ctx_r3.selectedProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("model", ctx_r3.productMenuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r3.selectedProduct);
} }
function ManufacturingOrderPageComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "th", 38)(14, "label", 39)(15, "p-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onChange", function ManufacturingOrderPageComponent_ng_template_22_Template_p_checkbox_onChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r31.toggleAllReady($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "QC Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("binary", true);
} }
function ManufacturingOrderPageComponent_ng_template_23_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const empl_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", empl_r39.employee.first_name, " ", empl_r39.employee.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", empl_r39.duration, ")");
} }
function ManufacturingOrderPageComponent_ng_template_23_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_23_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "In QC");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_23_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(Not passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_23_div_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(Passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_23_div_19_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(Partly passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_23_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_ng_template_23_div_19_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_ng_template_23_div_19_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ManufacturingOrderPageComponent_ng_template_23_div_19_span_4_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", product_r33.passed_quantity, "/", product_r33.initial_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r33.quality_control === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r33.quality_control === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r33.quality_control === "2");
} }
function ManufacturingOrderPageComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 42)(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ManufacturingOrderPageComponent_ng_template_23_div_12_Template, 5, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 37)(14, "div", 45)(15, "p-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ManufacturingOrderPageComponent_ng_template_23_Template_p_checkbox_ngModelChange_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45); const product_r33 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](product_r33.isReady = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ManufacturingOrderPageComponent_ng_template_23_div_17_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ManufacturingOrderPageComponent_ng_template_23_div_18_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ManufacturingOrderPageComponent_ng_template_23_div_19_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r33 = ctx.$implicit;
    const i_r34 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", product_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", product_r33.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", product_r33.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r33.current_technology == null ? null : product_r33.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r33.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", product_r33 == null ? null : product_r33.task_employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", product_r33.isReady)("disabled", product_r33.quality_control || product_r33.is_technology_ready)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !product_r33.quality_control && !product_r33.is_technology_ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r33.is_technology_ready && !product_r33.quality_control);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r33.quality_control);
} }
function ManufacturingOrderPageComponent_ng_template_24_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 50);
} }
function ManufacturingOrderPageComponent_ng_template_24_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_ng_template_24_i_2_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_ng_template_24_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r6.isLoadingProducts);
} }
function ManufacturingOrderPageComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_ng_template_25_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r2.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_26_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r51); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r2.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_div_29_ng_template_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_29_ng_template_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r63.onCancelOrderMaterials()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx_r59.isCancellation);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_29_ng_template_4_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r65.onDeleteOrderMaterial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r60.selectedOrderMaterial || (ctx_r60.selectedOrderMaterial == null ? null : ctx_r60.selectedOrderMaterial.totalRequiredQuantity) === 0)("loading", ctx_r60.isDeletingOrderMaterial);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_29_ng_template_4_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r67.openHierarchyMode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx_r61.isCancellation);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_29_ng_template_4_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r69.printOrderProductsInfo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_29_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_29_ng_template_4_button_1_Template, 1, 1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_div_29_ng_template_4_button_2_Template, 1, 2, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_29_ng_template_4_button_3_Template, 1, 1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ManufacturingOrderPageComponent_div_29_ng_template_4_button_4_Template, 1, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r53.orderMaterials.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r53.orderMaterials.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r53.orderMaterials.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r53.orderMaterials.length > 0);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71.material_nomenclature.code, " ");
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71.order_product_nomenclature.code, " ");
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71.list_product.nomenclature.code, " ");
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71.material_nomenclature.name, " ");
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71.order_product_nomenclature.name, " ");
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71.list_product.nomenclature.name, " ");
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](material_r71.technology);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 68);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 69);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 65)(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ManufacturingOrderPageComponent_div_29_ng_template_6_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ManufacturingOrderPageComponent_div_29_ng_template_6_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ManufacturingOrderPageComponent_div_29_ng_template_6_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ManufacturingOrderPageComponent_div_29_ng_template_6_div_8_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ManufacturingOrderPageComponent_div_29_ng_template_6_div_9_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ManufacturingOrderPageComponent_div_29_ng_template_6_div_10_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ManufacturingOrderPageComponent_div_29_ng_template_6_span_12_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ManufacturingOrderPageComponent_div_29_ng_template_6_i_16_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ManufacturingOrderPageComponent_div_29_ng_template_6_i_17_Template, 1, 0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const material_r71 = ctx.$implicit;
    const i_r72 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", material_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r72 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", material_r71.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", material_r71 == null ? null : material_r71.totalInitialQuantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (material_r71 == null ? null : material_r71.totalRequiredQuantity) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (material_r71 == null ? null : material_r71.totalRequiredQuantity) > 0);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 50);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_29_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_div_29_ng_template_7_i_2_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_29_ng_template_7_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r56.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r56.isLoadingProducts);
} }
function ManufacturingOrderPageComponent_div_29_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_29_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r92); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r52.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_29_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_29_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r94); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r52.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "p-table", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function ManufacturingOrderPageComponent_div_29_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r95.selectedOrderMaterial = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ManufacturingOrderPageComponent_div_29_ng_template_4_Template, 5, 4, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ManufacturingOrderPageComponent_div_29_ng_template_5_Template, 13, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ManufacturingOrderPageComponent_div_29_ng_template_6_Template, 18, 12, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ManufacturingOrderPageComponent_div_29_ng_template_7_Template, 4, 3, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ManufacturingOrderPageComponent_div_29_ng_template_8_Template, 2, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ManufacturingOrderPageComponent_div_29_div_9_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r9.orderMaterials.length > 0)("rows", 10)("value", ctx_r9.orderMaterials)("selection", ctx_r9.selectedOrderMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r52.paginator && !ctx_r9.isLoadingProducts && ctx_r9.orderMaterials.length > 0);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_30_ng_template_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r102.openListMode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx_r101.isCancellation);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_30_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r104.expandCollapseAllOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_30_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r106.expandCollapseAllOrders(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_30_ng_template_3_button_3_Template, 1, 1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_30_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r105); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r107.printOrderProductsInfo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r97.orderMaterials.length > 0);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("L(", rowData_r109.request.allIds == null ? null : rowData_r109.request.allIds.length, ")");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_pek_hover_detailed_info_component_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", id_r122, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_pek_hover_detailed_info_component_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "pek-hover-detailed-info-component", 84)(1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_pek_hover_detailed_info_component_3_div_2_Template, 2, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("moveLeft", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", rowData_r109.request.allIds);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_pek_hover_detailed_info_component_3_Template, 3, 2, "pek-hover-detailed-info-component", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request.allIds == null ? null : rowData_r109.request.allIds.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request.allIds == null ? null : rowData_r109.request.allIds.length) > 0);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.material_nomenclature.code, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.order_product_nomenclature.code, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.list_product.nomenclature.code, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.request.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.request.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !rowData_r109.request.material_nomenclature && !rowData_r109.request.order_product_nomenclature);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_1_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_1_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request == null ? null : rowData_r109.request.list_product == null ? null : rowData_r109.request.list_product.nomenclature == null ? null : rowData_r109.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.material_nomenclature.name, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_2_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_2_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request == null ? null : rowData_r109.request.list_product == null ? null : rowData_r109.request.list_product.nomenclature == null ? null : rowData_r109.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.order_product_nomenclature.name, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_3_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_3_b_1_Template, 2, 0, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request == null ? null : rowData_r109.request.list_product == null ? null : rowData_r109.request.list_product.nomenclature == null ? null : rowData_r109.request.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.list_product.nomenclature.name, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_2_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_div_3_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.request.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.request.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !rowData_r109.request.material_nomenclature && !rowData_r109.request.order_product_nomenclature);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](rowData_r109.request.technology);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ManufacturingOrderPageComponent_div_30_ng_template_5_div_20_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.request.technology);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", rowData_r109.request.totalInitialQuantity, " ");
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_i_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 68);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 69);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 77)(1, "td", 78)(2, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "p-treeTableToggler", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ManufacturingOrderPageComponent_div_30_ng_template_5_span_8_Template, 4, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 35)(10, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ManufacturingOrderPageComponent_div_30_ng_template_5_div_12_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 82)(14, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ManufacturingOrderPageComponent_div_30_ng_template_5_div_16_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td", 38)(18, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, ManufacturingOrderPageComponent_div_30_ng_template_5_div_20_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td", 76)(22, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, ManufacturingOrderPageComponent_div_30_ng_template_5_div_24_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "td", 76)(26, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, ManufacturingOrderPageComponent_div_30_ng_template_5_i_28_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, ManufacturingOrderPageComponent_div_30_ng_template_5_i_29_Template, 1, 0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r108 = ctx.$implicit;
    const rowData_r109 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-added-after-order-creation", rowData_r109.request == null ? null : rowData_r109.request.material_nomenclature)("tr-toggler", rowNode_r108.node.children.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ttRow", rowNode_r108)("id", rowData_r109.request ? "row-" + (rowData_r109.request == null ? null : rowData_r109.request.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rowNode", rowNode_r108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("bold", rowData_r109.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", rowData_r109.name, " ", rowData_r109.listId ? "(" + rowData_r109.listId + ")" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", rowData_r109.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request == null ? null : rowData_r109.request.totalRequiredQuantity) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (rowData_r109.request == null ? null : rowData_r109.request.totalRequiredQuantity) > 0);
} }
function ManufacturingOrderPageComponent_div_30_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 87)(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 8);
} }
function ManufacturingOrderPageComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "p-treeTable", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_div_30_ng_template_3_Template, 5, 1, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ManufacturingOrderPageComponent_div_30_ng_template_4_Template, 13, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ManufacturingOrderPageComponent_div_30_ng_template_5_Template, 30, 18, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ManufacturingOrderPageComponent_div_30_ng_template_6_Template, 5, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r10.requestTree);
} }
function ManufacturingOrderPageComponent_ng_template_37_Template(rf, ctx) { }
function ManufacturingOrderPageComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const machine_r146 = ctx.$implicit;
    const i_r147 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r147 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](machine_r146.machine.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](machine_r146.machine.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](machine_r146.duration);
} }
function ManufacturingOrderPageComponent_ng_template_40_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 50);
} }
function ManufacturingOrderPageComponent_ng_template_40_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_ng_template_40_i_2_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_ng_template_40_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r15.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r15.isLoadingProducts);
} }
function ManufacturingOrderPageComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_ng_template_41_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r151); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r11.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_42_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r153); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r11.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_ng_template_49_Template(rf, ctx) { }
function ManufacturingOrderPageComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_ng_template_51_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r157 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", locator_r157.name, " ");
} }
function ManufacturingOrderPageComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 42)(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ManufacturingOrderPageComponent_ng_template_51_span_8_Template, 2, 1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technicalEquipment_r154 = ctx.$implicit;
    const i_r155 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", technicalEquipment_r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r155 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r154.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r154.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", technicalEquipment_r154.locators);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r154.max_initial_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("text-danger", !technicalEquipment_r154.in_use || technicalEquipment_r154.in_use && technicalEquipment_r154.locators.length < 1)("text-success", technicalEquipment_r154.in_use && technicalEquipment_r154.locators.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r154.in_use && technicalEquipment_r154.locators.length > 0 ? "Received" : "Not Received");
} }
function ManufacturingOrderPageComponent_ng_template_52_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 50);
} }
function ManufacturingOrderPageComponent_ng_template_52_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ManufacturingOrderPageComponent_ng_template_52_i_2_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ManufacturingOrderPageComponent_ng_template_52_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r22.isLoadingTechnicalEquipments);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r22.isLoadingTechnicalEquipments);
} }
function ManufacturingOrderPageComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_ng_template_53_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r161); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](48); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r18.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ManufacturingOrderPageComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_div_54_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r163); _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](48); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r18.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ManufacturingOrderPageComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "pek-manufacturing-order-page-print", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("machines", ctx_r25.machines)("materials", ctx_r25.orderMaterials)("order", ctx_r25.order)("orderId", ctx_r25.orderId)("products", ctx_r25.products);
} }
function ManufacturingOrderPageComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "pek-manufacturing-order-products-info-print", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("order", ctx_r26.order)("orderId", ctx_r26.orderId)("products", ctx_r26.products)("materials", ctx_r26.orderMaterialsByOrderProduct);
} }
let ManufacturingOrderPageComponent = class ManufacturingOrderPageComponent {
    constructor(route, orderService, orderProductService, orderTechnicalEquipmentService, modalService, requestService) {
        this.route = route;
        this.orderService = orderService;
        this.orderProductService = orderProductService;
        this.orderTechnicalEquipmentService = orderTechnicalEquipmentService;
        this.modalService = modalService;
        this.requestService = requestService;
        this.productMenuItems = [{
                label: 'Selected Item',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditOrderProductQuantity(),
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveOrderProduct(),
                    }
                ]
            }];
        this.ViewMode = _shared_enums_view_mode__WEBPACK_IMPORTED_MODULE_0__.ViewMode;
        this.viewMode = _shared_enums_view_mode__WEBPACK_IMPORTED_MODULE_0__.ViewMode.LIST;
        this.isOrderLoading = true;
        this.isMovingToQC = false;
        this.isShowPrint = false;
        this.isShowOrderProductsPrint = false;
        this.isCancellation = false;
        this.products = [];
        this.isLoadingProducts = true;
        this.isLoadingTechnicalEquipments = true;
        this.orderMaterials = [];
        this.orderMaterialsByOrderProduct = [];
        this.machines = [];
        this.technicalEquipments = [];
        // Hierarchy Mode View data
        this.requestTree = [];
        this.hierarchyRequests = [];
        this.isDeletingOrderMaterial = false;
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(id => this.orderId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getOrder()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getOrderTechnicalEquipments()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getProducts())).subscribe();
    }
    getOrder() {
        this.orderService.getById(this.orderId).subscribe(order => {
            order.statuses.map(x => x.estimated_date_sort = new Date(x.estimated_date));
            order.statuses.sort((a, b) => a.estimated_date_sort - b.estimated_date_sort || a.is_active - b.is_active);
            this.order = order;
            this.isOrderLoading = false;
        });
    }
    onEditOrder() {
        this.orderService.openEditOrderModal(this.order, 'manufacturing').subscribe(confirm => {
            if (confirm) {
                this.getOrder();
            }
        });
    }
    getProducts() {
        this.machines = [];
        this.orderMaterials = [];
        this.orderMaterialsByOrderProduct = [];
        this.products = [];
        this.isLoadingProducts = true;
        this.orderProductService.getOrderProducts(this.orderId).subscribe(products => {
            products.forEach((product, idx) => {
                product.isReady = product.is_technology_ready ? product.is_technology_ready : false;
                if (product.task_materials && product.task_materials?.length > 0) {
                    const tempMaterials = (0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_1__.deepCopy)(product.task_materials);
                    tempMaterials.forEach(m => {
                        let nomenclatureId;
                        let currentTechnology;
                        if (m.material_nomenclature) {
                            nomenclatureId = m.material_nomenclature.id;
                            currentTechnology = m.technology;
                        }
                        if (m.order_product_nomenclature) {
                            nomenclatureId = m.order_product_nomenclature.id;
                            currentTechnology = m.technology;
                        }
                        if (m.list_product) {
                            nomenclatureId = m.list_product.nomenclature.id;
                            currentTechnology = m.technology;
                        }
                        const orderProductTechnologyId = product.current_technology ? product.current_technology.id : null;
                        const inOrderProductMaterials = this.orderMaterialsByOrderProduct
                            .filter(el => el.for_order_product.nomenclature.id === m.for_order_product.nomenclature.id
                            && el.orderProductTechnologyId === orderProductTechnologyId)
                            .find(material => {
                            if (material.material_nomenclature) {
                                return material.material_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                            }
                            if (material.order_product_nomenclature) {
                                return material.order_product_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                            }
                            if (material.list_product) {
                                return material.list_product.nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                            }
                        });
                        if (inOrderProductMaterials) {
                            inOrderProductMaterials.allIds.push(m.id);
                            inOrderProductMaterials.totalInitialQuantity += m.initial_quantity;
                            inOrderProductMaterials.totalRequiredQuantity += m.required_quantity;
                        }
                        else {
                            m.allIds = [m.id];
                            m.totalInitialQuantity = m.initial_quantity;
                            m.totalRequiredQuantity = m.required_quantity;
                            m.orderProductTechnologyId = orderProductTechnologyId;
                            this.orderMaterialsByOrderProduct.push(m);
                        }
                    });
                    product.task_materials.forEach(m => {
                        let nomenclatureId;
                        let currentTechnology;
                        if (m.material_nomenclature) {
                            nomenclatureId = m.material_nomenclature.id;
                            currentTechnology = m.technology;
                        }
                        if (m.order_product_nomenclature) {
                            nomenclatureId = m.order_product_nomenclature.id;
                            currentTechnology = m.technology;
                        }
                        if (m.list_product) {
                            nomenclatureId = m.list_product.nomenclature.id;
                            currentTechnology = m.technology;
                        }
                        const inMaterials = this.orderMaterials.find(material => {
                            if (material.material_nomenclature) {
                                return material.material_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                            }
                            if (material.order_product_nomenclature) {
                                return material.order_product_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                            }
                            if (material.list_product) {
                                return material.list_product.nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                            }
                        });
                        if (inMaterials) {
                            inMaterials.allIds.push(m.id);
                            inMaterials.totalInitialQuantity += m.initial_quantity;
                            inMaterials.totalRequiredQuantity += m.required_quantity;
                        }
                        else {
                            m.allIds = [m.id];
                            m.totalInitialQuantity = m.initial_quantity;
                            m.totalRequiredQuantity = m.required_quantity;
                            this.orderMaterials.push(m);
                        }
                    });
                }
                if (product?.task_machines && product?.task_machines?.length > 0) {
                    product.task_machines.forEach(m => {
                        this.machines.push(m);
                    });
                }
            });
            const newProducts = [];
            products.forEach(product => {
                const newProduct = { ...product };
                const findProduct = newProducts.find(p => p.nomenclature.id === product.nomenclature.id &&
                    p.current_technology.id === product.current_technology.id);
                if (!findProduct) {
                    newProduct.quantity = products.filter(p => p.nomenclature.id === product.nomenclature.id &&
                        p.current_technology.id === product.current_technology.id).reduce((sum, p) => sum + p.quantity, 0);
                    newProduct.ids = products.filter(p => p.nomenclature.id === product.nomenclature.id &&
                        p.current_technology.id === product.current_technology.id).map(p => p.id);
                    newProducts.push(newProduct);
                }
            });
            this.products = newProducts.map(p => p);
            this.machines = this.machines.map(m => m);
            this.orderMaterials = [...this.orderMaterials];
            this.hierarchyRequests = (0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_1__.deepCopy)(this.orderMaterialsByOrderProduct);
            this.prepareTreeCategories();
            this.isLoadingProducts = false;
        });
    }
    toggleAllReady(evt) {
        this.products.forEach(product => {
            if (!product.is_technology_ready) {
                product.isReady = evt.checked;
            }
        });
    }
    getOrderTechnicalEquipments() {
        this.orderTechnicalEquipmentService.get([{ name: 'order', value: this.orderId }]).subscribe(technicalEquipments => {
            this.technicalEquipments = technicalEquipments;
            this.isLoadingTechnicalEquipments = false;
        });
    }
    onAddProduct() {
        this.orderProductService.openAddOutsourcingRequestModal(this.orderId).subscribe(product => {
            if (product) {
                this.getProducts();
            }
        });
    }
    onRemoveOrderProduct() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.orderProductService.removeFromOrder(this.selectedProduct).subscribe(() => {
                    this.products = this.products.filter(p => p.id !== this.selectedProduct.id);
                    this.selectedProduct = null;
                });
            }
        });
    }
    onEditOrderProductQuantity() {
        this.orderProductService.editOrderProductQuantity(this.selectedProduct).subscribe(orderProduct => {
            if (orderProduct) {
                this.selectedProduct.quantity = orderProduct.quantity;
            }
        });
    }
    onCancelOrderMaterials() {
        this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
            if (confirm) {
                this.isCancellation = true;
                this.requestService.cancel(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => this.isCancellation = false)).subscribe(() => {
                    this.orderMaterials = [];
                    this.products = [];
                    this.machines = [];
                    this.selectedProduct = null;
                    this.isLoadingProducts = true;
                    this.getProducts();
                });
            }
        });
    }
    onPrintPage() {
        this.isShowPrint = true;
        setTimeout(() => {
            window.print();
        });
    }
    onWindowAfterPrint() {
        this.isShowPrint = false;
    }
    moveToQc() {
        this.isMovingToQC = true;
        const orderData = {
            id: this.order.id,
            order: {
                completed: true
            }
        };
        this.orderService.moveToQc(orderData).subscribe(() => {
            if (productsUpdateToSend.length === 0) {
                this.isMovingToQC = false;
            }
        });
        const productsUpdateToSend = [];
        this.products.forEach((product) => {
            if (product.isReady && !product.is_technology_ready && !product.quality_control) {
                product.ids.forEach(id => {
                    const productData = {
                        id,
                        product: {
                            is_technology_ready: true
                        }
                    };
                    productsUpdateToSend.push(productData);
                });
            }
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.from)(productsUpdateToSend).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.concatMap)(data => this.makeRequest(data))).subscribe(value => this.isMovingToQC = false, error => this.isMovingToQC = false);
    }
    makeRequest(productData) {
        return this.orderProductService.moveToQc(productData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(res => {
            const prod = this.products.find(el => el.ids.findIndex(id => id === res.id) > -1);
            if (prod) {
                prod.is_technology_ready = true;
            }
        }));
    }
    onAddMaterial() {
        this.orderProductService.openAddPMaterialToOrder(this.selectedProduct.id).subscribe(request => {
            if (request) {
                // this.getOrder();
                this.getProducts();
            }
        });
    }
    openHierarchyMode() {
        this.viewMode = _shared_enums_view_mode__WEBPACK_IMPORTED_MODULE_0__.ViewMode.HIERARCHY;
    }
    openListMode() {
        this.viewMode = _shared_enums_view_mode__WEBPACK_IMPORTED_MODULE_0__.ViewMode.LIST;
    }
    prepareTreeCategories() {
        const categoriesTemp = [];
        this.hierarchyRequests.forEach(request => {
            if (request.for_order_product) {
                const parentProducts = request.for_order_product.nomenclature;
                const listId = request.list_product ? request.list_product.list.id : null;
                const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.id);
                if (isAdded < 0) {
                    categoriesTemp.push({
                        name: parentProducts.code + ' ' + parentProducts.name,
                        listId: listId,
                        id: parentProducts.id,
                        level: 0,
                        parentId: null,
                        for_order_product: request.for_order_product
                    });
                }
            }
            else if (request.list_product) {
                const parentProducts = request.list_product.list;
                const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.nomenclature.id);
                if (isAdded < 0) {
                    categoriesTemp.push({
                        name: parentProducts.nomenclature.code + ' ' + parentProducts.nomenclature.name,
                        listId: parentProducts.id,
                        id: parentProducts.nomenclature.id,
                        level: 0,
                        parentId: null,
                        listProduct: request.list_product
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
        this.hierarchyRequests.forEach(request => {
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
        this.requestTree.forEach(node => {
            const materialChild = node.children.filter(child => child.data.request.material_nomenclature).sort((a, b) => {
                return b.data.request.id - a.data.request.id;
            });
            const nonMaterialChild = node.children.filter(child => !child.data.request.material_nomenclature).sort((a, b) => {
                return b.data.request.id - a.data.request.id;
            });
            node.children = [...materialChild, ...nonMaterialChild];
        });
    }
    expandCollapseAllOrders(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(this.requestTree);
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
    printOrderProductsInfo() {
        this.isShowOrderProductsPrint = true;
        setTimeout(() => {
            window.print();
        });
    }
    onDeleteOrderMaterial() {
        console.log(this.selectedOrderMaterial);
        this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(Boolean)).subscribe(() => {
            this.isDeletingOrderMaterial = true;
            this.orderProductService.severalDeleteMaterial(this.selectedOrderMaterial.allIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => this.isDeletingOrderMaterial = false)).subscribe(() => {
                this.orderMaterials = this.orderMaterials.filter(m => m.id !== this.selectedOrderMaterial.id);
                this.selectedOrderMaterial = null;
            });
        });
    }
};
ManufacturingOrderPageComponent.ɵfac = function ManufacturingOrderPageComponent_Factory(t) { return new (t || ManufacturingOrderPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_4__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_warehouse_services_order_technical_equipments_service__WEBPACK_IMPORTED_MODULE_5__.OrderTechnicalEquipmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_warehouse_services_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService)); };
ManufacturingOrderPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ManufacturingOrderPageComponent, selectors: [["pek-manufacturing-order-page"]], hostBindings: function ManufacturingOrderPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("afterprint", function ManufacturingOrderPageComponent_afterprint_HostBindingHandler() { return ctx.onWindowAfterPrint(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
    } }, decls: 57, vars: 29, consts: [[1, "manufacturing-order-page"], [1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Lead Date & Status", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Move To QC", 1, "mr-2", "p-button-icon", 3, "disabled", "loading", "click"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print", 3, "disabled", "click"], [1, "page__content"], [1, "mb-4"], [1, "page__card", "mb-4"], [1, "page__table"], ["scrollHeight", "calc(100vh - 24rem)", "selectionMode", "single", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["class", "page__card mb-4", 4, "ngIf"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 24rem)", 3, "scrollable", "paginator", "rows", "value"], ["ht", ""], [1, "page__card"], ["et", ""], ["class", "manufacturing-order-page-print", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Item", 1, "ml-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Add Material", 1, "ml-2", 3, "disabled", "click"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "20%"], [2, "width", "10%"], [1, "text-center", 2, "width", "10%"], [1, "all-checked"], ["inputId", "ready", 3, "binary", "onChange"], [1, "ml-2"], [1, "table-row", 3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-center"], [3, "ngModel", "disabled", "binary", "ngModelChange"], [1, "mr-2"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 24rem)", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["mt", ""], ["pButton", "", "type", "button", "label", "Cancelation", "icon", "pi pi-times", "class", "ml-auto p-button-danger p-button-icon", 3, "loading", "click", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Delete", "icon", "pi pi-trash", "class", "ml-2 p-button p-button-danger p-button-icon", 3, "disabled", "loading", "click", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", "class", "ml-2 p-button p-button-icon", 3, "loading", "click", 4, "ngIf"], ["pButton", "", "type", "button", "class", "ml-2", "icon", "pi pi-print", "label", "Print", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Cancelation", "icon", "pi pi-times", 1, "ml-auto", "p-button-danger", "p-button-icon", 3, "loading", "click"], ["pButton", "", "type", "button", "label", "Delete", "icon", "pi pi-trash", 1, "ml-2", "p-button", "p-button-danger", "p-button-icon", 3, "disabled", "loading", "click"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", 1, "ml-2", "p-button", "p-button-icon", 3, "loading", "click"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print", 1, "ml-2", 3, "click"], [2, "width", "35%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], ["class", "pi pi-check-circle", 4, "ngIf"], ["class", "pi pi-times", 4, "ngIf"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-times"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 16.5rem)", 1, "orders-tree", 3, "value"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand all", 1, "ml-auto", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse all", 1, "ml-2", 3, "click"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", "class", "p-button p-button-icon ml-2", 3, "loading", "click", 4, "ngIf"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", 1, "p-button", "p-button-icon", "ml-2", 3, "loading", "click"], [2, "width", "25%", "padding-left", "3.3125rem"], [1, "text-center", 2, "width", "20%"], [1, "pagebreak", 3, "ttRow", "id"], [1, "ids-container", 2, "width", "25%"], [1, "td-title"], [1, "toggle-row", "hovered-info"], [3, "rowNode"], [1, "serial-numbers-container", 2, "width", "10%"], [3, "moveLeft", 4, "ngIf"], [3, "moveLeft"], [1, "ids"], [4, "ngFor", "ngForOf"], [1, "tr-spinner"], [2, "width", "30%"], [1, "text-center", 2, "width", "30%"], [1, "text-center"], [2, "width", "25%"], [1, "manufacturing-order-page-print"], [3, "machines", "materials", "order", "orderId", "products"], [3, "order", "orderId", "products", "materials"]], template: function ManufacturingOrderPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "pek-module-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ManufacturingOrderPageComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ManufacturingOrderPageComponent_ng_container_8_Template, 2, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 6)(10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_Template_button_click_11_listener() { return ctx.onEditOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_Template_button_click_12_listener() { return ctx.moveToQc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ManufacturingOrderPageComponent_Template_button_click_13_listener() { return ctx.onPrintPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 10)(15, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Ordered Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "p-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function ManufacturingOrderPageComponent_Template_p_table_selectionChange_19_listener($event) { return ctx.selectedProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, ManufacturingOrderPageComponent_ng_template_21_Template, 5, 6, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, ManufacturingOrderPageComponent_ng_template_22_Template, 20, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, ManufacturingOrderPageComponent_ng_template_23_Template, 20, 13, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, ManufacturingOrderPageComponent_ng_template_24_Template, 4, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ManufacturingOrderPageComponent_ng_template_25_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, ManufacturingOrderPageComponent_div_26_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " Parts/Materials List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, ManufacturingOrderPageComponent_div_29_Template, 10, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, ManufacturingOrderPageComponent_div_30_Template, 7, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, " Machines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 12)(34, "div", 13)(35, "p-table", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, ManufacturingOrderPageComponent_ng_template_37_Template, 0, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, ManufacturingOrderPageComponent_ng_template_38_Template, 9, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, ManufacturingOrderPageComponent_ng_template_39_Template, 9, 4, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, ManufacturingOrderPageComponent_ng_template_40_Template, 4, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, ManufacturingOrderPageComponent_ng_template_41_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, ManufacturingOrderPageComponent_div_42_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, " Technical Equipments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 25)(46, "div", 13)(47, "p-table", 23, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](49, ManufacturingOrderPageComponent_ng_template_49_Template, 0, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](50, ManufacturingOrderPageComponent_ng_template_50_Template, 13, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, ManufacturingOrderPageComponent_ng_template_51_Template, 13, 11, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](52, ManufacturingOrderPageComponent_ng_template_52_Template, 4, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, ManufacturingOrderPageComponent_ng_template_53_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, ManufacturingOrderPageComponent_div_54_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, ManufacturingOrderPageComponent_div_55_Template, 2, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](56, ManufacturingOrderPageComponent_div_56_Template, 2, 4, "div", 27);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](36);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Order ", ctx.orderId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isOrderLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isOrderLoading && (ctx.order.root_production_list_products[0] == null ? null : ctx.order.root_production_list_products[0].nomenclature));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.isOrderLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.isOrderLoading)("loading", ctx.isMovingToQC);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.isOrderLoading || ctx.isLoadingProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("scrollable", true)("paginator", ctx.products.length > 0)("rows", 10)("selection", ctx.selectedProduct)("value", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r2.paginator && !ctx.isLoadingProducts && ctx.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.ViewMode.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.viewMode === ctx.ViewMode.HIERARCHY);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("scrollable", true)("paginator", ctx.machines.length > 0)("rows", 10)("value", ctx.machines);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r11.paginator && !ctx.isLoadingProducts && ctx.machines.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("scrollable", true)("paginator", ctx.technicalEquipments.length > 0)("rows", 10)("value", ctx.technicalEquipments);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r18.paginator && !ctx.isLoadingTechnicalEquipments && ctx.technicalEquipments.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isShowPrint);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isShowOrderProductsPrint);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_21__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_21__.Button, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_23__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TTRow, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, primeng_menubar__WEBPACK_IMPORTED_MODULE_25__.Menubar, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_26__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_27__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_27__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_8__.ModuleIconComponent, _shared_components_hover_detailed_info_component_hover_detailed_info_component_component__WEBPACK_IMPORTED_MODULE_9__.HoverDetailedInfoComponentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _manufacturing_order_page_print_manufacturing_order_page_print_component__WEBPACK_IMPORTED_MODULE_10__.ManufacturingOrderPagePrintComponent, _manufacturing_order_products_info_print_manufacturing_order_products_info_print_component__WEBPACK_IMPORTED_MODULE_11__.ManufacturingOrderProductsInfoPrintComponent], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n\n.all-checked[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.all-checked[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.pi-times[_ngcontent-%COMP%] {\n  color: var(--theme-color-danger);\n  position: relative;\n  top: 2px;\n}\n\n.pi-check-circle[_ngcontent-%COMP%] {\n  color: var(--theme-color-success);\n  position: relative;\n  top: 2px;\n}\n\n@media print {\n  .manufacturing-order-page[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.manufacturing-order-page-print[_ngcontent-%COMP%] {\n  z-index: 9999;\n  background: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: none;\n  height: 100%;\n}\n\n@media print {\n  .manufacturing-order-page-print[_ngcontent-%COMP%] {\n    position: unset;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctb3JkZXItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUdBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQUY7O0FBSUU7RUFERjtJQUVJLGFBQUE7RUFBRjtBQUNGOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVJO0VBVkY7SUFXSSxlQUFBO0lBQ0EsY0FBQTtFQUNKO0FBQ0YiLCJmaWxlIjoibWFudWZhY3R1cmluZy1vcmRlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hbGwtY2hlY2tlZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnBpLXRpbWVzIHtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItZGFuZ2VyKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5waS1jaGVjay1jaXJjbGUge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1zdWNjZXNzKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5tYW51ZmFjdHVyaW5nLW9yZGVyLXBhZ2Uge1xyXG4gIEBtZWRpYSBwcmludCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJi1wcmludCB7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
ManufacturingOrderPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_30__.UntilDestroy)()
], ManufacturingOrderPageComponent);



/***/ }),

/***/ 25081:
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-order-page/manufacturing-order-products-info-print/manufacturing-order-products-info-print.component.ts ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingOrderProductsInfoPrintComponent": () => (/* binding */ ManufacturingOrderProductsInfoPrintComponent),
/* harmony export */   "PrintGroupedOrderProduct": () => (/* binding */ PrintGroupedOrderProduct)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function ManufacturingOrderProductsInfoPrintComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Order Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.root_production_list_products[0] == null ? null : ctx_r0.order.root_production_list_products[0].nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.root_production_list_products[0] == null ? null : ctx_r0.order.root_production_list_products[0].nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 4, ctx_r0.order.created, "dd.MM.y"));
} }
function ManufacturingOrderProductsInfoPrintComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 29);
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "In QC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Not passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(Partly passed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_span_3_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_span_4_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", product_r4.orderProduct.passed_quantity, "/", product_r4.orderProduct.initial_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.orderProduct.quality_control === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.orderProduct.quality_control === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.orderProduct.quality_control === "2");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_h5_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18.material_nomenclature.code, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18.order_product_nomenclature.code, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18.list_product.nomenclature.code, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18.material_nomenclature.name, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18.order_product_nomenclature.name, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18.list_product.nomenclature.name, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_10_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_11_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_12_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 32)(14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_16_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_17_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_p_18_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 22)(20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22)(25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Req Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const material_r18 = ctx.$implicit;
    const idx_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r18.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r18.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r18.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r18.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r18.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", material_r18.list_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](material_r18 == null ? null : material_r18.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", material_r18 == null ? null : material_r18.totalInitialQuantity, " ");
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_div_1_Template, 28, 9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", product_r4.materials);
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ordered Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21)(10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 21)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 22)(20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 23)(25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 24)(29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21)(32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_i_34_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_35_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22)(37, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "QC passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_39_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_40_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_p_41_Template, 5, 5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_h5_42_Template, 2, 0, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_div_43_Template, 2, 1, "div", 28);
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const idx_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](idx_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.orderProduct.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.orderProduct.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.orderProduct.current_technology == null ? null : product_r4.orderProduct.current_technology.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r4.orderProduct.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.orderProduct.isReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !product_r4.orderProduct.isReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !product_r4.orderProduct.quality_control && !product_r4.orderProduct.is_technology_ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.orderProduct.is_technology_ready && !product_r4.orderProduct.quality_control);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.orderProduct.quality_control);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.materials.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.materials.length > 0);
} }
function ManufacturingOrderProductsInfoPrintComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManufacturingOrderProductsInfoPrintComponent_div_6_ng_template_1_Template, 44, 12, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.preparedForPrintInfo);
} }
class PrintGroupedOrderProduct {
}
class ManufacturingOrderProductsInfoPrintComponent {
    constructor(auth) {
        this.auth = auth;
        this.products = [];
        this.materials = [];
        this.preparedForPrintInfo = [];
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.products.sort((a, b) => a.id - b.id).forEach(product => {
            const materials = this.materials.filter(el => product.ids.findIndex(elId => elId === el.for_order_product.id) >= 0);
            this.preparedForPrintInfo.push({
                orderProduct: product,
                materials: materials
            });
        });
    }
}
ManufacturingOrderProductsInfoPrintComponent.ɵfac = function ManufacturingOrderProductsInfoPrintComponent_Factory(t) { return new (t || ManufacturingOrderProductsInfoPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ManufacturingOrderProductsInfoPrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManufacturingOrderProductsInfoPrintComponent, selectors: [["pek-manufacturing-order-products-info-print"]], inputs: { order: "order", orderId: "orderId", products: "products", materials: "materials" }, decls: 36, vars: 9, consts: [[1, "print-order", "print-order_show"], [1, "print-content"], ["class", "print-content__header", 4, "ngIf"], ["class", "table-empty", 4, "ngIf"], ["class", "print-content__table print-content__table_items", 4, "ngIf"], [1, "pagebreak"], [1, "user-info"], [1, "left"], [1, "right"], [1, "print-content__header"], [1, "print-content__header-col", "print-content__header-col_code"], [1, "print-content__header-col", "print-content__header-col_name"], [1, "print-content__header-col", "print-content__header-col_id"], [1, "print-content__header-col", "print-content__header-col_date"], [1, "table-empty"], [1, "print-content__table", "print-content__table_items"], ["ngFor", "", 3, "ngForOf"], [1, "mt-4"], [1, "print-content__table-row"], [1, "print-content__table-inner"], [1, "print-content__table-col", 2, "width", "5%"], [1, "print-content__table-col", 2, "width", "30%"], [1, "print-content__table-col", 2, "width", "20%"], [1, "print-content__table-col", 2, "width", "15%"], [1, "print-content__table-col", 2, "width", "35%"], ["class", "fas fa-check text-success", 4, "ngIf"], [4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "print-content__table print-content__table_materials", 4, "ngIf"], [1, "fas", "fa-check", "text-success"], [1, "print-content__table", "print-content__table_materials"], ["class", "print-content__table-row", 4, "ngFor", "ngForOf"], [1, "print-content__table-col", 2, "width", "25%"]], template: function ManufacturingOrderProductsInfoPrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Execution Ordered Products Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManufacturingOrderProductsInfoPrintComponent_div_4_Template, 22, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManufacturingOrderProductsInfoPrintComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ManufacturingOrderProductsInfoPrintComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div")(11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div")(22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Signed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8)(25, "div")(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Retrieved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div")(34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Signed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.preparedForPrintInfo.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.preparedForPrintInfo.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.auth.user.first_name, " ", ctx.auth.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 6, ctx.currentDate, "dd.MM.y"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["@media print {\n  .print-order_hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.print-order_show[_ngcontent-%COMP%] {\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n}\n@media print {\n  .print-order_show[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.print-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.2;\n  margin-bottom: 2rem;\n}\n.print-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.3125rem;\n  margin: 0 0 1.25rem;\n  line-height: 1.2;\n}\n.print-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.0625rem;\n  margin: 0 0 0.625rem;\n  line-height: 1.2;\n}\n.print-content__header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3rem;\n}\n.print-content__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n}\n.print-content__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.print-content__header-col[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.print-content__header-col_code[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.print-content__header-col_name[_ngcontent-%COMP%] {\n  width: 32%;\n}\n.print-content__header-col_id[_ngcontent-%COMP%] {\n  width: 13%;\n}\n.print-content__header-col_date[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.print-content__table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  line-height: 1.4;\n  margin: 0;\n  word-wrap: break-word;\n}\n.print-content__table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.print-content__table_items[_ngcontent-%COMP%], .print-content__table_materials[_ngcontent-%COMP%], .print-content__table_machines[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.print-content__table-row[_ngcontent-%COMP%] {\n  page-break-inside: avoid;\n  padding: 0.5rem;\n  display: block;\n  border: 1px solid #696767;\n}\n.print-content__table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #696767;\n}\n.print-content__table-col[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.print-content__table-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 500;\n  margin-bottom: 0.375rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 3.5rem;\n}\n.user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 500;\n  margin-bottom: 0.375rem;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  line-height: 1.25rem;\n}\n.user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.user-info[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n@media print {\n  .print-content__table-row[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .user-info[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n.table-empty[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.125rem;\n  font-style: italic;\n  margin-bottom: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctb3JkZXItcHJvZHVjdHMtaW5mby1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQURGO0lBRUksYUFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjtBQUdJO0VBTkY7SUFPSSxjQUFBO0VBQUo7QUFDRjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNFLG9CQUFBO0FBTE47QUFRSTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQU5OO0FBVUU7RUFDRSxxQkFBQTtBQVJKO0FBU0k7RUFDRSxVQUFBO0FBUE47QUFVSTtFQUNFLFVBQUE7QUFSTjtBQVdJO0VBQ0UsVUFBQTtBQVROO0FBWUk7RUFDRSxVQUFBO0FBVk47QUFnQkk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBZE47QUFpQkk7RUFDRSxtQkFBQTtBQWZOO0FBa0JJO0VBR0UsbUJBQUE7QUFsQk47QUFzQkU7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFwQko7QUFzQkk7RUFDRSxnQ0FBQTtBQXBCTjtBQXdCRTtFQUNFLGVBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUF2Qko7QUEyQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF4QkY7QUEyQkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBeEJGO0FBMEJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBeEJKO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBekJKO0FBNEJFO0VBQ0UsVUFBQTtBQTFCSjtBQThCSTtFQUNFLHFCQUFBO0FBNUJOO0FBaUNBO0VBQ0U7SUFHRSx3QkFBQTtFQWhDRjtFQW1DQTtJQUNFLHdCQUFBO0VBakNGO0FBQ0Y7QUFxQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQW5DRiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLW9yZGVyLXByb2R1Y3RzLWluZm8tcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQtb3JkZXIge1xyXG4gICZfaGlkZSB7XHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9zaG93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpbnQtY29udGVudCB7XHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjMxMjVyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxLjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxuICAgIG1hcmdpbjogMCAwIDAuNjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19oZWFkZXItY29sIHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICZfY29kZSB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9uYW1lIHtcclxuICAgICAgd2lkdGg6IDMyJTtcclxuICAgIH1cclxuXHJcbiAgICAmX2lkIHtcclxuICAgICAgd2lkdGg6IDEzJTtcclxuICAgIH1cclxuXHJcbiAgICAmX2RhdGUge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGFibGUge1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJl9pdGVtcyxcclxuICAgICZfbWF0ZXJpYWxzLFxyXG4gICAgJl9tYWNoaW5lcyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190YWJsZS1yb3cge1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjk2NzY3O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjk2NzY3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGFibGUtY29sIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX3RhYmxlLWlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07XHJcbn1cclxuXHJcbi51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5wcmludC1jb250ZW50X190YWJsZS1yb3cge1xyXG4gICAgLy9wYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xyXG4gICAgLy9wYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICB9XHJcblxyXG4gIC51c2VyLWluZm8ge1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgLy9wYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1lbXB0eSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 56915:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-order-statuses/manufacturing-order-statuses.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingOrderStatusesComponent": () => (/* binding */ ManufacturingOrderStatusesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_components_order_statuses_order_statuses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/order-statuses/order-statuses.component */ 3817);



class ManufacturingOrderStatusesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManufacturingOrderStatusesComponent.ɵfac = function ManufacturingOrderStatusesComponent_Factory(t) { return new (t || ManufacturingOrderStatusesComponent)(); };
ManufacturingOrderStatusesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManufacturingOrderStatusesComponent, selectors: [["pek-manufacturing-order-statuses"]], decls: 17, vars: 5, consts: [[1, "procurement-order-statuses"], [1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], [1, "page__content"], [1, "mb-4"], [1, "page__card", "mb-4"], [3, "statusType"], [1, "page__card"], [3, "statusType", "isAutoStatus"]], template: function ManufacturingOrderStatusesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "pek-module-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Order Statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Manual Statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "pek-order-statuses", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Automatic Statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "pek-order-statuses", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("statusType", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("statusType", 3)("isAutoStatus", true);
    } }, dependencies: [_shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__.ModuleIconComponent, _shared_components_order_statuses_order_statuses_component__WEBPACK_IMPORTED_MODULE_1__.OrderStatusesComponent], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctb3JkZXItc3RhdHVzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoibWFudWZhY3R1cmluZy1vcmRlci1zdGF0dXNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 87591:
/*!*************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-orders/manufacturing-orders.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingOrdersComponent": () => (/* binding */ ManufacturingOrdersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 35330);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_pickers_multi_statuses_picker_multi_statuses_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pickers/multi-statuses-picker/multi-statuses-picker.component */ 73426);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_pickers_root_list_picker_root_list_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pickers/root-list-picker/root-list-picker.component */ 51846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);




















const _c0 = ["paginator"];

function ManufacturingOrdersComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Choose the Order to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ManufacturingOrdersComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "List ID's");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Root Lists");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function ManufacturingOrdersComponent_ng_template_43_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ManufacturingOrdersComponent_ng_template_43_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingOrdersComponent_ng_template_43_span_4_span_2_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const id_r16 = ctx.$implicit;
    const idx_r17 = ctx.index;
    const order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", id_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", idx_r17 < order_r8.list_ids.length - 1);
  }
}

function ManufacturingOrdersComponent_ng_template_43_b_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ManufacturingOrdersComponent_ng_template_43_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", order_r8.root_production_list_products[0].nomenclature.code, " ~", order_r8.root_production_list_products[0].nomenclature.name, " ");
  }
}

function ManufacturingOrdersComponent_ng_template_43_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", order_r8.root_production_list_products == null ? null : order_r8.root_production_list_products.length, ") ");
  }
}

function ManufacturingOrdersComponent_ng_template_43_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const statusChild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statusChild_r22.status.value, " ");
  }
}

function ManufacturingOrdersComponent_ng_template_43_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingOrdersComponent_ng_template_43_div_19_div_1_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const statusChild_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", statusChild_r22.is_active);
  }
}

function ManufacturingOrdersComponent_ng_template_43_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function ManufacturingOrdersComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 36)(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingOrdersComponent_ng_template_43_span_4_Template, 3, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 32)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ManufacturingOrdersComponent_ng_template_43_b_11_Template, 2, 0, "b", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 34)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ManufacturingOrdersComponent_ng_template_43_ng_container_16_Template, 2, 2, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManufacturingOrdersComponent_ng_template_43_ng_container_17_Template, 2, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ManufacturingOrdersComponent_ng_template_43_div_19_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ManufacturingOrdersComponent_ng_template_43_tr_20_Template, 3, 0, "tr", 42);
  }

  if (rf & 2) {
    const order_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("time-overdue", order_r8.isReceiptDateOverdue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", order_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r3.currentPage - 1) * 10 + i_r9 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", order_r8.list_ids);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 13, order_r8.created, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r8.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r8.contains_rma_invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r8.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r8.root_production_list_products.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (order_r8.root_production_list_products == null ? null : order_r8.root_production_list_products.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", order_r8.statuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
  }
}

function ManufacturingOrdersComponent_ng_template_44_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 47);
  }
}

function ManufacturingOrdersComponent_ng_template_44_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ManufacturingOrdersComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingOrdersComponent_ng_template_44_i_2_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingOrdersComponent_ng_template_44_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
  }
}

function ManufacturingOrdersComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ManufacturingOrdersComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49)(1, "p-paginator", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onPageChange", function ManufacturingOrdersComponent_div_46_Template_p_paginator_onPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingOrdersComponent_div_46_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.onShowAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r6.ordersCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r6.ordersCount);
  }
}

function ManufacturingOrdersComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "p-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingOrdersComponent_div_47_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.onShowAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

let ManufacturingOrdersComponent = class ManufacturingOrdersComponent {
  constructor(fb, orderService, adapterService, modalService, router) {
    this.fb = fb;
    this.orderService = orderService;
    this.adapterService = adapterService;
    this.modalService = modalService;
    this.router = router;
    this.searchForm = this.fb.group({
      order_root_list_id: [null],
      active_status__in: [null],
      created_after: [null],
      created_before: [null]
    });
    this.menuItems = [{
      label: 'Selected Order',
      items: [{
        label: 'Own Production Item',
        icon: 'pi pi-pencil',
        command: () => this.onGoToOderPage()
      }, {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveOrder()
      }]
    }];
    this.isStartFirstPage = false;
    this.isShowAll = false;
    this.finalStatusSelected = false;
    this.currentPage = 1;
    this.queryKey = this.adapterService.generateQueryKey(this.searchForm);
    this.query = [];
    this.isLoading = true;
    this.ordersCount = 0;
    this.selectedOrder = null;
    this.isCreating = false;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.orders$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.iif)(() => !this.isShowAll, this.orderService.getForPagination(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(response => this.ordersCount = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => response.results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(orders => this.transformOrders(orders))), this.orderService.get(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(orders => this.ordersCount = orders.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(orders => this.transformOrders(orders))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.paginateToFistPage()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this));
  }

  ngOnInit() {}

  transformOrders(orders) {
    orders.forEach(order => {
      order.order_products.forEach(prod => {
        if (prod.is_task_date_overdue) {
          order.isReceiptDateOverdue = true;
        }
      });

      if (order.statuses.length === 0) {
        order.statuses = [{
          status: {
            value: 'Empty'
          }
        }];
      }

      order.list_ids = [...new Set(order.list_ids)];
    });
    return orders;
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedOrder = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [{
      name: 'accounting_type',
      value: 3
    }, {
      name: 'exclude_with_active_final_status',
      value: !this.finalStatusSelected
    }, {
      name: 'page',
      value: this.currentPage
    }];

    if (!this.isShowAll) {
      this.query.push({
        name: 'paginated',
        value: true
      });
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {
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

  paginate(event) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
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

  onSelectStatuses(ids) {
    this.searchForm.get('active_status__in').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onSelectRootList(id) {
    this.searchForm.get('order_root_list_id').patchValue(id);
    this.search$.next();
  }

  onCreateOrder() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isCreating = true;
        this.orderService.create({
          accounting_type: 3,
          can_select_supplier: false
        }).subscribe(order => {
          this.isCreating = false;
          this.router.navigate(['/manufacturing/orders/order/', order.id]);
        });
      }
    });
  }

  onRemoveOrder() {
    this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(confirm => confirm), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.isCreating = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.orderService.delete(this.selectedOrder.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.isCreating = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.search$.next())).subscribe();
  }

  onGoToOderPage() {
    window.open('/manufacturing/orders/order/' + this.selectedOrder?.id, '_blank');
  }

};

ManufacturingOrdersComponent.ɵfac = function ManufacturingOrdersComponent_Factory(t) {
  return new (t || ManufacturingOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router));
};

ManufacturingOrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ManufacturingOrdersComponent,
  selectors: [["pek-manufacturing-orders"]],
  viewQuery: function ManufacturingOrdersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 48,
  vars: 23,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Order to Own Production", 3, "loading", "click"], [1, "page__content"], [1, "page__card"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "created_after", "dataType", "date", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], ["dataType", "date", "formControlName", "created_before", "dateFormat", "dd/mm/yy", 3, "showButtonBar", "readonlyInput", "ngModelChange"], [3, "accountingType", "selectRootListId"], [3, "accountingType", "selectStatuses", "isFinalStatusSelected"], [1, "col-3", "d-flex", "align-items-center"], ["class", "subtitle", 4, "ngIf"], [1, "col-3", "d-flex"], [1, "ml-auto", "menubar", 3, "model"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 24.5rem)", 3, "rows", "scrollable", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [1, "index-header", "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [2, "width", "20%"], [2, "width", "25%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "width", "15%"], ["class", "text-center", 4, "ngFor", "ngForOf"], ["class", "table-pagination-preloader", 4, "ngIf"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-3x"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]],
  template: function ManufacturingOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Execution Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingOrdersComponent_Template_button_click_7_listener() {
        return ctx.onCreateOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p-calendar", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingOrdersComponent_Template_p_calendar_ngModelChange_16_listener() {
        return ctx.search$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p-calendar", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingOrdersComponent_Template_p_calendar_ngModelChange_21_listener() {
        return ctx.search$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Root List");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "pek-root-list-picker", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectRootListId", function ManufacturingOrdersComponent_Template_pek_root_list_picker_selectRootListId_26_listener($event) {
        return ctx.onSelectRootList($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "pek-multi-statuses-picker", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectStatuses", function ManufacturingOrdersComponent_Template_pek_multi_statuses_picker_selectStatuses_31_listener($event) {
        return ctx.onSelectStatuses($event);
      })("isFinalStatusSelected", function ManufacturingOrdersComponent_Template_pek_multi_statuses_picker_isFinalStatusSelected_31_listener($event) {
        return ctx.finalStatusSelected = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ManufacturingOrdersComponent_p_33_Template, 2, 0, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "div", 10)(35, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "p-menubar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 20)(39, "p-table", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ManufacturingOrdersComponent_Template_p_table_selectionChange_39_listener($event) {
        return ctx.selectedOrder = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ManufacturingOrdersComponent_ng_template_42_Template, 15, 0, "ng-template", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ManufacturingOrdersComponent_ng_template_43_Template, 21, 16, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ManufacturingOrdersComponent_ng_template_44_Template, 4, 3, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ManufacturingOrdersComponent_div_45_Template, 2, 0, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ManufacturingOrdersComponent_div_46_Template, 5, 4, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, ManufacturingOrdersComponent_div_47_Template, 3, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loading", ctx.isCreating);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtonBar", true)("readonlyInput", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("accountingType", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("accountingType", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.selectedOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx.selectedOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("scrollable", true)("selection", ctx.selectedOrder)("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 21, ctx.orders$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    }
  },
  dependencies: [_shared_pickers_multi_statuses_picker_multi_statuses_picker_component__WEBPACK_IMPORTED_MODULE_3__.MultiStatusesPickerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, primeng_menubar__WEBPACK_IMPORTED_MODULE_18__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_19__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_20__.Paginator, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.Calendar, _shared_pickers_root_list_picker_root_list_picker_component__WEBPACK_IMPORTED_MODULE_5__.RootListPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe],
  styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n\n.time-overdue[_ngcontent-%COMP%] {\n  background: #f5dfe1 !important;\n}\n\n.menubar[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6Im1hbnVmYWN0dXJpbmctb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG59XHJcblxyXG4udGltZS1vdmVyZHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVkZmUxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51YmFyIHtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcbiJdfQ== */"]
});
ManufacturingOrdersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)()], ManufacturingOrdersComponent);


/***/ }),

/***/ 70961:
/*!*******************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-plan-list/manufacturing-plan-list.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingPlanListComponent": () => (/* binding */ ManufacturingPlanListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es */ 38163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/task.service */ 10764);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 99397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);





















const _c0 = ["paginator"];
const _c1 = ["dt"];
function ManufacturingPlanListComponent_ng_container_36_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Serial Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "List ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_36_ng_template_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.onSplitPlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_36_ng_template_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.goToSelectedPlans()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_36_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.onDeletePlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.selectedTasks.length !== 1 || (ctx_r4.selectedTasks[0] == null ? null : ctx_r4.selectedTasks[0].required_quantity) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.selectedTasks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loading", ctx_r4.isDeleting)("disabled", ctx_r4.selectedTasks.length !== 1);
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_6_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 41)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingPlanListComponent_ng_container_36_ng_template_6_ng_container_4_span_4_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const task_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", ctx_r15.getTippyContent(task_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", 1, " . ", task_r13.serials[0].type_with_number ? task_r13.serials[0].type_with_number : task_r13.serials.serial.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r13.serials.length > 1);
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_6_b_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_6_b_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_6_b_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(T) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["plan", a1]; };
function ManufacturingPlanListComponent_ng_container_36_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 39)(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingPlanListComponent_ng_container_36_ng_template_6_ng_container_4_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 33)(8, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ManufacturingPlanListComponent_ng_container_36_ng_template_6_b_10_Template, 2, 0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ManufacturingPlanListComponent_ng_container_36_ng_template_6_b_12_Template, 2, 0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ManufacturingPlanListComponent_ng_container_36_ng_template_6_b_13_Template, 2, 0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r13 = ctx.$implicit;
    const i_r14 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", task_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r13.serials.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r13.production_list_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c2, task_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r13.list_product.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r13.contains_refunded_positions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r13.list_product.nomenclature.bulk_or_serial === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r13.list_product.nomenclature.has_technical_equipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r13.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 13, task_r13.created, "dd/MM/y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r13.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r13.required_quantity, " ");
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 44);
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingPlanListComponent_ng_container_36_ng_template_7_i_2_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingPlanListComponent_ng_container_36_ng_template_7_span_3_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function ManufacturingPlanListComponent_ng_container_36_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_36_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r2.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_36_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46)(1, "p-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_36_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r2.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ManufacturingPlanListComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21)(2, "p-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ManufacturingPlanListComponent_ng_container_36_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.selectedTasks = $event); })("firstChange", function ManufacturingPlanListComponent_ng_container_36_Template_p_table_firstChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.first = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingPlanListComponent_ng_container_36_ng_template_4_Template, 17, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ManufacturingPlanListComponent_ng_container_36_ng_template_5_Template, 4, 4, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ManufacturingPlanListComponent_ng_container_36_ng_template_6_Template, 22, 18, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ManufacturingPlanListComponent_ng_container_36_ng_template_7_Template, 4, 3, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ManufacturingPlanListComponent_ng_container_36_ng_template_8_Template, 2, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManufacturingPlanListComponent_ng_container_36_div_9_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("paginator", ctx_r0.tasks.length > 0)("scrollable", true)("value", ctx_r0.tasks)("selection", ctx_r0.selectedTasks)("first", ctx_r0.first);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r2.paginator && !ctx_r0.isLoading && ctx_r0.tasks.length > 0);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Serial Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "List ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.onExpandAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.onCollapseAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.onSplitNodePlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.goToSelectedNodesPlans()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.onDeleteNodePlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r31.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r31.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r31.selectedTasksNodes.length !== 1 || (ctx_r31.selectedTasksNodes[0] == null ? null : ctx_r31.selectedTasksNodes[0].data == null ? null : ctx_r31.selectedTasksNodes[0].data.task == null ? null : ctx_r31.selectedTasksNodes[0].data.task.required_quantity) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r31.selectedTasksNodes.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loading", ctx_r31.isDeleting)("disabled", ctx_r31.selectedTasksNodes.length !== 1);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(L ", rowData_r41.categories, ")");
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_4_i_2_Template, 2, 1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("bold", !rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r41.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rowData_r41.task);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_5_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_5_b_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(T)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_5_b_1_Template, 2, 0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_5_b_2_Template, 2, 0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task && rowData_r41.task.serial_numbers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task.list_product.nomenclature.has_technical_equipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", rowData_r41.task.list_product.nomenclature.name, " (L ", rowData_r41.task.required_quantity, ") ");
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_7_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_7_b_3_Template, 2, 0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c2, rowData_r41.task.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r41.task.list_product.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task.contains_refunded_positions);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_ng_container_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 41)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_ng_container_9_span_4_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", ctx_r46.getTippyContent(rowData_r41.task));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", 1, " . ", rowData_r41.task.serials[0].type_with_number ? rowData_r41.task.serials[0].type_with_number : rowData_r41.task.serials.serial.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task.serials.length > 1);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r41.task.production_list_id, " ");
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, rowData_r41.task.created, "dd/MM/y"), " ");
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r41.task.status, " ");
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r41.task.required_quantity, " ");
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 56)(1, "td", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_4_Template, 3, 4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_5_Template, 4, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_7_Template, 4, 5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_ng_container_9_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_11_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_13_Template, 3, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_15_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_span_17_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rowNode_r40 = ctx_r65.$implicit;
    const rowData_r41 = ctx_r65.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", rowNode_r40)("ttSelectableRow", rowNode_r40)("ttSelectableRowDisabled", !rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", rowNode_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (rowData_r41.task == null ? null : rowData_r41.task.serials == null ? null : rowData_r41.task.serials.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r41.task);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ManufacturingPlanListComponent_ng_container_37_ng_template_4_tr_0_Template, 18, 12, "tr", 55);
} if (rf & 2) {
    const rowData_r41 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rowData_r41.hideFromTable);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 44);
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingPlanListComponent_ng_container_37_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingPlanListComponent_ng_container_37_ng_template_5_i_2_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingPlanListComponent_ng_container_37_ng_template_5_span_3_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r33.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r33.isLoading);
} }
function ManufacturingPlanListComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-treeTable", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ManufacturingPlanListComponent_ng_container_37_Template_p_treeTable_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r68.selectedTasksNodes = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingPlanListComponent_ng_container_37_ng_template_2_Template, 15, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingPlanListComponent_ng_container_37_ng_template_3_Template, 6, 6, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingPlanListComponent_ng_container_37_ng_template_4_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ManufacturingPlanListComponent_ng_container_37_ng_template_5_Template, 4, 3, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.ownProductionCategorizedList)("scrollable", true)("selection", ctx_r1.selectedTasksNodes);
} }
let ManufacturingPlanListComponent = class ManufacturingPlanListComponent {
    constructor(fb, adapterService, modalService, taskService, categoryService, router, route) {
        this.fb = fb;
        this.adapterService = adapterService;
        this.modalService = modalService;
        this.taskService = taskService;
        this.categoryService = categoryService;
        this.router = router;
        this.route = route;
        this.searchForm = this.fb.group({
            list_product__nomenclature__name: [null],
            list_product__nomenclature__code: [null],
            statuses: [null],
            type_with_number: [''],
        });
        this.first = 0;
        this.statuses = [
            { id: 0, name: 'Not processed', value: '0' },
            { id: 1, name: 'Deficit', value: '1' },
            { id: 2, name: 'Rework', value: '2' },
            { id: 3, name: 'Ordered', value: '3' },
            { id: 4, name: 'On stock', value: '4' },
        ];
        this.mode = 'hierarchy';
        this.isDeleting = false;
        this.tasks = [];
        this.categories = [];
        this.selectedTasksNodes = [];
        this.expanseMap = {};
        this.currentPage = 1;
        this.queryKey = this.adapterService.generateQueryKey(this.searchForm);
        this.query = [];
        this.isLoading = true;
        this.selectedTasks = [];
        this.isStartFirstPage = false;
        this.isShowAll = false;
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.code$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.serial$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.tasks$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.taskService.get(this.query)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(response => this.tasksCount = response.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => this.filterTasks(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.paginateToFistPage()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.getCategories()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.fillCategorizedTree()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this));
        this.tasksCount = 0;
    }
    ngOnInit() {
        this.tasks$.subscribe();
        this.name$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.search$.next()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe();
        this.code$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.search$.next()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe();
        this.serial$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.search$.next()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe();
        this.getStructureCategories();
    }
    getStructureCategories() {
        if (this.structureCategories) {
            this.mapExpansion();
        }
        this.categoryService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)((categories) => this.createStructureCategoriesTree(categories))).subscribe();
    }
    createStructureCategoriesTree(data) {
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
            // Handle the root element
            if (el.data.parent === null) {
                root.push(el);
                return;
            }
            // Use our mapping to locate the parent element in our data array
            const parentEl = dd[idMapping[el.data.parent]];
            // Add our current el to its parent's `children` array
            parentEl.children = [...(parentEl.children || []), el];
            if (parentEl.children.length === 0) {
                delete parentEl.children;
            }
        });
        this.structureCategories = root;
        // this.ownProductionCategorizedList = cloneDeep(this.categories);
    }
    mapExpansion() {
        this.structureCategories.forEach(element => {
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
    onSelectMode(mode) {
        this.mode = mode;
    }
    filterTasks(tasks) {
        let newTasks = [];
        tasks.forEach(task => {
            if (!newTasks.find(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
                && t.technology === task.technology)) {
                const count = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
                    && t.technology === task.technology).length;
                task.required_quantity = task.required_quantity * count;
                task.serials = [];
                const filteredTasks = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id
                    === task.list_product.nomenclature.id && t.technology === task.technology);
                filteredTasks.forEach(t => {
                    if (task.serial_numbers.length > 0) {
                        t.serial_numbers.forEach(serial => {
                            task.serials.push(serial);
                        });
                    }
                    else if (task.serial_products.length > 0) {
                        t.serial_products.forEach(serial => {
                            task.serials.push(serial.serial_number);
                        });
                    }
                });
                task.ids = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
                    && t.technology === task.technology).map(t => t.id);
                newTasks.push(task);
            }
        });
        newTasks.sort((a, b) => new Date(a.created) > new Date(b.created) ? -1 : 1);
        this.tasks = newTasks;
        this.tasks = this.tasks.map(t => t);
        return newTasks;
    }
    paginateToFistPage() {
        if (this.isStartFirstPage) {
            this.first = 0;
            this.paginator?.changePage(0);
        }
        this.isStartFirstPage = false;
    }
    prepareForSearch() {
        this.isLoading = true;
        this.selectedTasks = [];
        this.selectedTasksNodes = [];
        this.ownProductionCategorizedList = [];
        this.tasks = [];
        const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);
        if (newQueryKey !== this.queryKey) {
            this.currentPage = 1;
            this.queryKey = newQueryKey;
            this.isStartFirstPage = true;
        }
        this.query = [
            { name: 'is_root', value: true },
            // {name: 'page', value: this.currentPage},
            // {name: 'statuses', value: [0, 1, 2, 3]}
        ];
        if (!this.searchForm.get('statuses').value) {
            this.query.push({ name: 'statuses', value: [0, 1, 2, 3] });
        }
        // if (!this.isShowAll) {
        //   this.query.push({name: 'paginated', value: true},);
        // }
        for (const key in this.searchForm.controls) {
            if (this.searchForm.controls[key].value !== null) {
                if (this.searchForm.controls[key].value instanceof Date) {
                    this.query.push({
                        name: key,
                        value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
                    });
                }
                else {
                    this.query.push({
                        name: key,
                        value: this.searchForm.controls[key].value
                    });
                }
            }
        }
    }
    getStatus(status) {
        switch (status) {
            case '0':
                return 'Not processed';
            case '1':
                return 'Deficit';
            case '2':
                return 'Rework';
            case '3':
                return 'Ordered';
            case '4':
                return 'On stock';
        }
    }
    paginate($event) {
    }
    onShowAll(b) {
    }
    getTippyContent(task) {
        let childContent = '';
        task.serials.forEach((serial, idx) => {
            childContent += `
          <li>${idx + 1}. ${serial.type_with_number ? serial.type_with_number : serial.id}</li>
      `;
        });
        return `<ul class="plan-row">${childContent}</ul>`;
    }
    getCategories() {
        this.categories = this.tasks.filter(t => t.root_nomenclature?.category).map(t => t.root_nomenclature.category);
        this.categories = this.adapterService.removeDuplicates(this.categories, x => x.id);
        this.categories.forEach(category => {
            category.categories = this.adapterService.removeDuplicates(this.tasks
                .filter(t => t.root_nomenclature?.category?.id === category.id)
                .map(t => t.root_nomenclature), x => x.id);
            category.categories.forEach(cat => {
                cat.tasks = this.adapterService.removeDuplicates(this.tasks
                    .filter(t => t.root_nomenclature?.id === cat.id)
                    .map(t => t), x => x.list_product.nomenclature.id);
                cat.tasks = cat.tasks.map(t => {
                    return {
                        ...t,
                    };
                });
                cat.tasks.map(t => t).forEach(task => {
                    task.required_quantity = this.tasks
                        .filter(t => t.list_product.nomenclature.id === task.list_product.nomenclature.id)
                        .reduce((sum, t) => sum += t.required_quantity, 0);
                    task.tasks = this.tasks.filter(t => t.list_product.nomenclature.id === task.list_product.nomenclature.id);
                });
            });
        });
    }
    fillCategorizedTree() {
        const categoriesTemp = [];
        this.tasks.forEach(task => {
            if (task.root_nomenclature && task.root_nomenclature.root_category) {
                const rootCatId = task.root_nomenclature.root_category.id;
                const rootCatName = task.root_nomenclature.root_category.name;
                const rootLevel = 1;
                const catId = task.root_nomenclature.id;
                const catName = task.root_nomenclature.name;
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
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(this.structureCategories);
        temp.forEach(node => {
            this.appendCategories(node, categoriesTemp);
        });
        temp.forEach(node => {
            this.fillWithTheData(node, this.tasks);
        });
        temp.forEach(node => {
            this.removeUpdateEmptyCategories(node);
        });
        this.ownProductionCategorizedList = [...temp];
        if (this.ownProductionCategorizedList.every(f => f.children.length === 0)) {
            this.ownProductionCategorizedList = [];
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
            orders.forEach(task => {
                if (task.root_nomenclature) {
                    const catId = task.root_nomenclature.id;
                    if (node.data.id === catId) {
                        const existingCatChildIndex = node.children.findIndex(cat => cat.data.id === task.list_product.nomenclature.id);
                        if (existingCatChildIndex < 0) {
                            node.children.push({
                                data: {
                                    id: task.list_product.nomenclature.id,
                                    name: task.list_product.nomenclature.name,
                                    level: 3,
                                    categories: 0,
                                },
                                expanded: false,
                                children: [{
                                        data: { task, level: 4 },
                                        expanded: false,
                                        children: []
                                    }]
                            });
                        }
                        else {
                            node.children[existingCatChildIndex].children.push({
                                data: { task, level: 4 },
                                expanded: false,
                                children: []
                            });
                        }
                    }
                }
            });
        }
        if (node.children) {
            node.children.forEach(childNode => {
                this.fillWithTheData(childNode, orders);
            });
        }
    }
    removeUpdateEmptyCategories(node) {
        if (!node.data.isCategory && !node.data.task) {
            let hideFromTable = true;
            const hasContent = node.children.filter(child => child.data.task).length > 0;
            if (hasContent) {
                hideFromTable = false;
            }
            node.children.forEach(childNode => {
                if (hideFromTable) {
                    const hasContentInner = childNode.children.filter(child => child.data.task).length > 0;
                    if (hasContentInner) {
                        hideFromTable = false;
                    }
                }
                childNode.children.forEach(childNode2 => {
                    if (hideFromTable) {
                        const hasContentInner = childNode2.children.filter(child => child.data.task).length > 0;
                        if (hasContentInner) {
                            hideFromTable = false;
                        }
                    }
                    childNode2.children.forEach(childNode3 => {
                        if (hideFromTable) {
                            const hasContentInner = childNode3.children.filter(child => child.data.task).length > 0;
                            if (hasContentInner) {
                                hideFromTable = false;
                            }
                        }
                        childNode3.children.forEach(childNode4 => {
                            if (hideFromTable) {
                                const hasContentInner = childNode4.children.filter(child => child.data.task).length > 0;
                                if (hasContentInner) {
                                    hideFromTable = false;
                                }
                            }
                        });
                    });
                });
            });
            node.data.hideFromTable = hideFromTable;
        }
        node.data.categories = node.children.length;
        if (node.children) {
            node.children.forEach((childNode, indexChild) => {
                this.removeUpdateEmptyCategories(childNode);
            });
        }
    }
    onExpandAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(this.ownProductionCategorizedList);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, true);
        });
        this.ownProductionCategorizedList = temp;
    }
    onCollapseAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(this.ownProductionCategorizedList);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, false);
        });
        this.ownProductionCategorizedList = temp;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    goToSelectedPlans() {
        const ids = this.selectedTasks.map(t => t.id).join(',');
        const url = this.router.serializeUrl(this.router.createUrlTree(['plan', ids], { relativeTo: this.route }));
        window.open(url, '_blank');
    }
    goToSelectedNodesPlans() {
        const ids = this.selectedTasksNodes.map(t => t.data.task.id).join(',');
        this.router.navigate(['plan', ids], { relativeTo: this.route });
    }
    onSplitPlan() {
        this.taskService.splitTasksDialog(this.selectedTasks[0]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(response => !!response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.search$.next())).subscribe();
    }
    onSplitNodePlan() {
        this.taskService.splitTasksDialog(this.selectedTasksNodes[0].data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(response => !!response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.search$.next())).subscribe();
    }
    onDeletePlan() {
        this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(confirm => confirm)).subscribe(() => {
            this.isDeleting = true;
            this.taskService.deletePlans(this.selectedTasks[0].ids).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.finalize)(() => this.isDeleting = false)).subscribe(() => {
                const taskIndex = this.tasks.findIndex(t => t.id === this.selectedTasks[0].id);
                this.tasks.splice(taskIndex, 1);
                this.fillCategorizedTree();
                this.selectedTasks = [];
                this.selectedTasksNodes = [];
            });
        });
    }
    onDeleteNodePlan() {
        console.log(this.selectedTasksNodes);
        this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(confirm => confirm)).subscribe(() => {
            this.isDeleting = true;
            this.taskService.deletePlans(this.selectedTasksNodes[0].data.task.ids).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.finalize)(() => this.isDeleting = false)).subscribe(() => {
                const taskIndex = this.tasks.findIndex(t => t.id === this.selectedTasksNodes[0].data.task.id);
                this.tasks.splice(taskIndex, 1);
                this.fillCategorizedTree();
                this.selectedTasks = [];
                this.selectedTasksNodes = [];
            });
        });
    }
    goToAllPlans() {
        const url = this.router.serializeUrl(this.router.createUrlTree(['all'], { relativeTo: this.route }));
        window.open(url, '_blank');
    }
};
ManufacturingPlanListComponent.ɵfac = function ManufacturingPlanListComponent_Factory(t) { return new (t || ManufacturingPlanListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_0__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute)); };
ManufacturingPlanListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManufacturingPlanListComponent, selectors: [["pek-manufacturing-plan-list"]], viewQuery: function ManufacturingPlanListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
    } }, decls: 38, vars: 9, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-calendar", "routerLink", "/manufacturing/production-calendar", "label", "Production Calendar", 1, "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-chart-line", "label", "Workload", 1, "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-sliders-v", "label", "All Plans", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-table", "label", "Hierarchy", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-list", "label", "List", 3, "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "form", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "statuses", "optionValue", "value", "optionLabel", "name", "placeholder", "Choose Status", 3, "showClear", "options", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Enter a Name", "formControlName", "list_product__nomenclature__name", 3, "ngModelChange"], ["type", "text", "placeholder", "Enter a Code", "pInputText", "", "formControlName", "list_product__nomenclature__code", 3, "ngModelChange"], ["pInputText", "", "formControlName", "type_with_number", "type", "text", "id", "type_with_number", 1, "form-control", 3, "ngModelChange"], [4, "ngIf"], [1, "table-pagination-preloader"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 24.25rem)", 3, "rows", "paginator", "scrollable", "value", "selection", "first", "selectionChange", "firstChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "10%"], [2, "width", "15%"], [2, "width", "25%"], [1, "d-flex", "table-caption"], ["pButton", "", "type", "button", "icon", "pi pi-chart-pie", "label", "Add Split", 1, "ml-auto", "mr-2", "p-button-icon", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-chart-bar", "label", "Selected Plans", 1, "p-button-icon", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "label", "Delete Plan", 1, "p-button-icon", "p-button-danger", 3, "loading", "disabled", "click"], [3, "pSelectableRow"], ["rel", "noopener noreferrer", "routerLinkActive", "router-link-active", "target", "_blank", 3, "routerLink"], ["pekTippy", "", 1, "serials", 3, "content"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 24.5rem)", 3, "value", "scrollable", "selection", "selectionChange"], [2, "padding-left", "48px", "width", "30%"], [2, "width", "20%"], [1, "text-center", 2, "width", "7%"], [1, "text-center", 2, "width", "8%"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand All", 1, "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse All", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-chart-pie", "label", "Add Split", 1, "mr-2", "p-button-icon", 3, "disabled", "click"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled", 4, "ngIf"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"], [1, "word-break", 2, "width", "30%"], [1, "toggle-row"], [3, "rowNode"], [3, "bold", 4, "ngIf"], ["style", "font-style: normal", 4, "ngIf"], [2, "font-style", "normal"], ["rel", "noopener noreferrer", "target", "_blank", 1, "plan-link", 3, "routerLink"]], template: function ManufacturingPlanListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "button", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_Template_button_click_9_listener() { return ctx.goToAllPlans(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_Template_button_click_10_listener() { return ctx.onSelectMode("hierarchy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingPlanListComponent_Template_button_click_11_listener() { return ctx.onSelectMode("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "form", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingPlanListComponent_Template_p_dropdown_ngModelChange_20_listener() { return ctx.search$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingPlanListComponent_Template_input_ngModelChange_25_listener() { return ctx.name$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingPlanListComponent_Template_input_ngModelChange_30_listener() { return ctx.code$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Serial Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingPlanListComponent_Template_input_ngModelChange_35_listener() { return ctx.serial$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ManufacturingPlanListComponent_ng_container_36_Template, 10, 7, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ManufacturingPlanListComponent_ng_container_37_Template, 6, 3, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.mode === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.mode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showClear", true)("options", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "hierarchy");
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_20__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__.InputText, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_23__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_22__.TTSelectableRow, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkActive, primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.Dropdown, primeng_table__WEBPACK_IMPORTED_MODULE_25__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_25__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.serials[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-weight: 500;\n}\n\n.plan-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctcGxhbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0U7RUFDRSwwQkFBQTtBQUFKIiwiZmlsZSI6Im1hbnVmYWN0dXJpbmctcGxhbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5zZXJpYWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50b2dnbGUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucGxhbi1saW5rIHtcclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
ManufacturingPlanListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)()
], ManufacturingPlanListComponent);



/***/ }),

/***/ 30832:
/*!*********************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-plan/manufacturing-plan.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingPlanComponent": () => (/* binding */ ManufacturingPlanComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manufacturing-chart/manufacturing-chart.component */ 12188);





function ManufacturingPlanComponent_pek_manufacturing_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-manufacturing-chart", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rootId", ctx_r0.rootId);
} }
class ManufacturingPlanComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(params => params.get('rootId')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(id => this.rootId = id)).subscribe();
    }
}
ManufacturingPlanComponent.ɵfac = function ManufacturingPlanComponent_Factory(t) { return new (t || ManufacturingPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
ManufacturingPlanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManufacturingPlanComponent, selectors: [["pek-manufacturing-plan"]], decls: 2, vars: 1, consts: [[1, "manufacturing-plan"], [3, "rootId", 4, "ngIf"], [3, "rootId"]], template: function ManufacturingPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManufacturingPlanComponent_pek_manufacturing_chart_1_Template, 1, 1, "pek-manufacturing-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rootId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_0__.ManufacturingChartComponent], styles: [".manufacturing-plan[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctcGxhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoibWFudWZhY3R1cmluZy1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbnVmYWN0dXJpbmctcGxhbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 78049:
/*!*******************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-positions/manufacturing-positions.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingPositionsComponent": () => (/* binding */ ManufacturingPositionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_employee_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/employee-position.service */ 96693);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);













function ManufacturingPositionsComponent_ng_template_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Position to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingPositionsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManufacturingPositionsComponent_ng_template_13_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function ManufacturingPositionsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ManufacturingPositionsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
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
    const position_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", position_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](position_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](position_r8.rate);
} }
function ManufacturingPositionsComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 29);
} }
function ManufacturingPositionsComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingPositionsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ManufacturingPositionsComponent_ng_template_16_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ManufacturingPositionsComponent_ng_template_16_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function ManufacturingPositionsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingPositionsComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManufacturingPositionsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingPositionsComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
let ManufacturingPositionsComponent = class ManufacturingPositionsComponent {
    constructor(modalService, employeePositionService) {
        this.modalService = modalService;
        this.employeePositionService = employeePositionService;
        this.menuItems = [{
                label: 'Selected Position',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditPosition()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemovePosition()
                    }
                ]
            }];
        this.positions = [];
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.isLoading = false;
        this.positions$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.employeePositionService.get()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(positions => this.positions = positions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this));
    }
    ngOnInit() {
        this.positions$.subscribe();
    }
    onAddPosition() {
        this.employeePositionService.createEditPositionModal('create').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(position => !!position)).subscribe(position => this.positions.unshift(position));
    }
    prepareForSearch() {
        this.isLoading = true;
        this.selectedPosition = null;
        this.positions = [];
    }
    onEditPosition() {
        this.employeePositionService.createEditPositionModal('edit', this.selectedPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(position => !!position)).subscribe(position => {
            const index = this.positions.findIndex(t => t.id === this.selectedPosition.id);
            this.positions[index] = position;
            this.selectedPosition = this.positions[index];
        });
    }
    onRemovePosition() {
        this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(confirm => confirm)).subscribe(confirm => {
            this.employeePositionService.delete(this.selectedPosition.id).subscribe(() => {
                const index = this.positions.findIndex(e => e.id === this.selectedPosition.id);
                this.positions.splice(index, 1);
                this.selectedPosition = null;
            });
        });
    }
};
ManufacturingPositionsComponent.ɵfac = function ManufacturingPositionsComponent_Factory(t) { return new (t || ManufacturingPositionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_employee_position_service__WEBPACK_IMPORTED_MODULE_1__.EmployeePositionService)); };
ManufacturingPositionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManufacturingPositionsComponent, selectors: [["pek-manufacturing-positions"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Position", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "50%"], [2, "width", "45%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function ManufacturingPositionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingPositionsComponent_Template_button_click_7_listener() { return ctx.onAddPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ManufacturingPositionsComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedPosition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ManufacturingPositionsComponent_ng_template_13_Template, 3, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ManufacturingPositionsComponent_ng_template_14_Template, 7, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ManufacturingPositionsComponent_ng_template_15_Template, 7, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ManufacturingPositionsComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ManufacturingPositionsComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ManufacturingPositionsComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.positions.length > 0)("rows", 10)("selection", ctx.selectedPosition)("value", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.positions.length > 0);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_11__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLXBvc2l0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
ManufacturingPositionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], ManufacturingPositionsComponent);



/***/ }),

/***/ 22092:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-production-calendar/manufacturing-production-calendar.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingProductionCalendarComponent": () => (/* binding */ ManufacturingProductionCalendarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/calendar.service */ 43062);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ 32547);








class ManufacturingProductionCalendarComponent {
    constructor(calendar, adapterService) {
        this.calendar = calendar;
        this.adapterService = adapterService;
        this.defaultDate = new Date();
        this.isSaving = false;
    }
    ngOnInit() {
        console.log(new Date());
        this.defaultDate = new Date();
        this.getDates();
    }
    getDates() {
        this.calendar.getDates().subscribe(dates => {
            dates = dates.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            if (dates.length > 0) {
                this.weekendDates = dates.map(date => {
                    const dd = new Date(date.date).setHours(0, 0, 0, 0);
                    return new Date(dd);
                });
            }
            else {
                this.weekendDates = null;
            }
            this.holidays = dates.map(date => {
                date.date = new Date(new Date(date.date).setHours(0, 0, 0, 0));
                return date;
            });
        });
    }
    save() {
        this.isSaving = true;
        let addedDates = [];
        const deletedDates = [];
        if (this.weekendDates) {
            this.weekendDates.forEach(w => {
                if (!this.holidays.find(h => h.date.getTime() === w.getTime())) {
                    addedDates.push(w);
                }
            });
        }
        if (this.weekendDates) {
            this.holidays.forEach(holiday => {
                if (!this.weekendDates.find(d => d.getTime() === holiday.date.getTime())) {
                    deletedDates.push(holiday);
                }
            });
        }
        else {
            this.holidays.forEach(holiday => deletedDates.push(holiday));
        }
        if (addedDates.length > 0) {
            addedDates = addedDates.map(date => {
                return {
                    date: this.adapterService.dateAdapter(date)
                };
            });
            this.calendar.saveDates(addedDates).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isSaving = false)).subscribe((holidays) => {
                holidays.forEach(holiday => {
                    this.holidays.push({
                        id: holiday.id,
                        date: new Date((new Date(holiday.date).setHours(0, 0, 0, 0)))
                    });
                });
            });
        }
        if (deletedDates.length > 0) {
            this.calendar.deleteDates(deletedDates).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.isSaving = false)).subscribe(() => {
                deletedDates.forEach(date => {
                    const index = this.holidays.findIndex(h => h.id === date.id);
                    this.holidays.splice(index, 1);
                });
            });
        }
        if (!deletedDates.length && !addedDates.length) {
            this.isSaving = false;
        }
    }
}
ManufacturingProductionCalendarComponent.ɵfac = function ManufacturingProductionCalendarComponent_Factory(t) { return new (t || ManufacturingProductionCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_calendar_service__WEBPACK_IMPORTED_MODULE_0__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__.AdapterService)); };
ManufacturingProductionCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManufacturingProductionCalendarComponent, selectors: [["pek-manufacturing-production-calendar"]], decls: 12, vars: 9, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Save Calendar", 1, "mr-2", "p-button-icon", 3, "loading", "click"], [1, "page__content"], [1, "page__card"], [1, "production-calendar"], ["selectionMode", "multiple", 3, "inline", "numberOfMonths", "showOtherMonths", "ngModel", "defaultDate", "firstDayOfWeek", "ngModelChange"]], template: function ManufacturingProductionCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Production Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManufacturingProductionCalendarComponent_Template_button_click_7_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-calendar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManufacturingProductionCalendarComponent_Template_p_calendar_ngModelChange_11_listener($event) { return ctx.weekendDates = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inline", true)("numberOfMonths", 12)("showOtherMonths", false)("ngModel", ctx.weekendDates)("defaultDate", ctx.defaultDate)("firstDayOfWeek", 1);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar], styles: [".production-calendar {\n  padding-top: 1rem;\n}\n.production-calendar .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:nth-child(4), .production-calendar .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:nth-child(7), .production-calendar .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:nth-child(10) {\n  border-left: none;\n}\n.production-calendar .p-datepicker-group-container {\n  display: grid !important;\n  grid-template-columns: repeat(3, 1fr);\n}\n.production-calendar .p-datepicker-group-container .p-datepicker-group:nth-child(3n) {\n  padding-right: 0 !important;\n  border-right: none !important;\n}\n.production-calendar .p-datepicker {\n  max-width: inherit !important;\n  width: 100%;\n}\n.production-calendar .p-datepicker tr:first-child .p-ripple {\n  margin-top: 5px;\n}\n.production-calendar .p-datepicker tr td span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n.production-calendar .p-datepicker tr td:nth-child(6) span {\n  background: #ccc;\n  font-weight: 500;\n}\n.production-calendar .p-datepicker tr td:nth-child(6) span.p-highlight {\n  background: #55b157;\n}\n.production-calendar .p-datepicker tr td:last-child span {\n  background: #ccc;\n  font-weight: 500;\n}\n.production-calendar .p-datepicker tr td:last-child span.p-highlight {\n  background: #97c185;\n}\n.production-calendar .p-datepicker .p-ripple {\n  border-radius: 0;\n}\n.production-calendar .p-datepicker table td > span.p-highlight {\n  color: #fff !important;\n  font-weight: 500;\n  background-color: var(--theme-color-danger);\n}\n.production-calendar .p-datepicker .p-datepicker-today span {\n  background: var(--theme-color-primary);\n  color: #fff;\n  font-weight: 500;\n}\n.production-calendar .p-datepicker .p-datepicker-today span:hover {\n  color: #000;\n}\n.production-calendar .p-datepicker-group-container {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctcHJvZHVjdGlvbi1jYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7QUFHTTtFQUlFLGlCQUFBO0FBSlI7QUFTRTtFQUNFLHdCQUFBO0VBQ0EscUNBQUE7QUFQSjtBQVNJO0VBQ0UsMkJBQUE7RUFDQSw2QkFBQTtBQVBOO0FBV0U7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUFUSjtBQWFRO0VBQ0UsZUFBQTtBQVhWO0FBZ0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWRWO0FBa0JVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWhCWjtBQWtCWTtFQUNFLG1CQUFBO0FBaEJkO0FBc0JVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXNCWTtFQUNFLG1CQUFBO0FBcEJkO0FBMkJJO0VBQ0UsZ0JBQUE7QUF6Qk47QUE0Qkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUExQk47QUE4Qk07RUFDRSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTVCUjtBQThCUTtFQUNFLFdBQUE7QUE1QlY7QUFrQ0U7RUFDRSxXQUFBO0FBaENKIiwiZmlsZSI6Im1hbnVmYWN0dXJpbmctcHJvZHVjdGlvbi1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0aW9uLWNhbGVuZGFyIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuXHJcbiAgLnAtZGF0ZXBpY2tlci5wLWRhdGVwaWNrZXItbXVsdGlwbGUtbW9udGgge1xyXG4gICAgLnAtZGF0ZXBpY2tlci1ncm91cCB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDQpLFxyXG4gICAgICAmOm50aC1jaGlsZCg3KSxcclxuICAgICAgJjpudGgtY2hpbGQoMTApLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLWRhdGVwaWNrZXItZ3JvdXAtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcblxyXG4gICAgLnAtZGF0ZXBpY2tlci1ncm91cDpudGgtY2hpbGQoM24pIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLWRhdGVwaWNrZXIge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0ciB7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIC5wLXJpcHBsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAmLnAtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTViMTU3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAmLnAtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTdjMTg1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnAtcmlwcGxlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ZCA+IHNwYW4ucC1oaWdobGlnaHQge1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1kYW5nZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wLWRhdGVwaWNrZXItdG9kYXkge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnAtZGF0ZXBpY2tlci1ncm91cC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 71362:
/*!***********************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufacturing-slice-tasks/manufacturing-slice-tasks.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingSliceTasksComponent": () => (/* binding */ ManufacturingSliceTasksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/task.service */ 10764);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_pickers_technology_picker_technology_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pickers/technology-picker/technology-picker.component */ 88457);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);

















const _c0 = ["paginator"];
const _c1 = ["dt"];
function ManufacturingSliceTasksComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Slice of Tasks on ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r0.currentDate, "dd/MM/yyyy"), " ");
} }
function ManufacturingSliceTasksComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Slice of tasks from ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 2, ctx_r2.startDate, "dd/MM/y"), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 5, ctx_r2.endDate, "dd/MM/y"), " ");
} }
function ManufacturingSliceTasksComponent_p_multiSelect_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-multiSelect", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function ManufacturingSliceTasksComponent_p_multiSelect_19_Template_p_multiSelect_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.onSelectEmployees($event)); })("onClear", function ManufacturingSliceTasksComponent_p_multiSelect_19_Template_p_multiSelect_onClear_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.onSelectEmployees($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r3.employees)("showClear", true);
} }
function ManufacturingSliceTasksComponent_p_dropdown_34_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ManufacturingSliceTasksComponent_p_dropdown_34_Template_p_dropdown_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.search$.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClear", true)("options", ctx_r4.lists);
} }
function ManufacturingSliceTasksComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Qnty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Machines");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "p-sortIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ManufacturingSliceTasksComponent_ng_template_39_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", employee_r22.employee.first_name + " " + employee_r22.employee.last_name, " ");
} }
function ManufacturingSliceTasksComponent_ng_template_39_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", machine_r23.machine.name, " ");
} }
function ManufacturingSliceTasksComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ManufacturingSliceTasksComponent_ng_template_39_div_18_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ManufacturingSliceTasksComponent_ng_template_39_div_20_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r18 = ctx.$implicit;
    const i_r19 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](task_r18.list_product.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](task_r18.list_product.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 10, task_r18.start_date, "dd/MM/yyyy, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 13, task_r18.end_date, "dd/MM/yyyy, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](task_r18.technology ? task_r18.technology : "Purchased");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](task_r18.list_product.required_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", task_r18.employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", task_r18.machines);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](task_r18.status);
} }
function ManufacturingSliceTasksComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManufacturingSliceTasksComponent_ng_template_40_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r5.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManufacturingSliceTasksComponent_ng_template_41_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 45);
} }
function ManufacturingSliceTasksComponent_ng_template_41_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManufacturingSliceTasksComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManufacturingSliceTasksComponent_ng_template_41_i_2_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManufacturingSliceTasksComponent_ng_template_41_span_3_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.isLoading);
} }
function ManufacturingSliceTasksComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManufacturingSliceTasksComponent_div_42_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r5.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ManufacturingSliceTasksComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
let ManufacturingSliceTasksComponent = class ManufacturingSliceTasksComponent {
    constructor(fb, adapterService, taskService, modalService) {
        this.fb = fb;
        this.adapterService = adapterService;
        this.taskService = taskService;
        this.modalService = modalService;
        this.taskStatuses = [
            { id: 0, name: 'Not processed' },
            { id: 1, name: 'Deficit' },
            { id: 2, name: 'Rework' },
            { id: 3, name: 'Ordered' },
            { id: 4, name: 'On Stock' },
        ];
        this.employees = [];
        this.currentDate = new Date();
        this.lists = [];
        this.isStartFirstPage = false;
        this.isPeriod = false;
        this.searchForm = this.fb.group({
            employees_id: [null],
            status: [null],
            technology_id: [null],
            product_list_origin_id: [null],
        });
        this.queryKey = this.adapterService.generateQueryKey(this.searchForm);
        this.query = [];
        this.tasks = [];
        this.tasksCount = 0;
        this.isLoading = true;
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
        this.tasks$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.taskService.get(this.query)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(response => this.tasksCount = response.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(tasks => this.filterTasks(tasks)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this));
        this.isLoadingFilters = false;
    }
    ngOnInit() {
        this.tasks$.subscribe();
    }
    onChoiceDate() {
        this.modalService.openChoiceDateDialog('Select the day for which you want to view the tasks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(response => !!response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isLoadingFilters = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isPeriod = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(date => this.currentDate = date), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.search$.next())).subscribe();
    }
    onChoicePeriod() {
        this.modalService.openChoicePeriodDateDialog()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(response => !!response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isLoadingFilters = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(dates => {
            this.isPeriod = true;
            this.startDate = dates.startDate;
            this.endDate = dates.endDate;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.search$.next()))
            .subscribe();
    }
    prepareForSearch() {
        this.isLoading = true;
        this.tasks = [];
        const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);
        if (newQueryKey !== this.queryKey) {
            this.queryKey = newQueryKey;
        }
        this.query = [];
        if (!this.isPeriod) {
            this.query.push({ name: 'date', value: this.convertDate(this.currentDate) });
        }
        else {
            this.query.push({ name: 'start_date__gte', value: this.adapterService.dateAdapter(this.startDate) });
            this.query.push({ name: 'end_date__lte', value: this.adapterService.dateAdapter(this.endDate) });
        }
        for (const key in this.searchForm.controls) {
            if (this.searchForm.controls[key].value !== null) {
                if (this.searchForm.controls[key].value instanceof Date) {
                    this.query.push({
                        name: key,
                        value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
                    });
                }
                else {
                    this.query.push({
                        name: key,
                        value: this.searchForm.controls[key].value
                    });
                }
            }
        }
    }
    convertDate(date) {
        return date.toISOString().slice(0, 10);
    }
    filterTasks(tasks) {
        this.tasks = tasks.filter(t => t.list_product.nomenclature.type !== '0');
        if (!this.isLoadingFilters) {
            this.generateTasksEmployees();
            this.generateLists();
            this.isLoadingFilters = true;
        }
    }
    generateTasksEmployees() {
        this.employees = [];
        this.tasks.forEach(task => {
            task.employees.forEach(employee => {
                if (!this.employees.find(e => e.id === employee.employee.id)) {
                    employee.employee.fullName = `${employee.employee.first_name} ${employee.employee.last_name}`;
                    this.employees.push(employee.employee);
                }
            });
        });
    }
    onSelectEmployees(evt) {
        this.searchForm.get('employees_id').patchValue(evt?.value?.join(',').length > 0 ? evt.value.join(',') : null);
        this.search$.next();
    }
    generateLists() {
        this.lists = [];
        this.tasks.forEach(task => {
            if (task.root_nomenclature && !this.lists.find(l => l.id === task.root_nomenclature.id)) {
                task.root_nomenclature.fullName = `(${task.production_list_id}) ${task.root_nomenclature.name}`;
                // @ts-ignore
                task.root_nomenclature.production_list_id = task.production_list_id;
                this.lists.push(task.root_nomenclature);
            }
        });
    }
};
ManufacturingSliceTasksComponent.ɵfac = function ManufacturingSliceTasksComponent_Factory(t) { return new (t || ManufacturingSliceTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_0__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
ManufacturingSliceTasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManufacturingSliceTasksComponent, selectors: [["pek-manufacturing-slice-tasks"]], viewQuery: function ManufacturingSliceTasksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 45, vars: 16, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], ["period", ""], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-calendar", "label", "Choice Date", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-calendar", "label", "Choice Period", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["optionValue", "id", "optionLabel", "fullName", "placeholder", "Choose Employees", 3, "options", "showClear", "onChange", "onClear", 4, "ngIf", "ngIfElse"], ["formControlName", "status", "optionValue", "id", "optionLabel", "name", "placeholder", "Choose status", 3, "showClear", "options", "ngModelChange"], ["formControlName", "product_list_origin_id", "optionValue", "production_list_id", "optionLabel", "fullName", "placeholder", "Choose List", 3, "showClear", "options", "ngModelChange", 4, "ngIf", "ngIfElse"], [1, "table-pagination-preloader"], ["selectionMode", "multiple", "scrollHeight", "calc(100vh - 22rem)", 3, "rows", "paginator", "scrollable", "value"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "paginatorright"], ["pTemplate", "emptymessage"], ["class", "paginator-return-pagination", 4, "ngIf"], ["spinner", ""], ["optionValue", "id", "optionLabel", "fullName", "placeholder", "Choose Employees", 3, "options", "showClear", "onChange", "onClear"], ["formControlName", "product_list_origin_id", "optionValue", "production_list_id", "optionLabel", "fullName", "placeholder", "Choose List", 3, "showClear", "options", "ngModelChange"], [1, "text-center", 2, "width", "5%"], [2, "width", "13%"], [1, "text-center", 2, "width", "12%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "7%"], ["pSortableColumn", "searchFieldEmployee", 2, "width", "10%"], ["field", "searchFieldEmployee"], [2, "width", "8%"], ["pSortableColumn", "status", 1, "text-center", 2, "width", "10%"], ["field", "status"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "paginator-return-pagination"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function ManufacturingSliceTasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManufacturingSliceTasksComponent_ng_container_5_Template, 3, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ManufacturingSliceTasksComponent_ng_template_6_Template, 3, 8, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManufacturingSliceTasksComponent_Template_button_click_9_listener() { return ctx.onChoiceDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManufacturingSliceTasksComponent_Template_button_click_10_listener() { return ctx.onChoicePeriod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "form", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ManufacturingSliceTasksComponent_p_multiSelect_19_Template, 1, 2, "p-multiSelect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ManufacturingSliceTasksComponent_Template_p_dropdown_ngModelChange_24_listener() { return ctx.search$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 13)(26, "div", 14)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "pek-technology-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 13)(31, "div", 14)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Production List Origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ManufacturingSliceTasksComponent_p_dropdown_34_Template, 1, 2, "p-dropdown", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 18)(36, "p-table", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, ManufacturingSliceTasksComponent_ng_template_38_Template, 23, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, ManufacturingSliceTasksComponent_ng_template_39_Template, 23, 16, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ManufacturingSliceTasksComponent_ng_template_40_Template, 2, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ManufacturingSliceTasksComponent_ng_template_41_Template, 4, 3, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ManufacturingSliceTasksComponent_div_42_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ManufacturingSliceTasksComponent_ng_template_43_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "manufacturing")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isPeriod)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading || ctx.isLoadingFilters)("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClear", true)("options", ctx.taskStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading || ctx.isLoadingFilters)("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 10)("paginator", ctx.tasks.length > 0)("scrollable", true)("value", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r5.paginator && !ctx.isLoading && ctx.tasks.length > 0);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortIcon, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, _shared_pickers_technology_picker_technology_picker_component__WEBPACK_IMPORTED_MODULE_4__.TechnologyPickerComponent, primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__.MultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: [".form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctc2xpY2UtdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6Im1hbnVmYWN0dXJpbmctc2xpY2UtdGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XHJcbn1cclxuIl19 */"] });
ManufacturingSliceTasksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()
], ManufacturingSliceTasksComponent);



/***/ }),

/***/ 74360:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/manufacturing/components/manufaturing-list-product-production/manufacturing-list-product-production.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingListProductProductionComponent": () => (/* binding */ ManufacturingListProductProductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/planning-status.enum */ 33060);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/task.service */ 10764);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manufacturing-chart/manufacturing-chart.component */ 12188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-resizable-element */ 84454);














function ManufacturingListProductProductionComponent_div_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ManufacturingListProductProductionComponent_div_1_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.production.isSelected = $event); })("change", function ManufacturingListProductProductionComponent_div_1_input_1_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.chart.changeAllProductsOnSelected()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.production.isSelected);
} }
function ManufacturingListProductProductionComponent_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingListProductProductionComponent_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.chart.addTasks(ctx_r15.production)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingListProductProductionComponent_div_1_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.chart.toggleProduction(ctx_r17.production).subscribe()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("pi-minus", ctx_r5.production.isExpanded)("pi-plus", !ctx_r5.production.isExpanded);
} }
function ManufacturingListProductProductionComponent_div_1_b_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_1_b_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(T)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_1_b_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_1_b_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(Reordered)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_1_b_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_1_b_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(Reordered)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { width: a0, paddingLeft: a1 }; };
function ManufacturingListProductProductionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_1_input_1_Template, 1, 1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingListProductProductionComponent_div_1_button_2_Template, 1, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManufacturingListProductProductionComponent_div_1_i_4_Template, 1, 4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManufacturingListProductProductionComponent_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.toggleActiveProduction(ctx_r19.production)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10)(7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 12)(10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 14)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ManufacturingListProductProductionComponent_div_1_b_14_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ManufacturingListProductProductionComponent_div_1_b_15_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ManufacturingListProductProductionComponent_div_1_b_16_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManufacturingListProductProductionComponent_div_1_b_17_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 17)(20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ManufacturingListProductProductionComponent_div_1_b_21_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ManufacturingListProductProductionComponent_div_1_b_22_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("task-parent", ctx_r0.production == null ? null : ctx_r0.production.hasChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.chart.selectedTechnologies == null ? null : ctx_r0.chart.selectedTechnologies.length) && ctx_r0.production.isFiltered && ctx_r0.chart.mode === "make-order");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.production == null ? null : ctx_r0.production.hasChildren) && ctx_r0.chart.mode === "add-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("toggle-disable", ctx_r0.chart.mode === "add-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.production == null ? null : ctx_r0.production.hasChildren) && !(ctx_r0.production == null ? null : ctx_r0.production.isBlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](24, _c0, (ctx_r0.production == null ? null : ctx_r0.production.hasChildren) ? 190 - 15 * (ctx_r0.production == null ? null : ctx_r0.production.product.level) + "px" : "190px", ctx_r0.isLeftPanel && !(ctx_r0.production == null ? null : ctx_r0.production.hasChildren) ? 15 * ((ctx_r0.production == null ? null : ctx_r0.production.product.level) - 1) + "px" : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r0.productionNameWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.has_technical_equipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.production.task.refunded_orders.length > 0 && !ctx_r0.production.task.is_refunded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.production.task.is_in_rma_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r0.productionNameWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.production.task.refunded_orders.length > 0 && !ctx_r0.production.task.is_refunded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.production.task.is_in_rma_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r0.production == null ? null : ctx_r0.production.product.task_required_quantity) * (ctx_r0.production == null ? null : ctx_r0.production.tasks[0].tasks.length), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.category == null ? null : ctx_r0.production.product.nomenclature.category.unit_of_measure == null ? null : ctx_r0.production.product.nomenclature.category.unit_of_measure.symbol) ? ctx_r0.production == null ? null : ctx_r0.production.product.nomenclature.category == null ? null : ctx_r0.production.product.nomenclature.category.unit_of_measure == null ? null : ctx_r0.production.product.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "svg", 36)(1, "defs")(2, "pattern", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "rect", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", task_r22.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", task_r22.width);
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 40);
} if (rf & 2) {
    const day_r31 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r27.chart.selectedDisplay === "days" ? ctx_r27.chart.vacationCoords + "px" : ctx_r27.chart.weekWeekDayCoords + "px")("left", day_r31.x, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("day_is-vac", day_r31.isVac);
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_b_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(Reordered)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "left": a0, "width": a1 }; };
const _c2 = function (a0, a1) { return { left: a0, right: a1 }; };
const _c3 = function () { return { right: true }; };
const _c4 = function () { return { left: true }; };
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.mouseEntered(task_r22)); })("mouseleave", function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.mouseLeave(task_r22)); })("cdkDragStarted", function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template_div_cdkDragStarted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.dragging = true); })("cdkDragEnded", function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template_div_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.move(task_r22, $event)); })("resizeEnd", function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template_div_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.resize(task_r22, $event)); })("click", function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.onTaskClick(task_r22, ctx_r42.production, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1__svg_svg_1_Template, 5, 4, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_div_3_Template, 1, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_b_5_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_b_6_Template, 2, 0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 33)(9, "div", 34)(10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_23_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r23.chart.selectedTasks.has(task_r22))("deselected", ctx_r23.chart.mode === "edit-tasks" && !ctx_r23.chart.selectedTasks.has(task_r22))("disabled", ctx_r23.chart.selectedTechnologies.length && !ctx_r23.chart.selectedTechnologies.includes(task_r22.technology))("disabled_status", ctx_r23.chart.mode !== "make-order" && (ctx_r23.chart.selectedStatuses.length && !ctx_r23.chart.selectedStatuses.includes(task_r22.status)) || ctx_r23.chart.selectedFilterTechnologies.length && !ctx_r23.chart.selectedFilterTechnologies.includes(task_r22.technology) || ctx_r23.chart.selectedProductionTypes.length && !ctx_r23.chart.selectedProductionTypes.includes(task_r22.production_type))("is-saved", task_r22.isSaved)("small", task_r22.width <= 24 && ctx_r23.chart.selectedDisplay === "days")("not-planned", !task_r22.is_planned)("planned", task_r22.is_planned)("deficit_not-planned", task_r22.status === "Deficit" && !task_r22.is_planned)("deficit_planned", task_r22.status === "Deficit" && task_r22.is_planned)("ordered-own", task_r22.status === "Ordered" && task_r22.production_type === "1")("ordered-own-p", task_r22.status === "Ordered" && task_r22.list_product.nomenclature.type === "0")("ordered-outsource", task_r22.status === "Ordered" && task_r22.production_type === "0")("on-stock", task_r22.status === "On stock")("task-reserved", task_r22.status === "Reserved")("rework", task_r22.status === "Rework")("small-font", ctx_r23.chart.selectedDisplay === "weeks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](55, _c1, task_r22.left + "px", task_r22.width + "px"))("id", ctx_r23.production.product.id)("cdkDragDisabled", ctx_r23.getIfDisabled(task_r22))("enableGhostResize", true)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](58, _c2, ctx_r23.chart.scaleHourWeekdayDay, ctx_r23.chart.scaleHourWeekdayDay))("validateResize", ctx_r23.validateResize)("pTooltip", (task_r22.refunded_orders.length > 0 && !task_r22.is_refunded ? "(RR) " : "") + (task_r22.is_in_rma_process ? "(Reordered) " : "") + ((tmp_23_0 = task_r22.technology) !== null && tmp_23_0 !== undefined ? tmp_23_0 : "Purchased"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r22.status === "Rework");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", task_r22.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("tech-name_small", ctx_r23.chart.planScale === 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r22.refunded_orders.length > 0 && !task_r22.is_refunded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r22.is_in_rma_process);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", task_r22.technology ? task_r22.technology : ctx_r23.type(task_r22.list_product.nomenclature.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("resize-handle-right_medium", task_r22.width <= 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](61, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("resize-handle-left_medium", task_r22.width <= 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](62, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkDragHandleDisabled", ctx_r23.getIfDisabled(task_r22));
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c1, task_r22.left + "px", task_r22.unconfirmedBiggerWidth + "px"));
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](1, _c1, task_r22.unconfirmedLeft + "px", task_r22.unconfirmedSmallerWidth + "px"));
} }
function ManufacturingListProductProductionComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_1_Template, 11, 63, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_2_Template, 2, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingListProductProductionComponent_div_2_ng_container_1_div_3_Template, 2, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const task_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r22.start_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r22.unconfirmedBiggerWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", task_r22.unconfirmedSmallerWidth);
} }
function ManufacturingListProductProductionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_2_ng_container_1_Template, 4, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r1.chart == null ? null : ctx_r1.chart.getX(ctx_r1.production == null ? null : ctx_r1.production.getEnd()), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.production == null ? null : ctx_r1.production.tasks);
} }
function ManufacturingListProductProductionComponent_div_3_div_1_pek_manufacturing_list_product_production_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "pek-manufacturing-list-product-production", 47);
} if (rf & 2) {
    const child_r50 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rootTask", ctx_r49.rootTask)("isLeftPanel", ctx_r49.isLeftPanel)("productionNameWidth", ctx_r49.productionNameWidth)("production", child_r50);
} }
function ManufacturingListProductProductionComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_3_div_1_pek_manufacturing_list_product_production_1_Template, 1, 4, "pek-manufacturing-list-product-production", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx_r47.production.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", group_r48);
} }
function ManufacturingListProductProductionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_3_div_1_Template, 2, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("highlighted-end", ctx_r2.childrenEndHighlighted)("test", !ctx_r2.isLeftPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.production.groups);
} }
class ManufacturingListProductProductionComponent {
    constructor(modalService, tasksService, adapterService, elementRef, chart) {
        this.modalService = modalService;
        this.tasksService = tasksService;
        this.adapterService = adapterService;
        this.elementRef = elementRef;
        this.chart = chart;
        this.productionNameWidth = 150;
        this.childrenEndHighlighted = false;
        this.dragging = false;
        // использую такой синтаксис, чтобы не терять this
        this.validateResize = event => {
            console.log('EVENT RESIZE VALIDATE', event);
            console.log('EVENT RESIZE VALIDATE this.taskHovered', this.taskHovered);
            // console.log('EVENT RESIZE this', this);
            // const x = event.rectangle.left - (event.rectangle.width / 2);
            // const y = event.rectangle.top - (event.rectangle.height / 2);
            // const el = document.elementFromPoint(x, y);
            // console.log('EVENT RESIZE this', el);
            return !this.getIfDisabled(this.taskHovered);
        };
    }
    ngOnInit() {
        if (this.production.product.nomenclature.type === '1') {
            this.elementRef.nativeElement.style.background = this.production.color;
            this.elementRef.nativeElement.style.zIndex = String(99999 - this.production.index);
        }
        this.taskDeleteSub = this.tasksService.delete$.subscribe(() => {
            this.production.updateGroups();
        });
    }
    edit(task) {
        const rootTask = this.getRootTaskInfo(this.production);
        this.tasksService.editTaskDialog(task, this.production.tasks, rootTask).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(isApplied => isApplied)).subscribe(position => {
            if (position === 'reload') {
                // this.applyPosition(task, position)
                location.reload();
                return;
            }
            if (position) {
                this.applyPosition(task, position);
            }
        });
    }
    resize(task, event) {
        // игнорируем изменения покупок т.к. их даты указываются в разделе закупок + если елемент заблокирован по статусу
        if (task.list_product.nomenclature.type === _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__.ENomenclatureType.PURCHASED || this.getIfDisabled(task)) {
            return;
        }
        const position = { start: task.start_date, end: task.end_date };
        if (event.edges.left) {
            let startX = this.chart.getX(task.start_date);
            startX += event.edges.left;
            if (startX < 0)
                startX = 0;
            // if (this.chart.getDateInfo(startX).isVac) {
            //   return;
            //   // TODO сделать анимацию мигания задачи
            // }
            position.start = this.chart.getDate(startX);
        }
        else if (event.edges.right) {
            const endX = this.chart.getX(task.end_date);
            // if (this.chart.getDateInfo(endX + event.edges.right).isVac) {
            //   return;
            // }
            position.end = this.chart.getDate(endX + event.edges.right);
        }
        task.is_planned = true;
        this.applyPosition(task, position);
    }
    getDuration(task) {
        return (task.end_date.getTime() - task.start_date.getTime()) / 1000 / 60 / 60;
    }
    move(task, event) {
        task.duration = this.getDuration(task);
        task.is_planned = true;
        event.source.reset();
        // игнорируем изменения покупок т.к. их даты указываются в разделе закупок
        if (task.list_product.nomenclature.type === _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__.ENomenclatureType.PURCHASED) {
            // TODO вывести сообщение юзеру
            return;
        }
        const startX = this.chart.getX(task.start_date);
        // if (this.chart.getDateInfo(startX + event.distance.x)?.isVac) {
        //   return;
        // }
        const newStartX = startX + event.distance.x;
        const start = this.chart.getDate(newStartX < 0 ? 0 : newStartX);
        const end = new Date(start.getTime() + task.duration * 60 * 60 * 1000);
        // if (this.chart.getDateInfo(end)?.isVac) {
        //   return;
        // }
        this.applyPosition(task, { start, end });
    }
    onTaskClick(task, production, event) {
        switch (this.chart.mode) {
            case 'edit-tasks':
                // toggle task selection
                const selectedProductions = this.chart.selectedTasks;
                task.production = production;
                if (selectedProductions.has(task)) {
                    selectedProductions.delete(task);
                }
                else {
                    selectedProductions.add(task);
                }
                break;
            case 'planning':
            case 'make-order':
                // task dragging
                if (!this.dragging) {
                    task.production = production;
                    this.edit(task);
                }
                this.dragging = false;
                break;
        }
    }
    validateTest() {
        return true;
    }
    type(type) {
        switch (type) {
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__.ENomenclatureType.PURCHASED:
                return 'Purchased';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__.ENomenclatureType.ASSEMBLY:
                return 'Assembly';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__.ENomenclatureType.MANUFACTURED:
                return 'Manufactured';
        }
    }
    toggleActiveProduction(production) {
        if (production.hasChildren)
            production.isActive = !production.isActive;
    }
    highlightChildrenEnd() {
        this.childrenEndHighlighted = true;
        setTimeout(() => this.childrenEndHighlighted = false, 2500);
    }
    applyPosition(task, position) {
        // validate new position
        const prevTasks = this.production.tasks.filter(t => t.start_date.getTime() < task.start_date.getTime());
        // запретить двигать левее предыдущих задач
        if (prevTasks.length) {
            prevTasks.forEach(prevTask => {
                if (prevTask.end_date.getTime() > position.start.getTime()) {
                    position.start.setTime(prevTask.end_date.getTime());
                    // если переместили, а не изменили размер
                    if (position.end.getTime() < task.end_date.getTime()) {
                        position.end.setTime(position.start.getTime() + task.duration * 60 * 60000);
                    }
                }
            });
        }
        else {
            const childrenEnd = this.production.getChildrenEnd();
            if (childrenEnd.getTime() > position.start.getTime()) {
                this.highlightChildrenEnd();
                position.start.setTime(childrenEnd.getTime());
                // если переместили, а не изменили размер
                if (position.end.getTime() < task.end_date.getTime()) {
                    position.end.setTime(position.start.getTime() + task.duration * 60 * 60000);
                }
            }
        }
        const nextTasks = this.production.tasks.filter(t => t.start_date.getTime() > task.start_date.getTime());
        // подвинуть следующие задачи
        nextTasks.reduce((prevEnd, nextTask) => {
            if (nextTask.start_date.getTime() < prevEnd.getTime()) {
                nextTask.duration = (nextTask.end_date.getTime() - nextTask.start_date.getTime()) / 60 / 1000;
                nextTask.start_date.setTime(prevEnd.getTime());
                nextTask.end_date.setTime(nextTask.start_date.getTime() + nextTask.duration * 60000);
                this.chart.updateTaskDates(nextTask);
            }
            return nextTask.end_date;
        }, position.end);
        // apply new position
        task.start_date = position.start;
        task.end_date = position.end;
        task.duration = task.duration = this.getDuration(task);
        task.apply();
        this.chart.updateTimeline();
        this.chart.updateMargins(this.production);
        this.chart.updateParentMargins(this.production.parent);
        this.chart.update();
        this.chart.updateTaskDates(task);
    }
    mouseoverFromTask(production) {
        production.isHover = true;
    }
    getTaskWidth(width) {
        return width * this.chart.vacationCoords / 24;
    }
    getTaskLeft(left) {
        return left * this.chart.scaleHourWeekdayDay / 12;
    }
    mouseoutFromTask(production) {
        production.isHover = false;
    }
    ngOnDestroy() {
        this.taskDeleteSub.unsubscribe();
    }
    getIfDisabled(task) {
        const rootTask = this.getRootTaskInfo(this.production);
        const isWaitingForConfirmation = rootTask.planning_status === _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_0__.PlanningStatus.WAITING_CONFIRMATION;
        const rootPlanProductionId = rootTask.list_product.id;
        if (rootPlanProductionId === task.list_product.id && !isWaitingForConfirmation) {
            return rootTask.planning_status === _enums_planning_status_enum__WEBPACK_IMPORTED_MODULE_0__.PlanningStatus.PLANNED;
        }
        else {
            return isWaitingForConfirmation;
        }
    }
    getRootTaskInfo(listProductProduction) {
        if (listProductProduction.parent) {
            return this.getRootTaskInfo(listProductProduction.parent);
        }
        else {
            return listProductProduction.tasks?.find(task => !task.next_task && !task.parent_task);
        }
    }
    mouseEntered(task) {
        this.taskHovered = task;
    }
    mouseLeave(task) {
        this.taskHovered = task;
    }
}
ManufacturingListProductProductionComponent.ɵfac = function ManufacturingListProductProductionComponent_Factory(t) { return new (t || ManufacturingListProductProductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_3__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_5__.ManufacturingChartComponent)); };
ManufacturingListProductProductionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManufacturingListProductProductionComponent, selectors: [["pek-manufacturing-list-product-production"]], inputs: { production: "production", isLeftPanel: "isLeftPanel", productionNameWidth: "productionNameWidth", isRoot: "isRoot", rootTask: "rootTask" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CDK_DRAG_CONFIG, useValue: { dragStartThreshold: 12 } }])], decls: 4, vars: 21, consts: [[1, "task", 3, "mouseover", "mouseout"], ["class", "d-flex task-content align-items-center", 3, "task-parent", 4, "ngIf"], ["class", "d-flex timeline-tasks ml-3", 3, "width", 4, "ngIf"], ["class", "children", 3, "highlighted-end", "test", 4, "ngIf"], [1, "d-flex", "task-content", "align-items-center"], ["type", "checkbox", "class", "task-checkbox", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["class", "task-btn", 3, "click", 4, "ngIf"], [2, "width", "30px"], ["class", "pi", 3, "pi-minus", "pi-plus", "click", 4, "ngIf"], [1, "d-flex", 3, "click"], [1, "task-item", "task-item-code", 3, "ngStyle"], [1, "production-code"], [1, "production-code", "production-code_hide"], [1, "text"], [1, "task-item", "task-item-name"], [1, "production-name"], [4, "ngIf"], [1, "production-name", "production-name_hide"], [1, "task-item", "justify-content-center", 2, "width", "80px"], [1, "task-item", "justify-content-center", 2, "width", "50px"], ["type", "checkbox", 1, "task-checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "task-btn", 3, "click"], [1, "pi", 3, "click"], [1, "d-flex", "timeline-tasks", "ml-3"], [4, "ngFor", "ngForOf"], ["class", "task-time", "cdkDrag", "", "cdkDragLockAxis", "x", "mwlResizable", "", 3, "selected", "deselected", "disabled", "disabled_status", "is-saved", "small", "not-planned", "planned", "deficit_not-planned", "deficit_planned", "ordered-own", "ordered-own-p", "ordered-outsource", "on-stock", "task-reserved", "rework", "ngStyle", "id", "small-font", "cdkDragDisabled", "enableGhostResize", "resizeSnapGrid", "validateResize", "pTooltip", "mouseenter", "mouseleave", "cdkDragStarted", "cdkDragEnded", "resizeEnd", "click", 4, "ngIf"], ["class", "task-time new-date", 3, "ngStyle", 4, "ngIf"], ["class", "task-time new-date-smaller", 3, "ngStyle", 4, "ngIf"], ["cdkDrag", "", "cdkDragLockAxis", "x", "mwlResizable", "", 1, "task-time", 3, "ngStyle", "id", "cdkDragDisabled", "enableGhostResize", "resizeSnapGrid", "validateResize", "pTooltip", "mouseenter", "mouseleave", "cdkDragStarted", "cdkDragEnded", "resizeEnd", "click"], ["height", "22", 3, "width", 4, "ngIf"], [1, "days"], ["class", "day", 3, "width", "day_is-vac", "left", 4, "ngFor", "ngForOf"], [1, "tech-name"], ["mwlResizeHandle", "", 1, "resize-handle-right", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "resize-handle-left", 3, "resizeEdges"], ["cdkDragHandle", "", 1, "drag-handle", 3, "cdkDragHandleDisabled"], ["height", "22"], ["id", "transformedPattern", "x", "0", "y", "0", "width", "1", "height", "20", "patternUnits", "userSpaceOnUse", "patternTransform", "rotate(45)"], ["cx", "1", "cy", "1", "r", "2", 2, "stroke", "none", "fill", "#000000"], ["x", "0", "y", "0", "height", "22", 2, "stroke", "#000000", "fill", "url(#transformedPattern)"], [1, "day"], [1, "task-time", "new-date", 3, "ngStyle"], [1, "task-time", "new-date-smaller", 3, "ngStyle"], [1, "children"], ["class", "child-group", 3, "background", 4, "ngFor", "ngForOf"], [1, "child-group"], [3, "rootTask", "isLeftPanel", "productionNameWidth", "production", 4, "ngFor", "ngForOf"], [3, "rootTask", "isLeftPanel", "productionNameWidth", "production"]], template: function ManufacturingListProductProductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function ManufacturingListProductProductionComponent_Template_div_mouseover_0_listener() { return ctx.mouseoverFromTask(ctx.production); })("mouseout", function ManufacturingListProductProductionComponent_Template_div_mouseout_0_listener() { return ctx.mouseoutFromTask(ctx.production); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManufacturingListProductProductionComponent_div_1_Template, 28, 27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManufacturingListProductProductionComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManufacturingListProductProductionComponent_div_3_Template, 2, 5, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("margin-left", ctx.isLeftPanel ? -15 * (ctx.production == null ? null : ctx.production.product.level) : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("m-0", ctx.production == null ? null : ctx.production.children == null ? null : ctx.production.children.length)("root", ctx.isRoot)("selected", ctx.production == null ? null : ctx.production.isSelected)("filtered", ctx.production == null ? null : ctx.production.isFiltered)("visible", ctx.production == null ? null : ctx.production.isVisible)("parent", ctx.production.hasChildren)("task_hover", ctx.production.isHover)("task_active", ctx.production.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLeftPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLeftPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.production == null ? null : ctx.production.isExpanded);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableDirective, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizeHandleDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDragHandle, ManufacturingListProductProductionComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  float: left;\n  clear: left;\n}\n\n.disabled_status[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.disabled_status[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%] {\n  cursor: default !important;\n}\n\n.small-font[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n\n.children[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 15px;\n}\n\n.children.highlighted-end[_ngcontent-%COMP%] {\n  border-right: #ff253a dashed 1px;\n}\n\n.child-group[_ngcontent-%COMP%] {\n  float: left;\n  clear: left;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  clear: left;\n  align-items: center;\n  transition: 0s !important;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.task[_ngcontent-%COMP%]   .task-checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  z-index: 2;\n}\n\n.task.visible[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.task[_ngcontent-%COMP%]:not(.visible) {\n  display: none;\n}\n\n.task.parent[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.task_hover[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.task_active[_ngcontent-%COMP%] {\n  background: sandybrown;\n  font-weight: 500;\n  transition: none !important;\n}\n\n.task_active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background: sandybrown !important;\n  transition: none !important;\n}\n\n.task-content[_ngcontent-%COMP%] {\n  z-index: 10;\n  min-height: 30px;\n  position: relative;\n}\n\n.task-item[_ngcontent-%COMP%]   .production-name[_ngcontent-%COMP%], .task-item[_ngcontent-%COMP%]   .production-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.task-item.task-item-name[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 500;\n  height: 30px;\n  line-height: 30px;\n}\n\n.task-item.task-item-name[_ngcontent-%COMP%]:hover   .production-name[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.task-item.task-item-name[_ngcontent-%COMP%]:hover   .production-name_hide[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.task-item.task-item-code[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 501;\n  height: 30px;\n  line-height: 30px;\n}\n\n.task-item.task-item-code[_ngcontent-%COMP%]:hover   .production-code[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.task-item.task-item-code[_ngcontent-%COMP%]:hover   .production-code_hide[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.task-item[_ngcontent-%COMP%]   .production-name_hide[_ngcontent-%COMP%], .task-item[_ngcontent-%COMP%]   .production-code_hide[_ngcontent-%COMP%] {\n  display: none;\n  white-space: inherit;\n  overflow: auto;\n  align-items: center;\n}\n\n.task-item[_ngcontent-%COMP%]   .production-name_hide[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .task-item[_ngcontent-%COMP%]   .production-code_hide[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: max-content;\n  position: absolute;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n  z-index: 501;\n  background: #fff;\n}\n\n.timeline-tasks[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 30px;\n  align-items: center;\n  z-index: 9;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  z-index: 800;\n  cursor: pointer;\n  transition: background-color 500ms ease;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.small[_ngcontent-%COMP%] {\n  width: 24px !important;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.selected[_ngcontent-%COMP%] {\n  box-shadow: #000 0 0 6px -2px, #000 0px -2px 10px -5px inset;\n  font-weight: bold;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.deselected[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  filter: grayscale(1);\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.is-saved[_ngcontent-%COMP%], .timeline-tasks[_ngcontent-%COMP%]   .task-time.is-saved[_ngcontent-%COMP%]:hover {\n  background-color: #C8E6C9;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%]   .tech-name[_ngcontent-%COMP%] {\n  padding: 0 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%]   .tech-name_small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  cursor: grab;\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.disabled[_ngcontent-%COMP%]:not(:hover) {\n  filter: grayscale(0) opacity(0.3);\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.disabled[_ngcontent-%COMP%]:not(:hover).selected {\n  filter: grayscale(0) opacity(1);\n}\n\n.timeline-tasks[_ngcontent-%COMP%]   .task-time.disabled[_ngcontent-%COMP%]:not(:hover).deselected {\n  filter: grayscale(1) opacity(1);\n}\n\n.task-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.task-time[_ngcontent-%COMP%] {\n  border: 1px solid;\n  position: relative;\n}\n\n.task-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.task-time.new-date[_ngcontent-%COMP%] {\n  border-left: none;\n  z-index: -1 !important;\n  background: repeating-linear-gradient(45deg, #7f7f7f, #7f7f7f 10px, rgba(203, 203, 203, 0) 10px, rgba(203, 203, 203, 0) 16px);\n}\n\n.task-time.new-date-smaller[_ngcontent-%COMP%] {\n  pointer-events: none;\n  border: none;\n  border-bottom: 2px solid var(--text-color);\n  border-left: 3px dotted var(--text-color);\n}\n\n.pi-minus[_ngcontent-%COMP%], .pi-plus[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n\n.pi-plus[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.task-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  cursor: col-resize;\n  width: 10px;\n}\n\n.resize-handle-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.resize-handle-left_medium[_ngcontent-%COMP%] {\n  left: -6px;\n}\n\n.resize-handle-left_small[_ngcontent-%COMP%] {\n  left: -10px !important;\n}\n\n.resize-handle-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.resize-handle-right_medium[_ngcontent-%COMP%] {\n  right: -6px;\n}\n\n.resize-handle-right_small[_ngcontent-%COMP%] {\n  right: -10px !important;\n}\n\n.not-planned[_ngcontent-%COMP%] {\n  border: 1px solid #f1716d;\n}\n\n.deficit_not-planned[_ngcontent-%COMP%] {\n  background: #f1716d;\n}\n\n.deficit_planned[_ngcontent-%COMP%] {\n  background: #f1716d;\n  border: 1px solid #000;\n}\n\n.ordered-own[_ngcontent-%COMP%], .ordered-own-p[_ngcontent-%COMP%] {\n  background: #fecf2e;\n  border: 1px solid #000;\n}\n\n.ordered-outsource[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fecf2e;\n  border: 1px solid #000;\n}\n\n.ordered-outsource[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: url('hand-shake.svg');\n  right: 5px;\n  z-index: 1;\n}\n\n.on-stock[_ngcontent-%COMP%] {\n  background: #b7d472;\n  border: 1px solid #000;\n}\n\n.task-reserved[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  background: #af89e7;\n}\n\n.planned[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.days[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  overflow: hidden;\n}\n\n.day[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  width: 24px;\n}\n\n.day_is-vac[_ngcontent-%COMP%] {\n  background: gray;\n}\n\n.rework[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #b7d472 38%, #fecf2e 65%) !important;\n}\n\n.rework[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1px;\n  right: 0;\n  bottom: 1px;\n  top: -1px;\n}\n\n.toggle-disable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.test[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n\n.task-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 5px;\n  top: 4px;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid var(--text-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.task-btn[_ngcontent-%COMP%]::before, .task-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background: var(--text-color);\n  width: 12px;\n  height: 2px;\n  position: absolute;\n}\n\n.task-btn[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctbGlzdC1wcm9kdWN0LXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU1FO0VBQ0UsMEJBQUE7QUFKSjs7QUFRQTtFQUNFLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPRTtFQUNFLGdDQUFBO0FBTEo7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBR0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtBQVZGOztBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVhKOztBQXVCRTtFQUNFLFlBQUE7QUFyQko7O0FBd0JFO0VBQ0UsYUFBQTtBQXRCSjs7QUE0QkU7RUFDRSxlQUFBO0FBMUJKOztBQTZCRTtFQUNFLGdCQUFBO0FBM0JKOztBQThCRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQTVCSjs7QUE4Qkk7RUFDRSxpQ0FBQTtFQUNBLDJCQUFBO0FBNUJOOztBQWlDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBOUJGOztBQW1DRTs7RUFFRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBb0NNO0VBQ0UsYUFBQTtBQWxDUjs7QUFxQ007RUFDRSxhQUFBO0FBbkNSOztBQXdDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXRDSjs7QUF5Q007RUFDRSxhQUFBO0FBdkNSOztBQTBDTTtFQUNFLGFBQUE7QUF4Q1I7O0FBK0NJOztFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTVDTjs7QUE4Q007O0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTNDUjs7QUFpREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBOUNGOztBQWdERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSx1Q0FBQTtBQS9DSjs7QUFpREk7RUFDRSxzQkFBQTtBQS9DTjs7QUFrREk7RUFDRSw0REFBQTtFQUNBLGlCQUFBO0FBaEROOztBQW1ESTtFQUVFLFlBQUE7RUFDQSxvQkFBQTtBQWxETjs7QUFxREk7RUFHRSx5QkFBQTtBQXJETjs7QUF3REk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF0RE47O0FBd0RNO0VBQ0UsZUFBQTtBQXREUjs7QUEwREk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FBeEROOztBQTJESTtFQUNFLGdCQUFBO0FBekROOztBQTRESTtFQUNFLGlDQUFBO0FBMUROOztBQTZESTtFQUNFLCtCQUFBO0FBM0ROOztBQThESTtFQUNFLCtCQUFBO0FBNUROOztBQWlFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQTlERjs7QUFpRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBOURGOztBQWdFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUE5REo7O0FBaUVFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZIQUFBO0FBL0RKOztBQWtFRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EseUNBQUE7QUFoRUo7O0FBb0VBOztFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWpFRjs7QUFvRUE7RUFDRSxrQkFBQTtBQWpFRjs7QUFxRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFsRUY7O0FBcUVBOztFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWxFRjs7QUFxRUE7RUFDRSxPQUFBO0FBbEVGOztBQW9FRTtFQUNFLFVBQUE7QUFsRUo7O0FBcUVFO0VBQ0Usc0JBQUE7QUFuRUo7O0FBdUVBO0VBQ0UsUUFBQTtBQXBFRjs7QUFzRUU7RUFDRSxXQUFBO0FBcEVKOztBQXVFRTtFQUNFLHVCQUFBO0FBckVKOztBQXlFQTtFQUNFLHlCQUFBO0FBdEVGOztBQXlFQTtFQUNFLG1CQUFBO0FBdEVGOztBQXlFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUF0RUY7O0FBeUVBOztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUF0RUY7O0FBeUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBdEVGOztBQXdFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQXRFSjs7QUEwRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBdkVGOztBQTBFQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUF2RUY7O0FBMEVBO0VBQ0Usc0JBQUE7QUF2RUY7O0FBMEVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBdkVGOztBQTBFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUF2RUY7O0FBeUVFO0VBQ0UsZ0JBQUE7QUF2RUo7O0FBMkVBO0VBQ0UsdUVBQUE7QUF4RUY7O0FBMEVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBeEVKOztBQTRFQTtFQUNFLG9CQUFBO0FBekVGOztBQTRFQTtFQUNFLDBCQUFBO0FBekVGOztBQTRFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6RUY7O0FBMkVFO0VBRUUsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTFFSjs7QUE2RUU7RUFDRSx3QkFBQTtBQTNFSiIsImZpbGUiOiJtYW51ZmFjdHVyaW5nLWxpc3QtcHJvZHVjdC1wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBsZWZ0O1xyXG5cclxuICAvLyDQo9Cx0YDQsNC7LiDQktGB0ZEt0YLQsNC60Lgg0YbQstC10YIg0L/QvtC60LDQt9GL0LLQsNCw0YIg0YLQvtC70YzQutC+INGA0L7QtNC40YLQtdC70Y8uINCi0Y/QvdGD0YLRjNGB0Y8g0Log0LrQsNC70LXQvdC00LDRgNGOINC90LXQvdGD0LbQvdC+XHJcbiAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9tYXJnaW4tdG9wOiAtOTk5OXB4O1xyXG4gIC8vcGFkZGluZy10b3A6IDk5OTlweDtcclxufVxyXG5cclxuLmRpc2FibGVkX3N0YXR1cyB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAudGFzay10aW1lIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNtYWxsLWZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG59XHJcblxyXG4uY2hpbGRyZW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbiAgJi5oaWdobGlnaHRlZC1lbmQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAjZmYyNTNhIGRhc2hlZCAxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hpbGQtZ3JvdXAge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBsZWZ0O1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC8vd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjbGVhcjogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDBzICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvL2NvbG9yOiAjNTA1MDUwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAvL2NvbG9yOiAjMDAyNTVjO1xyXG5cclxuICAudGFzay1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJi5yb290IHtcclxuICAgIC8vLnRhc2stY2hlY2tib3gge1xyXG4gICAgLy8gIGxlZnQ6IC0zM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gIH1cclxuXHJcbiAgJi52aXNpYmxlIHtcclxuICAgIGhlaWdodDogYXV0b1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLnZpc2libGUpIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuICB9XHJcblxyXG4gICYuZmlsdGVyZWQge1xyXG4gIH1cclxuXHJcbiAgJi5wYXJlbnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJl9ob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJl9hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogc2FuZHlicm93bjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBzYW5keWJyb3duICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YXNrLWNvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFzay1pdGVtIHtcclxuXHJcbiAgLnByb2R1Y3Rpb24tbmFtZSxcclxuICAucHJvZHVjdGlvbi1jb2RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAmLnRhc2staXRlbS1uYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDUwMDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAucHJvZHVjdGlvbi1uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZHVjdGlvbi1uYW1lX2hpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudGFzay1pdGVtLWNvZGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNTAxO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC5wcm9kdWN0aW9uLWNvZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9kdWN0aW9uLWNvZGVfaGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3Rpb24tbmFtZSxcclxuICAucHJvZHVjdGlvbi1jb2RlIHtcclxuICAgICZfaGlkZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB6LWluZGV4OiA1MDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lLXRhc2tzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcblxyXG4gIC50YXNrLXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDgwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XHJcblxyXG4gICAgJi5zbWFsbCB7XHJcbiAgICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6ICMwMDAgMCAwIDZweCAtMnB4LCAjMDAwIDBweCAtMnB4IDEwcHggLTVweCBpbnNldDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5kZXNlbGVjdGVkIHtcclxuICAgICAgLy9ib3gtc2hhZG93OiAjMDAwIDBweCAycHggMTBweCAtNXB4IGluc2V0O1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaXMtc2F2ZWQsXHJcbiAgICAmLmlzLXNhdmVkOmhvdmVyLFxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFNkM5O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWNoLW5hbWUge1xyXG4gICAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICZfc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcmFnLWhhbmRsZSB7XHJcbiAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgJi5kaXNhYmxlZDpub3QoOmhvdmVyKSB7XHJcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApIG9wYWNpdHkoMC4zKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmRpc2FibGVkOm5vdCg6aG92ZXIpLnNlbGVjdGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCkgb3BhY2l0eSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmRpc2FibGVkOm5vdCg6aG92ZXIpLmRlc2VsZWN0ZWQge1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBvcGFjaXR5KDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRhc2staW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGFzay10aW1lIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgJi5uZXctZGF0ZSB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjN2Y3ZjdmLCAjN2Y3ZjdmIDEwcHgsIHJnYigyMDMgMjAzIDIwMyAvIDAlKSAxMHB4LCByZ2IoMjAzIDIwMyAyMDMgLyAwJSkgMTZweClcclxuICB9XHJcblxyXG4gICYubmV3LWRhdGUtc21hbGxlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggZG90dGVkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLnBpLW1pbnVzLFxyXG4ucGktcGx1cyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucGktcGx1cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vdG9wOiAtMXB4O1xyXG59XHJcblxyXG4udGFzay1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLWxlZnQsXHJcbi5yZXNpemUtaGFuZGxlLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLnJlc2l6ZS1oYW5kbGUtbGVmdCB7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgJl9tZWRpdW0ge1xyXG4gICAgbGVmdDogLTZweDtcclxuICB9XHJcblxyXG4gICZfc21hbGwge1xyXG4gICAgbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLXJpZ2h0IHtcclxuICByaWdodDogMDtcclxuXHJcbiAgJl9tZWRpdW0ge1xyXG4gICAgcmlnaHQ6IC02cHg7XHJcbiAgfVxyXG5cclxuICAmX3NtYWxsIHtcclxuICAgIHJpZ2h0OiAtMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm5vdC1wbGFubmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjE3MTZkO1xyXG59XHJcblxyXG4uZGVmaWNpdF9ub3QtcGxhbm5lZCB7XHJcbiAgYmFja2dyb3VuZDogI2YxNzE2ZDtcclxufVxyXG5cclxuLmRlZmljaXRfcGxhbm5lZCB7XHJcbiAgYmFja2dyb3VuZDogI2YxNzE2ZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4ub3JkZXJlZC1vd24sXHJcbi5vcmRlcmVkLW93bi1wIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVjZjJlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5vcmRlcmVkLW91dHNvdXJjZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZWNmMmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9oYW5kLXNoYWtlLnN2Z1wiKTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLm9uLXN0b2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjYjdkNDcyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi50YXNrLXJlc2VydmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNhZjg5ZTc7XHJcbn1cclxuXHJcbi5wbGFubmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uZGF5cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG5cclxuICAmX2lzLXZhYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIH1cclxufVxyXG5cclxuLnJld29yayB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYjdkNDcyIDM4JSwgI2ZlY2YyZSA2NSUpICFpbXBvcnRhbnQ7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGUtZGlzYWJsZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhc2stYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICB0b3A6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICY6OmJlZm9yZSxcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 53285:
/*!*******************************************************!*\
  !*** ./src/app/manufacturing/manufacturing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingModule": () => (/* binding */ ManufacturingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _manufacturing_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manufacturing.routing */ 38408);
/* harmony import */ var _components_manufacturing_layout_manufacturing_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/manufacturing-layout/manufacturing-layout.component */ 57288);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _components_manufacturing_plan_list_manufacturing_plan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manufacturing-plan-list/manufacturing-plan-list.component */ 70961);
/* harmony import */ var _components_manufacturing_slice_tasks_manufacturing_slice_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manufacturing-slice-tasks/manufacturing-slice-tasks.component */ 71362);
/* harmony import */ var _components_manufacturing_employees_manufacturing_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manufacturing-employees/manufacturing-employees.component */ 97999);
/* harmony import */ var _modals_create_edit_employee_create_edit_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/create-edit-employee/create-edit-employee.component */ 88260);
/* harmony import */ var _components_manufacturing_positions_manufacturing_positions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manufacturing-positions/manufacturing-positions.component */ 78049);
/* harmony import */ var _modals_create_edit_position_create_edit_position_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/create-edit-position/create-edit-position.component */ 87838);
/* harmony import */ var _components_manufacturing_machines_manufacturing_machines_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manufacturing-machines/manufacturing-machines.component */ 38311);
/* harmony import */ var _modals_create_edit_machine_create_edit_machine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/create-edit-machine/create-edit-machine.component */ 49880);
/* harmony import */ var _components_manufacturing_order_statuses_manufacturing_order_statuses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manufacturing-order-statuses/manufacturing-order-statuses.component */ 56915);
/* harmony import */ var _components_manufacturing_orders_manufacturing_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manufacturing-orders/manufacturing-orders.component */ 87591);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/tristatecheckbox */ 61604);
/* harmony import */ var _components_manufacturing_order_page_manufacturing_order_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/manufacturing-order-page/manufacturing-order-page.component */ 47450);
/* harmony import */ var _components_manufacturing_order_page_manufacturing_order_page_print_manufacturing_order_page_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/manufacturing-order-page/manufacturing-order-page-print/manufacturing-order-page-print.component */ 66487);
/* harmony import */ var _components_manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/manufacturing-chart/manufacturing-chart.component */ 12188);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-resizable-element */ 84454);
/* harmony import */ var _components_manufaturing_list_product_production_manufacturing_list_product_production_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/manufaturing-list-product-production/manufacturing-list-product-production.component */ 74360);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _components_manufacturing_plan_manufacturing_plan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/manufacturing-plan/manufacturing-plan.component */ 30832);
/* harmony import */ var _modals_manufacturing_create_order_manufacturing_create_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/manufacturing-create-order/manufacturing-create-order.component */ 98721);
/* harmony import */ var _pickers_manufacturing_material_picker_manufacturing_material_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pickers/manufacturing-material-picker/manufacturing-material-picker.component */ 49838);
/* harmony import */ var _modals_manufacturing_task_edit_manufacturing_task_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modals/manufacturing-task-edit/manufacturing-task-edit.component */ 61634);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _modals_manufacturing_add_technology_manufacturing_add_technology_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/manufacturing-add-technology/manufacturing-add-technology.component */ 85070);
/* harmony import */ var _modals_manufacturing_tasks_edit_manufacturing_tasks_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/manufacturing-tasks-edit/manufacturing-tasks-edit.component */ 26741);
/* harmony import */ var _pickers_shift_by_types_shift_by_types_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pickers/shift-by-types/shift-by-types.component */ 5457);
/* harmony import */ var _modals_manufacturing_add_items_manufacturing_add_items_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/manufacturing-add-items/manufacturing-add-items.component */ 1406);
/* harmony import */ var _modals_manufacturing_picker_product_manufacturing_picker_product_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modals/manufacturing-picker-product/manufacturing-picker-product.component */ 52102);
/* harmony import */ var _components_manufacturing_all_plans_manufacturing_all_plans_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/manufacturing-all-plans/manufacturing-all-plans.component */ 12570);
/* harmony import */ var _modals_manufacturing_split_plan_manufacturing_split_plan_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/manufacturing-split-plan/manufacturing-split-plan.component */ 17142);
/* harmony import */ var _components_manufacturing_production_calendar_manufacturing_production_calendar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/manufacturing-production-calendar/manufacturing-production-calendar.component */ 22092);
/* harmony import */ var _components_manufacturing_order_page_manufacturing_order_products_info_print_manufacturing_order_products_info_print_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/manufacturing-order-page/manufacturing-order-products-info-print/manufacturing-order-products-info-print.component */ 25081);
/* harmony import */ var _modals_add_tasks_to_chain_add_tasks_to_chain_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modals/add-tasks-to-chain/add-tasks-to-chain.component */ 16349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_pickers_employee_position_picker_employee_position_picker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../shared/pickers/employee-position-picker/employee-position-picker.component */ 44493);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/checkbox */ 40749);



















































class ManufacturingModule {
}
ManufacturingModule.ɵfac = function ManufacturingModule_Factory(t) { return new (t || ManufacturingModule)(); };
ManufacturingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: ManufacturingModule });
ManufacturingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule,
        _manufacturing_routing__WEBPACK_IMPORTED_MODULE_0__.ManufacturingRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_35__.TriStateCheckboxModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_36__.ResizableModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_37__.DragDropModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_38__.AccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](ManufacturingModule, { declarations: [_components_manufacturing_layout_manufacturing_layout_component__WEBPACK_IMPORTED_MODULE_1__.ManufacturingLayoutComponent,
        _components_manufacturing_plan_list_manufacturing_plan_list_component__WEBPACK_IMPORTED_MODULE_4__.ManufacturingPlanListComponent,
        _components_manufacturing_slice_tasks_manufacturing_slice_tasks_component__WEBPACK_IMPORTED_MODULE_5__.ManufacturingSliceTasksComponent,
        _components_manufacturing_employees_manufacturing_employees_component__WEBPACK_IMPORTED_MODULE_6__.ManufacturingEmployeesComponent,
        _modals_create_edit_employee_create_edit_employee_component__WEBPACK_IMPORTED_MODULE_7__.CreateEditEmployeeComponent,
        _components_manufacturing_positions_manufacturing_positions_component__WEBPACK_IMPORTED_MODULE_8__.ManufacturingPositionsComponent,
        _modals_create_edit_position_create_edit_position_component__WEBPACK_IMPORTED_MODULE_9__.CreateEditPositionComponent,
        _components_manufacturing_machines_manufacturing_machines_component__WEBPACK_IMPORTED_MODULE_10__.ManufacturingMachinesComponent,
        _modals_create_edit_machine_create_edit_machine_component__WEBPACK_IMPORTED_MODULE_11__.CreateEditMachineComponent,
        _modals_add_tasks_to_chain_add_tasks_to_chain_component__WEBPACK_IMPORTED_MODULE_31__.AddTasksToChainComponent,
        _components_manufacturing_order_statuses_manufacturing_order_statuses_component__WEBPACK_IMPORTED_MODULE_12__.ManufacturingOrderStatusesComponent,
        _components_manufacturing_orders_manufacturing_orders_component__WEBPACK_IMPORTED_MODULE_13__.ManufacturingOrdersComponent,
        _components_manufacturing_order_page_manufacturing_order_page_component__WEBPACK_IMPORTED_MODULE_14__.ManufacturingOrderPageComponent,
        _components_manufacturing_order_page_manufacturing_order_page_print_manufacturing_order_page_print_component__WEBPACK_IMPORTED_MODULE_15__.ManufacturingOrderPagePrintComponent,
        _components_manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_16__.ManufacturingChartComponent,
        _components_manufaturing_list_product_production_manufacturing_list_product_production_component__WEBPACK_IMPORTED_MODULE_17__.ManufacturingListProductProductionComponent,
        _components_manufacturing_plan_manufacturing_plan_component__WEBPACK_IMPORTED_MODULE_18__.ManufacturingPlanComponent,
        _modals_manufacturing_create_order_manufacturing_create_order_component__WEBPACK_IMPORTED_MODULE_19__.ManufacturingCreateOrderComponent,
        _pickers_manufacturing_material_picker_manufacturing_material_picker_component__WEBPACK_IMPORTED_MODULE_20__.ManufacturingMaterialPickerComponent,
        _modals_manufacturing_task_edit_manufacturing_task_edit_component__WEBPACK_IMPORTED_MODULE_21__.ManufacturingTaskEditComponent,
        _modals_manufacturing_add_technology_manufacturing_add_technology_component__WEBPACK_IMPORTED_MODULE_22__.ManufacturingAddTechnologyComponent,
        _modals_manufacturing_tasks_edit_manufacturing_tasks_edit_component__WEBPACK_IMPORTED_MODULE_23__.ManufacturingTasksEditComponent,
        _pickers_shift_by_types_shift_by_types_component__WEBPACK_IMPORTED_MODULE_24__.ShiftByTypesComponent,
        _modals_manufacturing_add_items_manufacturing_add_items_component__WEBPACK_IMPORTED_MODULE_25__.ManufacturingAddItemsComponent,
        _modals_manufacturing_picker_product_manufacturing_picker_product_component__WEBPACK_IMPORTED_MODULE_26__.ManufacturingPickerProductComponent,
        _components_manufacturing_all_plans_manufacturing_all_plans_component__WEBPACK_IMPORTED_MODULE_27__.ManufacturingAllPlansComponent,
        _modals_manufacturing_split_plan_manufacturing_split_plan_component__WEBPACK_IMPORTED_MODULE_28__.ManufacturingSplitPlanComponent,
        _components_manufacturing_production_calendar_manufacturing_production_calendar_component__WEBPACK_IMPORTED_MODULE_29__.ManufacturingProductionCalendarComponent,
        _components_manufacturing_order_page_manufacturing_order_products_info_print_manufacturing_order_products_info_print_component__WEBPACK_IMPORTED_MODULE_30__.ManufacturingOrderProductsInfoPrintComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule,
        _manufacturing_routing__WEBPACK_IMPORTED_MODULE_0__.ManufacturingRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_35__.TriStateCheckboxModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_36__.ResizableModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_37__.DragDropModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_38__.AccordionModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetComponentScope"](_modals_create_edit_employee_create_edit_employee_component__WEBPACK_IMPORTED_MODULE_7__.CreateEditEmployeeComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_39__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_41__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogActions, primeng_calendar__WEBPACK_IMPORTED_MODULE_43__.Calendar, _shared_pickers_employee_position_picker_employee_position_picker_component__WEBPACK_IMPORTED_MODULE_32__.EmployeePositionPickerComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetComponentScope"](_components_manufacturing_chart_manufacturing_chart_component__WEBPACK_IMPORTED_MODULE_16__.ManufacturingChartComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_39__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgControlStatus, primeng_tooltip__WEBPACK_IMPORTED_MODULE_44__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_45__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_46__.MultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgSwitchDefault, angular_resizable_element__WEBPACK_IMPORTED_MODULE_36__.ResizableDirective, angular_resizable_element__WEBPACK_IMPORTED_MODULE_36__.ResizeHandleDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_37__.CdkDragHandle, _components_manufaturing_list_product_production_manufacturing_list_product_production_component__WEBPACK_IMPORTED_MODULE_17__.ManufacturingListProductProductionComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_34__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_34__.KeyValuePipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetComponentScope"](_modals_manufacturing_create_order_manufacturing_create_order_component__WEBPACK_IMPORTED_MODULE_19__.ManufacturingCreateOrderComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_39__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgControlStatus, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_41__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_47__.Checkbox, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _pickers_manufacturing_material_picker_manufacturing_material_picker_component__WEBPACK_IMPORTED_MODULE_20__.ManufacturingMaterialPickerComponent], []);


/***/ }),

/***/ 38408:
/*!********************************************************!*\
  !*** ./src/app/manufacturing/manufacturing.routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingRouting": () => (/* binding */ ManufacturingRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_manufacturing_layout_manufacturing_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/manufacturing-layout/manufacturing-layout.component */ 57288);
/* harmony import */ var _components_manufacturing_plan_list_manufacturing_plan_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/manufacturing-plan-list/manufacturing-plan-list.component */ 70961);
/* harmony import */ var _components_manufacturing_slice_tasks_manufacturing_slice_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/manufacturing-slice-tasks/manufacturing-slice-tasks.component */ 71362);
/* harmony import */ var _components_manufacturing_employees_manufacturing_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/manufacturing-employees/manufacturing-employees.component */ 97999);
/* harmony import */ var _components_manufacturing_positions_manufacturing_positions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manufacturing-positions/manufacturing-positions.component */ 78049);
/* harmony import */ var _components_manufacturing_machines_manufacturing_machines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manufacturing-machines/manufacturing-machines.component */ 38311);
/* harmony import */ var _components_manufacturing_order_statuses_manufacturing_order_statuses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manufacturing-order-statuses/manufacturing-order-statuses.component */ 56915);
/* harmony import */ var _components_manufacturing_orders_manufacturing_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/manufacturing-orders/manufacturing-orders.component */ 87591);
/* harmony import */ var _components_manufacturing_order_page_manufacturing_order_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manufacturing-order-page/manufacturing-order-page.component */ 47450);
/* harmony import */ var _components_manufacturing_plan_manufacturing_plan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manufacturing-plan/manufacturing-plan.component */ 30832);
/* harmony import */ var _components_manufacturing_all_plans_manufacturing_all_plans_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manufacturing-all-plans/manufacturing-all-plans.component */ 12570);
/* harmony import */ var _components_manufacturing_production_calendar_manufacturing_production_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manufacturing-production-calendar/manufacturing-production-calendar.component */ 22092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [
    {
        path: '',
        component: _components_manufacturing_layout_manufacturing_layout_component__WEBPACK_IMPORTED_MODULE_0__.ManufacturingLayoutComponent,
        children: [
            { path: '', redirectTo: 'plans', pathMatch: 'full' },
            {
                path: 'plans',
                children: [
                    { path: '', title: 'Plans', component: _components_manufacturing_plan_list_manufacturing_plan_list_component__WEBPACK_IMPORTED_MODULE_1__.ManufacturingPlanListComponent },
                    { path: 'plan/:rootId', title: 'Plan', component: _components_manufacturing_plan_manufacturing_plan_component__WEBPACK_IMPORTED_MODULE_9__.ManufacturingPlanComponent },
                    { path: 'all', title: 'All Plans', component: _components_manufacturing_all_plans_manufacturing_all_plans_component__WEBPACK_IMPORTED_MODULE_10__.ManufacturingAllPlansComponent },
                ]
            },
            {
                path: 'orders',
                children: [
                    { path: '', title: 'Execution Orders', component: _components_manufacturing_orders_manufacturing_orders_component__WEBPACK_IMPORTED_MODULE_7__.ManufacturingOrdersComponent },
                    { path: 'order/:id', title: 'Order', component: _components_manufacturing_order_page_manufacturing_order_page_component__WEBPACK_IMPORTED_MODULE_8__.ManufacturingOrderPageComponent },
                ]
            },
            { path: 'slice-tasks', title: 'Slice Tasks', component: _components_manufacturing_slice_tasks_manufacturing_slice_tasks_component__WEBPACK_IMPORTED_MODULE_2__.ManufacturingSliceTasksComponent },
            { path: 'employees', title: 'Employees', component: _components_manufacturing_employees_manufacturing_employees_component__WEBPACK_IMPORTED_MODULE_3__.ManufacturingEmployeesComponent },
            { path: 'positions', title: 'Positions', component: _components_manufacturing_positions_manufacturing_positions_component__WEBPACK_IMPORTED_MODULE_4__.ManufacturingPositionsComponent },
            { path: 'machines', title: 'Machines', component: _components_manufacturing_machines_manufacturing_machines_component__WEBPACK_IMPORTED_MODULE_5__.ManufacturingMachinesComponent },
            { path: 'order-statuses', title: 'Order Statuses', component: _components_manufacturing_order_statuses_manufacturing_order_statuses_component__WEBPACK_IMPORTED_MODULE_6__.ManufacturingOrderStatusesComponent },
            { path: 'production-calendar', title: 'Production Calendar', component: _components_manufacturing_production_calendar_manufacturing_production_calendar_component__WEBPACK_IMPORTED_MODULE_11__.ManufacturingProductionCalendarComponent },
        ]
    }
];
class ManufacturingRouting {
}
ManufacturingRouting.ɵfac = function ManufacturingRouting_Factory(t) { return new (t || ManufacturingRouting)(); };
ManufacturingRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ManufacturingRouting });
ManufacturingRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ManufacturingRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 13492:
/*!*****************************************************************!*\
  !*** ./src/app/manufacturing/models/list-product-production.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProductProduction": () => (/* binding */ ListProductProduction)
/* harmony export */ });
class ListProductProduction {
    constructor(config) {
        this.products = [];
        this.tasks = [];
        /** Используется для фильтрации в списке */
        this.isFiltered = true;
        /** Используется для фильтрации в списке (видно в том числе родительские isFiltered) */
        this.isVisible = true;
        /** Свёрнута ли ветка дерева */
        this.isExpanded = true;
        /** Наведение на элемент */
        this.isHover = false;
        /** Выбрана в списке */
        this.isSelected = true;
        /** Выбрана для развертывания / свертывания */
        this.isActive = false;
        this.isRootProductionCompleted = false;
        this.children = [];
        /** Группируем дочерние элементы, чтобы у них был общий цветной прямоугольник */
        this.groups = [];
        if (config) {
            Object.assign(this, config);
        }
    }
    get hasChildren() {
        return Boolean(this.children.length || !this.parent);
    }
    getChildrenEnd() {
        return new Date(Math.max(...this.children
            .map(child => child.tasks)
            .flat()
            .map(task => task.end_date.getTime())));
    }
    get isBlocked() {
        return this.tasks
            .map(p => p.tasks)
            .flat()
            .some(t => t.status === 'On stock') && !this.isRootProductionCompleted && this.tasks.some(t => !t.created_orders.length);
    }
    getEnd() {
        return new Date(Math.max(...this.tasks
            .map(t => t.tasks)
            .flat()
            .map(task => task.end_date.getTime())));
    }
    updateGroups() {
        this.groups = [];
        for (const child of this.children) {
            // разбиваем всего на 2 группы: с дочерними, без дочерних
            const groupIndex = child.product.nomenclature.type === '1' ? 0 : 1;
            this.groups[groupIndex] = this.groups[groupIndex] ?? [];
            this.groups[groupIndex].push(child);
        }
    }
}


/***/ }),

/***/ 49838:
/*!****************************************************************************************************************!*\
  !*** ./src/app/manufacturing/pickers/manufacturing-material-picker/manufacturing-material-picker.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingMaterialPickerComponent": () => (/* binding */ ManufacturingMaterialPickerComponent),
/* harmony export */   "MaterialRequest": () => (/* binding */ MaterialRequest)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../warehouse/services/warehouse-product.service */ 8200);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);







function ManufacturingMaterialPickerComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Search In Warehouse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManufacturingMaterialPickerComponent_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Change Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManufacturingMaterialPickerComponent_div_8_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", material_r1.warehouseProduct.nomenclature.name, " (", material_r1.warehouseProduct.nomenclature.code, ") Quantity: ", material_r1.warehouseProduct.total_locator_quantity, " ");
} }
function ManufacturingMaterialPickerComponent_div_8_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManufacturingMaterialPickerComponent_div_8_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const material_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.removeMaterial(material_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ManufacturingMaterialPickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManufacturingMaterialPickerComponent_div_8_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const material_r1 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.warehouseSearch(material_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ManufacturingMaterialPickerComponent_div_8_span_3_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ManufacturingMaterialPickerComponent_div_8_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ManufacturingMaterialPickerComponent_div_8_span_5_Template, 2, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14)(7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ManufacturingMaterialPickerComponent_div_8_Template_input_ngModelChange_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const material_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](material_r1.quantity = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ManufacturingMaterialPickerComponent_div_8_button_9_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const material_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !material_r1.warehouseProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", material_r1.warehouseProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", material_r1.warehouseProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", material_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", index_r2);
} }
class MaterialRequest {
}
class ManufacturingMaterialPickerComponent {
    constructor(modalService, warehouseProductService) {
        this.modalService = modalService;
        this.warehouseProductService = warehouseProductService;
        this.materials = [];
        this.materialsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        if (!this.materials.length) {
            this.addMaterial();
        }
    }
    addMaterial() {
        this.materials.push({ warehouseProduct: null, quantity: 1 });
    }
    removeMaterial(material) {
        const index = this.materials.indexOf(material);
        this.materials.splice(index, 1);
    }
    warehouseSearch(material) {
        this.warehouseProductService.openSearchInWarehouseModal().subscribe(product => {
            if (product) {
                material.warehouseProduct = product;
                this.materialsChange.emit(this.materials);
            }
        });
    }
}
ManufacturingMaterialPickerComponent.ɵfac = function ManufacturingMaterialPickerComponent_Factory(t) { return new (t || ManufacturingMaterialPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_warehouse_services_warehouse_product_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseProductService)); };
ManufacturingMaterialPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManufacturingMaterialPickerComponent, selectors: [["pek-manufacturing-material-picker"]], inputs: { materials: "materials" }, outputs: { materialsChange: "materialsChange" }, decls: 14, vars: 1, consts: [[1, "row", "header"], [1, "col-9"], [1, "col-2", "pl-0", 2, "margin-left", "-7px"], [1, "row"], ["class", "col-12 row pt-3 align-items-center", 4, "ngFor", "ngForOf"], [1, "pl-3", "row", "mt-3"], [1, "btn-pick"], [1, "btn-picker", "btn-picker-add", 3, "click"], [1, "pi", "pi-plus"], [1, "col-12", "row", "pt-3", "align-items-center"], [1, "col-9", "warehouse-product"], [1, "btn-picker", 3, "click"], [4, "ngIf"], ["class", "material-name", 4, "ngIf"], [1, "col-2"], ["min", "1", "type", "number", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "col-1"], ["class", "btn-picker btn-danger btn-picker-danger", 3, "click", 4, "ngIf"], [1, "material-name"], [1, "btn-picker", "btn-danger", "btn-picker-danger", 3, "click"], [1, "fas", "fa-minus"]], template: function ManufacturingMaterialPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Warehouse Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ManufacturingMaterialPickerComponent_div_8_Template, 10, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManufacturingMaterialPickerComponent_Template_a_click_11_listener() { return ctx.addMaterial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Add New Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.materials);
    } }, dependencies: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.btn-search[_ngcontent-%COMP%] {\n  height: 32px;\n  flex: 0 0 162px;\n  margin-right: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.col-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  width: 10rem;\n}\n\n.warehouse-product[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 30px;\n}\n\n.material-name[_ngcontent-%COMP%] {\n  max-width: 440px;\n  padding: 0 20px;\n}\n\n.btn-picker[_ngcontent-%COMP%] {\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.btn-picker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.btn-pick[_ngcontent-%COMP%] {\n  padding-left: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVmYWN0dXJpbmctbWF0ZXJpYWwtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoibWFudWZhY3R1cmluZy1tYXRlcmlhbC1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZmxleDogMCAwIDE2MnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNvbC0yIHtcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogMTByZW07XHJcbn1cclxuXHJcbi53YXJlaG91c2UtcHJvZHVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLW5hbWUge1xyXG4gIG1heC13aWR0aDogNDQwcHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uYnRuLXBpY2tlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tcGljayB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyN3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 43062:
/*!************************************************************!*\
  !*** ./src/app/manufacturing/services/calendar.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": () => (/* binding */ CalendarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class CalendarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production_url;
        this.calendar = new Set();
        this.calendarWeekendDays = [0, 6]; // выходные суббота и воскресенье
        this.getDates().subscribe((dates) => {
            const holidaysDates = dates.map(date => {
                const dd = new Date(date.date).setHours(0, 0, 0, 0);
                return {
                    ...date,
                    date: new Date(dd),
                };
            });
            this.calendar = new Set(holidaysDates.map(d => new Date(d.date).getTime()));
        });
    }
    saveDates(dates) {
        return this.httpClient.post(this.API_URL + 'holidays/bulk_create/', dates).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    getDates() {
        return this.httpClient.get(this.API_URL + 'holidays/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    deleteDates(holidays) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...holidays.map(holiday => this.httpClient.delete(this.API_URL + 'holidays/' + `${holiday.id}/`, holiday.id)));
    }
    isVac(date) {
        const dow = date.getDay();
        let isVac = this.calendarWeekendDays.includes(dow);
        if (this.calendar.has(date.getTime()))
            isVac = !isVac;
        return isVac;
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CalendarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89723:
/*!*******************************************!*\
  !*** ./src/app/shared/enums/view-mode.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMode": () => (/* binding */ ViewMode)
/* harmony export */ });
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["LIST"] = 0] = "LIST";
    ViewMode[ViewMode["HIERARCHY"] = 1] = "HIERARCHY";
})(ViewMode || (ViewMode = {}));


/***/ }),

/***/ 21339:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 5716);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 78947);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 5716:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayWhen": () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 54240);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 59295);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 90023);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapTo */ 73);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 51353);





function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
  }

  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => delayDurationSelector(value, index).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_4__.mapTo)(value)));
}

/***/ }),

/***/ 90023:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ignoreElements": () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 99635);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
  });
}

/***/ }),

/***/ 84454:
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/fesm2020/angular-resizable-element.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizableDirective": () => (/* binding */ ResizableDirective),
/* harmony export */   "ResizableModule": () => (/* binding */ ResizableModule),
/* harmony export */   "ResizeHandleDirective": () => (/* binding */ ResizeHandleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);





/**
 * @hidden
 */

const IS_TOUCH_DEVICE = (() => {
  // In case we're in Node.js environment.
  if (typeof window === 'undefined') {
    return false;
  } else {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
})();
/** Creates a deep clone of an element. */


function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

  clone.removeAttribute('id');
  descendantsWithId.forEach(descendant => {
    descendant.removeAttribute('id');
  });

  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }

  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */


function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);

  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);

    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
} // Counter for unique cloned radio button names.


let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */

function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  } // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.


  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */


function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');

  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch {}
  }
}

function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  const newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };

  if (edges.top) {
    newBoundingRect.top += clientY;
  }

  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }

  if (edges.left) {
    newBoundingRect.left += clientX;
  }

  if (edges.right) {
    newBoundingRect.right += clientX;
  }

  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}

function getElementRect(element, ghostElementPositioning) {
  let translateX = 0;
  let translateY = 0;
  const style = element.nativeElement.style;
  const transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
  const transform = transformProperties.map(property => style[property]).find(value => !!value);

  if (transform && transform.includes('translate')) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
  }

  if (ghostElementPositioning === 'absolute') {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}

const DEFAULT_RESIZE_CURSORS = Object.freeze({
  topLeft: 'nw-resize',
  topRight: 'ne-resize',
  bottomLeft: 'sw-resize',
  bottomRight: 'se-resize',
  leftOrRight: 'col-resize',
  topOrBottom: 'row-resize'
});

function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return '';
  }
}

function getEdgesDiff({
  edges,
  initialRectangle,
  newRectangle
}) {
  const edgesDiff = {};
  Object.keys(edges).forEach(edge => {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}

const RESIZE_ACTIVE_CLASS = 'resize-active';
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */

class ResizableDirective {
  /**
   * @hidden
   */
  constructor(platformId, renderer, elm, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.elm = elm;
    this.zone = zone;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     */

    this.enableGhostResize = false;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     */

    this.resizeSnapGrid = {};
    /**
     * The mouse cursors that will be set on the resize edges
     */

    this.resizeCursors = DEFAULT_RESIZE_CURSORS;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     */

    this.ghostElementPositioning = 'fixed';
    /**
     * Allow elements to be resized to negative dimensions
     */

    this.allowNegativeResizes = false;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     */

    this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     */

    this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     */

    this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     */

    this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @hidden
     */

    this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */

    this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */

    this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
  }
  /**
   * @hidden
   */


  ngOnInit() {
    const mousedown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerDown, this.mousedown);
    const mousemove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerMove, this.mousemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
      event
    }) => {
      if (currentResize) {
        try {
          event.preventDefault();
        } catch (e) {// just adding try-catch not to see errors in console if there is a passive listener for same event somewhere
          // browser does nothing except of writing errors to console
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    const mouseup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerUp, this.mouseup);
    let currentResize;

    const removeGhostElement = () => {
      if (currentResize && currentResize.clonedNode) {
        this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
      }
    };

    const getResizeCursors = () => {
      return { ...DEFAULT_RESIZE_CURSORS,
        ...this.resizeCursors
      };
    };

    const mousedrag = mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(startCoords => {
      function getDiff(moveCoords) {
        return {
          clientX: moveCoords.clientX - startCoords.clientX,
          clientY: moveCoords.clientY - startCoords.clientY
        };
      }

      const getSnapGrid = () => {
        const snapGrid = {
          x: 1,
          y: 1
        };

        if (currentResize) {
          if (this.resizeSnapGrid.left && currentResize.edges.left) {
            snapGrid.x = +this.resizeSnapGrid.left;
          } else if (this.resizeSnapGrid.right && currentResize.edges.right) {
            snapGrid.x = +this.resizeSnapGrid.right;
          }

          if (this.resizeSnapGrid.top && currentResize.edges.top) {
            snapGrid.y = +this.resizeSnapGrid.top;
          } else if (this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
            snapGrid.y = +this.resizeSnapGrid.bottom;
          }
        }

        return snapGrid;
      };

      function getGrid(coords, snapGrid) {
        return {
          x: Math.ceil(coords.clientX / snapGrid.x),
          y: Math.ceil(coords.clientY / snapGrid.y)
        };
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(coords => [, coords])), mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.pairwise)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([previousCoords, newCoords]) => {
        return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(([previousCoords, newCoords]) => {
        if (!previousCoords) {
          return true;
        }

        const snapGrid = getSnapGrid();
        const previousGrid = getGrid(previousCoords, snapGrid);
        const newGrid = getGrid(newCoords, snapGrid);
        return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([, newCoords]) => {
        const snapGrid = getSnapGrid();
        return {
          clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
          clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
        };
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mouseup$, mousedown$)));
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(() => !!currentResize));
    mousedrag.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      clientX,
      clientY
    }) => {
      return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(newBoundingRect => {
      return this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(newBoundingRect => {
      return this.validateResize ? this.validateResize({
        rectangle: newBoundingRect,
        edges: getEdgesDiff({
          edges: currentResize.edges,
          initialRectangle: currentResize.startingRect,
          newRectangle: newBoundingRect
        })
      }) : true;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(newBoundingRect => {
      if (currentResize && currentResize.clonedNode) {
        this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
      }

      if (this.resizing.observers.length > 0) {
        this.zone.run(() => {
          this.resizing.emit({
            edges: getEdgesDiff({
              edges: currentResize.edges,
              initialRectangle: currentResize.startingRect,
              newRectangle: newBoundingRect
            }),
            rectangle: newBoundingRect
          });
        });
      }

      currentResize.currentRect = newBoundingRect;
    });
    mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      edges
    }) => {
      return edges || {};
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(edges => {
      return Object.keys(edges).length > 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(edges => {
      if (currentResize) {
        removeGhostElement();
      }

      const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
      currentResize = {
        edges,
        startingRect,
        currentRect: startingRect
      };
      const resizeCursors = getResizeCursors();
      const cursor = getResizeCursor(currentResize.edges, resizeCursors);
      this.renderer.setStyle(document.body, 'cursor', cursor);
      this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);

      if (this.enableGhostResize) {
        currentResize.clonedNode = deepCloneNode(this.elm.nativeElement);
        this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
        this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
        this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
        this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
        currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
        currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
      }

      if (this.resizeStart.observers.length > 0) {
        this.zone.run(() => {
          this.resizeStart.emit({
            edges: getEdgesDiff({
              edges,
              initialRectangle: startingRect,
              newRectangle: startingRect
            }),
            rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
          });
        });
      }
    });
    mouseup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      if (currentResize) {
        this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');

        if (this.resizeEnd.observers.length > 0) {
          this.zone.run(() => {
            this.resizeEnd.emit({
              edges: getEdgesDiff({
                edges: currentResize.edges,
                initialRectangle: currentResize.startingRect,
                newRectangle: currentResize.currentRect
              }),
              rectangle: currentResize.currentRect
            });
          });
        }

        removeGhostElement();
        currentResize = null;
      }
    });
  }
  /**
   * @hidden
   */


  ngOnDestroy() {
    // browser check for angular universal, because it doesn't know what document is
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.isPlatformBrowser)(this.platformId)) {
      this.renderer.setStyle(document.body, 'cursor', '');
    }

    this.mousedown.complete();
    this.mouseup.complete();
    this.mousemove.complete();
    this.destroy$.next();
  }

  setElementClass(elm, name, add) {
    if (add) {
      this.renderer.addClass(elm.nativeElement, name);
    } else {
      this.renderer.removeClass(elm.nativeElement, name);
    }
  }

}

ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
  return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

ResizableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizableDirective,
  selectors: [["", "mwlResizable", ""]],
  inputs: {
    validateResize: "validateResize",
    enableGhostResize: "enableGhostResize",
    resizeSnapGrid: "resizeSnapGrid",
    resizeCursors: "resizeCursors",
    ghostElementPositioning: "ghostElementPositioning",
    allowNegativeResizes: "allowNegativeResizes",
    mouseMoveThrottleMS: "mouseMoveThrottleMS"
  },
  outputs: {
    resizeStart: "resizeStart",
    resizing: "resizing",
    resizeEnd: "resizeEnd"
  },
  exportAs: ["mwlResizable"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mwlResizable]',
      exportAs: 'mwlResizable'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    validateResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableGhostResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeSnapGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeCursors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ghostElementPositioning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowNegativeResizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mouseMoveThrottleMS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resizing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class PointerEventListeners {
  constructor(renderer, zone) {
    this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseDown;
      let unsubscribeTouchStart;
      zone.runOutsideAngular(() => {
        unsubscribeMouseDown = renderer.listen('document', 'mousedown', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart = renderer.listen('document', 'touchstart', event => {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseDown();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseMove;
      let unsubscribeTouchMove;
      zone.runOutsideAngular(() => {
        unsubscribeMouseMove = renderer.listen('document', 'mousemove', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove = renderer.listen('document', 'touchmove', event => {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseMove();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseUp;
      let unsubscribeTouchEnd;
      let unsubscribeTouchCancel;
      zone.runOutsideAngular(() => {
        unsubscribeMouseUp = renderer.listen('document', 'mouseup', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd = renderer.listen('document', 'touchend', event => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
          unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', event => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseUp();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd();
          unsubscribeTouchCancel();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
  }

  static getInstance(renderer, zone) {
    if (!PointerEventListeners.instance) {
      PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
    }

    return PointerEventListeners.instance;
  }

}
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */


class ResizeHandleDirective {
  constructor(renderer, element, zone, resizableDirective) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.resizableDirective = resizableDirective;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     */

    this.resizeEdges = {};
    this.eventListeners = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listenOnTheHost('mousedown').subscribe(event => {
        this.onMousedown(event, event.clientX, event.clientY);
      });
      this.listenOnTheHost('mouseup').subscribe(event => {
        this.onMouseup(event.clientX, event.clientY);
      });

      if (IS_TOUCH_DEVICE) {
        this.listenOnTheHost('touchstart').subscribe(event => {
          this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.listenOnTheHost('touchend'), this.listenOnTheHost('touchcancel')).subscribe(event => {
          this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.unsubscribeEventListeners();
  }
  /**
   * @hidden
   */


  onMousedown(event, clientX, clientY) {
    event.preventDefault();

    if (!this.eventListeners.touchmove) {
      this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', touchMoveEvent => {
        this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
      });
    }

    if (!this.eventListeners.mousemove) {
      this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', mouseMoveEvent => {
        this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
      });
    }

    this.resizable.mousedown.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  /**
   * @hidden
   */


  onMouseup(clientX, clientY) {
    this.unsubscribeEventListeners();
    this.resizable.mouseup.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  } // directive might be passed from DI or as an input


  get resizable() {
    return this.resizableDirective || this.resizableContainer;
  }

  onMousemove(event, clientX, clientY) {
    this.resizable.mousemove.next({
      clientX,
      clientY,
      edges: this.resizeEdges,
      event
    });
  }

  unsubscribeEventListeners() {
    Object.keys(this.eventListeners).forEach(type => {
      this.eventListeners[type]();
      delete this.eventListeners[type];
    });
  }

  listenOnTheHost(eventName) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(this.element.nativeElement, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$));
  }

}

ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
  return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ResizableDirective, 8));
};

ResizeHandleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeHandleDirective,
  selectors: [["", "mwlResizeHandle", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    resizableContainer: "resizableContainer"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeHandleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mwlResizeHandle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: ResizableDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    resizeEdges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizableContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ResizableModule {}

ResizableModule.ɵfac = function ResizableModule_Factory(t) {
  return new (t || ResizableModule)();
};

ResizableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ResizableModule
});
ResizableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [ResizableDirective, ResizeHandleDirective],
      exports: [ResizableDirective, ResizeHandleDirective]
    }]
  }], null, null);
})();
/*
 * Public API Surface of angular-resizable-element
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_manufacturing_manufacturing_module_ts.js.map