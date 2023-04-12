import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventItem} from '../../models/event-item';
import {EventsListService} from '../../services/events-list.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {EventCompanyService} from '../../services/event-company.service';
import {EventCompany, Impression} from '../../models/event-company';
import {EventContactPerson} from '../../models/event-contact-person';
import {EventContactPersonService} from '../../services/event-contact-person.service';

@Component({
  selector: 'pek-crm-event-card',
  templateUrl: './crm-event-card.component.html',
  styleUrls: ['./crm-event-card.component.scss']
})
export class CrmEventCardComponent implements OnInit, OnDestroy {
  Impression = Impression;
  eventCompanyMenuItems: MenuItem[] = [{
    label: 'Selected Company',
    items: [
      {
        label: 'View Company',
        icon: 'pi pi-eye',
        command: () => this.onViewCompany()
      },
      {
        label: 'Create Linked Event',
        icon: 'pi pi-share-alt',
        command: () => this.onCreateLinkedEvent()
      },
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

  contactPersonMenuItems: MenuItem[] = [{
    label: 'Selected Contact Person',
    items: [
      {
        label: 'Done',
        icon: 'pi pi-check',
        command: () => this.onDoneContactPerson()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditContactPerson()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveContactPerson()
      }
    ]
  }];

  selectedEventCompany: EventCompany;
  selectedContactPerson: EventContactPerson;

  event: EventItem;
  eventId: number;
  isLoading = true;

  private destroy$: Subject<any> = new Subject<any>();
  enableColors: boolean;

  constructor(
    private readonly eventListService: EventsListService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly modalService: ModalService,
    private readonly eventCompanyService: EventCompanyService,
    private readonly eventContactPersonService: EventContactPersonService,
    private eventsListService: EventsListService,
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

      if (this.selectedEventCompany) {
        this.selectedEventCompany = event.on_companies.find(c => c.id === this.selectedEventCompany.id) as EventCompany;
        this.onEventCompanySelectionChange();
      }

      if (this.selectedContactPerson) {
        // @ts-ignore
        this.selectedContactPerson = event.on_contacts.find(c => c.id === this.selectedContactPerson.id) as EventContactPerson;
        this.onEventContactPersonSelectionChange();
      }

      this.isLoading = false;
    });
  }

  onDoneCompany() {
    this.eventListService.openEventCompanySetStateModal(this.selectedEventCompany).subscribe(res => {
      if (res) {
        this.selectedEventCompany = null;
        this.getEvent();
      }
    });
  }

  onEditTechnology() {
    if (this.selectedEventCompany) {
      this.eventCompanyService.openEditModal(this.selectedEventCompany).subscribe(company => {
        if (company) {
          this.getEvent();
        }
      });
    }
  }

  onRemoveTechnology() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventCompanyService.delete(this.selectedEventCompany.id).subscribe(() => this.getEvent());
        this.selectedEventCompany = null;
      }
    });
  }

  onAddCompanyToEvent() {
    this.eventListService.openAddCompanyToEventModal(this.eventId).subscribe(event => {
      if (event) {
        this.getEvent();
      }
    });
  }

  onEventCompanySelectionChange() {
    this.eventCompanyMenuItems[0].items[0].disabled = !!this.selectedEventCompany?.is_done;
  }

  onEventContactPersonSelectionChange() {
    this.contactPersonMenuItems[0].items[0].disabled = !!this.selectedContactPerson?.is_done;
  }

  onDoneContactPerson() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.eventContactPersonService.update(this.selectedContactPerson.id, {is_done: true}).subscribe(() => this.getEvent());
      }
    });
  }

  onEditContactPerson() {
    if (this.selectedContactPerson) {
      this.eventContactPersonService.openEditModal(this.selectedContactPerson).subscribe(contactPerson => {
        if (contactPerson) {
          this.getEvent();
        }
      });
    }
  }

  onRemoveContactPerson() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventContactPersonService.delete(this.selectedContactPerson.id).subscribe(() => this.getEvent());
        this.selectedContactPerson = null;
      }
    });
  }

  onAddContactPerson() {
    this.eventListService.openAddContactPersonToEventModal(this.eventId).subscribe(event => {
      if (event) {
        this.getEvent();
      }
    });
  }

  onCreateLinkedEvent() {
    this.eventListService.openCreateEventEventModal('create', 'withEmployee', this.event, this.selectedEventCompany.company.id, true).subscribe(event => {
      if (event) {
        this.getEvent();
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private onViewCompany() {
    this.router.navigate(['/crm/business-partners/company-page/', this.selectedEventCompany.company.id]);
  }

  onEditEvent() {
    const isWithEventWithEmployee = this.event.employee && this.event.employee.length > 0;
    console.log('this.event', this.event);
    this.event.on_companies.forEach(el => {
      el.company_id = el.company.id;
    });
    this.event.on_contacts.forEach(el => {
      el.contact_person_id = el.contact_person.id;
    });
    this.eventsListService.openCreateEventEventModal('edit',
      isWithEventWithEmployee ? 'withEmployee' : 'withoutEmployee',
      this.event).subscribe(event => {
      if (event) {
        this.getEvent();
      }
    });
  }
}
