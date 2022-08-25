"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'slopehelper-erp-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["pek-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.interceptor */ 8000);
/* harmony import */ var _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation/confirmation.module */ 9194);
/* harmony import */ var _product_structure_product_structure_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-structure/product-structure.module */ 5707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    multi: true,
    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        INTERCEPTOR_PROVIDER,
        _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRouting,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_6__.ConfirmationModule,
        _product_structure_product_structure_module__WEBPACK_IMPORTED_MODULE_7__.ProductStructureModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRouting,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_6__.ConfirmationModule,
        _product_structure_product_structure_module__WEBPACK_IMPORTED_MODULE_7__.ProductStructureModule] }); })();


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouting": () => (/* binding */ AppRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/components/layout/layout.component */ 6144);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _layout_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
            },
            {
                path: 'product-structure',
                title: 'Product structure',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./product-structure/product-structure.module */ 5707)).then(m => m.ProductStructureModule)
            },
            {
                path: 'confirmation',
                title: 'Confirmation',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./confirmation/confirmation.routing */ 9294)).then(m => m.ConfirmationRouting)
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule) },
    // Не удалять
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
class AppRouting {
}
AppRouting.ɵfac = function AppRouting_Factory(t) { return new (t || AppRouting)(); };
AppRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRouting });
AppRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 4411:
/*!*****************************************!*\
  !*** ./src/app/auth/auth-state.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthState": () => (/* binding */ AuthState)
/* harmony export */ });
var AuthState;
(function (AuthState) {
    AuthState["PENDING"] = "pending";
    AuthState["LOGGED_IN"] = "logged-in";
    AuthState["LOGGED_OUT"] = "logged-out";
})(AuthState || (AuthState = {}));


