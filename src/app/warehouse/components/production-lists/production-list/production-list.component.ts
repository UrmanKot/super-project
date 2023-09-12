import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {List} from '../../../models/list';
import {ListProduct, TreeNodeListProduct} from '../../../models/list-product';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {ListService} from '../../../services/list.service';
import {filter, take, tap} from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import {Location} from '@angular/common';
import {MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ListProductService} from '../../../services/list-product.service';
import {ScanResult} from '../../../../qr-code/models/scan-result';
import {AlbumService} from '@shared/services/album.service';
import {QrCodeService} from '../../../../qr-code/qr-code.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {TreeTable} from 'primeng/treetable';
import {forkJoin} from 'rxjs';

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
  @ViewChild('table') table: TreeTable;
  uiTaskMap = new Map<string, ListProduct>();
  productionMap = new Map<number | string, TreeNodeListProduct>();
  productions: TreeNodeListProduct[] = [];

  expanseMap = {};

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
        // {
        //   label: 'Generate QR Codes',
        //   icon: 'pi pi-caret-right',
        //   command: () => this.onGenerateQrCodes(this.selectedNode),
        // },
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
          command: () => this.onSetActualQuantity(false),
          // command: () => this.editQuantity(this.selectedNodeTree.data),
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
          label: 'Make Request For All',
          icon: 'pi pi-caret-right',
          command: () => this.makeRequestsNodeForAll(this.selectedNodeTree.data),
        },
        // {
        //   label: 'Generate QR Codes',
        //   icon: 'pi pi-caret-right',
        //   command: () => this.onGenerateQrCodes(this.selectedNodeTree.data),
        // },
      ]
    }
  ];

  mode: 'hierarchy' | 'list' = 'hierarchy';

  isAlbumPrint = false;
  isQrGenerateMode = false;

  products: ListProduct[];
  selectedNode;
  selectedNodeTree: TreeNode<ListProduct> & TreeNode<ListProduct>[];
  selectedMultipleByOneNodeTree: TreeNode<ListProduct> & TreeNode<ListProduct>[] = [];
  isLoading = true;
  list: List = null;
  listId = this.route.snapshot.paramMap.get('id');
  statuses = {'Not processed': 'Not Processed', 'Completed': 'Completed', 'Deficit': 'Deficit', 'Reserved': 'Reserved'};

  isOldList = false;
  isLoadingTree = true;

  tree: TreeNodeListProduct[] = [];

  isShowPrint = false;
  isShowPrintSeparated = false;

  productsForPrint: TreeNode<Partial<ListProduct>>[];

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
  isTableScrollable: boolean = true;
  isExpandEnded: boolean = true;

  blockStepBtns = false;

  expandFakeCount = 0;
  askForScan = false;

  ENomenclatureType = ENomenclatureType;

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

    this.onResize();

    requestAnimationFrame(() => {
      console.log('table', this.table);
    });
  }

  createExpanseMap(node: TreeNode<ListProduct>) {
    if (node.expanded) {
      this.expanseMap[node.data.uid] = node.expanded;
    } else {
      this.expanseMap[node.data.uid] = false;
    }
    if (node.children) {
      node.children.forEach(element => {
        this.createExpanseMap(element);
      });
    }
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
      list.level = list.level === 1 ? null : list.level;
    });

    lists.forEach(list => {
      list.groupKey = '';
      list.tasks = [];
      list.reserved_quantity = list.reserved_quantity ?? 0;

      list.pureTotalRequiredQuantity = JSON.parse(JSON.stringify(list.total_required_quantity));

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
        list.groupKey += `${l.technology?.id}/${l.status}/${l.nomenclature.id}/${l.level}/${lists.find(l => l.id === list.parent)?.nomenclature?.id}`;
        // const childrenListProducts = lists.filter(p => p.parent === list.uiParent);
        //
        // childrenListProducts.forEach(l => {
        //   list.groupKey += `${l.technology?.id}/${l.status}/${l.nomenclature.id}/${l.level}/${lists.find(l => l.id === list.parent)?.nomenclature?.id}`;
        // });
      });
    });

    return lists;
  }

  sortingListProducts(lists: ListProduct[]) {
    let nomenclaturesTypes = {'0': 3, '1': 1, '2': 2};
    lists.sort((a, b) => nomenclaturesTypes[a.nomenclature.type] - nomenclaturesTypes[b.nomenclature.type] || a.nomenclature.id - b.nomenclature.id);
  }

  generateOldListProducts(listProducts: ListProduct[]) {
    this.tree = [];
    this.selectedNodeTree = null;

    this.sortingListProducts(listProducts);

    listProducts = listProducts.map(list => {
      return {
        ...list,
        products: [],
        technologies: [],
        blockedExpand: Boolean(list.status === 'Completed' || list.status === 'Reserved'),
        uid: list.id
      };
    });

    const parentListProducts = listProducts.filter(l => l.level === 1);

    parentListProducts.forEach(list => {
      // @ts-ignore
      this.tree.push({
        parent: null,
        data: list,
        children: [],
        isSticky: false,
        expanded: list.blockedExpand ? false : this.expanseMap[list.uid]
      });
    });

    const fillTree = (nodes: TreeNode<ListProduct>[]) => {
      nodes.forEach(node => {

        const findListProducts = listProducts.filter(l => l.parent === node.data.id);

        findListProducts.forEach(listProduct => {
          node.children.push({
            parent: null,
            data: listProduct,
            children: [],
            expanded: listProduct.blockedExpand ? false : this.expanseMap[listProduct.uid]
          });
        });

        const nomenclaturesTypes = {'0': 3, '1': 1, '2': 2};
        node.children.sort((a, b) => nomenclaturesTypes[a.data.nomenclature.type] - nomenclaturesTypes[b.data.nomenclature.type] || a.data.nomenclature.id - b.data.nomenclature.id);

        if (node.children.length > 0) {
          fillTree(node.children);
        }
      });
    };

    fillTree(this.tree);

    this.tree = this.tree.map(l => l);
  }

  getListProducts() {
    this.tree = [];
    this.isLoading = true;

    this.listService.getListProducts(+this.listId).subscribe(lists => {
      this.isOldList = lists.findIndex(lis => {
        if (lis.nomenclature.type === ENomenclatureType.PURCHASED && !lis.parent_technology_list_product) {
          return false;
        } else if (!lis.next_technology_list_product && !lis.parent_technology_list_product) {
          return false;
        }
        return true;
      }) < 0;

      this.listProducts = JSON.parse(JSON.stringify(lists));
      const newLists = JSON.parse(JSON.stringify(lists));

      if (this.isOldList) {
        this.generateOldListProducts(newLists);
      } else {
        this.generateListProducts(newLists);
      }


      this.menuItems[0].items[0].disabled = false;
      this.menuItems[0].items[1].disabled = false;

      this.isLoading = false;
    });
  }

  generateListProducts(listProducts: ListProduct[]) {
    this.uiTaskMap = new Map<string, ListProduct>();
    this.productionMap = new Map<number | string, TreeNodeListProduct>();
    this.productions = [];
    this.tree = [];

    listProducts = this.createListProductsGroups(listProducts);

    const listProductMap = new Map<string, ListProduct>();

    listProducts.forEach(listProduct => {
      const listProductKey = `${listProduct.id}`;
      listProductMap.set(listProductKey, listProduct);
    });

    const getListProductKey = (listProduct: ListProduct) => {
      let key = '';
      do {
        key = `${listProduct.nomenclature.id}:${listProduct.groupKey}:${listProduct.level}/${key}`;
        listProduct = listProductMap.get(`${listProduct.parent}`);
      } while (listProduct);
      return key;
    };

    let uid = 0;

    listProducts.forEach(listProduct => {
      const productId = listProduct.id;
      const listProductKey = getListProductKey(listProduct);

      const listProductData: ListProduct = {
        ...listProduct,
        uid: uid++,
      };

      if (!this.productionMap.has(listProductKey)) {
        const newProduction = new TreeNodeListProduct({
          listProduct: listProduct,
          data: listProductData,
        });

        this.productions.push(newProduction);
        this.productionMap.set(listProductKey, newProduction);
      }

      const production = this.productionMap.get(listProductKey);
      this.productionMap.set(`${productId}`, production);

      if (!production.listProducts.find(p => p.id === listProduct.id)) {
        production.listProducts.push(listProduct);
      }

      const taskKey = `${listProductKey}:${listProduct.technology?.id}`;
      if (!this.uiTaskMap.has(taskKey)) {
        const newUiTask = {...listProduct};
        this.uiTaskMap.set(taskKey, newUiTask);
        production.tasks.push(newUiTask);
      }

      const uiTask = this.uiTaskMap.get(taskKey);
      if (!uiTask.tasks.find(t => t.id === listProduct.id)) {
        uiTask.tasks.push(listProduct);
      }
    });

    this.productionMap.forEach(production => {
      production.parent = this.productionMap.get(`${production.listProduct.parent}`);
      production.expanded = production.data.blockedExpand ? false : this.expanseMap[production.data.uid];

      if (production.parent) {
        if (!production.parent.children.includes(production)) {
          production.applyData();
          production.parent.children.push(production);
        }
      } else {
        if (!this.tree.includes(production)) {
          production.applyData();
          this.tree.push(production);
        }
      }
    });

    this.sortingTreeNodeListProducts(this.tree);
  }

  sortingTreeNodeListProducts(nodes: TreeNodeListProduct[]) {
    const nomenclaturesTypes = {'0': 3, '1': 1, '2': 2};
    nodes.sort((a, b) => nomenclaturesTypes[a.data.nomenclature.type] - nomenclaturesTypes[b.data.nomenclature.type] || a.data.nomenclature.id - b.data.nomenclature.id);

    nodes.forEach(node => {
      node.data.required_quantity_per_one = node.data.total_required_quantity / this.list?.sets_number;
      if (node.children.length) {
        this.sortingTreeNodeListProducts(node.children);
      }
    });
  }

  mapExpansion() {
    this.tree.forEach(element => {
      this.createExpanseMap(element);
    });
  }

  togglePrintAlbumMode() {
    this.isAlbumPrint = !this.isAlbumPrint;
    this.selectedNodeTree = null;
    if (this.isQrGenerateMode) {
      this.isQrGenerateMode = false;
    }
    this.selectedMultipleByOneNodeTree = [];
    requestAnimationFrame(() => {
      this.selectedNodeTree = [...this.selectedMultipleByOneNodeTree];
    });
  }

  toggleGenerateQRMode() {
    this.isQrGenerateMode = !this.isQrGenerateMode;
    this.selectedNodeTree = null;
    this.selectedNode = null;
    if (this.isAlbumPrint) {
      this.isAlbumPrint = false;
    }
    this.expandAll();
    this.selectedMultipleByOneNodeTree = [];
    requestAnimationFrame(() => {
      this.selectedNodeTree = [...this.selectedMultipleByOneNodeTree];
    });
  }

  printAlbum() {
    this.albumService.getNomenclaturesImages((<any[]>this.selectedNodeTree).map(r => r.data?.nomenclature));
  }

  generateQRCodes() {
    this.dataToQrGenerator();
  }

  dataToQrGenerator(onSetActualQuantity: boolean = false, isScanResult = false) {
      const send = {
        by_nomenclatures_production_list: [],
      };

      const calls = [];

      try {
        this.selectedNodeTree.forEach(productListData => {

          const productList = productListData.data;

          const call = this.listService.getProductListsParentIds(productList.id, productList).pipe(tap(res => {
            let listId = productListData.parent ? productListData.parent?.data.list : this.list?.id;
            if (res.productList.nomenclature.type === ENomenclatureType.ASSEMBLY) {
              listId = res.productList.list;
            }
            send.by_nomenclatures_production_list.push({
              nomenclature_id: res.productList.nomenclature.id,
              root_list_id: this.list?.id,
              list_id: listId,
              lists_ids: res.data,
              total_quantity: res.productList.total_required_quantity,
            });
            return res
          }));
          calls.push(call);
        });
      } catch (e) {
        const productList = this.selectedNodeTree.data;

        const call = this.listService.getProductListsParentIds(productList.id, productList).pipe(tap(res => {
          let listId = this.selectedNodeTree.parent ? this.selectedNodeTree.parent?.data.list : this.list?.id;
          if (res.productList.nomenclature.type === ENomenclatureType.ASSEMBLY) {
            listId = res.productList.list;
          }
          send.by_nomenclatures_production_list.push({
            nomenclature_id: res.productList.nomenclature.id,
            root_list_id: this.list?.id,
            list_id: listId,
            lists_ids: res.data,
            total_quantity: res.productList.total_required_quantity,
          });
          return res
        }));
        calls.push(call);
      }
      forkJoin([...calls]).subscribe(res => {
        if (onSetActualQuantity) {
          this.generateOnActualQuantity(isScanResult, send);
        } else {
          this.qrCodeService.generateQrCodes(send).subscribe(() => this.isGenerating = false);
        }
      });
      return send;


  }

  printPage(isShowPrintSeparated = false) {
    this.productsForPrint = [];
    this.productsForPrint.unshift({
      data: {
        nomenclature: {
          name: this.list.nomenclature.name,
          code: this.list.nomenclature.code
        },
        list: +this.listId
      },
      children: this.tree.filter(n => n.data.level === null || n.data.level === 1).map(n => {
        return {
          ...n,
          children: []
        };
      })
    });

    const fillTree = (nodes: TreeNode<ListProduct>[]) => {
      nodes.forEach(node => {
        this.productsForPrint.push(node);

        if (node.children.length > 0) {
          fillTree(node.children);
        }
      });
    };


    fillTree(this.tree);

    this.isShowPrint = true;
    this.isShowPrintSeparated = isShowPrintSeparated;

    setTimeout(() => {
      window.print();
    });
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
      this.listService.setQuantities(+this.listId).pipe(take(1)).subscribe(() => {
        this.getList();
        this.getListProducts();
      });
    } else {
      if (!this.selectedNodeTree) {
        this.listService.setQuantities(+this.listId).subscribe(() => {
          this.getList();
          this.getListProducts();
        });
      } else {
        if (this.selectedNodeTree.data.list_url) {
          // @ts-ignore
          this.listService.setQuantities(this.selectedNodeTree.data.list).subscribe(() => {
            this.getList();
            this.getListProducts();
          });
        }
      }
    }
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
        this.listService.makeDeficit(this.list.id).subscribe(() => {
          this.getListProducts();
        });
      }
    });
  }

  makeRequestsForAll() {
    this.listService.makeRequestsForAll(this.list.id).pipe(
      tap(() => {
        this.getList();
        this.getListProducts();
      })
    ).subscribe();
  }

  makeRequestsNodeForAll(node: ListProduct) {
    this.listService.makeRequestsForAll(+node.list).pipe(
      tap(() => this.getListProducts())
    ).subscribe();
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
    this.isExpandEnded = false;
    const temp = cloneDeep(this.tree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    requestAnimationFrame(() => {
      this.tree = [...temp];
      setTimeout(() => {
        this.isExpandEnded = true;
        this.expandFakeCount++;
      }, 5000);
    });

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
    if (!node.data.blockedExpand) {
      node.expanded = isExpand;
      if (node.children && node.children?.length > 0) {
        node.children.forEach(childNode => {
          this.expandCollapseRecursive(childNode, isExpand);
        });
      }
    }
  }

  makeDeficitOne(node: ListProduct) {
    // /list_products/{id}/deficit_request/

    console.log(node);

    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      if (node.nomenclature.type === ENomenclatureType.ASSEMBLY) {
        this.listService.makeDeficit(+node.list).subscribe(() => {
          this.getListProducts();
        });
      } else if (node.nomenclature.type === ENomenclatureType.PURCHASED) {
        const send: number[] = [];

        if (this.isOldList) {
          send.push(node.id);
        } else {
          node.filteredProducts.forEach(p => send.push(p.id));
        }

        this.listProductService.makeDeficit({ids: send}).pipe(
          tap(() => this.getListProducts())
        ).subscribe();
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

    this.selectedNodeTreeMenuItems[0].items[3].disabled = this.selectedNodeTree?.data?.nomenclature.type === ENomenclatureType.MANUFACTURED;
    this.selectedNodeTreeMenuItems[0].items[4].disabled = this.selectedNodeTree?.data?.nomenclature.type !== ENomenclatureType.ASSEMBLY;
  }

  scanForListProduct(data: ScanResult = null) {
    this.expandAll();

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row${this.expandFakeCount}-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id);
      });
    });

    this.listService.getScanned(this.listId, data).subscribe(res => {
      if (res.ids_found.length > 0) {
        const selectedId = this.selectedNodeTree?.data?.id;
        if (res.ids_found.findIndex(id => id === selectedId) >= 0) {

          this.elementsRowsIds.forEach(elementId => {
            const idArray = elementId.split('-');
            const foundId = res.ids_found.find(el => el.toString() === idArray[1]);

            if (foundId) {
              const canAdd = this.foundRowsIds.findIndex(el => el === foundId) < 0;
              if (canAdd) {
                this.foundRowsIds.push(foundId);
              }
            }
          });
          if (this.foundRowsIds.length > 0) {
            this.currentDisplayRowId = this.foundRowsIds[0];
            this.scrollToElement(`row${this.expandFakeCount}-` + this.currentDisplayRowId);
          }
          this.onSetActualQuantity();
        } else if (!selectedId) {
          this.elementsRowsIds.forEach(elementId => {
            const idArray = elementId.split('-');
            const foundId = res.ids_found.find(el => el.toString() === idArray[1]);

            if (foundId) {
              const canAdd = this.foundRowsIds.findIndex(el => el === foundId) < 0;
              if (canAdd) {
                this.foundRowsIds.push(foundId);
              }
            }
          });
          if (this.foundRowsIds.length > 0) {
            this.currentDisplayRowId = this.foundRowsIds[0];
            this.selectElementById(this.currentDisplayRowId);

            requestAnimationFrame(() => {
              this.scrollToElement(`row${this.expandFakeCount}-` + this.currentDisplayRowId);

              const timeout = setTimeout(() => {
                this.onSetActualQuantity();
                clearTimeout(timeout);
              }, 600);
            });
          }

        } else {
          this.scanForNext();
        }
      } else {
        this.scanForNext();
      }
    });
  }

  scanForNext() {
    this.listService.scanNextQr(false).subscribe(res => {
      if (res) {
        this.selectedNodeTree = null;
        this.onStartScanning();
      } else {
        this.askForScan = false;
      }
    });
    this.messageService.add({
      severity: 'error',
      summary: 'No matching found.',
      detail: `No product lists was found with scanned QR code!`
    });
  }

  scrollToElement(rowId: string): void {
    let element;
    const lastChildElements = document.querySelectorAll(`[id^=${rowId}`);
    lastChildElements.forEach(el => {
      if (el.classList.contains('has-level')) {
        element = el;
      }
    });
    setTimeout(function () {
      element.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 100);

  }

  isFoundRow(productId: number): boolean {
    return this.foundRowsIds.length > 0 && this.foundRowsIds.findIndex(id => id === productId) > -1;
  }

  onStartScanning() {
    this.askForScan = true;
    this.clearQrResults();
    this.expandAll();

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row${this.expandFakeCount}-]`);
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
    this.blockStepBtns = true;

    let currentIndex = this.foundRowsIds.findIndex(id => id === this.currentDisplayRowId);

    if (currentIndex < this.foundRowsIds.length - 1) {
      this.currentDisplayRowId = this.foundRowsIds[currentIndex + 1];
    } else {
      this.currentDisplayRowId = this.foundRowsIds[0];
    }
    this.selectElementById(this.currentDisplayRowId);
    requestAnimationFrame(() => {
      this.scrollToElement(`row${this.expandFakeCount}-` + this.currentDisplayRowId);

      const timeout = setTimeout(() => {
        this.onSetActualQuantity();
        clearTimeout(timeout);
      }, 600);
    });
  }

  selectElementById(listProductId: number) {
    this.tree.forEach(node => {
      this.findElementInTree(node, listProductId);
    });
  }

  findElementInTree(node: TreeNodeListProduct, listProductId: number) {
    if (node.data.id === listProductId) {
      // @ts-ignore
      this.selectedNodeTree = node;
    } else {
      node.children.forEach(child => {
        this.findElementInTree(child, listProductId);
      });
    }
  }

  goToPrev() {
    this.blockStepBtns = true;
    let currentIndex = this.foundRowsIds.findIndex(id => id === this.currentDisplayRowId);
    if (currentIndex > 0) {
      this.currentDisplayRowId = this.foundRowsIds[currentIndex - 1];
    } else {
      this.currentDisplayRowId = this.foundRowsIds[this.foundRowsIds.length - 1];
    }
    this.selectElementById(this.currentDisplayRowId);
    requestAnimationFrame(() => {
      this.scrollToElement(`row${this.expandFakeCount}-` + this.currentDisplayRowId);
      const timeout = setTimeout(() => {
        this.onSetActualQuantity();
        clearTimeout(timeout);
      }, 600);
    });
  }


  goToPrevContinues() {
    this.blockStepBtns = true;
    const rowElement = document.getElementById(`row${this.expandFakeCount}-${this.currentDisplayRowId}`);
    const previousElement = this.getPrevElement(rowElement);
    if (!previousElement) {
      this.messageService.add({
        severity: 'info',
        summary: 'No More Not Processed Products Up',
        detail: `Fill all required field`
      });
    }
    const idArray = previousElement.id.split('-');
    this.currentDisplayRowId = +idArray[1];
    this.selectElementById(this.currentDisplayRowId);
    requestAnimationFrame(() => {
      this.scrollToElement(`row${this.expandFakeCount}-` + this.currentDisplayRowId);
      const timeout = setTimeout(() => {
        this.onSetActualQuantity();
        clearTimeout(timeout);
      }, 600);
    });
  }

  goToNextContinues() {
    this.blockStepBtns = true;
    const rowElement = document.getElementById(`row${this.expandFakeCount}-${this.currentDisplayRowId}`);
    // const nextElement = rowElement.nextElementSibling;
    const nextElement = this.getNextElement(rowElement);
    if (!nextElement) {
      this.messageService.add({
        severity: 'info',
        summary: 'No More Not Processed Products Down',
        detail: `Fill all required field`
      });
    }
    const idArray = nextElement.id.split('-');
    this.currentDisplayRowId = +idArray[1];
    this.selectElementById(this.currentDisplayRowId);
    requestAnimationFrame(() => {
      this.scrollToElement(`row${this.expandFakeCount}-` + this.currentDisplayRowId);
      const timeout = setTimeout(() => {
        this.onSetActualQuantity();
        clearTimeout(timeout);
      }, 600);
    });

    console.log('rowElement', rowElement);
  }

  getNextElement(rowElement: HTMLElement) {
    const foundElement = rowElement.nextElementSibling as HTMLElement;
    if (!foundElement.id?.includes(`row${this.expandFakeCount}-`)) {
      return null;
    }
    if (foundElement.id.includes(`row${this.expandFakeCount}-`) && foundElement.dataset['status'] === 'Not processed') {
      return foundElement;
    } else {
      return this.getNextElement(foundElement);
    }
  }

  getPrevElement(rowElement: HTMLElement) {
    const foundElement = rowElement.previousElementSibling as HTMLElement;
    if (!foundElement.id?.includes(`row${this.expandFakeCount}-`)) {
      return null;
    }
    if (foundElement.id.includes(`row${this.expandFakeCount}-`) && foundElement.dataset['status'] === 'Not processed') {
      return foundElement;
    } else {
      return this.getPrevElement(foundElement);
    }
  }

  clearQrResults() {
    this.currentDisplayRowId = null;
    this.foundRowsIds = [];
  }

  goToPlan() {
    window.open(`manufacturing/plans/plan/${this.list.root_production_plans[0].id}`, '_blank');
  }

  onSetActualQuantity(isScanResult = true) {
    if (isScanResult) {
      this.dataToQrGenerator(true, isScanResult);
    } else {
      this.generateOnActualQuantity(isScanResult);
    }
  }

  generateOnActualQuantity(isScanResult: boolean, sendGenerateData = null) {
    const pathToList = this.getSimpleParentPath();
    this.listService.setActualQuantityDialog({...this.selectedNodeTree.data}, this.selectedNodeTree.parent?.data, this.isOldList, this.listProducts, sendGenerateData, pathToList).subscribe(listProducts => {
      this.blockStepBtns = false;
      if (isScanResult && this.askForScan) {
        this.listService.scanNextQr().subscribe(res => {
          if (res) {
            this.selectedNodeTree = null;
            this.onStartScanning();
          } else {
            this.askForScan = false;
          }
        });
      }

      if (listProducts) {
        this.mapExpansion();
        listProducts.forEach(listProduct => {
          const index = this.listProducts.findIndex(l => l.id === listProduct.id);
          this.listProducts[index] = {...listProduct};
        });

        const lists = JSON.parse(JSON.stringify(this.listProducts));

        if (this.isOldList) {
          this.generateOldListProducts(lists);
        } else {
          this.generateListProducts(lists);
        }
        this.getList();
      }
    });
  }

  getSimpleParentPath() {
    const listPath: Nomenclature[] = [];

    function get_parent(treeNode: TreeNode<ListProduct>) {
      listPath.push(treeNode.data.nomenclature);
      if (treeNode.parent) {
        get_parent(treeNode.parent);
      }
    }

    if (this.selectedNodeTree.parent) {
      get_parent(this.selectedNodeTree.parent);
    }
    return listPath.reverse();
  }

  onCancelActualQuantity() {
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.mapExpansion();

      this.isLoading = true;
      this.tree = [];

      const send = {
        ids: [],
      };

      if (this.isOldList) {
        send.ids = [this.selectedNodeTree.data.id];
      } else {
        const selectedListProduct = this.selectedNodeTree.data;

        if (selectedListProduct.technologies.length === 0) {
          send.ids = selectedListProduct.products.filter(p => p.status === selectedListProduct.status).map(p => p.id);
        } else {
          send.ids = selectedListProduct.filteredProducts.map(p => p.id);
        }
        console.log(selectedListProduct);
      }


      this.listProductService
        .cancelActualQuantity(send)
        .subscribe(listProducts => {
          listProducts.forEach(listProduct => {
            const index = this.listProducts.findIndex(l => l.id === listProduct.id);
            this.listProducts[index] = {...listProduct};
          });

          const lists = JSON.parse(JSON.stringify(this.listProducts));

          this.generateListProducts(lists);
        });

      this.selectedNodeTree = null;
    });
  }

  showSerialWarehouseQuantity(listProduct: ListProduct) {
    return Boolean(listProduct.filteredProducts.find(l => l.status === 'Reserved') && listProduct.technologies.length === 1);
  }

  multiChoiceByRow(rowNode: any) {
    const currentIndex = this.selectedMultipleByOneNodeTree.findIndex(el => el.data.id === rowNode.node.data.id);
    if (currentIndex >= 0) {
      this.selectedMultipleByOneNodeTree.splice(currentIndex, 1);
    } else {
      this.selectedMultipleByOneNodeTree.push(rowNode.node);
    }
    this.selectedNodeTree = [...this.selectedMultipleByOneNodeTree];
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isTableScrollable = document.body.getBoundingClientRect().width > 1280;
  }

  isSticky(rowNode: any, row) {
    return rowNode.node.children.length > 0 && rowNode.node.expanded && this.lastChildPosition(rowNode, row);
  }

  lastChildPosition(rowNode: any, currentElementElement) {
    const lastChildId = rowNode.node.children[rowNode.node.children.length - 1]?.data.id;
    let lastChildElement;
    const lastChildElements = document.querySelectorAll(`[id^=row${this.expandFakeCount}-${lastChildId}]`);
    lastChildElements.forEach(el => {
      if (el.classList.contains('has-level')) {
        lastChildElement = el;
      }
    });
    if (lastChildElement) {
      if (lastChildElement.getBoundingClientRect().bottom > 55 * (rowNode.level + 1) && lastChildElement.getBoundingClientRect().bottom > currentElementElement.getBoundingClientRect().top) {
        return true;
      }
    }
    return false;
  }

  isStuck(rowNode: any, row: HTMLTableRowElement) {
    return row.getBoundingClientRect().top <= (rowNode.level + 1) * 50;
  }

  onShowImage() {
    if (this.selectedNode) {
      this.showImages(this.selectedNode);
    }

    if (this.selectedNodeTree) {
      this.showImages(this.selectedNodeTree.data);
    }
  }


  expandCollapse(node, isExpanded: boolean = true) {
    const temp = cloneDeep(this.tree);
    temp.forEach(parent => {
      this.makeRow(parent, node, isExpanded);
    });
    this.tree = temp;
  }

  makeRow(node, dat, isExpanded) {
    if (node.data.id == dat.data.id) {
      this.expandCollapseRecursive(node, isExpanded);
    } else {
      if (node.children) {
        node.children.forEach(element => {
          this.makeRow(element, dat, isExpanded);
        });
      }
    }
  }
}
