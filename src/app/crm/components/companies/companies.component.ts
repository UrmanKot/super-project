import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';
import {fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {debounceTime, map, tap} from 'rxjs/operators';
import {ModalService} from '@shared/services/modal.service';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pek-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxPersonName') searchBoxPersonName;
  @ViewChild('nomenclatureInput') nomenclatureInput: ElementRef;

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [null],
    region: [null],
    category: [null],
    nomenclature: [null],
    selectedNomenclature: [null],
    contains_contact_person: [null]
  });

  countCompanies = 0;

  companies: Company[] = [];
  selectedCompany: Company;

  isStartOnePage = false;
  isShowAll = false;
  isLoading = true;

  nSub: Subscription;
  pSub: Subscription;

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  menuItems: MenuItem[] = [{
    label: 'Selected Company',
    items: [
      {
        label: 'Company Card',
        icon: 'pi pi-folder',
        command: () => this.onGoToChainPage()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveCompany()
      }
    ]
  }];

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  queryKey = 'name:null/category:null/nomenclature:null/region:null/contains_contact_person:null';

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyService: CompanyService,
    private readonly modalService: ModalService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getCompaniesForPagination();
  }

  ngAfterViewInit() {
    this.nSub = fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedCompany = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
        this.searchCompanies();
      });

    this.pSub = fromEvent(this.searchBoxPersonName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedCompany = null),
        map(() => this.searchBoxPersonName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
        this.searchCompanies();
      });
  }

  getCompaniesForPagination() {
    this.companyService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(companies => {
      this.companies = companies.results;
      this.countCompanies = companies.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  getCompanies() {
    this.companyService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(companies => {
      this.companies = companies;
      this.countCompanies = companies.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  searchCompanies() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedCompany = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/category:${this.searchForm.get('category').value}/nomenclature:${this.searchForm.get('nomenclature').value}/region:${this.searchForm.get('region').value}/contains_contact_person:${this.searchForm.get('contains_contact_person').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }

    if (this.searchForm.get('category').value) this.query.push({
      name: 'category_id',
      value: this.searchForm.get('category').value
    });
    if (this.searchForm.get('name').value) this.query.push({name: 'name', value: this.searchForm.get('name').value});
    if (this.searchForm.get('nomenclature').value) this.query.push({
      name: 'ordered_nomenclature',
      value: this.searchForm.get('nomenclature').value
    });
    if (this.searchForm.get('contains_contact_person').value) this.query.push({
      name: 'contains_contact_person',
      value: this.searchForm.get('contains_contact_person').value
    });

    if (this.searchForm.get('region').value) this.query.push({
      name: 'region',
      value: this.searchForm.get('region').value
    });

    if (!this.isShowAll) {
      this.getCompaniesForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getCompanies();
    }
  }

  onAddCompany() {
    this.companyService.createEditCompanyModal('create').subscribe(company => {
      if (company) {
        this.searchCompanies();
      }
    });
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.9125rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.625rem';
      return;
    }
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchCompanies();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchCompanies();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchCompanies();
  }

  ngOnDestroy() {
    this.nSub.unsubscribe();
    this.pSub.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSelectCompanyCategory(id: number) {
    this.searchForm.get('category').patchValue(id);
    this.searchCompanies();
  }

  onSelectRegion(id: number) {
    this.searchForm.get('region').patchValue(id);
    this.searchCompanies();
  }

  onOpenNomenclaturePickerModal() {
    this.modalService.choiceNomenclatureModal(ENomenclatureType.PURCHASED).subscribe(nomenclature => {
      this.nomenclatureInput.nativeElement.blur();

      if (nomenclature) {
        this.searchForm.get('selectedNomenclature').patchValue(`(${nomenclature.code}) ${nomenclature.name}`);
        this.searchForm.get('nomenclature').patchValue(nomenclature.id);
        this.searchCompanies();
      }
    });
  }

  clearNomenclatureFilter() {
    this.searchForm.get('nomenclature').patchValue(null);
    this.searchForm.get('selectedNomenclature').patchValue(null);
    this.searchCompanies();
  }

  onRemoveCompany() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.companyService.delete(this.selectedCompany.id).subscribe(() => this.searchCompanies());
        this.selectedCompany = null;
      }
    });
  }

  onGoToChainPage() {
    this.router.navigate(['company-page', this.selectedCompany.id], {relativeTo: this.route});
  }
}
