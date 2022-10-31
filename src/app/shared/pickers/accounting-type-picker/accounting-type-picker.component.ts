import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum EAccountingType {
  OUTSOURCE = 2,
  OWN = 3,
}

@Component({
  selector: 'pek-accounting-type-picker',
  templateUrl: './accounting-type-picker.component.html',
  styleUrls: ['./accounting-type-picker.component.scss']
})
export class AccountingTypePickerComponent implements OnInit {
  @Input() currentAccountingType: EAccountingType = null;
  @Input() isDisabled = false;
  @Output() choiceAccountingType: EventEmitter<EAccountingType> = new EventEmitter<EAccountingType>();

  selectAccountingType: EAccountingType = null;

  accountingTypes: { label: string, value: EAccountingType }[] = [
    {label: 'Outsource production', value: EAccountingType.OUTSOURCE},
    {label: 'Own production', value: EAccountingType.OWN},
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.setCurrentProductionType();
  }

  setCurrentProductionType() {
    if (this.currentAccountingType !== null) {
      this.selectAccountingType = this.currentAccountingType;
    }
  }

  onSelectProductionType() {
    this.choiceAccountingType.emit(this.selectAccountingType);
  }

}
