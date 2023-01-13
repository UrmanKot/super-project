import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusinessTripsLayoutComponent} from './components/layouts/business-trips-layout/business-trips-layout.component';
import {BusinessTripsComponent} from './components/business-trips/business-trips.component';
import {EditBusinessTripComponent} from './components/edit-business-trip/edit-business-trip.component';
import {VehiclesComponent} from './components/layouts/vehicles/vehicles.component';
import {ExpansesComponent} from './components/layouts/expanses/expanses.component';

const routes: Routes = [{
  path: '', component: BusinessTripsLayoutComponent, children: [
    {
      path: 'trips',
      title: 'Business Trips',
      component: BusinessTripsComponent
    },
    {
      path: 'trip/edit/:tripId',
      data: {isVerify: false},
      title: 'Edit Business Trip',
      component: EditBusinessTripComponent
    },
    {
      path: 'trip/verify/:tripId',
      data: {isVerify: true},
      title: 'Verify Business Trip',
      component: EditBusinessTripComponent
    },
    {
      path: 'vehicles',
      title: 'Business Trip Vehicles',
      component: VehiclesComponent
    },
    {
      title: 'Business Trip Expenses',
      path: 'expenses',
      component: ExpansesComponent
    },
    {
      path: '**',
      redirectTo: 'trips'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessTripsRoutingModule { }
