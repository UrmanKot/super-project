import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'pek-manufacturing-plan',
  templateUrl: './manufacturing-plan.component.html',
  styleUrls: ['./manufacturing-plan.component.scss']
})
export class ManufacturingPlanComponent implements OnInit {
  rootId: string;
  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('rootId')),
      tap(id => this.rootId = id),
    ).subscribe();
  }

}
