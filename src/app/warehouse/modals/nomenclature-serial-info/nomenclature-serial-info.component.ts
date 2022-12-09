import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router, UrlTree} from '@angular/router';
import {WarehouseProductExtraInfo} from '../../models/warehouse-product';
import {Nomenclature} from '@shared/models/nomenclature';
import {environment} from '@env/environment.prod';

@Component({
  selector: 'pek-nomenclature-serial-info',
  templateUrl: './nomenclature-serial-info.component.html',
  styleUrls: ['./nomenclature-serial-info.component.scss']
})
export class NomenclatureSerialInfoComponent implements OnInit {

  link = environment.link_url;

  constructor(
    private dialogRef: MatDialogRef<NomenclatureSerialInfoComponent>,
    private readonly router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {extraInfo: WarehouseProductExtraInfo[], nomenclature: Nomenclature},
  ) { }

  ngOnInit(): void {
  }

  protocolInfo(protocolId: number, serial: string, warehouseproductqcprotocol: number) {
  }

  goToOrder(orderType: number, orderId: number) {
    let url: UrlTree = null;

    switch (orderType) {
      case 3: {
        url = this.router.createUrlTree(['dash', 'production', 'orders', 'order', orderId]);
        break;
      }
      case 2: {
        url = this.router.createUrlTree(['dash', 'outsource', 'outsource-chain', 'products', orderId]);
        break;
      }
      case 1: {
        url = this.router.createUrlTree(['dash', 'procurement', 'orders', 'products', orderId]);
        break;
      }
    }

    if (url) window.open(this.link.slice(0, -1) + url.toString(), '_blank');
  }

  goToInvoice(invoiceId: number) {
    const url = this.router.createUrlTree(['dash', 'accounting', 'invoices', 'products', invoiceId]);
    window.open(url.toString(), '_blank');
  }

}
