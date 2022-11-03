import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Company} from '../../../sales/models/company';
import {CompanyService} from '../../../sales/services/company.service';

@Component({
  selector: 'pek-company-picker',
  templateUrl: './company-picker.component.html',
  styleUrls: ['./company-picker.component.scss']
})
export class CompanyPickerComponent implements OnInit, OnDestroy {
  @Output() selectCompany: EventEmitter<number> = new EventEmitter<number>();
  isLoading = true;
  companies: Partial<Company>[] = [];
  selectedCompanyId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyService.getShorts().pipe(
      takeUntil(this.destroy$)
    ).subscribe(companies => {
      this.companies = companies;
      this.isLoading = false;
    });
  }

  onSelectCompany() {
    this.selectCompany.emit(this.selectedCompanyId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
