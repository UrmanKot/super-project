import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {environment} from '@env/environment.prod';

export type GuideType =
  'all'
  | 'qc'
  | 'sales'
  | 'outsource'
  | 'procurement'
  | 'production'
  | 'warehouse'
  | 'confirmation'
  | 'product-structure';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit, AfterViewInit, OnDestroy {
  routerSub: Subscription;
  @ViewChild('guidePanel') guidePanel: ElementRef;
  envir = environment;

  guideTitle = 'Select a module or process to get more information';

  guideType: GuideType = 'all';

  showLorem = false;

  zoom = 1;

  constructor(
    private router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialogRef: MatDialogRef<GuideComponent>,
  ) {
    this.routerSub = this.router.events.pipe(
    ).subscribe(evt => {
    });
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
      this.guideType = 'qc';
      this.showLorem = true;
    } else if (url.includes('sales')) {
      this.guideType = 'sales';
    } else if (url.includes('outsource')) {
      this.guideType = 'outsource';
    } else if (url.includes('procurement')) {
      this.guideType = 'procurement';
    } else if (url.includes('production')) {
      this.guideType = 'production';
    } else if (url.includes('confirmation')) {
      this.guideType = 'confirmation';
    } else if (url.includes('warehouse')) {
      this.guideType = 'warehouse';
    } else if (url.includes('product-structure')) {
      this.guideType = 'product-structure';
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
      this.guideType = 'all';
      this.router.navigate(['/dash']);
    }, 600);

    setTimeout(() => {
      this.openGuide();
    }, 1500);
  }

  plusScale() {
    this.zoom += 0.1;
  }

  minusScale() {
    this.zoom -= 0.1;
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
}
