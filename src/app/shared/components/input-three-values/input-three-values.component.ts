import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

type filterValue = 0 | 1 | 2;

@Component({
  selector: 'pek-input-three-values',
  templateUrl: './input-three-values.component.html',
  styleUrls: ['./input-three-values.component.scss']
})
export class InputThreeValuesComponent implements OnInit {

  @Input() disabled = false;
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();
  @Input() filterValue: filterValue = 0; // 0 - null, 1 - true, 2 - false

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  changeColumnFilter() {
    this.filterValue++;
    let value = null;

    if (this.filterValue > 2) {
      this.filterValue = 0;
    }

    switch (this.filterValue) {
      case 0:
        value = null;
        break;
      case 1:
        value = true;
        break;
      case 2:
        value = false;
        break;
    }

    this.changeValue.emit(value);
  }

}
