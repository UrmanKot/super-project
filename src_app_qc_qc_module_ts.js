"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_qc_qc_module_ts"],{

/***/ 16195:
/*!*******************************************************!*\
  !*** ./src/app/procurement/models/invoice-product.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceProductQualityControl": () => (/* binding */ EInvoiceProductQualityControl),
/* harmony export */   "InvoiceProduct": () => (/* binding */ InvoiceProduct)
/* harmony export */ });
class InvoiceProduct {
}
var EInvoiceProductQualityControl;
(function (EInvoiceProductQualityControl) {
    EInvoiceProductQualityControl[EInvoiceProductQualityControl["NOT_PASSED"] = 0] = "NOT_PASSED";
    EInvoiceProductQualityControl[EInvoiceProductQualityControl["PASSED"] = 1] = "PASSED";
    EInvoiceProductQualityControl[EInvoiceProductQualityControl["PARTLY_PASSED"] = 2] = "PARTLY_PASSED";
})(EInvoiceProductQualityControl || (EInvoiceProductQualityControl = {}));


/***/ }),

/***/ 82155:
/*!****************************************************************!*\
  !*** ./src/app/qc/components/protocols/protocols.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolsComponent": () => (/* binding */ ProtocolsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 35330);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_protocol_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/protocol.service */ 25703);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/paginator */ 42722);















const _c0 = ["paginator"];
const _c1 = ["dt"];

function ProtocolsComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Protocol to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ProtocolsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function ProtocolsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const protocol_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", protocol_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](protocol_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](protocol_r8.comment);
  }
}

function ProtocolsComponent_ng_template_20_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
  }
}

function ProtocolsComponent_ng_template_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ProtocolsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProtocolsComponent_ng_template_20_i_2_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProtocolsComponent_ng_template_20_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
  }
}

function ProtocolsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ProtocolsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p-paginator", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function ProtocolsComponent_div_22_Template_p_paginator_onPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProtocolsComponent_div_22_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.onShowAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r6.protocolsCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r6.protocolsCount);
  }
}

function ProtocolsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "p-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProtocolsComponent_div_23_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onShowAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

let ProtocolsComponent = class ProtocolsComponent {
  constructor(protocolService, modalService) {
    this.protocolService = protocolService;
    this.modalService = modalService;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.menuItems = [{
      label: 'Selected Protocol',
      items: [{
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editProtocol()
      }, {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeProtocol()
      }]
    }];
    this.isLoading = true;
    this.isShowAll = false;
    this.protocolsCount = 0;
    this.isStartFirstPage = false;
    this.currentPage = 1;
    this.query = [{
      name: 'paginated',
      value: true
    }, {
      name: 'page',
      value: this.currentPage
    }];
    this.protocols$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => !this.isShowAll, this.protocolService.getForPagination(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(response => this.protocolsCount = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => response.results)), this.protocolService.get(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(products => this.protocolsCount = products.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(protocols => protocols)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this));
  }

  ngOnInit() {}

  paginate(event) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onShowAll(value) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  prepareForSearch() {
    this.selectedProtocol = null;
    this.query = [{
      name: 'page',
      value: this.currentPage
    }];

    if (!this.isShowAll) {
      this.query.push({
        name: 'paginated',
        value: true
      });
    }
  }

  removeProtocol() {
    this.modalService.confirm('danger').subscribe(res => {
      if (res) {
        this.protocolService.deleteProtocol(this.selectedProtocol.id).subscribe(() => this.search$.next());
        this.selectedProtocol = null;
      }
    });
  }

  onCreateProtocol() {
    this.protocolService.createEditProtocolModal('create').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(value => Boolean(value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.search$.next())).subscribe();
  }

  editProtocol() {
    this.protocolService.createEditProtocolModal('edit', this.selectedProtocol).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(value => Boolean(value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.search$.next())).subscribe();
  }

};

ProtocolsComponent.ɵfac = function ProtocolsComponent_Factory(t) {
  return new (t || ProtocolsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_protocol_service__WEBPACK_IMPORTED_MODULE_0__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService));
};

ProtocolsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProtocolsComponent,
  selectors: [["pek-protocols"]],
  viewQuery: function ProtocolsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
    }
  },
  decls: 24,
  vars: 15,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Protocol", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19rem)", 3, "value", "rows", "scrollable", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "45%"], [2, "width", "50%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]],
  template: function ProtocolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Protocols");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProtocolsComponent_Template_button_click_7_listener() {
        return ctx.onCreateProtocol();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "form")(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProtocolsComponent_p_12_Template, 2, 0, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "p-menubar", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "p-table", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ProtocolsComponent_Template_p_table_selectionChange_15_listener($event) {
        return ctx.selectedProtocol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProtocolsComponent_ng_template_18_Template, 7, 0, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ProtocolsComponent_ng_template_19_Template, 7, 4, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ProtocolsComponent_ng_template_20_Template, 4, 3, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ProtocolsComponent_div_21_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProtocolsComponent_div_22_Template, 5, 4, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ProtocolsComponent_div_23_Template, 3, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "quality-control")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedProtocol);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.selectedProtocol);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 13, ctx.protocols$))("rows", 10)("scrollable", true)("selection", ctx.selectedProtocol);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, primeng_menubar__WEBPACK_IMPORTED_MODULE_15__.Menubar, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_17__.Paginator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["form[_ngcontent-%COMP%] {\n  padding: 0 0 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvY29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoicHJvdG9jb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgcGFkZGluZzogMCAwIDAuNzVyZW07XHJcbn1cclxuIl19 */"]
});
ProtocolsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()], ProtocolsComponent);


/***/ }),

/***/ 60716:
/*!******************************************************************!*\
  !*** ./src/app/qc/components/qc-invoice/qc-invoice.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcInvoiceComponent": () => (/* binding */ QcInvoiceComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../qr-code/qr-code.service */ 32527);
/* harmony import */ var _services_qc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/qc.service */ 7630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_album_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/album.service */ 96667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);

















function QcInvoiceComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function QcInvoiceComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_20_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Choose the Product to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, QcInvoiceComponent_ng_template_20_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_20_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.onShowImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_20_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.onQualityControl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.selectedInvoiceProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedInvoiceProducts.length === 0 || ctx_r3.selectedInvoiceProducts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedInvoiceProducts.length === 0 || ctx_r3.selectedInvoiceProducts.length > 1);
  }
}

function QcInvoiceComponent_ng_template_21_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_21_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_21_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 38)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-tableCheckbox", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, QcInvoiceComponent_ng_template_21_span_20_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, QcInvoiceComponent_ng_template_21_span_21_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, QcInvoiceComponent_ng_template_21_span_22_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r21 = ctx.$implicit;
    const i_r22 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pSelectableRow", product_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", product_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.current_technology == null ? null : product_r21.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.nomenclature.category ? product_r21.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r21.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r21.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r21.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r21.quality_control == 0);
  }
}

function QcInvoiceComponent_ng_template_22_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 49);
  }
}

function QcInvoiceComponent_ng_template_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, QcInvoiceComponent_ng_template_22_i_2_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, QcInvoiceComponent_ng_template_22_span_3_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r5.isLoadingProducts);
  }
}

function QcInvoiceComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_23_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r1.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51)(1, "p-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_div_24_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r1.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_32_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Choose the Technical Equipment to Quality Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, QcInvoiceComponent_ng_template_32_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_32_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.onQualityControlTechnicalEquipment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r10.selectedTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r10.isLoadingTechnicalEquipment || !ctx_r10.selectedTechnicalEquipment);
  }
}

function QcInvoiceComponent_ng_template_33_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_33_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_33_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 38)(1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, QcInvoiceComponent_ng_template_33_span_16_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, QcInvoiceComponent_ng_template_33_span_17_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, QcInvoiceComponent_ng_template_33_span_18_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r35 = ctx.$implicit;
    const i_r36 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pSelectableRow", product_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r36 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r35.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r35.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r35.nomenclature.category ? product_r35.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r35.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r35.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r35.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r35.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r35.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r35.quality_control == 0);
  }
}

function QcInvoiceComponent_ng_template_34_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 49);
  }
}

