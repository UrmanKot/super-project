import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {ServiceInvoiceProduct} from "../../models/service-invoice";
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'pek-create-edit-invoice-service',
  templateUrl: './create-edit-invoice-service.component.html',
  styleUrls: ['./create-edit-invoice-service.component.scss']
})
export class CreateEditInvoiceServiceComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    base_service: [null, [Validators.required]],
    ddv: [22, [Validators.required, Validators.min(0)]],
    discount: [0, [Validators.required, Validators.min(0)]],
    fixed_discount: [false],
    invoice: [this.data.invoiceId],
    pure_price: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly servicesService: ServicesService,
    private dialogRef: MatDialogRef<CreateEditInvoiceServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      type: ModalActionType,
      invoiceId: number,
      invoiceType: 'service' | 'invoice',
      service: ServiceInvoiceProduct
    }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, this.fb.control(this.data.service.id));
      // @ts-ignore
      this.data.service.discount = <any>Math.round(<any>this.data.service.discount * 100) / 100;
      this.form.patchValue(<any>this.data.service);
      // @ts-ignore
      this.form.get('base_service').patchValue(<any>this.data.service.base_service.id);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createInvoiceService();
        break;
      }
      case 'edit': {
        this.editInvoiceService();
        break;
      }
    }
  }

  createInvoiceService() {
    const send = <any>this.form.value;

    if (this.data.invoiceType === 'service') {
      delete send.invoice;
      send.service_invoice = this.data.invoiceId
    }

    this.servicesService.create(send).subscribe({
      next: currency => this.dialogRef.close(currency),
      error: () => this.isSaving = false,
    });
  }

  editInvoiceService() {
    const send = <any>this.form.value;
    this.servicesService.updatePartly(send).subscribe({
      next: currency => this.dialogRef.close(currency),
      error: () => this.isSaving = false,
    });
  }

  onSelectService(id: number) {
    this.form.get('base_service').patchValue(<any>id);
  }
}
