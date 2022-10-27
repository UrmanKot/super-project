import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListService} from '../../services/list.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-set-production-list-locator',
  templateUrl: './set-production-list-locator.component.html',
  styleUrls: ['./set-production-list-locator.component.scss']
})
export class SetProductionListLocatorComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    id: [null, Validators.required],
    locator: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<SetProductionListLocatorComponent>,
    private readonly listService: ListService,
    @Inject(MAT_DIALOG_DATA) public listId: number,
  ) {
  }

  ngOnInit(): void {
    this.form.get('id').patchValue(<any>this.listId);
  }

  setLocator() {
    this.isSaving = true;
    this.listService.updatePartly(this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(response => {
      if (response) {
        this.dialogRef.close(true);
      }
    });
  }

  selectLocator(id: number) {
    this.form.get('locator').patchValue(<any>id);
  }
}
