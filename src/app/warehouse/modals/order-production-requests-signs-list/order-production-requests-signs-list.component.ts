import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProductionRequestSignatureService} from '../../services/order-production-request-signature.service';
import {ModalService} from '@shared/services/modal.service';
import {OrderProductionRequestSignature} from '../../models/order-production-request-signature';
import {AdapterService} from '@shared/services/adapter.service';

@Component({
  selector: 'pek-order-production-requests-signs-list',
  templateUrl: './order-production-requests-signs-list.component.html',
  styleUrls: ['./order-production-requests-signs-list.component.scss']
})
export class OrderProductionRequestsSignsListComponent implements OnInit {
  orderProductionSignatures: OrderProductionRequestSignature[] = [];

  constructor(
    private adapterService: AdapterService,
    private readonly modalService: ModalService,
    private dialogRef: MatDialogRef<OrderProductionRequestsSignsListComponent>,
    private readonly orderProductionSignatureService: OrderProductionRequestSignatureService,
    @Inject(MAT_DIALOG_DATA) public data: {orderId: number},
  ) { }

  ngOnInit(): void {
    this.getSignatures();
  }

  getSignatures() {
    this.orderProductionSignatureService.get([{name: 'order_id', value: this.data.orderId}]).subscribe(res => {
      this.orderProductionSignatures = res;
    });
  }

  signRequest() {
    this.modalService.signDocument().subscribe(res => {
      if (res) {
        this.orderProductionSignatureService.sign({
          signature: res.result.signature,
          full_name: res.result.fullName,
          order: +this.data.orderId
        }).subscribe(res => {
          this.getSignatures();
        });
      }
    });
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  deleteOrderSignature(id) {

  }

  downloadFile(signature: OrderProductionRequestSignature) {
    this.orderProductionSignatureService.download_file(signature.id).subscribe(response => {
      const filename = this.getName(signature.signature);
      this.adapterService.downloadFile(filename, response);
    });
  }
}
