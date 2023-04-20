import { Directive, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[pekTippy]'
})
export class TippyDirective implements OnInit, OnDestroy {
  @Input() content: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    tippy(this.elementRef.nativeElement, {
      content: this.content,
      allowHTML: true,
      interactive: true,
      duration: 0,
      placement: 'right',
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    tippy(this.elementRef.nativeElement).destroy();
  }
}
