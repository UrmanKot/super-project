import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Paginator} from 'primeng/paginator';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {debounceTime, map, tap} from 'rxjs/operators';
import {Category} from '../../../product-structure/models/category';

@Component({
  selector: 'pek-nomenclature-picker-modal',
  templateUrl: './nomenclature-picker-modal.component.html',
  styleUrls: ['./nomenclature-picker-modal.component.scss']
})
export class NomenclaturePickerModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  countNomenclatures = 0;

  isLoading = true;
  isStartOnePage = false;
  nomenclatures: Nomenclature[] = [];
  selectedNomenclature: Nomenclature;

  nomenclatureType = ENomenclatureType;

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    type: [null],
    categories: [null],
  });

  queryKey = 'name:/code:/type:null/categories:null';

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true},
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private dialogRef: MatDialogRef<NomenclaturePickerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ENomenclatureType }
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      fromEvent(this.searchBoxName.nativeElement, 'keyup')
        .pipe(
          tap(() => this.selectedNomenclature = null),
          map(() => this.searchBoxName.nativeElement.value),
          debounceTime(350),
        ).subscribe(() => {
        this.searchNomenclatures();
      });

      fromEvent(this.searchBoxCode.nativeElement, 'keyup')
        .pipe(
          tap(() => this.selectedNomenclature = null),
          map(() => this.searchBoxCode.nativeElement.value),
          debounceTime(350),
        ).subscribe(() => {
        this.searchNomenclatures();
      });
    });
  }

  ngOnInit(): void {
    if (this.data.type !== null) {
      this.searchForm.get('type').patchValue(this.data.type);

      this.searchNomenclatures();
      return;
    }

    this.getNomenclatures();
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

  searchNomenclatures() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedNomenclature = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/type:${this.searchForm.get('type').value}/categories:${this.searchForm.get('categories').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true},
    ];

    if (this.searchForm.get('name').value) {
      this.query.push({
        name: 'name',
        value: this.searchForm.get('name').value
      });
    }

    if (this.searchForm.get('code').value) {
      this.query.push({
        name: 'code',
        value: this.searchForm.get('code').value
      });
    }

    if (this.searchForm.get('type').value !== null) {
      this.query.push({
        name: 'type',
        value: this.searchForm.get('type').value
      });
    }

    if (this.searchForm.get('categories').value !== null) {
      this.query.push({
        name: 'categories',
        value: this.searchForm.get('categories').value
      });
    }

    this.getNomenclatures();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchNomenclatures();
    }
  }

  selectNomenclatureType(type: ENomenclatureType) {
    this.searchForm.get('type').patchValue(type);
    this.searchNomenclatures();
  }

  onSelectNomenclature() {
    this.dialogRef.close(this.selectedNomenclature);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSelectCategory(category: Category) {
    if (category) {
      this.searchForm.get('categories').patchValue(category.id)
    } else {
      this.searchForm.get('categories').patchValue(null)
    }

    this.searchNomenclatures();
  }
}
