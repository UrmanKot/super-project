import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {AreaLocator} from '../../../warehouse/models/area-locator';
import {ToolOrderService} from '../../../warehouse/services/tool-order.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AreaLocatorsService} from '@shared/services/area-locators.service';
import {ToolOrder} from '../../../warehouse/models/tool-order';
import {take} from 'rxjs/operators';

@Component({
  selector: 'pek-create-edit-tool-request',
  templateUrl: './create-edit-tool-request.component.html',
  styleUrls: ['./create-edit-tool-request.component.scss']
})
export class CreateEditToolRequestComponent implements OnInit {
  form: FormGroup;
  isSaving = false;

  constructor(
    private dialogRef: MatDialogRef<CreateEditToolRequestComponent>,
    private toolOrderService: ToolOrderService,
    private areaLocatorService: AreaLocatorsService,
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, toolOrder: ToolOrder }
  ) {
    this.form = fb.group({
      area_locator: ['', [Validators.required]],
    });
    if (this.data.type === 'edit') {
      this.form.addControl('id', new FormControl(this.data.toolOrder.id))
      this.form.get('area_locator').patchValue(this.data.toolOrder.area_locator.id);
    }
  }

  ngOnInit(): void {
  }

  create() {
    if (this.form.valid) {
      this.toolOrderService.create(this.form.value).pipe(take(1)).subscribe(
        res => { this.dialogRef.close(res); }
      )
    }
  }

  change() {
    if (this.form.valid) {
      this.toolOrderService.update(this.form.value).pipe(take(1)).subscribe(
        res => { this.dialogRef.close(res); }
      )
    }
  }

  onSave() {
    if (this.form.get('id')) {
      this.change();
    } else {
      this.create();
    }
  }

  test() {
    console.log('this.form', this.form);
  }
}
