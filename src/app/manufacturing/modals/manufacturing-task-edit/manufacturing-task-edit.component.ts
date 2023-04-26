import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {TTCDisplayType} from '@shared/models/task';
import {UITask} from '../../components/manufacturing-chart/manufacturing-chart.component';
import {Employee} from '@shared/models/employee';
import {Company} from '../../../crm/models/company';
import {Machine} from '../../models/machine';
import {SerialNumber} from '../../../procurement/models/invoice';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router, UrlTree} from '@angular/router';
import {TaskService} from '@shared/services/task.service';
import {EmployeeService} from '@shared/services/employee.service';
import {CompanyService} from '../../../crm/services/company.service';
import {ModalService} from '@shared/services/modal.service';
import {MachineService} from '../../services/machine.service';
import {AdapterService} from '@shared/services/adapter.service';
import {PlanningStatus} from '../../enums/planning-status.enum';
import {Task} from '@shared/models/task';
import {environment} from '@env/environment';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-manufacturing-task-edit',
  templateUrl: './manufacturing-task-edit.component.html',
  styleUrls: ['./manufacturing-task-edit.component.scss']
})
export class ManufacturingTaskEditComponent implements OnInit {
  form = this.fb.group({
    start: [new Date(), Validators.required],
    end: [new Date(), Validators.required],
    ttc: [0],
    ttc_display_type: [TTCDisplayType.MINUTES],
    production: ['1'],
    manufacturer: [null],
    employees: this.fb.array([
      this.fb.group({
        employee: [null, Validators.required],
        ttc: [0, Validators.required],
        startDate: [<any>null, Validators.required],
        ttc_display_type: [null, Validators.required],
      }),
    ]),
    machines: this.fb.array([
      this.fb.group({
        machine: [null, Validators.required],
        ttc: [0, Validators.required],
        startDate: [<any>null, Validators.required],
        ttc_display_type: [null, Validators.required],
      }),
    ]),
    isLocked: [false],
  });

  isDeleting = false;
  isSaving = false;

  status = '';

  isTTCUpdated = false;
  isEndUpdated = false;

  currentTaskIndex: number;

  task: UITask;
  employees: Employee[];
  manufacturers: Company[];
  machines: Machine[];

  reservedSerialNumbers: SerialNumber[] = [];
  futureSerialNumbers: SerialNumber[] = [];
  ttcIn = 'hours';

  get executors() {
    return this.form.get('employees') as FormArray;
  }

  get exeMachines() {
    return this.form.get('machines') as FormArray;
  }

  constructor(
    private dialogRef: MatDialogRef<ManufacturingTaskEditComponent>,
    private fb: FormBuilder,
    private router: Router,
    private tasksService: TaskService,
    private employeesService: EmployeeService,
    private companiesService: CompanyService,
    private modalService: ModalService,
    private machinesService: MachineService,
    @Inject(MAT_DIALOG_DATA) public data: { task: any, tasks: UITask[], rootTask: Task },
    private adapterService: AdapterService
  ) {
  }

  ngOnInit(): void {
    this.task = this.data.task;

    this.prepareDetailedStatus();

    this.data.tasks.forEach(task => {
      task.tasks.forEach(innerTask => {
        if (innerTask.serial_numbers.length > 0) {
          innerTask.serial_numbers.forEach(serial => {
            if (!this.futureSerialNumbers.some(el => el.id === serial.id)) {
              this.futureSerialNumbers.push(serial);
            }
          });
        }
        if (innerTask.reserved_serial_numbers.length > 0) {
          this.reservedSerialNumbers.push(...innerTask.reserved_serial_numbers);
        }
      });
    });
    this.data.tasks.sort((a, b) => a.start_date.getTime() - b.start_date.getTime());
    this.currentTaskIndex = this.data.tasks.findIndex(t => t.id === this.task.id);
    this.getData();
    this.initValues();

    this.data.task.serials = [];

    this.data.tasks.forEach(task => {
      task.serial_products = [];
      task.tasks.forEach(t => {
        t.serial_numbers.forEach(serial => this.data.task.serials.push(serial));
        t.serial_products.forEach(sp => task.serial_products.push(sp));
      });
      // this.data.entity.serials = task.tasks[0].serial_numbers;
    });

    this.data.task.serials = this.adapterService.removeDuplicates(this.data.task.serials, x => x.id);
  }

