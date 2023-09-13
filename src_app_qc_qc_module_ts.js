"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_qc_qc_module_ts"],{

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

/***/ 99147:
/*!******************************************************************************************************!*\
  !*** ./src/app/qc/components/qc-delivery-chain-print-page/qc-delivery-chain-print-page.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcDeliveryChainPrintPageComponent": () => (/* binding */ QcDeliveryChainPrintPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function QcDeliveryChainPrintPageComponent_div_16_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.chain == null ? null : ctx_r2.chain.customer == null ? null : ctx_r2.chain.customer.country == null ? null : ctx_r2.chain.customer.country.name);
} }
function QcDeliveryChainPrintPageComponent_div_16_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.chain.customer == null ? null : ctx_r3.chain.customer.region == null ? null : ctx_r3.chain.customer.region.name);
} }
function QcDeliveryChainPrintPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div")(3, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "div", 11)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11)(22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Country: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, QcDeliveryChainPrintPageComponent_div_16_span_28_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Region: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, QcDeliveryChainPrintPageComponent_div_16_span_31_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Company Name: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Address: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Phone Number: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.phone_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Website: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.website, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Tax Number: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.tax_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Register Number: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.registration_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Nomenclature: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.supplier_nomenclature, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Description: ", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.comment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.chain == null ? null : ctx_r0.chain.customer == null ? null : ctx_r0.chain.customer.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 14, ctx_r0.chain == null ? null : ctx_r0.chain.status.name), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](37, 16, ctx_r0.chain == null ? null : ctx_r0.chain.estimate_date, "dd.MM.yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Comment: ", ctx_r0.chain == null ? null : ctx_r0.chain.comment, " ");
} }
function QcDeliveryChainPrintPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 10)(2, "div", 13)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Serial number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13)(28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "_________");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 13)(38, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Packing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "_________");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.warehouse_product.serial_number == null ? null : product_r4.warehouse_product.serial_number.type_with_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.warehouse_product.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.warehouse_product.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.translateLocator(product_r4.warehouse_product.locator));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.qc_delivery_status == null ? null : product_r4.qc_delivery_status.name);
} }
class QcDeliveryChainPrintPageComponent {
    constructor(auth) {
        this.auth = auth;
        this.products = [];
        this.currentReqDate = null;
        this.locators = [];
        this.currentDate = new Date();
        this.Nomenclature = _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.Nomenclature;
    }
    ngOnInit() {
    }
    getNomenclature(nomenclature) {
        return nomenclature;
    }
    translateLocator(id) {
        if (!this.locators) {
            return id;
        }
        const locator = this.locators.find(loc => loc.id === id);
        return `${locator.name} R:${locator.row} C:${locator.column} S:${locator.shelf} P:${locator.place}`;
    }
}
QcDeliveryChainPrintPageComponent.ɵfac = function QcDeliveryChainPrintPageComponent_Factory(t) { return new (t || QcDeliveryChainPrintPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
QcDeliveryChainPrintPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QcDeliveryChainPrintPageComponent, selectors: [["pek-qc-delivery-chain-print-page"]], inputs: { products: "products", orderedProducts: "orderedProducts", chain: "chain", chainId: "chainId", customer: "customer", currentReqDate: "currentReqDate", locators: "locators" }, decls: 48, vars: 13, consts: [[1, "qc-delivery-chain-print-page"], [1, "qc-delivery-chain-print-page__header"], [4, "ngIf"], [1, "qc-delivery-chain-print-page__table"], ["class", "qc-delivery-chain-print-page__row", 4, "ngFor", "ngForOf"], [1, "qc-delivery-chain-print-page__bottom"], [1, "qc-delivery-chain-print-page__column"], [1, "qc-delivery-chain-print-page__left"], [1, "qc-delivery-chain-print-page__right"], [2, "white-space", "nowrap"], [1, "qc-delivery-chain-print-page__box"], [1, "qc-delivery-chain-print-page__col_double"], [1, "qc-delivery-chain-print-page__row"], [1, "qc-delivery-chain-print-page__col"]], template: function QcDeliveryChainPrintPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Delivery Chain ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "h2")(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Delivery Chain Creation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, QcDeliveryChainPrintPageComponent_div_16_Template, 40, 19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QcDeliveryChainPrintPageComponent_div_18_Template, 42, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div")(23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div")(28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Signed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 8)(37, "div")(38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Retrieved");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div")(42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Signed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chain.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 7, ctx.chain == null ? null : ctx.chain.created_at, "dd.MM.y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.auth.user.first_name, " ", ctx.auth.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 10, ctx.currentDate, "dd.MM.y"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".qc-delivery-chain-print-page[_ngcontent-%COMP%] {\n  display: block;\n}\n.qc-delivery-chain-print-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.qc-delivery-chain-print-page__header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-right: 25px;\n  width: 25%;\n  margin-bottom: 20px;\n}\n.qc-delivery-chain-print-page__header[_ngcontent-%COMP%]   div.col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.qc-delivery-chain-print-page__box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.qc-delivery-chain-print-page__row[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  border-bottom: none;\n  padding: 10px;\n  border-bottom: 1px solid #000;\n  border-top: 1px solid #000;\n}\n@media print {\n  .qc-delivery-chain-print-page__row[_ngcontent-%COMP%] {\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: avoid;\n  }\n}\n.qc-delivery-chain-print-page__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 2px solid #000;\n}\n.qc-delivery-chain-print-page__col_double[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 5px;\n}\n.qc-delivery-chain-print-page__col[_ngcontent-%COMP%] {\n  width: 25%;\n  padding: 5px;\n}\n.qc-delivery-chain-print-page__col_half[_ngcontent-%COMP%] {\n  width: 12.5%;\n  padding: 5px;\n}\n.qc-delivery-chain-print-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.qc-delivery-chain-print-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n.qc-delivery-chain-print-page__column[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n.qc-delivery-chain-print-page__column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  margin-bottom: 6px;\n}\n.qc-delivery-chain-print-page__column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media print {\n  .qc-delivery-chain-print-page__column[_ngcontent-%COMP%] {\n    page-break-after: auto;\n    page-break-before: auto;\n  }\n}\n.qc-delivery-chain-print-page__left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .qc-delivery-chain-print-page__right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n@media print {\n  .qc-delivery-chain-print-page__bottom[_ngcontent-%COMP%] {\n    page-break-after: auto;\n    page-break-before: auto;\n  }\n}\n.qc-delivery-chain-print-page__table[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  margin-top: 10px;\n}\n@media print {\n  .qc-delivery-chain-print-page__table[_ngcontent-%COMP%] {\n    page-break-after: auto;\n  }\n}\n@media print {\n  .order-product-page.not-last-group[_ngcontent-%COMP%] {\n    page-break-after: always;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWRlbGl2ZXJ5LWNoYWluLXByaW50LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsVUFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUZKO0FBTUU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQU9BLDZCQUFBO0VBQ0EsMEJBQUE7QUFWSjtBQUlJO0VBTEY7SUFNSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7RUFESjtBQUNGO0FBSUk7RUFDRSw2QkFBQTtBQUZOO0FBTUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUpKO0FBT0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQU5KO0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBVEo7QUFXSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVE47QUFZSTtFQUNFLFVBQUE7QUFWTjtBQWFJO0VBZkY7SUFnQkksc0JBQUE7SUFDQSx1QkFBQTtFQVZKO0FBQ0Y7QUFlSTtFQUNFLG1CQUFBO0FBYk47QUFrQkk7RUFERjtJQUVJLHNCQUFBO0lBQ0EsdUJBQUE7RUFmSjtBQUNGO0FBa0JFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQWlCSTtFQUhGO0lBSUksc0JBQUE7RUFkSjtBQUNGO0FBcUJJO0VBREY7SUFFSSx3QkFBQTtFQWpCSjtBQUNGIiwiZmlsZSI6InFjLWRlbGl2ZXJ5LWNoYWluLXByaW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucWMtZGVsaXZlcnktY2hhaW4tcHJpbnQtcGFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgJi5jb2wtMiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fcm93IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xyXG4gICAgICBwYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcclxuICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29sX2RvdWJsZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29sIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAmX19jb2xfaGFsZiB7XHJcbiAgICB3aWR0aDogMTIuNSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICB9XHJcblxyXG4gICZfX2NvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XHJcbiAgICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGVmdCxcclxuICAmX19yaWdodCB7XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYm90dG9tIHtcclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XHJcbiAgICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xyXG4gICAgICAvL3BhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3JkZXItcHJvZHVjdC1wYWdlIHtcclxuICAmLm5vdC1sYXN0LWdyb3VwIHtcclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 33789:
/*!********************************************************************************!*\
  !*** ./src/app/qc/components/qc-delivery-chain/qc-delivery-chain.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcDeliveryChainComponent": () => (/* binding */ QcDeliveryChainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _warehouse_services_delivery_chain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../warehouse/services/delivery-chain.service */ 20289);
/* harmony import */ var _sales_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sales/services/sales-chain-service */ 96976);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _warehouse_services_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../warehouse/services/locator.service */ 47041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_components_hover_detailed_info_component_hover_detailed_info_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/hover-detailed-info-component/hover-detailed-info-component.component */ 48666);
/* harmony import */ var _qc_delivery_chain_print_page_qc_delivery_chain_print_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../qc-delivery-chain-print-page/qc-delivery-chain-print-page.component */ 99147);



















const _c0 = ["dt"];
function QcDeliveryChainComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.onGoToChainLink()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" #", ctx_r0.chain == null ? null : ctx_r0.chain.serial_number, " ");
} }
function QcDeliveryChainComponent_ng_template_14_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r13.chain == null ? null : ctx_r13.chain.customer == null ? null : ctx_r13.chain.customer.country == null ? null : ctx_r13.chain.customer.country.name);
} }
function QcDeliveryChainComponent_ng_template_14_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.chain.customer == null ? null : ctx_r14.chain.customer.region == null ? null : ctx_r14.chain.customer.region.name);
} }
function QcDeliveryChainComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23)(1, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 25)(4, "div", 26)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 27)(20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Country: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, QcDeliveryChainComponent_ng_template_14_span_26_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " Region: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, QcDeliveryChainComponent_ng_template_14_span_29_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Company Name: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Address: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Email: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Phone Number: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.phone_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Website: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.website, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Tax Number: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.tax_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Register Number: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.registration_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Nomenclature: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.supplier_nomenclature, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Description: ", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.comment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.chain == null ? null : ctx_r1.chain.customer == null ? null : ctx_r1.chain.customer.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 14, ctx_r1.chain == null ? null : ctx_r1.chain.status.name), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](35, 16, ctx_r1.chain == null ? null : ctx_r1.chain.estimate_date, "dd.MM.yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Comment: ", ctx_r1.chain == null ? null : ctx_r1.chain.comment, " ");
} }
function QcDeliveryChainComponent_ng_template_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Choose the Product to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function QcDeliveryChainComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, QcDeliveryChainComponent_ng_template_21_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_21_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.onCompleteMaterialQcList(ctx_r16.QC_STAGES["qty_control"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.onCompleteMaterialQcList(ctx_r18.QC_STAGES["packing_control"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_21_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.onResetConfirmation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.selectedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx_r3.selectedProducts == null ? null : ctx_r3.selectedProducts.length) === 0 || ctx_r3.chain.qc_delivery_status.qc_stage == ctx_r3.QC_STAGES["done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx_r3.selectedProducts == null ? null : ctx_r3.selectedProducts.length) === 0 || ctx_r3.chain.qc_delivery_status.qc_stage == ctx_r3.QC_STAGES["done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx_r3.selectedProducts == null ? null : ctx_r3.selectedProducts.length) === 0 || ctx_r3.chain.qc_delivery_status.qc_stage == ctx_r3.QC_STAGES["done"]);
} }
function QcDeliveryChainComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function QcDeliveryChainComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 36)(4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Quantity Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Packing Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function QcDeliveryChainComponent_ng_template_24_pek_hover_detailed_info_component_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", id_r28, " ");
} }
function QcDeliveryChainComponent_ng_template_24_pek_hover_detailed_info_component_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "pek-hover-detailed-info-component", 50)(1, "span", 51)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, QcDeliveryChainComponent_ng_template_24_pek_hover_detailed_info_component_12_div_4_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const i_r21 = ctx_r29.rowIndex;
    const product_r20 = ctx_r29.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("moveLeft", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-fixed", ctx_r22.products.length <= 10)("is-absolute", ctx_r22.products.length > 10)("is-last", ctx_r22.products.length - 10 <= i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", product_r20.ids);
} }
function QcDeliveryChainComponent_ng_template_24_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_24_ng_container_44_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.onUpdateItems(product_r20, 1, true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", product_r20.qc_delivery_status.qc_stage != 1 || product_r20.qc_delivery_status.is_qc_completed);
} }
function QcDeliveryChainComponent_ng_template_24_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_24_ng_container_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.onUpdateItems(product_r20, 1, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", product_r20.qc_delivery_status.qc_stage != 1 || product_r20.qc_delivery_status.is_qc_completed);
} }
function QcDeliveryChainComponent_ng_template_24_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_24_ng_container_48_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40); const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r38.onUpdateItems(product_r20, 2, true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (product_r20.qc_delivery_status.qc_stage != 2 || product_r20.qc_delivery_status.is_qc_completed) && product_r20.qc_delivery_status.id != 3);
} }
function QcDeliveryChainComponent_ng_template_24_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_24_ng_container_49_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.onUpdateItems(product_r20, 2, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (product_r20.qc_delivery_status.qc_stage != 2 || product_r20.qc_delivery_status.is_qc_completed) && product_r20.qc_delivery_status.id != 3);
} }
function QcDeliveryChainComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 42)(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-tableCheckbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 36)(4, "div", 37)(5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 45)(9, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, QcDeliveryChainComponent_ng_template_24_pek_hover_detailed_info_component_12_Template, 5, 9, "pek-hover-detailed-info-component", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 38)(14, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "td", 47)(19, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td", 39)(24, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Serial number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "td", 40)(29, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "td", 39)(33, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "td", 39)(39, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "td", 48)(43, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, QcDeliveryChainComponent_ng_template_24_ng_container_44_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, QcDeliveryChainComponent_ng_template_24_ng_container_45_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "td", 48)(47, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, QcDeliveryChainComponent_ng_template_24_ng_container_48_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, QcDeliveryChainComponent_ng_template_24_ng_container_49_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r20 = ctx.$implicit;
    const i_r21 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pSelectableRow", product_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", product_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r21 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (product_r20.ids == null ? null : product_r20.ids.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.warehouse_product.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.warehouse_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.warehouse_product.serial_number == null ? null : product_r20.warehouse_product.serial_number.type_with_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.translateLocator(product_r20.warehouse_product.locator));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r20.qc_delivery_status == null ? null : product_r20.qc_delivery_status.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", (ctx_r6.chain == null ? null : ctx_r6.chain.qc_delivery_status == null ? null : ctx_r6.chain.qc_delivery_status.qc_stage) != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !product_r20.qc_delivery_status.is_qc_completed || product_r20.qc_delivery_status.qc_stage != 1 || product_r20.qc_delivery_status.id === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !product_r20.qc_delivery_status.is_qc_completed && product_r20.qc_delivery_status.qc_stage === 1 || product_r20.qc_delivery_status.id === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", product_r20.qc_delivery_status.qc_stage != 2 && product_r20.qc_delivery_status.id != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !product_r20.qc_delivery_status.is_qc_completed || product_r20.qc_delivery_status.qc_stage != 2 || product_r20.qc_delivery_status.id === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !product_r20.qc_delivery_status.is_qc_completed && product_r20.qc_delivery_status.qc_stage === 2 || product_r20.qc_delivery_status.qc_stage === 1 || product_r20.qc_delivery_status.id === 5);
} }
function QcDeliveryChainComponent_ng_template_25_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 58);
} }
function QcDeliveryChainComponent_ng_template_25_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function QcDeliveryChainComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 55)(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, QcDeliveryChainComponent_ng_template_25_i_2_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, QcDeliveryChainComponent_ng_template_25_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("colspan", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
} }
function QcDeliveryChainComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_ng_template_26_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](20); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r2.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function QcDeliveryChainComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 60)(1, "p-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_div_27_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](20); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r2.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function QcDeliveryChainComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 61)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "pek-qc-delivery-chain-print-page", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chain", ctx_r10.chain)("products", ctx_r10.products)("currentReqDate", ctx_r10.currentReqDate)("customer", ctx_r10.chain == null ? null : ctx_r10.chain.customer)("locators", ctx_r10.locators);
} }
const _c1 = function () { return ["name"]; };
let QcDeliveryChainComponent = class QcDeliveryChainComponent {
    constructor(deliveryService, salesChainService, auth, route, router, modalService, locatorService) {
        this.deliveryService = deliveryService;
        this.salesChainService = salesChainService;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.locatorService = locatorService;
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url + 'dash/';
        this.isShowPrint = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.QC_STAGES = {
            "qty_control": 1,
            "packing_control": 2,
            "done": 3
        };
        this.currentReqDate = null;
        this.selectedProducts = null;
        this.isLoading = true;
        this.products = [];
        this.locators = [];
        this.listProducts = [];
        this.chainId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.firstPage = 0;
    }
    ngOnInit() {
        this.getDeliveryChain();
        this.getItems();
        this.getLocators();
    }
    getDeliveryChain() {
        this.deliveryService.getChainById(this.chainId).subscribe(chain => {
            this.chain = chain;
            this.isLoading = false;
        });
    }
    getLocators() {
        this.locatorService.get().subscribe(locators => {
            this.locators = locators;
        });
    }
    getItems() {
        this.selectedProducts = [];
        this.deliveryService.getDeliveryItems(this.chainId).subscribe(products => {
            this.products = products;
        });
    }
    complete() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                this.isLoading = false;
                this.deliveryService.completeDeliveryQc(+this.chainId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => this.router.navigate(['../../'], { relativeTo: this.route }));
            }
        });
    }
    onUpdateItems(product, qc_stage, confirmation_flag) {
        let listId = [];
        this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(confirm => confirm)).subscribe(() => {
            listId.push(product.id);
            const requestData = {
                "reservation_ids": listId,
                "chain_qc_delivery_status_id": this.chain.qc_delivery_status.id,
                "confirmation_flag": confirmation_flag,
                "qc_stage": qc_stage
            };
            this.salesChainService.updateItem(requestData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => {
                this.getDeliveryChain();
                this.getItems();
            });
        });
    }
    onResetConfirmation() {
        let listId = [];
        this.selectedProducts.forEach(product => {
            listId.push(product.id);
        });
        const requestData = {
            "reservation_ids": listId,
        };
        this.salesChainService.resetConfirmation(requestData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => {
            this.getDeliveryChain();
            this.getItems();
        });
    }
    onCompleteMaterialQcList(qc_stage) {
        let listId = [];
        this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(confirm => confirm)).subscribe(() => {
            this.selectedProducts.forEach(product => {
                listId.push(product.id);
            });
            const requestData = {
                "reservation_ids": listId,
                "qc_stage": qc_stage,
            };
            this.salesChainService.updateItem(requestData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => {
                this.getDeliveryChain();
                this.getItems();
            });
        });
    }
    onGoToChainLink() {
        window.open(`/delivery-chains/chains/${this.chainId}`);
    }
    printPage() {
        this.isShowPrint = true;
        setTimeout(() => {
            window.print();
        });
    }
    onWindowAfterPrint() {
        this.isShowPrint = false;
    }
    printClosed() {
        this.isShowPrint = false;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    translateLocator(id) {
        if (!this.locators) {
            return id;
        }
        const locator = this.locators.find(loc => loc.id === id);
        return `${locator.name} R:${locator.row} C:${locator.column} S:${locator.shelf} P:${locator.place}`;
    }
};
QcDeliveryChainComponent.ɵfac = function QcDeliveryChainComponent_Factory(t) { return new (t || QcDeliveryChainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_warehouse_services_delivery_chain_service__WEBPACK_IMPORTED_MODULE_1__.DeliveryChainService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sales_services_sales_chain_service__WEBPACK_IMPORTED_MODULE_2__.SalesChainService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_warehouse_services_locator_service__WEBPACK_IMPORTED_MODULE_5__.LocatorService)); };
QcDeliveryChainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: QcDeliveryChainComponent, selectors: [["pek-qc-delivery-chain"]], viewQuery: function QcDeliveryChainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.dateTable = _t.first);
    } }, hostBindings: function QcDeliveryChainComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("afterprint", function QcDeliveryChainComponent_afterprint_HostBindingHandler() { return ctx.onWindowAfterPrint(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"])("afterprint", function QcDeliveryChainComponent_afterprint_HostBindingHandler() { return ctx.printClosed(); });
    } }, decls: 29, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [3, "click", 4, "ngIf"], [1, "page__tools"], ["pButton", "", "type", "button", "label", "Print", 1, "p-button-success", "mr-2", 3, "loading", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "mr-2", 3, "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single"], ["pTemplate", "caption"], ["scrollHeight", "calc(100vh - 18.8rem)", "dataKey", "id", 1, "adaptive-table", "print-table", 3, "paginator", "scrollable", "rows", "value", "first", "globalFilterFields", "selection", "firstChange", "selectionChange"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["class", "print-page", 4, "ngIf"], [3, "click"], [1, "table-tools"], [1, "subtitle"], [1, "row"], [1, "col-md-5"], [1, "col-md-7"], [4, "ngIf"], [1, "d-flex", "table-caption"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "QTY Confirm", 1, "ml-auto", "mr-2", "p-button-success", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Packing Confirm", 1, "mr-2", "p-button-success", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-spinner", "label", "Reset Confirmation", 1, "mr-2", "p-button-danger", 3, "disabled", "click"], [1, "index-header"], [2, "width", "3%"], [1, "text-center", 2, "width", "5%"], [1, "row-toggler"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "14%"], [1, "text-center", 2, "width", "4%"], [1, "pagebreak", 3, "pSelectableRow"], [3, "value"], [1, "td-title"], [1, "text-center", "ids-container", "hovered-info", 2, "width", "5%"], [3, "moveLeft", 4, "ngIf"], [1, "serial-numbers-container", 2, "width", "15%"], [2, "width", "4%"], [1, "table-buttons"], [3, "moveLeft"], [1, "ids"], [4, "ngFor", "ngForOf"], ["pButton", "", "type", "button", "icon", "pi pi-check", 1, "p-button-success", "ml-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "ml-2", 3, "disabled", "click"], [1, "tr-spinner"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "print-page"], [3, "chain", "products", "currentReqDate", "customer", "locators"]], template: function QcDeliveryChainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Products for Delivery Chain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, QcDeliveryChainComponent_a_6_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_Template_button_click_8_listener() { return ctx.printPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QcDeliveryChainComponent_Template_button_click_9_listener() { return ctx.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "p-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, QcDeliveryChainComponent_ng_template_14_Template, 38, 19, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 10)(19, "p-table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("firstChange", function QcDeliveryChainComponent_Template_p_table_firstChange_19_listener($event) { return ctx.firstPage = $event; })("selectionChange", function QcDeliveryChainComponent_Template_p_table_selectionChange_19_listener($event) { return ctx.selectedProducts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, QcDeliveryChainComponent_ng_template_21_Template, 5, 4, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, QcDeliveryChainComponent_ng_template_22_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, QcDeliveryChainComponent_ng_template_23_Template, 24, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, QcDeliveryChainComponent_ng_template_24_Template, 50, 19, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, QcDeliveryChainComponent_ng_template_25_Template, 4, 3, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, QcDeliveryChainComponent_ng_template_26_Template, 2, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, QcDeliveryChainComponent_div_27_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, QcDeliveryChainComponent_div_28_Template, 3, 5, "div", 21);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("module", "warehouse")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !(ctx.chain == null ? null : ctx.chain.qc_delivery_status == null ? null : ctx.chain.qc_delivery_status.is_qc_completed));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("paginator", ctx.products.length > 0)("scrollable", !_r2.paginator)("rows", 10)("value", ctx.products)("first", ctx.firstPage)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](14, _c1))("selection", ctx.selectedProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r2.paginator && !ctx.isLoading && ctx.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isShowPrint);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_17__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_17__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_17__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_6__.ModuleIconComponent, _shared_components_hover_detailed_info_component_hover_detailed_info_component_component__WEBPACK_IMPORTED_MODULE_7__.HoverDetailedInfoComponentComponent, _qc_delivery_chain_print_page_qc_delivery_chain_print_page_component__WEBPACK_IMPORTED_MODULE_8__.QcDeliveryChainPrintPageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["@page {\n  size: portrait !important;\n}\n.table-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.disabled[_ngcontent-%COMP%] {\n  background: #d6d6d6 !important;\n}\n@media print {\n  .page[_ngcontent-%COMP%], .page__content[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.row-toggler[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.row-toggler[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.request-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.request-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 1.2;\n  margin-bottom: 25px;\n}\n.request-row[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  box-sizing: border-box;\n  padding-right: 30px;\n}\n.request-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 19px;\n  margin: 0 0 10px;\n  line-height: 1.2;\n}\n.request-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n.request-row[_ngcontent-%COMP%]:nth-child(1), .request-row[_ngcontent-%COMP%]:nth-child(2), .request-row[_ngcontent-%COMP%]:nth-child(5), .request-row[_ngcontent-%COMP%]:nth-child(6) {\n  width: 30%;\n}\n.request-row[_ngcontent-%COMP%]:nth-child(3), .request-row[_ngcontent-%COMP%]:nth-child(4) {\n  width: 20%;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: flex;\n}\n.user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: space-between;\n  margin-top: 50px;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 20px;\n}\n.user-info[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.print-info[_ngcontent-%COMP%] {\n  display: none;\n}\n.root-plans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.root-plans[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n  .orders-tree .p-treetable-wrapper {\n  max-height: calc(100vh - 16.625rem);\n  overflow: auto;\n}\n  table tbody tr.qr-code-scanned {\n  background: #e1efe2 !important;\n}\n  table tbody tr.partly-scanned {\n  background: #f5dfe1 !important;\n}\n  table tbody tr.last-scanned {\n  box-shadow: inset 0 0 10px 7px rgba(58, 83, 108, 0.25);\n}\n  table tbody .is-added-after-order-creation {\n  background: #fb8f8f !important;\n}\n  table tbody .is-wrong-qc {\n  background: #f75151 !important;\n}\n.colors[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-left: 1rem;\n}\n.colors__color[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.colors__color-block[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n}\n.colors__color-block_scanned[_ngcontent-%COMP%] {\n  background: #e1efe2;\n}\n.colors__color-block_partly-scanned[_ngcontent-%COMP%] {\n  background: #f5dfe1;\n}\n.in-plan[_ngcontent-%COMP%] {\n  background-color: rgba(124, 133, 245, 0.52) !important;\n}\n.print-page[_ngcontent-%COMP%] {\n  z-index: 9999;\n  background: #fff;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: none;\n  height: 100%;\n}\n@media print {\n  .print-page[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media print {\n    .layout-header {\n    display: none;\n  }\n}\n.ids-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.order-ids-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.order-ids-container[_ngcontent-%COMP%]   .orders-ids[_ngcontent-%COMP%] {\n  display: none;\n}\n.order-ids-container[_ngcontent-%COMP%]:hover   .orders-ids[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  right: -100%;\n  top: 0;\n  background-color: white;\n  padding: 0.5rem 1rem;\n  z-index: 1;\n  border-radius: 0.625rem;\n  box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.15);\n}\n.serial-numbers-container[_ngcontent-%COMP%] {\n  color: #495057 !important;\n  position: relative;\n}\n.serial-numbers-container[_ngcontent-%COMP%]   .serial-numbers[_ngcontent-%COMP%] {\n  display: none;\n  color: #495057 !important;\n}\n.serial-numbers-container[_ngcontent-%COMP%]:hover   .serial-numbers[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: -11rem;\n  width: 11rem;\n  height: auto;\n  padding: 0.5rem 1rem;\n  color: #495057 !important;\n  background-color: white;\n  border-radius: 0.625rem;\n  box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWRlbGl2ZXJ5LWNoYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUFESjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBR0U7RUFDRSw4QkFBQTtBQUFKO0FBS0k7RUFGRjs7SUFHSSxhQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDRSxvQkFBQTtBQUFOO0FBSUU7RUFDRSxlQUFBO0FBREo7QUFHSTtFQUNFLDBCQUFBO0FBRE47QUFLRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZOO0FBS0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQUhOO0FBTUk7RUFJRSxVQUFBO0FBUE47QUFVSTtFQUVFLFVBQUE7QUFUTjtBQWFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFWSjtBQVlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQWFJO0VBQ0UsVUFBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVpKO0FBY0k7RUFDRSxZQUFBO0FBWk47QUFnQk07RUFDRSxtQkFBQTtBQWRSO0FBbUJFO0VBQ0UsYUFBQTtBQWhCSjtBQW1CRTtFQUNFLGVBQUE7QUFoQko7QUFrQkk7RUFDRSwwQkFBQTtBQWhCTjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEJKO0FBdUJNO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBcEJSO0FBMEJRO0VBQ0UsOEJBQUE7QUF4QlY7QUEyQlE7RUFDRSw4QkFBQTtBQXpCVjtBQTRCUTtFQUNFLHNEQUFBO0FBMUJWO0FBNkJRO0VBQ0UsOEJBQUE7QUEzQlY7QUE4QlE7RUFDRSw4QkFBQTtBQTVCVjtBQW1DRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBaENKO0FBa0NJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaENOO0FBbUNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQWpDTjtBQW1DTTtFQUNFLG1CQUFBO0FBakNSO0FBb0NNO0VBQ0UsbUJBQUE7QUFsQ1I7QUF1Q0U7RUFDRSxzREFBQTtBQXBDSjtBQXVDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUVBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBckNKO0FBdUNJO0VBVkY7SUFXSSxjQUFBO0VBcENKO0FBQ0Y7QUF5Q0k7RUFDRTtJQUNFLGFBQUE7RUF0Q047QUFDRjtBQTJDRTtFQUNFLGtCQUFBO0FBeENKO0FBMkNFO0VBQ0Usa0JBQUE7QUF4Q0o7QUEwQ0k7RUFDRSxhQUFBO0FBeENOO0FBMkNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUF6Q1I7QUE4Q0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBM0NKO0FBNkNJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBM0NOO0FBK0NNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FBN0NSIiwiZmlsZSI6InFjLWRlbGl2ZXJ5LWNoYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AcGFnZSB7XHJcbiAgICBzaXplOiBwb3J0cmFpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGFibGUtYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5kaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQ6ICNkNmQ2ZDYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UsXHJcbiAgLnBhZ2VfX2NvbnRlbnQge1xyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJvdy10b2dnbGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAudG9nZ2xlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVxdWVzdC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmVxdWVzdC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXF1ZXN0LXJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICBcclxuICAgICY6bnRoLWNoaWxkKDEpLFxyXG4gICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAmOm50aC1jaGlsZCg1KSxcclxuICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICBcclxuICAgICY6bnRoLWNoaWxkKDMpLFxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXNlci1pbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICBcclxuICAgIHAge1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGVmdCwgLnJpZ2h0IHtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmludC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb290LXBsYW5zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRvZ2dsZS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm9yZGVycy10cmVlIHtcclxuICAgICAgLnAtdHJlZXRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNi42MjVyZW0pO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHRib2R5IHtcclxuICAgICAgICB0ci5xci1jb2RlLXNjYW5uZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2UxZWZlMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ci5wYXJ0bHktc2Nhbm5lZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVkZmUxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRyLmxhc3Qtc2Nhbm5lZCB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCA3cHggcmdiKDU4IDgzIDEwOCAvIDI1JSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5pcy1hZGRlZC1hZnRlci1vcmRlci1jcmVhdGlvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmI4ZjhmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5pcy13cm9uZy1xYyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc1MTUxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xvcnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIFxyXG4gICAgJl9fY29sb3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fY29sb3ItYmxvY2sge1xyXG4gICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIFxyXG4gICAgICAmX3NjYW5uZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMWVmZTI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJl9wYXJ0bHktc2Nhbm5lZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZGZlMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW4tcGxhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0IDEzMyAyNDUgLyA1MiUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmludC1wYWdlIHtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAubGF5b3V0LWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuaWRzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1pZHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgIC5vcmRlcnMtaWRzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAub3JkZXJzLWlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlcmlhbC1udW1iZXJzLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgLnNlcmlhbC1udW1iZXJzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuc2VyaWFsLW51bWJlcnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogLTExcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });
QcDeliveryChainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)()
], QcDeliveryChainComponent);



/***/ }),