function QcInvoiceComponent_ng_template_34_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, QcInvoiceComponent_ng_template_34_i_2_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, QcInvoiceComponent_ng_template_34_span_3_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.isLoadingTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r12.isLoadingTechnicalEquipment);
  }
}

function QcInvoiceComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_35_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);

      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r8.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51)(1, "p-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_div_36_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);

      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r8.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_37_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.goToOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r16.invoice == null ? null : ctx_r16.invoice.order == null ? null : ctx_r16.invoice.order.id);
  }
}

class QcInvoiceComponent {
  constructor(invoiceService, orderProductService, invoiceProductService, qrCodeService, qcService, route, modalService, albumService, router) {
    this.invoiceService = invoiceService;
    this.orderProductService = orderProductService;
    this.invoiceProductService = invoiceProductService;
    this.qrCodeService = qrCodeService;
    this.qcService = qcService;
    this.route = route;
    this.modalService = modalService;
    this.albumService = albumService;
    this.router = router;
    this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url + 'dash/';
    this.isLoading = true;
    this.isLoadingProducts = false;
    this.isLoadingTechnicalEquipment = true;
    this.isGenerating = false;
    this.isCancellation = false;
    this.isCompletingProducts = false;
    this.isCompleting = false;
    this.invoiceProducts = [];
    this.selectedInvoiceProducts = [];
    this.technicalEquipments = [];
    this.invoiceCanBeCompleted = false;
  }

  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(id => this.invoiceId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.getInvoice()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.getInvoiceProducts())).subscribe();
  }

  getInvoice() {
    this.invoiceService.getById(this.invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(invoice => this.invoice = invoice), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.getTechnicalEquipmentToQc()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoading = false)).subscribe();
  }

  getInvoiceProducts() {
    this.invoiceProducts = [];
    this.selectedInvoiceProducts = [];
    this.isLoadingProducts = true;
    this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(products => this.invoiceProducts = products), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoadingProducts = false)).subscribe();
  }

  getTechnicalEquipmentToQc() {
    this.isLoadingTechnicalEquipment = true;
    this.technicalEquipments = [];

    if (this.invoice.order) {
      this.orderProductService.getTechnicalEquipmentToQC(this.invoice.order.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(equipment => this.technicalEquipments = equipment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isLoadingTechnicalEquipment = false)).subscribe();
    }
  }

  onGenerateQrCodes() {
    this.isGenerating = true;
    const send = {
      by_nomenclatures_list: []
    };
    this.selectedInvoiceProducts.forEach(p => {
      send.by_nomenclatures_list.push({
        nomenclature_id: p.nomenclature.id,
        serial_number_ids: p.nomenclature.bulk_or_serial === '1' ? p.serial_numbers.map(s => +s.id) : [],
        order_product_ids: [p.id],
        invoice_product_ids: []
      });
    });
    this.qrCodeService.generateQrCodes(send, this.invoice.order.id, this.invoice.self_serial_number).subscribe(() => this.isGenerating = false);
  }

  onCancellation() {
    this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(confirm => confirm)).subscribe(() => {
      this.isCancellation = true;
      this.invoiceService.cancellation(this.invoiceId).subscribe(() => {
        this.isCancellation = false;
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
      });
    });
  }

  onComplete() {
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(confirm => confirm)).subscribe(() => {
      const send = {
        id: this.invoice.id,
        qc_completed: true
      };
      this.isCompleting = true;
      this.invoiceService.updatePartly(send).subscribe(() => {
        this.isCompleting = false;
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
      });
    });
  }

  onCompleteItems() {
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(confirm => confirm)).subscribe(() => {
      const send = [];
      const sendProducts = this.selectedInvoiceProducts.filter(p => !p.nomenclature.qc_protocol && p.nomenclature.bulk_or_serial === '0');
      sendProducts.forEach(product => {
        send.push({
          id: product.id,
          not_passed_quantity: 0,
          passed_quantity: product.quantity,
          quality_control: 1
        });
      });
      this.isCompletingProducts = true;
      this.invoiceProductService.severalUpdatePartly(send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.getInvoiceProducts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.isCompletingProducts = false)).subscribe();
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedInvoiceProducts[0].nomenclature.id, 1).subscribe();
  }

  onQualityControl() {
    if (this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].passed_quantity;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].not_passed_quantity; // this.modalService.protocolControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].quantity, 'invoice').subscribe(res => {
      //   if (res) {
      //     this.selectedInvoiceProducts = [];
      //     this.getInvoiceProducts();
      //   }
      // });
    } else if (!this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].passed_quantity;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].not_passed_quantity; // this.modalService.serialControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].quantity, 'invoice').subscribe(res => {
      //   if (res) {
      //     this.selectedInvoiceProducts = [];
      //     this.getInvoiceProducts();
      //   }
      // });
    } else {
      this.qcService.controlProduct(this.selectedInvoiceProducts[0]).subscribe(res => {
        if (res) {
          this.selectedInvoiceProducts = null;
          this.getInvoiceProducts();
        }
      });
    }
  }

  onPrintAlbum() {
    this.albumService.getNomenclaturesImages(this.selectedInvoiceProducts.map(p => p?.nomenclature));
  }

  goToOrder() {
    let link;
    const order = this.invoice.order;

    switch (order.accounting_type) {
      case 1:
        link = '/procurement/chains/order/' + order.id;
        break;

      case 2:
        link = '/outsourcing/chains/order/' + order.id;
        break;

      case 3:
        link = `${this.link}production/orders/order/` + order.id;
        break;
    }

    window.open(link, '_blank');
  }

  onQualityControlTechnicalEquipment() {
    this.qcService.controlTechnicalEquipment(this.selectedTechnicalEquipment, true).subscribe(res => {
      if (res) {
        this.getTechnicalEquipmentToQc();
        this.selectedTechnicalEquipment = null;
      }
    });
  }

}

