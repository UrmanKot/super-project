import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Company} from '../../../../crm/models/company';
import {BusinessTripLocationTypes} from '../../../enums/business-trip-location-status.enum';
import {ModalService} from '@shared/services/modal.service';
import {BusinessTripLocationMeeting} from '../../../models/business-trip-location-meeting';
import {Country} from '@shared/models/country';
import {BusinessTripCountry} from '../../../models/business-trip-country';
import {LocationMeetingService} from '../../../services/location-meeting.service';
import {ContactPerson} from '@shared/models/contact-person';
import {Subject, takeUntil} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'pek-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent implements OnInit, OnChanges, OnDestroy {


  @Input() country: BusinessTripCountry;
  @Input() locationId: number;
  @Input() address: string;
  @Input() showDelete: boolean;
  @Input() showAddMeetings: boolean;
  @Input() companiesFilters: Company[];
  locationMeetings: BusinessTripLocationMeeting[] = [];
  @Input() showHr = false;
  @Input() type: BusinessTripLocationTypes;
  @Output() countryChanged: EventEmitter<BusinessTripCountry> = new EventEmitter<BusinessTripCountry>();
  @Output() addressChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() meetingsChanged: EventEmitter<BusinessTripLocationMeeting[]> = new EventEmitter<BusinessTripLocationMeeting[]>();
  @Output() emitDeletePoint: EventEmitter<BusinessTripLocationTypes> = new EventEmitter<BusinessTripLocationTypes>();
  employeeChanged: Subject<{meeting: any, contacts: ContactPerson[] }> = new Subject<{meeting: any, contacts: ContactPerson[] }>();
  locationLoaded = false;
  companyId: number;
  private destroy$ = new Subject();
  constructor(
    private modalService: ModalService,
    private locationMeetingService: LocationMeetingService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('locationId' in changes) {
      if (this.locationId) {
        this.getMeetings();
      }
    }
  }

  getMeetings() {
    this.locationLoaded = false;
    this.locationMeetingService.get([{name: 'location_id', value: this.locationId}]).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.locationMeetings = res;
      this.meetingsChanged.emit(this.locationMeetings);
    });
  }

  ngOnInit(): void {
    this.employeeChanged.pipe(debounceTime(500)).pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.updateMeetingPerson(res.meeting, res.contacts);
    });
  }

  delete() {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.emitDeletePoint.emit(this.type);
      }
    });
  }

  addMeeting() {
    if (this.locationId) {
      this.locationMeetings.push({
        company: null,
        id: null,
        location_id: this.locationId,
        contacts: []
      });
    }
  }

  updateMeeting(locationMeeting: BusinessTripLocationMeeting, $event: Partial<Company>) {
    if (!locationMeeting.company || locationMeeting.company.id !== $event) {
      locationMeeting.company = $event;
      this.createUpdateMeeting(locationMeeting);
    }
  }


  deleteMeeting(meetingToDelete: BusinessTripLocationMeeting, index: number) {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        if (meetingToDelete.id) {
          this.locationMeetingService.delete(meetingToDelete).pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.getMeetings();
          });
        }
      }
    });
  }

  createUpdateMeeting(locationMeeting: BusinessTripLocationMeeting) {
    if (this.locationId) {
      if (locationMeeting.id) {
        const locationData = {
          company: locationMeeting.company.id,
          location_id: this.locationId,
          contacts: locationMeeting.contacts.map(contact => contact.id)
        };
        this.locationMeetingService.update(locationMeeting.id, locationData).pipe(takeUntil(this.destroy$)).subscribe(res => {
          this.getMeetings();
        });
      } else {
        const locationData = {
          company: locationMeeting.company.id,
          location_id: this.locationId,
          contacts: locationMeeting.contacts.map(contact => contact.id)
        };
        this.locationMeetingService.create(locationData).pipe(takeUntil(this.destroy$)).subscribe(res => {
          this.getMeetings();
        });
      }
    }
  }

  getContactsIds(meeting: BusinessTripLocationMeeting) {
    return meeting.contacts.map(contact => contact.id);
  }

  updateMeetingPerson(meeting: BusinessTripLocationMeeting, $event: ContactPerson[]) {
    const inter = meeting.contacts.map(contact => contact.id).filter(contact => !$event.map(contact => contact.id).includes(contact));
    const inter2 = $event.map(contact => contact.id).filter(contact => !meeting.contacts.map(contact => contact.id).includes(contact));
    if (inter.length > 0 || inter2.length > 0) {
      meeting.contacts = $event;
      this.createUpdateMeeting(meeting);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
