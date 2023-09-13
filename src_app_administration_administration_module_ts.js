"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_administration_administration_module_ts"],{

/***/ 25283:
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationModule": () => (/* binding */ AdministrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _administration_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administration.routing */ 89225);
/* harmony import */ var _components_administration_user_list_administration_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/administration-user-list/administration-user-list.component */ 22740);
/* harmony import */ var _components_administration_layout_administration_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/administration-layout/administration-layout.component */ 25800);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_administration_roles_administration_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/administration-roles/administration-roles.component */ 68387);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _modals_create_edit_user_create_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/create-edit-user/create-edit-user.component */ 39277);
/* harmony import */ var _modals_edit_user_roles_edit_user_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/edit-user-roles/edit-user-roles.component */ 15080);
/* harmony import */ var _business_trips_business_trips_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../business-trips/business-trips.module */ 49162);
/* harmony import */ var _crm_crm_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crm/crm.module */ 42535);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/treeselect */ 64016);
/* harmony import */ var _modals_create_edit_role_create_edit_role_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/create-edit-role/create-edit-role.component */ 82129);
/* harmony import */ var _modals_edit_role_permissions_edit_role_permissions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/edit-role-permissions/edit-role-permissions.component */ 50688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
















class AdministrationModule {
}
AdministrationModule.ɵfac = function AdministrationModule_Factory(t) { return new (t || AdministrationModule)(); };
AdministrationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AdministrationModule });
AdministrationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _administration_routing__WEBPACK_IMPORTED_MODULE_0__.AdministrationRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _business_trips_business_trips_module__WEBPACK_IMPORTED_MODULE_8__.BusinessTripsModule,
        _crm_crm_module__WEBPACK_IMPORTED_MODULE_9__.CrmModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_15__.TreeSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdministrationModule, { declarations: [_components_administration_user_list_administration_user_list_component__WEBPACK_IMPORTED_MODULE_1__.AdministrationUserListComponent,
        _components_administration_layout_administration_layout_component__WEBPACK_IMPORTED_MODULE_2__.AdministrationLayoutComponent,
        _components_administration_roles_administration_roles_component__WEBPACK_IMPORTED_MODULE_4__.AdministrationRolesComponent,
        _modals_create_edit_user_create_edit_user_component__WEBPACK_IMPORTED_MODULE_6__.CreateEditUserComponent,
        _modals_edit_user_roles_edit_user_roles_component__WEBPACK_IMPORTED_MODULE_7__.EditUserRolesComponent,
        _modals_create_edit_role_create_edit_role_component__WEBPACK_IMPORTED_MODULE_10__.CreateEditRoleComponent,
        _modals_edit_role_permissions_edit_role_permissions_component__WEBPACK_IMPORTED_MODULE_11__.EditRolePermissionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _administration_routing__WEBPACK_IMPORTED_MODULE_0__.AdministrationRouting,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _business_trips_business_trips_module__WEBPACK_IMPORTED_MODULE_8__.BusinessTripsModule,
        _crm_crm_module__WEBPACK_IMPORTED_MODULE_9__.CrmModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_15__.TreeSelectModule] }); })();


/***/ }),

/***/ 89225:
/*!**********************************************************!*\
  !*** ./src/app/administration/administration.routing.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationRouting": () => (/* binding */ AdministrationRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_administration_user_list_administration_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/administration-user-list/administration-user-list.component */ 22740);
/* harmony import */ var _components_administration_layout_administration_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/administration-layout/administration-layout.component */ 25800);
/* harmony import */ var _components_administration_roles_administration_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/administration-roles/administration-roles.component */ 68387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    {
        path: '',
        component: _components_administration_layout_administration_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdministrationLayoutComponent, children: [
            { path: '', redirectTo: 'user-list', pathMatch: 'full' },
            { path: 'user-list', component: _components_administration_user_list_administration_user_list_component__WEBPACK_IMPORTED_MODULE_0__.AdministrationUserListComponent },
            { path: 'roles', component: _components_administration_roles_administration_roles_component__WEBPACK_IMPORTED_MODULE_2__.AdministrationRolesComponent }
        ]
    },
];
class AdministrationRouting {
}
AdministrationRouting.ɵfac = function AdministrationRouting_Factory(t) { return new (t || AdministrationRouting)(); };
AdministrationRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdministrationRouting });
AdministrationRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdministrationRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 25800:
/*!****************************************************************************************************!*\
  !*** ./src/app/administration/components/administration-layout/administration-layout.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationLayoutComponent": () => (/* binding */ AdministrationLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/product-structure-category.service */ 96083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);




class AdministrationLayoutComponent {
    constructor(productStructureCategoryService) {
        this.productStructureCategoryService = productStructureCategoryService;
        this.routes = [
            { label: 'User List', commands: ['user-list'] },
            { label: 'Roles', commands: ['roles'] },
            { label: 'Sales Chain', isClicked: true },
        ];
    }
    ngOnInit() {
    }
    onEditSalesChains() {
        this.productStructureCategoryService.editSalesChains();
    }
    edit(event) {
        this.onEditSalesChains();
    }
}
AdministrationLayoutComponent.ɵfac = function AdministrationLayoutComponent_Factory(t) { return new (t || AdministrationLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_structure_services_product_structure_category_service__WEBPACK_IMPORTED_MODULE_0__.ProductStructureCategoryService)); };
AdministrationLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdministrationLayoutComponent, selectors: [["pek-administration-layout"]], decls: 2, vars: 2, consts: [[3, "module", "routes", "clickRoute"]], template: function AdministrationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pek-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clickRoute", function AdministrationLayoutComponent_Template_pek_header_clickRoute_0_listener($event) { return ctx.edit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("module", "Administration")("routes", ctx.routes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68387:
/*!**************************************************************************************************!*\
  !*** ./src/app/administration/components/administration-roles/administration-roles.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationRolesComponent": () => (/* binding */ AdministrationRolesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 35330);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/role.service */ 69138);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/paginator */ 42722);















function AdministrationRolesComponent_ng_template_13_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose the Role to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function AdministrationRolesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdministrationRolesComponent_ng_template_13_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-menubar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
  }
}

function AdministrationRolesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function AdministrationRolesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const role_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", role_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r3.currentPage - 1) * 10 + i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r8.name);
  }
}

function AdministrationRolesComponent_ng_template_16_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 26);
  }
}

function AdministrationRolesComponent_ng_template_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function AdministrationRolesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdministrationRolesComponent_ng_template_16_i_2_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AdministrationRolesComponent_ng_template_16_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
  }
}

function AdministrationRolesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "p-paginator", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function AdministrationRolesComponent_div_17_Template_p_paginator_onPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdministrationRolesComponent_div_17_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.onShowAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r5.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r5.count);
  }
}

function AdministrationRolesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdministrationRolesComponent_div_18_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onShowAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

