import {Expense} from './expense';
import {Currency} from '@shared/models/currency';

export class BusinessTripExpense {
  readonly id?: number;
  is_verified?: boolean;
  expense?: Expense | number;
  custom_expense?: Expense;
  currency?: Currency | string;
  sum?: number;
  file?: string;
  files?:BusinessTripExpenseFile[];
  uploadedFiles?: File[];
  base64File?: string;
  fullExpense?: Expense;
  clear_file?: boolean;
  business_trip?: number;
  uploaded_file?: string;
  type?: string;
}

export class BusinessTripExpenseFile {
  id?: number;
  business_trip_expense?: number;
  file?: File | string;
}
