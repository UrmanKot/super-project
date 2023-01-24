import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderSupplier} from '../../../confirmation/models/order-supplier';
import {OrderSupplierService} from '../../../confirmation/services/order-supplier.service';
import {AdapterService} from '@shared/services/adapter.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-edit-order-supplier',
  templateUrl: './edit-order-supplier.component.html',
  styleUrls: ['./edit-order-supplier.component.scss']
})
export class EditOrderSupplierComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    price: [0],
    comment: [''],
    delivery_date: [null],
  });

  constructor(
    private readonly dialogRef: MatDialogRef<EditOrderSupplierComponent>,
    private readonly orderSupplierService: OrderSupplierService,
    private readonly adapterService: AdapterService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { orderSupplier: OrderSupplier }
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.data.orderSupplier);
    this.form.get('delivery_date').patchValue(new Date(this.data.orderSupplier.delivery_date));
  }

  onSave() {
    this.isSaving = true;

    const send = {
      id: this.data.orderSupplier.id,
      price: this.form.get('price').value,
      comment: this.form.get('comment').value,
      delivery_date: this.adapterService.dateAdapter(this.form.get('delivery_date').value),
    };

    this.orderSupplierService.updateSupplier(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(updateSupplier => {
      this.dialogRef.close(updateSupplier);
    });
  }
}
