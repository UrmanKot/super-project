import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {Country} from '@shared/models/country';
import {CountryService} from '@shared/services/country.service';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {forkJoin, Observable, timestamp} from 'rxjs';

@Component({
  selector: 'pek-generate-intrastat-xml',
  templateUrl: './generate-intrastat-xml.component.html',
  styleUrls: ['./generate-intrastat-xml.component.scss']
})
export class GenerateIntrastatXmlComponent implements OnInit {

  index = 0;
  invoices: any = [];
  cachedInvoices: any = [];
  countries: Country[] = [];
  showError: string;
  lastTimeTabRefreshed;

  constructor(
    private countryService: CountryService,
    private invoiceProductsService: InvoiceProductService,
    private invoiceService: InvoiceService,
    private nomenclatureService: NomenclatureService,
    public dialogRef: MatDialogRef<GenerateIntrastatXmlComponent>,
    private readonly router: Router,
    @Inject(MAT_DIALOG_DATA) public data: [],
  ) {
  }

  ngOnInit(): void {
    this.getCountries();
    this.getInvoicesWithProducts();
  }

  get selected() {
    return this.invoices[this.index];
  }

  step(n: number) {
    this.index += n;
    if (this.index < 0) {
      this.index = 0;
    }
    if (this.index >= this.invoices.length) {
      this.index = this.invoices.length - 1;
    }
    this.dryRunForErrors();
  }

  generate() {
    // hack, wait for last nomenclature PATCH to finish on server,
    // so it takes correct tariff code
    setTimeout(() => {
      const send = {
        start_number: '1',
        ids: this.data,
      };
      this.invoiceService.generateIntrastatXML(send).subscribe(
        data => {
          this.invoiceService.downloadXmlFile(data, 'intrastat');
          this.dialogRef.close();
        },
        error => {
          const errorData = JSON.parse(error.error)?.data;
          if (errorData && errorData.length > 0) {
            this.showError = errorData[0];
          }
        }
      );
    }, 500);
  }

  dryRunForErrors() {
    const invoiceId = this.invoices[this.index]?.invoice?.id;
    const send = {
      start_number: '1',
      ids: [{invoice_id: invoiceId}]
    };
    this.invoiceService.generateIntrastatXML(send).subscribe(
      data => {
        this.showError = null;
      },
      (error: HttpErrorResponse) => {
        const errorData = JSON.parse(error.error)?.data;
        if (errorData && errorData.length > 0) {
          this.showError = errorData[0];
        }
      }
    );
  }

  getInvoicesWithProducts() {
    const send = {
      ids: [],
    };

    for (const row of this.data) {
      send.ids.push({invoice_id: row['invoice_id']});
    }

    this.invoiceProductsService.getTariffsConfirmation(send).subscribe((res: any) => {
      if (res.data) {
        this.invoices = res.data;
        this.dryRunForErrors();
        this.cachedInvoices = res.data;
      }
    });
  }

  getCountries() {
    this.countryService.get().subscribe((countries) => this.countries = countries);
  }

  updateOneItem(product) {
    const current = this.invoices[this.index];
    const cached = this.cachedInvoices[this.index];

    const currentProducts = current.products;
    const productIndex = currentProducts.findIndex(prod => prod.id === product.id);

    const cachedVersion = cached.products[productIndex];

    const nomenclatureUpdated = {
      id: product.nomenclature.id,
      // @ts-ignore
      weight: +Number(product.nomenclature.weight).toFixed(6),
      tariff_code: product.nomenclature.tariff_code.toString().slice(0, 8),
      tariff_code_checked: product.nomenclature.tariff_code_checked.toString().slice(0, 8),
      country_of_origin_default: product.country.id,
    }

    let invoiceProductService = null;
    if (cachedVersion.country.id !== product.country.id) {
      invoiceProductService =
        {
          id: product.id,
          country_of_origin: product.country.id,
        }
    }

    const updateCalls$: Observable<any>[] = [
      this.nomenclatureService.updatePartly(nomenclatureUpdated)
    ];


    if (invoiceProductService) {
      updateCalls$.push(this.invoiceProductsService.updatePartly(invoiceProductService));
    }
    forkJoin([...updateCalls$]).subscribe(res => {
      cachedVersion.nomenclature.weight = product.nomenclature.weight;
      cachedVersion.nomenclature.tariff_code = product.nomenclature.tariff_code;
      cachedVersion.nomenclature.tariff_code_checked = product.nomenclature.tariff_code_checked;
      if (cachedVersion.country.id !== product.country.id) {
        cachedVersion.country.id = product.country.id;
      }
      this.dryRunForErrors();
    });

  }

  onChangeCountry(event, product) {
    product.country.id = event.id;
    this.updateOneItem(product);
  }

  productDescription(text) {
    try {
      const url = new URL(text);
      /*
      color: blue;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 300px;
      display: inline-block;
      */
      const style = 'overflow: hidden; text-overflow: ellipsis; color: blue;';
      return `<a class="desc-link" href="${url}" target="_blank" style="${style}">${url}</a>`;
    } catch (_) {
    }
    return text;
  }

  goToOrder() {
    window.open('/dash/procurement/invoices/products/view/' + this.selected.invoice.id, '_blank');
  }

  goToSupplier() {
    window.open('/crm/business-partners/company-page/' + this.selected.invoice.supplier.id, '_blank');
  }

  focusOutTariffCode(product: any) {
    if (product.nomenclature.tariff_code) {
      this.updateOneItem(product);
    }
  }

  focusOutTariffCodeChecked(product: any) {
    if (product.nomenclature.tariff_code_checked) {
      this.updateOneItem(product);
    }
  }

  @HostListener('document:visibilitychange', ['$event'])
  appVisibility() {
    if (!document.hidden) {

      const currentTime = (new Date().getTime()) / 1000;

      if (!this.lastTimeTabRefreshed || currentTime - this.lastTimeTabRefreshed >= 30 ) {
        this.lastTimeTabRefreshed = currentTime;
        this.dryRunForErrors();
      }
    }
  }
}
