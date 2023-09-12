import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {CorrespondentsCategoriesService} from '../../services/correspondents-category.service';
import {CorrespondentsCategory} from '../../models/correspondents-category';
import {CorrespondentTypes} from '../../enum/correspondent-types.enum';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'pek-correspondnet-categories-picker',
  templateUrl: './correspondnet-categories-picker.component.html',
  styleUrls: ['./correspondnet-categories-picker.component.scss']
})
export class CorrespondnetCategoriesPickerComponent implements OnInit, OnDestroy {
  @Output() choiceCategory: EventEmitter<CorrespondentsCategory> = new EventEmitter<CorrespondentsCategory>();
  @Output() choiceCategoryFolAllIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() isAllIds = false;
  @Input() currentCategoryId: number;
  @Input() ignoredCategoryId: number;
  @Input() isDisabled = false;
  @Input() correspondentType: CorrespondentTypes;

  isLoading = true;
  categories: CorrespondentsCategory[] = [];
  categoriesTree: TreeNode<CorrespondentsCategory>[] = [];

  selectedCategory: TreeNode<CorrespondentsCategory> = null;

  private destroy$ = new Subject();

  constructor(
    public readonly auth: AuthService,
    private readonly categoryService: CorrespondentsCategoriesService
  ) { }

  ngOnInit(): void {
    this.categoryService.get([{name: 'type', value: this.correspondentType}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
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
    const find = (nodes: TreeNode<CorrespondentsCategory>[]) => {
      nodes.forEach(node => {
        if (node.data.id === this.currentCategoryId) {
          this.selectedCategory = node;
          return;
        } else if (node.children.length > 0) {
          find(node.children);
        }
      });
    };

    find(this.categoriesTree);
  }

  createTree() {
    const getChildren = (nodes: TreeNode<CorrespondentsCategory>[]) => {
      nodes.forEach(node => {
        const children = this.categories.filter(c => c.parent?.id === node.data.id);

        if (children.length > 0) {
          node.children = children.map(category => {
            return {
              label: category.name,
              data: category,
              selectable: this.hasAccessToCategory(category.id),
              children: []
            };
          });

          getChildren(node.children);
        }
      });
    };

    const tree: TreeNode<CorrespondentsCategory>[] = this.categories.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <CorrespondentsCategory>category,
        selectable: this.hasAccessToCategory(category.id),
        children: [],
      };
    });

    getChildren(tree);

    this.categoriesTree = [...tree];
  }

  hasAccessToCategory(categoryId: number) {
    const categoryPermissions = this.auth.user.correspondent_category_permissions.map(cat => cat.id);
    return this.auth.user.is_superuser || categoryPermissions.some(catId => catId === categoryId);
  }

  onChoiceCategory() {
    if (!this.isAllIds) {
      this.choiceCategory.emit(this.selectedCategory?.data ? this.selectedCategory.data : null);
    } else {
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

    const find = (nodes: TreeNode<CorrespondentsCategory>[]) => {
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
