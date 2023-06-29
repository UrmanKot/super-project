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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ 17485);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r3.isLoadingProducts || ctx_r3.selectedInvoiceProducts.length === 0 || ctx_r3.selectedInvoiceProducts.length > 1);
  }
}

function QcInvoiceComponent_ng_template_22_b_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_22_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, QcInvoiceComponent_ng_template_22_span_21_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, QcInvoiceComponent_ng_template_22_span_22_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, QcInvoiceComponent_ng_template_22_span_23_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r22 = ctx.$implicit;
    const i_r23 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", product_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", product_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r22.rma_comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.current_technology == null ? null : product_r22.current_technology.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.nomenclature.category ? product_r22.nomenclature.category == null ? null : product_r22.nomenclature.category.unit_of_measure == null ? null : product_r22.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r22.totalQuantity, " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 51);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcInvoiceComponent_ng_template_23_i_2_Template, 1, 0, "i", 50);
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
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_24_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
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
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 53)(1, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_div_25_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th", 55);
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
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, QcInvoiceComponent_ng_template_33_p_1_Template, 2, 0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_33_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.onQualityControlTechnicalEquipment());
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "PARTLY PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "NOT PASSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function QcInvoiceComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 40)(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td", 55);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, QcInvoiceComponent_ng_template_34_span_16_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, QcInvoiceComponent_ng_template_34_span_17_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, QcInvoiceComponent_ng_template_34_span_18_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r37 = ctx.$implicit;
    const i_r38 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pSelectableRow", product_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r37.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r37.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r37.nomenclature.category ? product_r37.nomenclature.category.unit_of_measure.symbol : "Pcs", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r37.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r37.passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r37.not_passed_quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r37.quality_control == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r37.quality_control == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r37.quality_control == 0);
  }
}

