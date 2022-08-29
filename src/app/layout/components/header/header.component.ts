import {Component, Input, OnInit} from '@angular/core';
import {NavigationLink} from '../../navigation-route';

@Component({
  selector: 'pek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() module: string;
  @Input() routes: NavigationLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
