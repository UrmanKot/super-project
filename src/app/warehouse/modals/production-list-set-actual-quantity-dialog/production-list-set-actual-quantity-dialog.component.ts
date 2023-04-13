import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListService} from '../../services/list.service';
import {ActualQuantityPayload, ListProduct, ListProductQuantity} from '../../models/list-product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListProductService} from '../../services/list-product.service';
import {finalize} from 'rxjs/operators';
import {AdapterService} from '@shared/services/adapter.service';
import {forkJoin} from 'rxjs';
import {Impression} from '../../../crm/models/event-company';

@Component({
  selector: 'pek-production-list-set-actual-quantity-dialog',
  templateUrl: './production-list-set-actual-quantity-dialog.component.html',
  styleUrls: ['./production-list-set-actual-quantity-dialog.component.scss']
})
export class ProductionListSetActualQuantityDialogComponent implements OnInit {
  isSaving = false;

  quantities: ListProductQuantity[] = [];

  isSerial = false;
  isLoading = false;

  error: string;

  listProducts: ListProduct[] = [];
  listProduct: ListProduct;

  products: ListProduct[] = [];
  selected: any;

  totalRequiredQuantity: number;

  deficitQuantity: number = 0;

  form: FormGroup = this.fb.group({
    id: [<number>null],
    actual_quantity: [<number>null, [Validators.required, Validators.min(1)]],
  });

  serialsWarehouse: { id: number, label: string }[] = [];
  serialsProduction: { id: number, label: string }[] = [];

  constructor(
    private readonly dialogRef: MatDialogRef<ProductionListSetActualQuantityDialogComponent>,
    private readonly listService: ListService,
    private readonly listProductService: ListProductService,
    private readonly adapterService: AdapterService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { listProduct: ListProduct, parent: ListProduct, isOldList: boolean },
  ) {
  }

  ngOnInit(): void {
    if (!this.data.isOldList) {
      this.listProduct = Object.assign({}, this.data.listProduct);

      this.totalRequiredQuantity = JSON.parse(JSON.stringify(this.data.listProduct.total_required_quantity));

      this.deficitQuantity = this.totalRequiredQuantity;

      if (this.listProduct.technologies.length === 0) {
        this.products = this.data.listProduct.products.map(p => p);
        this.form.get('id').patchValue(this.listProduct.id);
        this.form.get('actual_quantity').patchValue(0);
      } else {
        this.generateListProducts();
      }
    } else {
      this.listProduct = {...this.data.listProduct};
      this.totalRequiredQuantity = JSON.parse(JSON.stringify(this.data.listProduct.total_required_quantity));
      this.deficitQuantity = this.totalRequiredQuantity;
      this.form.get('id').patchValue(this.listProduct.id);
      this.form.get('actual_quantity').patchValue(0);

      if (this.listProduct.nomenclature.bulk_or_serial === '1') {
        this.form.addControl('serial_product_ids', this.fb.control([]));
        this.form.addControl('root_serial_numbers_in_production', this.fb.control([]));
        this.form.addControl('ownProduction', this.fb.control(0));
        this.loadSerialInfo();
      }

    }
  }

  loadSerialInfo() {
    this.isSerial = true;
    this.isLoading = true;
    this.listService.getNomenclatureInfo(this.data.listProduct.nomenclature.id).pipe(
      finalize(() => this.isLoading = false),
    ).subscribe({
      next: response => {
        if (response) {
          response.warehouse_products.forEach(item => {
            this.serialsWarehouse.push(
              {
                id: item.id,
                label: item.serial_number.type_with_number ? item.serial_number.type_with_number : item.serial_number.id
              }
            );
          });

          response.serial_numbers_in_production.forEach(item => {
            this.serialsProduction.push(
              {id: item.id, label: item.type_with_number ? item.type_with_number : item.id}
            );
          });
        }
      },
      error: () => {
        this.error = 'There are no warehouse products on stock and in production';
      }
    });
  }