QcInvoiceComponent.ɵfac = function QcInvoiceComponent_Factory(t) {
  return new (t || QcInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_3__.InvoiceProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_4__.QrCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_qc_service__WEBPACK_IMPORTED_MODULE_5__.QcService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_album_service__WEBPACK_IMPORTED_MODULE_7__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
};

QcInvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: QcInvoiceComponent,
  selectors: [["pek-qc-invoice"]],
  decls: 39,
  vars: 28,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print Album", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-qrcode", "label", "Generate QR Codes", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete Products", 1, "p-button-icon", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Cancellation", 1, "p-button-icon", "p-button-danger", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "p-button-success", 3, "loading", "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["scrollHeight", "calc(100vh - 19rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-4", "mb-4"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["st", ""], ["orderLink", ""], [2, "width", "3%"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "17%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "p-button-icon", "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "p-button-icon", 3, "disabled", "click"], [1, "subtitle"], [3, "pSelectableRow"], [3, "value"], ["class", "badge badge_success", 4, "ngIf"], ["class", "badge badge_warning", 4, "ngIf"], ["class", "badge badge_danger", 4, "ngIf"], [1, "badge", "badge_success"], [1, "badge", "badge_warning"], [1, "badge", "badge_danger"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "index-header", "text-center", 2, "width", "8%"], [2, "width", "32%"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "ml-auto", "p-button-icon", 3, "disabled", "click"], [1, "text-center", 2, "width", "8%"], [1, "order-link", 3, "click"]],
  template: function QcInvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Order ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, QcInvoiceComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_8_listener() {
        return ctx.onPrintAlbum();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_10_listener() {
        return ctx.onGenerateQrCodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_11_listener() {
        return ctx.onCompleteItems();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_12_listener() {
        return ctx.onCancellation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_13_listener() {
        return ctx.onComplete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "p-table", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function QcInvoiceComponent_Template_p_table_selectionChange_17_listener($event) {
        return ctx.selectedInvoiceProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, QcInvoiceComponent_ng_template_19_Template, 21, 0, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, QcInvoiceComponent_ng_template_20_Template, 4, 3, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, QcInvoiceComponent_ng_template_21_Template, 23, 13, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, QcInvoiceComponent_ng_template_22_Template, 4, 3, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, QcInvoiceComponent_ng_template_23_Template, 2, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, QcInvoiceComponent_div_24_Template, 3, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "h2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Technical Equipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 12)(28, "div", 13)(29, "p-table", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function QcInvoiceComponent_Template_p_table_selectionChange_29_listener($event) {
        return ctx.selectedTechnicalEquipment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, QcInvoiceComponent_ng_template_31_Template, 17, 0, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, QcInvoiceComponent_ng_template_32_Template, 3, 2, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, QcInvoiceComponent_ng_template_33_Template, 19, 11, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, QcInvoiceComponent_ng_template_34_Template, 4, 3, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, QcInvoiceComponent_ng_template_35_Template, 2, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, QcInvoiceComponent_div_36_Template, 3, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, QcInvoiceComponent_ng_template_37_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](38);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("module", "warehouse")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 26, ctx.albumService.loading$))("disabled", ctx.selectedInvoiceProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.isGenerating)("disabled", ctx.selectedInvoiceProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.isCompletingProducts)("disabled", ctx.selectedInvoiceProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.isCancellation)("disabled", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.isCompleting)("disabled", !ctx.invoiceCanBeCompleted);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingProducts)("rows", 10)("value", ctx.invoiceProducts)("selection", ctx.selectedInvoiceProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0)("rows", 10)("value", ctx.technicalEquipments)("selection", ctx.selectedTechnicalEquipment);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r8.paginator && !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_17__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_17__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_17__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_8__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: [".order-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.order-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0FBQ0o7QUFHQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJxYy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"]
});

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
        ];
        this.settingRoutes = [
            { label: 'Protocols', commands: ['protocols'] },
        ];
    }
    ngOnInit() {
    }
}
QcLayoutComponent.ɵfac = function QcLayoutComponent_Factory(t) { return new (t || QcLayoutComponent)(); };
QcLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QcLayoutComponent, selectors: [["pek-qc-layout"]], decls: 2, vars: 3, consts: [[3, "module", "routes", "settingsRoutes"]], template: function QcLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Quality Control")("routes", ctx.routes)("settingsRoutes", ctx.settingRoutes);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Choose Own Production Item to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function (a2) { return ["../", "order", a2]; };
function QcListComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QcListComponent_ng_template_22_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "a", 40);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 42)(1, "td", 28)(2, "div", 29);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QcListComponent_ng_template_23_tr_0_Template, 14, 12, "tr", 41);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "a", 40);
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
QcListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QcListComponent, selectors: [["pek-qc-list"]], decls: 33, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "custom-tabs"], [3, "header", "selected"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 22rem)", 3, "value", "selection", "scrollable", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "header"], [2, "width", "20%", "padding-left", "19px"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "20%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["target", "_blank", "pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "Expand All", "icon", "pi pi-angle-down", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Collapse All", "icon", "pi pi-angle-up", 3, "disabled", "click"], [1, "subtitle"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow", 4, "ngIf"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow"], [2, "width", "20%"], [1, "table-toggle"], [3, "rowNode"], [4, "ngIf"], [3, "text-warning", 4, "ngIf"], ["style", "font-style: normal", 4, "ngIf"], [2, "font-style", "normal"], [4, "ngFor", "ngForOf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "text-center", 2, "width", "45%"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", "target", "_blank", 1, "ml-auto", "mr-2", 3, "routerLink"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled", 4, "ngIf"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"]], template: function QcListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "Own Production");
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
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/album.service */ 96667);
/* harmony import */ var _qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../qr-code/qr-code.service */ 32527);
/* harmony import */ var _services_qc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/qc.service */ 7630);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
















function QcOrderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}

function QcOrderComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_20_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Choose the Product to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, QcOrderComponent_ng_template_20_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_20_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.onReworkProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_20_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.onShowImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.onQualityControl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.selectedOrderProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx_r3.isReworkingProduct)("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedOrderProducts.length === 0 || ctx_r3.selectedOrderProducts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedOrderProducts.length === 0 || ctx_r3.selectedOrderProducts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedOrderProducts.length === 0 || ctx_r3.selectedOrderProducts.length > 1);
  }
}

function QcOrderComponent_ng_template_21_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_21_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_21_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 39)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "p-tableCheckbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, QcOrderComponent_ng_template_21_span_20_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, QcOrderComponent_ng_template_21_span_21_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, QcOrderComponent_ng_template_21_span_22_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r22 = ctx.$implicit;
    const i_r23 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", product_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", product_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.current_technology == null ? null : product_r22.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.category ? product_r22.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r22.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r22.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r22.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r22.quality_control == 0);
  }
}

function QcOrderComponent_ng_template_22_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 50);
  }
}

function QcOrderComponent_ng_template_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, QcOrderComponent_ng_template_22_i_2_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, QcOrderComponent_ng_template_22_span_3_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.isLoadingProducts);
  }
}

function QcOrderComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_23_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);

      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r1.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_div_24_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);

      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r1.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_32_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Choose the Technical Equipment to Quality Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, QcOrderComponent_ng_template_32_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_32_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.onQualityControlTechnicalEquipment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.selectedTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r10.isLoadingTechnicalEquipment || !ctx_r10.selectedTechnicalEquipment);
  }
}

function QcOrderComponent_ng_template_33_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_33_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_33_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 39)(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, QcOrderComponent_ng_template_33_span_16_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, QcOrderComponent_ng_template_33_span_17_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, QcOrderComponent_ng_template_33_span_18_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r36 = ctx.$implicit;
    const i_r37 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", product_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r36.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r36.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r36.nomenclature.category ? product_r36.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r36.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r36.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", product_r36.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r36.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r36.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r36.quality_control == 0);
  }
}

function QcOrderComponent_ng_template_34_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 50);
  }
}

function QcOrderComponent_ng_template_34_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, QcOrderComponent_ng_template_34_i_2_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, QcOrderComponent_ng_template_34_span_3_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.isLoadingTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r12.isLoadingTechnicalEquipment);
  }
}

function QcOrderComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_35_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);

      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r8.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_div_36_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);

      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r8.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_37_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.goToOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.order.id);
  }
}

