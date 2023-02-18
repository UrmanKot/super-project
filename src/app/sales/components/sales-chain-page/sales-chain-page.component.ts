import {Component, OnInit} from '@angular/core';
import {EventCompany} from "../../../crm/models/event-company";
import {SalesActivity, SalesChain, SalesFile, SalesReservation} from "../../models/sales-chain";
import {environment} from '@env/environment';
import {CompanyService} from "../../../crm/services/company.service";
import {map, switchMap, tap} from "rxjs/operators";
import {Subject, takeUntil} from "rxjs";
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
    label: 'Selected Events',
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
    label: 'Selected product',
    items: [
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.onDeleteProduct()
      }
    ]
  }]

  offersMenu: MenuItem[] = [{
    label: 'Selected product',
    items: [
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
  ) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.saleChainId = +id),
      switchMap(id => this.salesChainService.getById(+id)),
      takeUntil(this.destroy$)
    ).subscribe(saleChain => {

      this.saleChain = saleChain;

      this.salesActivities = saleChain.activities;
      this.salesActivities.sort((a, b) => {
        const dateA = new Date(a.event.start);
        const dateB = new Date(b.event.start);
        // @ts-ignore
        return (dateB - dateA);
      });
      this.isLoading = false;
    });
    this.getReservation()
    this.getOffers()
    this.getAllFile()
  }

  getName(name) {
    let name_arr = name.split('/');
    return name_arr[name_arr.length - 1];
  }

  getReservation() {
    this.salesChainService.getReservation(this.saleChainId).subscribe(salesReservation => {
      // @ts-ignore
      this.salesReservation = salesReservation
      this.isLoadingReservation = false;
    })
  }

  getOffers(): void {
    this.offers = [
      {
        id: 1,
        date: '2022-10-21',
        customer: {
          id: 1,
          name: 'Customer Name'
        },
        sum: 97
      },
      {
        id: 2,
        date: '2022-10-21',
        customer: {
          id: 1,
          name: 'Customer Name'
        },
        sum: 97
      },
    ];
  }

  onEditEvent() {
    this.eventSalesChainService.editCompanyToEvent(this.selectedEvent).subscribe(() => {
      this.getAll()
    })
  }

  editChainStatus() {
    this.salesChainService.editSalesChainStatus(this.saleChain).subscribe(res => {
      if (res) {
        this.getAll()
      }
    })
  }

  onConfirmEvent() {
    this.modalService.confirm('success')
      .subscribe(confirm => {
          if (confirm) {
            this.eventSalesChainService.updateEvent(this.selectedEvent.id, {is_done: true} as EventCompany).subscribe(() => {
              this.getAll()
            })
          }
        }
      )
  }

  onDeleteEvent() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventSalesChainService.deleteEvent(this.selectedEvent).subscribe()
        this.salesActivities = this.salesActivities.filter(a => a.id !== this.selectedEvent.id)
        this.selectedEvent = null
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
        this.salesChainService.deleteProduct(this.selectedSalesReservation.id).subscribe()
      }
    })
  }

  onAddProduct() {
    this.salesChainService.createChoiseProduct(this.selectedSalesReservation).subscribe()
  }

  getAllFile() {
    this.salesChainService.getFile().subscribe(files => {
      this.files = files
    })
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onAddFile() {
    this.salesChainService.createSalesFileModal(this.saleChainId).subscribe(file => {
      if (file) {
        console.log(file)
        this.files.push(file)
        this.files = this.files.map(f => f)
      }
      this.getAllFile()
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

  onDeleteOffer() {
    console.log(this.selectedOffer)
    this.salesChainService.removeGenerateOffer(this.selectedOffer.id).subscribe(res => {
      console.log(res)
    })
  }

  onGenerateOffer() {
    this.salesChainService.getGenerateOffer(this.saleChainId).subscribe(res => {
      console.log(res)
    })
  }

}
