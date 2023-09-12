import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";
import {AccountingProductsService} from "../../services/accounting-products.service";
import {CostReportsService} from "../../services/cost-reports.service";
import {AdapterService} from "@shared/services/adapter.service";
import {ActivatedRoute} from "@angular/router";
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'pek-reports-new-cost-report',
  templateUrl: './reports-new-cost-report.component.html',
  styleUrls: ['./reports-new-cost-report.component.scss']
})
export class ReportsNewCostReportComponent implements OnInit {

  selectedNode;
  productId = this.route.snapshot.paramMap.get('id');
  treeProducts: TreeNode[];
  additionalExpenses = [];
  loading = true;

  parentIds = new Set<number>();

  res: any = [];

  hide = true;

  counts = 0;

  rootId: number = null;

  constructor(
    private route: ActivatedRoute,
    private accountingProductsService: AccountingProductsService,
    private adapterService: AdapterService,
    private costReportsService: CostReportsService
  ) {
  }

  getAll() {
    this.additionalExpenses = [];
    this.selectedNode = null;

    this.costReportsService.getCostReport(this.productId).subscribe(reports => {
      // res.forEach(el => {
      //   el.from_products.sort((a, b) => new Date(a.invoice_creation_date).getTime() - new Date(b.invoice_creation_date).getTime());
      // });
      // const ss = {'0': 3, '1': 1, '2': 2};
      // res.sort((a, b) => ss[a.list_product.nomenclature.type] - ss[b.list_product.nomenclature.type]);
      //
      //
      // res.forEach(element => {
      //   if (element.accounting_services.length > 0) {
      //     element.accounting_services.forEach(service => {
      //       this.additionalExpenses.push(service);
      //     });
      //   }
      // });
      //
      // res.forEach(item => {
      //   this.parentIds.add(item.list_product.parent);
      // });
      //
      // let parentId = null;
      //
      // this.parentIds.forEach(id => {
      //   const findEl = res.find(el => el.list_product.id === id);
      //
      //   if (!findEl) {
      //     parentId = res.find(el => el.list_product?.parent)?.list_product?.id;
      //     this.rootId = parentId;
      //   }
      // });
      //
      // res.forEach(item => {
      //   item.sumCost = 0;
      //   item.sumTotal = 0;
      //   item.visible = true;
      //   if (item.list_product.parent === null) {
      //     parentId = item.list_product.parent;
      //     this.rootId = parentId;
      //   }
      // });
      //
      // const findProduct = res.find(p => p.id === parseInt(this.productId, 10));
      //
      // if (findProduct) {
      //   parentId = findProduct.list_product.id;
      // }
      //
      // this.res = [...res];
      //
      // this.treeProducts = this.treeAdapter(res, parentId);
      // this.countSum();
      // this.hideElements();

      // @ts-ignore
      if (reports.accounting_services?.length > 0) {
        // @ts-ignore
        reports.accounting_services.forEach(service => {
          this.additionalExpenses.push(service);
        });
      }

      this.treeProducts = this.tree(reports);

      this.loading = false;
    });
  }

  hideElements() {

    const hideElement = (node) => {
      if (node.children) {
        node.children.forEach(child => {
          if (child.children) {
            child.children.forEach(c => {
              if (!c.data.sumCost && !c.data.sumCost) {
                c.data.visible = false;
              }
            });
          } else {
            if (!child.data.sumCost && !child.data.sumCost) {
              child.data.visible = false;
            }
          }
        });
      }
    };


    this.treeProducts.forEach(node => hideElement(node));
  }

