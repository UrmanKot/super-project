import {Component, OnInit} from '@angular/core';
import {EventCompany} from "../../../crm/models/event-company";
import {SalesActivity, SalesChain, SalesFile, SalesReservation} from "../../models/sales-chain";
import {environment} from '@env/environment';
import {CompanyService} from "../../../crm/services/company.service";
import {finalize, map, tap} from "rxjs/operators";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {Invoice} from "../../../procurement/models/invoice";
import {SalesChainService} from "../../services/sales-chain-service";
import {SalesStatusService} from "../../services/sales-status.service";
import {MenuItem} from "primeng/api";
import {ModalService} from "@shared/services/modal.service";
import {EventSalesChainService} from "../../services/event-sales-chain.service";
import {AdapterService} from "@shared/services/adapter.service";
import {SalesFileService} from "../../services/sales-file.service";
import {DeliveryChainService} from "../../../warehouse/services/delivery-chain.service";

@Component({
  selector: 'pek-sales-chain-page',
  templateUrl: './sales-chain-page.component.html',
  styleUrls: ['./sales-chain-page.component.scss']
})
export class SalesChainPageComponent implements OnInit {
  isLoading = true;
  saleChain: SalesChain;
  selectedEvent: EventCompany;
  statuses = {'0': 'Not Processed', '1': 'Completed', '2': 'Deficit', '3': 'Reserved'};
  isLoadingReservation = true;

  isCreatingOffer = false;
  isCreateingDelivery = false;

  isLoadingActivities = true;
  isActivities = true;
  isLoadingFiles = false;

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  invoices: Invoice[] = [];

  offers: any[] = [];
  selectedOffer: any = null;
  isLoadingOffers = true;

  destroy$ = new Subject();

  saleChainId: number;

  selectedSalesReservation: SalesReservation;

  salesReservation: SalesReservation[] = [];
  salesActivities: SalesActivity[] = [];

  environment = environment;

  files: SalesFile[] = []
  selectedFile: SalesFile;

  salesChainEvents: MenuItem[] = [{
    label: 'Selected Event',
    items: [
      {
        label: 'Confirm',
        icon: 'pi pi-check',
        command: () => this.onConfirmEvent(),
        disabled: true
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditEvent()
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.onDeleteEvent()
      },

    ]
  }];

