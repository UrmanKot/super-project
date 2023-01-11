import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CompanyFileService} from '../../services/company-file.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-add-company-file-modal',
  templateUrl: './add-company-file-modal.component.html',
  styleUrls: ['./add-company-file-modal.component.scss']
})
export class AddCompanyFileModalComponent implements OnInit {
  isSaving = false;
  uploadFile: File = null;

  constructor(
    private readonly companyFileService: CompanyFileService,
    private dialogRef: MatDialogRef<AddCompanyFileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { companyId: number }
  ) {
  }

  ngOnInit(): void {
  }

  onSave() {
    this.isSaving = true;

    const formData = new FormData();
    formData.append('file', this.uploadFile);
    formData.append('company', this.data.companyId.toString());
    this.companyFileService.create(formData).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(file => this.dialogRef.close(file));
  }

  onSelectFiles(files: File[]) {
    if (files) {
      this.uploadFile = files[0];
    }
  }

  onRemoveFile() {
    this.uploadFile = null;
  }

  fileAdded(file: File) {
    this.uploadFile = file;
    this.onSave();
  }
}
