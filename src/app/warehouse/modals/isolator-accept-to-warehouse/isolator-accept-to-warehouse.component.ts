import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {OrderProduct} from '../../../procurement/models/order-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {finalize} from 'rxjs';
import {IsolatorService} from '../../services/isolator.service';
import {Locator} from '../../models/locator';
import {QcListModalService} from '../../services/qc-list-modal.service';
import {AllocationService} from '../../services/allocation.service';

@Component({
  selector: 'pek-isolator-accept-to-warehouse',
  templateUrl: './isolator-accept-to-warehouse.component.html',
  styleUrls: ['./isolator-accept-to-warehouse.component.scss']
})
export class IsolatorAcceptToWarehouseComponent implements OnInit {

  isSaving = false;
  items: any;
  existingLocators: Locator[] = [];

  form = this.fb.group({
    locator: [null, Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private readonly invoiceProductService: InvoiceProductService,
    private readonly isolatorService: IsolatorService,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<IsolatorAcceptToWarehouseComponent>,
    private readonly allocationService: AllocationService,
    @Inject(MAT_DIALOG_DATA) public data: {
      items: any,
    },
    private qcListModalService: QcListModalService
  ) {
  }

  ngOnInit(): void {
    this.items = this.data.items;
    this.getExistingLocatorsAndWarehouses(this.items);
  }

  onAccept() {
    this.acceptProducts();
  }

  acceptProducts() {
    this.isSaving = true;
    let send = {
      nomenclature_id: this.items.nomenclature.id,
      current_technology_id: this.items.current_technology?.id,
      status: this.items.status,
      comment: this.items.comment,
      quantity: this.form.get('quantity').value,
      locator_id: this.form.get('locator').value,
    };

    if (!send.comment) {
      delete send.comment
    }

    this.isolatorService.defectiveProductToWarehouse(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  getExistingLocatorsAndWarehouses(items: any): void {
    this.existingLocators = null;
    this.existingLocators = [];
    // items.forEach(item => {
      items.exists_on_locators.forEach(locator => {
        const foundLocator = this.existingLocators.find(locatorIn => locatorIn.id == locator.id);
        if (!foundLocator) {
          this.existingLocators.push(locator);
        }
      });
    // });
  }

  onSelectLocator(locator: Locator) {
    // find other locators on this warehouse
    let unsupportedItemsForLocator = [];
    // this.items.forEach(item => {

      const foundItem = this.items.exists_on_locators.find(inLocator => inLocator.warehouse.id === locator.warehouse.id && inLocator.id !== locator.id);
      if (foundItem) {
        unsupportedItemsForLocator.push(this.items);
      }
    // });

    if (unsupportedItemsForLocator.length > 0) {
      this.qcListModalService.updateOrderInvoiceList(unsupportedItemsForLocator);
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
}
