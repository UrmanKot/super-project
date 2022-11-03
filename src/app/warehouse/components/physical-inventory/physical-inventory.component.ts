import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhysicalInventory} from '../../models/physical-inventory';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {PhysicalInventoryService} from '../../services/physical-inventory.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-physical-inventory',
  templateUrl: './physical-inventory.component.html',
  styleUrls: ['./physical-inventory.component.scss']
})
export class PhysicalInventoryComponent implements OnInit, OnDestroy {
  isLoading = true;

  physicalInventories: PhysicalInventory[] = [];
  selectedPhysicalInventory: PhysicalInventory;
  countPhysicalInventory = 0;

  searchForm: FormGroup = this.fb.group({
    page: [1]
  });

  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private readonly physicalInventoryService: PhysicalInventoryService
  ) {
  }

  ngOnInit(): void {
    this.getPhysicalInventoryForPagination();
  }

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  getPhysicalInventoryForPagination() {
    this.physicalInventoryService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(physicalInventories => {
      this.physicalInventories = physicalInventories.results;
      this.countPhysicalInventory = physicalInventories.count;
      this.isLoading = false;
    });
  }

  searchPhysicalInventory() {
    this.isLoading = true;
    this.selectedPhysicalInventory = null;

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true}
    ];

    this.getPhysicalInventoryForPagination();
  }

  onCreatePhysicalInventory() {
    this.physicalInventoryService.openCreatePhysicalInventoryModal().subscribe(response => {
      if (response) {
        this.searchPhysicalInventory();
      }
    })
  }

  paginate(evt: any) {
    this.searchForm.get('page').patchValue(evt.page + 1);
    this.searchPhysicalInventory();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
