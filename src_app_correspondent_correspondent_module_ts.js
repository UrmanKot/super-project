"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_correspondent_correspondent_module_ts"],{

/***/ 45887:
/*!***************************************************************************************************************!*\
  !*** ./src/app/correspondent/components/correspondent-category-list/correspondent-category-list.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentCategoryListComponent": () => (/* binding */ CorrespondentCategoryListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enum/correspondent-types.enum */ 4047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ 60978);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/correspondents-category.service */ 32899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);















function CorrespondentCategoryListComponent_ng_template_13_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Choose the Category to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CorrespondentCategoryListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrespondentCategoryListComponent_ng_template_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.up()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrespondentCategoryListComponent_ng_template_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.down()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CorrespondentCategoryListComponent_ng_template_13_p_3_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "p-menubar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrespondentCategoryListComponent_ng_template_13_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.expandAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrespondentCategoryListComponent_ng_template_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.collapseAll()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r1.selectedNode == null ? null : ctx_r1.selectedNode.data.parent) === null)("loading", ctx_r1.isMovingUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx_r1.selectedNode == null ? null : ctx_r1.selectedNode.data.parent) === null)("loading", ctx_r1.isMovingDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx_r1.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("model", ctx_r1.menuItems);
} }
function CorrespondentCategoryListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return { "padding-left": a0 }; };
function CorrespondentCategoryListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cdkDropListDropped", function CorrespondentCategoryListComponent_ng_template_15_Template_td_cdkDropListDropped_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.drop($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-treeTableToggler", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const rowNode_r11 = ctx.$implicit;
    const rowData_r12 = ctx.rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ttRow", rowNode_r11)("ttSelectableRow", rowNode_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, rowNode_r11.level * 0.5 + "rem"))("cdkDropListData", rowData_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowNode", rowNode_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkDragData", rowData_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r12.description, "");
} }
function CorrespondentCategoryListComponent_ng_template_16_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 33);
} }
function CorrespondentCategoryListComponent_ng_template_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CorrespondentCategoryListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CorrespondentCategoryListComponent_ng_template_16_i_2_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CorrespondentCategoryListComponent_ng_template_16_span_3_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
class CorrespondentCategoryListComponent {
    constructor(activatedRouter, modalService, categoriesService) {
        this.activatedRouter = activatedRouter;
        this.modalService = modalService;
        this.categoriesService = categoriesService;
        this.types = _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes;
        this.expanseMap = {};
        this.isLoading = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.menuItems = [
            {
                label: 'Selected Category',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.edit(),
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.delete(),
                    }
                ]
            }
        ];
    }
    ngOnInit() {
        this.activatedRouter.data.subscribe(res => {
            this.type = res['type'];
            this.getCategories();
        });
    }
    getCategories() {
        if (this.categories) {
            this.mapExpansion();
        }
        this.categoriesService.get([{ name: 'type', value: this.type }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)((categories) => {
            this.createTree(categories);
        })).subscribe();
    }
    mapExpansion() {
        this.categories.forEach(element => {
            this.createExpanseMap(element);
        });
    }
    up() {
        const node = this.selectedNode;
        if (node.parent) {
            this.upCategory(node);
        }
        else {
            this.upRootCategory(node);
        }
    }
    upCategory(node) {
        let index;
        node.parent.children.forEach((element, i) => {
            if (element.data.id === node.data.id) {
                index = i;
            }
        });
        if (index > 0) {
            const move = {
                parent: node.parent.children[index - 1].data.id,
                move_to: 'left'
            };
            this.categoriesService.move(node.data.id, move).subscribe(() => {
                this.getCategories();
            });
        }
    }
    upRootCategory(node) {
        const rootCategories = this.categories.filter(category => !category.parent);
        const index = rootCategories.findIndex(categoryNode => categoryNode.data.id === node.data.id);
        if (index > 0) {
            const move = {
                parent: rootCategories[index - 1].data.id,
                move_to: 'left'
            };
            this.categoriesService.move(node.data.id, move).subscribe(() => {
                this.getCategories();
            });
        }
    }
    down() {
        const node = this.selectedNode;
        if (node.parent) {
            this.downCategory(node);
        }
        else {
            this.downRootCategory(node);
        }
    }
    downCategory(node) {
        let index;
        node.parent.children.forEach((element, i) => {
            if (element.data.id === node.data.id) {
                index = i;
            }
        });
        if (index < node.parent.children.length - 1) {
            const move = {
                parent: node.parent.children[index + 1].data.id,
                move_to: 'right'
            };
            this.categoriesService.move(node.data.id, move).subscribe(() => {
                this.getCategories();
            });
        }
    }
    downRootCategory(node) {
        const rootCategories = this.categories.filter(category => !category.parent);
        const index = rootCategories.findIndex(categoryNode => categoryNode.data.id === node.data.id);
        if (index < rootCategories.length - 1) {
            const move = {
                parent: rootCategories[index + 1].data.id,
                move_to: 'right'
            };
            this.categoriesService.move(node.data.id, move).subscribe(() => {
                this.getCategories();
            });
        }
    }
    add() {
        this.categoriesService.createEditCategory('create', this.type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe((response) => {
            this.getCategories();
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
        this.categories = root;
        if (this.selectedNode) {
            this.getSelected();
        }
        this.isLoading = false;
    }
    getSelected() {
        let selectedNode = null;
        if (this.selectedNode.parent) {
            let parent = this.selectedNode.parent;
            let parentIds = [];
            while (parent) {
                parentIds.push(parent.data.id);
                parent = parent.parent;
            }
            parentIds = parentIds.reverse();
            let node = this.categories.find(cat => cat.data.id === parentIds[0]);
            let i = 1;
            while (node.data.id !== parentIds[parentIds.length - 1]) {
                node = node.children.find(t => t.data.id === parentIds[i]);
                i++;
            }
            selectedNode = node.children.find(item => item.data.id === this.selectedNode.data.id);
        }
        else {
            selectedNode = this.categories.find(category => category.data.id === this.selectedNode.data.id);
        }
        this.selectedNode = selectedNode;
    }
    edit() {
        const entity = this.selectedNode.data;
        this.categoriesService.createEditCategory('edit', this.type, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(res => {
            this.getCategories();
        });
    }
    delete() {
        const category = this.selectedNode.data;
        this.modalService.confirm('danger', 'Confirm').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.categoriesService.delete(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => {
                    this.selectedNode = null;
                    this.getCategories();
                });
            }
        });
    }
    expandAll() {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.categories);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, true);
        });
        this.categories = temp;
    }
    collapseAll() {
        const temp = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__(this.categories);
        temp.forEach(node => {
            this.expandCollapseRecursive(node, false);
        });
        this.categories = temp;
    }
    expandCollapseRecursive(node, isExpand) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandCollapseRecursive(childNode, isExpand);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    drop($event) {
    }
    onSelectNode() {
        // console.log('this.selectedNode', this.selectedNode);
    }
}
CorrespondentCategoryListComponent.ɵfac = function CorrespondentCategoryListComponent_Factory(t) { return new (t || CorrespondentCategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_3__.CorrespondentsCategoriesService)); };
CorrespondentCategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CorrespondentCategoryListComponent, selectors: [["pek-correspondent-category-list"]], decls: 17, vars: 6, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Category", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "page__table"], ["selectionMode", "single", "scrollHeight", "calc(100vh - 19.2rem)", "cdkDropListGroup", "", 3, "value", "selection", "scrollable", "selectionChange", "onNodeSelect"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "d-flex", "align-items-center"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-up", 1, "p-button-rounded", "mr-2", 3, "disabled", "loading", "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-down", 1, "p-button-rounded", "mr-2", 3, "disabled", "loading", "click"], ["class", "ml-1 subtitle", 4, "ngIf"], [1, "product-structure-bar", "ml-auto", "mr-2", 3, "model"], ["pButton", "", "type", "button", "icon", "pi pi-angle-down", "label", "Expand All", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-angle-up", "label", "Collapse All", 3, "click"], [1, "ml-1", "subtitle"], [2, "width", "50%"], [1, "text-center", 2, "width", "50%"], [3, "ttRow", "ttSelectableRow"], ["cdkDropList", "", 2, "width", "50%", 3, "ngStyle", "cdkDropListData", "cdkDropListDropped"], [1, "table-toggle"], [3, "rowNode"], ["cdkDrag", "", 1, "drag-cursor", 3, "cdkDragData"], [1, "text-center", "p-4"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2.25rem", 4, "ngIf"], [4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2.25rem"]], template: function CorrespondentCategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CorrespondentCategoryListComponent_Template_button_click_7_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p-treeTable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function CorrespondentCategoryListComponent_Template_p_treeTable_selectionChange_11_listener($event) { return ctx.selectedNode = $event; })("onNodeSelect", function CorrespondentCategoryListComponent_Template_p_treeTable_onNodeSelect_11_listener() { return ctx.onSelectNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CorrespondentCategoryListComponent_ng_template_13_Template, 7, 8, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CorrespondentCategoryListComponent_ng_template_14_Template, 5, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CorrespondentCategoryListComponent_ng_template_15_Template, 8, 10, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, CorrespondentCategoryListComponent_ng_template_16_Template, 4, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("module", "correspondents")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.type === ctx.types.INCOMING ? "Incoming" : "Outgoing", " Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.categories)("selection", ctx.selectedNode)("scrollable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TTRow, primeng_treetable__WEBPACK_IMPORTED_MODULE_13__.TTSelectableRow, primeng_menubar__WEBPACK_IMPORTED_MODULE_15__.Menubar, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.CdkDrag], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZXNwb25kZW50LWNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3124:
/*!*************************************************************************************************!*\
  !*** ./src/app/correspondent/components/correspondent-layout/correspondent-layout.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentLayoutComponent": () => (/* binding */ CorrespondentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/components/header/header.component */ 42176);



