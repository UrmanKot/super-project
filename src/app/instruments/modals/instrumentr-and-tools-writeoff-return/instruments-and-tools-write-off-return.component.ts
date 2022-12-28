import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'pek-instruments-and-tools-write-off-return',
  templateUrl: './instruments-and-tools-write-off-return.component.html',
  styleUrls: ['./instruments-and-tools-write-off-return.component.scss']
})
export class InstrumentsAndToolsWriteOffReturnComponent implements OnInit {
  form: FormGroup = this.fb.group({
    products: this.fb.array([])
  });
  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { product: WarehouseProduct[], type: 'writeOff' | 'warehouseReturn' },
    private readonly dialogRef: MatDialogRef<InstrumentsAndToolsWriteOffReturnComponent>,
    private warehouseProductService: WarehouseProductService,
  ) { }

  ngOnInit(): void {
    const fArray = this.data.product.map(x => { return this.fb.group({ id: x.id, quantity: [x.quantity, [Validators.max(x.quantity), Validators.min(0)]] }) })
    this.form = this.fb.group({
      products: this.fb.array(fArray)
    });

    console.log('this.form', this.form);
  }

  get products() {
    return this.form.get('products') as FormArray;
  }

  returnToWarehouse() {
    if(this.form.valid){
      this.warehouseProductService.return_to_qc(this.form.get('products').value).pipe(take(1)).subscribe(res=>{
        this.dialogRef.close();
      })
    }

  }

  writeOff() {
    if(this.form.valid){
      this.warehouseProductService.write_off_confirmation(this.form.get('products').value).pipe(take(1)).subscribe(res=>{
        this.dialogRef.close();
      })
    }
  }
}
