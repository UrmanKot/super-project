import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListService} from '../../services/list.service';
import {List} from '../../models/list';
import {tap} from 'rxjs/operators';
import {
  ProductionListAccountingType,
  ProductionListPositionType
} from '../../components/production-lists/production-lists.component';

@Component({
  selector: 'pek-production-list-full-statistics',
  templateUrl: './production-list-full-statistics.component.html',
  styleUrls: ['./production-list-full-statistics.component.scss']
})
export class ProductionListFullStatisticsComponent implements OnInit {
  isLoading = true;
  lists: List[] = [];

  constructor(
    private dialogRef: MatDialogRef<ProductionListFullStatisticsComponent>,
    private readonly listService: ListService,
    @Inject(MAT_DIALOG_DATA) public data: { lists: List[] },
  ) {
  }

  ngOnInit(): void {
    this.listService.getFullStatistics(this.data.lists.map(l => l.id).join(',')).pipe(
      tap(statistics => this.generateStatistic(statistics)),
      tap(() => this.isLoading = false)
    ).subscribe();
  }

  generateStatistic(statistics: any[]) {
    this.lists = this.data.lists;
    this.lists.forEach(l => l.full_statistics = statistics.find(s => s.id === l.id))
  }

  onShowStatisticsForChains(
    id: number,
    accountType: ProductionListAccountingType,
    positionType: ProductionListPositionType = null
  ) {
    const send = {
      accounting_type: accountType,
      positions_type: positionType,
    };
    this.listService.showStatisticsForChainsModal(id, send).subscribe();
  }

}
