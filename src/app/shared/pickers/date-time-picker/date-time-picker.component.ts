import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'pek-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Output() setDate: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() clearDate: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() select: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() close: EventEmitter<Date> = new EventEmitter<Date>();
  @ViewChild('dateInput') dateInput: ElementRef;
  inputValue = '';
  date: Date;
  currentDate: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  clickOutside() {
    if (!this.currentDate) {
      this.date = null;
      this.currentDate = null;
    } else {
      this.date = this.currentDate;
    }
  }

  setValue() {
    this.currentDate = this.date;
    this.setDate.emit(this.currentDate);
  }

  show() {
    if (!this.date) {
      this.addDate();
    }
  }

  onSelect() {
    this.select.emit(this.date)
  }

  addDate() {
    const date = new Date();

    let hour = date.getHours() + '';
    let minutes = date.getMinutes() + '';

    if (+hour < 10) {
      hour = `0${hour}`;
    }

    if (+minutes < 10) {
      minutes = `0${minutes}`;
    }

    this.inputValue = `${hour}:${minutes}`;
  }

  onChange() {
    const date = new Date(this.date).setHours(0, 0, 0, 0);
    const hours = +this.inputValue.substring(0, 2);
    const minutes = +this.inputValue.substring(2, 4);
    this.date = new Date(minutes * 60000 + hours * 3600000 + date);

    this.onSelect();
  }

  clear() {
    this.addDate();
    this.currentDate = null;
    this.clearDate.emit(true);
  }

  clearClick() {
    this.clearDate.emit(true);
  }

  onClose() {
    this.close.emit(this.currentDate);
  }
}