/***/ 91769:
/*!******************************************************************************!*\
  !*** ./src/app/qc/components/qc-delivery-list/qc-delivery-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcDeliveryListComponent": () => (/* binding */ QcDeliveryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _shared_services_delivery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/delivery.service */ 24345);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _procurement_services_qc_delivery_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../procurement/services/qc-delivery-status.service */ 60139);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_pickers_qc_delivery_statuses_picker_qc_delivery_statuses_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pickers/qc-delivery-statuses-picker/qc-delivery-statuses-picker.component */ 83331);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/calendar */ 32547);



















function QcDeliveryListComponent_ng_container_38_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0421hoose the Outsoursing Materials Delivery to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["chain", a1]; };
function QcDeliveryListComponent_ng_container_38_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, QcDeliveryListComponent_ng_container_38_ng_template_4_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_38_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.onSelectOrderType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_38_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.onSelectOrderType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", !ctx_r7.selectedDeliveryChain);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r7.selectedDeliveryChain == null ? null : ctx_r7.selectedDeliveryChain.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r7.invoicesOrderType === "list");
} }
function QcDeliveryListComponent_ng_container_38_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_38_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " QC Started Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, QcDeliveryListComponent_ng_container_38_ng_template_5_th_5_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Delivery Chain ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Sales Chain ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.showClosedChains);
} }
function QcDeliveryListComponent_ng_container_38_ng_template_6_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 44)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 1, order_r18 == null ? null : order_r18.qc_delivery_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcDeliveryListComponent_ng_container_38_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 39)(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, QcDeliveryListComponent_ng_container_38_ng_template_6_td_6_Template, 4, 4, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 38)(8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_38_ng_template_6_Template_a_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const order_r18 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.onGoToDeliveryChainLink(order_r18.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 38)(11, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_38_ng_template_6_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const order_r18 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.onGoToSalesChainLink(order_r18.sales_chain_id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r18 = ctx.$implicit;
    const i_r19 = ctx.rowIndex;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", order_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 8, order_r18.qc_delivery_started_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.showClosedChains);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", order_r18.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", order_r18.sales_chain_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", order_r18.customer == null ? null : order_r18.customer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", order_r18.qc_delivery_status == null ? null : order_r18.qc_delivery_status.name, " ");
} }
function QcDeliveryListComponent_ng_container_38_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 47);
} }
function QcDeliveryListComponent_ng_container_38_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_38_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, QcDeliveryListComponent_ng_container_38_ng_template_7_i_2_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, QcDeliveryListComponent_ng_container_38_ng_template_7_span_3_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.isLoadingChains);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.isLoadingChains);
} }
function QcDeliveryListComponent_ng_container_38_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_38_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r6.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_38_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49)(1, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_38_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r6.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function QcDeliveryListComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20)(2, "p-table", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function QcDeliveryListComponent_ng_container_38_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.selectedDeliveryChain = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, QcDeliveryListComponent_ng_container_38_ng_template_4_Template, 5, 7, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, QcDeliveryListComponent_ng_container_38_ng_template_5_Template, 14, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, QcDeliveryListComponent_ng_container_38_ng_template_6_Template, 17, 11, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, QcDeliveryListComponent_ng_container_38_ng_template_7_Template, 4, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, QcDeliveryListComponent_ng_container_38_ng_template_8_Template, 2, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, QcDeliveryListComponent_ng_container_38_div_9_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r0.deliveryChainsList.length > 0)("rows", 10)("selection", ctx_r0.selectedDeliveryChain)("value", ctx_r0.deliveryChainsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r6.paginator && !ctx_r0.isLoadingChains && ctx_r0.ordersList.length > 0);
} }
function QcDeliveryListComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " In development ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function QcDeliveryListComponent_ng_container_41_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u0421hoose the Outsoursing Materials Delivery to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c1 = function (a2) { return ["../", "delivery", a2]; };
function QcDeliveryListComponent_ng_container_41_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, QcDeliveryListComponent_ng_container_41_ng_template_4_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_41_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.onSelectOrderType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_41_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.onSelectOrderType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r34.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", !ctx_r34.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, ctx_r34.selectedOrderItem == null ? null : ctx_r34.selectedOrderItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r34.invoicesOrderType === "list");
} }
function QcDeliveryListComponent_ng_container_41_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_41_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " QC Started Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, QcDeliveryListComponent_ng_container_41_ng_template_5_th_5_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r35.showClosedOrders);
} }
function QcDeliveryListComponent_ng_container_41_ng_template_6_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 44)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 1, order_r45 == null ? null : order_r45.qc_material_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcDeliveryListComponent_ng_container_41_ng_template_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_plan_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", root_plan_r51.list_product.nomenclature.code, "~", root_plan_r51.list_product.nomenclature.name, " ");
} }
function QcDeliveryListComponent_ng_container_41_ng_template_6_span_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_41_ng_template_6_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, QcDeliveryListComponent_ng_container_41_ng_template_6_span_12_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r52 = ctx.$implicit;
    const last_r53 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", tech_r52, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !last_r53);
} }
function QcDeliveryListComponent_ng_container_41_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 39)(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, QcDeliveryListComponent_ng_container_41_ng_template_6_td_6_Template, 4, 4, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, QcDeliveryListComponent_ng_container_41_ng_template_6_div_10_Template, 2, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, QcDeliveryListComponent_ng_container_41_ng_template_6_span_12_Template, 3, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r45 = ctx.$implicit;
    const i_r46 = ctx.rowIndex;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", order_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r46 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 8, order_r45.qc_material_started_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r36.showClosedOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", order_r45.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", order_r45.unique_root_production_plans);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", order_r45.ordered_products_unique_technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", order_r45.qc_delivery_status == null ? null : order_r45.qc_delivery_status.name, " ");
} }
function QcDeliveryListComponent_ng_container_41_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 47);
} }
function QcDeliveryListComponent_ng_container_41_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_41_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, QcDeliveryListComponent_ng_container_41_ng_template_7_i_2_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, QcDeliveryListComponent_ng_container_41_ng_template_7_span_3_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r37.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r37.isLoadingOrders);
} }
function QcDeliveryListComponent_ng_container_41_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_41_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r33.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function QcDeliveryListComponent_ng_container_41_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49)(1, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QcDeliveryListComponent_ng_container_41_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r33.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function QcDeliveryListComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20)(2, "p-table", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function QcDeliveryListComponent_ng_container_41_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.selectedOrderItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, QcDeliveryListComponent_ng_container_41_ng_template_4_Template, 5, 7, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, QcDeliveryListComponent_ng_container_41_ng_template_5_Template, 14, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, QcDeliveryListComponent_ng_container_41_ng_template_6_Template, 15, 11, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, QcDeliveryListComponent_ng_container_41_ng_template_7_Template, 4, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, QcDeliveryListComponent_ng_container_41_ng_template_8_Template, 2, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, QcDeliveryListComponent_ng_container_41_div_9_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r2.ordersList.length > 0)("rows", 10)("selection", ctx_r2.selectedOrderItem)("value", ctx_r2.ordersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r33.paginator && !ctx_r2.isLoadingOrders && ctx_r2.ordersList.length > 0);
} }
function QcDeliveryListComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " In development ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function QcDeliveryListComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class QcDeliveryListComponent {
    constructor(deliveryService, orderService, productStructureCategoryService, adapterService, qcDeliveryStatusService, fb) {
        this.deliveryService = deliveryService;
        this.orderService = orderService;
        this.productStructureCategoryService = productStructureCategoryService;
        this.adapterService = adapterService;
        this.qcDeliveryStatusService = qcDeliveryStatusService;
        this.fb = fb;
        this.selectedQcDeliveryStatuses = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.deliveryChains = [];
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url + 'dash/';
        this.invoicesOrderType = 'list';
        this.isLoadingOrders = true;
        this.isLoadingChains = true;
        this.isLoadingStatuses = true;
        this.showClosedOrders = false;
        this.showClosedChains = false;
        this.ordersList = [];
        this.deliveryChainsList = [];
        this.expanseMap = {};
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
        this.destroyOrders$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.destroyChains$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.destroyQcDeliveryStatuses$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.ordersQuery = [
            { name: 'needs_delivery_qc', value: true },
            { name: 'by_qc_module_permission', value: true }
        ];
        this.chainsQuery = [
            { name: 'needs_delivery_qc', value: true },
            { name: 'by_qc_module_permission', value: true }
        ];
        this.searchForm = this.fb.group({
            supplier: [null],
            qc_closed_date_after: [null],
            qc_closed_date_before: [null],
            qc_delivery_started_date_after: [null],
            qc_delivery_started_date_before: [null],
            qc_delivery_closed_date_after: [null],
            qc_delivery_closed_date_before: [null],
            accounting_type: [null],
            material_or_service: [null],
            purchase_categories: [null],
            qc_delivery_status: [null],
            qc_delivery_status__in: [null],
        });
    }
    ngOnInit() {
        this.getQcDeliveryStatuses();
        this.getDeliveryChains();
        this.getServices();
    }
    searchItems() {
        this.searchChains();
        this.searchServices();
    }
    searchChains() {
        this.isLoadingOrders = true;
        this.destroyOrders$.next(true);
        this.orders = [];
        this.selectedOrderItem = null;
        this.chainsQuery = [
            { name: 'by_qc_module_permission', value: true }
        ];
        if (!this.searchForm.get('qc_delivery_closed_date_after').value
            && !this.searchForm.get('qc_delivery_closed_date_before').value) {
            this.chainsQuery.push({
                name: 'needs_delivery_qc', value: true
            });
            this.showClosedChains = false;
        }
        else {
            this.showClosedChains = true;
        }
        if (this.searchForm.get('qc_delivery_started_date_after').value) {
            this.chainsQuery.push({
                name: 'qc_delivery_started_date_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_after').value)
            });
        }
        if (this.searchForm.get('qc_delivery_started_date_before').value) {
            this.chainsQuery.push({
                name: 'qc_delivery_started_date_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_before').value)
            });
        }
        if (this.searchForm.get('qc_delivery_closed_date_after').value) {
            this.chainsQuery.push({
                name: 'qc_delivery_closed_date_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_after').value)
            });
        }
        if (this.searchForm.get('qc_delivery_closed_date_before').value) {
            this.chainsQuery.push({
                name: 'qc_delivery_closed_date_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_before').value)
            });
        }
        if (this.searchForm.get('qc_delivery_status__in').value) {
            this.chainsQuery.push({
                name: 'qc_delivery_status__in',
                value: this.searchForm.get('qc_delivery_status__in').value
            });
        }
        this.getDeliveryChains();
    }
    searchServices() {
        this.isLoadingOrders = true;
        this.destroyOrders$.next(true);
        this.orders = [];
        this.selectedOrderItem = null;
        this.ordersQuery = [
            { name: 'by_qc_module_permission', value: true }
        ];
        if (!this.searchForm.get('qc_delivery_closed_date_after').value
            && !this.searchForm.get('qc_delivery_closed_date_before').value) {
            this.ordersQuery.push({
                name: 'needs_delivery_qc', value: true
            });
            this.showClosedOrders = false;
        }
        else {
            this.showClosedOrders = true;
        }
        if (this.searchForm.get('qc_delivery_started_date_after').value) {
            this.ordersQuery.push({
                name: 'qc_delivery_started_date_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_after').value)
            });
        }
        if (this.searchForm.get('qc_delivery_started_date_before').value) {
            this.ordersQuery.push({
                name: 'qc_delivery_started_date_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_before').value)
            });
        }
        if (this.searchForm.get('qc_delivery_closed_date_after').value) {
            this.ordersQuery.push({
                name: 'qc_delivery_closed_date_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_after').value)
            });
        }
        if (this.searchForm.get('qc_delivery_closed_date_before').value) {
            this.ordersQuery.push({
                name: 'qc_delivery_closed_date_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_before').value)
            });
        }
        if (this.searchForm.get('qc_delivery_status__in').value) {
            this.ordersQuery.push({
                name: 'qc_delivery_status__in',
                value: this.searchForm.get('qc_delivery_status__in').value
            });
        }
        this.getServices();
    }
    onChoiceQcDeliveryStatuses(statuses) {
        this.searchForm.get('qc_delivery_status__in').patchValue(statuses?.join(',') || null);
        this.searchItems();
    }
    getQcDeliveryStatuses() {
        this.qcDeliveryStatusService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyQcDeliveryStatuses$)).subscribe(qcDeliveryStatus => {
            this.qcDeliveryStatus = qcDeliveryStatus;
            this.isLoadingStatuses = false;
        });
    }
    getDeliveryChains() {
        this.deliveryService.get(this.chainsQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyChains$)).subscribe(chains => {
            // this.count = orders.length;
            this.deliveryChains = chains;
            // this.prepareOrderItems();
            // if (this.isStartOnePage) {
            //   this.paginator?.changePage(0);
            // }
            // this.isStartOnePage = false;
            this.resetChainsList(),
                this.isLoadingChains = false;
        });
    }
    getServices() {
        this.orderService.get(this.ordersQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyOrders$)).subscribe(orders => {
            this.orders = orders;
            this.makeUniqueProductionPlans(),
                // this.fillOwnProductionWithData(),
                this.resetOrdersList(),
                this.isLoadingOrders = false;
            this.orders.forEach(order => {
                order.ordered_products_unique_technologies = [];
                order.order_products.forEach(product => {
                    if (product.current_technology) {
                        const canAddTechnology = order.ordered_products_unique_technologies
                            .findIndex(el => el === product.current_technology.name) < 0;
                        if (canAddTechnology) {
                            order.ordered_products_unique_technologies.push(product.current_technology.name);
                        }
                    }
                });
            });
        });
    }
    resetOrdersList() {
        this.ordersList = this.orders;
    }
    resetChainsList() {
        this.deliveryChainsList = this.deliveryChains;
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
    onSelectOrderType(view) {
        this.invoicesOrderType = view;
    }
    onGoToDeliveryChainLink(deliveryChainId) {
        window.open(`/delivery-chains/chains/${deliveryChainId}`);
    }
    onGoToSalesChainLink(salesChainId) {
        window.open(`/sales/sales-procurement-chains/chain-page/${salesChainId}`);
    }
}
QcDeliveryListComponent.ɵfac = function QcDeliveryListComponent_Factory(t) { return new (t || QcDeliveryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_delivery_service__WEBPACK_IMPORTED_MODULE_1__.DeliveryChainService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_procurement_services_qc_delivery_status_service__WEBPACK_IMPORTED_MODULE_5__.QcDeliveryStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder)); };
QcDeliveryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: QcDeliveryListComponent, selectors: [["pek-qc-delivery-list"]], outputs: { selectedQcDeliveryStatuses: "selectedQcDeliveryStatuses" }, decls: 45, vars: 17, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "qc_delivery_started_date_after", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], ["formControlName", "qc_delivery_started_date_before", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], [3, "selectStatuses"], ["formControlName", "qc_delivery_closed_date_after", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], ["formControlName", "qc_delivery_closed_date_before", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], [1, "custom-tabs"], ["header", "Delivery to customers"], [4, "ngIf"], [3, "header", "selected"], ["spinner", ""], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["ot", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", "target", "_blank", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", 3, "click"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "25%"], ["style", "width: 25%", "class", "text-center", 4, "ngIf"], [1, "text-center", 2, "width", "10%"], [3, "pSelectableRow"], [1, "text-center"], ["style", "width: 20%;", "class", "text-center", 4, "ngIf"], ["target", "_blank", 3, "click"], [2, "width", "10%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [2, "width", "20%"], [4, "ngFor", "ngForOf"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function QcDeliveryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "QC Started Date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QcDeliveryListComponent_Template_p_calendar_ngModelChange_14_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "QC Started Date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p-calendar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QcDeliveryListComponent_Template_p_calendar_ngModelChange_19_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "pek-qc-delivery-statuses-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectStatuses", function QcDeliveryListComponent_Template_pek_qc_delivery_statuses_picker_selectStatuses_24_listener($event) { return ctx.onChoiceQcDeliveryStatuses($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 7)(26, "div", 8)(27, "div", 9)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "QC Closed Date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "p-calendar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QcDeliveryListComponent_Template_p_calendar_ngModelChange_30_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "QC Closed Date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p-calendar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QcDeliveryListComponent_Template_p_calendar_ngModelChange_35_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "p-tabView", 15)(37, "p-tabPanel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, QcDeliveryListComponent_ng_container_38_Template, 10, 6, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, QcDeliveryListComponent_ng_container_39_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "p-tabPanel", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, QcDeliveryListComponent_ng_container_41_Template, 10, 6, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, QcDeliveryListComponent_ng_container_42_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, QcDeliveryListComponent_ng_template_43_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("module", "quality-control")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("header", "Outsoursing Materials Delivery")("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "hierarchy");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _shared_pickers_qc_delivery_statuses_picker_qc_delivery_statuses_picker_component__WEBPACK_IMPORTED_MODULE_6__.QcDeliveryStatusesPickerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_17__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_7__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_18__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_18__.TabPanel, primeng_calendar__WEBPACK_IMPORTED_MODULE_19__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWRlbGl2ZXJ5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoicWMtZGVsaXZlcnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 40096:
/*!******************************************************************************************!*\
  !*** ./src/app/qc/components/qc-delivery-print-page/qc-delivery-print-page.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcDeliveryPrintPageComponent": () => (/* binding */ QcDeliveryPrintPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 73068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function QcDeliveryPrintPageComponent_div_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.currentReqDate, "dd.MM.y"), " ");
} }
function QcDeliveryPrintPageComponent_div_0_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", tech_r8, " ", last_r9 ? "" : ",", " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_36_ng_container_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_36_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_36_ng_container_12_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idx_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", idx_r12 !== ctx_r10.outsourcer.categories.length - 1);
} }
function QcDeliveryPrintPageComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div")(3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Outsourcer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QcDeliveryPrintPageComponent_div_0_div_36_ng_container_12_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4")(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Tax Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4")(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Register Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4")(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Nomenclature:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4")(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.outsourcer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.outsourcer.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.outsourcer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.outsourcer.tax_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.outsourcer.registration_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.outsourcer.supplier_nomenclature, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.outsourcer.comment);
} }
function QcDeliveryPrintPageComponent_div_0_div_38_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L(", (request_r14.ids == null ? null : request_r14.ids.length) + 1, ")");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.material_nomenclature.code, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.order_product_nomenclature.code, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.list_product.nomenclature.code, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_17_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_38_div_17_b_1_Template, 2, 0, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r14 == null ? null : request_r14.list_product == null ? null : request_r14.list_product.nomenclature == null ? null : request_r14.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.material_nomenclature.name, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_18_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_38_div_18_b_1_Template, 2, 0, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r14 == null ? null : request_r14.list_product == null ? null : request_r14.list_product.nomenclature == null ? null : request_r14.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.order_product_nomenclature.name, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_19_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_38_div_19_b_1_Template, 2, 0, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r14 == null ? null : request_r14.list_product == null ? null : request_r14.list_product.nomenclature == null ? null : request_r14.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.list_product.nomenclature.name, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r14.technology);
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (request_r14.material_nomenclature == null ? null : request_r14.material_nomenclature.category == null ? null : request_r14.material_nomenclature.category.unit_of_measure == null ? null : request_r14.material_nomenclature.category.unit_of_measure.symbol) ? request_r14.material_nomenclature == null ? null : request_r14.material_nomenclature.category == null ? null : request_r14.material_nomenclature.category.unit_of_measure == null ? null : request_r14.material_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (request_r14.order_product_nomenclature == null ? null : request_r14.order_product_nomenclature.category == null ? null : request_r14.order_product_nomenclature.category.unit_of_measure == null ? null : request_r14.order_product_nomenclature.category.unit_of_measure.symbol) ? request_r14.order_product_nomenclature == null ? null : request_r14.order_product_nomenclature.category == null ? null : request_r14.order_product_nomenclature.category.unit_of_measure == null ? null : request_r14.order_product_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (request_r14.list_product.nomenclature == null ? null : request_r14.list_product.nomenclature.category == null ? null : request_r14.list_product.nomenclature.category.unit_of_measure == null ? null : request_r14.list_product.nomenclature.category.unit_of_measure.symbol) ? request_r14.list_product.nomenclature == null ? null : request_r14.list_product.nomenclature.category == null ? null : request_r14.list_product.nomenclature.category.unit_of_measure == null ? null : request_r14.list_product.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_37_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QcDeliveryPrintPageComponent_div_0_div_38_div_37_div_1_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r42 = ctx.$implicit;
    const last_r43 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", locator_r42.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r43);
} }
function QcDeliveryPrintPageComponent_div_0_div_38_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_38_div_37_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", request_r14.unique_locators);
} }
function QcDeliveryPrintPageComponent_div_0_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QcDeliveryPrintPageComponent_div_0_div_38_span_7_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 16)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, QcDeliveryPrintPageComponent_div_0_div_38_div_11_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QcDeliveryPrintPageComponent_div_0_div_38_div_12_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, QcDeliveryPrintPageComponent_div_0_div_38_div_13_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 16)(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, QcDeliveryPrintPageComponent_div_0_div_38_div_17_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QcDeliveryPrintPageComponent_div_0_div_38_div_18_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, QcDeliveryPrintPageComponent_div_0_div_38_div_19_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, QcDeliveryPrintPageComponent_div_0_div_38_span_23_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, QcDeliveryPrintPageComponent_div_0_div_38_div_27_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, QcDeliveryPrintPageComponent_div_0_div_38_div_28_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, QcDeliveryPrintPageComponent_div_0_div_38_div_29_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16)(31, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, QcDeliveryPrintPageComponent_div_0_div_38_div_37_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16)(39, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 16)(44, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 16)(49, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "_________");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 16)(54, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Packing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "_________");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const request_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", request_r14.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r14.ids == null ? null : request_r14.ids.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r14.material_nomenclature && !request_r14.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r14.material_nomenclature && !request_r14.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r14.material_nomenclature && !request_r14.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r14.total_required_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r14.locators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.getType(request_r14.list_product == null ? null : request_r14.list_product.nomenclature == null ? null : request_r14.list_product.nomenclature.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r14.qc_delivery_status == null ? null : request_r14.qc_delivery_status.name);
} }
function QcDeliveryPrintPageComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div")(3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Technical Equipments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_14_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_14_div_1_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r51 = ctx.$implicit;
    const last_r52 = ctx.last;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r50.getLocator(locator_r51).name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r52);
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_14_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technicalEquipment_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", technicalEquipment_r47.locators);
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_15_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_15_span_1_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r56 = ctx.$implicit;
    const last_r57 = ctx.last;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r55.getLocator(locator_r56).name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r57);
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_15_span_1_Template, 3, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technicalEquipment_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", technicalEquipment_r47.available_locators);
} }
function QcDeliveryPrintPageComponent_div_0_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 16)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Locators");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_14_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QcDeliveryPrintPageComponent_div_0_div_40_div_1_div_15_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const technicalEquipment_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r46.getNomenclature(technicalEquipment_r47.nomenclature).code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r46.getNomenclature(technicalEquipment_r47.nomenclature).name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", technicalEquipment_r47.locators.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", technicalEquipment_r47.locators.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", technicalEquipment_r47.max_initial_quantity, " ");
} }
function QcDeliveryPrintPageComponent_div_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_0_div_40_div_1_Template, 20, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.technicalEquipments);
} }
function QcDeliveryPrintPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "h2")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Production List Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Request Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, QcDeliveryPrintPageComponent_div_0_ng_container_30_Template, 3, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 4)(32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, QcDeliveryPrintPageComponent_div_0_span_35_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, QcDeliveryPrintPageComponent_div_0_div_36_Template, 34, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, QcDeliveryPrintPageComponent_div_0_div_38_Template, 58, 16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, QcDeliveryPrintPageComponent_div_0_div_39_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, QcDeliveryPrintPageComponent_div_0_div_40_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 9)(42, "div", 10)(43, "div", 11)(44, "div")(45, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div")(50, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div")(56, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Signed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 12)(59, "div")(60, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Retrieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div")(64, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div")(68, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Signed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.rootList == null ? null : ctx_r0.rootList.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.rootList == null ? null : ctx_r0.rootList.nomenclature == null ? null : ctx_r0.rootList.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 13, ctx_r0.rootList == null ? null : ctx_r0.rootList.list == null ? null : ctx_r0.rootList.list.created, "dd.MM.y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentReqDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.outsourcer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.requests);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.technicalEquipments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.technicalEquipments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.auth.user.first_name, " ", ctx_r0.auth.user.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](54, 16, ctx_r0.currentDate, "dd.MM.y"));
} }
function QcDeliveryPrintPageComponent_div_1_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r60.currentReqDate, "dd.MM.y"), " ");
} }
function QcDeliveryPrintPageComponent_div_1_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r64 = ctx.$implicit;
    const last_r65 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", tech_r64, " ", last_r65 ? "" : ",", " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_36_ng_container_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_36_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_36_ng_container_12_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idx_r68 = ctx.index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", idx_r68 !== ctx_r66.outsourcer.categories.length - 1);
} }
function QcDeliveryPrintPageComponent_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div")(3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Outsourcer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QcDeliveryPrintPageComponent_div_1_div_36_ng_container_12_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4")(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Tax Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4")(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Register Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4")(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Nomenclature:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4")(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r62.outsourcer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r62.outsourcer.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r62.outsourcer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r62.outsourcer.tax_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r62.outsourcer.registration_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r62.outsourcer.supplier_nomenclature, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r62.outsourcer.comment);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L(", (request_r75.ids == null ? null : request_r75.ids.length) + 1, ")");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.material_nomenclature.code, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.order_product_nomenclature.code, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.list_product.nomenclature.code, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_17_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_17_b_1_Template, 2, 0, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r75 == null ? null : request_r75.list_product == null ? null : request_r75.list_product.nomenclature == null ? null : request_r75.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.material_nomenclature.name, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_18_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_18_b_1_Template, 2, 0, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r75 == null ? null : request_r75.list_product == null ? null : request_r75.list_product.nomenclature == null ? null : request_r75.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.order_product_nomenclature.name, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_19_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_19_b_1_Template, 2, 0, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r75 == null ? null : request_r75.list_product == null ? null : request_r75.list_product.nomenclature == null ? null : request_r75.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.list_product.nomenclature.name, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r75.technology);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (request_r75.material_nomenclature == null ? null : request_r75.material_nomenclature.category == null ? null : request_r75.material_nomenclature.category.unit_of_measure == null ? null : request_r75.material_nomenclature.category.unit_of_measure.symbol) ? request_r75.material_nomenclature == null ? null : request_r75.material_nomenclature.category == null ? null : request_r75.material_nomenclature.category.unit_of_measure == null ? null : request_r75.material_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (request_r75.order_product_nomenclature == null ? null : request_r75.order_product_nomenclature.category == null ? null : request_r75.order_product_nomenclature.category.unit_of_measure == null ? null : request_r75.order_product_nomenclature.category.unit_of_measure.symbol) ? request_r75.order_product_nomenclature == null ? null : request_r75.order_product_nomenclature.category == null ? null : request_r75.order_product_nomenclature.category.unit_of_measure == null ? null : request_r75.order_product_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (request_r75.list_product.nomenclature == null ? null : request_r75.list_product.nomenclature.category == null ? null : request_r75.list_product.nomenclature.category.unit_of_measure == null ? null : request_r75.list_product.nomenclature.category.unit_of_measure.symbol) ? request_r75.list_product.nomenclature == null ? null : request_r75.list_product.nomenclature.category == null ? null : request_r75.list_product.nomenclature.category.unit_of_measure == null ? null : request_r75.list_product.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_37_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_37_div_1_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r104 = ctx.$implicit;
    const last_r105 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", locator_r104.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r105);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_37_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", request_r75.unique_locators);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QcDeliveryPrintPageComponent_div_1_div_37_div_4_span_7_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 16)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_11_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_12_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_13_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 16)(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_17_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_18_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_19_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, QcDeliveryPrintPageComponent_div_1_div_37_div_4_span_23_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_27_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_28_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_29_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16)(31, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, QcDeliveryPrintPageComponent_div_1_div_37_div_4_div_37_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16)(39, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 16)(44, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 16)(49, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "_________");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 16)(54, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Packing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "_________");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const request_r75 = ctx.$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", request_r75.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (request_r75.ids == null ? null : request_r75.ids.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r75.material_nomenclature && !request_r75.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r75.material_nomenclature && !request_r75.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r75.material_nomenclature && !request_r75.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r75.total_required_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", request_r75.locators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r72.getType(request_r75.list_product == null ? null : request_r75.list_product.nomenclature == null ? null : request_r75.list_product.nomenclature.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r75.qc_delivery_status == null ? null : request_r75.qc_delivery_status.name);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div")(3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Technical Equipments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_14_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_14_div_1_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r113 = ctx.$implicit;
    const last_r114 = ctx.last;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r112.getLocator(locator_r113).name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r114);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_14_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technicalEquipment_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", technicalEquipment_r109.locators);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_15_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_15_span_1_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locator_r118 = ctx.$implicit;
    const last_r119 = ctx.last;
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r117.getLocator(locator_r118).name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r119);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_15_span_1_Template, 3, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technicalEquipment_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", technicalEquipment_r109.available_locators);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 16)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Locators");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_14_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_div_15_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const technicalEquipment_r109 = ctx.$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r108.getNomenclature(technicalEquipment_r109.nomenclature).code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r108.getNomenclature(technicalEquipment_r109.nomenclature).name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", technicalEquipment_r109.locators.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", technicalEquipment_r109.locators.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", technicalEquipment_r109.max_initial_quantity, " ");
} }
function QcDeliveryPrintPageComponent_div_1_div_37_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_div_37_div_6_div_1_Template, 20, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r74.technicalEquipments);
} }
function QcDeliveryPrintPageComponent_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QcDeliveryPrintPageComponent_div_1_div_37_div_4_Template, 58, 16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, QcDeliveryPrintPageComponent_div_1_div_37_div_5_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, QcDeliveryPrintPageComponent_div_1_div_37_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div")(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Signed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12)(25, "div")(26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Retrieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Signed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const orderProduct_r70 = ctx.$implicit;
    const lastGroup_r71 = ctx.last;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("not-last-group", !lastGroup_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("", orderProduct_r70.nomenclature.code, " ", orderProduct_r70.nomenclature.name, " ", orderProduct_r70.current_technology == null ? null : orderProduct_r70.current_technology.name, " Quantity: ", orderProduct_r70.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", orderProduct_r70.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r63.technicalEquipments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r63.technicalEquipments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r63.auth.user.first_name, " ", ctx_r63.auth.user.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 12, ctx_r63.currentDate, "dd.MM.y"));
} }
function QcDeliveryPrintPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "h2")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Production List Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Request Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, QcDeliveryPrintPageComponent_div_1_ng_container_30_Template, 3, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 4)(32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, QcDeliveryPrintPageComponent_div_1_span_35_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, QcDeliveryPrintPageComponent_div_1_div_36_Template, 34, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, QcDeliveryPrintPageComponent_div_1_div_37_Template, 36, 15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.rootList == null ? null : ctx_r1.rootList.nomenclature == null ? null : ctx_r1.rootList.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.rootList == null ? null : ctx_r1.rootList.nomenclature == null ? null : ctx_r1.rootList.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 8, ctx_r1.rootList == null ? null : ctx_r1.rootList.list == null ? null : ctx_r1.rootList.list.created, "dd.MM.y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentReqDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.outsourcer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.orderedProducts);
} }
class QcDeliveryPrintPageComponent {
    constructor(auth) {
        this.auth = auth;
        this.requests = [];
        this.currentReqDate = null;
        this.technicalEquipments = [];
        this.currentDate = new Date();
        this.Nomenclature = _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.Nomenclature;
    }
    ngOnInit() {
        console.log('technicalEquipments', this.technicalEquipments);
    }
    getType(type) {
        switch (type) {
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.ASSEMBLY:
                return 'Assembly';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.PURCHASED:
                return 'Outsourcing';
            case _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureType.MANUFACTURED:
                return 'Own Production';
        }
    }
    getNomenclature(nomenclature) {
        return nomenclature;
    }
    getLocator(locator) {
        return locator;
    }
}
QcDeliveryPrintPageComponent.ɵfac = function QcDeliveryPrintPageComponent_Factory(t) { return new (t || QcDeliveryPrintPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
QcDeliveryPrintPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QcDeliveryPrintPageComponent, selectors: [["pek-qc-delivery-print-page"]], inputs: { requests: "requests", orderedProducts: "orderedProducts", rootList: "rootList", orderId: "orderId", technologies: "technologies", outsourcer: "outsourcer", currentReqDate: "currentReqDate", technicalEquipments: "technicalEquipments" }, decls: 2, vars: 2, consts: [["class", "qc-delivery-print-page", 4, "ngIf"], [1, "qc-delivery-print-page"], [1, "qc-delivery-print-page__header"], [4, "ngIf"], [1, "col-2"], [4, "ngFor", "ngForOf"], [1, "qc-delivery-print-page__table"], ["class", "qc-delivery-print-page__row", 4, "ngFor", "ngForOf"], ["class", "qc-delivery-print-page__table", 4, "ngIf"], [1, "qc-delivery-print-page__bottom"], [1, "qc-delivery-print-page__column"], [1, "qc-delivery-print-page__left"], [1, "qc-delivery-print-page__right"], [2, "white-space", "nowrap"], [1, "qc-delivery-print-page__row"], [1, "qc-delivery-print-page__box"], [1, "qc-delivery-print-page__col"], [1, "qc-delivery-print-page__col_half"], ["class", "order-product-page", 3, "not-last-group", 4, "ngFor", "ngForOf"], [1, "order-product-page"]], template: function QcDeliveryPrintPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QcDeliveryPrintPageComponent_div_0_Template, 70, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QcDeliveryPrintPageComponent_div_1_Template, 38, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.orderedProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderedProducts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".qc-delivery-print-page[_ngcontent-%COMP%] {\n  display: block;\n}\n.qc-delivery-print-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.qc-delivery-print-page__header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-right: 25px;\n  width: 25%;\n  margin-bottom: 20px;\n}\n.qc-delivery-print-page__header[_ngcontent-%COMP%]   div.col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.qc-delivery-print-page__box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.qc-delivery-print-page__row[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  border-bottom: none;\n  padding: 10px;\n  border-bottom: 1px solid #000;\n  border-top: 1px solid #000;\n}\n@media print {\n  .qc-delivery-print-page__row[_ngcontent-%COMP%] {\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: avoid;\n  }\n}\n.qc-delivery-print-page__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 2px solid #000;\n}\n.qc-delivery-print-page__col[_ngcontent-%COMP%] {\n  width: 25%;\n  padding: 5px;\n}\n.qc-delivery-print-page__col_half[_ngcontent-%COMP%] {\n  width: 12.5%;\n  padding: 5px;\n}\n.qc-delivery-print-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.qc-delivery-print-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n.qc-delivery-print-page__column[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n.qc-delivery-print-page__column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  margin-bottom: 6px;\n}\n.qc-delivery-print-page__column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media print {\n  .qc-delivery-print-page__column[_ngcontent-%COMP%] {\n    page-break-after: auto;\n    page-break-before: auto;\n  }\n}\n.qc-delivery-print-page__left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .qc-delivery-print-page__right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n@media print {\n  .qc-delivery-print-page__bottom[_ngcontent-%COMP%] {\n    page-break-after: auto;\n    page-break-before: auto;\n  }\n}\n.qc-delivery-print-page__table[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  margin-top: 10px;\n}\n@media print {\n  .qc-delivery-print-page__table[_ngcontent-%COMP%] {\n    page-break-after: auto;\n  }\n}\n@media print {\n  .order-product-page.not-last-group[_ngcontent-%COMP%] {\n    page-break-after: always;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWRlbGl2ZXJ5LXByaW50LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsVUFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUZKO0FBTUU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQU9BLDZCQUFBO0VBQ0EsMEJBQUE7QUFWSjtBQUlJO0VBTEY7SUFNSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7RUFESjtBQUNGO0FBSUk7RUFDRSw2QkFBQTtBQUZOO0FBTUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUpKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBUko7QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7QUFUTjtBQVlJO0VBZkY7SUFnQkksc0JBQUE7SUFDQSx1QkFBQTtFQVRKO0FBQ0Y7QUFjSTtFQUNFLG1CQUFBO0FBWk47QUFpQkk7RUFERjtJQUVJLHNCQUFBO0lBQ0EsdUJBQUE7RUFkSjtBQUNGO0FBaUJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQWZKO0FBZ0JJO0VBSEY7SUFJSSxzQkFBQTtFQWJKO0FBQ0Y7QUFvQkk7RUFERjtJQUVJLHdCQUFBO0VBaEJKO0FBQ0YiLCJmaWxlIjoicWMtZGVsaXZlcnktcHJpbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xYy1kZWxpdmVyeS1wcmludC1wYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAmLmNvbC0yIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XHJcbiAgICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvO1xyXG4gICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb2wge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gICZfX2NvbF9oYWxmIHtcclxuICAgIHdpZHRoOiAxMi41JTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgcGFnZS1icmVhay1hZnRlcjogYXV0bztcclxuICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19sZWZ0LFxyXG4gICZfX3JpZ2h0IHtcclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ib3R0b20ge1xyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgcGFnZS1icmVhay1hZnRlcjogYXV0bztcclxuICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XHJcbiAgICAgIC8vcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1wcm9kdWN0LXBhZ2Uge1xyXG4gICYubm90LWxhc3QtZ3JvdXAge1xyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 32785:
/*!********************************************************************!*\
  !*** ./src/app/qc/components/qc-delivery/qc-delivery.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QcDeliveryComponent": () => (/* binding */ QcDeliveryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _procurement_models_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/models/order */ 92595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _warehouse_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../warehouse/services/request.service */ 63205);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ 50384);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/task.service */ 10764);