/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function AuthComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class AuthComponent {
    constructor(auth, fb, router) {
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        this.errorSub = this.auth.error$.subscribe(error => this.errorMessage = error);
    }
    login() {
        const user = this.loginForm.value;
        this.auth.login(user).subscribe(() => {
            this.router.navigateByUrl('/').then();
        }, (error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error)));
    }
    ngOnDestroy() {
        this.errorSub.unsubscribe();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["pek-auth"]], decls: 14, vars: 3, consts: [[1, "auth-page"], [1, "row", "m-0"], [1, "col-sm-3", "col-12", "mx-auto"], [1, "card"], [1, "card-body", "py-5"], [1, "auth-header"], [1, "logo"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "username", "placeholder", "username"], ["type", "text", "formControlName", "password", "placeholder", "pass"], ["type", "submit", 3, "disabled"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Slopehelper ERP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8)(10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AuthComponent_div_13_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _auth_state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-state.enum */ 4411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginPageUri = ['/login'];
    }
    canActivate(route, state) {
        return this.auth.getActualState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => {
            return state === _auth_state_enum__WEBPACK_IMPORTED_MODULE_0__.AuthState.LOGGED_IN ? true : this.router.createUrlTree(this.loginPageUri);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 8000:
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class AuthInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        if (this.authService.isAuthentificated()) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.authService.token}`)
            });
        }
        return next.handle(req)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            if (error.status === 401) {
                this.authService.logout();
                this.router.navigate(['/login'], {
                    queryParams: {
                        authFailed: true
                    }
                }).then();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.routing */ 8860);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _auth_routing__WEBPACK_IMPORTED_MODULE_0__.AuthRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _auth_routing__WEBPACK_IMPORTED_MODULE_0__.AuthRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 8860:
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRouting": () => (/* binding */ AuthRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent }
];
class AuthRouting {
}
AuthRouting.ɵfac = function AuthRouting_Factory(t) { return new (t || AuthRouting)(); };
AuthRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthRouting });
AuthRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthResponse": () => (/* binding */ AuthResponse),
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "AuthStateObject": () => (/* binding */ AuthStateObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var _auth_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-state.enum */ 4411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
var _AuthService_onAuth$;







class AuthResponse {
}
class AuthStateObject {
}
class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        _AuthService_onAuth$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            state: _auth_state_enum__WEBPACK_IMPORTED_MODULE_1__.AuthState.PENDING,
            user: undefined,
        }));
        this.onAuth$ = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__classPrivateFieldGet)(this, _AuthService_onAuth$, "f").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
        this.user = null;
        this.userPermissions = null;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url;
        this.url = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.users_url;
        setTimeout(() => {
            this.getMe().subscribe();
        });
    }
    get token() {
        return localStorage.getItem('access');
    }
    login(user) {
        return this.httpClient.post(this.API_URL + 'token/', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(this.setToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.getMe()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(this.handleError.bind(this)));
    }
    handleError(error) {
        const message = error.error.data.detail;
        this.error$.next(message);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(error);
    }
    logout() {
        this.setToken(null);
    }
    isAuthentificated() {
        return !!this.token;
    }
    setToken(response) {
        if (response) {
            localStorage.setItem('access', response.access);
            localStorage.setItem('refresh', response.refresh);
        }
        else {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        }
    }
    getActualState() {
        return this.onAuth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(({ state }) => state !== _auth_state_enum__WEBPACK_IMPORTED_MODULE_1__.AuthState.PENDING), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({ state }) => state));
    }
    getMe() {
        return this.httpClient.get(this.API_URL + this.url + 'get_me/')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(user => this.setState(user)));
    }
    setState(user) {
        this.user = user;
        if (this.user) {
            this.getUserPermissions();
        }
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__classPrivateFieldGet)(this, _AuthService_onAuth$, "f").next({
            state: this.user ? _auth_state_enum__WEBPACK_IMPORTED_MODULE_1__.AuthState.LOGGED_IN : _auth_state_enum__WEBPACK_IMPORTED_MODULE_1__.AuthState.LOGGED_OUT,
            user: this.user,
        });
    }
    getUserPermissions() {
        this.userPermissions = {
            can_edit_product_structure: this.user.can_edit_product_structure,
            can_edit_confirmation: this.user.can_edit_confirmation,
            can_edit_warehouse: this.user.can_edit_warehouse,
            can_edit_manufacturing_procurement: this.user.can_edit_manufacturing_procurement,
            can_edit_quality_control: this.user.can_edit_quality_control,
            can_edit_manufacturing: this.user.can_edit_manufacturing,
            can_edit_contacts_and_events: this.user.can_edit_contacts_and_events,
            can_edit_outsourcing: this.user.can_edit_outsourcing,
            can_edit_purchase: this.user.can_edit_purchase,
            can_edit_sales: this.user.can_edit_sales,
            can_edit_reports: this.user.can_edit_reports,
            can_edit_administration: this.user.can_edit_administration,
        };
    }
}
_AuthService_onAuth$ = new WeakMap();
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7949:
/*!**********************************************************************************************************!*\
  !*** ./src/app/confirmation/components/nomenclature-confirmation/nomenclature-confirmation.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NomenclatureConfirmationComponent": () => (/* binding */ NomenclatureConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/nomenclature */ 3068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 7958);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module-icon/module-icon.component */ 468);









function NomenclatureConfirmationComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclatureConfirmationComponent_ng_template_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.onDecline()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclatureConfirmationComponent_ng_template_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.onConfirm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.selectedNomenclatures == null ? null : ctx_r1.selectedNomenclatures.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.selectedNomenclatures == null ? null : ctx_r1.selectedNomenclatures.length) === 0);
} }
function NomenclatureConfirmationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Root Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function NomenclatureConfirmationComponent_ng_template_13_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NomenclatureConfirmationComponent_ng_template_13_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NomenclatureConfirmationComponent_ng_template_13_div_8_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parent_r13 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const i_r11 = ctx_r15.rowIndex;
    const nomenclature_r10 = ctx_r15.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", parent_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r11 !== nomenclature_r10.parents.length - 1);
} }
function NomenclatureConfirmationComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableCheckbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NomenclatureConfirmationComponent_ng_template_13_div_8_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const nomenclature_r10 = ctx.$implicit;
    const i_r11 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", nomenclature_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](nomenclature_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", nomenclature_r10.parents);
} }
function NomenclatureConfirmationComponent_ng_template_14_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 28);
} }
function NomenclatureConfirmationComponent_ng_template_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NomenclatureConfirmationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NomenclatureConfirmationComponent_ng_template_14_i_2_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NomenclatureConfirmationComponent_ng_template_14_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
function NomenclatureConfirmationComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclatureConfirmationComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NomenclatureConfirmationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NomenclatureConfirmationComponent_div_16_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class NomenclatureConfirmationComponent {
    constructor(nomenclatureService, modalService) {
        this.nomenclatureService = nomenclatureService;
        this.modalService = modalService;
        this.nomenclatures = [];
        this.selectedNomenclatures = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.getNomenclatures();
    }
    getNomenclatures() {
        this.nomenclatureService.getNewNomenclatures().subscribe(nomenclatures => {
            this.nomenclatures = nomenclatures;
            this.isLoading = false;
        });
    }
    onConfirm() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                const confirmNomenclatures = [];
                this.selectedNomenclatures.forEach(nomenclature => {
                    confirmNomenclatures.push({
                        id: nomenclature.id,
                        approved: _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureApproval.APPROVED
                    });
                });
                this.nomenclatureService.updateSeveralPartly(confirmNomenclatures).subscribe(() => {
                    confirmNomenclatures.forEach(nomenclature => {
                        this.nomenclatures = this.nomenclatures.filter(product => product.id !== nomenclature.id);
                    });
                    this.selectedNomenclatures = null;
                });
            }
        });
    }
    onDecline() {
        this.modalService.confirm('danger').subscribe(decline => {
            if (decline) {
                const declineNomenclatures = [];
                this.selectedNomenclatures.forEach(product => {
                    declineNomenclatures.push({
                        id: product.id,
                        approved: _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_0__.ENomenclatureApproval.DECLINED
                    });
                });
                this.nomenclatureService.updateSeveralPartly(declineNomenclatures).subscribe(() => {
                    declineNomenclatures.forEach(nomenclature => {
                        this.nomenclatures = this.nomenclatures.filter(product => product.id !== nomenclature.id);
                    });
                    this.selectedNomenclatures = [];
                });
            }
        });
    }
}
NomenclatureConfirmationComponent.ɵfac = function NomenclatureConfirmationComponent_Factory(t) { return new (t || NomenclatureConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_1__.NomenclatureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
NomenclatureConfirmationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NomenclatureConfirmationComponent, selectors: [["pek-nomenclature-confirmation"]], decls: 17, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 421px)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Decline", 1, "ml-auto", "p-button-danger", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Confirm", 1, "p-button-success", 3, "disabled", "click"], [2, "width", "3%"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "45%"], [2, "width", "47%"], [3, "value"], [1, "text-center", 2, "width", "5%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function NomenclatureConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Nomenclature Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function NomenclatureConfirmationComponent_Template_p_table_selectionChange_9_listener($event) { return ctx.selectedNomenclatures = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NomenclatureConfirmationComponent_ng_template_11_Template, 3, 2, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NomenclatureConfirmationComponent_ng_template_12_Template, 9, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NomenclatureConfirmationComponent_ng_template_13_Template, 9, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, NomenclatureConfirmationComponent_ng_template_14_Template, 4, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NomenclatureConfirmationComponent_ng_template_15_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NomenclatureConfirmationComponent_div_16_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "confirmation")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollable", true)("paginator", ctx.nomenclatures.length > 0)("rows", 10)("selection", ctx.selectedNomenclatures)("value", ctx.nomenclatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.nomenclatures.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableHeaderCheckbox, _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub21lbmNsYXR1cmUtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6132:
/*!************************************************************************************************!*\
  !*** ./src/app/confirmation/components/payment-confirmation/payment-confirmation.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentConfirmationComponent": () => (/* binding */ PaymentConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _reports_services_payment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reports/services/payment.service */ 2734);
/* harmony import */ var _reports_services_service_invoice_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../reports/services/service-invoice-payment.service */ 184);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module-icon/module-icon.component */ 468);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/money-format.pipe */ 5079);











function PaymentConfirmationComponent_ng_template_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r16.paymentTotals.totalPricePayments), " \u20AC, Total Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx_r16.paymentTotals.totalAmountPayments), " \u20AC ");
} }
function PaymentConfirmationComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PaymentConfirmationComponent_ng_template_15_ng_container_2_Template, 4, 6, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_ng_template_15_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.declinePayments()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_ng_template_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.confirmPayments()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingPayments)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r1.selectedPayments == null ? null : ctx_r1.selectedPayments.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r1.selectedPayments == null ? null : ctx_r1.selectedPayments.length) === 0);
} }
function PaymentConfirmationComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Invoice Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function PaymentConfirmationComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-tableCheckbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 29)(9, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 32)(20, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const payment_r20 = ctx.$implicit;
    const i_r21 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", payment_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 8, payment_r20.invoice.system_creation_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payment_r20.invoice.self_serial_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payment_r20.invoice.supplier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, payment_r20.invoice_total_price), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 13, payment_r20.payment_amount), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payment_r20.invoice.order.id);
} }
function PaymentConfirmationComponent_ng_template_18_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 37);
} }
function PaymentConfirmationComponent_ng_template_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PaymentConfirmationComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PaymentConfirmationComponent_ng_template_18_i_2_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PaymentConfirmationComponent_ng_template_18_span_3_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isLoadingPayments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.isLoadingPayments);
} }
function PaymentConfirmationComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_ng_template_19_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PaymentConfirmationComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_div_20_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function PaymentConfirmationComponent_ng_template_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r28.paymentTotals.totalPriceServiceInvoicePayments), " \u20AC, Total Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx_r28.paymentTotals.totalAmountServiceInvoicePayments), " \u20AC ");
} }
function PaymentConfirmationComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PaymentConfirmationComponent_ng_template_25_ng_container_2_Template, 4, 6, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_ng_template_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.declineServiceInvoicePayments()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_ng_template_25_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.confirmServiceInvoicePayments()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.isLoadingServiceInvoicePayments)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r8.selectedServiceInvoicePayments == null ? null : ctx_r8.selectedServiceInvoicePayments.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r8.selectedServiceInvoicePayments == null ? null : ctx_r8.selectedServiceInvoicePayments.length) === 0);
} }
function PaymentConfirmationComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Invoice Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function PaymentConfirmationComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-tableCheckbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 29)(9, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "moneyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 32)(20, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const payment_r32 = ctx.$implicit;
    const i_r33 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", payment_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r33 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 8, payment_r32.serviceinvoice.system_creation_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payment_r32.serviceinvoice.self_serial_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payment_r32.serviceinvoice.supplier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, payment_r32.service_invoice_total_price), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 13, payment_r32.service_invoice_payment_amount), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payment_r32.serviceinvoice.order.id);
} }
function PaymentConfirmationComponent_ng_template_28_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 37);
} }
function PaymentConfirmationComponent_ng_template_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PaymentConfirmationComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PaymentConfirmationComponent_ng_template_28_i_2_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PaymentConfirmationComponent_ng_template_28_span_3_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.isLoadingServiceInvoicePayments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r11.isLoadingServiceInvoicePayments);
} }
function PaymentConfirmationComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_ng_template_29_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r7.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PaymentConfirmationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_div_30_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r7.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function PaymentConfirmationComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Total Price: ... \u20AC, Total Amount: ... \u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
class PaymentConfirmationComponent {
    constructor(paymentService, serviceInvoicePaymentService, modalService) {
        this.paymentService = paymentService;
        this.serviceInvoicePaymentService = serviceInvoicePaymentService;
        this.modalService = modalService;
        this.paymentTotals = {
            totalPricePayments: 0,
            totalPriceServiceInvoicePayments: 0,
            totalAmountPayments: 0,
            totalAmountServiceInvoicePayments: 0
        };
        this.isLoadingPayments = true;
        this.isLoadingServiceInvoicePayments = true;
        this.serviceInvoicePayments = [];
        this.payments = [];
        this.selectedPayments = [];
        this.selectedServiceInvoicePayments = [];
    }
    ngOnInit() {
        this.getPayments();
        this.getServiceInvoicePayments();
    }
    getPayments() {
        this.paymentService.getConfirmationPayments().subscribe(payments => {
            this.payments = payments;
            this.countPaymentsTotals();
            this.isLoadingPayments = false;
        });
    }
    getServiceInvoicePayments() {
        this.serviceInvoicePaymentService.getConfirmationPayments().subscribe(serviceInvoicePayments => {
            this.serviceInvoicePayments = serviceInvoicePayments;
            this.countServiceInvoicePaymentsTotals();
            this.isLoadingServiceInvoicePayments = false;
        });
    }
    countPaymentsTotals() {
        this.paymentTotals.totalPricePayments = 0;
        this.paymentTotals.totalAmountPayments = 0;
        this.payments.forEach(payment => {
            this.paymentTotals.totalPricePayments += payment.invoice_total_price;
            this.paymentTotals.totalAmountPayments += parseFloat(payment.payment_amount);
        });
    }
    countServiceInvoicePaymentsTotals() {
        this.paymentTotals.totalPriceServiceInvoicePayments = 0;
        this.paymentTotals.totalAmountServiceInvoicePayments = 0;
        this.serviceInvoicePayments.forEach(payment => {
            this.paymentTotals.totalPriceServiceInvoicePayments += payment.service_invoice_total_price;
            this.paymentTotals.totalAmountServiceInvoicePayments += parseFloat(payment.service_invoice_payment_amount);
        });
    }
    confirmPayments() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                const ids = this.selectedPayments.map(payment => payment.id);
                this.paymentService.severalConfirm(ids).subscribe(() => {
                    ids.forEach(id => this.payments = this.payments.filter(p => p.id !== id));
                    this.countPaymentsTotals();
                    this.selectedPayments = [];
                });
            }
        });
    }
    declinePayments() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                const ids = this.selectedPayments.map(payment => payment.id);
                this.paymentService.severalDecline(ids).subscribe(() => {
                    ids.forEach(id => this.payments = this.payments.filter(p => p.id !== id));
                    this.countPaymentsTotals();
                    this.selectedPayments = [];
                });
            }
        });
    }
    confirmServiceInvoicePayments() {
        this.modalService.confirm('success').subscribe(confirm => {
            if (confirm) {
                const ids = this.selectedServiceInvoicePayments.map(payment => payment.id);
                this.serviceInvoicePaymentService.severalConfirm(ids).subscribe(() => {
                    ids.forEach(id => this.serviceInvoicePayments = this.serviceInvoicePayments.filter(p => p.id !== id));
                    this.countServiceInvoicePaymentsTotals();
                    this.selectedServiceInvoicePayments = [];
                });
            }
        });
    }
    declineServiceInvoicePayments() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                const ids = this.selectedServiceInvoicePayments.map(payment => payment.id);
                this.serviceInvoicePaymentService.severalDecline(ids).subscribe(() => {
                    ids.forEach(id => this.serviceInvoicePayments = this.serviceInvoicePayments.filter(p => p.id !== id));
                    this.countServiceInvoicePaymentsTotals();
                    this.selectedServiceInvoicePayments = [];
                });
            }
        });
    }
    onEditConfirmationLimit() {
        // TODO доделать
    }
}
PaymentConfirmationComponent.ɵfac = function PaymentConfirmationComponent_Factory(t) { return new (t || PaymentConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_services_payment_service__WEBPACK_IMPORTED_MODULE_0__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_services_service_invoice_payment_service__WEBPACK_IMPORTED_MODULE_1__.ServiceInvoicePaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
PaymentConfirmationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PaymentConfirmationComponent, selectors: [["pek-payment-confirmation"]], decls: 33, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page-header__tools"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "label", "Payment Confirmation Limit", 3, "click"], [1, "page__content"], [1, "page__tabs"], [1, "custom-tabs"], ["header", "Invoices", 3, "selected"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 476px)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], ["header", "Auxiliary Invoices"], ["st", ""], ["paymentsEmpty", ""], [1, "d-flex", "align-items-center"], [1, "payment-price"], [4, "ngIf", "ngIfElse"], ["pButton", "", "type", "button", "icon", "pi pi-times", "label", "Decline", 1, "ml-auto", "p-button-danger", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-check", "label", "Confirm", 1, "p-button-success", 3, "disabled", "click"], [1, "text-center", 2, "width", "3%"], [1, "text-center", 2, "width", "15%"], [1, "text-center", 2, "width", "17%"], [2, "width", "20%"], [1, "text-center", 2, "width", "20%"], [1, "text-center", 2, "width", "10%"], [3, "value"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function PaymentConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Payment Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationComponent_Template_button_click_7_listener() { return ctx.onEditConfirmationLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "p-tabView", 8)(11, "p-tabPanel", 9)(12, "div", 10)(13, "p-table", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function PaymentConfirmationComponent_Template_p_table_selectionChange_13_listener($event) { return ctx.selectedPayments = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PaymentConfirmationComponent_ng_template_15_Template, 5, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PaymentConfirmationComponent_ng_template_16_Template, 17, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PaymentConfirmationComponent_ng_template_17_Template, 22, 15, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PaymentConfirmationComponent_ng_template_18_Template, 4, 3, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PaymentConfirmationComponent_ng_template_19_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PaymentConfirmationComponent_div_20_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p-tabPanel", 19)(22, "div", 10)(23, "p-table", 11, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function PaymentConfirmationComponent_Template_p_table_selectionChange_23_listener($event) { return ctx.selectedServiceInvoicePayments = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PaymentConfirmationComponent_ng_template_25_Template, 5, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PaymentConfirmationComponent_ng_template_26_Template, 17, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PaymentConfirmationComponent_ng_template_27_Template, 22, 15, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, PaymentConfirmationComponent_ng_template_28_Template, 4, 3, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, PaymentConfirmationComponent_ng_template_29_Template, 2, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, PaymentConfirmationComponent_div_30_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, PaymentConfirmationComponent_ng_template_31_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "confirmation")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollable", true)("paginator", ctx.payments.length > 0)("rows", 10)("selection", ctx.selectedPayments)("value", ctx.payments);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoadingPayments && ctx.payments.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollable", true)("paginator", ctx.serviceInvoicePayments.length > 0)("rows", 10)("selection", ctx.selectedServiceInvoicePayments)("value", ctx.serviceInvoicePayments);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r7.paginator && !ctx.isLoadingServiceInvoicePayments && ctx.serviceInvoicePayments.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableHeaderCheckbox, _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent, primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_4__.MoneyFormatPipe], styles: [".payment-price[_ngcontent-%COMP%] {\n  font-size: var(--sm-theme-font-size-ml);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InBheW1lbnQtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tc20tdGhlbWUtZm9udC1zaXplLW1sKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9194:
/*!*****************************************************!*\
  !*** ./src/app/confirmation/confirmation.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationModule": () => (/* binding */ ConfirmationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _confirmation_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation.routing */ 9294);
/* harmony import */ var _components_nomenclature_confirmation_nomenclature_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nomenclature-confirmation/nomenclature-confirmation.component */ 7949);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _components_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/payment-confirmation/payment-confirmation.component */ 6132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ConfirmationModule {
}
ConfirmationModule.ɵfac = function ConfirmationModule_Factory(t) { return new (t || ConfirmationModule)(); };
ConfirmationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ConfirmationModule });
ConfirmationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _confirmation_routing__WEBPACK_IMPORTED_MODULE_0__.ConfirmationRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ConfirmationModule, { declarations: [_components_nomenclature_confirmation_nomenclature_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.NomenclatureConfirmationComponent,
        _components_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.PaymentConfirmationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _confirmation_routing__WEBPACK_IMPORTED_MODULE_0__.ConfirmationRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 9294:
/*!******************************************************!*\
  !*** ./src/app/confirmation/confirmation.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationRouting": () => (/* binding */ ConfirmationRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_nomenclature_confirmation_nomenclature_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nomenclature-confirmation/nomenclature-confirmation.component */ 7949);
/* harmony import */ var _components_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/payment-confirmation/payment-confirmation.component */ 6132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', redirectTo: 'nomenclature', pathMatch: 'full' },
    { path: 'nomenclature', component: _components_nomenclature_confirmation_nomenclature_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.NomenclatureConfirmationComponent },
    { path: 'payment', component: _components_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.PaymentConfirmationComponent },
];
class ConfirmationRouting {
}
ConfirmationRouting.ɵfac = function ConfirmationRouting_Factory(t) { return new (t || ConfirmationRouting)(); };
ConfirmationRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConfirmationRouting });
ConfirmationRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfirmationRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2176:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["pek-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6144:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/layout/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/navigation.component */ 7963);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ 9274);




class LayoutComponent {
    constructor() {
        this.isNavigationHidden = false;
    }
    ngOnInit() {
    }
    toggleNavigationVisibility(isHidden) {
        this.isNavigationHidden = isHidden;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["pek-layout"]], decls: 10, vars: 2, consts: [[1, "layout"], [1, "layout__sidebar"], [1, "layout__logo"], [1, "layout__navigation"], [3, "toggleNavigationVisibility"], [1, "layout__header"], [1, "layout__content"], [1, "layout__inner"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pek-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "pek-navigation", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleNavigationVisibility", function LayoutComponent_Template_pek_navigation_toggleNavigationVisibility_5_listener($event) { return ctx.toggleNavigationVisibility($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout_nav-hide", ctx.isNavigationHidden);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent], styles: [".layout[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout__sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 17rem;\n  box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.0823529412);\n  z-index: 10;\n  transition: width 0.3s;\n}\n.layout__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 0.0625rem solid #e4e9f0;\n  padding: 1.5rem 2rem;\n  position: relative;\n  height: 5.3125rem;\n}\n.layout__navigation[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: -0.5rem;\n  padding: 1rem 1.5rem 1rem 2rem;\n  transition: margin-left 0.3s, padding 0.3s;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.layout__navigation[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 20px;\n  background: #fff;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 20;\n}\n.layout__header[_ngcontent-%COMP%] {\n  height: 5.25rem;\n  position: fixed;\n  background: #fff;\n  z-index: 4;\n  left: 17rem;\n  right: 0;\n  top: 0;\n  box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.0823529412);\n  transition: left 0.3s;\n}\n.layout__content[_ngcontent-%COMP%] {\n  padding-left: 17rem;\n  padding-top: 5.1875rem;\n  transition: padding-left 0.3s;\n}\n.layout_nav-hide[_ngcontent-%COMP%]   .layout__content[_ngcontent-%COMP%] {\n  padding-left: 6.625rem;\n}\n.layout_nav-hide[_ngcontent-%COMP%]   .layout__header[_ngcontent-%COMP%] {\n  left: 6.625rem;\n}\n.layout_nav-hide[_ngcontent-%COMP%]   .layout__navigation[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding: 1rem 2rem;\n}\n.layout_nav-hide[_ngcontent-%COMP%]   .layout__sidebar[_ngcontent-%COMP%] {\n  width: 6.625rem;\n}\n.layout_nav-hide[_ngcontent-%COMP%]  .navigation ul .p-menuitem-text {\n  opacity: 0;\n}\n.layout_nav-hide[_ngcontent-%COMP%]  .navigation ul.p-submenu-list .p-menuitem-text {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFETjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSx1REFBQTtFQUNBLHFCQUFBO0FBSEo7QUFNRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUpKO0FBUUk7RUFDRSxzQkFBQTtBQU5OO0FBU0k7RUFDRSxjQUFBO0FBUE47QUFVSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVJOO0FBV0k7RUFDRSxlQUFBO0FBVE47QUFlVTtFQUNFLFVBQUE7QUFiWjtBQWlCWTtFQUNFLFVBQUE7QUFmZCIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX3NpZGViYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxN3JlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSAjMDAwMDAwMTU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbiAgfVxyXG5cclxuICAmX19sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkICNlNGU5ZjA7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNS4zMTI1cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fbmF2aWdhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDFyZW0gMnJlbTtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MsIHBhZGRpbmcgMC4zcztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGhlaWdodDogNS4yNXJlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgbGVmdDogMTdyZW07XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSAjMDAwMDAwMTU7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3M7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTdyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNS4xODc1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogcGFkZGluZy1sZWZ0IDAuM3M7XHJcbiAgfVxyXG5cclxuICAmX25hdi1oaWRlIHtcclxuICAgIC5sYXlvdXRfX2NvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDYuNjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXRfX2hlYWRlciB7XHJcbiAgICAgIGxlZnQ6IDYuNjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXRfX25hdmlnYXRpb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXRfX3NpZGViYXIge1xyXG4gICAgICB3aWR0aDogNi42MjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJjo6bmctZGVlcCB7XHJcbiAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAucC1tZW51aXRlbS10ZXh0IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLnAtc3VibWVudS1saXN0IHtcclxuICAgICAgICAgICAgLnAtbWVudWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9274:
/*!**********************************************************!*\
  !*** ./src/app/layout/components/logo/logo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["pek-logo"]], decls: 2, vars: 0, consts: [[1, "logo"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ERP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-color-primary);\n  font-size: var(--theme-font-size-xxl);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7QUFDRiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGhlbWUtZm9udC1zaXplLXh4bCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7963:
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/navigation/navigation.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tieredmenu */ 1487);




class NavigationComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.toggleNavigationVisibility = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isNavigationHidden = false;
        this.items = [
            {
                label: 'Dashboard',
                icon: 'icon-dashboard',
                routerLink: '/dashboard',
            }, {
                label: 'Product Structure',
                routerLink: 'product-structure',
                command: () => this.test(),
                icon: 'icon-product-structure',
                items: [
                    {
                        label: 'Products',
                        routerLink: '/product-structure/products',
                    },
                    {
                        label: 'Technologies',
                        routerLink: '/product-structure/technologies',
                    },
                    {
                        label: 'Prefixes',
                        routerLink: '/product-structure/prefixes',
                    },
                ],
            }, {
                label: 'Confirmation',
                icon: 'icon-confirmation',
                routerLink: '/confirmation',
                command: () => this.test(),
                items: [
                    { label: 'Nomenclature Confirmation', routerLink: '/confirmation/nomenclature' },
                    { label: 'Payment Confirmation', routerLink: '/confirmation/payment' },
                    { label: 'Write Off Confirmation', routerLink: '/confirmation/prefixes' },
                    { label: 'Production Lists Confirmation', routerLink: '/confirmation/prefixes' },
                    { label: 'Suppliers Confirmation', routerLink: '/confirmation/prefixes' },
                ]
            }, {
                label: 'Warehouse',
                icon: 'icon-warehouse',
                routerLink: '/any',
            }, {
                label: 'Manufacturing Procurement',
                icon: 'icon-manufacturing-procurement',
                styleClass: 'navigation__link-wrap',
                routerLink: '/any',
            }, {
                label: 'Quality Control',
                icon: 'icon-quality-control',
                routerLink: '/any',
            }, {
                label: 'Manufacturing',
                icon: 'icon-manufacturing',
                routerLink: '/any',
            }, {
                label: 'Contacts & Events',
                icon: 'icon-contacts-events',
                routerLink: '/any',
            }, {
                label: 'Outsourcing',
                icon: 'icon-outsourcing',
                routerLink: '/any',
            }, {
                label: 'Purchasing',
                icon: 'icon-purchasing',
                routerLink: '/any',
            }, {
                label: 'Sales',
                icon: 'icon-sales',
                routerLink: '/any',
            }, {
                label: 'Reports',
                icon: 'icon-reports',
                routerLink: '/any',
            }, {
                label: 'Administration',
                icon: 'icon-administration',
                routerLink: '/any',
            }
        ];
        this.routes = [
            {
                label: 'Dashboard',
                commands: ['/any'],
                module: 'dashboard'
            },
            {
                label: 'Product Structure',
                commands: ['/product-structure'],
                module: 'product-structure',
                children: [
                    { label: 'Products', commands: ['/product-structure/products'] },
                    { label: 'Technologies', commands: ['/product-structure/technologies'] },
                    { label: 'Prefixes', commands: ['/product-structure/prefixes'] },
                ]
            },
            {
                label: 'Confirmation',
                commands: ['/confirmation'],
                module: 'confirmation',
                children: [
                    { label: 'Nomenclature Confirmation', commands: ['/confirmation/nomenclature'] },
                    { label: 'Payment Confirmation', commands: ['/confirmation/payment'] },
                    { label: 'Write Off Confirmation', commands: ['/confirmation/prefixes'] },
                    { label: 'Production Lists Confirmation', commands: ['/confirmation/prefixes'] },
                    { label: 'Suppliers Confirmation', commands: ['/confirmation/prefixes'] },
                ]
            },
            {
                label: 'Warehouse',
                commands: ['/any'],
                module: 'warehouse'
            },
            {
                label: 'Manufacturing Procurement',
                commands: ['/any'],
                module: 'manufacturing-procurement'
            },
            {
                label: 'Quality Control',
                commands: ['/any'],
                module: 'quality-control'
            },
            {
                label: 'Manufacturing',
                commands: ['/any'],
                module: 'manufacturing'
            },
            {
                label: 'Contacts & Events',
                commands: ['/any'],
                module: 'contacts-events'
            },
            {
                label: 'Outsourcing',
                commands: ['/any'],
                module: 'outsourcing'
            },
            {
                label: 'Purchasing',
                commands: ['/any'],
                module: 'purchasing'
            },
            {
                label: 'Sales',
                commands: ['/any'],
                module: 'sales'
            },
            {
                label: 'Reports',
                commands: ['/any'],
                module: 'reports'
            },
            {
                label: 'Administration',
                commands: ['/any'],
                module: 'administration'
            },
        ];
    }
    test() {
        this.router.navigate([]);
    }
    ngOnInit() {
        // const activeUrl = this.router.url.split('/').join('');
        //
        // this.routes.forEach(route => {
        //   if (route.children)
        //     route.children.forEach(routeChild => {
        //       const currentRouteChild = routeChild.commands[0].split('/').join('');
        //
        //       // if (currentRouteChild.includes(activeUrl) && activeUrl !== '') {
        //       //   route.active = true;
        //       // }
        //     });
        // });
    }
    onToggleNavigationVisibility() {
        this.isNavigationHidden = !this.isNavigationHidden;
        this.toggleNavigationVisibility.emit(this.isNavigationHidden);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["pek-navigation"]], outputs: { toggleNavigationVisibility: "toggleNavigationVisibility" }, decls: 4, vars: 1, consts: [[1, "navigation"], [3, "model"], [1, "navigation__toggler", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-tieredMenu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_2_listener() { return ctx.onToggleNavigationVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    } }, dependencies: [primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_2__.TieredMenu], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.navigation__toggler[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 0.5rem;\n}\n\n  .navigation .p-tieredmenu {\n  padding: 0;\n  width: 100%;\n  border-radius: 0;\n  border: none;\n}\n\n  .navigation .p-menuitem-text {\n  line-height: 1.3 !important;\n}\n\n  .navigation .p-menuitem {\n  margin-bottom: 1rem;\n}\n\n  .navigation .p-menuitem.p-menuitem-active > .p-menuitem-link {\n  transition: background 0.25s;\n  background: none !important;\n}\n\n  .navigation .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {\n  transform: rotate(0);\n  top: 1px;\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon {\n  background: var(--theme-color-secondary);\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-menuitem-icon {\n  width: 2.625rem;\n  height: 2.625rem;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background 0.25s, color 0.25s;\n  font-size: 1.625rem;\n  margin-right: 0.75rem !important;\n  color: #a1a7ab !important;\n}\n\n  .navigation .p-menuitem-text {\n  color: #a1a7ab !important;\n  font-weight: 500;\n  transition: opacity 0.3s, color 0.25s;\n  white-space: nowrap;\n}\n\n  .navigation .p-submenu-icon {\n  font-size: 1rem;\n  position: relative;\n  top: 2px;\n  color: #a1a7ab !important;\n  transform: rotate(90deg);\n  transition: transform 0.25s, color 0.25s, top 0.25s;\n}\n\n  .navigation .p-menuitem-link {\n  padding: 0;\n}\n\n  .navigation .p-menuitem-link:hover {\n  background: none !important;\n}\n\n  .navigation .p-menuitem-link:hover .p-menuitem-text {\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-menuitem-link:hover .p-menuitem-icon {\n  background: var(--theme-color-secondary);\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-menuitem-link:focus {\n  box-shadow: none !important;\n}\n\n  .navigation .p-menuitem-link-active .p-menuitem-text {\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-menuitem-link-active .p-menuitem-icon {\n  background: var(--theme-color-secondary);\n  color: var(--theme-color-primary) !important;\n}\n\n  .navigation .p-submenu-list {\n  box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.0823529412) !important;\n  padding: 0.625rem 0;\n  border-radius: 0 1rem 1rem 0;\n  left: calc(100% + 1.5rem) !important;\n  top: -0.5rem !important;\n}\n\n  .navigation .p-submenu-list .p-element {\n  margin-bottom: 0;\n}\n\n  .navigation .p-submenu-list .p-menuitem-link {\n  padding: 0.625rem 1rem;\n}\n\n  .navigation .p-submenu-list .p-menuitem-link .p-menuitem-text {\n  line-height: 1.3;\n}\n\n  .navigation__link-wrap .p-menuitem-text {\n  line-height: 1.3 !important;\n  white-space: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBS0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtJO0VBQ0UsMkJBQUE7QUFITjs7QUFNSTtFQUNFLG1CQUFBO0FBSk47O0FBT1E7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FBTFY7O0FBT1U7RUFDRSw0Q0FBQTtBQUxaOztBQVFVO0VBQ0Usb0JBQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7QUFOWjs7QUFTVTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUFQWjs7QUFhSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBWE47O0FBY0k7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQVpOOztBQWVJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtBQWJOOztBQWdCSTtFQUNFLFVBQUE7QUFkTjs7QUFnQk07RUFDRSwyQkFBQTtBQWRSOztBQWdCUTtFQUNFLDRDQUFBO0FBZFY7O0FBaUJRO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQWZWOztBQW9CSTtFQUNFLDJCQUFBO0FBbEJOOztBQXNCTTtFQUNFLDRDQUFBO0FBcEJSOztBQXVCTTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUFyQlI7O0FBeUJJO0VBQ0Usa0VBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQXZCTjs7QUF5Qk07RUFDRSxnQkFBQTtBQXZCUjs7QUEwQk07RUFDRSxzQkFBQTtBQXhCUjs7QUEwQlE7RUFDRSxnQkFBQTtBQXhCVjs7QUE4Qk07RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0FBNUJSIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuXHJcbiAgJl9fdG9nZ2xlciB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubmF2aWdhdGlvbiB7XHJcbiAgICAucC10aWVyZWRtZW51IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucC1tZW51aXRlbS10ZXh0IHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wLW1lbnVpdGVtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICYucC1tZW51aXRlbS1hY3RpdmUge1xyXG4gICAgICAgICYgPiAucC1tZW51aXRlbS1saW5rIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgLnAtbWVudWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wLXN1Ym1lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnAtbWVudWl0ZW0taWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wLW1lbnVpdGVtLWljb24ge1xyXG4gICAgICB3aWR0aDogMi42MjVyZW07XHJcbiAgICAgIGhlaWdodDogMi42MjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzLCBjb2xvciAwLjI1cztcclxuICAgICAgZm9udC1zaXplOiAxLjYyNXJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjYTFhN2FiICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnAtbWVudWl0ZW0tdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAjYTFhN2FiICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgY29sb3IgMC4yNXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnAtc3VibWVudS1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICBjb2xvcjogI2ExYTdhYiAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgY29sb3IgMC4yNXMsIHRvcCAwLjI1cztcclxuICAgIH1cclxuXHJcbiAgICAucC1tZW51aXRlbS1saW5rIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLnAtbWVudWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wLW1lbnVpdGVtLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wLW1lbnVpdGVtLWxpbms6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnAtbWVudWl0ZW0tbGluay1hY3RpdmUge1xyXG4gICAgICAucC1tZW51aXRlbS10ZXh0IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtbWVudWl0ZW0taWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wLXN1Ym1lbnUtbGlzdCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSAjMDAwMDAwMTUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMC42MjVyZW0gMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDFyZW0gMDtcclxuICAgICAgbGVmdDogY2FsYygxMDAlICsgMS41cmVtKSAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5wLWVsZW1lbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wLW1lbnVpdGVtLWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XHJcblxyXG4gICAgICAgIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rLXdyYXAge1xyXG4gICAgICAucC1tZW51aXRlbS10ZXh0IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 6144);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 2176);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 7963);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logo/logo.component */ 9274);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);











class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent,
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LogoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 5577:
/*!*****************************************************************************!*\
  !*** ./src/app/product-structure/components/prefixes/prefixes.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefixesComponent": () => (/* binding */ PrefixesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_prefix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/prefix.service */ 990);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/module-icon/module-icon.component */ 468);









function PrefixesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-menubar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedPrefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function PrefixesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function PrefixesComponent_ng_template_15_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PrefixesComponent_ng_template_15_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PrefixesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 23)(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PrefixesComponent_ng_template_15_span_9_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PrefixesComponent_ng_template_15_span_10_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const prefix_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", prefix_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prefix_r7.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prefix_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", prefix_r7.service_or_material);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "1");
} }
function PrefixesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function PrefixesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PrefixesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrefixesComponent_ng_template_16_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrefixesComponent_ng_template_16_span_3_Template, 2, 0, "span", 29);
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
function PrefixesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrefixesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PrefixesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrefixesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class PrefixesComponent {
    constructor(prefixService, modalService) {
        this.prefixService = prefixService;
        this.modalService = modalService;
        this.prefixes = [];
        this.isLoading = true;
        this.menuItems = [{
                label: 'Selected Prefix',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditPrefix()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemovePrefix()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.getPrefixes();
    }
    getPrefixes() {
        this.prefixService.get().subscribe(prefixes => {
            this.prefixes = prefixes;
            this.isLoading = false;
        });
    }
    onAddPrefix() {
        this.prefixService.createEditPrefix('create').subscribe(prefix => {
            if (prefix) {
                this.prefixes.unshift(prefix);
            }
        });
    }
    onEditPrefix() {
        this.prefixService.createEditPrefix('edit', this.selectedPrefix).subscribe(prefix => {
            if (prefix) {
                const index = this.prefixes.findIndex(t => t.id === this.selectedPrefix.id);
                this.prefixes[index] = prefix;
            }
        });
    }
    onRemovePrefix() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.prefixService.delete(this.selectedPrefix.id).subscribe(() => {
                    const index = this.prefixes.findIndex(t => t.id === this.selectedPrefix.id);
                    this.prefixes.splice(index, 1);
                    this.selectedPrefix = null;
                });
            }
        });
    }
}
PrefixesComponent.ɵfac = function PrefixesComponent_Factory(t) { return new (t || PrefixesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_prefix_service__WEBPACK_IMPORTED_MODULE_0__.PrefixService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
PrefixesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrefixesComponent, selectors: [["pek-prefixes"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page-header__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Prefix", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 421px)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], [1, "ml-auto", 3, "model"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "30%"], [2, "width", "50%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function PrefixesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Prefixes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrefixesComponent_Template_button_click_7_listener() { return ctx.onAddPrefix(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function PrefixesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedPrefix = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PrefixesComponent_ng_template_13_Template, 2, 3, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PrefixesComponent_ng_template_14_Template, 9, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PrefixesComponent_ng_template_15_Template, 11, 7, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PrefixesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PrefixesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PrefixesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "product-structure")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.prefixes.length > 0)("rows", 10)("selection", ctx.selectedPrefix)("value", ctx.prefixes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.prefixes.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVmaXhlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 949:
/*!***************************************************************************************************************!*\
  !*** ./src/app/product-structure/components/product-structure-product/product-structure-product.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStructureProductComponent": () => (/* binding */ ProductStructureProductComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 8163);
/* harmony import */ var _modals_make_root_product_make_root_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modals/make-root-product/make-root-product.component */ 3801);
/* harmony import */ var _modals_make_production_list_make_production_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/make-production-list/make-production-list.component */ 6717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ 6350);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/treetable */ 2385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module-icon/module-icon.component */ 468);

















const _c0 = ["dt"];
const _c1 = ["searchCodeInput"];
const _c2 = ["searchNameInput"];
function ProductStructureProductComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductComponent_ng_template_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.up()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductComponent_ng_template_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.down()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductComponent_ng_template_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.sort()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "p-menubar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductComponent_ng_template_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.onExpandAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductComponent_ng_template_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.onCollapseAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r3.selectedNode == null ? null : ctx_r3.selectedNode.data.parent) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r3.selectedNode == null ? null : ctx_r3.selectedNode.data.parent) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r3.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r3.menuItems);
} }
function ProductStructureProductComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r16.nomenclature.category.unit_of_measure == null ? null : rowData_r16.nomenclature.category.unit_of_measure.symbol, " ");
} }
function ProductStructureProductComponent_ng_template_22_ng_container_13_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductStructureProductComponent_ng_template_22_ng_container_13_ng_container_1_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tech_r25 = ctx.$implicit;
    const idx_r26 = ctx.index;
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tech_r25.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", idx_r26 !== rowData_r16.nomenclature.technologies.length - 1);
} }
function ProductStructureProductComponent_ng_template_22_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductStructureProductComponent_ng_template_22_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rowData_r16.nomenclature.technologies);
} }
function ProductStructureProductComponent_ng_template_22_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Purchased");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Manufactured");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Assembly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_20_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "DECLINED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_22_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0)(1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductStructureProductComponent_ng_template_22_ng_container_20_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductStructureProductComponent_ng_template_22_ng_container_20_span_3_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductStructureProductComponent_ng_template_22_ng_container_20_span_4_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]()();
} if (rf & 2) {
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", rowData_r16.nomenclature.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "2");
} }
const _c3 = function (a0) { return { "padding-left": a0 }; };
function ProductStructureProductComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36)(1, "td", 37)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-treeTableToggler", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProductStructureProductComponent_ng_template_22_ng_container_11_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ProductStructureProductComponent_ng_template_22_ng_container_13_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ProductStructureProductComponent_ng_template_22_span_16_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ProductStructureProductComponent_ng_template_22_span_17_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ProductStructureProductComponent_ng_template_22_ng_container_18_Template, 2, 0, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ProductStructureProductComponent_ng_template_22_ng_container_20_Template, 5, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r15 = ctx.$implicit;
    const rowData_r16 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ttRow", rowNode_r15)("ttSelectableRow", rowNode_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("font-italic", rowData_r16.nomenclature.type !== "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c3, rowNode_r15.level * 0.5 + "rem"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowNode", rowNode_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r16.nomenclature.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("font-italic", rowData_r16.nomenclature.type !== "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rowData_r16.nomenclature.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("font-italic", rowData_r16.nomenclature.type !== "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r16.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("font-italic", rowData_r16.nomenclature.type !== "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowData_r16.nomenclature.category)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("font-italic", rowData_r16.nomenclature.type !== "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowData_r16.nomenclature.technologies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", rowData_r16.nomenclature.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("font-italic", rowData_r16.nomenclature.type !== "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowData_r16.nomenclature.type === "0");
} }
function ProductStructureProductComponent_ng_template_23_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 56);
} }
function ProductStructureProductComponent_ng_template_23_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductStructureProductComponent_ng_template_23_i_2_Template, 1, 0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductStructureProductComponent_ng_template_23_span_3_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function ProductStructureProductComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Pcs");
} }
class ProductStructureProductComponent {
    constructor(route, productService, fb, dialog) {
        this.route = route;
        this.productService = productService;
        this.fb = fb;
        this.dialog = dialog;
        this.selectedNode = null;
        this.menuItems = [
            {
                label: 'Selected Item',
                items: [
                    {
                        label: 'Add Item',
                        icon: 'pi pi-plus',
                        disabled: true,
                    },
                    {
                        label: 'Make Production List',
                        icon: 'pi pi-box',
                        command: () => this.onOpenMakeProductionList(),
                    },
                    {
                        label: 'Make Root',
                        icon: 'pi pi-globe',
                        disabled: true,
                        command: () => this.onOpenMakeRoot(),
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-file',
                    },
                    {
                        label: 'Copy',
                        icon: 'pi pi-clone',
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                    }
                ]
            }
        ];
        this.expanseMap = {};
        this.sorted = false;
        this.isLoading = true;
        this.productId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getProducts();
    }
    ngAfterViewInit() {
        this.inputCodeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.searchCodeInput.nativeElement, 'input')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.searchCodeInput.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(value => this.filterProducts(value, 'code', 'contains')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(299)).subscribe((value) => {
            if (!value) {
                this.onCollapseAll();
                return;
            }
            this.expandedFindProducts(value, 'code');
        });
        this.inputNameSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.searchNameInput.nativeElement, 'input')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.searchNameInput.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(value => this.filterProducts(value, 'name', 'contains')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(299)).subscribe((value) => {
            if (!value) {
                this.onCollapseAll();
                return;
            }
            this.expandedFindProducts(value, 'name');
        });
    }
    onExpandAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.productsTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, true);
        });
        this.productsTree = temp;
    }
    onCollapseAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.productsTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, false);
        });
        this.productsTree = temp;
        this.selectedNode = null;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    getProducts() {
        if (this.productsTree) {
            this.mapExpansion();
        }
        this.productService.getTree(Number(this.productId)).subscribe(products => {
            this.products = products;
            if (!this.sorted) {
                this.createTree();
            }
            else {
                this.sort();
            }
            this.isLoading = false;
        });
    }
    filterProducts(event, field, mode) {
        this.dt.filter(event, `nomenclature.${field}`, mode);
    }
    expandedFindProducts(value, field) {
        this.selectedNode = null;
        this.productsTree.forEach(parent => {
            parent.children.forEach(product => {
                if (product.data.nomenclature[field].toLowerCase().indexOf(value) >= 0) {
                    parent.expanded = true;
                }
            });
        });
    }
    createTree() {
        const dd = [];
        this.products.forEach(element => {
            const ins = { data: element, expanded: false };
            if (this.expanseMap) {
                ins.expanded = this.expanseMap[element.id];
            }
            dd.push(ins);
        });
        let root;
        const idMapping = dd.reduce((acc, el, i) => {
            acc[el.data.id] = i;
            return acc;
        }, {});
        dd.forEach(el => {
            if (el.data.parent === null) {
                root = el;
                return;
            }
            const parentEl = dd[idMapping[el.data.parent]];
            parentEl.children = [...(parentEl.children || []), el];
            if (parentEl.children.length === 0) {
                delete parentEl.children;
            }
        });
        root.expanded = true;
        this.productsTree = [root];
        if (this.selectedNode) {
            this.getSelected(this.productsTree[0]);
        }
    }
    down() {
        const node = this.selectedNode;
        let index;
        node.parent.children.forEach((element, i) => {
            if (element.data.id === node.data.id) {
                index = i;
            }
        });
        if (index < node.parent.children.length - 1) {
            const move = {
                child: node.data.id,
                parent: node.parent.children[index + 1].data.id,
                move_to: 'right'
            };
            // TODO СДЕЛАТЬ ЧТОБЫ ЗАНОВО НЕ ОТОБРАЖАТЬ СТРУКТУРУ И ВЫВЕСТИ УВЕДОМЛЕНИЕ ИЛИ ЗАБЛОЧИТЬ КНОПКУ
            this.productService.move(move).subscribe(() => this.getProducts());
        }
    }
    up() {
        const node = this.selectedNode;
        let index;
        node.parent.children.forEach((element, i) => {
            if (element.data.id === node.data.id) {
                index = i;
            }
        });
        if (index > 0) {
            const move = {
                child: node.data.id,
                parent: node.parent.children[index - 1].data.id,
                move_to: 'left'
            };
            this.productService.move(move).subscribe(() => this.getProducts());
        }
    }
    sort() {
        this.sorted = true;
        const sortType = { '0': 3, '1': 1, '2': 2 };
        this.products.sort((a, b) => sortType[a.nomenclature.type] - sortType[b.nomenclature.type]);
        this.createTree();
    }
    mapExpansion() {
        this.productsTree.forEach(element => {
            this.createExpanseMap(element);
        });
    }
    getSelected(node) {
        if (node.data.id == this.selectedNode.data.id) {
            this.selectedNode = node;
        }
        else {
            if (node.children) {
                node.children.forEach(element => {
                    this.getSelected(element);
                });
            }
        }
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
    onSelectNode() {
        if (this.selectedNode) {
            this.menuItems[0].items[0].disabled = !(this.selectedNode.data.nomenclature.type === '1' || this.selectedNode.data.parent === null);
            this.menuItems[0].items[2].disabled = !(this.selectedNode.data.nomenclature.type === '1' && this.selectedNode.data.parent !== null);
        }
    }
    onOpenMakeRoot() {
        this.dialog.open(_modals_make_root_product_make_root_product_component__WEBPACK_IMPORTED_MODULE_0__.MakeRootProductComponent, {
            width: '36rem',
            data: this.selectedNode.data,
            autoFocus: false,
            enterAnimationDuration: '250ms',
            panelClass: 'modal_visible'
        });
    }
    onOpenMakeProductionList() {
        this.dialog.open(_modals_make_production_list_make_production_list_component__WEBPACK_IMPORTED_MODULE_1__.MakeProductionListComponent, {
            width: '36rem',
            data: this.selectedNode.data.nomenclature,
            autoFocus: false,
            enterAnimationDuration: '250ms',
        });
    }
    ngOnDestroy() {
        this.inputCodeSub.unsubscribe();
        this.inputNameSub.unsubscribe();
    }
}
ProductStructureProductComponent.ɵfac = function ProductStructureProductComponent_Factory(t) { return new (t || ProductStructureProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
ProductStructureProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductStructureProductComponent, selectors: [["pek-product-structure-product"]], viewQuery: function ProductStructureProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchCodeInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchNameInput = _t.first);
    } }, decls: 26, vars: 6, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page-header__tools"], [1, "p-input-icon-left", "mr-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search by code", 1, "input-fill"], ["searchCodeInput", ""], ["pInputText", "", "type", "text", "placeholder", "Search by name", 1, "input-fill"], ["searchNameInput", ""], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 399px)", 3, "value", "selection", "scrollable", "selectionChange", "onNodeSelect"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["symbol", ""], [1, "d-flex", "align-items-center"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-up", 1, "p-button-rounded", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-down", 1, "p-button-rounded", "mr-2", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-print", "label", "Print", 1, "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-refresh", "label", "Sort", 1, "mr-2", 3, "click"], [1, "product-structure-bar", "ml-auto", "mr-2", 3, "model"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand All", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse All", 3, "click"], [2, "width", "30%", "padding-left", "40px"], [2, "width", "20%"], [1, "text-center", 2, "width", "7%"], [1, "text-center", 2, "width", "6%"], [1, "text-center", 2, "width", "14%"], [1, "text-center", 2, "width", "11%"], [1, "text-center", 2, "width", "12%"], [3, "ttRow", "ttSelectableRow"], [2, "width", "30%", 3, "ngStyle"], [1, "table-toggle"], [3, "rowNode"], [1, "category-name"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "ngSwitch"], ["class", "font-italic", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf"], [1, "font-italic"], ["class", "text-warning", 4, "ngSwitchCase"], ["class", "text-success", 4, "ngSwitchCase"], ["class", "text-danger", 4, "ngSwitchCase"], [1, "text-warning"], [1, "text-success"], [1, "text-danger"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"]], template: function ProductStructureProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 6)(9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 6)(13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "p-treeTable", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ProductStructureProductComponent_Template_p_treeTable_selectionChange_18_listener($event) { return ctx.selectedNode = $event; })("onNodeSelect", function ProductStructureProductComponent_Template_p_treeTable_onNodeSelect_18_listener() { return ctx.onSelectNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ProductStructureProductComponent_ng_template_20_Template, 8, 5, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProductStructureProductComponent_ng_template_21_Template, 15, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProductStructureProductComponent_ng_template_22_Template, 21, 29, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ProductStructureProductComponent_ng_template_23_Template, 4, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ProductStructureProductComponent_ng_template_24_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "product-structure")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Product Structure (", !ctx.isLoading ? ctx.productsTree[0].data.nomenclature.name : "...", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.productsTree)("selection", ctx.selectedNode)("scrollable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_treetable__WEBPACK_IMPORTED_MODULE_16__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_16__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_16__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_16__.TTSelectableRow, primeng_menubar__WEBPACK_IMPORTED_MODULE_18__.Menubar, _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent], styles: [".category-name[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\n  .product-structure-bar .p-submenu-list {\n  width: 13.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3RydWN0dXJlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUlJO0VBQ0UseUJBQUE7QUFETiIsImZpbGUiOiJwcm9kdWN0LXN0cnVjdHVyZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LW5hbWUge1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5wcm9kdWN0LXN0cnVjdHVyZS1iYXIge1xyXG4gICAgLnAtc3VibWVudS1saXN0IHtcclxuICAgICAgd2lkdGg6IDEzLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7025:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/product-structure/components/product-structure-products-list/product-structure-products-list.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStructureProductsListComponent": () => (/* binding */ ProductStructureProductsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ 8163);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6350);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_product_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product-categories.service */ 7427);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/treetable */ 2385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module-icon/module-icon.component */ 468);















const _c0 = ["dt"];
const _c1 = ["searchCodeInput"];
const _c2 = ["searchNameInput"];
function ProductStructureProductsListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-menubar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductsListComponent_ng_template_21_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.onExpandAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductsListComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.onCollapseAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r3.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r3.menuItems);
} }
function ProductStructureProductsListComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ProductStructureProductsListComponent_ng_template_23_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const rowData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", rowData_r11.name, " ");
} }
function ProductStructureProductsListComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 28)(1, "td", 26)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-treeTableToggler", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductStructureProductsListComponent_ng_template_23_ng_container_4_Template, 3, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r10 = ctx.$implicit;
    const rowData_r11 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !rowData_r11.nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ttRow", rowNode_r10)("ttSelectableRow", rowNode_r10)("ttSelectableRowDisabled", !rowData_r11.nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowNode", rowNode_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rowData_r11.nomenclature);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r11.nomenclature == null ? null : rowData_r11.nomenclature.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r11.nomenclature == null ? null : rowData_r11.nomenclature.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rowData_r11.nomenclature == null ? null : rowData_r11.nomenclature.description, " ");
} }
function ProductStructureProductsListComponent_ng_template_24_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 35);
} }
function ProductStructureProductsListComponent_ng_template_24_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductStructureProductsListComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductStructureProductsListComponent_ng_template_24_i_2_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductStructureProductsListComponent_ng_template_24_span_3_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
class ProductStructureProductsListComponent {
    constructor(productService, router, route, productCategoriesService, modalService) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.productCategoriesService = productCategoriesService;
        this.modalService = modalService;
        this.menuItems = [{
                label: 'Selected Product',
                items: [
                    {
                        label: 'Structure',
                        icon: 'pi pi-table',
                        command: () => this.goToProductStructure(),
                    },
                    {
                        label: 'Copy',
                        icon: 'pi pi-clone',
                        command: () => this.copyProduct(),
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.editProduct(),
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.removeProduct(),
                    }
                ]
            }];
        this.productsTree = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.getProductsAndCategories();
    }
    ngAfterViewInit() {
        this.inputCodeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.searchCodeInput.nativeElement, 'input')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.searchCodeInput.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(value => this.filterProducts(value, 'code', 'contains')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(299)).subscribe((value) => {
            if (!value) {
                this.onCollapseAll();
                return;
            }
            this.expandedFindProducts(value, 'code');
        });
        this.inputNameSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.searchNameInput.nativeElement, 'input')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.searchNameInput.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(value => this.filterProducts(value, 'name', 'contains')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(299)).subscribe((value) => {
            if (!value) {
                this.onCollapseAll();
                return;
            }
            this.expandedFindProducts(value, 'name');
        });
    }
    filterProducts(event, field, mode) {
        this.dt.filter(event, `nomenclature.${field}`, mode);
    }
    expandedFindProducts(value, field) {
        this.selectedNode = null;
        this.productsTree.forEach(parent => {
            parent.children.forEach(product => {
                if (product.data.nomenclature[field].toLowerCase().indexOf(value) >= 0) {
                    parent.expanded = true;
                }
            });
        });
    }
    getProductsAndCategories() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
            products: this.productService.getRoots(),
            categories: this.productCategoriesService.get([{ name: 'is_for_root', value: true }])
        }).subscribe(({ products, categories }) => {
            this.products = products;
            this.categories = categories;
            this.categories.forEach(category => {
                this.productsTree.push({
                    data: category,
                    expanded: false,
                    parent: null
                });
            });
            this.productsTree.unshift({
                data: { name: 'Not category' },
                expanded: false,
                parent: null
            });
            this.createTree();
            this.isLoading = false;
        });
    }
    createTree() {
        this.productsTree = this.productsTree.map(node => {
            return {
                ...node,
                children: []
            };
        });
        this.productsTree.forEach(node => {
            this.products.forEach(product => {
                if (product.nomenclature.category && node.data.id === product.nomenclature.category.id) {
                    node.children.push({
                        data: product,
                        expanded: false,
                        children: []
                    });
                }
            });
        });
        this.products.forEach(product => {
            if (!product.nomenclature.category) {
                this.productsTree[0].children.push({
                    data: product,
                    expanded: false,
                    children: []
                });
            }
        });
    }
    onExpandAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(this.productsTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, true);
        });
        this.productsTree = temp;
    }
    onCollapseAll() {
        const temp = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(this.productsTree);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, false);
        });
        this.productsTree = temp;
        this.selectedNode = null;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    removeProduct() {
        const product = this.selectedNode.data;
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.productService.delete(product.id).subscribe(() => {
                    this.selectedNode = null;
                    const index = this.products.findIndex(p => p.id === product.id);
                    this.products.splice(index, 1);
                    this.createTree();
                });
            }
        });
    }
    createProduct() {
        this.productService.createEditProduct('create').subscribe(product => {
            // TODO на бэке сделать чтобы отдавался продукт
            if (product)
                this.updateProducts();
        });
    }
    editProduct() {
        const product = this.selectedNode.data;
        this.productService.createEditProduct('edit', product).subscribe(product => {
            // TODO на бэке сделать чтобы отдавался продукт
            if (product) {
                this.updateProducts();
                this.selectedNode = null;
            }
        });
    }
    copyProduct() {
        const product = this.selectedNode.data;
        this.productService.createEditProduct('copy', product).subscribe(product => {
            // TODO на бэке сделать чтобы отдавался продукт
            if (product)
                this.updateProducts();
        });
    }
    updateTree(product) {
        this.products.push(product);
        this.createTree();
    }
    // временный метод до оптимизации
    updateProducts() {
        this.productService.getRoots().subscribe(products => {
            this.products = products;
            this.createTree();
        });
    }
    goToProductStructure() {
        this.router.navigate(['structure', this.selectedNode.data.id], { relativeTo: this.route }).then();
    }
    ngOnDestroy() {
        this.inputCodeSub.unsubscribe();
        this.inputNameSub.unsubscribe();
    }
}
ProductStructureProductsListComponent.ɵfac = function ProductStructureProductsListComponent_Factory(t) { return new (t || ProductStructureProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_categories_service__WEBPACK_IMPORTED_MODULE_1__.ProductCategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
ProductStructureProductsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductStructureProductsListComponent, selectors: [["pek-product-structure-products-list"]], viewQuery: function ProductStructureProductsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchCodeInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchNameInput = _t.first);
    } }, decls: 25, vars: 5, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page-header__tools"], [1, "p-input-icon-left", "mr-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search by code", 1, "input-fill"], ["searchCodeInput", ""], ["pInputText", "", "type", "text", "placeholder", "Search by name", 1, "input-fill"], ["searchNameInput", ""], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Product", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 399px)", 3, "value", "selection", "scrollable", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex"], [1, "ml-auto", "mr-2", 3, "model"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand All", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse All", 3, "click"], [2, "width", "35%", "padding-left", "56px"], [2, "width", "35%"], [2, "width", "30%"], [3, "ttRow", "ttSelectableRow", "ttSelectableRowDisabled"], [1, "table-toggle"], [3, "rowNode"], [4, "ngIf"], [1, "category-name"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"]], template: function ProductStructureProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 6)(9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 6)(13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductStructureProductsListComponent_Template_button_click_15_listener() { return ctx.createProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "p-treeTable", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ProductStructureProductsListComponent_Template_p_treeTable_selectionChange_19_listener($event) { return ctx.selectedNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProductStructureProductsListComponent_ng_template_21_Template, 4, 3, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProductStructureProductsListComponent_ng_template_22_Template, 7, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ProductStructureProductsListComponent_ng_template_23_Template, 10, 10, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ProductStructureProductsListComponent_ng_template_24_Template, 4, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("module", "product-structure")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.productsTree)("selection", ctx.selectedNode)("scrollable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_treetable__WEBPACK_IMPORTED_MODULE_15__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_15__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_15__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_15__.TTSelectableRow, primeng_menubar__WEBPACK_IMPORTED_MODULE_17__.Menubar, _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_3__.ModuleIconComponent], styles: [".disabled[_ngcontent-%COMP%] {\n  cursor: default !important;\n}\n.disabled[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3RydWN0dXJlLXByb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtBQUNKO0FBR0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQUYiLCJmaWxlIjoicHJvZHVjdC1zdHJ1Y3R1cmUtcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNhdGVnb3J5LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2645:
/*!*************************************************************************************!*\
  !*** ./src/app/product-structure/components/technologies/technologies.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologiesComponent": () => (/* binding */ TechnologiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_technology_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/technology.service */ 4351);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 3285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/module-icon/module-icon.component */ 468);









function TechnologiesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-menubar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx_r1.selectedTechnology);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function TechnologiesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function TechnologiesComponent_ng_template_15_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TechnologiesComponent_ng_template_15_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TechnologiesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 23)(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TechnologiesComponent_ng_template_15_span_9_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TechnologiesComponent_ng_template_15_span_10_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r7 = ctx.$implicit;
    const i_r8 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSelectableRow", technology_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](technology_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](technology_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", technology_r7.service_or_material);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "1");
} }
function TechnologiesComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 30);
} }
function TechnologiesComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TechnologiesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TechnologiesComponent_ng_template_16_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TechnologiesComponent_ng_template_16_span_3_Template, 2, 0, "span", 29);
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
function TechnologiesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TechnologiesComponent_ng_template_17_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TechnologiesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TechnologiesComponent_div_18_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.paginator = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Return pagination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class TechnologiesComponent {
    constructor(technologyService, modalService) {
        this.technologyService = technologyService;
        this.modalService = modalService;
        this.technologies = [];
        this.isLoading = true;
        this.menuItems = [{
                label: 'Selected Technology',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.onEditTechnology()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.onRemoveTechnology()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.getTechnologies();
    }
    getTechnologies() {
        this.technologyService.get().subscribe(technologies => {
            this.technologies = technologies;
            this.isLoading = false;
        });
    }
    onAddTechnology() {
        this.technologyService.createEditTechnology('create').subscribe(technology => {
            if (technology) {
                this.technologies.unshift(technology);
            }
        });
    }
    onEditTechnology() {
        this.technologyService.createEditTechnology('edit', this.selectedTechnology).subscribe(technology => {
            if (technology) {
                const index = this.technologies.findIndex(t => t.id === this.selectedTechnology.id);
                this.technologies[index] = technology;
            }
        });
    }
    onRemoveTechnology() {
        this.modalService.confirm('danger').subscribe(confirm => {
            if (confirm) {
                this.technologyService.delete(this.selectedTechnology).subscribe(() => {
                    const index = this.technologies.findIndex(t => t.id === this.selectedTechnology.id);
                    this.technologies.splice(index, 1);
                    this.selectedTechnology = null;
                });
            }
        });
    }
}
TechnologiesComponent.ɵfac = function TechnologiesComponent_Factory(t) { return new (t || TechnologiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_technology_service__WEBPACK_IMPORTED_MODULE_0__.TechnologyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
TechnologiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TechnologiesComponent, selectors: [["pek-technologies"]], decls: 19, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page-header__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Technology", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 421px)", 3, "scrollable", "paginator", "rows", "selection", "value", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["class", "paginator-return-pagination", 4, "ngIf"], [1, "d-flex"], [1, "ml-auto", 3, "model"], [1, "index-header", "text-center", 2, "width", "5%"], [2, "width", "30%"], [2, "width", "50%"], [1, "text-center", 2, "width", "15%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"], ["type", "button", "styleClass", "p-button-text", 3, "click"], [1, "paginator-return-pagination"]], template: function TechnologiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TechnologiesComponent_Template_button_click_7_listener() { return ctx.onAddTechnology(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function TechnologiesComponent_Template_p_table_selectionChange_11_listener($event) { return ctx.selectedTechnology = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TechnologiesComponent_ng_template_13_Template, 2, 3, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TechnologiesComponent_ng_template_14_Template, 9, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TechnologiesComponent_ng_template_15_Template, 11, 7, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, TechnologiesComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TechnologiesComponent_ng_template_17_Template, 2, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TechnologiesComponent_div_18_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("module", "product-structure")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("paginator", ctx.technologies.length > 0)("rows", 10)("selection", ctx.selectedTechnology)("value", ctx.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.paginator && !ctx.isLoading && ctx.technologies.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_7__.Menubar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SelectableRow, _shared_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_2__.ModuleIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNobm9sb2dpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8791:
/*!*********************************************************************************************!*\
  !*** ./src/app/product-structure/modals/create-edit-prefix/create-edit-prefix.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditPrefixComponent": () => (/* binding */ CreateEditPrefixComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_prefix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/prefix.service */ 990);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);









class CreateEditPrefixComponent {
    constructor(fb, prefixService, dialogRef, data) {
        this.fb = fb;
        this.prefixService = prefixService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            prefix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            description: [''],
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.prefix.id));
            this.form.patchValue(this.data.prefix);
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createPrefix();
                break;
            }
            case 'edit': {
                this.editPrefix();
                break;
            }
        }
    }
    createPrefix() {
        const send = this.form.value;
        this.prefixService.create(send).subscribe({
            next: prefix => this.dialogRef.close(prefix),
            error: () => this.isSaving = false,
        });
    }
    editPrefix() {
        const send = this.form.value;
        this.prefixService.update(send).subscribe({
            next: prefix => this.dialogRef.close(prefix),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditPrefixComponent.ɵfac = function CreateEditPrefixComponent_Factory(t) { return new (t || CreateEditPrefixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_prefix_service__WEBPACK_IMPORTED_MODULE_0__.PrefixService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditPrefixComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditPrefixComponent, selectors: [["pek-create-edit-prefix"]], decls: 16, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "prefix"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditPrefixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditPrefixComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Prefix ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", 2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__.InputTextarea], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1wcmVmaXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8399:
/*!***********************************************************************************************!*\
  !*** ./src/app/product-structure/modals/create-edit-product/create-edit-product.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditProductComponent": () => (/* binding */ CreateEditProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/nomenclature.service */ 7958);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ 6350);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pickers/product-category-picker/product-category-picker.component */ 5051);











class CreateEditProductComponent {
    constructor(fb, nomenclatureService, productService, dialogRef, data) {
        this.fb = fb;
        this.nomenclatureService = nomenclatureService;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            description: [''],
            type: [1],
            category: [null],
        });
        this.isCategoryDisabled = false;
    }
    ngOnInit() {
        if (this.data.type !== 'create') {
            const nomenclature = this.data.product.nomenclature;
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.product.id));
            this.form.patchValue(nomenclature);
            if (nomenclature.category) {
                this.form.get('category').patchValue(nomenclature.category.id);
            }
        }
        if (this.data.type === 'copy') {
            this.isCategoryDisabled = true;
            this.form.get('code').disable();
            this.form.get('description').disable();
        }
    }
    onSelectCategory(categoryId) {
        this.form.get('category').patchValue(categoryId);
    }
    onSave() {
        this.isSaving = true;
        const send = this.form.value;
        switch (this.data.type) {
            case 'create': {
                this.createProduct(send);
                break;
            }
            case 'edit': {
                this.editProduct(send);
                break;
            }
            case 'copy': {
                this.copyProduct();
                break;
            }
        }
    }
    createProduct(send) {
        this.nomenclatureService.create(send).subscribe(nomenclature => {
            if (nomenclature) {
                // @ts-ignore
                this.productService.create({ nomenclature: nomenclature.id })
                    .subscribe({
                    next: product => this.dialogRef.close(product),
                    error: () => this.isSaving = false
                });
            }
        });
    }
    editProduct(send) {
        this.nomenclatureService.updateProduct(send)
            .subscribe({
            next: nomenclature => this.dialogRef.close(nomenclature),
            error: () => this.isSaving = false
        });
    }
    copyProduct() {
        const send = {
            nomenclature_id: this.form.get('id').value,
            parent_id: null,
            name: this.form.get('name').value,
        };
        this.productService.copyStructure(send).subscribe({
            next: () => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditProductComponent.ɵfac = function CreateEditProductComponent_Factory(t) { return new (t || CreateEditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_nomenclature_service__WEBPACK_IMPORTED_MODULE_0__.NomenclatureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
CreateEditProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateEditProductComponent, selectors: [["pek-create-edit-product"]], decls: 24, vars: 10, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], [3, "currentCategoryId", "isDisabled", "choiceCategory"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], ["for", "code"], ["type", "text", "id", "code", "pInputText", "", "formControlName", "code"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "pek-product-category-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("choiceCategory", function CreateEditProductComponent_Template_pek_product_category_picker_choiceCategory_8_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3)(14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Code*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 3)(18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-dialog-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateEditProductComponent_Template_button_click_23_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentCategoryId", ctx.form.get("category").value)("isDisabled", ctx.isCategoryDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextarea, _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_2__.ProductCategoryPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8439:
/*!*****************************************************************************************************!*\
  !*** ./src/app/product-structure/modals/create-edit-technology/create-edit-technology.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditTechnologyComponent": () => (/* binding */ CreateEditTechnologyComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_technology_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/technology.service */ 4351);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/radiobutton */ 9902);










class CreateEditTechnologyComponent {
    constructor(fb, technologyService, dialogRef, data) {
        this.fb = fb;
        this.technologyService = technologyService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            service_or_material: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    ngOnInit() {
        if (this.data.type === 'edit') {
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.technology.id));
            this.form.patchValue(this.data.technology);
        }
    }
    onSave() {
        this.isSaving = true;
        switch (this.data.type) {
            case 'create': {
                this.createTechnology();
                break;
            }
            case 'edit': {
                this.editTechnology();
                break;
            }
        }
    }
    createTechnology() {
        const send = this.form.value;
        this.technologyService.create(send).subscribe({
            next: technology => this.dialogRef.close(technology),
            error: () => this.isSaving = false,
        });
    }
    editTechnology() {
        const send = this.form.value;
        this.technologyService.update(send).subscribe({
            next: technology => this.dialogRef.close(technology),
            error: () => this.isSaving = false,
        });
    }
}
CreateEditTechnologyComponent.ɵfac = function CreateEditTechnologyComponent_Factory(t) { return new (t || CreateEditTechnologyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_technology_service__WEBPACK_IMPORTED_MODULE_0__.TechnologyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateEditTechnologyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditTechnologyComponent, selectors: [["pek-create-edit-technology"]], decls: 22, vars: 8, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [1, "column"], ["name", "service_or_material", "label", "Service", "value", "0", "formControlName", "service_or_material", 1, "mr-3"], ["name", "service_or_material", "label", "Material", "value", "1", "formControlName", "service_or_material"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditTechnologyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Type*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "p-radioButton", 9)(18, "p-radioButton", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-dialog-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditTechnologyComponent_Template_button_click_21_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", 2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__.InputTextarea, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__.RadioButton], styles: [".column[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LXRlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLWVkaXQtdGVjaG5vbG9neS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6717:
/*!*************************************************************************************************!*\
  !*** ./src/app/product-structure/modals/make-production-list/make-production-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeProductionListComponent": () => (/* binding */ MakeProductionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6350);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var _shared_models_nomenclature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/nomenclature */ 3068);










class MakeProductionListComponent {
    constructor(fb, dialogRef, productService, nomenclature) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.productService = productService;
        this.nomenclature = nomenclature;
        this.isSaving = false;
        this.form = this.fb.group({
            nomenclature: [null],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
            is_grouped: [false],
            root_nomenclature: [null]
        });
    }
    ngOnInit() {
        this.form.get('is_grouped').disable();
        this.form.get('nomenclature').patchValue(this.nomenclature.id);
        this.form.get('root_nomenclature').patchValue(this.nomenclature.id);
    }
    onChangeQuantity() {
        if (this.form.get('quantity').value < 1) {
            this.form.get('quantity').patchValue(1);
        }
        else {
            if (this.form.get('quantity').value <= 1) {
                this.form.get('is_grouped').disable();
                this.form.get('is_grouped').patchValue(false);
            }
            else {
                this.form.get('is_grouped').enable();
            }
        }
    }
    onMakeProductionList() {
        this.isSaving = true;
        const send = { ...this.form.value };
        this.productService.makeProductionList(send).subscribe({
            next: () => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
}
MakeProductionListComponent.ɵfac = function MakeProductionListComponent_Factory(t) { return new (t || MakeProductionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
MakeProductionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MakeProductionListComponent, selectors: [["pek-make-production-list"]], decls: 14, vars: 6, consts: [[1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["type", "number", "pInputText", "", "formControlName", "quantity", 1, "form-control", 3, "ngModelChange"], ["label", "Group Production Plan", "formControlName", "is_grouped", 3, "binary"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Make", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function MakeProductionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Number Of Sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MakeProductionListComponent_Template_input_ngModelChange_8_listener() { return ctx.onChangeQuantity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "p-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MakeProductionListComponent_Template_button_click_13_listener() { return ctx.onMakeProductionList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Make Production List from \u00AB", ctx.nomenclature.name, "\u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWtlLXByb2R1Y3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3801:
/*!*******************************************************************************************!*\
  !*** ./src/app/product-structure/modals/make-root-product/make-root-product.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeRootProductComponent": () => (/* binding */ MakeRootProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 6350);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pickers/product-category-picker/product-category-picker.component */ 5051);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ 6922);









class MakeRootProductComponent {
    constructor(fb, dialogRef, productService, product) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.productService = productService;
        this.product = product;
        this.isSaving = false;
        this.form = this.fb.group({
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
    }
    onSelectCategory(categoryId) {
        this.form.get('category').patchValue(categoryId);
    }
    onMakeRoot() {
        this.isSaving = true;
        this.productService.makeRoot(this.product.id, this.form.value).subscribe({
            next: () => this.dialogRef.close(true),
            error: () => this.isSaving = false,
        });
    }
}
MakeRootProductComponent.ɵfac = function MakeRootProductComponent_Factory(t) { return new (t || MakeRootProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
MakeRootProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MakeRootProductComponent, selectors: [["pek-make-root-product"]], decls: 11, vars: 5, consts: [[1, "modal-header"], [1, "modal-header__title"], [1, "form-group"], [3, "currentCategoryId", "choiceCategory"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Make", 1, "p-button-success", 3, "loading", "disabled", "click"]], template: function MakeRootProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 2)(5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "pek-product-category-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("choiceCategory", function MakeRootProductComponent_Template_pek_product_category_picker_choiceCategory_7_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-dialog-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MakeRootProductComponent_Template_button_click_10_listener() { return ctx.onMakeRoot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Make Root \u00AB", ctx.product.nomenclature.name, "\u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentCategoryId", ctx.form.get("category").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _shared_pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_1__.ProductCategoryPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWtlLXJvb3QtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6922:
/*!*****************************************************!*\
  !*** ./src/app/product-structure/models/product.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
}


/***/ }),

/***/ 5707:
/*!***************************************************************!*\
  !*** ./src/app/product-structure/product-structure.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStructureModule": () => (/* binding */ ProductStructureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _product_structure_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-structure.routing */ 2264);
/* harmony import */ var _components_product_structure_products_list_product_structure_products_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-structure-products-list/product-structure-products-list.component */ 7025);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _modals_create_edit_product_create_edit_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/create-edit-product/create-edit-product.component */ 8399);
/* harmony import */ var _components_product_structure_product_product_structure_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-structure-product/product-structure-product.component */ 949);
/* harmony import */ var _modals_make_root_product_make_root_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/make-root-product/make-root-product.component */ 3801);
/* harmony import */ var _modals_make_production_list_make_production_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/make-production-list/make-production-list.component */ 6717);
/* harmony import */ var _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/technologies/technologies.component */ 2645);
/* harmony import */ var _components_prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/prefixes/prefixes.component */ 5577);
/* harmony import */ var _modals_create_edit_technology_create_edit_technology_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/create-edit-technology/create-edit-technology.component */ 8439);
/* harmony import */ var _modals_create_edit_prefix_create_edit_prefix_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/create-edit-prefix/create-edit-prefix.component */ 8791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);













class ProductStructureModule {
}
ProductStructureModule.ɵfac = function ProductStructureModule_Factory(t) { return new (t || ProductStructureModule)(); };
ProductStructureModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ProductStructureModule });
ProductStructureModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _product_structure_routing__WEBPACK_IMPORTED_MODULE_0__.ProductStructureRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ProductStructureModule, { declarations: [_components_product_structure_products_list_product_structure_products_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductStructureProductsListComponent,
        _modals_create_edit_product_create_edit_product_component__WEBPACK_IMPORTED_MODULE_3__.CreateEditProductComponent,
        _components_product_structure_product_product_structure_product_component__WEBPACK_IMPORTED_MODULE_4__.ProductStructureProductComponent,
        _modals_make_root_product_make_root_product_component__WEBPACK_IMPORTED_MODULE_5__.MakeRootProductComponent,
        _modals_make_production_list_make_production_list_component__WEBPACK_IMPORTED_MODULE_6__.MakeProductionListComponent,
        _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_7__.TechnologiesComponent,
        _components_prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_8__.PrefixesComponent,
        _modals_create_edit_technology_create_edit_technology_component__WEBPACK_IMPORTED_MODULE_9__.CreateEditTechnologyComponent,
        _modals_create_edit_prefix_create_edit_prefix_component__WEBPACK_IMPORTED_MODULE_10__.CreateEditPrefixComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _product_structure_routing__WEBPACK_IMPORTED_MODULE_0__.ProductStructureRouting,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 2264:
/*!****************************************************************!*\
  !*** ./src/app/product-structure/product-structure.routing.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStructureRouting": () => (/* binding */ ProductStructureRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_product_structure_products_list_product_structure_products_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-structure-products-list/product-structure-products-list.component */ 7025);
/* harmony import */ var _components_product_structure_product_product_structure_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-structure-product/product-structure-product.component */ 949);
/* harmony import */ var _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/technologies/technologies.component */ 2645);
/* harmony import */ var _components_prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/prefixes/prefixes.component */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products', children: [
            { path: '', title: 'Products', component: _components_product_structure_products_list_product_structure_products_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductStructureProductsListComponent },
            { path: 'structure/:id', title: 'Products', component: _components_product_structure_product_product_structure_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductStructureProductComponent }
        ]
    },
    { path: 'technologies', title: 'Technologies', component: _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_2__.TechnologiesComponent },
    { path: 'prefixes', title: 'Prefixes', component: _components_prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_3__.PrefixesComponent },
];
class ProductStructureRouting {
}
ProductStructureRouting.ɵfac = function ProductStructureRouting_Factory(t) { return new (t || ProductStructureRouting)(); };
ProductStructureRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProductStructureRouting });
ProductStructureRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductStructureRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 990:
/*!**************************************************************!*\
  !*** ./src/app/product-structure/services/prefix.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefixService": () => (/* binding */ PrefixService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _modals_create_edit_prefix_create_edit_prefix_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-prefix/create-edit-prefix.component */ 8791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);






class PrefixService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.product_structure_url;
        this.url = 'xls_manufactured_prefixes/';
    }
    get() {
        return this.httpClient.get(this.API_URL + this.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    create(prefix) {
        return this.httpClient.post(this.API_URL + this.url, prefix).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    update(prefix) {
        return this.httpClient.patch(this.API_URL + this.url + `${prefix.id}/`, prefix).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    delete(id) {
        return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
    }
    createEditPrefix(type, prefix) {
        return this.dialog
            .open(_modals_create_edit_prefix_create_edit_prefix_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditPrefixComponent, {
            width: '35rem',
            height: 'auto',
            data: { type, prefix },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
PrefixService.ɵfac = function PrefixService_Factory(t) { return new (t || PrefixService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
PrefixService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PrefixService, factory: PrefixService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7427:
/*!**************************************************************************!*\
  !*** ./src/app/product-structure/services/product-categories.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoriesService": () => (/* binding */ ProductCategoriesService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class ProductCategoriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.product_structure_url;
        this.url = 'categories/';
    }
    get(query) {
        if (this.categories) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.categories);
        }
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
        // TODO удалить all
        return this.httpClient.get(this.API_URL + this.url + qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            let categories = response.data;
            categories.forEach(category => {
                if (!category.parent)
                    category.lft = category.tree_id;
            });
            categories.sort((a, b) => a.lft - b.lft);
            this.categories = categories;
            return categories;
        }));
    }
}
ProductCategoriesService.ɵfac = function ProductCategoriesService_Factory(t) { return new (t || ProductCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ProductCategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductCategoriesService, factory: ProductCategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6350:
/*!***************************************************************!*\
  !*** ./src/app/product-structure/services/product.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var _modals_create_edit_product_create_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-product/create-edit-product.component */ 8399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);






class ProductService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.product_structure_url;
        this.url = 'products/';
    }
    get() {
        return this.httpClient.get(this.API_URL + this.url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    // TODO удалить all
    getRoots() {
        return this.httpClient.get(this.API_URL + 'products_roots/all/').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    getTree(id) {
        return this.httpClient.get(this.API_URL + 'product_tree/' + `${id}/`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    create(product) {
        return this.httpClient.post(this.API_URL + this.url, product).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    delete(id) {
        return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
    }
    copyStructure(send) {
        return this.httpClient.post(this.API_URL + 'product_structure_copy/', send).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    move(move) {
        return this.httpClient.post(this.API_URL + 'product_move/', move);
    }
    makeRoot(productId, send) {
        return this.httpClient.post(this.API_URL + `products/${productId}/copy_tree_to_root/`, send).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    // TODO ПЕРЕНЕСТИ В ДРУГОЙ СЕРВИС
    makeProductionList(send) {
        return this.httpClient.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production_url + 'list_creation_requests/', send);
    }
    createEditProduct(type, product) {
        return this.dialog
            .open(_modals_create_edit_product_create_edit_product_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditProductComponent, {
            width: '35rem',
            height: 'auto',
            data: { type, product },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4351:
/*!******************************************************************!*\
  !*** ./src/app/product-structure/services/technology.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologyService": () => (/* binding */ TechnologyService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _modals_create_edit_technology_create_edit_technology_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-technology/create-edit-technology.component */ 8439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);






class TechnologyService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.product_structure_url;
        this.url = 'technologies/';
    }
    get() {
        return this.httpClient.get(this.API_URL + this.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    create(technology) {
        return this.httpClient.post(this.API_URL + this.url, technology).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    update(technology) {
        return this.httpClient.put(this.API_URL + this.url + `${technology.id}/`, technology).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
    }
    delete(technology) {
        return this.httpClient.delete(this.API_URL + this.url + `${technology.id}/`);
    }
    ;
    createEditTechnology(type, technology) {
        return this.dialog
            .open(_modals_create_edit_technology_create_edit_technology_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditTechnologyComponent, {
            width: '35rem',
            height: 'auto',
            data: { type, technology },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
TechnologyService.ɵfac = function TechnologyService_Factory(t) { return new (t || TechnologyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
TechnologyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TechnologyService, factory: TechnologyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2734:
/*!*****************************************************!*\
  !*** ./src/app/reports/services/payment.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class PaymentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'payments/';
    }
    getConfirmationPayments() {
        return this.httpClient.get(this.API_URL + this.url + 'confirmation_list/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    severalConfirm(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...ids.map(id => this.httpClient.post(this.API_URL + this.url + `confirm/${id}/`, null)));
    }
    severalDecline(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...ids.map(id => this.httpClient.post(this.API_URL + this.url + `decline/${id}/`, null)));
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
PaymentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 184:
/*!*********************************************************************!*\
  !*** ./src/app/reports/services/service-invoice-payment.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceInvoicePaymentService": () => (/* binding */ ServiceInvoicePaymentService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class ServiceInvoicePaymentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.procurement_url;
        this.url = 'service_invoice_payments/';
    }
    getConfirmationPayments() {
        return this.httpClient.get(this.API_URL + this.url + 'confirmation_list/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    severalConfirm(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...ids.map(id => this.httpClient.post(this.API_URL + this.url + `confirm/${id}/`, null)));
    }
    severalDecline(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...ids.map(id => this.httpClient.post(this.API_URL + this.url + `decline/${id}/`, null)));
    }
}
ServiceInvoicePaymentService.ɵfac = function ServiceInvoicePaymentService_Factory(t) { return new (t || ServiceInvoicePaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ServiceInvoicePaymentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ServiceInvoicePaymentService, factory: ServiceInvoicePaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7534:
/*!************************************************************!*\
  !*** ./src/app/shared/modals/confirm/confirm.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmComponent": () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 3867);





function ConfirmComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function ConfirmComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function ConfirmComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function ConfirmComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
} }
function ConfirmComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
} }
class ConfirmComponent {
    constructor(type) {
        this.type = type;
    }
    ngOnInit() {
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["pek-confirm"]], decls: 13, vars: 12, consts: [[1, "confirm"], [1, "confirm__icon", 3, "ngSwitch"], ["class", "pi pi-times-circle", 4, "ngSwitchCase"], ["class", "pi fa-trash-alt", 4, "ngSwitchCase"], ["class", "pi pi-check-circle", 4, "ngSwitchCase"], [1, "confirm__text"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-secondary", 3, "mat-dialog-close"], [3, "ngSwitch"], ["pButton", "", "type", "button", "label", "Remove", "class", "p-button-danger", 3, "mat-dialog-close", 4, "ngSwitchCase"], ["pButton", "", "type", "button", "label", "Confirm", "class", "p-button-success", 3, "mat-dialog-close", 4, "ngSwitchCase"], [1, "pi", "pi-times-circle"], [1, "pi", "fa-trash-alt"], [1, "pi", "pi-check-circle"], ["pButton", "", "type", "button", "label", "Remove", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", "label", "Confirm", 1, "p-button-success", 3, "mat-dialog-close"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmComponent_i_3_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmComponent_i_4_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfirmComponent_i_5_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Are you sure? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfirmComponent_button_11_Template, 1, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConfirmComponent_button_12_Template, 1, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("confirm__icon_success", ctx.type === "success")("confirm__icon_danger", ctx.type === "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.confirm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 15.5rem;\n}\n\n.confirm__text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.875rem;\n}\n\n.confirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  margin-bottom: 2rem;\n}\n\n.confirm[_ngcontent-%COMP%]   .pi-trash[_ngcontent-%COMP%] {\n  color: var(--theme-color-danger);\n}\n\n.confirm__icon_success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--theme-color-success);\n}\n\n.confirm__icon_danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--theme-color-danger);\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 6.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxnQ0FBQTtBQURKOztBQU1NO0VBQ0UsaUNBQUE7QUFKUjs7QUFTTTtFQUNFLGdDQUFBO0FBUFI7O0FBYUE7RUFDRSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtBQVZGIiwiZmlsZSI6ImNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbmZpcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTUuNXJlbTtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5waS10cmFzaCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgJl9zdWNjZXNzIHtcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9kYW5nZXIge1xyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItZGFuZ2VyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA2LjI1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3068:
/*!***********************************************!*\
  !*** ./src/app/shared/models/nomenclature.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENomenclatureApproval": () => (/* binding */ ENomenclatureApproval),
/* harmony export */   "ENomenclatureBulk": () => (/* binding */ ENomenclatureBulk),
/* harmony export */   "ENomenclatureType": () => (/* binding */ ENomenclatureType),
/* harmony export */   "NewNomenclature": () => (/* binding */ NewNomenclature),
/* harmony export */   "Nomenclature": () => (/* binding */ Nomenclature),
/* harmony export */   "NomenclatureParent": () => (/* binding */ NomenclatureParent)
/* harmony export */ });
class Nomenclature {
}
class NewNomenclature {
}
class NomenclatureParent {
}
var ENomenclatureType;
(function (ENomenclatureType) {
    ENomenclatureType["PURCHASED"] = "0";
    ENomenclatureType["ASSEMBLY"] = "1";
    ENomenclatureType["MANUFACTURED"] = "2";
})(ENomenclatureType || (ENomenclatureType = {}));
var ENomenclatureApproval;
(function (ENomenclatureApproval) {
    ENomenclatureApproval["NEW"] = "0";
    ENomenclatureApproval["APPROVED"] = "1";
    ENomenclatureApproval["DECLINED"] = "2";
})(ENomenclatureApproval || (ENomenclatureApproval = {}));
var ENomenclatureBulk;
(function (ENomenclatureBulk) {
    ENomenclatureBulk["BULK"] = "0";
    ENomenclatureBulk["SERIAL"] = "1";
})(ENomenclatureBulk || (ENomenclatureBulk = {}));


/***/ }),

/***/ 468:
/*!*************************************************************!*\
  !*** ./src/app/shared/module-icon/module-icon.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleIconComponent": () => (/* binding */ ModuleIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ModuleIconComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModuleIconComponent__svg_svg_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModuleIconComponent {
    constructor() {
        this.isActive = false;
    }
    ngOnInit() {
    }
}
ModuleIconComponent.ɵfac = function ModuleIconComponent_Factory(t) { return new (t || ModuleIconComponent)(); };
ModuleIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleIconComponent, selectors: [["pek-module-icon"]], inputs: { module: "module", isActive: "isActive" }, decls: 14, vars: 16, consts: [[1, "module-icon", 3, "ngSwitch"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 48 48", 4, "ngSwitchCase"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 48 48"], ["d", "M30.2 42v-6.25h-7.7v-20.5h-4.65v6.5H4V6h13.85v6.25H30.2V6H44v15.75H30.2v-6.5h-4.7v17.5h4.7v-6.5H44V42ZM7 9v9.75Zm26.2 20.25V39ZM33.2 9v9.75Zm0 9.75H41V9h-7.8Zm0 20.25H41v-9.75h-7.8ZM7 18.75h7.85V9H7Z"], ["d", "M25.5 19.5V6H42v13.5ZM6 25.5V6h16.5v19.5ZM25.5 42V22.5H42V42ZM6 42V28.5h16.5V42Zm3-19.5h10.5V9H9ZM28.5 39H39V25.5H28.5Zm0-22.5H39V9H28.5ZM9 39h10.5v-7.5H9Zm10.5-16.5Zm9-6Zm0 9Zm-9 6Z"], ["d", "M7 40q-1.3 0-2.15-.85Q4 38.3 4 37v-7.65q1.85-.4 3.075-1.875T8.3 24q0-2-1.225-3.5T4 18.65V11q0-1.3.85-2.15Q5.7 8 7 8h34q1.3 0 2.15.85Q44 9.7 44 11v7.65q-1.85.35-3.075 1.85T39.7 24q0 2 1.225 3.475T44 29.35V37q0 1.3-.85 2.15Q42.3 40 41 40Zm0-3h34v-5.45q-1.9-1.3-3.1-3.25-1.2-1.95-1.2-4.3 0-2.35 1.2-4.3 1.2-1.95 3.1-3.25V11H7v5.45q1.95 1.3 3.125 3.25T11.3 24q0 2.35-1.175 4.3Q8.95 30.25 7 31.55Zm17-3.15q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45Zm0-8.35q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45Zm0-8.35q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45ZM24 24Z"], ["d", "M7 39h6V23h22v16h6V16L24 9.2 7 16Zm-3 3V14l20-8 20 8v28H32V26H16v16Zm14.5 0v-3h3v3Zm4-6v-3h3v3Zm4 6v-3h3v3ZM13 23h22Z"], ["d", "M5 44q-1.2 0-2.1-.9Q2 42.2 2 41V18.05h3V41h30.45v3Zm6-6q-1.2 0-2.1-.9Q8 36.2 8 35V9.1h12.1V5q0-1.2.9-2.1.9-.9 2.1-.9h7.8q1.2 0 2.1.9.9.9.9 2.1v4.1H46V35q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h32V12.1H11V35ZM23.1 9.1h7.8V5h-7.8ZM11 35V12.1 35Z"], ["d", "M28.55 31.6h3v-6.2h6.15v-3h-6.15v-6.15h-3v6.15h-6.2v3h6.2Zm-16.9 9.2Q6.4 38.7 3.2 34.125 0 29.55 0 23.95q0-5.6 3.225-10.15Q6.45 9.25 11.65 7.15v3.4q-3.95 1.8-6.3 5.425Q3 19.6 3 23.95q0 4.4 2.35 8 2.35 3.6 6.3 5.45ZM30 41.95q-3.75 0-7.025-1.425-3.275-1.425-5.7-3.85-2.425-2.425-3.85-5.7Q12 27.7 12 23.95q0-3.75 1.425-7.025 1.425-3.275 3.85-5.7 2.425-2.425 5.7-3.85Q26.25 5.95 30 5.95q3.75 0 7.025 1.425 3.275 1.425 5.7 3.85 2.425 2.425 3.85 5.7Q48 20.2 48 23.95q0 3.75-1.425 7.025-1.425 3.275-3.85 5.7-2.425 2.425-5.7 3.85Q33.75 41.95 30 41.95Zm0-18Zm.05 15q6.2 0 10.575-4.375Q45 30.2 45 23.95q0-6.2-4.375-10.6Q36.25 8.95 30 8.95q-6.2 0-10.6 4.4-4.4 4.4-4.4 10.6 0 6.25 4.4 10.625t10.65 4.375Z"], ["d", "M4 44V19.95L18 14v4l10-4.05V20h16v24Zm3-3h34V23H25v-4.6l-10 4v-3.95L7 22Zm15.5-5h3v-8h-3Zm-8 0h3v-8h-3Zm16 0h3v-8h-3ZM44 20h-9l2-16h5ZM7 41h34Z"], ["d", "M9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5ZM24 28q-.85 0-1.425-.575Q22 26.85 22 26q0-.85.575-1.425Q23.15 24 24 24q.85 0 1.425.575Q26 25.15 26 26q0 .85-.575 1.425Q24.85 28 24 28Zm-8 0q-.85 0-1.425-.575Q14 26.85 14 26q0-.85.575-1.425Q15.15 24 16 24q.85 0 1.425.575Q18 25.15 18 26q0 .85-.575 1.425Q16.85 28 16 28Zm16 0q-.85 0-1.425-.575Q30 26.85 30 26q0-.85.575-1.425Q31.15 24 32 24q.85 0 1.425.575Q34 25.15 34 26q0 .85-.575 1.425Q32.85 28 32 28Zm-8 8q-.85 0-1.425-.575Q22 34.85 22 34q0-.85.575-1.425Q23.15 32 24 32q.85 0 1.425.575Q26 33.15 26 34q0 .85-.575 1.425Q24.85 36 24 36Zm-8 0q-.85 0-1.425-.575Q14 34.85 14 34q0-.85.575-1.425Q15.15 32 16 32q.85 0 1.425.575Q18 33.15 18 34q0 .85-.575 1.425Q16.85 36 16 36Zm16 0q-.85 0-1.425-.575Q30 34.85 30 34q0-.85.575-1.425Q31.15 32 32 32q.85 0 1.425.575Q34 33.15 34 34q0 .85-.575 1.425Q32.85 36 32 36Z"], ["d", "M38.5 30.25v-16.1L28 6.8l-10.5 7.35v6.45h-3v-7.95L28 3l13.5 9.65v17.6ZM28 6.8ZM29 17h2v-2h-2Zm-4 0h2v-2h-2Zm4 4h2v-2h-2Zm-4 0h2v-2h-2Zm3.3 23.9-15.55-4.45v2.85H2V23.6h15.45l12.75 4.8q1.35.5 2.275 1.625.925 1.125.925 3.225h5.7q2.1 0 3.5 1.5T44 38.8v1.3ZM5 40.3h4.7V26.6H5Zm23.1 1.5 12.8-3.9q-.3-.95-.75-1.3-.45-.35-1.05-.35H28.75q-1.5 0-2.775-.2t-2.425-.55l-4.05-1.25 1.1-2.9 3.65 1.2q1.25.4 2.375.55 1.125.15 3.575.15 0-.6-.225-1.175-.225-.575-.775-.825L16.95 26.6h-4.2v10.7ZM9.7 33.45Zm20.5-.2Zm-20.5.2Zm3.05 0Z"], ["d", "M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.6 0 2.025.975.425.975-.275 2.175L34.7 23.25q-.5.85-1.4 1.475-.9.625-1.95.625H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"], ["d", "M25.8 44q-.6 0-1.15-.175-.55-.175-1.05-.675L4.85 24.4q-.5-.5-.675-1.05Q4 22.8 4 22.2V7q0-1.3.85-2.15Q5.7 4 7 4h15.2q.6 0 1.2.175t1.1.675L43.15 23.5q1 1 1 2.225t-1 2.225l-15.2 15.2q-.4.4-.975.625Q26.4 44 25.8 44Zm.1-2.9 15.2-15.2L22.2 7H7v15.2ZM12.25 14.8q1.05 0 1.825-.775.775-.775.775-1.825 0-1.05-.775-1.825Q13.3 9.6 12.25 9.6q-1.05 0-1.825.775-.775.775-.775 1.825 0 1.05.775 1.825.775.775 1.825.775ZM7 7Z"], ["d", "M15.95 35.5h16.1v-3h-16.1Zm0-8.5h16.1v-3h-16.1ZM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z"], ["d", "M24 44q-6.9-1.6-11.45-7.825Q8 29.95 8 21.9V9.95l16-6 16 6v13.5q-.7-.35-1.5-.625T37 22.45v-10.4l-13-4.8-13 4.8v9.85q0 3.8 1.225 7t3.125 5.625q1.9 2.425 4.2 4.025 2.3 1.6 4.45 2.3.3.6.9 1.35.6.75 1 1.15-.45.25-.95.375-.5.125-.95.275Zm10.55-9.5q1.3 0 2.2-.95.9-.95.9-2.25t-.9-2.2q-.9-.9-2.2-.9-1.3 0-2.25.9t-.95 2.2q0 1.3.95 2.25t2.25.95Zm-.05 6.25q1.65 0 3-.7t2.3-2q-1.3-.7-2.6-1.05-1.3-.35-2.7-.35-1.4 0-2.725.35-1.325.35-2.575 1.05.95 1.3 2.275 2t3.025.7Zm.15 3.25q-3.9 0-6.65-2.775-2.75-2.775-2.75-6.575 0-3.9 2.75-6.675t6.65-2.775q3.85 0 6.625 2.775t2.775 6.675q0 3.8-2.775 6.575Q38.5 44 34.65 44ZM24 24.05Z"]], template: function ModuleIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModuleIconComponent__svg_svg_1_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModuleIconComponent__svg_svg_2_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModuleIconComponent__svg_svg_3_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModuleIconComponent__svg_svg_4_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModuleIconComponent__svg_svg_5_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModuleIconComponent__svg_svg_6_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModuleIconComponent__svg_svg_7_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModuleIconComponent__svg_svg_8_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModuleIconComponent__svg_svg_9_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModuleIconComponent__svg_svg_10_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModuleIconComponent__svg_svg_11_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModuleIconComponent__svg_svg_12_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModuleIconComponent__svg_svg_13_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("module-icon_active", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.module);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "product-structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "manufacturing-procurement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "quality-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "manufacturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "contacts-events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "outsourcing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "purchasing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "administration");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase], styles: [".module-icon[_ngcontent-%COMP%] {\n  width: 2.625rem;\n  height: 2.625rem;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background 0.25s;\n}\n.module-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.module-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transition: fill 0.25s;\n  fill: #a1a7ab;\n}\n.module-icon_active[_ngcontent-%COMP%] {\n  background: var(--theme-color-secondary);\n}\n.module-icon_active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--theme-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FBQ047QUFHRTtFQUNFLHdDQUFBO0FBREo7QUFJTTtFQUNFLGdDQUFBO0FBRlIiLCJmaWxlIjoibW9kdWxlLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlLWljb24ge1xyXG4gIHdpZHRoOiAyLjYyNXJlbTtcclxuICBoZWlnaHQ6IDIuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cztcclxuXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHBhdGgge1xyXG4gICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMjVzO1xyXG4gICAgICBmaWxsOiAjYTFhN2FiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3Itc2Vjb25kYXJ5KTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5051:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/pickers/product-category-picker/product-category-picker.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoryPickerComponent": () => (/* binding */ ProductCategoryPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _product_structure_services_product_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product-structure/services/product-categories.service */ 7427);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ 8992);





class ProductCategoryPickerComponent {
    constructor(productCategoriesService) {
        this.productCategoriesService = productCategoriesService;
        this.isDisabled = false;
        this.choiceCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.productCategoriesService.get([{ name: 'is_for_root', value: true }]).subscribe(categories => {
            this.categories = categories;
        });
        if (this.currentCategoryId) {
            this.selectCategoryId = this.currentCategoryId;
        }
    }
    onChangeCategory() {
        this.choiceCategory.emit(this.selectCategoryId);
    }
}
ProductCategoryPickerComponent.ɵfac = function ProductCategoryPickerComponent_Factory(t) { return new (t || ProductCategoryPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_structure_services_product_categories_service__WEBPACK_IMPORTED_MODULE_0__.ProductCategoriesService)); };
ProductCategoryPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductCategoryPickerComponent, selectors: [["pek-product-category-picker"]], inputs: { currentCategoryId: "currentCategoryId", isDisabled: "isDisabled" }, outputs: { choiceCategory: "choiceCategory" }, decls: 1, vars: 4, consts: [["optionLabel", "name", "optionValue", "id", "placeholder", "Select Product Category", 3, "showClear", "options", "ngModel", "disabled", "ngModelChange"]], template: function ProductCategoryPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductCategoryPickerComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.selectCategoryId = $event; })("ngModelChange", function ProductCategoryPickerComponent_Template_p_dropdown_ngModelChange_0_listener() { return ctx.onChangeCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showClear", true)("options", ctx.categories)("ngModel", ctx.selectCategoryId)("disabled", ctx.isDisabled);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhdGVnb3J5LXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5079:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/money-format.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyFormatPipe": () => (/* binding */ MoneyFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MoneyFormatPipe {
    transform(value, ...args) {
        return parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ').split('.').join(',');
    }
}
MoneyFormatPipe.ɵfac = function MoneyFormatPipe_Factory(t) { return new (t || MoneyFormatPipe)(); };
MoneyFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "moneyFormat", type: MoneyFormatPipe, pure: true });


/***/ }),

/***/ 3285:
/*!**************************************************!*\
  !*** ./src/app/shared/services/modal.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _shared_modals_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/modals/confirm/confirm.component */ 7534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



class ModalService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirm(type = 'default') {
        return this.dialog
            .open(_shared_modals_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmComponent, {
            width: '25rem',
            height: '22.5rem',
            data: type,
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7958:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/nomenclature.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NomenclatureService": () => (/* binding */ NomenclatureService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class NomenclatureService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.product_structure_url;
        this.url = 'nomenclatures/';
    }
    create(nomenclature) {
        // const formData = new FormData();
        // if (nomenclature.technologies?.length > 0) {
        //   nomenclature.technologies.forEach(technology => {
        //     formData.append('technologies', technology + '');
        //   });
        // }
        //
        // // tslint:disable-next-line:forin
        // for (const key in nomenclature) {
        //   if (nomenclature[key] !== null && key !== 'technologies') {
        //     formData.append(key, nomenclature[key]);
        //   }
        // }
        //
        // if (nomenclature.category === null) {
        //   formData.append('category', '');
        // }
        return this.httpClient.post(this.API_URL + this.url, nomenclature).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    updateProduct(product) {
        return this.httpClient.put(this.API_URL + this.url + `${product.id}/`, product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    // Nomenclatures for confirmation
    getNewNomenclatures() {
        return this.httpClient.get(this.API_URL + 'products_new_nomenclatures/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
    }
    updateSeveralPartly(nomenclatures) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(...nomenclatures.map(nomenclature => this.httpClient.patch(this.API_URL + this.url + nomenclature.id + '/', nomenclature)));
    }
}
NomenclatureService.ɵfac = function NomenclatureService_Factory(t) { return new (t || NomenclatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
NomenclatureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NomenclatureService, factory: NomenclatureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-icon/module-icon.component */ 468);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 3867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/treetable */ 2385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menubar */ 552);
/* harmony import */ var _modals_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/confirm/confirm.component */ 7534);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var _pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickers/product-category-picker/product-category-picker.component */ 5051);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/money-format.pipe */ 5079);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tieredmenu */ 1487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);



















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_8__.TreeTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__.MenubarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButtonModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__.TieredMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_8__.TreeTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__.MenubarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButtonModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__.TieredMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__.ModuleIconComponent,
        _modals_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmComponent,
        _pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_2__.ProductCategoryPickerComponent,
        _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_3__.MoneyFormatPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_8__.TreeTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__.MenubarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButtonModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__.TieredMenuModule], exports: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_8__.TreeTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__.MenubarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule,
        _pickers_product_category_picker_product_category_picker_component__WEBPACK_IMPORTED_MODULE_2__.ProductCategoryPickerComponent,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButtonModule,
        _module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_0__.ModuleIconComponent,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        _shared_pipes_money_format_pipe__WEBPACK_IMPORTED_MODULE_3__.MoneyFormatPipe,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__.TieredMenuModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    /** Смотри все api в [Swagger]{@link http://erp.slopehelper.com/swagger/ } */
    base_url: 'https://erp.slopehelper.com/api/',
    product_structure_url: 'product_structure/',
    warehouse_url: 'warehouse/',
    production_url: 'production/',
    business_partners_url: 'crm/',
    procurement_url: 'procurement/',
    accounting_url: 'accounting/',
    users_url: 'users/',
    staff_url: 'staff/',
    sales_url: 'sales/',
    image_path: 'http://erp.slopehelper.com'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map