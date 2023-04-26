import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {UITask} from '../../components/manufacturing-chart/manufacturing-chart.component';
import {Employee} from '@shared/models/employee';
import {Machine} from '../../models/machine';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '@shared/services/task.service';
import {EmployeeService} from '@shared/services/employee.service';
import {MachineService} from '../../services/machine.service';
import {Task} from '@shared/models/task';
import {concat, finalize, Observable} from 'rxjs';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {ShiftTypes} from '../../enums/shift-types.enum';

@Component({
  selector: 'pek-manufacturing-tasks-edit',
  templateUrl: './manufacturing-tasks-edit.component.html',
  styleUrls: ['./manufacturing-tasks-edit.component.scss']
})
export class ManufacturingTasksEditComponent implements OnInit {
  form = this.fb.group({
    time: this.fb.group({
      /** Date */
      start: [new Date(), Validators.required],
      /** Date */
      end: [new Date(), Validators.required],
      /** Hours */
      ttc: [0],
    }),
    production: this.fb.group({
      /** '0' -outsource, 1 - own */
      production: [<any>'1'],
      /** id of manufacturer */
      employees: this.fb.array([
        this.fb.group({
          employee: [null, Validators.required],
          ttc: [0, Validators.required],
          startDate: [<any>null, Validators.required],
        }),
      ]),
      machines: this.fb.array([
        this.fb.group({
          machine: [null, Validators.required],
          ttc: [0, Validators.required],
          startDate: [<any>null, Validators.required],
        }),
      ]),
    }),
    flags: this.fb.group({
      isLocked: [false],
    }),
    shiftBy: this.fb.group(({
      amount: [],
      type: []
    }))
  });

  tasks: UITask[] = [];

  // Подсветка раздела
  isHighlightTime = false;
  isHighlightProduction = false;
  isHighlightFlags = false;
  isHighlightShiftBy = false;

  employees: Employee[] = [];
  machines: Machine[] = [];

