import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {BehaviorSubject, of, Subject, switchMap, takeUntil} from 'rxjs';
import {ListProduct} from '../../../warehouse/models/list-product';
import {ListProductService} from '../../../warehouse/services/list-product.service';
import {QuerySearch} from '@shared/models/other';
import {AdapterService} from '@shared/services/adapter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'pek-root-list-picker-by-order-type',
  templateUrl: './root-list-picker-by-order-type.component.html',
  styleUrls: ['./root-list-picker-by-order-type.component.scss']
})
export class RootListPickerByOrderTypeComponent implements OnInit, OnDestroy, OnChanges {

  @Output() selectRootList: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;

  selectRootListId: number;
  isLoading = true;

  rootLists: ListProduct[] = [];

  private destroy$ = new Subject();
  @Input() query: QuerySearch[] = [];
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  constructor(
    private readonly listProductService: ListProductService,
    private readonly adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.search$.pipe(
      untilDestroyed(this),
      switchMap(() => this.getProductLists())
    ).subscribe(productsLists => {
      let rootLists: ListProduct[] = [];
      rootLists = productsLists.map(root => {
        return {
          ...root,
          fullName: `(${root.id}) ${root.nomenclature.code}~${root.nomenclature.name}`
        };
      });
      this.rootLists = this.adapterService.removeDuplicates(rootLists, x => x.id);
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('query' in changes) {
      if (this.query != changes['query'].previousValue || !changes['query'].firstChange) {
        this.search$.next();
      }
    }
  }

  getProductLists() {
    return this.query.length > 0 ? this.listProductService.getFiltered(this.query) : of([]);
  }

  onSelectRootList() {
    this.selectRootList.emit(this.selectRootListId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
