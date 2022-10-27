import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {Invoice} from '../../../procurement/models/invoice';
import {Order} from '../../../procurement/models/order';
import * as cloneDeep from 'lodash/cloneDeep';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {TreeService} from '@shared/services/tree.service';
import {OrderService} from '../../../procurement/services/order.service';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'pek-warehouse-qc',
  templateUrl: './warehouse-qc.component.html',
  styleUrls: ['./warehouse-qc.component.scss']
})
export class WarehouseQcComponent implements OnInit {
  isLoading = true;

  categories: TreeNode[];

  invoices: Invoice[] = [];
  orders: Order[] = [];

  invoiceTree: TreeNode<Invoice>[];

  invoiceManufacturedTree: TreeNode<Invoice>[];
  invoicePurchasedTree: TreeNode<Invoice>[];

  selectedInvoiceNode: TreeNode<Invoice>;
  selectedOrderNode: TreeNode;
  selectedPurchasedInvoiceNode: TreeNode;

  ownProductionCategorizedList: TreeNode[];

  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly orderService: OrderService,
    private readonly productStructureCategoriesService: ProductStructureCategoryService,
    private readonly treeService: TreeService,
  ) {
  }

  ngOnInit(): void {
    // this.getCategories();
    // this.getInvoices();
    // this.getOrders();

    forkJoin({
      categories: this.productStructureCategoriesService.get(),
      invoices: this.invoiceService.get([
        {name: 'completed', value: true},
        {name: 'qc_completed', value: true},
        {name: 'is_full_accepted', value: false}
      ]),
      orders: this.orderService.get([
        {name: 'completed', value: true},
        {name: 'qc_completed', value: true},
        {name: 'is_full_accepted', value: false}
      ])
    }).subscribe(({categories, invoices, orders}) => {
      this.categories = this.treeService.createTree(categories);
      this.ownProductionCategorizedList = cloneDeep(this.categories);

      this.invoices = invoices;
      this.makeUniqueProductionPlansInvoice(<Invoice[]>this.invoices);
      this.resetProductPaymentTree();

      this.orders = orders;
      this.makeUniqueProductionPlansInvoice(<Order[]>this.orders);
      this.fillOwnProductionWithData();

      this.isLoading = false;
    })
  }

  getCategories() {
    this.productStructureCategoriesService.get().subscribe(categories => {
      // this.categories = this.treeService.createTree(categories);
      // this.ownProductionCategorizedList = cloneDeep(this.categories);
    });
  }

  getInvoices(): void {
    this.invoiceService.get([
      {name: 'completed', value: true},
      {name: 'qc_completed', value: true},
      {name: 'is_full_accepted', value: false}
    ]).subscribe(invoices => {
      this.invoices = invoices;
      this.makeUniqueProductionPlansInvoice(<Invoice[]>this.invoices);
      this.resetProductPaymentTree();
      this.isLoading = false;
    });
  }

  getOrders(): void {
    this.orderService.get([
      {name: 'completed', value: true},
      {name: 'qc_completed', value: true},
      {name: 'is_full_accepted', value: false}
    ]).subscribe(orders => {
      this.orders = orders;
      this.makeUniqueProductionPlansInvoice(<Order[]>this.orders);
      this.fillOwnProductionWithData();
    });
  }

  makeUniqueProductionPlansInvoice(items: Invoice[] | Order[]): void {
    items.forEach(item => {
      item.unique_root_production_plans = [];
      item.root_production_plans.forEach(plan => {
        if (plan.root_nomenclature) {
          const nomenclatureId = plan.root_nomenclature.id;
          const existingIndex = item.unique_root_production_plans.findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);

          if (existingIndex < 0) {
            item.unique_root_production_plans.push(plan);
          }
        }
      });
    });
  }

  private fillOwnProductionWithData() {
    this.fillCategorizedTree();
  }

  fillCategorizedTree(): void {
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
              level: 1,
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
            description: purchaseCategory.description
          });
        }
      } else {
        if (invoice.order.accounting_type === 1) {
          const isAdded = categories.findIndex(el => el.id === -2);
          if (isAdded < 0) {
            categories.push({name: 'Manufacturing Procurement', id: -2, description: '', level: 0});
          }
        }
        if (invoice.order.accounting_type === 2) {
          const isAdded = categories.findIndex(el => el.id === -1);
          if (isAdded < 0) {
            categories.push({name: 'Outsourcing', id: -1, description: '', level: 0});
          }
        }
      }
    });

    this.invoiceTree = [];

    categories.sort((a, b) => a.id - b.id);
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
        const manProc = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order.accounting_type === 1);
        node.children = cloneDeep(this.categories);
        this.prepareInnerTreeCategories(manProc, node);
      }

      // Preparing Outsourcing
      if (node.data.id === -1) {
        const outsourcing = this.invoices.filter(invoice => !invoice.purchase_category && invoice.order.accounting_type === 2);
        node.children = cloneDeep(this.categories);
        this.prepareInnerTreeCategories(outsourcing, node);
      }
    });

    this.separatePurchasedAndManufactured();
  }

  prepareInnerTreeCategories(invoices: Invoice[], nodeInner: TreeNode): void {
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];

    invoices.forEach(order => {
      order.unique_root_production_plans.forEach(plan => {
        if (plan.root_nomenclature) {
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
              level: 1,
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
  }

  appendCategories(node: TreeNode, categoriesTemp: { id: number, level: number, parentId: number, name: string }[]): void {
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

  expandCollapseAllOrders(isToExpand = true): void {
    const temp = cloneDeep(this.ownProductionCategorizedList);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.ownProductionCategorizedList = temp;
  }

  expandCollapsePurchasedInvoices(isToExpand = true): void {
    const temp = cloneDeep(this.invoicePurchasedTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.invoicePurchasedTree = temp;
  }
}
