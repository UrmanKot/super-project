import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {AreaLocatorsService} from '@shared/services/area-locators.service';
import {take} from 'rxjs/operators';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-area-locator-picker',
  templateUrl: './area-locator-picker.component.html',
  styleUrls: ['./area-locator-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AreaLocatorPickerComponent), multi: false}]
})
export class AreaLocatorPickerComponent implements OnInit, OnChanges, ControlValueAccessor, OnDestroy {
  groupLocators = [];
  @Output() valueChange = new EventEmitter<number>();
  @Input() locator: number;
  @Input() areaId: number = null;
  @Input() current_locator_id: number;
  @Input() isDisabled = false;
  private destroy$ = new Subject();
  constructor(
    private areaLocatorService: AreaLocatorsService,
  ) { }

  ngOnInit(): void {
    this.loadAreaLocators();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.locator = null;
    if ('areaId' in changes) {
      if (this.areaId) {
        this.groupLocators = [];
        this.loadByAreaId();
      } else {
        this.groupLocators = [];
        this.loadAreaLocators();
      }
    }
  }

  loadAreaLocators() {
    this.areaLocatorService.get().pipe(take(1))
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
      let map = {};
      res.forEach(element => {
        if (map[element.area.id]) {
          if (this.current_locator_id) {
            if (element.id !== this.current_locator_id) {
              map[element.area.id].items.push({ label: element.name, value: element.id });
            }
          } else {
            map[element.area.id].items.push({ label: element.name, value: element.id });
          }
        } else {
          map[element.area.id] = {};
          map[element.area.id].label = element.area.name;
          map[element.area.id].value = element.area.id;
          map[element.area.id].items = [];
          if (this.current_locator_id) {
            if (element.id !== this.current_locator_id) {
              map[element.area.id].items.push({ label: element.name, value: element.id });
            }
          } else {
            map[element.area.id].items.push({ label: element.name, value: element.id });
          }
        }
      });

      Object.keys(map).forEach(id => {
        this.groupLocators.push(map[id]);
      });
    });
  }

  loadByAreaId() {
    const query: QuerySearch[] = [{
      name: 'area',
      value: this.areaId
    }]
    this.areaLocatorService.get(query).pipe(take(1))
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.groupLocators = res;
      });
  }


  onChange(locator: number) {
    this.setValue(locator);
  }

  private setValue(locator: number) {
    this.locator = locator;
    this.valueChange.emit(this.locator);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.locator = obj;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
