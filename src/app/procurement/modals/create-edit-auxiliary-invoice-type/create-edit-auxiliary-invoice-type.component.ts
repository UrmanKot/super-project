import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {BaseService} from '../../models/base-service';
import {TreeNode} from 'primeng/api';
import {BaseServicesService} from '../../services/base-services.service';
import {TreeService} from '@shared/services/tree.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-create-edit-auxiliary-invoice-type',
  templateUrl: './create-edit-auxiliary-invoice-type.component.html',
  styleUrls: ['./create-edit-auxiliary-invoice-type.component.scss']
})
export class CreateEditAuxiliaryInvoiceTypeComponent implements OnInit {
  isSaving = false;

  isLoading = true;
  services: BaseService[] = [];
  selectedNode: TreeNode<BaseService>;
  servicesTree: TreeNode<BaseService>[] = [];

  form = this.fb.group({
    name: ['', [Validators.required]],
    comment: [''],
    parent: [null],
    is_for_root: [true]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly baseServicesService: BaseServicesService,
    private readonly treeService: TreeService,
    private dialogRef: MatDialogRef<CreateEditAuxiliaryInvoiceTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, service: BaseService }
  ) {
  }

  ngOnInit() {
    this.getServices();

    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.service);

      if (this.data.service.parent) {
        this.form.get('is_for_root').patchValue(false);
      }
    }
  }

  findNode() {
    const find = (nodes: TreeNode<BaseService>[]) => {
      const foundNode = nodes.find(n => n.data.id === this.data.service.id);

      if (foundNode) {
        this.selectedNode = foundNode;
        return;
      } else {
        nodes.forEach(node => {
          node.expanded = true;
          if (node.children.length > 0) {
            find(node.children);
          }
        });
      }
    };

    find(this.servicesTree);
  }

  getServices() {
    this.baseServicesService.get().subscribe(services => {
      this.services = services;
      this.createTree();

      if (this.data.type === 'edit') {
        this.findNode();
      }

      this.isLoading = false;
    });
  }

  createTree() {
    if (this.servicesTree) {
      this.treeService.mapExpansion(this.servicesTree, {});
    }

    this.servicesTree = this.treeService.createTree(this.services, {});
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createService();
        break;
      }
      case 'edit': {
        this.editService();
        break;
      }
    }
  }

  onChange() {
    this.selectedNode = null;
    this.form.get('parent').patchValue(null);
  }

  editService() {
    this.baseServicesService.update(this.form.value, this.data.service.id).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(service => this.dialogRef.close(service));
  }

  createService() {
    const send = this.form.value;

    this.baseServicesService.create(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(service => this.dialogRef.close(service));
  }

  onSelection() {
    this.form.get('parent').patchValue(this.selectedNode?.data?.id || null);
  }
}
