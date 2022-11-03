import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaymentService} from '../../../reports/services/payment.service';
import {MatDialogRef} from '@angular/material/dialog';
import {finalize, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-payment-confirmation-limit',
  templateUrl: './payment-confirmation-limit.component.html',
  styleUrls: ['./payment-confirmation-limit.component.scss']
})
export class PaymentConfirmationLimitComponent implements OnInit, OnDestroy {
  isSaving = false;
  isLoading = true;

  form: FormGroup = this.fb.group({
    id: [null],
    value: [0, [Validators.required, Validators.min(0)]],
  });

  private destroy$ = new Subject();

  constructor(
    private readonly dialogRef: MatDialogRef<PaymentConfirmationLimitComponent>,
    private readonly fb: FormBuilder,
    private readonly paymentService: PaymentService,
  ) {
  }

  ngOnInit(): void {
    this.getLimit();
  }

  getLimit() {
    this.paymentService.getLimit().pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      const data = {
        id: response[0].id,
        value: +response[0].value,
      };

      this.form.patchValue(data);
      this.isLoading = false;
    });
  }

  onSave() {
    this.isSaving = true;
    this.paymentService.setLimit(this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
