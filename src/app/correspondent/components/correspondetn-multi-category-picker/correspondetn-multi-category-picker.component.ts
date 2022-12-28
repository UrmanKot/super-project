import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CompanyCategory} from '../../../crm/models/company-category';
import {Company} from '../../../crm/models/company';
import {TreeNode} from 'primeng/api';
import {CorrespondentsCategory} from '../../models/correspondents-category';
import {Subject, takeUntil} from 'rxjs';
import {CorrespondentsCategoriesService} from '../../services/correspondents-category.service';
import {CorrespondentTypes} from '../../enum/correspondent-types.enum';

@Component({
  selector: 'pek-correspondetn-multi-category-picker',
  templateUrl: './correspondetn-multi-category-picker.component.html',
  styleUrls: ['./correspondetn-multi-category-picker.component.scss']
})
export class CorrespondetnMultiCategoryPickerComponent implements OnInit, OnDestroy {
  @Input() correspondentType: CorrespondentTypes;
  @Output() emitSelectedCategories: EventEmitter<number[]> = new EventEmitter<number[]>();
  isLoading = true;
  categories: CorrespondentsCategory[] = [];
  categoriesTree: TreeNode<CorrespondentsCategory>[] = [];

  selectedCategories: TreeNode<CorrespondentsCategory>[] = null;

  private destroy$ = new Subject();
  constructor(
    private readonly categoryService: CorrespondentsCategoriesService
  ) { }

  ngOnInit(): void {
    this.categoryService.get([{name: 'type', value: this.correspondentType}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;

      this.createTree();
      this.isLoading = false;
    });
  }


  createTree() {
    const getChildren = (nodes: TreeNode<CorrespondentsCategory>[]) => {
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

    const tree: TreeNode<CorrespondentsCategory>[] = this.categories.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <CorrespondentsCategory>category,
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
    this.emitSelectedCategories.emit(this.selectedCategories.map(node => node.data.id))
  }
}
