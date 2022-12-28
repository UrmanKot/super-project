import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-instruments-layout',
  templateUrl: './instruments-layout.component.html',
  styleUrls: ['./instruments-layout.component.scss']
})
export class InstrumentsLayoutComponent implements OnInit {
  routes: NavigationLink[] = [
    {label: 'Instruments And Tools', commands: ['instruments-and-tools']},
    {label: 'Areas', commands: ['areas']},
    {label: 'Tool Request', commands: ['tool-request']}
  ];

  settingsRoutes: NavigationLink[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
