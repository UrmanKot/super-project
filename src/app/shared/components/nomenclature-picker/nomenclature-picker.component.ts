import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {Paginator} from 'primeng/paginator';
import {debounceTime, map, tap} from 'rxjs/operators';

@Component({
  selector: 'pek-nomenclature-picker',
  templateUrl: './nomenclature-picker.component.html',
  styleUrls: ['./nomenclature-picker.component.scss']
})
export class NomenclaturePickerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  @Output() selectProduct: EventEmitter<Nomenclature> = new EventEmitter<Nomenclature>();
  @Input() nomenclatureType: ENomenclatureType;
  @Input() paginationAbsolute = false;

  countNomenclatures = 0;

  isLoading = true;
  isStartOnePage = false;
  nomenclatures: Nomenclature[] = [];
  selectedNomenclature: Nomenclature;

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    type: [null],
  });

  queryKey = 'name:/code:/type:null';

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
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
    this.onSelectNomenclature();

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/type:${this.searchForm.get('type').value}`;

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

    this.getNomenclatures();
  }

  onSelectNomenclature() {
    this.selectProduct.emit(this.selectedNomenclature);
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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
