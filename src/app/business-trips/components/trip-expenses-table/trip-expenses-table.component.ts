import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AdapterService} from '@shared/services/adapter.service';
import {FormBuilder} from '@angular/forms';
import {Currency} from '@shared/models/currency';
import {ExpensesSum} from '../../models/expenses-sum';
import {ModalService} from '@shared/services/modal.service';
import {BusinessTripExpenseStatus} from '../../enums/business-trip-expense-status.enum';
import {BusinessTripExpense} from '../../models/business-trip-expense';
import {BusinessTripService} from '../../services/business-trip.service';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'pek-trip-expenses-table',
  templateUrl: './trip-expenses-table.component.html',
  styleUrls: ['./trip-expenses-table.component.scss']
})
export class TripExpensesTableComponent implements OnInit, OnChanges {

  @Input() tripExpenses: BusinessTripExpense[] = [];
  selectedTripExpense: BusinessTripExpense;
  @Output() editExpense: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteExpense: EventEmitter<BusinessTripExpense> = new EventEmitter<BusinessTripExpense>();
  @Output() expenseSumEmit: EventEmitter<ExpensesSum[]> = new EventEmitter<ExpensesSum[]>();
  statuses = BusinessTripExpenseStatus;

  sumOfVerifiedExpenses: ExpensesSum[] = [];

  menuItems: MenuItem[] = [{
    label: 'Selected Business Trip',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editTripExpense()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteTripExpense()
      }
    ]
  }];

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private businessService: BusinessTripService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recalculateExpenses();
  }

  recalculateExpenses() {
    this.sumOfVerifiedExpenses = [];
    this.tripExpenses.forEach(tripExpense => {
      if (tripExpense.is_verified) {
        const addedExpense = this.sumOfVerifiedExpenses.find(expense => expense.currencyCode === (tripExpense.currency as Currency).code);
        if (addedExpense) {
          addedExpense.sum = +addedExpense.sum + +tripExpense.sum;
        } else {
          this.sumOfVerifiedExpenses.push({
            currency: tripExpense.currency as Currency,
            sum: tripExpense.sum,
            currencyCode: (tripExpense.currency as Currency).code
          });
        }
      }
    });
    this.expenseSumEmit.emit(this.sumOfVerifiedExpenses);
  }

  editTripExpense() {
    const index = this.tripExpenses.findIndex(expense => expense === this.selectedTripExpense);
    this.editExpense.emit(index);
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  deleteTripExpense() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        this.deleteExpense.emit(this.selectedTripExpense);
      }
    });
  }

  viewFile(selectedExpense: BusinessTripExpense, file: any) {
    const preparedFiles = [];
    const files = [];
    if (selectedExpense.base64File) {
      files.push({file: selectedExpense.base64File});
    }
    if (typeof selectedExpense.file === 'string' && !selectedExpense.base64File) {
      preparedFiles.push({file});
    }
    const data: { links: any, files: any } = {links: preparedFiles, files};
    this.businessService.viewBusinessTripFiles(data);
  }
}