let AdministrationRolesComponent = class AdministrationRolesComponent {
  constructor(roleService, modalService) {
    this.roleService = roleService;
    this.modalService = modalService;
    this.menuItems = [{
      label: 'Selected Role',
      items: [{
        label: 'Edit Role',
        icon: 'pi pi-pencil',
        command: () => this.editRole()
      }, {
        label: 'Edit Permissions',
        icon: 'pi pi-pencil',
        command: () => this.editPermissions()
      }, {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeRole()
      }]
    }];
    this.isLoading = true;
    this.currentPage = 1;
    this.selectedRole = null;
    this.count = 0;
    this.isShowAll = false;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.query = [];
    this.roles$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.iif)(() => !this.isShowAll, this.roleService.getForPagination(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(response => this.count = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => response.results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = false), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)([]), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)), this.roleService.getRoles(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(roles => this.count = roles.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.isLoading = false), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)([]), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)))), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this));
  }

  ngOnInit() {}

  prepareForSearch() {
    this.isLoading = true;
    this.selectedRole = null;
    this.query = [];

    if (!this.isShowAll) {
      this.query.push({
        name: 'page',
        value: this.currentPage
      });
      this.query.push({
        name: 'paginated',
        value: true
      });
    }
  }

  onShowAll(value) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  paginate(event) {
    this.currentPage = event.page + 1;
    this.search$.next();
  }

  createRole() {
    this.roleService.createEditRoleModal('create').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.search$.next())).subscribe();
  }

  editRole() {
    this.roleService.createEditRoleModal('edit', this.selectedRole).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.search$.next())).subscribe();
  }

  editPermissions() {
    this.roleService.editRolePermissions(this.selectedRole).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.search$.next())).subscribe();
  }

  removeRole() {
    this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean)).subscribe(() => {
      this.roleService.deleteRole(this.selectedRole).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.search$.next())).subscribe();
    });
  }

};

AdministrationRolesComponent.ɵfac = function AdministrationRolesComponent_Factory(t) {
  return new (t || AdministrationRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService));
};

AdministrationRolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdministrationRolesComponent,
  selectors: [["pek-administration-roles"]],
  decls: 19,
  vars: 10,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Create Role", 3, "click"], [1, "page__content"], [1, "page__card"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 27rem)", 3, "rows", "scrollable", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "95%"], [3, "pSelectableRow"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]],
  template: function AdministrationRolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Roles");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdministrationRolesComponent_Template_button_click_7_listener() {
        return ctx.createRole();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "p-table", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AdministrationRolesComponent_Template_p_table_selectionChange_10_listener($event) {
        return ctx.selectedRole = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AdministrationRolesComponent_ng_template_13_Template, 3, 4, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdministrationRolesComponent_ng_template_14_Template, 5, 0, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AdministrationRolesComponent_ng_template_15_Template, 5, 3, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AdministrationRolesComponent_ng_template_16_Template, 4, 3, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdministrationRolesComponent_div_17_Template, 5, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AdministrationRolesComponent_div_18_Template, 3, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "administration")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("scrollable", true)("selection", ctx.selectedRole)("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 8, ctx.roles$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_15__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_17__.Paginator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi1yb2xlcy5jb21wb25lbnQuc2NzcyJ9 */"]
});
AdministrationRolesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], AdministrationRolesComponent);


/***/ }),

/***/ 22740:
/*!**********************************************************************************************************!*\
  !*** ./src/app/administration/components/administration-user-list/administration-user-list.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationUserListComponent": () => (/* binding */ AdministrationUserListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 35330);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 20745);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/paginator */ 42722);

















const _c0 = ["paginator"];

function AdministrationUserListComponent_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Choose the Role to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdministrationUserListComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function AdministrationUserListComponent_ng_template_41_span_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdministrationUserListComponent_ng_template_41_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AdministrationUserListComponent_ng_template_41_span_12_span_2_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const idx_r12 = ctx.index;
    const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", group_r11.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", idx_r12 !== user_r8.groups.length - 1);
  }
}

function AdministrationUserListComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 37)(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AdministrationUserListComponent_ng_template_41_span_12_Template, 3, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const i_r9 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", user_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r3.currentPage - 1) * 10 + i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r8.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r8.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r8.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", user_r8.groups);
  }
}

function AdministrationUserListComponent_ng_template_42_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 42);
  }
}

function AdministrationUserListComponent_ng_template_42_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdministrationUserListComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AdministrationUserListComponent_ng_template_42_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AdministrationUserListComponent_ng_template_42_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
  }
}

function AdministrationUserListComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdministrationUserListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "p-paginator", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function AdministrationUserListComponent_div_44_Template_p_paginator_onPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdministrationUserListComponent_div_44_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.onShowAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("paginator-wrapper_hide", ctx_r6.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r6.count);
  }
}

function AdministrationUserListComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "p-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdministrationUserListComponent_div_45_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.onShowAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

let AdministrationUserListComponent = class AdministrationUserListComponent {
  constructor(fb, adapterService, userService, modalService) {
    this.fb = fb;
    this.adapterService = adapterService;
    this.userService = userService;
    this.modalService = modalService;
    this.searchForm = this.fb.group({
      username: [''],
      email: [''],
      first_name: [''],
      last_name: ['']
    });
    this.menuItems = [{
      label: 'Selected User',
      items: [{
        label: 'Edit User',
        icon: 'pi pi-user-edit',
        command: () => this.editUser()
      }, {
        label: 'Edit Permissions',
        icon: 'pi pi-pencil',
        command: () => this.editUserPermissions()
      }, {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeUser()
      }]
    }];
    this.currentPage = 1;
    this.queryKey = this.adapterService.generateQueryKey(this.searchForm);
    this.isLoading = true;
    this.count = 0;
    this.isStartFirstPage = false;
    this.isShowAll = false;
    this.selectedUser = null;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.query = [];
    this.users$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.prepareForSearch()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.iif)(() => !this.isShowAll, this.userService.getForPagination(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(response => this.count = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => response.results)), this.userService.get(this.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(users => this.count = users.length)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.paginateToFistPage()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.isLoading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this));
  }

  ngOnInit() {
    this.searchForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(150), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.search$.next());
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedUser = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

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

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
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

  createUser() {
    this.userService.createEditUserModal('create').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.search$.next())).subscribe();
  }

  editUser() {
    this.userService.createEditUserModal('edit', this.selectedUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.search$.next())).subscribe();
  }

  editUserPermissions() {
    this.userService.editUserRoles(this.selectedUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.search$.next())).subscribe();
  }

  removeUser() {
    this.modalService.confirm('danger').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(Boolean)).subscribe(() => {
      this.userService.deleteUser(this.selectedUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.search$.next())).subscribe();
    });
  }

};

AdministrationUserListComponent.ɵfac = function AdministrationUserListComponent_Factory(t) {
  return new (t || AdministrationUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_0__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService));
};

AdministrationUserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AdministrationUserListComponent,
  selectors: [["pek-administration-user-list"]],
  viewQuery: function AdministrationUserListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 46,
  vars: 16,
  consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-user-plus", "label", "Create User", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["for", "username"], ["id", "username", "type", "text", "pInputText", "", "formControlName", "username", 1, "form-control"], ["for", "email"], ["id", "email", "type", "text", "pInputText", "", "formControlName", "email", 1, "form-control"], ["for", "first_name"], ["id", "first_name", "type", "text", "pInputText", "", "formControlName", "first_name", 1, "form-control"], ["for", "last_name"], ["id", "last_name", "type", "text", "pInputText", "", "formControlName", "last_name", 1, "form-control"], [1, "col-12"], [1, "d-flex", "mt-1"], ["class", "subtitle", 4, "ngIf"], [1, "ml-auto", 3, "model"], [1, "table-pagination-preloader"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 27rem)", 3, "rows", "scrollable", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "pagination-preloader pagination-preloader_bord", 4, "ngIf"], ["class", "paginator-wrapper", 3, "paginator-wrapper_hide", 4, "ngIf"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "subtitle"], [1, "text-center", 2, "width", "5%"], [2, "width", "15%"], [2, "width", "20%"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [1, "pagination-preloader", "pagination-preloader_bord"], [1, "paginator-wrapper"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["type", "button", "styleClass", "p-button-text", 1, "paginator-all", 3, "click"], [1, "paginator-return-pagination"], ["type", "button", "styleClass", "p-button-text", 3, "click"]],
  template: function AdministrationUserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Users List");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdministrationUserListComponent_Template_button_click_7_listener() {
        return ctx.createUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 20)(33, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AdministrationUserListComponent_p_34_Template, 2, 0, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "p-menubar", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 24)(37, "p-table", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function AdministrationUserListComponent_Template_p_table_selectionChange_37_listener($event) {
        return ctx.selectedUser = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, AdministrationUserListComponent_ng_template_40_Template, 13, 0, "ng-template", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, AdministrationUserListComponent_ng_template_41_Template, 13, 7, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, AdministrationUserListComponent_ng_template_42_Template, 4, 3, "ng-template", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AdministrationUserListComponent_div_43_Template, 2, 0, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, AdministrationUserListComponent_div_44_Template, 5, 4, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, AdministrationUserListComponent_div_45_Template, 3, 0, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "administration")("isActive", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selectedUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.selectedUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 10)("scrollable", true)("selection", ctx.selectedUser)("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 14, ctx.users$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowAll);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, primeng_menubar__WEBPACK_IMPORTED_MODULE_18__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_19__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_20__.Paginator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["form[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmF0aW9uLXVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoiYWRtaW5pc3RyYXRpb24tdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XHJcbn1cclxuIl19 */"]
});
AdministrationUserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], AdministrationUserListComponent);


/***/ }),

/***/ 82129:
/*!**************************************************************************************!*\
  !*** ./src/app/administration/modals/create-edit-role/create-edit-role.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditRoleComponent": () => (/* binding */ CreateEditRoleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/role.service */ 69138);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 69906);








