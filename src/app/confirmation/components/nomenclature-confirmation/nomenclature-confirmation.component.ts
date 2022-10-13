import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ENomenclatureApproval, NewNomenclature} from '@shared/models/nomenclature';
import {finalize, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-nomenclature-confirmation',
  templateUrl: './nomenclature-confirmation.component.html',
  styleUrls: ['./nomenclature-confirmation.component.scss']
})
export class NomenclatureConfirmationComponent implements OnInit, OnDestroy {
  nomenclatures: NewNomenclature[] = [];
  selectedNomenclatures: NewNomenclature[] = [];
  isLoading: boolean = true;

  isPendingConfirm: boolean = false;
  isPendingDecline: boolean = false;

  private destroy$ = new Subject();

  constructor(
    private readonly nomenclatureService: NomenclatureService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getNomenclatures();
  }

  getNomenclatures() {
    this.nomenclatureService.getNewNomenclatures().pipe(
      takeUntil(this.destroy$),
    ).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures;
      this.isLoading = false;
    })
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingConfirm= true;
        const confirmNomenclatures = [];

        this.selectedNomenclatures.forEach(nomenclature => {
          confirmNomenclatures.push({
            id: nomenclature.id,
            approved: ENomenclatureApproval.APPROVED
          });
        });

        this.nomenclatureService.updateSeveralPartly(confirmNomenclatures).pipe(
          finalize(() => this.isPendingConfirm = false)
        ).subscribe(() => {
          confirmNomenclatures.forEach(nomenclature => {
            this.nomenclatures = [...this.nomenclatures.filter(product => product.id !== nomenclature.id)];
          });

          this.selectedNomenclatures = [];
        });
      }
    });
  }

  onDecline() {
    this.modalService.confirm('danger', 'Decline').subscribe(decline => {
      if (decline) {
        this.isPendingDecline = true;
        const declineNomenclatures = [];

        this.selectedNomenclatures.forEach(product => {
          declineNomenclatures.push({
            id: product.id,
            approved: ENomenclatureApproval.DECLINED
          });
        });

        this.nomenclatureService.updateSeveralPartly(declineNomenclatures).pipe(
          finalize(() => this.isPendingDecline = false)
        ).subscribe(() => {
          declineNomenclatures.forEach(nomenclature => {
            this.nomenclatures = [...this.nomenclatures.filter(product => product.id !== nomenclature.id)];
          });

          this.selectedNomenclatures = [];
          this.isPendingDecline = false;
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
