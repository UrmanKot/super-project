import {Component, Inject, OnInit} from '@angular/core';
import {AccountingCategory} from "../../models/accounting-category";
import {AccountingCategoriesService} from "../../services/accounting-categories.service";
import {untilDestroyed} from "@ngneat/until-destroy";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";

@Component({
  selector: 'pek-accounting-category-picker',
  templateUrl: './accounting-category-picker.component.html',
  styleUrls: ['./accounting-category-picker.component.scss']
})
export class AccountingCategoryPickerComponent implements OnInit {
  isLoading = true;
  categories: AccountingCategory[] = [];
  selectedCategoryId: number;
  selectedCategory: AccountingCategory;

  constructor(
    private accountingCategoriesService: AccountingCategoriesService,
    private dialogRef: MatDialogRef<AccountingCategoryPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {category: AccountingCategory }
  ) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.accountingCategoriesService.get().pipe(
    ).subscribe(currencies => {
      this.categories = currencies;

      if (this.data.category) {
        this.selectedCategory = this.data.category
      }

      this.isLoading = false;
    });
  }

  onSelect() {
    this.dialogRef.close(this.selectedCategory)
  }
}
