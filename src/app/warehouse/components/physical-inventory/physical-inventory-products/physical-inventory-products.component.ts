import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PhysicalInventoryService} from '../../../services/physical-inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {debounceTime, map, switchMap, tap} from 'rxjs/operators';
import {finalize, fromEvent, Subject, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {Product} from '../../../../product-structure/models/product';
import {Paginator} from 'primeng/paginator';
import {InventoryProduct, PhysicalInventory} from '../../../models/physical-inventory';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-physical-inventory-products',
  templateUrl: './physical-inventory-products.component.html',
  styleUrls: ['./physical-inventory-products.component.scss']
})
export class PhysicalInventoryProductsComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;
  @ViewChild('searchBoxDescription') searchBoxDescription;

  isCompleting = false;
  isCancelation = false;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    description: [null],
    warehouse: [null],
    category: [null],
    locator: [null],
    type: [null],
    accepted_by_invoices: [null],
    page: [1],
  });

  isShowAll = false;
  warehousesIds: number[] = [];

  selectedInventoryProduct: Product;
  inventoryProducts: Product[] = [];

  isLoadingCurrentInventory = true;
  isLoadingInventoryList = true;

  queryKey = 'name:null/code:null/description:null/type:null/accepted_by_invoices:null/warehouse:null/locator:null/category:null';

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  isStartOnePage = false;
  countProducts = 0;
  inventoryId: number;
  currentInventory: PhysicalInventory = null;

  newQuantity$ = new Subject<InventoryProduct>();

  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly modalService: ModalService,
    private readonly physicalInventoryService: PhysicalInventoryService,
    private readonly router: Router,
  ) {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedInventoryProduct = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedInventoryProduct = null),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxDescription.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedInventoryProduct = null),
        map(() => this.searchBoxDescription.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.inventoryId = +id),
      switchMap(() => this.physicalInventoryService.getById(this.inventoryId)),
      takeUntil(this.destroy$)
    ).subscribe(inventory => {
      this.currentInventory = inventory;
      this.warehousesIds = this.currentInventory.warehouses.map(w => w.id);
      this.isLoadingCurrentInventory = false;
    });

    this.onChangeQuantity();
    this.getInventoryProductsForPagination();
  }

  onChangeQuantity() {
    this.newQuantity$.pipe(
      tap(inventoryProduct => this.prepareForSave(inventoryProduct)),
      debounceTime(350),
      switchMap(inventoryProduct => this.physicalInventoryService.updateQuantityInventoryProduct(inventoryProduct)),
    ).subscribe();
  }

  prepareForSave(inventoryProduct: InventoryProduct) {
    if (inventoryProduct.new_quantity === null || inventoryProduct.new_quantity < 0) {
      inventoryProduct.new_quantity = 0;
    }
  }

  searchProducts() {
    this.isLoadingInventoryList = true;
    this.destroy$.next(true);
    this.selectedInventoryProduct = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/description:${this.searchForm.get('description').value}/type:${this.searchForm.get('type').value}/accepted_by_invoices:${this.searchForm.get('accepted_by_invoices').value}/warehouse:${this.searchForm.get('warehouse').value}/locator:${this.searchForm.get('locator').value}/category:${this.searchForm.get('category').value}`;

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

    if (this.searchForm.get('code').value) {
      this.query.push({name: 'code', value: this.searchForm.get('code').value});
    }

    if (this.searchForm.get('name').value) this.query.push({name: 'name', value: this.searchForm.get('name').value});

    if (this.searchForm.get('description').value) this.query.push({
      name: 'description',
      value: this.searchForm.get('description').value
    });

    if (this.searchForm.get('warehouse').value) this.query.push({
      name: 'warehouse',
      value: this.searchForm.get('warehouse').value
    });

    if (this.searchForm.get('locator').value) this.query.push({
      name: 'locator',
      value: this.searchForm.get('locator').value
    });

    if (this.searchForm.get('type').value !== null) this.query.push({
      name: 'type',
      value: this.searchForm.get('type').value
    });

    if (this.searchForm.get('accepted_by_invoices').value !== null) this.query.push({
      name: 'accepted_by_invoices',
      value: this.searchForm.get('accepted_by_invoices').value
    });

    if (!this.isShowAll) {
      this.getInventoryProductsForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getInventoryProducts();
    }
  }

  getInventoryProductsForPagination() {
    const newInventoryProducts = [];

    this.physicalInventoryService.getInventoryProductsListsForPagination(this.inventoryId, this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(inventoryLists => {
      inventoryLists.results.forEach(list => {
        list.products[0].countProducts = list.products.length;
        list.products[0].products = [...list.products];
        list.products[0].is_scanned_root = list.is_scanned;
        list.products[0].root_id = list.id;
        newInventoryProducts.push(list.products[0]);
      });

      this.inventoryProducts = [...newInventoryProducts];
      this.countProducts = inventoryLists.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoadingInventoryList = false;
    });
  }

  getInventoryProducts() {
    const newInventoryProducts = [];

    this.physicalInventoryService.getInventoryProducts(this.inventoryId, this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(inventoryLists => {
      inventoryLists.forEach(list => {
        list.products[0].countProducts = list.products.length;
        list.products[0].products = [...list.products];
        list.products[0].is_scanned_root = list.is_scanned;
        list.products[0].root_id = list.id;
        newInventoryProducts.push(list.products[0]);
      });

      this.inventoryProducts = [...newInventoryProducts];
      this.countProducts = inventoryLists.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoadingInventoryList = false;
    });
  }

  onSelectWarehouse(id: number) {
    this.searchForm.get('warehouse').patchValue(id);
    this.searchForm.get('locator').patchValue(null);
    this.searchProducts();
  }

  onSelectLocator(id: number) {
    this.searchForm.get('locator').patchValue(id);
    this.searchProducts();
  }

  onSelectNomenclatureType(type: ENomenclatureType) {
    this.searchForm.get('type').patchValue(type);
    this.searchProducts();
  }

  onSelectAcceptedByInvoices(value: boolean) {
    this.searchForm.get('accepted_by_invoices').patchValue(value);
    this.searchProducts();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  onComplete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isCompleting = true;
        this.physicalInventoryService.completePhysicalInventory(+this.inventoryId).pipe(
          finalize(() => this.isCompleting = false)
        ).subscribe(() => {
          this.router.navigateByUrl('/warehouse/physical-inventory').then();
        });
      }
    });
  }

  onRemovePhysicalInventory() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.isCancelation = true;
        this.physicalInventoryService.removePhysicalInventory(+this.inventoryId).pipe(
          finalize(() => this.isCancelation = false)
        ).subscribe(() => {
          this.router.navigateByUrl('/warehouse/physical-inventory').then();
        });
      }
    });
  }

  onShowAll() {
    this.isShowAll = true;
    this.searchProducts();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.searchProducts();
  }

  onMoveProduct() {
    this.physicalInventoryService.openPhysicalInventoryProductMoveModal(this.selectedInventoryProduct).subscribe(res => {
      if (res) {
        this.searchProducts();
      }
    });
  }

  onOpenAddProductModal() {
    this.physicalInventoryService.openAddProductToPhysicalInventory(this.inventoryId).subscribe(res => {
      if (res) {
        this.searchProducts();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
