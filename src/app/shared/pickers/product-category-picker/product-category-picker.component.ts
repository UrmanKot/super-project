import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCategoriesService} from '../../../product-structure/services/product-categories.service';
import {ProductCategory} from '../../../product-structure/models/product-category';

@Component({
  selector: 'pek-product-category-picker',
  templateUrl: './product-category-picker.component.html',
  styleUrls: ['./product-category-picker.component.scss']
})
export class ProductCategoryPickerComponent implements OnInit {
  @Input() currentCategoryId: number;
  @Input() isDisabled: boolean = false;
  @Output() choiceCategory: EventEmitter<number> = new EventEmitter<number>();

  categories: ProductCategory[];
  selectCategoryId: number;

  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) { }

  ngOnInit(): void {
    this.productCategoriesService.get([{name: 'is_for_root', value: true}]).subscribe(categories => {
      this.categories = categories;
    })

    if (this.currentCategoryId) {
      this.selectCategoryId = this.currentCategoryId;
    }
  }

  onChangeCategory() {
    this.choiceCategory.emit(this.selectCategoryId);
  }
}
