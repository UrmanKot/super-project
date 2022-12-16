import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {ExpenseService} from '../../services/expense.service';

@Component({
  selector: 'pek-create-update-expense',
  templateUrl: './create-update-expense.component.html',
  styleUrls: ['./create-update-expense.component.scss']
})
export class CreateUpdateExpenseComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CreateUpdateExpenseComponent>,
    fb: FormBuilder,
    private expensesService: ExpenseService,
    @Inject(MAT_DIALOG_DATA) public data: {type: 'edit' | 'add', entity}
  ) {
    this.form = fb.group({
      name: [null , [Validators.required]],
      description: ['']
    });

    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.entity);
    }
  }

  ngOnInit(): void {}


  addExpense() {
    if (this.form.valid) {
      this.expensesService
        .create(this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.dialogRef.close(res);
        });
    }
  }

  editExpense() {
    if (this.form.valid) {
      this.form.value.id = this.data.entity.id;
      this.expensesService
        .update( this.form.value.id, this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.dialogRef.close(res);
        });
    }
  }
}
