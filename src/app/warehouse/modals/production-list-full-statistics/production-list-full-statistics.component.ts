import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListService} from '../../services/list.service';
import {List} from '../../models/list';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'pek-production-list-full-statistics',
  templateUrl: './production-list-full-statistics.component.html',
  styleUrls: ['./production-list-full-statistics.component.scss']
})
export class ProductionListFullStatisticsComponent implements OnInit {
  isLoading = true;
  statistic: any;

  constructor(
    private dialogRef: MatDialogRef<ProductionListFullStatisticsComponent>,
    private readonly listService: ListService,
    @Inject(MAT_DIALOG_DATA) public data: { list: List },
  ) {
  }

  ngOnInit(): void {
    this.listService.getFullStatistics(this.data.list.id).pipe(
      tap(statistic => this.statistic = statistic),
      tap(() => this.isLoading = false)
    ).subscribe();
  }

}
