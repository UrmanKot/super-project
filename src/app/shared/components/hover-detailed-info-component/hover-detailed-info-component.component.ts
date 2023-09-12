import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'pek-hover-detailed-info-component',
  templateUrl: './hover-detailed-info-component.component.html',
  styleUrls: ['./hover-detailed-info-component.component.scss']
})
export class HoverDetailedInfoComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('detailedContainer') detailedContainer: ElementRef;
  parentContainer: HTMLElement;
  element: HTMLElement;
  @Input() moveLeft = 0;
  @Input() align: 'left' | 'right' = 'right';
  interval;
  intervalMain;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.parentContainer = this.detailedContainer.nativeElement.parentElement.parentElement;
    this.element = this.detailedContainer.nativeElement;
    this.setPosition();
    this.parentContainer.addEventListener("mouseenter", (e) => {
      this.interval = setInterval(() => {
        this.setPosition();
      }, );
    });

    this.parentContainer.addEventListener("mouseover", (e) => {
    });

    this.parentContainer.addEventListener("mouseleave", (e) => {
      clearInterval(this.interval);
    });
  }

  private setPosition() {
    const top = this.parentContainer.getBoundingClientRect().top;

    const parentHeight = this.parentContainer.getBoundingClientRect().height;
    const elementHeight = this.element.getBoundingClientRect().height;
    const topPosition = (top + (parentHeight / 2)) - (elementHeight / 2);
    if (this.align === 'right') {
      const right = this.parentContainer.getBoundingClientRect().right;
      requestAnimationFrame(() => {
        this.element.setAttribute('style', `top: ${topPosition}px; left: ${right - this.moveLeft}px;`);
      });
    }
    if (this.align === 'left') {
      const left = this.parentContainer.getBoundingClientRect().left;
      requestAnimationFrame(() => {
        this.element.setAttribute('style', `top: ${topPosition}px; left: ${left - this.moveLeft}px;`);
      });
    }

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalMain);
  }
}
