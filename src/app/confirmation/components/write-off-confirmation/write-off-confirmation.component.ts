import { Component, OnInit } from '@angular/core';
import {WarehouseProduct} from '@shared/models/warehouse-product';
import {WarehouseProductService} from '@shared/services/warehouse-product.service';
import {ModalService} from '@shared/services/modal.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ENomenclatureApproval, Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-write-off-confirmation',
  templateUrl: './write-off-confirmation.component.html',
  styleUrls: ['./write-off-confirmation.component.scss']
})
export class WriteOffConfirmationComponent implements OnInit {
  warehouseProducts: WarehouseProduct[] = [];
  selectedWarehouseProducts: WarehouseProduct[] = [];
  isLoading = true;

  constructor(
    private readonly warehouseProductService: WarehouseProductService,
    private readonly nomenclatureService: NomenclatureService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.warehouseProductService.get([{name: 'to_write_off', value: true}]).subscribe(warehouseProducts => {
      this.warehouseProducts = warehouseProducts;
      this.isLoading = false;
    });
  }

  onDecline() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        const declineNomenclatures: Partial<Nomenclature>[] = [];

        this.warehouseProducts.forEach(product => {
          declineNomenclatures.push({
            id: product.id,
            approved: ENomenclatureApproval.DECLINED
          });
        });

        this.nomenclatureService.updateSeveralPartly(declineNomenclatures).subscribe(() => {
          declineNomenclatures.forEach(nomenclature => {
            this.warehouseProducts = this.warehouseProducts.filter(product => product.id !== nomenclature.id);
          });

          this.selectedWarehouseProducts = null;
        });
      }
    });
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const ids: number[] = [];

        this.selectedWarehouseProducts.forEach(product => ids.push(product.id));
        this.warehouseProductService.severalWriteOff(ids).subscribe(() => {
          ids.forEach(id => this.warehouseProducts = this.warehouseProducts.filter(product => product.id !== id));
          this.selectedWarehouseProducts = [];
        });
      }
    });
  }
}
