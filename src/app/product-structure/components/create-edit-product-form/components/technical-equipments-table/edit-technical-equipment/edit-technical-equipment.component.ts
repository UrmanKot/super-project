import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TechnicalEquipment} from '../../../../../models/technical-equipment';
import {Technology} from '../../../../../models/technology';

@Component({
  selector: 'pek-edit-technical-equipment',
  templateUrl: './edit-technical-equipment.component.html',
  styleUrls: ['./edit-technical-equipment.component.scss']
})
export class EditTechnicalEquipmentComponent implements OnInit {
  equipment: TechnicalEquipment;
  form: FormGroup = this.fb.group({
    quantity: [1, Validators.required],
    technology: [null, Validators.required]
  });
  technologies: Technology[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<EditTechnicalEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public technicalEquipment: { technicalEquipment: TechnicalEquipment, technologies: Technology[] },
  ) {
  }

  ngOnInit(): void {
    console.log('this.technicalEquipment', this.technicalEquipment);
    this.technologies = this.technicalEquipment.technologies;
    this.form.get('quantity').patchValue(this.technicalEquipment.technicalEquipment.quantity)
    this.form.get('technology').patchValue(this.technicalEquipment.technicalEquipment.technology?.id)
    this.equipment = this.technicalEquipment.technicalEquipment;
  }

  onSave() {
    console.log('this.form.valid', this.form.valid);
    console.log('this.form', this.form);
    if (this.form.valid) {
      const data: TechnicalEquipment = {
        id: this.equipment.id,
        nomenclature_in_use: this.equipment.nomenclature_in_use,
        quantity: this.form.get('quantity').value,
        technology: {id: this.form.get('technology').value}
      }
      this.dialogRef.close(data);
    }
  }

  technologySelected(technology: number) {
    this.form.get('technology').setValue(technology);
  }
}
