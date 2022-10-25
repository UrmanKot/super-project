import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {UnitMeasure} from '../../../product-structure/models/unit-measure';
import {UnitMeasureService} from '../../services/unit-measure.service';

@Component({
  selector: 'pek-create-edit-unit-measure',
  templateUrl: './create-edit-unit-measure.component.html',
  styleUrls: ['./create-edit-unit-measure.component.scss']
})
export class CreateEditUnitMeasureComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
    symbol: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly unitMeasureService: UnitMeasureService,
    private dialogRef: MatDialogRef<CreateEditUnitMeasureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, unitMeasure: UnitMeasure }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.unitMeasure.id));
      this.form.patchValue(this.data.unitMeasure);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createUnitMeasure();
        break;
      }
      case 'edit': {
        this.editUnitMeasure();
        break;
      }
    }
  }

  createUnitMeasure() {
    const send = <Partial<UnitMeasure>>this.form.value;
    this.unitMeasureService.create(send).subscribe({
      next: unitMeasure => this.dialogRef.close(unitMeasure),
      error: () => this.isSaving = false,
    });
  }

  editUnitMeasure() {
    const send = <Partial<UnitMeasure>>this.form.value;
    this.unitMeasureService.update(send).subscribe({
      next: unitMeasure => this.dialogRef.close(unitMeasure),
      error: () => this.isSaving = false,
    });
  }

}
