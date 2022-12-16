import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../../layout/navigation-route';

@Component({
  selector: 'pek-business-trips-layout',
  templateUrl: './business-trips-layout.component.html',
  styleUrls: ['./business-trips-layout.component.scss']
})
export class BusinessTripsLayoutComponent implements OnInit {
  routes: NavigationLink[] = [
    {label: 'Business Trips', commands: ['trips']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Vehicles', commands: ['vehicles']},
    {label: 'Expenses', commands: ['expenses']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
