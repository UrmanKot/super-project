import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {List} from '../../../warehouse/models/list';
import {ListService} from '../../../warehouse/services/list.service';
import {concat, finalize, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-production-list-confirmation',
  templateUrl: './production-list-confirmation.component.html',
  styleUrls: ['./production-list-confirmation.component.scss']
})
export class ProductionListConfirmationComponent implements OnInit, OnDestroy  {
  isLoading = true;
  productionLists: List[] = [];
  selectedProductionLists: List[] = [];

  isPendingConfirm: boolean = false;
  isPendingDecline: boolean = false;

  private destroy$ = new Subject();

  constructor(
    private readonly modalService: ModalService,
    private readonly listService: ListService
  ) {
  }

  ngOnInit(): void {
    this.getProductionLists();
  }

  getProductionLists() {
    this.listService.getProductionLists().pipe(
      takeUntil(this.destroy$),
    ).subscribe(productionLists => {
      this.productionLists = productionLists;
      this.isLoading = false;
    });
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingConfirm = true;
        const confirmProductionLists = [];

        this.selectedProductionLists.forEach(productionList => {
          confirmProductionLists.push({
            id: productionList.id,
            is_confirmed: true,
          });
        });

        confirmProductionLists.sort((a, b) => a.id - b.id);

        this.listService.updateListSeveral(confirmProductionLists).pipe(
          finalize(() => this.isPendingConfirm = false)
        ).subscribe(() => {
          confirmProductionLists.forEach(productionList => {
            this.productionLists = [...this.productionLists.filter(p => p.id !== productionList.id)];
          });

          this.selectedProductionLists = [];
        });
      }
    });
  }

  onDecline() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.isPendingDecline = true;
        const declineProductionLists = [];

        this.selectedProductionLists.forEach(productionList => {
          declineProductionLists.push({
            id: productionList.id,
            is_confirmed: false,
          });
        });

        declineProductionLists.sort((a, b) => a.id - b.id);

       this.listService.updateListSeveral(declineProductionLists).pipe(
          finalize(() => this.isPendingDecline = false)
        ).subscribe(response => {
          declineProductionLists.forEach(productionList => {
            if (response) {
              this.productionLists = [...this.productionLists.filter(p => p.id !== productionList.id)];
            }
          });

          this.selectedProductionLists = [];
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
