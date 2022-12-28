import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {TreeNode} from 'primeng/api';
import {Category} from '../../../product-structure/models/category';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {environment} from '@env/environment.prod';
import {QuerySearch} from '@shared/models/other';
import {Subject, takeUntil} from 'rxjs';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {Paginator} from 'primeng/paginator';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'pek-warehouse-search',
  templateUrl: './warehouse-search.component.html',
  styleUrls: ['./warehouse-search.component.scss']
})
export class WarehouseSearchComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  selectedNode;
  searchResult: WarehouseProduct[] = [];
  tableScrollHeight = '29.75rem';
  link = environment.link_url + 'dash/';
  isLoading = false;
  isShowAll = false;
  countProducts: number;
  isStartOnePage = false;
  formChanged: Subject<void> = new Subject<void>();

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    warehouse: [null],
    category: [null],
    locator: [null],
    type: [null],
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true},
    {name: 'at_area', value: false}
  ];
  private destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<WarehouseSearchComponent>,
    private productService: WarehouseProductService,
  ) {
  }

  ngOnInit(): void {
    this.formChanged.pipe(debounceTime(500), takeUntil(this.destroy$)).subscribe(() => {
      this.searchProducts();
    });
  }

  onSelectCategory(node: TreeNode<Category>) {
    if (node) {
      this.searchForm.get('category').patchValue(node.data.id);
    } else {
      this.searchForm.get('category').patchValue(null);
    }
  }

  searchProducts() {
    this.isLoading = true;
    this.selectedNode = null;

    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        // {name: 'type', value: '0'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }

    this.query.push({name: 'at_area', value: false});

    if (this.searchForm.get('name').value) this.query.push({
      name: 'name',
      value: this.searchForm.get('name').value.replace(/\+/g, '%2b')
    });

    if (this.searchForm.get('code').value) this.query.push({name: 'code', value: this.searchForm.get('code').value});

    if (this.searchForm.get('type').value) this.query.push({name: 'type', value: this.searchForm.get('type').value});

    if (this.searchForm.get('warehouse').value) this.query.push({
      name: 'warehouse',
      value: this.searchForm.get('warehouse').value
    });

    if (this.searchForm.get('locator').value) this.query.push({
      name: 'locator',
      value: this.searchForm.get('locator').value
    });
    console.log('this.searchForm.get(\'locator\').value', this.searchForm.get('locator').value);

    if (this.searchForm.get('category').value) this.query.push({
      name: 'category',
      value: this.searchForm.get('category').value
    });

    if (!this.isShowAll) {
      this.getProductForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getProducts();
    }
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  getProductForPagination() {
    this.productService.getGroupedPagination(this.query).subscribe(response => {
      response.results.forEach((product: any, idx) => {
        if (!product.nomenclature) {
          product.nomenclature = {
            id: product.nomenclature_id,
            code: product.code,
            name: product.name,
            type: product.type,
            category: product.category,
            description: product.description,
          };
        }

        product.checkedForGeneration = false;
        product.uid = idx;
      });

      this.searchResult = response.results;
      this.countProducts = response.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.isLoading = false;
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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getProducts() {
    this.productService.getGrouped(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      response.forEach((product: any, idx) => {
        if (!product.nomenclature) {
          product.nomenclature = {
            id: product.nomenclature_id,
            code: product.code,
            name: product.name,
            type: product.type,
            category: product.category,
            description: product.description,
          };
        }

        product.checkedForGeneration = false;
        product.uid = idx;
      });

      this.searchResult = response;
      this.countProducts = response.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  locatorSelected($event: number) {
    this.searchForm.get('warehouse').setValue($event)
  }

  select() {
    this.dialogRef.close(this.selectedNode);
  }
}
