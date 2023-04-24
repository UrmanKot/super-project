import {Injectable} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {Holiday} from '../models/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  API_URL = environment.base_url + environment.production_url;

  private calendar = new Set<number>();
  calendarWeekendDays = [0, 6]; // выходные суббота и воскресенье

  constructor(
    private httpClient: HttpClient
  ) {
    this.getDates().subscribe((dates) => {
      const holidaysDates = dates.map(date => {
        const dd = new Date(date.date).setHours(0, 0, 0, 0);
        return {
          ...date,
          date: new Date(dd),
        };
      });
      this.calendar = new Set(holidaysDates.map(d => new Date(d.date).getTime()));
    });
  }

  saveDates(dates: Holiday[]): Observable<Holiday[]> {
    return this.httpClient.post<{ data: Holiday[] }>(this.API_URL + 'holidays/bulk_create/', dates).pipe(
      map(response => response.data)
    );
  }

  getDates(): Observable<Holiday[]> {
    return this.httpClient.get<{ data: Holiday[] }>(this.API_URL + 'holidays/').pipe(
      map(response => response.data)
    );
  }

  deleteDates(holidays): Observable<Holiday[]> {
    return forkJoin(...holidays.map(holiday => this.httpClient.delete<Holiday>(this.API_URL + 'holidays/' + `${holiday.id}/`, holiday.id)));
  }

  isVac(date: Date) {
    const dow = date.getDay();
    let isVac = this.calendarWeekendDays.includes(dow);
    if (this.calendar.has(date.getTime())) isVac = !isVac;
    return isVac;
  }
}
