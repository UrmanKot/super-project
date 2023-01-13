import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventTypesService} from '../../services/event-types.service';
import {EventType} from '../../models/event-type';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-crm-external-events',
  templateUrl: './crm-external-events.component.html',
  styleUrls: ['./crm-external-events.component.scss']
})
export class CrmExternalEventsComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [{
    label: 'Selected External Event Type',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditEventType()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveEventType()
      }
    ]
  }];

  private destroy$ = new Subject();

  isLoading = true;
  externalEvents: EventType[] = [];
  selectedExternalEvent: EventType;

  constructor(
    private readonly eventTypesService: EventTypesService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getEventTypes();
  }

  getEventTypes() {
    this.eventTypesService.getExternalEventTypes().pipe(
      takeUntil(this.destroy$)
    ).subscribe(eventTypes => {
      this.externalEvents = eventTypes;
      this.isLoading = false;
    })
  }

  onAddEventType() {
    this.eventTypesService.createEditExternalEventType('create').subscribe(eventType => {
      if (eventType) {
        this.externalEvents.unshift(eventType);
        this.renderTable();
      }
    });
  }

  onEditEventType() {
    this.eventTypesService.createEditExternalEventType('edit', this.selectedExternalEvent).subscribe(eventType => {
      if (eventType) {
        const index = this.externalEvents.findIndex(t => t.id === this.selectedExternalEvent.id);
        this.externalEvents[index] = eventType;
        this.selectedExternalEvent = this.externalEvents[index];
        this.renderTable();
      }
    })
  }

  onRemoveEventType() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventTypesService.delete(this.selectedExternalEvent).subscribe(() => {
          const index = this.externalEvents.findIndex(w => w.id === this.selectedExternalEvent.id);
          this.externalEvents.splice(index, 1);
          this.selectedExternalEvent = null;
          this.renderTable();
        });
      }
    });
  }

  renderTable() {
    this.externalEvents = this.externalEvents.map(el => el);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
