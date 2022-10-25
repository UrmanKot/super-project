import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PhysicalInventoryService} from '../../services/physical-inventory.service';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-add-product-to-physical-inventory',
  templateUrl: './add-product-to-physical-inventory.component.html',
  styleUrls: ['./add-product-to-physical-inventory.component.scss']
})
export class AddProductToPhysicalInventoryComponent implements OnInit {
  isSaving = false;
  isSelectProductMode = false;

  nomenclatureType = ENomenclatureType;

  selectedNomenclature: Nomenclature;
  selectedNomenclatureTechnologiesIds: number[] = [];

  form: FormGroup = this.fb.group({
    locator_id: [null, Validators.required],
    add_quantity: [1, [Validators.required, Validators.min(1)]],
    nomenclature_id: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<AddProductToPhysicalInventoryComponent>,
    private readonly physicalInventoryService: PhysicalInventoryService,
    @Inject(MAT_DIALOG_DATA) private inventoryId: number,
  ) {
  }

  ngOnInit(): void {

  }

  onSelectProductMode() {
    this.dialogRef.updateSize('90rem', 'auto');
    this.isSelectProductMode = true;
  }

  selectLocator(id: number) {
    this.form.get('locator_id').patchValue(id);
  }

  onSelectNomenclature(nomenclature: Nomenclature) {
    this.selectedNomenclature = nomenclature;

    if (nomenclature) {
      this.form.get('nomenclature_id').patchValue(nomenclature.id);
      this.selectedNomenclatureTechnologiesIds = nomenclature.technologies.map(t => t.id);
    } else {
      this.form.get('nomenclature_id').patchValue(null);
      this.selectedNomenclatureTechnologiesIds = [];
    }

    if (this.selectedNomenclatureTechnologiesIds.length > 0) {
      this.form.addControl('current_technology_id', new FormControl(null, Validators.required));
    } else {
      this.form.removeControl('current_technology_id');
    }
  }

  onReselectProduct() {
    this.onSelectProductMode();
    this.selectedNomenclature = null;
    this.form.get('nomenclature_id').patchValue(null);
    this.form.removeControl('current_technology_id');
    this.selectedNomenclatureTechnologiesIds = [];
  }

  onChoiceProduct() {
    this.dialogRef.updateSize('40rem', 'auto');
    this.isSelectProductMode = false;
  }

  onSave() {
    this.isSaving = true;
    const send = this.form.value;
    this.physicalInventoryService.addProductToInventory(this.inventoryId, send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  selectTechnology(id: number) {
    this.form.get('current_technology_id').patchValue(id);
  }
}
