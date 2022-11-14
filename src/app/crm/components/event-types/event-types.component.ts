import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {EventTypesService} from '../../services/event-types.service';
import {EventType} from '../../models/event-type';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.scss']
})
export class EventTypesComponent implements OnInit {

  private destroy$ = new Subject();

  eventTypes: EventType[] = [];
  selectedEventType: EventType;
  isLoading = true;

  menuItems: MenuItem[] = [{
    label: 'Selected Event Type',
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

  constructor(
    private readonly eventTypesService: EventTypesService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getEventTypes();
  }

  getEventTypes() {
    this.eventTypesService.get([
      {name: 'is_inner', value: true,},
      {name: 'is_auto', value: false,},
    ]).subscribe(types => {
      this.eventTypes = types;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onAddEventType() {
    this.eventTypesService.createEditEventType('create').subscribe(type => {
      if (type) {
        this.eventTypes.push(type);
        this.renderTable();
      }
    });
  }

  onEditEventType() {
    this.eventTypesService.createEditEventType('edit', this.selectedEventType).subscribe(type => {
      if (type) {
        const index = this.eventTypes.findIndex(t => t.id === this.selectedEventType.id);
        this.eventTypes[index] = type;
        this.selectedEventType = this.eventTypes[index];
        this.renderTable();
      }
    });
  }

  onRemoveEventType() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventTypesService.delete(this.selectedEventType).subscribe(() => {
          const index = this.eventTypes.findIndex(w => w.id === this.selectedEventType.id);
          this.eventTypes.splice(index, 1);
          this.selectedEventType= null;
          this.renderTable();
        });
      }
    });
  }

  renderTable() {
    this.eventTypes = this.eventTypes.map(el => el);
  }
}
