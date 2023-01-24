import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {BusinessTripHotel} from '../../../../models/business-trip-hotel';
import {BusinessTripHotelService} from '../../../../services/business-trip-hotel.service';
import {Subject, takeUntil} from 'rxjs';
import {BusinessTripExpense} from '../../../../models/business-trip-expense';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'pek-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() tripHotels: BusinessTripHotel[] = [];
  @Input() businessTripId: number;
  @Output() currentBusinessTripHotels: EventEmitter<BusinessTripHotel[]> = new EventEmitter<BusinessTripHotel[]>();
  private destroy$ = new Subject();

  constructor(
    private businessTripHotelService: BusinessTripHotelService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {

  }



  ngOnChanges(changes: SimpleChanges): void {
    if (this.businessTripId) {
      this.getBusinessTripHotels();
    }
  }

  getBusinessTripHotels() {
    this.businessTripHotelService.get([{
      name: 'business_trip',
      value: this.businessTripId
    }]).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.tripHotels = res;
      this.currentBusinessTripHotels.emit(this.tripHotels);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  hotelUpdated(hotel: BusinessTripHotel, $event: BusinessTripHotel) {
    hotel = $event;
    this.currentBusinessTripHotels.emit(this.tripHotels);
  }

  public addHotel() {
    const hotel = new BusinessTripHotel();
    this.tripHotels.push(hotel);
    this.messageService.add({severity: 'success', summary: 'Hotel Added', detail: `Hotel added to the list`});
  }
}
