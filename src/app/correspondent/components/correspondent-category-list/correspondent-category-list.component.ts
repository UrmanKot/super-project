import {Component, OnDestroy, OnInit} from '@angular/core';
import {CorrespondentsCategoriesService} from '../../services/correspondents-category.service';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {MenuItem, TreeNode} from 'primeng/api';
import {CorrespondentTypes} from '../../enum/correspondent-types.enum';
import {take, tap} from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'pek-correspondent-category-list',
  templateUrl: './correspondent-category-list.component.html',
  styleUrls: ['./correspondent-category-list.component.scss']
})
export class CorrespondentCategoryListComponent implements OnInit, OnDestroy {
  type: CorrespondentTypes;
  types = CorrespondentTypes;
  selectedNode: TreeNode;
  categories: TreeNode[];
  expanseMap = {};
  isLoading = true;

  private destroy$ = new Subject();
  isMovingUp = false;
  isMovingDown = false;


  menuItems: MenuItem[] = [
    {
      label: 'Selected Product',
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
  constructor(
    private activatedRouter: ActivatedRoute,
    private modalService: ModalService,
    private categoriesService: CorrespondentsCategoriesService,
  ) { }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe(res => {
      this.type = res['type'];
      this.getCategories();
    });
  }

  getCategories() {
    if (this.categories) {
      this.mapExpansion();
    }
    this.categoriesService.get([{name: 'type', value: this.type}]).pipe(take(1), takeUntil(this.destroy$), tap((categories) => {
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
    } else {
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
    } else {
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
    this.categoriesService.createEditCategory('create',  this.type).pipe(take(1), takeUntil(this.destroy$)).subscribe(
      (response) => {
        this.getCategories();
      }
    );
  }

  createExpanseMap(node) {
    if (node.expanded) {
      this.expanseMap[node.data.id] = node.expanded;
    } else {
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
      const ins = {data: element, expanded: false};
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
    } else {
      selectedNode = this.categories.find(category => category.data.id === this.selectedNode.data.id);
    }

    this.selectedNode = selectedNode;
  }

  edit() {
    const entity = this.selectedNode.data;
    this.categoriesService.createEditCategory('edit',  this.type, entity).pipe(take(1), takeUntil(this.destroy$)).subscribe(
      res => {
        this.getCategories();
      }
    );
  }

  delete() {
    const category = this.selectedNode.data;
    this.modalService.confirm('danger', 'Confirm').pipe(take(1), takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.categoriesService.delete(category).pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
          this.selectedNode = null;
          this.getCategories();
        });
      }
    });
  }

  expandAll(): void {
    const temp = cloneDeep(this.categories);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.categories = temp;
  }

  collapseAll(): void {
    const temp = cloneDeep(this.categories);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.categories = temp;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
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

  drop($event: CdkDragDrop<any, any>) {

  }

  onSelectNode() {
    // console.log('this.selectedNode', this.selectedNode);
  }
}
