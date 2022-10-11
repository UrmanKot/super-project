import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {NomenclatureService} from '@shared/services/nomenclature.service';

@Component({
  selector: 'pek-nomenclature-picker',
  templateUrl: './nomenclature-picker.component.html',
  styleUrls: ['./nomenclature-picker.component.scss']
})
export class NomenclaturePickerComponent implements OnInit {
  @Output() selectProduct: EventEmitter<Nomenclature> = new EventEmitter<Nomenclature>();
  @Input() nomenclatureType: ENomenclatureType;

  countNomenclatures = 0;

  isLoading = true;
  nomenclatures: Nomenclature[] = [];
  selectedNomenclature: Nomenclature;

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    type: [null],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
  ) {
  }

  ngOnInit(): void {
    if (this.nomenclatureType) {
      this.searchForm.get('type').patchValue(this.nomenclatureType);

      this.query.push({
        name: 'type',
        value: this.searchForm.get('type').value
      });
    }

    this.getNomenclatures();
  }

  getNomenclatures() {
    this.nomenclatureService.getForPagination(this.query).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures.results;

      this.countNomenclatures = nomenclatures.count;

      this.isLoading = false;
    });
  }

  searchNomenclatures() {
    this.isLoading = true;
    this.nomenclatures = [];

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true},
      {name: 'type', value: this.searchForm.get('type').value}
    ];

    this.getNomenclatures();
  }

  onSelectNomenclature() {
    this.selectProduct.emit(this.selectedNomenclature);
  }

  paginate(evt: any) {
    this.searchForm.get('page').patchValue(evt.page + 1);
    this.searchNomenclatures();
  }
}
