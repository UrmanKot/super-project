import { Component, OnInit } from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ENomenclatureApproval, NewNomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-nomenclature-confirmation',
  templateUrl: './nomenclature-confirmation.component.html',
  styleUrls: ['./nomenclature-confirmation.component.scss']
})
export class NomenclatureConfirmationComponent implements OnInit {
  nomenclatures: NewNomenclature[] = [];
  selectedNomenclatures: NewNomenclature[] = [];
  isLoading: boolean = true;

  constructor(
    private readonly nomenclatureService: NomenclatureService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getNomenclatures();
  }

  getNomenclatures() {
    this.nomenclatureService.getNewNomenclatures().subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures;
      this.isLoading = false;
    })
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const confirmNomenclatures = [];

        this.selectedNomenclatures.forEach(nomenclature => {
          confirmNomenclatures.push({
            id: nomenclature.id,
            approved: ENomenclatureApproval.APPROVED
          });
        });

        this.nomenclatureService.updateSeveralPartly(confirmNomenclatures).subscribe(() => {
          confirmNomenclatures.forEach(nomenclature => {
            this.nomenclatures = this.nomenclatures.filter(product => product.id !== nomenclature.id);
          });

          this.selectedNomenclatures = null;
        });
      }
    });
  }

  onDecline() {
    this.modalService.confirm('danger').subscribe(decline => {
      if (decline) {
        const declineNomenclatures = [];

        this.selectedNomenclatures.forEach(product => {
          declineNomenclatures.push({
            id: product.id,
            approved: ENomenclatureApproval.DECLINED
          });
        });

        this.nomenclatureService.updateSeveralPartly(declineNomenclatures).subscribe(() => {
          declineNomenclatures.forEach(nomenclature => {
            this.nomenclatures = this.nomenclatures.filter(product => product.id !== nomenclature.id);
          });

          this.selectedNomenclatures = [];
        });
      }
    });
  }
}
