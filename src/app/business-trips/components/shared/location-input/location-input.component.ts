import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../../../crm/models/company';
import {BusinessTripLocationTypes} from '../../../enums/business-trip-location-status.enum';
import {ModalService} from '@shared/services/modal.service';
import {BusinessTripLocationMeeting} from '../../../models/business-trip-location-meeting';

@Component({
  selector: 'pek-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent implements OnInit {

  @Input() country: string;
  @Input() address: string;
  @Input() showDelete: boolean;
  @Input() showAddMeetings: boolean;
  @Input() companiesFilters: Company[];
  @Input() locationMeetings: BusinessTripLocationMeeting[] = [];
  @Input() showHr = false;
  @Input() type: BusinessTripLocationTypes;
  @Output() countryChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() addressChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() meetingsChanged: EventEmitter<BusinessTripLocationMeeting[]> = new EventEmitter<BusinessTripLocationMeeting[]>();
  @Output() emitDeletePoint: EventEmitter<BusinessTripLocationTypes> = new EventEmitter<BusinessTripLocationTypes>();

  companyId: number;

  constructor(
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        this.emitDeletePoint.emit(this.type);
      }
    });
  }

  addMeeting() {
    this.locationMeetings.push({
      company: null,
      contacts: []
    });
  }

  updateMeeting() {
    this.meetingsChanged.emit(this.locationMeetings);
  }


  deleteMeeting(meetingToDelete: BusinessTripLocationMeeting, index: number) {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        this.locationMeetings.splice(index, 1);
        this.updateMeeting();
      }
    });
  }
}
