import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseCategory} from "../../../purchasing/models/purchase-category";
import {TreeNode} from "primeng/api";
import {PurchasingCategoryService} from "../../../purchasing/services/purchasing-category.service";
import {BaseService} from "../../../procurement/models/base-service";
import {BaseServicesService} from "../../../procurement/services/base-services.service";
import {ProductStructureCategory} from "../../../product-structure/models/product-structure-category";

@Component({
  selector: 'pek-base-service-picker',
  templateUrl: './base-service-picker.component.html',
  styleUrls: ['./base-service-picker.component.scss']
})
export class BaseServicePickerComponent implements OnInit {

  @Output() choiceService: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentServiceId: number;

  isLoading = true;
  services: BaseService[] = [];
  servicesTree: TreeNode<BaseService>[] = [];

  selectedService: TreeNode<BaseService>;

  constructor(
    private readonly baseServicesService: BaseServicesService,
  ) {
  }

  ngOnInit(): void {
    this.baseServicesService.get().subscribe(services => {
      this.services = services;
      this.createTree();
      this.findService()


      this.isLoading = false;
    });
  }

  findService() {
    const find = (nodes: TreeNode<BaseService>[]) => {
      nodes.forEach(node => {
        if (node.data.id === this.currentServiceId) {
          this.selectedService = node;
          return;
        } else if (node.children.length > 0) {
          find(node.children);
        }
      });
    };

    find(this.servicesTree);
  }

  createTree() {
    const getChildren = (nodes: TreeNode<BaseService>[]) => {
      nodes.forEach(node => {
        const children = this.services.filter(c => c.parent === node.data.id);

        if (children.length > 0) {
          node.children = children.map(category => {
            return {
              label: category.name,
              data: category,
              children: []
            };
          });

          getChildren(node.children);
        }
      });
    };

    const tree: TreeNode<BaseService>[] = this.services.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <BaseService>category,
        children: [],
      };
    });

    getChildren(tree);
    this.servicesTree = [...tree];
  }

  onChoiceService() {
    if (!this.selectedService) {
      this.selectedService = null;
    }

    this.choiceService.emit(this.selectedService?.data?.id ?? null);
  }

}
