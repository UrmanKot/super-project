import {Component, OnInit} from '@angular/core';
import {NavigationLink} from "../../../layout/navigation-route";

@Component({
  selector: 'pek-delivery-chains-layout',
  templateUrl: './delivery-chains-layout.component.html',
  styleUrls: ['./delivery-chains-layout.component.scss']
})
export class DeliveryChainsLayoutComponent implements OnInit {
  routes: NavigationLink[] = [
    {label: 'Delivery Chains', commands: ['chains']},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
