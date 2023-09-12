import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CompanyService} from '../../services/company.service';
import {ContactPerson} from '@shared/models/contact-person';
import {EventContactPersonService} from '../../services/event-contact-person.service';
import {ContactPersonService} from '../../services/contact-person.service';

@Component({
  selector: 'pek-crm-contact-person-picker',
  templateUrl: './crm-contact-person-picker.component.html',
  styleUrls: ['./crm-contact-person-picker.component.scss']
})
export class CrmContactPersonPickerComponent implements OnInit {
  @Output() selectContactPerson: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentContactPersonId: any;
  isLoading = true;
  contactPersons: Partial<ContactPerson>[] = [];
  selectedContactPersonId: number;

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

      if (this.currentContactPersonId) {
        this.selectedContactPersonId = this.currentContactPersonId;
      }

      this.isLoading = false;
    });
  }

  onSelectContactPerson() {
    this.selectContactPerson.emit(this.selectedContactPersonId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
