import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '@shared/services/task.service';
import {Task} from '@shared/models/task';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'pek-manufacturing-split-plan',
  templateUrl: './manufacturing-split-plan.component.html',
  styleUrls: ['./manufacturing-split-plan.component.scss']
})
export class ManufacturingSplitPlanComponent implements OnInit {

  form: FormGroup = this.fb.group({
    split_as_quantities: this.fb.array([])
  });

  task: Task;
  isSaving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly taskService: TaskService,
    private dialogRef: MatDialogRef<ManufacturingSplitPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
  }

  get splitQuantities() {
    return this.form.get('split_as_quantities') as FormArray;
  }

  ngOnInit(): void {
    this.task = this.data.task;
    this.addQuantity();
  }

  close() {
    this.dialogRef.close(false);
  }

  addQuantity() {
    this.splitQuantities.push(this.fb.control(0));
  }

  onSave() {
    this.isSaving = true;
    this.taskService.splitTasks(this.form.value, this.data.task.id).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  disabled() {
    return this.splitQuantities.value.reduce((v, sum) => sum += v, 0) !== this.data.task.required_quantity;
  }

  removeQuantity(idx: number) {
    this.splitQuantities.removeAt(idx);
  }
}
