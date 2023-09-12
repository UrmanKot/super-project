import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Payment, PaymentFile} from '../../models/payment';
import {AdapterService} from '@shared/services/adapter.service';
import {Company} from '../../../crm/models/company';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {PaymentService} from '../../services/payment.service';
import {finalize} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';
import {environment} from '@env/environment';


@Component({
  selector: 'pek-create-edit-payment-form',
  templateUrl: './create-edit-payment-form.component.html',
  styleUrls: ['./create-edit-payment-form.component.scss']
})
export class CreateEditPaymentFormComponent implements OnInit {


  isDisabledCompanyPicker = false;
  isLoading = false;
  isLoadingFiles = false;
  isConfirmed = false;

  form = this.fb.group({
    supplier: [<number>null, Validators.required],
    invoices: [[], Validators.required],
    amount: [<number>0, [Validators.required, Validators.min(0)]],
    converted_amount: [0],
    exchange_rate: [1, Validators.required],
    payment_date: [<Date | string>'', Validators.required],
    accountant_number: [1, Validators.required],
    paid_by_card: [false],
    is_paid: [false],
  });
  isSaving = false;
  invoices: any[] = [];
  amount: number = 0;

  get formInvoices(): Invoice[] {
    return this.form.get('invoices').value as Invoice[];
  }

  showInvoiceError = false;