  prepareDetailedStatus() {
    if (this.task.status === 'Ordered') {
      if (this.task.is_in_qc_wh) {
        this.status = 'In QC-WH';
      } else if (this.task.is_in_qc) {
        this.status = 'In QC';
      } else {
        this.status = this.task.status;
      }
    } else {
      this.status = this.task.status;
    }
  }

  ttc_display_get_multiplier(): number {
    switch (this.form.get('ttc_display_type').value) {
      case TTCDisplayType.DAYS:
        return 1440;
      case TTCDisplayType.HOURS:
        return 60;
      case TTCDisplayType.MINUTES:
        return 1;
    }
  }

  ttcGetMultiplier(type: TTCDisplayType): number {
    switch (type) {
      case TTCDisplayType.DAYS:
        return 1440;
      case TTCDisplayType.HOURS:
        return 60;
      case TTCDisplayType.MINUTES:
        return 1;
    }
  }

  onOpenProtocolInfo(protocol, paragraphs, serial) {
    const serialNumber = serial.type_with_number ? serial.type_with_number : serial.id;
    // this.modalService.taskProtocolInfo(protocol, paragraphs, serialNumber).subscribe();
  }

  getData(): void {
    this.employeesService.get().subscribe(employees => {
      this.employees = employees.map(employee => {
        return {
          ...employee,
          fullName: `${employee.first_name} ${employee.last_name}`,
        };
      });

      this.initEmployees();
    });

    this.machinesService.get().subscribe(machines => {
      this.machines = machines;
      this.initMachines();
    });
  }

  private initValues() {
    this.form.get('start').setValue(new Date(this.task.start_date.getTime()));
    this.form.get('end').setValue(new Date(this.task.end_date.getTime()));
    this.form.get('production').setValue(this.task.production_type);
    this.form.get('isLocked').setValue(this.task.is_locked);
    this.form.get('ttc_display_type').setValue(this.task.ttc_display_type ? this.task.ttc_display_type : TTCDisplayType.MINUTES);
    this.form.get('ttc').setValue(((this.task.end_date.getTime() -
      this.task.start_date.getTime()) / 1000 / 60) / this.ttc_display_get_multiplier());

    const rootStatus = this.data.rootTask.planning_status;
    const rootPlanProductionId = this.data.rootTask.list_product.id;
    if (rootStatus === PlanningStatus.WAITING_CONFIRMATION) {
      this.form.get('start').disable();
      this.form.get('end').disable();
      this.form.get('ttc').disable();
    }

    if (rootStatus === PlanningStatus.PLANNED && rootPlanProductionId === this.data.task.list_product.id) {
      this.form.get('start').disable();
      this.form.get('end').disable();
      this.form.get('ttc').disable();
    }
  }

  private initEmployees() {
    if (this.task.employees.length > 0) {

      // Удаляем пустой элемент
      (this.form.get('employees') as FormArray).removeAt(0);

      this.task.employees.forEach(employee => {
        if (typeof employee.employee === 'number') {
          // @ts-ignore
          employee.employee = (this.employees.find(emp => emp.id === employee.employee));
        }

        (this.form.get('employees') as FormArray).push(this.fb.group({
          employee: [employee.employee.id, Validators.required],
          ttc: [this.adapterService.timeToMinutesAdapter(employee.duration) /
          this.ttc_display_get_multiplier(), Validators.required],
          startDate: [new Date(employee.start), Validators.required],
          ttc_display_type: [this.form.get('ttc_display_type').value, Validators.required],
        }));
      });
      // (this.form.get('employees') as FormArray).controls.forEach(control => {
      //   if (this.data.rootTask.planning_status === PlanningStatus.WAITING_CONFIRMATION) {
      //     control.get('startDate').disable();
      //     control.get('ttc').disable();
      //   }
      // });
    }
  }

  private initMachines() {
    if (this.task.machines.length > 0) {

      // Удаляем пустой элемент
      (this.form.get('machines') as FormArray).removeAt(0);

      this.task.machines.forEach(machine => {
        if (typeof machine.machine === 'number') {
          // @ts-ignore
          machine.machine = (this.machines.find(m => m.id === machine.machine));
        }

        (this.form.get('machines') as FormArray).push(this.fb.group({
          machine: [machine.machine.id, Validators.required],
          ttc: [this.adapterService.timeToMinutesAdapter(machine.duration) /
          this.ttc_display_get_multiplier(), Validators.required],
          startDate: [new Date(machine.start), Validators.required],
          ttc_display_type: [this.form.get('ttc_display_type').value, Validators.required],
        }));
      });

      // (this.form.get('machines') as FormArray).controls.forEach(control => {
      //   if (this.data.rootTask.planning_status === PlanningStatus.WAITING_CONFIRMATION) {
      //     control.get('startDate').disable();
      //     control.get('ttc').disable();
      //   }
      // });
    }
  }

