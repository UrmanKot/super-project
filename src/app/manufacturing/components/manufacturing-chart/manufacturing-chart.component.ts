import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Task, TaskSet, TechnologyName} from '@shared/models/task';
import {filter, map, mapTo, take, tap} from 'rxjs/operators';
import {forkJoin, fromEvent, Observable, of, Subject, Subscription, takeUntil} from 'rxjs';
import {TaskService} from '@shared/services/task.service';
import {TechnologyService} from '../../../product-structure/services/technology.service';
import {ModalService} from '@shared/services/modal.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Technology} from '../../../product-structure/models/technology';
import {ListProductProduction} from '../../models/list-product-production';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {ShiftTypes} from '../../enums/shift-types.enum';
import {PlanningStatus} from '../../enums/planning-status.enum';
import {CalendarService} from '../../services/calendar.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {QuerySearch} from '@shared/models/other';

class Status {
  label: string;
  value: string;
}

type ID = number;
/** id_номенклатуры + ":" + левел */
type ProductionKey = string;
/** id номенклатуры + ":" + технология + ":" + левел */
type UITaskKey = string;

class DateInfo {
  date: Date;
  isVac: boolean;
  x: number;
}

export class UITask extends TaskSet {
  production: ListProductProduction;
  left?: number;
  width?: number;
  unconfirmedLeft?: number;
  unconfirmedBiggerWidth?: number;
  unconfirmedSmallerWidth?: number;
  days?: DateInfo[];
  created_order?: {
    id: number;
    accounting_type: number;
  };
}

class ProductionType {
  value: string;
  name: string;
}

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-chart',
  templateUrl: './manufacturing-chart.component.html',
  styleUrls: ['./manufacturing-chart.component.scss']
})
export class ManufacturingChartComponent implements OnInit {
  PlanningStatus = PlanningStatus;
  planScale = 100;

  selectedStatuses: string[] = [];
  selectedFilterTechnologies: string[] = [];

  selectedProductionTypes: string[] = [];

  productionsTypes: ProductionType[] = [
    {value: '0', name: 'Outsource'},
    {value: '1', name: 'Own production'},
    {value: '2', name: 'Purchased'},
  ];

  statuses: Status[] = [
    {value: 'Not processed', label: 'Not processed'},
    {value: 'Deficit', label: 'Deficit'},
    {value: 'Rework', label: 'Rework'},
    {value: 'Ordered', label: 'Ordered'},
    {value: 'On stock', label: 'On stock'},
    {value: 'Reserved', label: 'Reserved'},
  ];

  @Input() isPlan = false;
  @Input() rootId: string;

  @ViewChild('panelBorder', {read: ElementRef}) panelBorder: ElementRef;

  isRoot = false;
  isRootFiltered = false;

  productionNameWidth = 150; // ширина столбца name в диаграмме

  mode: 'planning' | 'edit-tasks' | 'make-order' | 'add-items' = 'planning';

  /** Все задачи, необходимые для производства детали */
  loadingTasks: Task[] = [];
  chartRootTasks: Task[] = [];
  tasks: Task[] = [];
  selectedTasks = new Set<UITask>();

  innerContentWidth = 516; // ширина шапки с датами (500px - ширина .task-header-name, + 16px отступ)

  /** Корневая последовательность сборки - сборка финальной детали из запчастей */
  rootProductions: ListProductProduction[] = [];
  /** Все последовательности сплошным списком */
  productions: ListProductProduction[] = [];

  marginTimeLeft = 34;

  scaleHourVacationDay = 1;
  scaleHourWeekdayDay = 12;

  vacationCoords = 24;
  weekdayCoords = 288;

  allTechnologies: Technology[] = [];
  technologies: Technology[] = [];
  technologiesPlanning: Technology[] = [];
  availableTechnologies = new Set<TechnologyName>();
  availableTechnologiesPlanning = new Set<TechnologyName>();


  filteredTasksSet = new Set<number>();

  selectedTechnologies: TechnologyName[] = [];
  selectedTechnologiesPlanning: TechnologyName[] = [];

  selectedProductions: any[] = [];

  allProductsOnSelected = true;

  isShowBorder = false;
  frameBorderRight = 0; // положение рамки при ресайзе левой панели

  reserveTasks: Task[] = [];

  childrenEndHighlighted = false;

  /** Соответствие началу даты (00 часов) информации о ней. */
  dates = new Map<number, DateInfo>();
  /** Для поиска информации о дате по координате */
  datesByCoords: DateInfo[] = [];

  hours: number[];
  // rootId = this.route.snapshot.paramMap.get('rootId');
  colors = [
    '#fbf8cc',
    '#fde4cf',
    '#ffcfd2',
    '#f1c0e8',
    '#cfbaf0',
    '#a3c4f3',
    '#e8e8e4',
    '#d7e3fc',
    '#dbfdd8',
    '#f9f195',
    '#bdd7d2',
    '#ebf4ff',
    '#ccd5ae',
    '#e3d5ca',
    '#e0d4ed',


    // '#FFF587',
    // '#c1b9eb',
    // '#F2C5BB',
    // '#F2E1AE',
    // '#A5D3E6',
    // '#CAFFBF',
    // '#BABFD9',
    // '#d3daac',
    // '#9BF6FF',
    // '#D9C877',
    // '#c9c7c5',
    // '#e9f6eb',
    // '#F2C9E0',
    // '#BBDDF2',
    // '#F3FEB0',
  ];
  isExpanded = true;
  hasDeliveryDateChanges = false;
  hasRootDeliveryDateChanges = false;
  hasChildDeliveryDateChanges = false;

