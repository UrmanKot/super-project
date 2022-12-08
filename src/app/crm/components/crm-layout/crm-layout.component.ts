import {Component, OnInit} from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-crm-layout',
  templateUrl: './crm-layout.component.html',
  styleUrls: ['./crm-layout.component.scss']
})
export class CrmLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Company Card', commands: ['business-partners']},
    {label: 'Events', commands: ['events']},
    {label: 'Events Reports', commands: ['events-reports']},
    {label: 'Schedules', commands: ['schedules']},
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Company Categories', commands: ['company-categories']},
    {label: 'Event Types', commands: ['event-types']},
    {label: 'Employees', commands: ['employees']},
    {label: 'External Event Types', commands: ['external-events']},
    {label: 'Users Profiles', commands: ['users-profiles']},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
