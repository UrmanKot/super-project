import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ListItemToAllocate, ListProduct, ListProductsDetailed} from "../../../warehouse/models/list-product";
import {finalize, Subject, takeUntil} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {InvoiceProduct} from "../../../procurement/models/invoice-product";
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {Locator} from "../../../warehouse/models/locator";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {AllocationService} from "../../../warehouse/services/allocation.service";
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {ListService} from '../../../warehouse/services/list.service';


@Component({
  selector: 'pek-allocate-items',
  templateUrl: './allocate-items.component.html',
  styleUrls: ['./allocate-items.component.scss']
})
export class AllocateItemsComponent implements OnInit {

  private destroy$ = new Subject();
  listProducts: ListProduct[] = [];
  reservations: ListProduct[] = [];
  nomenclature: Nomenclature;
  isLoadingRequired: boolean = true;
  isLoadingReserved: boolean = true;
  isSaving: boolean = false;
  tableScrollHeight = '16.125rem';
  totalSelectedQty: number = 0;
  form = this.fb.group({
    locator: [null, Validators.required]
  });
  totalAvailableQty: number;
  isHideRequired = false;
  isHideReserved = false;
  tableRequiredHidden = false;
  tableReservedHidden = false;

  itemsToAllocate?: ListItemToAllocate[] = [];
  selectedLocator?: Locator;

