import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../../procurement/models/invoice';
import {debounceTime, filter, finalize, map, switchMap, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {EInvoiceProductRMAStatus, InvoiceProduct} from '../../../procurement/models/invoice-product';
import {ServiceInvoiceProduct} from '../../models/service-invoice';
import {MenuItem} from 'primeng/api';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {ServicesService} from '../../services/services.service';
import {forkJoin} from 'rxjs';
import {InvoiceProductRmaFilesService} from '../../../procurement/services/invoice-product-rma-files.service';
import {environment} from '@env/environment';

@Component({
  selector: 'pek-reports-invoice-page',
  templateUrl: './reports-invoice-page.component.html',
  styleUrls: ['./reports-invoice-page.component.scss']
})
export class ReportsInvoicePageComponent implements OnInit {

  isCompletingOrCancellation = false;

  invoiceProductsMenuItems: MenuItem[] = [{
    label: 'Selected Invoice Item',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editInvoiceProduct(),
      },
      {
        label: 'Delivery Date',
        icon: 'pi pi-calendar',
        command: () => this.deliveryDate(),
        disabled: true
      },
      {
        label: 'Confirm the delivery of the item',
        icon: 'pi pi-check',
        command: () => this.confirmDelivery(),
        disabled: true
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteInvoiceProduct()
      }
    ]
  }];

  invoiceServiceMenuItems: MenuItem[] = [{
    label: 'Selected Invoice Service',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editInvoiceService()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeInvoiceService()
      }
    ]
  }];

  isPureTotalChanged = false;

  files: any[] = [];
  selectedFile: any;


  isSaving = false;
  isLoadingFiles = true;

  invoice: Invoice = null;
  related: Invoice[] = [];

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  invoiceProducts: InvoiceProduct[] = [];

  selectedInvoiceProducts: InvoiceProduct[] = [];

  invoiceServices: ServiceInvoiceProduct[] = [];
  selectedService: ServiceInvoiceProduct;

  isLoadingServices = true;
  isLoadingInvoiceProducts = true;

  isViewingMode = false;
  haveSaved = false;

  isLoadingRelated = true;
  isLoading = false;

  invoiceId: number;

  form: FormGroup = this.fb.group({
    supplier_serial_number: [''],
    supplier: [{value: null}, Validators.required],
    total_price: [{value: 0, disabled: this.isViewingMode}, Validators.required],
    pure_total_price: [{value: 0, disabled: false}],
    id: [null, Validators.required],
    currency: [null, Validators.required],
    system_creation_date: [null, Validators.required],
    invoice_date: [null],
    items_reception_date: [null],
    set_physical_characteristics: [null],
    due_date: [null],
    invoice_reception_date: [null],
    weight: [null],
    width: [null],
    length: [null],
    height: [null],
    delivery_days: [null],
    proformas: [[]],
    exchange_rate: [1.0],
  });

  isAllocatingMode: boolean;
  hasAllocatedProducts: boolean = false;

  link = environment.image_path;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private invoiceService: InvoiceService,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    private readonly invoiceProductService: InvoiceProductService,
    private readonly servicesService: ServicesService,
    private invoiceProductRmaFilesService: InvoiceProductRmaFilesService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.invoiceId = +id),
      tap(id => this.form.get('id').patchValue(+id)),
      tap(() => this.getInvoice()),
      tap(() => this.getFiles()),
      tap(() => this.getInvoiceProducts()),
      tap(() => this.getServices()),
    ).subscribe();
  }

  getFiles() {
    this.files = [];
    this.isLoadingFiles = true;

    this.invoiceService.getFiles(+this.invoiceId).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }

  getInvoice() {
    this.isPureTotalChanged = false;
    this.isLoading = true;
    this.invoiceService.getById(this.invoiceId).subscribe(invoice => {
      this.invoice = invoice;
      this.invoice.total_price = (Math.round(this.invoice.total_price * 100) / 100);

      if (invoice.supplier) {
        this.invoiceService.get([{name: 'supplier', value: invoice.supplier?.id}, {
          name: 'is_proforma',
          value: !invoice.is_proforma
        }]).subscribe(relatedInvoices => {
          this.related = relatedInvoices;
          this.isLoadingRelated = false;
        });
      } else {
        this.isLoadingRelated = false;
      }

      if (this.invoice.invoice_date != null) {
        this.invoice.invoice_date = new Date(this.invoice.invoice_date);
      }
      if (this.invoice.system_creation_date != null) {
        this.invoice.system_creation_date = new Date(this.invoice.system_creation_date);
      }
      if (this.invoice.due_date != null) {
        this.invoice.due_date = new Date(this.invoice.due_date);
      }
      if (this.invoice.invoice_reception_date != null) {
        this.invoice.invoice_reception_date = new Date(this.invoice.invoice_reception_date);
      }
      if (this.invoice.items_reception_date != null) {
        this.invoice.items_reception_date = new Date(this.invoice.items_reception_date);
      }

      if (!this.invoice.order) {
        this.form.get('supplier').enable();
      }

      this.form.patchValue(this.invoice);

      if (this.invoice.supplier) {
        this.form.get('supplier').patchValue(this.invoice.supplier.id);
      }

      if (this.invoice.proformas) {
        this.form.get('proformas').patchValue(this.invoice.proformas.map(x => x.id));
      }
      if (this.invoice.currency) {
        this.form.get('currency').patchValue(this.invoice.currency.code);
      }
      if (this.invoice.delivery_days) {
        this.haveSaved = true;
      }

      this.isLoading = false;
    });
  }

  getServices() {
    this.selectedService = null;
    this.isLoadingServices = true;
    this.invoiceServices = [];
    this.servicesService.get([{name: 'invoice', value: this.invoiceId}]).subscribe(services => {
      // @ts-ignore
      this.invoiceServices = services;
      this.invoiceServices = services;
      if (this.invoice?.pure_total_price) {
        this.form.get('pure_total_price').setValue((this.invoice.pure_total_price).toFixed(2));
      }
      this.isLoadingServices = false;
    });
  }

  getInvoiceProducts() {
    this.hasAllocatedProducts = false;
    this.isLoadingInvoiceProducts = true;
    this.selectedInvoiceProducts = [];
    this.invoiceProducts = [];
    this.invoiceProductService.get([{name: 'invoice', value: this.invoiceId}]).subscribe(products => {
      const invoiceProducts: InvoiceProduct[] = [];
      products.forEach(product => {
        product.passed = null;

        if (!invoiceProducts.find(p => p.nomenclature.id === product.nomenclature.id && p.current_technology === product.current_technology)) {

          let passedProducts = [];
          let notPassedProducts = [];
          let notProcessedProducts = [];
          let partlyProducts = [];

          const filteredProducts = products.filter(p => p.nomenclature.id === product.nomenclature.id && p.current_technology === product.current_technology);
          filteredProducts.forEach(prod => {
            prod.notPassedQuantity = prod.quantity - prod.passed_quantity;
          });

          passedProducts = filteredProducts.filter(p => p.passed_quantity > 0 && !p.not_passed_quantity);
          notPassedProducts = filteredProducts.filter(p => p.not_passed_quantity > 0 && !p.passed_quantity);
          notProcessedProducts = filteredProducts.filter(p => !p.passed_quantity && !p.not_passed_quantity);
          partlyProducts = filteredProducts.filter(p => p.passed_quantity && p.not_passed_quantity);

          if (partlyProducts.length) {
            partlyProducts.forEach(partlyProduct => {
              const partlyPassedProduct = {...partlyProduct};
              const partlyNotPassedProduct = {...partlyProduct};

              partlyPassedProduct.equalInvoiceProducts = JSON.parse(JSON.stringify(passedProducts));
              partlyPassedProduct.totalQuantity = partlyPassedProduct.passed_quantity;
              partlyPassedProduct.totalFreeQuantity = partlyPassedProduct.order_product_free_quantity;
              partlyPassedProduct.totalQuantityAllocated = partlyPassedProduct.allocated_quantity;

              this.checkIfHasAllocatedProduct(partlyPassedProduct);

              partlyPassedProduct.passed = 'passed';
              partlyPassedProduct.rma_status = null;
              partlyPassedProduct.rma_comment = '';
              partlyPassedProduct.products = [partlyPassedProduct];
              invoiceProducts.push(partlyPassedProduct);

              partlyNotPassedProduct.equalInvoiceProducts = JSON.parse(JSON.stringify(notProcessedProducts));
              partlyNotPassedProduct.totalQuantity = partlyNotPassedProduct.not_passed_quantity;
              partlyNotPassedProduct.totalFreeQuantity = partlyNotPassedProduct.order_product_free_quantity;
              partlyNotPassedProduct.totalQuantityAllocated = partlyNotPassedProduct.allocated_quantity;

              this.checkIfHasAllocatedProduct(partlyNotPassedProduct);

              partlyNotPassedProduct.passed = 'notPassed';
              partlyNotPassedProduct.rma_status = partlyNotPassedProduct?.rma_status ?? '';
              partlyNotPassedProduct.rma_comment = partlyNotPassedProduct?.rma_comment ?? '';

              if (partlyNotPassedProduct.rma_status !== EInvoiceProductRMAStatus.RECEIVED) {
                partlyNotPassedProduct.passed = 'notPassed';
              }
              partlyNotPassedProduct.products = [partlyNotPassedProduct];
              invoiceProducts.push(partlyNotPassedProduct);
            });
          }

          if (passedProducts.length) {
            const passedProduct = {...product};

            passedProduct.equalInvoiceProducts = JSON.parse(JSON.stringify(passedProducts));

            passedProduct.totalQuantity = passedProducts.reduce((sum, p) => sum + p.passed_quantity, 0);
            passedProduct.totalFreeQuantity = this.onlyUnique(notProcessedProducts, 'order_product_id').reduce((sum, p) => sum + p.order_product_free_quantity, 0);
            passedProduct.totalQuantityAllocated = passedProducts.reduce((sum, p) => sum + p.allocated_quantity, 0);

            this.checkIfHasAllocatedProduct(passedProduct);

            passedProduct.passed = 'passed';
            passedProduct.rma_status = null;
            passedProduct.rma_comment = '';
            passedProduct.products = [...passedProducts];
            invoiceProducts.push(passedProduct);
          }

          if (notPassedProducts.length) {
            const notPassedProduct = {...product};

            notPassedProduct.equalInvoiceProducts = JSON.parse(JSON.stringify(notProcessedProducts));

            notPassedProduct.totalQuantity = notPassedProducts.reduce((sum, p) => sum + p.not_passed_quantity, 0);
            notPassedProduct.totalFreeQuantity = this.onlyUnique(notProcessedProducts, 'order_product_id').reduce((sum, p) => sum + p.order_product_free_quantity, 0);
            notPassedProduct.passed = 'notPassed';
            notPassedProduct.rma_status = notPassedProducts.find(p => p.rma_status)?.rma_status;
            notPassedProduct.rma_comment = notPassedProducts.find(p => p.rma_comment)?.rma_comment ?? '';

            if (notPassedProduct.rma_status !== EInvoiceProductRMAStatus.RECEIVED) {
              notPassedProduct.passed = 'notPassed';
            }

            notPassedProduct.products = [...notPassedProducts];
            invoiceProducts.push(notPassedProduct);
          }

          if (notProcessedProducts.length) {
            const notProcessedProduct = {...product};

            notProcessedProduct.totalQuantity = notProcessedProducts.reduce((sum, p) => sum + p.quantity, 0);
            notProcessedProduct.totalFreeQuantity = this.onlyUnique(notProcessedProducts, 'order_product_id').reduce((sum, p) => sum + p.order_product_free_quantity, 0);
            notProcessedProduct.totalQuantityAllocated = notProcessedProducts.reduce((sum, p) => sum + p.allocated_quantity, 0);
            this.checkIfHasAllocatedProduct(notProcessedProduct);

            notProcessedProduct.rma_status = notProcessedProducts.find(p => p.rma_status)?.rma_status;
            notProcessedProduct.rma_comment = notProcessedProducts.find(p => p.rma_comment)?.rma_comment ?? '';

            notProcessedProduct.equalInvoiceProducts = JSON.parse(JSON.stringify(notProcessedProducts));
            notProcessedProduct.products = [...notProcessedProducts];
            invoiceProducts.push(notProcessedProduct);
          }
        }
      });

      this.invoiceProducts = invoiceProducts.map((p, idx) => {
        return {
          ...p,
          uid: idx
        };
      });
      this.invoiceProducts.sort((a, b) => b.rma_comment.localeCompare(a.rma_comment));
      this.isLoadingInvoiceProducts = false;
    });
  }

  onlyUnique(array, keyToBeUnique) {
    return array.filter((x, xi) => !array.slice(xi + 1)
      .some(y => y[keyToBeUnique] === x[keyToBeUnique]));
  }

  checkIfHasAllocatedProduct(invoiceProduct: InvoiceProduct) {
    if (invoiceProduct.totalQuantityAllocated > 0) {
      this.hasAllocatedProducts = true;
    }
  }

  onSelectCompany(id: number) {
    this.form.get('supplier').patchValue(id);
  }

  changeCurrency(value: any) {
    this.form.get('currency').patchValue(value?.code ?? null);

    this.invoice.currency.symbol = value?.symbol ?? 'None';

    if (this.form.get('currency').value === 'EUR') {
      this.form.get('exchange_rate').setValue(1);
      this.form.get('pure_total_price').setValue(this.form.get('pure_total_price').value.toFixed(2));
    }
  }

  calculatePureTotalPrice() {
    let sum = 0;

    this.invoiceProducts.forEach(product => {
      const price: number = parseFloat(product.supplier_unit_price);
      let newPrice = price - (price * parseFloat(product.discount) / 100);
      // newPrice = newPrice + (newPrice / 100 * product.ddv);
      newPrice = newPrice * product.quantity;
      sum += newPrice;
    });

    this.invoiceServices.forEach(service => {
      const price = parseFloat(service.pure_price);
      const newPrice = price - (price * parseFloat(service.discount) / 100);
      // newPrice = newPrice + (newPrice / 100 * service.ddv);
      sum += newPrice;
    });

    sum = parseFloat(sum.toFixed(3));
    return sum;
  }

  changeRate() {
    // this.form.get('pure_total_price').setValue((this.invoice.pure_total_price * this.form.get('exchange_rate').value).toFixed(2));
  }

  updateCharacteristic(value: any) {
    this.form.get('set_physical_characteristics').setValue(value);
    if (this.form.get('set_physical_characteristics').value) {
      this.form.get('weight').setValidators([Validators.required]);
      this.form.get('set_physical_characteristics').updateValueAndValidity();
    } else {
      this.form.get('weight').setValidators([]);
      this.form.get('set_physical_characteristics').updateValueAndValidity();
    }
  }

  showProductionLists(rootProductionPlans: any[]) {

  }

  getRootLists(products: InvoiceProduct[]): { list: any, count?: number }[] {
    const lists: { list: any, count?: number }[] = [];
    products.forEach(product => {
      if (product.root_production_plans) {
        product.root_production_plans.forEach((res: any) => {
          if (res) {
            const found = lists.find(el => el.list.root_nomenclature?.id === res.root_nomenclature?.id);
            if (found) {
              found.count++;
            } else {
              lists.push({list: res, count: 1});
            }
          }
        });
      }
    });

    return lists;
  }

  getFileName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.invoiceService.removeFile(id).pipe(
          finalize(() => this.deletion.delete(id))
        ).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
        });
      }
    });
  }

  onDownloadFile(file: any) {
    this.addition.add(file.id);
    this.invoiceService.downloadFile(file.id).pipe(
      finalize(() => this.addition.delete(file.id))
    ).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }

  openInvoiceFilesModal() {
    this.invoiceService.openInvoiceFilesModal(+this.invoiceId).subscribe(confirm => {
      this.getFiles();
    });
  }

  createInvoiceService() {
    this.servicesService.createEditServiceModal('create', +this.invoiceId, 'invoice').subscribe(service => {
      if (service) {
        this.getServices();
        this.getInvoice();
      }
    });
  }

  editInvoiceService() {
    this.servicesService.createEditServiceModal('edit', +this.invoiceId, 'invoice', this.selectedService).subscribe(service => {
      if (service) {
        this.getServices();
        this.getInvoice();
      }
    });
  }

  private removeInvoiceService() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.servicesService.delete(this.selectedService.id).subscribe(() => {
          this.getServices();
          this.getInvoice();
        });
      }
    });
  }

  saveInvoice() {
    if (this.form.valid) {
      this.isSaving = true;
      let sendData = {...this.form.value};
      sendData.system_creation_date = this.adapterService.dateAdapter(this.form.value.system_creation_date);
      sendData.due_date = this.adapterService.dateAdapter(this.form.value.due_date);
      sendData.invoice_reception_date = this.adapterService.dateAdapter(this.form.value.invoice_reception_date);
      sendData.invoice_date = this.adapterService.dateAdapter(this.form.get('invoice_date').value);
      delete sendData.pure_total_price;

      if (this.isPureTotalChanged && this.invoice.pure_total_price !== this.form.get('pure_total_price').value) {
        sendData.manual_pure_total_price = this.form.get('pure_total_price').value;
      }

      this.haveSaved = true;
      this.invoiceService.updatePartly(sendData).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        this.getInvoice();
      });
    }
  }

  cancellation() {
    this.modalService.confirm('success').pipe(
      filter(Boolean),
    ).subscribe(() => {
      this.isCompletingOrCancellation = true;
      this.invoiceService.cancellation(this.invoice.id).pipe(
        finalize(() => this.isCompletingOrCancellation = false),
        debounceTime(500),
        tap(() => this.getInvoice()),
        tap(() => this.getInvoiceProducts()),
      ).subscribe();
    });
  }

  complete() {
    this.modalService.confirm('success').pipe(
      filter(Boolean),
    ).subscribe(() => {
      this.isCompletingOrCancellation = true;
      const send = {id: this.invoice.id, completed: true};
      this.invoiceService.updatePartly(send as Invoice).pipe(
        finalize(() => this.isCompletingOrCancellation = false),
        debounceTime(500),
        tap(() => this.getInvoice()),
        tap(() => this.getInvoiceProducts()),
      ).subscribe();
    });
  }

  distributePrice() {
    this.invoiceService.distributeModal(+this.invoiceId).pipe(
      filter(Boolean),
      tap(() => this.getInvoice()),
      tap(() => this.getInvoiceProducts()),
      tap(() => this.getServices()),
    ).subscribe();
  }

  addInvoiceItem() {
    this.invoiceService.addInvoiceProductModal(+this.invoiceId).pipe(
      filter(Boolean),
      tap(() => this.getInvoice()),
      tap(() => this.getInvoiceProducts()),
    ).subscribe();
  }

  deleteInvoiceProduct() {
    const ids = this.selectedInvoiceProducts[0]
      .equalInvoiceProducts.map(invoiceProduct => invoiceProduct.id);
    const call = ids.map(invoiceProductId => this.invoiceProductService.delete(invoiceProductId));
    this.modalService.confirm('danger').pipe(
      filter(Boolean),
      switchMap(() => forkJoin([...call])),
      tap(() => this.getInvoice()),
      tap(() => this.getInvoiceProducts()),
    ).subscribe();
  }

  editInvoiceProduct() {
    this.invoiceProductService.createEditInvoiceProductModal('edit', +this.invoiceId, this.selectedInvoiceProducts[0]).pipe(
      filter(Boolean),
      tap(() => this.getInvoice()),
      tap(() => this.getInvoiceProducts()),
    ).subscribe();
  }

  rma() {
    this.invoiceProductService.rma(this.selectedInvoiceProducts).subscribe(response => {
      if (response === 'refund' || response === 'return' || response === 'leave') {
        this.getInvoice();
        this.getInvoiceProducts();
      }
    });
  }



  disabled() {
    return this.selectedInvoiceProducts?.length === 0 || !this.selectedInvoiceProducts?.every(s => s.rma_comment) || this.selectedInvoiceProducts.every(s => s.rma_status);
  }

  disabledRmaFiles() {
    return this.selectedInvoiceProducts?.length === 0 || this.selectedInvoiceProducts?.length > 1 && this.selectedInvoiceProducts[0]?.rma_files?.length === 0 ||
      !this.selectedInvoiceProducts?.every(s => s.rma_comment);
  }

  private deliveryDate() {
    this.invoiceProductService.deliveryDate(this.selectedInvoiceProducts[0]).pipe(
      finalize(Boolean)
    ).subscribe(res => {
      if (res) {
        this.getInvoice();
        this.getInvoiceProducts();
      }
    });
  }

  private confirmDelivery() {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        const send = [];
        this.selectedInvoiceProducts[0].products.forEach(p => send.push({
          id: p.id,
          rma_status: 1,
        }));

        this.invoiceProductService.updateSeveralPartly(send).subscribe(() => {
          this.getInvoice();
          this.getInvoiceProducts();
        });
      }
    });
  }

  productsSelectionChange() {
    this.invoiceProductsMenuItems[0].items[1].disabled = Boolean(!this.selectedInvoiceProducts[0]?.rma_comment || !(this.selectedInvoiceProducts[0]?.passed !== 'notPassed' || !!this.selectedInvoiceProducts[0]?.passed) || this.selectedInvoiceProducts[0]?.rma_status !== 'Reordered');
    this.invoiceProductsMenuItems[0].items[2].disabled = Boolean(!this.selectedInvoiceProducts[0]?.rma_comment || !(this.selectedInvoiceProducts[0]?.passed !== 'notPassed' || !!this.selectedInvoiceProducts[0]?.passed) || this.selectedInvoiceProducts[0]?.rma_status !== 'Reordered');
  }

  openRmaFiles() {
    const product: InvoiceProduct = this.selectedInvoiceProducts[0];
    this.invoiceProductRmaFilesService.invoiceProductsRmaFiles(product.rma_files).subscribe();
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  shownPassedStat(product: any) {
    return product.quality_control || product.equalInvoiceProducts.some(prod => prod.quality_control)
  }

  pureTotalChange() {
    this.isPureTotalChanged = true;
  }

  allocateToToolRequest() {
    this.isAllocatingMode = !this.isAllocatingMode;
    this.selectedInvoiceProducts = [];
    this.selectedInvoiceProducts = [...this.selectedInvoiceProducts];
  }

  allocateProducts() {
    this.invoiceService.allocateToToolRequestModal(this.selectedInvoiceProducts).pipe(
      filter(Boolean),
      debounceTime(500)
    ).subscribe(res => {
      this.isAllocatingMode = false;
      this.getInvoiceProducts();
    });
  }

  cancelAllocatedProducts() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.invoiceService.cancel_allocation_for_area_locator(this.invoiceId).pipe(debounceTime(500)).subscribe(res => {
          this.getInvoiceProducts();
        });
      }
    });
  }
}
