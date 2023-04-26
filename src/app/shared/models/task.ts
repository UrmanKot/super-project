import {Nomenclature} from '@shared/models/nomenclature';
import {Product} from '../../product-structure/models/product';
import {Employee} from '@shared/models/employee';
import {SerialNumber} from '../../procurement/models/invoice';
import {Machine} from '../../manufacturing/models/machine';
import {PlanningStatus} from '../../manufacturing/enums/planning-status.enum';
import {ListProductProduction} from '../../manufacturing/models/list-product-production';

export type TechnologyName = string;
export type TaskStatus = string;
export type Color = string;

export enum TTCDisplayType {
  MINUTES = '0',
  HOURS = '1',
  DAYS = '2'
}

export class RootTask {
  readonly id: number;
  quantity: number;
  nomenclature: Nomenclature;
}

// export enum PlanningStatus {
//   WAITING_CONFIRMATION = '0',
//   REQUIRES_PLANNING = '1',
//   PLANNED = '2',
//   ON_STOCK = '3',
// }


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
  unconfirmed_end_date?: Date;
  is_grouped?: boolean;
  is_locked: boolean;
  is_planned: boolean;
  technologyUid?: number;
  is_added_manually: boolean;
  change_request?: boolean;
  groupId?: string;
  uiGroupId?: number;
  uiParent?: number;
  next_task: number;
  previous_task: number;
  technology?: TechnologyName;
  availability: number | null;
  depends_on: number | null;
  status: TaskStatus;
  employees?: Executor[];
  machines?: ExecutionMachine[];
  planning_status?: PlanningStatus;
  list_product: Product;
  required_quantity?: number;
  parent_task?: number;
  serials?: SerialNumber[];
  root_nomenclature?: Nomenclature;
  serial_numbers?: SerialNumber[];
  reserved_serial_numbers?: SerialNumber[];
  serial_products?: any[];
  label?: string;
  ttc_display_type?: TTCDisplayType;
  child?: Task[];
  /** @deprecated */
  tools?: any;
  tasks?: Task[];
  created_order?: any;
  is_in_qc?: boolean;
  is_in_qc_wh?: boolean;
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
  use_technical_equipment?: boolean;
  needs_technical_equipment?: boolean;
  production_list_id: string;
}

export class TaskSet extends Task {

  static id = 0;

  production: ListProductProduction;
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
  machine: Machine;
  task: number;
  start?: Date;
  end?: Date;
}

