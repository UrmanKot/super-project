import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {ToolOrder} from '../../../warehouse/models/tool-order';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InstrumentAndToolsModalsService} from '../../services/instrument-and-tools-modals.service';
import {ToolRequest} from '../../../warehouse/services/tool-request';
import {ToolRequestService} from '../../../warehouse/services/tool-request.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'pek-create-update-tool-order-request',
  templateUrl: './create-update-tool-order-request.component.html',
  styleUrls: ['./create-update-tool-order-request.component.scss']
})
export class CreateUpdateToolOrderRequestComponent implements OnInit {
  selectedProduct;
  isSaving = false;
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateUpdateToolOrderRequestComponent>,
    private instrumentAndToolsService: InstrumentAndToolsModalsService,
    private toolRequestService: ToolRequestService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, toolRequest: ToolRequest, toolOrderId: number }
  ) {
    this.form = fb.group({
      tool_order:[Number(data.toolOrderId), [Validators.required]],
      nomenclature: ['', [Validators.required]],
      initial_quantity: [0, [Validators.required]],
    });

    if (this.data.type === 'edit') {
      this.selectedProduct = data.toolRequest;
      this.form.addControl('id', new FormControl(this.data.toolRequest.id))
      this.form.patchValue(this.data.toolRequest);
      this.form.get('nomenclature').patchValue(this.data.toolRequest.nomenclature.id);
      this.form.get('tool_order').patchValue(this.data.toolRequest.tool_order);
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

  openWarehouseSearch() {
    this.instrumentAndToolsService.searchInWarehouseNomenclatureModal().subscribe(res => {
      if (res) {
        this.selectedProduct = res;
        this.form.get('nomenclature').patchValue(res.nomenclature.id);
      }
    });
  }

  create() {
    if (this.form.valid) {
      this.toolRequestService.create(this.form.value).pipe(take(1)).subscribe(
        res => { this.dialogRef.close(res) }
      )
    }
  }

  change() {
    if (this.form.valid) {
      this.toolRequestService.update(this.form.value).pipe(take(1)).subscribe(
        res => { this.dialogRef.close(res) }
      )
    }
  }
}
