import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {DataToSend} from '../../components/edit-business-trip/edit-business-trip.component';
import {BusinessTripService} from '../../services/business-trip.service';
import {take} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'pek-create-business-trip',
  templateUrl: './create-business-trip.component.html',
  styleUrls: ['./create-business-trip.component.scss']
})
export class CreateBusinessTripComponent implements OnInit {
  form: FormGroup;
  employeeFilter: [QuerySearch] = [{name: 'by_user_trip_permissions', value: true}];
  private formData: FormData;
  constructor(
    private fb: FormBuilder,
    private expensesService: BusinessTripService,
    private dialogRef: MatDialogRef<CreateBusinessTripComponent>,
    private router: Router
    ) {
    this.form = this.fb.group({
      isOtherEmployee: [false],
      employee: this.fb.group({
        id: [null],
        first_name: [null],
        last_name: [null],
        position: [null]
      }),
      employee_first_name: [''],
      employee_last_name: [''],
      employee_position: [null],
      employee_id: [null],
    });
  }

  ngOnInit(): void {
  }

  employeeChanged() {
    this.form.get('employee').reset();
    this.form.get('employee_first_name').reset();
    this.form.get('employee_last_name').reset();
    this.form.get('employee_position').reset();
  }

  get _employee(): FormGroup {
    return (this.form.get('employee') as FormGroup) as FormGroup;
  }
  addBusinessTrip() {
    const dataToSend = this.prepareDataToSend();
    const result = this.obj2FormData(dataToSend);
    this.expensesService
      .create(result)
      .pipe(take(1))
      .subscribe((res) => {
        this.router.navigate(['/business-trips/trip/edit/', res.id])
        this.dialogRef.close(true);
      });
  }

  prepareDataToSend(): DataToSend {
    const dataToSend: DataToSend = {};

    if (this.form.value.employee.id) {
      dataToSend.employee = this.form.value.employee.id;
      dataToSend.full_employee = this.form.value.employee;
    } else {
      dataToSend.custom_employee = {
        id: this.form.value.employee_id,
        first_name: this.form.value.employee_first_name,
        last_name: this.form.value.employee_last_name,
        position: this.form.value.employee_position,
      };
      dataToSend.full_employee = dataToSend.custom_employee;
    }
    return dataToSend;
  }

  obj2FormData(obj, formData = new FormData()) {
    this.formData = formData;
    this.createFormData(obj);
    return this.formData;
  }

  createFormData(obj, subKeyStr = '') {
    for (const i in obj) {
      const value = obj[i];
      const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

      if (typeof (value) === 'string' || typeof (value) === 'number' || typeof (value) === 'boolean') {
        // @ts-ignore
        this.formData.append(subKeyStrTrans, value);

      } else if (typeof (value) === 'object') {
        if (value instanceof File) {
          this.formData.append(subKeyStrTrans, value);
        } else {
          this.createFormData(value, subKeyStrTrans);
        }
      }
    }
  }
}
