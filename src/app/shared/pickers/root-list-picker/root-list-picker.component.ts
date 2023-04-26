import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {List} from '../../../warehouse/models/list';
import {ListService} from '../../../warehouse/services/list.service';

@Component({
  selector: 'pek-root-list-picker',
  templateUrl: './root-list-picker.component.html',
  styleUrls: ['./root-list-picker.component.scss']
})
export class RootListPickerComponent implements OnInit {
  @Output() selectRootListId: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentListId: number;
  @Input() accountingType: number;

  selectedListId: number;

  isLoading = true;
  lists: List[] = [];

  constructor(
    private listService: ListService,
  ) {
  }

  ngOnInit(): void {
    this.listService.get(
      [{name: 'list_order_accounting_type', value: this.accountingType}]
    ).pipe(
    ).subscribe(lists => {
      this.lists = lists;
      this.lists.forEach(l => l.fullName = `(${l.id}) ${l.nomenclature.code}~${l.nomenclature.name}`);

      if (this.selectedListId) {
        this.selectedListId = this.currentListId;
      }

      this.isLoading = false;
    });
  }

  onSelectList() {
    this.selectRootListId.emit(this.selectedListId);
  }

}
