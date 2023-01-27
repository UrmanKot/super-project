import { Injectable } from '@angular/core';
import {CreateEditCountryComponent} from '../modals/create-edit-country/create-edit-country.component';
import {ModalActionType} from '@shared/models/modal-action';
import {SalesStatus} from '../models/sales-chain';
import {Observable} from 'rxjs';
import {CreateEditSalesStatusComponent} from '../modals/create-edit-sales-status/create-edit-sales-status.component';
import {MatDialog} from '@angular/material/dialog';
import {Country} from '@shared/models/country';
import {CreateEditRegionComponent} from '../modals/create-edit-region/create-edit-region.component';
import {Region} from '@shared/models/region';

@Injectable({
  providedIn: 'root'
})
export class CountryRegionService {

  constructor(
    private readonly dialog: MatDialog,
  ) { }

  createEditCountryModal(country?: Country): Observable<boolean> {
    return this.dialog
      .open<CreateEditCountryComponent>(CreateEditCountryComponent, {
        width: '35rem',
        height: 'auto',
        data: {country},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditRegionModal(region?: Region, selectedCountry?: number): Observable<boolean> {
    return this.dialog
      .open<CreateEditRegionComponent>(CreateEditRegionComponent, {
        width: '35rem',
        height: 'auto',
        data: {region, selectedCountry},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