class CorrespondentLayoutComponent {
    constructor() {
        this.routes = [
            { label: 'Incoming Correspondents', commands: ['incoming-correspondent'] },
            { label: 'Outgoing Correspondents', commands: ['outgoing-correspondent'] }
        ];
        this.settingsRoutes = [
            { label: 'Incoming Categories', commands: ['incoming-categories'] },
            { label: 'Outgoing Categories', commands: ['outgoing-categories'] },
        ];
    }
    ngOnInit() {
    }
}
CorrespondentLayoutComponent.ɵfac = function CorrespondentLayoutComponent_Factory(t) { return new (t || CorrespondentLayoutComponent)(); };
CorrespondentLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CorrespondentLayoutComponent, selectors: [["pek-correspondent-layout"]], decls: 2, vars: 3, consts: [[3, "module", "routes", "settingsRoutes"]], template: function CorrespondentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pek-header", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", "Correspondent")("routes", ctx.routes)("settingsRoutes", ctx.settingsRoutes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZXNwb25kZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94347:
/*!*********************************************************************************************!*\
  !*** ./src/app/correspondent/components/correspondent-list/correspondent-list.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentListComponent": () => (/* binding */ CorrespondentListComponent)
/* harmony export */ });
/* harmony import */ var _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enum/correspondent-types.enum */ 4047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _services_correspondent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/correspondent.service */ 81752);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/icons/module-icon/module-icon.component */ 73237);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _correspondetn_multi_category_picker_correspondetn_multi_category_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../correspondetn-multi-category-picker/correspondetn-multi-category-picker.component */ 76546);




















