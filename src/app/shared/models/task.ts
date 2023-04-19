import {Nomenclature} from '@shared/models/nomenclature';
import {Product} from '../../product-structure/models/product';
import {Employee} from '@shared/models/employee';
import {SerialNumber} from '../../procurement/models/invoice';

export type TechnologyName = string;
export type TaskStatus = string;
export type Color = string;

export class RootTask {
  readonly id: number;
  quantity: number;
  nomenclature: Nomenclature;
}

export class TasksResponse {
  prev: string;
  next: string;
  count: number;
  results: Task[];
}

export class Task {
  readonly id: number;
  family_id?: number;
  name: number;
  product_name: string;
  created: string;
  updated: string;
  /** Длительность в часах */
  duration?: number;
  start_date: Date;
  end_date: Date;
  is_grouped?: boolean;
  is_locked: boolean;
  is_planned: boolean;
  technology?: TechnologyName;
  availability: number | null;
  depends_on: number | null;
  status: TaskStatus;
  employees?: Executor[];
  machines?: ExecutionMachine[];
  list_product: Product;
  required_quantity?: number;
  parent_task?: number;
  serials?: SerialNumber[];
  root_nomenclature?: Nomenclature;
  serial_numbers?: SerialNumber[];
  serial_products?: any[];
  label?: string;
  child?: Task[];
  /** @deprecated */
  tools?: any;
  tasks?: Task[];
  created_order?: any;
  /**
   * Values:<br>
   * "0" = "Outsource"<br>
   * "1" = "Own"
   */
  production_type?: '0' | '1' | '2';
  created_order_id?: number;

  // ui/ux only props
  isSaved?: boolean;
  searchFieldEmployee?: number[];
}

export class TaskSet extends Task {

  static id = 0;

  // production: ListProductProduction;
  id: number;
  tasks: Task[] = [];

  constructor(config?: Partial<TaskSet>) {
    super();
    if (config) Object.assign(this, config);
    this.id = ++TaskSet.id;
  }

  apply() {
    const props: Array<keyof Task> = ['availability', 'created_order_id', 'duration', 'employees', 'end_date', 'is_locked', 'machines', 'start_date', 'status'];

    this.tasks.forEach(task => {
      for (const prop of props) {
        // @ts-ignore
        task[prop] = this[prop];
      }
    });
  }
}

export class Tasks {
  prev: string;
  next: string;
  count: number;
  results: Task[];
}

export class Executor {
  duration: number;
  id?: number;
  employee: Employee;
  task: number;
  start?: Date;
  end?: Date;
}

export class ExecutionMachine {
  duration: number;
  id?: number;
  // machine: Machine;
  task: number;
  start?: Date;
  end?: Date;
}