  addExecutor() {
    (this.form.get('employees') as FormArray).push(this.fb.group({
      employee: [null, Validators.required],
      ttc: [0, Validators.required],
      startDate: [null, Validators.required],
    }));
  }

  addExecutionMachine() {
    (this.form.get('machines') as FormArray).push(this.fb.group({
      machine: [null, Validators.required],
      ttc: [0, Validators.required],
      startDate: [null, Validators.required],
    }));
  }

  removeExecutor(index: number) {
    (this.form.get('employees') as FormArray).removeAt(index);
  }

  removeExecutionMachine(index: number) {
    (this.form.get('machines') as FormArray).removeAt(index);
  }

  getNewDateFromCalendar() {
    this.form.get('ttc').setValue(((this.form.get('end').value).getTime() -
      (((this.form.get('start').value).getTime()) / 60 / 1000) * this.ttc_display_get_multiplier()));
    this.isTTCUpdated = true;

    setTimeout(() => {
      this.isTTCUpdated = false;
    }, 1000);
  }

  getNewDateFromInput() {
    this.form.get('end').setValue(new Date(((this.form.get('start').value).getTime() +
      (this.form.get('ttc').value * 60 * 1000) * this.ttc_display_get_multiplier())));
    this.isEndUpdated = true;

    setTimeout(() => {
      this.isEndUpdated = false;
    }, 1000);
  }

  save(): void {
    // Отправляем запрос с данными заказа на бэк
    // const sentRequests: Array<Observable<any>> = [];

    this.isSaving = true;

    this.applyFormToTask(this.task);
    const data = this.getTaskData(this.task);
    this.tasksService.update(this.task, data).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe();
    this.task.is_planned = true;

    // sentRequests.push(this.tasksService.update(this.task, data));
    // concat(...sentRequests).subscribe();
    this.dialogRef.close({
      start: this.form.get('start').value,
      end: this.form.get('end').value,
      ttc_display_type: this.form.get('ttc_display_type').value
    });
  }

  private applyFormToTask(task: Task) {
    // не меняем даты покупаемых изделий т.к. их даты проставляются в покупках

    // Вообще запрещаем менять время, т.к. время меняется в графике
    // if (task.list_product.nomenclature.type !== ENomenlatureType.PURCHASED) {
    //   task.start_date = this.form.get('start').value;
    //   task.end_date = this.form.get('end').value;
    // }
    task.ttc_display_type = this.form.get('ttc_display_type').value;
    task.production_type = <any>this.form.get('production').value;

    // Возвращаем статус чтоб обновить данные без ошибок
    if (this.data.rootTask.planning_status === PlanningStatus.WAITING_CONFIRMATION) {
      this.form.get('start').enable();
      this.form.get('end').enable();
      this.form.get('ttc').enable();
    }
    // (this.form.get('employees') as FormArray).controls.forEach(control => {
    //   if (this.data.rootTask.planning_status === PlanningStatus.WAITING_CONFIRMATION) {
    //     control.get('startDate').enable();
    //     control.get('ttc').enable();
    //   }
    // });
    // (this.form.get('machines') as FormArray).controls.forEach(control => {
    //   if (this.data.rootTask.planning_status === PlanningStatus.WAITING_CONFIRMATION) {
    //     control.get('startDate').enable();
    //     control.get('ttc').enable();
    //   }
    // });

    task.employees = <any>this.form.get('employees').value.map(employeeGroup => ({
      employee: employeeGroup.employee,
      duration: employeeGroup.ttc * this.ttc_display_get_multiplier(),
      start: employeeGroup.startDate,
      end: employeeGroup.employee ? new Date((employeeGroup.startDate.getTime() +
        ((employeeGroup.ttc * 60 * 1000) * this.ttc_display_get_multiplier()))) : null,
    })).filter(emp => emp.employee);

    task.machines = <any>this.form.get('machines').value.map(machineGroup => ({
      machine: machineGroup.machine,
      duration: machineGroup.ttc * this.ttc_display_get_multiplier(),
      start: machineGroup.startDate,
      end: machineGroup.machine ? new Date((machineGroup.startDate.getTime() +
        ((machineGroup.ttc * 60 * 1000) * this.ttc_display_get_multiplier()))) : null,
    })).filter(m => m.machine);

    task.is_locked = this.form.get('isLocked').value;
  }

