import { Component, OnInit } from '@angular/core';
import {NavigationLink} from '../../../layout/navigation-route';

@Component({
  selector: 'pek-product-structure-layout',
  templateUrl: './product-structure-layout.component.html',
  styleUrls: ['./product-structure-layout.component.scss']
})
export class ProductStructureLayoutComponent implements OnInit {

  routes: NavigationLink[] = [
    {label: 'Products', commands: ['products']},
    {label: 'Technologies', commands: ['technologies']},
    {label: 'Prefixes', commands: ['prefixes']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
