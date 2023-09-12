import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";
import {AccountingProductsService} from "../../services/accounting-products.service";
import {AdapterService} from "@shared/services/adapter.service";
import {ActivatedRoute} from "@angular/router";

import * as cloneDeep from 'lodash/cloneDeep';
import {CostReportsService} from "../../services/cost-reports.service";

@Component({
  selector: 'pek-reports-old-cost-report',
  templateUrl: './reports-old-cost-report.component.html',
  styleUrls: ['./reports-old-cost-report.component.scss']
})
export class ReportsOldCostReportComponent implements OnInit {

  selectedNode;
  productId = this.route.snapshot.paramMap.get('id');
  treeProducts: TreeNode[];
  additionalExpenses = [];
  loading = true;
  parentIds = new Set<number>();

  res: any = [];
  rootId: number = null;
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private accountingProductsService: AccountingProductsService,
    private adapterService: AdapterService,
    private costReportsService: CostReportsService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.additionalExpenses = [];
    this.selectedNode = null;
    this.accountingProductsService.tree(this.productId).subscribe(res => {
      res.forEach(el => {
        el.from_products.sort((a, b) => new Date(a.invoice_creation_date).getTime() - new Date(b.invoice_creation_date).getTime());
      });
      let ss = {'0': 3, '1': 1, '2': 2};
      res.sort((a, b) => ss[a.nomenclature.type] - ss[b.nomenclature.type]);
      res = res.map(product => {
        product.sumTotal = 0;
        product.sumCost = 0;
        return product;
      });

      res.forEach(element => {
        if (element.accounting_services.length > 0) {
          element.accounting_services.forEach(service => {
            this.additionalExpenses.push(service);
          });
        }
      });


      res.forEach(item => {
        this.parentIds.add(item.parent);
      });

      let parentId = null;

      this.parentIds.forEach(id => {
        const findEl = res.find(el => el.id === id);

        if (!findEl) {
          parentId = res.find(el => el.parent)?.id;
          this.rootId = parentId;
        }
      });

      res.forEach(item => {
        if (item.parent === null) {
          parentId = item.parent;
          this.rootId = parentId;
        }
      });

      this.res = res;
      this.countSum2();
      this.treeProducts = this.adapterService.treeAdapter(res, this.productId);
      // this.countSum();

      console.log(this.additionalExpenses);
      this.loading = false;
    });
  }

  isShowSum(rowData) {
    let result = false;
    // if (this.rootId) {
    //   if (rowData.parent !== this.rootId) {
    //     result = true;
    //   }
    // } else {
    //   if (rowData.parent === this.rootId) {
    //     result = true;
    //   }
    // }

    if (this.parentIds.has(rowData.id)) {
      result = true;
    }

    // if (rowData.from_products.length > 1) result = true

    return result;
  }

  async countSum2() {
    let rootItem;

    if (this.rootId !== null) {
      rootItem = this.res.find(el => this.rootId === el.id);
    } else {
      rootItem = this.res.find(el => el.parent === null);
    }

    const countTotal = (root) => {
      let sumTotal = 0;
      const children = this.res.filter(el => el.parent === root.id);

      children.forEach(c => {
        c.from_products.forEach(el => {
          sumTotal += parseFloat(el.total_price);
        });
        c.sumTotal = countTotal(c);
      });

      return sumTotal;
    };

    const countTotal2 = (root) => {
      let sumTotal = root.sumTotal;

      const children = this.res.filter(el => el.parent === root.id);

      children.forEach(c => {
        c.sumTotal = countTotal2(c);
        sumTotal += c.sumTotal;
      });

      return sumTotal;
    };

    const countCost = (root) => {
      let sumCost = 0;
      const children = this.res.filter(el => el.parent === root.id);

      children.forEach(c => {
        c.from_products.forEach(el => {
          sumCost += parseFloat(el.total_cost);
        });
        c.sumCost = countCost(c);
      });

      return sumCost;
    };

    const countCost2 = (root) => {
      let sumCost = root.sumCost;

      const children = this.res.filter(el => el.parent === root.id);

      children.forEach(c => {
        c.sumCost = countCost2(c);
        sumCost += c.sumCost;
      });

      return sumCost;
    };

    rootItem.sumTotal = countTotal(rootItem);
    rootItem.sumTotal = countTotal2(rootItem);

    rootItem.sumCost = countCost(rootItem);
    rootItem.sumCost = countCost2(rootItem);

    if (rootItem.assembly_info) {
      rootItem.sumTotal += parseFloat(rootItem.assembly_info.supplier_total_price);
      rootItem.sumCost += parseFloat(rootItem.assembly_info.supplier_total_cost);
    }

    this.res.forEach(el => {
      const length = el.from_products.filter(p => {
        if ((p.total_cost > 0 || p.total_price > 0 || p.unit_cost > 0 || p.unit_price > 0) || (el.sumTotal > 0 || el.sumCost > 0)) {
          return p;
        }
      }).length;

      el.visible = Boolean(length > 0);
    });

    rootItem.visible = true;


    //  const tt = this.res;
    //
    //  let sum = 0;
    //  tt.forEach(el => {
    //    el.from_products.forEach(p => {
    //      sum += p.total_cost;
    //    });
    //  });
    //
    // console.log(sum);
  }

  countSum() {
    let id = 0;
    const parents = new Set<number>();
    this.res.forEach(item => {
      if (item.parent) {
        parents.add(item.parent);
      } else {
        id = item.id;
      }
    });

    parents.forEach(item => {
      let sumTotal = 0;
      let sumCost = 0;
      this.res.filter(p => p.parent === item).forEach(product => {
        if (product.from_products.length > 0) {
          product.from_products.forEach(p => {
            sumTotal += p.total_price;
            sumCost += p.total_cost;
          });
        } else {
          sumTotal += 0;
          sumCost += 0;
        }
      });

      const el = this.res.find(p => p.id === item);

      // this.res.find(p => p.id === item).sum = 100;
      el.sumTotal = sumTotal;
      el.sumCost = sumCost;
      el.from_products.forEach(p => {
        el.sumTotal += p.total_price;
        el.sumCost += p.total_cost;
      });
    });

    let parentSumTotal = 0;
    let parentSumCost = 0;

    parents.forEach(item => {
      parentSumTotal += this.res.find(p => p.id === item).sumTotal;
      parentSumCost += this.res.find(p => p.id === item).sumCost;
    });

    const parentEl = this.res.find(p => p.id === id);
    parentEl.sumTotal = parentSumTotal;
    parentEl.sumCost = parentSumCost;
    parentEl.from_products?.forEach(p => {
      parentEl.sumTotal += p.total_price;
      parentEl.sumCost += p.total_cost;
    });
  }

  onToggleHide() {
    this.hide = !this.hide;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  expandCollapse(isToExpand = true): void {
    const temp = cloneDeep(this.treeProducts);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.treeProducts = temp;
  }

  services() {
    this.costReportsService.additionalExpensesModal('old', this.treeProducts[0].data.id, this.additionalExpenses).subscribe()
  }
}
