import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Technology} from '../../models/technology';
import {TechnologyService} from '../../services/technology.service';
import {ModalActionType} from '@shared/models/modal-action';

@Component({
  selector: 'pek-create-edit-technology',
  templateUrl: './create-edit-technology.component.html',
  styleUrls: ['./create-edit-technology.component.scss']
})
export class CreateEditTechnologyComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', Validators.required],
    service_or_material: [null, Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly technologyService: TechnologyService,
    private dialogRef: MatDialogRef<CreateEditTechnologyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, technology: Technology }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.technology.id));
      this.form.patchValue(this.data.technology);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createTechnology();
        break;
      }
      case 'edit': {
        this.editTechnology();
        break;
      }
    }
  }

  createTechnology() {
    const send = <Partial<Technology>>this.form.value;
    this.technologyService.create(send).subscribe({
      next: technology => this.dialogRef.close(technology),
      error: () => this.isSaving = false,
    });
  }

  editTechnology() {
    const send = <Partial<Technology>>this.form.value;
    this.technologyService.update(send).subscribe({
      next: technology => this.dialogRef.close(technology),
      error: () => this.isSaving = false,
    });
  }
}