function QcInvoiceComponent_ng_template_35_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 51);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, QcInvoiceComponent_ng_template_35_i_2_Template, 1, 0, "i", 50);
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
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_36_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45);
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
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 53)(1, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_div_37_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
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
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function QcInvoiceComponent_ng_template_38_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r48.goToOrder());
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
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "pek-qr-code-scanner", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scanned", function QcInvoiceComponent_pek_qr_code_scanner_40_Template_pek_qr_code_scanner_scanned_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r50.onScanned($event));
    })("cancel", function QcInvoiceComponent_pek_qr_code_scanner_40_Template_pek_qr_code_scanner_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r52.onCancelScanned());
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
  }

  getInvoiceProducts() {
    this.invoiceProducts = [];
    this.selectedInvoiceProducts = [];
    this.isLoadingProducts = true;
    this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(products => {
      products.forEach(product => {
        const technologyId = product.current_technology?.id;
        const nomenclatureId = product.nomenclature.id;
        const rmaStatus = product.rma_status;
        const existing = this.invoiceProducts.find(el => el.nomenclature.id === nomenclatureId && el.rma_status === rmaStatus && el.current_technology?.id === technologyId);

        if (existing) {
          existing.totalQuantity = existing.totalQuantity += product.quantity;
          existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity;
          existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += product.not_passed_quantity;
          existing.totalSerialNumbers.push(...product.serial_numbers);
          existing.invoiceProducts.push(product);
        } else {
          product.invoiceProducts = [(0,deep_copy_ts__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(product)];
          product.totalQuantity = product.quantity;
          product.totalQuantityPassed = product.passed_quantity;
          product.totalQuantityNotPassed = product.not_passed_quantity;
          product.totalSerialNumbers = [...product.serial_numbers];
          this.invoiceProducts.push(product);
        }
      });
      this.invoiceProducts.forEach(product => {
        if (product.totalQuantityPassed === product.totalQuantity) {
          product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PASSED.toString();
        } else if (product.totalQuantityNotPassed === product.totalQuantity) {
          product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.NOT_PASSED.toString();
        } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
          product.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PARTLY_PASSED.toString();
        }
      });
      this.invoiceProducts = [...this.invoiceProducts];
      this.invoiceProducts.sort((a, b) => b.rma_comment.localeCompare(a.rma_comment));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.isLoadingProducts = false)).subscribe();
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
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [4, "ngIf", "ngIfElse"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print Album", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-camera", "label", "Scan QR Codes", 1, "mr-2", "p-button-icon", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-qrcode", "label", "Generate QR Codes", 1, "mr-2", "p-button-icon", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete Products", 1, "p-button-icon", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Cancellation", 1, "p-button-icon", "p-button-danger", "mr-2", 3, "loading", "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Complete", 1, "p-button-icon", "p-button-success", 3, "loading", "disabled", "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["scrollHeight", "calc(100vh - 19rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "mt-4", "mb-4"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "value", "selection", "selectionChange"], ["st", ""], ["orderLink", ""], [3, "scanned", "cancel", 4, "ngIf"], [2, "width", "3%"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "17%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "10%"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-images", "label", "Show Images", 1, "p-button-icon", "ml-auto", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "p-button-icon", 3, "disabled", "click"], [1, "subtitle"], [3, "pSelectableRow"], [3, "value"], [4, "ngIf"], ["class", "badge badge_success", 4, "ngIf"], ["class", "badge badge_warning", 4, "ngIf"], ["class", "badge badge_danger", 4, "ngIf"], [1, "badge", "badge_success"], [1, "badge", "badge_warning"], [1, "badge", "badge_danger"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], [1, "index-header", "text-center", 2, "width", "8%"], [2, "width", "32%"], ["pButton", "", "type", "button", "icon", "pi pi-angle-double-right", "label", "Quality Control", 1, "ml-auto", "p-button-icon", 3, "disabled", "click"], [1, "text-center", 2, "width", "8%"], [1, "order-link", 3, "click"], [3, "scanned", "cancel"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, QcInvoiceComponent_ng_template_22_Template, 24, 14, "ng-template", 19);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_18__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_20__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_20__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_20__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_20__.TableHeaderCheckbox, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_10__.ModuleIconComponent, _qr_code_components_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_11__.QrCodeScannerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../procurement/services/invoice.service */ 73529);
/* harmony import */ var _procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../procurement/services/order.service */ 37593);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 32547);

















function QcListComponent_ng_container_22_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the Production Lists Procurement or Outsourcing Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a2) { return ["../", "invoice", a2]; };
function QcListComponent_ng_container_22_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_22_ng_template_4_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.onSelectInvoiceType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.onSelectInvoiceType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.selectedInvoiceItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r7.selectedInvoiceItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, ctx_r7.selectedInvoiceItem == null ? null : ctx_r7.selectedInvoiceItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.invoicesViewType === "list");
} }
function QcListComponent_ng_container_22_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "QC Closed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_22_ng_template_5_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.showClosedInvoices);
} }
function QcListComponent_ng_container_22_ng_template_6_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r18.order == null ? null : invoice_r18.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_22_ng_template_6_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r18.root_production_plans[0].list_product.nomenclature.code, " ~", invoice_r18.root_production_plans[0].list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_22_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 37)(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_22_ng_template_6_b_6_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_22_ng_template_6_td_7_Template, 3, 4, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, QcListComponent_ng_container_22_ng_template_6_ng_container_18_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r18 = ctx.$implicit;
    const i_r19 = ctx.rowIndex;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", invoice_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r19 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 11, (invoice_r18.order == null ? null : invoice_r18.order.qc_started_date) ? invoice_r18.order == null ? null : invoice_r18.order.qc_started_date : invoice_r18.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.rma_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r18.self_serial_number, " ", invoice_r18.self_proforma_serial_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r18.supplier == null ? null : invoice_r18.supplier.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r18.order == null ? null : invoice_r18.order.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 14, invoice_r18.items_reception_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r18.root_production_plans.length > 0);
} }
function QcListComponent_ng_container_22_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 40);
} }
function QcListComponent_ng_container_22_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, QcListComponent_ng_container_22_ng_template_7_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_22_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r10.isLoadingInvoices);
} }
function QcListComponent_ng_container_22_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r6.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_22_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_22_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r6.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16)(2, "p-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_22_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.selectedInvoiceItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_22_ng_template_4_Template, 5, 7, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_22_ng_template_5_Template, 16, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_22_ng_template_6_Template, 19, 17, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_22_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, QcListComponent_ng_container_22_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, QcListComponent_ng_container_22_div_9_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r0.invoicesList.length > 0)("rows", 10)("selection", ctx_r0.selectedInvoiceItem)("value", ctx_r0.invoicesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r6.paginator && !ctx_r0.isLoadingInvoices && ctx_r0.invoicesList.length > 0);
} }
function QcListComponent_ng_container_23_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " QC Started Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_4_th_3_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r34.showClosedInvoices);
} }
function QcListComponent_ng_container_23_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the Production Lists Procurement or Outsourcing Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_23_ng_template_5_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.expandCollapseAllInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.expandCollapseAllInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.onSelectInvoiceType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_23_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r44.onSelectInvoiceType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r35.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r35.selectedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, (ctx_r35.selectedInvoiceNode == null ? null : ctx_r35.selectedInvoiceNode.data.order) ? ctx_r35.selectedInvoiceNode == null ? null : ctx_r35.selectedInvoiceNode.data.order.id : ctx_r35.selectedInvoiceNode == null ? null : ctx_r35.selectedInvoiceNode.data.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r35.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r35.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r35.invoicesViewType === "hierarchy");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r46.description, ")");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r46.categories, ")");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_i_4_Template, 2, 1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("category-name", invoice_r46.level === 0 && invoice_r46.hideFromTable !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r46.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level < 4 && invoice_r46.level > 0);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_b_3_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, (invoice_r46.order == null ? null : invoice_r46.order.order == null ? null : invoice_r46.order.order.qc_started_date) ? invoice_r46.order == null ? null : invoice_r46.order.order == null ? null : invoice_r46.order.order.qc_started_date : invoice_r46.order.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.order.rma_products_count);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r46.order == null ? null : invoice_r46.order.order == null ? null : invoice_r46.order.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r46.self_serial_number, " ", invoice_r46.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-warning", invoice_r46.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r46.order.self_serial_number, " ", invoice_r46.order.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r46.order == null ? null : invoice_r46.order.order == null ? null : invoice_r46.order.order.id, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r46.supplier == null ? null : invoice_r46.supplier.name, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r46.order.supplier == null ? null : invoice_r46.order.supplier.name, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r46.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r46.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", root_list_r79.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_div_1_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", invoice_r46.unique_root_production_plans);
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r46.plan.list_product.nomenclature.code, "~", invoice_r46.plan.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r46.plan.required_quantity, ")");
} }
function QcListComponent_ng_container_23_ng_template_6_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 51)(1, "td", 36)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_4_Template, 5, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_23_ng_template_6_tr_0_span_5_Template, 4, 5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_23_ng_template_6_tr_0_td_6_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_8_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, QcListComponent_ng_container_23_ng_template_6_tr_0_span_9_Template, 2, 4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, QcListComponent_ng_container_23_ng_template_6_tr_0_span_11_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_13_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, QcListComponent_ng_container_23_ng_template_6_tr_0_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_16_Template, 3, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, QcListComponent_ng_container_23_ng_template_6_tr_0_span_17_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, QcListComponent_ng_container_23_ng_template_6_tr_0_ng_container_19_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, QcListComponent_ng_container_23_ng_template_6_tr_0_span_20_Template, 4, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const invoiceNode_r45 = ctx_r82.$implicit;
    const invoice_r46 = ctx_r82.rowData;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", invoiceNode_r45)("ttSelectableRowDisabled", !invoice_r46.order && !invoice_r46.level || invoice_r46.level < 4)("ttSelectableRow", invoiceNode_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-center", invoice_r46.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", invoiceNode_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !invoice_r46.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r48.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r46.level === 4 && invoice_r46.plan);
} }
function QcListComponent_ng_container_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, QcListComponent_ng_container_23_ng_template_6_tr_0_Template, 21, 18, "tr", 50);
} if (rf & 2) {
    const invoice_r46 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !invoice_r46.hideFromTable);
} }
function QcListComponent_ng_container_23_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 40);
} }
function QcListComponent_ng_container_23_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_23_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, QcListComponent_ng_container_23_ng_template_7_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_23_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r37.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r37.isLoadingInvoices);
} }
function QcListComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16)(2, "p-treeTable", 43, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_23_Template_p_treeTable_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.selectedInvoiceNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_23_ng_template_4_Template, 14, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_23_ng_template_5_Template, 7, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_23_ng_template_6_Template, 1, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_23_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.invoiceManufacturedTree)("selection", ctx_r1.selectedInvoiceNode)("scrollable", true);
} }
function QcListComponent_ng_container_25_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u0421hoose the Own Production Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function (a2) { return ["../", "order", a2]; };
function QcListComponent_ng_container_25_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_25_ng_template_4_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r95.onSelectOrderType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r97.onSelectOrderType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r88.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r88.selectedOrderItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, ctx_r88.selectedOrderItem == null ? null : ctx_r88.selectedOrderItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r88.invoicesOrderType === "list");
} }
function QcListComponent_ng_container_25_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " QC Started Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_25_ng_template_5_th_5_Template, 2, 0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r89.showClosedOrders);
} }
function QcListComponent_ng_container_25_ng_template_6_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_ng_template_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_plan_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", root_plan_r103.list_product.nomenclature.code, "~", root_plan_r103.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_25_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 37)(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_25_ng_template_6_b_6_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, QcListComponent_ng_container_25_ng_template_6_div_13_Template, 2, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r99 = ctx.$implicit;
    const i_r100 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", order_r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r100 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 7, (order_r99 == null ? null : order_r99.qc_started_date) ? order_r99 == null ? null : order_r99.qc_started_date : order_r99 == null ? null : order_r99.created, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r99.contains_rma_invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r99.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 10, order_r99.items_reception_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", order_r99.unique_root_production_plans);
} }
function QcListComponent_ng_container_25_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 40);
} }
function QcListComponent_ng_container_25_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, QcListComponent_ng_container_25_ng_template_7_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_25_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r91.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r91.isLoadingOrders);
} }
function QcListComponent_ng_container_25_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r87.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_25_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_25_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r109); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r87.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16)(2, "p-table", 17, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_25_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r110.selectedOrderItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_25_ng_template_4_Template, 5, 7, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_25_ng_template_5_Template, 12, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_25_ng_template_6_Template, 14, 13, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_25_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, QcListComponent_ng_container_25_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, QcListComponent_ng_container_25_div_9_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r2.ordersList.length > 0)("rows", 10)("selection", ctx_r2.selectedOrderItem)("value", ctx_r2.ordersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r87.paginator && !ctx_r2.isLoadingOrders && ctx_r2.ordersList.length > 0);
} }
function QcListComponent_ng_container_26_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "QC Closed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_26_ng_template_4_th_3_Template, 2, 0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r113.showClosedOrders);
} }
function QcListComponent_ng_container_26_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose Own Production Item to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_26_ng_template_5_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r119.expandCollapseAllOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r121.expandCollapseAllOrders(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r122.onSelectOrderType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_26_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r123.onSelectOrderType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r114.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r114.selectedOrderNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, ctx_r114.selectedOrderNode == null ? null : ctx_r114.selectedOrderNode.data.order.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r114.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r114.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r114.invoicesOrderType === "hierarchy");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", rowData_r125.categories, ")");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_b_3_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, rowData_r125.order.qc_started_date ? rowData_r125.order.qc_started_date : rowData_r125.order.created, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.order.contains_rma_invoices);
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, rowData_r125.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.order);
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-warning", rowData_r125.order.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r125.order.id, " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, rowData_r125.order.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", rowData_r125.plan.list_product.nomenclature.code, "~", rowData_r125.plan.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_26_ng_template_6_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 65)(1, "td", 36)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_26_ng_template_6_tr_0_i_6_Template, 2, 1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_26_ng_template_6_tr_0_span_7_Template, 4, 5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, QcListComponent_ng_container_26_ng_template_6_tr_0_td_8_Template, 2, 1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, QcListComponent_ng_container_26_ng_template_6_tr_0_span_10_Template, 2, 3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, QcListComponent_ng_container_26_ng_template_6_tr_0_span_12_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, QcListComponent_ng_container_26_ng_template_6_tr_0_span_14_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rowNode_r124 = ctx_r142.$implicit;
    const rowData_r125 = ctx_r142.rowData;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", rowNode_r124)("ttSelectableRow", rowNode_r124)("ttSelectableRowDisabled", rowData_r125.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", rowNode_r124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("category-name", rowData_r125.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r125.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.level < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r126.showClosedOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rowData_r125.order && rowData_r125.plan);
} }
function QcListComponent_ng_container_26_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, QcListComponent_ng_container_26_ng_template_6_tr_0_Template, 15, 13, "tr", 64);
} if (rf & 2) {
    const rowData_r125 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rowData_r125.hideFromTable);
} }
function QcListComponent_ng_container_26_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 40);
} }
function QcListComponent_ng_container_26_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_26_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, QcListComponent_ng_container_26_ng_template_7_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_26_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r116.isLoadingOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r116.isLoadingOrders);
} }
function QcListComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16)(2, "p-treeTable", 43, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_26_Template_p_treeTable_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r146); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r145.selectedOrderNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_26_ng_template_4_Template, 10, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_26_ng_template_5_Template, 7, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_26_ng_template_6_Template, 1, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_26_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.ownProductionCategorizedList)("selection", ctx_r3.selectedOrderNode)("scrollable", true);
} }
function QcListComponent_ng_container_28_ng_template_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the General Procurement Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_28_ng_template_4_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r155.onSelectPurchaseType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_ng_template_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r156); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r157.onSelectPurchaseType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r148.selectedInvoicePurchaseItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r148.selectedInvoicePurchaseItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, ctx_r148.selectedInvoicePurchaseItem == null ? null : ctx_r148.selectedInvoicePurchaseItem.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r148.invoicesPurchasedType === "list");
} }
function QcListComponent_ng_container_28_ng_template_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "QC Closed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_28_ng_template_5_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r149.showClosedInvoices);
} }
function QcListComponent_ng_container_28_ng_template_6_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r159.order == null ? null : invoice_r159.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_28_ng_template_6_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r159.root_production_plans[0].list_product.nomenclature.code, " ~", invoice_r159.root_production_plans[0].list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_28_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 37)(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_28_ng_template_6_b_6_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_28_ng_template_6_td_7_Template, 3, 4, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, QcListComponent_ng_container_28_ng_template_6_ng_container_18_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r159 = ctx.$implicit;
    const i_r160 = ctx.rowIndex;
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", invoice_r159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r160 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 11, (invoice_r159.order == null ? null : invoice_r159.order.qc_started_date) ? invoice_r159.order == null ? null : invoice_r159.order.qc_wh_started_date : invoice_r159.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r159.rma_products_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r150.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r159.self_serial_number, " ", invoice_r159.self_proforma_serial_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r159.supplier == null ? null : invoice_r159.supplier.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r159.order == null ? null : invoice_r159.order.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 14, invoice_r159.items_reception_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r159.root_production_plans.length > 0);
} }
function QcListComponent_ng_container_28_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 40);
} }
function QcListComponent_ng_container_28_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, QcListComponent_ng_container_28_ng_template_7_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_28_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r151.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r151.isLoadingInvoices);
} }
function QcListComponent_ng_container_28_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_ng_template_8_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r169); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r147.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_28_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_28_div_9_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r171); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r147.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function QcListComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16)(2, "p-table", 17, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_28_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r173); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.selectedInvoicePurchaseItem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_28_ng_template_4_Template, 5, 7, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_28_ng_template_5_Template, 16, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_28_ng_template_6_Template, 19, 17, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_28_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, QcListComponent_ng_container_28_ng_template_8_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, QcListComponent_ng_container_28_div_9_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollable", true)("paginator", ctx_r4.purchasedInvoicesList.length > 0)("rows", 10)("selection", ctx_r4.selectedInvoicePurchaseItem)("value", ctx_r4.purchasedInvoicesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r147.paginator && !ctx_r4.isLoadingInvoices && ctx_r4.purchasedInvoicesList.length > 0);
} }
function QcListComponent_ng_container_29_ng_template_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " QC Closed Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "QC Started Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_29_ng_template_4_th_3_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Items Reception Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Root List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r175.showClosedInvoices);
} }
function QcListComponent_ng_container_29_ng_template_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Choose the General Procurement Invoice to view Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_29_ng_template_5_p_1_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r182); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r181.expandCollapsePurchasedInvoices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r182); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r183.expandCollapsePurchasedInvoices(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r182); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r184.onSelectPurchaseType("list")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QcListComponent_ng_container_29_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r182); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r185.onSelectPurchaseType("hierarchy")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r176.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r176.selectedPurchasedInvoiceNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, (ctx_r176.selectedPurchasedInvoiceNode == null ? null : ctx_r176.selectedPurchasedInvoiceNode.data.invoice) ? ctx_r176.selectedPurchasedInvoiceNode == null ? null : ctx_r176.selectedPurchasedInvoiceNode.data.invoice.id : ctx_r176.selectedPurchasedInvoiceNode == null ? null : ctx_r176.selectedPurchasedInvoiceNode.data.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r176.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r176.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r176.invoicesPurchasedType === "hierarchy");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r187.description, ")");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r187.categories, ")");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_29_ng_template_6_ng_container_4_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_6_ng_container_4_i_4_Template, 2, 1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("category-name", !invoice_r187.level && invoice_r187.level !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", invoice_r187.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.level < 4 && invoice_r187.level > 0);
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_5_b_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "(RMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_6_ng_container_5_b_4_Template, 2, 0, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 2, invoice_r187.order.qc_started_date ? invoice_r187.order.qc_started_date : invoice_r187.system_creation_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order.rma_products_count);
} }
function QcListComponent_ng_container_29_ng_template_6_td_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r187.order.qc_closed_date, "dd/MM/yyyy HH:mm"), " ");
} }
function QcListComponent_ng_container_29_ng_template_6_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_29_ng_template_6_td_6_span_1_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r187.self_serial_number, " ", invoice_r187.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-warning", invoice_r187.invoice.unique_root_production_plans.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r187.invoice.self_serial_number, " ", invoice_r187.invoice.self_proforma_serial_number, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r187.order.id, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r187.supplier == null ? null : invoice_r187.supplier.name, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r187.invoice.supplier == null ? null : invoice_r187.invoice.supplier.name, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r187.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_29_ng_template_6_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, invoice_r187.invoice.items_reception_date, "dd/MM/yyyy"), " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const root_list_r219 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", root_list_r219.list_product.nomenclature.name, " ");
} }
function QcListComponent_ng_container_29_ng_template_6_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QcListComponent_ng_container_29_ng_template_6_ng_container_19_div_1_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", invoice_r187.unique_root_production_plans);
} }
function QcListComponent_ng_container_29_ng_template_6_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoice_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", invoice_r187.plan.list_product.nomenclature.code, "~", invoice_r187.plan.list_product.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", invoice_r187.plan.required_quantity, ")");
} }
function QcListComponent_ng_container_29_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 51)(1, "td", 36)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-treeTableToggler", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_6_ng_container_4_Template, 5, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_29_ng_template_6_ng_container_5_Template, 5, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_29_ng_template_6_td_6_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, QcListComponent_ng_container_29_ng_template_6_ng_container_8_Template, 2, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, QcListComponent_ng_container_29_ng_template_6_span_9_Template, 2, 4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, QcListComponent_ng_container_29_ng_template_6_ng_container_11_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, QcListComponent_ng_container_29_ng_template_6_ng_container_13_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, QcListComponent_ng_container_29_ng_template_6_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, QcListComponent_ng_container_29_ng_template_6_ng_container_16_Template, 3, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, QcListComponent_ng_container_29_ng_template_6_span_17_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, QcListComponent_ng_container_29_ng_template_6_ng_container_19_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, QcListComponent_ng_container_29_ng_template_6_span_20_Template, 4, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const invoiceNode_r186 = ctx.$implicit;
    const invoice_r187 = ctx.rowData;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ttRow", invoiceNode_r186)("ttSelectableRowDisabled", !invoice_r187.order && !invoice_r187.level || invoice_r187.level < 4)("ttSelectableRow", invoiceNode_r186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-center", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowNode", invoiceNode_r186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r177.showClosedInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.level === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r187.level === 4 && invoice_r187.plan);
} }
function QcListComponent_ng_container_29_ng_template_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 40);
} }
function QcListComponent_ng_container_29_ng_template_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QcListComponent_ng_container_29_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, QcListComponent_ng_container_29_ng_template_7_i_2_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, QcListComponent_ng_container_29_ng_template_7_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r178.isLoadingInvoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r178.isLoadingInvoices);
} }
function QcListComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16)(2, "p-treeTable", 43, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QcListComponent_ng_container_29_Template_p_treeTable_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r225); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r224.selectedPurchasedInvoiceNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, QcListComponent_ng_container_29_ng_template_4_Template, 14, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, QcListComponent_ng_container_29_ng_template_5_Template, 7, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QcListComponent_ng_container_29_ng_template_6_Template, 21, 18, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QcListComponent_ng_container_29_ng_template_7_Template, 4, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r5.invoicePurchasedTree)("selection", ctx_r5.selectedPurchasedInvoiceNode)("scrollable", true);
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
        this.destroyInvoices$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.destroyOrders$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
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
        this.productStructureCategoryService.get().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyInvoices$)).subscribe((categories) => {
            if (this.categories) {
                this.mapExpansion();
            }
            this.createTree(categories);
        });
    }
    getInvoices() {
        this.invoiceService.get(this.invoicesQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyInvoices$)).subscribe(invoices => {
            this.invoices = invoices;
            this.makeUniqueProductionPlansInvoice(),
                this.resetProductPaymentTree(),
                this.resetInvoicesList(),
                this.isLoadingInvoices = false;
        });
    }
    getServices() {
        this.orderService.get(this.ordersQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyOrders$)).subscribe(orders => {
            this.orders = orders;
            this.makeUniqueProductionPlans(),
                this.fillOwnProductionWithData(),
                this.resetOrdersList(),
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
        this.ownProductionCategorizedList = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
    }
    fillOwnProductionWithData() {
        this.fillCategorizedTree();
    }
    fillCategorizedTree() {
        this.ownProductionCategorizedList = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__(this.categories);
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
QcListComponent.ɵfac = function QcListComponent_Factory(t) { return new (t || QcListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_procurement_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_procurement_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_3__.ProductStructureCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_4__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder)); };
QcListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: QcListComponent, selectors: [["pek-qc-list"]], decls: 30, vars: 17, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__tabs"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["formControlName", "qc_closed_date_after", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], ["formControlName", "qc_closed_date_before", "dateFormat", "dd/mm/yy", "dataType", "date", 3, "readonlyInput", "showButtonBar", "ngModelChange"], [1, "custom-tabs"], [3, "header", "selected"], [4, "ngIf"], [3, "header"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 18.8rem)", "dataKey", "id", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", "target", "_blank", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", 3, "click"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [1, "text-center", 2, "width", "20%"], ["style", "width: 20%", "class", "text-center", 4, "ngIf"], [1, "text-center", 2, "width", "10%"], [1, "text-center", 2, "width", "15%"], [2, "width", "20%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 22rem)", 3, "value", "selection", "scrollable", "selectionChange"], [2, "width", "20%", "padding-left", "19px"], ["target", "_blank", "pButton", "", "type", "button", "icon", "pi pi-bars", "label", "Items", 1, "ml-auto", "mr-2", 3, "routerLink"], ["pButton", "", "type", "button", "label", "Expand All", "icon", "pi pi-angle-down", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Collapse All", "icon", "pi pi-angle-up", 1, "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "List", "icon", "pi pi-list", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Hierarchy", "icon", "pi pi-table", 3, "disabled", "click"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow", 4, "ngIf"], [3, "ttRow", "ttSelectableRowDisabled", "ttSelectableRow"], [1, "table-toggle"], [3, "rowNode"], [3, "text-warning", 4, "ngIf"], ["style", "font-style: normal", 4, "ngIf"], [2, "font-style", "normal"], [4, "ngFor", "ngForOf"], ["ot", ""], [1, "text-center", 2, "width", "25%"], ["style", "width: 25%", "class", "text-center", 4, "ngIf"], [1, "text-center"], ["style", "width: 20%;", "class", "text-center", 4, "ngIf"], [1, "text-center", 2, "width", "45%"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled", 4, "ngIf"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"], ["pt", ""]], template: function QcListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "QC Closed Date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function QcListComponent_Template_p_calendar_ngModelChange_14_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "QC Closed Date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p-calendar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function QcListComponent_Template_p_calendar_ngModelChange_19_listener() { return ctx.searchItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p-tabView", 12)(21, "p-tabPanel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, QcListComponent_ng_container_22_Template, 10, 6, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, QcListComponent_ng_container_23_Template, 8, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p-tabPanel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, QcListComponent_ng_container_25_Template, 10, 6, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, QcListComponent_ng_container_26_Template, 8, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p-tabPanel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, QcListComponent_ng_container_28_Template, 10, 6, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, QcListComponent_ng_container_29_Template, 8, 3, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "quality-control")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("header", "Production Lists Procurement and Outsourcing Invoices")("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.invoicesViewType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.invoicesViewType === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("header", "Own Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.invoicesOrderType === "hierarchy");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("header", "General Procurement Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.invoicesPurchasedType === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.invoicesPurchasedType === "hierarchy");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TTSelectableRow, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_5__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabPanel, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoicWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG59XHJcblxyXG4iXX0= */"] });


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
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 27, ctx.albumService.loading$))("disabled", ctx.selectedOrderProducts.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.isGenerating)("disabled", ctx.selectedOrderProducts.length === 0);
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
        if (serialObject && serialObject?.type_with_number) {
            this.form.get('serial').patchValue(serialObject?.type_with_number);
        }
        else {
            this.form.get('serial').patchValue(serialObject?.id);
        }
        if (serialObject) {
            this.form.get('serial_number').patchValue(serialObject.id);
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
    }
    saveSerialInfo() {
        const serialObject = this.serialNumbers[this.data.currentCount - 1];
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
                    if (updateProduct.passed_quantity === prod.quantity) {
                        updateProduct.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PASSED;
                    }
                    else if (updateProduct.not_passed_quantity === prod.quantity) {
                        updateProduct.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.NOT_PASSED;
                    }
                    else if (updateProduct.not_passed_quantity + updateProduct.passed_quantity === prod.quantity) {
                        updateProduct.quality_control = _procurement_models_invoice_product__WEBPACK_IMPORTED_MODULE_0__.EInvoiceProductQualityControl.PARTLY_PASSED;
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
            const dataToSend = {
                invoice_products_ids: this.data.entity.invoiceProducts.map(prod => prod.id),
                passed_quantity: this.form.get('passed_quantity').value,
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
        return +this.form.get('passed_quantity').value + +this.form.get('not_passed_quantity').value !== +this.quantity;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
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
/* harmony import */ var _modals_move_qc_with_serial_move_qc_with_serial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/move-qc-with-serial/move-qc-with-serial.component */ 7943);
/* harmony import */ var _modals_move_qc_with_protocol_move_qc_with_protocol_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/move-qc-with-protocol/move-qc-with-protocol.component */ 74804);
/* harmony import */ var _qr_code_qr_code_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../qr-code/qr-code.module */ 77292);
/* harmony import */ var _modals_found_product_in_qc_found_product_in_qc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/found-product-in-qc/found-product-in-qc.component */ 68272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);


















