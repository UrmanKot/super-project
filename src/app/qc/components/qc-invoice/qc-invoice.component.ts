import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {EInvoiceProductQualityControl, InvoiceProduct} from '../../../procurement/models/invoice-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {ModalService} from '@shared/services/modal.service';
import {QcService} from '../../services/qc.service';
import {AlbumService} from '@shared/services/album.service';
import {environment} from '@env/environment';
import {deepCopy} from 'deep-copy-ts';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'pek-qc-invoice',
  templateUrl: './qc-invoice.component.html',
  styleUrls: ['./qc-invoice.component.scss']
})
export class QcInvoiceComponent implements OnInit {
  link = environment.link_url + 'dash/';

  isLoading = true;
  isLoadingProducts = false;
  isLoadingTechnicalEquipment = true;
  isGenerating = false;
  isCancellation = false;
  isCompletingProducts = false;
  isCompleting = false;

  invoice: Invoice;
  invoiceId: number;

  invoiceProducts: InvoiceProduct[] = [];
  selectedInvoiceProducts: InvoiceProduct[] = [];

  technicalEquipments: OrderTechnicalEquipment[] = [];
  selectedTechnicalEquipment: OrderTechnicalEquipment;

  invoiceCanBeCompleted = false;

  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly orderProductService: OrderProductService,
    private readonly invoiceProductService: InvoiceProductService,
    private readonly qrCodeService: QrCodeService,
    private readonly qcService: QcService,
    private readonly route: ActivatedRoute,
    private readonly modalService: ModalService,
    public readonly albumService: AlbumService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.invoiceId = +id),
      tap(() => this.getInvoice()),
      tap(() => this.getInvoiceProducts()),
    ).subscribe();
  }

  getInvoice() {
    this.invoiceService.getById(this.invoiceId).pipe(
      tap(invoice => this.invoice = invoice),
      tap(() => this.getTechnicalEquipmentToQc()),
      tap(() => this.isLoading = false)
    ).subscribe();
  }

  getInvoiceProducts() {
    this.invoiceProducts = [];
    this.selectedInvoiceProducts = [];
    this.isLoadingProducts = true;

    this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe(
      tap(products => {
        products.forEach(product => {
          const technologyId = product.current_technology?.id;
          const nomenclatureId = product.nomenclature.id;
          const existing = this.invoiceProducts.find(el =>
            el.nomenclature.id === nomenclatureId &&
            el.current_technology?.id === technologyId);
          if (existing) {
            existing.totalQuantity = existing.totalQuantity += product.quantity;
            existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity;
            existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += product.not_passed_quantity;
            existing.totalSerialNumbers.push(...product.serial_numbers);
            existing.invoiceProducts.push(product);
          } else {
            product.invoiceProducts = [deepCopy(product)];
            product.totalQuantity = product.quantity;
            product.totalQuantityPassed = product.passed_quantity;
            product.totalQuantityNotPassed = product.not_passed_quantity;
            product.totalSerialNumbers = [...product.serial_numbers];
            this.invoiceProducts.push(product);
          }
        });
        this.invoiceProducts.forEach(product => {
          if (product.totalQuantityPassed === product.totalQuantity) {
            product.quality_control = EInvoiceProductQualityControl.PASSED.toString();
          } else if (product.totalQuantityNotPassed === product.totalQuantity) {
            product.quality_control = EInvoiceProductQualityControl.NOT_PASSED.toString();
          } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
            product.quality_control = EInvoiceProductQualityControl.PARTLY_PASSED.toString();
          }
        });
        this.invoiceProducts = [...this.invoiceProducts];

        console.log('this.invoiceProducts', this.invoiceProducts);
      }),
      tap(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))),
      tap(() => this.isLoadingProducts = false)
    ).subscribe();
  }

  getTechnicalEquipmentToQc() {
    this.isLoadingTechnicalEquipment = true;
    this.technicalEquipments = [];

    if (this.invoice.order) {
      this.orderProductService.getTechnicalEquipmentToQC(this.invoice.order.id).pipe(
        tap(equipment => this.technicalEquipments = equipment),
        tap(() => this.isLoadingTechnicalEquipment = false)
      ).subscribe();
    }
  }

  onGenerateQrCodes() {
    this.isGenerating = true;

    const send = {
      by_nomenclatures_list: [],
    };

    this.selectedInvoiceProducts.forEach(invoiceProduct => {
      invoiceProduct.invoiceProducts.forEach(p => {
        send.by_nomenclatures_list.push({
          nomenclature_id: p.nomenclature.id,
          serial_number_ids:
            p.nomenclature.bulk_or_serial === '1' ?
              p.serial_numbers.map(s => +s.id) : [],
          order_product_ids: [p.id],
          invoice_product_ids: [],
        });
      })
    });

    this.qrCodeService.generateQrCodes(send, this.invoice.order.id, this.invoice.self_serial_number).subscribe(() => this.isGenerating = false);
  }

  onCancellation() {
    this.modalService.confirm('danger', 'Confirm').pipe(
      filter(confirm => confirm),
    ).subscribe(() => {
      this.isCancellation = true;
      this.invoiceService.cancellation(this.invoiceId).subscribe(() => {
        this.isCancellation = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      });
    });
  }

  onComplete() {
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      const send = {id: this.invoice.id, qc_completed: true};
      this.isCompleting = true;
      this.invoiceService.updatePartly(send).subscribe(() => {
        this.isCompleting = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      });
    });
  }

  onCompleteItems() {
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      const send = [];
      const sendProducts = [];
      this.selectedInvoiceProducts.forEach(product => {
        const products = product.invoiceProducts.filter(p => !p.nomenclature.qc_protocol && p.nomenclature.bulk_or_serial === '0');
        sendProducts.push(...products);
      });

      sendProducts.forEach(product => {
        send.push({
          id: product.id,
          not_passed_quantity: 0,
          passed_quantity: product.quantity,
          quality_control: 1
        });
      });

      console.log('sendProducts', sendProducts);

      this.isCompletingProducts = true;

      this.invoiceProductService.severalUpdatePartly(send).pipe(
        tap(() => this.getInvoiceProducts()),
        tap(() => this.isCompletingProducts = false)
      ).subscribe();
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedInvoiceProducts[0].nomenclature.id, 1).subscribe();
  }

  onQualityControl() {
    if (this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;

      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].passed_quantity;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].not_passed_quantity;

      // this.modalService.protocolControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].quantity, 'invoice').subscribe(res => {
      //   if (res) {
      //     this.selectedInvoiceProducts = [];
      //     this.getInvoiceProducts();
      //   }
      // });
    } else if (!this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;

      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].passed_quantity;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].not_passed_quantity;

      // this.modalService.serialControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].quantity, 'invoice').subscribe(res => {
      //   if (res) {
      //     this.selectedInvoiceProducts = [];
      //     this.getInvoiceProducts();
      //   }
      // });
    } else {
      this.qcService.controlProduct(this.selectedInvoiceProducts[0]).subscribe(res => {
        if (res) {
          this.selectedInvoiceProducts = null;
          this.getInvoiceProducts();
        }
      });
    }
  }

  onPrintAlbum() {
    this.albumService.getNomenclaturesImages((this.selectedInvoiceProducts.map(p => p?.nomenclature)));
  }

  goToOrder() {
    let link: string;
    const order = this.invoice.order;

    switch (order.accounting_type) {
      case 1:
        link = '/procurement/chains/order/' + order.id;
        break;
      case 2:
        link = '/outsourcing/chains/order/' + order.id;
        break;
      case 3:
        link = `${this.link}production/orders/order/` + order.id;
        break;
    }

    window.open(link, '_blank');
  }

  onQualityControlTechnicalEquipment() {
    this.qcService.controlTechnicalEquipment(this.selectedTechnicalEquipment, true).subscribe(res => {
      if (res) {
        this.getTechnicalEquipmentToQc();
        this.selectedTechnicalEquipment = null;
      }
    });
  }
}