class CreateEditRoleComponent {
    constructor(fb, roleService, dialogRef, data) {
        this.fb = fb;
        this.roleService = roleService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.role.id));
            this.form.patchValue(this.data.role);
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createRole();
                break;
            }
            case 'edit': {
                this.editRole();
                break;
            }
        }
    }
    createRole() {
        const send = this.form.value;
        this.roleService.createRole(send).subscribe({
            next: user => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
    editRole() {
        const send = this.form.value;
        this.roleService.editRole(send).subscribe({
            next: user => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditRoleComponent.ɵfac = function CreateEditRoleComponent_Factory(t) { return new (t || CreateEditRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditRoleComponent, selectors: [["pek-create-edit-role"]], decls: 12, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditRoleComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 39277:
/*!**************************************************************************************!*\
  !*** ./src/app/administration/modals/create-edit-user/create-edit-user.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditUserComponent": () => (/* binding */ CreateEditUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 20745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 69906);









function CreateEditUserComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateEditUserComponent {
    constructor(fb, userService, dialogRef, data) {
        this.fb = fb;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: [''],
            first_name: [''],
            last_name: ['',],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('password', this.fb.control(''));
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.data.user.id));
            this.form.patchValue(this.data.user);
            this.form.get('username').disable();
        }
        else {
            this.form.addControl('password', this.fb.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required));
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createUser();
                break;
            }
            case 'edit': {
                this.editUser();
                break;
            }
        }
    }
    createUser() {
        const send = this.form.value;
        this.userService.createUser(send).subscribe({
            next: user => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
    editUser() {
        const send = this.form.value;
        if (!send.password) {
            delete send.password;
        }
        if (!send.first_name && !this.data.user.first_name) {
            delete send.first_name;
        }
        if (!send.email && !this.data.user.email) {
            delete send.email;
        }
        if (!send.last_name && !this.data.user.last_name) {
            delete send.last_name;
        }
        this.userService.editUser(send).subscribe({
            next: user => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditUserComponent.ɵfac = function CreateEditUserComponent_Factory(t) { return new (t || CreateEditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateEditUserComponent, selectors: [["pek-create-edit-user"]], decls: 29, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "pInputText", "", "formControlName", "username"], ["for", "password"], [4, "ngIf"], ["type", "text", "id", "password", "pInputText", "", "formControlName", "password"], ["for", "email"], ["type", "text", "id", "email", "pInputText", "", "formControlName", "email"], ["for", "first_name"], ["type", "text", "id", "first_name", "pInputText", "", "formControlName", "first_name"], ["for", "last_name"], ["type", "text", "id", "last_name", "pInputText", "", "formControlName", "last_name"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CreateEditUserComponent_span_12_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3)(23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-dialog-actions", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateEditUserComponent_Template_button_click_28_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.type, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 50688:
/*!************************************************************************************************!*\
  !*** ./src/app/administration/modals/edit-role-permissions/edit-role-permissions.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRolePermissionsComponent": () => (/* binding */ EditRolePermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/permissions.service */ 68166);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/role.service */ 69138);
/* harmony import */ var _services_group_sub_module_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group-sub-module-permission.service */ 59320);
/* harmony import */ var _services_sub_module_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sub-module-permission.service */ 88261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 17485);















function EditRolePermissionsComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Select the modules to be accessed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditRolePermissionsComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Edit Permissions of the Role \"", ctx_r1.role.name, "\"");
} }
function EditRolePermissionsComponent_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function EditRolePermissionsComponent_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableCheckbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", module_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](module_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](module_r9.description);
} }
function EditRolePermissionsComponent_div_5_ng_template_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 17);
} }
function EditRolePermissionsComponent_div_5_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditRolePermissionsComponent_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditRolePermissionsComponent_div_5_ng_template_4_i_2_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EditRolePermissionsComponent_div_5_ng_template_4_span_3_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.isLoadingModulesPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.isLoadingModulesPermissions);
} }
function EditRolePermissionsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function EditRolePermissionsComponent_div_5_Template_p_table_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.selectedModulesPermission = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditRolePermissionsComponent_div_5_ng_template_2_Template, 7, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EditRolePermissionsComponent_div_5_ng_template_3_Template, 7, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EditRolePermissionsComponent_div_5_ng_template_4_Template, 4, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.modulesPermission)("selection", ctx_r2.selectedModulesPermission)("scrollable", true);
} }
function EditRolePermissionsComponent_div_6_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "p-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EditRolePermissionsComponent_div_6_ng_template_1_div_1_Template_p_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.selectedModules = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", module_r21.id)("ngModel", ctx_r20.selectedModules);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", module_r21.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](module_r21.name);
} }
function EditRolePermissionsComponent_div_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditRolePermissionsComponent_div_6_ng_template_1_div_1_Template, 4, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r16.subModules);
} }
function EditRolePermissionsComponent_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function EditRolePermissionsComponent_div_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableCheckbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const permission_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", permission_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](permission_r24.name);
} }
function EditRolePermissionsComponent_div_6_ng_template_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 17);
} }
function EditRolePermissionsComponent_div_6_ng_template_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditRolePermissionsComponent_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditRolePermissionsComponent_div_6_ng_template_5_i_2_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EditRolePermissionsComponent_div_6_ng_template_5_span_3_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.isLoadingPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r19.isLoadingPermissions);
} }
function EditRolePermissionsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditRolePermissionsComponent_div_6_ng_template_1_Template, 2, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function EditRolePermissionsComponent_div_6_Template_p_table_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.selectedPermissions = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EditRolePermissionsComponent_div_6_ng_template_3_Template, 5, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EditRolePermissionsComponent_div_6_ng_template_4_Template, 5, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, EditRolePermissionsComponent_div_6_ng_template_5_Template, 4, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isQCModulePermissionSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.permissions)("selection", ctx_r3.selectedPermissions)("scrollable", true);
} }
function EditRolePermissionsComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditRolePermissionsComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.goToSelectionPermissions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r4.selectedModulesPermission.length === 0)("loading", ctx_r4.isLoadingPermissions);
} }
function EditRolePermissionsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditRolePermissionsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.saveRolePermission()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx_r5.isSaving);
} }
const QC_MODULE_PERMISSION_ID = 5;
class EditRolePermissionsComponent {
    constructor(fb, permissionsService, rolesService, dialogRef, groupSubModuleService, subModulePermissionService, data) {
        this.fb = fb;
        this.permissionsService = permissionsService;
        this.rolesService = rolesService;
        this.dialogRef = dialogRef;
        this.groupSubModuleService = groupSubModuleService;
        this.subModulePermissionService = subModulePermissionService;
        this.data = data;
        this.subModules = [];
        this.selectedPermissions = [];
        this.countPermissions = 0;
        this.searchForm = this.fb.group({
            offset: [0],
            limit: [1000]
        });
        this.selectedModulesPermission = [];
        this.isLoadingModulesPermissions = true;
        this.isLoadingPermissions = false;
        this.isSelectModulesMode = true;
        this.query = [
            { name: 'limit', value: this.searchForm.get('limit').value },
            { name: 'offset', value: this.searchForm.get('offset').value }
        ];
        this.selectedModules = [];
        this.isQCModulePermissionSelected = false;
        this.isSaving = false;
    }
    ngOnInit() {
        this.role = this.data.role;
        this.getModules();
        this.getSubModuleInfo();
    }
    getModules() {
        const query = [{ name: 'role_id', value: this.role.id }];
        this.permissionsService.getModulePermissions(query).subscribe(modulePermission => {
            this.modulesPermission = modulePermission;
            this.selectedModulesPermission = modulePermission.filter(m => m?.is_module_permissions_selected_in_role);
            this.isQCModulePermissionSelected = this.selectedModulesPermission.findIndex(module => module.id === QC_MODULE_PERMISSION_ID) > -1;
            this.isLoadingModulesPermissions = false;
        });
    }
    getGroupSubModuleInfo() {
        this.groupSubModuleService.get([{ name: 'role', value: this.role.id }]).subscribe(groupSubModules => {
            if (groupSubModules.length > 0) {
                this.groupSubModule = groupSubModules[0];
                groupSubModules.forEach(module => {
                    this.selectedModules.push(...module.module_permission);
                });
            }
        });
    }
    getSubModuleInfo() {
        this.subModulePermissionService.get().subscribe(subModules => {
            this.subModules = subModules;
            this.getGroupSubModuleInfo();
        });
    }
    goToSelectionPermissions() {
        this.isSelectModulesMode = false;
        this.getPermissions();
    }
    getPermissions() {
        this.isLoadingPermissions = true;
        let modulesIds = '';
        this.selectedModulesPermission.forEach(permission => modulesIds += permission.id + ',');
        modulesIds = modulesIds.slice(0, -1);
        this.isQCModulePermissionSelected = this.selectedModulesPermission.findIndex(module => module.id === QC_MODULE_PERMISSION_ID) > -1;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
            modulesPermissions: this.permissionsService.getPermissionsForModules(modulesIds, this.query),
            rolePermissions: this.rolesService.getRolePermissions(this.role)
        }).subscribe(({ modulesPermissions, rolePermissions }) => {
            this.permissions = modulesPermissions.data;
            this.rolePermissions = rolePermissions.permissions;
            this.selectedPermissions = rolePermissions.permissions;
            this.isLoadingPermissions = false;
        });
    }
    getModulesPermissions() {
        this.isLoadingPermissions = true;
        let modulesIds = '';
        this.selectedModulesPermission.forEach(permission => modulesIds += permission.id + ',');
        modulesIds = modulesIds.slice(0, -1);
        this.permissionsService.getPermissionsForModules(modulesIds, this.query).subscribe(permissions => {
            this.permissions = permissions.data;
            this.countPermissions = permissions.total;
            this.isLoadingPermissions = false;
        });
    }
    getRolePermissions() {
        this.rolesService.getRolePermissions(this.role).subscribe(res => {
            this.selectedPermissions = res.permissions;
        });
    }
    saveRolePermission() {
        const rolePermissions = JSON.parse(JSON.stringify(this.rolePermissions));
        this.selectedPermissions.forEach(selectedPermission => {
            const index = rolePermissions.findIndex(p => p.id === selectedPermission.id);
            if (index !== -1)
                rolePermissions.splice(index, 1);
            else
                rolePermissions.push(selectedPermission);
        });
        const addedPermissions = {
            permissions_ids: '',
            modules_ids: ''
        };
        const removedPermissions = {
            permissions_ids: '',
            modules_ids: '',
        };
        rolePermissions.forEach(permission => {
            if (this.rolePermissions.find(p => p.id === permission.id))
                removedPermissions.permissions_ids += permission.id + ',';
            else
                addedPermissions.permissions_ids += permission.id + ',';
        });
        addedPermissions.permissions_ids = addedPermissions.permissions_ids.slice(0, -1);
        addedPermissions.modules_ids = this.selectedModulesPermission.map(m => m.id).join(',');
        removedPermissions.permissions_ids = removedPermissions.permissions_ids.slice(0, -1);
        removedPermissions.modules_ids = this.selectedModulesPermission.map(m => m.id).join(',');
        const findPermissions = [];
        this.permissions.forEach(p => {
            if (this.selectedPermissions.find(sp => sp.id === p.id)) {
                findPermissions.push(p);
            }
        });
        const send = {
            modules_ids: this.selectedModulesPermission.map(m => m.id)
        };
        if (findPermissions.length === 0) {
            this.rolesService.removeModuleFromRole(this.role.id, send).subscribe();
        }
        if (addedPermissions.permissions_ids)
            this.addPermissions(addedPermissions);
        if (removedPermissions.permissions_ids)
            this.removePermissions(removedPermissions);
        if (this.isQCModulePermissionSelected) {
            this.updateRoleSubModulePermission();
        }
    }
    addPermissions(addedPermissions) {
        this.isSaving = true;
        this.rolesService.setRolePermissions(this.role, addedPermissions).subscribe(() => {
            this.dialogRef.close(true);
            this.isSaving = false;
        });
    }
    removePermissions(removedPermissions) {
        this.isSaving = true;
        this.rolesService.removeRolePermissions(this.role, removedPermissions).subscribe(() => {
            this.dialogRef.close(true);
            this.isSaving = false;
        });
    }
    searchPermissions() {
        this.query = [
            { name: 'limit', value: this.searchForm.get('limit').value },
            { name: 'offset', value: this.searchForm.get('offset').value }
        ];
        this.permissions = [];
        this.getModulesPermissions();
    }
    paginate(evt) {
        this.searchForm.get('limit').patchValue(evt.page * 10);
        this.searchPermissions();
    }
    updateRoleSubModulePermission() {
        const sendData = {
            id: null,
            role: this.role.id,
            module_permission: this.selectedModules
        };
        this.isSaving = true;
        if (this.groupSubModule) {
            sendData.id = this.groupSubModule.id;
            this.groupSubModuleService.updateGroupSubModule(sendData).subscribe(() => {
                this.isSaving = false;
                this.dialogRef.close(true);
            });
        }
        else {
            this.groupSubModuleService.createGroupSubRole(sendData).subscribe(() => {
                this.dialogRef.close(true);
                this.isSaving = false;
            });
        }
    }
    onSave() {
    }
}
EditRolePermissionsComponent.ɵfac = function EditRolePermissionsComponent_Factory(t) { return new (t || EditRolePermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_permissions_service__WEBPACK_IMPORTED_MODULE_0__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_group_sub_module_permission_service__WEBPACK_IMPORTED_MODULE_2__.GroupSubModulePermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_sub_module_permission_service__WEBPACK_IMPORTED_MODULE_3__.SubModulePermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
EditRolePermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditRolePermissionsComponent, selectors: [["pek-edit-role-permissions"]], decls: 11, vars: 7, consts: [[1, "modal-header"], [1, "modal-header__title"], [4, "ngIf"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "label", "Further", 3, "disabled", "loading", "click", 4, "ngIf"], ["pButton", "", "type", "button", "class", "p-button-success", "label", "Save", 3, "loading", "click", 4, "ngIf"], ["dataKey", "id", "responsiveLayout", "scroll", "scrollHeight", "calc(400px)", 3, "value", "selection", "scrollable", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [2, "width", "6%"], [2, "width", "44%"], [2, "width", "50%"], [3, "value"], [1, "text-center", "p-3", 2, "width", "100%"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [3, "ngIf"], [1, "sub-modules-view"], ["class", "field-checkbox sub-modules", 4, "ngFor", "ngForOf"], [1, "field-checkbox", "sub-modules"], ["name", "subModules", 3, "value", "ngModel", "ngModelChange"], [3, "pTooltip"], [2, "width", "94%"], [1, "text-center", "p-4"], ["pButton", "", "label", "Further", 3, "disabled", "loading", "click"], ["pButton", "", "type", "button", "label", "Save", 1, "p-button-success", 3, "loading", "click"]], template: function EditRolePermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditRolePermissionsComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EditRolePermissionsComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, EditRolePermissionsComponent_div_5_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EditRolePermissionsComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EditRolePermissionsComponent_button_9_Template, 1, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EditRolePermissionsComponent_button_10_Template, 1, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSelectModulesMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSelectModulesMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSelectModulesMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSelectModulesMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSelectModulesMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSelectModulesMode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_13__.TableHeaderCheckbox], styles: [".sub-modules-view[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.field-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n\n.field-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcm9sZS1wZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXJvbGUtcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLW1vZHVsZXMtdmlldyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZpZWxkLWNoZWNrYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 15080:
/*!************************************************************************************!*\
  !*** ./src/app/administration/modals/edit-user-roles/edit-user-roles.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserRolesComponent": () => (/* binding */ EditUserRolesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _correspondent_enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../correspondent/enum/correspondent-types.enum */ 4047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 20745);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/role.service */ 69138);
/* harmony import */ var _crm_services_event_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../crm/services/event-types.service */ 70229);
/* harmony import */ var _shared_services_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/tree.service */ 66106);
/* harmony import */ var _crm_services_company_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../crm/services/company-category.service */ 47217);
/* harmony import */ var _product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../product-structure/services/categories.service */ 67943);
/* harmony import */ var _business_trips_services_business_trips_permission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../business-trips/services/business-trips-permission.service */ 27931);
/* harmony import */ var _crm_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../crm/services/crm-employee.service */ 29038);
/* harmony import */ var _correspondent_services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../correspondent/services/correspondents-category.service */ 32899);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/treeselect */ 64016);




























function EditUserRolesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function EditUserRolesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "p-tableCheckbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const role_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", role_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](role_r12.name);
  }
}

function EditUserRolesComponent_ng_template_8_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 31);
  }
}

function EditUserRolesComponent_ng_template_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function EditUserRolesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, EditUserRolesComponent_ng_template_8_i_2_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, EditUserRolesComponent_ng_template_8_span_3_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("colspan", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
  }
}

function EditUserRolesComponent_p_paginator_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-paginator", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onPageChange", function EditUserRolesComponent_p_paginator_9_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r3.count);
  }
}

function EditUserRolesComponent_p_multiSelect_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "p-multiSelect", 34);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r4.categories);
  }
}

function EditUserRolesComponent_p_multiSelect_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "p-multiSelect", 35);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r5.eventTypes);
  }
}

function EditUserRolesComponent_p_multiSelect_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "p-multiSelect", 36);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r6.externalEventTypes);
  }
}

function EditUserRolesComponent_p_multiSelect_36_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 39)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const contact_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", contact_r21.first_name, " ", contact_r21.last_name, "");
  }
}

function EditUserRolesComponent_p_multiSelect_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-multiSelect", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function EditUserRolesComponent_p_multiSelect_36_Template_p_multiSelect_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.businessTripEmployeesIds = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EditUserRolesComponent_p_multiSelect_36_ng_template_1_Template, 3, 2, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r7.employees)("ngModel", ctx_r7.businessTripEmployeesIds);
  }
}

function EditUserRolesComponent_p_treeSelect_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "p-treeSelect", 40);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r8.incomingCategoriesTree);
  }
}

function EditUserRolesComponent_p_treeSelect_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "p-treeSelect", 41);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r9.outgoingCategoriesTree);
  }
}

function EditUserRolesComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return {
    standalone: true
  };
};

