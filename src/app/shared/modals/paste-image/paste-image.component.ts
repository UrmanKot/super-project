import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'pek-paste-image',
  templateUrl: './paste-image.component.html',
  styleUrls: ['./paste-image.component.scss']
})
export class PasteImageComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [null]
  });
  file: File;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PasteImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageSrc: string | ArrayBuffer, file: File }
  ) {
    this.file = data.file;
  }

  ngOnInit(): void {
  }

  acceptChanges() {
    if (this.form.get('name').value) {
      const name = this.form.get('name').value;
      this.file = this.renameFile(this.file, name);
    }
    this.dialogRef.close(this.file);
  }

  renameFile(originalFile, newName): File {
    const splited = originalFile.name.split('.');
    const extension = splited[splited.length - 1];
    return new File([originalFile], newName + '.' + extension, {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    });
  }
}
