import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {asyncScheduler, fromEvent, takeUntil} from 'rxjs';

@Directive({
  selector: '[pekClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();
  public onClick;

  constructor(
    private elementRef: ElementRef,
  ) {
    asyncScheduler.schedule(() => this.init());
  }

  init() {
    // takeUntil(this.destroy$),
    fromEvent(document, 'click').pipe(
    ).subscribe(({target}) => {
      const clickedInside = this.elementRef.nativeElement.contains(target);
      // console.log('clickedInside', clickedInside);
      if (!clickedInside) this.clickOutside.emit();
    });
  }
}