/* harmony import */ var _warehouse_services_order_technical_equipments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../warehouse/services/order-technical-equipments.service */ 80439);
/* harmony import */ var _shared_services_album_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/album.service */ 96667);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _shared_components_hover_detailed_info_component_hover_detailed_info_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/hover-detailed-info-component/hover-detailed-info-component.component */ 48666);
/* harmony import */ var _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../qr-code/components/qr-code-scanner/qr-code-scanner.component */ 81984);
/* harmony import */ var _qc_delivery_print_page_qc_delivery_print_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../qc-delivery-print-page/qc-delivery-print-page.component */ 40096);
























const _c0 = ["dt"];

function QcDeliveryComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}

function QcDeliveryComponent_ng_template_17_ng_container_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_17_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_17_ng_container_10_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const idx_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", idx_r22 !== (ctx_r20.order == null ? null : ctx_r20.order.supplier == null ? null : ctx_r20.order.supplier.categories.length) - 1);
  }
}

function QcDeliveryComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27)(1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Outsourcer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h4")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "h4")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, QcDeliveryComponent_ng_template_17_ng_container_10_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "h4")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "h4")(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Tax Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "h4")(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Register Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "h4")(24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Nomenclature:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "h4")(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.tax_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.registration_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.supplier_nomenclature, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.order == null ? null : ctx_r1.order.supplier == null ? null : ctx_r1.order.supplier.comment);
  }
}

function QcDeliveryComponent_ng_template_24_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose the Request to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_24_p_1_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_24_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.onCompleteMaterialQcList(ctx_r25.QC_STAGES["qty_control"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_24_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.onCompleteMaterialQcList(ctx_r27.QC_STAGES["packing_control"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_24_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.onResetConfirmation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_24_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.onStartScanning());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.selectedRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r3.selectedRequest == null ? null : ctx_r3.selectedRequest.length) === 0 || ctx_r3.order.qc_delivery_status.qc_stage == ctx_r3.QC_STAGES["done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r3.selectedRequest == null ? null : ctx_r3.selectedRequest.length) === 0 || ctx_r3.order.qc_delivery_status.qc_stage == ctx_r3.QC_STAGES["done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r3.selectedRequest == null ? null : ctx_r3.selectedRequest.length) === 0 || ctx_r3.order.qc_delivery_status.qc_stage == ctx_r3.QC_STAGES["done"]);
  }
}

function QcDeliveryComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_26_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Quantity Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Packing Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}

function QcDeliveryComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 39)(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, QcDeliveryComponent_ng_template_26_ng_container_22_Template, 7, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r5.order == null ? null : ctx_r5.order.accounting_type) == 2);
  }
}

function QcDeliveryComponent_ng_template_27_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("L(", (request_r31.ids == null ? null : request_r31.ids.length) + 1, ")");
  }
}

function QcDeliveryComponent_ng_template_27_pek_hover_detailed_info_component_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const id_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", id_r50, " ");
  }
}

function QcDeliveryComponent_ng_template_27_pek_hover_detailed_info_component_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "pek-hover-detailed-info-component", 52)(1, "span", 53)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, QcDeliveryComponent_ng_template_27_pek_hover_detailed_info_component_13_div_4_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const i_r32 = ctx_r51.rowIndex;
    const request_r31 = ctx_r51.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("moveLeft", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-fixed", ctx_r34.listRequests.length <= 10)("is-absolute", ctx_r34.listRequests.length > 10)("is-last", ctx_r34.listRequests.length - 10 <= i_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", request_r31.ids);
  }
}

function QcDeliveryComponent_ng_template_27_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.material_nomenclature.code, " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.order_product_nomenclature.code, " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.list_product.nomenclature.code, " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_23_b_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_27_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_27_div_23_b_1_Template, 2, 0, "b", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (request_r31 == null ? null : request_r31.list_product == null ? null : request_r31.list_product.nomenclature == null ? null : request_r31.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.material_nomenclature.name, " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_24_b_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_27_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_27_div_24_b_1_Template, 2, 0, "b", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (request_r31 == null ? null : request_r31.list_product == null ? null : request_r31.list_product.nomenclature == null ? null : request_r31.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.order_product_nomenclature.name, " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_25_b_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(S)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_27_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_27_div_25_b_1_Template, 2, 0, "b", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (request_r31 == null ? null : request_r31.list_product == null ? null : request_r31.list_product.nomenclature == null ? null : request_r31.list_product.nomenclature.bulk_or_serial) === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.list_product.nomenclature.name, " ");
  }
}

function QcDeliveryComponent_ng_template_27_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.reserved_serial_products[0].serial_number.type_with_number, " ");
  }
}

function QcDeliveryComponent_ng_template_27_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](request_r31.technology);
  }
}

function QcDeliveryComponent_ng_template_27_div_41_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_27_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcDeliveryComponent_ng_template_27_div_41_div_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const locator_r64 = ctx.$implicit;
    const last_r65 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", locator_r64.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !last_r65);
  }
}

function QcDeliveryComponent_ng_template_27_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_27_div_41_div_1_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", request_r31.unique_locators);
  }
}

function QcDeliveryComponent_ng_template_27_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (request_r31.material_nomenclature == null ? null : request_r31.material_nomenclature.category == null ? null : request_r31.material_nomenclature.category.unit_of_measure == null ? null : request_r31.material_nomenclature.category.unit_of_measure.symbol) ? request_r31.material_nomenclature == null ? null : request_r31.material_nomenclature.category == null ? null : request_r31.material_nomenclature.category.unit_of_measure == null ? null : request_r31.material_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (request_r31.order_product_nomenclature == null ? null : request_r31.order_product_nomenclature.category == null ? null : request_r31.order_product_nomenclature.category.unit_of_measure == null ? null : request_r31.order_product_nomenclature.category.unit_of_measure.symbol) ? request_r31.order_product_nomenclature == null ? null : request_r31.order_product_nomenclature.category == null ? null : request_r31.order_product_nomenclature.category.unit_of_measure == null ? null : request_r31.order_product_nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
  }
}

function QcDeliveryComponent_ng_template_27_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (request_r31.list_product.nomenclature == null ? null : request_r31.list_product.nomenclature.category == null ? null : request_r31.list_product.nomenclature.category.unit_of_measure == null ? null : request_r31.list_product.nomenclature.category.unit_of_measure.symbol) ? request_r31.list_product.nomenclature == null ? null : request_r31.list_product.nomenclature.category == null ? null : request_r31.list_product.nomenclature.category.unit_of_measure == null ? null : request_r31.list_product.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
  }
}

function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77);
      const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r75.onUpdateItems(request_r31, 1, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", request_r31.qc_delivery_status.qc_stage != 1 || request_r31.qc_delivery_status.is_qc_completed);
  }
}

function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r81);
      const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r79.onUpdateItems(request_r31, 1, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", request_r31.qc_delivery_status.qc_stage != 1 || request_r31.qc_delivery_status.is_qc_completed);
  }
}

function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r85);
      const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r83.onUpdateItems(request_r31, 2, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (request_r31.qc_delivery_status.qc_stage != 2 || request_r31.qc_delivery_status.is_qc_completed) && request_r31.qc_delivery_status.id != 3);
  }
}

function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r89);
      const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r87.onUpdateItems(request_r31, 2, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (request_r31.qc_delivery_status.qc_stage != 2 || request_r31.qc_delivery_status.is_qc_completed) && request_r31.qc_delivery_status.id != 3);
  }
}

function QcDeliveryComponent_ng_template_27_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td", 42)(2, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 54)(6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_7_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_8_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 54)(10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_11_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, QcDeliveryComponent_ng_template_27_ng_container_48_ng_container_12_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const request_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.qc_delivery_status.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("disabled", ctx_r47.order.qc_delivery_status.qc_stage != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.qc_delivery_status.is_qc_completed || request_r31.qc_delivery_status.qc_stage != 1 || request_r31.qc_delivery_status.id === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.qc_delivery_status.is_qc_completed && request_r31.qc_delivery_status.qc_stage === 1 || request_r31.qc_delivery_status.id === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("disabled", request_r31.qc_delivery_status.qc_stage != 2 && request_r31.qc_delivery_status.id != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.qc_delivery_status.is_qc_completed || request_r31.qc_delivery_status.qc_stage != 2 || request_r31.qc_delivery_status.id === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.qc_delivery_status.is_qc_completed && request_r31.qc_delivery_status.qc_stage === 2 || request_r31.qc_delivery_status.qc_stage === 1 || request_r31.qc_delivery_status.id === 5);
  }
}

function QcDeliveryComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 46)(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "p-tableCheckbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 39)(4, "div", 40)(5, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td", 49)(9, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, QcDeliveryComponent_ng_template_27_span_12_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, QcDeliveryComponent_ng_template_27_pek_hover_detailed_info_component_13_Template, 5, 9, "pek-hover-detailed-info-component", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td", 41)(15, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, QcDeliveryComponent_ng_template_27_div_17_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, QcDeliveryComponent_ng_template_27_div_18_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, QcDeliveryComponent_ng_template_27_div_19_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td", 51)(21, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, QcDeliveryComponent_ng_template_27_div_23_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, QcDeliveryComponent_ng_template_27_div_24_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, QcDeliveryComponent_ng_template_27_div_25_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "td", 42)(27, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Serial number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, QcDeliveryComponent_ng_template_27_span_29_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "td", 43)(31, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, QcDeliveryComponent_ng_template_27_span_33_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "td", 44)(35, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Required Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "td", 42)(39, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, QcDeliveryComponent_ng_template_27_div_41_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "td", 45)(43, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, QcDeliveryComponent_ng_template_27_div_45_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, QcDeliveryComponent_ng_template_27_div_46_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, QcDeliveryComponent_ng_template_27_div_47_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, QcDeliveryComponent_ng_template_27_ng_container_48_Template, 13, 9, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const request_r31 = ctx.$implicit;
    const i_r32 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("last-scanned", request_r31.id === ctx_r6.lastScannedId)("partly-scanned", ctx_r6.isPartlyScanned(request_r31))("is-added-after-order-creation", request_r31.material_nomenclature)("qr-code-scanned", ctx_r6.isFullyScanned(request_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", request_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", request_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r32 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (request_r31.ids == null ? null : request_r31.ids.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (request_r31.ids == null ? null : request_r31.ids.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.material_nomenclature && !request_r31.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.material_nomenclature && !request_r31.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (request_r31.reserved_serial_products == null ? null : request_r31.reserved_serial_products.length) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", request_r31.total_required_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.locators);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.material_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", request_r31.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !request_r31.material_nomenclature && !request_r31.order_product_nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r6.order == null ? null : ctx_r6.order.accounting_type) == 2);
  }
}

function QcDeliveryComponent_ng_template_28_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 61);
  }
}

function QcDeliveryComponent_ng_template_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 58)(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcDeliveryComponent_ng_template_28_i_2_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, QcDeliveryComponent_ng_template_28_span_3_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
  }
}

function QcDeliveryComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_29_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r95);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](23);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r2.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 63)(1, "p-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_div_30_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r97);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](23);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r2.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcDeliveryComponent_ng_template_35_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27)(1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Technical Equipments");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, QcDeliveryComponent_ng_template_35_div_0_Template, 4, 0, "div", 64);
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r10.technicalEquipments);
  }
}

function QcDeliveryComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Locator");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcDeliveryComponent_ng_template_37_div_8_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_37_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcDeliveryComponent_ng_template_37_div_8_div_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const locator_r104 = ctx.$implicit;
    const last_r105 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", locator_r104.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !last_r105);
  }
}

function QcDeliveryComponent_ng_template_37_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_37_div_8_div_1_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const technicalEquipment_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", technicalEquipment_r99.locators);
  }
}

function QcDeliveryComponent_ng_template_37_div_9_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_37_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcDeliveryComponent_ng_template_37_div_9_span_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const locator_r109 = ctx.$implicit;
    const last_r110 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", locator_r109.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !last_r110);
  }
}

function QcDeliveryComponent_ng_template_37_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcDeliveryComponent_ng_template_37_div_9_span_1_Template, 3, 2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const technicalEquipment_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", technicalEquipment_r99.available_locators);
  }
}

function QcDeliveryComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 69)(1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, QcDeliveryComponent_ng_template_37_div_8_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, QcDeliveryComponent_ng_template_37_div_9_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const technicalEquipment_r99 = ctx.$implicit;
    const i_r100 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", technicalEquipment_r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r100 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r99.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r99.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", technicalEquipment_r99.locators.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", technicalEquipment_r99.locators.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](technicalEquipment_r99.max_initial_quantity);
  }
}

function QcDeliveryComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Choice ordered item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcDeliveryComponent_ng_template_39_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 74);
  }
}

function QcDeliveryComponent_ng_template_39_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 58)(1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcDeliveryComponent_ng_template_39_i_2_Template, 1, 0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, QcDeliveryComponent_ng_template_39_span_3_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r14.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r14.isLoading);
  }
}

function QcDeliveryComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "pek-qc-delivery-print-page", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rootList", ctx_r15.rootList)("orderId", +ctx_r15.orderId)("requests", ctx_r15.listRequests)("currentReqDate", ctx_r15.currentReqDate)("technologies", ctx_r15.order == null ? null : ctx_r15.order.ordered_items_technologies)("outsourcer", ctx_r15.order == null ? null : ctx_r15.order.supplier)("technicalEquipments", ctx_r15.technicalEquipments);
  }
}

function QcDeliveryComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "pek-qc-delivery-print-page", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rootList", ctx_r16.rootList)("orderedProducts", ctx_r16.orderedProductsForPrint)("orderId", +ctx_r16.orderId)("requests", ctx_r16.listRequests)("currentReqDate", ctx_r16.currentReqDate)("technologies", ctx_r16.order == null ? null : ctx_r16.order.ordered_items_technologies)("outsourcer", ctx_r16.order == null ? null : ctx_r16.order.supplier)("technicalEquipments", ctx_r16.technicalEquipments);
  }
}

function QcDeliveryComponent_pek_qr_code_scanner_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "pek-qr-code-scanner", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scanned", function QcDeliveryComponent_pek_qr_code_scanner_42_Template_pek_qr_code_scanner_scanned_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r116.onScanned($event));
    })("cancel", function QcDeliveryComponent_pek_qr_code_scanner_42_Template_pek_qr_code_scanner_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r118.onCancelScanned());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcDeliveryComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_ng_template_43_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r119.goToOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r19.order == null ? null : ctx_r19.order.id);
  }
}

const _c1 = function () {
  return ["name"];
};

class ProductRequestListOrder extends _procurement_models_order__WEBPACK_IMPORTED_MODULE_0__.Order {}

let QcDeliveryComponent = class QcDeliveryComponent {
  constructor(requestsService, auth, ordersService, route, router, modalService, tasksService, orderTechnicalEquipmentsService, albumService, document) {
    this.requestsService = requestsService;
    this.auth = auth;
    this.ordersService = ordersService;
    this.route = route;
    this.router = router;
    this.modalService = modalService;
    this.tasksService = tasksService;
    this.orderTechnicalEquipmentsService = orderTechnicalEquipmentsService;
    this.albumService = albumService;
    this.document = document;
    this.formGroupedOrderedProducts = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.isShowPrint = false;
    this.isShowPrintGrouped = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.isAlbumPrint = false;
    this.QC_STAGES = {
      "qty_control": 1,
      "packing_control": 2,
      "done": 3
    };
    this.printMenuItems = [{
      label: 'Print Options',
      items: [{
        label: 'Print (default)',
        icon: 'pi pi-print',
        command: () => this.printPage()
      }, {
        label: 'Print Grouped by Order Product',
        icon: 'pi pi-print',
        command: () => this.printPageGrouped()
      }]
    }];
    this.rootList = null;
    this.currentDate = new Date();
    this.selectedRequest = null;
    this.currentReqDate = null;
    this.isLoading = true;
    this.requests = [];
    this.listRequests = [];
    this.hierarchyRequests = [];
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.isCompletingMaterials = false;
    this.requestTree = [];
    this.detailedRequestTree = [];
    this.orderedProductsForPrint = [];
    this.technicalEquipments = [];
    this.isLoadingTree = true;
    this.elementsRowsIds = [];
    this.isScanned = false;
    this.foundRowsIds = [];
    this.firstPage = 0;
  }

  ngOnInit() {
    this.getOrderInfo(+this.orderId);
    this.getRequests();
    this.getOrderTechnicalEquipments();
    this.formGroupedOrderedProducts.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
      if (this.hierarchyRequests.length > 0 && this.orderedProductsForPrint.length > 0) {
        this.orderedProductsForPrint.forEach(el => {
          el.children = this.hierarchyRequests.filter(child => child.for_order_product.id === el.id || child.for_order_ids.findIndex(child_ids => child_ids === el.id) >= 0);
        });
      }
    });
  }

  getOrderTechnicalEquipments() {
    const query = [{
      name: 'order',
      value: +this.orderId
    }, {
      name: 'in_use',
      value: false
    }];
    this.orderTechnicalEquipmentsService.get(query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(technicalEquipments => {
      this.technicalEquipments = technicalEquipments;
    });
  }

  onCancel() {
    this.modalService.confirm('danger', 'Confirm').subscribe(res => {
      if (res) {
        this.requestsService.cancel(+this.orderId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe();
      }
    });
  }

  getOrderInfo(orderId) {
    this.ordersService.getMinimalById(orderId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(order => {
      this.order = order;
      this.order.ordered_items_technologies = [];
      this.order.order_products.forEach(product => {
        if (product.current_technology) {
          const canAddTechnology = this.order.ordered_items_technologies.findIndex(el => el === product.current_technology.name) < 0;

          if (canAddTechnology) {
            this.order.ordered_items_technologies.push(product.current_technology.name);
          }
        }

        const productInList = this.orderedProductsForPrint.find(el => el.nomenclature.id === product.nomenclature.id && el.current_technology?.id === product.current_technology?.id);

        if (productInList) {
          productInList.quantity += product.quantity;
        } else {
          this.orderedProductsForPrint.push(product);
        }
      });
      this.formGroupedOrderedProducts.next();
    });
  }

  getRequests() {
    this.isLoading = true;
    this.requests = [];
    this.selectedRequest = [];
    this.requestsService.getDeliveryByOrder(+this.orderId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).subscribe(requests => {
      this.isLoading = false;
      this.requests = requests;
      this.listRequests = JSON.parse(JSON.stringify(this.requests));
      this.hierarchyRequests = JSON.parse(JSON.stringify(this.requests));
      this.listRequests.sort((a, b) => this.getCodeAndNameId(a).id - this.getCodeAndNameId(b).id).forEach(request => {
        request.requests = this.listRequests.filter(req => !req.material_nomenclature).filter(req => !req.reserved_serial_products || req.reserved_serial_products.length === 0).filter(req => {
          return this.getSameRequests(req, request) && req.id !== request.id;
        });
        request.ids = request.requests.map(req => req.id);
        request.all_reserved_serial_products = [];
        request.unique_locators = [...request.locators];

        if (request.is_reserved && request.requests.every(req => req.is_reserved)) {
          request.available_quantity_sum = request.requests.map(req => req.required_quantity).reduce((sum, quantity) => sum + quantity, request.required_quantity);
        } else {
          if (request.ids.length === 0) {
            if (!request.is_reserved) {
              request.available_quantity_sum = request.warehouse_quantity;
            } else {
              request.available_quantity_sum = request.required_quantity;
            }
          } else {
            if (!request.is_reserved) {
              request.available_quantity_sum = request.warehouse_quantity;
            } else {
              request.available_quantity_sum = request.requests.find(req => !req.is_reserved).warehouse_quantity;
            }
          }
        }

        if (request.reserved_serial_products) {
          request.all_reserved_serial_products.push(...request.reserved_serial_products.map(serial_number => serial_number.serial_number));
        }

        request.requests.forEach(req => {
          if (req.reserved_serial_products?.length > 0) {
            request.all_reserved_serial_products.push(...req.reserved_serial_products.map(serial_number => serial_number.serial_number));
          }

          request.unique_locators.push(...req.locators);
        });
        request.total_required_quantity = request.requests.reduce((accumulator, currentValue) => accumulator + currentValue.required_quantity, request.required_quantity);
        request.unique_locators = request.unique_locators.filter((locator, index, self) => self.findIndex(innerLocator => innerLocator.id === locator.id) === index);
        request.ids.forEach(id => {
          const index = this.listRequests.findIndex(req => req.id === id);
          this.listRequests.splice(index, 1);
        });
      });
      this.hierarchyRequests.sort((a, b) => this.getCodeAndNameId(a).id - this.getCodeAndNameId(b).id).forEach(hierRequest => {
        hierRequest.requests = this.hierarchyRequests.filter(req => !req.material_nomenclature).filter(req => req.for_order_product?.nomenclature.id === hierRequest.for_order_product?.nomenclature.id).filter(req => !req.reserved_serial_products || req.reserved_serial_products.length === 0).filter(req => {
          return this.getSameRequests(req, hierRequest) && req.id !== hierRequest.id && (req.for_order_product?.nomenclature.id === hierRequest.for_order_product?.nomenclature.id || req.list_product?.nomenclature.id === hierRequest.list_product?.nomenclature.id);
        });
        hierRequest.ids = hierRequest.requests.map(req => req.id);
        hierRequest.for_order_ids = [];

        if (hierRequest.for_order_product.length > 0) {
          hierRequest.for_order_ids.push(hierRequest.for_order_product.id);
        }

        hierRequest.for_order_ids.push(...hierRequest.requests.filter(req => req.for_order_product).map(req => req.for_order_product?.id));

        if (hierRequest.is_reserved && hierRequest.requests.every(req => req.is_reserved)) {
          hierRequest.available_quantity_sum = hierRequest.requests.map(req => req.required_quantity).reduce((sum, quantity) => sum + quantity, hierRequest.required_quantity);
        } else {
          if (hierRequest.ids.length === 0) {
            if (!hierRequest.is_reserved) {
              hierRequest.available_quantity_sum = hierRequest.warehouse_quantity;
            } else {
              hierRequest.available_quantity_sum = hierRequest.required_quantity;
            }
          } else {
            if (!hierRequest.is_reserved) {
              hierRequest.available_quantity_sum = hierRequest.warehouse_quantity;
            } else {
              hierRequest.available_quantity_sum = hierRequest.requests.find(req => !req.is_reserved).warehouse_quantity;
            }
          }
        }

        hierRequest.unique_locators = [...hierRequest.locators];
        hierRequest.requests.forEach(req => {
          hierRequest.unique_locators.push(...req.locators);
        });
        hierRequest.unique_locators = hierRequest.unique_locators.filter((locator, index, self) => self.findIndex(innerLocator => innerLocator.id === locator.id) === index);
        hierRequest.total_required_quantity = hierRequest.requests.reduce((accumulator, currentValue) => accumulator + currentValue.required_quantity, hierRequest.required_quantity);
        hierRequest.ids.forEach(id => {
          const index = this.hierarchyRequests.findIndex(req => req.id === id);
          this.hierarchyRequests.splice(index, 1);
        });
      });
      this.formGroupedOrderedProducts.next();
      const material = this.listRequests.filter(el => el.material_nomenclature).sort((a, b) => {
        return b.id - a.id;
      });
      const non_material = this.listRequests.filter(el => !el.material_nomenclature).sort((a, b) => {
        return b.id - a.id;
      });
      this.listRequests = [...material, ...non_material];
    });
  }

  getSameRequests(req, request) {
    let codeName = this.getCodeAndNameId(req);
    let codeNameSecond = this.getCodeAndNameId(request);
    return codeName.code === codeNameSecond.code && codeName.name === codeNameSecond.name && (!req.reserved_serial_products || req.reserved_serial_products?.length === 0 || !req.material_nomenclature);
  }

  getCodeAndNameId(request) {
    let codeSecond = '';
    let nameSecond = '';
    let id;

    if (request.order_product_nomenclature) {
      codeSecond = request.order_product_nomenclature.code;
      nameSecond = request.order_product_nomenclature.name;
      id = request.order_product_nomenclature.id;
    } else if (!request.material_nomenclature && !request.order_product_nomenclature) {
      codeSecond = request.list_product.nomenclature.code;
      nameSecond = request.list_product.nomenclature.name;
      id = request.list_product.nomenclature.id;
    }

    return {
      code: codeSecond,
      name: nameSecond,
      id: id
    };
  }

  complete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isLoading = false;
        this.requestsService.completeMaterialQc(+this.orderId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => this.router.navigate(['../'], {
          relativeTo: this.route
        }));
      }
    });
  }

  onUpdateItems(request, qc_stage, confirmation_flag) {
    let listId = [];
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(confirm => confirm)).subscribe(() => {
      listId.push(request.id, ...request.ids);
      const requestData = {
        "production_request_ids": listId,
        "order_qc_delivery_status_id": this.order.qc_delivery_status.id,
        "confirmation_flag": confirmation_flag,
        "qc_stage": qc_stage
      };
      this.requestsService.updateMaterial(requestData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
        this.getOrderInfo(+this.orderId);
        this.getRequests();
      });
    });
  }

  onResetConfirmation() {
    let listId = [];
    this.selectedRequest.forEach(request => {
      listId.push(request.id, ...request.ids);
    });
    const requestData = {
      "production_request_ids": listId
    };
    this.requestsService.resetConfirmation(requestData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
      this.getOrderInfo(+this.orderId);
      this.getRequests();
    });
  }

  onCompleteMaterialQcList(qc_stage) {
    let listId = [];
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(confirm => confirm)).subscribe(() => {
      this.selectedRequest.forEach(request => {
        listId.push(request.id, ...request.ids);
      });
      const requestData = {
        "production_request_ids": listId,
        "qc_stage": qc_stage
      };
      this.requestsService.updateMaterial(requestData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
        this.getOrderInfo(+this.orderId);
        this.getRequests();
      });
    });
  }

  onGoProd(id) {
    window.open(`/manufactoring/plan/plan/` + id, '_blank');
  }

  goOrder(type, id) {
    let link = '';

    if (type == 1) {
      link = `/procurement/chains/order/` + id;
    }

    if (type == 2) {
      link = `/outsourcing/chains/order/` + id;
    }

    if (type == 3) {
      link = `/manufacturing/orders/order/` + id;
    }

    window.open(link, '_blank');
  }

  goToOrder() {
    let link = '';

    if (this.order.accounting_type == 1) {
      link = `/procurement/chains/order/` + this.order.id;
    }

    if (this.order.accounting_type == 2) {
      link = `/outsourcing/chains/order/` + this.order.id;
    }

    if (this.order.accounting_type == 3) {
      link = `/manufacturing/orders/order/` + this.order.id;
    }

    window.open(link, '_blank');
  }

  printPage() {
    this.isShowPrint = true;
    setTimeout(() => {
      window.print();
    });
  }

  printPageGrouped() {
    this.isShowPrintGrouped = true;
    setTimeout(() => {
      window.print();
    });
  }

  onWindowAfterPrint() {
    this.isShowPrintGrouped = false;
    this.isShowPrint = false;
  }

  printClosed() {
    this.isShowPrintGrouped = false;
    this.isShowPrint = false;
  }

  printAlbum() {
    this.albumService.getNomenclaturesImages(this.selectedRequest.map(r => {
      if (r.material_nomenclature) {
        return r.material_nomenclature;
      } else if (r.order_product_nomenclature) {
        return r.order_product_nomenclature;
      } else if (!r.material_nomenclature && !r.order_product_nomenclature) {
        return r.list_product?.nomenclature;
      }
    }));
  }

  togglePrintAlbumMode() {
    this.selectedRequest = [];
    this.isAlbumPrint = !this.isAlbumPrint;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onStartScanning() {
    this.clearQrResults();
    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach(element => {
        this.elementsRowsIds.push(element.id);
      });
    });
    this.isScanned = true;
    this.scanningEnd = false;
  }

  clearQrResults() {
    this.currentDisplayRowId = null;
    this.foundRowsIds = [];
  }

  onScanned(data) {
    this.scanningEnd = true;
    this.isScanned = false;
    this.scanForListProduct(data);
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanned = false;
  }

  scanForListProduct(data = null) {
    this.lastScannedId = null;
    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach(element => {
        this.elementsRowsIds.push(element.id);
      });
    });
    this.requestsService.sendDataProductionRequests(this.orderId, data).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(res => {
      this.testFoundIdsOnScan(res);
    });
  }

  testFoundIdsOnScan(res) {
    const ids = res.map(el => el.item_id_changed);
    let elementIndex;
    this.listRequests.forEach((request, index) => {
      const isMainIdChecked = ids.findIndex(id => id === request.id) > -1;

      if (isMainIdChecked) {
        request.is_scanned = true;
        elementIndex = index;
        this.lastScannedId = request.id;
      }

      request.requests.forEach(req => {
        if (ids.findIndex(id => id === req.id) > -1) {
          req.is_scanned = true;
          elementIndex = index;
          this.lastScannedId = request.id;
        }
      });
    });

    if (elementIndex) {
      this.firstPage = Math.floor(elementIndex / 10) * 10;
    }

    this.requestTree.forEach(node => {
      node.children.forEach(child => {
        const request = child.data.request;
        const isMainIdChecked = ids.findIndex(id => id === request.id) > -1;

        if (isMainIdChecked) {
          request.is_scanned = true;
          this.lastScannedId = request.id;
        }

        request.requests?.forEach(req => {
          if (ids.findIndex(id => id === req.id) > -1) {
            req.is_scanned = true;
            this.lastScannedId = request.id;
          }
        });
      });
    });
  }

  scrollToElement(rowId) {
    const element = document.getElementById(rowId);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  isFullyScanned(request) {
    if (request.requests?.length === 0) {
      return request.is_scanned;
    }

    const mainScanned = request.is_scanned;
    const allInnerScanned = !(request.requests?.findIndex(req => !req.is_scanned) > -1);
    return mainScanned && allInnerScanned;
  }

  isPartlyScanned(request) {
    if (request?.requests?.length === 0) {
      return false;
    }

    const mainScanned = request.is_scanned;
    const innerNeedScan = request.requests?.findIndex(req => !req.is_scanned) > -1;
    return !this.isFullyScanned(request) && (mainScanned || !innerNeedScan);
  }

};

QcDeliveryComponent.ɵfac = function QcDeliveryComponent_Factory(t) {
  return new (t || QcDeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_warehouse_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_warehouse_services_order_technical_equipments_service__WEBPACK_IMPORTED_MODULE_6__.OrderTechnicalEquipmentsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_album_service__WEBPACK_IMPORTED_MODULE_7__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DOCUMENT));
};

QcDeliveryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: QcDeliveryComponent,
  selectors: [["pek-qc-delivery"]],
  viewQuery: function QcDeliveryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.dateTable = _t.first);
    }
  },
  hostBindings: function QcDeliveryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("afterprint", function QcDeliveryComponent_afterprint_HostBindingHandler() {
        return ctx.onWindowAfterPrint();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"])("afterprint", function QcDeliveryComponent_afterprint_HostBindingHandler() {
        return ctx.printClosed();
      });
    }
  },
  decls: 45,
  vars: 25,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], [1, "ml-auto", "mr-2", 3, "model"], ["pButton", "", "type", "button", "label", "Print Album", 1, "p-button-success", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Go to Order", 1, "ml-2", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single"], ["pTemplate", "caption"], ["scrollHeight", "calc(100vh - 18.8rem)", "dataKey", "id", 1, "adaptive-table", "print-table", 3, "paginator", "scrollable", "rows", "value", "first", "globalFilterFields", "selection", "firstChange", "selectionChange"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["selectionMode", "single", 3, "value"], ["class", "print-page", 4, "ngIf"], [3, "scanned", "cancel", 4, "ngIf"], ["orderLink", ""], [1, "table-tools"], [1, "subtitle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "table-caption"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "QTY Confirm", 1, "ml-auto", "mr-2", "p-button-success", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Packing Confirm", 1, "mr-2", "p-button-success", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-spinner", "label", "Reset Confirmation", 1, "mr-2", "p-button-danger", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-camera", "label", "Scan QR Codes", 1, "mr-2", "p-button-icon", 3, "click"], [1, "index-header"], [2, "width", "3%"], [1, "text-center", 2, "width", "5%"], [1, "row-toggler"], [2, "width", "15%"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "12%"], [1, "text-center", 2, "width", "14%"], [1, "text-center", 2, "width", "4%"], [1, "pagebreak", 3, "pSelectableRow"], [3, "value"], [1, "td-title"], [1, "text-center", "ids-container", "hovered-info", 2, "width", "5%"], [3, "moveLeft", 4, "ngIf"], [1, "serial-numbers-container", 2, "width", "15%"], [3, "moveLeft"], [1, "ids"], [2, "width", "4%"], [1, "table-buttons"], ["pButton", "", "type", "button", "icon", "pi pi-check", 1, "p-button-success", "ml-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "ml-2", 3, "disabled", "click"], [1, "tr-spinner"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], ["class", "table-tools", 4, "ngIf"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "35%"], [2, "width", "30%"], [1, "text-center", 2, "width", "30%"], [1, "table-row", 3, "pSelectableRow"], [1, "text-center"], ["colspan", "5"], [1, "text-center", "p-5"], ["class", "fas fa-circle-notch fa-spin fa-3x ", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-3x"], [1, "print-page"], [3, "rootList", "orderId", "requests", "currentReqDate", "technologies", "outsourcer", "technicalEquipments"], [3, "rootList", "orderedProducts", "orderId", "requests", "currentReqDate", "technologies", "outsourcer", "technicalEquipments"], [3, "scanned", "cancel"], [1, "order-link", 3, "click"]],
  template: function QcDeliveryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Order ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, QcDeliveryComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "p-menubar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_Template_button_click_9_listener() {
        return ctx.printAlbum();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_Template_button_click_11_listener() {
        return ctx.complete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcDeliveryComponent_Template_a_click_12_listener() {
        return ctx.goToOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "p-table", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, QcDeliveryComponent_ng_template_17_Template, 32, 7, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 12)(22, "p-table", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("firstChange", function QcDeliveryComponent_Template_p_table_firstChange_22_listener($event) {
        return ctx.firstPage = $event;
      })("selectionChange", function QcDeliveryComponent_Template_p_table_selectionChange_22_listener($event) {
        return ctx.selectedRequest = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, QcDeliveryComponent_ng_template_24_Template, 6, 4, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, QcDeliveryComponent_ng_template_25_Template, 2, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, QcDeliveryComponent_ng_template_26_Template, 23, 1, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, QcDeliveryComponent_ng_template_27_Template, 49, 28, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, QcDeliveryComponent_ng_template_28_Template, 4, 3, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, QcDeliveryComponent_ng_template_29_Template, 2, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, QcDeliveryComponent_div_30_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 10)(32, "div", 11)(33, "div", 12)(34, "p-table", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, QcDeliveryComponent_ng_template_35_Template, 1, 1, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, QcDeliveryComponent_ng_template_36_Template, 11, 0, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, QcDeliveryComponent_ng_template_37_Template, 12, 7, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, QcDeliveryComponent_ng_template_38_Template, 3, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, QcDeliveryComponent_ng_template_39_Template, 4, 3, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, QcDeliveryComponent_div_40_Template, 3, 7, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, QcDeliveryComponent_div_41_Template, 3, 8, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, QcDeliveryComponent_pek_qr_code_scanner_42_Template, 1, 0, "pek-qr-code-scanner", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, QcDeliveryComponent_ng_template_43_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](23);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](44);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("module", "warehouse")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("model", ctx.printMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 22, ctx.albumService.loading$))("disabled", (ctx.selectedRequest == null ? null : ctx.selectedRequest.length) === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !(ctx.order == null ? null : ctx.order.qc_delivery_status == null ? null : ctx.order.qc_delivery_status.is_qc_completed));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("disabled", !ctx.order);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("paginator", ctx.listRequests.length > 0)("scrollable", !_r2.paginator)("rows", 10)("value", ctx.listRequests)("first", ctx.firstPage)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](24, _c1))("selection", ctx.selectedRequest);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r2.paginator && !ctx.isLoading && ctx.listRequests.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.technicalEquipments);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isShowPrint);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isShowPrintGrouped);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isScanned);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_20__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_21__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_22__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_23__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_23__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_8__.ModuleIconComponent, _shared_components_hover_detailed_info_component_hover_detailed_info_component_component__WEBPACK_IMPORTED_MODULE_9__.HoverDetailedInfoComponentComponent, _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_10__.QrCodeScannerComponent, _qc_delivery_print_page_qc_delivery_print_page_component__WEBPACK_IMPORTED_MODULE_11__.QcDeliveryPrintPageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: ["@page {\n  size: portrait !important;\n}\n.table-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.disabled[_ngcontent-%COMP%] {\n  background: #d6d6d6 !important;\n}\n@media print {\n  .page[_ngcontent-%COMP%], .page__content[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.row-toggler[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.row-toggler[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.request-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.request-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 1.2;\n  margin-bottom: 25px;\n}\n.request-row[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  box-sizing: border-box;\n  padding-right: 30px;\n}\n.request-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 19px;\n  margin: 0 0 10px;\n  line-height: 1.2;\n}\n.request-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n.request-row[_ngcontent-%COMP%]:nth-child(1), .request-row[_ngcontent-%COMP%]:nth-child(2), .request-row[_ngcontent-%COMP%]:nth-child(5), .request-row[_ngcontent-%COMP%]:nth-child(6) {\n  width: 30%;\n}\n.request-row[_ngcontent-%COMP%]:nth-child(3), .request-row[_ngcontent-%COMP%]:nth-child(4) {\n  width: 20%;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: flex;\n}\n.user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: space-between;\n  margin-top: 50px;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 20px;\n}\n.user-info[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.print-info[_ngcontent-%COMP%] {\n  display: none;\n}\n.root-plans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.root-plans[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n  .orders-tree .p-treetable-wrapper {\n  max-height: calc(100vh - 16.625rem);\n  overflow: auto;\n}\n  table tbody tr.qr-code-scanned {\n  background: #e1efe2 !important;\n}\n  table tbody tr.partly-scanned {\n  background: #f5dfe1 !important;\n}\n  table tbody tr.last-scanned {\n  box-shadow: inset 0 0 10px 7px rgba(58, 83, 108, 0.25);\n}\n  table tbody .is-added-after-order-creation {\n  background: #fb8f8f !important;\n}\n  table tbody .is-wrong-qc {\n  background: #f75151 !important;\n}\n.colors[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-left: 1rem;\n}\n.colors__color[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.colors__color-block[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n}\n.colors__color-block_scanned[_ngcontent-%COMP%] {\n  background: #e1efe2;\n}\n.colors__color-block_partly-scanned[_ngcontent-%COMP%] {\n  background: #f5dfe1;\n}\n.in-plan[_ngcontent-%COMP%] {\n  background-color: rgba(124, 133, 245, 0.52) !important;\n}\n.print-page[_ngcontent-%COMP%] {\n  z-index: 9999;\n  background: #fff;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: none;\n  height: 100%;\n}\n@media print {\n  .print-page[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media print {\n    .layout-header {\n    display: none;\n  }\n}\n.ids-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.order-ids-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.order-ids-container[_ngcontent-%COMP%]   .orders-ids[_ngcontent-%COMP%] {\n  display: none;\n}\n.order-ids-container[_ngcontent-%COMP%]:hover   .orders-ids[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  right: -100%;\n  top: 0;\n  background-color: white;\n  padding: 0.5rem 1rem;\n  z-index: 1;\n  border-radius: 0.625rem;\n  box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.15);\n}\n.serial-numbers-container[_ngcontent-%COMP%] {\n  color: #495057 !important;\n  position: relative;\n}\n.serial-numbers-container[_ngcontent-%COMP%]   .serial-numbers[_ngcontent-%COMP%] {\n  display: none;\n  color: #495057 !important;\n}\n.serial-numbers-container[_ngcontent-%COMP%]:hover   .serial-numbers[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: -11rem;\n  width: 11rem;\n  height: auto;\n  padding: 0.5rem 1rem;\n  color: #495057 !important;\n  background-color: white;\n  border-radius: 0.625rem;\n  box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUFESjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBR0U7RUFDRSw4QkFBQTtBQUFKO0FBS0k7RUFGRjs7SUFHSSxhQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDRSxvQkFBQTtBQUFOO0FBSUU7RUFDRSxlQUFBO0FBREo7QUFHSTtFQUNFLDBCQUFBO0FBRE47QUFLRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZOO0FBS0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQUhOO0FBTUk7RUFJRSxVQUFBO0FBUE47QUFVSTtFQUVFLFVBQUE7QUFUTjtBQWFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFWSjtBQVlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQWFJO0VBQ0UsVUFBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVpKO0FBY0k7RUFDRSxZQUFBO0FBWk47QUFnQk07RUFDRSxtQkFBQTtBQWRSO0FBbUJFO0VBQ0UsYUFBQTtBQWhCSjtBQW1CRTtFQUNFLGVBQUE7QUFoQko7QUFrQkk7RUFDRSwwQkFBQTtBQWhCTjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEJKO0FBdUJNO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBcEJSO0FBMEJRO0VBQ0UsOEJBQUE7QUF4QlY7QUEyQlE7RUFDRSw4QkFBQTtBQXpCVjtBQTRCUTtFQUNFLHNEQUFBO0FBMUJWO0FBNkJRO0VBQ0UsOEJBQUE7QUEzQlY7QUE4QlE7RUFDRSw4QkFBQTtBQTVCVjtBQW1DRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBaENKO0FBa0NJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaENOO0FBbUNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQWpDTjtBQW1DTTtFQUNFLG1CQUFBO0FBakNSO0FBb0NNO0VBQ0UsbUJBQUE7QUFsQ1I7QUF1Q0U7RUFDRSxzREFBQTtBQXBDSjtBQXVDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUVBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBckNKO0FBdUNJO0VBVkY7SUFXSSxjQUFBO0VBcENKO0FBQ0Y7QUF5Q0k7RUFDRTtJQUNFLGFBQUE7RUF0Q047QUFDRjtBQTJDRTtFQUNFLGtCQUFBO0FBeENKO0FBMkNFO0VBQ0Usa0JBQUE7QUF4Q0o7QUEwQ0k7RUFDRSxhQUFBO0FBeENOO0FBMkNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUF6Q1I7QUE4Q0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBM0NKO0FBNkNJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBM0NOO0FBK0NNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FBN0NSIiwiZmlsZSI6InFjLWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AcGFnZSB7XHJcbiAgICBzaXplOiBwb3J0cmFpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGFibGUtYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5kaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQ6ICNkNmQ2ZDYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2UsXHJcbiAgLnBhZ2VfX2NvbnRlbnQge1xyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJvdy10b2dnbGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAudG9nZ2xlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVxdWVzdC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmVxdWVzdC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXF1ZXN0LXJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICBcclxuICAgICY6bnRoLWNoaWxkKDEpLFxyXG4gICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAmOm50aC1jaGlsZCg1KSxcclxuICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICBcclxuICAgICY6bnRoLWNoaWxkKDMpLFxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXNlci1pbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICBcclxuICAgIHAge1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGVmdCwgLnJpZ2h0IHtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmludC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb290LXBsYW5zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRvZ2dsZS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm9yZGVycy10cmVlIHtcclxuICAgICAgLnAtdHJlZXRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNi42MjVyZW0pO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHRib2R5IHtcclxuICAgICAgICB0ci5xci1jb2RlLXNjYW5uZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2UxZWZlMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0ci5wYXJ0bHktc2Nhbm5lZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVkZmUxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRyLmxhc3Qtc2Nhbm5lZCB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCA3cHggcmdiKDU4IDgzIDEwOCAvIDI1JSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5pcy1hZGRlZC1hZnRlci1vcmRlci1jcmVhdGlvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmI4ZjhmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5pcy13cm9uZy1xYyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc1MTUxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xvcnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIFxyXG4gICAgJl9fY29sb3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fY29sb3ItYmxvY2sge1xyXG4gICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIFxyXG4gICAgICAmX3NjYW5uZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMWVmZTI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJl9wYXJ0bHktc2Nhbm5lZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZGZlMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW4tcGxhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0IDEzMyAyNDUgLyA1MiUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmludC1wYWdlIHtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAubGF5b3V0LWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuaWRzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1pZHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgIC5vcmRlcnMtaWRzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAub3JkZXJzLWlkcyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlcmlhbC1udW1iZXJzLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgLnNlcmlhbC1udW1iZXJzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuc2VyaWFsLW51bWJlcnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogLTExcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggNXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"]
});
QcDeliveryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.UntilDestroy)()], QcDeliveryComponent);


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/models/invoice-product */ 16195);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-copy-ts */ 47307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../qr-code/qr-code.service */ 32527);
/* harmony import */ var _services_qc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/qc.service */ 7630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_album_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services/album.service */ 96667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../qr-code/components/qr-code-scanner/qr-code-scanner.component */ 81984);





















function QcInvoiceComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}

function QcInvoiceComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_21_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose the Product to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcInvoiceComponent_ng_template_21_p_1_Template, 2, 0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_21_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.onShowImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.onQualityControl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.selectedInvoiceProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedInvoiceProducts.length === 0 || ctx_r3.selectedInvoiceProducts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedInvoiceProducts.length === 0 || ctx_r3.selectedInvoiceProducts.length > 1 || ctx_r3.selectedInvoiceProducts[0].isNonRma);
  }
}

function QcInvoiceComponent_ng_template_22_b_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_b_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" A (", product_r22.totalQuantityAllocated, ") ");
  }
}

function QcInvoiceComponent_ng_template_22_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 40)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "p-tableCheckbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, QcInvoiceComponent_ng_template_22_b_7_Template, 2, 0, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, QcInvoiceComponent_ng_template_22_b_16_Template, 2, 1, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, QcInvoiceComponent_ng_template_22_span_22_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, QcInvoiceComponent_ng_template_22_span_23_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, QcInvoiceComponent_ng_template_22_span_24_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r22 = ctx.$implicit;
    const i_r23 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", product_r22)("pSelectableRowDisabled", product_r22.isNonRma);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", product_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r22.rma_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.current_technology == null ? null : product_r22.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.category ? product_r22.nomenclature.category == null ? null : product_r22.nomenclature.category.unit_of_measure == null ? null : product_r22.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.totalQuantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (product_r22.isNonRma || !product_r22.rma_comment) && product_r22.totalQuantityAllocated > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.totalQuantityPassed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.totalQuantityNotPassed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r22.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r22.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r22.quality_control == 0);
  }
}

function QcInvoiceComponent_ng_template_23_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 53);
  }
}

function QcInvoiceComponent_ng_template_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcInvoiceComponent_ng_template_23_i_2_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, QcInvoiceComponent_ng_template_23_span_3_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r5.isLoadingProducts);
  }
}

function QcInvoiceComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_24_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r1.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 55)(1, "p-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_div_25_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r1.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_33_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Choose the Technical Equipment to Quality Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcInvoiceComponent_ng_template_33_p_1_Template, 2, 0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_33_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r37.onQualityControlTechnicalEquipment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r10.selectedTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r10.isLoadingTechnicalEquipment || !ctx_r10.selectedTechnicalEquipment);
  }
}

function QcInvoiceComponent_ng_template_34_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 59)(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, QcInvoiceComponent_ng_template_34_span_16_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, QcInvoiceComponent_ng_template_34_span_17_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, QcInvoiceComponent_ng_template_34_span_18_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r39 = ctx.$implicit;
    const i_r40 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", product_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r40 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r39.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r39.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r39.nomenclature.category ? product_r39.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r39.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r39.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r39.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r39.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r39.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r39.quality_control == 0);
  }
}

function QcInvoiceComponent_ng_template_35_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 53);
  }
}

function QcInvoiceComponent_ng_template_35_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcInvoiceComponent_ng_template_35_i_2_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, QcInvoiceComponent_ng_template_35_span_3_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.isLoadingTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r12.isLoadingTechnicalEquipment);
  }
}

function QcInvoiceComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_36_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r8.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 55)(1, "p-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_div_37_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);

      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r8.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function QcInvoiceComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_38_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r50.goToOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r16.invoice == null ? null : ctx_r16.invoice.order == null ? null : ctx_r16.invoice.order.id);
  }
}

