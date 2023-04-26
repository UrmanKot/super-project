import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../../crm/models/company';
import {CompanyService} from '../../../crm/services/company.service';
import {EmployeePosition} from '@shared/models/employee-position';
import {EmployeePositionService} from '@shared/services/employee-position.service';

@Component({
  selector: 'pek-employee-position-picker',
  templateUrl: './employee-position-picker.component.html',
  styleUrls: ['./employee-position-picker.component.scss']
})
export class EmployeePositionPickerComponent implements OnInit {

  @Output() selectPosition: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentPositionId: number;
  @Input() isDisabled: boolean = false
  isLoading = true;
  positions: EmployeePosition[] = [];
  selectedPositionId: number;

  constructor(
    private readonly employeePositionService: EmployeePositionService,
  ) { }

  ngOnInit(): void {
    this.employeePositionService.get().pipe(
    ).subscribe(positions => {
      this.positions = positions;

      if (this.currentPositionId) {
        this.selectedPositionId = this.currentPositionId;
      }

      this.isLoading = false;
    });
  }

  onSelectCompany() {
    this.selectPosition.emit(this.selectedPositionId);
  }

}
