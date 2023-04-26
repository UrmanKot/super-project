import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ModalService} from '@shared/services/modal.service';
import {Machine} from '../../models/machine';
import {MachineService} from '../../services/machine.service';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-machines',
  templateUrl: './manufacturing-machines.component.html',
  styleUrls: ['./manufacturing-machines.component.scss']
})
export class ManufacturingMachinesComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Machine',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditMachine()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveMachine()
      }
    ]
  }];

  machines: Machine[] = [];
  selectedMachine: Machine;
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  isLoading = false;


  machines$: Observable<Machine[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.machineService.get()),
    tap(machines => this.machines = machines),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly modalService: ModalService,
    private readonly machineService: MachineService,
  ) {
  }

  ngOnInit(): void {
    this.machines$.subscribe();
  }

  onAddMachine() {
    this.machineService.createEditMachineModal('create').pipe(
      filter(position => !!position)
    ).subscribe(position => this.machines.unshift(position));
  }

  private prepareForSearch() {
    this.isLoading = true;
    this.selectedMachine = null;
    this.machines = [];
  }

  private onEditMachine() {
    this.machineService.createEditMachineModal('edit', this.selectedMachine).pipe(
      filter(position => !!position)
    ).subscribe(position => {
      const index = this.machines.findIndex(t => t.id === this.selectedMachine.id);
      this.machines[index] = position;
      this.selectedMachine = this.machines[index];
    });
  }

  private onRemoveMachine() {
    this.modalService.confirm('danger').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.machineService.delete(this.selectedMachine.id).subscribe(() => {
        const index = this.machines.findIndex(e => e.id === this.selectedMachine.id);
        this.machines.splice(index, 1);
        this.selectedMachine = null;
      });
    });
  }
}
