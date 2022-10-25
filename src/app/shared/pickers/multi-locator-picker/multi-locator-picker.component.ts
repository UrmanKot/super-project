import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Locator} from '../../../warehouse/models/locator';
import {Subject, takeUntil} from 'rxjs';
import {LocatorService} from '../../../warehouse/services/locator.service';

@Component({
  selector: 'pek-multi-locator-picker',
  templateUrl: './multi-locator-picker.component.html',
  styleUrls: ['./multi-locator-picker.component.scss']
})
export class MultiLocatorPickerComponent implements OnInit {
  @Input() isDisabled = false;
  @Input() currentWarehousesIds: number[] = [];
  @Output() selectLocators: EventEmitter<Locator[]> = new EventEmitter<Locator[]>();

  isLoading = false;
  locators: Locator[] = [];
  selectedLocators: Locator[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly locatorService: LocatorService
  ) {
  }

  ngOnInit(): void {

  }

  getLocatorsForWarehouses() {
    this.isDisabled = false;
    this.isLoading = true;
    this.locatorService.get([{name: 'warehouses', value: this.currentWarehousesIds}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(locators => {
      this.locators = locators;
      this.isLoading = false;
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if ('currentWarehousesIds' in changes) {
      this.selectedLocators = [];

      if (this.currentWarehousesIds?.length > 0) {
        this.getLocatorsForWarehouses();
      } else {
        this.locators = [];
        this.isDisabled = true;
      }
    }
  }

  onSelectLocators(locators: Locator[]) {
    this.selectLocators.emit(locators);
  }


  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
