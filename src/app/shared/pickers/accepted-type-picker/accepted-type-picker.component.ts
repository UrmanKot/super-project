import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pek-accepted-type-picker',
  templateUrl: './accepted-type-picker.component.html',
  styleUrls: ['./accepted-type-picker.component.scss']
})
export class AcceptedTypePickerComponent implements OnInit {
  @Output() selectAcceptedType: EventEmitter<boolean> = new EventEmitter<boolean>();

  acceptedTypes: {name: string, value: boolean}[] = [
    {name: 'Invoices', value: true},
    {name: 'Orders', value: false}
  ];

  selectedValue: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectAcceptedType() {
    this.selectAcceptedType.next(this.selectedValue);
  }

}
