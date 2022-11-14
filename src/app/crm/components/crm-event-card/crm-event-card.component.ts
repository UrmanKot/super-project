import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventItem} from '../../models/event-item';
import {EventsListService} from '../../services/events-list.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../models/company';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {EventCompanyService} from '../../services/event-company.service';

@Component({
  selector: 'pek-crm-event-card',
  templateUrl: './crm-event-card.component.html',
  styleUrls: ['./crm-event-card.component.scss']
})
export class CrmEventCardComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [{
    label: 'Selected Company',
    items: [
      {
        label: 'Done',
        icon: 'pi pi-check',
        command: () => this.onDoneCompany()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditTechnology()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveTechnology()
      }
    ]
  }];

  selectedEventCompany: Company;

  event: EventItem;
  eventId: number;
  isLoading = true;

  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    private readonly eventListService: EventsListService,
    private readonly route: ActivatedRoute,
    private readonly modalService: ModalService,
    private readonly eventCompanyService: EventCompanyService
  ) {
  }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.eventId = +id),
      switchMap(() => this.eventListService.getById(this.eventId)),
      takeUntil(this.destroy$)
    ).subscribe(event => {
      this.event = event;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private onDoneCompany() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.eventCompanyService.update(this.selectedEventCompany.id, {is_done: true}).subscribe(() => this.getEvent());
      }
    });
  }

  private onEditTechnology() {
    return undefined;
  }

  private onRemoveTechnology() {
    return undefined;
  }

  onAddCompanyToEvent() {
    this.eventListService.openAddCompanyToEventModal(this.eventId).subscribe(event => {
      if (event) {
        this.getEvent();
      }
    });
  }
}
