import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LocatorService} from '../../../warehouse/services/locator.service';
import {Subject, takeUntil} from 'rxjs';
import {Product} from '../../../product-structure/models/product';
import {Locator} from '../../../warehouse/models/locator';

@Component({
  selector: 'pek-group-locator-picker',
  templateUrl: './group-locator-picker.component.html',
  styleUrls: ['./group-locator-picker.component.scss']
})
export class GroupLocatorPickerComponent implements OnInit {
  @Input() selectedLocatorId: number;
  @Input() product: Product;
  @Input() uniqueLocators: Locator[];
  locators: Locator[];
  @Output() selectLocator: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectLocatorFull: EventEmitter<Locator> = new EventEmitter<Locator>();
  isLoading = false;
  groupLocators = [];
  locatorsMap = {};

  selectLocatorId: number;

  private destroy$ = new Subject();

  constructor(
    private locatorService: LocatorService,
  ) {
  }

  ngOnInit(): void {
    if (this.selectedLocatorId) {
      this.selectLocatorId = this.selectedLocatorId;
    }

    this.getLocators();
  }

  getLocators() {
    this.locatorService.getAll().pipe(
      takeUntil(this.destroy$)
    ).subscribe(locators => {
      this.locators = locators;
      this.prepareLocators();
    });
  }

  prepareLocators(): void {
    this.locators.forEach(element => {

      let isUnique = false;
      if (this.locatorsMap[element.warehouse.id]) {
        const warehouseId = element.warehouse.id;
        const locatorId = element.id;
        if (this.uniqueLocators) {
          const uniquesWarehouse = this.uniqueLocators.find(locator => {
            return locator.warehouse.id === warehouseId;
          });
          if (uniquesWarehouse) {
            isUnique = true;
          }
          const isExists = this.uniqueLocators.find(locator => {
            return locator.warehouse.id === warehouseId && locator.id === locatorId
          });

          if (!isExists && uniquesWarehouse) return;
        }

        this.locatorsMap[element.warehouse.id].items.push({
          label: element.name + ' R:' + element.row + ' Col:' + element.column + ' Sh:' + element.shelf + ' Pl:' + element.place,
          value: element.id,
          isUnique: isUnique
        });
      } else {
        const warehouseId = element.warehouse.id;
        const locatorId = element.id;
        if (this.uniqueLocators) {
          const uniquesWarehouse = this.uniqueLocators.find(locator => {
            return locator.warehouse.id === warehouseId;
          });
          const isExists = this.uniqueLocators.find(locator => {
            return locator.id === locatorId
          });
          if (uniquesWarehouse) {
            isUnique = true;
          }
          if (!isExists && uniquesWarehouse) return;
        }

        this.locatorsMap[element.warehouse.id] = {};
        this.locatorsMap[element.warehouse.id].label = element.warehouse.name;
        this.locatorsMap[element.warehouse.id].value = warehouseId;
        this.locatorsMap[element.warehouse.id].items = [];
        this.locatorsMap[element.warehouse.id].items.push({
          label: element.name + ' R:' + element.row + ' Col:' + element.column + ' Sh:' + element.shelf + ' Pl:' + element.place,
          value: element.id,
          isUnique: isUnique
        });
      }
    });

    Object.keys(this.locatorsMap).forEach(id => {
      this.groupLocators.push(this.locatorsMap[id]);
    });
  }

  onSelectLocator() {
    this.selectLocator.emit(this.selectLocatorId);
    this.selectLocatorFull.emit(this.locators.find(locator => locator.id === this.selectLocatorId));
  }
}
