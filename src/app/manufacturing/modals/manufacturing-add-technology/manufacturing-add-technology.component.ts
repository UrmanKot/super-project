import {Component, Inject, OnInit} from '@angular/core';
import {UITask} from '../../components/manufacturing-chart/manufacturing-chart.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TechnologyService} from '../../../product-structure/services/technology.service';
import {TaskService} from '@shared/services/task.service';
import {Technology} from '../../../product-structure/models/technology';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-manufacturing-add-technology',
  templateUrl: './manufacturing-add-technology.component.html',
  styleUrls: ['./manufacturing-add-technology.component.scss']
})
export class ManufacturingAddTechnologyComponent implements OnInit {
  task: UITask;
  form: FormGroup = this.fb.group({
    technology: [null, Validators.required],
    position: [null, Validators.required]
  });

  isSaving = false;
  technologies: Technology[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { task: UITask },
    private technologyService: TechnologyService,
    private readonly taskService: TaskService,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<ManufacturingAddTechnologyComponent>
  ) {
  }

  ngOnInit(): void {
    this.task = this.data.task;
    this.getTechnologies();
  }

  getTechnologies() {
    this.technologyService.get().subscribe(res => {
      this.technologies = res;
    });
  }

  onSave() {
    this.isSaving = true;
    this.taskService.addTechnologyToTask(this.task.tasks[0].id, this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