let EditUserRolesComponent = class EditUserRolesComponent {
  constructor(fb, userService, roleService, eventTypesService, treeService, companyCategoryService, categoryService, businessTripPermissionService, crmEmployeeService, correspondentsCategoriesService, adapterService, dialogRef, data) {
    this.fb = fb;
    this.userService = userService;
    this.roleService = roleService;
    this.eventTypesService = eventTypesService;
    this.treeService = treeService;
    this.companyCategoryService = companyCategoryService;
    this.categoryService = categoryService;
    this.businessTripPermissionService = businessTripPermissionService;
    this.crmEmployeeService = crmEmployeeService;
    this.correspondentsCategoriesService = correspondentsCategoriesService;
    this.adapterService = adapterService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.isSaving = false;
    this.isLoading = false;
    this.selectedRoles = [];
    this.form = this.fb.group({
      categories: [[]],
      eventTypes: [[]],
      externalEventTypes: [[]],
      incomingCorrespondentCategoryPermissions: [[]],
      outgoingCorrespondentCategoryPermissions: [[]]
    });
    this.currentPage = 1;
    this.count = 0;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
    this.query = [];
    this.isLoadingEventTypes = true;
    this.isLoadingExternalEventTypes = true;
    this.isLoadingCategories = true;
    this.isLoadingPermissions = true;
    this.isLoadingEmployees = true;
    this.isLoadingIncomingCategories = true;
    this.isLoadingOutgoingCategories = true;
    this.incomingCategoriesTree = [];
    this.outgoingCategoriesTree = [];
    this.incomingIds = [];
    this.outgoingIds = [];
    this.roles$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isLoading = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.roleService.getForPagination([{
      name: 'page',
      value: this.currentPage
    }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(response => this.count = response.count), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(response => response.results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isLoading = false), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)([]), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this))), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this));
    this.employees = [];
    this.canVerifyTripExpenses = false;
    this.canAcceptChangesOnImport = false;
  }

  ngOnInit() {
    this.canVerifyTripExpenses = this.data.user.can_verify_expenses;
    this.canAcceptChangesOnImport = this.data.user.can_accept_changes_on_import;
    this.data.user.groups.forEach(group => this.selectedRoles.push({
      id: group.id
    }));
    this.form.get('categories').patchValue(this.data.user.company_categories.map(c => c.id));
    this.getEventTypes();
    this.getExternalEventTypes();
    this.getCategories();
    this.getPermissions();
    this.getEmployees();
    this.getIncomingCategories();
    this.getOutgoingCategories();
    this.prepareCorrespondentCategories();
  }

  onSave() {
    const send = {
      group_ids: []
    };
    send.group_ids = this.selectedRoles.map(role => role.id); // send.group_ids = send.group_ids.slice(0, -1);

    this.isSaving = true;
    this.userService.addRoleToUser(this.data.user.id, send).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.saveCategoriesPermissions()), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.updateBusinessTripPermissions()), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.updateBusinessTripVerifyPermissions()), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.updateCanAcceptChangesOnImportPermissions()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.finalize)(() => this.isSaving = false)).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  updateBusinessTripVerifyPermissions() {
    const data = {
      can_verify: this.canVerifyTripExpenses
    };

    if (this.data.user.can_verify_expenses !== this.canVerifyTripExpenses) {
      return this.businessTripPermissionService.update_verify_permission(this.data.user.id, data);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(true);
    }
  }

  updateCanAcceptChangesOnImportPermissions() {
    const data = {
      can_accept: this.canAcceptChangesOnImport
    };

    if (this.data.user.can_accept_changes_on_import !== this.canAcceptChangesOnImport) {
      return this.userService.update_can_verify_import(this.data.user.id, data);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(true);
    }
  }

  saveCategoriesPermissions() {
    const innerEventTypes = this.form.get('eventTypes').value;
    const externalEventTypes = this.form.get('externalEventTypes').value;
    const allowedAccessEventTypes = [...innerEventTypes, ...externalEventTypes];
    const incomingCorrespondentPermissions = this.form.get('incomingCorrespondentCategoryPermissions').value;
    const outgoingCorrespondentPermissions = this.form.get('outgoingCorrespondentCategoryPermissions').value;
    const allCorrespondentCategoriesPermissions = [...incomingCorrespondentPermissions, ...outgoingCorrespondentPermissions];
    const send = {
      id: this.data.user.id,
      companycategory_set: this.form.get('categories').value,
      eventtype_set: allowedAccessEventTypes,
      correspondentcategory_set: allCorrespondentCategoriesPermissions.map(c => c.data.id)
    };
    return this.userService.editUserPermissions(send);
  }

  updateBusinessTripPermissions() {
    const data = {
      employees_ids: this.businessTripEmployeesIds ? this.businessTripEmployeesIds : []
    };
    return this.businessTripPermissionService.update(this.data.user.id, data);
  }

  getIncomingCategories() {
    this.correspondentsCategoriesService.get([{
      name: 'type',
      value: _correspondent_enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes.INCOMING
    }]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(categories => {
      const fill = nodes => {
        nodes.forEach(n => {
          n.label = n.data.name;

          if (n.children?.length) {
            fill(n.children);
          }
        });
      };

      this.incomingCategoriesTree = this.adapterService.treeAdapter(categories, false, false, true);
      fill(this.incomingCategoriesTree);
      this.choiceIncomingCategories(this.incomingIds);
      this.isLoadingIncomingCategories = false;
    });
  }

  getOutgoingCategories() {
    this.correspondentsCategoriesService.get([{
      name: 'type',
      value: _correspondent_enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes.OUTGOING
    }]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(categories => {
      const fill = nodes => {
        nodes.forEach(n => {
          n.label = n.data.name;

          if (n.children?.length) {
            fill(n.children);
          }
        });
      };

      this.outgoingCategoriesTree = this.adapterService.treeAdapter(categories, false, false, true);
      fill(this.outgoingCategoriesTree);
      this.choiceOutgoingCategories(this.outgoingIds);
      this.isLoadingOutgoingCategories = false;
    });
  }

  choiceIncomingCategories(ids) {
    const categoryNodes = [];
    ids.forEach(id => {
      this.incomingCategoriesTree.forEach(item => {
        searchTree(item, id);
      });
    });

    function searchTree(node, matchingTitle) {
      if (node.data.id === matchingTitle) {
        categoryNodes.push(node);
        return node;
      } else if (node.children) {
        let result = null;
        node.children.forEach(item => {
          result = searchTree(item, matchingTitle);
        });
      }

      return null;
    }

    this.incomingCategoriesTree = this.incomingCategoriesTree.map(c => c);
    this.form.get('incomingCorrespondentCategoryPermissions').patchValue(categoryNodes);
  }

  choiceOutgoingCategories(ids) {
    const categoryNodes = [];
    ids.forEach(id => {
      this.outgoingCategoriesTree.forEach(item => {
        searchTree(item, id);
      });
    });

    function searchTree(node, matchingTitle) {
      if (node.data.id === matchingTitle) {
        categoryNodes.push(node);
        return node;
      } else if (node.children) {
        let result = null;
        node.children.forEach(item => {
          result = searchTree(item, matchingTitle);
        });
      }

      return null;
    }

    this.outgoingCategoriesTree = this.outgoingCategoriesTree.map(c => c);
    this.form.get('outgoingCorrespondentCategoryPermissions').patchValue(categoryNodes);
  }

  prepareCorrespondentCategories() {
    const outgoingCategories = this.data.user.correspondent_category_permissions.filter(cat => cat.type === _correspondent_enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes.OUTGOING).map(cat => cat.id);
    const incomingCategories = this.data.user.correspondent_category_permissions.filter(cat => cat.type === _correspondent_enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes.INCOMING).map(cat => cat.id);
    this.incomingIds = incomingCategories;
    this.outgoingIds = outgoingCategories;
  }

  getPermissions() {
    this.businessTripPermissionService.get([{
      name: 'user_id',
      value: this.data.user.id
    }]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(res => {
      this.businessTripEmployeesIds = res.map(permission => permission.employee);
      this.isLoadingPermissions = false;
    });
  }

  getEmployees() {
    this.crmEmployeeService.get().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(employees => {
      this.employees = employees;
      this.isLoadingEmployees = false;
    });
  }

  getCategories() {
    this.companyCategoryService.get().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(categories => {
      this.categories = categories;
      this.isLoadingCategories = false;
    });
  }

  getEventTypes() {
    this.eventTypesService.getNoneCache([{
      name: 'is_inner',
      value: true
    }]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(eventTypes => {
      this.eventTypes = eventTypes;
      const innerIds = this.data.user.event_types.filter(type => eventTypes.findIndex(evType => evType.id === type.id) >= 0);
      this.form.get('eventTypes').patchValue(innerIds.map(c => c.id));
      this.isLoadingEventTypes = false;
    });
  }

  getExternalEventTypes() {
    this.eventTypesService.getNoneCache([{
      name: 'is_inner',
      value: false
    }]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe(eventTypes => {
      this.externalEventTypes = eventTypes;
      const externalIds = this.data.user.event_types.filter(type => eventTypes.findIndex(evType => evType.id === type.id) >= 0);
      this.form.get('externalEventTypes').patchValue(externalIds.map(c => c.id));
      this.isLoadingExternalEventTypes = false;
    });
  }

  paginate(evt) {
    this.currentPage = evt.page + 1;
    this.search$.next();
  }

};

EditUserRolesComponent.ɵfac = function EditUserRolesComponent_Factory(t) {
  return new (t || EditUserRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_crm_services_event_types_service__WEBPACK_IMPORTED_MODULE_3__.EventTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_tree_service__WEBPACK_IMPORTED_MODULE_4__.TreeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_crm_services_company_category_service__WEBPACK_IMPORTED_MODULE_5__.CompanyCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_product_structure_services_categories_service__WEBPACK_IMPORTED_MODULE_6__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_business_trips_services_business_trips_permission_service__WEBPACK_IMPORTED_MODULE_7__.BusinessTripsPermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_crm_services_crm_employee_service__WEBPACK_IMPORTED_MODULE_8__.CrmEmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_correspondent_services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_9__.CorrespondentsCategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_10__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MAT_DIALOG_DATA));
};

EditUserRolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: EditUserRolesComponent,
  selectors: [["pek-edit-user-roles"]],
  decls: 65,
  vars: 29,
  consts: [[1, "modal-header"], [1, "modal-header__title"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "selection", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "rows", "totalRecords", "onPageChange", 4, "ngIf"], [3, "formGroup"], [1, "mt-4", "mb-2"], [1, "row"], [1, "col-12"], [1, "form-group"], ["optionLabel", "name", "optionValue", "id", "formControlName", "categories", "appendTo", "body", 3, "options", 4, "ngIf", "ngIfElse"], ["appendTo", "body", "optionLabel", "name", "optionValue", "id", "formControlName", "eventTypes", 3, "options", 4, "ngIf", "ngIfElse"], ["appendTo", "body", "optionLabel", "name", "optionValue", "id", "formControlName", "externalEventTypes", 3, "options", 4, "ngIf", "ngIfElse"], ["optionValue", "id", "optionLabel", "first_name", "appendTo", "body", 3, "options", "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["for", "other"], ["id", "other", 3, "ngModel", "binary", "ngModelOptions", "ngModelChange"], ["appendTo", "body", "label", "name", "formControlName", "incomingCorrespondentCategoryPermissions", "selectionMode", "checkbox", "placeholder", "Select Categories", 3, "options", 4, "ngIf", "ngIfElse"], ["appendTo", "body", "label", "name", "formControlName", "outgoingCorrespondentCategoryPermissions", "selectionMode", "checkbox", "placeholder", "Select Categories", 3, "options", 4, "ngIf", "ngIfElse"], ["id", "canAcceptChanges", 3, "ngModel", "binary", "ngModelOptions", "ngModelChange"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Save", 1, "p-button-success", 3, "loading", "click"], ["spinner", ""], [2, "width", "3rem"], [2, "width", "100%"], [3, "value"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], ["optionLabel", "name", "optionValue", "id", "formControlName", "categories", "appendTo", "body", 3, "options"], ["appendTo", "body", "optionLabel", "name", "optionValue", "id", "formControlName", "eventTypes", 3, "options"], ["appendTo", "body", "optionLabel", "name", "optionValue", "id", "formControlName", "externalEventTypes", 3, "options"], ["optionValue", "id", "optionLabel", "first_name", "appendTo", "body", 3, "options", "ngModel", "ngModelChange"], ["pTemplate", "item"], [1, "contact-item"], ["appendTo", "body", "label", "name", "formControlName", "incomingCorrespondentCategoryPermissions", "selectionMode", "checkbox", "placeholder", "Select Categories", 3, "options"], ["appendTo", "body", "label", "name", "formControlName", "outgoingCorrespondentCategoryPermissions", "selectionMode", "checkbox", "placeholder", "Select Categories", 3, "options"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]],
  template: function EditUserRolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Edit Roles ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-dialog-content")(4, "p-table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function EditUserRolesComponent_Template_p_table_selectionChange_4_listener($event) {
        return ctx.selectedRoles = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, EditUserRolesComponent_ng_template_6_Template, 5, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, EditUserRolesComponent_ng_template_7_Template, 5, 2, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, EditUserRolesComponent_ng_template_8_Template, 4, 3, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, EditUserRolesComponent_p_paginator_9_Template, 2, 2, "p-paginator", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "form", 7)(11, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Company Categories & Event Types Permissions");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Company Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, EditUserRolesComponent_p_multiSelect_18_Template, 1, 1, "p-multiSelect", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Event Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, EditUserRolesComponent_p_multiSelect_23_Template, 1, 1, "p-multiSelect", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "External Event Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, EditUserRolesComponent_p_multiSelect_28_Template, 1, 1, "p-multiSelect", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Business Trips Employee Permissions");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 9)(32, "div", 10)(33, "div", 11)(34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Employee Business Trips");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, EditUserRolesComponent_p_multiSelect_36_Template, 2, 2, "p-multiSelect", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 11)(38, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Allow Verify Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "p-checkbox", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function EditUserRolesComponent_Template_p_checkbox_ngModelChange_40_listener($event) {
        return ctx.canVerifyTripExpenses = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Correspondent Incoming Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 9)(44, "form", 7)(45, "div", 10)(46, "div", 11)(47, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Correspondent Incoming Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, EditUserRolesComponent_p_treeSelect_49_Template, 1, 1, "p-treeSelect", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 10)(51, "div", 11)(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "Correspondent Outgoing Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, EditUserRolesComponent_p_treeSelect_54_Template, 1, 1, "p-treeSelect", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 10)(56, "div", 11)(57, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Can Accept Changes On Import");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "p-checkbox", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function EditUserRolesComponent_Template_p_checkbox_ngModelChange_59_listener($event) {
        return ctx.canAcceptChangesOnImport = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "mat-dialog-actions", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditUserRolesComponent_Template_button_click_62_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, EditUserRolesComponent_ng_template_63_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](64);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 25, ctx.roles$))("selection", ctx.selectedRoles);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.count);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoadingCategories)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoadingEventTypes)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoadingExternalEventTypes)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoadingEmployees && !ctx.isLoadingPermissions)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.canVerifyTripExpenses)("binary", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](27, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoadingIncomingCategories)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoadingOutgoingCategories)("ngIfElse", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.canAcceptChangesOnImport)("binary", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](28, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.isSaving);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_23__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_24__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_26__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_26__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_26__.TableHeaderCheckbox, primeng_paginator__WEBPACK_IMPORTED_MODULE_27__.Paginator, primeng_multiselect__WEBPACK_IMPORTED_MODULE_28__.MultiSelect, primeng_treeselect__WEBPACK_IMPORTED_MODULE_29__.TreeSelect, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
  styles: ["h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci1yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJlZGl0LXVzZXItcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG59XHJcbiJdfQ== */"]
});
EditUserRolesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.UntilDestroy)()], EditUserRolesComponent);


