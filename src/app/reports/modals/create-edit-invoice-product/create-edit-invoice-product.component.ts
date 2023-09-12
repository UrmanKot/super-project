import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CurrenciesService} from "../../services/currencies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {InvoiceProduct, OrderProductRequestType} from "../../../procurement/models/invoice-product";
import {Country} from "@shared/models/country";
import {forkJoin, Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {InvoiceProductService} from "../../../procurement/services/invoice-product.service";
import {NomenclatureService} from "@shared/services/nomenclature.service";

@Component({
  selector: 'pek-create-edit-invoice-product',
  templateUrl: './create-edit-invoice-product.component.html',
  styleUrls: ['./create-edit-invoice-product.component.scss']
})
export class CreateEditInvoiceProductComponent implements OnInit {

  isSaving = false;

  initialQuantity: number;

  form = this.fb.group({
    supplier_unit_price: [0, [Validators.required]],
    totalQuantity: [0, [Validators.required]],
    ddv: [22, [Validators.required]],
    discount: [0, [Validators.required]],
    fixed_discount: [false],
    country_of_origin_default: [null],
    weight: [null],
    width: [null],
    length: [null],
    height: [null],
    tariff_code: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly currencyService: CurrenciesService,
    private dialogRef: MatDialogRef<CreateEditInvoiceProductComponent>,
    private readonly invoiceProductService: InvoiceProductService,
    private nomenclatureService: NomenclatureService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, invoiceId: number, invoiceProduct: InvoiceProduct }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {

      const disableQuantityInput = this.data.invoiceProduct.totalQuantityAllocated > 0;
      // @ts-ignore
      this.form = this.fb.group({
        supplier_unit_price: [this.data.invoiceProduct.supplier_unit_price, [Validators.required]],
        totalQuantity: [{value: this.data.invoiceProduct.quantity, disabled: disableQuantityInput}, [Validators.required]],
        ddv: [this.data.invoiceProduct.ddv, [Validators.required]],
        discount: [+this.data.invoiceProduct.discount, [Validators.required]],
        fixed_discount: [this.data.invoiceProduct.fixed_discount],
        country_of_origin_default: [this.data.invoiceProduct.nomenclature.country_of_origin_default],
        weight: [this.data.invoiceProduct.nomenclature.weight],
        width: [this.data.invoiceProduct.nomenclature.width],
        length: [this.data.invoiceProduct.nomenclature.length],
        height: [this.data.invoiceProduct.nomenclature.height],
        tariff_code: [this.data.invoiceProduct.nomenclature.tariff_code],
      });

      // @ts-ignore
      this.form.addControl('id', this.fb.control(this.data.invoiceProduct.id));
      // @ts-ignore
      this.form.patchValue(this.data.invoiceProduct);
      this.form.get('totalQuantity').setValue(this.data.invoiceProduct.totalQuantity);
      this.initialQuantity = this.data.invoiceProduct.totalQuantity;

      // @ts-ignore
      this.form.get('supplier_unit_price').setValue(String(parseFloat(this.form.get('supplier_unit_price').value)));
      // @ts-ignore
      this.form.get('discount').setValue(String(parseFloat(this.form.get('discount').value)));
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createInvoiceProduct();
        break;
      }
      case 'edit': {
        this.editInvoiceProduct();
        break;
      }
    }
  }

  createInvoiceProduct() {
  }

  changeCountry(country: Country) {
    this.form.get('country_of_origin_default').patchValue(country?.id ?? null);
  }

  editInvoiceProduct() {
    if (this.form.valid) {
      this.isSaving = true;

      const isSubtract = this.initialQuantity > this.form.get('totalQuantity').value;
      let quantity = 0;
      if (isSubtract) {
        quantity = this.initialQuantity - this.form.get('totalQuantity').value;
      } else {
        quantity = this.form.get('totalQuantity').value - this.initialQuantity;
      }
      const productsToUpdateCalls: Observable<any>[] = [];
      let appendToInvoiceCall: Observable<any>;
      // const manualInvoiceProducts = this.invoiceProductsByOrderProductType(OrderProductRequestType.MANUALLY);
      // const autoInvoiceProducts = this.invoiceProductsByOrderProductType(OrderProductRequestType.AUTOMATICALLY);
      // const otherInvoiceProducts = this.invoiceProductsByOrderProductType(OrderProductRequestType.TOOL_REQUEST);
      const orderedProducts = this.data.invoiceProduct.equalInvoiceProducts.length ?
        [...this.data.invoiceProduct.equalInvoiceProducts] :
        [...this.data.invoiceProduct.products]

      orderedProducts.forEach(product => {
        const dataToSend = {
          id: product.id,
          supplier_unit_price: this.form.get('supplier_unit_price').value,
          quantity: product.quantity,
          ddv: this.form.get('ddv').value,
          discount: this.form.get('discount').value,
          fixed_discount: this.form.get('fixed_discount').value,
        };

        if (quantity > 0) {
          if (isSubtract) {
            if (product.quantity > quantity) {
              product.quantity -= quantity;
              quantity = 0;
              dataToSend.quantity = product.quantity;
              productsToUpdateCalls.push(
                this.invoiceProductService.updatePartly(dataToSend as any)
              );
            } else {
              quantity -= product.quantity;
              product.quantity = 0;
              dataToSend.quantity = product.quantity;
              productsToUpdateCalls.push(
                this.invoiceProductService.delete(dataToSend as any)
              );
            }
          } else {
            productsToUpdateCalls.push(
              this.invoiceProductService.updatePartly(dataToSend as any)
            );
            appendToInvoiceCall = this.invoiceProductService
              .appendQuantityToInvoice(product.id, {add_quantity: quantity});
            quantity = 0;
          }
        } else {
          productsToUpdateCalls.push(
            this.invoiceProductService.updatePartly(dataToSend as any)
          );
        }
      });

      // prepare update nomenclature
      const send = {
        id: this.data.invoiceProduct.nomenclature.id,
        country_of_origin_default: this.form.get('country_of_origin_default').value,
        tariff_code: this.form.get('tariff_code').value,
        weight: this.form.get('weight').value,
        width: this.form.get('width').value,
        length: this.form.get('length').value,
        height: this.form.get('height').value,
      };
      const nomenclatureUpdateCall = this.nomenclatureService.updateAccountingNumber(send);
      forkJoin([nomenclatureUpdateCall, ...productsToUpdateCalls]).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(invoiceProduct => {
        this.data.invoiceProduct.totalQuantity = this.form.get('totalQuantity').value;
        if (appendToInvoiceCall) {
          appendToInvoiceCall.subscribe(res => {
            this.dialogRef.close(this.data.invoiceProduct);
          });
        } else {
          this.dialogRef.close(this.data.invoiceProduct);
        }
      });
    }
  }

  invoiceProductsByOrderProductType(type: OrderProductRequestType) {
    return this.data.invoiceProduct.equalInvoiceProducts
      .filter(p => p.request_type === type)
      // @ts-ignore
      .sort((a, b) => new Date(b.request_date).getTime() - new Date(a.request_date).getTime());
  }

}
