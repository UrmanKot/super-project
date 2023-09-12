import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Invoice} from '../../../procurement/models/invoice';
import {TreeNode} from 'primeng/api';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {Category} from '../../../product-structure/models/category';
import {AdapterService} from '@shared/services/adapter.service';
import {Subject, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import * as cloneDeep from 'lodash/cloneDeep';

type ViewType = 'list' | 'hierarchy'

@Component({
  selector: 'pek-qc-list',
  templateUrl: './qc-list.component.html',
  styleUrls: ['./qc-list.component.scss']
})
export class QcListComponent implements OnInit {
  invoices: Invoice[];
  orders: Order[];

  selectedInvoiceNode: TreeNode<Invoice>;
  selectedOrderNode: TreeNode<Order>;
  selectedPurchasedInvoiceNode: TreeNode<Invoice>;

  invoicesViewType: ViewType = 'hierarchy';
  invoicesOrderType: ViewType = 'hierarchy';
  invoicesPurchasedType: ViewType = 'hierarchy';

  invoiceManufacturedTree: TreeNode<Invoice>[];
  invoicePurchasedTree: TreeNode<Invoice>[];
  ownProductionCategorizedList: TreeNode[];

  invoiceTree: TreeNode<Invoice>[];
  orderTree: TreeNode<Invoice>[];

  isLoadingInvoices = true;
  isLoadingOrders = true;

  showClosedInvoices = false;
  showClosedOrders = false;

  categories: TreeNode<Category>[];

  invoicesList: Invoice[] = [];
  ordersList: Order[] = [];
  purchasedInvoicesList: Invoice[] = [];

  selectedInvoice: Invoice;
  selectedInvoiceItem: Invoice;
  selectedInvoicePurchaseItem: Invoice;
  selectedOrderItem: Order;

  expanseMap = {};

  private destroyInvoices$ = new Subject();
  private destroyOrders$ = new Subject();

  invoicesQuery: QuerySearch[] = [
    {name: 'needs_qc', value: true},
    {name: 'by_qc_module_permission', value: true}
  ];

  ordersQuery: QuerySearch[] = [
    {name: 'needs_qc', value: true},
    {name: 'by_qc_module_permission', value: true}
  ];

  searchForm: FormGroup = this.fb.group({
    supplier: [null],
    qc_closed_date_after: [null],
    qc_closed_date_before: [null],
    accounting_type: [null],
    material_or_service: [null],
    purchase_categories: [null],
    status: [null]
  });

  constructor(
    private invoiceService: InvoiceService,
    private orderService: OrderService,
    private productStructureCategoryService: ProductStructureCategoryService,
    private adapterService: AdapterService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getInvoices();
    this.getServices();
  }

  searchItems() {
    this.searchInvoices();
    this.searchServices();
  }

  searchInvoices() {
    this.isLoadingInvoices = true;
    this.destroyInvoices$.next(true);
    this.invoiceManufacturedTree = [];
    this.invoicePurchasedTree = [];
    this.invoicesList = [];
    this.purchasedInvoicesList = [];
    this.invoices = [];
    this.selectedInvoice = null;
    this.invoicesQuery = [
      {name: 'by_qc_module_permission', value: true}
    ];

    if (!this.searchForm.get('qc_closed_date_after').value
      && !this.searchForm.get('qc_closed_date_before').value) {
      this.invoicesQuery.push({
        name: 'needs_qc', value: true
      });
      this.showClosedInvoices = false;
    } else {
      this.showClosedInvoices = true;
    }

    if (this.searchForm.get('qc_closed_date_after').value) {
      this.invoicesQuery.push({
        name: 'qc_closed_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_after').value)
      });
    }

    if (this.searchForm.get('qc_closed_date_before').value) {
      this.invoicesQuery.push({
        name: 'qc_closed_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_before').value)
      });
    }
    this.getInvoices();
  }

  searchServices() {
    this.isLoadingOrders = true;
    this.destroyOrders$.next(true);
    this.orders = [];
    this.ordersList = [];
    this.ownProductionCategorizedList = [];
    this.selectedOrderItem = null;
    this.ordersQuery = [
      {name: 'by_qc_module_permission', value: true}
    ];

    if (!this.searchForm.get('qc_closed_date_after').value
      && !this.searchForm.get('qc_closed_date_before').value) {
      this.ordersQuery.push({
        name: 'needs_qc', value: true
      });
      this.showClosedOrders = false;
    } else {
      this.showClosedOrders = true;
    }

    if (this.searchForm.get('qc_closed_date_after').value) {
      this.ordersQuery.push({
        name: 'qc_closed_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_after').value)
      });
    }

    if (this.searchForm.get('qc_closed_date_before').value) {
      this.ordersQuery.push({
        name: 'qc_closed_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_closed_date_before').value)
      });
    }
    this.getServices();
  }

  mapExpansion() {
    this.categories.forEach(element => {
      this.createExpanseMap(element);
    });
  }

  createExpanseMap(node: TreeNode<Category>) {
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

  getCategories() {
    this.productStructureCategoryService.get().pipe(
      takeUntil(this.destroyInvoices$)
    ).subscribe((categories) => {
      if (this.categories) {
        this.mapExpansion();
      }
      this.createTree(categories);
    });
  }

  getInvoices() {
    this.invoiceService.get(this.invoicesQuery).pipe(
      takeUntil(this.destroyInvoices$)
    ).subscribe(invoices => {
      invoices.forEach(invoice => {
        invoice.order = new Order(invoice.order);
        invoice.order.generateUniqueToolRequests();
      });

      this.invoices = invoices;
      this.makeUniqueProductionPlansInvoice();
      this.resetProductPaymentTree();
      this.resetInvoicesList();
      this.isLoadingInvoices = false;
    });
  }

  getServices(): void {
    this.orderService.get(this.ordersQuery).pipe(
      takeUntil(this.destroyOrders$)
    ).subscribe(orders => {
      this.orders = orders;
      this.makeUniqueProductionPlans();
      this.fillOwnProductionWithData();
      this.resetOrdersList();
      this.isLoadingOrders = false;
    });
  }

  resetInvoicesList(): void {
    this.purchasedInvoicesList = this.invoices.filter(i => i.purchase_category);
    this.invoicesList = this.invoices.filter(i => !i.purchase_category);
    this.invoicesList.sort((a, b) => b.rma_products_count - a.rma_products_count || new Date(b.qc_started_date).getTime() - new Date(a.qc_started_date).getTime());
    this.purchasedInvoicesList.sort((a, b) => b.rma_products_count - a.rma_products_count || new Date(b.qc_started_date).getTime() - new Date(a.qc_started_date).getTime());
  }

  resetOrdersList(): void {
    this.ordersList = this.orders;
  }

  resetProductPaymentTree(): void {
    const categories: { name: string, description: string, id: number, level?: number }[] = [];
    this.invoices.forEach(invoice => {
      const purchaseCategory = invoice.purchase_category;

      if (purchaseCategory) {
        const isAdded = categories.findIndex(el => el.id === purchaseCategory.id);
        if (isAdded < 0) {
          categories.push({
            name: purchaseCategory.name,
            id: purchaseCategory.id,
            description: purchaseCategory.description,
          });
        }
      } else {
        if (invoice.order?.accounting_type === 1) {
          const isAdded = categories.findIndex(el => el.id === -2);
          if (isAdded < 0) {
            categories.push({name: 'Production Lists Procurement', id: -2, description: '', level: 0});
          }
        }
        if (invoice.order?.accounting_type === 2) {
          const isAdded = categories.findIndex(el => el.id === -1);
          if (isAdded < 0) {
            categories.push({name: 'Outsourcing', id: -1, description: '', level: 0});
          }
        }
      }
    });

    categories.sort((a, b) => a.id - b.id);
    this.invoiceTree = [];
    categories.forEach(cat => {
      this.invoiceTree.push({
        data: <any>cat,
        expanded: false,
        parent: null
      });
    });

    this.createPaymentTree();
  }

  createPaymentTree() {
    this.invoiceTree = this.invoiceTree.map(node => {
      return {
        ...node,
        children: []
      };
    });

    this.invoiceTree.forEach(node => {
      // Preparing Purchased Invoices
      this.invoices.filter(invoice => invoice.purchase_category).forEach(invoice => {

        const purchaseCategory = invoice.purchase_category;
        if (purchaseCategory) {
          if (purchaseCategory.id === node.data.id) {
            node.children.push({
              data: invoice,
              expanded: false,
              children: []
            });
          }
        }
      });

      // Preparing Manufacturing Procurement
      if (node.data.id === -2) {
        const manProc = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order?.accounting_type === 1);
        node.children = cloneDeep(this.categories);
        this.prepareInnerTreeCategories(manProc, node);
      }

      // Preparing Outsourcing
      if (node.data.id === -1) {
        const outsourcing = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order?.accounting_type === 2);
        node.children = cloneDeep(this.categories);
        this.prepareInnerTreeCategories(outsourcing, node);
      }
    });

    this.separatePurchasedAndManufactured();
  }

  prepareInnerTreeCategories(invoices, nodeInner: TreeNode): void {
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];
    invoices.forEach(order => {
      order.unique_root_production_plans.forEach(plan => {
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
        } else {
          const indexNoNomenclature = categoriesTemp.findIndex(cat => cat.id === -2);
          if (indexNoNomenclature < 0) {
            categoriesTemp.push({
              id: -2,
              level: 1,
              name: 'No root nomenclature',
              parentId: null
            });
          }
        }
      });

      if (order.unique_root_production_plans.length < 1) {
        const noCategoryIndex = nodeInner.children.findIndex(node => node.data.id === -1);

        if (noCategoryIndex < 0) {
          nodeInner.children.push({
            data: {
              id: -1,
              level: 0,
              name: 'No Root List',
              parentId: null
            },
            expanded: false,
            children: [
              {
                data: {order, plan: null, level: 4},
                expanded: false,
                children: []
              }]
          });
        } else {
          nodeInner.children[noCategoryIndex].children.push(
            {
              data: {order, plan: null, level: 4},
              expanded: false,
              children: []
            }
          );
        }
      }
    });

    const temp = cloneDeep(nodeInner.children);
    temp.forEach(node => {
      this.appendCategories(node, categoriesTemp);
    });

    temp.forEach(node => {
      this.fillWithTheData(node, invoices);
    });

    temp.forEach(node => {
      this.removeUpdateEmptyCategories(node);
    });

    nodeInner.children = temp;
  }

  separatePurchasedAndManufactured(): void {
    this.invoicePurchasedTree = this.invoiceTree.filter(invoice => invoice.data.id >= 0);
    this.invoiceManufacturedTree = this.invoiceTree.filter(invoice => invoice.data.id < 0);
    console.log(this.invoiceManufacturedTree);
  }

  makeUniqueProductionPlans(): void {
    this.orders.forEach(order => {
      order.unique_root_production_plans = [];
      order.root_production_plans.forEach(plan => {
        if (plan.root_nomenclature) {
          const nomenclatureId = plan.root_nomenclature.id;
          const existingIndex =
            order.unique_root_production_plans
              .findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);

          if (existingIndex < 0) {
            order.unique_root_production_plans.push(plan);
          }
        }
      });
    });
  }

  makeUniqueProductionPlansInvoice(): void {
    this.invoices.forEach(invoice => {
      invoice.unique_root_production_plans = [];
      invoice.root_production_plans.forEach(plan => {
        if (plan.root_nomenclature) {
          const nomenclatureId = plan.root_nomenclature.id;
          const existingIndex =
            invoice.unique_root_production_plans
              .findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);

          if (existingIndex < 0) {
            invoice.unique_root_production_plans.push(plan);
          }
        }
      });
    });
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
      if (el.data.parent === null) {
        root.push(el);
        return;
      }
      const parentEl = dd[idMapping[el.data.parent]];
      parentEl.children = [...(parentEl.children || []), el];
      if (parentEl.children.length === 0) {
        delete parentEl.children;
      }

    });
    this.categories = root;
    this.ownProductionCategorizedList = cloneDeep(this.categories);
  }

  private fillOwnProductionWithData() {
    this.fillCategorizedTree();
  }

  fillCategorizedTree(): void {
    this.ownProductionCategorizedList = cloneDeep(this.categories);
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];

    this.orders.forEach(order => {
      order.unique_root_production_plans.forEach(plan => {
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

      if (order.unique_root_production_plans.length < 1) {
        const noCategoryIndex = this.ownProductionCategorizedList.findIndex(nodeInner => nodeInner.data.id === -1);

        if (noCategoryIndex < 0) {
          this.ownProductionCategorizedList.push({
            data: {
              id: -1,
              level: 0,
              name: 'No Root List',
              parentId: null
            },
            expanded: false,
            children: [
              {
                data: {order, plan: null, level: 4},
                expanded: false,
                children: []
              }]
          });
        } else {
          this.ownProductionCategorizedList[noCategoryIndex].children.push(
            {
              data: {order, plan: null, level: 4},
              expanded: false,
              children: []
            }
          );
        }
      }
    });

    if (this.ownProductionCategorizedList) {
      const temp = cloneDeep(this.ownProductionCategorizedList);
      temp.forEach(node => {
        this.appendCategories(node, categoriesTemp);
      });

      temp.forEach(node => {
        this.fillWithTheData(node, this.orders);
      });

      temp.forEach(node => {
        this.removeUpdateEmptyCategories(node);
      });

      this.ownProductionCategorizedList = temp;
      this.isLoadingOrders = false;
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
      orders.forEach(order => {
        order.unique_root_production_plans.forEach(plan => {
          if (plan.root_nomenclature) {
            const catId = plan.root_nomenclature.id;
            if (node.data.id === catId) {
              const existingCatChildIndex = node.children.findIndex(cat => cat.data.id === plan.list_product.nomenclature.id);

              if (existingCatChildIndex < 0) {
                node.children.push({
                  data: {
                    id: plan.list_product.nomenclature.id,
                    name: plan.list_product.nomenclature.name,
                    level: 3,
                    categories: 0,
                  },
                  expanded: false,
                  children: [{
                    data: {order, plan, level: 4},
                    expanded: false,
                    children: []
                  }]
                });
              } else {
                node.children[existingCatChildIndex].children.push({
                  data: {order, plan, level: 4},
                  expanded: false,
                  children: []
                });
              }
            }
          }
        });
      });
    }
    if (node.children) {
      node.children.forEach(childNode => {
        this.fillWithTheData(childNode, orders);
      });
    }
  }

  removeUpdateEmptyCategories(node: TreeNode): void {
    if (!node.data.isCategory && !node.data.order) {
      let hideFromTable = true;
      const hasContent = node.children.filter(child => child.data.order).length > 0;
      if (hasContent) {
        hideFromTable = false;
      }

      node.children.forEach(childNode => {
        checkForContent(childNode);
      });

      function checkForContent(childNode) {
        if (hideFromTable) {
          const hasContentInner = childNode.children.filter(child => child.data.order).length > 0;
          if (hasContentInner) {
            hideFromTable = false;
          }
        }
        childNode.children.forEach(childNode2 => {
          checkForContent(childNode2);
        });
      }

      node.data.hideFromTable = hideFromTable;
    }

    node.data.categories = node.children.length;
    if (node.children) {
      node.children.forEach((childNode, indexChild) => {
        this.removeUpdateEmptyCategories(childNode);
      });
    }
  }

  expandCollapseAllInvoices(isToExpand = true): void {
    const temp = cloneDeep(this.invoiceManufacturedTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.invoiceManufacturedTree = temp;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  expandCollapsePurchasedInvoices(isToExpand = true): void {
    const temp = cloneDeep(this.invoicePurchasedTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.invoicePurchasedTree = temp;
  }

  expandCollapseAllOrders(isToExpand = true): void {
    const temp = cloneDeep(this.ownProductionCategorizedList);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.ownProductionCategorizedList = temp;
  }

  onSelectInvoiceType(view: ViewType) {
    this.invoicesViewType = view;
  }

  onSelectOrderType(view: ViewType) {
    this.invoicesOrderType = view;
  }

  onSelectPurchaseType(view: ViewType) {
    this.invoicesPurchasedType = view;
  }
}