  constructor(
    private readonly fb: FormBuilder,
    private readonly httpClient: HttpClient,
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly allocationService: AllocationService,
    private readonly listService: ListService,
    private readonly qrCodeService: QrCodeService,
    private dialogRef: MatDialogRef<AllocateItemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceProduct: InvoiceProduct, invoiceId: number }
  ) {
  }

  toggleRequiredVisibility() {
    this.isHideRequired = !this.isHideRequired;
    if (this.isHideRequired) {
      this.tableRequiredHidden = true;
    }
    if (!this.isHideRequired) {
      this.tableRequiredHidden = false;
    }
  }

  toggleReservedVisibility() {
    this.isHideReserved = !this.isHideReserved;
    if (this.isHideReserved) {
      this.tableReservedHidden = true;
    }
    if (!this.isHideReserved) {
      this.tableReservedHidden = false;
    }
  }

  onSelectLocator(locator: Locator) {
    if (locator) {
      this.form.get('locator').patchValue(<any>locator.id);
    } else {
      this.form.get('locator').patchValue(null);
    }
    this.selectedLocator = locator;
  }

  reservedByListProducts(nomenclatureId) {
    const query = [{name: 'invoice_id', value: this.data.invoiceId}];
    if (this.data.invoiceProduct.current_technology_id !== null) {
      query.push({name: 'technology_id', value: this.data.invoiceProduct.current_technology_id});
    }
    this.allocationService.getReservedByListProducts(nomenclatureId, query)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.reservations = this.aggregateListProducts(res);
        this.isLoadingReserved = false;
      });
  }

  requiredByListProducts(nomenclatureId) {
    const query = [{name: 'invoice_id', value: this.data.invoiceId}];
    if (this.data.invoiceProduct.current_technology_id !== null) {
      query.push({name: 'technology_id', value: this.data.invoiceProduct.current_technology_id});
    }
    this.allocationService.getRequiredByListProducts(nomenclatureId, query)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listProducts = this.aggregateListProducts(res)
        this.isLoadingRequired = false;
      });
  }

  aggregateListProducts(listProductsRaw: any[]) {
    // aggregating list of listproduct by family id and assembly nomenclature id
    let requiredBy: any = {};
    let aggregatedResult: any[] = [];

    listProductsRaw.forEach(listProduct => {
      let key = (listProduct.list.nomenclature.id).toString() + (listProduct.root_production_list.family_id).toString();
      if (listProduct.technology !== null) {
        key += (listProduct.technology).toString();
      }
      const obj = new ListProductsDetailed({
        listproduct_id: listProduct.id,
        quantity: listProduct.required_quantity - listProduct.actual_quantity
      })

      if (key in requiredBy) {
        requiredBy[key].required_quantity += listProduct.required_quantity - listProduct.actual_quantity
        requiredBy[key].lps.push(obj)
      } else {
        requiredBy[key] = listProduct;
        requiredBy[key].lps = [obj]
      }
    })
    for (const [key, value] of Object.entries(requiredBy)) {
      aggregatedResult.push(value);
    }
    return aggregatedResult;
  }

  updateTotal() {
    let temp = 0;

    this.listProducts.forEach(lp => {
      if (lp.isSelected) {
        temp += lp.quantityToAllocate;
      }
    });

    this.reservations.forEach(lp => {
      if (lp.isSelected) {
        temp += lp.quantityToAllocate;
      }
    });

    this.totalSelectedQty = temp;
    if (this.totalAvailableQty - this.totalSelectedQty < 0) {
      this.raiseNotEnough();
    }
  }

  addToSelectedItems(
    quantity: number,
    listproduct_id: number,
    invoice_product_id: number,
    listproductsDetailed: ListProductsDetailed[],
    listproductsToSubmit: ListProductsDetailed[]
  ) {
    this.itemsToAllocate.push({
      quantity,
      listproduct_id,
      invoice_product_id,
      listproductsDetailed,
      listproductsToSubmit
    });
  }

  removeFromSelectedItems(listProduct: ListProduct) {
    this.itemsToAllocate.forEach((lp, index) => {
      if (lp.listproduct_id === listProduct.id) {
        this.itemsToAllocate.splice(index, 1);
      }
    })
  }

  splitListProduct(listproductsDetailed: ListProductsDetailed[], remainderQty: number) {
    let sum = 0;
    let listproductsToSubmit: ListProductsDetailed[] = [];

    for (let detail of listproductsDetailed) {
      if (sum >= remainderQty) {
        break;
      }

      if (detail.quantity > remainderQty) {
        const newDetail = new ListProductsDetailed({
          listproduct_id: detail.listproduct_id,
          quantity: remainderQty
        })
        listproductsToSubmit.push(newDetail)
        sum += remainderQty;
      } else {
        listproductsToSubmit.push(detail);
        sum += detail.quantity;
      }
    }
    return listproductsToSubmit;
  }

  selectReservedItem(selected_quantity: number, listproduct: ListProduct, listproductsDetailed?: ListProductsDetailed[]) {
    let remainderQty = this.totalAvailableQty - this.totalSelectedQty;
    if (selected_quantity <= remainderQty) {
      return this.selectItem(selected_quantity, listproduct, listproductsDetailed)
    }

    if (remainderQty < 0) {
      this.raiseNotEnough();
    }
    if (this.totalAvailableQty - this.totalSelectedQty < 0) {
      listproduct.quantityToAllocate = selected_quantity;
    } else {
      listproduct.quantityToAllocate = remainderQty;
    }
    if (listproduct.isSelected) {
      this.raiseSmallerAmount(selected_quantity, remainderQty);
      this.updateTotal();
      let listproductsToSubmit = this.splitListProduct(listproductsDetailed, remainderQty);
      this.addToSelectedItems(
        listproduct.quantityToAllocate, listproduct.id, this.data.invoiceProduct.id, listproductsDetailed, listproductsToSubmit
      );

    } else if (!listproduct.isSelected) {
      listproduct.quantityToAllocate = 0;
      this.updateTotal();
      this.removeFromSelectedItems(listproduct);
    }
  }

  selectItem(selected_quantity: number, listproduct: ListProduct, listproductsDetailed: ListProductsDetailed[]) {
    listproduct.quantityToAllocate = selected_quantity;
    if (listproduct.isSelected) {
      this.updateTotal();
      this.addToSelectedItems(selected_quantity, listproduct.id, this.data.invoiceProduct.id, listproductsDetailed, listproductsDetailed);

    } else if (!listproduct.isSelected) {
      listproduct.quantityToAllocate = 0;
      this.updateTotal();
      this.removeFromSelectedItems(listproduct);
    }
  }

  submitVisible() {
    if (this.totalAvailableQty - this.totalSelectedQty < 0) {
      return false;
    }
    if (this.totalAvailableQty - this.totalSelectedQty > 0 && this.form.invalid) {
      return false;
    }
    if (this.totalSelectedQty === 0 && this.form.invalid) {
      return false;
    }
    return true;
  }

  getSubmitBody() {
    let toWarehouse = [];
    if (this.selectedLocator) {

      let remainderQty = this.totalAvailableQty - this.totalSelectedQty;
      this.data.invoiceProduct.invoiceProducts.forEach(invProduct => {
        if (remainderQty > invProduct.passed_quantity - invProduct.accepted_quantity - invProduct.not_passed_quantity) {
          toWarehouse.push({
            invoice_product_id: invProduct.id,
            quantity: invProduct.passed_quantity - invProduct.accepted_quantity - invProduct.not_passed_quantity,
            locator_id: this.selectedLocator.id,
            invoice_id: this.data.invoiceId,
            nomenclature_id: this.nomenclature.id
          })
          remainderQty -= (invProduct.passed_quantity - invProduct.accepted_quantity - invProduct.not_passed_quantity)
        } else {
          if (remainderQty > 0) {
            toWarehouse.push({
              invoice_product_id: invProduct.id,
              quantity: remainderQty,
              locator_id: this.selectedLocator.id,
              invoice_id: this.data.invoiceId,
              nomenclature_id: this.nomenclature.id
            })
          }
          remainderQty = 0;
        }
      })
    }

    let toProductionLists = [];
    this.itemsToAllocate.forEach(item => {
      item.listproductsToSubmit.forEach(detail => {
        toProductionLists.push({
          invoice_product_id: item.invoice_product_id,
          listproduct_id: detail.listproduct_id,
          quantity: detail.quantity,
          invoice_id: this.data.invoiceId,
          nomenclature_id: this.nomenclature.id
        })
      })
    })

    return {
      to_warehouse: toWarehouse,
      to_production_list: toProductionLists,
    }
  }

  onSubmit() {
    this.isSaving = true;
    const payload = this.getSubmitBody();
    this.allocationService.acceptSeveral(payload).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => {
      this.dialogRef.close(true);
      this.reloadCurrentRoute();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  raiseNotEnough() {
    this.messageService.add({
      severity: 'error',
      summary: 'Quantity excess.',
      detail: `The selected amount (${this.totalSelectedQty}) is greater than available (${this.totalAvailableQty})`
    });
  }

  raiseSmallerAmount(selected_quantity, remainderQty) {
    this.messageService.add({
      severity: 'info',
      summary: 'Quantity excess.',
      detail: `The amount required by this listproduct (${selected_quantity}) is greater than available (${remainderQty}), selected available amount to allocate (${remainderQty}) `
    });

  }

  ngOnInit(): void {
    this.totalAvailableQty = this.data.invoiceProduct.totalQuantityPassed - this.data.invoiceProduct.totalAcceptedQuantity - this.data.invoiceProduct.totalQuantityNotPassed;
    this.nomenclature = this.data.invoiceProduct.nomenclature;
    this.requiredByListProducts(this.nomenclature.id);
    this.reservedByListProducts(this.nomenclature.id);
  }

  generateQrCode(productList: any) {
    const send = {
      by_nomenclatures_production_list: []
    };

    this.listService.getProductListsParentIds(productList.id, productList).subscribe(res => {
      let listId = productList.list.id;
      if (productList.nomenclature.type === ENomenclatureType.ASSEMBLY) {
        listId = productList.id;
      }

      send.by_nomenclatures_production_list.push({
        nomenclature_id: productList.nomenclature.id,
        root_list_id: productList.root_production_list?.id,
        list_id: listId,
        lists_ids: res.data,
        total_quantity: productList.required_quantity,
      });
      this.qrCodeService.generateQrCodes(send).subscribe();
    });
  }
}
