import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CurrenciesService} from "../../services/currencies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {AdditionalExpenseService} from "../../services/additional-expense.service";
import {AdditionalExpense} from "../../models/additional-expense";

@Component({
  selector: 'pek-create-edit-additional-expenses',
  templateUrl: './create-edit-additional-expenses.component.html',
  styleUrls: ['./create-edit-additional-expenses.component.scss']
})
export class CreateEditAdditionalExpensesComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly additionalExpenseService: AdditionalExpenseService,
    private dialogRef: MatDialogRef<CreateEditAdditionalExpensesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, additionalExpense: AdditionalExpense }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.additionalExpense.id));
      this.form.patchValue(<any>this.data.additionalExpense);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createAdditionalExpense();
        break;
      }
      case 'edit': {
        this.editAdditionalExpense();
        break;
      }
    }
  }

  createAdditionalExpense() {
    const send = <any>this.form.value;
    this.additionalExpenseService.create(send).subscribe({
      next: additionalExpense => this.dialogRef.close(additionalExpense),
      error: () => this.isSaving = false,
    });
  }

  editAdditionalExpense() {
    const send = <any>this.form.value;
    this.additionalExpenseService.updatePartly(send).subscribe({
      next: additionalExpense => this.dialogRef.close(additionalExpense),
      error: () => this.isSaving = false,
    });
  }

}
