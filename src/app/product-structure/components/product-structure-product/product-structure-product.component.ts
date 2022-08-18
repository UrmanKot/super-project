import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormBuilder} from '@angular/forms';
import {Product} from '../../models/product';
import {Table} from 'primeng/table';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, map, tap} from 'rxjs/operators';
import {cloneDeep} from 'lodash-es';
import {MatDialog} from '@angular/material/dialog';
import {MakeRootProductComponent} from '../../modals/make-root-product/make-root-product.component';
import {MakeProductionListComponent} from '../../modals/make-production-list/make-production-list.component';

@Component({
  selector: 'pek-product-structure-product',
  templateUrl: './product-structure-product.component.html',
  styleUrls: ['./product-structure-product.component.scss']
})
export class ProductStructureProductComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('dt') dt: Table;
  @ViewChild('searchCodeInput') searchCodeInput: ElementRef;
  @ViewChild('searchNameInput') searchNameInput: ElementRef;

  productsTree: TreeNode[];
  selectedNode: TreeNode = null;
  products: Product[];

  menuItems: MenuItem[] = [
    {
      label: 'Selected Item',
      items: [
        {
          label: 'Add Item',
          icon: 'pi pi-plus',
          disabled: true,
        },
        {
          label: 'Make Production List',
          icon: 'pi pi-box',
          command: () => this.onOpenMakeProductionList(),
        },
        {
          label: 'Make Root',
          icon: 'pi pi-globe',
          disabled: true,
          command: () => this.onOpenMakeRoot(),
        },
        {
          label: 'Files',
          icon: 'pi pi-file',
        },
        {
          label: 'Copy',
          icon: 'pi pi-clone',
        },
        {
          label: 'Edit',
          icon: 'pi pi-pencil',
        },
        {
          label: 'Remove',
          icon: 'pi pi-trash',
        }
      ]
    }
  ];

  expanseMap = {};
  sorted = false;
  isLoading = true;

  productId = this.route.snapshot.paramMap.get('id');

  inputCodeSub: Subscription;
  inputNameSub: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.inputCodeSub = fromEvent(this.searchCodeInput.nativeElement, 'input')
      .pipe(
        map(() => this.searchCodeInput.nativeElement.value),
        tap(value => this.filterProducts(value, 'code', 'contains')),
        debounceTime(299),
      ).subscribe((value) => {
        if (!value) {
          this.onCollapseAll();
          return;
        }

        this.expandedFindProducts(value, 'code');
      });

    this.inputNameSub = fromEvent(this.searchNameInput.nativeElement, 'input')
      .pipe(
        map(() => this.searchNameInput.nativeElement.value),
        tap(value => this.filterProducts(value, 'name', 'contains')),
        debounceTime(299),
      ).subscribe((value) => {
        if (!value) {
          this.onCollapseAll();
          return;
        }

        this.expandedFindProducts(value, 'name');
      });
  }

  onExpandAll(): void {
    const temp = cloneDeep(this.productsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.productsTree = temp;
  }

  onCollapseAll(): void {
    const temp = cloneDeep(this.productsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.productsTree = temp;
    this.selectedNode = null;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  getProducts() {
    if (this.productsTree) {
      this.mapExpansion();
    }

    this.productService.getTree(Number(this.productId)).subscribe(products => {
        this.products = products;
        if (!this.sorted) {
          this.createTree();
        } else {
          this.sort();
        }

        this.isLoading = false;
      }
    );
  }

  filterProducts(event: any, field: string, mode: string) {
    this.dt.filter(event, `nomenclature.${field}`, mode);
  }

  expandedFindProducts(value: string, field: string) {
    this.selectedNode = null;

    this.productsTree.forEach(parent => {
      parent.children.forEach(product => {
        if (product.data.nomenclature[field].toLowerCase().indexOf(value) >= 0) {
          parent.expanded = true;
        }
      });
    });
  }

  createTree() {
    const dd = [];
    this.products.forEach(element => {
      const ins = {data: element, expanded: false};
      if (this.expanseMap) {
        ins.expanded = this.expanseMap[element.id];
      }
      dd.push(ins);
    });
    let root;
    const idMapping = dd.reduce((acc, el, i) => {
      acc[el.data.id] = i;
      return acc;
    }, {});
    dd.forEach(el => {
      if (el.data.parent === null) {
        root = el;
        return;
      }
      const parentEl = dd[idMapping[el.data.parent]];
      parentEl.children = [...(parentEl.children || []), el];
      if (parentEl.children.length === 0) {
        delete parentEl.children;
      }
    });
    root.expanded = true;
    this.productsTree = [root];
    if (this.selectedNode) {
      this.getSelected(this.productsTree[0]);
    }
  }

  down() {
    const node = this.selectedNode;

    let index;
    node.parent.children.forEach((element, i) => {
      if (element.data.id === node.data.id) {
        index = i;
      }
    });

    if (index < node.parent.children.length - 1) {
      const move = {
        child: node.data.id,
        parent: node.parent.children[index + 1].data.id,
        move_to: 'right'
      };
      // TODO СДЕЛАТЬ ЧТОБЫ ЗАНОВО НЕ ОТОБРАЖАТЬ СТРУКТУРУ И ВЫВЕСТИ УВЕДОМЛЕНИЕ ИЛИ ЗАБЛОЧИТЬ КНОПКУ
      this.productService.move(move).subscribe(() => this.getProducts());
    }
  }

  up() {
    const node = this.selectedNode;

    let index;
    node.parent.children.forEach((element, i) => {
      if (element.data.id === node.data.id) {
        index = i;
      }
    });

    if (index > 0) {
      const move = {
        child: node.data.id,
        parent: node.parent.children[index - 1].data.id,
        move_to: 'left'
      };
      this.productService.move(move).subscribe(() => this.getProducts());
    }
  }

  sort() {
    this.sorted = true;
    const sortType = {'0': 3, '1': 1, '2': 2};
    this.products.sort((a, b) => sortType[a.nomenclature.type] - sortType[b.nomenclature.type]);
    this.createTree();
  }

  mapExpansion() {
    this.productsTree.forEach(element => {
      this.createExpanseMap(element);
    });
  }

  getSelected(node) {
    if (node.data.id == this.selectedNode.data.id) {
      this.selectedNode = node;
    } else {
      if (node.children) {
        node.children.forEach(element => {
          this.getSelected(element);
        });
      }
    }
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

  onSelectNode() {
    if (this.selectedNode) {
      this.menuItems[0].items[0].disabled = !(this.selectedNode.data.nomenclature.type === '1' || this.selectedNode.data.parent === null);
      this.menuItems[0].items[2].disabled = !(this.selectedNode.data.nomenclature.type === '1' && this.selectedNode.data.parent !== null);
    }
  }

  onOpenMakeRoot() {
    this.dialog.open(MakeRootProductComponent, {
      width: '36rem',
      data: this.selectedNode.data,
      autoFocus: false,
      enterAnimationDuration: '250ms',
      panelClass: 'modal_visible'
    });
  }

  onOpenMakeProductionList() {
    this.dialog.open(MakeProductionListComponent, {
      width: '36rem',
      data: this.selectedNode.data.nomenclature,
      autoFocus: false,
      enterAnimationDuration: '250ms',
    });
  }

  ngOnDestroy() {
    this.inputCodeSub.unsubscribe();
    this.inputNameSub.unsubscribe();
  }
}
