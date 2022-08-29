import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-confirmation-layout',
  templateUrl: './confirmation-layout.component.html',
  styleUrls: ['./confirmation-layout.component.scss']
})
export class ConfirmationLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Nomenclature Confirmation', commands: ['nomenclature']},
    {label: 'Payment Confirmation', commands: ['payment']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
