import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ENomenclatureApproval, ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {ProductService} from '../../services/product.service';
import {finalize, fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {Paginator} from 'primeng/paginator';
import {debounceTime, map, tap} from 'rxjs/operators';
import {ProductCategory} from '../../models/product-category';
import {AdapterService} from '@shared/services/adapter.service';
import {Table} from 'primeng/table';

@Component({
  selector: 'pek-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;
  @ViewChild('dt') table: Table;

  mode: 'add' | 'create' = 'add';

  inputCodeSub: Subscription;
  inputNameSub: Subscription;

  isStartOnePage = false;
  isSelectNomenclature = false;
  isLoading = false;
  isSaving = false;

  nomenclatures: Nomenclature[] = [];
  countNomenclatures = 0;

  selectedNomenclature: Nomenclature = null;

  nomenclatureType = ENomenclatureType;
  nomenclatureApproval = ENomenclatureApproval;

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    category: [''],
    type: [null],
  });

  sendForm: FormGroup = this.fb.group({
    quantity: [1, [Validators.min(1), Validators.required]],
  })

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  queryKey = 'name:/code:/category:';

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<AddProductComponent>,
    private readonly productService: ProductService,
    private readonly nomenclatureService: NomenclatureService,
    public readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) private parentId: number,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.inputNameSub = fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedNomenclature = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchNomenclatures();
    });

    this.inputCodeSub = fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedNomenclature = null),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchNomenclatures();
    });
  }

  getNomenclatures() {
    this.nomenclatureService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures.results;
      this.countNomenclatures = nomenclatures.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  choiceType(type: ENomenclatureType) {
    this.searchForm.get('type').patchValue(type);

    this.query.push({
      name: 'type',
      value: this.searchForm.get('type').value
    });

    this.isSelectNomenclature = true;
    this.isLoading = true;
    this.dialogRef.updateSize('92rem', 'auto');

    this.getNomenclatures();
  }

  searchNomenclatures() {

    this.destroy$.next(true);
    this.isLoading = true;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/category:${this.searchForm.get('category').value}`;

    // если значения фильтров изменились, начинаем с 1 страницы
    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true},
      {name: 'type', value: this.searchForm.get('type').value}
    ];

    if (this.searchForm.get('name').value) {
      this.query.push({name: 'name', value: this.searchForm.get('name').value});
    }

    if (this.searchForm.get('code').value) {
      this.query.push({name: 'code', value: encodeURIComponent(this.searchForm.get('code').value)});
    }

    if (this.searchForm.get('category').value) {
      this.query.push({name: 'category', value: this.searchForm.get('category').value});
    }

    this.getNomenclatures();
  }

  paginate(evt: any) {
    if (this.searchForm.get('page').value !== evt.page + 1 && !this.isStartOnePage) {
      this.selectedNomenclature = null;
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchNomenclatures();
    }
  }

  onAddProduct() {
    this.isSaving = true;

    const send: any = {
      nomenclature: this.selectedNomenclature.id,
      parent: this.parentId,
      quantity: this.sendForm.get('quantity').value,
    };

    this.productService.addProduct(send)
      .pipe(finalize(() => this.isSaving = false))
      .subscribe(products => {
        this.dialogRef.close(products);
      });
  }

  choiceCategory(category: ProductCategory) {
    if (category) {
      this.searchForm.get('category').patchValue(category.name);
    } else {
      this.searchForm.get('category').patchValue('');
    }
    this.searchNomenclatures();
  }

  resetSendForm() {
    this.sendForm.get('quantity').patchValue(1);
  }

  openLink(description: string) {
    window.open(description, '_blank');
    this.selectedNomenclature = null;
    this.table.expandedRowKeys = {};
    this.resetSendForm();
  }

  ngOnDestroy() {
    this.inputNameSub.unsubscribe();
    this.inputCodeSub.unsubscribe();
    this.destroy$.next(true);
  }
}
