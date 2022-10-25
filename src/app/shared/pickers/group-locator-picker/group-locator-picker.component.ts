import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocatorService} from '../../../warehouse/services/locator.service';
import {Subject, takeUntil} from 'rxjs';
import {Product} from '../../../product-structure/models/product';

@Component({
  selector: 'pek-group-locator-picker',
  templateUrl: './group-locator-picker.component.html',
  styleUrls: ['./group-locator-picker.component.scss']
})
export class GroupLocatorPickerComponent implements OnInit {
  @Input() selectedLocatorId: number;
  @Input() product: Product;
  @Output() selectLocator: EventEmitter<number> = new EventEmitter<number>();

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
      locators.forEach(element => {
        if (this.locatorsMap[element.warehouse.id]) {
          // if (element.id !== this.product?.locator?.id) {
          this.locatorsMap[element.warehouse.id].items.push({
            label: element.name + ' R:' + element.row + ' Col:' + element.column + ' Sh:' + element.shelf + ' Pl:' + element.place,
            value: element.id
          });
          // }
        } else {
          this.locatorsMap[element.warehouse.id] = {};
          this.locatorsMap[element.warehouse.id].label = element.warehouse.name;
          this.locatorsMap[element.warehouse.id].value = element.warehouse.id;
          this.locatorsMap[element.warehouse.id].items = [];
          // if (element.id !== this.product?.locator?.id) {
          this.locatorsMap[element.warehouse.id].items.push({
            label: element.name + ' R:' + element.row + ' Col:' + element.column + ' Sh:' + element.shelf + ' Pl:' + element.place,
            value: element.id
          });
          // }
        }
      });

      Object.keys(this.locatorsMap).forEach(id => {
        this.groupLocators.push(this.locatorsMap[id]);
      });
    });
  }

  onSelectLocator() {
    this.selectLocator.emit(this.selectLocatorId);
  }
}
