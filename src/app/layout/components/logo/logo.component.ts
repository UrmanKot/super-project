import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pek-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() module: string;

  constructor() { }

  ngOnInit(): void {
  }

}
