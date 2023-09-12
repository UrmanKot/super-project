import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdditionalExpenseService} from "../../services/additional-expense.service";
import {filter, finalize, tap} from "rxjs/operators";
import {ModalService} from "@shared/services/modal.service";

@Component({
  selector: 'pek-additional-expenses-modal',
  templateUrl: './additional-expenses-modal.component.html',
  styleUrls: ['./additional-expenses-modal.component.scss']
})
export class AdditionalExpensesModalComponent implements OnInit {
  isPending: any;

  form: FormGroup = this.fb.group({
    value: [null, [Validators.required]],
    accountingservice: [null, [Validators.required, Validators.min(0)]],
  })

  servicesType = [
    {label: 'Production cost', value: 'Production cost'},
    {label: 'Small material', value: 'Small material'},
  ];

  services: any[] = [];
  selectedProformaInvoice: any;

  deletion: Set<number> = new Set<number>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { type: 'old' | 'new', id: number, services: any[] },
    private readonly dialogRef: MatDialogRef<AdditionalExpensesModalComponent>,
    private readonly additionalExpenseService: AdditionalExpenseService,
    private readonly fb: FormBuilder,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.services = JSON.parse(JSON.stringify(this.data.services));
    this.services = this.services.map(s => s);
  }

  add() {

    const send = {...this.form.value}

    if (this.data.type === 'old') {
      send.listproduct = this.data.id
    } else {
      send.task = this.data.id
    }

    this.isPending = true;

    if (this.data.type === 'old') {
      this.additionalExpenseService.createExpanse(send).pipe(
        finalize(() => this.isPending = false),
        tap(() => {
          this.form.reset();
        })
      ).subscribe(val => {
        this.data.services.push(val);
        this.services.push(val)
        this.services = this.services.map(p => p)
      })
    } else {
      this.additionalExpenseService.createExpanseTask(send).pipe(
        finalize(() => this.isPending = false),
        tap(() => {
          this.form.reset();
        })
      ).subscribe(val => {
        this.data.services.push(val);
        this.services.push(val)
        this.services = this.services.map(p => p)
      })
    }
  }

  remove(id: number) {
    this.modalService.confirm('danger').pipe(
      filter(Boolean)
    ).subscribe(() => {
      this.deletion.add(id)

      if (this.data.type === 'old') {
        this.additionalExpenseService.removeExpanse(id).subscribe(res => {
          const index = this.data.services.findIndex(s => s.id === id);
          this.data.services.splice(index, 1);
          this.services.splice(index, 1);
          this.deletion.delete(id);
          this.services = this.services.map(p => p)
        })
      } else {
        this.additionalExpenseService.removeExpanseTask(id).subscribe(res => {
          const index = this.data.services.findIndex(s => s.id === id);
          this.data.services.splice(index, 1);
          this.services.splice(index, 1);
          this.deletion.delete(id);
          this.services = this.services.map(p => p)
        })
      }
    })
  }
}
