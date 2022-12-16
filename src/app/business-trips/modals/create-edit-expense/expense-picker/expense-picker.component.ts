import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ExpenseService} from '../../../services/expense.service';
import {take} from 'rxjs/operators';
import {Expense} from '../../../models/expense';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pek-expense-picker',
  templateUrl: './expense-picker.component.html',
  styleUrls: ['./expense-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ExpensePickerComponent), multi: true}]
})
export class ExpensePickerComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange = new EventEmitter<Expense>();
  @Input() expense: number;
  @Input() showClear: boolean;
  @Input() isDisabled: boolean;

  expenses: Expense[];
  isLoading = true;

  constructor(
    private expensesService: ExpenseService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.expensesService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.expenses = res;
        this.isLoading = false;
      });
  }

  onChange(expanse: number) {
    this.setValue(expanse);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(value: number) {
    this.expense = value;
    this.valueChange.emit(this.expenses.find(expense => expense.id === this.expense));
  }

  writeValue(obj: any): void {
    this.expense = obj;
  }
}
