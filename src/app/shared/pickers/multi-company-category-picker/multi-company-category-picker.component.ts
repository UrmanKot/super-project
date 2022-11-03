import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../../sales/models/company';
import {Subject, takeUntil} from 'rxjs';
import {CompanyService} from '../../../sales/services/company.service';
import {CompanyCategory} from '../../../sales/models/company-category';
import {CompanyCategoryService} from '../../../sales/services/company-category.service';

@Component({
  selector: 'pek-multi-company-category-picker',
  templateUrl: './multi-company-category-picker.component.html',
  styleUrls: ['./multi-company-category-picker.component.scss']
})
export class MultiCompanyCategoryPickerComponent implements OnInit {
  @Input() isDisabled = false;
  @Output() selectCompanyCategories: EventEmitter<string> = new EventEmitter<string>();

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
      this.isLoading = false;
    });
  }

  onSelectCompanyCategories() {
    if (this.selectedCompanyCategories === null || this.selectedCompanyCategories?.length === 0) {
      this.selectCompanyCategories.emit(null);
    } else {
      this.selectCompanyCategories.emit(this.selectedCompanyCategories.map(c => c.id).join(','));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
