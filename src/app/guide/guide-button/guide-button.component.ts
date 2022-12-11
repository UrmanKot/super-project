import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '@env/environment.prod';

@Component({
  selector: 'pek-guide-button',
  templateUrl: './guide-button.component.html',
  styleUrls: ['./guide-button.component.scss']
})
export class GuideButtonComponent implements OnInit {
  @Input() btnStyle: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() title: string;
  @Input() routeUrl: string;
  @Input() buttonsPosition: 'left' | 'right' | 'top' | 'bottom';
  @Input() info: boolean;
  @Input() disabled = false;
  @Input() hideButtons = false;
  @Output() navigate: EventEmitter<string> = new EventEmitter<string>();
  @Output() getInfo: EventEmitter<any> = new EventEmitter<any>();

  env = environment

  constructor() {
  }

  ngOnInit(): void {
  }

  onNavigate() {
    if (this.routeUrl) {
      this.navigate.emit(this.routeUrl);
    }
  }

  onGetInfo() {
    if (this.info) {
      this.getInfo.emit();
    }
  }

}
