import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {MenuItem, TreeNode} from 'primeng/api';
import {Product} from '../../models/product';
import {forkJoin, fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {cloneDeep} from 'lodash-es';
import {Table} from 'primeng/table';
import {debounceTime, map, tap} from 'rxjs/operators';
import {ModalService} from '@shared/services/modal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductStructureCategory} from '../../models/product-structure-category';
import {ProductStructureCategoryService} from '../../services/product-structure-category.service';

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

  productsTree: TreeNode<Product & ProductStructureCategory>[] = [];
  categories: ProductStructureCategory[];
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
    private readonly productStructureCategoryServices: ProductStructureCategoryService,
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
      categories: this.productStructureCategoryServices.get()
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({products, categories}) => {
      this.products = products;
      this.categories = categories;
      this.createTreeCategories();
      this.createTree();
      this.isLoading = false;
    });
  }

  createTreeCategories() {
    this.productsTree.unshift({
      // @ts-ignore
      data: {name: 'Not category'},
      expanded: false,
      parent: null,
      children: []
    });

    this.categories.filter(category => !category.parent).forEach(category => {
      this.productsTree.push({
        data: category,
        expanded: false,
        parent: null,
        children: []
      });
    });

    const addChildrenCategories = (nodes: TreeNode<Product>[]) => {
      nodes.forEach(node => {
        const childrenCategories = this.categories.filter(category => category.parent === node.data.id);

        if (childrenCategories.length > 0) {
          node.children = childrenCategories.map(category => {
            return {
              data: category,
              expanded: false,
              parent: null,
              children: [],
            };
          });
        }

        if (node.children.length > 0) {
          addChildrenCategories(node.children);
        }
      });
    };

    addChildrenCategories(this.productsTree);
  }

  clearTree() {
    const clear = (nodes: TreeNode<Product & ProductStructureCategory>[]) => {
      nodes.forEach(node => {
        node.children = [...node.children.filter(child => child.data.tree_id)];

        clear(node.children);
      });
    };

    clear(this.productsTree);
  }

  createTree() {
    this.clearTree();

    const addProductsToTree = (nodes: TreeNode<Product>[]) => {
      nodes.forEach(node => {
        const products = this.products.filter(p => p.nomenclature.root_category?.id === node.data.id);

        node.children = [...node.children, ...products.map(product => {
          return {
            data: product,
            expanded: false,
            parent: null,
            children: [],
          };
        })];

        addProductsToTree(node.children);
      });
    };

    this.productsTree = [...this.productsTree];

    addProductsToTree(this.productsTree);
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
        this.products.unshift(<Product>product);
        this.createTree();
      }
    });
  }

  onEditProduct() {
    const product = {...<Product>this.selectedNode.data};
    this.productService.createEditRootProduct('edit', product).subscribe(nomenclature => {
      if (nomenclature) {
        const index = this.products.findIndex(p => p.nomenclature.id === nomenclature.id);

        if (index !== -1) {
          this.products[index].nomenclature = nomenclature;
          this.createTree();
        }
      }
    });
  }

  onCopyProduct() {
    const product = <Product>this.selectedNode.data;
    this.productService.createEditRootProduct('copy', product).subscribe(products => {
      if (products) this.updateProducts();
    });
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
