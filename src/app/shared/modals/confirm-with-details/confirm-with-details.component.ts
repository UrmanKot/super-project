import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export type ConfirmWithDetailsType = 'default' | 'success' | 'danger'

@Component({
  selector: 'pek-confirm-with-details',
  templateUrl: './confirm-with-details.component.html',
  styleUrls: ['./confirm-with-details.component.scss']
})
export class ConfirmWithDetailsComponent implements OnInit {
  /*
  * Pass Array of strings as information about what elements will be changed
  * */
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: { type: ConfirmWithDetailsType, btnConfirmText: string, itemsToDelete: string[] }) {
  }

  ngOnInit(): void {
  }

}
