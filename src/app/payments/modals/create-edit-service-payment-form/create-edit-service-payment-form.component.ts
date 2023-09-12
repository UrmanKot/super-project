import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AdapterService} from '@shared/services/adapter.service';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {PaymentService} from '../../services/payment.service';
import {ModalActionType} from '@shared/models/modal-action';
import {Payment} from '../../models/payment';
import {CreateEditPaymentFormComponent} from '../create-edit-payment-form/create-edit-payment-form.component';
import {Company} from '../../../crm/models/company';
import {ServiceInvoicePaymentService} from '../../services/service-invoice-payment.service';
import {ServiceInvoiceService} from '@shared/services/service-invoice.service';
import {Invoice} from '../../../procurement/models/invoice';
import {ServiceInvoicePaymentFile} from '../../models/service-invoice-payment';
import {environment} from '@env/environment';
import {ModalService} from '@shared/services/modal.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-create-edit-service-payment-form',
  templateUrl: './create-edit-service-payment-form.component.html',
  styleUrls: ['./create-edit-service-payment-form.component.scss']
})
export class CreateEditServicePaymentFormComponent implements OnInit {
  isDisabledCompanyPicker = false;
  isLoading = false;
  isLoadingFiles = false;
  isConfirmed = false;


  form = this.fb.group({
    supplier: [<number>null, Validators.required],
    service_invoices: [<Invoice[]>[], Validators.required],
    amount: [<number>0, [Validators.required, Validators.min(0)]],
    converted_amount: [0],
    exchange_rate: [1, Validators.required],
    payment_date: [<Date | string>'', Validators.required],
    accountant_number: [1, Validators.required],
    paid_by_card: [false],
    is_paid: [false],
  });
  isSaving = false;
  serviceInvoices: any[] = [];
  amount: number = 0;

