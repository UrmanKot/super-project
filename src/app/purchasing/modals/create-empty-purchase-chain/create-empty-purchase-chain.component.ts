import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TreeService} from '@shared/services/tree.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PurchasingCategoryService} from '../../services/purchasing-category.service';
import {PurchaseCategory} from '../../models/purchase-category';
import {TreeNode} from 'primeng/api';
import {OrderService} from '../../../procurement/services/order.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-create-empty-purchase-chain',
  templateUrl: './create-empty-purchase-chain.component.html',
  styleUrls: ['./create-empty-purchase-chain.component.scss']
})
export class CreateEmptyPurchaseChainComponent implements OnInit {
  isSaving = false;
  isLoading = true;

  categories: PurchaseCategory[] = [];
  selectedNode: TreeNode<PurchaseCategory>;
  categoriesTree: TreeNode<PurchaseCategory>[] = [];

  form = this.fb.group({
    accounting_type: [1],
    purchase_category: [<number>null, Validators.required],
    supplier: [<number>null, Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly treeService: TreeService,
    private dialogRef: MatDialogRef<CreateEmptyPurchaseChainComponent>,
    private purchasingCategoryService: PurchasingCategoryService,
    private readonly orderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.purchasingCategoryService.getAll().subscribe(categories => {
      this.categories = categories;
      this.createTree();

      this.isLoading = false;
    });
  }

  createTree() {
    if (this.categoriesTree) {
      this.treeService.mapExpansion(this.categoriesTree, {});
    }

    this.categoriesTree = this.treeService.createTree(this.categories, {});
  }

  onSelectCompany(id: number) {
    this.form.get('supplier').patchValue(id || null);
  }

  onSelection() {
    this.form.get('purchase_category').patchValue(this.selectedNode?.data?.id || null);
  }

  onCreate() {
    this.isSaving = true;
    this.orderService.create(this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(order => this.dialogRef.close(order));
  }
}
