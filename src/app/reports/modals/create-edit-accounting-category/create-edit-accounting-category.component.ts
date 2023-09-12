import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CurrenciesService} from "../../services/currencies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {AccountingCategory} from "../../models/accounting-category";
import {AccountingCategoriesService} from "../../services/accounting-categories.service";

@Component({
  selector: 'pek-create-edit-accounting-category',
  templateUrl: './create-edit-accounting-category.component.html',
  styleUrls: ['./create-edit-accounting-category.component.scss']
})
export class CreateEditAccountingCategoryComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
    accounting_number: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private accountingCategoriesService: AccountingCategoriesService,
    private dialogRef: MatDialogRef<CreateEditAccountingCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, category: AccountingCategory }
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.category.id));
      this.form.patchValue(<any>this.data.category);
    }
  }

  changeNumber() {
    const value = JSON.parse(JSON.stringify(this.form.get('accounting_number').value + ''));
    if (value.length > 8) {
      this.form.get('accounting_number').patchValue(value.slice(0, -1));
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createCategory();
        break;
      }
      case 'edit': {
        this.editCategory();
        break;
      }
    }
  }

  createCategory() {
    const send = <any>this.form.value;
    this.accountingCategoriesService.createAccountingCategory(send).subscribe({
      next: currency => this.dialogRef.close(currency),
      error: () => this.isSaving = false,
    });
  }

  editCategory() {
    const send = <any>this.form.value;
    this.accountingCategoriesService.editAccountingCategory(send).subscribe({
      next: currency => this.dialogRef.close(currency),
      error: () => this.isSaving = false,
    });
  }

}
