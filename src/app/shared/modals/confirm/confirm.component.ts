import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export type ConfirmType = 'default' | 'success' | 'danger'

@Component({
  selector: 'pek-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: { type: ConfirmType, btnConfirmText: string }) {
  }

  ngOnInit(): void {
  }

}
