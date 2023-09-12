import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {AuthService} from '../../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {SalesChainService} from '../../../sales/services/sales-chain-service';
import {DeliveryChainService} from '../../../warehouse/services/delivery-chain.service';
import {Table} from 'primeng/table';
import {environment} from '@env/environment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {GroupedRequest} from '../../../warehouse/models/grouped-request';
import {SalesReservation} from '../../../sales/models/sales-chain';
import {LocatorService} from '../../../warehouse/services/locator.service';
import {Locator} from '../../../warehouse/models/locator';
import {DeliveryChain} from "../../../delivery-chains/models/delivery-chain";

@UntilDestroy()
@Component({
  selector: 'pek-qc-delivery-chain',
  templateUrl: './qc-delivery-chain.component.html',
  styleUrls: ['./qc-delivery-chain.component.scss']
})
export class QcDeliveryChainComponent implements OnInit, OnDestroy {
  @ViewChild('dt') dateTable: Table;
  link = environment.link_url + 'dash/';

  isShowPrint = false;

  destroy$ = new Subject();

  qc_delivery_status: any;

  QC_STAGES = {
    "qty_control": 1,
    "packing_control": 2,
    "done": 3
  };

  currentReqDate: Date = null;
  selectedProducts: SalesReservation | SalesReservation[] | any = null;

  isLoading = true;
  chain: DeliveryChain;
  products: SalesReservation[] = [];
  locators: Locator[] = [];
  listProducts: SalesReservation[] = [];
  chainId: number = parseInt(this.route.snapshot.paramMap.get('id'));
  firstPage = 0;

  constructor(
    private deliveryService: DeliveryChainService,
    private salesChainService: SalesChainService,
    public readonly auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly modalService: ModalService,
    private readonly locatorService: LocatorService,
  ) {
  }

  ngOnInit(): void {
    this.getDeliveryChain();
    this.getItems();
    this.getLocators();
  }

  getDeliveryChain() {
    this.deliveryService.getChainById(this.chainId).subscribe(chain => {
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
    this.selectedProducts = [];
    this.deliveryService.getDeliveryItems(this.chainId).subscribe(products => {
      this.products = products;
    });
  }

  complete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isLoading = false;
        this.deliveryService.completeDeliveryQc(+this.chainId).pipe(untilDestroyed(this)).subscribe(() => this.router.navigate(['../../'], {relativeTo: this.route}));
      }
    });
  }

  onUpdateItems(product: SalesReservation, qc_stage: number, confirmation_flag: boolean) {
    let listId = []
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      listId.push(product.id);
      const requestData = {
        "reservation_ids": listId,
        "chain_qc_delivery_status_id": this.chain.qc_delivery_status.id,
        "confirmation_flag": confirmation_flag,
        "qc_stage": qc_stage
      }
      this.salesChainService.updateItem(requestData).pipe(untilDestroyed(this)).subscribe(() => {
        this.getDeliveryChain();
        this.getItems();
      });
    })
  }

  onResetConfirmation() {
    let listId = []
    this.selectedProducts.forEach(product => {
      listId.push(product.id);
    });
    const requestData = {
      "reservation_ids": listId,
    }
    this.salesChainService.resetConfirmation(requestData).pipe(untilDestroyed(this)).subscribe(() => {
      this.getDeliveryChain();
      this.getItems();
    });
  }

  onCompleteMaterialQcList(qc_stage: number) {
    let listId = []
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.selectedProducts.forEach(product => {
        listId.push(product.id);
      });
      const requestData = {
        "reservation_ids": listId,
        "qc_stage": qc_stage,
      }
      this.salesChainService.updateItem(requestData).pipe(untilDestroyed(this)).subscribe(() => {
        this.getDeliveryChain();
        this.getItems();
      });
    })
  }

  onGoToChainLink() {
    window.open(`/delivery-chains/chains/${this.chainId}`);
  }

  printPage() {
    this.isShowPrint = true;
    setTimeout(() => {
      window.print();
    });
  }

  @HostListener("window:afterprint", [])
  onWindowAfterPrint() {
    this.isShowPrint = false;
  }

  @HostListener('afterprint') printClosed() {
    this.isShowPrint = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  translateLocator(id: number) {
    if (!this.locators) {
      return id;
    }
    const locator = this.locators.find(loc => loc.id === id);
    return `${locator.name} R:${locator.row} C:${locator.column} S:${locator.shelf} P:${locator.place}`;
  }
}
