import {Component, OnInit} from '@angular/core';
import {environment} from '@env/environment';
import {Order} from '../../../procurement/models/order';
import {filter, map, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../procurement/services/order.service';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {OrderProduct} from '../../../procurement/models/order-product';
import {ModalService} from '@shared/services/modal.service';
import {AlbumService} from '@shared/services/album.service';
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {QcService} from '../../services/qc.service';
import {deepCopy} from 'deep-copy-ts';
import {EInvoiceProductQualityControl} from '../../../procurement/models/invoice-product';
import {forkJoin} from 'rxjs';
import {ScanResult} from '../../../qr-code/models/scan-result';
import {untilDestroyed} from '@ngneat/until-destroy';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-qc-order',
  templateUrl: './qc-order.component.html',
  styleUrls: ['./qc-order.component.scss']
})
export class QcOrderComponent implements OnInit {
  link = environment.link_url + 'dash/';

  order: Order;
  orderId: number;
  isLoadingTechnicalEquipment = true;
  isLoading = true;
  isLoadingProducts = true;

  isGenerating = false;
  isReworking = false;
  isCompletingProducts = false;
  isCompleting = false;
  isReworkingProduct = false;

  selectedOrderProducts: OrderProduct[] = [];
  orderProducts: OrderProduct[] = [];

  technicalEquipments: OrderTechnicalEquipment[] = [];
  selectedTechnicalEquipment: OrderTechnicalEquipment;

  orderCanBeCompleted = false;