function QcInvoiceComponent_pek_qr_code_scanner_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "pek-qr-code-scanner", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scanned", function QcInvoiceComponent_pek_qr_code_scanner_40_Template_pek_qr_code_scanner_scanned_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r52.onScanned($event));
    })("cancel", function QcInvoiceComponent_pek_qr_code_scanner_40_Template_pek_qr_code_scanner_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r54.onCancelScanned());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
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
    this.link = _env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.link_url + 'dash/';
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
    this.isScanning = false;
  }

  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(id => this.invoiceId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getInvoice()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getInvoiceProducts())).subscribe();
  }

  getInvoice() {
    this.invoiceService.getById(this.invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(invoice => this.invoice = invoice), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getTechnicalEquipmentToQc()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.isLoading = false)).subscribe();
  } // Code reference
  // getInvoiceProducts() {
  //   this.invoiceProducts = [];
  //   this.selectedInvoiceProducts = [];
  //   this.isLoadingProducts = true;
  //
  //   this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe(
  //     tap(products => {
  //
  //       const RMAProducts = [];
  //       const RMAPassedProducts = [];
  //       const NonRMAProducts = [];
  //       const allocated_products = products.filter(product => product.allocated_quantity > 0);
  //       products = products.filter(product => product.allocated_quantity === 0);
  //       deepCopy(products).filter(product => product.rma_status).forEach(product => {
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const rmaStatus = product.rma_status;
  //         const existing = RMAProducts.find(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.rma_status === rmaStatus &&
  //           el.current_technology?.id === technologyId);
  //
  //         const allocated = allocated_products.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         if (existing) {
  //           if (rmaStatus) {
  //             existing.totalQuantity = existing.totalQuantity += product.quantity - product.accepted_quantity;
  //             existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity > 0 ? product.passed_quantity - product.accepted_quantity : 0;
  //             existing.totalSerialNumbers.push(...product.serial_numbers.filter(sn => !sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             }));
  //           }
  //           existing.totalQuantityNotPassed += product.not_passed_quantity;
  //           existing.invoiceProducts.push(product);
  //         } else {
  //           product.invoiceProducts = [deepCopy(product)];
  //           if (rmaStatus) {
  //             product.totalQuantity = product.quantity - product.accepted_quantity;
  //             product.totalQuantityPassed = product.passed_quantity > 0 ? product.passed_quantity - product.accepted_quantity : 0;
  //             product.totalSerialNumbers = [...product.serial_numbers.filter(sn => !sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             })];
  //           }
  //           product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
  //           product.totalQuantityNotPassed = product.not_passed_quantity;
  //           if (product.totalQuantity > 0) {
  //             RMAProducts.push(product);
  //           }
  //         }
  //       });
  //
  //       deepCopy(products).filter(product => product.rma_status).forEach(product => {
  //         product.isNonRma = true;
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const existingPassedProducts = NonRMAProducts.find(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           !product.rma_status &&
  //           el.current_technology?.id === technologyId);
  //
  //         const allocated = allocated_products.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         if (!existingPassedProducts) {
  //           const existing = RMAPassedProducts.find(el =>
  //             el.nomenclature.id === nomenclatureId &&
  //             el.current_technology?.id === technologyId);
  //           if (existing) {
  //             existing.totalQuantity = existing.totalQuantity += product.accepted_quantity;
  //             existing.totalQuantityPassed = existing.totalQuantityPassed += product.accepted_quantity;
  //             existing.totalSerialNumbers.push(...product.serial_numbers.filter(sn => sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             }));
  //             existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += 0;
  //             existing.invoiceProducts.push(product);
  //           } else {
  //             product.invoiceProducts = [deepCopy(product)];
  //             product.totalQuantity = product.accepted_quantity;
  //             product.totalQuantityPassed = product.accepted_quantity;
  //             product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
  //             product.totalSerialNumbers = [...product.serial_numbers.filter(sn => sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             })];
  //             product.totalQuantityNotPassed = 0;
  //             RMAPassedProducts.push(product);
  //           }
  //         }
  //       });
  //
  //       deepCopy(products).filter(product => !product.rma_status).forEach(product => {
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const existing = NonRMAProducts.find(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         const allocated = allocated_products.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         if (existing) {
  //           existing.totalQuantity = existing.totalQuantity += product.quantity;
  //           existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity;
  //           existing.totalSerialNumbers.push(...product.serial_numbers.map(sn => {
  //             return {
  //               ...sn,
  //               invoice_product_id: product.id
  //             };
  //           }));
  //           existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += product.not_passed_quantity;
  //           existing.invoiceProducts.push(product);
  //         } else {
  //           product.invoiceProducts = [deepCopy(product)];
  //           product.totalQuantity = product.quantity;
  //           product.totalQuantityPassed = product.passed_quantity;
  //           product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
  //           product.totalSerialNumbers = [...product.serial_numbers.map(sn => {
  //             return {
  //               ...sn,
  //               invoice_product_id: product.id
  //             };
  //           })];
  //           product.totalQuantityNotPassed = product.not_passed_quantity;
  //           NonRMAProducts.push(product);
  //         }
  //       });
  //       this.invoiceProducts = [...RMAProducts, ...RMAPassedProducts, ...NonRMAProducts];
  //       this.invoiceProducts.filter(p => !p.rma_status).forEach(product => {
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const existing = this.invoiceProducts.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.rma_status &&
  //           el.current_technology?.id === technologyId);
  //         existing.forEach(prod => {
  //           prod.invoiceProducts.forEach(invProd => {
  //             product.totalQuantity += invProd.accepted_quantity;
  //             product.totalQuantityPassed += invProd.accepted_quantity;
  //           });
  //         });
  //       });
  //       this.invoiceProducts.forEach((product, index) => {
  //         product.idx = `${product.id}${index}`;
  //         if (product.isNonRma) {
  //           product.quality_control = EInvoiceProductQualityControl.PASSED.toString();
  //         } else {
  //           product.quality_control = null;
  //           if (product.totalQuantityNotPassed > 0 || product.totalQuantityPassed > 0) {
  //             if (product.totalQuantityPassed === product.totalQuantity) {
  //               product.quality_control = EInvoiceProductQualityControl.PASSED.toString();
  //             } else if (product.totalQuantityNotPassed === product.totalQuantity) {
  //               product.quality_control = EInvoiceProductQualityControl.NOT_PASSED.toString();
  //             } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
  //               product.quality_control = EInvoiceProductQualityControl.PARTLY_PASSED.toString();
  //             }
  //           }
  //         }
  //       });
  //       this.invoiceProducts = [...this.invoiceProducts.filter(p => p.totalQuantity)];
  //       this.invoiceProducts.sort((a, b) => b.rma_comment.localeCompare(a.rma_comment));
  //     }),
  //     tap(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))),
  //     tap(() => this.isLoadingProducts = false)
  //   ).subscribe();
  // }


  getInvoiceProducts() {
    this.invoiceProducts = [];
    this.selectedInvoiceProducts = [];
    this.isLoadingProducts = true;
    this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(products => {
      const allocated_products = products.filter(product => product.allocated_quantity > 0);
      const formedRMAInvoiceProducts = this.prepareRMAInvoiceProducts(products, allocated_products);
      const formedNonRMAInvoiceProducts = this.prepareNonRMAInvoiceProducts(products, allocated_products);
      this.invoiceProducts = [...formedRMAInvoiceProducts, ...formedNonRMAInvoiceProducts];
      this.invoiceProducts.filter(p => !p.rma_status).forEach(product => {
        const technologyId = product.current_technology?.id;
        const nomenclatureId = product.nomenclature.id;
        const existing = this.invoiceProducts.filter(el => el.nomenclature.id === nomenclatureId && el.rma_status && el.current_technology?.id === technologyId);
        existing.forEach(prod => {
          prod.invoiceProducts.forEach(invProd => {
            product.totalQuantity += invProd.accepted_quantity;
            product.totalQuantityPassed += invProd.accepted_quantity;
          });
        });
      });
      this.invoiceProducts.forEach((product, index) => {
        product.idx = `${product.id}${index}`;
        product.quality_control = null;

        if (product.totalQuantityNotPassed > 0 || product.totalQuantityPassed > 0) {
          if (product.totalQuantityPassed === product.totalQuantity) {
            product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PASSED.toString();
          } else if (product.totalQuantityNotPassed === product.totalQuantity) {
            product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.NOT_PASSED.toString();
          } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
            product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PARTLY_PASSED.toString();
          }
        }
      });
      this.invoiceProducts = [...this.invoiceProducts.filter(p => p.totalQuantity)];
      this.invoiceProducts.sort((a, b) => b.rma_comment.localeCompare(a.rma_comment));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.isLoadingProducts = false)).subscribe();
  }

  prepareRMAInvoiceProducts(products, allocated_products) {
    let formedRMAInvoiceProducts = [];
    (0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(products).filter(product => product.rma_status === _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductRMAStatus.RECEIVED).forEach(tempProduct => {
      let product = tempProduct;
      const technologyId = product.current_technology?.id;
      const nomenclatureId = product.nomenclature.id;
      const existingRMA = formedRMAInvoiceProducts.find(el => el.nomenclature.id === nomenclatureId && el.current_technology?.id === technologyId);
      const allocated = allocated_products.filter(el => el.nomenclature.id === nomenclatureId && el.current_technology?.id === technologyId);

      if (existingRMA) {
        existingRMA.invoiceProducts.push((0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(product));
        existingRMA.totalSerialNumbers.push(...product.serial_numbers.map(sn => {
          return { ...sn,
            invoice_product_id: product.id
          };
        }));
        existingRMA.totalQuantity += product.quantity;
        existingRMA.totalQuantityPassed += product.passed_quantity;
        existingRMA.totalQuantityNotPassed += product.not_passed_quantity;
      } else {
        product.invoiceProducts = [(0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(product)];
        product.totalSerialNumbers = [...product.serial_numbers.map(sn => {
          return { ...sn,
            invoice_product_id: product.id
          };
        })];
        product.totalQuantity = product.quantity;
        product.totalQuantityPassed = product.passed_quantity;
        product.totalQuantityNotPassed = product.not_passed_quantity;
        product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
        formedRMAInvoiceProducts.push(product);
      }
    });
    return formedRMAInvoiceProducts;
  }

  prepareNonRMAInvoiceProducts(products, allocated_products) {
    let formedRMAInvoiceProducts = [];
    (0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(products).filter(product => product.rma_status === "" && product.rma_comment === "" || product.rma_status === _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductRMAStatus.PASSED).forEach(tempProduct => {
      let product = tempProduct;
      product.rma_status = '';
      const technologyId = product.current_technology?.id;
      const nomenclatureId = product.nomenclature.id;
      const existingRMA = formedRMAInvoiceProducts.find(el => el.nomenclature.id === nomenclatureId && el.current_technology?.id === technologyId);
      const allocated = allocated_products.filter(el => el.nomenclature.id === nomenclatureId && el.current_technology?.id === technologyId);

      if (existingRMA) {
        existingRMA.invoiceProducts.push((0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(product));
        existingRMA.totalSerialNumbers.push(...product.serial_numbers.map(sn => {
          return { ...sn,
            invoice_product_id: product.id
          };
        }));
        existingRMA.totalQuantity += product.quantity;
        existingRMA.totalQuantityPassed += product.passed_quantity;
        existingRMA.totalQuantityNotPassed += product.not_passed_quantity;
      } else {
        product.invoiceProducts = [(0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(product)];
        product.totalSerialNumbers = [...product.serial_numbers.map(sn => {
          return { ...sn,
            invoice_product_id: product.id
          };
        })];
        product.totalQuantity = product.quantity;
        product.totalQuantityPassed = product.passed_quantity;
        product.totalQuantityNotPassed = product.not_passed_quantity;
        product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
        formedRMAInvoiceProducts.push(product);
      }
    });
    return formedRMAInvoiceProducts;
  }

  getTechnicalEquipmentToQc() {
    this.isLoadingTechnicalEquipment = true;
    this.technicalEquipments = [];

    if (this.invoice.order) {
      this.orderProductService.getTechnicalEquipmentToQC(this.invoice.order.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(equipment => this.technicalEquipments = equipment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.isLoadingTechnicalEquipment = false)).subscribe();
    }
  }

  onGenerateQrCodes() {
    this.isGenerating = true;
    const send = {
      by_nomenclatures_list: []
    };
    this.selectedInvoiceProducts.forEach(invoiceProduct => {
      invoiceProduct.invoiceProducts.forEach(p => {
        if (p.nomenclature.bulk_or_serial === '1') {
          send.by_nomenclatures_list.push({
            nomenclature_id: p.nomenclature.id,
            serial_number_ids: p.nomenclature.bulk_or_serial === '1' ? p.serial_numbers.map(s => +s.id) : [],
            order_product_ids: [p.id],
            invoice_product_ids: []
          });
        } else {
          const exists = send.by_nomenclatures_list.findIndex(el => el.nomenclature_id === p.nomenclature.id) >= 0;

          if (!exists) {
            send.by_nomenclatures_list.push({
              nomenclature_id: p.nomenclature.id,
              serial_number_ids: [],
              order_product_ids: [p.id],
              invoice_product_ids: []
            });
          }
        }
      });
    });
    this.qrCodeService.generateQrCodes(send, this.invoice.order.id, this.invoice.self_serial_number).subscribe(() => this.isGenerating = false);
  }

  onCancellation() {
    this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(confirm => confirm)).subscribe(() => {
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
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(confirm => confirm)).subscribe(() => {
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
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(confirm => confirm)).subscribe(() => {
      const send = [];
      const sendProducts = [];
      this.selectedInvoiceProducts.forEach(product => {
        const products = product.invoiceProducts.filter(p => !p.nomenclature.qc_protocol && p.nomenclature.bulk_or_serial === '0');
        sendProducts.push(...products);
      });
      sendProducts.forEach(product => {
        send.push({
          id: product.id,
          not_passed_quantity: 0,
          passed_quantity: product.quantity,
          quality_control: 1
        });
      });
      this.isCompletingProducts = true;
      this.invoiceProductService.severalUpdatePartly(send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.getInvoiceProducts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.isCompletingProducts = false)).subscribe();
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedInvoiceProducts[0].nomenclature.id, 1).subscribe();
  }

  onQualityControl() {
    if (this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityPassed;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityNotPassed;
      this.qcService.withProtocolControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].totalQuantity, 'invoice', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedInvoiceProducts = [];
          this.getInvoiceProducts();
        }
      });
    } else if (!this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityPassed;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityNotPassed;
      this.qcService.serializedControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].totalQuantity, 'invoice', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedInvoiceProducts = [];
          this.getInvoiceProducts();
        }
      });
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
        link = `/manufacturing/orders/order/` + order.id;
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

  onStartScanning() {
    this.isScanning = true;
    this.scanningEnd = false;
  }

  onScanned(data) {
    this.scanningEnd = true;
    this.isScanning = false;
    this.scanForListProduct(data);
  }

  scanForListProduct(data = null) {
    this.invoiceService.scanInvoiceProductInQc(data, this.invoiceId).subscribe(res => {
      const foundInvoiceProduct = this.invoiceProducts.find(orderProduct => orderProduct.invoiceProducts.findIndex(prod => prod.id === res.found_id) > -1);

      if (foundInvoiceProduct) {
        this.qcService.foundProductInList(foundInvoiceProduct.nomenclature).subscribe(res => {
          if (res) {
            if (data.serial_number) {
              this.foundSerialId = data.serial_number;
            }

            this.selectedInvoiceProducts = [foundInvoiceProduct];
            this.onQualityControl();
          }
        });
      }
    });
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanning = false;
  }

}

QcInvoiceComponent.ɵfac = function QcInvoiceComponent_Factory(t) {
  return new (t || QcInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_4__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_5__.InvoiceProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_6__.QrCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_qc_service__WEBPACK_IMPORTED_MODULE_7__.QcService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_album_service__WEBPACK_IMPORTED_MODULE_9__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
};

QcInvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: QcInvoiceComponent,
  selectors: [["pek-qc-invoice"]],
  decls: 41,
  vars: 29,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print Album", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-camera", "label", "Scan QR Codes", 1, "mr-2", "p-button-icon", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-qrcode", "label", "Generate QR Codes", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete Products", 1, "p-button-icon", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Cancellation", 1, "p-button-icon", "p-button-danger", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "p-button-success", 3, "loading", "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["scrollHeight", "calc(100vh - 19rem)", "dataKey", "idx", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-4", "mb-4"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["st", ""], ["orderLink", ""], [3, "scanned", "cancel", 4, "ngIf"], [2, "width", "3%"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "17%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "p-button-icon", "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "p-button-icon", 3, "disabled", "click"], [1, "subtitle"], [3, "pSelectableRow", "pSelectableRowDisabled"], [3, "value"], [4, "ngIf"], ["pTooltip", "Allocated products count", 4, "ngIf"], ["class", "badge badge_success", 4, "ngIf"], ["class", "badge badge_warning", 4, "ngIf"], ["class", "badge badge_danger", 4, "ngIf"], ["pTooltip", "Allocated products count"], [1, "badge", "badge_success"], [1, "badge", "badge_warning"], [1, "badge", "badge_danger"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "index-header", "text-center", 2, "width", "8%"], [2, "width", "32%"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "ml-auto", "p-button-icon", 3, "disabled", "click"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "8%"], [1, "order-link", 3, "click"], [3, "scanned", "cancel"]],
  template: function QcInvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Order ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, QcInvoiceComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_8_listener() {
        return ctx.onPrintAlbum();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_10_listener() {
        return ctx.onStartScanning();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_11_listener() {
        return ctx.onGenerateQrCodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_12_listener() {
        return ctx.onCompleteItems();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_13_listener() {
        return ctx.onCancellation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_Template_button_click_14_listener() {
        return ctx.onComplete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "p-table", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function QcInvoiceComponent_Template_p_table_selectionChange_18_listener($event) {
        return ctx.selectedInvoiceProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, QcInvoiceComponent_ng_template_20_Template, 21, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, QcInvoiceComponent_ng_template_21_Template, 4, 3, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, QcInvoiceComponent_ng_template_22_Template, 25, 16, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, QcInvoiceComponent_ng_template_23_Template, 4, 3, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, QcInvoiceComponent_ng_template_24_Template, 2, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, QcInvoiceComponent_div_25_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "h2", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Technical Equipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "p-table", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function QcInvoiceComponent_Template_p_table_selectionChange_30_listener($event) {
        return ctx.selectedTechnicalEquipment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, QcInvoiceComponent_ng_template_32_Template, 17, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, QcInvoiceComponent_ng_template_33_Template, 3, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, QcInvoiceComponent_ng_template_34_Template, 19, 11, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, QcInvoiceComponent_ng_template_35_Template, 4, 3, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, QcInvoiceComponent_ng_template_36_Template, 2, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, QcInvoiceComponent_div_37_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, QcInvoiceComponent_ng_template_38_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, QcInvoiceComponent_pek_qr_code_scanner_40_Template, 1, 0, "pek-qr-code-scanner", 27);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](39);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("module", "warehouse")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 27, ctx.albumService.loading$))("disabled", ctx.selectedInvoiceProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx.isGenerating)("disabled", ctx.selectedInvoiceProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx.isCompletingProducts)("disabled", ctx.selectedInvoiceProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx.isCancellation)("disabled", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx.isCompleting)("disabled", !ctx.invoiceCanBeCompleted);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingProducts)("rows", 10)("value", ctx.invoiceProducts)("selection", ctx.selectedInvoiceProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0)("rows", 10)("value", ctx.technicalEquipments)("selection", ctx.selectedTechnicalEquipment);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_r8.paginator && !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isScanning);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_18__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_21__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_21__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_21__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_21__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_10__.ModuleIconComponent, _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_11__.QrCodeScannerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
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
            { label: 'Delivery', commands: ['delivery'] },
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
/* harmony import */ var _procurement_models_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/models/order */ 92595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/calendar */ 32547);


















function QcListComponent_ng_container_22_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Choose the Production Lists Procurement or Outsourcing Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a2) { return ["../", "invoice", a2]; };
function QcListComponent_ng_container_22_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_22_ng_template_4_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.onSelectInvoiceType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.onSelectInvoiceType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r7.selectedInvoiceItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r7.selectedInvoiceItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r7.selectedInvoiceItem == null ? null : ctx_r7.selectedInvoiceItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.invoicesViewType === "list");
} }
function QcListComponent_ng_container_22_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "QC Closed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_22_ng_template_5_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.showClosedInvoices);
} }
function QcListComponent_ng_container_22_ng_template_6_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r18.order == null ? null : invoice_r18.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_22_ng_template_6_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_6_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_22_ng_template_6_div_18_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r25 = ctx.$implicit;
    const last_r27 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r25 == null ? null : request_r25.toolRequest == null ? null : request_r25.toolRequest.tool_order == null ? null : request_r25.toolRequest.tool_order.area_locator == null ? null : request_r25.toolRequest.tool_order.area_locator.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r27);
} }
function QcListComponent_ng_container_22_ng_template_6_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r18.root_production_plans[0].list_product.nomenclature.code, " ~", invoice_r18.root_production_plans[0].list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_22_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 37)(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_22_ng_template_6_b_6_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_22_ng_template_6_td_7_Template, 3, 4, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, QcListComponent_ng_container_22_ng_template_6_div_18_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, QcListComponent_ng_container_22_ng_template_6_ng_container_19_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r18 = ctx.$implicit;
    const i_r19 = ctx.rowIndex;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", invoice_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r19 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 12, (invoice_r18.order == null ? null : invoice_r18.order.qc_started_date) ? invoice_r18.order == null ? null : invoice_r18.order.qc_started_date : invoice_r18.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r18.rma_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r18.self_serial_number, " ", invoice_r18.self_proforma_serial_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r18.supplier == null ? null : invoice_r18.supplier.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r18.order == null ? null : invoice_r18.order.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](16, 15, invoice_r18.items_reception_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", invoice_r18 == null ? null : invoice_r18.order == null ? null : invoice_r18.order.uniqueToolRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r18.root_production_plans.length > 0);
} }
function QcListComponent_ng_container_22_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 42);
} }
function QcListComponent_ng_container_22_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_22_ng_template_7_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_22_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r10.isLoadingInvoices);
} }
function QcListComponent_ng_container_22_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r6.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r6.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16)(2, "p-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_22_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.selectedInvoiceItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_22_ng_template_4_Template, 5, 7, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_22_ng_template_5_Template, 16, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_22_ng_template_6_Template, 20, 18, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_22_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QcListComponent_ng_container_22_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, QcListComponent_ng_container_22_div_9_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r0.invoicesList.length > 0)("rows", 10)("selection", ctx_r0.selectedInvoiceItem)("value", ctx_r0.invoicesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r6.paginator && !ctx_r0.isLoadingInvoices && ctx_r0.invoicesList.length > 0);
} }
function QcListComponent_ng_container_23_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " QC Started Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_4_th_3_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r39.showClosedInvoices);
} }
function QcListComponent_ng_container_23_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Choose the Production Lists Procurement or Outsourcing Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_23_ng_template_5_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r45.expandCollapseAllInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r47.expandCollapseAllInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r48.onSelectInvoiceType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.onSelectInvoiceType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r40.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r40.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, (ctx_r40.selectedInvoiceNode == null ? null : ctx_r40.selectedInvoiceNode.data.order) ? ctx_r40.selectedInvoiceNode == null ? null : ctx_r40.selectedInvoiceNode.data.order.id : ctx_r40.selectedInvoiceNode == null ? null : ctx_r40.selectedInvoiceNode.data.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r40.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r40.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r40.invoicesViewType === "hierarchy");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", invoice_r51.description, ")");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", invoice_r51.categories, ")");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_i_4_Template, 2, 1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("category-name", invoice_r51.level === 0 && invoice_r51.hideFromTable !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r51.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level < 4 && invoice_r51.level > 0);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_b_3_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 2, (invoice_r51.order == null ? null : invoice_r51.order.order == null ? null : invoice_r51.order.order.qc_started_date) ? invoice_r51.order == null ? null : invoice_r51.order.order == null ? null : invoice_r51.order.order.qc_started_date : invoice_r51.order.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.order.rma_products_count);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r51.order == null ? null : invoice_r51.order.order == null ? null : invoice_r51.order.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r51.self_serial_number, " ", invoice_r51.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-warning", invoice_r51.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r51.order.self_serial_number, " ", invoice_r51.order.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r51.order == null ? null : invoice_r51.order.order == null ? null : invoice_r51.order.order.id, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r51.supplier == null ? null : invoice_r51.supplier.name, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r51.order.supplier == null ? null : invoice_r51.order.supplier.name, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r51.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r51.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_1_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r85 = ctx.$implicit;
    const last_r87 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r85 == null ? null : request_r85.toolRequest == null ? null : request_r85.toolRequest.tool_order == null ? null : request_r85.toolRequest.tool_order.area_locator == null ? null : request_r85.toolRequest.tool_order.area_locator.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r87);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", root_list_r89.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_1_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_2_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", invoice_r51 == null ? null : invoice_r51.order == null ? null : invoice_r51.order.order == null ? null : invoice_r51.order.order.uniqueToolRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", invoice_r51.unique_root_production_plans);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r51.plan.list_product.nomenclature.code, "~", invoice_r51.plan.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", invoice_r51.plan.required_quantity, ")");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 53)(1, "td", 36)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-treeTableToggler", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_Template, 5, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_Template, 4, 5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_8_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, QcListComponent_ng_container_23_ng_template_6_tr_0_span_9_Template, 2, 4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, QcListComponent_ng_container_23_ng_template_6_tr_0_span_11_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_13_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, QcListComponent_ng_container_23_ng_template_6_tr_0_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_16_Template, 3, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, QcListComponent_ng_container_23_ng_template_6_tr_0_span_17_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, QcListComponent_ng_container_23_ng_template_6_tr_0_span_20_Template, 4, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const invoiceNode_r50 = ctx_r92.$implicit;
    const invoice_r51 = ctx_r92.rowData;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ttRow", invoiceNode_r50)("ttSelectableRowDisabled", !invoice_r51.order && !invoice_r51.level || invoice_r51.level < 4)("ttSelectableRow", invoiceNode_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-center", invoice_r51.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNode", invoiceNode_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !invoice_r51.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r53.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r51.level === 4 && invoice_r51.plan);
} }
function QcListComponent_ng_container_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, QcListComponent_ng_container_23_ng_template_6_tr_0_Template, 21, 18, "tr", 52);
} if (rf & 2) {
    const invoice_r51 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !invoice_r51.hideFromTable);
} }
function QcListComponent_ng_container_23_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 42);
} }
function QcListComponent_ng_container_23_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_23_ng_template_7_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r42.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r42.isLoadingInvoices);
} }
function QcListComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16)(2, "p-treeTable", 45, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_23_Template_p_treeTable_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r95.selectedInvoiceNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_23_ng_template_4_Template, 14, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_23_ng_template_5_Template, 7, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_23_ng_template_6_Template, 1, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_23_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.invoiceManufacturedTree)("selection", ctx_r1.selectedInvoiceNode)("scrollable", true);
} }
function QcListComponent_ng_container_25_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0421hoose the Own Production Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a2) { return ["../", "order", a2]; };
function QcListComponent_ng_container_25_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_25_ng_template_4_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r105.onSelectOrderType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r107.onSelectOrderType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r98.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r98.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, ctx_r98.selectedOrderItem == null ? null : ctx_r98.selectedOrderItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r98.invoicesOrderType === "list");
} }
function QcListComponent_ng_container_25_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " QC Started Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_25_ng_template_5_th_5_Template, 2, 0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r99.showClosedOrders);
} }
function QcListComponent_ng_container_25_ng_template_6_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_ng_template_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_plan_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", root_plan_r113.list_product.nomenclature.code, "~", root_plan_r113.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_25_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 37)(1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_25_ng_template_6_b_6_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, QcListComponent_ng_container_25_ng_template_6_div_13_Template, 2, 2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r109 = ctx.$implicit;
    const i_r110 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", order_r109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r110 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 7, (order_r109 == null ? null : order_r109.qc_started_date) ? order_r109 == null ? null : order_r109.qc_started_date : order_r109 == null ? null : order_r109.created, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", order_r109.contains_rma_invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r109.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 10, order_r109.items_reception_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", order_r109.unique_root_production_plans);
} }
function QcListComponent_ng_container_25_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 42);
} }
function QcListComponent_ng_container_25_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_25_ng_template_7_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_25_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r101.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r101.isLoadingOrders);
} }
function QcListComponent_ng_container_25_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r97.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r119); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r97.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16)(2, "p-table", 17, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_25_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r120.selectedOrderItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_25_ng_template_4_Template, 5, 7, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_25_ng_template_5_Template, 12, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_25_ng_template_6_Template, 14, 13, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_25_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QcListComponent_ng_container_25_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, QcListComponent_ng_container_25_div_9_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r2.ordersList.length > 0)("rows", 10)("selection", ctx_r2.selectedOrderItem)("value", ctx_r2.ordersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r97.paginator && !ctx_r2.isLoadingOrders && ctx_r2.ordersList.length > 0);
} }
function QcListComponent_ng_container_26_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "QC Closed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_26_ng_template_4_th_3_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r123.showClosedOrders);
} }
function QcListComponent_ng_container_26_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Choose Own Production Item to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_26_ng_template_5_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r129.expandCollapseAllOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r130); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r131.expandCollapseAllOrders(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r130); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r132.onSelectOrderType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r130); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r133.onSelectOrderType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r124.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r124.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r124.selectedOrderNode == null ? null : ctx_r124.selectedOrderNode.data.order.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r124.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r124.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r124.invoicesOrderType === "hierarchy");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", rowData_r135.categories, ")");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_b_3_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 2, rowData_r135.order.qc_started_date ? rowData_r135.order.qc_started_date : rowData_r135.order.created, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.order.contains_rma_invoices);
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, rowData_r135.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.order);
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-warning", rowData_r135.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r135.order.id, " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, rowData_r135.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", rowData_r135.plan.list_product.nomenclature.code, "~", rowData_r135.plan.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 67)(1, "td", 36)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-treeTableToggler", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_26_ng_template_6_tr_0_i_6_Template, 2, 1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_Template, 4, 5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_Template, 2, 1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, QcListComponent_ng_container_26_ng_template_6_tr_0_span_10_Template, 2, 3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, QcListComponent_ng_container_26_ng_template_6_tr_0_span_12_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, QcListComponent_ng_container_26_ng_template_6_tr_0_span_14_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rowNode_r134 = ctx_r152.$implicit;
    const rowData_r135 = ctx_r152.rowData;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ttRow", rowNode_r134)("ttSelectableRow", rowNode_r134)("ttSelectableRowDisabled", rowData_r135.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNode", rowNode_r134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("category-name", rowData_r135.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r135.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r136.showClosedOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r135.order && rowData_r135.plan);
} }
function QcListComponent_ng_container_26_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, QcListComponent_ng_container_26_ng_template_6_tr_0_Template, 15, 13, "tr", 66);
} if (rf & 2) {
    const rowData_r135 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rowData_r135.hideFromTable);
} }
function QcListComponent_ng_container_26_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 42);
} }
function QcListComponent_ng_container_26_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_26_ng_template_7_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_26_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r126.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r126.isLoadingOrders);
} }
function QcListComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16)(2, "p-treeTable", 45, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_26_Template_p_treeTable_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r155.selectedOrderNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_26_ng_template_4_Template, 10, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_26_ng_template_5_Template, 7, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_26_ng_template_6_Template, 1, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_26_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.ownProductionCategorizedList)("selection", ctx_r3.selectedOrderNode)("scrollable", true);
} }
function QcListComponent_ng_container_28_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Choose the General Procurement Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_28_ng_template_4_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r165.onSelectPurchaseType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r166); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r167.onSelectPurchaseType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r158.selectedInvoicePurchaseItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r158.selectedInvoicePurchaseItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r158.selectedInvoicePurchaseItem == null ? null : ctx_r158.selectedInvoicePurchaseItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r158.invoicesPurchasedType === "list");
} }
function QcListComponent_ng_container_28_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "QC Closed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_28_ng_template_5_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r159.showClosedInvoices);
} }
function QcListComponent_ng_container_28_ng_template_6_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r169.order == null ? null : invoice_r169.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_28_ng_template_6_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r169.root_production_plans[0].list_product.nomenclature.code, " ~", invoice_r169.root_production_plans[0].list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_28_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 37)(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_28_ng_template_6_b_6_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_28_ng_template_6_td_7_Template, 3, 4, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, QcListComponent_ng_container_28_ng_template_6_ng_container_18_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r169 = ctx.$implicit;
    const i_r170 = ctx.rowIndex;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", invoice_r169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r170 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 11, (invoice_r169.order == null ? null : invoice_r169.order.qc_started_date) ? invoice_r169.order == null ? null : invoice_r169.order.qc_wh_started_date : invoice_r169.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r169.rma_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r160.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r169.self_serial_number, " ", invoice_r169.self_proforma_serial_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r169.supplier == null ? null : invoice_r169.supplier.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r169.order == null ? null : invoice_r169.order.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](16, 14, invoice_r169.items_reception_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r169.root_production_plans.length > 0);
} }
function QcListComponent_ng_container_28_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 42);
} }
function QcListComponent_ng_container_28_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_28_ng_template_7_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_28_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r161.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r161.isLoadingInvoices);
} }
function QcListComponent_ng_container_28_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r157.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r181); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r157.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16)(2, "p-table", 17, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_28_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r183); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r182.selectedInvoicePurchaseItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_28_ng_template_4_Template, 5, 7, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_28_ng_template_5_Template, 16, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_28_ng_template_6_Template, 19, 17, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_28_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QcListComponent_ng_container_28_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, QcListComponent_ng_container_28_div_9_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r4.purchasedInvoicesList.length > 0)("rows", 10)("selection", ctx_r4.selectedInvoicePurchaseItem)("value", ctx_r4.purchasedInvoicesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r157.paginator && !ctx_r4.isLoadingInvoices && ctx_r4.purchasedInvoicesList.length > 0);
} }
function QcListComponent_ng_container_29_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_29_ng_template_4_th_3_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r185.showClosedInvoices);
} }
function QcListComponent_ng_container_29_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Choose the General Procurement Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_29_ng_template_5_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r192); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r191.expandCollapsePurchasedInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r192); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r193.expandCollapsePurchasedInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r192); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r194.onSelectPurchaseType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r192); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r195.onSelectPurchaseType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r186.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", !ctx_r186.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, (ctx_r186.selectedPurchasedInvoiceNode == null ? null : ctx_r186.selectedPurchasedInvoiceNode.data.invoice) ? ctx_r186.selectedPurchasedInvoiceNode == null ? null : ctx_r186.selectedPurchasedInvoiceNode.data.invoice.id : ctx_r186.selectedPurchasedInvoiceNode == null ? null : ctx_r186.selectedPurchasedInvoiceNode.data.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r186.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r186.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r186.invoicesPurchasedType === "hierarchy");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", invoice_r197.description, ")");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", invoice_r197.categories, ")");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_29_ng_template_6_ng_container_4_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_6_ng_container_4_i_4_Template, 2, 1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("category-name", !invoice_r197.level && invoice_r197.level !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", invoice_r197.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.level < 4 && invoice_r197.level > 0);
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_5_b_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_6_ng_container_5_b_4_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 2, invoice_r197.order.qc_started_date ? invoice_r197.order.qc_started_date : invoice_r197.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order.rma_products_count);
} }
function QcListComponent_ng_container_29_ng_template_6_td_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r197.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_29_ng_template_6_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_29_ng_template_6_td_6_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r197.self_serial_number, " ", invoice_r197.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-warning", invoice_r197.invoice.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r197.invoice.self_serial_number, " ", invoice_r197.invoice.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r197.order.id, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r197.supplier == null ? null : invoice_r197.supplier.name, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r197.invoice.supplier == null ? null : invoice_r197.invoice.supplier.name, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r197.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_29_ng_template_6_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, invoice_r197.invoice.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r229 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", root_list_r229.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QcListComponent_ng_container_29_ng_template_6_ng_container_19_div_1_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", invoice_r197.unique_root_production_plans);
} }
function QcListComponent_ng_container_29_ng_template_6_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", invoice_r197.plan.list_product.nomenclature.code, "~", invoice_r197.plan.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", invoice_r197.plan.required_quantity, ")");
} }
function QcListComponent_ng_container_29_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 53)(1, "td", 36)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-treeTableToggler", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_6_ng_container_4_Template, 5, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_29_ng_template_6_ng_container_5_Template, 5, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_29_ng_template_6_td_6_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, QcListComponent_ng_container_29_ng_template_6_ng_container_8_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, QcListComponent_ng_container_29_ng_template_6_span_9_Template, 2, 4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, QcListComponent_ng_container_29_ng_template_6_ng_container_11_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, QcListComponent_ng_container_29_ng_template_6_ng_container_13_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, QcListComponent_ng_container_29_ng_template_6_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, QcListComponent_ng_container_29_ng_template_6_ng_container_16_Template, 3, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, QcListComponent_ng_container_29_ng_template_6_span_17_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, QcListComponent_ng_container_29_ng_template_6_ng_container_19_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, QcListComponent_ng_container_29_ng_template_6_span_20_Template, 4, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoiceNode_r196 = ctx.$implicit;
    const invoice_r197 = ctx.rowData;
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ttRow", invoiceNode_r196)("ttSelectableRowDisabled", !invoice_r197.order && !invoice_r197.level || invoice_r197.level < 4)("ttSelectableRow", invoiceNode_r196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-center", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNode", invoiceNode_r196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r187.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r197.level === 4 && invoice_r197.plan);
} }
function QcListComponent_ng_container_29_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 42);
} }
function QcListComponent_ng_container_29_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QcListComponent_ng_container_29_ng_template_7_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QcListComponent_ng_container_29_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r188.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r188.isLoadingInvoices);
} }
function QcListComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16)(2, "p-treeTable", 45, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_29_Template_p_treeTable_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r235); const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r234.selectedPurchasedInvoiceNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_4_Template, 14, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, QcListComponent_ng_container_29_ng_template_5_Template, 7, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, QcListComponent_ng_container_29_ng_template_6_Template, 21, 18, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, QcListComponent_ng_container_29_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r5.invoicePurchasedTree)("selection", ctx_r5.selectedPurchasedInvoiceNode)("scrollable", true);
} }
class QcListComponent {
    constructor(invoiceService, orderService, productStructureCategoryService, adapterService, fb) {
        this.invoiceService = invoiceService;
        this.orderService = orderService;
        this.productStructureCategoryService = productStructureCategoryService;
        this.adapterService = adapterService;
        this.fb = fb;
        this.invoicesViewType = 'hierarchy';
        this.invoicesOrderType = 'hierarchy';
        this.invoicesPurchasedType = 'hierarchy';
        this.isLoadingInvoices = true;
        this.isLoadingOrders = true;
        this.showClosedInvoices = false;
        this.showClosedOrders = false;
        this.invoicesList = [];
        this.ordersList = [];
        this.purchasedInvoicesList = [];
        this.expanseMap = {};
        this.destroyInvoices$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.destroyOrders$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.invoicesQuery = [
            { name: 'needs_qc', value: true },
            { name: 'by_qc_module_permission', value: true }
        ];
        this.ordersQuery = [
            { name: 'needs_qc', value: true },
            { name: 'by_qc_module_permission', value: true }
        ];
        this.searchForm = this.fb.group({
            supplier: [null],
            qc_closed_date_after: [null],
            qc_closed_date_before: [null],
            accounting_type: [null],
            material_or_service: [null],
            purchase_categories: [null],
            status: [null]
        });
    }
    ngOnInit() {
        this.getCategories();
        this.getInvoices();
        this.getServices();
    }
    searchItems() {
        this.searchInvoices();
        this.searchServices();
    }
    searchInvoices() {
        this.isLoadingInvoices = true;
        this.destroyInvoices$.next(true);
        this.invoiceManufacturedTree = [];
        this.invoicePurchasedTree = [];
        this.invoicesList = [];
        this.purchasedInvoicesList = [];
        this.invoices = [];
        this.selectedInvoice = null;
        this.invoicesQuery = [
            { name: 'by_qc_module_permission', value: true }
        ];
        if (!this.searchForm.get('qc_closed_date_after').value
            && !this.searchForm.get('qc_closed_date_before').value) {
            this.invoicesQuery.push({
                name: 'needs_qc', value: true
            });
            this.showClosedInvoices = false;
        }
        else {
            this.showClosedInvoices = true;
        }
        if (this.searchForm.get('qc_closed_date_after').value) {
            this.invoicesQuery.push({
                name: 'qc_closed_date_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_after').value)
            });
        }
        if (this.searchForm.get('qc_closed_date_before').value) {
            this.invoicesQuery.push({
                name: 'qc_closed_date_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_before').value)
            });
        }
        this.getInvoices();
    }
    searchServices() {
        this.isLoadingOrders = true;
        this.destroyOrders$.next(true);
        this.orders = [];
        this.ordersList = [];
        this.ownProductionCategorizedList = [];
        this.selectedOrderItem = null;
        this.ordersQuery = [
            { name: 'by_qc_module_permission', value: true }
        ];
        if (!this.searchForm.get('qc_closed_date_after').value
            && !this.searchForm.get('qc_closed_date_before').value) {
            this.ordersQuery.push({
                name: 'needs_qc', value: true
            });
            this.showClosedOrders = false;
        }
        else {
            this.showClosedOrders = true;
        }
        if (this.searchForm.get('qc_closed_date_after').value) {
            this.ordersQuery.push({
                name: 'qc_closed_date_after',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_after').value)
            });
        }
        if (this.searchForm.get('qc_closed_date_before').value) {
            this.ordersQuery.push({
                name: 'qc_closed_date_before',
                value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_before').value)
            });
        }
        this.getServices();
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
    getCategories() {
        this.productStructureCategoryService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyInvoices$)).subscribe((categories) => {
            if (this.categories) {
                this.mapExpansion();
            }
            this.createTree(categories);
        });
    }
    getInvoices() {
        this.invoiceService.get(this.invoicesQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyInvoices$)).subscribe(invoices => {
            invoices.forEach(invoice => {
                invoice.order = new _procurement_models_order__WEBPACK_IMPORTED_MODULE_0__.Order(invoice.order);
                invoice.order.generateUniqueToolRequests();
            });
            this.invoices = invoices;
            this.makeUniqueProductionPlansInvoice();
            this.resetProductPaymentTree();
            this.resetInvoicesList();
            this.isLoadingInvoices = false;
        });
    }
    getServices() {
        this.orderService.get(this.ordersQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyOrders$)).subscribe(orders => {
            this.orders = orders;
            this.makeUniqueProductionPlans();
            this.fillOwnProductionWithData();
            this.resetOrdersList();
            this.isLoadingOrders = false;
        });
    }
    resetInvoicesList() {
        this.purchasedInvoicesList = this.invoices.filter(i => i.purchase_category);
        this.invoicesList = this.invoices.filter(i => !i.purchase_category);
        this.invoicesList.sort((a, b) => b.rma_products_count - a.rma_products_count || new Date(b.qc_started_date).getTime() - new Date(a.qc_started_date).getTime());
        this.purchasedInvoicesList.sort((a, b) => b.rma_products_count - a.rma_products_count || new Date(b.qc_started_date).getTime() - new Date(a.qc_started_date).getTime());
    }
    resetOrdersList() {
        this.ordersList = this.orders;
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
                node.children = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.categories);
                this.prepareInnerTreeCategories(manProc, node);
            }
            // Preparing Outsourcing
            if (node.data.id === -1) {
                const outsourcing = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order?.accounting_type === 2);
                node.children = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.categories);
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
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(nodeInner.children);
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
        console.log(this.invoiceManufacturedTree);
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
        this.ownProductionCategorizedList = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.categories);
    }
    fillOwnProductionWithData() {
        this.fillCategorizedTree();
    }
    fillCategorizedTree() {
        this.ownProductionCategorizedList = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.categories);
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
            const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.ownProductionCategorizedList);
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
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.invoiceManufacturedTree);
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
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.invoicePurchasedTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.invoicePurchasedTree = temp;
    }
    expandCollapseAllOrders(isToExpand = true) {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.ownProductionCategorizedList);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, isToExpand);
        });
        this.ownProductionCategorizedList = temp;
    }
    onSelectInvoiceType(view) {
        this.invoicesViewType = view;
    }
    onSelectOrderType(view) {
        this.invoicesOrderType = view;
    }
    onSelectPurchaseType(view) {
        this.invoicesPurchasedType = view;
    }
}
QcListComponent.ɵfac = function QcListComponent_Factory(t) { return new (t || QcListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_2__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_4__.ProductStructureCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_5__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
QcListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: QcListComponent, selectors: [["pek-qc-list"]], decls: 30, vars: 17, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "qc_closed_date_after", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], ["formControlName", "qc_closed_date_before", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], [1, "custom-tabs"], [3, "header", "selected"], [4, "ngIf"], [3, "header"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", "target", "_blank", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", 3, "click"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], ["style", "width: 20%", "class", "text-center", 4, "ngIf"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "15%"], [2, "width", "20%"], [3, "pSelectableRow"], ["class", "word-break", 4, "ngFor", "ngForOf"], [1, "word-break"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 22rem)", 3, "value", "selection", "scrollable", "selectionChange"], [2, "width", "20%", "padding-left", "19px"], ["target", "_blank", "pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "Expand All", "icon", "pi pi-angle-down", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Collapse All", "icon", "pi pi-angle-up", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", 3, "disabled", "click"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow", 4, "ngIf"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow"], [1, "table-toggle"], [3, "rowNode"], [3, "text-warning", 4, "ngIf"], ["style", "font-style: normal", 4, "ngIf"], [2, "font-style", "normal"], [4, "ngFor", "ngForOf"], ["ot", ""], [1, "text-center", 2, "width", "25%"], ["style", "width: 25%", "class", "text-center", 4, "ngIf"], [1, "text-center"], ["style", "width: 20%;", "class", "text-center", 4, "ngIf"], [1, "text-center", 2, "width", "45%"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled", 4, "ngIf"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"], ["pt", ""]], template: function QcListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "QC Closed Date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function QcListComponent_Template_p_calendar_ngModelChange_14_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "QC Closed Date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p-calendar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function QcListComponent_Template_p_calendar_ngModelChange_19_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p-tabView", 12)(21, "p-tabPanel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, QcListComponent_ng_container_22_Template, 10, 6, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, QcListComponent_ng_container_23_Template, 8, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p-tabPanel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, QcListComponent_ng_container_25_Template, 10, 6, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, QcListComponent_ng_container_26_Template, 8, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "p-tabPanel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, QcListComponent_ng_container_28_Template, 10, 6, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, QcListComponent_ng_container_29_Template, 8, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("module", "quality-control")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "Production Lists Procurement and Outsourcing Invoices")("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoicesViewType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoicesViewType === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "Own Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "General Procurement Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoicesPurchasedType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoicesPurchasedType === "hierarchy");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_treetable__WEBPACK_IMPORTED_MODULE_14__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_14__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_14__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_14__.TTSelectableRow, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_6__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabPanel, primeng_calendar__WEBPACK_IMPORTED_MODULE_18__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoicWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG59XHJcblxyXG4iXX0= */"] });


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var deep_copy_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-copy-ts */ 47307);
/* harmony import */ var _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/models/invoice-product */ 16195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _shared_services_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/album.service */ 96667);
/* harmony import */ var _qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../qr-code/qr-code.service */ 32527);
/* harmony import */ var _services_qc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/qc.service */ 7630);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../qr-code/components/qr-code-scanner/qr-code-scanner.component */ 81984);




















function QcOrderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}

function QcOrderComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_21_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Choose the Product to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, QcOrderComponent_ng_template_21_p_1_Template, 2, 0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_21_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.onReworkProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.onShowImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_21_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.onQualityControl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.selectedOrderProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx_r3.isReworkingProduct)("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedOrderProducts.length === 0 || ctx_r3.selectedOrderProducts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedOrderProducts.length === 0 || ctx_r3.selectedOrderProducts.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedOrderProducts.length === 0 || ctx_r3.selectedOrderProducts.length > 1);
  }
}

function QcOrderComponent_ng_template_22_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_22_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_22_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 41)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "p-tableCheckbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, QcOrderComponent_ng_template_22_span_20_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, QcOrderComponent_ng_template_22_span_21_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, QcOrderComponent_ng_template_22_span_22_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r23 = ctx.$implicit;
    const i_r24 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pSelectableRow", product_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", product_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.current_technology == null ? null : product_r23.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.nomenclature.category ? product_r23.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.totalQuantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.totalQuantityPassed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r23.totalQuantityNotPassed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r23.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r23.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r23.quality_control == 0);
  }
}

function QcOrderComponent_ng_template_23_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 52);
  }
}

function QcOrderComponent_ng_template_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, QcOrderComponent_ng_template_23_i_2_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, QcOrderComponent_ng_template_23_span_3_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.isLoadingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r5.isLoadingProducts);
  }
}

function QcOrderComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_24_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r1.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 54)(1, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_div_25_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r1.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Not Passed Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_33_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Choose the Technical Equipment to Quality Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, QcOrderComponent_ng_template_33_p_1_Template, 2, 0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_33_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r35.onQualityControlTechnicalEquipment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r10.selectedTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r10.isLoadingTechnicalEquipment || !ctx_r10.selectedTechnicalEquipment);
  }
}

function QcOrderComponent_ng_template_34_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_34_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_34_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 41)(1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, QcOrderComponent_ng_template_34_span_16_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, QcOrderComponent_ng_template_34_span_17_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, QcOrderComponent_ng_template_34_span_18_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r37 = ctx.$implicit;
    const i_r38 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pSelectableRow", product_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r37.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r37.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r37.nomenclature.category ? product_r37.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r37.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r37.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r37.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r37.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r37.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r37.quality_control == 0);
  }
}

function QcOrderComponent_ng_template_35_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 52);
  }
}

function QcOrderComponent_ng_template_35_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, QcOrderComponent_ng_template_35_i_2_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, QcOrderComponent_ng_template_35_span_3_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("colspan", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r12.isLoadingTechnicalEquipment);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r12.isLoadingTechnicalEquipment);
  }
}

function QcOrderComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_36_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](31);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.paginator = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function QcOrderComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 54)(1, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_div_37_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r47);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](31);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.paginator = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function QcOrderComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_ng_template_38_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r48.goToOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r16.order.id);
  }
}

function QcOrderComponent_pek_qr_code_scanner_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "pek-qr-code-scanner", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("scanned", function QcOrderComponent_pek_qr_code_scanner_40_Template_pek_qr_code_scanner_scanned_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.onScanned($event));
    })("cancel", function QcOrderComponent_pek_qr_code_scanner_40_Template_pek_qr_code_scanner_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.onCancelScanned());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
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
    this.isScanning = false;
  }

  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(id => this.orderId = +id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.getOrder()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.getOrderProducts())).subscribe();
  }

  getOrder() {
    this.orderService.getById(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(order => this.order = order), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.getTechnicalEquipmentToQc()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isLoading = false)).subscribe();
  }

  getTechnicalEquipmentToQc() {
    this.technicalEquipments = [];
    this.isLoadingTechnicalEquipment = true;
    this.orderProductService.getTechnicalEquipmentToQC(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(equipment => this.technicalEquipments = equipment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isLoadingTechnicalEquipment = false)).subscribe();
  }

  getOrderProducts() {
    this.orderProducts = [];
    this.selectedOrderProducts = [];
    this.isLoadingProducts = true;
    this.orderProductService.getQc(this.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(products => {
      products.forEach(product => {
        const technologyId = product.current_technology?.id;
        const nomenclatureId = product.nomenclature.id;
        const existing = this.orderProducts.find(el => el.nomenclature.id === nomenclatureId && el.current_technology?.id === technologyId);

        if (existing) {
          existing.totalQuantity = existing.totalQuantity += product.quantity;
          existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity;
          existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += product.not_passed_quantity;
          existing.totalSerialNumbers.push(...product.serial_numbers);
          existing.orderProducts.push(product);
        } else {
          product.orderProducts = [(0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_1__.deepCopy)(product)];
          product.totalQuantity = product.quantity;
          product.totalQuantityPassed = product.passed_quantity;
          product.totalQuantityNotPassed = product.not_passed_quantity;
          product.totalSerialNumbers = [...product.serial_numbers];
          this.orderProducts.push(product);
        }
      });
      this.orderProducts.forEach(product => {
        if (product.totalQuantityPassed === product.totalQuantity) {
          product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_2__.EInvoiceProductQualityControl.PASSED;
        } else if (product.totalQuantityNotPassed === product.totalQuantity) {
          product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_2__.EInvoiceProductQualityControl.NOT_PASSED;
        } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
          product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_2__.EInvoiceProductQualityControl.PARTLY_PASSED;
        }
      });
      this.orderProducts = [...this.orderProducts];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(products => this.orderCanBeCompleted = Boolean(products.find(p => p.quality_control))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isLoadingProducts = false)).subscribe();
  }

  onPrintAlbum() {
    const nomenclatures = [];

    if (this.selectedOrderProducts.length > 0) {
      nomenclatures.push(...this.selectedOrderProducts.map(p => p?.nomenclature));
    }

    if (this.selectedTechnicalEquipment) {
      nomenclatures.push(this.selectedTechnicalEquipment.nomenclature);
    }

    this.albumService.getNomenclaturesImages(nomenclatures);
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
        link = `/manufacturing/orders/order/` + order.id;
        break;
    }

    window.open(link, '_blank');
  }

  onCompleteItems() {
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(confirm => confirm)).subscribe(() => {
      const send = [];
      const sendProducts = [];
      this.selectedOrderProducts.forEach(product => {
        const products = product.orderProducts.filter(p => !p.nomenclature.qc_protocol && p.nomenclature.bulk_or_serial === '0');
        sendProducts.push(...products);
      });
      sendProducts.forEach(product => {
        send.push({
          id: product.id,
          not_passed_quantity: 0,
          passed_quantity: product.quantity,
          quality_control: 1
        });
      });
      this.isCompletingProducts = true;
      this.orderProductService.severalUpdatePartly(send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.getOrderProducts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isCompletingProducts = false)).subscribe();
    });
  }

  onComplete() {
    this.modalService.confirm('success').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(confirm => confirm)).subscribe(() => {
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
    this.selectedOrderProducts.forEach(product => {
      product.orderProducts.forEach(p => {
        if (p.nomenclature.bulk_or_serial === '1') {
          send.by_nomenclatures_list.push({
            nomenclature_id: p.nomenclature.id,
            serial_number_ids: p.nomenclature.bulk_or_serial === '1' ? p.serial_numbers.map(s => +s.id) : [],
            order_product_ids: [p.id],
            invoice_product_ids: []
          });
        } else {
          const exists = send.by_nomenclatures_list.findIndex(el => el.nomenclature_id === p.nomenclature.id) >= 0;

          if (!exists) {
            send.by_nomenclatures_list.push({
              nomenclature_id: p.nomenclature.id,
              serial_number_ids: [],
              order_product_ids: [p.id],
              invoice_product_ids: []
            });
          }
        }
      });
    });

    if (this.selectedTechnicalEquipment) {
      const exists = send.by_nomenclatures_list.findIndex(el => el.nomenclature_id === this.selectedTechnicalEquipment.nomenclature.id) >= 0;

      if (!exists) {
        send.by_nomenclatures_list.push({
          nomenclature_id: this.selectedTechnicalEquipment.nomenclature.id,
          serial_number_ids: [],
          order_product_ids: [],
          invoice_product_ids: []
        });
      }
    }

    this.qrCodeService.generateQrCodes(send, this.order.id).subscribe(() => this.isGenerating = false);
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedOrderProducts[0].nomenclature.id, 1).subscribe();
  }

  onQualityControl() {
    if (this.selectedOrderProducts[0].nomenclature.qc_protocol && this.selectedOrderProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedOrderProducts[0].passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityPassed;
      if (this.selectedOrderProducts[0].not_passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityNotPassed;
      this.qcService.withProtocolControlProduct(this.selectedOrderProducts[0], currentCount, this.selectedOrderProducts[0].totalQuantity, 'order', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedOrderProducts = [];
          this.getOrderProducts();
        }
      });
    } else if (!this.selectedOrderProducts[0].nomenclature.qc_protocol && this.selectedOrderProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;
      if (this.selectedOrderProducts[0].passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityPassed;
      if (this.selectedOrderProducts[0].not_passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityNotPassed;
      this.qcService.serializedControlProduct(this.selectedOrderProducts[0], currentCount, this.selectedOrderProducts[0].totalQuantity, 'order', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedOrderProducts = [];
          this.getOrderProducts();
        }
      });
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
    this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(confirm => confirm)).subscribe(() => {
      this.isReworking = true;
      const ids = [];
      this.orderProducts.forEach(p => {
        ids.push(...p.orderProducts.map(order => order.id));
      });
      this.orderProductService.reworkOrder(ids).subscribe(() => {
        this.isReworking = false;
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
      });
    });
  }

  onReworkProduct() {
    this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(confirm => confirm)).subscribe(() => {
      this.isReworkingProduct = true;
      const ids = [];
      const productsIds = [];
      const calls = [];
      this.selectedOrderProducts.forEach(p => {
        productsIds.push(p.id);
        ids.push(...p.orderProducts.map(order => order.id));
      });
      ids.forEach(id => {
        calls.push(this.orderProductService.reworkOrderProduct(id));
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([...calls]).subscribe(() => {
        productsIds.forEach(id => {
          const index = this.orderProducts.findIndex(o => o.id === id);
          this.orderProducts.splice(index, 1);
        });

        if (this.orderProducts.length === 0) {
          this.router.navigate(['../../'], {
            relativeTo: this.route
          });
          return;
        }

        this.selectedOrderProducts = [];
        this.isReworkingProduct = false;
      }); // this.orderProductService.reworkOrderProduct(this.selectedOrderProducts[0].id).subscribe(() => {
      //   const index = this.orderProducts.findIndex(o => o.id === this.selectedOrderProducts[0].id);
      //   this.orderProducts.splice(index, 1);
      //   if (this.orderProducts.length === 0) {
      //     this.router.navigate(['../../'], {relativeTo: this.route});
      //     return;
      //   }
      //   this.selectedOrderProducts = [];
      //   this.isReworkingProduct = false;
      // });
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

  onStartScanning() {
    this.isScanning = true;
    this.scanningEnd = false;
  }

  onScanned(data) {
    this.scanningEnd = true;
    this.isScanning = false;
    this.scanForListProduct(data);
  }

  scanForListProduct(data = null) {
    this.orderService.scanOrderProductInQc(data, this.orderId).subscribe(res => {
      const foundOrderProduct = this.orderProducts.find(orderProduct => orderProduct.orderProducts.findIndex(prod => prod.id === res.found_id) > -1);

      if (foundOrderProduct) {
        this.qcService.foundProductInList(foundOrderProduct.nomenclature).subscribe(res => {
          if (res) {
            if (data.serial_number) {
              this.foundSerialId = data.serial_number;
            }

            this.selectedOrderProducts = [foundOrderProduct];
            this.onQualityControl();
          }
        });
      }
    });
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanning = false;
  }

}

QcOrderComponent.ɵfac = function QcOrderComponent_Factory(t) {
  return new (t || QcOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_4__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_album_service__WEBPACK_IMPORTED_MODULE_6__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_7__.QrCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_qc_service__WEBPACK_IMPORTED_MODULE_8__.QcService));
};

QcOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: QcOrderComponent,
  selectors: [["pek-qc-order"]],
  decls: 41,
  vars: 29,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print Album", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-camera", "label", "Scan QR Codes", 1, "mr-2", "p-button-icon", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-qrcode", "label", "Generate QR Codes", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete Products", 1, "p-button-icon", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-refresh", "label", "Rework All", 1, "p-button-icon", "p-button-danger", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "p-button-success", 3, "loading", "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["scrollHeight", "calc(100vh - 17rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-4", "mb-4"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 17rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["st", ""], ["orderLink", ""], [3, "scanned", "cancel", 4, "ngIf"], [2, "width", "3%"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "17%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-refresh", "label", "Rework Item", 1, "p-button-icon", "p-button-danger", "ml-auto", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "p-button-icon", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "p-button-icon", 3, "disabled", "click"], [1, "subtitle"], [3, "pSelectableRow"], [3, "value"], ["class", "badge badge_success", 4, "ngIf"], ["class", "badge badge_warning", 4, "ngIf"], ["class", "badge badge_danger", 4, "ngIf"], [1, "badge", "badge_success"], [1, "badge", "badge_warning"], [1, "badge", "badge_danger"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "index-header", "text-center", 2, "width", "8%"], [2, "width", "32%"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "ml-auto", "p-button-icon", 3, "disabled", "click"], [1, "text-center", 2, "width", "8%"], [1, "order-link", 3, "click"], [3, "scanned", "cancel"]],
  template: function QcOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Order ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, QcOrderComponent_ng_container_6_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_8_listener() {
        return ctx.onPrintAlbum();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_10_listener() {
        return ctx.onStartScanning();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_11_listener() {
        return ctx.onGenerateQrCodes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_12_listener() {
        return ctx.onCompleteItems();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_13_listener() {
        return ctx.onRework();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QcOrderComponent_Template_button_click_14_listener() {
        return ctx.onComplete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "p-table", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function QcOrderComponent_Template_p_table_selectionChange_18_listener($event) {
        return ctx.selectedOrderProducts = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, QcOrderComponent_ng_template_20_Template, 21, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, QcOrderComponent_ng_template_21_Template, 5, 5, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, QcOrderComponent_ng_template_22_Template, 23, 13, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, QcOrderComponent_ng_template_23_Template, 4, 3, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, QcOrderComponent_ng_template_24_Template, 2, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, QcOrderComponent_div_25_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "h2", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Technical Equipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "p-table", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function QcOrderComponent_Template_p_table_selectionChange_30_listener($event) {
        return ctx.selectedTechnicalEquipment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, QcOrderComponent_ng_template_32_Template, 17, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, QcOrderComponent_ng_template_33_Template, 3, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, QcOrderComponent_ng_template_34_Template, 19, 11, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, QcOrderComponent_ng_template_35_Template, 4, 3, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, QcOrderComponent_ng_template_36_Template, 2, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, QcOrderComponent_div_37_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, QcOrderComponent_ng_template_38_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, QcOrderComponent_pek_qr_code_scanner_40_Template, 1, 0, "pek-qr-code-scanner", 27);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](31);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](39);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("module", "warehouse")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 27, ctx.albumService.loading$))("disabled", ctx.selectedOrderProducts.length === 0 && !ctx.selectedTechnicalEquipment);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.isGenerating)("disabled", ctx.selectedOrderProducts.length === 0 && !ctx.selectedTechnicalEquipment);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.isCompletingProducts)("disabled", ctx.selectedOrderProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.isReworking)("disabled", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.isCompleting)("disabled", !ctx.orderCanBeCompleted);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingProducts)("rows", 10)("value", ctx.orderProducts)("selection", ctx.selectedOrderProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r1.paginator && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("scrollable", true)("paginator", !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0)("rows", 10)("value", ctx.technicalEquipments)("selection", ctx.selectedTechnicalEquipment);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_r8.paginator && !ctx.isLoadingTechnicalEquipment && ctx.technicalEquipments.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isScanning);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_18__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_20__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_20__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_20__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_20__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_9__.ModuleIconComponent, _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_10__.QrCodeScannerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
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

/***/ 68272:
/*!********************************************************************************!*\
  !*** ./src/app/qc/modals/found-product-in-qc/found-product-in-qc.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoundProductInQcComponent": () => (/* binding */ FoundProductInQcComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 73867);




class FoundProductInQcComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onAccept() {
        this.dialogRef.close(true);
    }
}
FoundProductInQcComponent.ɵfac = function FoundProductInQcComponent_Factory(t) { return new (t || FoundProductInQcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
FoundProductInQcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoundProductInQcComponent, selectors: [["pek-found-product-in-qc"]], decls: 10, vars: 3, consts: [[1, "modal-header"], [1, "modal-header__title"], [1, "capitalize"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Quality Control", 1, "p-button-success", 3, "click"]], template: function FoundProductInQcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "product found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content")(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoundProductInQcComponent_Template_button_click_9_listener() { return ctx.onAccept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.data.nomenclature.code, " ", ctx.data.nomenclature.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3VuZC1wcm9kdWN0LWluLXFjLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 74804:
/*!************************************************************************************!*\
  !*** ./src/app/qc/modals/move-qc-with-protocol/move-qc-with-protocol.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveQcWithProtocolComponent": () => (/* binding */ MoveQcWithProtocolComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_protocol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/protocol.service */ 25703);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../qr-code/qr-code.service */ 32527);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 69906);















function MoveQcWithProtocolComponent_div_9_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 28)(5, "div", 29)(6, "div", 30)(7, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 33)(11, "div", 34)(12, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Passed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 35)(15, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_div_9_div_7_div_3_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const paragraph_r14 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.changePassedTrue(paragraph_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 33)(18, "div", 38)(19, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "To Isolator");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 35)(22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_div_9_div_7_div_3_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const paragraph_r14 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.changePassedFalse(paragraph_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const paragraph_r14 = ctx.$implicit;
    const idx_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", idx_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r13.getParagraphName(paragraph_r14.get("qc_protocol_paragraph").value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", "p-name-" + idx_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "p-name-" + idx_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", paragraph_r14.value.is_passed === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", paragraph_r14.value.is_passed === false);
} }
function MoveQcWithProtocolComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Protocol Paragraph");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MoveQcWithProtocolComponent_div_9_div_7_div_3_Template, 24, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.answerParagraphs.controls);
} }
function MoveQcWithProtocolComponent_div_9_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " There are no paragraphs of the protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MoveQcWithProtocolComponent_div_9_div_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r20 = ctx.$implicit;
    const idx_r21 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx_r19.link + file_r20.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", idx_r21 + 1, ". ", ctx_r19.getFileName(file_r20 == null ? null : file_r20.file), " ");
} }
function MoveQcWithProtocolComponent_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MoveQcWithProtocolComponent_div_9_div_13_a_1_Template, 2, 3, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.files);
} }
function MoveQcWithProtocolComponent_div_9_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " There are no files of the protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MoveQcWithProtocolComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "form", 13)(2, "div", 14)(3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Serial Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MoveQcWithProtocolComponent_div_9_div_7_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, MoveQcWithProtocolComponent_div_9_ng_template_8_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 20)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Protocol Files:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, MoveQcWithProtocolComponent_div_9_div_13_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, MoveQcWithProtocolComponent_div_9_ng_template_14_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.answerParagraphs.length > 0)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.files.length > 0)("ngIfElse", _r11);
} }
function MoveQcWithProtocolComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.complete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.hasComplete);
} }
function MoveQcWithProtocolComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.save()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.hasComplete);
} }
function MoveQcWithProtocolComponent_ng_template_14_Template(rf, ctx) { }
function MoveQcWithProtocolComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class MoveQcWithProtocolComponent {
    constructor(fb, dialogRef, qcProtocolService, domSanitizer, qrCodeService, adapterService, modalService, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.qcProtocolService = qcProtocolService;
        this.domSanitizer = domSanitizer;
        this.qrCodeService = qrCodeService;
        this.adapterService = adapterService;
        this.modalService = modalService;
        this.data = data;
        this.isLoading = true;
        this.isGeneratedNumber = false;
        this.paragraphs = [];
        this.hasComplete = false;
        this.isLoadingFiles = true;
        this.files = [];
        this.serialNumbers = [];
        this.defaultSerialNumbers = [];
        this.form = this.fb.group({
            serial_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            invoice_product: [null],
            invoice_product_id: [null],
            order_product: [null],
            protocol: [null],
            paragraphs: this.fb.array([]),
            serial: [null],
        });
        this.link = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_path;
    }
    get answerParagraphs() {
        return this.form.get('paragraphs');
    }
    ngOnInit() {
        if (this.data.currentCount > this.data.count) {
            this.data.currentCount = this.data.count;
        }
        this.serialNumbers = this.data.product.totalSerialNumbers;
        this.serialNumbers.forEach(serial => {
            serial.traversed = serial.is_passed !== null;
        });
        this.defaultSerialNumbers = JSON.parse(JSON.stringify(this.serialNumbers));
        this.serialNumbers.sort((a, b) => a.id - b.id);
        this.currentCount = JSON.parse(JSON.stringify(this.data.currentCount));
        if (this.data.foundSerialId) {
            const serialNumberIndex = this.serialNumbers.findIndex(serial => +serial.id === this.data.foundSerialId);
            [this.serialNumbers[0], this.serialNumbers[serialNumberIndex]] = [this.serialNumbers[serialNumberIndex], this.serialNumbers[0]];
        }
        const serialObject = this.serialNumbers[this.data.currentCount - 1];
        console.log('serialObject', serialObject);
        if (serialObject && serialObject?.type_with_number) {
            this.form.get('serial').patchValue(serialObject?.type_with_number);
        }
        else {
            this.form.get('serial').patchValue(serialObject?.id);
        }
        if (serialObject) {
            this.form.get('serial_number').patchValue(serialObject.id);
        }
        if (serialObject.invoice_product_id) {
            this.form.get('invoice_product_id').patchValue(serialObject.invoice_product_id);
        }
        this.getFiles();
        this.getProtocol();
    }
    showButtonSave() {
        return Boolean(this.serialNumbers[this.data.currentCount - 1].warehouseproductqcprotocol_set.length === 0);
    }
    generateSerialNumber() {
        this.form.get('serial_number').patchValue('Serial Number');
        this.isGeneratedNumber = true;
    }
    nextSerial() {
        if (this.data.currentCount < this.data.count) {
            this.data.currentCount += 1;
            this.saveSerialInfo();
        }
    }
    prevSerial() {
        if (this.data.currentCount >= 1) {
            this.data.currentCount -= 1;
            this.saveSerialInfo();
        }
    }
    saveSerialInfo() {
        const serialObject = this.serialNumbers[this.data.currentCount - 1];
        if (serialObject.invoice_product_id) {
            this.form.get('invoice_product_id').patchValue(serialObject.invoice_product_id);
        }
        if (serialObject && serialObject?.type_with_number) {
            this.form.get('serial').patchValue(serialObject?.type_with_number);
        }
        else {
            this.form.get('serial').patchValue(serialObject?.id);
        }
        if (serialObject) {
            this.form.get('paragraphs').value[0].is_passed = serialObject.is_passed;
            this.form.get('serial_number').patchValue(serialObject.id);
        }
        this.form.get('paragraphs').controls[0].get('comment').patchValue(serialObject.warehouseproductqcprotocol_set.length > 0 ? serialObject.warehouseproductqcprotocol_set[0].paragraphs[0].comment : '');
        this.form.get('paragraphs').controls[0].get('is_passed').patchValue(serialObject.is_passed);
        if (this.form.get('paragraphs').controls[0].get('is_passed').value !== null) {
            this.hasComplete = true;
        }
    }
    getProtocol() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
            protocol: this.qcProtocolService.getOne(this.data.product.nomenclature.qc_protocol),
            paragraphs: this.qcProtocolService.getParagraphs([{ name: 'protocol_ids', value: this.data.product.nomenclature.qc_protocol }])
        }).subscribe(({ protocol, paragraphs }) => {
            this.protocol = protocol;
            this.paragraphs = paragraphs;
            if (this.data.type === 'invoice') {
                this.form.get('invoice_product').patchValue(this.data.product.id);
            }
            if (this.data.type === 'order') {
                this.form.get('order_product').patchValue(this.data.product.id);
            }
            this.form.get('protocol').patchValue(this.data.product.nomenclature.qc_protocol);
            this.updateParagraphs();
            if (this.form.get('paragraphs').controls[0].get('is_passed').value !== null) {
                this.hasComplete = true;
            }
            this.isLoading = false;
        });
    }
    updateParagraphs() {
        const serialObject = this.serialNumbers[this.data.currentCount - 1];
        this.paragraphs.forEach(paragraph => {
            this.form.get('paragraphs').push(this.fb.group({
                qc_protocol_paragraph: [paragraph.id],
                comment: [serialObject.warehouseproductqcprotocol_set.length > 0 ? serialObject.warehouseproductqcprotocol_set[0].paragraphs[0].comment : ''],
                is_passed: [serialObject.is_passed]
            }));
        });
    }
    getParagraphName(id) {
        let str = `${this.paragraphs.find(p => p.id === id).name}`;
        if (this.paragraphs.find(p => p.id === id).comment) {
            str += ` (${this.paragraphs.find(p => p.id === id).comment})`;
        }
        return str;
    }
    changePassedTrue(paragraph) {
        const index = this.form.get('paragraphs').value.findIndex(p => p.qc_protocol_paragraph === paragraph.value.qc_protocol_paragraph);
        if (this.form.get('paragraphs').controls[index].get('is_passed').value) {
            this.form.get('paragraphs').controls[index].get('is_passed').patchValue(null);
            this.hasComplete = false;
        }
        else {
            this.form.get('paragraphs').controls[index].get('is_passed').patchValue(true);
            this.hasComplete = true;
        }
    }
    changePassedFalse(paragraph) {
        const index = this.form.get('paragraphs').value.findIndex(p => p.qc_protocol_paragraph === paragraph.value.qc_protocol_paragraph);
        if (this.form.get('paragraphs').controls[index].get('is_passed').value === false) {
            this.form.get('paragraphs').controls[index].get('is_passed').patchValue(null);
            this.hasComplete = false;
        }
        else {
            this.form.get('paragraphs').controls[index].get('is_passed').patchValue(false);
            this.hasComplete = true;
        }
    }
    generateQrCode() {
        const send = {
            by_nomenclatures_list: [{
                    // nomenclature_id: this.data.product.nomenclature.id,
                    // serial_number_ids: [parseInt(this.form.get('serial_number').value, 10)],
                    nomenclature_id: 13237,
                    serial_number_ids: [46],
                    order_product_ids: [],
                    invoice_product_ids: [],
                }],
        };
        this.qrCodeService.generateQrCodes(send).subscribe(codes => {
            this.qrCode = codes.with_serial[0].code[0];
            // this.qrCode.serial_number = this.form.get('serial_number').value;
            this.qrCode.qr_src = this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + this.qrCode.qr_src);
            // this.modalService.qrCodeModal(this.qrCode).subscribe();
        });
    }
    complete() {
        if (this.form.value) {
            const send = { ...this.form.value };
            if (this.data.type === 'invoice') {
                const invoice_product = this.data.product.invoiceProducts.find(prod => {
                    return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
                });
                send.invoice_product = invoice_product.id;
                delete send.order_product;
            }
            if (this.data.type === 'order') {
                const invoice_product = this.data.product.orderProducts.find(prod => {
                    return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
                });
                send.order_product = invoice_product.id;
                delete send.invoice_product;
            }
            delete send.serial;
            send.serial_number = this.form.get('serial_number').value;
            // send.serial_number = 21;
            this.qcProtocolService.productsToQc(send).subscribe(() => {
                if (this.data.currentCount === this.data.count) {
                    this.dialogRef.close(true);
                }
                else {
                    this.hasComplete = false;
                    this.data.currentCount++;
                    this.saveSerialInfo();
                }
            });
        }
    }
    save() {
        const send = { ...this.form.value };
        const id = this.serialNumbers[this.data.currentCount - 1].warehouseproductqcprotocol_set[0].id;
        if (this.data.type === 'invoice') {
            const invoice_product = this.data.product.invoiceProducts.find(prod => {
                return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
            });
            send.invoice_product = invoice_product.id;
            delete send.order_product;
        }
        if (this.data.type === 'order') {
            const invoice_product = this.data.product.orderProducts.find(prod => {
                return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
            });
            send.order_product = invoice_product.id;
            delete send.invoice_product;
        }
        delete send.serial;
        send.serial_number = +this.form.get('serial_number').value;
        send.paragraphs[0].id = this.serialNumbers[this.data.currentCount - 1].warehouseproductqcprotocol_set[0].paragraphs[0].id;
        this.qcProtocolService.updateProductProtocol(send, id).subscribe(() => {
            if (this.data.currentCount === this.data.count) {
                this.dialogRef.close(true);
            }
            else {
                this.hasComplete = false;
                this.data.currentCount++;
                this.saveSerialInfo();
            }
        });
    }
    downloadFile(file) {
        this.qcProtocolService.downloadFile(file.id).subscribe(response => {
            const filename = this.getFileName(file.file);
            this.adapterService.downloadFile(filename, response);
        });
    }
    close() {
        if (this.currentCount === this.data.currentCount) {
            this.dialogRef.close(false);
        }
        else {
            this.dialogRef.close(true);
        }
    }
    getFileName(fileName) {
        const name = fileName.split('/');
        return name[name.length - 1];
    }
    getFiles() {
        this.qcProtocolService.getFiles([{ name: 'qc_protocol_id', value: this.data.product.nomenclature.qc_protocol }]).subscribe(files => {
            this.files = files;
            this.isLoadingFiles = false;
        });
    }
}
MoveQcWithProtocolComponent.ɵfac = function MoveQcWithProtocolComponent_Factory(t) { return new (t || MoveQcWithProtocolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_protocol_service__WEBPACK_IMPORTED_MODULE_1__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_2__.QrCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
MoveQcWithProtocolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MoveQcWithProtocolComponent, selectors: [["pek-move-qc-with-protocol"]], decls: 18, vars: 10, consts: [[1, "modal-header-container", "align-items-start", "d-flex", "justify-content-between"], ["mat-dialog-title", "", 1, "modal-heading"], [1, "tools"], ["pButton", "", 3, "click"], ["pButton", "", "type", "button", "size", "s", "icon", "pi pi-arrow-left", 1, "p-button-icon", "ml-3", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-right", 1, "p-button-icon", "ml-3", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between"], ["pButton", "", "label", "Cancel", "type", "button", 1, "p-button-danger", 3, "click"], ["pButton", "", "type", "button", "label", "Complete", "class", "p-button-secondary", 3, "disabled", "click", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Save", "class", "p-button-secondary", 3, "disabled", "click", 4, "ngIf"], ["createBtn", ""], ["loading", ""], [3, "formGroup"], [1, "form-group"], ["for", "serial"], [1, "serial"], ["pInputText", "", "formControlName", "serial", "type", "text", "id", "serial", 1, "form-control", "disabled"], ["formArrayName", "paragraphs", 4, "ngIf", "ngIfElse"], ["empty", ""], [1, "upload-header"], ["class", "files-list", 4, "ngIf", "ngIfElse"], ["emptyFiles", ""], ["formArrayName", "paragraphs"], ["class", "paragraphs__row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "paragraphs__row", 3, "formGroupName"], [1, "paragraph-row"], [2, "font-weight", "500", "font-size", "16px"], [1, "row"], [1, "col-9"], [1, "form-group", "form-group_text"], [3, "for"], ["pInputText", "", "formControlName", "comment", "type", "text", 1, "form-control", 3, "id"], [1, "col-1"], [1, "form-group", "passing"], [1, "column-filter-box"], ["type", "button", 3, "click"], [1, "pi", "pi-check"], [1, "passing", "form-group"], [1, "pi", "pi-times"], [1, "empty-text"], [1, "files-list"], ["class", "file", 3, "href", 4, "ngFor", "ngForOf"], [1, "file", 3, "href"], ["pButton", "", "type", "button", "label", "Complete", 1, "p-button-secondary", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Save", 1, "p-button-secondary", 3, "disabled", "click"], [1, "d-flex", "justify-content-center"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-3x"]], template: function MoveQcWithProtocolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_Template_button_click_4_listener() { return ctx.generateQrCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Generate QR-code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_Template_button_click_6_listener() { return ctx.prevSerial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_Template_button_click_7_listener() { return ctx.nextSerial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, MoveQcWithProtocolComponent_div_9_Template, 16, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-dialog-actions", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoveQcWithProtocolComponent_Template_button_click_11_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MoveQcWithProtocolComponent_button_12_Template, 1, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, MoveQcWithProtocolComponent_button_13_Template, 1, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, MoveQcWithProtocolComponent_ng_template_14_Template, 0, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, MoveQcWithProtocolComponent_ng_template_16_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" Quality Control with Protocol \u00AB", ctx.isLoading ? "..." : ctx.protocol.name, "\u00BB (Name: ", ctx.data.product.nomenclature.name, ") (", ctx.data.currentCount, "/", ctx.data.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.data.currentCount <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.data.currentCount >= ctx.data.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showButtonSave());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showButtonSave());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions], styles: [".disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.tools[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.375rem;\n  height: 2.375rem;\n  border: 0.0625rem solid #ced4da;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.1875rem;\n  cursor: pointer;\n  color: #fff;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #2196F3;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2196F3;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  border: 0.0625rem solid #ced4da !important;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled.active {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmUtcWMtd2l0aC1wcm90b2NvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUk7RUFDRSxxQkFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFHTTtFQUNFLGdDQUFBO0FBRFI7O0FBS0k7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUFITjs7QUFLTTtFQUNFLFlBQUE7QUFIUiIsImZpbGUiOiJtb3ZlLXFjLXdpdGgtcHJvdG9jb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi50b29scyB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNvbHVtbi1maWx0ZXItYm94IHtcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIuMzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyMTk2RjM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNhNmQ1ZmE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjY2VkNGRhICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7943:
/*!********************************************************************************!*\
  !*** ./src/app/qc/modals/move-qc-with-serial/move-qc-with-serial.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveQcWithSerialComponent": () => (/* binding */ MoveQcWithSerialComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../qr-code/qr-code.service */ 32527);
/* harmony import */ var _services_protocol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/protocol.service */ 25703);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 69906);









class MoveQcWithSerialComponent {
    constructor(fb, qrCodeService, dialogRef, qcProtocolService, data) {
        this.fb = fb;
        this.qrCodeService = qrCodeService;
        this.dialogRef = dialogRef;
        this.qcProtocolService = qcProtocolService;
        this.data = data;
        this.serialNumbers = [];
        this.defaultSerialNumbers = [];
        this.form = this.fb.group({
            serial_number_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            serial: [null,],
            invoice_product_id: [null],
            order_product_id: [null],
            is_passed: [null],
            traversed: [null],
        });
    }
    ngOnInit() {
        if (this.data.currentCount > this.data.count) {
            this.data.currentCount = this.data.count;
        }
        this.serialNumbers = this.data.product.totalSerialNumbers;
        this.serialNumbers.forEach(serial => {
            serial.traversed = serial.is_passed !== null;
        });
        this.defaultSerialNumbers = JSON.parse(JSON.stringify(this.serialNumbers));
        this.serialNumbers.sort((a, b) => a.id - b.id);
        this.currentCount = JSON.parse(JSON.stringify(this.data.currentCount));
        if (this.data.foundSerialId) {
            const serialNumberIndex = this.serialNumbers.findIndex(serial => +serial.id === this.data.foundSerialId);
            [this.serialNumbers[0], this.serialNumbers[serialNumberIndex]] = [this.serialNumbers[serialNumberIndex], this.serialNumbers[0]];
        }
        const serialObject = this.serialNumbers[this.data.currentCount - 1];
        if (serialObject && serialObject?.type_with_number) {
            this.form.get('serial').patchValue(serialObject?.type_with_number);
        }
        else {
            this.form.get('serial').patchValue(serialObject?.id);
        }
        if (serialObject) {
            this.form.get('is_passed').patchValue(serialObject.is_passed);
            this.form.get('traversed').patchValue(serialObject.traversed);
            this.form.get('serial_number_id').patchValue(serialObject.id);
        }
        if (this.data.type === 'order') {
            this.form.get('order_product_id').patchValue(this.data.product.id);
        }
        if (this.data.type === 'invoice') {
            this.form.get('invoice_product_id').patchValue(this.data.product.id);
        }
        if (serialObject.invoice_product_id) {
            this.form.get('invoice_product_id').patchValue(serialObject.invoice_product_id);
        }
    }
    saveSerialInfo() {
        const serialObject = this.serialNumbers[this.data.currentCount - 1];
        if (serialObject.invoice_product_id) {
            this.form.get('invoice_product_id').patchValue(serialObject.invoice_product_id);
        }
        if (serialObject && serialObject?.type_with_number) {
            this.form.get('serial').patchValue(serialObject?.type_with_number);
        }
        else {
            this.form.get('serial').patchValue(serialObject?.id);
        }
        if (serialObject) {
            this.form.get('traversed').patchValue(serialObject.traversed);
            this.form.get('serial_number_id').patchValue(serialObject.id);
            this.form.get('is_passed').patchValue(serialObject.is_passed);
        }
    }
    nextSerial() {
        if (this.data.currentCount < this.data.count) {
            this.data.currentCount += 1;
            this.saveSerialInfo();
        }
    }
    prevSerial() {
        if (this.data.currentCount >= 1) {
            this.data.currentCount -= 1;
            this.saveSerialInfo();
        }
    }
    generateQrCode() {
        const send = {
            by_nomenclatures_list: [{
                    // nomenclature_id: 13237,
                    nomenclature_id: this.data.product.nomenclature.id,
                    serial_number_ids: [parseInt(this.form.get('serial_number_id').value, 10)],
                    // serial_number_ids: [184],
                    order_product_ids: [],
                    invoice_product_ids: [],
                }],
        };
        this.qrCodeService.generateQrCodes(send).subscribe(codes => {
            this.qrCode = codes.with_serial[0].code[0];
            // this.qrCode.serial_number = this.form.get('serial_number_id').value;
            // this.qrCode.qr_src = this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + this.qrCode.qr_src);
            // this.modalService.qrCodeModal(this.qrCode).subscribe();
        });
    }
    close() {
        if (JSON.stringify(this.defaultSerialNumbers) === JSON.stringify(this.serialNumbers)) {
            this.dialogRef.close(false);
        }
        else {
            this.dialogRef.close(true);
        }
    }
    changePassedTrue() {
        if (this.form.get('is_passed').value === true) {
            this.form.get('is_passed').patchValue(null);
        }
        else {
            this.form.get('is_passed').patchValue(true);
        }
    }
    changePassedFalse() {
        if (this.form.get('is_passed').value === false) {
            this.form.get('is_passed').patchValue(null);
        }
        else {
            this.form.get('is_passed').patchValue(false);
        }
    }
    beforeForSave() {
        const index = this.serialNumbers.findIndex(s => s.id === this.form.get('serial_number_id').value);
        this.serialNumbers[index].traversed = true;
        this.serialNumbers[index].is_passed = this.form.get('is_passed').value;
        this.nextSerial();
    }
    complete() {
        const send = { ...this.form.value };
        delete send.serial;
        delete send.traversed;
        if (send.invoice_product_id) {
            const invoice_product = this.data.product.invoiceProducts.find(prod => {
                return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number_id) >= 0;
            });
            send.invoice_product_id = invoice_product.id;
            delete send.order_product_id;
        }
        if (send.order_product_id) {
            const invoice_product = this.data.product.orderProducts.find(prod => {
                return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number_id) >= 0;
            });
            send.order_product_id = invoice_product.id;
            delete send.invoice_product_id;
        }
        if (this.form.get('traversed').value === false) {
            this.qcProtocolService.qcSerial(send).subscribe(() => {
                if (this.data.currentCount === this.data.count) {
                    this.dialogRef.close(true);
                }
                else {
                    this.beforeForSave();
                }
            });
        }
        else {
            this.qcProtocolService.qcSerialUpdate(send).subscribe(() => {
                if (this.data.currentCount === this.data.count) {
                    this.dialogRef.close(true);
                }
                else {
                    this.beforeForSave();
                }
            });
        }
    }
}
MoveQcWithSerialComponent.ɵfac = function MoveQcWithSerialComponent_Factory(t) { return new (t || MoveQcWithSerialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_qr_code_qr_code_service__WEBPACK_IMPORTED_MODULE_0__.QrCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_protocol_service__WEBPACK_IMPORTED_MODULE_1__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
MoveQcWithSerialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MoveQcWithSerialComponent, selectors: [["pek-move-qc-with-serial"]], decls: 34, vars: 13, consts: [[1, "modal-header"], [1, "modal-header__title"], [1, "tools"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "click"], ["pButton", "", "type", "button", "size", "s", "icon", "pi pi-arrow-left", 1, "p-button-icon", "step-btn", "ml-3", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-right", 1, "p-button-icon", "step-btn", "ml-3", 3, "disabled", "click"], [3, "formGroup"], [1, "row"], [1, "col-9"], [1, "form-group"], ["for", "serial"], [1, "serial"], ["pInputText", "", "formControlName", "serial", "type", "text", "id", "serial", 1, "form-control", "disabled"], [1, "col-1"], [1, "form-group", "passing"], [1, "column-filter-box"], ["type", "button", 3, "click"], [1, "pi", "pi-check"], [1, "pi", "pi-times"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Complete", 1, "p-button-success", 3, "disabled", "loading", "click"]], template: function MoveQcWithSerialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoveQcWithSerialComponent_Template_button_click_4_listener() { return ctx.generateQrCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Generate QR-code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoveQcWithSerialComponent_Template_button_click_6_listener() { return ctx.prevSerial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoveQcWithSerialComponent_Template_button_click_7_listener() { return ctx.nextSerial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-dialog-content")(9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Serial Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoveQcWithSerialComponent_Template_button_click_22_listener() { return ctx.changePassedTrue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "To Isolator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoveQcWithSerialComponent_Template_button_click_29_listener() { return ctx.changePassedFalse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-dialog-actions", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoveQcWithSerialComponent_Template_button_click_33_listener() { return ctx.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" Quality Control (Name: ", ctx.data.product.nomenclature.name, ") (", ctx.data.currentCount, "/", ctx.data.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.currentCount <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.currentCount >= ctx.data.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.form.get("is_passed").value === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.form.get("is_passed").value === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.get("is_passed").value === null)("loading", ctx.isPending);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: [".disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.step-btn[_ngcontent-%COMP%] {\n  height: 2.1875rem;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.375rem;\n  height: 2.375rem;\n  border: 0.0625rem solid #ced4da;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.1875rem;\n  cursor: pointer;\n  color: #fff;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #2196F3;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2196F3;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #a6d5fa;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  border: 0.0625rem solid #ced4da !important;\n}\n\n.column-filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled.active {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmUtcWMtd2l0aC1zZXJpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVJO0VBQ0UscUJBQUE7QUFBTjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBR007RUFDRSxnQ0FBQTtBQURSOztBQUtJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FBSE47O0FBS007RUFDRSxZQUFBO0FBSFIiLCJmaWxlIjoibW92ZS1xYy13aXRoLXNlcmlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnN0ZXAtYnRuIHtcclxuICBoZWlnaHQ6IDIuMTg3NXJlbTtcclxufVxyXG5cclxuLmNvbHVtbi1maWx0ZXItYm94IHtcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIuMzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyMTk2RjM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNhNmQ1ZmE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjY2VkNGRhICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../procurement/models/invoice-product */ 16195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice-product.service */ 48461);
/* harmony import */ var _procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order-product.service */ 6491);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);











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
            passed_quantity: [this.data.entity.totalQuantityPassed, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.data.entity.totalQuantity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            not_passed_quantity: [this.data.entity.totalQuantityNotPassed, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.data.entity.totalQuantity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.quantity = this.data.entity.totalQuantity;
    }
    onComplete() {
        if (this.form.valid) {
            if (this.data.isOwnProduction) {
                let totalPassedQuantity = this.form.get('passed_quantity').value;
                let totalNotPassedQuantity = this.form.get('not_passed_quantity').value;
                const totalQuantity = this.quantity;
                let products;
                if (this.data.isOwnProduction) {
                    products = this.data.entity.orderProducts;
                }
                else {
                    products = this.data.entity.invoiceProducts;
                }
                const dataToSendCalls = [];
                products.sort((a, b) => {
                    return a.id - b.id;
                })
                    .forEach(prod => {
                    let passedQuantity = 0;
                    let notPassedQuantity = 0;
                    let canFillQuantity = prod.quantity;
                    // Update accepted quantities
                    if (totalPassedQuantity <= canFillQuantity) {
                        canFillQuantity -= totalPassedQuantity;
                        passedQuantity += totalPassedQuantity;
                        totalPassedQuantity = 0;
                    }
                    else {
                        totalPassedQuantity -= canFillQuantity;
                        passedQuantity += canFillQuantity;
                        canFillQuantity = 0;
                    }
                    // Update NOT accepted quantities
                    if (totalNotPassedQuantity <= canFillQuantity) {
                        canFillQuantity -= totalNotPassedQuantity;
                        notPassedQuantity += totalNotPassedQuantity;
                        totalNotPassedQuantity = 0;
                    }
                    else {
                        totalNotPassedQuantity -= canFillQuantity;
                        notPassedQuantity += canFillQuantity;
                        canFillQuantity = 0;
                    }
                    let updateProduct = {
                        id: prod.id,
                        passed_quantity: passedQuantity,
                        not_passed_quantity: notPassedQuantity,
                    };
                    console.log('updateProduct.passed_quantity', updateProduct.passed_quantity);
                    console.log('updateProduct.passed_quantity', prod.quantity);
                    if (updateProduct.passed_quantity === 0 && updateProduct.not_passed_quantity === 0) {
                        updateProduct.quality_control = null;
                    }
                    else {
                        if (updateProduct.passed_quantity === prod.quantity) {
                            updateProduct.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PASSED;
                        }
                        else if (updateProduct.not_passed_quantity === prod.quantity) {
                            updateProduct.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.NOT_PASSED;
                        }
                        else if (updateProduct.not_passed_quantity + updateProduct.passed_quantity === prod.quantity) {
                            updateProduct.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PARTLY_PASSED;
                        }
                    }
                    dataToSendCalls.push(this.orderProductService.updatePartly(updateProduct));
                });
                this.isPending = true;
                (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([...dataToSendCalls]).subscribe(res => {
                    this.isPending = false;
                    this.dialogRef.close(true);
                });
            }
            else {
                this.updateQualityControl();
            }
        }
    }
    updateQualityControl() {
        console.log(this.form.value);
        if (this.form.valid) {
            const currentQuantities = this.form.get('passed_quantity').value + this.form.get('not_passed_quantity').value;
            const totalQuantityOriginal = this.data.entity.invoiceProducts.reduce((sum, p) => sum + p.quantity, 0);
            const totalPassedQuantity = this.data.entity.invoiceProducts.reduce((sum, p) => sum + p.accepted_quantity, 0) + this.form.get('passed_quantity').value;
            let passedQuantity = this.form.get('passed_quantity').value;
            if (currentQuantities < totalQuantityOriginal) {
                // Учесть RMA accepted_quantities
                passedQuantity = totalPassedQuantity;
            }
            const dataToSend = {
                invoice_products_ids: this.data.entity.invoiceProducts.map(prod => prod.id),
                passed_quantity: passedQuantity,
                not_passed_quantity: this.form.get('not_passed_quantity').value
            };
            this.isPending = true;
            this.invoiceProductService.bulkUpdateQualityControl(dataToSend).subscribe(res => {
                this.isPending = false;
                this.dialogRef.close(true);
            });
        }
    }
    isDisableCompleteButton() {
        // Can allow if passed_quantity not_passed_quantity quantity is 0's or
        // passed_quantity + not_passed_quantity equals quantity
        const isNotFillingAll = +this.form.get('passed_quantity').value +
            +this.form.get('not_passed_quantity').value !== +this.quantity;
        const isSetToZeroes = +this.form.get('passed_quantity').value === 0 &&
            +this.form.get('not_passed_quantity').value === 0;
        return isNotFillingAll && !isSetToZeroes;
    }
}
QualityControlModalComponent.ɵfac = function QualityControlModalComponent_Factory(t) { return new (t || QualityControlModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_invoice_product_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_procurement_services_order_product_service__WEBPACK_IMPORTED_MODULE_2__.OrderProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
QualityControlModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QualityControlModalComponent, selectors: [["pek-quality-control-modal"]], decls: 16, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "passed"], ["pInputText", "", "formControlName", "passed_quantity", "min", "0", "type", "number", "id", "passed", 1, "form-control", 3, "max"], ["for", "np"], ["pInputText", "", "formControlName", "not_passed_quantity", "min", "0", "type", "number", "id", "np", 1, "form-control", 3, "max"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Complete", 1, "p-button-success", 3, "disabled", "loading", "click"]], template: function QualityControlModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QualityControlModalComponent_Template_button_click_15_listener() { return ctx.onComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Quality Control (Name: ", ctx.data.entity.nomenclature.name, ", Quantity: ", ctx.data.entity.totalQuantity, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", ctx.data.entity.totalQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", ctx.data.entity.totalQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isDisableCompleteButton())("loading", ctx.isPending);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFsaXR5LWNvbnRyb2wtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _qc_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qc.routing */ 91403);
/* harmony import */ var _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qc-list/qc-list.component */ 39818);
/* harmony import */ var _components_qc_delivery_list_qc_delivery_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qc-delivery-list/qc-delivery-list.component */ 91769);
/* harmony import */ var _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/qc-layout/qc-layout.component */ 80099);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/qc-invoice/qc-invoice.component */ 60716);
/* harmony import */ var _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/qc-order/qc-order.component */ 76443);
/* harmony import */ var _components_qc_delivery_qc_delivery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/qc-delivery/qc-delivery.component */ 32785);
/* harmony import */ var _components_qc_delivery_chain_qc_delivery_chain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/qc-delivery-chain/qc-delivery-chain.component */ 33789);
/* harmony import */ var _modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/quality-control-modal/quality-control-modal.component */ 8370);
/* harmony import */ var _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/protocols/protocols.component */ 82155);
/* harmony import */ var _modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/create-edit-protocol/create-edit-protocol.component */ 19365);
/* harmony import */ var _modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component */ 9648);
/* harmony import */ var _modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/quality-control-technical-equipment/quality-control-technical-equipment.component */ 54552);
/* harmony import */ var _modals_move_qc_with_serial_move_qc_with_serial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/move-qc-with-serial/move-qc-with-serial.component */ 7943);
/* harmony import */ var _modals_move_qc_with_protocol_move_qc_with_protocol_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/move-qc-with-protocol/move-qc-with-protocol.component */ 74804);
/* harmony import */ var _qr_code_qr_code_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../qr-code/qr-code.module */ 77292);
/* harmony import */ var _modals_found_product_in_qc_found_product_in_qc_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/found-product-in-qc/found-product-in-qc.component */ 68272);
/* harmony import */ var _components_qc_delivery_print_page_qc_delivery_print_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/qc-delivery-print-page/qc-delivery-print-page.component */ 40096);
/* harmony import */ var _components_qc_delivery_chain_print_page_qc_delivery_chain_print_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/qc-delivery-chain-print-page/qc-delivery-chain-print-page.component */ 99147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);























