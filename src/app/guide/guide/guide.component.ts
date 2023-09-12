import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {environment} from '@env/environment';
import {ResizeEvent} from "angular-resizable-element";

export type GuideFlowType =
  'all'
  | 'qc'
  | 'sales'
  | 'outsource'
  | 'procurement'
  | 'production'
  | 'warehouse'
  | 'confirmation'
  | 'product-structure';

export type GuideType = 'flow' | 'map' | 'glossary'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit, AfterViewInit, OnDestroy {
  guideType: GuideType = 'flow';

  instructionWidth = 400;

  routerSub: Subscription;
  @ViewChild('guidePanel') guidePanel: ElementRef;

  guideTitle = 'Select a module or process to get more information';

  guideFlowType: GuideFlowType = 'all';

  showLorem = false;

  zoom = 1;

  isFullScreen = false;

  isShowInstruction = true;


  constructor(
    private router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialogRef: MatDialogRef<GuideComponent>,
  ) {
    this.routerSub = this.router.events.pipe(
    ).subscribe(evt => {
    });
  }

  get allGuideMargin() {
    switch (this.zoom) {
      case 0.7:
        return '1rem -21rem -10rem'
      case 0.8:
        return '14rem -14rem -6rem'
      case 0.9:
        return '24rem -7rem -3rem'
      case 1:
        return '35rem 0 0 0'
      case 1.1:
        return '45rem 0 0 8rem'
      case 1.2:
        return '55rem 0 0 15rem'
      case 1.3:
        return '62rem 0 0 22rem'
      case 1.4:
        return '70rem 0 0 29rem'
    }
  }

  get qcGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  get salesGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  get outsourceGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  get procurementGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  get productionGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  get confirmationGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  get warehouseGuideMargin() {
    switch (this.zoom) {
      case 1.1:
        return '-3rem 0 0 8rem'
      case 1.2:
        return '-3rem 0 0 8rem'
      case 1.3:
        return '-3rem 0 0 8rem'
      case 1.4:
        return '-4rem 0 0 11rem'
    }
  }

  changeRoute(url: string) {
    this.choiceType(url);
  }

  goToLinkWindow(link: string) {
    this.hideGuide();

    setTimeout(() => {
      window.open(environment.link_url + link.slice(1) + '?showGuide=true', '_self');
    }, 400);
  }

  goToLink(link: string) {
    this.hideGuide();

    setTimeout(() => {
      this.router.navigate([link]);
      this.changeRoute(link);
    }, 600);

    setTimeout(() => {
      this.openGuide();
    }, 1500);
  }

  hideGuide() {
    document.querySelector('.guide-modalbox').classList.add('guide-modalbox_hide');
  }

  openGuide() {
    document.querySelector('.guide-modalbox').classList.remove('guide-modalbox_hide');
  }

  ngOnInit(): void {
    this.choiceType(this.router.url);
  }

  ngAfterViewInit() {
    this.drag();
  }

  drag() {
    const panel = this.guidePanel.nativeElement;
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    panel.addEventListener('mousedown', (e) => {
      isDown = true;
      panel.style.cursor = 'grabbing';

      startX = e.pageX - panel.offsetLeft;
      startY = e.pageY - panel.offsetTop;

      scrollLeft = panel.scrollLeft;
      scrollTop = panel.scrollTop;
    });
    panel.addEventListener('mouseleave', () => {
      isDown = false;
      panel.style.cursor = 'grab';
    });
    panel.addEventListener('mouseup', () => {
      isDown = false;
      panel.style.cursor = 'grab';
    });
    panel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - panel.offsetLeft;
      const y = e.pageY - panel.offsetTop;

      const walkX = (x - startX) * 0.75;
      const walkY = (y - startY) * 0.75;

      panel.scrollLeft = scrollLeft - walkX;
      panel.scrollTop = scrollTop - walkY;
    });
  }

  choiceType(url: string) {
    if (url.includes('quality-control')) {
      this.guideFlowType = 'qc';
      this.showLorem = true;
    } else if (url.includes('sales')) {
      this.guideFlowType = 'sales';
    } else if (url.includes('outsourcing')) {
      this.guideFlowType = 'outsource';
    } else if (url.includes('procurement')) {
      this.guideFlowType = 'procurement';
    } else if (url.includes('manufacturing')) {
      this.guideFlowType = 'production';
    } else if (url.includes('confirmation')) {
      this.guideFlowType = 'confirmation';
    } else if (url.includes('warehouse')) {
      this.guideFlowType = 'warehouse';
    } else if (url.includes('product-structure')) {
      this.guideFlowType = 'product-structure';
    } else {
      this.showLorem = false;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  onBack() {
    this.hideGuide();

    setTimeout(() => {
      this.guideFlowType = 'all';
      this.router.navigate(['/dash']);
    }, 600);

    setTimeout(() => {
      this.openGuide();
    }, 1500);
  }

  plusScale() {
    this.zoom += 0.1;
    this.zoom = Math.round(this.zoom * 10) / 10
  }

  minusScale() {
    this.zoom -= 0.1;
    this.zoom = Math.round(this.zoom * 10) / 10
  }

  @HostListener('window:keydown.escape', ['$event'])
  closeImageModalKeyDown() {
    const imageBlock = document.querySelector('.guide__image-box');
    if (imageBlock.classList.contains('guide__image-box_open')) {
      imageBlock.classList.remove('guide__image-box_open');
    }
  }

  closeImageModal() {
    const imageBlock = document.querySelector('.guide__image-box');
    imageBlock.classList.remove('guide__image-box_open');
  }

  onChoiceGuideType(type: GuideType) {
    this.closeFullScreen()

    this.guideType = type;

    if (type === 'flow') {
      setTimeout(() => this.drag());
    }

  }

  goToFullScreen() {
    this.isFullScreen = true;
    const modal = document.querySelector('.guide-modalbox');
    modal.classList.add('guide-modalbox_full');
  }

  closeFullScreen() {
    this.isFullScreen = false;
    const modal = document.querySelector('.guide-modalbox');
    modal.classList.remove('guide-modalbox_full');
  }

  toggleInstruction() {
    this.isShowInstruction = !this.isShowInstruction
  }

  moveInstruction(event: ResizeEvent) {
  }

  onResizeEnd($event: ResizeEvent) {
    this.instructionWidth = $event.rectangle.width
  }
}