  /** Соответствие ключа строки в графике строке */
  private productionMap = new Map<ID | ProductionKey, ListProductProduction>();

  private uiTaskMap = new Map<UITaskKey, UITask>();

  private destroy$ = new Subject();
  private taskDeleteSub: Subscription;

  isLoading = true;
  isShowConfirmationMenu = false;

  constructor(
    private tasksService: TaskService,
    private technologiesService: TechnologyService,
    private modalService: ModalService,
    private cd: ChangeDetectorRef,
    private adapterService: AdapterService,
    private router: Router,
    private route: ActivatedRoute,
    private calendar: CalendarService,
  ) {
    this.hours = Array(7).fill(0).map((x, i) => i);
  }

  /** @deprecated */
  public get startDate() {
    return this.dates.values().next().value;
  }

  ngOnInit(): void {

    if (this.isPlan) {
      this.isExpanded = false;
      this.isRoot = true;
    }

    this.technologiesService.get().subscribe(technologies => {
      this.technologies = technologies;
      this.allTechnologies = technologies;
      this.technologiesPlanning = technologies;
      this.getTasks().subscribe();
    });
    document.body.style.overflow = 'hidden';

    this.taskDeleteSub = this.tasksService.delete$.subscribe(taskSet => this.onTaskDelete(taskSet));

    // on esc return to planing mode
    fromEvent<KeyboardEvent>(window, 'keydown').pipe(
      takeUntil(this.destroy$),
      filter(event => event.key === 'Escape'),
      filter(() => this.mode !== 'planning'),
    ).subscribe(event => this.mode = 'planning');
  }

  updateTechnologies() {
    this.availableTechnologies.clear();
    this.availableTechnologiesPlanning.clear();
    // this.tasks.filter(t => !t.is_locked && t.status !== 'Ordered' && t.status !== 'On stock')
    this.tasks.filter(t => !t.is_locked && t.status === 'Deficit')
      .forEach(task => {
        if (!task.technology && task.list_product.nomenclature.type === '1') {
          this.availableTechnologies.add('Assembly');
        } else {
          this.availableTechnologies.add(task.technology);
        }
      });

    this.tasks.forEach(task => {
      if (!task.technology && task.list_product.nomenclature.type === '1') {
        this.availableTechnologiesPlanning.add('Assembly');
      } else {
        this.availableTechnologiesPlanning.add(task.technology);
      }
    });
    this.technologies = this.allTechnologies.filter(t => this.availableTechnologies.has(t.name));
    this.technologiesPlanning = this.allTechnologies.filter(t => this.availableTechnologiesPlanning.has(t.name));
  }

  getTasks(rootId = null): Observable<Task[]> {
    // Используются для получения тасков
    this.rootId = rootId ? rootId : this.rootId;

    let querySearch: QuerySearch[] = [{name: 'for_root_id__in', value: this.rootId}];

    // let option = 'for_root_id__in';
    // let value: string | boolean = this.rootId;

    if (this.isPlan && !rootId) {
      // option = 'is_root';
      // value = true;

      querySearch = [
        {name: 'is_root', value: true},
        {name: 'statuses', value: '0,1,2,3'}
      ];
    }

    return this.tasksService.get(querySearch).pipe(map(tasks => {
        // избавляемся от дубликатов задач
        tasks = tasks.filter(task => !this.tasks.find(t => task.id === t.id));

        // преобразуем строки даты в дату
        tasks = tasks.map(task => {
          return {
            ...task,
            production_type: task.list_product.nomenclature.type === '0' ? '2' : task.production_type,
            start_date: new Date(task.start_date),
            end_date: new Date(task.end_date),
            unconfirmed_end_date: task.unconfirmed_end_date ? new Date(task.unconfirmed_end_date) : null,
          };
        });

        // добавляем технологии загруженных задач в список всех используемых технологий
        // tasks.filter(t => !t.is_locked && t.status !== 'Ordered' && t.status !== 'On stock')
        tasks.filter(t => !t.is_locked && t.status === 'Deficit')
          .forEach(task => {
            if (!task.technology && task.list_product.nomenclature.type === '1') {
              task.technology = 'Assembly';
              this.availableTechnologies.add('Assembly');
            } else {
              this.availableTechnologies.add(task.technology);
            }
          });

        tasks.forEach(task => {
          if (!task.technology && task.list_product.nomenclature.type === '1') {
            this.availableTechnologiesPlanning.add('Assembly');
          } else {
            this.availableTechnologiesPlanning.add(task.technology);
          }

          task.list_product.task_required_quantity = task.required_quantity;
          task.groupId = '';
        });

        this.technologies = this.allTechnologies.filter(t => this.availableTechnologies.has(t.name));
        this.technologiesPlanning = this.allTechnologies.filter(t => this.availableTechnologiesPlanning.has(t.name));

        this.tasks.push(...tasks);
        this.loadingTasks = [...this.tasks];
        if (this.isPlan && this.isRoot) {
          this.chartRootTasks = [];

          this.tasks.forEach(task => {
            if (!this.chartRootTasks.find(t => t.family_id === task.family_id &&
              t.list_product.id === task.list_product.id && t.technology === task.technology &&
              task.list_product.tree_id === t.list_product.tree_id)) {
              this.chartRootTasks.push(task);
            }
          });

          this.chartRootTasks.forEach(root => root.label = `(${root.list_product.id}) ${root.list_product.nomenclature.name}`);
          this.chartRootTasks.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
          this.isRoot = false;
        }

        this.updateTimeline();
        this.updateTree();
        this.update();
        this.paint();

        this.isLoading = false;

        return tasks;
      }),
      untilDestroyed(this)
    );
  }

