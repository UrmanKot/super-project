import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SalesChainService} from '../../services/sales-chain-service';
import {MatDialogRef} from '@angular/material/dialog';
import {SalesChain} from '../../models/sales-chain';

@Component({
  selector: 'pek-create-sales-chain',
  templateUrl: './create-sales-chain.component.html',
  styleUrls: ['./create-sales-chain.component.scss']
})
export class CreateSalesChainComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    company: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly salesChainService: SalesChainService,
    private dialogRef: MatDialogRef<CreateSalesChainComponent>,
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    if (this.form.valid) {
      const send: Partial<SalesChain> = {
        company_id: <any>this.form.get('company').value,
        statuses: [],
      }

      this.salesChainService.create(send).subscribe(salesChain => this.dialogRef.close(salesChain));
    }
  }

  onSelectCompany(id: number) {
    this.form.get('company').patchValue(id as any);
  }
}
