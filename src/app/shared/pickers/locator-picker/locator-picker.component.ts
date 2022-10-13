import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {LocatorService} from '../../../warehouse/services/locator.service';
import {Subject} from 'rxjs';
import {Locator} from '../../../warehouse/models/locator';

@Component({
  selector: 'pek-locator-picker',
  templateUrl: './locator-picker.component.html',
  styleUrls: ['./locator-picker.component.scss']
})
export class LocatorPickerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() isAllLocators = true;
  @Input() warehouseId: number = null;
  @Input() isDisabled = false;

  isLoading = false;
  locators: Locator[] = [];

  selectLocatorId: number;

  private destroy$ = new Subject();

  constructor(
    private locatorService: LocatorService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('warehouseId' in changes) {
      if (!this.isAllLocators && this.warehouseId) {
        this.getLocatorsForWarehouse();
      } else if (!this.warehouseId) {
        this.locators = [];
        this.isDisabled = true;
      }
    }
  }

  getLocatorsForWarehouse() {
    this.isLoading = true;
    this.locatorService.get([{name: 'warehouse', value: this.warehouseId}]).subscribe(locators => {
      this.locators = locators;
      this.isDisabled = false;
      this.isLoading = false;
    });
  }

  onSelectLocator() {

  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
