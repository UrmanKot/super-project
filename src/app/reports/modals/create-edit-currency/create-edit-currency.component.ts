import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {WarehouseService} from "../../../warehouse/services/warehouse.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {CurrenciesService} from "../../services/currencies.service";
import {Currency} from "@shared/models/currency";

@Component({
  selector: 'pek-create-edit-currency',
  templateUrl: './create-edit-currency.component.html',
  styleUrls: ['./create-edit-currency.component.scss']
})
export class CreateEditCurrencyComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required, Validators.maxLength(3)]],
    symbol: ['', [Validators.required, Validators.maxLength(3)]],
    is_active: [false],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly currencyService: CurrenciesService,
    private dialogRef: MatDialogRef<CreateEditCurrencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, currency: Currency }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.currency.id));
      this.form.patchValue(<any>this.data.currency);
      this.form.get('code').disable();
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createCurrency();
        break;
      }
      case 'edit': {
        this.editCurrency();
        break;
      }
    }
  }

  createCurrency() {
    const send = <any>this.form.value;
    this.currencyService.create(send).subscribe({
      next: currency => this.dialogRef.close(currency),
      error: () => this.isSaving = false,
    });
  }

  editCurrency() {
    const send = <any>this.form.value;
    this.currencyService.updatePartly(send, this.form.get('code').value).subscribe({
      next: currency => this.dialogRef.close(currency),
      error: () => this.isSaving = false,
    });
  }
}
