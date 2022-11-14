import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pek-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit {
  @Input() value: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
