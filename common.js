"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["common"],{

/***/ 4047:
/*!****************************************************************!*\
  !*** ./src/app/correspondent/enum/correspondent-types.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentTypes": () => (/* binding */ CorrespondentTypes)
/* harmony export */ });
var CorrespondentTypes;
(function (CorrespondentTypes) {
    CorrespondentTypes["INCOMING"] = "0";
    CorrespondentTypes["OUTGOING"] = "1";
})(CorrespondentTypes || (CorrespondentTypes = {}));


/***/ }),

/***/ 5372:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/correspondent/modals/create-edit-correspondnet-category/create-edit-correspondnet-category.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditCorrespondnetCategoryComponent": () => (/* binding */ CreateEditCorrespondnetCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/correspondents-category.service */ 32899);







class CreateEditCorrespondnetCategoryComponent {
    constructor(fb, dialogRef, categoriesService, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.categoriesService = categoriesService;
        this.data = data;
        this.isSaving = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            type: [null],
            parent: [null],
        });
    }
    ngOnInit() {
        this.correspondentType = this.data.correspondentType;
        this.form.get('type').patchValue(this.correspondentType);
        if (this.data.type === 'edit') {
            const category = this.data.category;
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(category.id));
            this.form.get('name').patchValue(category.name);
            this.form.get('description').patchValue(category.description);
            this.form.get('parent').patchValue(category.parent);
        }
    }
    onSelectCategory(category) {
        if (category) {
            this.form.get('parent').patchValue(category.id);
        }
        else {
            this.form.get('parent').patchValue(null);
        }
    }
    onSave() {
        if (this.data.type === 'edit') {
            this.update();
        }
        else {
            this.create();
        }
    }
    create() {
        if (this.form.valid) {
            this.categoriesService.create(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe((response) => {
                this.dialogRef.close(response);
            });
        }
    }
    update() {
        if (this.form.valid) {
            this.categoriesService.update(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(res => { this.dialogRef.close(res); });
        }
    }
}
CreateEditCorrespondnetCategoryComponent.ɵfac = function CreateEditCorrespondnetCategoryComponent_Factory(t) { return new (t || CreateEditCorrespondnetCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_0__.CorrespondentsCategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateEditCorrespondnetCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateEditCorrespondnetCategoryComponent, selectors: [["pek-create-edit-correspondnet-category"]], decls: 21, vars: 11, consts: [[1, "create-edit-product-structure-category"], [1, "modal-header"], [1, "modal-header__title"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pInputText", "", "formControlName", "name"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [3, "correspondentType", "ignoredCategoryId", "currentCategoryId", "choiceCategory"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"]], template: function CreateEditCorrespondnetCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Parent Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "pek-correspondnet-categories-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("choiceCategory", function CreateEditCorrespondnetCategoryComponent_Template_pek_correspondnet_categories_picker_choiceCategory_17_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateEditCorrespondnetCategoryComponent_Template_button_click_20_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Correspondents Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("correspondentType", ctx.correspondentType)("ignoredCategoryId", ctx.data.category == null ? null : ctx.data.category.id)("currentCategoryId", ctx.form.get("parent").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, styles: [".create-edit-product-structure-category[_ngcontent-%COMP%]  .mat-dialog-content {\n  overflow: initial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LWNvcnJlc3BvbmRuZXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSw0QkFBQTtBQUROIiwiZmlsZSI6ImNyZWF0ZS1lZGl0LWNvcnJlc3BvbmRuZXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWVkaXQtcHJvZHVjdC1zdHJ1Y3R1cmUtY2F0ZWdvcnkge1xyXG4gICY6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 32899:
/*!***************************************************************************!*\
  !*** ./src/app/correspondent/services/correspondents-category.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentsCategoriesService": () => (/* binding */ CorrespondentsCategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _modals_create_edit_correspondnet_category_create_edit_correspondnet_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/create-edit-correspondnet-category/create-edit-correspondnet-category.component */ 5372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class CorrespondentsCategoriesService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.clearSelectedCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.selectCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url;
        this.url = 'correspondent/correspondents_categories/';
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
        return this.httpClient.get(this.API_URL + this.url +
            qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            let categories = response.data;
            categories.forEach(category => {
                if (!category.parent) {
                    category.lft = category.tree_id;
                }
            });
            categories = categories.sort((a, b) => a.lft - b.lft);
            return categories;
        }));
    }
    getAll(page = 1) {
        return this.httpClient.get(this.API_URL + this.url + '?page=' + page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response.data.results;
        }));
    }
    create(category) {
        return this.httpClient.post(this.API_URL + this.url, category);
    }
    update(category) {
        return this.httpClient.put(this.API_URL + this.url + category.id + '/', category);
    }
    delete(category) {
        return this.httpClient.delete(this.API_URL + this.url + category.id + '/');
    }
    move(id, move) {
        return this.httpClient.post(this.API_URL + this.url + id + '/move/', move).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            return response;
        }));
    }
    createEditCategory(type, correspondentType, category) {
        return this.dialog
            .open(_modals_create_edit_correspondnet_category_create_edit_correspondnet_category_component__WEBPACK_IMPORTED_MODULE_1__.CreateEditCorrespondnetCategoryComponent, {
            width: '42rem',
            height: 'auto',
            panelClass: 'modal-picker',
            data: { type, category, correspondentType },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
}
CorrespondentsCategoriesService.ɵfac = function CorrespondentsCategoriesService_Factory(t) { return new (t || CorrespondentsCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
CorrespondentsCategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CorrespondentsCategoriesService, factory: CorrespondentsCategoriesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map