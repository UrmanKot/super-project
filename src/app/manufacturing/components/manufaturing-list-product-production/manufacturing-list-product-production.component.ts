import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CDK_DRAG_CONFIG, CdkDragEnd} from '@angular/cdk/drag-drop';
import {ManufacturingChartComponent, UITask} from '../manufacturing-chart/manufacturing-chart.component';
import {ListProductProduction} from '../../models/list-product-production';
import {PlanningStatus} from '../../enums/planning-status.enum';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {filter} from 'rxjs/operators';
import {AdapterService} from '@shared/services/adapter.service';
import {TaskService} from '@shared/services/task.service';
import {ModalService} from '@shared/services/modal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'pek-manufacturing-list-product-production',
  templateUrl: './manufacturing-list-product-production.component.html',
  styleUrls: ['./manufacturing-list-product-production.component.scss'],
  providers: [{provide: CDK_DRAG_CONFIG, useValue: {dragStartThreshold: 12}}]
})
export class ManufacturingListProductProductionComponent implements OnInit {

  @Input() production: ListProductProduction;
  @Input() isLeftPanel: boolean;
  @Input() productionNameWidth = 150;
  @Input() isRoot: boolean;
  @Input() rootTask: Task;

  childrenEndHighlighted = false;

  dragging = false;

  private taskDeleteSub: Subscription;
  taskHovered: UITask;

  constructor(
    private modalService: ModalService,
    private tasksService: TaskService,
    private adapterService: AdapterService,
    private elementRef: ElementRef<HTMLElement>,
    public chart: ManufacturingChartComponent,
  ) {
  }

  ngOnInit(): void {
    if (this.production.hasChildren) {
      this.elementRef.nativeElement.style.background = this.production.color;
      this.elementRef.nativeElement.style.zIndex = String(99999 - this.production.index);
    }

    this.taskDeleteSub = this.tasksService.delete$.subscribe(() => {
      this.production.updateGroups();
    });
  }

  edit(task: UITask) {
    const rootTask = this.getRootTaskInfo(this.production);
    this.tasksService.editTask(task, this.production.tasks, rootTask).pipe(filter(isApplied => isApplied)).subscribe(position => {
      if (position === 'reload') {
        // this.applyPosition(task, position)
        location.reload();
        return;
      }

      if (position) {
        this.applyPosition(task, position);
      }
    });
  }

  resize(task: UITask, event) {
    // игнорируем изменения покупок т.к. их даты указываются в разделе закупок + если елемент заблокирован по статусу
    if (task.list_product.nomenclature.type === ENomenclatureType.PURCHASED || this.getIfDisabled(task)) {
      return;
    }

    const position = {start: task.start_date, end: task.end_date};

    if (event.edges.left) {
      let startX = this.chart.getX(task.start_date);
      startX += event.edges.left;
      if (startX < 0) startX = 0;
      // if (this.chart.getDateInfo(startX).isVac) {
      //   return;
      //   // TODO сделать анимацию мигания задачи
      // }

      position.start = this.chart.getDate(startX);
    } else if (event.edges.right) {
      const endX = this.chart.getX(task.end_date);
      // if (this.chart.getDateInfo(endX + event.edges.right).isVac) {
      //   return;
      // }
      position.end = this.chart.getDate(endX + event.edges.right);
    }

    task.is_planned = true;
    this.applyPosition(task, position);
  }

  getDuration(task) {
    return (task.end_date.getTime() - task.start_date.getTime()) / 1000 / 60 / 60;
  }

  move(task: UITask, event: CdkDragEnd) {
    task.duration = this.getDuration(task);
    task.is_planned = true;
    event.source.reset();
    // игнорируем изменения покупок т.к. их даты указываются в разделе закупок
    if (task.list_product.nomenclature.type === ENomenclatureType.PURCHASED) {
      // TODO вывести сообщение юзеру
      return;
    }


    const startX = this.chart.getX(task.start_date);

    // if (this.chart.getDateInfo(startX + event.distance.x)?.isVac) {
    //   return;
    // }

    const newStartX = startX + event.distance.x;

    const start = this.chart.getDate(newStartX < 0 ? 0 : newStartX);
    const end = new Date(start.getTime() + task.duration * 60 * 60 * 1000);

    // if (this.chart.getDateInfo(end)?.isVac) {
    //   return;
    // }

    this.applyPosition(task, {start, end});
  }

  onTaskClick(task: UITask, production: ListProductProduction, event: MouseEvent) {
    switch (this.chart.mode) {
      case 'edit-tasks':
        // toggle task selection
        const selectedProductions = this.chart.selectedTasks;
        task.production = production;
        if (selectedProductions.has(task)) {
          selectedProductions.delete(task);
        } else {
          selectedProductions.add(task);
        }
        break;
      case 'planning':
      case 'make-order':
        // task dragging
        if (!this.dragging) {
          task.production = production;
          this.edit(task);
        }
        this.dragging = false;
        break;
    }
  }

