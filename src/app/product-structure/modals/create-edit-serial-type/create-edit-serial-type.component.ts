import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {SerialTypeService} from '../../services/serial-type.service';
import {SerialType} from '../../models/serial-type';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-create-edit-serial-type',
  templateUrl: './create-edit-serial-type.component.html',
  styleUrls: ['./create-edit-serial-type.component.scss']
})
export class CreateEditSerialTypeComponent implements OnInit {
  isSaving = false;

  nomenclatures: Partial<Nomenclature>[] = [];

  form = this.fb.group({
    name: ['', [Validators.required]],
    prefix: ['', [Validators.required]],
    suffix: ['', [Validators.required]],
    start_number: [0, [Validators.required]],
    nomenclature_set: [[]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly serialTypeService: SerialTypeService,
    private readonly modalService: ModalService,
    private dialogRef: MatDialogRef<CreateEditSerialTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, serialType: SerialType }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.serialType.id));
      this.form.patchValue(<any>this.data.serialType);

      this.form.get('nomenclature_set').patchValue(this.data.serialType.nomenclature_set.map(n => n.id));
      this.nomenclatures = this.data.serialType.nomenclature_set;
    }
  }

  getType(type: ENomenclatureType) {
    switch (type) {
      case ENomenclatureType.PURCHASED:
        return 'Purchased';
      case ENomenclatureType.ASSEMBLY:
        return 'Assembly';
      case ENomenclatureType.MANUFACTURED:
        return 'Manufactured';
    }
  }

  onRemoveNomenclature(id: number) {
    const index = this.nomenclatures.findIndex(n => n.id === id);
    this.nomenclatures.splice(index, 1);
    this.form.get('nomenclature_set').patchValue(this.nomenclatures.map(n => n.id));
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createSerialType();
        break;
      }
      case 'edit': {
        this.editSerialType();
        break;
      }
    }
  }

  onChoiceNomenclature() {
    this.modalService.choiceNomenclatureModal().subscribe(nomenclature => {
      if (nomenclature) {
        this.form.get('nomenclature_set').value.push(nomenclature.id);
        this.nomenclatures.push(nomenclature);
      }
    })
  }

  createSerialType() {
    const send = <any>this.form.value;
    this.serialTypeService.create(send).subscribe({
      next: serialType => this.dialogRef.close(serialType),
      error: () => this.isSaving = false,
    });
  }

  editSerialType() {
    const send = <any>this.form.value;
    this.serialTypeService.update(send).subscribe({
      next: serialType => this.dialogRef.close(serialType),
      error: () => this.isSaving = false,
    });
  }

}
