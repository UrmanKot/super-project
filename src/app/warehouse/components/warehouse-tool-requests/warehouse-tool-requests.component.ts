import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolOrderService} from '../../services/tool-order.service';
import {ToolOrder} from '../../models/tool-order';
import {Subject, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuerySearch} from "@shared/models/other";
import {AdapterService} from '@shared/services/adapter.service';

@Component({
  selector: 'pek-warehouse-tool-requests',
  templateUrl: './warehouse-tool-requests.component.html',
  styleUrls: ['./warehouse-tool-requests.component.scss']
})
export class WarehouseToolRequestsComponent implements OnInit, OnDestroy {
  isLoading = true;
  toolRequests: ToolOrder[] = [];
  selectedRequest: ToolOrder;

  private destroy$ = new Subject();

  query: QuerySearch[] = [];

  requestsTypes = [
    {name: 'Open Requests', value: false},
    {name: 'Closed Requests', value: true},
  ];

  constructor(
    private toolRequestService: ToolOrderService,
    private fb: FormBuilder,
    private adapterService: AdapterService,
  ) { }

  searchForm: FormGroup = this.fb.group({
    order_by_area: [null],
    order_by_locator: [null],
    order_by_id: [null],
    order_by_created: [null],
    order_by_completed: [null],
    is_completed: [null],
    created_after: [null],
    created_before: [null],
    completed_after: [null],
    completed_before: [null],
  });

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this.prepareQuery();
    this.toolRequestService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(toolRequests => {
      this.toolRequests = toolRequests;
      this.isLoading = false;
    })
  }

  prepareQuery(): void {
    this.query = [];
    this.query = [{name: 'is_completed', value: false}];

    this.prepareOrderingField();
    const sorting = this.prepareSortingField();
    if (sorting) {
      this.query.push({name: 'ordering', value: sorting});
    }
  }

  sorting(value: boolean, field: string) {
    this.resetAllSorting();
    if (value === null) {
      this.searchForm.get(field).patchValue(false);
    } else if (value === false) {
      this.searchForm.get(field).patchValue(true);
    } else if (value === true) {
      this.searchForm.get(field).patchValue(null);
    }
    this.getRequests();
  }

  prepareOrderingField(): void {
    if (this.searchForm.get('is_completed').value === false) {
      this.query.push({name: 'is_completed', value: false});
    } else if (this.searchForm.get('is_completed').value === true) {
      this.query.push({name: 'is_completed', value: true});
    }
    if (this.searchForm.get('created_after').value) {
      this.query.push({
        name: 'created_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('created_after').value)
      });
    }
    if (this.searchForm.get('created_before').value) {
      this.query.push({
        name: 'created_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('created_before').value)
      });
    }
    if (this.searchForm.get('completed_after').value) {
      this.query.push({
        name: 'completed_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('completed_after').value)
      });
    }
    if (this.searchForm.get('completed_before').value) {
      this.query.push({
        name: 'completed_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('completed_before').value)
      });
    }
  }

  prepareSortingField(): string {
    let sorting = '';
    if (this.searchForm.get('order_by_id').value !== null) {
      if (this.searchForm.get('order_by_id').value) {
        sorting += '-id';
      } else {
        sorting += 'id';
      }
    }
    if (this.searchForm.get('order_by_area').value !== null) {
      if (this.searchForm.get('order_by_area').value) {
        sorting += '-area_locator__area__name';
      } else {
        sorting += 'area_locator__area__name';
      }
    }
    if (this.searchForm.get('order_by_locator').value !== null) {
      if (this.searchForm.get('order_by_locator').value) {
        sorting += '-area_locator__name';
      } else {
        sorting += 'area_locator__name';
      }
    }
    if (this.searchForm.get('order_by_created').value !== null) {
      if (this.searchForm.get('order_by_created').value) {
        sorting += '-created';
      } else {
        sorting += 'created';
      }
    }
    if (this.searchForm.get('order_by_completed').value !== null) {
      if (this.searchForm.get('order_by_completed').value) {
        sorting += '-completed';
      } else {
        sorting += 'completed';
      }
    }
    return sorting;
  }

  resetAllSorting() {
    this.searchForm.get('order_by_area').setValue(null);
    this.searchForm.get('order_by_locator').setValue(null);
    this.searchForm.get('order_by_id').setValue(null);
    this.searchForm.get('order_by_created').setValue(null);
    this.searchForm.get('order_by_completed').setValue(null);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
