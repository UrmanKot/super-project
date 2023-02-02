import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ContactPerson} from '@shared/models/contact-person';
import {Subject, takeUntil} from 'rxjs';
import {ContactPersonService} from '../../services/contact-person.service';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-crm-multi-contact-persons-picker',
  templateUrl: './crm-multi-contact-persons-picker.component.html',
  styleUrls: ['./crm-multi-contact-persons-picker.component.scss']
})
export class CrmMultiContactPersonsPickerComponent implements OnInit, OnChanges {
  @Input() currentContactPersonsIds: number[] = [];
  @Input() isDisabled: boolean;
  @Input() selectedCompaniesIds: number[];
  @Output() selectContactPersons: EventEmitter<number[]> = new EventEmitter<number[]>();

  isLoading = true;
  contactPersons: ContactPerson[] = [];
  selectedContactPersons: ContactPerson[] = [];

  private destroy$ = new Subject();

  constructor(
    private contactPersonService: ContactPersonService
  ) {
  }

  ngOnInit(): void {
    this.getContact();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('selectedCompaniesIds' in changes) {
      this.getContact(true);
    }
    if ('currentContactPersonsIds' in changes) {
      this.selectedContactPersons = [];
      this.findContactPersons();
    }
  }



  getContact(excludeNonCompaniesContacts = false) {
    let query: QuerySearch[];
    if (this.selectedCompaniesIds) {
      query = [{
        name: 'company_ids',
        value: this.selectedCompaniesIds
      }];
      this.contactPersonService.getForce(query).pipe(
        takeUntil(this.destroy$)
      ).subscribe(contactPersons => {
        this.contactPersons = contactPersons;
        this.findContactPersons();
        if (excludeNonCompaniesContacts) {
          this.updateRemainingSelectedPersons();
        }
        this.isLoading = false;
      });
    }
  }

  onSelectEventTypes(contactPersons: ContactPerson[]) {
    if (contactPersons) {
      this.selectContactPersons.emit(contactPersons.map(c => c.id));
    } else {
      this.selectContactPersons.emit(null);
    }
  }

  findContactPersons() {
    if (this.currentContactPersonsIds.length > 0) {
      this.currentContactPersonsIds.forEach(id => {
        const findContactPerson = this.contactPersons.find(t => t.id === id);

        if (findContactPerson) {
          const isExists = this.selectedContactPersons.some(person => person.id === findContactPerson.id);
          if (!isExists) {
            this.selectedContactPersons.push(findContactPerson);
          }
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private updateRemainingSelectedPersons() {
    if (this.currentContactPersonsIds.length > 0 && this.selectedCompaniesIds.length > 0) {
      const remainingPersons = this.currentContactPersonsIds.filter(contactId => this.contactPersons.findIndex(person => person.id === contactId) > -1);
      this.selectContactPersons.emit(remainingPersons);
    } else {
      this.currentContactPersonsIds = [];
      this.selectContactPersons.emit(null);
    }
  }
}
