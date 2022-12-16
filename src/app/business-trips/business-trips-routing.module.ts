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
      component: BusinessTripsComponent
    },
    {
      path: 'trip/edit/:tripId',
      data: {isVerify: false},
      component: EditBusinessTripComponent
    },
    {
      path: 'trip/verify/:tripId',
      data: {isVerify: true},
      component: EditBusinessTripComponent
    },
    {
      path: 'vehicles',
      component: VehiclesComponent
    },
    {
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
