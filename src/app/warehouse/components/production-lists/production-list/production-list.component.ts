import {Component, OnInit} from '@angular/core';
import {List} from '../../../models/list';
import {ListProduct} from '../../../models/list-product';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {ListService} from '../../../services/list.service';
import {take} from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import {Location} from '@angular/common';
import {MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ListProductService} from '../../../services/list-product.service';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {ViewMode} from '../production-lists.component';
import {ScanResult} from '../../../../qr-code/models/scan-result';
import {IS_SCANNING_ENABLED} from '@shared/interceptors/error-interceptor';

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

  selectedNodeMenuItems: MenuItem[] = [
    {
      label: 'Selected Production List',
      items: [
        {
          label: 'Show Images',
          icon: 'pi pi-images',
          command: () => this.showImages(this.selectedNode),
        },
        {
          label: 'Set Actual Quantity',
          icon: 'pi pi-angle-double-right',
          command: () => this.editQuantity(this.selectedNode),
        },
        {
          label: 'Cancel Actual Quantities',
          icon: 'pi pi-times',
          command: () => this.cancelQuantities(this.selectedNode),
        },
        {
          label: 'Make Request',
          icon: 'pi pi-caret-right',
          command: () => this.makeDeficitOne(this.selectedNode),
        },
      ]
    }
  ];

  selectedNodeTreeMenuItems: MenuItem[] = [
    {
      label: 'Selected Production List',
      items: [
        {
          label: 'Show Images',
          icon: 'pi pi-images',
          command: () => this.showImages(this.selectedNodeTree.data),
        },
        {
          label: 'Set Actual Quantity',
          icon: 'pi pi-angle-double-right',
          command: () => this.editQuantity(this.selectedNodeTree.data),
        },
        {
          label: 'Cancel Actual Quantities',
          icon: 'pi pi-times',
          command: () => this.cancelQuantities(this.selectedNodeTree.data),
        },
        {
          label: 'Make Request',
          icon: 'pi pi-caret-right',
          command: () => this.makeDeficitOne(this.selectedNodeTree.data),
        },
      ]
    }
  ];

  mode: 'hierarchy' | 'list' = 'hierarchy';

  addedTree = [];

  isSetAllActualQuantities = false;
  products: ListProduct[];
  selectedNode;
  selectedNodeTree;
  isLoading = true;
  list: List = null;
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

  menuItems: MenuItem[] = [
    {
      label: 'Root Production List',
      items: [
        {
          label: 'Print',
          icon: 'pi pi-print',
          command: () => this.printPage(),
          disabled: true,
        },
        {
          label: 'Set Actual Quantities',
          icon: 'pi pi-angle-double-right',
          command: () => this.setQuantities(),
        },
        {
          label: 'Make Requests',
          icon: 'pi pi-caret-right',
          command: () => this.makeDeficit(),
        },
        {
          label: 'Make request for all',
          icon: 'pi pi-caret-right',
          command: () => this.makeRequestsForAll(),
        },
      ]
    }
  ];

  foundRowsIds: number[] = [];
  currentDisplayRowId: number;
  isScanned = false;
  scanningEnd = true;
  elementsRowsIds: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService,
    private listService: ListService,
    private listProductService: ListProductService,
    private router: Router,
    public _location: Location,
    private messageService: MessageService,
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

    this.menuItems[0].items[0].disabled = true;

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

        this.getTree();

        this.menuItems[0].items[0].disabled = false;

        this.isLoading = false;
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
    // const ids = this.products.filter(p => p.list_url).map(p => p.list) as number[Ск];

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

    console.log(this.productsForPrint);

    const getProducts = (products) => {
      const ids = products.filter(p => p.has_children).map(p => p.list) as number[];

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
            this.productsForPrint[index]?.children.push(product);
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

  selectMode(mode: any) {
    this.mode = mode;
    this.onSelectTreeNode()
  }

  makeDeficitOne(node: any) {
    // /list_products/{id}/deficit_request/

    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.listService.makeDeficitOne(node.id).subscribe(() => {
          this.getAll();
        })
      }
    })
  }

  onSelectTreeNode() {
    if (this.mode === 'list' && this.selectedNode) {
      this.menuItems[0].items[1].disabled = !this.selectedNode?.list_url;
    } else if (this.mode === 'hierarchy' && this.selectedNodeTree) {
      this.menuItems[0].items[1].disabled = !this.selectedNodeTree?.data?.list_url || (this.selectedNodeTree?.data.status === '1' || this.selectedNodeTree.data.status === '3');
    } else {
      this.menuItems[0].items[1].disabled = false;
    }
  }

  scanForListProduct(data: ScanResult = null) {
    this.expandAll();

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id)
      });
    });

    this.listService.getScanned(this.listId, data).subscribe(res => {
      if (res.ids_found.length > 0) {
        this.elementsRowsIds.forEach(elementId => {
          const idArray = elementId.split('-');
          const foundId = res.ids_found.find(el => el.toString() === idArray[1]);
          if (foundId) {
            this.foundRowsIds.push(foundId);
          }
        });
        if (this.foundRowsIds.length > 0) {
          this.currentDisplayRowId = this.foundRowsIds[0];
          this.scrollToElement('row-' + this.currentDisplayRowId);
        }
      } else {
        this.messageService.add({severity: 'error', summary: 'No matching found.', detail: `No product lists was found with scanned QR code!`});
      }
    });
  }

  scrollToElement(rowId: string): void {
    const element = document.getElementById(rowId);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  isFoundRow(productId: number): boolean {
    return this.foundRowsIds.length > 0 && this.foundRowsIds.findIndex(id => id === productId) > -1;
  }

  onStartScanning() {
    this.clearQrResults();
    this.expandAll();

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id)
      });
    });
    this.isScanned = true;
    this.scanningEnd = false;
  }

  onScanned(data: any) {
    this.scanningEnd = true;
    this.isScanned = false;
    console.log('data found on qr code', data);
    this.scanForListProduct(data)
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanned = false;
  }

  goToNext() {
    let currentIndex = this.foundRowsIds.findIndex(id => id === this.currentDisplayRowId);
    if (currentIndex < this.foundRowsIds.length - 1) {
      this.currentDisplayRowId = this.foundRowsIds[currentIndex + 1];
    } else {
      this.currentDisplayRowId = this.foundRowsIds[0];
    }
    this.scrollToElement('row-' + this.currentDisplayRowId);
  }

  goToPrev() {
    let currentIndex = this.foundRowsIds.findIndex(id => id === this.currentDisplayRowId);
    if (currentIndex > 0) {
      this.currentDisplayRowId = this.foundRowsIds[currentIndex - 1];
    } else {
      this.currentDisplayRowId = this.foundRowsIds[this.foundRowsIds.length - 1];
    }
    this.scrollToElement('row-' + this.currentDisplayRowId);
  }

  clearQrResults() {
    this.currentDisplayRowId = null;
    this.foundRowsIds = [];
  }
}