const _c0 = ["paginator"];
function CorrespondentListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function CorrespondentListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "External ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CorrespondentListComponent_div_31_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.search()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function CorrespondentListComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 14);
} }
function CorrespondentListComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function CorrespondentListComponent_ng_template_45_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ExternalID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CorrespondentListComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CorrespondentListComponent_ng_template_45_th_3_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Date Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.type === ctx_r5.types.INCOMING);
} }
function CorrespondentListComponent_ng_template_46_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const correspondent_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", correspondent_r16.external_id, " ");
} }
function CorrespondentListComponent_ng_template_46_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CorrespondentListComponent_ng_template_46_span_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const correspondent_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.downloadFile(correspondent_r16.files[0])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const correspondent_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r19.getName(correspondent_r16.files[0].file), " (F ", correspondent_r16.files.length, ") ");
} }
function CorrespondentListComponent_ng_template_46_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CorrespondentListComponent_ng_template_46_span_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const correspondent_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.downloadFile(correspondent_r16.files[0])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const correspondent_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r20.getName(correspondent_r16.files[0].file), " ");
} }
function CorrespondentListComponent_ng_template_46_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CorrespondentListComponent_ng_template_46_div_14_span_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const file_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.downloadFile(file_r33)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r32.getName(file_r33.file), " ");
} }
function CorrespondentListComponent_ng_template_46_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CorrespondentListComponent_ng_template_46_div_14_span_1_Template, 4, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const correspondent_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", correspondent_r16.files);
} }
function CorrespondentListComponent_ng_template_46_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 47)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function CorrespondentListComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 37)(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CorrespondentListComponent_ng_template_46_td_3_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CorrespondentListComponent_ng_template_46_span_12_Template, 3, 2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CorrespondentListComponent_ng_template_46_span_13_Template, 3, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CorrespondentListComponent_ng_template_46_div_14_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CorrespondentListComponent_ng_template_46_tr_15_Template, 3, 0, "tr", 43);
} if (rf & 2) {
    const correspondent_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", correspondent_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", correspondent_r16.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.type === ctx_r6.types.INCOMING);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 10, correspondent_r16.date_received, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", correspondent_r16.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", correspondent_r16.category ? correspondent_r16.category.name : null, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", correspondent_r16.files.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", correspondent_r16.files.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", correspondent_r16.files.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
} }
function CorrespondentListComponent_ng_template_47_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 48);
} }
function CorrespondentListComponent_ng_template_47_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CorrespondentListComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 49)(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CorrespondentListComponent_ng_template_47_i_2_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CorrespondentListComponent_ng_template_47_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", ctx_r7.type === ctx_r7.types.INCOMING ? 6 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
} }
function CorrespondentListComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CorrespondentListComponent_ng_template_48_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44); _r4.paginator = false; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r4.scrollable = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CorrespondentListComponent_ng_template_49_Template(rf, ctx) { }
function CorrespondentListComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "p-paginator", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onPageChange", function CorrespondentListComponent_div_50_Template_p_paginator_onPageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.paginate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("paginator-wrap", ctx_r10.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("totalRecords", ctx_r10.countCorrespondents);
} }
function CorrespondentListComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-menubar", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r12.selectedNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx_r12.menuItems);
} }
const _c1 = function () { return ["name"]; };
class CorrespondentListComponent {
    constructor(activatedRouter, modalService, correspondentService, adapterService, fb) {
        this.activatedRouter = activatedRouter;
        this.modalService = modalService;
        this.correspondentService = correspondentService;
        this.adapterService = adapterService;
        this.fb = fb;
        this.types = _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes;
        this.countCorrespondents = 0;
        this.searchForm = this.fb.group({
            id: [null],
            externalId: [null],
            date_received_after: [null],
            date_received_before: [null],
            categories: [null],
            page: [1],
        });
        this.correspondents = [];
        this.isStartOnePage = false;
        this.minDate = null;
        this.maxDate = null;
        this.rangeCalendar = [new Date(), new Date()];
        this.isHideFilters = false;
        this.tableScrollHeight = '29.625rem';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.menuItems = [{
                label: 'Selected Correspondent',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: () => this.edit()
                    },
                    {
                        label: 'Remove',
                        icon: 'pi pi-trash',
                        command: () => this.delete()
                    }
                ]
            }];
    }
    ngOnInit() {
        this.activatedRouter.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(res => {
            this.type = res['type'];
            this.search();
        });
    }
    search() {
        const query = [];
        query.push({ name: 'paginated', value: true });
        query.push({ name: 'page', value: this.searchForm.get('page').value });
        const startDateValue = this.searchForm.get('date_received_after').value;
        const endDateValue = this.searchForm.get('date_received_before').value;
        if (startDateValue && endDateValue) {
            query.push({
                name: 'date_received_after',
                value: this.adapterService.dateAdapter(new Date(startDateValue))
            });
            query.push({
                name: 'date_received_before',
                value: this.adapterService.dateAdapter(new Date(endDateValue))
            });
        }
        if (this.searchForm.get('id').value) {
            query.push({
                name: 'id',
                value: this.searchForm.get('id').value
            });
        }
        if (this.searchForm.get('externalId').value) {
            query.push({
                name: 'external_id',
                value: this.searchForm.get('externalId').value
            });
        }
        if (this.searchForm.get('categories').value) {
            query.push({
                name: 'categories',
                value: this.searchForm.get('categories').value
            });
        }
        this.searchCorrespondents(query);
    }
    searchCorrespondents(query) {
        this.correspondentService.get(this.type, query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(res => {
            this.correspondents = res.results;
            this.countCorrespondents = res.count;
            if (this.isStartOnePage) {
                this.paginator.changePage(0);
            }
            this.isStartOnePage = false;
            this.isLoading = false;
        });
    }
    paginate(evt) {
        this.searchForm.get('page').patchValue(evt.page + 1);
        this.search();
    }
    showAll() {
    }
    closeShowAll() {
    }
    add() {
        this.correspondentService.createEditCorrespondent('create', this.type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe((response) => {
            if (response) {
                this.correspondents = [];
                this.search();
            }
        });
    }
    edit() {
        this.correspondentService.createEditCorrespondent('edit', this.type, this.selectedNode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe((response) => {
            if (response) {
                this.correspondents = [];
                this.search();
            }
        });
    }
    delete() {
        const correspondent = this.selectedNode;
        this.modalService.confirm().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(confirm => {
            if (confirm) {
                this.correspondentService.delete(this.type, correspondent).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(del => {
                    this.selectedNode = null;
                    this.correspondents = [];
                    this.search();
                });
            }
        });
    }
    getName(name) {
        const nameArr = name.split('/');
        return nameArr[nameArr.length - 1];
    }
    downloadFile(file) {
        this.correspondentService.download_file(this.type, file.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(response => {
            const filename = this.getName(file.file);
            this.adapterService.downloadFile(filename, response);
        });
    }
    changeCorrespondentStart(startDate) {
        this.minDate = startDate;
        this.searchByDate();
    }
    changeCorrespondentEnd(endDate) {
        this.maxDate = endDate;
        this.searchByDate();
    }
    searchByDate() {
        const startDateValue = this.searchForm.get('date_received_after').value;
        const endDateValue = this.searchForm.get('date_received_before').value;
        if (startDateValue && endDateValue) {
            this.paginator.changePage(0);
            this.searchForm.get('page').patchValue(1);
            this.rangeCalendar = [this.searchForm.get('date_received_after').value, this.searchForm.get('date_received_before').value];
            this.search();
        }
    }
    toggleFilterVisibility() {
        this.isHideFilters = !this.isHideFilters;
        this.setTableScrollHeight();
    }
    setTableScrollHeight() {
        if (this.isHideFilters && !this.isShowAll) {
            this.tableScrollHeight = '20.9125rem';
            return;
        }
        if (this.isHideFilters && this.isShowAll) {
            this.tableScrollHeight = '18.75rem';
            return;
        }
        if (!this.isHideFilters && this.isShowAll) {
            this.tableScrollHeight = '27.5rem';
            return;
        }
        if (!this.isHideFilters && !this.isShowAll) {
            this.tableScrollHeight = '29.625rem';
            return;
        }
    }
    searchByCategories(ids) {
        if (ids.length > 0) {
            this.searchForm.get('categories').patchValue(ids);
        }
        else {
            this.searchForm.get('categories').patchValue(null);
        }
        this.search();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CorrespondentListComponent.ɵfac = function CorrespondentListComponent_Factory(t) { return new (t || CorrespondentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_correspondent_service__WEBPACK_IMPORTED_MODULE_2__.CorrespondentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder)); };
CorrespondentListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CorrespondentListComponent, selectors: [["pek-correspondent-list"]], viewQuery: function CorrespondentListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 53, vars: 23, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [3, "module", "isActive"], [1, "page__tools"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "New Correspondent", 3, "click"], [1, "page__content"], [1, "page__card"], [1, "filters-visibility"], [1, "filters-visibility__header"], [4, "ngTemplateOutlet"], [1, "icon", "pi", 3, "click"], [1, "form", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group"], ["inputId", "basic", "dateFormat", "dd/mm/yy", "formControlName", "date_received_after", 3, "readonlyInput", "ngModelChange"], ["inputId", "basic", "dateFormat", "dd/mm/yy", "formControlName", "date_received_before", 3, "readonlyInput", "ngModelChange"], ["pInputText", "", "formControlName", "id", "type", "number", 1, "form-control", 3, "ngModelChange"], ["class", "col-3", 4, "ngIf"], [3, "correspondentType", "emitSelectedCategories"], [1, "page__table"], ["scrollHeight", "calc(100vh - 450px)", "selectionMode", "single", 1, "table-full-loading", "adaptive-table", "adaptive-table_filters", 3, "rows", "value", "globalFilterFields", "selection", "selectionChange"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "paginatorright"], ["pTemplate", "paginatorleft"], ["class", "pagination-wrap", 3, "paginator-wrap", 4, "ngIf"], ["actionButtons", ""], ["id", "person-name", "type", "text", "pInputText", "", "formControlName", "externalId", 1, "form-control", 3, "ngModelChange"], [1, "index-header", "text-center", 2, "width", "5%"], ["style", "width: 15%", 4, "ngIf"], [2, "width", "10%"], [2, "width", "15%"], [2, "width", "30%"], [3, "pSelectableRow"], [1, "text-center", 2, "width", "5%"], [2, "width", "20%"], [1, "files-cont", 2, "width", "30%"], [4, "ngIf"], ["class", "files-list", 4, "ngIf"], ["class", "table-pagination-preloader", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "files-list"], [4, "ngFor", "ngForOf"], [1, "table-pagination-preloader"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-3x"], [1, "no-content"], [1, "text-center", "p-4", 2, "width", "100%"], ["class", "fas fa-circle-notch fa-spin fa-3x ", 4, "ngIf"], ["type", "button", "pTooltip", "Remove Pagination", "styleClass", "p-button-text", 3, "click"], [1, "pagination-wrap"], [3, "rows", "totalRecords", "onPageChange"], ["paginator", ""], [1, "action-buttons"], [1, "ml-auto", 3, "model"]], template: function CorrespondentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "pek-module-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CorrespondentListComponent_Template_button_click_7_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CorrespondentListComponent_ng_container_12_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CorrespondentListComponent_Template_button_click_13_listener() { return ctx.toggleFilterVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Date Received From");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p-calendar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CorrespondentListComponent_Template_p_calendar_ngModelChange_20_listener($event) { return ctx.changeCorrespondentStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Date Received To");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p-calendar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CorrespondentListComponent_Template_p_calendar_ngModelChange_25_listener($event) { return ctx.changeCorrespondentEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CorrespondentListComponent_Template_input_ngModelChange_30_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, CorrespondentListComponent_div_31_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 14)(33, "div", 15)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Correspondent Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "pek-correspondetn-multi-category-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("emitSelectedCategories", function CorrespondentListComponent_Template_pek_correspondetn_multi_category_picker_emitSelectedCategories_36_listener($event) { return ctx.searchByCategories($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, CorrespondentListComponent_div_38_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, CorrespondentListComponent_ng_container_41_Template, 1, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 21)(43, "p-table", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function CorrespondentListComponent_Template_p_table_selectionChange_43_listener($event) { return ctx.selectedNode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, CorrespondentListComponent_ng_template_45_Template, 12, 1, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, CorrespondentListComponent_ng_template_46_Template, 16, 13, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, CorrespondentListComponent_ng_template_47_Template, 4, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, CorrespondentListComponent_ng_template_48_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, CorrespondentListComponent_ng_template_49_Template, 0, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, CorrespondentListComponent_div_50_Template, 3, 4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, CorrespondentListComponent_ng_template_51_Template, 2, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("module", "correspondents")("isActive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.type === ctx.types.INCOMING ? "Incoming" : "Outgoing", " Correspondent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("filters-visibility_hide", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("pi-angle-double-up", !ctx.isHideFilters)("pi-angle-double-down", ctx.isHideFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type === ctx.types.INCOMING);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("correspondentType", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type === ctx.types.OUTGOING);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("value", ctx.correspondents)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c1))("selection", ctx.selectedNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isShowAll);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_menubar__WEBPACK_IMPORTED_MODULE_16__.Menubar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SelectableRow, _shared_icons_module_icon_module_icon_component__WEBPACK_IMPORTED_MODULE_4__.ModuleIconComponent, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.Paginator, primeng_calendar__WEBPACK_IMPORTED_MODULE_20__.Calendar, _correspondetn_multi_category_picker_correspondetn_multi_category_picker_component__WEBPACK_IMPORTED_MODULE_5__.CorrespondetnMultiCategoryPickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".files-cont[_ngcontent-%COMP%] {\n  position: relative;\n}\n.files-cont[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 26.25rem;\n  background-color: white;\n  border-radius: 0.625rem;\n  box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n}\n.files-cont[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.files-cont[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  pointer-events: initial;\n}\n.files-cont[_ngcontent-%COMP%]:hover   .files-list[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlc3BvbmRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLHFCQUFBO0FBQ047QUFFSTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQUFOO0FBS0k7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUFITiIsImZpbGUiOiJjb3JyZXNwb25kZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZXMtY29udCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZmlsZXMtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMjYuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCA1cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAuZmlsZXMtbGlzdCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 76546:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/correspondent/components/correspondetn-multi-category-picker/correspondetn-multi-category-picker.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondetnMultiCategoryPickerComponent": () => (/* binding */ CorrespondetnMultiCategoryPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/correspondents-category.service */ 32899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/treeselect */ 64016);








function CorrespondetnMultiCategoryPickerComponent_p_treeSelect_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Empty ");
} }
function CorrespondetnMultiCategoryPickerComponent_p_treeSelect_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-treeSelect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CorrespondetnMultiCategoryPickerComponent_p_treeSelect_1_Template_p_treeSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.selectedCategories = $event); })("ngModelChange", function CorrespondetnMultiCategoryPickerComponent_p_treeSelect_1_Template_p_treeSelect_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.selectionChanged()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CorrespondetnMultiCategoryPickerComponent_p_treeSelect_1_ng_template_1_Template, 1, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("metaKeySelection", true)("filter", true)("ngModel", ctx_r0.selectedCategories)("options", ctx_r0.categoriesTree);
} }
function CorrespondetnMultiCategoryPickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CorrespondetnMultiCategoryPickerComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.emitSelectedCategories = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isLoading = true;
        this.categories = [];
        this.categoriesTree = [];
        this.selectedCategories = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.categoryService.get([{ name: 'type', value: this.correspondentType }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(categories => {
            this.categories = categories;
            this.createTree();
            this.isLoading = false;
        });
    }
    createTree() {
        const getChildren = (nodes) => {
            nodes.forEach(node => {
                const children = this.categories.filter(c => c.parent === node.data.id);
                if (children.length > 0) {
                    node.children = children.map(category => {
                        return {
                            label: category.name,
                            data: category,
                            expandedIcon: 'pi pi-folder-open',
                            collapsedIcon: 'pi pi-folder',
                            children: []
                        };
                    });
                    getChildren(node.children);
                }
            });
        };
        const tree = this.categories.filter(c => !c.parent).map(category => {
            return {
                label: category.name,
                data: category,
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: [],
            };
        });
        getChildren(tree);
        this.categoriesTree = [...tree];
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    selectionChanged() {
        this.emitSelectedCategories.emit(this.selectedCategories.map(node => node.data.id));
    }
}
CorrespondetnMultiCategoryPickerComponent.ɵfac = function CorrespondetnMultiCategoryPickerComponent_Factory(t) { return new (t || CorrespondetnMultiCategoryPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_0__.CorrespondentsCategoriesService)); };
CorrespondetnMultiCategoryPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CorrespondetnMultiCategoryPickerComponent, selectors: [["pek-correspondetn-multi-category-picker"]], inputs: { correspondentType: "correspondentType" }, outputs: { emitSelectedCategories: "emitSelectedCategories" }, decls: 4, vars: 2, consts: [[1, "company-categorized-multi-picker"], ["selectionMode", "checkbox", "placeholder", "Select Categories", 3, "metaKeySelection", "filter", "ngModel", "options", "ngModelChange", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["selectionMode", "checkbox", "placeholder", "Select Categories", 3, "metaKeySelection", "filter", "ngModel", "options", "ngModelChange"], ["pTemplate", "empty"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function CorrespondetnMultiCategoryPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CorrespondetnMultiCategoryPickerComponent_p_treeSelect_1_Template, 2, 4, "p-treeSelect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CorrespondetnMultiCategoryPickerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_treeselect__WEBPACK_IMPORTED_MODULE_7__.TreeSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZXNwb25kZXRuLW11bHRpLWNhdGVnb3J5LXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 78006:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/correspondent/components/correspondnet-categories-picker/correspondnet-categories-picker.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondnetCategoriesPickerComponent": () => (/* binding */ CorrespondnetCategoriesPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/correspondents-category.service */ 32899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/treeselect */ 64016);







function CorrespondnetCategoriesPickerComponent_p_treeSelect_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-treeSelect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CorrespondnetCategoriesPickerComponent_p_treeSelect_1_Template_p_treeSelect_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectedCategory = $event); })("ngModelChange", function CorrespondnetCategoriesPickerComponent_p_treeSelect_1_Template_p_treeSelect_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onChoiceCategory()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.categoriesTree)("ngModel", ctx_r0.selectedCategory)("showClear", true)("disabled", ctx_r0.isDisabled);
} }
function CorrespondnetCategoriesPickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CorrespondnetCategoriesPickerComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.choiceCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.choiceCategoryFolAllIds = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isAllIds = false;
        this.isDisabled = false;
        this.isLoading = true;
        this.categories = [];
        this.categoriesTree = [];
        this.selectedCategory = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.categoryService.get([{ name: 'type', value: this.correspondentType }]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(categories => {
            this.categories = categories;
            if (this.ignoredCategoryId) {
                this.categories = this.categories.filter(c => c.id !== this.ignoredCategoryId);
            }
            this.createTree();
            this.findCategory();
            this.isLoading = false;
        });
    }
    findCategory() {
        const find = (nodes) => {
            nodes.forEach(node => {
                if (node.data.id === this.currentCategoryId) {
                    this.selectedCategory = node;
                    return;
                }
                else if (node.children.length > 0) {
                    find(node.children);
                }
            });
        };
        find(this.categoriesTree);
    }
    createTree() {
        const getChildren = (nodes) => {
            nodes.forEach(node => {
                const children = this.categories.filter(c => c.parent === node.data.id);
                if (children.length > 0) {
                    node.children = children.map(category => {
                        return {
                            label: category.name,
                            data: category,
                            children: []
                        };
                    });
                    getChildren(node.children);
                }
            });
        };
        const tree = this.categories.filter(c => !c.parent).map(category => {
            return {
                label: category.name,
                data: category,
                children: [],
            };
        });
        getChildren(tree);
        this.categoriesTree = [...tree];
    }
    onChoiceCategory() {
        if (!this.isAllIds) {
            this.choiceCategory.emit(this.selectedCategory?.data ? this.selectedCategory.data : null);
        }
        else {
            this.choiceProductForAllIds();
        }
    }
    choiceProductForAllIds() {
        if (!this.selectedCategory) {
            this.choiceCategoryFolAllIds.emit(null);
            return;
        }
        const ids = [];
        ids.push(this.selectedCategory.data.id);
        const find = (nodes) => {
            nodes.forEach(node => {
                ids.push(node.data.id);
                if (node.children.length > 0) {
                    find(node.children);
                }
            });
        };
        find(this.selectedCategory.children);
        this.choiceCategoryFolAllIds.emit(ids);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
CorrespondnetCategoriesPickerComponent.ɵfac = function CorrespondnetCategoriesPickerComponent_Factory(t) { return new (t || CorrespondnetCategoriesPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_correspondents_category_service__WEBPACK_IMPORTED_MODULE_0__.CorrespondentsCategoriesService)); };
CorrespondnetCategoriesPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CorrespondnetCategoriesPickerComponent, selectors: [["pek-correspondnet-categories-picker"]], inputs: { isAllIds: "isAllIds", currentCategoryId: "currentCategoryId", ignoredCategoryId: "ignoredCategoryId", isDisabled: "isDisabled", correspondentType: "correspondentType" }, outputs: { choiceCategory: "choiceCategory", choiceCategoryFolAllIds: "choiceCategoryFolAllIds" }, decls: 4, vars: 2, consts: [[1, "product-root-category-picker"], ["placeholder", "Select Category", 3, "options", "ngModel", "showClear", "disabled", "ngModelChange", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["placeholder", "Select Category", 3, "options", "ngModel", "showClear", "disabled", "ngModelChange"], [1, "spinner-input"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.25rem"]], template: function CorrespondnetCategoriesPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CorrespondnetCategoriesPickerComponent_p_treeSelect_1_Template, 1, 4, "p-treeSelect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CorrespondnetCategoriesPickerComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_treeselect__WEBPACK_IMPORTED_MODULE_6__.TreeSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZXNwb25kbmV0LWNhdGVnb3JpZXMtcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 53001:
/*!***************************************************************!*\
  !*** ./src/app/correspondent/correspondent-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentRoutingModule": () => (/* binding */ CorrespondentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_correspondent_layout_correspondent_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/correspondent-layout/correspondent-layout.component */ 3124);
/* harmony import */ var _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum/correspondent-types.enum */ 4047);
/* harmony import */ var _components_correspondent_list_correspondent_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/correspondent-list/correspondent-list.component */ 94347);
/* harmony import */ var _components_correspondent_category_list_correspondent_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/correspondent-category-list/correspondent-category-list.component */ 45887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
        path: '',
        title: 'Correspondents',
        component: _components_correspondent_layout_correspondent_layout_component__WEBPACK_IMPORTED_MODULE_0__.CorrespondentLayoutComponent, children: [
            {
                path: 'incoming-correspondent',
                title: 'Incoming Correspondent',
                data: { type: _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__.CorrespondentTypes.INCOMING },
                component: _components_correspondent_list_correspondent_list_component__WEBPACK_IMPORTED_MODULE_2__.CorrespondentListComponent
            },
            {
                path: 'outgoing-correspondent',
                title: 'Outgoing Correspondent',
                data: { type: _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__.CorrespondentTypes.OUTGOING },
                component: _components_correspondent_list_correspondent_list_component__WEBPACK_IMPORTED_MODULE_2__.CorrespondentListComponent
            },
            {
                path: 'incoming-categories',
                title: 'Incoming Categories',
                data: { type: _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__.CorrespondentTypes.INCOMING },
                component: _components_correspondent_category_list_correspondent_category_list_component__WEBPACK_IMPORTED_MODULE_3__.CorrespondentCategoryListComponent
            },
            {
                path: 'outgoing-categories',
                title: 'Outgoing Categories',
                data: { type: _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__.CorrespondentTypes.OUTGOING },
                component: _components_correspondent_category_list_correspondent_category_list_component__WEBPACK_IMPORTED_MODULE_3__.CorrespondentCategoryListComponent
            },
            { path: '', redirectTo: 'incoming-correspondent', pathMatch: 'full' },
            { path: '**', redirectTo: 'incoming-correspondent', pathMatch: 'full' },
        ]
    }];
