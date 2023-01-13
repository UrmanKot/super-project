import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {takeUntil} from 'rxjs';

@Component({
  selector: 'pek-procurement-order-page',
  templateUrl: './procurement-order-page.component.html',
  styleUrls: ['./procurement-order-page.component.scss']
})
export class ProcurementOrderPageComponent implements OnInit {
  orderId: number;

  constructor(
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
    ).subscribe()
  }
}
