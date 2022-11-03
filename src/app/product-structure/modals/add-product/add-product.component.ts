import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ENomenclatureApproval, ENomenclatureType, Nomenclature, NomenclatureImage} from '@shared/models/nomenclature';
import {ProductService} from '../../services/product.service';
import {finalize, fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {Paginator} from 'primeng/paginator';
import {debounceTime, map, tap} from 'rxjs/operators';
import {Category} from '../../models/category';
import {AdapterService} from '@shared/services/adapter.service';
import {Table} from 'primeng/table';
import {Product} from '../../models/product';

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

  isCreateFormInvalid: boolean = true;
  createFormValue: Partial<Nomenclature & Product>;

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
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  queryKey = 'name:/code:/category:';

  newProduct: Partial<Product> = {
    nomenclature: {
      id: null,
      category: null,
      technologies: [],
      images: [],
      type: null,
    }
  };

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

    this.newProduct.nomenclature.type = type;

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

  choiceCategory(category: Category) {
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

  onOpenLink(description: string) {
    window.open(description, '_blank');
    this.selectedNomenclature = null;
    this.table.expandedRowKeys = {};
    this.resetSendForm();
  }

  onChangeMode(mode: 'add' | 'create') {
    this.mode = mode;

    if (this.searchForm.get('type').value === ENomenclatureType.PURCHASED) {
      this.dialogRef.updateSize('50rem', 'auto');
    } else {
      this.dialogRef.updateSize('60rem', 'auto');
    }

    this.dialogRef.removePanelClass('modal-picker');
    this.dialogRef.addPanelClass('modal-overflow-visible');
  }

  onChangeFormValue(data: { invalid: boolean, formValue: Partial<Product & Nomenclature> }) {
    this.createFormValue = data.formValue;
    this.isCreateFormInvalid = data.invalid;
  }

  onCreateProduct() {
    if (!this.isCreateFormInvalid) {
      this.isSaving = true;

      const send: Partial<Nomenclature> = {
        name: this.createFormValue.name,
        code: this.createFormValue.code,
        description: this.createFormValue.description,
        type: this.createFormValue.type,
      };

      if (this.createFormValue.type === ENomenclatureType.PURCHASED) {
        send.category = this.createFormValue.category;
        send.bulk_or_serial = this.createFormValue.bulk_or_serial;
        delete send.code;
      } else {
        send.technologies = [...this.createFormValue.technologies];
        send.category = null;
      }

      this.nomenclatureService.create(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(nomenclature => {
        this.isSaving = true;

        const send = [];

        if (this.newProduct.nomenclature.images.length > 0) {
          this.newProduct.nomenclature.images.forEach(file => {
            send.push({
              nomenclature: nomenclature.id,
              image: file.file,
            });
          });

          this.nomenclatureService.uploadImagesSeveral(send).pipe(
            finalize(() => this.isSaving = false)
          ).subscribe(images => {
            this.isSaving = true;
            this.addProduct(nomenclature.id, this.createFormValue.quantity, images);
          });
        } else {
          this.isSaving = true;
          this.addProduct(nomenclature.id, this.createFormValue.quantity, []);
        }
      });
    }
  }

  addProduct(id: number, quantity: number, images: NomenclatureImage[]) {
    const send: Partial<Product> = {
      // @ts-ignore
      nomenclature: id,
      parent: this.parentId,
      quantity,
    };
    this.productService.addProduct(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(products => {
      products[0].nomenclature.images = [...images];
      this.dialogRef.close(products);
    });
  }

  ngOnDestroy() {
    this.inputNameSub.unsubscribe();
    this.inputCodeSub.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onRemoveImage(idx: number) {
    this.newProduct.nomenclature.images.splice(idx, 1);
  }

  onUploadImage(files: File[]) {
    files.forEach(file => {
      const fileReader = new FileReader();

      fileReader.onload = (fileLoadedEvent) => {
        const srcData = fileLoadedEvent.target.result;

        const newImage: NomenclatureImage = {
          file,
          image: srcData,
          id: null
        };

        this.newProduct.nomenclature.images.push(newImage);
      };

      fileReader.readAsDataURL(file);
    });
  }
}
