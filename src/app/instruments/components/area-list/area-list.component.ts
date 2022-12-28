import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Area} from '../../../warehouse/models/area-locator';
import {AreasService} from '@shared/services/areas.service';
import {take} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {MenuItem} from 'primeng/api';
import {InstrumentAndToolsModalsService} from '../../services/instrument-and-tools-modals.service';
import {Paginator} from 'primeng/paginator';
import {ModalService} from '@shared/services/modal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pek-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  areas: Area[];
  selectedNode: Area;
  isLoading = true;
  private destroy$ = new Subject();
  isShowAll: boolean;
  isStartOnePage = false;
  count: number;
  searchForm: FormGroup = this.fb.group({
    page: [1],
  });

  menuItems: MenuItem[] = [{
    label: 'Selected Locator',
    items: [
      {
        label: 'Locators',
        icon: 'pi pi-bars',
        command: () => this.editLocators()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editArea()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteArea()
      }
    ]
  }];

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value}
  ];
  constructor(
    private areasService: AreasService,
    private instrumentAndToolsService: InstrumentAndToolsModalsService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.search();
  }

  getAreas() {
    this.selectedNode = null;
    this.areasService.get().pipe(take(1), takeUntil(this.destroy$)).subscribe(res => {
      this.areas = res;
      this.isLoading = false;
    });
  }

  prepareQuery(): void {
    this.query = [];

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true},
    ];
  }



  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  search(): void {
    this.prepareQuery();
    if (!this.isShowAll) {
      this.getPaginated();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getAll();
    }
  }

  getAll() {
    this.selectedNode = null;
    this.areasService.get().pipe(take(1)).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.areas = res;
      this.selectedNode = null;
      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
        this.isLoading = false;
      }
    });
  }

  getPaginated() {
    this.areasService
      .get_paginated(this.query)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((res) => {
        this.count = res.count;
        this.areas = res.results;
        this.selectedNode = null;
      });
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.search();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.search();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.search();
  }

  private editArea() {
    this.instrumentAndToolsService.createEditAreaModal('edit', this.selectedNode).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.search();
    });
  }

  private deleteArea() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((confirm) => {
        if (confirm) {
          this.areasService
            .delete(this.selectedNode)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe((del) => {
              this.search();
            });
        }
      });
  }

  createArea() {
    this.instrumentAndToolsService.createEditAreaModal('create').pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.search();
    });
  }

  private editLocators() {
    this.router.navigate(['locators', this.selectedNode.id], {relativeTo: this.activatedRoute})
  }
}
