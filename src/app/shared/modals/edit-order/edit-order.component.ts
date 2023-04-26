import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Order} from '../../../procurement/models/order';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {Status} from '../../../procurement/models/status';
import {StatusService} from '../../../procurement/services/status.service';
import {AdapterService} from '@shared/services/adapter.service';
import {OrderService} from '../../../procurement/services/order.service';
import {finalize} from 'rxjs/operators';
import {OrderType} from '@shared/components/order-page/order-page.component';

@Component({
  selector: 'pek-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  isSaving = false;
  isLoadingStatuses = true;

  form = this.fb.group({
    promised_date: [null],
    created: [<Date | string>null, Validators.required],
    statuses: this.fb.array(<any[]>[]),
    comment: [''],
    supplier: [<number>null],
  });

  dropdownStatuses: Status[];

  get statuses() {
    return this.form.get('statuses') as FormArray;
  }

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<EditOrderComponent>,
    private readonly statusService: StatusService,
    private readonly adapterService: AdapterService,
    private readonly orderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: { order: Order, orderType: OrderType }
  ) {
  }

  ngOnInit(): void {
    this.getStatuses();
    this.form.addControl(<any>'id', this.fb.control(this.data.order.id));

    this.form.get('supplier').patchValue(this.data.order.supplier?.id);
    this.form.get('created').patchValue(new Date(this.data.order.created));
    this.form.get('comment').patchValue(this.data.order.comment);

    this.data.order.statuses.map(status => this.fb.group({
      id: [status.status.id, Validators.required],
      is_active: status.is_active,
      estimated_date: [new Date(status.estimated_date), Validators.required],
      status: [status.status_id]
    })).forEach(status => {
      this.statuses.push(status);
    });
  }

  getStatuses() {
    let accountingType: number;

    switch (this.data.orderType) {
      case 'procurement':
        accountingType = 4;
        break;
      case 'manufacturing': {
        accountingType = 3;
        break;
      }
      case 'outsourcing':
        accountingType = 2;
        break;
      case 'purchase': {
        accountingType = 1;
        break;
      }
    }

    this.statusService.get([
      {name: 'accounting_type', value: accountingType}
    ]).subscribe(statuses => {
      this.dropdownStatuses = statuses;
      this.isLoadingStatuses = false;
    });
  }

  onChangeActiveStatus(idx: number) {
    this.statuses.controls.forEach(status => status.get('is_active').patchValue(false));
    this.statuses.at(idx).get('is_active').patchValue(true);
  }

  onRemoveStatus(idx: number) {
    if (this.statuses.at(idx).get('is_active').value) {
      this.statuses.at(idx - 1).get('is_active').patchValue(true);
    }

    this.statuses.removeAt(idx);
  }

  onAddStatus() {
    this.statuses.push(
      this.fb.group({
        id: [null, Validators.required],
        is_active: false,
        estimated_date: [null, Validators.required],
        status: [null]
      })
    );
  }

  onSave() {
    const send = this.form.value;

    send.created = this.adapterService.dateAdapter(new Date(send.created));
    delete send.supplier;

    send.statuses = this.statuses.controls.map(status => {
      return {
        is_active: status.get('is_active').value,
        estimated_date: this.adapterService.dateAdapter(status.get('estimated_date').value),
        status: status.get('id').value,
      };
    });

    this.isSaving = true;

    this.orderService.updatePartly(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
