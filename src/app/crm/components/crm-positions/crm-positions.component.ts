import { Component, OnInit } from '@angular/core';
import {CrmPositionsService} from '../../services/crm-positions.service';
import {take} from 'rxjs/operators';
import {CrmPosition} from '../../../business-trips/models/crm-position';
import {ModalService} from '@shared/services/modal.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'pek-crm-positions',
  templateUrl: './crm-positions.component.html',
  styleUrls: ['./crm-positions.component.scss']
})
export class CrmPositionsComponent implements OnInit {

  positions: CrmPosition[] = [];
  selectedPosition: CrmPosition;
  isLoading = true;

  menuItems: MenuItem[] = [{
    label: 'Selected Position',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editEmployee()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteEmployee()
      }
    ]
  }];
  constructor(
    private crmPositionService: CrmPositionsService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.crmPositionService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.positions = res;
        this.selectedPosition = null;
        this.isLoading = false;
      });
  }

  addPosition() {
    this.crmPositionService
      .createEditCrmPositionModal('create')
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.getAll();
        }
      });
  }

  editEmployee() {
    this.crmPositionService
      .createEditCrmPositionModal('edit', this.selectedPosition)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.getAll();
        }
      });
  }

  deleteEmployee() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1))
      .subscribe((confirm) => {
        if (confirm) {
          this.crmPositionService
            .delete(this.selectedPosition)
            .pipe(take(1))
            .subscribe((del) => {
              this.getAll();
            });
        }
      });
  }
}
