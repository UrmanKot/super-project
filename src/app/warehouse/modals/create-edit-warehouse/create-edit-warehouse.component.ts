import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../models/warehouse';

@Component({
  selector: 'pek-create-edit-warehouse',
  templateUrl: './create-edit-warehouse.component.html',
  styleUrls: ['./create-edit-warehouse.component.scss']
})
export class CreateEditWarehouseComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly warehouseService: WarehouseService,
    private dialogRef: MatDialogRef<CreateEditWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, warehouse: Warehouse }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.warehouse.id));
      this.form.patchValue(this.data.warehouse);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createWarehouse();
        break;
      }
      case 'edit': {
        this.editWarehouse();
        break;
      }
    }
  }

  createWarehouse() {
    const send = <Partial<Warehouse>>this.form.value;
    this.warehouseService.create(send).subscribe({
      next: warehouse => this.dialogRef.close(warehouse),
      error: () => this.isSaving = false,
    });
  }

  editWarehouse() {
    const send = <Partial<Warehouse>>this.form.value;
    this.warehouseService.update(send).subscribe({
      next: warehouse => this.dialogRef.close(warehouse),
      error: () => this.isSaving = false,
    });
  }
}