class QcOrderComponent {
  constructor(route, router, orderService, orderProductService, modalService, albumService, qrCodeService, qcService) {
    this.route = route;
    this.router = router;
    this.orderService = orderService;
    this.orderProductService = orderProductService;
    this.modalService = modalService;
    this.albumService = albumService;
    this.qrCodeService = qrCodeService;
    this.qcService = qcService;
    this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url + 'dash/';
    this.isLoadingTechnicalEquipment = true;
    this.isLoading = true;
    this.isLoadingProducts = true;
    this.isGenerating = false;
    this.isReworking = false;
    this.isCompletingProducts = false;
    this.isCompleting = false;
    this.isReworkingProduct = false;
    this.selectedOrderProducts = [];
    this.orderProducts = [];
    this.technicalEquipments = [];
    this.orderCanBeCompleted = false;
  }

  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(id => this.orderId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.getOrder()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.getOrderProducts())).subscribe();
  }

  getOrder() {
    this.orderService.getById(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(order => this.order = order), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.getTechnicalEquipmentToQc()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoading = false)).subscribe();
  }

  getTechnicalEquipmentToQc() {
    this.technicalEquipments = [];
    this.isLoadingTechnicalEquipment = true;
    this.orderProductService.getTechnicalEquipmentToQC(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(equipment => this.technicalEquipments = equipment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoadingTechnicalEquipment = false)).subscribe();
  }

  getOrderProducts() {
    this.orderProducts = [];
    this.selectedOrderProducts = [];
    this.isLoadingProducts = true;
    this.orderProductService.getQc(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(products => this.orderProducts = products), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(products => this.orderCanBeCompleted = Boolean(products.find(p => p.quality_control))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoadingProducts = false)).subscribe();
  }

  onPrintAlbum() {
    this.albumService.getNomenclaturesImages(this.selectedOrderProducts.map(p => p?.nomenclature));
  }

  goToOrder() {
    let link;
    const order = this.order;

    switch (order.accounting_type) {
      case 1:
        link = '/procurement/chains/order/' + order.id;
        break;

      case 2:
        link = '/outsourcing/chains/order/' + order.id;
        break;

      case 3:
        link = `${this.link}production/orders/order/` + order.id;
        break;
    }

    window.open(link, '_blank');
  }

  onCompleteItems() {
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(confirm => confirm)).subscribe(() => {
      const send = [];
      const sendProducts = this.selectedOrderProducts.filter(p => !p.nomenclature.qc_protocol && p.nomenclature.bulk_or_serial === '0');
      sendProducts.forEach(product => {
        send.push({
          id: product.id,
          not_passed_quantity: 0,
          passed_quantity: product.quantity,
          quality_control: 1
        });
      });
      this.isCompletingProducts = true;
      this.orderProductService.severalUpdatePartly(send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.getOrderProducts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isCompletingProducts = false)).subscribe();
    });
  }

  onComplete() {
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(confirm => confirm)).subscribe(() => {
      const send = {
        id: this.order.id,
        qc_completed: true
      };
      this.isCompleting = true;
      this.orderService.updatePartly(send).subscribe(() => {
        this.isCompleting = false;
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
      });
    });
  }

  onGenerateQrCodes() {
    this.isGenerating = true;
    const send = {
      by_nomenclatures_list: []
    };
    this.selectedOrderProducts.forEach(p => {
      send.by_nomenclatures_list.push({
        nomenclature_id: p.nomenclature.id,
        serial_number_ids: p.nomenclature.bulk_or_serial === '1' ? p.serial_numbers.map(s => +s.id) : [],
        order_product_ids: [p.id],
        invoice_product_ids: []
      });
    });
    this.qrCodeService.generateQrCodes(send, this.order.id).subscribe(() => this.isGenerating = false);
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedOrderProducts[0].nomenclature.id, 1).subscribe();
  }

  onQualityControl() {
    if (this.selectedOrderProducts[0].nomenclature.qc_protocol && this.selectedOrderProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedOrderProducts[0].passed_quantity) currentCount += this.selectedOrderProducts[0].passed_quantity;
      if (this.selectedOrderProducts[0].not_passed_quantity) currentCount += this.selectedOrderProducts[0].not_passed_quantity; // this.modalService.protocolControlProduct(this.selectedOrderProducts[0], currentCount, this.selectedOrderProducts[0].quantity, 'order').subscribe(res => {
      //   if (res) {
      //     this.getOrderProducts();
      //     this.selectedOrderProducts = [];
      //   }
      // });
    } else if (!this.selectedOrderProducts[0].nomenclature.qc_protocol && this.selectedOrderProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedOrderProducts[0].passed_quantity) currentCount += this.selectedOrderProducts[0].passed_quantity;
      if (this.selectedOrderProducts[0].not_passed_quantity) currentCount += this.selectedOrderProducts[0].not_passed_quantity; // this.modalService.serialControlProduct(this.selectedOrderProducts[0], currentCount, this.selectedOrderProducts[0].quantity, 'order').subscribe(res => {
      //   if (res) {
      //     this.getOrderProducts();
      //     this.selectedOrderProducts = [];
      //   }
      // });
    } else {
      this.qcService.controlProduct(this.selectedOrderProducts[0], true).subscribe(res => {
        if (res) {
          this.getOrderProducts();
          this.selectedOrderProducts = [];
        }
      });
    }
  }

  onRework() {
    this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(confirm => confirm)).subscribe(() => {
      this.isReworking = true;
      const ids = this.orderProducts.map(p => p.id);
      this.orderProductService.reworkOrder(ids).subscribe(() => {
        this.isReworking = false;
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
      });
    });
  }

  onReworkProduct() {
    this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(confirm => confirm)).subscribe(() => {
      this.isReworkingProduct = true;
      this.orderProductService.reworkOrderProduct(this.selectedOrderProducts[0].id).subscribe(() => {
        const index = this.orderProducts.findIndex(o => o.id === this.selectedOrderProducts[0].id);
        this.orderProducts.splice(index, 1);

        if (this.orderProducts.length === 0) {
          this.router.navigate(['../../'], {
            relativeTo: this.route
          });
          return;
        }

        this.selectedOrderProducts = [];
        this.isReworkingProduct = false;
      });
    });
  }

  onQualityControlTechnicalEquipment() {
    this.qcService.controlTechnicalEquipment(this.selectedTechnicalEquipment, true).subscribe(res => {
      if (res) {
        this.getTechnicalEquipmentToQc();
        this.selectedTechnicalEquipment = null;
      }
    });
  }

}

QcOrderComponent.ɵfac = function QcOrderComponent_Factory(t) {
  return new (t || QcOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_album_service__WEBPACK_IMPORTED_MODULE_4__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_5__.QrCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_qc_service__WEBPACK_IMPORTED_MODULE_6__.QcService));
};

QcOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: QcOrderComponent,
  selectors: [["pek-qc-order"]],
  decls: 39,
  vars: 28,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print Album", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-qrcode", "label", "Generate QR Codes", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete Products", 1, "p-button-icon", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-refresh", "label", "Rework All", 1, "p-button-icon", "p-button-danger", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "p-button-success", 3, "loading", "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["scrollHeight", "calc(100vh - 17rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-4", "mb-4"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 17rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["st", ""], ["orderLink", ""], [2, "width", "3%"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "17%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-refresh", "label", "Rework Item", 1, "p-button-icon", "p-button-danger", "ml-auto", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "p-button-icon", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "p-button-icon", 3, "disabled", "click"], [1, "subtitle"], [3, "pSelectableRow"], [3, "value"], ["class", "badge badge_success", 4, "ngIf"], ["class", "badge badge_warning", 4, "ngIf"], ["class", "badge badge_danger", 4, "ngIf"], [1, "badge", "badge_success"], [1, "badge", "badge_warning"], [1, "badge", "badge_danger"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "index-header", "text-center", 2, "width", "8%"], [2, "width", "32%"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "ml-auto", "p-button-icon", 3, "disabled", "click"], [1, "text-center", 2, "width", "8%"], [1, "order-link", 3, "click"]],
  template: function QcOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Order ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, QcOrderComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_8_listener() {
        return ctx.onPrintAlbum();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_10_listener() {
        return ctx.onGenerateQrCodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_11_listener() {
        return ctx.onCompleteItems();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_12_listener() {
        return ctx.onRework();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_13_listener() {
        return ctx.onComplete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "p-table", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function QcOrderComponent_Template_p_table_selectionChange_17_listener($event) {
        return ctx.selectedOrderProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, QcOrderComponent_ng_template_19_Template, 21, 0, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, QcOrderComponent_ng_template_20_Template, 5, 5, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, QcOrderComponent_ng_template_21_Template, 23, 13, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, QcOrderComponent_ng_template_22_Template, 4, 3, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, QcOrderComponent_ng_template_23_Template, 2, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, QcOrderComponent_div_24_Template, 3, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "h2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Technical Equipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 12)(28, "div", 13)(29, "p-table", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function QcOrderComponent_Template_p_table_selectionChange_29_listener($event) {
        return ctx.selectedTechnicalEquipment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, QcOrderComponent_ng_template_31_Template, 17, 0, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, QcOrderComponent_ng_template_32_Template, 3, 2, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, QcOrderComponent_ng_template_33_Template, 19, 11, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, QcOrderComponent_ng_template_34_Template, 4, 3, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, QcOrderComponent_ng_template_35_Template, 2, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, QcOrderComponent_div_36_Template, 3, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, QcOrderComponent_ng_template_37_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](38);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("module", "warehouse")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 26, ctx.albumService.loading$))("disabled", ctx.selectedOrderProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.isGenerating)("disabled", ctx.selectedOrderProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.isCompletingProducts)("disabled", ctx.selectedOrderProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.isReworking)("disabled", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.isCompleting)("disabled", !ctx.orderCanBeCompleted);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingProducts)("rows", 10)("value", ctx.orderProducts)("selection", ctx.selectedOrderProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0)("rows", 10)("value", ctx.technicalEquipments)("selection", ctx.selectedTechnicalEquipment);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r8.paginator && !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_16__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_16__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_7__.ModuleIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".order-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.order-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtBQUNKO0FBR0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoicWMtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 19365:
/*!**********************************************************************************!*\
  !*** ./src/app/qc/modals/create-edit-protocol/create-edit-protocol.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditProtocolComponent": () => (/* binding */ CreateEditProtocolComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_protocol_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/protocol.service */ 25703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/upload-file/upload-file.component */ 75288);













function CreateEditProtocolComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.data.type === "edit" ? "Edit" : "Create", " Protocol");
} }
function CreateEditProtocolComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Protocol \u00AB", ctx_r1.data.protocol.name, "\u00BB");
} }
function CreateEditProtocolComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function CreateEditProtocolComponent_ng_container_23_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 5)(2, "div", 6)(3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Name* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const idx_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", idx_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "p-name-" + idx_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "p-name-" + idx_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "p-comment-" + idx_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "p-comment-" + idx_r11);
} }
function CreateEditProtocolComponent_ng_container_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateEditProtocolComponent_ng_container_23_div_1_div_1_Template, 11, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.paragraphs.controls);
} }
function CreateEditProtocolComponent_ng_container_23_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " There are no paragraphs of the protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditProtocolComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateEditProtocolComponent_ng_container_23_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateEditProtocolComponent_ng_container_23_ng_template_2_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.paragraphs.length > 0)("ngIfElse", _r7);
} }
function CreateEditProtocolComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditProtocolComponent_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.addNomenclature()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add Nomenclature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditProtocolComponent_div_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditProtocolComponent_div_28_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 42)(10, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditProtocolComponent_div_28_ng_template_4_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const nomenclature_r17 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.removeNomenclature(nomenclature_r17.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const nomenclature_r17 = ctx.$implicit;
    const i_r18 = ctx.rowIndex;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](nomenclature_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](nomenclature_r17.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.getType(nomenclature_r17.type));
} }
function CreateEditProtocolComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p-table", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateEditProtocolComponent_div_28_ng_template_3_Template, 10, 0, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CreateEditProtocolComponent_div_28_ng_template_4_Template, 12, 4, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r5.form.get("nomenclatures").value)("paginator", true)("rows", 10);
} }
class CreateEditProtocolComponent {
    constructor(fb, protocolService, dialogRef, data) {
        this.fb = fb;
        this.protocolService = protocolService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.isLoadingParagraphs = false;
        this.defaultParagraphsIds = new Set();
        this.removeFilesSet = new Set();
        this.files = [];
        this.defaultFiles = [];
        this.form = this.fb.group({
            id: [null],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            paragraphs: this.fb.array([]),
            nomenclatures: [[]]
        });
    }
    get paragraphs() {
        return this.form.get('paragraphs');
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.patchValue(this.data.protocol);
            this.getParagraphs();
            this.getFiles();
        }
        else {
            this.addParagraph();
        }
    }
    getParagraphs() {
        this.isLoadingParagraphs = true;
        this.protocolService.getParagraphs([{ name: 'protocol_ids', value: this.form.get('id').value }]).subscribe(paragraphs => {
            paragraphs.forEach(paragraph => {
                this.defaultParagraphsIds.add(paragraph.id);
                this.form.get('paragraphs').push(this.fb.group({
                    id: [paragraph.id],
                    name: [paragraph.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                    comment: [paragraph.comment]
                }));
            });
            this.isLoadingParagraphs = false;
        });
    }
    addParagraph() {
        this.form.get('paragraphs').push(this.fb.group({
            id: [null],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            comment: ['']
        }));
    }
    getFiles() {
        if (this.data.type === 'edit') {
            this.protocolService.getFiles([{ name: 'qc_protocol_id', value: this.form.get('id').value }]).subscribe(files => {
                this.files = files.map(file => {
                    return {
                        ...file,
                        name: this.getFileName(file.file),
                    };
                });
                this.defaultFiles = [...this.files];
            });
        }
    }
    getFileName(fileName) {
        if (fileName) {
            const name = fileName.split('/');
            return name[name.length - 1];
        }
    }
    removeNomenclature(id) {
        const index = this.form.get('nomenclatures').value.findIndex(n => n.id === id);
        this.form.get('nomenclatures').value.splice(index, 1);
    }
    getType(type) {
        switch (type) {
            case '0':
                return 'Purchased';
            case '1':
                return 'Assembly';
            case '2':
                return 'Manufactured';
        }
    }
    onSave() {
        if (this.data.type === 'create') {
            this.createProtocol();
        }
        else {
            this.editProtocol();
        }
    }
    addNomenclature() {
        this.protocolService.addNomenclatureDialog().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(value => Boolean(value))).subscribe(nomenclature => {
            this.form.get('nomenclatures').value.push({
                id: nomenclature.id,
                name: nomenclature.name,
                code: nomenclature.code,
                type: nomenclature.type
            });
        });
    }
    createProtocol() {
        if (this.form.valid) {
            this.isSaving = true;
            const sendData = JSON.parse(JSON.stringify(this.form.value));
            delete sendData.nomenclatures;
            delete sendData.id;
            this.protocolService.create(sendData).subscribe(protocol => {
                const send = this.paragraphs.controls.map(control => {
                    delete control.value.id;
                    control.value.protocol_id = protocol.id;
                    return control.value;
                });
                this.protocolService.addParagraphs(send).subscribe();
                this.saveFiles(protocol.id.toString());
                if (this.form.get('nomenclatures').value.length > 0) {
                    const nomenclatures = {
                        nomenclature_ids: this.form.get('nomenclatures').value.map(el => el.id)
                    };
                    this.protocolService.addNomenclature(nomenclatures, protocol.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isSaving = false)).subscribe(() => this.dialogRef.close(true));
                }
                else {
                    this.isSaving = false;
                    this.dialogRef.close(true);
                }
            });
        }
    }
    saveFiles(protocolId) {
        this.files.forEach((file, idx) => {
            if (!file?.id) {
                const formData = new FormData();
                formData.append('file', file, file.name);
                formData.append('qc_protocol', protocolId);
                this.protocolService.saveFile(formData).subscribe();
            }
        });
    }
    onSelectFiles(files) {
        this.files = files;
    }
    editProtocol() {
        if (this.form.value) {
            this.isSaving = true;
            const sendData = JSON.parse(JSON.stringify(this.form.value));
            delete sendData.nomenclatures;
            this.protocolService.update(sendData).subscribe();
            const addedParagraphs = this.paragraphs.controls.filter(c => c.value.id === null).map(control => {
                control.value.protocol_id = this.form.get('id').value;
                return control.value;
            });
            this.protocolService.addParagraphs(addedParagraphs).subscribe();
            const updatedParagraphsIds = this.paragraphs.controls.filter(c => this.defaultParagraphsIds.has(c.value.id)).map(c => c.value);
            this.protocolService.updateParagraphs(updatedParagraphsIds).subscribe();
            this.paragraphs.controls
                .forEach(c => {
                if (this.defaultParagraphsIds.has(c.value.id)) {
                    this.defaultParagraphsIds.delete(c.value.id);
                }
            });
            this.saveFiles(this.form.get('id').value);
            this.deleteFiles();
            const removedParagraphsIds = Array.from(this.defaultParagraphsIds);
            this.protocolService.deleteParagraphs(removedParagraphsIds).subscribe();
            if (this.form.get('nomenclatures').value.length >= 0) {
                const send = {
                    nomenclature_ids: this.form.get('nomenclatures').value.length ? this.form.get('nomenclatures').value.map(el => el.id) : ''
                };
                this.protocolService.addNomenclature(send, this.form.get('id').value).subscribe(() => {
                    this.isSaving = false;
                    this.dialogRef.close(true);
                });
            }
            else {
                this.isSaving = false;
                this.dialogRef.close(true);
            }
        }
    }
    deleteFiles() {
        this.defaultFiles.filter(file => file?.id && !this.files.find(f => f.id === file.id)).map(f => f.id).forEach(id => {
            this.protocolService.deleteFile(id).subscribe();
        });
    }
}
CreateEditProtocolComponent.ɵfac = function CreateEditProtocolComponent_Factory(t) { return new (t || CreateEditProtocolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_protocol_service__WEBPACK_IMPORTED_MODULE_0__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
CreateEditProtocolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditProtocolComponent, selectors: [["pek-create-edit-protocol"]], decls: 37, vars: 14, consts: [[1, "modal-header"], [1, "modal-header__title"], [4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], ["for", "name"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control"], ["for", "comment"], ["pInputText", "", "formControlName", "comment", "type", "text", "id", "comment", 1, "form-control"], [1, "paragraphs__header", "mt-3", "mb-1"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "paragraphs__header", "mt-4", "mb-3"], ["class", "btn-add", 3, "click", 4, "ngIf"], [1, "protocols-files"], [3, "uploadFiles", "multiple", "selectFile"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"], [1, "d-flex", "justify-content-center"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], ["formArrayName", "paragraphs", 4, "ngIf", "ngIfElse"], ["empty", ""], ["formArrayName", "paragraphs"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", 3, "formGroupName"], [3, "for"], ["formControlName", "name", "type", "text", "pInputText", "", 1, "form-control", 3, "id"], ["formControlName", "comment", "type", "text", "pInputText", "", 1, "form-control", 3, "id"], [1, "empty-text"], [1, "btn-add", 3, "click"], [1, "pi", "pi-plus"], ["selectionMode", "single", 3, "value", "paginator", "rows"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-center", 2, "width", "7%"], [2, "width", "33%"], [2, "width", "30%"], [1, "text-center", 2, "width", "20%"], [1, "text-right", 2, "width", "10%"], [1, "btn-remove", 3, "click"], [1, "pi", "pi-times"]], template: function CreateEditProtocolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateEditProtocolComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateEditProtocolComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3)(6, "div")(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Name* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "div", 6)(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Comment* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Protocol Paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CreateEditProtocolComponent_ng_container_22_Template, 3, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CreateEditProtocolComponent_ng_container_23_Template, 4, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Nomenclatures");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateEditProtocolComponent_a_27_Template, 3, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateEditProtocolComponent_div_28_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14)(30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Protocol Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16)(33, "pek-upload-file", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectFile", function CreateEditProtocolComponent_Template_pek_upload_file_selectFile_33_listener($event) { return ctx.onSelectFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-dialog-actions", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditProtocolComponent_Template_button_click_36_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.data.isShowMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.isShowMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.isLoadingParagraphs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.data.isShowMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("nomenclatures").value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("uploadFiles", ctx.files)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_1__.UploadFileComponent], styles: [".paragraphs__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.paragraphs__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.btn-add[_ngcontent-%COMP%] {\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--theme-color-danger);\n  font-weight: 600;\n  cursor: pointer;\n  position: relative;\n  top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LXByb3RvY29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUFOO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFGRjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsMEJBQUE7QUFISjtBQU9BO0VBQ0UsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUpGIiwiZmlsZSI6ImNyZWF0ZS1lZGl0LXByb3RvY29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFncmFwaHMge1xyXG4gICZfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXJlbW92ZSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLWRhbmdlcik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9648:
/*!**************************************************************************************************!*\
  !*** ./src/app/qc/modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NomenclatureProtocolPickerComponent": () => (/* binding */ NomenclatureProtocolPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 87958);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var _shared_pickers_multi_categories_picker_multi_categories_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/multi-categories-picker/multi-categories-picker.component */ 27925);
/* harmony import */ var _shared_pickers_multi_product_structure_categories_picker_multi_product_structure_categories_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pickers/multi-product-structure-categories-picker/multi-product-structure-categories-picker.component */ 66913);



















