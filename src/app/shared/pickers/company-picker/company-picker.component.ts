import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Company} from '../../../crm/models/company';
import {CompanyService} from '../../../crm/services/company.service';
import {QuerySearch} from "@shared/models/other";

@Component({
  selector: 'pek-company-picker',
  templateUrl: './company-picker.component.html',
  styleUrls: ['./company-picker.component.scss']
})
export class CompanyPickerComponent implements OnInit, OnChanges {

  @Output() selectCompany: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectCompanyFull: EventEmitter<Partial<Company>> = new EventEmitter<Partial<Company>>();
  @Input() currentCompanyId: any;
  @Input() currentCompany: Partial<Company>;
  @Input() isDisabled: boolean = false
  @Input() query: QuerySearch[] = [];
  isLoading = true;
  companies: Partial<Company>[] = [];
  selectedCompanyId: number;

  constructor(
    private readonly companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.companyService.getShorts(this.query).pipe(
    ).subscribe(companies => {
      this.companies = companies;

      if (this.currentCompanyId) {
        this.selectedCompanyId = this.currentCompanyId;
      }

      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('currentCompanyId' in changes) {
      this.selectedCompanyId = this.currentCompanyId;
    }
  }

  onSelectCompany() {
    this.currentCompany = this.companies.find(currency => currency.id === this.selectedCompanyId);
    this.selectCompany.emit(this.selectedCompanyId);
    this.selectCompanyFull.emit(this.currentCompany);
  }
}
