import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderSupplierService} from '../../../confirmation/services/order-supplier.service';
import {Company} from '../../../crm/models/company';
import {CompanyService} from '../../../crm/services/company.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-add-supplier-to-order',
  templateUrl: './add-supplier-to-order.component.html',
  styleUrls: ['./add-supplier-to-order.component.scss']
})
export class AddSupplierToOrderComponent implements OnInit {
  isLoading = true;
  companies: Partial<Company>[] = [];

  isSaving = false;

  form: FormGroup = this.fb.group({
    list_id: [null, Validators.required],
    supplier_id: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyService: CompanyService,
    private dialogRef: MatDialogRef<AddSupplierToOrderComponent>,
    private readonly orderSupplierService: OrderSupplierService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
  }

  ngOnInit(): void {
    this.form.get('list_id').patchValue(this.data.id);
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getShortsCompanies([{
      name: 'categories', value: 1
    }]).subscribe(companies => {
      this.companies = companies;
      this.isLoading = false;
    });
  }

  onAdd() {
    this.isSaving = true;
    this.orderSupplierService.addSupplierToOrder(this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(company => this.dialogRef.close(company));
  }
}
