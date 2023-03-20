import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {TreeNode} from 'primeng/api';
import {Category} from '../../models/category';
import {QuerySearch} from '@shared/models/other';
import {Subject, takeUntil} from 'rxjs';
import {Nomenclature} from '@shared/models/nomenclature';
import {Paginator} from 'primeng/paginator';
import {debounceTime} from 'rxjs/operators';
import {Technology} from '../../models/technology';

@Component({
  selector: 'pek-add-technical-equipment',
  templateUrl: './add-technical-equipment.component.html',
  styleUrls: ['./add-technical-equipment.component.scss']
})
export class AddTechnicalEquipmentComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  selectedNomenclature: Nomenclature;
  nomenclatures: Nomenclature[] = [];
  countNomenclatures: number = 0;
  technologies: Technology[] = [];

  tableScrollHeight = '29.75rem';

  isShowAll = false;
  isLoading = false;
  isStartOnePage = false;

  form = this.fb.group({
    code: [''],
    name: [''],
    category: [null],
    root_categories: [null],
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.form.get('page').value},
    {name: 'paginated', value: true}
  ];

  sendForm: FormGroup = this.fb.group({
    quantity: [1, [Validators.min(1), Validators.required]],
    technology: [null, Validators.required]
  });

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private nomenclatureService: NomenclatureService,
    private readonly dialogRef: MatDialogRef<AddTechnicalEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nomenclatureId: number, technologies: Technology[] }
  ) { }

  ngOnInit(): void {
    this.technologies = this.data.technologies;
    console.log('this.technologies', this.technologies);
    this.form.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(50)).subscribe(res => {
      this.searchNomenclature();
    });
  }

  onSelected() {
    const technicalEquipment = {
      id: this.selectedNomenclature.id,
      code: this.selectedNomenclature.code,
      name: this.selectedNomenclature.name,
    }
    const send: any = {
      id: null,
      nomenclature_in_use: technicalEquipment,
      quantity: this.sendForm.get('quantity').value,
      technology: {id: this.sendForm.get('technology').value},
    };
    this.dialogRef.close(send);
  }

  searchNomenclature() {
    this.query = [];
    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.form.get('page').value},
      ];
    }

    if (this.form.get('code').value) this.query.push({name: 'code', value: this.form.get('code').value});
    if (this.form.get('name').value) this.query.push({name: 'name', value: this.form.get('name').value});
    if (this.form.get('category').value) this.query.push({name: 'category', value: this.form.get('category').value});
    if (this.form.get('root_categories').value) this.query.push({name: 'root_categories', value: this.form.get('root_categories').value});

    if (!this.isShowAll) {
      this.getNomenclaturesForPagination();
    } else {
      this.form.get('page').patchValue(1);
      this.getNomenclatures();
    }
  }

  getNomenclaturesForPagination() {
    this.nomenclatureService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      response.results.forEach((product: any, idx) => {

      this.nomenclatures = response.results;
      this.countNomenclatures = response.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.isLoading = false;
    });
  });
  }

  getNomenclatures() {
    this.nomenclatureService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {

      this.nomenclatures = response;
      this.countNomenclatures = response.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  onSelectNomenclatureStructureCategory(ids: number[]) {
    if (ids) {
      this.form.get('root_categories').patchValue(ids.join(','));
    } else {
      this.form.get('root_categories').patchValue('');
    }
  }

  onSelectCategory(category: Category) {
    if (category) {
      this.form.get('category').patchValue(category.id);
    } else {
      this.form.get('category').patchValue(null);
    }
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.form.get('page').patchValue(evt.page + 1);
      this.searchNomenclature();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchNomenclature();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchNomenclature();
  }

  setTableScrollHeight() {
    if (this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isShowAll) {
      this.tableScrollHeight = '29.75rem';
      return;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  changedSelection() {
  }

  technologySelected(technologyId: number) {
    this.sendForm.get('technology').setValue(technologyId);
    console.log('technologySelected', technologyId);
  }
}
