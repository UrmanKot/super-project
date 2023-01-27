import {Component, OnInit} from '@angular/core';
import {BaseServicesService} from '../../services/base-services.service';
import {BaseService} from '../../models/base-service';
import {MenuItem, TreeNode} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {cloneDeep} from 'lodash-es';
import {TreeService} from '@shared/services/tree.service';

@Component({
  selector: 'pek-auxiliary-invoices-types-list',
  templateUrl: './auxiliary-invoices-types-list.component.html',
  styleUrls: ['./auxiliary-invoices-types-list.component.scss']
})
export class AuxiliaryInvoicesTypesListComponent implements OnInit {
  isLoading = true;
  services: BaseService[] = [];
  selectedNode: TreeNode<BaseService>;
  servicesTree: TreeNode<BaseService>[] = [];

  expanseMap = {};

  menuItems: MenuItem[] = [{
    label: 'Selected Auxiliary Invoices Type',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditService()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveService()
      }
    ]
  }];

  constructor(
    private readonly baseServicesService: BaseServicesService,
    private readonly treeService: TreeService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.baseServicesService.get().subscribe(services => {
      this.services = services;
      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    if (this.servicesTree) {
      this.treeService.mapExpansion(this.servicesTree, this.expanseMap);
    }

    this.servicesTree = this.treeService.createTree(this.services, this.expanseMap);
  }

  onExpandAll(): void {
    const temp = cloneDeep(this.servicesTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.servicesTree = temp;
  }

  onCollapseAll(): void {
    const temp = cloneDeep(this.servicesTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.servicesTree = temp;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  private onEditService() {
    this.baseServicesService.createEditBaseService('edit', this.selectedNode.data).subscribe(service => {
      if (service) {
        const index = this.services.findIndex(s => s.id === service.id);
        this.services[index] = service;
        this.selectedNode = null;
        this.createTree();
      }
    });
  }

  public onCreateService() {
    this.baseServicesService.createEditBaseService('create').subscribe(service => {
      if (service) {
        this.services.unshift(service);
        this.createTree();
      }
    });
  }

  private onRemoveService() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.baseServicesService.delete(this.selectedNode.data.id).subscribe(() => {
          const removeChildren = (id: number) => {
            const ids: number[] = this.services.filter(p => p.parent === id).map(p => p.id);
            this.services = [...this.services.filter(p => p.parent !== id)];

            ids.forEach(id => {
              removeChildren(id);
            });
          };

          removeChildren(this.selectedNode.data.id);

          const index = this.services.findIndex(p => p.id === this.selectedNode.data.id);
          this.services.splice(index, 1);
          this.selectedNode = null;
          this.createTree();
        });
      }
    });
  }
}
