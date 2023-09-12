import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {OrderProduct} from '../../../procurement/models/order-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {finalize} from 'rxjs';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {Locator} from '../../models/locator';
import {QcListModalService} from '../../services/qc-list-modal.service';
import {AllocationService} from '../../services/allocation.service';

@Component({
  selector: 'pek-qc-accept-to-warehouse',
  templateUrl: './qc-accept-to-warehouse.component.html',
  styleUrls: ['./qc-accept-to-warehouse.component.scss']
})
export class QcAcceptToWarehouseComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    locator: [null, Validators.required]
  });
  items: InvoiceProduct[] | OrderProduct[];
  existingLocators: Locator[] = [];

  constructor(
    private readonly invoiceProductService: InvoiceProductService,
    private readonly orderProductService: OrderProductService,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<QcAcceptToWarehouseComponent>,
    private readonly allocationService: AllocationService,
    @Inject(MAT_DIALOG_DATA) public data: {
      items: InvoiceProduct[] | OrderProduct[],
      id: number,
      type: 'invoice' | 'order'
    },
    private qcListModalService: QcListModalService
  ) {
  }

  ngOnInit(): void {
    this.items = this.data.items;
    this.getExistingLocatorsAndWarehouses(this.items);
  }

  onAccept() {
    if (this.data.type === 'invoice') {
      this.acceptInvoiceProducts();
    }

    if (this.data.type === 'order') {
      this.acceptOrderProducts();
    }
  }

  onDistributeToPL() {
    this.dialogRef.close();
    this.allocationService.openAllocateItemModal('edit', this.data.id, this.items[0])
      .subscribe(response => {
    })
  }

  acceptOrderProducts() {
    this.isSaving = true;
    let send = [];
    (this.items as OrderProduct[]).forEach(item => {
      item.orderProducts.forEach(product => {
        send.push({
          order_product_id: product.id,
          quantity: product.quantity - product.not_passed_quantity,
          locator: this.form.get('locator').value
        });
      });
    });

    this.orderProductService.acceptSeveral(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  acceptInvoiceProducts() {
    this.isSaving = true;
    let send = [];
    (this.items as InvoiceProduct[]).forEach(item => {
      item.invoiceProducts.forEach(product => {
        send.push({
          invoice_product_id: product.id,
          quantity: (product.quantity - product.not_passed_quantity) - product.accepted_quantity,
          locator: this.form.get('locator').value
        });
      });
    });

    this.invoiceProductService.acceptSeveral(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  getExistingLocatorsAndWarehouses(items: InvoiceProduct[] | OrderProduct[]): void {
    this.existingLocators = null;
    this.existingLocators = [];
    items.forEach(item => {
      item.exists_on_locators.forEach(locator => {
        const foundLocator = this.existingLocators.find(locatorIn => locatorIn.id == locator.id);
        if (!foundLocator) {
          this.existingLocators.push(locator);
        }
      });
    });
  }

  onSelectLocator(locator: Locator) {
    // find other locators on this warehouse
    let unsupportedItemsForLocator: InvoiceProduct[] | OrderProduct[] = [];
    this.items.forEach(item => {

      const foundItem = item.exists_on_locators.find(inLocator => inLocator.warehouse.id === locator.warehouse.id && inLocator.id !== locator.id);
      if (foundItem) {
        unsupportedItemsForLocator.push(item);
      }
    });

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
