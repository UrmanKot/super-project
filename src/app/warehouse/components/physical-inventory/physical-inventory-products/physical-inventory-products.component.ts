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
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {ModalService} from '@shared/services/modal.service';
import {QrCodeService} from '../../../../qr-code/qr-code.service';
import {SortEvent} from 'primeng/api';

export class PreparedPhysicalInventory {
  nomenclature: Nomenclature;
  isSerializerProduct: boolean;
  product: InventoryProduct[];
}

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
  isGenerating = false;

  stopScanned$: Subject<any> = new Subject();
  scanningEnd = false;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    description: [null],
    warehouse: [null],
    category: [null],
    locator: [null],
    type: [null],
    found_row_id: [null],
    accepted_by_invoices: [null],
    order_by_code: [null],
    order_by_name: [null],
    order_by_initial_quantity: [null],
    order_by_new_quantity: [null],
    order_by_category: [null],
    order_by_warehouse: [null],
    order_by_locator: [null],
    page: [1],
  });

  isShowAll = false;
  warehousesIds: number[] = [];

  selectedInventoryProducts: Product[] = [];
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

  ignoringPagination = false;

  // foundInventoryProductId
  findItemId: number;

  newQuantity$ = new Subject<InventoryProduct>();

  private destroy$ = new Subject();
  isScanned: boolean = false;
  preparedProducts: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly modalService: ModalService,
    private readonly physicalInventoryService: PhysicalInventoryService,
    private readonly qrCodeService: QrCodeService,
    private readonly router: Router,
  ) {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedInventoryProducts = []),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedInventoryProducts = []),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxDescription.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedInventoryProducts = []),
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
    this.selectedInventoryProducts = [];

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

    if (this.searchForm.get('found_row_id').value) {
      this.query.push({
        name: 'found_row_id',
        value: this.searchForm.get('found_row_id').value
      });
    }

    // this.query.push({
    //   name: 'ordering',
    //   value: '-physicalinventoryproduct__nomenclature__code,'
    // });

    const ordering = this.prepareSortingField();
    if (ordering) {
      this.query.push({
        name: 'ordering',
        value: ordering
      });
    }

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
      console.log('inventoryLists', inventoryLists);
      const preparedProducts = [];
      inventoryLists.results.forEach(product => {
        preparedProducts.push(...product.products)
      });
      this.preparedProducts = [...preparedProducts];
      inventoryLists.results.forEach(list => {
        list.products[0].countProducts = list.products.length;
        list.products[0].products = [...list.products];
        list.products[0].is_scanned_root = list.is_scanned;
        list.products[0].root_id = list.id;
        newInventoryProducts.push(list.products[0]);
      });

      if (this.searchForm.get('found_row_id').value) {
        this.ignoringPagination = true;
        this.searchForm.get('found_row_id').patchValue(null);
        let page: number;

        if (!inventoryLists.previous) {
          page = 1;
        } else if (!inventoryLists.next) {
          page = Math.ceil(inventoryLists.count / 10);
        } else {
          page = parseInt(
            inventoryLists.next
              .split('?')
              .find(s => s.includes('page'))
              .split('&')
              .find(s => s.includes('page'))
              .replace(/[^0-9]/g, ''),
            10) - 1;
        }

        this.searchForm.get('page').patchValue(page);
        this.paginator.changePage(page - 1);
        newInventoryProducts.sort((a, b) => a.root_id === this.findItemId ? -1 : 1);
      }

      this.findItemId = null;




      this.inventoryProducts = [...newInventoryProducts];
      this.countProducts = inventoryLists.count;

      console.log('this.inventoryProducts', this.inventoryProducts);
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
    if (this.ignoringPagination) {
      this.ignoringPagination = false;
      return;
    }

    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  onComplete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.physicalInventoryService.getChangedPhysicalInventoryProductsHaveBeenChanged(+this.inventoryId).subscribe((res: { data: InventoryProduct[] }) => {
          if (res.data.length > 0) {
            this.physicalInventoryService.changesInInventory(res.data).subscribe(res => {
              if (res) {
                this.completePhysicalInventory();
              }
            });
          } else {
            this.completePhysicalInventory();
          }
        });
      }
    });
  }

  completePhysicalInventory() {
    this.isCompleting = true;
    this.physicalInventoryService.completePhysicalInventory(+this.inventoryId).pipe(
      finalize(() => this.isCompleting = false)
    ).subscribe(() => {
      this.router.navigateByUrl('/warehouse/physical-inventory').then();
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
    this.physicalInventoryService.openPhysicalInventoryProductMoveModal(this.selectedInventoryProducts[0]).subscribe(res => {
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

  onGenerateQrCodes() {
    this.isGenerating = true;

    const send = {
      by_nomenclatures_list: [],
    };

    this.selectedInventoryProducts.forEach(p => {
      if (p.product) {
        send.by_nomenclatures_list.push({
          nomenclature_id: p.product.nomenclature.id,
          serial_number_ids:
            p.product.nomenclature.bulk_or_serial === '1' ?
              p.products.filter(product => product.serial_number).map(product => +product.serial_number.id) : [],
          order_product_ids: [p.id],
          invoice_product_ids: [],
        });
      } else {
        send.by_nomenclatures_list.push({
          nomenclature_id: p.nomenclature.id,
          serial_number_ids: [],
          order_product_ids: [],
          invoice_product_ids: [],
        });
      }
    });

    this.qrCodeService.generateQrCodes(send).subscribe(() => this.isGenerating = false);
  }

  onStartScanning() {
    this.isScanned = true;
    this.findItemId = null;
    this.scanningEnd = false;
  }

  onScanned(data: any) {
    this.physicalInventoryService.scanPhysicalInventoryQrCode(this.inventoryId, data).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      if (!this.scanningEnd) {
        if (response) {
          this.scanningComplete(response);
        } else {
          this.scanningEnd = true;
          this.isScanned = false;

          setTimeout(() => {
            alert('Not Found');
          }, 1000);
        }
      }
    });
  }

  scanningComplete(data: { item_id_changed: number, list_id_changed: number }) {
    const listId = data.item_id_changed;
    const itemId = data.list_id_changed;

    if (listId) {
      this.findItemId = listId;
      const findEl = this.inventoryProducts.find(p => p.root_id === this.findItemId);

      if (findEl) {
        if (findEl.product.nomenclature.bulk_or_serial === '1') {
        } else {
          findEl.is_scanned = true;
          findEl.is_scanned_root = true;
          this.inventoryProducts.sort((a, b) => a.root_id === this.findItemId ? -1 : 1);
        }
      } else {
        this.searchForm.get('found_row_id').patchValue(listId);
        this.searchProducts();
      }
    }

    this.scanningEnd = true;
    this.isScanned = false;
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanned = false;
  }

  getWarehouseLocators(warehouseId: number) {
    // @ts-ignore
    return this.currentInventory.locators.filter(loc => loc.warehouse === warehouseId).map(loc => loc.name);
  }

  ngOnDestroy() {
    this.stopScanned$.next(true);
    this.stopScanned$.complete();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  prepareSortingField(): string {
    let sorting = '';
    if (this.searchForm.get('order_by_code').value !== null) {
      if (this.searchForm.get('order_by_code').value) {
        sorting += '-physicalinventoryproduct__nomenclature__code,';
      } else {
        sorting += 'physicalinventoryproduct__nomenclature__code,';
      }
    }

    if (this.searchForm.get('order_by_name').value !== null) {
      if (this.searchForm.get('order_by_name').value) {
        sorting += '-physicalinventoryproduct__nomenclature__name,';
      } else {
        sorting += 'physicalinventoryproduct__nomenclature__name,';
      }
    }

    if (this.searchForm.get('order_by_initial_quantity').value !== null) {
      if (this.searchForm.get('order_by_initial_quantity').value) {
        sorting += '-physicalinventoryproduct__initial_quantity,';
      } else {
        sorting += 'physicalinventoryproduct__initial_quantity,';
      }
    }
    if (this.searchForm.get('order_by_new_quantity').value !== null) {
      if (this.searchForm.get('order_by_new_quantity').value) {
        sorting += '-physicalinventoryproduct__new_quantity,';
      } else {
        sorting += 'physicalinventoryproduct__new_quantity,';
      }
    }
    if (this.searchForm.get('order_by_category').value !== null) {
      if (this.searchForm.get('order_by_category').value) {
        sorting += '-physicalinventoryproduct__nomenclature__category__name,';
      } else {
        sorting += 'physicalinventoryproduct__nomenclature__category__name,';
      }
    }
    if (this.searchForm.get('order_by_warehouse').value !== null) {
      if (this.searchForm.get('order_by_warehouse').value) {
        sorting += '-physicalinventoryproduct__locator__warehouse__name,';
      } else {
        sorting += 'physicalinventoryproduct__locator__warehouse__name,';
      }
    }
    if (this.searchForm.get('order_by_locator').value !== null) {
      if (this.searchForm.get('order_by_locator').value) {
        sorting += '-physicalinventoryproduct__locator__name,';
      } else {
        sorting += 'physicalinventoryproduct__locator__name,';
      }
    }

    return sorting;
  }

  sorting(value: boolean, field: string) {
    if (value === null) {
      this.searchForm.get(field).patchValue(false);
    } else if (value === false) {
      this.searchForm.get(field).patchValue(true);
    } else if (value === true) {
      this.searchForm.get(field).patchValue(null);
    }
    this.searchProducts();
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;
      // console.log('value1', value1);
      // console.log('value2', value2);
      // console.log('data1', data1);
      // console.log('data2', data2);
      // console.log('event', event);

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }
}
