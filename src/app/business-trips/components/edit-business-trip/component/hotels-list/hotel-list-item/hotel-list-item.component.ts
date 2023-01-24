import {Component, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {HotelFiles} from '../../../../../models/hotel-files';
import {BusinessTripService} from '../../../../../services/business-trip.service';
import {BusinessTripHotelFilesService} from '../../../../../services/business-trip-hotel-files.service';
import {BusinessTripHotel} from '../../../../../models/business-trip-hotel';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {UploadFilePickerComponent} from '@shared/components/upload-file-picker/upload-file-picker.component';
import {BusinessTripCountry} from '../../../../../models/business-trip-country';
import {debounceTime, map} from 'rxjs/operators';
import {AdapterService} from '@shared/services/adapter.service';
import {BusinessTripHotelService} from '../../../../../services/business-trip-hotel.service';
import {BusinessTrip} from '../../../../../models/business-trip';

@Component({
  selector: 'pek-hotel-list-item',
  templateUrl: './hotel-list-item.component.html',
  styleUrls: ['./hotel-list-item.component.scss']
})
export class HotelListItemComponent implements OnInit, OnDestroy {
  @ViewChild('filePicker') filePicker: UploadFilePickerComponent;
  hotelChanged: Subject<void> = new Subject<void>();
  selectedHotelFile: HotelFiles;
  preparedFiles: HotelFiles[];
  @Input() tripHotel: BusinessTripHotel;
  private destroy$ = new Subject();
  showFilePicker = true;
  @Input() businessTripId: number;
  @Output() hotelUpdated: Subject<BusinessTripHotel> = new Subject<BusinessTripHotel>();
  @Output() hotelDeleted: Subject<void> = new Subject<void>();

  menuItems: MenuItem[] = [{
    label: 'Selected Hotel Files',
    items: [
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteFile()
      }
    ]
  }];

  hotelEndDate = null;
  hotelStartDate = null;
  startDate = null;
  endDate = null;

  constructor(
    private businessService: BusinessTripService,
    private businessTripHotelService: BusinessTripHotelService,
    private businessTripHotelFilesService: BusinessTripHotelFilesService,
    private modalService: ModalService,
    private adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    if (this.tripHotel.residence_start) {
      this.startDate = new Date(this.tripHotel.residence_start);
    }
    if (this.tripHotel.residence_end) {
      this.endDate = new Date(this.tripHotel.residence_end);
    }
    if (this.tripHotel.id) {
      this.loadHotelFiles(this.tripHotel.id);
    }

    this.hotelChanged.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe(() => {
      this.updateHotel();
    });
  }


  updateHotel() {
    const updatedHotel: BusinessTripHotel = {
      residence_start: this.tripHotel.residence_start ? this.tripHotel.residence_start : null,
      residence_end: this.tripHotel.residence_end ? this.tripHotel.residence_end : null,
      address: this.tripHotel.address,
      country: (this.tripHotel.country as BusinessTripCountry)?.code,
      name: this.tripHotel.name,
      id: this.tripHotel.id,
      business_trip: this.businessTripId,
    };
    if (!updatedHotel.name || !updatedHotel.country) {
      return;
    }

    if (updatedHotel.id) {
      this.businessTripHotelService
        .update(updatedHotel.id, updatedHotel)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => {
          this.hotelUpdated.next(this.tripHotel);
        });
    } else {
      this.businessTripHotelService
        .create(updatedHotel)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => {
          this.tripHotel.id = res.id;
          this.hotelUpdated.next(this.tripHotel);
        });
    }
  }

  get country(): string {
    return this.tripHotel.country ? (this.tripHotel.country as BusinessTripCountry).code : null;
  }

  get start_date(): Date {
    return this.tripHotel.residence_start ? new Date(this.tripHotel.residence_start) : null;
  }

  get end_date(): Date {
    return this.tripHotel.residence_end ? new Date(this.tripHotel.residence_end) : null;
  }

  viewHotelFiles() {
    const data: { links: any, files: any } = {links: this.preparedFiles, files: []};
    this.businessService.viewBusinessTripFiles(data);
  }

  loadHotelFiles(hotelId: number) {
    this.businessTripHotelFilesService.get([{
      name: 'business_trip_hotel_id',
      value: hotelId
    }]).pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.preparedFiles = response;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  clickHotelOutside(type) {
    if (this.endDate?.getTime() !== this.hotelStartDate?.getTime()) {
      this.tripHotel.residence_end = this.hotelStartDate;
    }
    if (this.endDate?.getTime() !== this.hotelEndDate?.getTime()) {
      this.tripHotel.residence_end = this.hotelEndDate;
    }
  }

  setHotelStartValue(start) {
    this.tripHotel.residence_start = this.adapterService.dateAdapter(start);
    if (start) {
      this.hotelStartDate = start;
      this.startDate = new Date(this.tripHotel.residence_start);
      if (this.tripHotel.residence_end &&
        this.tripHotel.residence_end < this.tripHotel.residence_start) {
        this.setHotelEndValue(this.tripHotel.residence_start);
      }
    }
  }

  setHotelEndValue(end) {
    if (end) {
      this.tripHotel.residence_end = this.adapterService.dateAdapter(end);
      this.hotelEndDate = end;
    }
  }

  filesChanged(files: File[]) {
    if (files.length > 0) {
      this.tripHotel.files = files;
      setTimeout(() => {
        this.updateFiles();
      }, 1000);
    }
  }

  updateFiles() {
    this.showFilePicker = false;
    const data = [];
    this.tripHotel.files.forEach(file => {
      data.push({
        file: file,
        business_trip_id: this.tripHotel.id
      });
    });

    const send = {
      files: this.tripHotel.files,
      id: this.tripHotel.id
    };
    const result = this.obj2FormData(send);
    this.businessTripHotelFilesService.add_hotel_files(result).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.loadHotelFiles(this.tripHotel.id);
      this.filePicker.clearFiles();
    });
  }

  formData = new FormData();

  obj2FormData(obj, formData = new FormData()) {
    this.formData = formData;
    this.createFormData(obj);
    return this.formData;
  }

  createFormData(obj, subKeyStr = '') {
    for (const i in obj) {
      const value = obj[i];
      const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

      if (typeof (value) === 'string' || typeof (value) === 'number' || typeof (value) === 'boolean') {
        // @ts-ignore
        this.formData.append(subKeyStrTrans, value);

      } else if (typeof (value) === 'object') {
        if (value instanceof File) {
          this.formData.append(subKeyStrTrans, value);
        } else {
          this.createFormData(value, subKeyStrTrans);
        }
      }
    }
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  deleteFile() {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.businessTripHotelFilesService.delete(this.selectedHotelFile).pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.selectedHotelFile = null;
          this.loadHotelFiles(this.tripHotel.id);
        });
      }
    });
  }

  fileAdded(file: File) {
    this.tripHotel.files = [file];
    setTimeout(() => {
      this.updateFiles();
    }, 1000);
  }

  deleteHotel() {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        if (this.tripHotel.id) {
          this.businessTripHotelService
            .delete(this.tripHotel)
            .pipe(takeUntil(this.destroy$))
            .subscribe(res => {
              this.hotelDeleted.next();
            });
        } else {
          this.hotelDeleted.next();
        }
      }
    });
  }
}
