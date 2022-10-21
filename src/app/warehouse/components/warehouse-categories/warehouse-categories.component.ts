import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {Category} from '../../../product-structure/models/category';
import {MenuItem, TreeNode} from 'primeng/api';
import {UnitMeasure} from '../../../product-structure/models/unit-measure';
import {cloneDeep} from 'lodash-es';
import {Subject, takeUntil} from 'rxjs';
import {TreeService} from '@shared/services/tree.service';

@Component({
  selector: 'pek-warehouse-categories',
  templateUrl: './warehouse-categories.component.html',
  styleUrls: ['./warehouse-categories.component.scss']
})
export class WarehouseCategoriesComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [
    {
      label: 'Selected Category',
      items: [
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

  isMovingUp = false;
  isMovingDown = false;
  isLoading = true;

  unitsMeasures: UnitMeasure[] = [];

  private destroy$ = new Subject();

  categoriesTree: TreeNode<Category>[];
  selectedCategory: TreeNode<Category>;
  categories: Category[] = [];
  expanseMap = {};

  constructor(
    private categoriesService: CategoriesService,
    private readonly treeService: TreeService,
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.createTree();
      this.isLoading = false;
    });
  }

  onAddCategory() {

  }

  createTree() {
    if (this.categoriesTree) {
      this.treeService.mapExpansion(this.categoriesTree, this.expanseMap);
    }

    this.categoriesTree = this.treeService.createTree(this.categories, this.expanseMap);
  }

  getMeasure(measure) {
    if (measure != null) {
      return measure.name + ' (' + measure.symbol + ')';
    } else {
      return '_';
    }
  }

  onExpandAll(): void {
    const temp = cloneDeep(this.categoriesTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.categoriesTree = temp;
  }

  onCollapseAll(): void {
    const temp = cloneDeep(this.categoriesTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.categoriesTree = temp;
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
  }
}