const _c0 = ["paginator"];

function NomenclatureProtocolPickerComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Uom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function NomenclatureProtocolPickerComponent_ng_template_36_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " NEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function NomenclatureProtocolPickerComponent_ng_template_36_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const technology_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", technology_r10.name, " ");
  }
}

function NomenclatureProtocolPickerComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 31)(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NomenclatureProtocolPickerComponent_ng_template_36_span_6_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NomenclatureProtocolPickerComponent_ng_template_36_div_11_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const i_r7 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", product_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r2.currentPage - 1) * 10 + i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r6.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r6.approved === "0" && product_r6.type === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((product_r6.category == null ? null : product_r6.category.unit_of_measure == null ? null : product_r6.category.unit_of_measure.symbol) ? product_r6.category == null ? null : product_r6.category.unit_of_measure == null ? null : product_r6.category.unit_of_measure.symbol : "Pcs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", product_r6.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r6.category == null ? null : product_r6.category.name, " ");
  }
}

function NomenclatureProtocolPickerComponent_ng_template_37_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 40);
  }
}

function NomenclatureProtocolPickerComponent_ng_template_37_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function NomenclatureProtocolPickerComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NomenclatureProtocolPickerComponent_ng_template_37_i_2_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NomenclatureProtocolPickerComponent_ng_template_37_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
  }
}

function NomenclatureProtocolPickerComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

let NomenclatureProtocolPickerComponent = class NomenclatureProtocolPickerComponent {
  constructor(dialogRef, fb, nomenclatureService, adapterService, data) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.nomenclatureService = nomenclatureService;
    this.adapterService = adapterService;
    this.data = data;
    this.nomenclatureFilterTypes = [{
      name: 'Manufactured',
      value: '2'
    }, {
      name: 'Assembly',
      value: '1'
    }, {
      name: 'Purchased',
      value: '0'
    }];
    this.searchForm = this.fb.group({
      name: [''],
      code: [''],
      categories: [''],
      root_categories: [''],
      type: [null]
    });
    this.isLoading = true;
    this.currentPage = 1;
    this.isStartFirstPage = false;
    this.queryKey = this.adapterService.generateQueryKey(this.searchForm);
    this.query = [];
    this.productsCount = 0;
    this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.code$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.products$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.nomenclatureService.getForPagination(this.query)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(response => this.productsCount = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => response.results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.paginateToFistPage()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this));
  }

  ngOnInit() {
    this.name$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.search$.next()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe();
    this.code$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.search$.next()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe();
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedProduct = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [{
      name: 'paginated',
      value: true
    }, {
      name: 'page',
      value: this.currentPage
    }];

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
      }
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onSelectProduct() {
    this.dialogRef.close(this.selectedProduct);
  }

  paginate(event) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onSelectCategories(ids) {
    this.searchForm.get('categories').patchValue(ids);
    this.search$.next();
  }

  onSelectRootCategories(ids) {
    this.searchForm.get('root_categories').patchValue(ids);
    this.search$.next();
  }

};

NomenclatureProtocolPickerComponent.ɵfac = function NomenclatureProtocolPickerComponent_Factory(t) {
  return new (t || NomenclatureProtocolPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__.NomenclatureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_1__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA));
};

NomenclatureProtocolPickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NomenclatureProtocolPickerComponent,
  selectors: [["pek-nomenclature-protocol-picker"]],
  viewQuery: function NomenclatureProtocolPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 45,
  vars: 16,
  consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "row"], [1, "col-4"], [1, "form-group"], ["for", "name"], ["pInputText", "", "formControlName", "name", "type", "text", "id", "name", 1, "form-control", 3, "ngModelChange"], ["for", "code"], ["pInputText", "", "formControlName", "code", "type", "text", "id", "code", 1, "form-control", 3, "ngModelChange"], ["formControlName", "type", "placeholder", "Type", "optionLabel", "name", "optionValue", "value", 3, "options", "showClear", "ngModelChange"], [3, "choiceCategories"], [1, "table-pagination-preloader"], ["selectionMode", "single", "dataKey", "id", "rowExpandMode", "single", 3, "scrollable", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["pButton", "", "type", "button", "label", "Choice", 1, "p-button-success", 3, "disabled", "click"], [1, "text-center", 2, "width", "5%"], [2, "width", "20%"], [2, "width", "30%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "word-break", 2, "width", "20%"], ["class", "badge badge_warning", "style", "margin-right: 0.25rem", 4, "ngIf"], [1, "word-break", "text-center", 2, "width", "10%"], [4, "ngFor", "ngForOf"], [1, "badge", "badge_warning", 2, "margin-right", "0.25rem"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"]],
  template: function NomenclatureProtocolPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Choice Nomenclature");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NomenclatureProtocolPickerComponent_Template_input_ngModelChange_9_listener() {
        return ctx.name$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NomenclatureProtocolPickerComponent_Template_input_ngModelChange_14_listener() {
        return ctx.code$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 4)(16, "div", 5)(17, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p-dropdown", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NomenclatureProtocolPickerComponent_Template_p_dropdown_ngModelChange_19_listener() {
        return ctx.search$.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 4)(21, "div", 5)(22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "pek-multi-categories-picker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("choiceCategories", function NomenclatureProtocolPickerComponent_Template_pek_multi_categories_picker_choiceCategories_24_listener($event) {
        return ctx.onSelectCategories($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 4)(26, "div", 5)(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Root Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "pek-multi-product-structure-categories-picker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("choiceCategories", function NomenclatureProtocolPickerComponent_Template_pek_multi_product_structure_categories_picker_choiceCategories_29_listener($event) {
        return ctx.onSelectRootCategories($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 12)(31, "mat-dialog-content")(32, "p-table", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function NomenclatureProtocolPickerComponent_Template_p_table_selectionChange_32_listener($event) {
        return ctx.selectedProduct = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, NomenclatureProtocolPickerComponent_ng_template_35_Template, 13, 0, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, NomenclatureProtocolPickerComponent_ng_template_36_Template, 14, 8, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, NomenclatureProtocolPickerComponent_ng_template_37_Template, 4, 3, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, NomenclatureProtocolPickerComponent_div_38_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-dialog-actions", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21)(42, "p-paginator", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function NomenclatureProtocolPickerComponent_Template_p_paginator_onPageChange_42_listener($event) {
        return ctx.paginate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclatureProtocolPickerComponent_Template_button_click_44_listener() {
        return ctx.onSelectProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.nomenclatureFilterTypes)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("rows", 10)("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 14, ctx.products$))("selection", ctx.selectedProduct);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("paginator-wrapper_hide", ctx.productsCount === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 10)("totalRecords", ctx.productsCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.selectedProduct);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.Dropdown, primeng_table__WEBPACK_IMPORTED_MODULE_20__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_20__.SelectableRow, primeng_paginator__WEBPACK_IMPORTED_MODULE_21__.Paginator, _shared_pickers_multi_categories_picker_multi_categories_picker_component__WEBPACK_IMPORTED_MODULE_2__.MultiCategoriesPickerComponent, _shared_pickers_multi_product_structure_categories_picker_multi_product_structure_categories_picker_component__WEBPACK_IMPORTED_MODULE_3__.MultiProductStructureCategoriesPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  styles: [".modal-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.paginator-wrapper[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbWVuY2xhdHVyZS1wcm90b2NvbC1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoibm9tZW5jbGF0dXJlLXByb3RvY29sLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ucGFnaW5hdG9yLXdyYXBwZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuIl19 */"]
});
NomenclatureProtocolPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], NomenclatureProtocolPickerComponent);


/***/ }),

/***/ 8370:
/*!************************************************************************************!*\
  !*** ./src/app/qc/modals/quality-control-modal/quality-control-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualityControlModalComponent": () => (/* binding */ QualityControlModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/models/invoice-product */ 16195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);










class QualityControlModalComponent {
    constructor(dialogRef, fb, invoiceProductService, orderProductService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.invoiceProductService = invoiceProductService;
        this.orderProductService = orderProductService;
        this.data = data;
        this.isPending = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.data.entity.id],
            passed_quantity: [this.data.entity.passed_quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.data.entity.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            not_passed_quantity: [this.data.entity.not_passed_quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.data.entity.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.quantity = this.data.entity.quantity;
    }
    onComplete() {
        if (this.form.valid) {
            if (this.form.value.passed_quantity + this.form.value.not_passed_quantity === this.data.entity.quantity) {
                if (this.form.value.passed_quantity === this.data.entity.quantity) {
                    this.form.addControl('quality_control', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(_procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PASSED));
                }
                else if (this.form.value.not_passed_quantity === this.data.entity.quantity) {
                    this.form.addControl('quality_control', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(_procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.NOT_PASSED));
                }
                else if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.quantity) {
                    this.form.addControl('quality_control', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(_procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PARTLY_PASSED));
                }
            }
            this.isPending = true;
            if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.quantity) {
                if (this.data.isOwnProduction) {
                    this.orderProductService.updatePartly(this.form.value).subscribe(() => {
                        this.isPending = false;
                        this.dialogRef.close(true);
                    });
                }
                else {
                    this.invoiceProductService.updatePartly(this.form.value).subscribe(() => {
                        this.isPending = false;
                        this.dialogRef.close(true);
                    });
                }
            }
        }
    }
    isDisableCompleteButton() {
        return +this.form.get('passed_quantity').value + +this.form.get('not_passed_quantity').value !== +this.quantity;
    }
}
QualityControlModalComponent.ɵfac = function QualityControlModalComponent_Factory(t) { return new (t || QualityControlModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
QualityControlModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QualityControlModalComponent, selectors: [["pek-quality-control-modal"]], decls: 16, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "passed"], ["pInputText", "", "formControlName", "passed_quantity", "min", "0", "type", "number", "id", "passed", 1, "form-control", 3, "max"], ["for", "np"], ["pInputText", "", "formControlName", "not_passed_quantity", "min", "0", "type", "number", "id", "np", 1, "form-control", 3, "max"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Complete", 1, "p-button-success", 3, "disabled", "loading", "click"]], template: function QualityControlModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Passed* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Not Passed* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QualityControlModalComponent_Template_button_click_15_listener() { return ctx.onComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Quality Control (Name: ", ctx.data.entity.nomenclature.name, ", Quantity: ", ctx.data.entity.quantity, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx.data.entity.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx.data.entity.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isDisableCompleteButton())("loading", ctx.isPending);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFsaXR5LWNvbnRyb2wtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54552:
/*!****************************************************************************************************************!*\
  !*** ./src/app/qc/modals/quality-control-technical-equipment/quality-control-technical-equipment.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualityControlTechnicalEquipmentComponent": () => (/* binding */ QualityControlTechnicalEquipmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/models/invoice-product */ 16195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _warehouse_services_order_technical_equipments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../warehouse/services/order-technical-equipments.service */ 80439);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);











class QualityControlTechnicalEquipmentComponent {
    constructor(dialogRef, fb, invoiceProductService, orderTechnicalEquipmentsService, orderProductService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.invoiceProductService = invoiceProductService;
        this.orderTechnicalEquipmentsService = orderTechnicalEquipmentsService;
        this.orderProductService = orderProductService;
        this.data = data;
        this.isPending = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [this.data.entity.id],
            passed_quantity: [this.data.entity.passed_quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(this.data.entity.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            not_passed_quantity: [this.data.entity.not_passed_quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(this.data.entity.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.quantity = this.data.entity.quantity;
    }
    isDisableCompleteButton() {
        return +this.form.get('passed_quantity').value + +this.form.get('not_passed_quantity').value !== +this.quantity;
    }
    onComplete() {
        if (this.form.valid) {
            this.isPending = true;
            if (this.form.value.passed_quantity + this.form.value.not_passed_quantity === this.data.entity.quantity) {
                if (this.form.value.passed_quantity === this.data.entity.quantity) {
                    this.form.addControl('quality_control', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(_procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PASSED));
                }
                else if (this.form.value.not_passed_quantity === this.data.entity.quantity) {
                    this.form.addControl('quality_control', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(_procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.NOT_PASSED));
                }
                else if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.quantity) {
                    this.form.addControl('quality_control', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(_procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PARTLY_PASSED));
                }
            }
            if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.quantity) {
                if (this.data.isOwnProduction) {
                    this.orderTechnicalEquipmentsService.updatePartly(this.form.value).subscribe(() => {
                        this.isPending = false;
                        this.dialogRef.close(true);
                    });
                }
            }
        }
    }
}
QualityControlTechnicalEquipmentComponent.ɵfac = function QualityControlTechnicalEquipmentComponent_Factory(t) { return new (t || QualityControlTechnicalEquipmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_warehouse_services_order_technical_equipments_service__WEBPACK_IMPORTED_MODULE_2__.OrderTechnicalEquipmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_3__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
QualityControlTechnicalEquipmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QualityControlTechnicalEquipmentComponent, selectors: [["pek-quality-control-technical-equipment"]], decls: 16, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "passed"], ["pInputText", "", "formControlName", "passed_quantity", "min", "0", "type", "number", "id", "passed", 1, "form-control", 3, "max"], ["for", "np"], ["pInputText", "", "formControlName", "not_passed_quantity", "min", "0", "type", "number", "id", "np", 1, "form-control", 3, "max"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Complete", 1, "p-button-success", 3, "disabled", "loading", "click"]], template: function QualityControlTechnicalEquipmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Passed* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Not Passed* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QualityControlTechnicalEquipmentComponent_Template_button_click_15_listener() { return ctx.onComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Quality Control (Name: ", ctx.data.entity.nomenclature.name, ", Quantity: ", ctx.data.entity.quantity, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", ctx.data.entity.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", ctx.data.entity.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isDisableCompleteButton())("loading", ctx.isPending);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFsaXR5LWNvbnRyb2wtdGVjaG5pY2FsLWVxdWlwbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _qc_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qc.routing */ 91403);
/* harmony import */ var _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qc-list/qc-list.component */ 39818);
/* harmony import */ var _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qc-layout/qc-layout.component */ 80099);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/qc-invoice/qc-invoice.component */ 60716);
/* harmony import */ var _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/qc-order/qc-order.component */ 76443);
/* harmony import */ var _modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/quality-control-modal/quality-control-modal.component */ 8370);
/* harmony import */ var _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/protocols/protocols.component */ 82155);
/* harmony import */ var _modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/create-edit-protocol/create-edit-protocol.component */ 19365);
/* harmony import */ var _modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component */ 9648);
/* harmony import */ var _modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/quality-control-technical-equipment/quality-control-technical-equipment.component */ 54552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);














