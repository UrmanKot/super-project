import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {Task} from '@shared/models/task';
import {debounceTime, distinctUntilChanged, filter, finalize, map, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdapterService} from '@shared/services/adapter.service';
import {QuerySearch} from '@shared/models/other';
import {TaskService} from '@shared/services/task.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {TreeNode} from 'primeng/api';
import {Nomenclature} from '@shared/models/nomenclature';
import {Category} from '../../../product-structure/models/category';
import {cloneDeep} from 'lodash-es';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-plan-list',
  templateUrl: './manufacturing-plan-list.component.html',
  styleUrls: ['./manufacturing-plan-list.component.scss']
})
export class ManufacturingPlanListComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  searchForm: FormGroup = this.fb.group({
    list_product__nomenclature__name: [null],
    list_product__nomenclature__code: [null],
    statuses: [null],
    type_with_number: [''],
  });

  statuses = [
    {id: 0, name: 'Not processed', value: '0'},
    {id: 1, name: 'Deficit', value: '1'},
    {id: 2, name: 'Rework', value: '2'},
    {id: 3, name: 'Ordered', value: '3'},
    {id: 4, name: 'On stock', value: '4'},
  ];

  mode: 'hierarchy' | 'list' = 'hierarchy';

  isDeleting = false;

  tasks: Task[] = [];
  categories: Category[] = [];
  structureCategories: TreeNode[];

  selectedTasksNodes: TreeNode<any>[] = [];

  ownProductionCategorizedList: TreeNode<Task>[];

  expanseMap = {};

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;
  selectedTasks: Task[] = [];

  isStartFirstPage = false;
  isShowAll = false;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  serial$: Subject<void> = new Subject<void>();

  tasks$: Observable<Task[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.taskService.get(this.query)),
    tap(response => this.tasksCount = response.length),
    map(response => this.filterTasks(response)),
    tap(() => this.paginateToFistPage()),
    tap(() => this.getCategories()),
    tap(() => this.fillCategorizedTree()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  tasksCount = 0;

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    private readonly taskService: TaskService,
    private categoryService: ProductStructureCategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.tasks$.subscribe();

    this.name$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.code$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.serial$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.getStructureCategories();
  }

  getStructureCategories() {
    if (this.structureCategories) {
      this.mapExpansion();
    }
    this.categoryService.get().pipe(
      tap((categories) => this.createStructureCategoriesTree(categories))
    ).subscribe();
  }

  createStructureCategoriesTree(data) {
    const dd = [];
    data.forEach(element => {
      const ins = {data: element, expanded: false};
      if (this.expanseMap) {
        ins.expanded = this.expanseMap[element.id];
      }
      dd.push(ins);
    });
    const root = [];
    const idMapping = dd.reduce((acc, el, i) => {
      acc[el.data.id] = i;
      return acc;
    }, {});
    dd.forEach(el => {
      // Handle the root element
      if (el.data.parent === null) {
        root.push(el);
        return;
      }
      // Use our mapping to locate the parent element in our data array
      const parentEl = dd[idMapping[el.data.parent]];
      // Add our current el to its parent's `children` array
      parentEl.children = [...(parentEl.children || []), el];
      if (parentEl.children.length === 0) {
        delete parentEl.children;
      }

    });
    this.structureCategories = root;
    // this.ownProductionCategorizedList = cloneDeep(this.categories);
  }

  mapExpansion() {
    this.structureCategories.forEach(element => {
      this.createExpanseMap(element);
    });
  }

  createExpanseMap(node) {
    if (node.expanded) {
      this.expanseMap[node.data.id] = node.expanded;
    } else {
      this.expanseMap[node.data.id] = false;
    }
    if (node.children) {
      node.children.forEach(element => {
        this.createExpanseMap(element);
      });
    }
  }

  onSelectMode(mode: 'hierarchy' | 'list') {
    this.mode = mode;
  }

  filterTasks(tasks: Task[]) {
    let newTasks: Task[] = [];

    tasks.forEach(task => {
      if (!newTasks.find(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
        && t.technology === task.technology)) {
        const count = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
          && t.technology === task.technology).length;
        task.required_quantity = task.required_quantity * count;
        task.serials = [];

        const filteredTasks = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id
          === task.list_product.nomenclature.id && t.technology === task.technology);

        filteredTasks.forEach(t => {
          if (task.serial_numbers.length > 0) {
            t.serial_numbers.forEach(serial => {
              task.serials.push(serial);
            });
          } else if (task.serial_products.length > 0) {
            t.serial_products.forEach(serial => {
              task.serials.push(serial.serial_number);
            });
          }
        });

        newTasks.push(task);
      }
    });


    newTasks.sort((a, b) => new Date(a.created) > new Date(b.created) ? -1 : 1);
    this.tasks = newTasks;
    this.tasks = this.tasks.map(t => t);

    return newTasks;
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedTasks = [];
    this.selectedTasksNodes = [];
    this.ownProductionCategorizedList = [];
    this.tasks = [];


    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'is_root', value: true},
      // {name: 'page', value: this.currentPage},
      // {name: 'statuses', value: [0, 1, 2, 3]}
    ];

    if (!this.searchForm.get('statuses').value) {
      this.query.push({name: 'statuses', value: [0, 1, 2, 3]});
    }

    // if (!this.isShowAll) {
    //   this.query.push({name: 'paginated', value: true},);
    // }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  getStatus(status: string): string {
    switch (status) {
      case '0':
        return 'Not processed';
      case '1':
        return 'Deficit';
      case '2':
        return 'Rework';
      case '3':
        return 'Ordered';
      case '4':
        return 'On stock';
    }
  }

  paginate($event: any) {

  }

  onShowAll(b: boolean) {

  }

  getTippyContent(task: Task): string {
    let childContent = '';
    task.serials.forEach((serial, idx) => {
      childContent += `
          <li>${idx + 1}. ${serial.type_with_number ? serial.type_with_number : serial.id}</li>
      `;
    });

    return `<ul class="plan-row">${childContent}</ul>`;
  }

  getCategories() {
    this.categories = this.tasks.filter(t => t.root_nomenclature?.category).map(t => t.root_nomenclature.category);
    this.categories = this.adapterService.removeDuplicates(this.categories, x => x.id) as Category[];

    this.categories.forEach(category => {
      category.categories = this.adapterService.removeDuplicates(
        this.tasks
          .filter(t => t.root_nomenclature?.category?.id === category.id)
          .map(t => t.root_nomenclature),
        x => x.id) as Nomenclature[];

      category.categories.forEach(cat => {
        cat.tasks = this.adapterService.removeDuplicates(this.tasks
          .filter(t => t.root_nomenclature?.id === cat.id)
          .map(t => t), x => x.list_product.nomenclature.id) as Task[];

        cat.tasks = cat.tasks.map(t => {
          return {
            ...t,
          };
        });

        cat.tasks.map(t => t).forEach(task => {
          task.required_quantity = this.tasks
            .filter(t => t.list_product.nomenclature.id === task.list_product.nomenclature.id)
            .reduce((sum, t) => sum += t.required_quantity, 0);

          task.tasks = this.tasks.filter(t => t.list_product.nomenclature.id === task.list_product.nomenclature.id);
        });
      });
    });
  }

  fillCategorizedTree(): void {
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];

    this.tasks.forEach(task => {
      if (task.root_nomenclature && task.root_nomenclature.root_category) {
        const rootCatId = task.root_nomenclature.root_category.id;
        const rootCatName = task.root_nomenclature.root_category.name;
        const rootLevel = 1;

        const catId = task.root_nomenclature.id;
        const catName = task.root_nomenclature.name;
        const catLevel = 2;

        const rootExistsIndex = categoriesTemp.findIndex(cat => cat.id === rootCatId && rootLevel === cat.level);

        if (rootExistsIndex < 0) {
          categoriesTemp.push({
            id: rootCatId,
            level: rootLevel,
            name: rootCatName,
            parentId: null
          });
        }

        const catExistsIndex = categoriesTemp.findIndex(cat => cat.id === catId && catLevel === cat.level);

        if (catExistsIndex < 0) {
          categoriesTemp.push({
            id: catId,
            level: catLevel,
            name: catName,
            parentId: rootCatId
          });
        }
      }
    });

    const temp = cloneDeep(this.structureCategories);

    temp.forEach(node => {
      this.appendCategories(node, categoriesTemp);
    });

    temp.forEach(node => {
      this.fillWithTheData(node, this.tasks);
    });

    temp.forEach(node => {
      this.removeUpdateEmptyCategories(node);
    });

    this.ownProductionCategorizedList = [...temp];

    if (this.ownProductionCategorizedList.every(f => f.children.length === 0)) {
      this.ownProductionCategorizedList = [];
    }
  }

  appendCategories(node: TreeNode, categoriesTemp: {
    id: number,
    level: number,
    parentId: number,
    name: string
  }[]): void {
    if (!node.children) {
      node.children = [];
    }

    categoriesTemp.forEach(cat => {
      if (cat.parentId === node.data.id) {
        node.children.push({
          data: {
            id: cat.id,
            name: cat.name,
            level: cat.level,
            parentId: cat.parentId,
            isCategory: true,
            categories: 0
          },
          expanded: false,
          children: []
        });
      }
    });

    if (node.children) {
      node.children.forEach(childNode => {
        this.appendCategories(childNode, categoriesTemp);
      });
    }
  }

  fillWithTheData(node: TreeNode, orders): void {
    if (!node.children) {
      node.children = [];
    }

    if (node.data.isCategory) {
      orders.forEach(task => {
        if (task.root_nomenclature) {
          const catId = task.root_nomenclature.id;
          if (node.data.id === catId) {
            const existingCatChildIndex = node.children.findIndex(cat => cat.data.id === task.list_product.nomenclature.id);

            if (existingCatChildIndex < 0) {
              node.children.push({
                data: {
                  id: task.list_product.nomenclature.id,
                  name: task.list_product.nomenclature.name,
                  level: 3,
                  categories: 0,
                },
                expanded: false,
                children: [{
                  data: {task, level: 4},
                  expanded: false,
                  children: []
                }]
              });
            } else {
              node.children[existingCatChildIndex].children.push({
                data: {task, level: 4},
                expanded: false,
                children: []
              });
            }
          }
        }
      });
    }
    if (node.children) {
      node.children.forEach(childNode => {
        this.fillWithTheData(childNode, orders);
      });
    }
  }

  removeUpdateEmptyCategories(node: TreeNode): void {
    if (!node.data.isCategory && !node.data.task) {
      let hideFromTable = true;
      const hasContent = node.children.filter(child => child.data.task).length > 0;
      if (hasContent) {
        hideFromTable = false;
      }

      node.children.forEach(childNode => {
        if (hideFromTable) {
          const hasContentInner = childNode.children.filter(child => child.data.task).length > 0;
          if (hasContentInner) {
            hideFromTable = false;
          }
        }

        childNode.children.forEach(childNode2 => {
          if (hideFromTable) {
            const hasContentInner = childNode2.children.filter(child => child.data.task).length > 0;
            if (hasContentInner) {
              hideFromTable = false;
            }
          }

          childNode2.children.forEach(childNode3 => {
            if (hideFromTable) {
              const hasContentInner = childNode3.children.filter(child => child.data.task).length > 0;
              if (hasContentInner) {
                hideFromTable = false;
              }
            }
            childNode3.children.forEach(childNode4 => {
              if (hideFromTable) {
                const hasContentInner = childNode4.children.filter(child => child.data.task).length > 0;
                if (hasContentInner) {
                  hideFromTable = false;
                }
              }
            });
          });
        });
      });
      node.data.hideFromTable = hideFromTable;
    }

    node.data.categories = node.children.length;
    if (node.children) {
      node.children.forEach((childNode, indexChild) => {
        this.removeUpdateEmptyCategories(childNode);
      });
    }
  }

  onExpandAll() {
    const temp = cloneDeep(this.ownProductionCategorizedList);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.ownProductionCategorizedList = temp;
  }

  onCollapseAll() {
    const temp = cloneDeep(this.ownProductionCategorizedList);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.ownProductionCategorizedList = temp;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  goToSelectedPlans() {
    const ids = this.selectedTasks.map(t => t.id).join(',');
    this.router.navigate(['plan', ids], {relativeTo: this.route});
  }

  goToSelectedNodesPlans() {
    const ids = this.selectedTasksNodes.map(t => t.data.task.id).join(',');
    this.router.navigate(['plan', ids], {relativeTo: this.route});
  }

  onSplitPlan() {
    this.taskService.splitTasksDialog(this.selectedTasks[0]).pipe(
      filter(response => !!response),
      tap(() => this.search$.next())
    ).subscribe();
  }

  onSplitNodePlan() {
    this.taskService.splitTasksDialog(this.selectedTasksNodes[0].data).pipe(
      filter(response => !!response),
      tap(() => this.search$.next())
    ).subscribe();
  }

  onDeletePlan() {
    this.modalService.confirm('danger').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.isDeleting = true;
      this.taskService.deletePlan(this.selectedTasks[0].id).pipe(
        finalize(() => this.isDeleting = false)
      ).subscribe(() => {
        const taskIndex = this.tasks.findIndex(t => t.id === this.selectedTasks[0].id);
        this.tasks.splice(taskIndex, 1);
        this.fillCategorizedTree();

        this.selectedTasks = [];
        this.selectedTasksNodes = [];
      });
    });
  }

  onDeleteNodePlan() {
    console.log(this.selectedTasksNodes);
    this.modalService.confirm('danger').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.isDeleting = true;
      this.taskService.deletePlan(this.selectedTasksNodes[0].data.task.id).pipe(
        finalize(() => this.isDeleting = false)
      ).subscribe(() => {
        const taskIndex = this.tasks.findIndex(t => t.id === this.selectedTasksNodes[0].data.task.id);
        this.tasks.splice(taskIndex, 1);
        this.fillCategorizedTree();

        this.selectedTasks = [];
        this.selectedTasksNodes = [];
      });
    });
  }
}
