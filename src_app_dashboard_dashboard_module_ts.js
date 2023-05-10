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
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 50384);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 73867);








function DashboardComponent_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", route_r1.routerLink)("label", route_r1.label)("icon", route_r1.icon);
} }
function DashboardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DashboardComponent_ng_template_5_li_0_Template, 2, 3, "li", 10);
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
            }, {
                label: 'Production Lists Procurement',
                icon: 'icon-manufacturing-procurement',
                routerLink: ['/procurement'],
                requiredModulePermission: 'can_edit_manufacturing_procurement'
            }, {
                label: 'Outsourcing',
                icon: 'icon-outsourcing',
                routerLink: ['/outsourcing'],
                requiredModulePermission: 'can_edit_outsourcing'
            }, {
                label: 'General Procurement',
                icon: 'icon-manufacturing-procurement',
                // icon: 'icon-purchasing',
                routerLink: ['/purchasing'],
                requiredModulePermission: 'can_edit_purchase'
            }, {
                label: 'Contacts & Events',
                icon: 'icon-contacts-events',
                routerLink: ['/crm'],
                requiredModulePermission: 'can_edit_contacts_and_events'
            }, {
                label: 'QC',
                icon: 'icon-quality-control',
                // routerLink: ['/external', `${environment.link_url}dash/quality-control/invoices`],
                routerLink: ['/quality-control'],
                requiredModulePermission: 'can_edit_quality_control'
            }, {
                label: 'Manufacturing',
                icon: 'icon-manufacturing',
                // routerLink: ['/external', `${environment.link_url}dash/production/plan`],
                routerLink: ['/manufacturing'],
                requiredModulePermission: 'can_edit_manufacturing'
            }, {
                label: 'Sales',
                icon: 'icon-sales',
                routerLink: ['/sales'],
                requiredModulePermission: 'can_edit_sales'
            }, {
                label: 'Payments',
                icon: 'icon-payments',
                routerLink: ['/payments'],
                requiredModulePermission: 'can_edit_payments'
            }, {
                label: 'Administration',
                icon: 'icon-administration',
                routerLink: ['/external', `${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/admin/users-list`],
                requiredModulePermission: 'can_edit_administration'
            }, {
                label: 'Corespondents',
                icon: 'pi pi-users',
                routerLink: [`/correspondents`],
                requiredModulePermission: 'can_edit_correspondents'
            }, {
                label: 'Reports',
                icon: 'icon-reports',
                routerLink: ['/external', `${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/accounting/cost-reports`],
                requiredModulePermission: 'can_edit_reports'
            }, {
                label: 'Delivery',
                icon: 'icon-delivery-procurement-chains',
                routerLink: ['/external', `${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.link_url}dash/delivery-chains`],
                requiredModulePermission: 'can_edit_delivery_chain'
            }, {
                label: 'Business Trips',
                icon: 'pi pi-car',
                routerLink: [`/business-trips/trips`],
                requiredModulePermission: 'can_edit_business_trips'
            }, {
                label: 'Instruments/Tools/Equipment',
                icon: 'pi pi-database',
                routerLink: [`/instruments/instruments-and-tools`],
                requiredModulePermission: 'can_edit_instruments_and_tools'
            }, {
                label: 'ERP Statistics',
                icon: 'pi pi-chart-bar',
                routerLink: ['/statistics'],
                requiredModulePermission: 'can_edit_instruments_and_tools'
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
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["pek-dashboard"]], decls: 12, vars: 2, consts: [[1, "dashboard"], [1, "page__content"], [1, "dashboard__title"], [1, "dashboard__list"], ["ngFor", "", 3, "ngForOf"], [1, "dashboard__item"], ["pButton", "", "type", "button", "icon", "pi pi-book", "label", "Business Guide", 1, "dashboard__button", "dashboard__button_guide", 3, "click"], [1, "dashboard__item_hide"], [1, "dashboard__item_log-out"], ["pButton", "", "type", "button", "label", "Log Out", 1, "dashboard__button", "dashboard__button_log-out", "p-button-secondary", 3, "icon", "click"], ["class", "dashboard__item", 4, "ngIf"], ["pButton", "", "type", "button", 1, "dashboard__button", 3, "routerLink", "label", "icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "icon-logout");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".dashboard[_ngcontent-%COMP%] {\n  padding: 6rem 4rem;\n  max-width: 100rem;\n  width: 100%;\n  margin: 0 auto;\n}\n.dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.dashboard__item_log-out[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n.dashboard__item[_ngcontent-%COMP%]:nth-child(16) {\n  grid-area: 6/2;\n}\n.dashboard__list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n.dashboard__button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4.25rem;\n  justify-content: center;\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.dashboard__button[_ngcontent-%COMP%]     .p-button-label {\n  flex: 0 0 auto;\n}\n.dashboard__button[_ngcontent-%COMP%]     .p-button-icon {\n  font-size: 1.5rem;\n  margin-right: 1rem;\n}\n.dashboard__button_disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.75;\n}\n.dashboard__button[_ngcontent-%COMP%]:hover {\n  background: var(--theme-color-primary-hover);\n  border-color: var(--theme-color-primary-hover);\n}\n.dashboard__button.p-button-secondary[_ngcontent-%COMP%]:hover {\n  background: #475569;\n  border-color: #475569;\n}\n.dashboard__button_guide[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  background: #55b157;\n  border-color: #55b157;\n}\n.dashboard__button_guide[_ngcontent-%COMP%]:hover {\n  background: #16A34A;\n  border-color: #16A34A;\n}\n@media (max-width: 768px) {\n  .dashboard[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    font-size: 1.375rem;\n  }\n  .dashboard__list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .dashboard__button[_ngcontent-%COMP%] {\n    height: 3rem;\n    font-size: 1.125rem;\n  }\n  .dashboard__button[_ngcontent-%COMP%]  .p-button-icon {\n    display: block !important;\n    font-size: 1.25rem;\n  }\n  .dashboard__button_guide[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n  .dashboard__button_hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard__button_log-out[_ngcontent-%COMP%] {\n    margin-top: -1rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFRTTtFQUNFLGdCQUFBO0FBTlI7QUFVSTtFQUNFLGNBQUE7QUFSTjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtBQVZKO0FBYUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVhKO0FBY007RUFDRSxjQUFBO0FBWlI7QUFlTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQWlCSTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtBQWZOO0FBa0JJO0VBQ0UsNENBQUE7RUFDQSw4Q0FBQTtBQWhCTjtBQW9CTTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFsQlI7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQk47QUFzQk07RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBcEJSO0FBeUJFO0VBaEZGO0lBaUZJLGFBQUE7RUF0QkY7RUF3QkU7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0VBdEJKO0VBeUJFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsU0FBQTtFQXZCSjtFQTBCRTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtFQXhCSjtFQTJCTTtJQUNFLHlCQUFBO0lBQ0Esa0JBQUE7RUF6QlI7RUE2Qkk7SUFDRSxnQkFBQTtFQTNCTjtFQThCSTtJQUNFLGFBQUE7RUE1Qk47RUErQkk7SUFDRSw0QkFBQTtFQTdCTjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2NyZWVucy12YXJpYWJsZXNcIjtcclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gIHBhZGRpbmc6IDZyZW0gNHJlbTtcclxuICBtYXgtd2lkdGg6IDEwMHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgICZfbG9nLW91dCB7XHJcbiAgICAgIC8vZ3JpZC1hcmVhOiA2LzM7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMTYpIHtcclxuICAgICAgZ3JpZC1hcmVhOiA2LzI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQuMjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtYnV0dG9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfZGlzYWJsZWQge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeS1ob3Zlcik7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeS1ob3Zlcik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wLWJ1dHRvbi1zZWNvbmRhcnkge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc1NTY5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ3NTU2OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfZ3VpZGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTViMTU3O1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1NWIxNTc7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTZBMzRBO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzE2QTM0QTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtd2lkdGgpIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG5cclxuICAgICAgJjo6bmctZGVlcCB7XHJcbiAgICAgICAgLnAtYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfZ3VpZGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfaGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9sb2ctb3V0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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