class CorrespondentRoutingModule {
}
CorrespondentRoutingModule.ɵfac = function CorrespondentRoutingModule_Factory(t) { return new (t || CorrespondentRoutingModule)(); };
CorrespondentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CorrespondentRoutingModule });
CorrespondentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CorrespondentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 31943:
/*!*******************************************************!*\
  !*** ./src/app/correspondent/correspondent.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentModule": () => (/* binding */ CorrespondentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _correspondent_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correspondent-routing.module */ 53001);
/* harmony import */ var _components_correspondent_layout_correspondent_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/correspondent-layout/correspondent-layout.component */ 3124);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.module */ 4805);
/* harmony import */ var _components_correspondent_list_correspondent_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/correspondent-list/correspondent-list.component */ 94347);
/* harmony import */ var _components_correspondent_category_list_correspondent_category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/correspondent-category-list/correspondent-category-list.component */ 45887);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _modals_create_edit_correspondnet_category_create_edit_correspondnet_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/create-edit-correspondnet-category/create-edit-correspondnet-category.component */ 5372);
/* harmony import */ var _components_correspondnet_categories_picker_correspondnet_categories_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/correspondnet-categories-picker/correspondnet-categories-picker.component */ 78006);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/treeselect */ 64016);
/* harmony import */ var _modals_create_edit_correspondent_create_edit_correspondent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/create-edit-correspondent/create-edit-correspondent.component */ 19623);
/* harmony import */ var _components_correspondetn_multi_category_picker_correspondetn_multi_category_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/correspondetn-multi-category-picker/correspondetn-multi-category-picker.component */ 76546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);



