  generateTasksGroups() {
    this.tasks.forEach(task => {
      if (task.list_product.level !== 0) {
        const filteredTasks = this.tasks.filter(t => t.list_product.nomenclature.id ===
          task.list_product.nomenclature.id && t.list_product.level === task.list_product.level &&
          t.family_id === task.family_id);

        const firstTasks = filteredTasks.filter(t => !t.previous_task);

        const parentTasks: Task[] = [];

        let groupId = 0;

        firstTasks.forEach(t => {
          const uiParent = t.list_product.id;
          groupId++;

          let currentTask = t;

          while (currentTask?.next_task) {
            currentTask.uiGroupId = groupId;
            currentTask.uiParent = uiParent;
            parentTasks.push(currentTask);
            currentTask = this.tasks.find(t2 => t2.id === currentTask.next_task);
          }

          currentTask.uiGroupId = groupId;
          currentTask.uiParent = uiParent;
          parentTasks.push(currentTask);
        });

        parentTasks.filter(t => t.uiGroupId === task.uiGroupId).forEach(t => {
          task.groupId += `${t.technology}/${t.status}/${t.list_product.nomenclature.id}/${t.list_product.level}`;
          const ff = this.tasks.filter(p => p.list_product.parent === task.uiParent);
          ff.forEach(p => {
            task.groupId += `${p.technology}/${p.status}/${p.list_product.nomenclature.id}/${p.list_product.level}`;
          });
        });
      }
    });
  }

  updateTimeline() {
    /** Прибалвяет к дате дни */
    const addDays = (d: Date, days: number): Date => {
      const result = new Date(d.getTime());
      result.setDate(result.getDate() + days);
      result.setHours(0, 0, 0, 0);
      return result;
    };

    const min = new Date(Math.min(...this.tasks.filter(t => t.start_date).map(t => t.start_date.getTime())));
    let max = new Date(Math.max(...this.tasks.filter(t => t.end_date).map(t => t.end_date.getTime())));
    const maxUnconfirmed = new Date(Math.max(...this.tasks.filter(t => t.unconfirmed_end_date).map(t => t.unconfirmed_end_date.getTime())));
    if (maxUnconfirmed && maxUnconfirmed > max) {
      max = maxUnconfirmed;
    }

    let x = 0;

    this.dates.clear();

    let date = addDays(min, 0);
    do {
      const dateInfo = {
        date: new Date(date),
        isVac: this.calendar.isVac(date),
        x,
      };

      dateInfo.date.setHours(0, 0, 0, 0);

      this.dates.set(dateInfo.date.getTime(), dateInfo);

      date = addDays(date, 1);
      x += dateInfo.isVac ? this.vacationCoords : this.weekdayCoords;

    } while (date <= max);

    this.innerContentWidth = 516;

    // высчитываем длину контейнера
    this.dates.forEach(day => {
      if (!day.isVac) {
        this.innerContentWidth += this.weekdayCoords;
      } else {
        this.innerContentWidth += this.vacationCoords;
      }
    });

    this.datesByCoords = Array.from(this.dates.values()).reverse();
  }

  getX(date: Date): number {
    const dateInfo = this.getDateInfo(date);

    const dateShift = dateInfo?.x;
    const hoursShift = date.getHours() * (dateInfo?.isVac ? this.scaleHourVacationDay : this.scaleHourWeekdayDay);

    return dateShift + hoursShift;
  }

  getDate(x: number): Date {
    const dateInfo = this.getDateInfo(x);

    const delta = x - dateInfo.x;
    const hourScale = dateInfo.isVac ? this.scaleHourVacationDay : this.scaleHourWeekdayDay;
    const result = new Date(dateInfo.date);

    result.setHours(delta / hourScale);
    return result;
  }

  getDateInfo(x: number | Date): DateInfo {
    let info: DateInfo;

    if (x instanceof Date) {
      const dateStart = new Date(x);
      dateStart.setHours(0, 0, 0, 0);
      info = this.dates?.get(dateStart.getTime());
    } else {
      info = this.datesByCoords.find(i => i.x <= x);
    }

    // if (!info) {
    //   throw new Error(`Координата "${x}" выходит за пределы графика`);
    // }
    return info;
  }