class QcModule {
}
QcModule.ɵfac = function QcModule_Factory(t) { return new (t || QcModule)(); };
QcModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: QcModule });
QcModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__.LayoutModule,
        _qr_code_qr_code_module__WEBPACK_IMPORTED_MODULE_17__.QrCodeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](QcModule, { declarations: [_components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent,
        _components_qc_delivery_list_qc_delivery_list_component__WEBPACK_IMPORTED_MODULE_2__.QcDeliveryListComponent,
        _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_3__.QcLayoutComponent,
        _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_6__.QcInvoiceComponent,
        _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_7__.QcOrderComponent,
        _components_qc_delivery_qc_delivery_component__WEBPACK_IMPORTED_MODULE_8__.QcDeliveryComponent,
        _components_qc_delivery_chain_qc_delivery_chain_component__WEBPACK_IMPORTED_MODULE_9__.QcDeliveryChainComponent,
        _modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_10__.QualityControlModalComponent,
        _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_11__.ProtocolsComponent,
        _modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_12__.CreateEditProtocolComponent,
        _modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_13__.NomenclatureProtocolPickerComponent,
        _modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_14__.QualityControlTechnicalEquipmentComponent,
        _modals_move_qc_with_serial_move_qc_with_serial_component__WEBPACK_IMPORTED_MODULE_15__.MoveQcWithSerialComponent,
        _modals_move_qc_with_protocol_move_qc_with_protocol_component__WEBPACK_IMPORTED_MODULE_16__.MoveQcWithProtocolComponent,
        _modals_found_product_in_qc_found_product_in_qc_component__WEBPACK_IMPORTED_MODULE_18__.FoundProductInQcComponent,
        _components_qc_delivery_print_page_qc_delivery_print_page_component__WEBPACK_IMPORTED_MODULE_19__.QcDeliveryPrintPageComponent,
        _components_qc_delivery_chain_print_page_qc_delivery_chain_print_page_component__WEBPACK_IMPORTED_MODULE_20__.QcDeliveryChainPrintPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__.LayoutModule,
        _qr_code_qr_code_module__WEBPACK_IMPORTED_MODULE_17__.QrCodeModule] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/qc-layout/qc-layout.component */ 80099);
/* harmony import */ var _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/qc-list/qc-list.component */ 39818);
/* harmony import */ var _components_qc_delivery_list_qc_delivery_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qc-delivery-list/qc-delivery-list.component */ 91769);
/* harmony import */ var _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/qc-order/qc-order.component */ 76443);
/* harmony import */ var _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/qc-invoice/qc-invoice.component */ 60716);
/* harmony import */ var _components_qc_delivery_qc_delivery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/qc-delivery/qc-delivery.component */ 32785);
/* harmony import */ var _components_qc_delivery_chain_qc_delivery_chain_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/qc-delivery-chain/qc-delivery-chain.component */ 33789);
/* harmony import */ var _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/protocols/protocols.component */ 82155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [
    {
        path: '',
        component: _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_0__.QcLayoutComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', title: 'Quality Control', component: _components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent },
            { path: 'delivery', title: 'Quality Control', component: _components_qc_delivery_list_qc_delivery_list_component__WEBPACK_IMPORTED_MODULE_2__.QcDeliveryListComponent },
            { path: 'invoice/:id', title: 'Invoice Quality Control', component: _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_4__.QcInvoiceComponent },
            { path: 'order/:id', title: 'Order Quality Control', component: _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_3__.QcOrderComponent },
            { path: 'delivery/:id', title: 'Delivery to outsourcer Quality Control', component: _components_qc_delivery_qc_delivery_component__WEBPACK_IMPORTED_MODULE_5__.QcDeliveryComponent },
            { path: 'delivery/chain/:id', title: 'Delivery to customer Quality Control', component: _components_qc_delivery_chain_qc_delivery_chain_component__WEBPACK_IMPORTED_MODULE_6__.QcDeliveryChainComponent },
            { path: 'protocols', title: 'Protocols', component: _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_7__.ProtocolsComponent },
        ]
    }
];
class QcRouting {
}
QcRouting.ɵfac = function QcRouting_Factory(t) { return new (t || QcRouting)(); };
QcRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: QcRouting });
QcRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](QcRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


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
/* harmony import */ var _modals_move_qc_with_serial_move_qc_with_serial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/move-qc-with-serial/move-qc-with-serial.component */ 7943);
/* harmony import */ var _modals_move_qc_with_protocol_move_qc_with_protocol_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/move-qc-with-protocol/move-qc-with-protocol.component */ 74804);
/* harmony import */ var _modals_found_product_in_qc_found_product_in_qc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/found-product-in-qc/found-product-in-qc.component */ 68272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







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
    serializedControlProduct(product, currentCount, count, type, foundSerialId = null) {
        return this.dialog
            .open(_modals_move_qc_with_serial_move_qc_with_serial_component__WEBPACK_IMPORTED_MODULE_2__.MoveQcWithSerialComponent, {
            width: '60rem',
            data: { product, currentCount, count, type, foundSerialId },
            disableClose: true,
            autoFocus: false
        })
            .afterClosed()
            .pipe();
    }
    withProtocolControlProduct(product, currentCount, count, type, foundSerialId = null) {
        return this.dialog
            .open(_modals_move_qc_with_protocol_move_qc_with_protocol_component__WEBPACK_IMPORTED_MODULE_3__.MoveQcWithProtocolComponent, {
            width: '60rem',
            data: { product, currentCount, count, type, foundSerialId },
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
    foundProductInList(nomenclature) {
        return this.dialog
            .open(_modals_found_product_in_qc_found_product_in_qc_component__WEBPACK_IMPORTED_MODULE_4__.FoundProductInQcComponent, {
            width: '50rem',
            data: { nomenclature },
            disableClose: false,
            autoFocus: false
        })
            .afterClosed()
            .pipe();
    }
}
QcService.ɵfac = function QcService_Factory(t) { return new (t || QcService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
QcService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: QcService, factory: QcService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_qc_qc_module_ts.js.map