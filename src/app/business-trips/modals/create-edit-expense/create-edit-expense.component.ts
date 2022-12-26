import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AdapterService} from '@shared/services/adapter.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrmPositionsService} from '../../../crm/services/crm-positions.service';
import {BusinessTripService} from '../../services/business-trip.service';
import {MessageService} from 'primeng/api';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Expense} from '../../models/expense';
import {AuthService} from '../../../auth/auth.service';
import {Currency} from '@shared/models/currency';
import {ExpenseService} from '../../services/expense.service';
import {ModalService} from '@shared/services/modal.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-create-edit-expense',
  templateUrl: './create-edit-expense.component.html',
  styleUrls: ['./create-edit-expense.component.scss']
})
export class CreateEditExpenseComponent implements OnInit, OnDestroy {
  selectedExpense: Expense;
  file: File;
  form: FormGroup = this.fb.group({
    id: [null],
    is_verified: [false],
    isOther: [false],
    expense: this.fb.group({
      id: [null],
      name: [null],
      description: [null],
    }),
    custom_expense: this.fb.group({
      id: [null],
      name: [null],
      description: [null]
    }),
    currency: this.fb.group({
      code: [null, [Validators.required]],
      name: [null],
      symbol: [null],
      is_active: [null],
    }),
    sum: [0, [Validators.required]],
    file: [null],
    uploaded_file: [null],
    clear_file: [false],
    base64File: [null]
  });

  isEditDisabled = false;
  canVerify = false;
  private destroy$ = new Subject();
  constructor(
    private dialogRef: MatDialogRef<CreateEditExpenseComponent>,
    private fb: FormBuilder,
    private crmPositionService: CrmPositionsService,
    @Inject(MAT_DIALOG_DATA) public data: {type: 'edit' | 'add', entity, canVerify: boolean},
    private expensesService: ExpenseService,
    private adapterService: AdapterService,
    private businessService: BusinessTripService,
    public auth: AuthService,
    private messageService: MessageService,
    private businessTripService: BusinessTripService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.entity);
      if (this.data.entity.expense?.id) {
        this.form.get('isOther').setValue(false);
      } else {
        this.form.get('isOther').setValue(true);
      }
    }
    // @ts-ignore
    this.canVerify = this.data.canVerify;
  }


  addExpanse() {
    if (this.form.get('isOther').value) {
      const isCustomNameFilled = this.form.get('custom_expense').value.name;
      const isCustomDescriptionFilled = this.form.get('custom_expense').value.description;
      if (!isCustomNameFilled || !isCustomDescriptionFilled) {
        this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Fill Expense Info`});
        return;
      }
    } else {
      const isEmployeeFilled = this.form.get('expense').value.id;
      if (!isEmployeeFilled) {
        this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Select Expense`});
        return;
      }
    }
    if (!this.form.get('currency').value.code) {
      this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Select Currency`});
      return;
    }

    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  editExpanse() {
    if (this.form.get('isOther').value) {
      this.form.get('expense').reset();
      const isCustomNameFilled = this.form.get('custom_expense').value.name;
      const isCustomDescriptionFilled = this.form.get('custom_expense').value.description;
      if (!isCustomNameFilled || !isCustomDescriptionFilled) {
        this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Fill Expense Info`});
        return;
      }
    } else {
      this.form.get('custom_expense').reset();
      const isEmployeeFilled = this.form.get('expense').value.id;
      if (!isEmployeeFilled) {
        this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Select Expense`});
        return;
      }
    }
    if (!this.form.get('currency').value.code) {
      this.messageService.add({severity: 'error', summary: 'Validation Error', detail: `Select Currency`});
      return;
    }
    if (this.form.valid) {
      this.dialogRef.close((this.form as FormGroup) as FormGroup);
    }
  }

  get _expense(): FormGroup {
    return (this.form.get('expense') as FormGroup) as FormGroup;
  }

  get _currency(): FormGroup {
    return (this.form.get('currency') as FormGroup) as FormGroup;
  }

  test() {
  }

  expenseChanged($event: Expense) {
    this.form.get('expense').setValue($event);
  }

  getById(id: number): void {
    this.expensesService.getById(id).pipe(takeUntil(this.destroy$)).subscribe(expense => {
      this.selectedExpense = expense;
    });
  }

  changed() {
    if (this.form.get('expense').value) {
      this.form.get('expense').reset();
    }

    if (this.form.get('custom_expense').value) {
      this.form.get('custom_expense').reset();
    }
  }

  currencyChanged($event: Currency) {
    this.form.get('currency').setValue($event);
  }

  imageManipulation($event: Event, files: EventTarget) {
    // @ts-ignore
    const newFiles: File = Array.from(files.files);
    const file = newFiles[0];
    this.form.get('uploaded_file').reset();
    this.form.get('base64File').reset();
    this.form.get('uploaded_file').setValue(file);
    this.fileToBase64(file);
    this.form.get('clear_file').setValue(false);
    this.changedField();
  }

  fileToBase64(file: File): void {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      const base64 = event.target.result;
      this.form.get('base64File').setValue(base64);
    };
    fileReader.readAsDataURL(file);
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  changedField() {
    if (!this.auth.user.can_verify_expenses) {
      this.form.get('is_verified').patchValue(false);
    }
  }

  clearFile() {
    this.modalService.confirm('danger', 'Confirm').pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.file = null;
        if (this.form.get('file').value) {
          this.form.get('clear_file').setValue(true);
        }
        this.form.get('file').setValue(null);
        this.form.get('uploaded_file').setValue(null);
        this.form.get('base64File').setValue(null);
      }
    });
  }

  viewFile() {
    const preparedFiles = [];
    const files = [];
    if (this.form.get('base64File').value) {
      files.push({file: this.form.get('base64File').value});
    }
    if (typeof this.form.get('file').value === 'string' && !this.form.get('base64File').value) {
      preparedFiles.push({file: this.form.get('file').value});
    }
    const data: { links: any, files: any } = {links: preparedFiles, files};
    this.businessTripService.viewBusinessTripFiles(data);
  }

  takePhoto() {
    this.businessService.takePhotoModal().pipe(takeUntil(this.destroy$)).subscribe(file => {
      if (file) {
        this.form.get('uploaded_file').reset();
        this.form.get('base64File').reset();
        this.form.get('uploaded_file').setValue(file);
        this.fileToBase64(file);
        this.form.get('clear_file').setValue(false);
        this.changedField();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
