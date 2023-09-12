import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SalesChainService} from "../../services/sales-chain-service";
import {SalesFile} from "../../models/sales-chain";
import {SalesFileService} from "../../services/sales-file.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-create-sales-file-modal',
  templateUrl: './create-sales-file-modal.component.html',
  styleUrls: ['./create-sales-file-modal.component.scss']
})
export class CreateSalesFileModalComponent implements OnInit {
  uploadFiles: File[] = [];
  files: SalesFile[] = [];

  isLoading = true;
  isPending = false;

  constructor(
    private readonly salesChainService: SalesChainService,
    private dialogRef: MatDialogRef<CreateSalesFileModalComponent>,
    private salesFileService: SalesFileService,
    @Inject(MAT_DIALOG_DATA) public data: { companyId: number }
  ) {
  }

  ngOnInit(): void {
  }

  onSelectFiles(files: File[]) {
    this.uploadFiles = files;
  }

  onUploadFiles() {
    this.isPending = true
    this.salesFileService.upload(this.uploadFiles).pipe(
      finalize(() => this.isPending = false)
    ).subscribe(res => {
      this.dialogRef.close(true)
    })
  }
}