class CorrespondentModule {
}
CorrespondentModule.ɵfac = function CorrespondentModule_Factory(t) { return new (t || CorrespondentModule)(); };
CorrespondentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CorrespondentModule });
CorrespondentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _correspondent_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorrespondentRoutingModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_13__.TreeSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CorrespondentModule, { declarations: [_components_correspondent_layout_correspondent_layout_component__WEBPACK_IMPORTED_MODULE_1__.CorrespondentLayoutComponent,
        _components_correspondent_list_correspondent_list_component__WEBPACK_IMPORTED_MODULE_3__.CorrespondentListComponent,
        _components_correspondent_category_list_correspondent_category_list_component__WEBPACK_IMPORTED_MODULE_4__.CorrespondentCategoryListComponent,
        _modals_create_edit_correspondnet_category_create_edit_correspondnet_category_component__WEBPACK_IMPORTED_MODULE_6__.CreateEditCorrespondnetCategoryComponent,
        _components_correspondnet_categories_picker_correspondnet_categories_picker_component__WEBPACK_IMPORTED_MODULE_7__.CorrespondnetCategoriesPickerComponent,
        _modals_create_edit_correspondent_create_edit_correspondent_component__WEBPACK_IMPORTED_MODULE_8__.CreateEditCorrespondentComponent,
        _components_correspondetn_multi_category_picker_correspondetn_multi_category_picker_component__WEBPACK_IMPORTED_MODULE_9__.CorrespondetnMultiCategoryPickerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _correspondent_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorrespondentRoutingModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_13__.TreeSelectModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetComponentScope"](_modals_create_edit_correspondnet_category_create_edit_correspondnet_category_component__WEBPACK_IMPORTED_MODULE_6__.CreateEditCorrespondnetCategoryComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextarea, _components_correspondnet_categories_picker_correspondnet_categories_picker_component__WEBPACK_IMPORTED_MODULE_7__.CorrespondnetCategoriesPickerComponent], []);


/***/ }),

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
    CorrespondentTypes[CorrespondentTypes["INCOMING"] = 0] = "INCOMING";
    CorrespondentTypes[CorrespondentTypes["OUTGOING"] = 1] = "OUTGOING";
})(CorrespondentTypes || (CorrespondentTypes = {}));


