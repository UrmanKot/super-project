import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeliveryChain} from '../../../models/delivery-chain';
import {ActivatedRoute, Router} from '@angular/router';
import {DeliveryChainService} from '../../../services/delivery-chain.service';
import {finalize, map, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {environment} from '@env/environment.prod';
import {LocatorService} from '../../../services/locator.service';
import {Locator} from '../../../models/locator';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-warehouse-shipping-request',
  templateUrl: './warehouse-shipping-request.component.html',
  styleUrls: ['./warehouse-shipping-request.component.scss']
})
export class WarehouseShippingRequestComponent implements OnInit, OnDestroy {
  isLoading = true;

  chainId: number;
  chain: DeliveryChain;
  products: any[] = [];
  locators: Locator[] = [];
  link = environment.link_url + 'dash/';

  isCompleting = false;

  private destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deliveryService: DeliveryChainService,
    private locatorService: LocatorService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.chainId = +id),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getDeliveryChain();
      this.getItems();
      this.getLocators();
    });
  }

  getDeliveryChain() {
    this.deliveryService.getById(this.chainId).subscribe(chain => {
      this.chain = chain;
      this.isLoading = false;
    });
  }

  getLocators() {
    this.locatorService.get().subscribe(locators => {
      this.locators = locators;
    });
  }

  getItems() {
    this.deliveryService.getDeliveryItems(this.chainId).subscribe(products => {
      this.products = products;
    });
  }

  onGoToChainLink() {
    window.open(`${this.link}delivery-chains/${this.chainId}`);
  }

  onComplete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isCompleting = true;
        this.deliveryService.complete(this.chainId).pipe(
          finalize(() => this.isCompleting = false)
        ).subscribe(() => {
          this.router.navigate(['../'], {relativeTo: this.route});
        });
      }
    });
  }

  onPrint() {
    window.print();
  }

  translateLocator(id: number) {
    if (!this.locators) {
      return id;
    }
    const locator = this.locators.find(loc => loc.id === id);
    return `${locator.name} R:${locator.row} C:${locator.column} S:${locator.shelf} P:${locator.place}`;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
