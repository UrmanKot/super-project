import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Payment} from '../../models/payment';
import {AdapterService} from '@shared/services/adapter.service';
import {Company} from '../../../crm/models/company';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'pek-create-edit-payment-form',
  templateUrl: './create-edit-payment-form.component.html',
  styleUrls: ['./create-edit-payment-form.component.scss']
})
export class CreateEditPaymentFormComponent implements OnInit {
  isDisabledCompanyPicker = false;

  form = this.fb.group({
    supplier: [<number>null, Validators.required],
    invoices: [<number[]>[], Validators.required],
    amount: [<number>0, [Validators.required, Validators.min(0)]],
    converted_amount: [0],
    exchange_rate: [1, Validators.required],
    payment_date: ['', Validators.required],
    accountant_number: ['', Validators.required],
  });
  isSaving = false;
  invoices: Invoice[] = [];
  amount: number = 0;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditPaymentFormComponent>,
    private readonly adapterService: AdapterService,
    private invoiceService: InvoiceService,
    private paymentService: PaymentService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, payment: Payment, companyId: number }
  ) {
  }

  ngOnInit(): void {
    this.form.get('converted_amount').disable()

    if (this.data.type === 'create')
      this.form.get('invoices').disable();

    if (this.data.type === 'edit') {
      this.form.patchValue(<any>this.data.payment);
      this.form.addControl('id' as any, this.fb.control(this.data.payment.id));
      this.form.get('supplier').patchValue(this.data.payment.invoices[0].supplier.id);
      const ids = this.data.payment.invoices.map(i => i.id);
      this.form.get('invoices').patchValue(ids);
      this.invoices = [...this.data.payment.invoices];
      this.form.get('invoices').disable();
      this.amount = this.data.payment.amount;
      this.form.get('payment_date').patchValue(<any>new Date(this.data.payment.payment_date));
    }

    if (this.data.companyId) {
      this.form.get('supplier').patchValue(this.data.companyId);
      this.onSelectCompany({id: this.data.companyId});
      this.isDisabledCompanyPicker = true;
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createPayment();
        break;
      }
      case 'edit': {
        this.editPayment();
        break;
      }
    }
  }

  createPayment() {
    const send = this.form.value;
    send.payment_date = this.adapterService.dateAdapter(new Date(send.payment_date));

    this.paymentService.create(send).subscribe({
      next: payment => this.dialogRef.close(payment),
      error: () => this.isSaving = false,
    });
  }

  editPayment() {
    const send = this.form.value;
    send.payment_date = this.adapterService.dateAdapter(new Date(send.payment_date));
    this.paymentService.update(send).subscribe({
      next: payment => this.dialogRef.close(payment),
      error: () => this.isSaving = false,
    });
  }

  onSelectCompany(company: Partial<Company>) {
    if (company) {
      this.form.get('supplier').patchValue(company.id);
      this.form.get('invoices').enable();
      this.getInvoicesByCompany();
    } else {
      this.form.get('supplier').patchValue(null);
      this.form.get('invoices').disable();
    }
    this.form.get('invoices').patchValue([]);
    this.invoices = [];
  }

  private getInvoicesByCompany() {
    this.invoiceService.get([{
      name: 'supplier',
      value: this.form.get('supplier').value
    }]).subscribe(invoices => {
      this.invoices = invoices;
      invoices.forEach(i => {
        if (i.is_proforma) {
          i.label = i.self_proforma_serial_number + ` (price ${i.total_price_converted} €)`;
        } else {
          i.label = i.self_serial_number + ' (Invoice)' + ` (price: ${i.total_price_converted} €)`;
        }
      });
    });
  }

  roundValue(value) {
    return Math.round(value * Math.pow(10, 2)) / Math.pow(10, 2);
  }

  countSum() {
    const ids = this.form.get('invoices').value as number[];
    let sum = 0;

    if (ids.length > 0) {
      ids.forEach(id => {
        const findInvoice = this.invoices.find(inv => inv.id === id);
        if (findInvoice) {
          sum += findInvoice.total_price_converted;
        }
      });
      const exchangeNum = this.form.get('exchange_rate').value;
      if (exchangeNum < 0) {
        const num = 1;
        this.form.get('exchange_rate').patchValue(num);
      }
    }

    if (this.data.type === 'create') {
      this.form.get('converted_amount').patchValue(this.form.get('exchange_rate').value * sum);
      this.form.get('amount').patchValue(sum)
      sum = this.roundValue(sum);
    } else {
      this.form.get('converted_amount').patchValue(this.form.get('exchange_rate').value * +this.amount);
    }
  }
}
