import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AreasService} from '@shared/services/areas.service';
import {ModalActionType} from '@shared/models/modal-action';
import {Area, AreaLocator} from '../../../warehouse/models/area-locator';
import {take} from 'rxjs/operators';
import {AreaLocatorsService} from '@shared/services/area-locators.service';

@Component({
  selector: 'pek-create-edit-area-locator',
  templateUrl: './create-edit-area-locator.component.html',
  styleUrls: ['./create-edit-area-locator.component.scss']
})
export class CreateEditAreaLocatorComponent implements OnInit, OnDestroy {
  form: FormGroup;

  isSaving: boolean;
  private destroy$ = new Subject();

  constructor(
    private dialogRef: MatDialogRef<CreateEditAreaLocatorComponent>,
    private readonly fb: FormBuilder,
    private areaLocatorsService: AreaLocatorsService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, locator: AreaLocator, areaId: number }
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      area: [Number(data.locator), [Validators.required]],
      description: ['', Validators.required],
    });
    if (this.data.type === 'edit') {
      this.form.addControl(<any>'id', new FormControl(this.data.locator.id));
      this.form.patchValue(<any>this.data.locator);
      this.form.get('area').patchValue(this.data.locator.area);
    } else {
      this.form.get('area').patchValue(this.data.areaId);

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
      this.areaLocatorsService.create(this.form.value).pipe(take(1), takeUntil(this.destroy$)).subscribe(
        res => {
          this.dialogRef.close(res);
        }
      );
    }
  }

  change() {
    if (this.form.valid) {
      this.areaLocatorsService.update(this.form.value as AreaLocator).pipe(take(1), takeUntil(this.destroy$)).subscribe(
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

  valuesChanged($event: number) {

  }
}
