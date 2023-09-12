import {Component, OnInit, ViewChild} from '@angular/core';
import {Expense} from '../../../models/expense';
import {ExpenseService} from '../../../services/expense.service';
import {ModalService} from '@shared/services/modal.service';
import {take} from 'rxjs/operators';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'pek-expanses',
  templateUrl: './expanses.component.html',
  styleUrls: ['./expanses.component.scss']
})
export class ExpansesComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  isLoading: boolean = true;
  expenses: Expense[] = [];
  selectedExpense: Expense;
  menuItems: MenuItem[] = [{
    label: 'Selected Expense',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editExpense()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteExpense()
      }
    ]
  }];
  count = 0;
  isShowAll = false;
  isStartOnePage = false;

  searchForm: FormGroup = this.fb.group({
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value}
  ];

  tableScrollHeight = '24.125rem';
  isHideFilters = false;

  constructor(
    private expenseService: ExpenseService,
    private modalService: ModalService,
    private fb: FormBuilder,
  ) {
    this.getPaginated();
  }

  ngOnInit(): void {
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '21.875rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '24.125rem';
      return;
    }
  }

  prepareQuery(): void {
    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }
  }

  searchExpenses() {
    this.prepareQuery();
    if (!this.isShowAll) {
      this.getPaginated();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getAll();
    }
  }

  getPaginated() {
    this.isLoading = true;
    this.expenseService
      .getPaginated(this.query)
      .subscribe((res) => {
        this.expenses = res.results;
        this.count = res.count;
        this.selectedExpense = null;
        this.isLoading = false;
      });
  }

  getAll() {
    this.isLoading = true;
    this.expenseService
      .get()
      .subscribe((res) => {
        this.expenses = res;
        this.selectedExpense = null;
        this.isLoading = false;
        if (this.isStartOnePage) {
          this.paginator?.changePage(0);
        }
      });
  }

  addExpanse() {
    this.expenseService
      .createChangeExpense()
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.getAll();
        }
      });
  }

  editExpense() {
    this.expenseService
      .createChangeExpense(this.selectedExpense)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.getAll();
        }
      });
  }

  deleteExpense() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1))
      .subscribe((confirm) => {
        if (confirm) {
          this.expenseService
            .delete(this.selectedExpense)
            .pipe(take(1))
            .subscribe((del) => {
              this.getAll();
            });
        }
      });
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchExpenses();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.searchExpenses();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.searchExpenses();
  }
}
