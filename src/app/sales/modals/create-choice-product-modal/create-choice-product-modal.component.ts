import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WarehouseProduct} from "../../../warehouse/models/warehouse-product";
import {ProductStructureCategoryService} from "../../../product-structure/services/product-structure-category.service";
import {Category} from "../../../product-structure/models/category";
import {WarehouseProductService} from "../../../warehouse/services/warehouse-product.service";
import {QuerySearch} from "@shared/models/other";
import {MatDialogRef} from "@angular/material/dialog";
import {AdapterService} from "@shared/services/adapter.service";
import {Paginator} from "primeng/paginator";
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'pek-create-choice-product-modal',
  templateUrl: './create-choice-product-modal.component.html',
  styleUrls: ['./create-choice-product-modal.component.scss']
})

export class CreateChoiceProductModalComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;

  form = this.fb.group({
    name: [''],
    code: [''],
    description: ['']
  })
  formProduct: FormGroup = this.fb.group({
    quantity: [0, [Validators.required, Validators.min(0)]],
    productionLists: [0, [Validators.required, Validators.min(0)]]
  });

  isSaving: true;
  isLoading = false;
  isLoadingProducts = true;
  isStartOnePage = false
  selectedNode: WarehouseProduct;
  categories: Category[]
  products: WarehouseProduct[] = []
  countProducts: number = 0;
  currentPage = 1;
  rootCategory: Category
  queryKey: string = this.adapterService.generateQueryKey(this.form);
  private destroy$ = new Subject();
  query: QuerySearch[] = [
    {name: 'page', value: this.currentPage},
    {name: 'at_area', value: false},
    {name: 'root_nomenclatures_only', value: true},
    {name: 'root_categories', value: null},
    {name: 'is_for_sale', value: true},
    {name: 'paginated', value: true},
  ];
  isSerial = false;
  serials: { id: number, label: string }[] = [];
  isStartFirstPage = false;
  page: number = this.currentPage

  constructor(
    private fb: FormBuilder,
    private productStructureCategoryService: ProductStructureCategoryService,
    private warehouseProductService: WarehouseProductService,
    private dialogRef: MatDialogRef<CreateChoiceProductModalComponent>,
    private readonly adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.isLoading = true;
    this.productStructureCategoryService.get().subscribe(res => {
        // @ts-ignore
        res.forEach(category => category.isExpanded = false)
        this.categories = res
        this.isLoading = false
        return {
          data: {
            count: 1
          }
        }
      }
    )
  }

  getProducts(category: Category, isPagination = false) {
    this.selectedNode = null
    if (this.rootCategory?.id === category.id && !isPagination) {
      this.rootCategory = null
      category.isExpanded = false
      return
    }
    this.rootCategory = category
    this.products = []
    this.isLoadingProducts = true
    this.query.find(query => query.name === 'root_categories').value = category.id
    this.warehouseProductService.getGroupedPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {

      if (category.id >= 1 && category.id !== this.query.find(query => query.name === 'page').value) {
        this.currentPage = this.query.find(query => query.name = 'page').value;
      }
      if (category.id === 1 && this.currentPage >= 1) {
        this.currentPage = this.query.find(query => query.name = 'page').value;
      }

      this.query.find(query => query.name === 'page').value = 1
      this.countProducts = res.count
      res.results.forEach((product: any) => {
        if (product?.extra_info) {
          product.reservationCount = product.extra_info.filter(i => i.is_reserved_for_sale).length;
          product.freeQuantity = product.extra_info.length - product.extra_info.filter(i => i.is_reserved_for_sale).length;
        }
        if (!product.nomenclature) {
          product.nomenclature = {
            id: product.nomenclature_id,
            code: product.code,
            name: product.name,
            type: product.type,
            category: product.category,
            root_category: product.root_category,
            description: product.description,
            products: []
          };
        }
      })
      this.products = res.results
      if (this.isStartFirstPage) {
        this.paginator?.changePage(0);
      }

      this.isStartFirstPage = false;
      this.isLoadingProducts = false
    })
    if (category.isExpanded && !isPagination) {
      category.isExpanded = false

    } else {
      this.toggleCategories(category)
    }
  }

  search() {
    this.selectedNode = null;
    this.products = [];
    this.destroy$.next(true)
    const newQueryKey = this.adapterService.generateQueryKey(this.form);
    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
      {name: 'at_area', value: false},
      {name: 'root_nomenclatures_only', value: true},
      {name: 'is_for_sales_chain', value: true},
      {name: 'root_categories', value: this.rootCategory.id},
      {name: 'is_for_sale', value: true},
      {name: 'paginated', value: true}
    ];

    for (const key in this.form.controls) {
      if (this.form.controls[key].value) {
        this.query.push({
          name: key,
          value: this.form.controls[key].value
        });
      }
    }

    this.getProducts(this.rootCategory, true)
  }

  toggleCategories(category: Category) {
    this.categories.forEach(cat => {
      cat.isExpanded = false
    })
    category.isExpanded = true
  }

  updateSerials() {
    const nomenclature = this.selectedNode.nomenclature
    this.isSerial = nomenclature.bulk_or_serial === '1';

    if (this.isSerial) {
      this.formProduct.addControl('serial_product_ids', new FormControl([]))

      this.selectedNode.extra_info.filter(i => !i.is_reserved_for_sale).forEach(i => {
        this.serials.push({id: i.id, label: i.serial_number_str})
      })
    }
  }

  selectionChange() {
    this.serials = []
    this.formProduct.removeControl('serial_product_ids')
    this.formProduct.get('quantity').patchValue(0)
    this.formProduct.get('productionLists').patchValue(0)
  }


  onSave() {
    const send = {
      selectedNode: WarehouseProduct
    };
    // @ts-ignore
    this.warehouseProductService.createBulk(send).subscribe(res => {
    })
    this.dialogRef.close(send)
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

