import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TechnicalEquipment} from '../../../../../models/technical-equipment';

@Component({
  selector: 'pek-edit-technical-equipment',
  templateUrl: './edit-technical-equipment.component.html',
  styleUrls: ['./edit-technical-equipment.component.scss']
})
export class EditTechnicalEquipmentComponent implements OnInit {
  equipment: TechnicalEquipment;
  form: FormGroup = this.fb.group({
    quantity: [1, Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<EditTechnicalEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public technicalEquipment: { technicalEquipment: TechnicalEquipment },
  ) {
  }

  ngOnInit(): void {
    this.form.get('quantity').patchValue(this.technicalEquipment.technicalEquipment.quantity)
    this.equipment = this.technicalEquipment.technicalEquipment;
  }

  onSave() {
    if (this.form.valid) {
      const data: TechnicalEquipment = {
        id: this.equipment.id,
        used_by_nomenclature: this.equipment.used_by_nomenclature,
        quantity: this.form.get('quantity').value
      }
      this.dialogRef.close(data);
    }
  }
}
