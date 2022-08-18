import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pek-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isNavigationHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavigationVisibility(isHidden: boolean) {
    this.isNavigationHidden = isHidden;
  }

}