  // Edit Files
  paymentId: number;
  uploadFiles: File[] = [];
  files: PaymentFile[] = [];
  isPending = false;
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();
  link = environment.image_path;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditPaymentFormComponent>,
    private readonly adapterService: AdapterService,
    private invoiceService: InvoiceService,
    private paymentService: PaymentService,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: {
      type: ModalActionType,
      payment: Payment,
      companyId: number,
      orderId: number,
      isDelivery: boolean;
    }
  ) {
  }

  ngOnInit(): void {
    this.form.get('converted_amount').disable();

    if (this.data.type === 'create')
      this.form.get('invoices').disable();
      this.form.get('payment_date').patchValue(<any>new Date());

    if (this.data.type === 'edit') {
      this.paymentId = this.data.payment.id;
      this.form.patchValue(<any>this.data.payment);
      this.form.addControl('id' as any, this.fb.control(this.data.payment.id));
      this.form.get('supplier').patchValue(this.data.payment.invoices[0].supplier.id);
      const ids = this.data.payment.invoices.map(i => i.id);


      this.form.get('invoices').patchValue(this.data.payment.invoices.map(i => {
        if (i.is_proforma) {
          i.label = i.self_proforma_serial_number + ` (Price ${i.total_price_converted} €)` +
            `${i.currency?.code !== 'EUR' ? (' (Other Price: ' + i.total_price + ' ' + i.currency?.symbol + ')') : ''}`;
        } else {
          i.label = i.self_serial_number + ' (Invoice)' + ` (Price: ${i.total_price_converted} €)` +
            `${i.currency?.code !== 'EUR' ? (' (Other Price: ' + i.total_price + ' ' + i.currency?.symbol + ')') : ''}`;
        }

        return {
          ...i,
          label: i.label
        }
      }));
      this.invoices = this.data.payment.invoices.map(i => i);
      this.form.get('invoices').disable();
      this.amount = this.data.payment.amount;
      this.form.get('payment_date').patchValue(<any>new Date(this.data.payment.payment_date));
      this.isConfirmed = this.data.payment.status === 'CONFIRMED';
    }

    if (this.data.companyId) {
      this.form.get('supplier').patchValue(this.data.companyId);
      this.onSelectCompany({id: this.data.companyId});
      this.isDisabledCompanyPicker = true;
    }
    this.getFiles();
  }

  onSaveAndPayPayment() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {

        const send = this.form.value;
        send.is_paid = true;
        send.payment_date = this.adapterService.dateAdapter(new Date(send.payment_date));
        this.paymentService.update(send).subscribe({
          next: payment => {
            if (this.uploadFiles.length > 0) {
              this.onUploadFiles(payment);
            } else {
              this.dialogRef.close(payment);
            }
          },
          error: () => this.isSaving = false,
        });

        this.paymentService.pay(
          {
            id: this.data.payment.id,
            is_paid: true
          });
      }
    });
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
    const send = {...this.form.value};
    send.payment_date = this.adapterService.dateAdapter(new Date(send.payment_date));
    // @ts-ignore
    send.invoices = send.invoices.map(i => i.id);
    delete send.converted_amount;

    if (this.data.isDelivery) {
      // @ts-ignore
      send.delivery_chain = this.data.orderId
    }

    this.paymentService.create(send).subscribe({
      next: payment => {
        this.paymentId = payment.id;
        if (this.uploadFiles.length > 0) {
          this.onUploadFiles(payment);
        } else {
          this.dialogRef.close(payment);
        }
      },
      error: () => this.isSaving = false,
    });
  }

  editPayment() {
    const send = {...this.form.value};
    send.payment_date = this.adapterService.dateAdapter(new Date(send.payment_date));
    this.paymentService.update(send).subscribe({
      next: payment => {
        if (this.uploadFiles.length > 0) {
          this.onUploadFiles(payment);
        } else {
          this.dialogRef.close(payment);
        }
      },
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
    this.isLoading = true;
    const query = [{
      name: 'supplier',
      value: this.form.get('supplier').value
    }];

    if (this.data.orderId && !this.data.isDelivery) {
      query.push({name: 'order', value: this.data.orderId});
    }

    this.invoiceService.get(query).subscribe(invoices => {
      invoices.forEach(i => {
        if (i.is_proforma) {
          i.label = i.self_proforma_serial_number + ` (Price ${i.total_price_converted} €)` +
            `${i.currency.code !== 'EUR' ? (' (Other Price: ' + i.total_price + ' ' + i.currency?.symbol + ')') : ''}`;
        } else {
          i.label = i.self_serial_number + ' (Invoice)' + ` (Price: ${i.total_price_converted} €)` +
            `${i.currency.code !== 'EUR' ? (' (Other Price: ' + i.total_price + ' ' + i.currency?.symbol + ')') : ''}`;
        }
      });

      this.invoices = invoices.map(invoice => {
        return {
          ...invoice,
          label: invoice.label,
          value: invoice,
          disabled: false,
        }
      });
      this.isLoading = false;
    });
  }

  roundValue(value) {
    return Math.round(value * Math.pow(10, 2)) / Math.pow(10, 2);
  }

  countSum() {
    console.log(this.formInvoices)
    const totalSum = this.formInvoices.reduce((sum, invoice,) => sum += invoice.total_price, 0);
    const convertedSum = this.formInvoices.reduce((sum, invoice,) => sum += invoice.total_price_converted, 0);

    this.form.get('amount').patchValue(totalSum);
    this.form.get('converted_amount').patchValue(convertedSum);
    this.form.get('exchange_rate').patchValue(this.roundValue(this.formInvoices[0]?.exchange_rate ? this.formInvoices[0]?.exchange_rate : 1));


    if (this.formInvoices.length) {
      this.invoices.forEach(invoice => {
        invoice.disabled = Boolean(this.formInvoices[0]?.exchange_rate !== invoice.exchange_rate || this.formInvoices[0]?.currency.code !== invoice.currency.code);
      })
    } else {
      this.invoices.forEach(invoice => {
        invoice.disabled = false;
      })
    }

    this.showInvoiceError = this.invoices.some(invoice => invoice.disabled);
  }

  onChangeRate() {
    this.countConvertedAmount();
  }

  onChangeAmount() {
    this.countConvertedAmount();
  }

  countConvertedAmount() {
    this.form.get('converted_amount').patchValue(this.form.get('amount').value * this.form.get('exchange_rate').value);
  }

  // Edit Files

  getFiles() {
    if (this.data.payment && this.paymentId) {
      this.isLoadingFiles = true;
      this.paymentService.getPaymentFiles(this.paymentId).subscribe(files => {
        this.files = files;
        this.isLoadingFiles = false;
      });
    }
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onSelectFiles(files: File[]) {
    this.uploadFiles = files;
  }


  onDownloadFile(file: PaymentFile) {
    this.addition.add(file.id);
    this.paymentService.downloadPaymentFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
      this.addition.clear();
    });
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.paymentService.removePaymentFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
          this.deletion.clear();
        });
      }
    });
  }

  onUploadFiles(payment) {
    this.isPending = true;
    this.paymentService.severalUploadFiles(this.paymentId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(payment));
  }

  fileAdded(file: File) {
    this.uploadFiles.push(file);
  }
}
