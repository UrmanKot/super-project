import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SalesChain} from '../../models/sales-chain';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SalesChainService} from '../../services/sales-chain-service';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {Subject, takeUntil} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {environment} from '@env/environment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pek-sales-procurement-chains',
  templateUrl: './sales-chains.component.html',
  styleUrls: ['./sales-chains.component.scss']
})
export class SalesChainsComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;

  link = environment.link_url + 'dash/';

  menuItems: MenuItem[] = [{
    label: 'Selected Sales Chain',
    items: [
      {
        label: 'Chain Page',
        icon: 'pi pi-folder',
        command: () => this.onGoToChainPage(this.selectedSalesChain)
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveChain()
      }
    ]
  }];

  tableScrollHeight = '24.125rem';
  isHideFilters = false;

  isStartOnePage = false;
  isShowAll = false;
  isLoading = true;

  salesChain: SalesChain[] = [];
  selectedSalesChain: SalesChain;

  searchForm: FormGroup = this.fb.group({
    status_ids: [null],
    company_ids: [null],
    country_ids: [null],
    regions_ids: [null],
    order_by_name: [null],
    order_by_date: [null],
    order_by_status: [null],
    company__categories__in: [null],
    page: [1],
  });

  countChains = 0;

  queryKey = 'company_ids:null/company__categories__in:null/status_ids:null';

  query: QuerySearch[] = [
    {name: 'paginated', value: 'true'},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private salesChainService: SalesChainService,
    private readonly modalService: ModalService,
    private router: Router,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getSalesChainsForPagination();
  }

  createSaleChain() {
    this.salesChainService.createEditSalesChainModal().subscribe(salesChain => {
      if (salesChain) {
        this.searchChains();
      }
    })
  }

  getSalesChainsForPagination() {
    this.salesChainService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(sales => {
      this.salesChain = sales.results;
      this.countChains = sales.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  getSalesChains() {
    this.salesChainService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(salesChains => {
      this.salesChain = salesChains;
      this.countChains = salesChains.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  searchChains() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedSalesChain = null;

    const newQueryKey = `'company_ids:${this.searchForm.get('company_ids').value}/company__categories__in:${this.searchForm.get('company__categories__in').value}/status_ids:${this.searchForm.get('status_ids').value}'`;

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

    if (this.searchForm.get('company_ids').value) {
      this.query.push({
        name: 'company_ids',
        value: this.searchForm.get('company_ids').value,
      });
    }

    if (this.searchForm.get('company__categories__in').value !== null) {
      this.query.push({
        name: 'company__categories__in',
        value: this.searchForm.get('company__categories__in').value
      });
    }

    if (this.searchForm.get('status_ids').value) {
      this.query.push({
        name: 'status_ids',
        value: this.searchForm.get('status_ids').value,
      });
    }

    if (!this.isShowAll) {
      this.getSalesChainsForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getSalesChains();
    }
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

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchChains();
    }
  }

  onSelectCompanies(ids: string) {
    this.searchForm.get('company_ids').patchValue(ids);
    this.searchChains();
  }

  onSelectStatuses(ids: string) {
    this.searchForm.get('status_ids').patchValue(ids);
    this.searchChains();
  }

  onSelectCompanyCategories(ids: string) {
    this.searchForm.get('company__categories__in').patchValue(ids);
    this.searchChains();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private onRemoveChain() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.salesChainService.delete(this.selectedSalesChain).subscribe(() => {
          this.selectedSalesChain = null;
          this.searchChains();
        })
      }
    })
  }

  onGoToCompany(salesChain: SalesChain) {
    window.open(`${this.link}crm/businnes-partners/company-page/` + salesChain.company_id, '_blank');
  }

  onGoToChainPage(salesChain: SalesChain) {
    // Add product is missing in new version
    window.open(`${this.link}sales/sales-chains/chain-page/` + salesChain.id, '_blank');
    // this.router.navigate(['chain-page', salesChain.id], {relativeTo: this.route})
  }
}
