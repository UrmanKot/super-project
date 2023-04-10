import {Component, HostListener, OnInit} from '@angular/core';
import {List} from '../../../models/list';
import {ListProduct} from '../../../models/list-product';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {ListService} from '../../../services/list.service';
import {filter, take} from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import {Location} from '@angular/common';
import {MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ListProductService} from '../../../services/list-product.service';
import {ScanResult} from '../../../../qr-code/models/scan-result';
import {AlbumService} from '@shared/services/album.service';
import {environment} from '@env/environment';
import {QrCodeService} from '../../../../qr-code/qr-code.service';
import {AdapterService} from '@shared/services/adapter.service';
import {J} from '@angular/cdk/keycodes';

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

  link = environment.link_url + 'dash/';
  isGenerating = false;

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
          command: () => this.onSetActualQuantity(),
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
        {
          label: 'Generate QR Codes',
          icon: 'pi pi-caret-right',
          command: () => this.onGenerateQrCodes(this.selectedNode),
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
          command: () => this.onSetActualQuantity(),
        },
        {
          label: 'Cancel Actual Quantities',
          icon: 'pi pi-times',
          command: () => this.onCancelActualQuantity(),
        },
        {
          label: 'Make Request',
          icon: 'pi pi-caret-right',
          command: () => this.makeDeficitOne(this.selectedNodeTree.data),
        },
        {
          label: 'Generate QR Codes',
          icon: 'pi pi-caret-right',
          command: () => this.onGenerateQrCodes(this.selectedNodeTree.data),
        },
      ]
    }
  ];

  mode: 'hierarchy' | 'list' = 'hierarchy';

  addedTree = [];
  isAlbumPrint = false;

  isSetAllActualQuantities = false;
  products: ListProduct[];
  selectedNode;
  selectedNodeTree: TreeNode<ListProduct>;
  isLoading = true;
  list: List = null;
  listId = this.route.snapshot.paramMap.get('id');
  statuses = {'Not processed': 'Not Processed', 'Completed': 'Completed', 'Deficit': 'Deficit', 'Reserved': 'Reserved'};
  showComplete = false;
  routerHandler$;

  copyProducts: ListProduct[];
  isLoadingTree = true;

  tree: TreeNode<ListProduct>[] = [];

  isShowPrint = false;
  isShowPrintSeparated = false;

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
          label: 'Print Separated By Assembly',
          icon: 'pi pi-print',
          command: () => this.printPage(true),
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
        {
          label: 'Go To Plan',
          icon: 'pi pi-angle-double-right',
          command: () => this.goToPlan(),
        },
      ]
    }
  ];

  foundRowsIds: number[] = [];
  currentDisplayRowId: number;
  isScanned = false;
  scanningEnd = true;
  elementsRowsIds: string[] = [];

  listProducts: ListProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService,
    private listService: ListService,
    private listProductService: ListProductService,
    private router: Router,
    public _location: Location,
    private messageService: MessageService,
    public readonly albumService: AlbumService,
    private readonly adapterService: AdapterService,
    private readonly qrCodeService: QrCodeService,
  ) {

  }

  ngOnInit(): void {
    this.getList();
    this.getListProducts();
  }

  getList() {
    this.listService.getById(+this.listId).subscribe(list => this.list = list);
  }

  createListProductsGroups(lists: ListProduct[]): ListProduct[] {
    const firstListProducts = lists.filter(p => p.task_sort_value === 1);

    let groupId = 0;

    firstListProducts.forEach(product => {
      groupId++;

      let currentProduct: ListProduct = product;

      while (currentProduct?.next_technology_list_product) {
        currentProduct.groupId = groupId;
        currentProduct = lists.find(p => p.id === currentProduct.next_technology_list_product);
      }

      currentProduct.groupId = groupId;

    });

    lists.forEach(list => {
      list.groupKey = '';

      list.groupedProducts = lists.filter(p => p.groupId === list.groupId).sort((a, b) => a.task_sort_value - b.task_sort_value);

      const filteredTasks = lists.filter(t => t.nomenclature.id === list.nomenclature.id && t.level === list.level);
      const firstLists = filteredTasks.filter(p => p.task_sort_value === 1);

      const newListProducts: ListProduct[] = [];

      firstLists.forEach(firstList => {
        const uiParent = firstList.id;

        let currentListProduct = firstList;

        while (currentListProduct?.next_technology_list_product) {
          currentListProduct.uiParent = uiParent;
          newListProducts.push(currentListProduct);
          currentListProduct = lists.find(l => l.id === currentListProduct.next_technology_list_product);
        }

        currentListProduct.uiParent = uiParent;
        newListProducts.push(currentListProduct);
      });

      newListProducts.filter(listProduct => listProduct.groupId === list.groupId).forEach(l => {
        list.groupKey += `${l.technology?.id}/${l.status}/${l.nomenclature.id}/${l.level}`;
        const childrenListProducts = lists.filter(p => p.parent === list.uiParent);

        childrenListProducts.forEach(l => {
          list.groupKey += `${l.technology?.id}/${l.status}/${l.nomenclature.id}/${l.level}`;
        });
      });
    });


    lists.forEach(list => {
      list.filteredProducts = lists.filter(p => p.groupKey === list.groupKey);
    });

    return lists;
  }

  sortingListProducts(lists: ListProduct[]) {
    let nomenclaturesTypes = {'0': 3, '1': 1, '2': 2};
    lists.sort((a, b) => nomenclaturesTypes[a.nomenclature.type] - nomenclaturesTypes[b.nomenclature.type] || a.nomenclature.id - b.nomenclature.id);
  }

  createListProductsTree(newListProducts: ListProduct[], lists: ListProduct[]) {
    newListProducts.filter(l => l.level === 1).forEach(list => {
      this.tree.push({
        parent: null,
        data: list,
        children: [],
        expanded: false
      });
    });

    const fillTree = (nodes: TreeNode<ListProduct>[], level: number) => {
      level++;

      const parentNodes = nodes.filter(n => n.data.products?.find(p => p.has_children));

      parentNodes.forEach(parentNode => {

        if (!parentNode.data.blockedExpand) {
          const filteredLists = lists.filter(l => parentNode.data.filteredProducts.map(p => p.id).includes(l.parent));

          const newLiftProducts: ListProduct[] = [];

          filteredLists.forEach(list => {
            if (!newLiftProducts.find(p => p.groupId === list.groupId)) {

              if (!newLiftProducts.find(l => l.groupKey === list.groupKey)) {

                const totalActualQuantity = filteredLists
                  .filter(p => p.actual_quantity > 0 && list.nomenclature.id === p.nomenclature.id)
                  .reduce((sum, p) => sum += p.actual_quantity, 0);

                const reservedQuantity = list.groupedProducts
                  .filter(p => p.reserved_quantity > 0 && list.nomenclature.id === p.nomenclature.id)
                  .reduce((sum, p) => sum += p.reserved_quantity, 0);

                switch (list.groupedProducts[list.groupedProducts.length - 1].status) {
                  case 'Deficit':
                    list.status = 'Deficit';
                    break;
                  case 'Completed':
                    list.status = 'Completed';
                    break;
                }

                let totalCount = 0;
                list.products.forEach(product => {

                  parentNode.data.filteredProducts.forEach(p => {
                    if (p.id === product.parent) {
                      totalCount++;
                    }
                  });
                });

                totalCount = totalCount / list.technologies.length;

                const newList = {
                  ...list,
                  total_required_quantity: list.status !== 'Not processed' && totalActualQuantity ? totalActualQuantity : totalCount,
                  actual_quantity: totalActualQuantity,
                  reserved_quantity: reservedQuantity,
                };

                if (list.nomenclature.name === 'Bushing') {
                  console.log(list);
                  console.log(totalActualQuantity);
                }

                newLiftProducts.push(newList);
              }
            }
          });

          newLiftProducts.forEach(newListProduct => {
            parentNode.children.push({
              parent: parentNode,
              data: newListProduct,
              children: [],
              expanded: false
            });
          });

          if (parentNode.children.length > 0) {
            fillTree(parentNode.children, level);
          }
        }
      });
    };

    fillTree(this.tree, 1);

    this.tree = this.tree.map(l => l);
  }

  generateListProducts(lists: ListProduct[]) {
    this.tree = [];
    this.selectedNodeTree = null;

    lists.forEach(list => list.pureTotalRequiredQuantity = JSON.parse(JSON.stringify(list.total_required_quantity)));

    lists = this.createListProductsGroups(lists);

    const newListProducts: ListProduct[] = [];

    let uid = 1;

    lists.forEach(list => {
      list.uid = uid;

      uid++;

      list.reserved_quantity = list.reserved_quantity ?? 0;
      list.actual_quantity = list.actual_quantity ?? 0;

      list.products = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level);

      list.warehouseQuantities = this.adapterService.removeDuplicates(list.products, list => list.technology?.id)
        .sort((a, b) => a.task_sort_value - b.task_sort_value)
        .map(l => l.warehouse_quantity);

      list.technologies = list.products.filter(l => l.technology).map(l => {
        return {
          ...l.technology,
          task_sort_value: l.task_sort_value,
        };
      });

      list.technologies = this.adapterService.removeDuplicates(list.technologies, x => x.name);
      list.technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);

      list.blockedExpand = list.groupedProducts.some(p => p.status === 'Completed');
      list.currentTechnology = list.groupedProducts.find(p => p.status === 'Completed')?.technology;

      const findEl = list.groupedProducts.find(p => p.status === 'Completed');
      list.warehouse_quantity = findEl ? findEl.warehouse_quantity : list.warehouse_quantity;

      list.has_children = list.products.some(p => p.has_children);
      list.groupedProductIds = list.products.map(p => p.id);

      if (
        !newListProducts.find(l => l.groupKey === list.groupKey) &&
        lists
          .filter(l => l.nomenclature.id === list.nomenclature.id)
          .every(n => n.status === 'Not processed')
      ) {
        list.status = list.products.some(p => p.status === 'Deficit') ? 'Deficit' : list.status;
        newListProducts.push(list);

      } else if (lists.filter(l => l.nomenclature.id === list.nomenclature.id).some(n => n.status !== 'Not processed')) {
        if (!newListProducts.find(p => list.groupKey === p.groupKey)) {

          if (list.technologies.length === 0 && !newListProducts.find(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level)) {
            let totalQuantityDeficit = 0;
            let totalQuantityCompleted = 0;

            list.products.forEach(product => {
              if (product.status === 'Completed') {
                totalQuantityCompleted++;
              } else if (product.status === 'Deficit') {
                totalQuantityDeficit++;
              }
            });

            const newListCompleted: ListProduct = {
              ...list,
              total_required_quantity: totalQuantityCompleted,
              actual_quantity: totalQuantityCompleted,
              reserved_quantity: totalQuantityCompleted,
              status: 'Completed'
            };

            uid++;

            const newListDeficit: ListProduct = {
              ...list,
              uid: uid,
              total_required_quantity: totalQuantityDeficit,
              actual_quantity: 0,
              reserved_quantity: 0,
              status: 'Deficit'
            };

            uid++;

            const notProcessedCount = list.products.filter(p => p.status === 'Not processed').length;

            const newListNotProcessed: ListProduct = {
              ...list,
              uid: uid,
              total_required_quantity: notProcessedCount,
              actual_quantity: 0,
              reserved_quantity: 0,
              status: 'Not processed'
            };


            if (totalQuantityCompleted > 0) {
              newListProducts.push(newListCompleted);
            }

            if (((totalQuantityCompleted !== list.pureTotalRequiredQuantity && !notProcessedCount) || totalQuantityCompleted === 0) || (notProcessedCount && totalQuantityCompleted === 0)) {
              newListProducts.push(newListDeficit);
            }

            if (notProcessedCount) {
              newListProducts.push(newListNotProcessed);
            }
          } else if (list.technologies.length > 0) {
            if (!newListProducts.find(p => p.groupId === list.groupId)) {

              if (!newListProducts.find(l => l.groupKey === list.groupKey)) {

                switch (list.groupedProducts[list.groupedProducts.length - 1].status) {
                  case 'Deficit':
                    list.status = 'Deficit';
                    break;
                  case 'Completed':
                    list.status = 'Completed';
                    break;
                }

                newListProducts.push(list);
              }
            }
          }
        }
      }
    });

    this.sortingListProducts(newListProducts);

    newListProducts.forEach(list => {
      list.filteredProducts = lists.filter(p => p.groupKey === list.groupKey);

      if (list.level === 1 && list.technologies.length > 0) {

        if (list.status !== 'Not processed' && list.technologies.length > 0 && list.currentTechnology) {
          list.total_required_quantity = list.actual_quantity = list.filteredProducts
            .filter(p => p.actual_quantity > 0)
            .reduce((sum, p) => sum += p.actual_quantity, 0);

          list.reserved_quantity = list.filteredProducts
            .filter(p => p.reserved_quantity > 0)
            .reduce((sum, p) => sum += p.reserved_quantity, 0);

        } else if (!list.currentTechnology) {
          let count = 0;

          const filteredGroupsIds = this.adapterService.removeDuplicates(list.filteredProducts, list => list.groupId)
            .map(l => l.groupId);

          const groupsIds = this.adapterService.removeDuplicates(list.products, list => list.groupId)
            .map(l => l.groupId);

          groupsIds.forEach(t => {
            if (filteredGroupsIds.includes(t)) {
              count++;
            }
          });

          list.total_required_quantity = count;
        }
      }
    });

    this.createListProductsTree(newListProducts, lists);
    console.log(this.tree);
    console.log(lists);
  }

  getListProducts() {
    this.tree = [];
    this.isLoading = true;

    this.listService.getListProducts(+this.listId).subscribe(lists => {
      this.listProducts = JSON.parse(JSON.stringify(lists));

      const newLists = JSON.parse(JSON.stringify(lists));

      this.generateListProducts(newLists);

      this.isLoading = false;
    });
  }

  togglePrintAlbumMode() {
    this.selectedNodeTree = null;
    this.isAlbumPrint = !this.isAlbumPrint;
  }

  printAlbum() {
    this.albumService.getNomenclaturesImages((<any[]>this.selectedNodeTree).map(r => r.data?.nomenclature));
  }

  getAll() {
    this.selectedNodeTree = null;
    this.selectedNode = null;
    this.tree = [];
    this.addedTree = [];
    this.copyProducts = [];

    this.menuItems[0].items[0].disabled = true;
    this.menuItems[0].items[1].disabled = true;

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
        this.menuItems[0].items[1].disabled = false;

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
    const sortType = {'0': 3, '1': 1, '2': 2};
    this.copyProducts.sort((a, b) => sortType[a.nomenclature.type] - sortType[b.nomenclature.type]);
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

  printPage(isShowPrintSeparated = false) {
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
        this.isShowPrintSeparated = isShowPrintSeparated;
        setTimeout(() => {
          window.print();
        });
      }
    };

    getProducts(this.products);
  }

  @HostListener('window:afterprint', [])
  onWindowAfterPrint() {
    this.isShowPrint = false;
    this.isShowPrintSeparated = false;
  }

  @HostListener('afterprint') printClosed() {
    this.isShowPrintSeparated = false;
    this.isShowPrint = false;
  }


  setQuantities() {
    if (this.mode === 'list') {
      this.listService.setQuantities(+this.listId).pipe(take(1)).subscribe(res => this.getListProducts());
    } else {
      if (!this.selectedNodeTree) {
        this.listService.setQuantities(+this.listId).subscribe(() => {
          this.getListProducts();
        });
      } else {
        if (this.selectedNodeTree.data.list_url) {
          // @ts-ignore
          this.listService.setQuantities(this.selectedNodeTree.data.list).subscribe(() => {
            this.getListProducts();
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
          this.getListProducts();
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
    this.onSelectTreeNode();
  }

  makeDeficitOne(node: any) {
    // /list_products/{id}/deficit_request/

    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.listService.makeDeficitOne(node.id).subscribe(() => {
          this.getListProducts();
        });
      }
    });
  }

  onSelectTreeNode() {
    if (this.mode === 'list' && this.selectedNode) {
      this.menuItems[0].items[2].disabled = !this.selectedNode?.list_url;
    } else if (this.mode === 'hierarchy' && this.selectedNodeTree) {
      this.menuItems[0].items[2].disabled = !this.selectedNodeTree?.data?.list_url || (this.selectedNodeTree?.data.status === '1' || this.selectedNodeTree.data.status === '3');
    } else {
      this.menuItems[0].items[2].disabled = false;
    }
  }

  scanForListProduct(data: ScanResult = null) {
    this.expandAll();

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id);
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
        this.messageService.add({
          severity: 'error',
          summary: 'No matching found.',
          detail: `No product lists was found with scanned QR code!`
        });
      }
    });
  }

  scrollToElement(rowId: string): void {
    const element = document.getElementById(rowId);
    element.scrollIntoView({behavior: 'smooth', block: 'center'});
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
        this.elementsRowsIds.push(element.id);
      });
    });
    this.isScanned = true;
    this.scanningEnd = false;
  }

  onScanned(data: any) {
    this.scanningEnd = true;
    this.isScanned = false;
    this.scanForListProduct(data);
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

  goToPlan() {
    window.open(this.link + `production/plan/tasks/${this.list.root_production_plans[0].id}`, '_blank');
  }

  onGenerateQrCodes(node) {
    // this.isGenerating = true;
    console.log('this.selectedNode', node);
    const send = {
      by_nomenclatures_list: [],
    };

    if (node.nomenclature.bulk_or_serial !== '1') {
      send.by_nomenclatures_list.push({
        nomenclature_id: node.nomenclature.id,
        serial_number_ids: [],
        order_product_ids: [],
        invoice_product_ids: [],
      });
    } else {
      let serialNumbers = [];
      if (node.reserved_serial_numbers && node.reserved_serial_numbers.length) {
        serialNumbers = [...node.reserved_serial_numbers.map(serial => serial.id)];
      }
      if (node.future_serial_numbers && node.future_serial_numbers.length) {
        serialNumbers = [...node.future_serial_numbers.map(serial => serial.id)];
      }
      send.by_nomenclatures_list.push({
        nomenclature_id: node.nomenclature.id,
        serial_number_ids: serialNumbers,
        order_product_ids: [],
        invoice_product_ids: [],
      });
    }

    this.qrCodeService.generateQrCodes(send).subscribe(() => this.isGenerating = false);
  }

  onSetActualQuantity() {
    this.listService.setActualQuantityDialog({...this.selectedNodeTree.data}, this.selectedNodeTree.parent?.data).subscribe(listProducts => {
      if (listProducts) {

        listProducts.forEach(listProduct => {
          const index = this.listProducts.findIndex(l => l.id === listProduct.id);
          this.listProducts[index] = {...listProduct};
        });

        const lists = JSON.parse(JSON.stringify(this.listProducts))

        this.generateListProducts(lists);
      }
    });
  }

  onCancelActualQuantity() {
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.isLoading = true;
      this.tree = [];

      const send = {
        ids: [],
      };

      const selectedListProduct = this.selectedNodeTree.data;

      if (selectedListProduct.technologies.length === 0) {
        send.ids = selectedListProduct.products.filter(p => p.status === selectedListProduct.status).map(p => p.id);
      } else {
        send.ids = selectedListProduct.filteredProducts.map(p => p.id)
      }

      this.listProductService
        .cancelActualQuantity(send)
        .subscribe(listProducts => {
          listProducts.forEach(listProduct => {
            const index = this.listProducts.findIndex(l => l.id === listProduct.id);
            this.listProducts[index] = {...listProduct};
          });

          const lists = JSON.parse(JSON.stringify(this.listProducts))

          this.generateListProducts(lists);
        });

      this.selectedNodeTree = null;
    });
  }
}
