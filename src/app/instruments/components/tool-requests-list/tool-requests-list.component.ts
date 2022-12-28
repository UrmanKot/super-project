import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {Area} from '../../../warehouse/models/area-locator';
import {Subject, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MenuItem} from 'primeng/api';
import {QuerySearch} from '@shared/models/other';
import {AreasService} from '@shared/services/areas.service';
import {InstrumentAndToolsModalsService} from '../../services/instrument-and-tools-modals.service';
import {ModalService} from '@shared/services/modal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {ToolOrderService} from '../../../warehouse/services/tool-order.service';
import {ToolOrder} from '../../../warehouse/models/tool-order';

@Component({
  selector: 'pek-tool-requests-list',
  templateUrl: './tool-requests-list.component.html',
  styleUrls: ['./tool-requests-list.component.scss']
})
export class ToolRequestsListComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  requests: ToolOrder[];
  selectedNode: ToolOrder;
  isLoading = true;
  private destroy$ = new Subject();
  isShowAll: boolean;
  isStartOnePage = false;
  count: number;
  searchForm: FormGroup = this.fb.group({
    page: [1],
  });

  menuItems: MenuItem[] = [{
    label: 'Selected Tool Request',
    items: [
      {
        label: 'Nomenclatures',
        icon: 'pi pi-bars',
        command: () => this.editNomenclatures()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.edit()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteRequest()
      }
    ]
  }];

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value}
  ];
  constructor(
    private toolOrderService: ToolOrderService,
    private instrumentAndToolsService: InstrumentAndToolsModalsService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.search();
  }

  prepareQuery(): void {
    this.query = [];

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true},
      {name: 'is_completed', value: false},
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
    this.toolOrderService.get().pipe(take(1)).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.requests = res;
      this.selectedNode = null;
      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
        this.isLoading = false;
      }
    });
  }

  getPaginated() {
    this.toolOrderService
      .get_paginated(this.query)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((res) => {
        this.count = res.count;
        this.requests = res.results;
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

  private edit() {
    this.instrumentAndToolsService.createEditToolRequestModal('edit', this.selectedNode).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.search();
    });
  }

  private deleteRequest() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((confirm) => {
        if (confirm) {
          this.toolOrderService
            .delete(this.selectedNode)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe((del) => {
              this.search();
            });
        }
      });
  }

  createArea() {
    this.instrumentAndToolsService.createEditToolRequestModal('create').pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.router.navigate(['requests', res.id], {relativeTo: this.activatedRoute});
    });
  }

  private editNomenclatures() {
    this.router.navigate(['requests', this.selectedNode.id], {relativeTo: this.activatedRoute});
  }
}