class QcModule {
}
QcModule.ɵfac = function QcModule_Factory(t) { return new (t || QcModule)(); };
QcModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: QcModule });
QcModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](QcModule, { declarations: [_components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent,
        _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_2__.QcLayoutComponent,
        _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_5__.QcInvoiceComponent,
        _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_6__.QcOrderComponent,
        _modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_7__.QualityControlModalComponent,
        _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_8__.ProtocolsComponent,
        _modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_9__.CreateEditProtocolComponent,
        _modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_10__.NomenclatureProtocolPickerComponent,
        _modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_11__.QualityControlTechnicalEquipmentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/qc-layout/qc-layout.component */ 80099);
/* harmony import */ var _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qc-list/qc-list.component */ 39818);
/* harmony import */ var _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qc-order/qc-order.component */ 76443);
/* harmony import */ var _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/qc-invoice/qc-invoice.component */ 60716);
/* harmony import */ var _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/protocols/protocols.component */ 82155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: '',
        component: _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_0__.QcLayoutComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', title: 'Quality Control', component: _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent },
            { path: 'invoice/:id', title: 'Invoice Quality Control', component: _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_3__.QcInvoiceComponent },
            { path: 'order/:id', title: 'Order Quality Control', component: _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_2__.QcOrderComponent },
            { path: 'protocols', title: 'Protocols', component: _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_4__.ProtocolsComponent },
        ]
    }
];
class QcRouting {
}
QcRouting.ɵfac = function QcRouting_Factory(t) { return new (t || QcRouting)(); };
QcRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: QcRouting });
QcRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](QcRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 25703:
/*!*************************************************!*\
  !*** ./src/app/qc/services/protocol.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolService": () => (/* binding */ ProtocolService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-protocol/create-edit-protocol.component */ 19365);
/* harmony import */ var _modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component */ 9648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);








class ProtocolService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
    }
    getForPagination(query) {
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
        return this.httpClient.get(this.API_URL + 'qc_protocols/' + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
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
        return this.httpClient.get(this.API_URL + 'qc_protocols/' + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    getOne(id) {
        return this.httpClient.get(this.API_URL + `qc_protocols/${id}/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    create(send) {
        return this.httpClient.post(this.API_URL + 'qc_protocols/', send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    update(send) {
        return this.httpClient.patch(this.API_URL + `qc_protocols/${send.id}/`, send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    addParagraphs(paragraphs) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(...paragraphs.map(paragraph => this.httpClient.post(this.API_URL + 'qc_protocol_paragraphs/', paragraph)));
    }
    updateParagraphs(paragraphs) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(...paragraphs.map(paragraph => this.httpClient.patch(this.API_URL + `qc_protocol_paragraphs/${paragraph.id}/`, paragraph)));
    }
    deleteParagraphs(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(...ids.map(id => this.httpClient.delete(this.API_URL + `qc_protocol_paragraphs/${id}/`)));
    }
    getParagraphs(query) {
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
        return this.httpClient.get(this.API_URL + 'qc_protocol_paragraphs/' + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    getWarehouseProducts(id) {
        return this.httpClient.get(this.API_URL + `warehouse_products_qc_protocols/${id}/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    addNomenclature(send, id) {
        return this.httpClient.post(this.API_URL + `qc_protocols/${id}/add_protocol_to_nomenclature/`, send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    productsToQc(send) {
        return this.httpClient.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + 'procurement/warehouse_products_qc_protocols/', send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    deleteProtocol(id) {
        return this.httpClient.delete(this.API_URL + 'qc_protocols/' + `${id}/`);
    }
    saveFile(file) {
        return this.httpClient.post(this.API_URL + 'qc_protocols_files/', file).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    deleteFile(id) {
        return this.httpClient.delete(this.API_URL + `qc_protocols_files/${id}/`);
    }
    getFiles(query) {
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
        return this.httpClient.get(this.API_URL + `qc_protocols_files/` + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    downloadFile(id) {
        return this.httpClient.get(this.API_URL + 'qc_protocols_files/' + id + '/download/', { responseType: 'blob' });
    }
    qcSerial(send) {
        return this.httpClient.post(this.API_URL + 'create_update_product_by_serial/', send);
    }
    qcSerialUpdate(send) {
        return this.httpClient.patch(this.API_URL + 'create_update_product_by_serial/', send);
    }
    getProductsQcProtocols(query) {
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
        return this.httpClient.get(this.API_URL + 'warehouse_products_qc_protocols/' + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    updateProductProtocol(send, id) {
        return this.httpClient.patch(this.API_URL + `warehouse_products_qc_protocols/${id}/`, send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    createEditProtocolModal(type, protocol) {
        return this.dialog
            .open(_modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditProtocolComponent, {
            width: '60rem',
            height: 'auto',
            data: { type, protocol },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    addNomenclatureDialog() {
        return this.dialog
            .open(_modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_2__.NomenclatureProtocolPickerComponent, {
            width: '70rem',
            height: 'auto',
            data: {},
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
ProtocolService.ɵfac = function ProtocolService_Factory(t) { return new (t || ProtocolService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
ProtocolService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProtocolService, factory: ProtocolService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7630:
/*!*******************************************!*\
  !*** ./src/app/qc/services/qc.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcService": () => (/* binding */ QcService)
/* harmony export */ });
/* harmony import */ var _modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/quality-control-modal/quality-control-modal.component */ 8370);
/* harmony import */ var _modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/quality-control-technical-equipment/quality-control-technical-equipment.component */ 54552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);




class QcService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    controlProduct(entity, isOwnProduction = false) {
        return this.dialog
            .open(_modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_0__.QualityControlModalComponent, {
            width: '50rem',
            data: { type: 'edit', entity, isOwnProduction },
            disableClose: true,
            autoFocus: false
        })
            .afterClosed()
            .pipe();
    }
    controlTechnicalEquipment(entity, isOwnProduction = false) {
        return this.dialog
            .open(_modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_1__.QualityControlTechnicalEquipmentComponent, {
            width: '50rem',
            data: { type: 'edit', entity, isOwnProduction },
            disableClose: true,
            autoFocus: false
        })
            .afterClosed()
            .pipe();
    }
}
QcService.ɵfac = function QcService_Factory(t) { return new (t || QcService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
QcService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QcService, factory: QcService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_qc_qc_module_ts.js.map