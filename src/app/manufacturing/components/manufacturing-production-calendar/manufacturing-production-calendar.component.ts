import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Holiday} from '../../models/calendar';
import {CalendarService} from '../../services/calendar.service';
import {AdapterService} from '@shared/services/adapter.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-manufacturing-production-calendar',
  templateUrl: './manufacturing-production-calendar.component.html',
  styleUrls: ['./manufacturing-production-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManufacturingProductionCalendarComponent implements OnInit {
  weekendDates: Date[];
  holidays: Holiday[];
  defaultDate: Date = new Date();
  isSaving = false;

  constructor(
    private calendar: CalendarService,
    private adapterService: AdapterService
  ) {
  }

  ngOnInit(): void {
    console.log(new Date());
    this.defaultDate = new Date();
    this.getDates();
  }

  getDates() {
    this.calendar.getDates().subscribe(dates => {
      dates = dates.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      if (dates.length > 0) {
        this.weekendDates = dates.map(date => {
          const dd = new Date(date.date).setHours(0, 0, 0, 0);
          return new Date(dd);
        });
      } else {
        this.weekendDates = null;
      }

      this.holidays = dates.map(date => {
        date.date = new Date(new Date(date.date).setHours(0, 0, 0, 0));
        return date;
      });
    });
  }

  save() {
    this.isSaving = true;
    let addedDates = [];
    const deletedDates = [];

    if (this.weekendDates) {
      this.weekendDates.forEach(w => {
        if (!this.holidays.find(h => h.date.getTime() === w.getTime())) {
          addedDates.push(w);
        }
      });
    }

    if (this.weekendDates) {
      this.holidays.forEach(holiday => {
        if (!this.weekendDates.find(d => d.getTime() === holiday.date.getTime())) {
          deletedDates.push(holiday);
        }
      });
    } else {
      this.holidays.forEach(holiday => deletedDates.push(holiday));
    }

    if (addedDates.length > 0) {
      addedDates = addedDates.map(date => {
        return {
          date: this.adapterService.dateAdapter(date)
        };
      });
      this.calendar.saveDates(addedDates).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe((holidays) => {
        holidays.forEach(holiday => {
          this.holidays.push({
            id: holiday.id,
            date: new Date((new Date(holiday.date).setHours(0, 0, 0, 0)))
          });
        });
      });
    }

    if (deletedDates.length > 0) {
      this.calendar.deleteDates(deletedDates).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        deletedDates.forEach(date => {
          const index = this.holidays.findIndex(h => h.id === date.id);
          this.holidays.splice(index, 1);
        });
      });
    }

    if (!deletedDates.length && !addedDates.length) {
      this.isSaving = false;
    }
  }

}
