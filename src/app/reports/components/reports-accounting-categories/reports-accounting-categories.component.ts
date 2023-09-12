import { Component, OnInit } from '@angular/core';
import {AccountingCategoriesService} from "../../services/accounting-categories.service";
import {ModalService} from "@shared/services/modal.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Currency} from "@shared/models/currency";
import {AccountingCategory} from "../../models/accounting-category";
import {MenuItem} from "primeng/api";

@UntilDestroy()
@Component({
  selector: 'pek-reports-accounting-categories',
  templateUrl: './reports-accounting-categories.component.html',
  styleUrls: ['./reports-accounting-categories.component.scss']
})
export class ReportsAccountingCategoriesComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Accounting Category',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditCategory()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveCategory()
      }
    ]
  }];

  categories: AccountingCategory[] = [];
  selectedCategory: AccountingCategory;
  isLoading = true;

  constructor(
    private accountingCategoriesService: AccountingCategoriesService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.accountingCategoriesService.get().pipe(
      untilDestroyed(this)
    ).subscribe(currencies => {
      this.categories = currencies;
      this.isLoading = false;
    });
  }

  onAddCategory() {
    this.accountingCategoriesService.createEditCurrencyModal('create').subscribe(currency => {
      if (currency) {
        this.categories.unshift(currency);
      }
    });
  }

  onEditCategory() {
    this.accountingCategoriesService.createEditCurrencyModal('edit', this.selectedCategory).subscribe(currency => {
      if (currency) {
        const index = this.categories.findIndex(t => t.id === this.selectedCategory.id);
        this.categories[index] = currency;
        this.selectedCategory = this.categories[index];
      }
    });
  }

  onRemoveCategory() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.accountingCategoriesService.delete(this.selectedCategory).subscribe(() => {
          const index = this.categories.findIndex(c => c.id === this.selectedCategory.id);
          this.categories.splice(index, 1);
          this.selectedCategory = null;
        });
      }
    });
  }
}
