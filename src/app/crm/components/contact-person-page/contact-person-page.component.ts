import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {ContactPersonService} from '../../services/contact-person.service';
import {AddEventModalType, Company} from '../../models/company';
import {ContactPerson} from '@shared/models/contact-person';
import {MenuItem} from 'primeng/api';
import {map, tap} from 'rxjs/operators';
import {CompanyService} from '../../services/company.service';
import {EventContactPersonService} from '../../services/event-contact-person.service';
import {EventContactPerson} from '../../models/event-contact-person';

@Component({
  selector: 'pek-contact-person-page',
  templateUrl: './contact-person-page.component.html',
  styleUrls: ['./contact-person-page.component.scss']
})
export class ContactPersonPageComponent implements OnInit, OnDestroy {
  contactPersonMenuItems: MenuItem[] = [{
    label: 'Selected Linked Contact',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditLinkedContact()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveLinkedContact()
      }
    ]
  }];

  companyMenuItems: MenuItem[] = [{
    label: 'Selected Linked Company',
    items: [
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onDeleteLinkedCompany()
      }
    ]
  }];

  eventMenuItems: MenuItem[] = [{
    label: 'Selected Event',
    items: [
      {
        label: 'Done',
        icon: 'pi pi-check',
        command: () => this.onDoneEvent()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditEvent()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onDeleteEvent()
      }
    ]
  }];

  isLoading = true;
  contactPersonId: number;

  selectedEvent: EventContactPerson;
  selectedLinkedContact: ContactPerson;
  selectedLinkedCompany: Company;

  contact: ContactPerson;

  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly contactPersonService: ContactPersonService,
    private readonly eventContactPersonService: EventContactPersonService,
    private readonly companyService: CompanyService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.contactPersonId = +id),
      tap(() => this.getPerson())
    ).subscribe();
  }

  getPerson() {
    this.contactPersonService.getById(this.contactPersonId).pipe(
      takeUntil(this.destroy$)
    ).subscribe(contactPerson => {
      this.contact = contactPerson;

      this.contact.activities.sort((a, b) => {
        const dateA = new Date(a.event.start);
        const dateB = new Date(b.event.start);
        // @ts-ignore
        return (dateB - dateA);
      });

      if (this.selectedLinkedCompany) {
        this.selectedLinkedCompany = contactPerson.linked_companies.find(c => c.id === this.selectedLinkedCompany.id);
        this.contact.linked_companies = this.contact.linked_companies.map(c => c);
      }

      if (this.selectedLinkedContact) {
        this.selectedLinkedContact = contactPerson.linked_contacts.find(c => c.id === this.selectedLinkedContact.id);
        this.contact.linked_contacts = this.contact.linked_contacts.map(c => c);
      }

      if (this.selectedEvent) {
        this.selectedEvent = contactPerson.activities.find(c => c.id === this.selectedEvent.id);
        this.contact.activities = this.contact.activities.map(c => c);

        this.onEventSelect();
      }

      this.isLoading = false;
    });
  }

  onAddLinkedContact() {
    this.contactPersonService.openCreateEditLinkedContactModal('create', this.contact).subscribe(contactPerson => {
      if (contactPerson) {
        this.getPerson();
      }
    });
  }

  onEditLinkedContact() {
    this.contactPersonService.openCreateEditLinkedContactModal('edit', this.contact, this.selectedLinkedContact).subscribe(contactPerson => {
      if (contactPerson) {
        this.getPerson();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onRemoveLinkedContact() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.contactPersonService.deleteLinkedContact(this.selectedLinkedContact).subscribe(() => {
          const index = this.contact.linked_contacts.findIndex(c => c.id === this.selectedLinkedContact.id);
          this.contact.linked_contacts.splice(index, 1);
          this.contact.linked_contacts = this.contact.linked_contacts.map(c => c);
        });
      }
    });
  }

  onDeleteLinkedCompany() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm)
        this.companyService.deleteLinkedCompany(this.selectedLinkedCompany.id).subscribe(() => {
          const index = this.contact.linked_companies.findIndex(c => c.id === this.selectedLinkedCompany.id);
          this.contact.linked_companies.splice(index, 1);
          this.contact.linked_companies = this.contact.linked_companies.map(c => c);
        });
    });
  }

  onDoneEvent() {
    this.modalService.confirm('success')
      .subscribe(confirm => {
        if (confirm) {
          this.eventContactPersonService.update(this.selectedEvent.id, {is_done: true,} as EventContactPerson)
            .subscribe(() => this.getPerson());
        }
      });
  }

  onEventSelect() {
    this.eventMenuItems[0].items[0].disabled = this.selectedEvent.is_done;
  }

  onDeleteEvent() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventContactPersonService.delete(this.selectedEvent.id).subscribe(() => {
          const index = this.contact.activities.findIndex(c => c.id === this.selectedEvent.id);
          this.contact.activities.splice(index, 1);
          this.contact.activities = this.contact.activities.map(c => c);
        });
      }
    });
  }

  onEditEvent() {
    this.eventContactPersonService.openEditModal(this.selectedEvent).subscribe(event => {
      if (event) {
        this.getPerson();
      }
    });
  }

  onAddEventToCompany(type: AddEventModalType) {
    this.contactPersonService.openAddEventToContactPersonModal(type, this.contact).subscribe(response => {
      if (response) {
        this.getPerson();
      }
    });
  }
}
