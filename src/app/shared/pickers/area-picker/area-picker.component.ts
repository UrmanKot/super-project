import {Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CRMEmployee} from '../../../crm/models/crm-employee';
import {Area} from '../../../warehouse/models/area-locator';
import {AreasService} from '@shared/services/areas.service';
import {take, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-area-picker',
  templateUrl: './area-picker.component.html',
  styleUrls: ['./area-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AreaPickerComponent), multi: false}]
})
export class AreaPickerComponent implements OnInit, ControlValueAccessor, OnDestroy  {

  @Output() valueChange = new EventEmitter<number>();
  @Input() area: number;
  @Input() isDisabled: boolean;
  areas: Area[];
  @Input() showClear = false;
  isLoading = false;
  private destroy$ = new Subject();
  constructor(
    private areasService: AreasService,
  ) { }

  ngOnInit(): void {
    this.areasService.get().pipe(take(1),
      tap(res => this.areas = res),
      takeUntil(this.destroy$)).subscribe();
  }

  onChange(employee: number) {
    this.setValue(employee);
  }

  private setValue(area: number) {
    this.area = area;
    this.valueChange.emit(this.area);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.area = obj;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
