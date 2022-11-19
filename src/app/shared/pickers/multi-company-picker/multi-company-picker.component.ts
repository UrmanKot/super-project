import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Company} from '../../../crm/models/company';
import {CompanyService} from '../../../crm/services/company.service';

@Component({
  selector: 'pek-multi-company-picker',
  templateUrl: './multi-company-picker.component.html',
  styleUrls: ['./multi-company-picker.component.scss']
})
export class MultiCompanyPickerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isDisabled = false;
  @Input() currentCompaniesIds: number[] = [];
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
      this.findCompanies();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentCompaniesIds' in changes) {
      this.selectedCompanies = [];
      this.findCompanies();
    }
  }

  findCompanies() {
    if (this.currentCompaniesIds.length > 0) {
      this.currentCompaniesIds.forEach(id => {
        const findCompany = this.companies.find(t => t.id === id);

        if (findCompany) {
          this.selectedCompanies.push(findCompany);
        }
      });
    }
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
