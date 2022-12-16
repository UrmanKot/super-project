import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'pek-create-update-vehicle',
  templateUrl: './create-update-vehicle.component.html',
  styleUrls: ['./create-update-vehicle.component.scss']
})
export class CreateUpdateVehicleComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CreateUpdateVehicleComponent>,
    fb: FormBuilder,
    private vehiclesService: VehicleService,
    @Inject(MAT_DIALOG_DATA) public data: {type: 'edit' | 'add', entity}
  ) {
    this.form = fb.group({
      model: [null , [Validators.required]],
      number: [null , [Validators.required]]
    });

    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.entity);
    }
  }

  ngOnInit(): void {
  }


  addVehicle() {
    if (this.form.valid) {
      this.vehiclesService
        .create(this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.dialogRef.close(res);
        });
    }
  }

  editVehicle() {
    if (this.form.valid) {
      this.form.value.id = this.data.entity.id;
      this.vehiclesService
        .update( this.form.value.id, this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.dialogRef.close(res);
        });
    }
  }
}