  products: MenuItem[] = [{
    label: 'Selected Product',
    items: [
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.onDeleteProduct()
      }
    ]
  }]

  offersMenu: MenuItem[] = [{
    label: 'Selected Offer',
    items: [
      {
        label: 'Generate PDF (BACKEND)',
        icon: 'pi pi-file-pdf',
        command: () => this.generatePdf()
      },
      {
        label: 'Confirm Offer',
        icon: 'pi pi-check',
        command: () => this.confirmOffer()
      },
      {
        label: 'Edit Prices',
        icon: 'pi pi-pencil',
        command: () => this.editOfferPrices()
      },
      {
        label: 'Download (BACKEND)',
        icon: 'pi pi-download',
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.onDeleteOffer()
      }
    ]
  }]

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService,
    private salesChainService: SalesChainService,
    private salesStatus: SalesStatusService,
    private modalService: ModalService,
    private eventSalesChainService: EventSalesChainService,
    private adapterService: AdapterService,
    private salesFileService: SalesFileService,
    private deliveryService: DeliveryChainService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.saleChainId = +id),
    ).subscribe();

    this.getAll()
  }

  getChain() {
    if (this.isActivities) {
      this.isLoadingActivities = true;
      this.selectedEvent = null;
      this.salesActivities = [];
      this.isActivities = false;
    }

    this.salesChainService.getById(this.saleChainId).subscribe(saleChain => {
      this.saleChain = saleChain;

      this.salesActivities = saleChain.activities;
      this.salesActivities.sort((a, b) => {
        const dateA = new Date(a.event.start);
        const dateB = new Date(b.event.start);
        // @ts-ignore
        return (dateB - dateA);
      });
      this.isLoading = false;
      this.isLoadingActivities = false;
    })
  }

  getAll() {
    this.getChain();
    this.getReservation()
    this.getOffers()
    this.getAllFile()
  }

  getName(name) {
    let name_arr = name.split('/');
    return name_arr[name_arr.length - 1];
  }

  getReservation() {
    this.isLoadingReservation = true;
    this.selectedSalesReservation = null;
    this.salesReservation = [];
    this.salesChainService.getReservation(this.saleChainId).subscribe(salesReservation => {
      // @ts-ignore
      this.salesReservation = salesReservation
      this.isLoadingReservation = false;
    })
  }

  getOffers(): void {
    this.isLoadingOffers = true;
    this.offers = [];
    this.selectedOffer = null;
    this.salesChainService.getOffers(this.saleChainId)
      .subscribe(res => {
        this.offers = res;
        this.isLoadingOffers = false;
      });
  }

  onEditEvent() {
    this.eventSalesChainService.editCompanyToEvent(this.selectedEvent).subscribe(() => {
      this.isActivities = true;
      this.getChain()
    })
  }

  editChainStatus() {
    this.salesChainService.editSalesChainStatus(this.saleChain).subscribe(res => {
      if (res) {
        this.getChain()
      }
    })
  }

  onConfirmEvent() {
    this.modalService.confirm('success')
      .subscribe(confirm => {
          if (confirm) {
            this.eventSalesChainService.updateEvent(this.selectedEvent.id, {is_done: true} as EventCompany).subscribe(() => {
              this.isActivities = true;
              this.getChain()
            })
          }
        }
      )
  }

  onDeleteEvent() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventSalesChainService.deleteEvent(this.selectedEvent).subscribe(() => {
          this.salesActivities = this.salesActivities.filter(a => a.id !== this.selectedEvent.id)
          this.selectedEvent = null;
        })
      }
    })
  }

  onSelectedEvent() {
    if (this.selectedEvent) {
      this.salesChainEvents[0].items[0].disabled = this.selectedEvent.is_done !== false
    }
  }

  onDeleteProduct() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.salesChainService.deleteProduct(this.selectedSalesReservation.id).subscribe(() => {
          this.getReservation();
        })
      }
    })
  }

  onAddProduct() {
    this.salesChainService.createChoiceProduct(this.selectedSalesReservation).subscribe()
  }

  getAllFile() {
    this.isLoadingFiles = true;
    this.files = [];
    this.salesChainService.getFile().subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    })
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onAddFile() {
    this.salesChainService.createSalesFileModal(this.saleChainId).subscribe(file => {
      if (file) {
        this.getAllFile();
      }
    })
  }

  onDownloadFile(file: SalesFile) {
    this.addition.add(file.id)
    this.salesChainService.downloadFile(file).subscribe(response => {
      console.log(response)
      const filename = this.getFileName(file.file)
      this.adapterService.downloadFile(filename, response)
      this.addition.clear()
    })
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id)

        this.salesFileService.remove(id).subscribe(() => {
          this.files = this.files.filter(i => i.id != id)
          this.deletion.clear()
        })
      }
    })
  }

  hasConfirmedOffer() {
    return this.offers.some(value => value.is_confirmed);
  }

  onDeleteOffer() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.salesChainService.deleteOffer(this.saleChainId, this.selectedOffer.id).subscribe(() => {
          this.getOffers();
        })
      }
    })
  }

  onGenerateOffer() {
    this.salesChainService.getGenerateOffer(this.saleChainId).subscribe(res => {
      console.log(res)
    })
  }

  generateOffer() {
    this.isCreatingOffer = true;
    this.salesChainService.generateOffer(this.saleChainId)
      .pipe(
        finalize(() => this.isCreatingOffer = false)
      ).subscribe(res => {
      this.getOffers();
    });
  }

  onSelectOffer() {
    this.offersMenu[0].items[0].disabled = this.selectedOffer && !this.selectedOffer.is_confirmed;
    this.offersMenu[0].items[1].disabled = this.selectedOffer && this.selectedOffer.is_confirmed;
  }

  private generatePdf() {
  }

  confirmOffer() {
    this.salesChainService.confirmOffer(this.selectedOffer.id)
      .subscribe(res => {
        this.getOffers();
      });
  }

  createDeliveryChain() {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        this.isCreateingDelivery = true;
        const data = {
          sales_chain_id: Number(this.saleChainId),
          status: {
            id: 1,
            name: 'new',
          },
        };
        this.deliveryService.create(data).pipe(
          finalize(() => this.isCreateingDelivery = false)
        ).subscribe(res => {
          this.getChain()
        });
      }
    });
  }

  editOfferPrices() {
    this.salesChainService.editOfferPriceDialog(this.selectedOffer, this.saleChainId).subscribe(res => {
      if (res) {
        this.getOffers();
      }
    })
  }
}
