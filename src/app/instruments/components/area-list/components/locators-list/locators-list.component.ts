import {Component, OnDestroy, OnInit} from '@angular/core';
import {Area, AreaLocator} from '../../../../../warehouse/models/area-locator';
import {ActivatedRoute} from '@angular/router';
import {AreaLocatorsService} from '@shared/services/area-locators.service';
import {AreasService} from '@shared/services/areas.service';
import {take, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';
import {MenuItem} from 'primeng/api';
import {InstrumentAndToolsModalsService} from '../../../../services/instrument-and-tools-modals.service';

@Component({
  selector: 'pek-locators-list',
  templateUrl: './locators-list.component.html',
  styleUrls: ['./locators-list.component.scss']
})
export class LocatorsListComponent implements OnInit, OnDestroy {
  locators: AreaLocator[];
  selectedNode: AreaLocator;
  activeArea: Area;
  area_id = this.route.snapshot.paramMap.get('areaId');
  private destroy$ = new Subject();
  isLoading: boolean;

  menuItems: MenuItem[] = [{
    label: 'Selected Area Locator',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.edit()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.delete()
      }
    ]
  }];
  constructor(
    private route: ActivatedRoute,
    private locatorService: AreaLocatorsService,
    private areasService: AreasService,
    private modalService: ModalService,
    private instrumentAndToolsService: InstrumentAndToolsModalsService,
  ) {
    this.getAll();
    this.areasService.getById(this.area_id).pipe(take(1), tap(res => this.activeArea = res), takeUntil(this.destroy$)).subscribe();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.selectedNode = null;
    this.locatorService.get([{ name: 'area', value: this.area_id }]).pipe(take(1), takeUntil(this.destroy$)).subscribe(res => {
      this.locators = res;
    });
  }

  delete() {
    this.modalService.confirm('danger', 'Confirm').pipe(take(1), takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.locatorService.delete(this.selectedNode).pipe(take(1), takeUntil(this.destroy$)).subscribe(del => {
          this.getAll();
        })
      }
    });
  }

  edit() {
    this.instrumentAndToolsService.createEditAreaLocatorModal('edit', this.selectedNode).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getAll();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  createAreaLocator() {
    this.instrumentAndToolsService.createEditAreaLocatorModal('create', null, this.activeArea.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getAll();
    });
  }
}
