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
import {Country} from '@shared/models/country';
import {SubRegion} from '@shared/models/sub-region';
import {Region} from '@shared/models/region';

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
    // region: [null],
    // country_id: [null],
    // sub_region_id: [null],
    category: [null],
    nomenclature: [null],
    selectedNomenclature: [null],
    contains_contact_person: [null],
    countries: [null],
    regions: [null],
    sub_regions: [null],
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

    // const element = document.getElementById('selector');
    //
    // let maskOptions = {
    //   overwrite: true,
    //   autofix: true,
    //   mask: 'HH:MM',
    //   blocks: {
    //     HH: {
    //       mask: IMask.MaskedRange,
    //       placeholderChar: 'HH',
    //       from: 0,
    //       to: 23,
    //       maxLength: 2
    //     },
    //     MM: {
    //       mask: IMask.MaskedRange,
    //       placeholderChar: 'MM',
    //       from: 0,
    //       to: 59,
    //       maxLength: 2
    //     }
    //   }
    // }
    //
    // const mask = IMask(element, maskOptions);
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

    const newQueryKey = `name:${this.searchForm.get('name').value}/category:${this.searchForm.get('category').value}/nomenclature:${this.searchForm.get('nomenclature').value}/contains_contact_person:${this.searchForm.get('contains_contact_person').value}`;

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

    if (this.searchForm.get('countries').value !== null) this.query.push({
      name: 'countries',
      value: this.searchForm.get('countries').value.map(country => country.id)
    });

    if (this.searchForm.get('regions').value !== null) this.query.push({
      name: 'regions',
      value: this.searchForm.get('regions').value.map(region => region.id)
    });

    if (this.searchForm.get('sub_regions').value !== null) this.query.push({
      name: 'sub_regions',
      value: this.searchForm.get('sub_regions').value.map(region => region.id)
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

  // onSelectRegion(id: number) {
  //   this.searchForm.get('region').patchValue(id);
  //   this.searchForm.get('sub_region_id').patchValue(null);
  //   this.searchCompanies();
  // }

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
    window.open(`/crm/business-partners/company-page/${this.selectedCompany.id}`, '_blank')
  }

  countrySelected(country: Country) {
    if (country) {
      this.searchForm.get('country_id').setValue(country.id);
    } else {
      this.searchForm.get('country_id').setValue(null);
    }
    this.searchForm.get('region').setValue(null);
    this.searchForm.get('sub_region_id').setValue(null);
    this.searchCompanies();

  }

  // regionSubSelected(subRegion: Partial<SubRegion>) {
  //   if (subRegion) {
  //     this.searchForm.get('sub_region_id').setValue(subRegion.id);
  //   } else {
  //     this.searchForm.get('sub_region_id').setValue(null);
  //   }
  //   this.searchCompanies();
  //
  // }

  onSelectCountry(countries: Country[]) {
    if (countries) {
      this.searchForm.get('countries').setValue(countries);
    } else {
      this.searchForm.get('countries').setValue(null);
    }
    this.searchForm.get('sub_regions').setValue(null);
    this.searchForm.get('regions').setValue(null);
    this.searchCompanies();
  }

  onSelectRegion(regions: Region[]) {
    if (regions) {
      this.searchForm.get('regions').setValue(regions);
    } else {
      this.searchForm.get('regions').setValue(null);
    }
    this.searchForm.get('sub_regions').setValue(null);

    this.searchCompanies();
  }

  regionSubSelected(subRegion: SubRegion[]) {
    if (subRegion) {
      this.searchForm.get('sub_regions').setValue(subRegion);
    } else {
      this.searchForm.get('sub_regions').setValue(null);
    }

    this.searchCompanies();
  }
}

