import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-correspondent-layout',
  templateUrl: './correspondent-layout.component.html',
  styleUrls: ['./correspondent-layout.component.scss']
})
export class CorrespondentLayoutComponent implements OnInit {
  routes: NavigationLink[] = [
    {label: 'Incoming Correspondents', commands: ['incoming-correspondent']},
    {label: 'Outgoing Correspondents', commands: ['outgoing-correspondent']}
  ];

  settingsRoutes: NavigationLink[] = [
    {label: 'Incoming Categories', commands: ['incoming-categories']},
    {label: 'Outgoing Categories', commands: ['outgoing-categories']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