  isTTCUpdated = false;
  isEndUpdated = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { tasks: UITask[] },
    private dialogRef: MatDialogRef<ManufacturingTasksEditComponent>,
    private tasksService: TaskService,
    private employeesService: EmployeeService,
    private machinesService: MachineService,
  ) {
  }

  get applyTime(): boolean {
    return this.form.get('time').enabled;
  }

  set applyTime(value: boolean) {
    // this.form.get('time').reset();
    if (value) {
      this.form.get('time').enable();
    } else {
      this.form.get('time').disable();
    }
  }

  get applyProduction(): boolean {
    return this.form.get('production').enabled;
  }

  set applyProduction(value: boolean) {
    // this.form.get('production').reset();
    if (value) this.form.get('production').enable();
    else this.form.get('production').disable();
  }

  get applyFlags(): boolean {
    return this.form.get('flags').enabled;
  }

  set applyFlags(value: boolean) {
    // this.form.get('flags').reset();
    if (value) {
      this.form.get('flags').enable();
    } else {
      this.form.get('flags').disable();
    }
  }

  get applyShiftBy(): boolean {
    return this.form.get('shiftBy').enabled;
  }

  set applyShiftBy(value: boolean) {
    if (value) {
      this.form.get('shiftBy').enable();
    } else {
      this.form.get('shiftBy').disable();
    }
  }

  get executors() {
    return this.form.get('production').get('employees') as FormArray;
  }

  get exeMachines() {
    return this.form.get('production').get('machines') as FormArray;
  }

  get taskDurationInMinutes(): number {
    return this.form.get('time').get('ttc').value * 60;
  }

  set taskDurationInMinutes(value: number) {
    this.form.get('time').get('ttc').setValue(value / 60);
  }

  ngOnInit(): void {
    this.form.disable();
    this.data.tasks.forEach(task => this.tasks.push(task));
    this.initDates();
    this.getData();
  }

  getData(): void {
    this.employeesService.get().subscribe(employees => {
      this.employees = employees.map(employee => {
        return {
          ...employee,
          fullName: `${employee.first_name} ${employee.last_name}`,
        };
      });
    });

    this.machinesService.get().subscribe(machines => this.machines = machines);
  }

  save(): void {
    // Отправляем запрос с данными заказа на бэк
    const sentRequests: Array<Observable<any>> = [];
    this.isSaving = true;

    this.tasks.forEach(task => {

      this.applyFormToTask(task);
      const data = this.getTaskData(task);

      sentRequests.push(this.tasksService.update(task, data));
    });
    concat(...sentRequests).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe();

    this.dialogRef.close({
      start: this.form.get('time').enabled ? this.form.get('time').get('start').value : null,
      end: this.form.get('time').enabled ? this.form.get('time').get('end').value : null,
      shiftByAmount: this.form.get('shiftBy').enabled ? this.form.get('shiftBy').get('amount').value : null,
      shiftByType: this.form.get('shiftBy').enabled ? this.form.get('shiftBy').get('type').value : null,
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  getNewDateFromCalendar() {
    this.form.get('time').get('ttc').setValue(((this.form.get('time').get('end').value).getTime() - (this.form.get('time').get('start').value).getTime()) / 60 / 1000);
    this.isTTCUpdated = true;

    setTimeout(() => {
      this.isTTCUpdated = false;
    }, 1000);
  }

  getNewDateFromInput() {
    this.form.get('time').get('end').setValue(new Date((this.form.get('time').get('start').value).getTime() + (this.form.get('time').get('ttc').value * 60 * 1000)));
    this.isEndUpdated = true;

    setTimeout(() => {
      this.isEndUpdated = false;
    }, 1000);
  }

  addExecutor() {
    (this.form.get('production').get('employees') as FormArray).push(this.fb.group({
      employee: [null, Validators.required],
      ttc: [0, Validators.required],
      startDate: [null, Validators.required],
    }));
  }

  removeExecutor(index: number) {
    (this.form.get('production').get('employees') as FormArray).removeAt(index);
  }

  addExecutionMachine() {
    (this.form.get('production').get('machines') as FormArray).push(this.fb.group({
      machine: [null, Validators.required],
      ttc: [0, Validators.required],
      startDate: [null, Validators.required],
    }));
  }

  removeExecutionMachine(index: number) {
    (this.form.get('production').get('machines') as FormArray).removeAt(index);
  }

  private initDates() {
    this.form.get('time').get('start').setValue(new Date(Math.min(...this.tasks.map(task => task.start_date.getTime()))));
    this.form.get('time').get('end').setValue(new Date(Math.max(...this.tasks.map(task => task.end_date.getTime()))));
    this.form.get('time').get('ttc').setValue(((this.form.get('time').get('end').value).getTime() - (this.form.get('time').get('start').value).getTime()) / 1000 / 60);
  }

  private applyFormToTask(task: Task) {
    if (
      this.form.get('time').enabled
      // не меняем даты покупаемых изделий т.к. их даты проставляются в покупках
      && task.list_product.nomenclature.type !== ENomenclatureType.PURCHASED
    ) {
      task.start_date = this.form.get('time').get('start').value;
      task.end_date = this.form.get('time').get('end').value;
      task.duration = this.taskDurationInMinutes / 60;
    }

    if (this.form.get('production').enabled) {
      task.production_type = this.form.get('production').get('production').value;

      task.employees = <any>this.form.get('production').get('employees').value.map(employeeGroup => ({
        employee: employeeGroup.employee,
        duration: employeeGroup.ttc,
        start: employeeGroup.startDate,
        end: employeeGroup.employee ? new Date(employeeGroup.startDate.getTime() + employeeGroup.ttc * 60 * 1000) : null,
      })).filter(emp => emp.employee);

      task.machines = <any>this.form.get('production').get('machines').value.map(machineGroup => ({
        machine: machineGroup.machine,
        duration: machineGroup.ttc,
        start: machineGroup.startDate,
        end: machineGroup.machine ? new Date(machineGroup.startDate.getTime() + machineGroup.ttc * 60 * 1000) : null,
      })).filter(m => m.machine);
    }

    if (this.form.get('shiftBy').enabled && task.list_product.nomenclature.type !== ENomenclatureType.PURCHASED) {
      const shiftAmount = this.form.get('shiftBy').get('amount').value;
      const shiftType = this.form.get('shiftBy').get('type').value;

      const startDate = new Date(task.start_date);
      const endDate = new Date(task.end_date);

      if (shiftType === ShiftTypes.DAYS) {
        task.start_date = new Date(startDate.setDate(startDate.getDate() + shiftAmount));
        task.end_date = new Date(endDate.setDate(endDate.getDate() + shiftAmount));
      }

      if (shiftType === ShiftTypes.HOURS) {
        task.start_date = new Date(startDate.setHours(startDate.getHours() + shiftAmount));
        task.end_date = new Date(endDate.setHours(endDate.getHours() + shiftAmount));
      }

      if (shiftType === ShiftTypes.WEEKS) {
        task.start_date = new Date(startDate.setDate(startDate.getDate() + shiftAmount * 7));
        task.end_date = new Date(endDate.setDate(endDate.getDate() + shiftAmount * 7));
      }

      if (shiftType === ShiftTypes.MONTHS) {
        task.start_date = new Date(startDate.setMonth(startDate.getMonth() + shiftAmount));
        task.end_date = new Date(endDate.setMonth(endDate.getMonth() + shiftAmount));
      }
    }
  }

  private getTaskData(task: Task): Partial<Task> {

    const data: Partial<Task> = {
      id: task.id,
    };

    // if (this.form.get('time').enabled) {
    //   data.start_date = task.start_date;
    //   data.end_date = task.end_date;
    // }

    if (this.form.get('production').enabled) {
      data.production_type = task.production_type;

      data.employees = task.employees.filter(emp => emp.employee);
      data.machines = task.machines.filter(m => m.machine);
    }

    if (this.form.get('flags').enabled) {
      data.is_locked = task.is_locked;
      // data.is_planned = task.is_planned;
    }

    return data;
  }

  showError() {
    if (this.form.get('time').get('start').value.getTime() > this.form.get('time').get('end').value.getTime()) {
      return true;
    }
  }

  showErrorShiftBy() {
    if (this.form.get('shiftBy').enabled && (!this.form.get('shiftBy').get('amount').value || !this.form.get('shiftBy').get('type').value)) {
      return true;
    }
  }

  typeChanged() {

  }

}
