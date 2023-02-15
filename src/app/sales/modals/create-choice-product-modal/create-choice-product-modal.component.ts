import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {WarehouseProduct} from "../../../warehouse/models/warehouse-product";
import {ProductStructureCategoryService} from "../../../product-structure/services/product-structure-category.service";

@Component({
  selector: 'pek-create-choice-product-modal',
  templateUrl: './create-choice-product-modal.component.html',
  styleUrls: ['./create-choice-product-modal.component.scss']
})
export class CreateChoiceProductModalComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    description: ['', Validators.required]
  })

  isSaving: true;
  isLoading = false;
  selectedNode: WarehouseProduct;

  constructor(
    private fb: FormBuilder,
    private productStructureCategoryService: ProductStructureCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.productStructureCategoryService.get().subscribe()
  }

}
