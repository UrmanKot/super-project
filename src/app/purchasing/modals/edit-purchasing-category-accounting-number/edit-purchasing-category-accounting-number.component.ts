import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PurchasingCategoryService} from "../../services/purchasing-category.service";
import {PurchaseCategory} from "../../models/purchase-category";
import {finalize} from "rxjs";

@Component({
  selector: 'pek-edit-purchasing-category-accounting-number',
  templateUrl: './edit-purchasing-category-accounting-number.component.html',
  styleUrls: ['./edit-purchasing-category-accounting-number.component.scss']
})
export class EditPurchasingCategoryAccountingNumberComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    accounting_number: [null]
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<EditPurchasingCategoryAccountingNumberComponent>,
    private purchasingCategoryService: PurchasingCategoryService,
    @Inject(MAT_DIALOG_DATA) public data: { category: PurchaseCategory }
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(<any>this.data.category)
  }

  onSave() {
    this.isSaving = true;

    this.purchasingCategoryService.update(this.form.value, this.data.category.id).pipe(
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
