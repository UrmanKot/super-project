import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductCategoriesService} from '../../../product-structure/services/product-categories.service';
import {ProductCategory} from '../../../product-structure/models/product-category';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-product-root-category-picker',
  templateUrl: './product-root-category-picker.component.html',
  styleUrls: ['./product-root-category-picker.component.scss']
})
export class ProductRootCategoryPickerComponent implements OnInit, OnDestroy {
  @Input() currentCategoryId: number;
  @Input() isDisabled: boolean = false;
  @Output() choiceCategory: EventEmitter<number> = new EventEmitter<number>();

  rootCategories: ProductCategory[];
  selectCategoryId: number;
  isLoading = true;

  private destroy$ = new Subject();

  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) { }

  ngOnInit(): void {
    this.productCategoriesService.getRoot().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.rootCategories = categories;
      this.isLoading = false;
    })

    if (this.currentCategoryId) {
      this.selectCategoryId = this.currentCategoryId;
    }
  }

  onChangeCategory() {
    this.choiceCategory.emit(this.selectCategoryId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
