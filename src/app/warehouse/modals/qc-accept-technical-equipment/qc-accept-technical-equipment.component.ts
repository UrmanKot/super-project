import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderTechnicalEquipment} from '../../models/order-technical-equipment';
import {FormBuilder, Validators} from '@angular/forms';
import {Locator} from '../../models/locator';
import {WarehouseProduct, WarehouseProducts} from '../../models/warehouse-product';
import {QcListModalService} from '../../services/qc-list-modal.service';
import {finalize} from 'rxjs';
import {OrderTechnicalEquipmentsService} from '../../services/order-technical-equipments.service';

@Component({
  selector: 'pek-qc-accept-technical-equipment',
  templateUrl: './qc-accept-technical-equipment.component.html',
  styleUrls: ['./qc-accept-technical-equipment.component.scss']
})
export class QcAcceptTechnicalEquipmentComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    locator: [null, Validators.required]
  });
  items: OrderTechnicalEquipment[];
  existingLocators: Locator[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<QcAcceptTechnicalEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {items: OrderTechnicalEquipment[], id: number},
    private qcListModalService: QcListModalService,
    private orderTechnicalEquipmentsService: OrderTechnicalEquipmentsService,
  ) { }

  ngOnInit(): void {
    this.items = this.data.items;
    this.getExistingLocatorsAndWarehouses(this.items);
  }

  getExistingLocatorsAndWarehouses(items: OrderTechnicalEquipment[]): void {
    this.existingLocators = null;
    this.existingLocators = [];
    items.forEach(item => {
      item.in_use_product_id.forEach(in_use_prod => {
        const locator = (in_use_prod.technicalEquipment.warehouse_product as WarehouseProduct).locator;
        const foundLocator = this.existingLocators.find(locatorIn => locatorIn.id == locator.id);
        if (!foundLocator) {
          this.existingLocators.push(locator);
        }
      });
    });
  }

  onSelectLocator(locator: Locator) {
    // find other locators on this warehouse
    let unsupportedItemsForLocator: OrderTechnicalEquipment[] = [];
    this.items.forEach(item => {
      let isUnsupportedItem = false;

      item.in_use_product_id.forEach(in_use_prod => {
        const inLocator = (in_use_prod.technicalEquipment.warehouse_product as WarehouseProduct).locator;
        const foundItem = inLocator.warehouse.id === locator.warehouse.id && inLocator.id !== locator.id;
        if (foundItem) {
          isUnsupportedItem = true;
        }
      });

      if (isUnsupportedItem) {
        unsupportedItemsForLocator.push(item);
      }
    });

    if (unsupportedItemsForLocator.length > 0) {
      this.qcListModalService.updateTechnicalEquipmentList(unsupportedItemsForLocator);
    }

    unsupportedItemsForLocator.forEach(item => {
      const foundIndex = this.items.findIndex(product => product.id === item.id);
      if (foundIndex > -1) {
        this.items.splice(foundIndex, 1);
      }
    });
    this.getExistingLocatorsAndWarehouses(this.items);
    this.form.get('locator').patchValue(<any>locator.id);
  }

  onAccept() {
    this.isSaving = true;

    const send = this.items.map(item => {
      return {
        order_technical_equipment_id: item.id,
        quantity: item.passed_quantity,
        locator: this.form.get('locator').value,
        warehouse_products_details: item.in_use_product_id.map(product => {
          return {
            id: product.technicalEquipment.id,
            product_id: (product.technicalEquipment.warehouse_product as WarehouseProduct).id,
            quantity: product.quantity,
            isolated_quantity: product.isolated_quantity
          }
        })
      }
    });
    this.orderTechnicalEquipmentsService.acceptSeveral(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }
}
