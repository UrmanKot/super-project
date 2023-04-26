import {Component, Inject, OnInit} from '@angular/core';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {filter} from 'rxjs/operators';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';

export class NewItem {
  taskId: number;
  data: {
    nomenclature: number;
    quantity: number;
  };
}

export class AssemblingRequest {
  assemblingProduct: any;
  quantity: number;
}

export class MaterialRequest {
  warehouseProduct: WarehouseProduct;
  quantity: number;
}

@Component({
  selector: 'pek-manufacturing-add-items',
  templateUrl: './manufacturing-add-items.component.html',
  styleUrls: ['./manufacturing-add-items.component.scss']
})
export class ManufacturingAddItemsComponent implements OnInit {

  newItems: NewItem[] = [];

  isSaving = false;

  materials = [{
    warehouseProduct: <any>null,
    quantity: 1
  }];

  assemblies = [{
    assemblingProduct: <any>null,
    quantity: 1
  }];

  type: 'assemblies' | 'warehouse' | 'manufactured-parts' = null;

  constructor(
    private readonly dialogRef: MatDialogRef<ManufacturingAddItemsComponent>,
    private readonly warehouseProductService: WarehouseProductService,
    private readonly nomenclatureService: NomenclatureService,
    @Inject(MAT_DIALOG_DATA) public data: { parentTasks: Task[] },
  ) {
  }

  ngOnInit(): void {
  }

  protected readonly ENomenclatureType = ENomenclatureType;

  choiceType(type: any) {
    this.type = type;
    this.dialogRef.updateSize('60rem', 'auto');
  }

  public onRemoveItem(item: AssemblingRequest | MaterialRequest) {
    if (this.type === 'warehouse') {
      const index = this.materials.indexOf(<MaterialRequest>item);
      this.materials.splice(index, 1);
    } else {
      const index = this.assemblies.indexOf(<AssemblingRequest>item);
      this.assemblies.splice(index, 1);
    }

  }

  onAddItem() {
    if (this.type === 'warehouse') {
      this.materials.push({warehouseProduct: null, quantity: 1});
    } else {
      this.assemblies.push({assemblingProduct: null, quantity: 1});
    }
  }

  onItemSearch(item: AssemblingRequest | MaterialRequest) {
    if (this.type === 'warehouse') {
      this.warehouseProductService.openSearchInWarehouseModal().pipe(
        filter(product => !!product)
      ).subscribe(product => {
        // @ts-ignore
        item.warehouseProduct = product;
      });
    } else if (this.type === 'assemblies') {
      this.nomenclatureService.assemblyManufacturedPickerDialog(ENomenclatureType.ASSEMBLY).pipe(
        filter(product => !!product)
      ).subscribe(product => {
        // @ts-ignore
        item.assemblingProduct = product;
      });
    } else if (this.type === 'manufactured-parts') {
      this.nomenclatureService.assemblyManufacturedPickerDialog(ENomenclatureType.MANUFACTURED).pipe(
        filter(product => !!product)
      ).subscribe(product => {
        // @ts-ignore
        item.assemblingProduct = product;
      });
    }
  }

  onAddItems() {
    this.isSaving = true;
    this.materials = this.materials.filter(m => m.warehouseProduct);
    this.assemblies = this.assemblies.filter(a => a.assemblingProduct);

    if (this.materials.length > 0) {
      this.materials.forEach(material => {
        this.newItems.push({
          // @ts-ignore
          taskId: this.data.parentTasks[0].id,
          data: {
            nomenclature: material.warehouseProduct.nomenclature.id,
            quantity: material.quantity,
          }
        });
      });
    }

    if (this.assemblies.length > 0) {
      this.assemblies.forEach(assembling => {
        this.newItems.push({
          // @ts-ignore
          taskId: this.data.parentTasks[0].id,
          data: {
            nomenclature: assembling.assemblingProduct.id,
            quantity: assembling.quantity,
          }
        });
      });
    }

    this.dialogRef.close(this.newItems);
  }
}