/***/ }),

/***/ 19623:
/*!*******************************************************************************************************!*\
  !*** ./src/app/correspondent/modals/create-edit-correspondent/create-edit-correspondent.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEditCorrespondentComponent": () => (/* binding */ CreateEditCorrespondentComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enum/correspondent-types.enum */ 4047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_correspondent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/correspondent.service */ 81752);
/* harmony import */ var _shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/adapter.service */ 46767);
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/modal.service */ 63285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 73867);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _shared_components_upload_file_picker_upload_file_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/upload-file-picker/upload-file-picker.component */ 59673);
/* harmony import */ var _components_correspondnet_categories_picker_correspondnet_categories_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/correspondnet-categories-picker/correspondnet-categories-picker.component */ 78006);


















function CreateEditCorrespondentComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "ExternalID*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CreateEditCorrespondentComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function CreateEditCorrespondentComponent_ng_template_31_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 27)(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 28)(4, "div", 29)(5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEditCorrespondentComponent_ng_template_31_tr_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.downloadFile(file_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEditCorrespondentComponent_ng_template_31_tr_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.deleteCorrespondentFile(file_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSelectableRow", file_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.getName(file_r4.file), " ");
} }
function CreateEditCorrespondentComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateEditCorrespondentComponent_ng_template_31_tr_0_Template, 7, 2, "tr", 26);
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isFileToBeDisplayed(file_r4.id));
} }
function CreateEditCorrespondentComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 32)(1, "td", 33)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " No Files Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", 3);
} }
class CreateEditCorrespondentComponent {
    constructor(fb, correspondentService, dialogRef, adapterService, modalService, data) {
        this.fb = fb;
        this.correspondentService = correspondentService;
        this.dialogRef = dialogRef;
        this.adapterService = adapterService;
        this.modalService = modalService;
        this.data = data;
        this.types = _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_0__.CorrespondentTypes;
        this.isSaving = false;
        this.startDate = null;
        this.filesIdsToDelete = [];
        this.files = [];
        this.type = this.data.correspondentType;
        this.form = fb.group({
            date_received: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            description: [''],
            category: [null],
        });
        if (this.type === this.types.INCOMING) {
            this.form.addControl('external_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]));
        }
        if (this.data.type === 'edit') {
            this.correspondentFiles = [...this.data.correspondent.files];
            this.form.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null));
            this.form.get('date_received').patchValue(new Date(this.data.correspondent.date_received));
            this.form.get('id').patchValue(this.data.correspondent.id);
            this.form.get('description').patchValue(this.data.correspondent.description);
            if (this.data.correspondent.category) {
                this.form.get('category').patchValue(this.data.correspondent.category.id);
            }
            if (this.type === this.types.INCOMING) {
                this.form.get('external_id').patchValue(this.data.correspondent.external_id);
            }
        }
    }
    ngOnInit() {
    }
    setStartValue(start) {
        if (start.value) {
            this.form.get('date_received').patchValue(start.value);
            this.startDate = start.value;
        }
    }
    onSelectCategory(category) {
        if (category) {
            this.form.get('category').patchValue(category.id);
        }
        else {
            this.form.get('category').patchValue(null);
        }
    }
    onBasicUpload($event) {
    }
    deleteFiles() {
        this.filesIdsToDelete.forEach(id => {
            this.correspondentService.delete_file(this.type, id).subscribe();
        });
    }
    filesSelected(files) {
        this.files = files;
    }
    getName(name) {
        const nameArr = name.split('/');
        return nameArr[nameArr.length - 1];
    }
    downloadFile(file) {
        this.correspondentService.download_file(this.type, file.id).subscribe(response => {
            const filename = this.getName(file.file);
            this.adapterService.downloadFile(filename, response);
        });
    }
    isFileToBeDisplayed(id) {
        return this.filesIdsToDelete.findIndex(el => el === id) < 0;
    }
    deleteCorrespondentFile(id) {
        this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
            if (confirm) {
                const index = this.correspondentFiles.findIndex(el => el.id === id);
                this.correspondentFiles.splice(index, 1);
                this.filesIdsToDelete.push(id);
            }
        });
    }
    trim(field) {
        this.form.get(field).patchValue(this.form.get(field).value.trim());
    }
    attachFiles(correspondentId) {
        this.files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('correspondent', correspondentId.toString());
            this.correspondentService.attach(this.type, formData).subscribe((res) => {
            });
        });
    }
    add() {
        if (this.form.get('external_id')) {
            this.trim('external_id');
        }
        this.correspondentService.create(this.type, this.form.value).subscribe(res => {
            this.deleteFiles();
            this.attachFiles(res.data.id);
            this.dialogRef.close(res);
        });
    }
    change() {
        if (this.form.get('external_id')) {
            this.trim('external_id');
        }
        this.correspondentService.update(this.type, this.form.value).subscribe(res => {
            this.deleteFiles();
            this.attachFiles(res.data.id);
            this.dialogRef.close(res);
        });
    }
    onSave() {
        if (this.data.type === 'edit') {
            this.change();
        }
        else {
            this.add();
        }
    }
    viewFiles() {
        // const files = this.form.get('hotel').value;
        const data = { links: this.correspondentFiles, files: [] };
        this.correspondentService.viewFiles(data);
    }
}
CreateEditCorrespondentComponent.ɵfac = function CreateEditCorrespondentComponent_Factory(t) { return new (t || CreateEditCorrespondentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_correspondent_service__WEBPACK_IMPORTED_MODULE_1__.CorrespondentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_adapter_service__WEBPACK_IMPORTED_MODULE_2__.AdapterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
CreateEditCorrespondentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateEditCorrespondentComponent, selectors: [["pek-create-edit-correspondent"]], decls: 36, vars: 16, consts: [[1, "create-edit-product-structure-category"], [1, "modal-header"], [1, "modal-header__title"], [1, "d-flex", "justify-content-around", "pb-4", 3, "formGroup"], [2, "width", "48%"], [1, "form-group"], ["formControlName", "date_received", "inputId", "basic", "dateFormat", "dd/mm/yy", "id", "date_received", 1, "position-relative", 3, "readonlyInput"], ["class", "form-group", 4, "ngIf"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], [3, "correspondentType", "currentCategoryId", "choiceCategory"], [1, "col-3"], ["pButton", "", "type", "button", "icon", "pi pi-eye", "label", "View files", 3, "click"], [1, "files", 3, "showLabel", "fileChanged"], [1, "row"], ["selectionMode", "single", 1, "table-full-loading", "adaptive-table", "adaptive-table_filters", 3, "rows", "paginator", "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "justify-content-between"], ["pButton", "", "type", "button", "label", "Cancel", 1, "p-button-danger", 3, "mat-dialog-close"], ["pButton", "", "type", "button", 1, "p-button-success", 3, "label", "loading", "disabled", "click"], ["for", "external_id"], ["type", "text", "id", "external_id", "pInputText", "", "formControlName", "external_id"], [2, "width", "80%"], [2, "width", "20%"], [3, "pSelectableRow", 4, "ngIf"], [3, "pSelectableRow"], [2, "width", "30%"], [1, "d-flex", "justify-content-center"], ["pButton", "", "type", "button", "icon", "pi pi-download", 1, "p-button-primary", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", "mr-2", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", "p-button-rounded_small", 3, "click"], [1, "no-content"], [1, "text-center", "p-4", 2, "width", "100%"]], template: function CreateEditCorrespondentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Date Received*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "p-calendar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CreateEditCorrespondentComponent_div_11_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5)(13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "pek-correspondnet-categories-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("choiceCategory", function CreateEditCorrespondentComponent_Template_pek_correspondnet_categories_picker_choiceCategory_19_listener($event) { return ctx.onSelectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 11)(21, "div", 5)(22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEditCorrespondentComponent_Template_button_click_22_listener() { return ctx.viewFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 4)(24, "div", 5)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "pek-upload-file-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fileChanged", function CreateEditCorrespondentComponent_Template_pek_upload_file_picker_fileChanged_27_listener($event) { return ctx.filesSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14)(29, "p-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CreateEditCorrespondentComponent_ng_template_30_Template, 5, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, CreateEditCorrespondentComponent_ng_template_31_Template, 1, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, CreateEditCorrespondentComponent_ng_template_32_Template, 4, 1, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-dialog-actions", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEditCorrespondentComponent_Template_button_click_35_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.data.type, " Correspondent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type === ctx.types.INCOMING);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 2)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("correspondentType", ctx.type)("currentCategoryId", ctx.form.get("category").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showLabel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 5)("paginator", true)("value", ctx.correspondentFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.data.type)("loading", ctx.isSaving)("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SelectableRow, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, _shared_components_upload_file_picker_upload_file_picker_component__WEBPACK_IMPORTED_MODULE_4__.UploadFilePickerComponent, _components_correspondnet_categories_picker_correspondnet_categories_picker_component__WEBPACK_IMPORTED_MODULE_5__.CorrespondnetCategoriesPickerComponent], styles: ["pek-upload-file-picker div.p-fileupload-content {\n  max-height: 15.875rem;\n  overflow: auto;\n  padding: 0.5rem 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LWNvcnJlc3BvbmRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUROIiwiZmlsZSI6ImNyZWF0ZS1lZGl0LWNvcnJlc3BvbmRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIHBlay11cGxvYWQtZmlsZS1waWNrZXIge1xyXG4gICAgZGl2LnAtZmlsZXVwbG9hZC1jb250ZW50IHtcclxuICAgICAgbWF4LWhlaWdodDogMTUuODc1cmVtO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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

/***/ 81752:
/*!*****************************************************************!*\
  !*** ./src/app/correspondent/services/correspondent.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrespondentService": () => (/* binding */ CorrespondentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 92340);
/* harmony import */ var _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/correspondent-types.enum */ 4047);
/* harmony import */ var _modals_create_edit_correspondent_create_edit_correspondent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/create-edit-correspondent/create-edit-correspondent.component */ 19623);
/* harmony import */ var _business_trips_modals_uploaded_data_viewer_uploaded_data_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../business-trips/modals/uploaded-data-viewer/uploaded-data-viewer.component */ 33574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);









