import {Injectable} from '@angular/core';
import {EventCompany} from "../../crm/models/event-company";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "@env/environment";
import {EditEventModalComponent} from "../modals/edit-event-modal/edit-event-modal.component";

@Injectable({
  providedIn: 'root'
})
export class EventSalesChainService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'event_companies/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {

  }

  updateEvent(eventId: number, person: EventCompany): Observable<EventCompany> {
    return this.httpClient.patch<{ data: EventCompany }>(this.API_URL + this.url + eventId + '/', person).pipe(
      map(response => response.data)
    )
  }

  deleteEvent(person: EventCompany) {
    return this.httpClient.delete(this.API_URL + this.url + `${person.id}/`)
  }

  updateComment(eventId: number, person) {
    return this.httpClient.patch(this.API_URL + this.url + `${eventId}/`, person)
  }

  editCompanyToEvent(eventCompany: EventCompany): Observable<any> {
    return this.dialog
      .open<EditEventModalComponent>(EditEventModalComponent, {
        width: '800px',
        data: {type: 'edit', eventCompany},
        disableClose: true,
      })
      .afterClosed()
      .pipe();
  }
}
