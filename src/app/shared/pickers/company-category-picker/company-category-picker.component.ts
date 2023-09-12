import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CompanyCategory} from '../../../crm/models/company-category';
import {CompanyCategoryService} from '../../../crm/services/company-category.service';

@Component({
  selector: 'pek-company-category-picker',
  templateUrl: './company-category-picker.component.html',
  styleUrls: ['./company-category-picker.component.scss']
})
export class CompanyCategoryPickerComponent implements OnInit, OnChanges {
  @Output() selectCompanyCategory: EventEmitter<number> = new EventEmitter<number>();
  @Input() selectedCategoryId: number;
  isLoading = true;
  categories: Partial<CompanyCategory>[] = [];
  selectedCompanyCategoryId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly companyCategoryService: CompanyCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.companyCategoryService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedCategoryId' in changes) {
      this.selectedCompanyCategoryId = this.selectedCategoryId
    }
  }

  onSelectCompanyCategory() {
    this.selectCompanyCategory.emit(this.selectedCompanyCategoryId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
