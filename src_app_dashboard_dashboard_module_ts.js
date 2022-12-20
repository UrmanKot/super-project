"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent),
/* harmony export */   "DashboardMenuItem": () => (/* binding */ DashboardMenuItem)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 50384);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);








function DashboardComponent_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", route_r1.routerLink)("label", route_r1.label)("icon", route_r1.icon);
} }
function DashboardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DashboardComponent_ng_template_5_li_0_Template, 2, 3, "li", 9);
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.auth.user[route_r1.requiredModulePermission] === true);
} }
class DashboardMenuItem {
}
class DashboardComponent {
    constructor(auth, router, modalService) {
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.routes = [{
                label: 'Product Structure',
                routerLink: '/product-structure',
                icon: 'icon-product-structure',
                requiredModulePermission: 'can_edit_product_structure'
            }, {
                label: 'Confirmation',
                icon: 'icon-confirmation',
                routerLink: ['/confirmation'],
                requiredModulePermission: 'can_edit_confirmation'
            }, {
                label: 'Warehouse',
                icon: 'icon-warehouse',
                routerLink: ['/warehouse'],
                requiredModulePermission: 'can_edit_warehouse'
                // routerLink: ['/external', `${environment.link_url}dash/warehouse/products`],
            }, {
                label: 'Production Lists Procurement',
                icon: 'icon-manufacturing-procurement',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/procurement/orders`],
                requiredModulePermission: 'can_edit_manufacturing_procurement'
            }, {
                label: 'Outsourcing',
                icon: 'icon-outsourcing',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/outsource/outsource-chain`],
                requiredModulePermission: 'can_edit_outsourcing'
            }, {
                label: 'General Procurement',
                icon: 'icon-manufacturing-procurement',
                // icon: 'icon-purchasing',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/purchasing/orders`],
                requiredModulePermission: 'can_edit_purchase'
            }, {
                label: 'Contacts & Events',
                icon: 'icon-contacts-events',
                routerLink: ['/crm'],
                // routerLink: ['/external', `${environment.link_url}dash/crm/businnes-partners`],
                requiredModulePermission: 'can_edit_contacts_and_events'
            }, {
                label: 'QC',
                icon: 'icon-quality-control',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/quality-control/invoices`],
                requiredModulePermission: 'can_edit_quality_control'
            }, {
                label: 'Manufacturing',
                icon: 'icon-manufacturing',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/production/plan`],
                requiredModulePermission: 'can_edit_manufacturing'
            }, {
                label: 'Sales',
                icon: 'icon-sales',
                // routerLink: ['/external', `${environment.link_url}dash/sales/lists`],
                routerLink: ['/sales'],
                requiredModulePermission: 'can_edit_sales'
            }, {
                label: 'Payments',
                icon: 'icon-payments',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/payments`],
                requiredModulePermission: 'can_edit_payments'
            }, {
                label: 'Administration',
                icon: 'icon-administration',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/admin/users-list`],
                requiredModulePermission: 'can_edit_administration'
            }, {
                label: 'Corespondents',
                icon: 'pi pi-users',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/correspondents`],
                requiredModulePermission: 'can_edit_correspondents'
            }, {
                label: 'Reports',
                icon: 'icon-reports',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/accounting/cost-reports`],
                requiredModulePermission: 'can_edit_reports'
            }, {
                label: 'Delivery',
                icon: 'icon-delivery-chains',
                routerLink: '/delivery-chains',
                requiredModulePermission: 'can_edit_delivery_chain'
            }, {
                label: 'Business Trips',
                icon: 'pi pi-car',
                routerLink: [`/business-trips/trips`],
                requiredModulePermission: 'can_edit_business_trips'
            }, {
                label: 'Instruments/Tools/Equipment',
                icon: 'pi pi-database',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/instruments/instruments-and-tools`],
                requiredModulePermission: 'can_edit_administration'
            }];
        this.router.events.subscribe(evt => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)
                this.changeRoute(evt.url);
        });
    }
    ngOnInit() {
    }
    changeRoute(url) {
        if (url.includes('showGuide=true')) {
            setTimeout(() => {
                this.showGuide();
            }, 700);
        }
    }
    logout() {
        this.modalService.confirm('danger', 'Log Out').subscribe(res => {
            if (res) {
                this.auth.logout();
                this.router.navigateByUrl('/login').then();
            }
        });
    }
    showGuide() {
        this.modalService.showBusinessGuide();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["pek-dashboard"]], decls: 12, vars: 2, consts: [[1, "dashboard"], [1, "page__content"], [1, "dashboard__title"], [1, "dashboard__list"], ["ngFor", "", 3, "ngForOf"], [1, "dashboard__item"], ["pButton", "", "type", "button", "icon", "pi pi-book", "label", "Business Guide", 1, "dashboard__button", "dashboard__button_guide", 3, "click"], [1, "dashboard__item_log-out"], ["pButton", "", "type", "button", "label", "Log Out", 1, "dashboard__button", "dashboard__button_log-out", "p-button-secondary", 3, "icon", "click"], ["class", "dashboard__item", 4, "ngIf"], ["pButton", "", "type", "button", 1, "dashboard__button", 3, "routerLink", "label", "icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Welcome To R-WAVE ERP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DashboardComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 3)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_8_listener() { return ctx.showGuide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "icon-logout");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".dashboard[_ngcontent-%COMP%] {\n  padding: 6rem 4rem;\n  max-width: 100rem;\n  width: 100%;\n  margin: 0 auto;\n}\n.dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.dashboard__item_log-out[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n.dashboard__item[_ngcontent-%COMP%]:nth-child(16) {\n  grid-area: 6/2;\n}\n.dashboard__list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n.dashboard__button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4.25rem;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.dashboard__button[_ngcontent-%COMP%]     .p-button-label {\n  flex: 0 0 auto;\n}\n.dashboard__button[_ngcontent-%COMP%]     .p-button-icon {\n  font-size: 1.5rem;\n  margin-right: 1rem;\n}\n.dashboard__button_disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.75;\n}\n.dashboard__button[_ngcontent-%COMP%]:hover {\n  background: var(--theme-color-primary-hover);\n  border-color: var(--theme-color-primary-hover);\n}\n.dashboard__button.p-button-secondary[_ngcontent-%COMP%]:hover {\n  background: #475569;\n  border-color: #475569;\n}\n.dashboard__button_guide[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  background: #55b157;\n  border-color: #55b157;\n}\n.dashboard__button_guide[_ngcontent-%COMP%]:hover {\n  background: #16A34A;\n  border-color: #16A34A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFNTTtFQUNFLGdCQUFBO0FBSlI7QUFRSTtFQUNFLGNBQUE7QUFOTjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVRKO0FBWU07RUFDRSxjQUFBO0FBVlI7QUFhTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWVJO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0FBYk47QUFnQkk7RUFDRSw0Q0FBQTtFQUNBLDhDQUFBO0FBZE47QUFrQk07RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBaEJSO0FBb0JJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBbEJOO0FBb0JNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQWxCUiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkIHtcclxuICBwYWRkaW5nOiA2cmVtIDRyZW07XHJcbiAgbWF4LXdpZHRoOiAxMDByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICAmX2xvZy1vdXQge1xyXG4gICAgICAvL2dyaWQtYXJlYTogNi8zO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDE2KSB7XHJcbiAgICAgIGdyaWQtYXJlYTogNi8yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0LjI1cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgIDo6bmctZGVlcCB7XHJcbiAgICAgIC5wLWJ1dHRvbi1sYWJlbCB7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wLWJ1dHRvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX2Rpc2FibGVkIHtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnktaG92ZXIpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnktaG92ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICYucC1idXR0b24tc2Vjb25kYXJ5IHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzQ3NTU2OTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0NzU1Njk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX2d1aWRlIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogIzU1YjE1NztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTViMTU3O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE2QTM0QTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMxNkEzNEE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.routing */ 7976);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 77528);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_0__.DashboardRouting] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_0__.DashboardRouting] }); })();


/***/ }),

/***/ 7976:
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRouting": () => (/* binding */ DashboardRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 77528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', title: 'Dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent }
];
class DashboardRouting {
}
DashboardRouting.ɵfac = function DashboardRouting_Factory(t) { return new (t || DashboardRouting)(); };
DashboardRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRouting });
DashboardRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map