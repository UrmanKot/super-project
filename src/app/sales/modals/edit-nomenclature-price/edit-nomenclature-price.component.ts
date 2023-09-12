import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NomenclatureService} from "@shared/services/nomenclature.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Nomenclature} from "@shared/models/nomenclature";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-edit-nomenclature-price',
  templateUrl: './edit-nomenclature-price.component.html',
  styleUrls: ['./edit-nomenclature-price.component.scss']
})
export class EditNomenclaturePriceComponent implements OnInit {

  form: FormGroup = this.fb.group({
    id: [null],
    price: [null]
  });

  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private nomenclatureService: NomenclatureService,
    @Inject(MAT_DIALOG_DATA) public data: { nomenclature: Nomenclature },
    private dialogRef: MatDialogRef<EditNomenclaturePriceComponent>
  ) {
  }

  ngOnInit(): void {
    this.form.get('id').patchValue(this.data.nomenclature.id);
    this.form.get('price').patchValue(this.data.nomenclature.price);
  }

  onSave() {
    this.isSaving = true;
    this.nomenclatureService.updatePartly(this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }
}
