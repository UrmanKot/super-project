import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-confirmation-layout',
  templateUrl: './confirmation-layout.component.html',
  styleUrls: ['./confirmation-layout.component.scss'],
})
export class ConfirmationLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Nomenclature Confirmation', commands: ['nomenclature']},
    {label: 'Payments Confirmation', commands: ['payments']},
    {label: 'Write Off Confirmation', commands: ['write-off']},
    {label: 'Production Lists Confirmation', commands: ['production-lists']},
    {label: 'Suppliers Confirmation', commands: ['suppliers']},
    {label: 'Reservations Confirmation', commands: ['reservations']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