  getTaskDays(task: UITask) {
    const dates = new Map<number, DateInfo>();

    /** Прибалвяет к дате дни */
    const addDays = (d: Date, days: number): Date => {
      const result = new Date(d.getTime());
      result.setDate(result.getDate() + days);
      return result;
    };

    dates.clear();

    let date = addDays(task.start_date, 0);
    date.setHours(0, 0, 0, 0);
    // const taskEndDate = task.unconfirmed_end_date ? task.unconfirmed_end_date : task.end_date;
    const taskEndDate = task.end_date;
    do {

      const dateInfo = {
        date: new Date(date),
        isVac: this.calendar.isVac(date),
        x: this.getX(date) - task.left,
      };

      dateInfo.date.setHours(0, 0, 0, 0);

      dates.set(dateInfo.date.getTime(), dateInfo);

      date = addDays(date, 1);
    } while (date <= taskEndDate);
    if (task.unconfirmed_end_date && task.unconfirmed_end_date > task.end_date) {
      do {
        const dateInfo = {
          date: new Date(date),
          isVac: this.calendar.isVac(date),
          x: this.getX(date) - task.left,
        };

        dateInfo.date.setHours(0, 0, 0, 0);

        dates.set(dateInfo.date.getTime(), dateInfo);

        date = addDays(date, 1);
      } while (date <= task.unconfirmed_end_date);
    }


    task.days = (Array.from(dates.values()));
  }

  moveBorder(event) {
    this.isShowBorder = true;

    if (this.frameBorderRight !== event.edges.left) {
      if (this.frameBorderRight < event.edges.left) {
        this.frameBorderRight += 12;
      } else {
        this.frameBorderRight -= 12;
      }
      if (this.panelBorder) {
        this.panelBorder.nativeElement.style.right = `${-this.frameBorderRight}px`;
      }
    }
  }

  resizePanel(event) {
    const newSize = this.productionNameWidth + event.edges.left;

    if (newSize > 70) {
      this.productionNameWidth = newSize;
    } else {
      this.productionNameWidth = 70;
    }

    this.frameBorderRight = 0;
    this.isShowBorder = false;

    if (this.panelBorder) {
      this.panelBorder.nativeElement.style.right = `0px`;
    }
  }

  filteredRoot(evt) {
    const ids: number[] = this.selectedProductions.map(t => t.family_id);
    if (ids.length > 0) {
      this.isRootFiltered = true;
      this.productions.forEach(production => {
        production.isVisible = false;
        ids.forEach(id => {
          if (id === production.tasks[0].family_id) {
            production.isVisible = true;
          }
        });
      });
    } else {
      this.isRootFiltered = false;
      this.productions.forEach(production => production.isVisible = true);
    }
  }

  filterTasks(isFilteredAll?) {
    this.productions.forEach(production => production.isVisible = false);
    this.productions.forEach(production => {
      production.isFiltered = Boolean(production.tasks.find(task => {
        return !this.selectedTechnologies.length ||
          (isFilteredAll ?
            this.selectedTechnologies.includes(task.technology ? task.technology : 'Assembly') :
            this.isTaskMeetsFilterConditions(task));
      }));

      // делаем видимыми родительские элементы
      if (production.isFiltered) {
        let parent = production;
        while (parent) {
          parent.isVisible = true;
          parent = parent.parent;
        }
      }
    });
  }

  filterTasksForStatus() {
    const selectedTasks: Task[] = [];
    this.filteredTasksSet.clear();

    if (!this.selectedStatuses) {
      this.selectedStatuses = [];
    }

    if (!this.selectedFilterTechnologies) {
      this.selectedFilterTechnologies = [];
    }

    if (!this.selectedProductionTypes) {
      this.selectedProductionTypes = [];
    }

    this.productions.forEach(production => production.isVisible = false);
    this.productions.forEach(production => {
      let tasks = production.tasks;
      let filteredTasks = [];

      if (this.isPlan) {
        if (this.selectedProductions.length) {
          this.selectedProductions.forEach((prod, idx) => {
            const tt = tasks.filter(t => t.family_id === prod);
            filteredTasks = filteredTasks.concat(tt);

            if (idx === this.selectedProductions.length - 1) {
              tasks = [...filteredTasks];
              filteredTasks = [];
            }
          });
        }
      }

      console.log(this.selectedStatuses);
      console.log(this.selectedFilterTechnologies);

      if (this.selectedStatuses.length) {
        this.selectedStatuses.forEach((status, idx) => {
          const tt = tasks.filter(t => t.status === status);
          filteredTasks = filteredTasks.concat(tt);

          if (idx === this.selectedStatuses.length - 1) {
            tasks = [...filteredTasks];
            filteredTasks = [];
          }
        });
      }

      if (this.selectedFilterTechnologies.length) {
        this.selectedFilterTechnologies.forEach((technology, idx) => {
          const tt = tasks.filter(t => t.technology === technology);
          filteredTasks = filteredTasks.concat(tt);

          if (idx === this.selectedFilterTechnologies.length - 1) {
            tasks = [...filteredTasks];
            filteredTasks = [];
          }
        });
      }

      if (this.selectedProductionTypes.length) {
        this.selectedProductionTypes.forEach((type, idx) => {
          const tt = tasks.filter(t => t.production_type === type);
          filteredTasks = filteredTasks.concat(tt);

          if (idx === this.selectedProductionTypes.length - 1) {
            tasks = [...filteredTasks];
            filteredTasks = [];
          }
        });
      }

      tasks.forEach(t => {
        this.filteredTasksSet.add(t.id);
        if (this.isPlan) {
          t.tasks.forEach(task => selectedTasks.push(task));
        }
      });

      production.isFiltered = Boolean(production.tasks.find(task => {
        return this.test(task);
      }));

      // делаем видимыми родительские элементы
      if (production.isFiltered) {
        let parent = production;
        while (parent) {
          parent.isVisible = true;

          if (this.isPlan) {
            parent.tasks[0].tasks.forEach(task => selectedTasks.push(task));
            this.updateMargins(parent);
          }

          parent = parent.parent;
        }
      }
    });

    if (this.isPlan) {
      this.reserveTasks = [...this.tasks];
      this.tasks = [...selectedTasks];

      this.productions.filter(p => p.isVisible).forEach(production => {
        production.tasks.forEach(task => {
          task.left = this.getX(task.start_date);
          task.width = this.getX(task.end_date) - task.left;
          this.updateTimeline();
          this.getTaskDays(task);
          this.updateMargins(production);
        });
      });

      this.updateTechnologies();
    }
  }