  // использую такой синтаксис, чтобы не терять this
  validateResize = event => {
    console.log('EVENT RESIZE VALIDATE', event);
    console.log('EVENT RESIZE VALIDATE this.taskHovered', this.taskHovered);
    // console.log('EVENT RESIZE this', this);
    // const x = event.rectangle.left - (event.rectangle.width / 2);
    // const y = event.rectangle.top - (event.rectangle.height / 2);
    // const el = document.elementFromPoint(x, y);
    // console.log('EVENT RESIZE this', el);
    return !this.getIfDisabled(this.taskHovered);
  }

  validateTest(): boolean {
    return true;
  }

  type(type: ENomenclatureType): string {
    switch (type) {
      case ENomenclatureType.PURCHASED:
        return 'Purchased';
      case ENomenclatureType.ASSEMBLY:
        return 'Assembly';
      case ENomenclatureType.MANUFACTURED:
        return 'Manufactured';
    }
  }

  toggleActiveProduction(production) {
    if (production.hasChildren) production.isActive = !production.isActive;
  }

  private highlightChildrenEnd() {
    this.childrenEndHighlighted = true;
    setTimeout(() => this.childrenEndHighlighted = false, 2_500);
  }

  private applyPosition(task: UITask, position: { start: Date, end: Date }) {
    // validate new position
    const prevTasks = this.production.tasks.filter(t => t.start_date.getTime() < task.start_date.getTime());

    // запретить двигать левее предыдущих задач
    if (prevTasks.length) {
      prevTasks.forEach(prevTask => {
        if (prevTask.end_date.getTime() > position.start.getTime()) {
          position.start.setTime(prevTask.end_date.getTime());
          // если переместили, а не изменили размер
          if (position.end.getTime() < task.end_date.getTime()) {
            position.end.setTime(position.start.getTime() + task.duration * 60 * 60_000);
          }
        }
      });
    } else {
      const childrenEnd = this.production.getChildrenEnd();
      if (childrenEnd.getTime() > position.start.getTime()) {
        this.highlightChildrenEnd();
        position.start.setTime(childrenEnd.getTime());
        // если переместили, а не изменили размер
        if (position.end.getTime() < task.end_date.getTime()) {
          position.end.setTime(position.start.getTime() + task.duration * 60 * 60_000);
        }
      }
    }
    const nextTasks = this.production.tasks.filter(t => t.start_date.getTime() > task.start_date.getTime());

    // подвинуть следующие задачи
    nextTasks.reduce((prevEnd, nextTask) => {
      if (nextTask.start_date.getTime() < prevEnd.getTime()) {
        nextTask.duration = (nextTask.end_date.getTime() - nextTask.start_date.getTime()) / 60 / 1000;
        nextTask.start_date.setTime(prevEnd.getTime());
        nextTask.end_date.setTime(nextTask.start_date.getTime() + nextTask.duration * 60_000);
        this.chart.updateTaskDates(nextTask);
      }
      return nextTask.end_date;
    }, position.end);

    // apply new position
    task.start_date = position.start;
    task.end_date = position.end;
    task.duration = task.duration = this.getDuration(task);

    task.apply();

    this.chart.updateTimeline();
    this.chart.updateMargins(this.production);
    this.chart.updateParentMargins(this.production.parent);
    this.chart.update();
    this.chart.updateTaskDates(task);
  }

  mouseoverFromTask(production) {
    production.isHover = true;
  }

  getTaskWidth(width: number) {
    return width * this.chart.vacationCoords / 24;
  }

  getTaskLeft(left: number) {
    return left * this.chart.scaleHourWeekdayDay / 12;
  }

  mouseoutFromTask(production) {
    production.isHover = false;
  }

  ngOnDestroy() {
    this.taskDeleteSub.unsubscribe();
  }

  getIfDisabled(task: UITask): boolean {
    const rootTask = this.getRootTaskInfo(this.production);
    const isWaitingForConfirmation = rootTask.planning_status === PlanningStatus.WAITING_CONFIRMATION;
    const rootPlanProductionId = rootTask.list_product.id;
    if (rootPlanProductionId === task.list_product.id && !isWaitingForConfirmation) {
      return rootTask.planning_status === PlanningStatus.PLANNED;
    } else {
      return isWaitingForConfirmation;
    }
  }

  getRootTaskInfo(listProductProduction: ListProductProduction): UITask | undefined {
    if (listProductProduction.parent) {
      return this.getRootTaskInfo(listProductProduction.parent);
    } else {
      return listProductProduction.tasks?.find(task => !task.next_task && !task.parent_task);
    }
  }

  mouseEntered(task: UITask) {
    this.taskHovered = task;
  }

  mouseLeave(task: UITask) {
    this.taskHovered = task;
  }

}