class CorrespondentService {
    constructor(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.clearSelectedCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.selectNomenclatureCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.API_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url;
        this.url = 'correspondent/';
        this.typeUrl = '';
        this.typeFilesUrl = '';
    }
    get(correspondentType, query) {
        this.setTypeUrl(correspondentType);
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
        return this.httpClient.get(this.API_URL + this.url + this.typeUrl +
            qString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            return response.data;
        }));
    }
    create(correspondentType, correspondent) {
        this.setTypeUrl(correspondentType);
        return this.httpClient.post(this.API_URL + this.url + this.typeUrl, correspondent);
    }
    update(correspondentType, correspondent) {
        this.setTypeUrl(correspondentType);
        return this.httpClient.put(this.API_URL + this.url + this.typeUrl + correspondent.id + '/', correspondent);
    }
    delete(correspondentType, correspondent) {
        this.setTypeUrl(correspondentType);
        return this.httpClient.delete(this.API_URL + this.url + this.typeUrl + correspondent.id + '/');
    }
    get_files(correspondentType, correspondentId) {
        this.setTypeUrl(correspondentType);
        return this.httpClient.get(this.API_URL + this.url + this.typeFilesUrl + correspondentId + '/')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            return response.data;
        }));
    }
    attach(correspondentType, file) {
        this.setTypeUrl(correspondentType);
        return this.httpClient
            .post(this.API_URL + this.url + this.typeFilesUrl, file)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            return response.data;
        }));
    }
    delete_file(correspondentType, fileId) {
        this.setTypeUrl(correspondentType);
        return this.httpClient.delete(this.API_URL + this.url + this.typeFilesUrl + fileId + '/');
    }
    download_file(correspondentType, fileId) {
        this.setTypeUrl(correspondentType);
        return this.httpClient.get(this.API_URL + this.url + this.typeFilesUrl + fileId + '/download/', { responseType: 'blob' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            return response;
        }));
    }
    setTypeUrl(correspondentType) {
        correspondentType === _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__.CorrespondentTypes.INCOMING ?
            this.typeUrl = 'incoming_correspondents/' :
            this.typeUrl = 'outgoing_correspondents/';
        correspondentType === _enum_correspondent_types_enum__WEBPACK_IMPORTED_MODULE_1__.CorrespondentTypes.INCOMING ?
            this.typeFilesUrl = 'incoming_correspondent_files/' :
            this.typeFilesUrl = 'outgoing_correspondent_files/';
    }
    createEditCorrespondent(type, correspondentType, correspondent) {
        return this.dialog
            .open(_modals_create_edit_correspondent_create_edit_correspondent_component__WEBPACK_IMPORTED_MODULE_2__.CreateEditCorrespondentComponent, {
            width: '80rem',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: { type, correspondent, correspondentType },
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
            .afterClosed();
    }
    viewFiles(files) {
        return this.dialog
            .open(_business_trips_modals_uploaded_data_viewer_uploaded_data_viewer_component__WEBPACK_IMPORTED_MODULE_3__.UploadedDataViewerComponent, {
            width: 'auto',
            height: 'auto',
            data: files,
            panelClass: 'gallery-modal',
            autoFocus: false,
        })
            .afterClosed()
            .pipe();
    }
}
CorrespondentService.ɵfac = function CorrespondentService_Factory(t) { return new (t || CorrespondentService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
CorrespondentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CorrespondentService, factory: CorrespondentService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=src_app_correspondent_correspondent_module_ts.js.map