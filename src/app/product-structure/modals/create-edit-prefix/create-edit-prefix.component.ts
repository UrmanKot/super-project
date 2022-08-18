import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {ProductPrefix} from '../../models/prefix';
import {PrefixService} from '../../services/prefix.service';

@Component({
  selector: 'pek-create-edit-prefix',
  templateUrl: './create-edit-prefix.component.html',
  styleUrls: ['./create-edit-prefix.component.scss']
})
export class CreateEditPrefixComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    prefix: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly prefixService: PrefixService,
    private dialogRef: MatDialogRef<CreateEditPrefixComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, prefix: ProductPrefix }
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.prefix.id));
      this.form.patchValue(this.data.prefix);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createPrefix();
        break;
      }
      case 'edit': {
        this.editPrefix();
        break;
      }
    }
  }

  createPrefix() {
    const send = <Partial<ProductPrefix>>this.form.value;
    this.prefixService.create(send).subscribe({
      next: prefix => this.dialogRef.close(prefix),
      error: () => this.isSaving = false,
    });
  }

  editPrefix() {
    const send = <Partial<ProductPrefix>>this.form.value;
    this.prefixService.update(send).subscribe({
      next: prefix => this.dialogRef.close(prefix),
      error: () => this.isSaving = false,
    });
  }
}