/***/ }),

/***/ 59320:
/*!********************************************************************************!*\
  !*** ./src/app/administration/services/group-sub-module-permission.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSubModulePermissionService": () => (/* binding */ GroupSubModulePermissionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class GroupSubModulePermissionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.users_url;
        this.url = 'group_sub_module_permissions/';
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
        return this.httpClient.get(this.API_URL + this.url + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data;
        }));
    }
    updateGroupSubModule(role) {
        return this.httpClient.patch(this.API_URL + this.url + role.id + '/', role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    createGroupSubRole(role) {
        return this.httpClient.post(this.API_URL + this.url, role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
GroupSubModulePermissionService.ɵfac = function GroupSubModulePermissionService_Factory(t) { return new (t || GroupSubModulePermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
GroupSubModulePermissionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GroupSubModulePermissionService, factory: GroupSubModulePermissionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 68166:
/*!****************************************************************!*\
  !*** ./src/app/administration/services/permissions.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsService": () => (/* binding */ PermissionsService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class PermissionsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.users_url;
        this.url = 'permissions/';
    }
    // getForPagination(query: QuerySearch[] = []): Observable<Permissions> {
    //   let queryString = '';
    //   if (query) {
    //     query.forEach((element, index) => {
    //       if (index > 0) {
    //         queryString += '&' + element.name + '=' + element.value;
    //       } else {
    //         queryString += '?' + element.name + '=' + element.value;
    //       }
    //
    //     });
    //   }
    //
    //   return this.httpClient.get<{data: Permissions}>(this.API_URL + this.url + queryString).pipe(map(response => {
    //     return response.data;
    //   }));
    // }
    getModulePermissions(query = []) {
        let queryString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryString += '&' + element.name + '=' + element.value;
                }
                else {
                    queryString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + 'module_permissions/' + queryString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    getPermissionsForModules(modulesIds, query = []) {
        let queryString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryString += '&' + element.name + '=' + element.value;
                }
                else {
                    queryString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + 'get_permissions_for_module/' + modulesIds + '/' + queryString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
}
PermissionsService.ɵfac = function PermissionsService_Factory(t) { return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PermissionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PermissionsService, factory: PermissionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69138:
/*!*********************************************************!*\
  !*** ./src/app/administration/services/role.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_edit_role_create_edit_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-role/create-edit-role.component */ 82129);
/* harmony import */ var _modals_edit_role_permissions_edit_role_permissions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/edit-role-permissions/edit-role-permissions.component */ 50688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class RoleService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.users_url;
        this.url = 'roles/';
    }
    getForPagination(query = []) {
        let queryString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryString += '&' + element.name + '=' + element.value;
                }
                else {
                    queryString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + this.url + queryString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    getRoles(query = []) {
        let queryString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryString += '&' + element.name + '=' + element.value;
                }
                else {
                    queryString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + this.url + queryString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    getRolePermissions(role) {
        return this.httpClient.get(this.API_URL + 'get_role_permissions/' + role.id + '/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    setRolePermissions(role, permissions) {
        return this.httpClient.post(this.API_URL + 'role_set_permissions/' + role.id + '/', permissions);
    }
    removeRolePermissions(role, permissions) {
        return this.httpClient.post(this.API_URL + 'role_remove_permissions/' + role.id + '/', permissions);
    }
    removeModuleFromRole(roleId, data) {
        return this.httpClient.post(this.API_URL + `remove_module_from_role/${roleId}/`, data);
    }
    createRole(role) {
        return this.httpClient.post(this.API_URL + this.url, role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    editRole(role) {
        return this.httpClient.patch(this.API_URL + this.url + role.id + '/', role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    deleteRole(role) {
        return this.httpClient.delete(this.API_URL + this.url + role.id + '/');
    }
    createEditRoleModal(type, role) {
        return this.dialog
            .open(_modals_create_edit_role_create_edit_role_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditRoleComponent, {
            width: '30rem',
            height: 'auto',
            data: { type, role },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    editRolePermissions(role) {
        return this.dialog
            .open(_modals_edit_role_permissions_edit_role_permissions_component__WEBPACK_IMPORTED_MODULE_2__.EditRolePermissionsComponent, {
            width: '40rem',
            height: 'auto',
            data: { role },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88261:
/*!**************************************************************************!*\
  !*** ./src/app/administration/services/sub-module-permission.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubModulePermissionService": () => (/* binding */ SubModulePermissionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class SubModulePermissionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.users_url;
        this.url = 'sub_module_permissions/';
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
        return this.httpClient.get(this.API_URL + this.url + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            return response.data;
        }));
    }
}
SubModulePermissionService.ɵfac = function SubModulePermissionService_Factory(t) { return new (t || SubModulePermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SubModulePermissionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SubModulePermissionService, factory: SubModulePermissionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20745:
/*!*********************************************************!*\
  !*** ./src/app/administration/services/user.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _modals_create_edit_user_create_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-user/create-edit-user.component */ 39277);
/* harmony import */ var _modals_edit_user_roles_edit_user_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/edit-user-roles/edit-user-roles.component */ 15080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class UserService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.users_url;
        this.url = 'users/';
    }
    getForPagination(query = []) {
        let queryString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryString += '&' + element.name + '=' + element.value;
                }
                else {
                    queryString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + 'users_with_groups/' + queryString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    get(query = []) {
        let queryString = '';
        if (query) {
            query.forEach((element, index) => {
                if (index > 0) {
                    queryString += '&' + element.name + '=' + element.value;
                }
                else {
                    queryString += '?' + element.name + '=' + element.value;
                }
            });
        }
        return this.httpClient.get(this.API_URL + 'users_with_groups/' + queryString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data;
        }));
    }
    createUser(user) {
        return this.httpClient.post(this.API_URL + 'user_registration/', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    editUser(user) {
        return this.httpClient.patch(this.API_URL + 'user_update/' + user.id + '/', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    editUserPermissions(user) {
        return this.httpClient.patch(this.API_URL + 'users/' + user.id + '/', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    deleteUser(user) {
        return this.httpClient.delete(this.API_URL + this.url + user.id + '/');
    }
    addRoleToUser(userId, send) {
        return this.httpClient.post(this.API_URL + 'add_role_to_user/' + userId + '/', send).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data));
    }
    update_can_verify_import(id, entity) {
        return this.httpClient.patch(this.API_URL + 'can_accept_changes_on_import/' + id + '/', entity);
    }
    createEditUserModal(type, user) {
        return this.dialog
            .open(_modals_create_edit_user_create_edit_user_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditUserComponent, {
            width: '30rem',
            height: 'auto',
            data: { type, user },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    editUserRoles(user) {
        return this.dialog
            .open(_modals_edit_user_roles_edit_user_roles_component__WEBPACK_IMPORTED_MODULE_2__.EditUserRolesComponent, {
            width: '40rem',
            height: 'auto',
            data: { user },
            autoFocus: false,
            // panelClass: 'modal-overflow-visible',
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27931:
/*!******************************************************************************!*\
  !*** ./src/app/business-trips/services/business-trips-permission.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessTripsPermissionService": () => (/* binding */ BusinessTripsPermissionService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





class BusinessTripsPermissionService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.business_trips_url;
        this.url = 'business-trips-permissions/';
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
        return this.httpClient
            .get(this.API_URL + this.url + qString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            return response.data;
        }));
    }
    update(id, entity) {
        return this.httpClient.patch(this.API_URL + 'update_business_trip_employee_permissions/' + id + '/', entity);
    }
    update_verify_permission(id, entity) {
        return this.httpClient.patch(this.API_URL + 'update_business_trip_verification_permissions/' + id + '/', entity);
    }
}
BusinessTripsPermissionService.ɵfac = function BusinessTripsPermissionService_Factory(t) { return new (t || BusinessTripsPermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
BusinessTripsPermissionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BusinessTripsPermissionService, factory: BusinessTripsPermissionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_administration_administration_module_ts.js.map