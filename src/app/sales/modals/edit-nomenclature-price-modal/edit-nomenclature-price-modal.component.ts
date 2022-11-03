import {Component, Inject, OnInit} from '@angular/core';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-edit-nomenclature-price-modal',
  templateUrl: './edit-nomenclature-price-modal.component.html',
  styleUrls: ['./edit-nomenclature-price-modal.component.scss']
})
export class EditNomenclaturePriceModalComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA) private nomenclature: Nomenclature,
    private dialogRef: MatDialogRef<EditNomenclaturePriceModalComponent>,
    private nomenclatureService: NomenclatureService,
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    const data: Partial<Nomenclature> = {
      id: this.nomenclature.id,
      price: this.nomenclature.price,
    }
    this.nomenclatureService.updatePartly(data).subscribe();
    this.dialogRef.close();
  }

}
