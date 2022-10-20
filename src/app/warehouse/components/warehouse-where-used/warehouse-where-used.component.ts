import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {Subject, takeUntil} from 'rxjs';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-warehouse-where-used',
  templateUrl: './warehouse-where-used.component.html',
  styleUrls: ['./warehouse-where-used.component.scss']
})
export class WarehouseWhereUsedComponent implements OnInit {

  isStartOnePage = false;
  isLoadingNomenclatures = true;
  isLoadingUsedNomenclatures = false;

  nomenclatureList: Nomenclature[] = [];
  usedNomenclatures: Nomenclature[] = [];

  whereUsedNomenclature: Nomenclature;
  selectedNomenclature: Nomenclature;

  countNomenclatures = 0;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    category: [''],
    root_categories: [''],
    page: [1]
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private nomenclatureService: NomenclatureService,
  ) {
  }

  ngOnInit(): void {
    this.getNomenclatures();
  }

  getNomenclatures() {
    this.nomenclatureService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatureList = nomenclatures.results;
      this.countNomenclatures = nomenclatures.count;

      // if (this.isStartOnePage) {
      //   this.paginator.changePage(0);
      // }

      this.isStartOnePage = false;
      this.isLoadingNomenclatures = false;
    });
  }

  getType(type: ENomenclatureType) {
    switch (type) {
      case ENomenclatureType.PURCHASED:
        return 'Purchased';
      case ENomenclatureType.ASSEMBLY:
        return 'Assembly';
      case ENomenclatureType.MANUFACTURED:
        return 'Manufactured';
    }
  }

  onSearchWhereUsed() {
    if (this.selectedNomenclature) {
      this.whereUsedNomenclature = this.selectedNomenclature;
      this.isLoadingUsedNomenclatures = true;
      this.usedNomenclatures = [];
      this.destroy$.next(true);
      this.nomenclatureService.searchWhereUsed(this.selectedNomenclature.id).pipe(
        takeUntil(this.destroy$)
      ).subscribe(usedNomenclatures => {
        this.usedNomenclatures = usedNomenclatures;
        this.isLoadingUsedNomenclatures = false;
      });
    } else {
      this.whereUsedNomenclature = null;
      this.usedNomenclatures = [];
    }
  }

  searchNomenclatures() {
    this.isLoadingNomenclatures = true;
    this.selectedNomenclature = null;

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true}
    ];

    this.getNomenclatures();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchNomenclatures();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
