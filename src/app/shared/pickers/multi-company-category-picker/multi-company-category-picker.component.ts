import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Company} from '../../../crm/models/company';
import {Subject, takeUntil} from 'rxjs';
import {CompanyService} from '../../../crm/services/company.service';
import {CompanyCategory} from '../../../crm/models/company-category';
import {CompanyCategoryService} from '../../../crm/services/company-category.service';

@Component({
  selector: 'pek-multi-company-category-picker',
  templateUrl: './multi-company-category-picker.component.html',
  styleUrls: ['./multi-company-category-picker.component.scss']
})
export class MultiCompanyCategoryPickerComponent implements OnInit, OnChanges {
  @Input() isDisabled = false;
  @Output() selectCompanyCategories: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectCompanyCategoriesIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() currentCompanyCategoriesIds: number[] = [];

  isLoading = true;
  companies: Partial<CompanyCategory>[] = [];
  selectedCompanyCategories: Partial<CompanyCategory>[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly companyCategoryService: CompanyCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.companyCategoryService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.companies = categories;
      this.findCompanyCategories();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentCompanyCategoriesIds' in changes) {
      this.selectedCompanyCategories = [];
      this.findCompanyCategories();
    }
  }

  findCompanyCategories() {
    if (this.currentCompanyCategoriesIds?.length > 0) {
      this.currentCompanyCategoriesIds.forEach(id => {
        const findCompany = this.companies.find(t => t.id === id);

        if (findCompany) {
          this.selectedCompanyCategories.push(findCompany);
        }
      });
    }
  }

  onSelectCompanyCategories() {
    if (this.selectedCompanyCategories === null || this.selectedCompanyCategories?.length === 0) {
      this.selectCompanyCategories.emit(null);
      this.selectCompanyCategoriesIds.emit(null);
    } else {
      this.selectCompanyCategories.emit(this.selectedCompanyCategories.map(c => c.id).join(','));
      this.selectCompanyCategoriesIds.emit(this.selectedCompanyCategories.map(c => c.id));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
