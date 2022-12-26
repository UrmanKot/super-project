import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ContactPerson} from '@shared/models/contact-person';
import {ContactPersonService} from '../../../crm/services/contact-person.service';

@Component({
  selector: 'pek-multi-contacts-picker',
  templateUrl: './multi-contacts-picker.component.html',
  styleUrls: ['./multi-contacts-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MultiContactsPickerComponent), multi: true}]
})
export class MultiContactsPickerComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Output() valueChange = new EventEmitter<number[]>();
  @Output() valueChangeFull = new EventEmitter<ContactPerson[]>();
  contacts: ContactPerson[];
  @Input() contactsList: number[];
  @Input() contactsListFull: ContactPerson[];
  @Input() searchByCompany = false;
  @Input() companyId: number;

  constructor(
    private contactPersonsService: ContactPersonService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('companyId' in changes) {
      if (this.companyId) {
        this.search();
      }
    }
    if ('contactsListFull' in changes) {
      this.contactsList = this.contactsListFull.map(contact => contact.id)
    }
  }

  ngOnInit(): void {
  }

  search() {
    if (!this.searchByCompany) {
      this.getContactPersons(null);
    }

    if (this.searchByCompany && this.companyId) {
      const query: [{ name: string; value: any }] = [{
        name: 'company',
        value: this.companyId
      }];
      this.getContactPersons(query);
    }
  }

  getContactPersons(query: [{ name: string; value: any }]) {
    this.contactPersonsService.getForce(query).subscribe(contacts => {
      this.contacts = contacts;
      if (this.contactsList) {
        const selectedContacts = this.contacts
          .filter(contact => this.contactsList
            .findIndex(contListId => contListId === contact.id) >= 0).map(el => el.id);
        this.setValue(selectedContacts);
      }
    });
  }

  onChange(contactPerson: number[]) {
    this.setValue(contactPerson);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(contactPerson: number[]) {
    this.contactsList = contactPerson;
    this.valueChange.emit(this.contactsList);
    const foundContacts = this.contacts.filter(contact => contactPerson.findIndex(el => el === contact.id) > -1);
    this.valueChangeFull.emit(foundContacts);
  }

  writeValue(obj: any): void {
    this.contactsList = obj;
  }
}
