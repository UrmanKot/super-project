import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalService} from "@shared/services/modal.service";
import {CurrenciesService} from "../../services/currencies.service";
import {Currency} from "@shared/models/currency";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'pek-reports-currencies',
  templateUrl: './reports-currencies.component.html',
  styleUrls: ['./reports-currencies.component.scss']
})
export class ReportsCurrenciesComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Currency',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditCurrency()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveCurrency()
      }
    ]
  }];

  currencies: Currency[] = [];
  selectedCurrency: Currency;
  isLoading = true;

  constructor(
    private readonly currencyService: CurrenciesService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.get().pipe(
      untilDestroyed(this)
    ).subscribe(currencies => {
      this.currencies = currencies;
      this.isLoading = false;
    });
  }

  onAddCurrency() {
    this.currencyService.createEditCurrencyModal('create').subscribe(currency => {
      if (currency) {
        this.currencies.unshift(currency);
      }
    });
  }

  onEditCurrency() {
    this.currencyService.createEditCurrencyModal('edit', this.selectedCurrency).subscribe(currency => {
      if (currency) {
        const index = this.currencies.findIndex(t => t.code === this.selectedCurrency.code);
        this.currencies[index] = currency;
        this.selectedCurrency = this.currencies[index];
      }
    });
  }

  onRemoveCurrency() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.currencyService.delete(this.selectedCurrency).subscribe(() => {
          const index = this.currencies.findIndex(c => c.code === this.selectedCurrency.code);
          this.currencies.splice(index, 1);
          this.selectedCurrency = null;
        });
      }
    });
  }
}
