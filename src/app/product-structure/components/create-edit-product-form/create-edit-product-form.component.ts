import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ENomenclatureBulk, ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {Technology} from '../../models/technology';
import {Product} from '../../models/product';
import {Category} from '../../models/category';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Subject, takeUntil} from 'rxjs';
import {TechnicalEquipmentService} from '../../services/technical-equipment.service';
import {TechnicalEquipment} from '../../models/technical-equipment';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'pek-create-edit-form',
  templateUrl: './create-edit-product-form.component.html',
  styleUrls: ['./create-edit-product-form.component.scss']
})
export class CreateEditProductFormComponent implements OnInit, OnDestroy {
  technicalEquipments: TechnicalEquipment[] = [];
  deleted_technical_equipments_ids: number[] = [];
  @Input() isShowQuantity = true;
  @Input() type: 'edit' | 'create' = 'edit';
  @Input() product: Partial<Product>;
  @Output() formChange: EventEmitter<{ invalid: boolean, formValue: Partial<Product & Nomenclature> }> = new EventEmitter<{ invalid: boolean; formValue: Partial<Product> }>();
  @Output() uploadImage: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() removeImage: EventEmitter<number> = new EventEmitter<number>();

  nomenclatureType = ENomenclatureType;

  selectedTechnologiesIds: number[] = [];
  warehouseQuantity: number;

  bulkOrSerial = [
    {label: 'Bulk', value: ENomenclatureBulk.BULK},
    {label: 'With Serial Numbers', value: ENomenclatureBulk.SERIAL}
  ];

  form: FormGroup = this.fb.group({
    type: [null, {disabled: true}],
    name: ['', Validators.required],
    code: ['', Validators.required],
    description: [''],
    quantity: [1, [Validators.required, Validators.min(1)]],
    category: [null],
    canAddTechnicalEquipment: [false],
    bulk_or_serial: ['0', Validators.required],
    codeId: [{value: '', disabled: true}],
    technologies: [[]],
    technical_equipments: this.fb.array([]),
    deleted_technical_equipments_ids: [[]],
    min_quantity: [0],
    max_quantity: [0],
  });

  private destroy$ = new Subject();
  isItemSelected: boolean;

