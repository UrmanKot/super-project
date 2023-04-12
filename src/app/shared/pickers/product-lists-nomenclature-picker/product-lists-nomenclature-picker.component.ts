import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {ListProduct} from '../../../warehouse/models/list-product';
import {BehaviorSubject, of, Subject, switchMap} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {ListProductService} from '../../../warehouse/services/list-product.service';
import {AdapterService} from '@shared/services/adapter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Nomenclature} from '@shared/models/nomenclature';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {OrderProduct} from '../../../procurement/models/order-product';

@UntilDestroy()
@Component({
  selector: 'pek-product-lists-nomenclature-picker',
  templateUrl: './product-lists-nomenclature-picker.component.html',
  styleUrls: ['./product-lists-nomenclature-picker.component.scss']
})
export class ProductListsNomenclaturePickerComponent implements OnInit, OnDestroy, OnChanges {

  @Output() selectRootList: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;

  selectRootListId: number;
  isLoading = true;

  nomenclatureList: Nomenclature[] = [];

  private destroy$ = new Subject();
  @Input() query: QuerySearch[];
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  constructor(
    private readonly listProductService: OrderProductService,
    private readonly adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.search$.pipe(
      untilDestroyed(this),
      switchMap(() => this.getProductLists())
    ).subscribe(productsLists => {
      productsLists.forEach(orderProduct => {
        this.nomenclatureList.push(orderProduct.nomenclature);
      });
      this.nomenclatureList = this.adapterService.removeDuplicates(this.nomenclatureList, x => x.id);
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

  onSelectNomenclature() {
    this.selectRootList.emit(this.selectRootListId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
