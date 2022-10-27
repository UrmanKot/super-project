import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {finalize, take} from 'rxjs/operators';
import {ListService} from '../../../../warehouse/services/list.service';
import {ListProductService} from '../../../../warehouse/services/list-product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})

export class ListProductsComponent implements OnInit {

  form: FormGroup;
  isSerial = false;
  isLoading = true;

  errorStr = '';

  serialsWarehouse: { id: number, label: string }[] = [];
  serialsProduction: { id: number, label: string }[] = [];

  constructor(
    private readonly listService: ListService,
    private dialogRef: MatDialogRef<ListProductsComponent>,
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private listProductService: ListProductService) {

    console.log(this.data);
    this.form = fb.group({
      id: [data.entity.id],
      isWarehouse: ['0'],
      actual_quantity: [data.entity.actual_quantity],
    });

    if (this.data.entity.nomenclature.bulk_or_serial === '1') {
      this.form.addControl('serial_product_ids', new FormControl([]));
      this.form.addControl('root_serial_numbers_in_production', new FormControl([]));
      // this.form.removeControl('actual_quantity');
    }
  }

  ngOnInit(): void {
    if (this.data.entity.nomenclature.bulk_or_serial === '1') {
      this.loadInfo();
    }
  }

  edit() {
    const send = this.form.value;

    if (this.data.entity.nomenclature.bulk_or_serial === '1') {

      if (send.isWarehouse === '0') {
        delete send.root_serial_numbers_in_production;
        send.actual_quantity = this.form.value.serial_product_ids.length;
        send.serial_product_ids = this.form.get('serial_product_ids').value;
      } else if (send.isWarehouse === '1') {
        delete send.serial_product_ids;
        delete send.actual_quantity;
        send.root_serial_numbers_in_production = this.form.get('root_serial_numbers_in_production').value;
        send.root_serial_numbers_in_production = send.root_serial_numbers_in_production.map(val => +val);
      }
    } else {
      delete send.root_serial_numbers_in_production;
    }
    delete send.isWarehouse;

    console.log(send);
    this.listProductService.updatePartly(this.form.value).pipe(take(1)).subscribe(res => this.dialogRef.close(res));
  }

  loadInfo() {
    this.listService.getNomenclatureInfo(this.data.entity.nomenclature.id).pipe(
      finalize(() => {
        this.isLoading = false;
        this.isSerial = true;
      })
    ).subscribe({
      next: (res) => {
        if (res) {
          console.log(res);
          res.warehouse_products.forEach(item => {
            this.serialsWarehouse.push(
              {id: item.id, label: item.serial_number.type_with_number ? item.serial_number.type_with_number : item.serial_number.id}
            );
          });

          res.serial_numbers_in_production.forEach(item => {
            this.serialsProduction.push(
              {id: item.id, label: item.type_with_number ? item.type_with_number : item.id}
            );
          });
        }
      },
      error: (err) => {
        this.errorStr = 'There are no warehouse products on stock and in production';
      }
    });
  }
}