  countSum() {
    const countCost = (node) => {
      if (node.children) {
        node.children.forEach(child => {
          if (child.children) {
            child.data.hasChildren = true;

            child.data?.assembly_info?.forEach(as => {
              child.data.sumCost += parseFloat(as.supplier_total_cost);
            });

            child.data?.written_off_warehouse_products?.forEach(p => {
              child.data.sumCost += parseFloat(p.total_cost);
            });

            node.data.sumCost += countCost(child);
          } else {
            child.data?.assembly_info?.forEach(as => {
              child.data.sumCost += parseFloat(as.supplier_total_cost);
              node.data.sumCost += parseFloat(as.supplier_total_cost);
            });

            child.data?.written_off_warehouse_products?.forEach(p => {
              child.data.sumCost += parseFloat(p.total_cost);
              node.data.sumCost += parseFloat(p.total_cost);
            });
          }
        });
      }

      return node.data.sumCost;
    };

    const countTotal = (node) => {
      if (node.children) {
        node.children.forEach(child => {
          if (child.children) {
            child.data.hasChildren = true;

            child.data?.assembly_info?.forEach(as => {
              child.data.sumTotal += parseFloat(as.supplier_total_price);
            });

            child.data?.written_off_warehouse_products?.forEach(p => {
              child.data.sumTotal += parseFloat(p.total_price);
            });

            node.data.sumTotal += countTotal(child);
          } else {
            child.data?.assembly_info?.forEach(as => {
              child.data.sumTotal += parseFloat(as.supplier_total_price);
              node.data.sumTotal += parseFloat(as.supplier_total_price);
            });

            child.data?.written_off_warehouse_products?.forEach(p => {
              child.data.sumTotal += parseFloat(p.total_price);
              node.data.sumTotal += parseFloat(p.total_price);
            });
          }
        });
      }

      return node.data.sumTotal;
    };

    this.treeProducts.forEach(node => {
      node.data?.assembly_info?.forEach(as => {
        node.data.sumCost += parseFloat(as.supplier_total_cost);
        node.data.sumTotal += parseFloat(as.supplier_total_price);
      });

      node.data?.written_off_warehouse_products?.forEach(p => {
        node.data.sumCost += parseFloat(p.total_cost);
        node.data.sumTotal += parseFloat(p.total_price);
      });

      node.data.hasChildren = true;

      node.data.sumCost = countCost(node);
      node.data.sumTotal = countTotal(node);
    });
  }

  treeAdapter(data, parentId, expanded = true) {
    const dd = [];
    data.forEach(element => {
      if (element.list_product.id === parentId) {
        element.list_product.parent = null;
      }
      const ins = {data: element};
      dd.push(ins);
    });

    const root = [];
    const idMapping = dd.reduce((acc, el, i) => {
      acc[el.data.list_product.id] = i;
      return acc;
    }, {});
    dd.forEach(el => {
      if (el.data.list_product.parent === null) {
        el.expanded = expanded;
        root.push(el);
        return;
      }
      const parentEl = dd[idMapping[el.data.list_product.parent]];

      parentEl.children = [...(parentEl.children || []), el];
      if (parentEl.children.length === 0) {
        delete parentEl.children;
      }
    });
    return root;
  }

  ngOnInit(): void {
    this.getAll()
  }