  selectTasks() {
    this.selectedTasks.clear();
    this.selectedTechnologiesPlanning.forEach(t => {
      this.productions.forEach(production => {
        production.tasks.forEach(task => {
          task.production = production;
          if (task.technology === t) {
            this.selectedTasks.add(task);
          } else if (task.list_product.nomenclature.type !== '0' && !task.technology && t === 'Assembly') {
            this.selectedTasks.add(task);
          }
        });
      });
    });
  }

  makeOrder() {
    const technologies = this.getSelectedTechnologies();
    const productions = this.getSelectedProduction();
    if (technologies.length > 0) {
      this.tasksService.makeOrderDialog(technologies).subscribe(response => {
        if (response) {
          this.filterTasks();

          const tasks = [];

          technologies.forEach(tech => {
            tech.tasks.forEach(task => {
              tasks.push(task);
            });
          });

          forkJoin(...tasks.map(task => this.tasksService.getById(task.id))).subscribe(newTasks => {
            const nTasks = newTasks.flat();

            tasks.forEach(ta => {
              const findTask = this.tasks.find(t => t.id === ta.id);

              if (findTask) {
                // @ts-ignore
                const newFindTask = nTasks.find(task => task.id === ta.id);
                // @ts-ignore
                findTask.created_order = newFindTask.created_order;
              }
            });

            productions.forEach(p => {
              p.tasks.forEach(uiTask => {
                uiTask.tasks.forEach(task => {
                  const findTask = tasks.find(t => t.id === task.id);

                  if (findTask) {
                    // @ts-ignore
                    const newFindTask = nTasks.find(t => task.id === t.id);
                    // @ts-ignore
                    findTask.created_order = newFindTask.created_order;
                    // @ts-ignore
                    uiTask.created_order = newFindTask.created_order;
                  }
                });
              });
            });
          });

          tasks.forEach(task => {
            this.tasks.find(t => t.id === task.id).is_locked = true;
          });
          this.updateTechnologies();
        }
      });
    }
  }

  editTasks() {
    if (this.selectedTasks.size > 0) {
      const selectedTasks = Array.from(this.selectedTasks);
      this.tasksService.editTasksDialog(selectedTasks).subscribe((positions) => {
        if (positions.start && positions.end) {
          selectedTasks.forEach(task => {
            this.applyPositionTask(task, task.production, positions);
          });
        }

        if (positions.shiftByAmount && positions.shiftByType) {
          this.updateIfShiftIsApplied(selectedTasks, positions);
        }
      });
    }
  }

  private updateIfShiftIsApplied(selectedTasks: UITask[], positions) {
    selectedTasks.forEach(task => {
      if (task.list_product.nomenclature.type !== ENomenclatureType.PURCHASED) {

        const shiftAmount = positions.shiftByAmount;
        const shiftType = positions.shiftByType;

        let startDate = new Date(task.start_date);
        let endDate = new Date(task.end_date);

        if (shiftType === ShiftTypes.DAYS) {
          startDate = new Date(startDate.setDate(startDate.getDate() + shiftAmount));
          endDate = new Date(endDate.setDate(endDate.getDate() + shiftAmount));
        }

        if (shiftType === ShiftTypes.HOURS) {
          startDate = new Date(startDate.setHours(startDate.getHours() + shiftAmount));
          endDate = new Date(endDate.setHours(endDate.getHours() + shiftAmount));
        }

        if (shiftType === ShiftTypes.WEEKS) {
          startDate = new Date(startDate.setDate(startDate.getDate() + shiftAmount * 7));
          endDate = new Date(endDate.setDate(endDate.getDate() + shiftAmount * 7));
        }

        if (shiftType === ShiftTypes.MONTHS) {
          startDate = new Date(startDate.setMonth(startDate.getMonth() + shiftAmount));
          endDate = new Date(endDate.setMonth(endDate.getMonth() + shiftAmount));
        }

        const newDates = {
          start: startDate,
          end: endDate
        };

        this.applyPositionTask(task, task.production, newDates);
      }
    });
  }

  getDuration(task) {
    return (task.end_date.getTime() - task.start_date.getTime()) / 1000 / 60 / 60;
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
    this.destroy$.next(null);
    this.taskDeleteSub.unsubscribe();
  }

