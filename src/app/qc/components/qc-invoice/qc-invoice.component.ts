import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {
  EInvoiceProductQualityControl,
  EInvoiceProductRMAStatus,
  InvoiceProduct
} from '../../../procurement/models/invoice-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {ModalService} from '@shared/services/modal.service';
import {QcService} from '../../services/qc.service';
import {AlbumService} from '@shared/services/album.service';
import {environment} from '@env/environment';
import {deepCopy} from 'deep-copy-ts';
import {ScanResult} from '../../../qr-code/models/scan-result';
import {
  logExperimentalWarnings
} from '@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings';

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

  isScanning = false;
  scanningEnd: boolean;
  foundSerialId: number;

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

  // Code reference
  // getInvoiceProducts() {
  //   this.invoiceProducts = [];
  //   this.selectedInvoiceProducts = [];
  //   this.isLoadingProducts = true;
  //
  //   this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe(
  //     tap(products => {
  //
  //       const RMAProducts = [];
  //       const RMAPassedProducts = [];
  //       const NonRMAProducts = [];
  //       const allocated_products = products.filter(product => product.allocated_quantity > 0);
  //       products = products.filter(product => product.allocated_quantity === 0);

  //       deepCopy(products).filter(product => product.rma_status).forEach(product => {
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const rmaStatus = product.rma_status;
  //         const existing = RMAProducts.find(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.rma_status === rmaStatus &&
  //           el.current_technology?.id === technologyId);
  //
  //         const allocated = allocated_products.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         if (existing) {
  //           if (rmaStatus) {
  //             existing.totalQuantity = existing.totalQuantity += product.quantity - product.accepted_quantity;
  //             existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity > 0 ? product.passed_quantity - product.accepted_quantity : 0;
  //             existing.totalSerialNumbers.push(...product.serial_numbers.filter(sn => !sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             }));
  //           }
  //           existing.totalQuantityNotPassed += product.not_passed_quantity;
  //           existing.invoiceProducts.push(product);
  //         } else {
  //           product.invoiceProducts = [deepCopy(product)];
  //           if (rmaStatus) {
  //             product.totalQuantity = product.quantity - product.accepted_quantity;
  //             product.totalQuantityPassed = product.passed_quantity > 0 ? product.passed_quantity - product.accepted_quantity : 0;
  //             product.totalSerialNumbers = [...product.serial_numbers.filter(sn => !sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             })];
  //           }
  //           product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
  //           product.totalQuantityNotPassed = product.not_passed_quantity;
  //           if (product.totalQuantity > 0) {
  //             RMAProducts.push(product);
  //           }
  //         }
  //       });
  //
  //       deepCopy(products).filter(product => product.rma_status).forEach(product => {
  //         product.isNonRma = true;
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const existingPassedProducts = NonRMAProducts.find(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           !product.rma_status &&
  //           el.current_technology?.id === technologyId);
  //
  //         const allocated = allocated_products.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         if (!existingPassedProducts) {
  //           const existing = RMAPassedProducts.find(el =>
  //             el.nomenclature.id === nomenclatureId &&
  //             el.current_technology?.id === technologyId);
  //           if (existing) {
  //             existing.totalQuantity = existing.totalQuantity += product.accepted_quantity;
  //             existing.totalQuantityPassed = existing.totalQuantityPassed += product.accepted_quantity;
  //             existing.totalSerialNumbers.push(...product.serial_numbers.filter(sn => sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             }));
  //             existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += 0;
  //             existing.invoiceProducts.push(product);
  //           } else {
  //             product.invoiceProducts = [deepCopy(product)];
  //             product.totalQuantity = product.accepted_quantity;
  //             product.totalQuantityPassed = product.accepted_quantity;
  //             product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
  //             product.totalSerialNumbers = [...product.serial_numbers.filter(sn => sn.is_passed).map(sn => {
  //               return {
  //                 ...sn,
  //                 invoice_product_id: product.id
  //               };
  //             })];
  //             product.totalQuantityNotPassed = 0;
  //             RMAPassedProducts.push(product);
  //           }
  //         }
  //       });
  //
  //       deepCopy(products).filter(product => !product.rma_status).forEach(product => {
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const existing = NonRMAProducts.find(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         const allocated = allocated_products.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.current_technology?.id === technologyId);
  //
  //         if (existing) {
  //           existing.totalQuantity = existing.totalQuantity += product.quantity;
  //           existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity;
  //           existing.totalSerialNumbers.push(...product.serial_numbers.map(sn => {
  //             return {
  //               ...sn,
  //               invoice_product_id: product.id
  //             };
  //           }));
  //           existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += product.not_passed_quantity;
  //           existing.invoiceProducts.push(product);
  //         } else {
  //           product.invoiceProducts = [deepCopy(product)];
  //           product.totalQuantity = product.quantity;
  //           product.totalQuantityPassed = product.passed_quantity;
  //           product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);
  //           product.totalSerialNumbers = [...product.serial_numbers.map(sn => {
  //             return {
  //               ...sn,
  //               invoice_product_id: product.id
  //             };
  //           })];
  //           product.totalQuantityNotPassed = product.not_passed_quantity;
  //           NonRMAProducts.push(product);
  //         }
  //       });
  //       this.invoiceProducts = [...RMAProducts, ...RMAPassedProducts, ...NonRMAProducts];
  //       this.invoiceProducts.filter(p => !p.rma_status).forEach(product => {
  //         const technologyId = product.current_technology?.id;
  //         const nomenclatureId = product.nomenclature.id;
  //         const existing = this.invoiceProducts.filter(el =>
  //           el.nomenclature.id === nomenclatureId &&
  //           el.rma_status &&
  //           el.current_technology?.id === technologyId);
  //         existing.forEach(prod => {
  //           prod.invoiceProducts.forEach(invProd => {
  //             product.totalQuantity += invProd.accepted_quantity;
  //             product.totalQuantityPassed += invProd.accepted_quantity;
  //           });
  //         });
  //       });
  //       this.invoiceProducts.forEach((product, index) => {
  //         product.idx = `${product.id}${index}`;
  //         if (product.isNonRma) {
  //           product.quality_control = EInvoiceProductQualityControl.PASSED.toString();
  //         } else {
  //           product.quality_control = null;
  //           if (product.totalQuantityNotPassed > 0 || product.totalQuantityPassed > 0) {
  //             if (product.totalQuantityPassed === product.totalQuantity) {
  //               product.quality_control = EInvoiceProductQualityControl.PASSED.toString();
  //             } else if (product.totalQuantityNotPassed === product.totalQuantity) {
  //               product.quality_control = EInvoiceProductQualityControl.NOT_PASSED.toString();
  //             } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
  //               product.quality_control = EInvoiceProductQualityControl.PARTLY_PASSED.toString();
  //             }
  //           }
  //         }
  //       });
  //       this.invoiceProducts = [...this.invoiceProducts.filter(p => p.totalQuantity)];
  //       this.invoiceProducts.sort((a, b) => b.rma_comment.localeCompare(a.rma_comment));
  //     }),
  //     tap(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))),
  //     tap(() => this.isLoadingProducts = false)
  //   ).subscribe();
  // }

  getInvoiceProducts() {
    this.invoiceProducts = [];
    this.selectedInvoiceProducts = [];
    this.isLoadingProducts = true;

    this.invoiceProductService.getInvoiceProducts(this.invoiceId).pipe(
      tap(products => {
        const allocated_products = products.filter(product => product.allocated_quantity > 0);

        const formedRMAInvoiceProducts  = this.prepareRMAInvoiceProducts(products, allocated_products);
        const formedNonRMAInvoiceProducts  = this.prepareNonRMAInvoiceProducts(products, allocated_products);

        this.invoiceProducts = [...formedRMAInvoiceProducts, ...formedNonRMAInvoiceProducts];
        this.invoiceProducts.filter(p => !p.rma_status).forEach(product => {
          const technologyId = product.current_technology?.id;
          const nomenclatureId = product.nomenclature.id;
          const existing = this.invoiceProducts.filter(el =>
            el.nomenclature.id === nomenclatureId &&
            el.rma_status &&
            el.current_technology?.id === technologyId);
          existing.forEach(prod => {
            prod.invoiceProducts.forEach(invProd => {
              product.totalQuantity += invProd.accepted_quantity;
              product.totalQuantityPassed += invProd.accepted_quantity;
            });
          });
        });

        this.invoiceProducts.forEach((product, index) => {
          product.idx = `${product.id}${index}`;
          product.quality_control = null;
          if (product.totalQuantityNotPassed > 0 || product.totalQuantityPassed > 0) {
            if (product.totalQuantityPassed === product.totalQuantity) {
              product.quality_control = EInvoiceProductQualityControl.PASSED.toString();
            } else if (product.totalQuantityNotPassed === product.totalQuantity) {
              product.quality_control = EInvoiceProductQualityControl.NOT_PASSED.toString();
            } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
              product.quality_control = EInvoiceProductQualityControl.PARTLY_PASSED.toString();
            }
          }
        });
        this.invoiceProducts = [...this.invoiceProducts.filter(p => p.totalQuantity)];
        this.invoiceProducts.sort((a, b) => b.rma_comment.localeCompare(a.rma_comment));
      }),
      tap(products => this.invoiceCanBeCompleted = Boolean(products.find(p => p.quality_control))),
      tap(() => this.isLoadingProducts = false)
    ).subscribe();
  }


  private prepareRMAInvoiceProducts(products: InvoiceProduct[], allocated_products: InvoiceProduct[]) {
    let formedRMAInvoiceProducts: any[] = [];
    deepCopy(products).filter(product =>
      product.rma_status === EInvoiceProductRMAStatus.RECEIVED).forEach(tempProduct => {
      let product = tempProduct;
      const technologyId = product.current_technology?.id;
      const nomenclatureId = product.nomenclature.id;
      const existingRMA = formedRMAInvoiceProducts.find(el =>
        (el.nomenclature.id === nomenclatureId &&
          el.current_technology?.id === technologyId));

      const allocated = allocated_products.filter(el =>
        el.nomenclature.id === nomenclatureId &&
        el.current_technology?.id === technologyId);

      if (existingRMA) {
        existingRMA.invoiceProducts.push(deepCopy(product));
        existingRMA.totalSerialNumbers.push(...product.serial_numbers.map(sn => {
          return {
            ...sn,
            invoice_product_id: product.id
          };
        }));
        existingRMA.totalQuantity += product.quantity;
        existingRMA.totalQuantityPassed += product.passed_quantity;
        existingRMA.totalQuantityNotPassed += product.not_passed_quantity;

      } else {
        product.invoiceProducts = [deepCopy(product)];
        product.totalSerialNumbers = [...product.serial_numbers.map(sn => {
          return {
            ...sn,
            invoice_product_id: product.id
          };
        })];
        product.totalQuantity = product.quantity;
        product.totalQuantityPassed = product.passed_quantity;
        product.totalQuantityNotPassed = product.not_passed_quantity;
        product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);

        formedRMAInvoiceProducts.push(product);
      }
    });

    return formedRMAInvoiceProducts;
  }

  private prepareNonRMAInvoiceProducts(products: InvoiceProduct[], allocated_products: InvoiceProduct[]) {
    let formedRMAInvoiceProducts: any[] = [];
    deepCopy(products).filter(product =>
      (product.rma_status === "" && product.rma_comment === "") ||
      product.rma_status === EInvoiceProductRMAStatus.PASSED).forEach(tempProduct => {
      let product = tempProduct;
      product.rma_status = '';
      const technologyId = product.current_technology?.id;
      const nomenclatureId = product.nomenclature.id;
      const existingRMA = formedRMAInvoiceProducts.find(el =>
        (el.nomenclature.id === nomenclatureId &&
          el.current_technology?.id === technologyId));

      const allocated = allocated_products.filter(el =>
        el.nomenclature.id === nomenclatureId &&
        el.current_technology?.id === technologyId);


      if (existingRMA) {
        existingRMA.invoiceProducts.push(deepCopy(product));
        existingRMA.totalSerialNumbers.push(...product.serial_numbers.map(sn => {
          return {
            ...sn,
            invoice_product_id: product.id
          };
        }));
        existingRMA.totalQuantity += product.quantity;
        existingRMA.totalQuantityPassed += product.passed_quantity;
        existingRMA.totalQuantityNotPassed += product.not_passed_quantity;

      } else {
        product.invoiceProducts = [deepCopy(product)];
        product.totalSerialNumbers = [...product.serial_numbers.map(sn => {
          return {
            ...sn,
            invoice_product_id: product.id
          };
        })];
        product.totalQuantity = product.quantity;
        product.totalQuantityPassed = product.passed_quantity;
        product.totalQuantityNotPassed = product.not_passed_quantity;
        product.totalQuantityAllocated = allocated.reduce((sum, p) => sum + p.allocated_quantity, 0);

        formedRMAInvoiceProducts.push(product);
      }
    });

    return formedRMAInvoiceProducts;
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
        if (p.nomenclature.bulk_or_serial === '1') {
          send.by_nomenclatures_list.push({
            nomenclature_id: p.nomenclature.id,
            serial_number_ids:
              p.nomenclature.bulk_or_serial === '1' ?
                p.serial_numbers.map(s => +s.id) : [],
            order_product_ids: [p.id],
            invoice_product_ids: [],
          });
        } else {
          const exists = send.by_nomenclatures_list.findIndex(el => el.nomenclature_id === p.nomenclature.id) >= 0;
          if (!exists) {
            send.by_nomenclatures_list.push({
              nomenclature_id: p.nomenclature.id,
              serial_number_ids: [],
              order_product_ids: [p.id],
              invoice_product_ids: [],
            });
          }
        }

      });
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

      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityPassed;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityNotPassed;

      this.qcService.withProtocolControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].totalQuantity, 'invoice', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedInvoiceProducts = [];
          this.getInvoiceProducts();
        }
      });
    } else if (!this.selectedInvoiceProducts[0].nomenclature.qc_protocol && this.selectedInvoiceProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;

      if (this.selectedInvoiceProducts[0].passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityPassed;
      if (this.selectedInvoiceProducts[0].not_passed_quantity) currentCount += this.selectedInvoiceProducts[0].totalQuantityNotPassed;

      this.qcService.serializedControlProduct(this.selectedInvoiceProducts[0], currentCount, this.selectedInvoiceProducts[0].totalQuantity, 'invoice', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedInvoiceProducts = [];
          this.getInvoiceProducts();
        }
      });
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
        link = `/manufacturing/orders/order/` + order.id;
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

  onStartScanning() {
    this.isScanning = true;
    this.scanningEnd = false;
  }

  onScanned(data: any) {
    this.scanningEnd = true;
    this.isScanning = false;
    this.scanForListProduct(data);
  }

  scanForListProduct(data: ScanResult = null) {
    this.invoiceService.scanInvoiceProductInQc(data, this.invoiceId).subscribe(res => {
      const foundInvoiceProduct = this.invoiceProducts.find(orderProduct =>
        orderProduct.invoiceProducts.findIndex(prod => prod.id === res.found_id) > -1);
      if (foundInvoiceProduct) {
        this.qcService.foundProductInList(foundInvoiceProduct.nomenclature).subscribe(res => {
          if (res) {
            if (data.serial_number) {
              this.foundSerialId = data.serial_number;
            }

            this.selectedInvoiceProducts = [foundInvoiceProduct];
            this.onQualityControl();
          }
        });
      }
    });
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanning = false;
  }
}
