import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {take} from 'rxjs/operators';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CrmPositionsService} from '../../../services/crm-positions.service';
import {CrmPosition} from '../../../models/crm-position';

@Component({
  selector: 'app-crm-position-picker',
  templateUrl: './crm-position-picker.component.html',
  styleUrls: ['./crm-position-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CrmPositionPickerComponent), multi: true}]
})
export class CrmPositionPickerComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange = new EventEmitter<number>();
  @Input() position: number;
  @Input() isDisabled = false;

  positions: CrmPosition[];
  isLoading = true;

  constructor(
    private crmPositionService: CrmPositionsService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.crmPositionService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.positions = res;
        this.isLoading = false;
      });
  }

  onChange(position: number) {
    this.setValue(position);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(position: number) {
    this.position = position;
    this.valueChange.emit(this.position);
  }

  writeValue(obj: any): void {
    this.position = obj;
  }
}