  tree(report) {
    const root = [];

    const build = (children, parent) => {
      if (children) {
        children.forEach(c => {

          let id = null;

          if (parent.data) {
            id = parent.data.nomenclature.id;
          } else {
            id = parent.nomenclature.id;
          }

          if (id === c.data.nomenclature.id) {
            parent.children = children[0].children;

            if (parent.data?.assemblies.length > 0) {
              parent.data.builders = [parent.data, parent.data.assemblies[0]];
            }
          }

          c.data?.assemblies?.forEach(as => {
            c.children.push({
              data: as,
              children: [],
              expanded: false,
              parent
            });
          });

          build(c.children, c);

          const newDataManufactured = [];

          c?.data?.manufactured?.forEach(p => {
            if (!newDataManufactured.find(d => d.nomenclature.id === p.nomenclature.id)) {
              const items = c.data.manufactured;
              // p.quantity = items.filter(item => item.nomenclature.id === p.nomenclature.id).reduce((sum, elem) => sum += elem.quantity, 0);
              // p.serial_numbers = items.filter(item => item.nomenclature.id === p.nomenclature.id).map(elem => elem.serial_number);
              p.products = items.filter(item => item.nomenclature.id === p.nomenclature.id);
              newDataManufactured.push(p);
            }
          });

          if (newDataManufactured.length > 0) {
            newDataManufactured.forEach(p => {
              c.children.push({
                data: p,
                expanded: false,
                children: null
              });
            });
          }

          const newDataPurchased = [];

          c?.data?.purchased?.forEach(p => {
            if (!newDataPurchased.find(d => d.nomenclature.id === p.nomenclature.id)) {
              const items = c.data.purchased;
              // p.quantity = items.filter(item => item.nomenclature.id === p.nomenclature.id).reduce((sum, elem) => sum += elem.quantity, 0);
              // p.serial_numbers = items.filter(item => item.nomenclature.id === p.nomenclature.id).map(elem => elem.serial_number);

              p.products = items.filter(item => item.nomenclature.id === p.nomenclature.id);
              newDataPurchased.push(p);
            }
          });

          if (newDataPurchased.length > 0) {
            newDataPurchased.forEach(p => {
              c.children.push({
                data: p,
                expanded: false,
                children: null
              });
            });
          }
        });
      }
    };

    const el = {
      data: report,
      expanded: true,
      children: [],
      parent: null,
    };

    report.assemblies.forEach(as => {
      el.children.push({
        data: as,
        children: [],
        expanded: false,
      });
    });

    const rootManufacturedMap = new Map();

    report.manufactured.forEach(m => {
      if (rootManufacturedMap.get(m.nomenclature.id)) {
        rootManufacturedMap.set(m.nomenclature.id, rootManufacturedMap.get(m.nomenclature.id) + 1);

        const id = m.nomenclature.id;
        const els = report.purchased.filter(el => el.nomenclature.id === id);

        report.purchased = report.purchased.filter(el => el.nomenclature.id !== id);

        if (els.length > 0) {
          const product = els[0];
          product.items = els;
          report.purchased.push(product);
        }

      } else {
        rootManufacturedMap.set(m.nomenclature.id, 1);
      }
    });

    report.manufactured.forEach(m => {
      el.children.push({
        data: m,
        expanded: false,
        children: null
      });
    });

    const rootPurchasedMap = new Map();

    report.purchased.forEach(p => {
      if (rootPurchasedMap.get(p.nomenclature.id)) {
        rootPurchasedMap.set(p.nomenclature.id, rootPurchasedMap.get(p.nomenclature.id) + 1);

        const id = p.nomenclature.id;
        const els = report.purchased.filter(el => el.nomenclature.id === id);

        report.purchased = report.purchased.filter(el => el.nomenclature.id !== id);

        if (els.length > 0) {
          const product = els[0];
          product.items = els;
          report.purchased.push(product);
        }

      } else {
        rootPurchasedMap.set(p.nomenclature.id, 1);
      }
    });

    report.purchased.forEach(p => {
      el.children.push({
        data: p,
        expanded: false,
        children: null,
        parent: report,
      });
    });

    build(el.children, report);

    root.push(el);


    console.log(root);
    return root;
  }

  hideToggle(node) {
    if (node?.children) {
      return node.children.some(c => c.data.visible);
    } else {
      return false;
    }
  }

  services() {
    this.costReportsService.additionalExpensesModal('new', this.treeProducts[0].data.id, this.additionalExpenses).subscribe()
  }

  isHidden(product) {
    if (product.nomenclature.type === '1') {
      return false;
    }
    if (product.items) {
      return product.items.every(p => !parseFloat(p.total_cost) && !parseFloat(p.unit_cost) && !parseFloat(p.total_price) && !parseFloat(p.unit_price));
    } else {
      return (!parseFloat(product.total_cost) && !parseFloat(product.unit_cost) && !parseFloat(product.total_price) && !parseFloat(product.unit_price));
    }
  }

  showInvoice(invoice) {
    return typeof invoice === 'number';
  }

  // showProtocol(product: Product, warehouseQcProtocol: any) {
  //   this.modalService.taskProtocolInfo(
  //     warehouseQcProtocol.protocol,
  //     warehouseQcProtocol.paragraphs,
  //     !product.serial_number ? null : product.serial_number.type_with_number ? product.serial_number.type_with_number : product.serial_number.id + ''
  //   ).subscribe();
  // }

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

}
