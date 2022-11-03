import {Component, OnDestroy, OnInit} from '@angular/core';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {ModalService} from '@shared/services/modal.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ENomenclatureApproval, Nomenclature} from '@shared/models/nomenclature';
import {finalize, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-write-off-confirmation',
  templateUrl: './write-off-confirmation.component.html',
  styleUrls: ['./write-off-confirmation.component.scss']
})
export class WriteOffConfirmationComponent implements OnInit, OnDestroy {
  warehouseProducts: WarehouseProduct[] = [];
  selectedWarehouseProducts: WarehouseProduct[] = [];
  isLoading = true;

  isPendingConfirm: boolean = false;
  isPendingDecline: boolean = false;

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseProductService: WarehouseProductService,
    private readonly nomenclatureService: NomenclatureService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.warehouseProductService.get([{name: 'to_write_off', value: true}]).pipe(
      takeUntil(this.destroy$),
    ).subscribe(warehouseProducts => {
      this.warehouseProducts = warehouseProducts;
      this.isLoading = false;
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
}