  private getTaskData(task: Task): Partial<Task> {
    const data: Partial<Task> = {
      id: task.id,
    };

    // data.start_date = task.start_date;
    // data.end_date = task.end_date;
    data.production_type = task.production_type;
    data.employees = task.employees.filter(emp => emp.employee);
    data.machines = task.machines.filter(m => m.machine);
    data.is_locked = task.is_locked;
    data.ttc_display_type = task.ttc_display_type;
    return data;
  }

  close(): void {
    this.dialogRef.close();
  }

  deleteTask(): void {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.isDeleting = true;
        this.tasksService.delete(this.task).pipe(
          finalize(() => this.isDeleting = false)
        ).subscribe(() => {
          this.dialogRef.close();
        });
      }
    });
  }
  goToOrder() {
    let url: UrlTree | string = '';
    if ((this.task.status === 'Ordered' || this.task.status === 'On stock' || this.task.status === 'Rework') &&
      this.task.created_order.accounting_type === 3) {
      url = this.router.createUrlTree(['manufacturing', 'orders', 'order', this.task.created_order.id]);
    } else if ((this.task.status === 'Ordered' || this.task.status === 'On stock' || this.task.status === 'Rework') &&
      this.task.created_order.accounting_type === 2) {
      url =  'outsourcing/chains/order/' + this.task.created_order.id;
    } else if ((this.task.status === 'Ordered' || this.task.status === 'On stock' || this.task.status === 'Rework') &&
      this.task.created_order.accounting_type === 1) {
      url = 'procurement/chains/order/' + this.task.created_order.id;
    }
    // console.log(url);
    // this.router.navigate([url])
    //
    window.open(url.toString(), '_blank');
  }

  showError() {
    if (this.form.get('start').value.getTime() > this.form.get('end').value.getTime()) {
      return true;
    }
  }

  showErrorTasks() {
    if (this.currentTaskIndex > 0 && this.form.get('start').value.getTime() <
      this.data.tasks[this.currentTaskIndex - 1].end_date.getTime()) {
      return true;
    }
  }

  onAddTechnology() {
    this.tasksService.addTechnologyToPlanModal(this.task).subscribe(response => {
      if (response) {
        this.dialogRef.close('reload');
      }
    });
  }

  changedTTCType() {
    this.form.get('ttc').setValue(((this.form.get('end').value.getTime() -
      this.form.get('start').value.getTime()) / 1000 / 60) / this.ttc_display_get_multiplier());

    this.executors.controls.forEach(employee => {
      const currentTTCType = employee.get('ttc_display_type').value;
      const selectedTTCType = this.form.get('ttc_display_type').value;
      if (+currentTTCType !== +selectedTTCType) {
        if (+selectedTTCType > +currentTTCType) {
          employee.get('ttc').setValue((employee.get('ttc').value *
            this.ttcGetMultiplier(currentTTCType)) / this.ttc_display_get_multiplier());
        } else {
          employee.get('ttc').setValue((employee.get('ttc').value *
            this.ttcGetMultiplier(currentTTCType)) / this.ttc_display_get_multiplier());
        }
      }
      employee.get('ttc_display_type').setValue(this.form.get('ttc_display_type').value);
    });

    this.exeMachines.controls.forEach(machine => {
      const currentTTCType = machine.get('ttc_display_type').value;
      const selectedTTCType = this.form.get('ttc_display_type').value;
      if (+currentTTCType !== +selectedTTCType) {
        if (+selectedTTCType > +currentTTCType) {
          machine.get('ttc').setValue((machine.get('ttc').value *
            this.ttcGetMultiplier(currentTTCType)) / this.ttc_display_get_multiplier());
        } else {
          machine.get('ttc').setValue((machine.get('ttc').value *
            this.ttcGetMultiplier(currentTTCType)) / this.ttc_display_get_multiplier());
        }
      }
      machine.get('ttc_display_type').setValue(this.form.get('ttc_display_type').value);
    });
  }

}
