import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalService} from '@shared/services/modal.service';
import {Paginator} from 'primeng/paginator';
import {ListService} from '../../services/list.service';
import {QuerySearch} from '@shared/models/other';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {List} from '../../models/list';
import {AdapterService} from '@shared/services/adapter.service';
import {debounceTime, map, tap} from 'rxjs/operators';
import {MenuItem, TreeNode} from 'primeng/api';
import * as cloneDeep from 'lodash/cloneDeep';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {environment} from '@env/environment';

export enum ViewMode {
  LIST = 0,
  HIERARCHY = 1,
}

export type ProductionListAccountingType = 'purchased' | 'own' | 'outsource';
export type ProductionListPositionType = 'assembly' | 'not assembly';

@Component({
  selector: 'pek-production-lists',
  templateUrl: './production-lists.component.html',
  styleUrls: ['./production-lists.component.scss']
})
export class ProductionListsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  selectedOrderNode: TreeNode<List>;
  selectedList: List;

  menuItems: MenuItem[] = [{
    label: 'Selected Production List',
    items: [
      {
        label: 'Production List',
        icon: 'pi pi-bars',
        command: () => this.goToProductionList()
      },
      {
        label: 'Set List Locator',
        icon: 'pi pi-angle-double-right',
        command: () => this.onSetListLocator()
      },
      {
        label: 'Go To Plan',
        icon: 'pi pi-angle-double-right',
        command: () => this.goToPlan()
      }
    ]
  }];

  menuItemsNode: MenuItem[] = [{
    label: 'Selected Production List',
    items: [
      {
        label: 'Production List',
        icon: 'pi pi-bars',
        command: () => this.goToProductionListNode()
      },
      {
        label: 'Set List Locator',
        icon: 'pi pi-angle-double-right',
        command: () => this.onSetListLocatorNode()
      },
      {
        label: 'Go To Plan',
        icon: 'pi pi-angle-double-right',
        command: () => this.goToPlanNode()
      }
    ]
  }];

  link = environment.link_url + 'dash/';

  expanseMap = {};

  categories: TreeNode[];

  isLoadingFullStatistic = false;
  isShowFullStatistics = false;

  isShowAll = false;
  isStartOnePage = false;
  isLoading = true;

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  viewModeType = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;
  queryKey = 'name:/code:/responsible_employee_id:null/date_created_after:null/date_created_before:null/category_ids:null/root_categories:null';

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    responsible_employee_id: [null],
    date_created_after: [null],
    date_created_before: [null],
    category_ids: null,
    root_categories: null,
  });

  productionCategorizedList: TreeNode<List>[];

  fullOrderTree: TreeNode<List>[] = [];

  orderTree: TreeNode[] = [];
  lists: List[] = [];
  count = 0;
  fullStatisticList: List[] = [];

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  private destroy$ = new Subject();

  constructor(
    private modalService: ModalService,
    private listService: ListService,
    private readonly adapterService: AdapterService,
    private productStructureCategoriesService: ProductStructureCategoryService,
    private fb: FormBuilder,
  ) {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedList = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchLists();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedList = null),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchLists();
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProductionListsForPagination();
  }

  makeUniqueProductionPlansList(): void {
    this.lists.forEach(list => {
      list.unique_root_production_plans = [];
      list.root_production_plans.forEach(plan => {
        if (plan.root_nomenclature) {
          const nomenclatureId = plan.root_nomenclature.id;
          const existingIndex =
            list.unique_root_production_plans
              .findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);

          if (existingIndex < 0) {
            list.unique_root_production_plans.push(plan);
          }
        }
      });
    });
  }

  getCategories() {
    if (this.categories) {
      this.mapExpansion();
    }
    this.productStructureCategoriesService.get().pipe(
      tap((categories) => {
        this.createTree(categories);
      })).subscribe();
  }

  createTree(data) {
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
    this.categories = root;
    this.productionCategorizedList = cloneDeep(this.categories);
  }

  mapExpansion() {
    this.categories.forEach(element => {
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

  getProductionListsForPagination() {
    this.lists = [];
    this.orderTree = [];

    this.listService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(lists => {
      this.lists = lists.results;
      this.count = lists.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.makeUniqueProductionPlansList();
      this.prepareTreeCategories();
      this.fillCategorizedTree();

      if (this.isShowFullStatistics) {
        this.getFullStatistics();
      }

      this.isLoading = false;
    });
  }

  prepareTreeCategories(): void {
    this.orderTree = [];
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];

    this.lists.forEach(list => {
      if (list.root_production_plans) {
        list.root_production_plans.forEach(plan => {
          if (plan.root_nomenclature && plan.root_nomenclature.root_category) {
            const rootCatId = plan.root_nomenclature.root_category.id;
            const rootCatName = plan.root_nomenclature.root_category.name;
            const rootLevel = 1;

            const catId = plan.root_nomenclature.id;
            const catName = plan.root_nomenclature.name;
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
      }
    });

    const rootCategories = categoriesTemp.filter(cat => !cat.parentId);

    rootCategories.forEach(cat => {
      this.orderTree.push({
        data: {
          id: cat.id,
          name: cat.name,
          level: cat.level,
          parentId: cat.parentId,
          categories: 0
        },
        expanded: false,
        children: []
      });
    });

    this.orderTree.forEach(node => {
      categoriesTemp.forEach(cat => {
        if (cat.parentId === node.data.id) {
          node.children.push({
            data: {
              id: cat.id,
              name: cat.name,
              level: cat.level,
              parentId: cat.parentId,
              categories: 0
            },
            expanded: false,
            children: []
          });
        }
      });
    });

    console.log(this.orderTree);

    this.fillTree();
  }

  fillTree(): void {
    this.lists.forEach(list => {
      if (list.root_production_plans) {
        list.root_production_plans.forEach(plan => {
          this.orderTree.forEach(root => {
            root.children.forEach(child => {
              if (plan.root_nomenclature) {
                const catId = plan.root_nomenclature.id;
                if (child.data.id === catId) {
                  const existingCatChildIndex = child.children.findIndex(cat => cat.data.id === plan.list_product.nomenclature.id);

                  if (existingCatChildIndex < 0) {
                    child.children.push({
                      data: {
                        id: plan.list_product.nomenclature.id,
                        name: plan.list_product.nomenclature.name,
                        level: 3,
                        categories: 0
                      },
                      expanded: false,
                      children: [{
                        data: {list, plan, level: 4},
                        expanded: false,
                        children: []
                      }]
                    });
                  } else {
                    const existingOrderIndex =
                      child.children[existingCatChildIndex]
                        .children.findIndex(listData => listData.data.list.id === list.id);
                    if (existingOrderIndex < 0) {
                      child.children[existingCatChildIndex].children.push({
                        data: {list, plan, level: 4},
                        expanded: false,
                        children: []
                      });
                    }
                  }
                }
              }
            });
          });
        });
      }

      if (list.root_production_plans && list.root_production_plans.length < 1) {
        const noCategoryIndex = this.orderTree.findIndex(node => node.data.id === -1);

        if (noCategoryIndex < 0) {
          this.orderTree.push({
            data: {
              id: -1,
              level: 1,
              name: 'No Root List',
              parentId: null
            },
            expanded: false,
            children: [
              {
                data: {list, plan: null, level: 4},
                expanded: false,
                children: []
              }]
          });
        } else {
          const existingOrderIndex =
            this.orderTree[noCategoryIndex]
              .children.findIndex(orderData => orderData.data.order.id === list.id);
          if (existingOrderIndex < 0) {
            this.orderTree[noCategoryIndex].children.push(
              {
                data: {list, plan: null, level: 4},
                expanded: false,
                children: []
              }
            );
          }
        }
      }
    });

    this.orderTree = [...this.orderTree];
  }

  expandCollapseAllOrders(isToExpand = true): void {
    const temp = cloneDeep(this.orderTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.orderTree = temp;

    const tempFull = cloneDeep(this.fullOrderTree);
    tempFull.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.fullOrderTree = tempFull;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  getProductionLists() {
    this.listService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(lists => {
      this.lists = lists;
      this.count = lists.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.makeUniqueProductionPlansList();
      this.prepareTreeCategories();
      this.fillCategorizedTree();

      if (this.isShowFullStatistics) {
        this.getFullStatistics();
      }

      this.isLoading = false;
    });
  }

  fillCategorizedTree(): void {
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];

    this.lists.forEach(list => {
      if (list.unique_root_production_plans) {
        list.unique_root_production_plans.forEach(plan => {
          if (plan.root_nomenclature && plan.root_nomenclature.root_category) {
            const rootCatId = plan.root_nomenclature.root_category.id;
            const rootCatName = plan.root_nomenclature.root_category.name;
            const rootLevel = 1;

            const catId = plan.root_nomenclature.id;
            const catName = plan.root_nomenclature.name;
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
      }

      if (list.unique_root_production_plans.length < 1) {
        const noCategoryIndex = this.productionCategorizedList.findIndex(nodeInner => nodeInner.data.id === -1);

        if (noCategoryIndex < 0) {
          this.productionCategorizedList.push({
            data: {
              id: -1,
              // @ts-ignore
              level: 1,
              name: 'No Root List',
              parentId: null
            },
            expanded: false,
            children: [
              {
                // @ts-ignore
                data: {list, plan: null, level: 4},
                expanded: false,
                children: []
              }]
          });
        } else {
          this.productionCategorizedList[noCategoryIndex].children.push(
            {
              // @ts-ignore
              data: {list, plan: null, level: 4},
              expanded: false,
              children: []
            }
          );
        }
      }
    });
  }

  searchLists() {
    this.isLoading = true;
    if (this.isShowFullStatistics) {
      this.isLoadingFullStatistic = true;
    }
    this.destroy$.next(true);
    this.selectedList = null;
    this.selectedOrderNode = null;
    this.fullStatisticList = [];
    this.fullOrderTree = [];

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/responsible_employee_id:${this.searchForm.get('responsible_employee_id').value}/date_created_after:${this.searchForm.get('date_created_after').value}/date_created_before:${this.searchForm.get('date_created_before').value}/category_ids:${this.searchForm.get('category_ids').value}/root_categories:${this.searchForm.get('root_categories').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }

    if (this.searchForm.get('name').value) {
      this.query.push({name: 'name', value: this.searchForm.get('name').value});
    }

    if (this.searchForm.get('code').value) {
      this.query.push({name: 'code', value: this.searchForm.get('code').value});
    }

    if (this.searchForm.get('responsible_employee_id').value) {
      this.query.push({name: 'responsible_employee_id', value: this.searchForm.get('responsible_employee_id').value});
    }

    if (this.searchForm.get('root_categories').value) {
      this.query.push({name: 'root_categories', value: this.searchForm.get('root_categories').value});
    }

    if (this.searchForm.get('date_created_after').value) {
      this.query.push({
        name: 'date_created_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('date_created_after').value)
      });
    }

    if (this.searchForm.get('date_created_before').value) {
      this.query.push({
        name: 'date_created_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('date_created_before').value)
      });
    }

    if (this.searchForm.get('category_ids').value) {
      this.query.push({name: 'category_ids', value: this.searchForm.get('category_ids').value});
    }

    if (!this.isShowAll) {
      this.getProductionListsForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getProductionLists();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchLists();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchLists();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchLists();
    }
  }

  onSelectProductStructureCategories(ids: string) {
    this.searchForm.get('root_categories').patchValue(ids);
    this.searchLists();
  }

  onSelectCategories(ids: string) {
    this.searchForm.get('category_ids').patchValue(ids);
    this.searchLists();
  }

  onSelectEmployee(id: number) {
    this.searchForm.get('responsible_employee_id').patchValue(id);
    this.searchLists();
  }

  onChoiceViewType(mode: ViewMode) {
    this.viewMode = mode;
    this.selectedList = null;
    this.selectedOrderNode = null;
  }

  onSetListLocator() {
    this.listService.openSetProductionListLocatorModal(this.selectedList.id).subscribe(response => {
      if (response) {
        this.searchLists();
      }
    });
  }

  onSetListLocatorNode() {
    this.listService.openSetProductionListLocatorModal(this.selectedOrderNode.data?.list?.id).subscribe(response => {
      if (response) {
        this.searchLists();
      }
    });
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.625rem';
      return;
    }
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;

    this.setTableScrollHeight();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShowStatisticsForChains(
    id: number,
    accountType: ProductionListAccountingType,
    positionType: ProductionListPositionType = null
  ) {
    const send = {
      accounting_type: accountType,
      positions_type: positionType,
    };
    this.listService.showStatisticsForChainsModal(id, send).subscribe();
  }

  onShowFullStatistics() {
    if (!this.isShowFullStatistics) {
      this.isShowFullStatistics = true;
      this.isLoadingFullStatistic = true;

      if (this.lists.length === 0) {
        this.isLoadingFullStatistic = false;
        return;
      }

      this.listService.getFullStatistics(this.lists.map(l => l.id).join(',')).pipe(
        tap(statistics => this.generateStatistic(statistics)),
        tap(() => this.isLoadingFullStatistic = false),
        takeUntil(this.destroy$)
      ).subscribe();
    } else {
      this.isShowFullStatistics = false;
      this.isLoadingFullStatistic = false;
    }
  }

  getFullStatistics() {
    this.isLoadingFullStatistic = true;
    this.listService.getFullStatistics(this.lists.map(l => l.id).join(',')).pipe(
      tap(statistics => this.generateStatistic(statistics)),
      tap(() => this.isLoadingFullStatistic = false),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  goToPlan() {
    window.open(this.link + `production/plan/tasks/${this.selectedList.root_production_plans[0].id}`, '_blank');
  }

  goToPlanNode() {
    window.open(this.link + `production/plan/tasks/${this.selectedOrderNode.data.list.root_production_plans[0].id}`, '_blank');
  }

  generateStatistic(statistics: any[]) {
    this.fullStatisticList = [...this.lists];
    this.fullStatisticList.forEach(l => l.full_statistics = statistics.find(s => s.id === l.id));
    this.fullOrderTree = [...this.orderTree];

    this.fullOrderTree.forEach(n => {
      n.children.forEach(n => {
        n.children.forEach(n => {
          n.children.forEach(n => {
            n.data.list.full_statistics = statistics.find(s => s.id === n.data.list.id);
          });
        });
      });
    });
  }

  private goToProductionList() {
    window.open(`/warehouse/production-lists/${this.selectedList?.id}`, '_blank')
  }

  private goToProductionListNode() {
    window.open(`/warehouse/production-lists/${this.selectedOrderNode.data.list.id}`, '_blank')
  }
}