  onTaskDelete(set: TaskSet) {
    if (!set.production.parent) {
      this.router.navigateByUrl('dash/production/plan').then();
      return;
    }

    this.tasks = this.tasks.filter(t => !set.tasks.includes(t));
    this.selectedTasks.delete(set as UITask);
    set.production.tasks = set.production.tasks.filter(t => t !== set);
    this.updateTechnologies();

    if (set.production.tasks.length === 0) {
      set.production.parent.children = set.production.parent.children.filter(p => p !== set.production);
      this.productions = this.productions.filter(p => p !== set.production);
      this.paint();
    }
  }

  public updateTaskDates(task: UITask) {
    const data = {
      start_date: task.start_date,
      end_date: task.end_date
    };

    const rootTask = this.getLastTask;

    if (rootTask && rootTask.list_product.id === task.list_product.id && rootTask.planning_status === PlanningStatus.PLANNED) {
      rootTask.planning_status = PlanningStatus.WAITING_CONFIRMATION;
    }
    this.tasksService.update(task, data).pipe(take(1)).subscribe(() => {
      task.isSaved = true;
      setTimeout(() => task.isSaved = false, 1000);
    });
  }

  get getLastTask(): Task {
    return this.rootProductions[0]?.tasks?.find(task => !task.next_task && !task.parent_task);
  }

  public updateMargins(production: ListProductProduction) {
    production.tasks.map(task => {
      task.left = this.getX(task.start_date);
      task.width = this.getX(task.end_date) - task.left;

      if (production.product && task.unconfirmed_end_date) {
        task.unconfirmedLeft = null;
        task.unconfirmedSmallerWidth = null;
        task.unconfirmedBiggerWidth = null;
        if (task.unconfirmed_end_date > task.end_date) {
          task.unconfirmedLeft = task.left;
          task.unconfirmedBiggerWidth = this.getX(task.unconfirmed_end_date) - task.left;
        }
        if (task.unconfirmed_end_date < task.end_date) {
          const date = task.unconfirmed_end_date;
          task.unconfirmedLeft = this.getX(date);
          task.unconfirmedSmallerWidth = this.getX(task.end_date) - task.unconfirmedLeft;
        }

        this.hasDeliveryDateChanges = true;
        if (!task.parent_task && !task.next_task && task.list_product.level === 0) {
          this.hasRootDeliveryDateChanges = true;
        } else {
          this.hasChildDeliveryDateChanges = true;
        }
      }
      this.getTaskDays(task);
      return task;
    });
  }

  public updateParentMargins(production: ListProductProduction, isSaved = true) {
    let parent = production;
    while (parent) {
      const childrenEnd = parent.getChildrenEnd();
      parent.tasks.reduce((end, task) => {
        if (task.start_date.getTime() < end.getTime()) {
          task.duration = (task.end_date.getTime() - task.start_date.getTime()) / 1000 / 60 / 60;
          const startDate = end;
          task.start_date = startDate;
          task.end_date = new Date(task.start_date.getTime() + task.duration * 60 * 60_000);
          task.apply();
          this.updateTimeline();
          task.left = this.getX(task.start_date);
          task.width = this.getX(task.end_date) - task.left;
          if (isSaved) this.updateTaskDates(task);
          this.getTaskDays(task);
        }
        return task.end_date;
      }, childrenEnd);
      parent = parent.parent;
    }
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    const prods = this.isPlan ? this.productions.filter(p => p.isActive && p.isVisible) : this.productions.filter(p => p.isActive);
    if (this.isPlan) {
      const toggleProductions = (productions: ListProductProduction[]) => productions.forEach(production => {
        this.toggleProduction(production, this.isExpanded)
          .subscribe(() => {
            toggleProductions(production.children);
          });
      });
      toggleProductions(prods.length > 0 ? prods : this.productions.filter(p => p.isVisible));
    } else {
      const toggleProductions = (productions: ListProductProduction[]) => productions.forEach(production => {
        this.toggleProduction(production, this.isExpanded)
          .subscribe(() => toggleProductions(production.children));
      });
      toggleProductions(prods.length > 0 ? prods : this.productions);
    }
  }

  toggleProduction(production: ListProductProduction, isExpanded?: boolean): Observable<boolean> {
    return new Observable((subscriber) => {
      production.isExpanded = isExpanded !== undefined ? isExpanded : !production.isExpanded;

      if (production.isExpanded && production.hasChildren && !production.children.length) {
        this.getTasks(production.tasks[0].tasks[0].id).subscribe(() => {
          if (this.isRootFiltered) this.updateTimeline();
          production.updateGroups();
          subscriber.next(isExpanded);
          subscriber.complete();
        }, error => subscriber.error(error));
      } else {
        subscriber.next(production.isExpanded);
        subscriber.complete();
      }
    });
  }

  toggleProduction2(production: ListProductProduction, isExpanded?: boolean): Observable<boolean> {
    production.isExpanded = isExpanded !== undefined ? isExpanded : !production.isExpanded;

    if (production.isExpanded && production.hasChildren && !production.children.length) {
      return this.getTasks(production.product.tree_id).pipe(
        tap(() => production.updateGroups()),
        mapTo(production.isExpanded),
      );
    }

    return of(production.isExpanded);
  }

  toggleAllProductsSelected() {
    if (!this.allProductsOnSelected) {
      this.productions.map(p => p.isSelected = false);
    } else {
      this.productions.map(p => p.isSelected = true);
    }
  }

