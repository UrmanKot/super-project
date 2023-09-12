import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalService} from "@shared/services/modal.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {AdditionalExpense} from "../../models/additional-expense";
import {AdditionalExpenseService} from "../../services/additional-expense.service";

@UntilDestroy()
@Component({
  selector: 'pek-reports-additional-expenses',
  templateUrl: './reports-additional-expenses.component.html',
  styleUrls: ['./reports-additional-expenses.component.scss']
})
export class ReportsAdditionalExpensesComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Additional Expenses',
    items: [
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-pencil',
      //   command: () => this.onEditAdditionalExpenses()
      // },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveAdditionalExpenses()
      }
    ]
  }];

  additionalExpenses: AdditionalExpense[] = [];
  selectedAdditionalExpense: AdditionalExpense;
  isLoading = true;

  constructor(
    private readonly currencyService: AdditionalExpenseService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getAdditionalExpenses();
  }

  getAdditionalExpenses() {
    this.currencyService.get().pipe(
      untilDestroyed(this)
    ).subscribe(additionalExpenses => {
      this.additionalExpenses = additionalExpenses;
      this.isLoading = false;
    });
  }

  onAddAdditionalExpense() {
    this.currencyService.createEditCurrencyModal('create').subscribe(additionalExpenses => {
      if (additionalExpenses) {
        this.additionalExpenses.unshift(additionalExpenses);
      }
    });
  }

  onEditAdditionalExpenses() {
    this.currencyService.createEditCurrencyModal('edit', this.selectedAdditionalExpense).subscribe(additionalExpenses => {
      if (additionalExpenses) {
        const index = this.additionalExpenses.findIndex(a => a.id === this.selectedAdditionalExpense.id);
        this.additionalExpenses[index] = additionalExpenses;
        this.selectedAdditionalExpense = this.additionalExpenses[index];
      }
    });
  }

  onRemoveAdditionalExpenses() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.currencyService.delete(this.selectedAdditionalExpense.name).subscribe(() => {
          const index = this.additionalExpenses.findIndex(a => a.name === this.selectedAdditionalExpense.name);
          this.additionalExpenses.splice(index, 1);
          this.selectedAdditionalExpense = null;
        });
      }
    });
  }
}