  generateListProducts() {
    const products: ListProduct[] = this.data.listProduct.filteredProducts.map(p => p);
    this.products = [...products];

    const firstListProducts = this.listProduct.filteredProducts.filter(p => p.task_sort_value === 1);

    let groupId = 0;

    firstListProducts.forEach(product => {
      groupId++;

      let currentProduct: ListProduct = product;

      while (currentProduct?.next_technology_list_product) {
        currentProduct.groupId = groupId;
        currentProduct = products.find(p => p.id === currentProduct.next_technology_list_product);
      }

      currentProduct.groupId = groupId;
    });

    const newProducts: ListProduct[] = [];

    products.forEach(product => {
      if (!newProducts.find(p => p.technology?.id === product.technology?.id && p.nomenclature.id === product.nomenclature.id)) {
        product.children = products.filter(p => p.technology?.id === product.technology?.id);
        newProducts.push(product);
      }
    });

    newProducts.sort((a, b) => a.task_sort_value - b.task_sort_value);

    newProducts.forEach(product => this.quantities.push({
      products: product.children,
      quantity: 0,
    }));

    this.listProducts = newProducts.map(p => p);

    if (this.data.parent) {
      const lastProducts = this.quantities[this.quantities.length - 1].products;

      this.quantities.forEach((quantity, idx) => {
        if (idx < this.quantities.length - 1) {
          quantity.products.forEach((product, idx) => {
            product.parent_technology_list_product = lastProducts[idx].parent_technology_list_product;
          });
        }
      });
    }
  }

  onEditQuantity(evt: any, listProduct: ListProduct) {
    this.quantities.forEach(product => {
      if (product.products.find(p => p.id === listProduct.id)) {
        product.quantity = +evt.target.value;
      }
    });

    const lastIndex = this.listProducts.length - 1;

    let deficit = 0;

    this.quantities.forEach((quantity, idx) => {
      if (idx === lastIndex) {
        deficit = this.totalRequiredQuantity - quantity.quantity;
      }
    });

    if (deficit < 0) {
      deficit = 0;
    }

    this.deficitQuantity = deficit;
  }

  onSave() {
    if (this.data.listProduct.nomenclature.bulk_or_serial === '1') {
      if (this.data.isOldList) {
        this.saveOldProductionListSerial();
      } else {
      }
    } else {
      if (this.data.isOldList) {
        this.saveOldProductionList();
      } else {
        this.saveNewProductionList();
      }
    }

  }

  disabled() {
    let disabled = false;

    if (this.data.listProduct.nomenclature.bulk_or_serial === '1') {
      if (this.form.get('ownProduction').value === 0 && this.form.get('serial_product_ids').value.length > this.data.listProduct.total_required_quantity) {
        disabled = true;
      } else if (this.form.get('ownProduction').value === 1 && this.form.get('root_serial_numbers_in_production').value.length > this.data.listProduct.total_required_quantity) {
        disabled = true;
      }
    } else {
      if (this.listProduct.technologies.length === 0) {
        disabled = this.form.get('actual_quantity').value > this.data.listProduct.pureTotalRequiredQuantity;
      } else {
        // if (this.data.parent) {
        // } else {
        //   disabled = this.quantities.reduce((sum, q) => sum += q.quantity, 0) > this.data.listProduct.pureTotalRequiredQuantity;
        // }

        disabled = this.quantities.reduce((sum, q) => sum += q.quantity, 0) > this.data.listProduct.total_required_quantity;
      }
    }

    return disabled;
  }

