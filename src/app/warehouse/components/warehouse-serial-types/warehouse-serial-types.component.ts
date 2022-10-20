import {Component, OnInit} from '@angular/core';
import {SerialType} from '../../models/serial-type';
import {MenuItem} from 'primeng/api';
import {SerialTypeService} from '../../services/serial-type.service';

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

  }

  onRemoveSerialType() {

  }

  onAddSerialType() {

  }
}
