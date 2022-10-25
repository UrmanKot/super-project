import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {LocatorService} from '../../services/locator.service';
import {Locator} from '../../models/locator';

@Component({
  selector: 'pek-create-edit-locator',
  templateUrl: './create-edit-locator.component.html',
  styleUrls: ['./create-edit-locator.component.scss']
})
export class CreateEditLocatorComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    warehouse: [0, Validators.required],
    row: [0, [Validators.required, Validators.min(0)]],
    shelf: [0, [Validators.required, Validators.min(0)]],
    column: [0, [Validators.required, Validators.min(0)]],
    place: [0, [Validators.required, Validators.min(0)]],
    description: ['', Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly locatorService: LocatorService,
    private dialogRef: MatDialogRef<CreateEditLocatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, locator: Locator }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.locator.id));
      this.form.patchValue(<any>this.data.locator);
      this.form.get('warehouse').patchValue(this.data.locator.warehouse.id)
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createLocator();
        break;
      }
      case 'edit': {
        this.editLocator();
        break;
      }
    }
  }

  createLocator() {
    const send = <any>this.form.value;
    this.locatorService.create(send).subscribe({
      next: locator => this.dialogRef.close(locator),
      error: () => this.isSaving = false,
    });
  }

  editLocator() {
    const send = <any>this.form.value;
    this.locatorService.update(send).subscribe({
      next: locator => this.dialogRef.close(locator),
      error: () => this.isSaving = false,
    });
  }

  onSelectWarehouse(id: number) {
    this.form.get('warehouse').patchValue(id);
  }
}
