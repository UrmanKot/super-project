"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 50384);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);








function DashboardComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", route_r1.routerLink)("label", route_r1.label)("icon", route_r1.icon);
} }
class DashboardComponent {
    constructor(auth, router, modalService) {
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.routes = [{
                label: 'Product Structure',
                routerLink: '/product-structure',
                icon: 'icon-product-structure',
            }, {
                label: 'Confirmation',
                icon: 'icon-confirmation',
                routerLink: ['/confirmation'],
            }, {
                label: 'Warehouse',
                icon: 'icon-warehouse',
                routerLink: ['/warehouse'],
                // routerLink: ['/external', `${environment.link_url}dash/warehouse/products`],
            }, {
                label: 'Production Lists Procurement',
                icon: 'icon-manufacturing-procurement',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/procurement/orders`],
            }, {
                label: 'Outsourcing',
                icon: 'icon-outsourcing',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/outsource/outsource-chain`],
            }, {
                label: 'General Procurement',
                icon: 'icon-manufacturing-procurement',
                // icon: 'icon-purchasing',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/purchasing/orders`],
            }, {
                label: 'Contacts & Events',
                icon: 'icon-contacts-events',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/crm/businnes-partners`],
            }, {
                label: 'QC',
                icon: 'icon-quality-control',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/quality-control/invoices`],
            }, {
                label: 'Manufacturing',
                icon: 'icon-manufacturing',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/production/plan`],
            }, {
                label: 'Sales',
                icon: 'icon-sales',
                // routerLink: ['/external', `${environment.link_url}dash/sales/lists`],
                routerLink: ['/sales'],
            }, {
                label: 'Payments',
                icon: 'icon-payments',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/payments`],
            }, {
                label: 'Administration',
                icon: 'icon-administration',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/admin/users-list`],
            }, {
                label: 'Corespondents',
                icon: 'pi pi-users',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/correspondents`],
            }, {
                label: 'Reports',
                icon: 'icon-reports',
                routerLink: ['/external', `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/accounting/cost-reports`],
            }, {
                label: 'Delivery',
                icon: 'icon-delivery-chains',
                routerLink: '/delivery-chains',
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
        this.modalService.showGuide();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["pek-dashboard"]], decls: 10, vars: 2, consts: [[1, "dashboard"], [1, "page__content"], [1, "dashboard__title"], [1, "dashboard__list"], ["class", "dashboard__item", 4, "ngFor", "ngForOf"], [1, "dashboard__item"], ["pButton", "", "type", "button", "icon", "pi pi-book", "label", "Business Guide", 1, "dashboard__button", "dashboard__button_guide", 3, "click"], [1, "dashboard__item_log-out"], ["pButton", "", "type", "button", "label", "Log Out", 1, "dashboard__button", "dashboard__button_log-out", "p-button-secondary", 3, "icon", "click"], ["pButton", "", "type", "button", 1, "dashboard__button", 3, "routerLink", "label", "icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Welcome To R-WAVE ERP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DashboardComponent_li_5_Template, 2, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_7_listener() { return ctx.showGuide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "icon-logout");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective], styles: [".dashboard[_ngcontent-%COMP%] {\n  padding: 6rem 4rem;\n  max-width: 100rem;\n  width: 100%;\n  margin: 0 auto;\n}\n.dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.dashboard__item_log-out[_ngcontent-%COMP%] {\n  grid-area: 6/3;\n}\n.dashboard__item_log-out[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.dashboard__list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n.dashboard__button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4.25rem;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.dashboard__button[_ngcontent-%COMP%]     .p-button-label {\n  flex: 0 0 auto;\n}\n.dashboard__button[_ngcontent-%COMP%]     .p-button-icon {\n  font-size: 1.5rem;\n  margin-right: 1rem;\n}\n.dashboard__button_disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.75;\n}\n.dashboard__button[_ngcontent-%COMP%]:hover {\n  background: var(--theme-color-primary-hover);\n  border-color: var(--theme-color-primary-hover);\n}\n.dashboard__button.p-button-secondary[_ngcontent-%COMP%]:hover {\n  background: #475569;\n  border-color: #475569;\n}\n.dashboard__button_guide[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  background: #55b157;\n  border-color: #55b157;\n}\n.dashboard__button_guide[_ngcontent-%COMP%]:hover {\n  background: #16A34A;\n  border-color: #16A34A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFHSTtFQUNFLGNBQUE7QUFETjtBQUdNO0VBQ0UsZ0JBQUE7QUFEUjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtBQUpKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxKO0FBUU07RUFDRSxjQUFBO0FBTlI7QUFTTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVdJO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0FBVE47QUFZSTtFQUNFLDRDQUFBO0VBQ0EsOENBQUE7QUFWTjtBQWNNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQVpSO0FBZ0JJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBZE47QUFnQk07RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBZFIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XHJcbiAgcGFkZGluZzogNnJlbSA0cmVtO1xyXG4gIG1heC13aWR0aDogMTAwcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgJl9sb2ctb3V0IHtcclxuICAgICAgZ3JpZC1hcmVhOiA2LzM7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQuMjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtYnV0dG9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfZGlzYWJsZWQge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeS1ob3Zlcik7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeS1ob3Zlcik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wLWJ1dHRvbi1zZWNvbmRhcnkge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc1NTY5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ3NTU2OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfZ3VpZGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTViMTU3O1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1NWIxNTc7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTZBMzRBO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzE2QTM0QTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_0__.DashboardRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_0__.DashboardRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


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