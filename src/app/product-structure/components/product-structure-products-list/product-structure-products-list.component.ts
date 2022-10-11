import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {MenuItem, TreeNode} from 'primeng/api';
import {Product} from '../../models/product';
import {ProductCategory} from '../../models/product-category';
import {forkJoin, fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {ProductCategoriesService} from '../../services/product-categories.service';
import {cloneDeep} from 'lodash-es';
import {Table} from 'primeng/table';
import {debounceTime, map, tap} from 'rxjs/operators';
import {ModalService} from '@shared/services/modal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pek-product-structure-products-list',
  templateUrl: './product-structure-products-list.component.html',
  styleUrls: ['./product-structure-products-list.component.scss']
})
export class ProductStructureProductsListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('dt') dt: Table;
  @ViewChild('searchCodeInput') searchCodeInput: ElementRef;
  @ViewChild('searchNameInput') searchNameInput: ElementRef;

  menuItems: MenuItem[] = [{
    label: 'Selected Product',
    items: [
      {
        label: 'Structure',
        icon: 'pi pi-table',
        command: () => this.goToProductStructure(),
      },
      {
        label: 'Copy',
        icon: 'pi pi-clone',
        command: () => this.onCopyProduct(),
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditProduct(),
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveProduct(),
      }
    ]
  }];

  productsTree: TreeNode<Product>[] = [];
  categories: ProductCategory[];
  selectedNode: TreeNode<Product>;
  products: Product[];

  inputCodeSub: Subscription;
  inputNameSub: Subscription;

  isLoading = true;

  private destroy$ = new Subject();

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly productCategoriesService: ProductCategoriesService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getProductsAndCategories();
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

  getProductsAndCategories() {
    forkJoin({
      products: this.productService.getRoots(),
      categories: this.productCategoriesService.getRoot()
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({products, categories}) => {
      this.products = products;
      this.categories = categories;

      this.categories.forEach(category => {
        this.productsTree.push({
          data: category,
          expanded: false,
          parent: null
        });
      });

      this.productsTree.unshift({
        // @ts-ignore
        data: {name: 'Not category'},
        expanded: false,
        parent: null
      });

      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    this.productsTree = this.productsTree.map(node => {
      return {
        ...node,
        children: []
      };
    });

    this.productsTree.forEach(node => {
      this.products.forEach(product => {
        if (product.nomenclature.category && node.data.id === product.nomenclature.category.id) {
          node.children.push({
            data: product,
            expanded: false,
            children: []
          });
        }
      });
    });

    this.products.forEach(product => {
      if (!product.nomenclature.category) {
        this.productsTree[0].children.push({
          data: product,
          expanded: false,
          children: []
        });
      }
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

  onRemoveProduct() {
    const product: Product = this.selectedNode.data;

    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.productService.delete(product.id).subscribe(() => {
          this.selectedNode = null;
          const index = this.products.findIndex(p => p.id === product.id);
          this.products.splice(index, 1);
          this.createTree();
        });
      }
    });
  }

  onCreateProduct() {
    this.productService.createEditRootProduct('create').subscribe(product => {
      if (product) {
        this.products.push(<Product>product);
        this.createTree();
      }
    });
  }

  onEditProduct() {
    const product = {...<Product>this.selectedNode.data};
    this.productService.createEditRootProduct('edit', product).subscribe(nomenclature => {
      // TODO ДОЖДАТЬСЯ ИЗМЕНЕНИЙ С БЭКА
      // if (nomenclature) {
      //   const index = this.products.findIndex(p => p.nomenclature.id === nomenclature.id)
      //
      //   if (index !== -1) {
      //     this.products[index].nomenclature = nomenclature;
      //
      //     // console.log(this.products[index].nomenclature.category);
      //     // console.log(product.nomenclature.category.id);
      //
      //     // @ts-ignore
      //     if (this.products[index].nomenclature.category !== product.nomenclature.category?.id) {
      //       console.log('ad');
      //       this.createTree();
      //     }
      //   }
      // }

      if (nomenclature) {
        this.updateProducts();
      }
    });
  }

  onCopyProduct() {
    const product = <Product>this.selectedNode.data;
    this.productService.createEditRootProduct('copy', product).subscribe(product => {
      // TODO на бэке сделать чтобы отдавался продукт
      if (product) this.updateProducts();
    });
  }

  updateTree(product: Product) {
    this.products.push(product);
    this.createTree();
  }

  // временный метод до оптимизации
  updateProducts() {
    this.productService.getRoots().subscribe(products => {
      this.products = products;
      this.createTree();
    });
  }

  goToProductStructure() {
    this.router.navigate(['structure', this.selectedNode.data.id], {relativeTo: this.route}).then();
  }

  ngOnDestroy() {
    this.inputCodeSub.unsubscribe();
    this.inputNameSub.unsubscribe();
    this.destroy$.next(true);
  }
}
