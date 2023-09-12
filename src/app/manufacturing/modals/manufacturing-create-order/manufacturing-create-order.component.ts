import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {MaterialRequest} from '../../pickers/manufacturing-material-picker/manufacturing-material-picker.component';
import {Company} from '../../../crm/models/company';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '@shared/services/employee.service';
import {TaskService} from '@shared/services/task.service';
import {CompanyService} from '../../../crm/services/company.service';
import {Task} from '@shared/models/task';
import {Nomenclature} from '@shared/models/nomenclature';
import {finalize} from 'rxjs';

export class TaskOrder {
  task: Task;
  order: Order;
  quantity: number;
  useOwnMaterials = false;
  useTechnicalEquipment = false;
  materials: MaterialRequest[] = [];
  sent = false;

  constructor(config: Partial<TaskOrder>) {
    this.order = new Order();
    if (config) {
      Object.assign(this, config);
    }
  }
}

@Component({
  selector: 'pek-manufacturing-create-order',
  templateUrl: './manufacturing-create-order.component.html',
  styleUrls: ['./manufacturing-create-order.component.scss']
})
export class ManufacturingCreateOrderComponent implements OnInit {
  orders: TaskOrder[] = [];
  production: 'own' | 'outsource' = 'own';

  manufacturer: Company | undefined;
  manufacturers: Company[] = [];
  isSaving = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tasks: Task[] },
    private dialogRef: MatDialogRef<ManufacturingCreateOrderComponent>,
    private taskService: TaskService,
    private employeeService: EmployeeService,
    private companyService: CompanyService,
  ) {
  }

  ngOnInit(): void {
    this.orders = this.data.tasks.map(task => new TaskOrder({task}));

    this.orders.forEach(order => {
      order.quantity = order.task.tasks.reduce((sum, task) => sum += task.required_quantity, 0);
    });

    this.checkTasksTechnicalEquipment();
    this.getData();
  }

  checkTasksTechnicalEquipment() {
    switch (this.production) {
      case 'own':
        this.activateTechnicalEquipments();
        break;
      case 'outsource':
        this.deactivateTechnicalEquipment();
        break;
    }
  }

  activateTechnicalEquipments() {
    this.orders.forEach(order => {
      const hasTechnicalEquipment = order.task.needs_technical_equipment;
      if (hasTechnicalEquipment) {
        order.task.use_technical_equipment = true;
      }
    });
  }

  deactivateTechnicalEquipment() {
    this.orders.forEach(order => {
      const hasTechnicalEquipment = order.task.needs_technical_equipment;
      if (hasTechnicalEquipment) {
        order.task.use_technical_equipment = false;
      }
    });
  }

  getData(): void {
    this.companyService.get().subscribe(companies => {
      this.manufacturers = companies.map(x => {
        x.filter_id = 'A' + x.id + 'A';
        return x;
      });
      this.manufacturers.unshift({name: 'All', filter_id: 'A', id: 0});
    });
  }

  createOrder(): void {
    // Отправляем запрос с данными заказа на бэк

    this.isSaving = true;

    // const sendRequests: Array<Observable<any>> = [];

    const data = {
      order: {
        /** OrderStatusThrough */
        // statuses: [],
        /** string($date) title: Created */
        // created: new Date(),
        /** string($date-time); title: Promised date; x-nullable: true */
        // promised_date: new Date(),
        /** string($date-time); title: Items reception date; x-nullable: true */
        // items_reception_date: new Date(),
        /** string; title: Comment; x-nullable: true */
        // comment: '',
        /** string; title: Type(PURCHASED == 1, OUTSOURCE == 2, OWN == 2) */
        accounting_type: this.production === 'own' ? 3 : 2,
        /** boolean; title: Is closed; */
        is_closed: false,
        /** integer; title: Supplier; x-nullable: true */
        supplier: this.production === 'outsource' ? this.manufacturer?.id : null,
        /** string; title: Currency; x-nullable: true */
        // currency: ''
        can_select_supplier: null
      },
      tasks: this.generateTasks()
    };

    if (this.production === 'outsource') {
      data.order.can_select_supplier = !this.manufacturer?.id;
    } else {
      delete data.order.can_select_supplier;
    }

    this.taskService.createOutsource(data).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe({
      next: () => {
        this.data.tasks.forEach(task => task.status = 'Ordered');
        this.dialogRef.close(true);
      },
      error: err => {
        this.dialogRef.close(false);
      }
    });
  }

  generateTasks(): Task[] {
    const tasks = [];

    this.orders.forEach(order => {
      /** Array<{
       *   nomenclature	integer; title: Nomenclature
       *   required_quantity integer; title: Required quantity
       *  }>
       */

      order.task.tasks.forEach(t => {
        const result = {
          task: t.id,
          materials: order.materials
            .filter(materialRequest => materialRequest.warehouseProduct)
            .map(materialRequest => ({
              nomenclature: (materialRequest.warehouseProduct.nomenclature as Nomenclature).id,
              required_quantity: materialRequest.quantity,
            })),
          use_technical_equipment: null
        };
        if (order.task.needs_technical_equipment) {
          result.use_technical_equipment = order.task.use_technical_equipment;
        }
        tasks.push(result);
      });
    });

    return tasks;
  }

  generateTasksForOutsourceChain(): Task[] {
    const tasks = [];

    this.orders.forEach(order => {
      /** Array<{
       *   nomenclature	integer; title: Nomenclature
       *   required_quantity integer; title: Required quantity
       *  }>
       */
      order.task.tasks.forEach(t => {
        const result = {
          task: t.id,
          list_product: t.list_product,
          materials: order.materials
            .filter(materialRequest => materialRequest.warehouseProduct)
            .map(materialRequest => ({
              nomenclature: (materialRequest.warehouseProduct.nomenclature as Nomenclature).id,
              required_quantity: materialRequest.quantity,
            })),
          use_technical_equipment: null
        };
        if (order.task.needs_technical_equipment) {
          result.use_technical_equipment = order.task.use_technical_equipment;
        }
        tasks.push(result);
      });
    });

    return tasks;
  }

  disable() {
    let disable = false;

    this.orders.forEach(order => {
      if (order.useOwnMaterials) {
        order.materials.forEach(material => {
          if (!material.warehouseProduct || material.quantity < 1) {
            disable = true;
          }
        })
      }
    })

    return disable
  }

  onAddTasksToChain() {
    const tasks = this.generateTasksForOutsourceChain();
    this.taskService.openAddTasksToChainModal(tasks, 'outsourcing', this.orders.length).subscribe(res => {
      if (res) {
        this.data.tasks.forEach(task => task.status = 'Ordered');
        this.dialogRef.close(true);
      }
    });
  }
}