  changeAllProductsOnSelected() {
    // Если не выбрана хотя бы одна загруженность, значение all становится false
    this.allProductsOnSelected = this.productions.every(p => p.isSelected);
  }

  cancelEditTasks() {
    this.mode = 'planning';
    this.selectedTasks.clear();
    this.productions.map(t => t.isVisible = true);
    this.selectedTechnologies = [];
    this.selectedTechnologiesPlanning = [];
  }

  cancelMakeOrder() {
    this.mode = 'planning';
    this.productions.map(t => t.isVisible = true);
    this.selectedTechnologies = [];
    this.filterTasksForStatus();
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

  addTasks(production) {
    this.tasksService.addTasks(production.tasks[0].tasks, this.rootId).pipe(
      map(tasks => tasks.filter(task => !this.tasks.find(t => task.id === t.id))))
      .subscribe(tasks => {
        console.log(tasks);
        tasks.forEach(task => {
          task.production_type = task.list_product.nomenclature.type === '0' ? '2' : task.production_type;
          task.start_date = new Date(task.start_date);
          task.end_date = new Date(task.end_date);
          task.list_product.task_required_quantity = task.required_quantity;
        });

        this.tasks.push(...tasks);
        this.updateTimeline();
        this.updateTree();
        this.updateParentMargins(production);
        this.updateMargins(production);
        this.updateTree();
        this.update();
        this.paint();
        this.updateTechnologies();
      });
  }

  private highlightChildrenEnd() {
    this.childrenEndHighlighted = true;
    setTimeout(() => this.childrenEndHighlighted = false, 2_500);
  }

  private applyPositionTask(task: UITask, production: ListProductProduction, position: { start: Date, end: Date }) {
    // validate new position
    const prevTasks = production.tasks.filter(t => t.start_date.getTime() < task.start_date.getTime());

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
      const childrenEnd = production.getChildrenEnd();
      if (childrenEnd.getTime() > position.start.getTime()) {
        this.highlightChildrenEnd();
        position.start.setTime(childrenEnd.getTime());
        // если переместили, а не изменили размер
        if (position.end.getTime() < task.end_date.getTime()) {
          position.end.setTime(position.start.getTime() + task.duration * 60 * 60_000);
        }
      }
    }
    const nextTasks = production.tasks.filter(t => t.start_date.getTime() > task.start_date.getTime());

    // подвинуть следующие задачи
    nextTasks.reduce((prevEnd, nextTask) => {
      if (nextTask.start_date.getTime() < prevEnd.getTime()) {
        nextTask.duration = (nextTask.end_date.getTime() - nextTask.start_date.getTime()) / 60 / 1000;
        nextTask.start_date.setTime(prevEnd.getTime());
        nextTask.end_date.setTime(nextTask.start_date.getTime() + nextTask.duration * 60_000);
        this.updateTaskDates(nextTask);
      }
      return nextTask.end_date;
    }, position.end);

    // apply new position
    task.start_date = position.start;
    task.end_date = position.end;
    task.duration = task.duration = this.getDuration(task);

    task.apply();

    this.updateTimeline();
    this.updateMargins(production);
    this.updateParentMargins(production.parent);
    this.updateTaskDates(task);
  }

  public updateTree() {
    this.productionMap = new Map<ID | ProductionKey, ListProductProduction>();
    this.uiTaskMap = new Map<UITaskKey, UITask>();
    this.productions = [];
    this.rootProductions = [];

    this.generateTasksGroups();

    const taskMap = new Map<string, Task>();

    // Заполняем соответствия структуры продуктов
    this.tasks.forEach(task => {
      const productKey = `${task.family_id}:${task.list_product.id}`;
      taskMap.set(productKey, task);
    });

    const getProductionKey = (task: Task) => {
      let key = ``;
      do {
        key = `${task.family_id}:${task.list_product.nomenclature.id}:${task.groupId}:${task.list_product.level}/${key}`;
        task = taskMap.get(`${task.family_id}:${task.list_product.parent}`);
      } while (task);
      return key;
    };

    this.tasks.filter(t => t.is_added_manually).forEach((t, i) => t.technologyUid = i + 1);

    // Заполняем соответствия продакшнов с учётом группировок
    this.tasks.forEach(task => {
      const productId = task.list_product.id;
      const productionKey = getProductionKey(task);
      if (!this.productionMap.has(productionKey)) {
        const newProduction = new ListProductProduction({
          // @ts-ignore
          task,
          product: task.list_product,
          isExpanded: !this.isPlan,
          isGrouped: task.is_grouped,
        });
        this.productions.push(newProduction);
        this.productionMap.set(productionKey, newProduction);
      }

      const production = this.productionMap.get(productionKey);
      this.productionMap.set(`${productId}:${task.family_id}`, production);

      if (!production.products.find(p => p.id === task.list_product.id)) {
        production.products.push(task.list_product);
      }

      if (production.products.length > 1) {
        production.isGrouped = true;
      }
      const tech = task.technology ? task.technology : this.type(task.list_product.nomenclature.type);

      const taskKey = `${productionKey}:${tech}:${task.technologyUid}`;
      if (!this.uiTaskMap.has(taskKey)) {
        const newUiTask = new UITask(task);
        this.uiTaskMap.set(taskKey, newUiTask);
        production.tasks.push(newUiTask);
      }

      const uiTask = this.uiTaskMap.get(taskKey);
      if (!uiTask.tasks.find(t => t.id === task.id)) {
        uiTask.tasks.push(task);
      }
    });

    // Построение дерева
    let index = 0;
    this.productionMap.forEach((production) => {
      production.index = index++;
      production.parent = this.productionMap.get(`${production.product.parent}:${production.tasks[0].family_id}`);

      production.isExpanded = production.task.list_product.level === 0 ? !this.isPlan : !production.isBlocked;

      if (production.parent) {
        if (!production.parent.children.includes(production)) {
          production.parent.children.push(production);
        }
      } else {
        if (!this.rootProductions.includes(production)) {
          this.rootProductions.push(production);
        }
      }
    });
  }

