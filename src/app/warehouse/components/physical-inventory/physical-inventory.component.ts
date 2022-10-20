import {Component, OnInit} from '@angular/core';
import {PhysicalInventory} from '../../models/physical-inventory';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {PhysicalInventoryService} from '../../services/physical-inventory.service';

@Component({
  selector: 'pek-physical-inventory',
  templateUrl: './physical-inventory.component.html',
  styleUrls: ['./physical-inventory.component.scss']
})
export class PhysicalInventoryComponent implements OnInit {
  isLoading = true;

  physicalInventories: PhysicalInventory[] = [];
  selectedPhysicalInventory: PhysicalInventory;
  countPhysicalInventory = 0;

  searchForm: FormGroup = this.fb.group({
    page: [1]
  });

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
    this.physicalInventoryService.getForPagination(this.query).subscribe(physicalInventories => {
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

  }

  paginate(evt: any) {
    this.searchForm.get('page').patchValue(evt.page + 1);
    this.searchPhysicalInventory();
  }
}
