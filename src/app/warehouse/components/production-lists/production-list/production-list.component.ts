import {Component, OnInit} from '@angular/core';
import {List} from '../../../models/list';
import {ListProduct} from '../../../models/list-product';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {ListService} from '../../../services/list.service';
import {take} from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import {Location} from '@angular/common';
import {TreeNode} from 'primeng/api';
import {ListProductService} from '../../../services/list-product.service';

export class TreePrint {
  data: ListProduct;
  children: ListProduct[];
}

@Component({
  selector: 'pek-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.scss']
})

export class ProductionListComponent implements OnInit {

  mode: 'hierarchy' | 'list' = 'hierarchy';

  addedTree = [];

  isSetAllActualQuantities = false;
  products: ListProduct[];
  selectedNode;
  selectedNodeTree;
  isLoading = true;
  list: List;
  listId = this.route.snapshot.paramMap.get('id');
  statuses = {'0': 'Not Processed', '1': 'Completed', '2': 'Deficit', '3': 'Reserved'};
  showComplete = false;
  routerHandler$;

  copyProducts: ListProduct[];
  isLoadingTree = true;

  tree: any;

  isShowPrint = false;

  isLoadingListsForPrint = false;
  productsForPrint: TreePrint[];

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService,
    private listService: ListService,
    private listProductService: ListProductService,
    private router: Router,
    public _location: Location
  ) {
    this.routerHandler$ = router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.listId = this.route.snapshot.paramMap.get('id');
        this.getAll();
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routerHandler$.unsubscribe();
  }

  getAll() {
    this.selectedNodeTree = null;
    this.selectedNode = null;
    this.tree = [];
    this.addedTree = [];
    this.copyProducts = [];
    this.products = [];
    this.isLoading = true;
    this.isLoadingTree = true;
    this.listService.getById(+this.listId).pipe(take(1)).subscribe(res => {
      this.list = JSON.parse(JSON.stringify(res));
    });
    this.listProductService.get([{name: 'list', value: this.listId}]).pipe(take(1)).subscribe(res => {
        this.products = res.filter(x => {
          return x.level > 0;
        });
        this.isSetAllActualQuantities = this.products.every(product => product.status !== '0');
        this.showComplete = true;
        this.products.forEach(element => {
          if (element.actual_quantity === null) {
            this.showComplete = false;
          }
        });
        let ss = {'0': 3, '1': 1, '2': 2};
        this.products.sort((a, b) => ss[a.nomenclature.type] - ss[b.nomenclature.type]);

        this.copyProducts = [...this.products];
        this.isLoading = false;

        this.getTree();
      }
    );
  }

  getTree() {
    this.copyProducts.forEach(p => {
      if (p.actual_quantity === null) {
        p.actual_quantity = 0;
      }
    });

    this.addedTree = this.copyProducts.map(p => {
      return {
        data: p,
        children: [],
        expanded: false,
        parent: null,
      };
    });

    const productIds = this.copyProducts.filter(p => p.has_children).map(p => p.list) as number[];

    const get = (ids: number[]) => {
      this.listProductService.getPartly(ids).subscribe(response => {
        // @ts-ignore
        const newProducts = response.flat();
        newProducts.forEach(p => {
          if (p.actual_quantity === null) {
            p.actual_quantity = 0;
          }
        });

        const newIds = newProducts.filter(p => p.has_children).map(p => p.list) as number[];

        this.copyProducts = [...this.copyProducts, ...newProducts];

        if (newIds.length > 0) {
          get(newIds);
        } else {
          this.generateTree();
          this.isLoadingTree = false;
        }
      });
    };

    if (productIds.length > 0) {
      get(productIds);
    } else {
      this.tree = [...this.addedTree];
      this.isLoadingTree = false;
    }
  }

  generateTree() {
    const getChildren = (nodes) => {
      nodes.forEach(node => {
        const children = this.copyProducts.filter(c => c.parent === node.data.id);
        if (children.length > 0) {
          node.children = children.map(product => {
            return {
              data: product,
              children: [],
              expanded: false,
              parent: node,
            };
          });

          getChildren(node.children);
        }
      });
    };

    getChildren(this.addedTree);

    this.tree = [...this.addedTree];
  }

  printPage() {
    this.productsForPrint = [];
    this.isLoadingListsForPrint = true;
    // const ids = this.products.filter(p => p.list_url).map(p => p.list) as number[];

    this.productsForPrint = this.products.map(p => {
      return {
        children: [],
        data: p,
      };
    });

    this.list.list = this.listId as any;

    this.productsForPrint.unshift({
      data: this.list as any,
      children: this.products
    });

    const getProducts = (products) => {
      const ids = products.filter(p => p.list_url).map(p => p.list) as number[];

      if (ids.length > 0) {
        this.listProductService.getPartly(ids).subscribe(response => {
          // @ts-ignore
          const newProducts = response.flat();

          newProducts.forEach(product => {
            if (product.list_url) {
              this.productsForPrint.push({
                data: product,
                children: [],
              });
            }

            const index = this.productsForPrint.findIndex(p => p.data.id === product.parent);
            this.productsForPrint[index].children.push(product);
          });

          getProducts(newProducts.filter(p => p.list_url));
        });
      } else {
        this.isShowPrint = true;
        setTimeout(() => {
          window.print();
        });
      }
    };

    getProducts(this.products);
  }

  setQuantities() {
    if (this.mode === 'list') {
      this.listService.setQuantities(+this.listId).pipe(take(1)).subscribe(res => this.getAll());
    } else {
      if (!this.selectedNodeTree) {
        this.listService.setQuantities(+this.listId).subscribe(() => {
          this.getAll();
        });
      } else {
        if (this.selectedNodeTree.data.list_url) {
          this.listService.setQuantities(this.selectedNodeTree.data.list).subscribe(() => {
            this.getAll();
          });
        }
      }
    }
  }

  editQuantity(node) {
    this.modalService.editListProduct(node).subscribe(response => {
      console.log(response);
      // if (node.list_url) {
      //   this.getAll();
      // } else {
      if (response.actual_quantity === null) {
        response.actual_quantity = 0;
      }

      const index = this.products.findIndex(p => p.id === response.id);
      this.products[index] = response;

      const find = (nodes) => {
        nodes.forEach(n => {
          if (n.data.id === response.id) {
            n.data = response;
          } else if (n.children.length > 0) {
            find(n.children);
          }
        });
      };

      find(this.tree);
      // }
    });
  }

  process() {
    this.modalService.completeList(this.list).subscribe(conf => {
      if (conf) {
        this._location.back();
      }
    });
  }

  makeDeficit() {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        this.listService.make_deficit(this.list.id).subscribe(res => {
          this.getAll();
        });
      }
    });
  }

  makeRequestsForAll() {
    this.listService.makeRequestsForAll(this.list).subscribe();
  }

  showImages(node) {
    console.log(node);
    this.modalService.showImageGallery([], node.nomenclature.id, 1).subscribe();
  }

  cancelQuantities(node) {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        const id = node.id;
        this.listService.canceledActualQuantity(id).subscribe(response => {
          // if (node.list_url) {
          //   this.getAll();
          //   node = null;
          // } else {
          if (response.actual_quantity === null) {
            response.actual_quantity = 0;
          }

          const index = this.products.findIndex(p => p.id === response.id);
          this.products[index] = response;

          const find = (nodes) => {
            nodes.forEach(n => {
              if (n.data.id === response.id) {
                n.data = response;
              } else if (n.children.length > 0) {
                find(n.children);
              }
            });
          };

          find(this.tree);
          // }
        });
      }
    });
  }

  expandAll(): void {
    const temp = cloneDeep(this.tree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.tree = temp;
  }

  collapseAll(): void {
    const temp = cloneDeep(this.tree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.tree = temp;
    this.selectedNodeTree = null;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    if (node.data.status != 1) {
      node.expanded = isExpand;
      if (node.children) {
        node.children.forEach(childNode => {
          this.expandCollapseRecursive(childNode, isExpand);
        });
      }
    }
  }
}