  isScanning = false;
  scanningEnd: boolean;
  foundSerialId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private readonly orderProductService: OrderProductService,
    private readonly modalService: ModalService,
    public readonly albumService: AlbumService,
    private readonly qrCodeService: QrCodeService,
    private readonly qcService: QcService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
      tap(() => this.getOrder()),
      tap(() => this.getOrderProducts()),
    ).subscribe();
  }

  getOrder() {
    this.orderService.getById(this.orderId).pipe(
      tap(order => this.order = order),
      tap(() => this.getTechnicalEquipmentToQc()),
      tap(() => this.isLoading = false)
    ).subscribe();
  }

  getTechnicalEquipmentToQc() {
    this.technicalEquipments = [];
    this.isLoadingTechnicalEquipment = true;

    this.orderProductService.getTechnicalEquipmentToQC(this.orderId).pipe(
      tap(equipment => this.technicalEquipments = equipment),
      tap(() => this.isLoadingTechnicalEquipment = false)
    ).subscribe();
  }

  getOrderProducts() {
    this.orderProducts = [];
    this.selectedOrderProducts = [];
    this.isLoadingProducts = true;

    this.orderProductService.getQc(this.orderId).pipe(
      tap(products => {
        products.forEach(product => {
          const technologyId = product.current_technology?.id;
          const nomenclatureId = product.nomenclature.id;
          const existing = this.orderProducts.find(el =>
            el.nomenclature.id === nomenclatureId &&
            el.current_technology?.id === technologyId);
          if (existing) {
            existing.totalQuantity = existing.totalQuantity += product.quantity;
            existing.totalQuantityPassed = existing.totalQuantityPassed += product.passed_quantity;
            existing.totalQuantityNotPassed = existing.totalQuantityNotPassed += product.not_passed_quantity;
            existing.totalSerialNumbers.push(...product.serial_numbers);
            existing.orderProducts.push(product);
          } else {
            product.orderProducts = [deepCopy(product)];
            product.totalQuantity = product.quantity;
            product.totalQuantityPassed = product.passed_quantity;
            product.totalQuantityNotPassed = product.not_passed_quantity;
            product.totalSerialNumbers = [...product.serial_numbers];
            this.orderProducts.push(product);
          }
        });
        this.orderProducts.forEach(product => {
          if (product.totalQuantityPassed === product.totalQuantity) {
            product.quality_control = EInvoiceProductQualityControl.PASSED;
          } else if (product.totalQuantityNotPassed === product.totalQuantity) {
            product.quality_control = EInvoiceProductQualityControl.NOT_PASSED;
          } else if (product.totalQuantityNotPassed + product.totalQuantityPassed === product.totalQuantity) {
            product.quality_control = EInvoiceProductQualityControl.PARTLY_PASSED;
          }
        });
        this.orderProducts = [...this.orderProducts];
      }),
      tap(products => this.orderCanBeCompleted = Boolean(products.find(p => p.quality_control))),
      tap(() => this.isLoadingProducts = false)
    ).subscribe();
  }

  onPrintAlbum() {
    const nomenclatures: Nomenclature[] = [];
    if (this.selectedOrderProducts.length > 0) {
      nomenclatures.push(...this.selectedOrderProducts.map(p => p?.nomenclature));
    }
    if (this.selectedTechnicalEquipment) {
      nomenclatures.push(this.selectedTechnicalEquipment.nomenclature as Nomenclature);
    }
    this.albumService.getNomenclaturesImages(nomenclatures);
  }

  goToOrder() {
    let link: string;
    const order = this.order;

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


  onCompleteItems() {
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      const send = [];
      const sendProducts = [];
      this.selectedOrderProducts.forEach(product => {
        const products = product.orderProducts.filter(p => !p.nomenclature.qc_protocol && p.nomenclature.bulk_or_serial === '0');
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
      this.orderProductService.severalUpdatePartly(send).pipe(
        tap(() => this.getOrderProducts()),
        tap(() => this.isCompletingProducts = false)
      ).subscribe();
    });
  }

  onComplete() {
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      const send = {id: this.order.id, qc_completed: true};
      this.isCompleting = true;
      this.orderService.updatePartly(send).subscribe(() => {
        this.isCompleting = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      });
    });
  }

  onGenerateQrCodes() {
    this.isGenerating = true;

    const send = {
      by_nomenclatures_list: [],
    };

    this.selectedOrderProducts.forEach(product => {
      product.orderProducts.forEach(p => {
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

    if (this.selectedTechnicalEquipment) {
      const exists = send.by_nomenclatures_list.findIndex(el => el.nomenclature_id === (this.selectedTechnicalEquipment.nomenclature as Nomenclature).id) >= 0;
      if (!exists) {
        send.by_nomenclatures_list.push({
          nomenclature_id: (this.selectedTechnicalEquipment.nomenclature as Nomenclature).id,
          serial_number_ids: [],
          order_product_ids: [],
          invoice_product_ids: [],
        });
      }
    }
    this.qrCodeService.generateQrCodes(send, this.order.id).subscribe(() => this.isGenerating = false);
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedOrderProducts[0].nomenclature.id, 1).subscribe();
  }

  onQualityControl() {
    if (this.selectedOrderProducts[0].nomenclature.qc_protocol && this.selectedOrderProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;

      if (this.selectedOrderProducts[0].passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityPassed;
      if (this.selectedOrderProducts[0].not_passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityNotPassed;

      this.qcService.withProtocolControlProduct(this.selectedOrderProducts[0], currentCount, this.selectedOrderProducts[0].totalQuantity, 'order', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedOrderProducts = [];
          this.getOrderProducts();
        }
      });
    } else if (!this.selectedOrderProducts[0].nomenclature.qc_protocol && this.selectedOrderProducts[0].nomenclature.bulk_or_serial === '1') {
      let currentCount = 1;

      if (this.selectedOrderProducts[0].passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityPassed;
      if (this.selectedOrderProducts[0].not_passed_quantity) currentCount += this.selectedOrderProducts[0].totalQuantityNotPassed;

      this.qcService.serializedControlProduct(this.selectedOrderProducts[0], currentCount, this.selectedOrderProducts[0].totalQuantity, 'order', this.foundSerialId).subscribe(res => {
        if (res) {
          this.selectedOrderProducts = [];
          this.getOrderProducts();
        }
      });
    } else {
      this.qcService.controlProduct(this.selectedOrderProducts[0], true).subscribe((res) => {
        if (res) {
          this.getOrderProducts();
          this.selectedOrderProducts = [];
        }
      });
    }
  }

  onRework() {
    this.modalService.confirm('danger', 'Confirm').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.isReworking = true;
      const ids = [];
      this.orderProducts.forEach(p => {
        ids.push(...p.orderProducts.map(order => order.id));
      });

      this.orderProductService.reworkOrder(ids).subscribe(() => {
        this.isReworking = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      });
    });
  }

  onReworkProduct() {
    this.modalService.confirm('danger', 'Confirm').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.isReworkingProduct = true;
      const ids = [];
      const productsIds = [];
      const calls = [];
      this.selectedOrderProducts.forEach(p => {
        productsIds.push(p.id);
        ids.push(...p.orderProducts.map(order => order.id));
      });

      ids.forEach(id => {
        calls.push(this.orderProductService.reworkOrderProduct(id));
      });

      forkJoin([...calls]).subscribe(() => {
        productsIds.forEach(id => {
          const index = this.orderProducts.findIndex(o => o.id === id);
          this.orderProducts.splice(index, 1);
        });
        if (this.orderProducts.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
          return;
        }
        this.selectedOrderProducts = [];
        this.isReworkingProduct = false;
      });

      // this.orderProductService.reworkOrderProduct(this.selectedOrderProducts[0].id).subscribe(() => {
      //   const index = this.orderProducts.findIndex(o => o.id === this.selectedOrderProducts[0].id);
      //   this.orderProducts.splice(index, 1);
      //   if (this.orderProducts.length === 0) {
      //     this.router.navigate(['../../'], {relativeTo: this.route});
      //     return;
      //   }
      //   this.selectedOrderProducts = [];
      //   this.isReworkingProduct = false;
      // });
    });
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
    this.orderService.scanOrderProductInQc(data, this.orderId).subscribe(res => {
      const foundOrderProduct = this.orderProducts.find(orderProduct => orderProduct.orderProducts.findIndex(prod => prod.id === res.found_id) > -1);
      if (foundOrderProduct) {
        this.qcService.foundProductInList(foundOrderProduct.nomenclature).subscribe(res => {
          if (res) {
            if (data.serial_number) {
              this.foundSerialId = data.serial_number;
            }
            this.selectedOrderProducts = [foundOrderProduct];
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
