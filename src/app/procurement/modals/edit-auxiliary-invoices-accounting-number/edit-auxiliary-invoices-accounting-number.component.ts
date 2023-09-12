import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PurchasingCategoryService} from "../../../purchasing/services/purchasing-category.service";
import {PurchaseCategory} from "../../../purchasing/models/purchase-category";
import {finalize} from "rxjs";
import {BaseService} from "../../models/base-service";
import {BaseServicesService} from "../../services/base-services.service";

@Component({
  selector: 'pek-edit-auxiliary-invoices-accounting-number',
  templateUrl: './edit-auxiliary-invoices-accounting-number.component.html',
  styleUrls: ['./edit-auxiliary-invoices-accounting-number.component.scss']
})
export class EditAuxiliaryInvoicesAccountingNumberComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    accounting_number: [null]
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<EditAuxiliaryInvoicesAccountingNumberComponent >,
    private readonly baseServicesService: BaseServicesService,
    @Inject(MAT_DIALOG_DATA) public data: { baseService: BaseService }
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(<any>this.data.baseService)
  }

  onSave() {
    this.isSaving = true;

    this.baseServicesService.update(this.form.value, this.data.baseService.id).pipe(
      finalize(() => this.isSaving = false))
      .subscribe(category => this.dialogRef.close(category));
  }

  changeNumber() {
    const value = JSON.parse(JSON.stringify(this.form.get('accounting_number').value + ''));
    if (value.length > 8) {
      this.form.get('accounting_number').patchValue(value.slice(0, -1));
    }
  }

}
