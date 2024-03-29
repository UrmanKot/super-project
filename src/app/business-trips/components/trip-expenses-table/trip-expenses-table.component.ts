import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Currency} from '@shared/models/currency';
import {ExpensesSum} from '../../models/expenses-sum';
import {ModalService} from '@shared/services/modal.service';
import {BusinessTripExpenseStatus} from '../../enums/business-trip-expense-status.enum';
import {BusinessTripExpense} from '../../models/business-trip-expense';
import {BusinessTripService} from '../../services/business-trip.service';
import {MenuItem} from 'primeng/api';
import {BusinessTripsExpensesService} from '../../services/business-trips-expenses.service';
import {take} from 'rxjs/operators';
import {ExpenseService} from '../../services/expense.service';
import {Expense} from '../../models/expense';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {environment} from '@env/environment';
import {BusinessTripExpensesType} from '../../enums/business-trip-expenses-type';

@Component({
  selector: 'pek-trip-expenses-table',
  templateUrl: './trip-expenses-table.component.html',
  styleUrls: ['./trip-expenses-table.component.scss']
})
export class TripExpensesTableComponent implements OnInit, OnChanges, OnDestroy {

  tripExpenses: BusinessTripExpense[] = [];
  selectedTripExpense: BusinessTripExpense;
  @Input() businessTripId: number;
  @Input() isVerify: boolean;
  @Output() editExpense: EventEmitter<number> = new EventEmitter<number>();
  @Output() verifyBusinessTrip: EventEmitter<void> = new EventEmitter<void>();
  @Output() currentBusinessTripExpenses: EventEmitter<BusinessTripExpense[]> = new EventEmitter<BusinessTripExpense[]>();
  @Output() deleteExpense: EventEmitter<BusinessTripExpense> = new EventEmitter<BusinessTripExpense>();
  @Output() expenseSumEmit: EventEmitter<ExpensesSum[]> = new EventEmitter<ExpensesSum[]>();
  @Output() unverifyTrip: Subject<void> = new Subject<void>();
  BusinessTripExpensesType = BusinessTripExpensesType;
  statuses = BusinessTripExpenseStatus;

  sumOfVerifiedExpenses: ExpensesSum[] = [];



  menuItems: MenuItem[] = [{
    label: 'Selected Evidence',
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
  formData = new FormData();
  private destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private businessService: BusinessTripService,
    private businessTripsExpensesService: BusinessTripsExpensesService,
    private expenseService: ExpenseService,
  ) {
  }

  ngOnInit(): void {
    this.getBusinessTripsExpenses();
  }

  getBusinessTripsExpenses() {
    this.businessTripsExpensesService.get([{name: 'business_trip_id', value: this.businessTripId}]).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.tripExpenses = res;
      this.currentBusinessTripExpenses.emit(this.tripExpenses);
      this.recalculateExpenses();
    });
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

  link = environment.image_path;

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  deleteTripExpense() {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.businessTripsExpensesService.delete(this.selectedTripExpense).pipe(takeUntil(this.destroy$)).subscribe(res => {
          this.getBusinessTripsExpenses();
          this.selectedTripExpense = null;
        });
      }
    });
  }

  public addTripExpanses(): void {
    const isVerify = false;
    this.expenseService
      .createChangeExpanseItem(null, isVerify)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((tripExpense: BusinessTripExpense) => {
        const preparedData = this.prepareExpense(tripExpense)
        this.businessTripsExpensesService.create(preparedData).pipe(takeUntil(this.destroy$)).subscribe(response => {
          if (tripExpense.uploadedFiles.length > 0) {
            let uploadImages = [];
            tripExpense.uploadedFiles.forEach(file => {
              const call = this.businessTripsExpensesService.uploadFiles({
                business_trip_expense: response.id,
                file: file
              });
              uploadImages.push(call);
            });

            forkJoin([
              ...uploadImages
            ]).pipe(takeUntil(this.destroy$)).subscribe(res => {
              this.getBusinessTripsExpenses();
              this.unverifyTrip.next();
            });
          } else {
              this.getBusinessTripsExpenses();
              this.unverifyTrip.next();
            }
        });
      });
  }

  prepareExpense(tripExpense: BusinessTripExpense) {
    tripExpense.business_trip = this.businessTripId;
    const businessExpense: BusinessTripExpense = {
      currency: tripExpense.currency,
      id: tripExpense.id,
      sum: tripExpense.sum,
      type: tripExpense.type,
      business_trip: this.businessTripId,
      is_verified: tripExpense.is_verified,
      clear_file: tripExpense.clear_file,
    };
    if ((tripExpense.expense as Expense)?.name) {
      businessExpense.expense = (tripExpense.expense as Expense).id;
      businessExpense.currency = (tripExpense.currency as Currency).code as string;
      businessExpense.fullExpense = (tripExpense.expense as Expense);
    }
    if (tripExpense.custom_expense?.name) {
      businessExpense.custom_expense = tripExpense.custom_expense;
      businessExpense.currency = (tripExpense.currency as Currency).code as string;
      businessExpense.fullExpense = tripExpense.custom_expense;
    }
    return businessExpense;
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

  editTripExpense() {
    this.expenseService
      .createChangeExpanseItem(this.selectedTripExpense, this.isVerify)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((tripExpense) => {
        const preparedData = this.prepareExpense(tripExpense.value);
        this.businessTripsExpensesService.update(tripExpense.value.id, preparedData).pipe(takeUntil(this.destroy$)).subscribe(response => {
          if (tripExpense.value.deleteImagesIds.length > 0 || tripExpense.value.uploadedFiles.length > 0) {
            let uploadImages = [];
            let deleteImages = [];

            if (tripExpense.value.uploadedFiles.length > 0) {
              tripExpense.value.uploadedFiles.forEach(file => {
                const call = this.businessTripsExpensesService.uploadFiles({
                  business_trip_expense: response.data.id,
                  file: file
                });
                uploadImages.push(call);
              });
            }

            if (tripExpense.value.deleteImagesIds.length > 0) {
              tripExpense.value.deleteImagesIds.forEach(fileId => {
                const call = this.businessTripsExpensesService.deleteFiles(fileId);
                deleteImages.push(call);
              });
            }
            forkJoin([
              ...uploadImages,
              ...deleteImages,
            ]).pipe(takeUntil(this.destroy$)).subscribe(() => {
              this.getBusinessTripsExpenses();
              this.unverifyTrip.next();
            });
          }
           else {
            this.getBusinessTripsExpenses();
            this.unverifyTrip.next();
          }
        });
      });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  updateVerifyStatusOfExpense(isVerified: boolean) {
    this.selectedTripExpense.is_verified = isVerified;
    const preparedData = this.prepareExpense(this.selectedTripExpense);
    this.businessTripsExpensesService.create(preparedData).pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.getBusinessTripsExpenses();
    });

  }

}
