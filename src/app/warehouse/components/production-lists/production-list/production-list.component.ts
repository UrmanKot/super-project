import {Component, OnInit} from '@angular/core';
import {List} from '../../../models/list';
import {ListProduct} from '../../../models/list-product';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {ListService} from '../../../services/list.service';
import {take} from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import {Location} from '@angular/common';
import {MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ListProductService} from '../../../services/list-product.service';
import {ScanResult} from '../../../../qr-code/models/scan-result';
import {AdapterService} from '@shared/services/adapter.service';

export class TreePrint {
  data: ListProduct;
  children: ListProduct[];
}

export class UIListProduct extends ListProduct {
  products: ListProduct[];

  constructor(config: Partial<ListProduct>, products: ListProduct[]) {
    super();
    Object.assign(this, config);
    this.products = products;
  }
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

  tree: TreeNode<ListProduct>[] = [];

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
    private readonly adapterService: AdapterService,
  ) {
    // this.routerHandler$ = router.events.subscribe(res => {
    //   if (res instanceof NavigationEnd) {
    //     this.listId = this.route.snapshot.paramMap.get('id');
    //     // this.getAll();
    //     this.getListProducts();
    //     this.getList()
    //   }
    // });
  }

  ngOnInit(): void {
    this.getList();
    this.getListProducts();
  }

  ngOnDestroy(): void {
    this.routerHandler$.unsubscribe();
  }

  getList() {
    this.listService.getById(+this.listId).subscribe(list => this.list = list);
  }

  getListProducts() {
    this.tree = [];
    this.isLoading = true;

    this.listService.getFullList(+this.listId).subscribe(lists => {

      const newListProducts: ListProduct[] = [];

      lists.forEach(list => {
        list.reserved_quantity = list.reserved_quantity ?? 0;
        list.actual_quantity = list.actual_quantity ?? 0;

        if (!newListProducts.find(l => l.nomenclature.id === list.nomenclature.id) && lists.filter(l => l.nomenclature.id === list.nomenclature.id).every(n => n.status === '0')) {
          // list.products = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level && l.technology?.id === list.technology?.id);
          // list.status

          list.products = lists.filter(l => l.nomenclature.id === list.nomenclature.id);
          list.warehouseQuantities = this.adapterService.removeDuplicates(list.products, list => list.technology?.id)
            .sort((a, b) => a.task_sort_value - b.task_sort_value)
            .map(l => l.warehouse_quantity);

          if (list.nomenclature.name === 'Coupling') {
            console.log(list.warehouseQuantities);
          }

          list.technologies = list.products.filter(l => l.technology).map(l => {
            return {
              ...l.technology,
              task_sort_value: l.task_sort_value,
            };
          });
          list.technologies = this.adapterService.removeDuplicates(list.technologies, x => x.name);
          list.technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);
          list.status = list.products.some(p => p.status === '2') ? '2' : list.status;

          list.has_children = list.products.some(p => p.has_children);

          list.groupedProductIds = list.products.map(p => p.id);
          newListProducts.push(list);
        }
          //   else if (!newListProducts.find(l => l.nomenclature.id === list.nomenclature.id) && list.status !== '0') {
          //   list.products = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level);
          //   list.has_children = list.products.some(p => p.has_children);
          //   list.groupedProductIds = list.products.map(p => p.id);
          //   list.technologies = list.products.filter(l => l.technology).map(l => {
          //     return {
          //       ...l.technology,
          //       task_sort_value: l.task_sort_value,
          //     }
          //   });
          //   list.technologies = this.adapterService.removeDuplicates(list.technologies, x => x.name);
          //   list.technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);
          //   list.status = list.products.some(p => p.status === '1') ? '1' : list.status;
          //
          //   let technologies = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level).map(l => {
          //     return {
          //       ...l.technology,
          //       task_sort_value: l.task_sort_value,
          //     }
          //   });
          //   technologies = this.adapterService.removeDuplicates(technologies, x => x.id);
          //   technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);
          //
          //   const index = technologies.findIndex(t => t.id === list.technology.id);
          //
          //   if (index === technologies.length - 1) {
          //
          //   }
          //
          //   newListProducts.push(list);
        // }

        else if (list.status !== '0') {

          const products = lists.filter(p => p.nomenclature.id === list.nomenclature.id && p.level === list.level).filter(p => p.status !== '0');
          const reservedQuantity = products.reduce((sum, item) => sum += item.reserved_quantity, 0);
          const total = list.total_required_quantity;
          const findList = newListProducts.find(p => p.nomenclature.id === list.nomenclature.id && p.level === list.level);

          list.products = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level);

          list.warehouseQuantities = this.adapterService.removeDuplicates(list.products, list => list.technology?.id)
            .sort((a, b) => a.task_sort_value - b.task_sort_value)
            .filter(l => l.technology?.id !== 0)
            .map(l => l.warehouse_quantity);

          list.technologies = list.products.filter(l => l.technology).map(l => {
            return {
              ...l.technology,
              task_sort_value: l.task_sort_value,
            };
          });
          list.technologies = this.adapterService.removeDuplicates(list.technologies, x => x.name);
          list.technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);

          list.has_children = list.products.some(p => p.has_children);

          list.groupedProductIds = list.products.map(p => p.id);

          let technologies = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level).map(l => {
            return {
              ...l.technology,
              task_sort_value: l.task_sort_value,
            };
          });
          technologies = this.adapterService.removeDuplicates(technologies, x => x.id);
          technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);

          if (reservedQuantity > 0) {
            list.breakDown = true;
          }

          if (list.nomenclature.name === 'Axle') {
            // console.log(total);
            // console.log(reservedQuantity);
            // // console.log(list.status);
            // // console.log(lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level).map(p => p.technology.name));
            // console.log(technologies);
            // console.log(list.technologies);
          }

          if (list.technologies.length === 0 && !findList) {

            list.reserved_quantity = list.products.reduce((sum, list) => sum += +list.reserved_quantity, 0);
            list.actual_quantity = list.products.reduce((sum, list) => sum += +list.actual_quantity, 0);
            list.status = list.products.some(p => p.status === '2') ? '2' : list.status;
            newListProducts.push(list);
          } else if (list.technologies.length === 1) {
            if (total === reservedQuantity && !findList && list.status === '1') {
              newListProducts.push(list);
            } else if (reservedQuantity === 0 && !findList && list.status === '2') {
              newListProducts.push(list);
            } else if (total !== reservedQuantity && reservedQuantity > 0) {
              newListProducts.push(list);
            }
          } else if (list.technologies.length > 1) {
            const tt = lists.filter(p => p.nomenclature.id === list.nomenclature.id && p.level === list.level);

            let technologies = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level).map(l => {
              return {
                ...l.technology,
                task_sort_value: l.task_sort_value,
              };
            });
            technologies = this.adapterService.removeDuplicates(technologies, x => x.id);
            technologies.sort((a, b) => a.task_sort_value - b.task_sort_value);

            const index = technologies.findIndex(t => t.id === list.technology.id);

            const isLast = Boolean(index === technologies.length - 1);

            if (list.reserved_quantity === 0) {
              list.technology.id = 0;
            }

            if (!newListProducts.find(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level && l.technology?.id === list.technology?.id)) {
              if (isLast && tt.filter(t => t.technology.id === list.technology.id).reduce((sum, list) => sum += +list.reserved_quantity, 0) === total) {
                list.status = '1';

                newListProducts.push(list);
              } else if (!isLast && tt.filter(t => t.technology.id === list.technology.id).reduce((sum, list) => sum += +list.reserved_quantity, 0) === total) {
                list.status = '2';
                list.blockedExpand = true;
                newListProducts.push(list);
              } else {
                if (total === reservedQuantity && list.reserved_quantity > 0) {
                  if (isLast) {
                    // list.status = '2';
                    newListProducts.push(list);
                  } else {
                    list.status = '2';

                    if (
                      lists
                        .filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level)
                        .filter(l => l.technology.id === technologies[technologies.length - 1].id)
                        .reduce((sum, l) => sum += l.reserved_quantity, 0) === 0
                    ) {
                      list.status = '2';
                    }

                    list.blockedExpand = true;
                    newListProducts.push(list);
                  }
                } else if (total !== reservedQuantity) {
                  if (list.reserved_quantity > 0) {
                    const newList = {...list};

                    if (!isLast) {
                      newList.status = '2';
                      newList.blockedExpand = true;
                    }

                    newListProducts.push(newList);

                    console.log('1');
                  }

                  else if (total !== reservedQuantity && total > reservedQuantity && list.status === '2' && !newListProducts.find(l => l.nomenclature.id === list.nomenclature.id && l.status === '2')) {

                    if (list.reserved_quantity === 0) {
                      list.breakDown = false;
                    }
                    const newList = {...list};

                    if (!isLast) {
                      newList.status = '2';
                    }

                    console.log('2');

                    newListProducts.push(newList);
                  }

                   else if (reservedQuantity !== 0 && total !== reservedQuantity && total > reservedQuantity && list.status === '2' && isLast && !newListProducts.find(l => l.nomenclature.id === list.nomenclature.id && l.status === '1' && l.technology.id === list.technology.id && !isLast)) {

                    if (list.reserved_quantity === 0) {
                      list.breakDown = false;
                    }
                    const newList = {...list};

                    if (!isLast) {
                      newList.status = '2';
                    }

                    console.log('3');

                    newListProducts.push(newList);
                  }

                  // if (isLast && list.status === '1' && total !== reservedQuantity) {
                  //   const newList = {...list};
                  //   newList.blockedExpand = true;
                  //   newList.status = '2';
                  //   newListProducts.push(newList);
                  //
                  //   console.log('3');
                  // }
                }
              }
            }

            // if (tt.filter(p => p.technology.id === list.technology.id).reduce((sum, list) => sum += +list.reserved_quantity, 0) === total) {
            //   if (isLast && list.status === '1') {
            //     newListProducts.push(list)
            //   } else {
            //
            //   }
            // }

            // if (tt.filter(p => p.technology.id === list.technology.id).reduce((sum, list) => sum += +list.reserved_quantity, 0) === total && isLast && list.status === '1' && !findList) {
            //   newListProducts.push(list)
            // } else if (tt.filter(p => p.technology.id === list.technology.id).reduce((sum, list) => sum += +list.reserved_quantity, 0) === total && list.status === '1' && !findList) {
            //   list.status = '2'
            //   newListProducts.push(list)
            // } else {
            // tt.forEach(p => {
            //
            // })

            if (total !== reservedQuantity) {
            }

            // if (!newListProducts.find(p => p.nomenclature.id === list.nomenclature.id && p.level === list.level && p.technology.id === list.technology.id)) {
            //   if (!isLast) {
            //     list.status = '1'
            //     newListProducts.push(list)
            //   } else {
            //     list.status = '2'
            //     newListProducts.push(list)
            //   }
            // }

            // technologies.forEach(t => {
            //   const products = tt.filter(p => p.technology.id === t.id);
            //
            //   products.forEach(product => {
            //     if (!newListProducts.find(p => p.nomenclature.id === product.nomenclature.id && p.level === product.level && p.technology.id === product.technology.id)) {
            //       newListProducts.push(list)
            //     }
            //   })
            // })
          }

          if (list.nomenclature.name === 'Bushing') {
            //   console.log('dsfdsf');
            //   console.log(tt);


          }
          //
          // if (total === reservedQuantity) {
          //   const index = technologies.findIndex(t => t.id === list.technology.id);
          //   if (index === technologies.length - 1) {
          //     newListProducts.push(list)
          //   }
          // }
        }
      });

      newListProducts.forEach(list => {

        if (list.status !== '0' && list.technologies.length > 0) {

          const filteredLists: ListProduct[] = lists.filter(l => l.nomenclature.id === list.nomenclature.id && l.level === list.level);

          const total = JSON.parse(JSON.stringify(list.total_required_quantity));
          const reserved = filteredLists.reduce((sum, list) => sum += list.reserved_quantity, 0);
          const actual = filteredLists.reduce((sum, list) => sum += list.actual_quantity, 0);

          if (total === reserved) {

            const tt = filteredLists.filter(l => l.technology.id === list.technology.id);

            list.total_required_quantity = tt.reduce((sum, list) => sum += list.reserved_quantity, 0);
            list.actual_quantity = tt.reduce((sum, list) => sum += list.actual_quantity, 0);
            list.reserved_quantity = tt.reduce((sum, list) => sum += list.reserved_quantity, 0);
          } else {
            const tt = filteredLists.filter(l => l.technology.id === list.technology.id);


            if (list.reserved_quantity > 0) {
              list.total_required_quantity = tt.reduce((sum, list) => sum += list.reserved_quantity, 0);
              list.actual_quantity = tt.reduce((sum, list) => sum += list.actual_quantity, 0);
              list.reserved_quantity = tt.reduce((sum, list) => sum += list.reserved_quantity, 0);
            } else {
              list.total_required_quantity = +list.total_required_quantity - + filteredLists.reduce((sum, l) => sum += l.reserved_quantity, 0)
            }
          }
        }


        // if (list.reserved_quantity > 0) {
        //   list.total_required_quantity = list.reserved_quantity;
        // } else {
        //   list.total_required_quantity = +list.total_required_quantity - +filteredLists.reduce((sum, l) => sum += l.reserved_quantity, 0)
        // }
      });


      // console.log(newListProducts);

      // console.log(newListProducts);
      //
      // newListProducts.forEach(l => {
      //   console.log(l.nomenclature.name);
      // })
      // console.log(lists);
      //
      // newListProducts.forEach(list => {
      //   // list.total_required_quantity = list.products.reduce((sum, list) => sum += +list.total_required_quantity, 0)
      //   list.required_quantity_per_one = list.products.filter(l => l.list === list.list).reduce((sum, list) => sum += +list.required_quantity_per_one, 0);
      //   list.reserved_quantity = list.products.reduce((sum, list) => sum += +list.reserved_quantity, 0);
      //   list.actual_quantity = list.products.reduce((sum, list) => sum += +list.actual_quantity, 0);
      // });
      //
      newListProducts.filter(l => l.level === 1).forEach(list => {
        this.tree.push({
          data: list,
          children: [],
          expanded: false
        });
      });

      const fillTree = (nodes: TreeNode<ListProduct>[], level: number) => {
        // const newListProducts: ListProduct[] = [];
        level++;

        // lists.filter(l => l.level === level).forEach(list => {
        //   if (!newListProducts.find((l) => l.nomenclature.id === list.nomenclature.id)) {
        //     newListProducts.push(list);
        //   }
        // });

        nodes.filter(n => n.data.products.find(p => p.has_children)).forEach(n => {
          newListProducts.forEach(list => {
            if (n.data.groupedProductIds.includes(list.parent)) {
              const newList = {
                ...list,
                // total_required_quantity: n.data.total_required_quantity * list.total_required_quantity
                total_required_quantity: n.data.total_required_quantity
              }

              n.children.push({
                data: newList,
                children: [],
                expanded: false
              });
            }
          });

          if (n.children.length > 0) {
            fillTree(n.children, level);
          }
        });
      };

      fillTree(this.tree, 1);

      this.tree = this.tree.map(l => l);

      // console.log(this.tree);
      // console.log(this.tree.filter(n => n.data.has_children));

      this.isLoading = false;
    });
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
      this.listService.setQuantities(+this.listId).pipe(take(1)).subscribe(res => this.getListProducts());
    } else {
      if (!this.selectedNodeTree) {
        this.listService.setQuantities(+this.listId).subscribe(() => {
          this.getListProducts();
        });
      } else {
        if (this.selectedNodeTree.data.list_url) {
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

  onSetActualQuantity() {
    this.listService.setActualQuantityDialog({...this.selectedNodeTree.data}).subscribe(response => {
      if (response) {
        this.getListProducts();
      }
    });
  }
}
