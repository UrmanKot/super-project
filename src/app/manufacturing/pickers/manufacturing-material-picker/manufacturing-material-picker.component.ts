import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {ModalService} from '@shared/services/modal.service';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';

export class MaterialRequest {
  warehouseProduct: WarehouseProduct;
  quantity: number;
}

@Component({
  selector: 'pek-manufacturing-material-picker',
  templateUrl: './manufacturing-material-picker.component.html',
  styleUrls: ['./manufacturing-material-picker.component.scss']
})
export class ManufacturingMaterialPickerComponent implements OnInit {
  @Input() materials: MaterialRequest[] = [];
  @Output() materialsChange = new EventEmitter<MaterialRequest[]>();

  constructor(
    private readonly modalService: ModalService,
    private readonly warehouseProductService: WarehouseProductService,
  ) {
  }

  ngOnInit(): void {
    if (!this.materials.length) {
      this.addMaterial();
    }
  }

  addMaterial() {
    this.materials.push({warehouseProduct: null, quantity: 1});
  }

  public removeMaterial(material: MaterialRequest) {
    const index = this.materials.indexOf(material);
    this.materials.splice(index, 1);
  }

  warehouseSearch(material: MaterialRequest) {
    this.warehouseProductService.openSearchInWarehouseModal().subscribe(product => {
      if (product) {
        material.warehouseProduct = product;
        this.materialsChange.emit(this.materials);
      }
    });
  }

}