  constructor(
    private readonly messageService: MessageService,
    private readonly fb: FormBuilder,
    private technicalEquipmentService: TechnicalEquipmentService,
    private readonly nomenclatureService: NomenclatureService,
  ) {
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('this.form.valueChanges', data);
      this.formChange.next({invalid: this.form.invalid, formValue: data});
    });

    if (this.product) {
      if (this.product.nomenclature.technologies.length > 0) {
        this.selectedTechnologiesIds = this.product.nomenclature.technologies.map(t => t.id);
        this.form.get('technologies').patchValue([...this.product.nomenclature.technologies]);
      }

      this.form.patchValue(this.product.nomenclature);

      if (this.isShowQuantity) {
        this.form.get('quantity').patchValue(this.product.quantity);
      } else {
        this.form.removeControl('quantity');
      }

      this.form.get('codeId').patchValue(this.product.nomenclature.code);

      if (this.product.nomenclature.category) {
        this.form.get('category').patchValue(this.product.nomenclature.category.id);
      }

      if (this.product.nomenclature.type === ENomenclatureType.PURCHASED) {
        this.form.removeControl('code');
        this.form.get('category').setValidators([Validators.required])
      }

      if (this.product.nomenclature.id) {
        this.getTechnicalEquipments();
      }
    }

    if (this.type === 'edit') {
      this.getNomenclatureWarehouseQuantity();
    }
  }

  getNomenclatureWarehouseQuantity() {
    this.nomenclatureService.getWarehouseQuantity(this.product.nomenclature.id).subscribe(response => this.warehouseQuantity = response.total_warehouse_quantity)
  }

  getTechnicalEquipments(): void {
    this.technicalEquipmentService.get([{
      name: 'nomenclature',
      value: this.product.nomenclature.id
    }]).pipe(takeUntil(this.destroy$)).subscribe(res => {
      if (res) {
        this.technicalEquipments = res.map(equipment => {
          return {
            id: equipment.id,
            nomenclature_in_use: {
              id: equipment.nomenclature_in_use.id,
              code: equipment.nomenclature_in_use.code,
              name: equipment.nomenclature_in_use.name,
            },
            quantity: equipment.quantity,
            technology: equipment.technology,
          };
        });
        if (this.technicalEquipments.length > 0) {
          this.form.get('canAddTechnicalEquipment').patchValue(true);
          this.technicalEquipments.forEach(equipment => {
            (this.form.controls['technical_equipments'] as FormArray).push(this.fb.group({
              ...equipment
            }));
          });
        }
      }

    });
  }

  onSelectCategory(category: Category) {
    if (category) {
      this.form.get('category').patchValue(category.id);
    } else {
      this.form.get('category').patchValue(null);
    }
  }

  onUploadImages(files: File[]) {
    this.uploadImage.emit(files);
  }

  onRemoveImage(idx: number) {
    this.removeImage.emit(idx);
  }

  drop(event: CdkDragDrop<Technology[]>) {
    const technologies = this.form.get('technologies').value.map(t => t);
    const technologiesIds = this.selectedTechnologiesIds;
    moveItemInArray(technologies, event.previousIndex, event.currentIndex);
    moveItemInArray(technologiesIds, event.previousIndex, event.currentIndex);
    this.form.get('technologies').patchValue([...technologies]);
    this.selectedTechnologiesIds = [...technologiesIds];
  }

  onSelectTechnology(technologies: Technology[]) {
    this.form.get('technologies').patchValue(technologies);
    this.selectedTechnologiesIds = technologies.map(t => t.id);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  addTechnicalEquipment() {
    console.log('this.form.get(\'technologies\')', this.form.get('technologies').value);
    const technologies = this.form.get('technologies').value;
    if (!technologies || technologies.length === 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Add Technologies.',
        detail: `Add Technologies First!`
      });
    }
    this.technicalEquipmentService.openAddTechnicalEquipment(technologies).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log('res', res);
      res.technology = technologies.find(el => el.id === res.technology.id);

      if (res) {
        (this.form.controls['technical_equipments'] as FormArray).push(this.fb.group({
          ...res
        }));
        this.refreshTechnicalEquipments();
      }
    });
  }

  refreshTechnicalEquipments(): void {
    this.technicalEquipments = [];
    (this.form.controls['technical_equipments'] as FormArray).controls.forEach(group => {
      this.technicalEquipments.push(group.value);
    });
  }

  equipmentChanged(data: { index: number; technicalEquipment: TechnicalEquipment }) {
    (this.form.controls['technical_equipments'] as FormArray).controls[data.index].setValue(data.technicalEquipment);
    this.refreshTechnicalEquipments();
  }

  equipmentDeleted(index: number) {
    if (index > -1) {
      const equipmentId = this.technicalEquipments[index].id;
      if (equipmentId) {
        this.deleted_technical_equipments_ids.push(this.technicalEquipments[index].id);
        this.form.get('deleted_technical_equipments_ids').patchValue([...this.deleted_technical_equipments_ids]);
      }
      this.technicalEquipments.splice(index, 1);
      (this.form.controls['technical_equipments'] as FormArray).removeAt(index);
    }
  }

  showWarehouseQuantityConfirm() {
    if (this.type === 'edit') {
      if (this.form.get('bulk_or_serial').value === ENomenclatureBulk.SERIAL) {
        this.nomenclatureService.showSerialConfirmationModal(this.product, this.warehouseQuantity).subscribe(confirm => {
          if (!confirm) {
            this.form.get('bulk_or_serial').patchValue(ENomenclatureBulk.BULK)
          }
        })
      }
    }
  }
}
