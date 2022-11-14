import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SalesChain} from '../../../sales/models/sales-chain';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';
import {Subject} from 'rxjs';
import {CompanyCategoryService} from '../../services/company-category.service';

@Component({
  selector: 'pek-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, OnDestroy {

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [null],
    region: [null],
    category: [null],
    nomenclature: [null],
    selectedNomenclature: [null],
    contains_contact_person: [null]
  });

  countChains = 0;

  salesChain: Company[] = [];
  selectedSalesChain: Company;

  isStartOnePage = false;
  isShowAll = false;
  isLoading = true;


  menuItems: MenuItem[] = [{
    label: 'Selected Company',
    items: [
      {
        label: 'Company Card',
        icon: 'pi pi-card',
        // command: () => this.onGoToChainPage()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        // command: () => this.onRemoveChain()
      }
    ]
  }];

  tableScrollHeight = '24.125rem';
  isHideFilters = false;

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyService: CompanyService,
    private readonly companyCategoryService: CompanyCategoryService,
  ) { }

  ngOnInit(): void {
  }

  searchChains() {

  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '21.875rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '24.125rem';
      return;
    }
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchChains();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchChains();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchChains();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
