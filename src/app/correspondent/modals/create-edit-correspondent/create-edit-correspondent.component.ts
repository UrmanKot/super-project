import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CorrespondentTypes} from '../../enum/correspondent-types.enum';
import {Correspondent, CorrespondentFiles} from '../../models/correspondent';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CorrespondentService} from '../../services/correspondent.service';
import {AdapterService} from '@shared/services/adapter.service';
import {CorrespondentsCategory} from '../../models/correspondents-category';
import {ModalService} from '@shared/services/modal.service';
import {UploadFilePickerComponent} from '@shared/components/upload-file-picker/upload-file-picker.component';

@Component({
  selector: 'pek-create-edit-correspondent',
  templateUrl: './create-edit-correspondent.component.html',
  styleUrls: ['./create-edit-correspondent.component.scss']
})
export class CreateEditCorrespondentComponent implements OnInit {
  @ViewChild('filePicker') filePicker: UploadFilePickerComponent;
  type: CorrespondentTypes;
  types = CorrespondentTypes;

  form: FormGroup;
  isSaving = false;
  correspondentFiles: CorrespondentFiles[];
  startDate = null;
  filesIdsToDelete: number[] = [];
  files: File[] = [];
  constructor(
    private fb: FormBuilder,
    private correspondentService: CorrespondentService,
    private dialogRef: MatDialogRef<CreateEditCorrespondentComponent>,
    private adapterService: AdapterService,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, correspondentType: CorrespondentTypes, correspondent: Partial<Correspondent> }
  ) {
    this.type = this.data.correspondentType;
    this.form = fb.group({
      date_received: [null, [Validators.required]],
      description: [''],
      category: [null],
    });

    if (this.type === this.types.INCOMING) {
      this.form.addControl('external_id', new FormControl(null, [Validators.required]));
    }

    if (this.data.type === 'edit') {
      this.correspondentFiles = [...this.data.correspondent.files];
      this.form.addControl('id', new FormControl(null));
      this.form.get('date_received').patchValue(new Date(this.data.correspondent.date_received));
      this.form.get('id').patchValue(this.data.correspondent.id);
      this.form.get('description').patchValue(this.data.correspondent.description);
      if (this.data.correspondent.category) {
        this.form.get('category').patchValue(this.data.correspondent.category.id);
      }

      if (this.type === this.types.INCOMING) {
        this.form.get('external_id').patchValue(this.data.correspondent.external_id);
      }
    }
  }

  ngOnInit(): void {
  }

  setStartValue(start) {
    if (start.value) {
      this.form.get('date_received').patchValue(start.value);
      this.startDate = start.value;
    }
  }

  onSelectCategory(category: CorrespondentsCategory) {
    if (category) {
      this.form.get('category').patchValue(category.id);
    } else {
      this.form.get('category').patchValue(null);
    }
  }

  onBasicUpload($event: any) {

  }

  deleteFiles(): void {
    this.filesIdsToDelete.forEach(id => {
      this.correspondentService.delete_file(this.type, id).subscribe();
    });
  }

  filesSelected(files: File[]) {
    this.files = files;
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  downloadFile(file: any) {
    this.correspondentService.download_file(this.type, file.id).subscribe(response => {
      const filename = this.getName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }

  isFileToBeDisplayed(id: number): boolean {
    return this.filesIdsToDelete.findIndex(el => el === id) < 0;
  }

  deleteCorrespondentFile(id: any) {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        const index = this.correspondentFiles.findIndex(el => el.id === id);
        this.correspondentFiles.splice(index, 1);
        this.filesIdsToDelete.push(id);
      }
    });
  }

  trim(field: string) {
    this.form.get(field).patchValue(this.form.get(field).value.trim());
  }

  attachFiles(correspondentId: number): void {
    this.files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('correspondent', correspondentId.toString());
      this.correspondentService.attach(this.type, formData).subscribe((res) => {
      });
    });
  }

  add(): void {
    if (this.form.get('external_id')) {
      this.trim('external_id');
    }
    this.correspondentService.create(this.type, this.form.value).subscribe(res => {
      this.deleteFiles();
      this.attachFiles(res.data.id);
      this.dialogRef.close(res);
    });
  }

  change(): void {
    if (this.form.get('external_id')) {
      this.trim('external_id');
    }
    this.correspondentService.update(this.type, this.form.value).subscribe(res => {
      this.deleteFiles();
      this.attachFiles(res.data.id);
      this.dialogRef.close(res);
    });
  }

  onSave() {
    if (this.data.type === 'edit') {
      this.change();
    } else {
      this.add();
    }
  }

  viewFiles() {
    const data: {links: any, files: any} = {links: this.correspondentFiles, files: []};
    this.correspondentService.viewFiles(data);
  }

  fileAdded(file: File) {
    this.filePicker.addPhotoToList(file);
  }
}
