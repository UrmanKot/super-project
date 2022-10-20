import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ENomenclatureBulk, ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {Technology} from '../../models/technology';
import {Product} from '../../models/product';
import {Category} from '../../models/category';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-create-edit-product-form',
  templateUrl: './create-edit-product.component-form.html',
  styleUrls: ['./create-edit-product.component-form.scss']
})
export class CreateEditProductComponentForm implements OnInit, OnDestroy {
  @Input() type: 'edit' | 'create' = 'edit';
  @Input() product: Partial<Product>;
  @Output() formChange: EventEmitter<{ invalid: boolean, formValue: Partial<Product & Nomenclature> }> = new EventEmitter<{ invalid: boolean; formValue: Partial<Product> }>();
  @Output() uploadImage: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() removeImage: EventEmitter<number> = new EventEmitter<number>();

  nomenclatureType = ENomenclatureType;

  selectedTechnologiesIds: number[] = [];

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
    bulk_or_serial: ['0', Validators.required],
    codeId: [{value: '', disabled: true}],
    technologies: [[]],
  });

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.formChange.next({invalid: this.form.invalid, formValue: data});
    });

    if (this.product) {
      if (this.product.nomenclature.technologies.length > 0) {
        this.selectedTechnologiesIds = this.product.nomenclature.technologies.map(t => t.id);
        this.form.get('technologies').patchValue([...this.product.nomenclature.technologies])
      }

      this.form.patchValue(this.product.nomenclature);

      this.form.get('quantity').patchValue(this.product.quantity);
      this.form.get('codeId').patchValue(this.product.nomenclature.code);

      if (this.product.nomenclature.category) {
        this.form.get('category').patchValue(this.product.nomenclature.category.id);
      }

      if (this.product.nomenclature.type === ENomenclatureType.PURCHASED) {
        this.form.removeControl('code');
      }
    }
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
    this.removeImage.emit(idx)
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
  }
}
