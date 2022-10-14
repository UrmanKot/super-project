import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ENomenclatureType} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-nomenclature-type-picker',
  templateUrl: './nomenclature-type-picker.component.html',
  styleUrls: ['./nomenclature-type-picker.component.scss']
})
export class NomenclatureTypePickerComponent implements OnInit {
  @Input() currentNomenclatureType: ENomenclatureType = null;
  @Input() isDisabled = false;
  @Output() choiceNomenclatureType: EventEmitter<ENomenclatureType> = new EventEmitter<ENomenclatureType>();

  selectNomenclatureType: ENomenclatureType = null;

  nomenclatureTypes: { label: string, value: ENomenclatureType }[] = [
    {label: 'Purchased', value: ENomenclatureType.PURCHASED},
    {label: 'Assembly', value: ENomenclatureType.ASSEMBLY},
    {label: 'Manufactured', value: ENomenclatureType.MANUFACTURED}
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.setCurrentNomenclatureType();
  }

  setCurrentNomenclatureType() {
    if (this.currentNomenclatureType !== null) {
      this.selectNomenclatureType = this.currentNomenclatureType;
    }
  }

  onSelectNomenclatureType() {
    this.choiceNomenclatureType.emit(this.selectNomenclatureType);
  }
}
