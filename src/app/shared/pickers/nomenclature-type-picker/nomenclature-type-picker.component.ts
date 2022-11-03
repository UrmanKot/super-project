import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() filteredNomenclatureTypes: ENomenclatureType[] = [];

  selectNomenclatureType: ENomenclatureType = null;

  nomenclatureTypes: { label: string, value: ENomenclatureType }[] = [
    {label: 'Purchased', value: ENomenclatureType.PURCHASED},
    {label: 'Assembly', value: ENomenclatureType.ASSEMBLY},
    {label: 'Manufactured', value: ENomenclatureType.MANUFACTURED}
  ];

  constructor() {
  }

  ngOnInit(): void {

    if (this.filteredNomenclatureTypes.length > 0) {
      let types = [];

      this.filteredNomenclatureTypes.forEach(type => {
        types = [...types, ...this.nomenclatureTypes.filter(t => t.value === type)];
      });

      this.nomenclatureTypes = types;
    }

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
