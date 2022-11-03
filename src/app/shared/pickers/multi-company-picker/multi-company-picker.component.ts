import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Company} from '../../../sales/models/company';
import {CompanyService} from '../../../sales/services/company.service';

@Component({
  selector: 'pek-multi-company-picker',
  templateUrl: './multi-company-picker.component.html',
  styleUrls: ['./multi-company-picker.component.scss']
})
export class MultiCompanyPickerComponent implements OnInit, OnDestroy {
  @Input() isDisabled = false;
  @Output() selectCompanies: EventEmitter<string> = new EventEmitter<string>();

  isLoading = true;
  companies: Partial<Company>[] = [];
  selectedCompanies: Partial<Company>[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly companyService: CompanyService,
  ) {
  }

  ngOnInit(): void {
    this.companyService.getShorts().pipe(
      takeUntil(this.destroy$)
    ).subscribe(companies => {
      this.companies = companies;
      this.isLoading = false;
    });
  }

  onSelectCompanies() {
    if (this.selectedCompanies === null || this.selectedCompanies?.length === 0) {
      this.selectCompanies.emit(null);
    } else {
      this.selectCompanies.emit(this.selectedCompanies.map(c => c.id).join(','));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
