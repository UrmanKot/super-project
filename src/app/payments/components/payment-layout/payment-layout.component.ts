import {Component, OnInit} from '@angular/core';
import {NavigationLink} from "../../../layout/navigation-route";

@Component({
  selector: 'pek-payment-layout',
  templateUrl: './payment-layout.component.html',
  styleUrls: ['./payment-layout.component.scss']
})
export class PaymentLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Payments', commands: ['payments']},
    {label: 'Delivery', commands: ['delivery']}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