class QcModule {
}
QcModule.ɵfac = function QcModule_Factory(t) { return new (t || QcModule)(); };
QcModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: QcModule });
QcModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule,
        _qr_code_qr_code_module__WEBPACK_IMPORTED_MODULE_14__.QrCodeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](QcModule, { declarations: [_components_qc_list_qc_list_component__WEBPACK_IMPORTED_MODULE_1__.QcListComponent,
        _components_qc_layout_qc_layout_component__WEBPACK_IMPORTED_MODULE_2__.QcLayoutComponent,
        _components_qc_invoice_qc_invoice_component__WEBPACK_IMPORTED_MODULE_5__.QcInvoiceComponent,
        _components_qc_order_qc_order_component__WEBPACK_IMPORTED_MODULE_6__.QcOrderComponent,
        _modals_quality_control_modal_quality_control_modal_component__WEBPACK_IMPORTED_MODULE_7__.QualityControlModalComponent,
        _components_protocols_protocols_component__WEBPACK_IMPORTED_MODULE_8__.ProtocolsComponent,
        _modals_create_edit_protocol_create_edit_protocol_component__WEBPACK_IMPORTED_MODULE_9__.CreateEditProtocolComponent,
        _modals_nomenclature_protocol_picker_nomenclature_protocol_picker_component__WEBPACK_IMPORTED_MODULE_10__.NomenclatureProtocolPickerComponent,
        _modals_quality_control_technical_equipment_quality_control_technical_equipment_component__WEBPACK_IMPORTED_MODULE_11__.QualityControlTechnicalEquipmentComponent,
        _modals_move_qc_with_serial_move_qc_with_serial_component__WEBPACK_IMPORTED_MODULE_12__.MoveQcWithSerialComponent,
        _modals_move_qc_with_protocol_move_qc_with_protocol_component__WEBPACK_IMPORTED_MODULE_13__.MoveQcWithProtocolComponent,
        _modals_found_product_in_qc_found_product_in_qc_component__WEBPACK_IMPORTED_MODULE_15__.FoundProductInQcComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _qc_routing__WEBPACK_IMPORTED_MODULE_0__.QcRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutModule,
        _qr_code_qr_code_module__WEBPACK_IMPORTED_MODULE_14__.QrCodeModule] }); })();


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