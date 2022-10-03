import { Component, OnInit } from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {List} from '@shared/models/production-list';
import {ListService} from '@shared/services/list.service';
import {concat, last} from 'rxjs';

@Component({
  selector: 'pek-production-list-confirmation',
  templateUrl: './production-list-confirmation.component.html',
  styleUrls: ['./production-list-confirmation.component.scss']
})
export class ProductionListConfirmationComponent implements OnInit {
  isLoading = true;
  productionLists: List[] = [];
  selectedProductionLists: List[] = [];

  constructor(
    private readonly modalService: ModalService,
    private readonly listService: ListService
  ) { }

  ngOnInit(): void {
    this.getProductionLists();
  }

  getProductionLists() {
    this.listService.getProductionLists().subscribe(productionLists => {
      this.productionLists = productionLists;
      this.isLoading = false;
    });
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const confirmProductionLists = [];

        this.selectedProductionLists.forEach(productionList => {
          confirmProductionLists.push({
            id: productionList.id,
            is_confirmed: true,
          });
        });

        confirmProductionLists.sort((a, b) => a.id - b.id);

        concat(...confirmProductionLists.map(productionList => this.listService.updateList(productionList))).pipe(
          last(),
        ).subscribe(() => {
          confirmProductionLists.forEach(productionList => {
            this.productionLists = this.productionLists.filter(p => p.id !== productionList.id);
          });

          this.selectedProductionLists = [];
        });
      }
    });
  }

  onDecline() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        const declineProductionLists = [];

        this.selectedProductionLists.forEach(productionList => {
          declineProductionLists.push({
            id: productionList.id,
            is_confirmed: false,
          });
        });

        declineProductionLists.sort((a, b) => a.id - b.id);

        concat(...declineProductionLists.map(productionList => this.listService.updateList(productionList))).pipe(
          last(),
        ).subscribe(() => {
          declineProductionLists.forEach(productionList => {
            this.productionLists = this.productionLists.filter(p => p.id !== productionList.id);
          });

          this.selectedProductionLists = [];
        });
      }
    });
  }
}
