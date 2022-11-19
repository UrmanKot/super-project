import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ContactPerson} from '@shared/models/contact-person';
import {Subject, takeUntil} from 'rxjs';
import {ContactPersonService} from '../../services/contact-person.service';

@Component({
  selector: 'pek-crm-multi-contact-persons-picker',
  templateUrl: './crm-multi-contact-persons-picker.component.html',
  styleUrls: ['./crm-multi-contact-persons-picker.component.scss']
})
export class CrmMultiContactPersonsPickerComponent implements OnInit {
  @Input() currentContactPersonsIds: number[] = [];
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
    this.contactPersonService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(contactPersons => {
      this.contactPersons = contactPersons;
      this.findContactPersons();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentContactPersonsIds' in changes) {
      this.selectedContactPersons = [];
      this.findContactPersons();
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
          this.selectedContactPersons.push(findContactPerson);
        }

        console.log(this.selectedContactPersons);
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