  update() {
    this.rootProductions = this.rootProductions.sort((a, b) =>
      new Date(b.tasks[0].created).getTime() - new Date(a.tasks[0].created).getTime());

    this.productionMap.forEach((production) => {
      this.updateMargins(production);
      production.updateGroups();
    });
  }

  private paint() {
    // рекурсивный проход по дереву
    const paintingProduction = (production: ListProductProduction, colorIndex = 0) => {
      if (production.product.nomenclature.type === '1') {
        production.color = this.colors[colorIndex++ % this.colors.length];
      }
      return production.children.reduce((index, child) => paintingProduction(child, index), colorIndex);
    };

    this.rootProductions.reduce((index, rootProduction) => paintingProduction(rootProduction, index), 0);
  }

  private getSelectedTechnologies() {
    return this.productions
      // берём отфильтрованные линии производства
      .filter(p => p.isFiltered)
      // берём только отмеченные галочками
      .filter(p => p.isSelected)
      // берём из них задачи
      .map(p => p.tasks)
      // делаем плоский список задач без вложенностей
      .reduce((acc, val) => acc.concat(val), [])
      // фильтруем задачи отдельно т.к. в одной линии может быть несколько задач
      .filter(task => this.isTaskMeetsFilterConditions(task))
      ;
  }

  private getSelectedProduction() {
    return this.productions
      // берём отфильтрованные линии производства
      .filter(p => p.isFiltered)
      // берём только отмеченные галочками
      .filter(p => p.isSelected);
  }

  private isTaskMeetsFilterConditions(task: Task) {
    return this.selectedTechnologies.includes(task.technology)
      && !task.is_locked && task.status !== 'Not processed' && task.status !== 'Ordered' && task.status !== 'On stock';
  }

  private test(task: Task) {
    if (this.filteredTasksSet.has(task.id)) return true;

    return false;
  }

  togglePlanScale(operation: 'plus' | 'minus') {
    if (operation === 'minus') {
      this.planScale -= 25;
    }

    if (operation === 'plus') {
      this.planScale += 25;
    }

    if (this.planScale < 25) {
      this.planScale = 25;
    }

    if (this.planScale > 100) {
      this.planScale = 100;
    }

    switch (this.planScale) {
      case 100: {
        this.vacationCoords = 24;
        this.weekdayCoords = 288;
        this.marginTimeLeft = 34;
        this.scaleHourVacationDay = 1;
        this.scaleHourWeekdayDay = 12;
        break;
      }
      case 75: {
        this.vacationCoords = 18;
        this.weekdayCoords = 216;
        this.marginTimeLeft = 25;
        this.scaleHourVacationDay = 1;
        this.scaleHourWeekdayDay = 9;
        break;
      }
      case 50: {
        this.vacationCoords = 12;
        this.weekdayCoords = 144;
        this.marginTimeLeft = 16;
        this.scaleHourVacationDay = 1;
        this.scaleHourWeekdayDay = 6;
        break;
      }
      case 25: {
        this.vacationCoords = 6;
        this.weekdayCoords = 72;
        this.marginTimeLeft = 7.125;
        this.scaleHourVacationDay = 1;
        this.scaleHourWeekdayDay = 3;
      }
    }

    this.productions.forEach(production => {
      production.tasks.forEach(task => {
        task.left = this.getX(task.start_date);
        task.width = this.getX(task.end_date) - task.left;
        this.getTaskDays(task);
        this.updateTimeline();
        this.updateMargins(production);
      });
    });
  }


  confirmDateChanges(setRootUnconfirmed: boolean = false) {

    this.modalService.confirm('danger').pipe(take(1)).subscribe(confirm => {
      if (confirm) {
        this.tasksService.confirmEndDates(+this.rootId, {is_unconfirmed_root_date: setRootUnconfirmed}).subscribe(res => {
          window.location.reload();
        });
      }
    });
  }

  sendPlanToConfirmation() {
    const rootTask = this.getLastTask;
    const familyId = rootTask.family_id;
    this.tasksService.sendToPlanningConfirmation({family_id: familyId}).subscribe(() => {
      rootTask.planning_status = PlanningStatus.WAITING_CONFIRMATION;
    });
  }

  sendPlanToCorrections() {
    const rootTask = this.getLastTask;
    const familyId = rootTask.family_id;
    this.tasksService.sendToPlanningCorrections({family_id: familyId, change_request: true}).subscribe(() => {
      rootTask.change_request = true;
    });
  }

  toggleShowConfirmation() {
    this.isShowConfirmationMenu = !this.isShowConfirmationMenu;
  }
}
