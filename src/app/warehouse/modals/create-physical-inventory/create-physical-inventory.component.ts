import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Warehouse} from '../../models/warehouse';
import {Locator} from '../../models/locator';
import {PhysicalInventoryService} from '../../services/physical-inventory.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-create-physical-inventory',
  templateUrl: './create-physical-inventory.component.html',
  styleUrls: ['./create-physical-inventory.component.scss']
})
export class CreatePhysicalInventoryComponent implements OnInit {
  form: FormGroup = this.fb.group({
    warehouses: [null, Validators.required],
    locators: [null, Validators.required],
  });

  isSaving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CreatePhysicalInventoryComponent>,
    private readonly physicalInventoryServices: PhysicalInventoryService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
  }

  ngOnInit(): void {
  }

  selectWarehouses(warehouses: Warehouse[]) {
    let value = null;
    if (warehouses?.length > 0) value = warehouses.map(w => w.id);
    this.form.get('warehouses').patchValue(value);
  }

  selectLocators(locators: Locator[]) {
    let value = null;
    if (locators?.length > 0) value = locators.map(w => w.id);
    this.form.get('locators').patchValue(value);
  }

  onCreatePhysicalInventory() {
    this.isSaving = true;
    const locatorsIds = this.form.get('locators').value.splice(',').join(',');
    this.physicalInventoryServices.createPhysicalInventory(locatorsIds).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }
}
