import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {Table} from 'primeng/table';
import {QcProtocol} from '../../models/protocol';
import {QuerySearch} from '@shared/models/other';
import {ProtocolService} from '../../services/protocol.service';
import {BehaviorSubject, iif, Observable, switchMap} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';

@UntilDestroy()
@Component({
  selector: 'pek-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})
export class ProtocolsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('dt') dt: Table;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  menuItems: MenuItem[] = [{
    label: 'Selected Protocol',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editProtocol()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeProtocol()
      }
    ]
  }];

  isLoading = true;
  isShowAll = false;

  protocolsCount = 0;
  isStartFirstPage = false;

  selectedProtocol: QcProtocol;

  currentPage = 1;

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.currentPage},
  ];

  protocols$: Observable<QcProtocol[]> = this.search$.pipe(
    tap(() => this.isLoading = true),
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.protocolService.getForPagination(this.query).pipe(
          tap(response => this.protocolsCount = response.count),
          map(response => response.results),
        ),
        this.protocolService.get(this.query).pipe(
          tap(products => this.protocolsCount = products.length),
          map(protocols => protocols)
        )
      ),
    ),
    tap(() => this.isLoading = false),
    untilDestroyed(this),
  );

  constructor(
    private readonly protocolService: ProtocolService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  private prepareForSearch() {
    this.selectedProtocol = null;

    this.query = [
      {name: 'page', value: this.currentPage},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true});
    }
  }

  removeProtocol() {
    this.modalService.confirm('danger').subscribe(res => {
      if (res) {
        this.protocolService.deleteProtocol(this.selectedProtocol.id).subscribe(() => this.search$.next());
        this.selectedProtocol = null;
      }
    });
  }

  onCreateProtocol() {
    this.protocolService.createEditProtocolModal('create').pipe(
      filter(value => Boolean(value)),
      tap(() => this.search$.next())
    ).subscribe()
  }

  editProtocol() {
    this.protocolService.createEditProtocolModal('edit', this.selectedProtocol).pipe(
      filter(value => Boolean(value)),
      tap(() => this.search$.next())
    ).subscribe()
  }
}
