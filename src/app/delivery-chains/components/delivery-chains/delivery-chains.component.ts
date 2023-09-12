import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {MenuItem} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdapterService} from "@shared/services/adapter.service";
import {DeliveryChain} from "../../models/delivery-chain";
import {BehaviorSubject, iif, Observable, switchMap} from "rxjs";
import {filter, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {QuerySearch} from "@shared/models/other";
import {DeliveryChainService} from "../../../warehouse/services/delivery-chain.service";
import {Status} from "../../../procurement/models/status";
import {SalesChain} from "../../../sales/models/sales-chain";
import {ModalService} from "@shared/services/modal.service";

@UntilDestroy()
@Component({
  selector: 'pek-delivery-chains',
  templateUrl: './delivery-chains.component.html',
  styleUrls: ['./delivery-chains.component.scss']
})
export class DeliveryChainsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  statuses: Status[] = [];

  menuItems: MenuItem[] = [{
    label: 'Selected Delivery Chain',
    items: [
      {
        label: 'Chain Page',
        icon: 'pi pi-folder',
        command: () => this.onGoToChainPage(this.selectedChain)
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveChain()
      }
    ]
  }];

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  isStartFirstPage = false;
  isShowAll = false;
  isLoading = true;

  reservedProducts: string[];

  isLoadingStatuses = true;
  isLoadingProducts = true;

  selectedChain: DeliveryChain = null;

  searchForm: FormGroup = this.fb.group({
  });

  countChains = 0;
  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  chains$: Observable<DeliveryChain[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.deliveryChainService.getForPagination(this.query).pipe(
          tap(response => this.countChains = response.count),
          map(response => response.results),
        ),
        this.deliveryChainService.get(this.query).pipe(
          tap(users => this.countChains = users.length),
        ),
      ),
    ),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly deliveryChainService: DeliveryChainService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getStatuses();
    this.getReservedProducts()
  }

  getStatuses() {
    this.deliveryChainService.getStatuses().subscribe(statuses => {
      this.statuses = statuses;
      this.isLoadingStatuses = false;
    });
  }

  getReservedProducts() {
    this.deliveryChainService.getReservedProducts().subscribe(products => {
      this.reservedProducts = products;
      this.isLoadingProducts = false;
    })
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedChain = null;
    this.countChains = 0;

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true});
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
      }
    }
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

  onSelectCompanies(ids: string) {
    this.searchForm.get('company_ids').patchValue(ids);
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onGoToChainPage(chain: DeliveryChain) {
    window.open(`/delivery-chains/chains/` + chain.id, '_blank');
  }

  private onRemoveChain() {
    this.modalService.confirm('danger').pipe(
      filter(Boolean)
    ).subscribe(() => {
      this.deliveryChainService.delete(this.selectedChain.id).subscribe(() => {
        this.search$.next()
      });
    })
  }

  onSelectCompany(id: number) {

  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.search$.next();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.search$.next();
  }

}
