import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appMiddleMouseClick]'
})
export class MiddleMouseClickDirective {
  // tslint:disable-next-line:no-output-rename
  @Output('middleclick') middleclick = new EventEmitter();

  constructor() {}

  @HostListener('mouseup', ['$event'])
  middleClickEvent(event) {
    if (event.button === 1) {
      this.middleclick.emit(event);
    }
  }
}
