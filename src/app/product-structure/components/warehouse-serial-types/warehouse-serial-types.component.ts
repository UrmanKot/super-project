import {Component, OnInit} from '@angular/core';
import {SerialType} from '../../models/serial-type';
import {MenuItem} from 'primeng/api';
import {SerialTypeService} from '../../services/serial-type.service';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-warehouse-serial-types',
  templateUrl: './warehouse-serial-types.component.html',
  styleUrls: ['./warehouse-serial-types.component.scss']
})
export class WarehouseSerialTypesComponent implements OnInit {
  menuItems: MenuItem[] = [{
    label: 'Selected Serial Type',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditSerialType()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveSerialType()
      }
    ]
  }];

  isLoading = true;
  serialTypes: SerialType[] = [];
  selectedSerialType: SerialType;

  constructor(
    private serialTypeService: SerialTypeService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getSerialTypes();
  }

  getSerialTypes() {
    this.serialTypeService.get().subscribe(serialTypes => {
      this.serialTypes = serialTypes;
      this.isLoading = false;
    })
  }

  onEditSerialType() {
    this.serialTypeService.createEditSerialTypeModal('edit', this.selectedSerialType).subscribe(serialTypes => {
      if (serialTypes) {
        const index = this.serialTypes.findIndex(t => t.id === this.selectedSerialType.id);
        this.serialTypes[index] = serialTypes;
        this.selectedSerialType = this.serialTypes[index];
      }
    });
  }

  onRemoveSerialType() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.serialTypeService.delete(this.selectedSerialType).subscribe(() => {
          const index = this.serialTypes.findIndex(w => w.id === this.selectedSerialType.id);
          this.serialTypes.splice(index, 1);
          this.selectedSerialType = null;
        });
      }
    });
  }

  onAddSerialType() {
    this.serialTypeService.createEditSerialTypeModal('create').subscribe(serialType => {
      if (serialType) {
        this.serialTypes.unshift(serialType);
      }
    });
  }
}
