import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ModalActionType} from '@shared/models/modal-action';
import {Area} from '../../../warehouse/models/area-locator';
import {AreasService} from '@shared/services/areas.service';
import {take} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-create-edit-area',
  templateUrl: './create-edit-area.component.html',
  styleUrls: ['./create-edit-area.component.scss']
})
export class CreateEditAreaComponent implements OnInit, OnDestroy {

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });
  isSaving: boolean;
  private destroy$ = new Subject();

  constructor(
    private dialogRef: MatDialogRef<CreateEditAreaComponent>,
    private readonly fb: FormBuilder,
    private areasService: AreasService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, area: Area }
  ) {
    if (this.data.type === 'edit') {
      this.form.addControl(<any>'id', new FormControl(this.data.area.id));
      this.form.patchValue(<any>this.data.area);
    }
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.form.get('id')) {
      this.change();
    } else {
      this.create();
    }
  }

  create() {
    if (this.form.valid) {
      this.areasService.create(this.form.value).pipe(take(1), takeUntil(this.destroy$)).subscribe(
        res => {
          this.dialogRef.close(res);
        }
      );
    }
  }

  change() {
    if (this.form.valid) {
      this.areasService.update(this.form.value as Area).pipe(take(1), takeUntil(this.destroy$)).subscribe(
        res => {
          this.dialogRef.close(res);
        }
      );
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
