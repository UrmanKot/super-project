import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CompanyCategory} from '../../../crm/models/company-category';
import {CompanyCategoryService} from '../../../crm/services/company-category.service';

@Component({
  selector: 'pek-company-category-picker',
  templateUrl: './company-category-picker.component.html',
  styleUrls: ['./company-category-picker.component.scss']
})
export class CompanyCategoryPickerComponent implements OnInit {
  @Output() selectCompanyCategory: EventEmitter<number> = new EventEmitter<number>();
  isLoading = true;
  categories: Partial<CompanyCategory>[] = [];
  selectedCompanyCategoryId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly companyCategoryService: CompanyCategoryService,
  ) { }

  ngOnInit(): void {
    this.companyCategoryService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.isLoading = false;
    });
  }

  onSelectCompanyCategory() {
    this.selectCompanyCategory.emit(this.selectedCompanyCategoryId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
