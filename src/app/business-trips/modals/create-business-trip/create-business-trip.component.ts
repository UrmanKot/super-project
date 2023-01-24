import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {DataToSend} from '../../components/edit-business-trip/edit-business-trip.component';
import {BusinessTripService} from '../../services/business-trip.service';
import {take} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {BusinessTripEmployee} from '../../models/business-trip-employee';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-create-business-trip',
  templateUrl: './create-business-trip.component.html',
  styleUrls: ['./create-business-trip.component.scss']
})
export class CreateBusinessTripComponent implements OnInit, OnDestroy {
  form: FormGroup;
  employeeFilter: [QuerySearch] = [{name: 'by_user_trip_permissions', value: true}];
  private formData: FormData;
  private destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private businessService: BusinessTripService,
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

  tripId: number;

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
    const employee = this.form.value.employee.id ? this.form.value.employee.id : null;
    this.businessService
      .create({id: null, employee})
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((res) => {
        this.tripId = res.id;
        this.employeeUpdate();
      });
  }

  employeeUpdate() {
    const employeeUpdate: DataToSend = {};
    if (this.form.value.employee.id) {
      employeeUpdate.employee = this.form.value.employee.id;
      employeeUpdate.custom_employee = null;
    } else {
      const position = this.form.value.employee_position;
      const firstName = this.form.value.employee_first_name;
      const lastNameName = this.form.value.employee_last_name;
      if (!firstName || !lastNameName) {
        return;
      }
      employeeUpdate.custom_employee = {
        id: this.form.value.employee_id,
        first_name: this.form.value.employee_first_name,
        last_name: this.form.value.employee_last_name,
        position: position ? position : null,
      };
      employeeUpdate.employee = null;
    }

    this.businessService
      .updateBusinessTripEmployee(this.tripId, employeeUpdate)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.router.navigate(['/business-trips/trip/edit/', this.tripId]);
        this.dialogRef.close(true);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
