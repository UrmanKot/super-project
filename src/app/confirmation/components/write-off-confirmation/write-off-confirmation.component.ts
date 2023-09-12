import {Component, OnDestroy, OnInit} from '@angular/core';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {ModalService} from '@shared/services/modal.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ENomenclatureApproval, Nomenclature} from '@shared/models/nomenclature';
import {finalize, Subject, takeUntil} from 'rxjs';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {OrderProduct} from '../../../procurement/models/order-product';

@Component({
  selector: 'pek-write-off-confirmation',
  templateUrl: './write-off-confirmation.component.html',
  styleUrls: ['./write-off-confirmation.component.scss']
})
export class WriteOffConfirmationComponent implements OnInit, OnDestroy {
  warehouseProducts: WarehouseProduct[] = [];
  selectedWarehouseProducts: WarehouseProduct[] = [];
  isLoadingOrderProducts = true;
  isLoadingInvoiceProducts = true;

  isPendingInvoiceProductsConfirm: boolean = false;
  isPendingInvoiceProductsDecline: boolean = false;

  isPendingOrderProductsConfirm: boolean = false;
  isPendingOrderProductsDecline: boolean = false;

  isPendingConfirm: boolean = false;
  isPendingDecline: boolean = false;

  invoiceProducts: InvoiceProduct[] = [];
  orderProducts: OrderProduct[] = [];

  private destroy$ = new Subject();
  selectedInvoiceProducts: InvoiceProduct[] = [];
  selectedOrderProducts: OrderProduct[] = [];

  constructor(
    private readonly warehouseProductService: WarehouseProductService,
    private readonly orderProductService: OrderProductService,
    private readonly invoiceProductService: InvoiceProductService,
    private readonly nomenclatureService: NomenclatureService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.loadOrderProducts();
    this.loadInvoiceProducts();
  }

  loadOrderProducts() {
    this.isLoadingOrderProducts = true;
    this.orderProducts = [];
    this.orderProductService.get([{name: 'to_write_off', value: true}])
      .pipe(takeUntil(this.destroy$))
      .subscribe(orderProducts => {
        this.orderProducts = orderProducts;
        this.isLoadingOrderProducts = false;
      });
  }

  loadInvoiceProducts() {
    this.isLoadingOrderProducts = true;
    this.invoiceProducts = [];
    this.invoiceProductService.get([{name: 'to_write_off', value: true}]).pipe(
      takeUntil(this.destroy$))
      .subscribe(invoiceProducts => {
        this.invoiceProducts = invoiceProducts;
        this.isLoadingInvoiceProducts = false;
      });
  }

  onDecline() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.isPendingDecline = true;
        const declineNomenclatures: Partial<Nomenclature>[] = [];

        this.selectedWarehouseProducts.forEach(product => {
          declineNomenclatures.push({
            id: product.id,
            approved: ENomenclatureApproval.DECLINED
          });
        });

        this.nomenclatureService.updateSeveralPartly(declineNomenclatures).pipe(
          finalize(() => this.isPendingDecline = false)
        ).subscribe(() => {
          declineNomenclatures.forEach(nomenclature => {
            this.warehouseProducts = [...this.warehouseProducts.filter(product => product.id !== nomenclature.id)];
          });

          this.selectedWarehouseProducts = [];
        });
      }
    });
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingConfirm = true;
        const ids: number[] = [];

        this.selectedWarehouseProducts.forEach(product => ids.push(product.id));

        this.warehouseProductService.severalWriteOff(ids).pipe(
          finalize(() => this.isPendingConfirm = false)
        ).subscribe(() => {
          ids.forEach(id => this.warehouseProducts = [...this.warehouseProducts.filter(product => product.id !== id)]);
          this.selectedWarehouseProducts = [];
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onDeclineInvoiceProducts() {

  }

  onConfirmInvoiceProducts() {
    const ids = this.selectedInvoiceProducts.map(p => p.id);
    this.isPendingInvoiceProductsConfirm = true;

    this.invoiceProductService.severalWriteOff(ids).pipe(
      finalize(() => this.isPendingInvoiceProductsConfirm = false),
    ).subscribe(() => {
      ids.forEach(id => {
        const index = this.invoiceProducts.findIndex(p => p.id === id);
        this.invoiceProducts.splice(index, 1);
      });

      this.selectedInvoiceProducts = [];
    });
  }

  onDeclineOrderProducts() {

  }

  onConfirmOrderProducts() {
    const ids = this.selectedOrderProducts.map(p => p.id);
    this.isPendingOrderProductsConfirm = true;

    this.orderProductService.severalWriteOff(ids).pipe(
      finalize(() => this.isPendingOrderProductsConfirm = false),
    ).subscribe(() => {
      ids.forEach(id => {
        const index = this.orderProducts.findIndex(p => p.id === id);
        this.orderProducts.splice(index, 1);
      });

      this.selectedOrderProducts = [];
    });
  }
}
