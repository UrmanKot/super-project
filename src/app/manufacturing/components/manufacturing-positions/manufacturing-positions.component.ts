import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ModalService} from '@shared/services/modal.service';
import {EmployeePosition} from '@shared/models/employee-position';
import {EmployeePositionService} from '@shared/services/employee-position.service';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-positions',
  templateUrl: './manufacturing-positions.component.html',
  styleUrls: ['./manufacturing-positions.component.scss']
})
export class ManufacturingPositionsComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Position',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditPosition()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemovePosition()
      }
    ]
  }];

  positions: EmployeePosition[] = [];
  selectedPosition: EmployeePosition;
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  isLoading = false;


  positions$: Observable<EmployeePosition[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.employeePositionService.get()),
    tap(positions => this.positions = positions),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly modalService: ModalService,
    private readonly employeePositionService: EmployeePositionService
  ) {
  }

  ngOnInit(): void {
    this.positions$.subscribe();
  }

  onAddPosition() {
    this.employeePositionService.createEditPositionModal('create').pipe(
      filter(position => !!position)
    ).subscribe(position => this.positions.unshift(position));
  }

  private prepareForSearch() {
    this.isLoading = true;
    this.selectedPosition = null;
    this.positions = [];
  }

  private onEditPosition() {
    this.employeePositionService.createEditPositionModal('edit', this.selectedPosition).pipe(
      filter(position => !!position)
    ).subscribe(position => {
      const index = this.positions.findIndex(t => t.id === this.selectedPosition.id);
      this.positions[index] = position;
      this.selectedPosition = this.positions[index];
    });
  }

  private onRemovePosition() {
    this.modalService.confirm('danger').pipe(
      filter(confirm => confirm)
    ).subscribe(confirm => {
      this.employeePositionService.delete(this.selectedPosition.id).subscribe(() => {
        const index = this.positions.findIndex(e => e.id === this.selectedPosition.id);
        this.positions.splice(index, 1);
        this.selectedPosition = null;
      });
    });
  }
}