  saveNewProductionList() {
    this.isSaving = true;

    const totalRequired = this.data.listProduct.pureTotalRequiredQuantity;
    const total: number = this.quantities.reduce((sum, q) => sum += q.quantity, 0);

    let send: ActualQuantityPayload[] = [];

    if (this.listProduct.technologies.length === 0) {
      this.products.forEach((listProduct, idx) => {
        if (idx < this.form.get('actual_quantity').value) {
          send.push({
            id: listProduct.id,
            actual_quantity: 1,
          });
        } else {
          send.push({
            id: listProduct.id,
            actual_quantity: 0,
          });
        }
      });
    } else {
      if (!this.data.parent) {
        let groupId = 1;

        if (total === 0) {
          this.quantities.forEach(quantity => {
            quantity.products.forEach(p => {
              send.push({
                id: p.id,
                actual_quantity: 0,
              });
            });
          });
        } else if (total !== totalRequired) {
          this.quantities.forEach(quantity => {
            if (quantity.quantity > 0) {

              let count = 0;

              while (count < quantity.quantity) {
                const findProduct = quantity.products.find(p => p.groupId === groupId);

                send.push({
                  id: findProduct.id,
                  group: groupId,
                  actual_quantity: 1,
                });

                groupId++;
                count++;
              }
            }
          });

          const groupsIds: Set<number> = new Set<number>();
          send.forEach(s => groupsIds.add(s.group));

          this.quantities.forEach(quantity => {
            quantity.products.forEach(product => {
              if (!groupsIds.has(product.groupId)) {
                send.push({
                  id: product.id,
                  group: product.groupId,
                  actual_quantity: 0,
                });
              }
            });
          });
        } else {
          this.quantities.forEach(quantity => {
            if (quantity.quantity === totalRequired) {
              quantity.products.forEach(product => {
                send.push({
                  id: product.id,
                  actual_quantity: 1,
                });
              });
            } else if (quantity.quantity > 0) {
              let count = 0;

              while (count < quantity.quantity) {
                const findProduct = quantity.products.find(p => p.groupId === groupId);

                send.push({
                  id: findProduct.id,
                  group: groupId,
                  actual_quantity: 1,
                });

                groupId++;
                count++;
              }
            }
          });
        }
      } else {

        const groupsIdsArray: number[] = [];

        this.quantities.forEach(quantity => {
          quantity.products.forEach(product => {
            if (this.data.parent.filteredProducts.map(p => p.id).includes(product.parent_technology_list_product)) {
              groupsIdsArray.push(product.groupId);
            }
          });
        });

        let groupId = this.adapterService.removeDuplicates(groupsIdsArray, id => id).sort((a, b) => a)[0];

        if (total === 0) {
          this.quantities.forEach(quantity => {
            quantity.products.forEach(product => {
              if (this.data.parent.filteredProducts.map(p => p.id).includes(product.parent_technology_list_product)) {
                send.push({
                  id: product.id,
                  actual_quantity: 0,
                  group: product.groupId,
                });
              }
            });
          });
        } else if (total !== totalRequired) {
          this.quantities.forEach(quantity => {
            if (quantity.quantity > 0) {

              let count = 0;

              while (count < quantity.quantity) {
                const findProduct = quantity.products.find(p => p.groupId === groupId && this.data.parent.filteredProducts.map(p => p.id).includes(p.parent_technology_list_product));

                send.push({
                  id: findProduct.id,
                  group: groupId,
                  actual_quantity: 1,
                });

                groupId++;
                count++;
              }
            }
          });

          const groupsIds: Set<number> = new Set<number>();
          send.forEach(s => groupsIds.add(s.group));

          this.quantities.forEach(quantity => {
            quantity.products.forEach(product => {
              if (!groupsIds.has(product.groupId) && this.data.parent.filteredProducts.map(p => p.id).includes(product.parent_technology_list_product)) {
                send.push({
                  id: product.id,
                  group: product.groupId,
                  actual_quantity: 0,
                });
              }
            });
          });
        } else {
          this.quantities.forEach(quantity => {
            if (quantity.quantity === totalRequired) {
              quantity.products.forEach(product => {
                if (this.data.parent.filteredProducts.map(p => p.id).includes(product.parent_technology_list_product)) {
                  send.push({
                    id: product.id,
                    group: product.groupId,
                    actual_quantity: 1,
                  });
                }
              });
            } else if (quantity.quantity > 0) {
              let count = 0;

              while (count < quantity.quantity) {
                const findProduct = quantity.products.find(p => p.groupId === groupId && this.data.parent.filteredProducts.map(p => p.id).includes(p.parent_technology_list_product));

                send.push({
                  id: findProduct.id,
                  group: groupId,
                  actual_quantity: 1,
                });

                groupId++;
                count++;
              }
            }
          });
        }
      }


      console.log(send);

      if (!this.data.parent) {
        send.forEach(s => {
          const newFindProduct = this.products.find(p => p.id === s.id);
          const findProducts = this.products.filter(p => p.technology.id === newFindProduct.technology.id);

          findProducts.forEach(findProduct => {
            while (findProduct.next_technology_list_product) {
              const product = this.products.find(p => p.id === findProduct.next_technology_list_product);

              if (!send.find(t => t.id === product.id) && !send.find(t => t.id === product?.next_technology_list_product)) {
                send.push({
                  id: product.id,
                  group: product.groupId,
                  actual_quantity: 0,
                });
              }

              findProduct = product;
            }
          });
        });
      } else {
        const groups = this.adapterService.removeDuplicates(send, send => send.group)
          .map(s => s.group);

        send.forEach(s => {
          const newFindProduct = this.products.find(p => p.id === s.id);
          const findProducts = this.products.filter(p => p.technology.id === newFindProduct.technology.id);

          findProducts.forEach(findProduct => {
            while (findProduct.next_technology_list_product) {
              const product = this.products.find(p => p.id === findProduct.next_technology_list_product);

              if (!send.find(t => t.id === product.id) && groups.includes(product.groupId)) {
                send.push({
                  id: product.id,
                  group: product.groupId,
                  actual_quantity: 0,
                });
              }

              findProduct = product;
            }
          });
        });
      }

      send = send.map(s => {
        return {
          id: s.id,
          actual_quantity: s.actual_quantity,
        };
      });
    }

    const notProcessedSend = {
      ids: []
    };

    const processedIds = send.map(s => s.id);

    this.products.forEach(p => {
      if (!processedIds.includes(p.id) && p.status !== 'Not processed') {
        notProcessedSend.ids.push(p.id);
      }
    });

    if (notProcessedSend.ids.length > 0) {
      forkJoin({
        processedListProducts: this.listProductService.setActualQuantity(send),
        notProcessedListProducts: this.listProductService.cancelActualQuantity(notProcessedSend)
      }).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(({processedListProducts, notProcessedListProducts}) => {
        const listProducts = [...processedListProducts, ...notProcessedListProducts];
        this.dialogRef.close(listProducts);
      });
    } else {
      this.listProductService.setActualQuantity(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(listProducts => this.dialogRef.close(listProducts));
    }


    // this.listProductService.setActualQuantity(send).pipe(
    //   finalize(() => this.isSaving = false)
    // ).subscribe(listProducts => this.dialogRef.close(listProducts));
  }

  saveOldProductionList() {
    this.isSaving = true;

    const send: ActualQuantityPayload[] = [{
      id: this.listProduct.id,
      actual_quantity: +this.form.get('actual_quantity').value,
    }];

    this.listProductService.setActualQuantity(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(listProducts => {
      this.dialogRef.close(listProducts);
    });
  }

  onSetDeficitQuantity() {
    this.deficitQuantity = this.totalRequiredQuantity - +this.form.get('actual_quantity').value;

    if (this.deficitQuantity < 0) {
      this.deficitQuantity = 0;
    }
  }

  private saveOldProductionListSerial() {
    this.isSaving = true;

    const send = this.form.value;

    if (send.ownProduction === 0) {
      delete send.root_serial_numbers_in_production;
      send.actual_quantity = this.form.value.serial_product_ids.length;
      send.serial_product_ids = this.form.get('serial_product_ids').value;
    } else if (send.ownProduction === 1) {
      delete send.serial_product_ids;
      send.actual_quantity = this.form.value.root_serial_numbers_in_production.length;
      send.root_serial_numbers_in_production = this.form.get('root_serial_numbers_in_production').value;
      send.root_serial_numbers_in_production = send.root_serial_numbers_in_production.map(val => +val);
    }

    delete send.ownProduction;

    this.listProductService.setActualQuantity([send]).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(listProducts => {
      this.dialogRef.close(listProducts);
    });
  }
}