  // Edit Files
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  uploadFiles: File[] = [];
  files: ServiceInvoicePaymentFile[] = [];
  isPending = false;
  link = environment.image_path;
  paymentId: number;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditPaymentFormComponent>,
    private readonly adapterService: AdapterService,
    private serviceInvoicePaymentService: ServiceInvoicePaymentService,
    private serviceInvoice: ServiceInvoiceService,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: {
      type: ModalActionType,
      payment: Payment,
      companyId: number,
      orderId?: number
      isDelivery: boolean;
    }
  ) {
  }

  get formInvoices(): Invoice[] {
    return this.form.get('service_invoices').value as Invoice[];
  }

  ngOnInit(): void {
    this.form.get('converted_amount').disable();

    if (this.data.type === 'create')
      this.form.get('service_invoices').disable();
      this.form.get('payment_date').patchValue(<any>new Date());

    if (this.data.type === 'edit') {
      this.paymentId = this.data.payment.id;
      this.form.patchValue(<any>this.data.payment);
      this.form.addControl('id' as any, this.fb.control(this.data.payment.id));
      this.form.get('supplier').patchValue(this.data.payment.service_invoices[0].supplier.id);

      // this.form.get('service_invoices').patchValue(ids);
      // this.serviceInvoices = [...this.data.payment.service_invoices];

      this.form.get('service_invoices').patchValue(this.data.payment.service_invoices.map(i => {
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
      this.serviceInvoices = this.data.payment.service_invoices.map(i => i);
      this.form.get('payment_date').patchValue(new Date(this.data.payment.payment_date));
      this.form.get('service_invoices').disable();
      this.amount = this.data.payment.amount;
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
        this.serviceInvoicePaymentService.update(send).subscribe({
          next: payment => {
            if (this.uploadFiles.length > 0) {
              this.onUploadFiles(payment);
            } else {
              this.dialogRef.close(payment);
            }
          },
          error: () => this.isSaving = false,
        });

        this.serviceInvoicePaymentService.pay(
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

  onChangeAmount() {
    this.countConvertedAmount();
  }

  countConvertedAmount() {
    this.form.get('converted_amount').patchValue(this.form.get('amount').value * this.form.get('exchange_rate').value);
  }

  onChangeRate() {
    this.countConvertedAmount();
  }

  createPayment() {
    const send = {...this.form.value};
    send.payment_date = this.adapterService.dateAdapter(new Date(send.payment_date));
    // @ts-ignore
    send.service_invoices = send.service_invoices.map(i => i.id);
    delete send.converted_amount;

    if (this.data.isDelivery) {
      // @ts-ignore
      send.delivery_chain = this.data.orderId
    }

    this.serviceInvoicePaymentService.create(send).subscribe({
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
    this.serviceInvoicePaymentService.update(send).subscribe({
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

  onSelectCompany(company: Partial<Company>) {
    if (company) {
      this.form.get('supplier').patchValue(company.id);
      this.form.get('service_invoices').enable();
      this.getInvoicesByCompany();
    } else {
      this.form.get('supplier').patchValue(null);
      this.form.get('service_invoices').disable();
    }
    this.form.get('service_invoices').patchValue([]);
    this.serviceInvoices = [];
  }

  getInvoicesByCompany() {
    this.isLoading = true;
    const query = [
      {name: 'completed', value: true},
      {name: 'supplier', value: this.form.get('supplier').value},
    ];

    if (this.data.orderId && !this.data.isDelivery) {
      query.push({name: 'order', value: this.data.orderId});
    }

    this.serviceInvoice.get(query).subscribe(invoices => {
      invoices.forEach(i => {
        if (i.is_proforma) {
          i.label = i.self_proforma_serial_number + ` (Price ${i.total_price_converted} €)` +
            `${i.currency.code !== 'EUR' ? (' (Other Price: ' + i.total_price + ' ' + i.currency?.symbol + ')') : ''}`;
        } else {
          i.label = i.self_serial_number + ' (Invoice)' + ` (Price: ${i.total_price_converted} €)` +
            `${i.currency.code !== 'EUR' ? (' (Other Price: ' + i.total_price + ' ' + i.currency?.symbol + ')') : ''}`;
        }
      });

      this.serviceInvoices = invoices.map(invoice => {
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

  showInvoiceError = false;

  countSum() {
    const totalSum = this.formInvoices.reduce((sum, invoice,) => sum += invoice.total_price, 0);
    const convertedSum = this.formInvoices.reduce((sum, invoice,) => sum += invoice.total_price_converted, 0);

    this.form.get('amount').patchValue(totalSum);
    this.form.get('converted_amount').patchValue(convertedSum);
    this.form.get('exchange_rate').patchValue(this.roundValue(this.formInvoices[0]?.exchange_rate ? this.formInvoices[0]?.exchange_rate : 1));


    if (this.formInvoices.length) {
      this.serviceInvoices.forEach(invoice => {
        invoice.disabled = Boolean(this.formInvoices[0]?.exchange_rate !== invoice.exchange_rate || this.formInvoices[0]?.currency.code !== invoice.currency.code);
      })
    } else {
      this.serviceInvoices.forEach(invoice => {
        invoice.disabled = false;
      })
    }

    this.showInvoiceError = this.serviceInvoices.some(invoice => invoice.disabled);
  }

  // Edit Files
  getFiles() {
    if (this.data.payment && this.paymentId) {
      this.serviceInvoicePaymentService.getAuxiliaryPaymentFiles(this.paymentId).subscribe(files => {
        console.log(`Files`, files);
        this.files = files;
        this.isLoading = false;
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

  onDownloadFile(file: ServiceInvoicePaymentFile) {
    this.addition.add(file.id);
    this.serviceInvoicePaymentService.downloadAuxiliaryPaymentFile(file.id).subscribe(response => {
      const fileName = this.getFileName(file.file);
      this.adapterService.downloadFile(fileName, response);
      this.addition.clear();
    });
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.serviceInvoicePaymentService.removeAuxiliaryPaymentFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
          this.deletion.clear();
        });
      }
    });
  }

  onUploadFiles(payment) {
    this.isPending = true;
    this.serviceInvoicePaymentService.severalUploadFiles(this.paymentId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(payment));
  }

  fileAdded(file: File) {
    this.uploadFiles.push(file);
  }
}
