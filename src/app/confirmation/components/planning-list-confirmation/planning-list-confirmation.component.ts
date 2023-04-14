import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pek-planning-list-confirmation',
  templateUrl: './planning-list-confirmation.component.html',
  styleUrls: ['./planning-list-confirmation.component.scss']
})
export class PlanningListConfirmationComponent implements OnInit {
  confirmationListCount: string;
  correctionsListCount: string;

  constructor() { }

  ngOnInit(): void {
  }

}
