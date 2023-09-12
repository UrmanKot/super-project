import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SalesChainService} from "../../services/sales-chain-service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-edit-offer-price',
  templateUrl: './edit-offer-price.component.html',
  styleUrls: ['./edit-offer-price.component.scss']
})
export class EditOfferPriceComponent implements OnInit {
  offerId: number;
  chainId: number;
  items: any[] = [];
  isSaving = false;

  isLoading = true;

  constructor(
    private dialogRef: MatDialogRef<EditOfferPriceComponent>,
    private salesChainService: SalesChainService,
    @Inject(MAT_DIALOG_DATA) public data: { offer: any, chainId: number }
  ) {
  }

  ngOnInit(): void {
    this.offerId = this.data.offer.id;
    this.chainId = this.data.chainId;
    this.getOfferItems();
  }

  getOfferItems() {
    this.salesChainService.getOfferItems(this.offerId).subscribe(items => {
      this.items = items;
      for (const i in this.items) {
        this.items[i].price = Number(this.items[i].price).toFixed(2);
      }

      this.isLoading = false;
    })
  }

  save() {
    this.isSaving = true;
    const items = [];
    for (const item of this.items) {
      items.push({id: item.id, price: item.price});
    }
    this.salesChainService.updateOffer(this.chainId, this.offerId, items).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }
}
