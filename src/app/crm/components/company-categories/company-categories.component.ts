import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Subject} from 'rxjs';
import {CompanyCategory} from '../../models/company-category';
import {CompanyCategoryService} from '../../services/company-category.service';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-company-categories',
  templateUrl: './company-categories.component.html',
  styleUrls: ['./company-categories.component.scss']
})
export class CompanyCategoriesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  menuItems: MenuItem[] = [{
    label: 'Selected Company Category',
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

  categories: CompanyCategory[] = [];
  selectedCategory: CompanyCategory;
  isLoading = true;

  constructor(
    private readonly companyCategoryService: CompanyCategoryService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getCompanyCategories();
  }

  getCompanyCategories() {
    this.companyCategoryService.get().subscribe(categories => {
      this.categories = categories;
      this.isLoading = false;
    })
  }

  onAddCategory() {
    this.companyCategoryService.createEditWarehouseModal('create').subscribe(category => {
      if (category) {
        this.categories.push(category);
        this.renderTable();
      }
    });
  }

  onEditCategory() {
    this.companyCategoryService.createEditWarehouseModal('edit', this.selectedCategory).subscribe(category => {
      if (category) {
        const index = this.categories.findIndex(t => t.id === this.selectedCategory.id);
        this.categories[index] = category;
        this.selectedCategory = this.categories[index];
        this.renderTable();
      }
    });
  }

  onRemoveCategory() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.companyCategoryService.delete(this.selectedCategory).subscribe(() => {
          const index = this.categories.findIndex(w => w.id === this.selectedCategory.id);
          this.categories.splice(index, 1);
          this.selectedCategory = null;
          this.renderTable();
        });
      }
    });
  }

  renderTable() {
    this.categories = this.categories.map(el => el);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }

}
