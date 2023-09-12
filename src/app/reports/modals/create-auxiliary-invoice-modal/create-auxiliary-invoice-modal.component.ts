import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ServiceInvoiceService} from "@shared/services/service-invoice.service";
import {Router} from "@angular/router";
import {AdapterService} from "@shared/services/adapter.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-create-auxiliary-invoice-modal',
  templateUrl: './create-auxiliary-invoice-modal.component.html',
  styleUrls: ['./create-auxiliary-invoice-modal.component.scss']
})
export class CreateAuxiliaryInvoiceModalComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    supplier: [null],
    invoice_date: [null],
    is_proforma: [null],
  })

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateAuxiliaryInvoiceModalComponent>,
    private readonly serviceInvoiceService: ServiceInvoiceService,
    private readonly router: Router,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public data: { isProforma: boolean }
  ) { }

  ngOnInit(): void {
    this.form.get('is_proforma').patchValue(this.data.isProforma);
  }

  onSave() {
    const send = {...this.form.value};
    this.isSaving = true;

    if (send.invoice_date) {
      send.invoice_date = this.adapterService.dateAdapter(new Date(send.invoice_date))
    }

    this.serviceInvoiceService.create(send).pipe(
      finalize(() => this.isSaving = false),
    ).subscribe(invoice => {
      this.dialogRef.close();
      this.router.navigate([`/reports/invoices/service-invoice/${invoice.id}`]);
    })
  }

  onSelectCompany(id: number) {
    this.form.get('supplier').patchValue(id);
  }
}
